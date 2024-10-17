import mongoose from "mongoose";
import path from "path";
import fs from "fs";
import http from "http";
import cors from "cors";
import express from "express";
import Chat from "./models/Chat.js";
import Message from "./models/Message.js";
import { fileURLToPath } from "url";
import multer from "multer";

// Step 2: Create an Express app
const app = express();
const corsOptions = {
  origin: "*", // Allow only this origin
};
app.use(cors(corsOptions));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Step 3: Define the port (default to 3000 if not provided by an environment variable)
const port = process.env.PORT || 8001;

const historyChats = [
  {
    _id: 29381739872916,
    created: new Date(2024, 8, 19),
    updated: new Date(2024, 9, 3),
    conversation: [
      {
        question: "Can I wear this pants3333 bla bla bla1",
        response: "Yes, the pants fits to you",
      },
      {
        question: "Can I wear this jacket",
        response: "Yes, the jacket fits to you",
      },
      {
        question: "Can I wear this hat",
        response: "Yes, the hat fits to you",
      },
    ],
  },
  {
    _id: 832781379812090,
    created: new Date(2024, 8, 11),
    updated: new Date(2024, 9, 17),
    conversation: [
      {
        question:
          "Can I wear this t-shirt bla bla bla la bla bla b la bla bla b la bla bla b la bla bla b la bla bla b 2",
        response: "Yes, the pants fits to you",
      },
      {
        question: "Can I wear this jacket",
        response: "Yes, the jacket fits to you",
      },
      {
        question: "Can I wear this hat",
        response: "Yes, the hat fits to you",
      },
    ],
  },
  {
    _id: 289791790838701,
    created: new Date(2024, 8, 11),
    updated: new Date(2024, 9, 2),
    conversation: [
      {
        question:
          "Can I wear this t-shirt bla bla bla la bla bla b la bla bla b la bla bla b la bla bla b la bla bla b 3",
        response: "Yes, the pants fits to you",
      },
      {
        question: "Can I wear this jacket",
        response: "Yes, the jacket fits to you",
      },
      {
        question: "Can I wear this hat",
        response: "Yes, the hat fits to you",
      },
    ],
  },
  {
    _id: 821789137,
    created: new Date(2024, 8, 11),
    updated: new Date(2024, 8, 30),
    conversation: [
      {
        question:
          "Can I wear this t-shirt bla bla bla la bla bla b la bla bla b la bla bla b la bla bla b la bla bla b 4",
        response: "Yes, the pants fits to you",
      },
      {
        question: "Can I wear this jacket",
        response: "Yes, the jacket fits to you",
      },
      {
        question: "Can I wear this hat",
        response: "Yes, the hat fits to you",
      },
    ],
  },
  {
    _id: 90727183094902,
    created: new Date(2024, 8, 11),
    updated: new Date(2024, 7, 10),
    conversation: [
      {
        question:
          "Can I wear this t-shirt bla bla bla la bla bla b la bla bla b la bla bla b la bla bla b la bla bla b 5",
        response: "Yes, the pants fits to you",
      },
      {
        question: "Can I wear this jacket",
        response: "Yes, the jacket fits to you",
      },
      {
        question: "Can I wear this hat",
        response: "Yes, the hat fits to you",
      },
    ],
  },
];

const mongoURI =
  "mongodb+srv://alexurluescu23:eX9tmxrhhenY1Yol@cluster0.5g1mf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder to store uploaded images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the file name
  },
});

const upload = multer({ storage: storage });
// Endpoint to handle image upload
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    res.json({
      message: "File uploaded successfully",
      fileUrl: `/uploads/${req.file.filename}`,
    });
  } catch (error) {
    res.status(500).send("Error uploading the file");
  }
});

// Serve the uploaded images statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Step 4: Set up a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/script", (req, res) => {
  const filePath = path.join(__dirname, "public", "script.js");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Error loading script.js");
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/javascript");
      res.end(data);
    }
  });
});

app.post("/history", (req, res) => {
  return res.json({ data: historyChats });
});

app.post("/chat", async (req, res) => {
  try {
    console.log("intra");
    console.log("req.body", req.body);

    const { startDate, title, contextId } = req.body;

    console.log("date", startDate);
    console.log("title", title);

    const newChat = new Chat({ startDate, title, contextId });

    console.log("newChat", newChat);
    await newChat.save();
    return res.json({ data: newChat });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/create-chat", async (req, res) => {
  try {
    console.log("intra in create-chat");
    console.log("req.body", req.body);

    const { messages, userId } = req.body;

    const startDate = messages[0].date;
    const title = messages[0].message;

    console.log("date", startDate);
    console.log("title", title);
    console.log("userId", userId);

    const newChat = new Chat({ startDate, title, contextId: userId });

    const messagesLinkedToNewChat = messages.map((message) => {
      const messageObject = {
        ...message,
        chatId: newChat._id,
      };

      return messageObject;
    });

    const result = await Message.insertMany(messagesLinkedToNewChat);

    console.log("newChat", newChat);
    console.log("messagesLinkedToNewChat", messagesLinkedToNewChat);

    await newChat.save();
    return res.json({ data: newChat, messages: result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.delete("/chat", async (req, res) => {
  try {
    console.log("intra in delete");
    console.log("req.body", req.body);

    const { chats, userId } = req.body;

    const result = await Chat.deleteMany({ _id: { $in: chats } });
    const remainingChats = await Chat.find({ contextId: userId });

    console.log("result", result);
    console.log("remainingChats", remainingChats);

    return res.json({ data: remainingChats });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/message", async (req, res) => {
  try {
    console.log("intra");

    console.log("req.body", req.body);

    const { date, chatId, message, sender } = req.body;

    const newMessage = new Message({ date, chatId, message, sender });
    await newMessage.save();

    console.log("newChat", newMessage);
    return res.json({ data: newMessage });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/response", async (req, res) => {
  try {
    console.log("intra");

    console.log("req.body", req.body);

    const { chatId, message } = req.body;
    console.log("message", message);

    const dummyMessage = "Bot message";
    const date = new Date();
    const sender = "bot";

    setTimeout(async () => {
      const botResponse = new Message({
        date,
        chatId,
        message: dummyMessage,
        sender,
      });
      await botResponse.save();

      console.log("iasa");

      return res.json({ data: botResponse });
    }, 10000);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/chats", async (req, res) => {
  try {
    console.log("intra");

    const { contextId } = req.body;

    console.log("contextId", contextId);

    const chats = await Chat.find({ contextId: contextId });

    console.log("chats", chats);

    return res.json({ data: chats });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/chatid", async (req, res) => {
  try {
    // const chatId = req.params.id;

    const { chatId } = req.body;

    const messages = await Message.find({ chatId: chatId });

    console.log("messages", messages);

    res.json({ data: messages });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get("/chat", async (req, res) => {
  try {
    res.json({ data: "Hello there!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB cluster");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

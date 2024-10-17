/*! For license information please see main.js.LICENSE.txt */
(() => {
  var e,
    t,
    n = {
      577: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          i = n.n(a)()(o());
        i.push([
          e.id,
          ".chat {\n  border: 1px solid #e0e0e0;\n  padding: 8px;\n  border-radius: 5px;\n}\n\n.chat:hover {\n  border: 1px solid #4096ff;\n  cursor: pointer;\n}\n\n.main-chat-container {\n  padding: 0px 20px;\n}\n\n.w-100 {\n  width: 100%;\n}\n\n.color-gray {\n  color: #666565;\n}\n\n.chat-container-wrapper {\n  padding: 20px 0px;\n}\n",
          "",
        ]);
        const l = i;
      },
      28: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(81),
          o = n.n(r),
          a = n(645),
          i = n.n(a)()(o());
        i.push([
          e.id,
          '* {\n  font-family: "Roboto";\n}\n\n.chat-container {\n  width: 400px;\n  /* border: 1px solid red; */\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  height: 100%;\n}\n\n.chat-app-container {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: white;\n  z-index: 1000;\n}\n\n.message-wrapper {\n  padding: 20px;\n  background-color: #f6f6f6;\n}\n\n.message-list {\n  flex: 1;\n  padding: 10px;\n  overflow-y: auto;\n  background-color: #fff;\n}\n\n.question {\n  text-align: right;\n}\n\n.question div {\n  margin-bottom: 15px;\n  padding: 10px 15px;\n  background-color: #713189;\n  border-radius: 20px;\n  text-align: right;\n  margin-left: 20px;\n  display: inline-block;\n  color: #fff;\n  border-bottom-right-radius: 0;\n}\n\n.followup-questions-wrapper {\n  display: flex;\n  align-items: flex-start;\n  padding: 10px;\n  gap: 10px;\n}\n\n.followup-question {\n  padding: 10px 15px;\n  background-color: #f0f0f0;\n  border-radius: 20px;\n  margin: 5px;\n  display: inline-block;\n  width: auto;\n  cursor: pointer;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);\n}\n\n.followup-question:hover {\n  background-color: #e0e0e0;\n}\n\n.message {\n  margin-bottom: 15px;\n  padding: 10px;\n  border: 1px solid #ddd;\n  background-color: #f0f0f0;\n  border-radius: 20px;\n  border-bottom-left-radius: 0;\n  margin-right: 20px;\n}\n\n.message strong {\n  display: inline-block;\n  width: 100px;\n  font-weight: bold;\n}\n\n.message-input-form {\n  position: relative;\n  display: flex;\n  border: 1px solid #ccc;\n  border-radius: 20px;\n}\n\n.message-input {\n  flex: 1;\n  padding: 12px 50px 12px 12px;\n  border: none;\n  border-radius: 20px;\n}\n\n.send-button {\n  height: 36px;\n  width: 36px;\n  position: absolute;\n  right: 2px;\n  top: 50%;\n  padding: 5px;\n  border: none;\n  background-color: #713189;\n  color: white;\n  cursor: pointer;\n  border-radius: 20px;\n  margin-top: -18px;\n  z-index: 20;\n}\n\n.send-button:hover {\n  background-color: #4cae4c;\n}\n\n.trigger-icon {\n  cursor: pointer;\n  font-size: 20px;\n  background-color: transparent;\n  border: 1px solid #ebe8e8;\n  padding: 10px;\n  border-radius: 50%; /* Circular button */\n  transition: all 0.3s ease-in-out; /* Smooth transitions */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative; /* For positioning the weaves */\n  overflow: hidden; /* Prevent wave animation overflow */\n}\n\n.trigger-icon::before,\n.trigger-icon::after {\n  content: "";\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  background-color: #71318934; /* Light blue waves */\n  border-radius: 50%;\n  animation: weave 4s infinite ease-in-out; /* Infinite weave animation */\n  z-index: 0; /* Behind the icon */\n}\n\n.trigger-icon::after {\n  animation-delay: 2s; /* Delay second weave for offset */\n}\n\n.trigger-icon:hover::before,\n.trigger-icon:hover::after {\n  background-color: #71318932; /* More prominent waves on hover */\n}\n\n.trigger-icon:hover {\n  background-color: #f1f3f4;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transform: scale(1.1) rotate(360deg); /* Rotate button on hover */\n  border-color: transparent;\n}\n\n.trigger-icon:active {\n  transform: scale(0.95);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n/* Weaving animation */\n@keyframes weave {\n  0% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n  50% {\n    transform: translate(50%, 50%) scale(1.5);\n  }\n  100% {\n    transform: translate(-50%, -50%) scale(1);\n  }\n}\n\n.navbar-wrapper {\n  border-right: 1px solid #efefef;\n}\n\n.navbar-icons-wrapper {\n  padding: 20px;\n  cursor: pointer;\n}\n\n.navbar-icons-wrapper:hover {\n  background-color: #f5f5f5;\n}\n\n.navbar-icons {\n  font-size: 25px;\n}\n\n.dots {\n  font-size: 30px;\n  font-weight: bold;\n  letter-spacing: 5px;\n}\n\n.dot {\n  display: inline-block;\n  animation: grow-shrink 1.5s infinite ease-in-out;\n}\n\n.dot:nth-child(1) {\n  animation-delay: 0s;\n}\n\n.dot:nth-child(2) {\n  animation-delay: 0.3s;\n}\n\n.dot:nth-child(3) {\n  animation-delay: 0.6s;\n}\n\n@keyframes grow-shrink {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.5);\n  }\n}\n',
          "",
        ]);
        const l = i;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var l = 0; l < this.length; l++) {
                  var u = this[l][0];
                  null != u && (i[u] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var s = [].concat(e[c]);
                (r && i[s[0]]) ||
                  (void 0 !== a &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = a)),
                  n &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = n))
                      : (s[2] = n)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      448: (e, t, n) => {
        "use strict";
        var r = n(294),
          o = n(840);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var s = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          O = Symbol.for("react.provider"),
          P = Symbol.for("react.context"),
          M = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          _ = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var j = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var z = Symbol.iterator;
        function A(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (z && e[z]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          I = Object.assign;
        function F(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var R = !1;
        function H(e, t) {
          if (!e || R) return "";
          R = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && "string" == typeof t.stack) {
              for (
                var o = t.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var u = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (R = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return H(e.type, !1);
            case 11:
              return H(e.type.render, !1);
            case 1:
              return H(e.type, !0);
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case T:
              return "Suspense";
            case _:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case O:
                return (e._context.displayName || "Context") + ".Provider";
              case M:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (e) {}
            }
          return null;
        }
        function U(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" == typeof t)
                return t.displayName || t.name || null;
              if ("string" == typeof t) return t;
          }
          return null;
        }
        function $(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function q(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = $(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          K(e, t);
          var n = $(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, $(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + $(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (te(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: $(n) };
        }
        function ae(e, t) {
          var n = $(t.value),
            r = $(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          se,
          fe =
            ((se = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(a(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = wo(e))) {
            if ("function" != typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Oe(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Pe() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Me(e, t) {
          return e(t);
        }
        function Te() {}
        var _e = !1;
        function Ne(e, t, n) {
          if (_e) return e(t, n);
          _e = !0;
          try {
            return Me(e, t, n);
          } finally {
            (_e = !1), (null !== Se || null !== Ee) && (Te(), Pe());
          }
        }
        function Le(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var je = !1;
        if (s)
          try {
            var ze = {};
            Object.defineProperty(ze, "passive", {
              get: function () {
                je = !0;
              },
            }),
              window.addEventListener("test", ze, ze),
              window.removeEventListener("test", ze, ze);
          } catch (se) {
            je = !1;
          }
        function Ae(e, t, n, r, o, a, i, l, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            this.onError(e);
          }
        }
        var De = !1,
          Ie = null,
          Fe = !1,
          Re = null,
          He = {
            onError: function (e) {
              (De = !0), (Ie = e);
            },
          };
        function Be(e, t, n, r, o, a, i, l, u) {
          (De = !1), (Ie = null), Ae.apply(He, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function $e(e) {
          if (We(e) !== e) throw Error(a(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return $e(o), e;
                    if (i === r) return $e(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ge(e)
            : null;
        }
        function Ge(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ge(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = o.unstable_scheduleCallback,
          Xe = o.unstable_cancelCallback,
          qe = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Ke = o.unstable_now,
          Ze = o.unstable_getCurrentPriorityLevel,
          Je = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          nt = o.unstable_LowPriority,
          rt = o.unstable_IdlePriority,
          ot = null,
          at = null,
          it = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2,
          ct = 64,
          st = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = ft(l)) : 0 != (a &= i) && (r = ft(a));
          } else 0 != (i = n & ~o) ? (r = ft(i)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 == (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 != (4194240 & a)))
          )
            return t;
          if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ct;
          return 0 == (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 != (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          Et,
          Ct,
          Ot = !1,
          Pt = [],
          Mt = null,
          Tt = null,
          _t = null,
          Nt = new Map(),
          Lt = new Map(),
          jt = [],
          zt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Mt = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              _t = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = wo(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function It(e) {
          var t = bo(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = wo(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Rt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Ht() {
          (Ot = !1),
            null !== Mt && Ft(Mt) && (Mt = null),
            null !== Tt && Ft(Tt) && (Tt = null),
            null !== _t && Ft(_t) && (_t = null),
            Nt.forEach(Rt),
            Lt.forEach(Rt);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ot ||
              ((Ot = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Ht)));
        }
        function Wt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Pt.length) {
            Bt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
              var r = Pt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Mt && Bt(Mt, e),
              null !== Tt && Bt(Tt, e),
              null !== _t && Bt(_t, e),
              Nt.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < jt.length;
            n++
          )
            (r = jt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < jt.length && null === (n = jt[0]).blockedOn; )
            It(n), null === n.blockedOn && jt.shift();
        }
        var Ut = w.ReactCurrentBatchConfig,
          $t = !0;
        function Vt(e, t, n, r) {
          var o = bt,
            a = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = o), (Ut.transition = a);
          }
        }
        function Gt(e, t, n, r) {
          var o = bt,
            a = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = o), (Ut.transition = a);
          }
        }
        function Qt(e, t, n, r) {
          if ($t) {
            var o = qt(e, t, n, r);
            if (null === o) $r(e, t, r, Xt, n), At(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Mt = Dt(Mt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Tt = Dt(Tt, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (_t = Dt(_t, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return Nt.set(a, Dt(Nt.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      Lt.set(a, Dt(Lt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < zt.indexOf(e))) {
              for (; null !== o; ) {
                var a = wo(o);
                if (
                  (null !== a && xt(a),
                  null === (a = qt(e, t, n, r)) && $r(e, t, r, Xt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else $r(e, t, r, null, n);
          }
        }
        var Xt = null;
        function qt(e, t, n, r) {
          if (((Xt = null), null !== (e = bo((e = xe(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            o = "value" in Kt ? Kt.value : Kt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (Jt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          un,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = on(cn),
          fn = I({}, cn, { view: 0, detail: 0 }),
          dn = on(fn),
          pn = I({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((an = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = an = 0),
                    (un = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = on(pn),
          mn = on(I({}, pn, { dataTransfer: 0 })),
          gn = on(I({}, fn, { relatedTarget: 0 })),
          vn = on(
            I({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = I({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(yn),
          wn = on(I({}, cn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var On = I({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = on(On),
          Mn = on(
            I({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tn = on(
            I({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          _n = on(
            I({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = I({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = on(Nn),
          jn = [9, 13, 27, 32],
          zn = s && "CompositionEvent" in window,
          An = null;
        s && "documentMode" in document && (An = document.documentMode);
        var Dn = s && "TextEvent" in window && !An,
          In = s && (!zn || (An && 8 < An && 11 >= An)),
          Fn = String.fromCharCode(32),
          Rn = !1;
        function Hn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== jn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1,
          Un = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          Oe(r),
            0 < (t = Gr(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          Qn = null;
        function Xn(e) {
          Fr(e, 0);
        }
        function qn(e) {
          if (Q(xo(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (s) {
          var Zn;
          if (s) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" == typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Kn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Gn && (Gn.detachEvent("onpropertychange", nr), (Qn = Gn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && qn(Qn)) {
            var t = [];
            Vn(t, Qn, e, xe(e)), Ne(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), (Gn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function or(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return qn(Qn);
        }
        function ar(e, t) {
          if ("click" === e) return qn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return qn(t);
        }
        var lr =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!f.call(t, o) || !lr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = sr(n, a));
                var i = sr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" == typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = s && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== X(r) ||
            ((r =
              "selectionStart" in (r = gr) && pr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Gr(vr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        s &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Or = Cr("animationend"),
          Pr = Cr("animationiteration"),
          Mr = Cr("animationstart"),
          Tr = Cr("transitionend"),
          _r = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Lr(e, t) {
          _r.set(e, t), u(t, [e]);
        }
        for (var jr = 0; jr < Nr.length; jr++) {
          var zr = Nr[jr];
          Lr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        }
        Lr(Or, "onAnimationEnd"),
          Lr(Pr, "onAnimationIteration"),
          Lr(Mr, "onAnimationStart"),
          Lr("dblclick", "onDoubleClick"),
          Lr("focusin", "onFocus"),
          Lr("focusout", "onBlur"),
          Lr(Tr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, u, c) {
              if ((Be.apply(this, arguments), De)) {
                if (!De) throw Error(a(198));
                var s = Ie;
                (De = !1), (Ie = null), Fe || ((Fe = !0), (Re = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), u !== a && o.isPropagationStopped()))
                    break e;
                  Ir(o, l, c), (a = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    u !== a && o.isPropagationStopped())
                  )
                    break e;
                  Ir(o, l, c), (a = u);
                }
            }
          }
          if (Fe) throw ((e = Re), (Fe = !1), (Re = null), e);
        }
        function Rr(e, t) {
          var n = t[go];
          void 0 === n && (n = t[go] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function Hr(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Hr(t, !1, e), Hr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Hr("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var o = Vt;
              break;
            case 4:
              o = Gt;
              break;
            default:
              o = Qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !je ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function $r(e, t, n, r, o) {
          var a = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === o ||
                        (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = bo(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = a,
              o = xe(n),
              i = [];
            e: {
              var l = _r.get(e);
              if (void 0 !== l) {
                var u = sn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Pn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Tn;
                    break;
                  case Or:
                  case Pr:
                  case Mr:
                    u = vn;
                    break;
                  case Tr:
                    u = _n;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Mn;
                }
                var s = 0 != (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== l ? l + "Capture" : null) : l;
                s = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Le(h, d)) &&
                        s.push(Vr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < s.length &&
                  ((l = new u(l, c, null, n, o)),
                  i.push({ event: l, listeners: s }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!bo(c) && !c[mo])) &&
                  (u || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? bo(c)
                          : null) &&
                        (c !== (f = We(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Mn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : xo(u)),
                  (p = null == c ? l : xo(c)),
                  ((l = new s(m, h + "leave", u, n, o)).target = f),
                  (l.relatedTarget = p),
                  (m = null),
                  bo(o) === r &&
                    (((s = new s(d, h + "enter", c, n, o)).target = p),
                    (s.relatedTarget = f),
                    (m = s)),
                  (f = m),
                  u && c)
                )
                  e: {
                    for (d = c, h = 0, p = s = u; p; p = Qr(p)) h++;
                    for (p = 0, m = d; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (s = Qr(s)), h--;
                    for (; 0 < p - h; ) (d = Qr(d)), p--;
                    for (; h--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = Qr(s)), (d = Qr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && Xr(i, l, u, s, !1),
                  null !== c && null !== f && Xr(i, f, c, s, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? xo(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var g = Yn;
              else if ($n(l))
                if (Kn) g = ir;
                else {
                  g = or;
                  var v = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = ar);
              switch (
                (g && (g = g(e, r))
                  ? Vn(i, g, n, o)
                  : (v && v(e, l, r),
                    "focusout" === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (v = r ? xo(r) : window),
                e)
              ) {
                case "focusin":
                  ($n(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, o);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, o);
              }
              var y;
              if (zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Wn
                  ? Hn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (In &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Wn && (y = en())
                    : ((Zt = "value" in (Kt = o) ? Kt.value : Kt.textContent),
                      (Wn = !0))),
                0 < (v = Gr(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  i.push({ event: b, listeners: v }),
                  (y || null !== (y = Bn(n))) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Rn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Rn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!zn && Hn(e, t))
                          ? ((e = en()), (Jt = Zt = Kt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return In && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Gr(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Fr(i, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Gr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Le(e, n)) && r.unshift(Vr(e, a, o)),
              null != (a = Le(e, t)) && r.push(Vr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              c = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              o
                ? null != (u = Le(n, a)) && i.unshift(Vr(n, u, l))
                : o || (null != (u = Le(n, a)) && i.push(Vr(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var qr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(qr, "\n")
            .replace(Yr, "");
        }
        function Zr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(a(425));
        }
        function Jr() {}
        var eo = null,
          to = null;
        function no(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ro = "function" == typeof setTimeout ? setTimeout : void 0,
          oo = "function" == typeof clearTimeout ? clearTimeout : void 0,
          ao = "function" == typeof Promise ? Promise : void 0,
          io =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : void 0 !== ao
              ? function (e) {
                  return ao.resolve(null).then(e).catch(lo);
                }
              : ro;
        function lo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function uo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Wt(t);
        }
        function co(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function so(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = "__reactFiber$" + fo,
          ho = "__reactProps$" + fo,
          mo = "__reactContainer$" + fo,
          go = "__reactEvents$" + fo,
          vo = "__reactListeners$" + fo,
          yo = "__reactHandles$" + fo;
        function bo(e) {
          var t = e[po];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[mo] || n[po])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = so(e); null !== e; ) {
                  if ((n = e[po])) return n;
                  e = so(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function wo(e) {
          return !(e = e[po] || e[mo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[ho] || null;
        }
        var So = [],
          Eo = -1;
        function Co(e) {
          return { current: e };
        }
        function Oo(e) {
          0 > Eo || ((e.current = So[Eo]), (So[Eo] = null), Eo--);
        }
        function Po(e, t) {
          Eo++, (So[Eo] = e.current), (e.current = t);
        }
        var Mo = {},
          To = Co(Mo),
          _o = Co(!1),
          No = Mo;
        function Lo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Mo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function jo(e) {
          return null != e.childContextTypes;
        }
        function zo() {
          Oo(_o), Oo(To);
        }
        function Ao(e, t, n) {
          if (To.current !== Mo) throw Error(a(168));
          Po(To, t), Po(_o, n);
        }
        function Do(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, U(e) || "Unknown", o));
          return I({}, n, r);
        }
        function Io(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Mo),
            (No = To.current),
            Po(To, e),
            Po(_o, _o.current),
            !0
          );
        }
        function Fo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Do(e, t, No)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Oo(_o),
              Oo(To),
              Po(To, e))
            : Oo(_o),
            Po(_o, n);
        }
        var Ro = null,
          Ho = !1,
          Bo = !1;
        function Wo(e) {
          null === Ro ? (Ro = [e]) : Ro.push(e);
        }
        function Uo() {
          if (!Bo && null !== Ro) {
            Bo = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ro;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ro = null), (Ho = !1);
            } catch (t) {
              throw (null !== Ro && (Ro = Ro.slice(e + 1)), Qe(Je, Uo), t);
            } finally {
              (bt = t), (Bo = !1);
            }
          }
          return null;
        }
        var $o = [],
          Vo = 0,
          Go = null,
          Qo = 0,
          Xo = [],
          qo = 0,
          Yo = null,
          Ko = 1,
          Zo = "";
        function Jo(e, t) {
          ($o[Vo++] = Qo), ($o[Vo++] = Go), (Go = e), (Qo = t);
        }
        function ea(e, t, n) {
          (Xo[qo++] = Ko), (Xo[qo++] = Zo), (Xo[qo++] = Yo), (Yo = e);
          var r = Ko;
          e = Zo;
          var o = 32 - it(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Ko = (1 << (32 - it(t) + o)) | (n << o) | r),
              (Zo = a + e);
          } else (Ko = (1 << a) | (n << o) | r), (Zo = e);
        }
        function ta(e) {
          null !== e.return && (Jo(e, 1), ea(e, 1, 0));
        }
        function na(e) {
          for (; e === Go; )
            (Go = $o[--Vo]), ($o[Vo] = null), (Qo = $o[--Vo]), ($o[Vo] = null);
          for (; e === Yo; )
            (Yo = Xo[--qo]),
              (Xo[qo] = null),
              (Zo = Xo[--qo]),
              (Xo[qo] = null),
              (Ko = Xo[--qo]),
              (Xo[qo] = null);
        }
        var ra = null,
          oa = null,
          aa = !1,
          ia = null;
        function la(e, t) {
          var n = Lc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ua(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ra = e), (oa = co(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ra = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yo ? { id: Ko, overflow: Zo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ra = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ca(e) {
          return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function sa(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var n = t;
              if (!ua(e, t)) {
                if (ca(e)) throw Error(a(418));
                t = co(n.nextSibling);
                var r = ra;
                t && ua(e, t)
                  ? la(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e));
              }
            } else {
              if (ca(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (ra = e);
            }
          }
        }
        function fa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ra = e;
        }
        function da(e) {
          if (e !== ra) return !1;
          if (!aa) return fa(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !no(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ca(e)) throw (pa(), Error(a(418)));
            for (; t; ) la(e, t), (t = co(t.nextSibling));
          }
          if ((fa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      oa = co(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = ra ? co(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = co(e.nextSibling);
        }
        function ha() {
          (oa = ra = null), (aa = !1);
        }
        function ma(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ga = w.ReactCurrentBatchConfig;
        function va(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var ya = Co(null),
          ba = null,
          wa = null,
          xa = null;
        function ka() {
          xa = wa = ba = null;
        }
        function Sa(e) {
          var t = ya.current;
          Oo(ya), (e._currentValue = t);
        }
        function Ea(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ca(e, t) {
          (ba = e),
            (xa = wa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function Oa(e) {
          var t = e._currentValue;
          if (xa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === wa)
            ) {
              if (null === ba) throw Error(a(308));
              (wa = e), (ba.dependencies = { lanes: 0, firstContext: e });
            } else wa = wa.next = e;
          return t;
        }
        var Pa = null;
        function Ma(e) {
          null === Pa ? (Pa = [e]) : Pa.push(e);
        }
        function Ta(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Ma(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            _a(e, r)
          );
        }
        function _a(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Na = !1;
        function La(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ja(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function za(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Aa(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 != (2 & Tu))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              _a(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Ma(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            _a(e, n)
          );
        }
        function Da(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 != (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ia(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fa(e, t, n, r) {
          var o = e.updateQueue;
          Na = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var u = l,
              c = u.next;
            (u.next = null), null === i ? (a = c) : (i.next = c), (i = u);
            var s = e.alternate;
            null !== s &&
              (l = (s = s.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (s.firstBaseUpdate = c) : (l.next = c),
              (s.lastBaseUpdate = u));
          }
          if (null !== a) {
            var f = o.baseState;
            for (i = 0, s = c = u = null, l = a; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" == typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (d =
                          "function" == typeof (h = m.payload)
                            ? h.call(p, f, d)
                            : h)
                      )
                        break e;
                      f = I({}, f, d);
                      break e;
                    case 2:
                      Na = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = o.effects) ? (o.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === s ? ((c = s = p), (u = f)) : (s = s.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (o.lastBaseUpdate = d),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === s && (u = f),
              (o.baseState = u),
              (o.firstBaseUpdate = c),
              (o.lastBaseUpdate = s),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Iu |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Ra(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" != typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Ha = new r.Component().refs;
        function Ba(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Wa = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              o = nc(e),
              a = za(r, o);
            (a.payload = t),
              null != n && (a.callback = n),
              null !== (t = Aa(e, a, o)) && (rc(t, e, o, r), Da(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tc(),
              o = nc(e),
              a = za(r, o);
            (a.tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              null !== (t = Aa(e, a, o)) && (rc(t, e, o, r), Da(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              r = nc(e),
              o = za(n, r);
            (o.tag = 2),
              null != t && (o.callback = t),
              null !== (t = Aa(e, o, r)) && (rc(t, e, r, n), Da(t, e, r));
          },
        };
        function Ua(e, t, n, r, o, a, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                ur(n, r) &&
                ur(o, a)
              );
        }
        function $a(e, t, n) {
          var r = !1,
            o = Mo,
            a = t.contextType;
          return (
            "object" == typeof a && null !== a
              ? (a = Oa(a))
              : ((o = jo(t) ? No : To.current),
                (a = (r = null != (r = t.contextTypes)) ? Lo(e, o) : Mo)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wa),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function Va(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Wa.enqueueReplaceState(t, t.state, null);
        }
        function Ga(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = Ha), La(e);
          var a = t.contextType;
          "object" == typeof a && null !== a
            ? (o.context = Oa(a))
            : ((a = jo(t) ? No : To.current), (o.context = Lo(e, a))),
            (o.state = e.memoizedState),
            "function" == typeof (a = t.getDerivedStateFromProps) &&
              (Ba(e, t, a, n), (o.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof o.getSnapshotBeforeUpdate ||
              ("function" != typeof o.UNSAFE_componentWillMount &&
                "function" != typeof o.componentWillMount) ||
              ((t = o.state),
              "function" == typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" == typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && Wa.enqueueReplaceState(o, o.state, null),
              Fa(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" == typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Qa(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Ha && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" != typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Xa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function qa(e) {
          return (0, e._init)(e._payload);
        }
        function Ya(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = zc(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fc(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var a = n.type;
            return a === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" == typeof a &&
                    null !== a &&
                    a.$$typeof === L &&
                    qa(a) === t.type))
              ? (((r = o(t, n.props)).ref = Qa(e, t, n)), (r.return = e), r)
              : (((r = Ac(n.type, n.key, n.props, null, e.mode, r)).ref = Qa(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Rc(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Dc(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return ((t = Fc("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Ac(t.type, t.key, t.props, null, e.mode, n)).ref = Qa(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Rc(t, e.mode, n)).return = e), t;
                case L:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || A(t))
                return ((t = Dc(t, e.mode, n, null)).return = e), t;
              Xa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return null !== o ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === o ? c(e, t, n, r) : null;
                case k:
                  return n.key === o ? s(e, t, n, r) : null;
                case L:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (te(n) || A(n)) return null !== o ? null : f(e, t, n, r, null);
              Xa(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case k:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case L:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (te(r) || A(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              Xa(t, r);
            }
            return null;
          }
          function m(o, a, l, u) {
            for (
              var c = null, s = null, f = a, m = (a = 0), g = null;
              null !== f && m < l.length;
              m++
            ) {
              f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
              var v = p(o, f, l[m], u);
              if (null === v) {
                null === f && (f = g);
                break;
              }
              e && f && null === v.alternate && t(o, f),
                (a = i(v, a, m)),
                null === s ? (c = v) : (s.sibling = v),
                (s = v),
                (f = g);
            }
            if (m === l.length) return n(o, f), aa && Jo(o, m), c;
            if (null === f) {
              for (; m < l.length; m++)
                null !== (f = d(o, l[m], u)) &&
                  ((a = i(f, a, m)),
                  null === s ? (c = f) : (s.sibling = f),
                  (s = f));
              return aa && Jo(o, m), c;
            }
            for (f = r(o, f); m < l.length; m++)
              null !== (g = h(f, o, m, l[m], u)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? m : g.key),
                (a = i(g, a, m)),
                null === s ? (c = g) : (s.sibling = g),
                (s = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Jo(o, m),
              c
            );
          }
          function g(o, l, u, c) {
            var s = A(u);
            if ("function" != typeof s) throw Error(a(150));
            if (null == (u = s.call(u))) throw Error(a(151));
            for (
              var f = (s = null), m = l, g = (l = 0), v = null, y = u.next();
              null !== m && !y.done;
              g++, y = u.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(o, m, y.value, c);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, g)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (m = v);
            }
            if (y.done) return n(o, m), aa && Jo(o, g), s;
            if (null === m) {
              for (; !y.done; g++, y = u.next())
                null !== (y = d(o, y.value, c)) &&
                  ((l = i(y, l, g)),
                  null === f ? (s = y) : (f.sibling = y),
                  (f = y));
              return aa && Jo(o, g), s;
            }
            for (m = r(o, m); !y.done; g++, y = u.next())
              null !== (y = h(m, o, g, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (l = i(y, l, g)),
                null === f ? (s = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Jo(o, g),
              s
            );
          }
          return function e(r, a, i, u) {
            if (
              ("object" == typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" == typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var c = i.key, s = a; null !== s; ) {
                      if (s.key === c) {
                        if ((c = i.type) === S) {
                          if (7 === s.tag) {
                            n(r, s.sibling),
                              ((a = o(s, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          s.elementType === c ||
                          ("object" == typeof c &&
                            null !== c &&
                            c.$$typeof === L &&
                            qa(c) === s.type)
                        ) {
                          n(r, s.sibling),
                            ((a = o(s, i.props)).ref = Qa(r, s, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, s);
                        break;
                      }
                      t(r, s), (s = s.sibling);
                    }
                    i.type === S
                      ? (((a = Dc(i.props.children, r.mode, u, i.key)).return =
                          r),
                        (r = a))
                      : (((u = Ac(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          u
                        )).ref = Qa(r, a, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case k:
                  e: {
                    for (s = i.key; null !== a; ) {
                      if (a.key === s) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = Rc(i, r.mode, u)).return = r), (r = a);
                  }
                  return l(r);
                case L:
                  return e(r, a, (s = i._init)(i._payload), u);
              }
              if (te(i)) return m(r, a, i, u);
              if (A(i)) return g(r, a, i, u);
              Xa(r, i);
            }
            return ("string" == typeof i && "" !== i) || "number" == typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = Fc(i, r.mode, u)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Ka = Ya(!0),
          Za = Ya(!1),
          Ja = {},
          ei = Co(Ja),
          ti = Co(Ja),
          ni = Co(Ja);
        function ri(e) {
          if (e === Ja) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((Po(ni, t), Po(ti, e), Po(ei, Ja), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Oo(ei), Po(ei, t);
        }
        function ai() {
          Oo(ei), Oo(ti), Oo(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (Po(ti, e), Po(ei, n));
        }
        function li(e) {
          ti.current === e && (Oo(ei), Oo(ti));
        }
        var ui = Co(0);
        function ci(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var si = [];
        function fi() {
          for (var e = 0; e < si.length; e++)
            si[e]._workInProgressVersionPrimary = null;
          si.length = 0;
        }
        var di = w.ReactCurrentDispatcher,
          pi = w.ReactCurrentBatchConfig,
          hi = 0,
          mi = null,
          gi = null,
          vi = null,
          yi = !1,
          bi = !1,
          wi = 0,
          xi = 0;
        function ki() {
          throw Error(a(321));
        }
        function Si(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, o, i) {
          if (
            ((hi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, o)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (wi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (vi = gi = null),
                (t.updateQueue = null),
                (di.current = cl),
                (e = n(r, o));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== gi && null !== gi.next),
            (hi = 0),
            (vi = gi = mi = null),
            (yi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Ci() {
          var e = 0 !== wi;
          return (wi = 0), e;
        }
        function Oi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === vi ? (mi.memoizedState = vi = e) : (vi = vi.next = e), vi
          );
        }
        function Pi() {
          if (null === gi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = gi.next;
          var t = null === vi ? mi.memoizedState : vi.next;
          if (null !== t) (vi = t), (gi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (gi = e).memoizedState,
              baseState: gi.baseState,
              baseQueue: gi.baseQueue,
              queue: gi.queue,
              next: null,
            }),
              null === vi ? (mi.memoizedState = vi = e) : (vi = vi.next = e);
          }
          return vi;
        }
        function Mi(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function Ti(e) {
          var t = Pi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = gi,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var u = (l = null),
              c = null,
              s = i;
            do {
              var f = s.lane;
              if ((hi & f) === f)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var d = {
                  lane: f,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === c ? ((u = c = d), (l = r)) : (c = c.next = d),
                  (mi.lanes |= f),
                  (Iu |= f);
              }
              s = s.next;
            } while (null !== s && s !== i);
            null === c ? (l = r) : (c.next = u),
              lr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (mi.lanes |= i), (Iu |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function _i(e) {
          var t = Pi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            lr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ni() {}
        function Li(e, t) {
          var n = mi,
            r = Pi(),
            o = t(),
            i = !lr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (wl = !0)),
            (r = r.queue),
            $i(Ai.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== vi && 1 & vi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ri(9, zi.bind(null, n, r, o, t), void 0, null),
              null === _u)
            )
              throw Error(a(349));
            0 != (30 & hi) || ji(n, t, o);
          }
          return o;
        }
        function ji(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function zi(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Di(t) && Ii(e);
        }
        function Ai(e, t, n) {
          return n(function () {
            Di(t) && Ii(e);
          });
        }
        function Di(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (e) {
            return !0;
          }
        }
        function Ii(e) {
          var t = _a(e, 1);
          null !== t && rc(t, e, 1, -1);
        }
        function Fi(e) {
          var t = Oi();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Mi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Ri(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Hi() {
          return Pi().memoizedState;
        }
        function Bi(e, t, n, r) {
          var o = Oi();
          (mi.flags |= e),
            (o.memoizedState = Ri(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Wi(e, t, n, r) {
          var o = Pi();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== gi) {
            var i = gi.memoizedState;
            if (((a = i.destroy), null !== r && Si(r, i.deps)))
              return void (o.memoizedState = Ri(t, n, a, r));
          }
          (mi.flags |= e), (o.memoizedState = Ri(1 | t, n, a, r));
        }
        function Ui(e, t) {
          return Bi(8390656, 8, e, t);
        }
        function $i(e, t) {
          return Wi(2048, 8, e, t);
        }
        function Vi(e, t) {
          return Wi(4, 2, e, t);
        }
        function Gi(e, t) {
          return Wi(4, 4, e, t);
        }
        function Qi(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Xi(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            Wi(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function qi() {}
        function Yi(e, t) {
          var n = Pi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ki(e, t) {
          var n = Pi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && Si(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zi(e, t, n) {
          return 0 == (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (mi.lanes |= n), (Iu |= n), (e.baseState = !0)),
              t);
        }
        function Ji(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Pi().memoizedState;
        }
        function tl(e, t, n) {
          var r = nc(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            rl(e)
              ? ol(t, n)
              : null !== (n = Ta(e, t, n, r)) &&
                (rc(n, e, r, tc()), al(n, t, r));
        }
        function nl(e, t, n) {
          var r = nc(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) ol(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), lr(l, i))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((o.next = o), Ma(t))
                      : ((o.next = u.next), (u.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (e) {}
            null !== (n = Ta(e, t, o, r)) &&
              (rc(n, e, r, (o = tc())), al(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function ol(e, t) {
          bi = yi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function al(e, t, n) {
          if (0 != (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var il = {
            readContext: Oa,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Oa,
            useCallback: function (e, t) {
              return (Oi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Oa,
            useEffect: Ui,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                Bi(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Oi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Oi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Oi().memoizedState = e);
            },
            useState: Fi,
            useDebugValue: qi,
            useDeferredValue: function (e) {
              return (Oi().memoizedState = e);
            },
            useTransition: function () {
              var e = Fi(!1),
                t = e[0];
              return (
                (e = Ji.bind(null, e[1])), (Oi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                o = Oi();
              if (aa) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === _u)) throw Error(a(349));
                0 != (30 & hi) || ji(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Ui(Ai.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ri(9, zi.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Oi(),
                t = _u.identifierPrefix;
              if (aa) {
                var n = Zo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ko & ~(1 << (32 - it(Ko) - 1))).toString(32) + n)),
                  0 < (n = wi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Oa,
            useCallback: Yi,
            useContext: Oa,
            useEffect: $i,
            useImperativeHandle: Xi,
            useInsertionEffect: Vi,
            useLayoutEffect: Gi,
            useMemo: Ki,
            useReducer: Ti,
            useRef: Hi,
            useState: function () {
              return Ti(Mi);
            },
            useDebugValue: qi,
            useDeferredValue: function (e) {
              return Zi(Pi(), gi.memoizedState, e);
            },
            useTransition: function () {
              return [Ti(Mi)[0], Pi().memoizedState];
            },
            useMutableSource: Ni,
            useSyncExternalStore: Li,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          cl = {
            readContext: Oa,
            useCallback: Yi,
            useContext: Oa,
            useEffect: $i,
            useImperativeHandle: Xi,
            useInsertionEffect: Vi,
            useLayoutEffect: Gi,
            useMemo: Ki,
            useReducer: _i,
            useRef: Hi,
            useState: function () {
              return _i(Mi);
            },
            useDebugValue: qi,
            useDeferredValue: function (e) {
              var t = Pi();
              return null === gi
                ? (t.memoizedState = e)
                : Zi(t, gi.memoizedState, e);
            },
            useTransition: function () {
              return [_i(Mi)[0], Pi().memoizedState];
            },
            useMutableSource: Ni,
            useSyncExternalStore: Li,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function sl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var pl = "function" == typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = za(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vu || ((Vu = !0), (Gu = r)), dl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = za(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" == typeof a.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" != typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = Oc.bind(null, e, t, n)), t.then(e, e));
        }
        function vl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, o) {
          return 0 == (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = za(-1, 1)).tag = 2), Aa(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bl = w.ReactCurrentOwner,
          wl = !1;
        function xl(e, t, n, r) {
          t.child = null === e ? Za(t, null, n, r) : Ka(t, e.child, n, r);
        }
        function kl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Ca(t, o),
            (r = Ei(e, t, n, r, a, o)),
            (n = Ci()),
            null === e || wl
              ? (aa && n && ta(t), (t.flags |= 1), xl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Vl(e, t, o))
          );
        }
        function Sl(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" != typeof a ||
              jc(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ac(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), El(e, t, a, r, o));
          }
          if (((a = e.child), 0 == (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return Vl(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = zc(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (ur(a, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = a), 0 == (e.lanes & o)))
                return (t.lanes = e.lanes), Vl(e, t, o);
              0 != (131072 & e.flags) && (wl = !0);
            }
          }
          return Pl(e, t, n, r, o);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 == (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Po(zu, ju),
                (ju |= n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Po(zu, ju),
                  (ju |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                Po(zu, ju),
                (ju |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Po(zu, ju),
              (ju |= r);
          return xl(e, t, o, n), t.child;
        }
        function Ol(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pl(e, t, n, r, o) {
          var a = jo(n) ? No : To.current;
          return (
            (a = Lo(t, a)),
            Ca(t, o),
            (n = Ei(e, t, n, r, a, o)),
            (r = Ci()),
            null === e || wl
              ? (aa && r && ta(t), (t.flags |= 1), xl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Vl(e, t, o))
          );
        }
        function Ml(e, t, n, r, o) {
          if (jo(n)) {
            var a = !0;
            Io(t);
          } else a = !1;
          if ((Ca(t, o), null === t.stateNode))
            $l(e, t), $a(t, n, r), Ga(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              c = n.contextType;
            c =
              "object" == typeof c && null !== c
                ? Oa(c)
                : Lo(t, (c = jo(n) ? No : To.current));
            var s = n.getDerivedStateFromProps,
              f =
                "function" == typeof s ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== c) && Va(t, i, r, c)),
              (Na = !1);
            var d = t.memoizedState;
            (i.state = d),
              Fa(t, r, i, o),
              (u = t.memoizedState),
              l !== r || d !== u || _o.current || Na
                ? ("function" == typeof s &&
                    (Ba(t, n, s, r), (u = t.memoizedState)),
                  (l = Na || Ua(t, n, l, r, d, u, c))
                    ? (f ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = c),
                  (r = l))
                : ("function" == typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              ja(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : va(t.type, l)),
              (i.props = c),
              (f = t.pendingProps),
              (d = i.context),
              (u =
                "object" == typeof (u = n.contextType) && null !== u
                  ? Oa(u)
                  : Lo(t, (u = jo(n) ? No : To.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" == typeof p ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && Va(t, i, r, u)),
              (Na = !1),
              (d = t.memoizedState),
              (i.state = d),
              Fa(t, r, i, o);
            var h = t.memoizedState;
            l !== f || d !== h || _o.current || Na
              ? ("function" == typeof p &&
                  (Ba(t, n, p, r), (h = t.memoizedState)),
                (c = Na || Ua(t, n, c, r, d, h, u) || !1)
                  ? (s ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = c))
              : ("function" != typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Tl(e, t, n, r, a, o);
        }
        function Tl(e, t, n, r, o, a) {
          Ol(e, t);
          var i = 0 != (128 & t.flags);
          if (!r && !i) return o && Fo(t, n, !1), Vl(e, t, a);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Ka(t, e.child, null, a)),
                (t.child = Ka(t, null, l, a)))
              : xl(e, t, l, a),
            (t.memoizedState = r.state),
            o && Fo(t, n, !0),
            t.child
          );
        }
        function _l(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ao(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ao(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function Nl(e, t, n, r, o) {
          return ha(), ma(o), (t.flags |= 256), xl(e, t, n, r), t.child;
        }
        var Ll,
          jl,
          zl,
          Al,
          Dl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fl(e, t, n) {
          var r,
            o = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 != (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Po(ui, 1 & i),
            null === e)
          )
            return (
              sa(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 == (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 == (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = Ic(u, o, 0, null)),
                      (e = Dc(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Il(n)),
                      (t.memoizedState = Dl),
                      e)
                    : Rl(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Hl(e, t, l, (r = fl(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (o = t.mode),
                    (r = Ic(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((i = Dc(i, o, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 != (1 & t.mode) && Ka(t, e.child, null, l),
                    (t.child.memoizedState = Il(l)),
                    (t.memoizedState = Dl),
                    i);
              if (0 == (1 & t.mode)) return Hl(e, t, l, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Hl(e, t, l, (r = fl((i = Error(a(419))), r, void 0)))
                );
              }
              if (((u = 0 != (l & e.childLanes)), wl || u)) {
                if (null !== (r = _u)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 != (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), _a(e, o), rc(r, e, o, -1));
                }
                return gc(), Hl(e, t, l, (r = fl(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Mc.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = co(o.nextSibling)),
                  (ra = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Xo[qo++] = Ko),
                    (Xo[qo++] = Zo),
                    (Xo[qo++] = Yo),
                    (Ko = e.id),
                    (Zo = e.overflow),
                    (Yo = t)),
                  ((t = Rl(t, r.children)).flags |= 4096),
                  t);
            })(e, t, u, o, r, i, n);
          if (l) {
            (l = o.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var c = { mode: "hidden", children: o.children };
            return (
              0 == (1 & u) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = c),
                  (t.deletions = null))
                : ((o = zc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = zc(r, l))
                : ((l = Dc(l, u, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Il(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Dl),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = zc(l, { mode: "visible", children: o.children })),
            0 == (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Rl(e, t) {
          return (
            ((t = Ic(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Hl(e, t, n, r) {
          return (
            null !== r && ma(r),
            Ka(t, e.child, null, n),
            ((e = Rl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ea(e.return, t, n);
        }
        function Wl(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Ul(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((xl(e, t, r.children, n), 0 != (2 & (r = ui.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 != (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bl(e, n, t);
                else if (19 === e.tag) Bl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Po(ui, r), 0 == (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ci(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Wl(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ci(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Wl(t, !0, n, null, a);
                break;
              case "together":
                Wl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $l(e, t) {
          0 == (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Iu |= t.lanes),
            0 == (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = zc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = zc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Gl(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xl(e, t, n) {
          var r = t.pendingProps;
          switch ((na(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ql(t), null;
            case 1:
            case 17:
              return jo(t.type) && zo(), Ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Oo(_o),
                Oo(To),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (da(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ia && (lc(ia), (ia = null)))),
                jl(e, t),
                Ql(t),
                null
              );
            case 5:
              li(t);
              var o = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                zl(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Ql(t), null;
                }
                if (((e = ri(ei.current)), da(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[po] = t), (r[ho] = i), (e = 0 != (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Rr("cancel", r), Rr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Rr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Ar.length; o++) Rr(Ar[o], r);
                      break;
                    case "source":
                      Rr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Rr("error", r), Rr("load", r);
                      break;
                    case "details":
                      Rr("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Rr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Rr("invalid", r);
                      break;
                    case "textarea":
                      oe(r, i), Rr("invalid", r);
                  }
                  for (var u in (ye(n, i), (o = null), i))
                    if (i.hasOwnProperty(u)) {
                      var c = i[u];
                      "children" === u
                        ? "string" == typeof c
                          ? r.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (o = ["children", c]))
                          : "number" == typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, c, e),
                            (o = ["children", "" + c]))
                        : l.hasOwnProperty(u) &&
                          null != c &&
                          "onScroll" === u &&
                          Rr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      G(r), J(r, i, !0);
                      break;
                    case "textarea":
                      G(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[po] = t),
                    (e[ho] = r),
                    Ll(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Rr("cancel", e), Rr("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Rr("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Ar.length; o++) Rr(Ar[o], e);
                        o = r;
                        break;
                      case "source":
                        Rr("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Rr("error", e), Rr("load", e), (o = r);
                        break;
                      case "details":
                        Rr("toggle", e), (o = r);
                        break;
                      case "input":
                        Y(e, r), (o = q(e, r)), Rr("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = I({}, r, { value: void 0 })),
                          Rr("invalid", e);
                        break;
                      case "textarea":
                        oe(e, r), (o = re(e, r)), Rr("invalid", e);
                    }
                    for (i in (ye(n, o), (c = o)))
                      if (c.hasOwnProperty(i)) {
                        var s = c[i];
                        "style" === i
                          ? ge(e, s)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (s = s ? s.__html : void 0) && fe(e, s)
                          : "children" === i
                          ? "string" == typeof s
                            ? ("textarea" !== n || "" !== s) && de(e, s)
                            : "number" == typeof s && de(e, "" + s)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != s && "onScroll" === i && Rr("scroll", e)
                              : null != s && b(e, i, s, u));
                      }
                    switch (n) {
                      case "input":
                        G(e), J(e, r, !1);
                        break;
                      case "textarea":
                        G(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + $(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof o.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ql(t), null;
            case 6:
              if (e && null != t.stateNode) Al(e, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = ri(ni.current)), ri(ei.current), da(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[po] = t),
                    (i = r.nodeValue !== n) && null !== (e = ra))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 != (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 != (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[po] = t),
                    (t.stateNode = r);
              }
              return Ql(t), null;
            case 13:
              if (
                (Oo(ui),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  aa &&
                  null !== oa &&
                  0 != (1 & t.mode) &&
                  0 == (128 & t.flags)
                )
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = da(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[po] = t;
                  } else
                    ha(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ql(t), (i = !1);
                } else null !== ia && (lc(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 != (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !=
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 != (1 & t.mode) &&
                      (null === e || 0 != (1 & ui.current)
                        ? 0 === Au && (Au = 3)
                        : gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ql(t),
                  null);
            case 4:
              return (
                ai(),
                jl(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                Ql(t),
                null
              );
            case 10:
              return Sa(t.type._context), Ql(t), null;
            case 19:
              if ((Oo(ui), null === (i = t.memoizedState))) return Ql(t), null;
              if (((r = 0 != (128 & t.flags)), null === (u = i.rendering)))
                if (r) Gl(i, !1);
                else {
                  if (0 !== Au || (null !== e && 0 != (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = ci(e))) {
                        for (
                          t.flags |= 128,
                            Gl(i, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Po(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ke() > Uu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Gl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ci(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Gl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !u.alternate &&
                        !aa)
                    )
                      return Ql(t), null;
                  } else
                    2 * Ke() - i.renderingStartTime > Uu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Gl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
                    (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = ui.current),
                  Po(ui, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ql(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 != (1 & t.mode)
                  ? 0 != (1073741824 & ju) &&
                    (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function ql(e, t) {
          switch ((na(t), t.tag)) {
            case 1:
              return (
                jo(t.type) && zo(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Oo(_o),
                Oo(To),
                fi(),
                0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (Oo(ui),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Oo(ui), null;
            case 4:
              return ai(), null;
            case 10:
              return Sa(t.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (Ll = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (jl = function () {}),
          (zl = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), ri(ei.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = q(e, o)), (r = q(e, r)), (i = []);
                  break;
                case "select":
                  (o = I({}, o, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = re(e, o)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" != typeof o.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (s in (ye(n, r), (n = null), o))
                if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
                  if ("style" === s) {
                    var u = o[s];
                    for (a in u)
                      u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (l.hasOwnProperty(s)
                        ? i || (i = [])
                        : (i = i || []).push(s, null));
              for (s in r) {
                var c = r[s];
                if (
                  ((u = null != o ? o[s] : void 0),
                  r.hasOwnProperty(s) && c !== u && (null != c || null != u))
                )
                  if ("style" === s)
                    if (u) {
                      for (a in u)
                        !u.hasOwnProperty(a) ||
                          (c && c.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in c)
                        c.hasOwnProperty(a) &&
                          u[a] !== c[a] &&
                          (n || (n = {}), (n[a] = c[a]));
                    } else n || (i || (i = []), i.push(s, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (i = i || []).push(s, c))
                      : "children" === s
                      ? ("string" != typeof c && "number" != typeof c) ||
                        (i = i || []).push(s, "" + c)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (l.hasOwnProperty(s)
                          ? (null != c && "onScroll" === s && Rr("scroll", e),
                            i || u === c || (i = []))
                          : (i = i || []).push(s, c));
              }
              n && (i = i || []).push("style", n);
              var s = i;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (Al = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Kl = !1,
          Zl = "function" == typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                Cc(e, t, n);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (n) {
            Cc(e, t, n);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && tu(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function ou(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function au(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po],
              delete t[ho],
              delete t[go],
              delete t[vo],
              delete t[yo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (at && "function" == typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, n);
            } catch (e) {}
          switch (n.tag) {
            case 5:
              Kl || eu(n, t);
            case 6:
              var r = fu,
                o = du;
              (fu = null),
                pu(e, t, n),
                (du = o),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? uo(e.parentNode, n)
                      : 1 === e.nodeType && uo(e, n),
                    Wt(e))
                  : uo(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (o = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Kl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 != (2 & a) || 0 != (4 & a)) &&
                      tu(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Kl &&
                (eu(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (e) {
                  Cc(n, t, e);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Kl = (r = Kl) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Kl = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function mu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zl()),
              t.forEach(function (t) {
                var r = Tc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(a(160));
                hu(i, l, o), (fu = null), (du = !1);
                var c = o.alternate;
                null !== c && (c.return = null), (o.return = null);
              } catch (e) {
                Cc(o, t, e);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), ou(3, e);
                } catch (t) {
                  Cc(e, e.return, t);
                }
                try {
                  ru(5, e, e.return);
                } catch (t) {
                  Cc(e, e.return, t);
                }
              }
              break;
            case 1:
              gu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (gu(t, e),
                yu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  de(o, "");
                } catch (t) {
                  Cc(e, e.return, t);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === u &&
                      "radio" === i.type &&
                      null != i.name &&
                      K(o, i),
                      be(u, l);
                    var s = be(u, i);
                    for (l = 0; l < c.length; l += 2) {
                      var f = c[l],
                        d = c[l + 1];
                      "style" === f
                        ? ge(o, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(o, d)
                        : "children" === f
                        ? de(o, d)
                        : b(o, f, d, s);
                    }
                    switch (u) {
                      case "input":
                        Z(o, i);
                        break;
                      case "textarea":
                        ae(o, i);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(o, !!i.multiple, i.defaultValue, !0)
                              : ne(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[ho] = i;
                  } catch (t) {
                    Cc(e, e.return, t);
                  }
              }
              break;
            case 6:
              if ((gu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (t) {
                  Cc(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                (gu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (t) {
                  Cc(e, e.return, t);
                }
              break;
            case 4:
            default:
              gu(t, e), yu(e);
              break;
            case 13:
              gu(t, e),
                yu(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Wu = Ke())),
                4 & r && mu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Kl = (s = Kl) || f), gu(t, e), (Kl = s))
                  : gu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !f && 0 != (1 & e.mode))
                )
                  for (Jl = e, f = e.child; null !== f; ) {
                    for (d = Jl = f; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var m = p.stateNode;
                          if ("function" == typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (e) {
                              Cc(r, n, e);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : ku(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (o = d.stateNode),
                          s
                            ? "function" == typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                null != (c = d.memoizedProps.style) &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (u.style.display = me("display", l)));
                      } catch (t) {
                        Cc(e, e.return, t);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = s ? "" : d.memoizedProps;
                      } catch (t) {
                        Cc(e, e.return, t);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              gu(t, e), yu(e), 4 & r && mu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (de(o, ""), (r.flags &= -33)),
                    su(e, uu(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  cu(e, uu(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (t) {
              Cc(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Jl = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 != (1 & e.mode); null !== Jl; ) {
            var o = Jl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Yl;
              if (!i) {
                var l = o.alternate,
                  u = (null !== l && null !== l.memoizedState) || Kl;
                l = Yl;
                var c = Kl;
                if (((Yl = i), (Kl = u) && !c))
                  for (Jl = o; null !== Jl; )
                    (u = (i = Jl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Su(o)
                        : null !== u
                        ? ((u.return = i), (Jl = u))
                        : Su(o);
                for (; null !== a; ) (Jl = a), wu(a, t, n), (a = a.sibling);
                (Jl = o), (Yl = l), (Kl = c);
              }
              xu(e);
            } else
              0 != (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Jl = a))
                : xu(e);
          }
        }
        function xu(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 != (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 != (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl || ou(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Kl)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : va(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ra(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ra(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var s = t.alternate;
                        if (null !== s) {
                          var f = s.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Wt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Kl || (512 & t.flags && au(t));
              } catch (e) {
                Cc(t, t.return, e);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Su(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ou(4, t);
                  } catch (e) {
                    Cc(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      Cc(t, o, e);
                    }
                  }
                  var a = t.return;
                  try {
                    au(t);
                  } catch (e) {
                    Cc(t, a, e);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    au(t);
                  } catch (e) {
                    Cc(t, i, e);
                  }
              }
            } catch (e) {
              Cc(t, t.return, e);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var Eu,
          Cu = Math.ceil,
          Ou = w.ReactCurrentDispatcher,
          Pu = w.ReactCurrentOwner,
          Mu = w.ReactCurrentBatchConfig,
          Tu = 0,
          _u = null,
          Nu = null,
          Lu = 0,
          ju = 0,
          zu = Co(0),
          Au = 0,
          Du = null,
          Iu = 0,
          Fu = 0,
          Ru = 0,
          Hu = null,
          Bu = null,
          Wu = 0,
          Uu = 1 / 0,
          $u = null,
          Vu = !1,
          Gu = null,
          Qu = null,
          Xu = !1,
          qu = null,
          Yu = 0,
          Ku = 0,
          Zu = null,
          Ju = -1,
          ec = 0;
        function tc() {
          return 0 != (6 & Tu) ? Ke() : -1 !== Ju ? Ju : (Ju = Ke());
        }
        function nc(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & Tu) && 0 !== Lu
            ? Lu & -Lu
            : null !== ga.transition
            ? (0 === ec && (ec = mt()), ec)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rc(e, t, n, r) {
          if (50 < Ku) throw ((Ku = 0), (Zu = null), Error(a(185)));
          vt(e, n, r),
            (0 != (2 & Tu) && e === _u) ||
              (e === _u && (0 == (2 & Tu) && (Fu |= n), 4 === Au && uc(e, Lu)),
              oc(e, r),
              1 === n &&
                0 === Tu &&
                0 == (1 & t.mode) &&
                ((Uu = Ke() + 500), Ho && Uo()));
        }
        function oc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                u = o[i];
              -1 === u
                ? (0 != (l & n) && 0 == (l & r)) || (o[i] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = dt(e, e === _u ? Lu : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ho = !0), Wo(e);
                  })(cc.bind(null, e))
                : Wo(cc.bind(null, e)),
                io(function () {
                  0 == (6 & Tu) && Uo();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = _c(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Ju = -1), (ec = 0), 0 != (6 & Tu))) throw Error(a(327));
          var n = e.callbackNode;
          if (Sc() && e.callbackNode !== n) return null;
          var r = dt(e, e === _u ? Lu : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = vc(e, r);
          else {
            t = r;
            var o = Tu;
            Tu |= 2;
            var i = mc();
            for (
              (_u === e && Lu === t) ||
              (($u = null), (Uu = Ke() + 500), pc(e, t));
              ;

            )
              try {
                bc();
                break;
              } catch (t) {
                hc(e, t);
              }
            ka(),
              (Ou.current = i),
              (Tu = o),
              null !== Nu ? (t = 0) : ((_u = null), (Lu = 0), (t = Au));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = ht(e)) && ((r = o), (t = ic(e, o))),
              1 === t)
            )
              throw ((n = Du), pc(e, 0), uc(e, r), oc(e, Ke()), n);
            if (6 === t) uc(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 == (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!lr(a(), o)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = vc(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = ic(e, i))),
                  1 === t))
              )
                throw ((n = Du), pc(e, 0), uc(e, r), oc(e, Ke()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  kc(e, Bu, $u);
                  break;
                case 3:
                  if (
                    (uc(e, r),
                    (130023424 & r) === r && 10 < (t = Wu + 500 - Ke()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = ro(kc.bind(null, e, Bu, $u), t);
                    break;
                  }
                  kc(e, Bu, $u);
                  break;
                case 4:
                  if ((uc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ro(kc.bind(null, e, Bu, $u), r);
                    break;
                  }
                  kc(e, Bu, $u);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return oc(e, Ke()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function ic(e, t) {
          var n = Hu;
          return (
            e.current.memoizedState.isDehydrated && (pc(e, t).flags |= 256),
            2 !== (e = vc(e, t)) && ((t = Bu), (Bu = n), null !== t && lc(t)),
            e
          );
        }
        function lc(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function uc(e, t) {
          for (
            t &= ~Ru,
              t &= ~Fu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function cc(e) {
          if (0 != (6 & Tu)) throw Error(a(327));
          Sc();
          var t = dt(e, 0);
          if (0 == (1 & t)) return oc(e, Ke()), null;
          var n = vc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ic(e, r)));
          }
          if (1 === n) throw ((n = Du), pc(e, 0), uc(e, t), oc(e, Ke()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            kc(e, Bu, $u),
            oc(e, Ke()),
            null
          );
        }
        function sc(e, t) {
          var n = Tu;
          Tu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Tu = n) && ((Uu = Ke() + 500), Ho && Uo());
          }
        }
        function fc(e) {
          null !== qu && 0 === qu.tag && 0 == (6 & Tu) && Sc();
          var t = Tu;
          Tu |= 1;
          var n = Mu.transition,
            r = bt;
          try {
            if (((Mu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Mu.transition = n), 0 == (6 & (Tu = t)) && Uo();
          }
        }
        function dc() {
          (ju = zu.current), Oo(zu);
        }
        function pc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), oo(n)), null !== Nu))
            for (n = Nu.return; null !== n; ) {
              var r = n;
              switch ((na(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && zo();
                  break;
                case 3:
                  ai(), Oo(_o), Oo(To), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Oo(ui);
                  break;
                case 10:
                  Sa(r.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((_u = e),
            (Nu = e = zc(e.current, null)),
            (Lu = ju = t),
            (Au = 0),
            (Du = null),
            (Ru = Fu = Iu = 0),
            (Bu = Hu = null),
            null !== Pa)
          ) {
            for (t = 0; t < Pa.length; t++)
              if (null !== (r = (n = Pa[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            Pa = null;
          }
          return e;
        }
        function hc(e, t) {
          for (;;) {
            var n = Nu;
            try {
              if ((ka(), (di.current = il), yi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                yi = !1;
              }
              if (
                ((hi = 0),
                (vi = gi = mi = null),
                (bi = !1),
                (wi = 0),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                (Au = 1), (Du = t), (Nu = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  c = t;
                if (
                  ((t = Lu),
                  (u.flags |= 32768),
                  null !== c &&
                    "object" == typeof c &&
                    "function" == typeof c.then)
                ) {
                  var s = c,
                    f = u,
                    d = f.tag;
                  if (0 == (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = vl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      yl(h, l, u, 0, t),
                      1 & h.mode && gl(i, s, t),
                      (c = s);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else m.add(c);
                    break e;
                  }
                  if (0 == (1 & t)) {
                    gl(i, s, t), gc();
                    break e;
                  }
                  c = Error(a(426));
                } else if (aa && 1 & u.mode) {
                  var v = vl(l);
                  if (null !== v) {
                    0 == (65536 & v.flags) && (v.flags |= 256),
                      yl(v, l, u, 0, t),
                      ma(sl(c, u));
                    break e;
                  }
                }
                (i = c = sl(c, u)),
                  4 !== Au && (Au = 2),
                  null === Hu ? (Hu = [i]) : Hu.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ia(i, hl(0, c, t));
                      break e;
                    case 1:
                      u = c;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 == (128 & i.flags) &&
                        ("function" == typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" == typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ia(i, ml(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xc(n);
            } catch (e) {
              (t = e), Nu === n && null !== n && (Nu = n = n.return);
              continue;
            }
            break;
          }
        }
        function mc() {
          var e = Ou.current;
          return (Ou.current = il), null === e ? il : e;
        }
        function gc() {
          (0 !== Au && 3 !== Au && 2 !== Au) || (Au = 4),
            null === _u ||
              (0 == (268435455 & Iu) && 0 == (268435455 & Fu)) ||
              uc(_u, Lu);
        }
        function vc(e, t) {
          var n = Tu;
          Tu |= 2;
          var r = mc();
          for ((_u === e && Lu === t) || (($u = null), pc(e, t)); ; )
            try {
              yc();
              break;
            } catch (t) {
              hc(e, t);
            }
          if ((ka(), (Tu = n), (Ou.current = r), null !== Nu))
            throw Error(a(261));
          return (_u = null), (Lu = 0), Au;
        }
        function yc() {
          for (; null !== Nu; ) wc(Nu);
        }
        function bc() {
          for (; null !== Nu && !qe(); ) wc(Nu);
        }
        function wc(e) {
          var t = Eu(e.alternate, e, ju);
          (e.memoizedProps = e.pendingProps),
            null === t ? xc(e) : (Nu = t),
            (Pu.current = null);
        }
        function xc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (32768 & t.flags))) {
              if (null !== (n = Xl(n, t, ju))) return void (Nu = n);
            } else {
              if (null !== (n = ql(n, t)))
                return (n.flags &= 32767), void (Nu = n);
              if (null === e) return (Au = 6), void (Nu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Nu = t);
            Nu = t = e;
          } while (null !== t);
          0 === Au && (Au = 5);
        }
        function kc(e, t, n) {
          var r = bt,
            o = Mu.transition;
          try {
            (Mu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Sc();
                } while (null !== qu);
                if (0 != (6 & Tu)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - it(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === _u && ((Nu = _u = null), (Lu = 0)),
                  (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                    Xu ||
                    ((Xu = !0),
                    _c(tt, function () {
                      return Sc(), null;
                    })),
                  (i = 0 != (15990 & n.flags)),
                  0 != (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Mu.transition), (Mu.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Tu;
                  (Tu |= 4),
                    (Pu.current = null),
                    (function (e, t) {
                      if (((eo = $t), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (e) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                c = -1,
                                s = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== o && 3 !== d.nodeType) ||
                                    (u = l + o),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (c = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++s === o && (u = l),
                                    p === i && ++f === r && (c = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === c
                                  ? null
                                  : { start: u, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        to = { focusedElem: e, selectionRange: n },
                          $t = !1,
                          Jl = t;
                        null !== Jl;

                      )
                        if (
                          ((e = (t = Jl).child),
                          0 != (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var m = t.alternate;
                              if (0 != (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        v = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : va(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (e) {
                              Cc(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (m = nu), (nu = !1);
                    })(e, n),
                    vu(n, e),
                    hr(to),
                    ($t = !!eo),
                    (to = eo = null),
                    (e.current = n),
                    bu(n, e, o),
                    Ye(),
                    (Tu = u),
                    (bt = l),
                    (Mu.transition = i);
                } else e.current = n;
                if (
                  (Xu && ((Xu = !1), (qu = e), (Yu = o)),
                  0 === (i = e.pendingLanes) && (Qu = null),
                  (function (e) {
                    if (at && "function" == typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 == (128 & e.current.flags)
                        );
                      } catch (e) {}
                  })(n.stateNode),
                  oc(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((o = t[n]).value, {
                      componentStack: o.stack,
                      digest: o.digest,
                    });
                if (Vu) throw ((Vu = !1), (e = Gu), (Gu = null), e);
                0 != (1 & Yu) && 0 !== e.tag && Sc(),
                  0 != (1 & (i = e.pendingLanes))
                    ? e === Zu
                      ? Ku++
                      : ((Ku = 0), (Zu = e))
                    : (Ku = 0),
                  Uo();
              })(e, t, n, r);
          } finally {
            (Mu.transition = o), (bt = r);
          }
          return null;
        }
        function Sc() {
          if (null !== qu) {
            var e = wt(Yu),
              t = Mu.transition,
              n = bt;
            try {
              if (((Mu.transition = null), (bt = 16 > e ? 16 : e), null === qu))
                var r = !1;
              else {
                if (((e = qu), (qu = null), (Yu = 0), 0 != (6 & Tu)))
                  throw Error(a(331));
                var o = Tu;
                for (Tu |= 4, Jl = e.current; null !== Jl; ) {
                  var i = Jl,
                    l = i.child;
                  if (0 != (16 & Jl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var c = 0; c < u.length; c++) {
                        var s = u[c];
                        for (Jl = s; null !== Jl; ) {
                          var f = Jl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jl = d);
                          else
                            for (; null !== Jl; ) {
                              var p = (f = Jl).sibling,
                                h = f.return;
                              if ((iu(f), f === s)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Jl = i;
                    }
                  }
                  if (0 != (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 != (2048 & (i = Jl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Jl = y);
                        break e;
                      }
                      Jl = i.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var w = (l = Jl).child;
                  if (0 != (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Jl = w);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 != (2048 & (u = Jl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ou(9, u);
                          }
                        } catch (e) {
                          Cc(u, u.return, e);
                        }
                      if (u === l) {
                        Jl = null;
                        break e;
                      }
                      var x = u.sibling;
                      if (null !== x) {
                        (x.return = u.return), (Jl = x);
                        break e;
                      }
                      Jl = u.return;
                    }
                }
                if (
                  ((Tu = o),
                  Uo(),
                  at && "function" == typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Mu.transition = t);
            }
          }
          return !1;
        }
        function Ec(e, t, n) {
          (e = Aa(e, (t = hl(0, (t = sl(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (vt(e, 1, t), oc(e, t));
        }
        function Cc(e, t, n) {
          if (3 === e.tag) Ec(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ec(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  (t = Aa(t, (e = ml(t, (e = sl(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (vt(t, 1, e), oc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Oc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            _u === e &&
              (Lu & n) === n &&
              (4 === Au ||
              (3 === Au && (130023424 & Lu) === Lu && 500 > Ke() - Wu)
                ? pc(e, 0)
                : (Ru |= n)),
            oc(e, t);
        }
        function Pc(e, t) {
          0 === t &&
            (0 == (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 == (130023424 & (st <<= 1)) && (st = 4194304)));
          var n = tc();
          null !== (e = _a(e, t)) && (vt(e, t, n), oc(e, n));
        }
        function Mc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pc(e, n);
        }
        function Tc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Pc(e, n);
        }
        function _c(e, t) {
          return Qe(e, t);
        }
        function Nc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lc(e, t, n, r) {
          return new Nc(e, t, n, r);
        }
        function jc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function zc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ac(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" == typeof e)) jc(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Dc(n.children, o, i, t);
              case E:
                (l = 8), (o |= 8);
                break;
              case C:
                return (
                  ((e = Lc(12, n, t, 2 | o)).elementType = C), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Lc(13, n, t, o)).elementType = T), (e.lanes = i), e
                );
              case _:
                return (
                  ((e = Lc(19, n, t, o)).elementType = _), (e.lanes = i), e
                );
              case j:
                return Ic(n, o, i, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case O:
                      l = 10;
                      break e;
                    case P:
                      l = 9;
                      break e;
                    case M:
                      l = 11;
                      break e;
                    case N:
                      l = 14;
                      break e;
                    case L:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lc(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Dc(e, t, n, r) {
          return ((e = Lc(7, e, r, t)).lanes = n), e;
        }
        function Ic(e, t, n, r) {
          return (
            ((e = Lc(22, e, r, t)).elementType = j),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fc(e, t, n) {
          return ((e = Lc(6, e, null, t)).lanes = n), e;
        }
        function Rc(e, t, n) {
          return (
            ((t = Lc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Hc(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bc(e, t, n, r, o, a, i, l, u) {
          return (
            (e = new Hc(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Lc(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            La(a),
            e
          );
        }
        function Wc(e) {
          if (!e) return Mo;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (jo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (jo(n)) return Do(e, n, t);
          }
          return t;
        }
        function Uc(e, t, n, r, o, a, i, l, u) {
          return (
            ((e = Bc(n, r, !0, e, 0, a, 0, l, u)).context = Wc(null)),
            (n = e.current),
            ((a = za((r = tc()), (o = nc(n)))).callback = null != t ? t : null),
            Aa(n, a, o),
            (e.current.lanes = o),
            vt(e, o, r),
            oc(e, r),
            e
          );
        }
        function $c(e, t, n, r) {
          var o = t.current,
            a = tc(),
            i = nc(o);
          return (
            (n = Wc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = za(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Aa(o, t, i)) && (rc(e, o, i, a), Da(e, o, i)),
            i
          );
        }
        function Vc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Gc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qc(e, t) {
          Gc(e, t), (e = e.alternate) && Gc(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _o.current) wl = !0;
            else {
              if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        _l(t), ha();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        jo(t.type) && Io(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        Po(ya, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Po(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 != (n & t.child.childLanes)
                            ? Fl(e, t, n)
                            : (Po(ui, 1 & ui.current),
                              null !== (e = Vl(e, t, n)) ? e.sibling : null);
                        Po(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))
                        ) {
                          if (r) return Ul(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Po(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Vl(e, t, n);
                  })(e, t, n)
                );
              wl = 0 != (131072 & e.flags);
            }
          else (wl = !1), aa && 0 != (1048576 & t.flags) && ea(t, Qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $l(e, t), (e = t.pendingProps);
              var o = Lo(t, To.current);
              Ca(t, n), (o = Ei(null, t, r, e, o, n));
              var i = Ci();
              return (
                (t.flags |= 1),
                "object" == typeof o &&
                null !== o &&
                "function" == typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    jo(r) ? ((i = !0), Io(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    La(t),
                    (o.updater = Wa),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    Ga(t, r, e, n),
                    (t = Tl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    aa && i && ta(t),
                    xl(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($l(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return jc(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === M) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = va(r, e)),
                  o)
                ) {
                  case 0:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ml(null, t, r, e, n);
                    break e;
                  case 11:
                    t = kl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, va(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Pl(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ml(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 3:
              e: {
                if ((_l(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  ja(e, t),
                  Fa(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Nl(e, t, r, n, (o = sl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Nl(e, t, r, n, (o = sl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = co(t.stateNode.containerInfo.firstChild),
                      ra = t,
                      aa = !0,
                      ia = null,
                      n = Za(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ha(), r === o)) {
                    t = Vl(e, t, n);
                    break e;
                  }
                  xl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && sa(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                no(r, o)
                  ? (l = null)
                  : null !== i && no(r, i) && (t.flags |= 32),
                Ol(e, t),
                xl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && sa(t), null;
            case 13:
              return Fl(e, t, n);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ka(t, null, r, n)) : xl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                kl(e, t, r, (o = t.elementType === r ? o : va(r, o)), n)
              );
            case 7:
              return xl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  Po(ya, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === o.children && !_o.current) {
                      t = Vl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === i.tag) {
                              (c = za(-1, n & -n)).tag = 2;
                              var s = i.updateQueue;
                              if (null !== s) {
                                var f = (s = s.shared).pending;
                                null === f
                                  ? (c.next = c)
                                  : ((c.next = f.next), (f.next = c)),
                                  (s.pending = c);
                              }
                            }
                            (i.lanes |= n),
                              null !== (c = i.alternate) && (c.lanes |= n),
                              Ea(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Ea(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                xl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Ca(t, n),
                (r = r((o = Oa(o)))),
                (t.flags |= 1),
                xl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = va((r = t.type), t.pendingProps)),
                Sl(e, t, r, (o = va(r.type, o)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : va(r, o)),
                $l(e, t),
                (t.tag = 1),
                jo(r) ? ((e = !0), Io(t)) : (e = !1),
                Ca(t, n),
                $a(t, r, o),
                Ga(t, r, o, n),
                Tl(null, t, r, !0, e, n)
              );
            case 19:
              return Ul(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Xc =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function qc(e) {
          this._internalRoot = e;
        }
        function Yc(e) {
          this._internalRoot = e;
        }
        function Kc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function es(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" == typeof o) {
              var l = o;
              o = function () {
                var e = Vc(i);
                l.call(e);
              };
            }
            $c(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" == typeof r) {
                  var a = r;
                  r = function () {
                    var e = Vc(i);
                    a.call(e);
                  };
                }
                var i = Uc(t, r, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = i),
                  (e[mo] = i.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  fc(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" == typeof r) {
                var l = r;
                r = function () {
                  var e = Vc(u);
                  l.call(e);
                };
              }
              var u = Bc(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = u),
                (e[mo] = u.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                fc(function () {
                  $c(t, u, n, r);
                }),
                u
              );
            })(n, t, e, o, r);
          return Vc(i);
        }
        (Yc.prototype.render = qc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            $c(e, t, null, null);
          }),
          (Yc.prototype.unmount = qc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fc(function () {
                  $c(null, e, null, null);
                }),
                  (t[mo] = null);
              }
            }),
          (Yc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < jt.length && 0 !== t && t < jt[n].priority;
                n++
              );
              jt.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    oc(t, Ke()),
                    0 == (6 & Tu) && ((Uu = Ke() + 500), Uo()));
                }
                break;
              case 13:
                fc(function () {
                  var t = _a(e, 1);
                  if (null !== t) {
                    var n = tc();
                    rc(t, e, 1, n);
                  }
                }),
                  Qc(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = _a(e, 134217728);
              null !== t && rc(t, e, 134217728, tc()), Qc(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = _a(e, t);
              null !== n && rc(n, e, t, tc()), Qc(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ko(r);
                      if (!o) throw Error(a(90));
                      Q(r), Z(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Me = sc),
          (Te = fc);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [wo, xo, ko, Oe, Pe, sc],
          },
          ns = {
            findFiberByHostInstance: bo,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rs = {
            bundleType: ns.bundleType,
            version: ns.version,
            rendererPackageName: ns.rendererPackageName,
            rendererConfig: ns.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ns.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var os = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!os.isDisabled && os.supportsFiber)
            try {
              (ot = os.inject(rs)), (at = os);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Kc(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Kc(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Xc;
            return (
              null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Bc(e, 1, !1, null, 0, n, 0, r, o)),
              (e[mo] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new qc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return null === (e = Ve(t)) ? null : e.stateNode;
          }),
          (t.flushSync = function (e) {
            return fc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zc(t)) throw Error(a(200));
            return es(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Kc(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              l = Xc;
            if (
              (null != n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Uc(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[mo] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Yc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zc(t)) throw Error(a(200));
            return es(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zc(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (fc(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[mo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = sc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zc(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return es(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      745: (e, t, n) => {
        "use strict";
        var r = n(935);
        (t.s = r.createRoot), r.hydrateRoot;
      },
      935: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      921: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.server_context"),
          s = Symbol.for("react.forward_ref"),
          f = Symbol.for("react.suspense"),
          d = Symbol.for("react.suspense_list"),
          p = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy");
        Symbol.for("react.offscreen");
        Symbol.for("react.module.reference"),
          (t.isFragment = function (e) {
            return (
              (function (e) {
                if ("object" == typeof e && null !== e) {
                  var t = e.$$typeof;
                  switch (t) {
                    case n:
                      switch ((e = e.type)) {
                        case o:
                        case i:
                        case a:
                        case f:
                        case d:
                          return e;
                        default:
                          switch ((e = e && e.$$typeof)) {
                            case c:
                            case u:
                            case s:
                            case h:
                            case p:
                            case l:
                              return e;
                            default:
                              return t;
                          }
                      }
                    case r:
                      return t;
                  }
                }
              })(e) === o
            );
          });
      },
      864: (e, t, n) => {
        "use strict";
        e.exports = n(921);
      },
      408: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator,
          h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, o) && !E.hasOwnProperty(o) && (a[o] = t[o]);
          var u = arguments.length - 2;
          if (1 === u) a.children = r;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            a.children = c;
          }
          if (e && e.defaultProps)
            for (o in (u = e.defaultProps)) void 0 === a[o] && (a[o] = u[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: S.current,
          };
        }
        function O(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function M(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, o, a, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === a ? "." + M(u, 0) : a),
              x(i)
                ? ((o = ""),
                  null != e && (o = e.replace(P, "$&/") + "/"),
                  T(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (O(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (a = "" === a ? "." : a + ":"), x(e)))
            for (var c = 0; c < e.length; c++) {
              var s = a + M((l = e[c]), c);
              u += T(l, t, o, s, i);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof s)
          )
            for (e = s.call(e), c = 0; !(l = e.next()).done; )
              u += T((l = l.value), t, o, (s = a + M(l, c++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function _(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          j = { transition: null },
          z = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: j,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: _,
          forEach: function (e, t, n) {
            _(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              _(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              _(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!O(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = S.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = r;
            else if (1 < c) {
              u = Array(c);
              for (var s = 0; s < c; s++) u[s] = arguments[s + 2];
              o.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = O),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = j.transition;
            j.transition = {};
            try {
              e();
            } finally {
              j.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      294: (e, t, n) => {
        "use strict";
        e.exports = n(408);
      },
      53: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                c = l + 1,
                s = e[c];
              if (0 > a(u, n))
                c < o && 0 > a(s, u)
                  ? ((e[r] = s), (e[c] = n), (r = c))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(c < o && 0 > a(s, n))) break e;
                (e[r] = s), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var c = [],
          s = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" == typeof setTimeout ? setTimeout : null,
          y = "function" == typeof clearTimeout ? clearTimeout : null,
          b = "undefined" != typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(s); null !== t; ) {
            if (null === t.callback) o(s);
            else {
              if (!(t.startTime <= e)) break;
              o(s), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(s);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(c)) (m = !0), j(k);
            else {
              var t = r(s);
              null !== t && z(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), y(O), (O = -1)), (h = !0);
          var a = p;
          try {
            for (
              w(n), d = r(c);
              null !== d && (!(d.expirationTime > n) || (e && !T()));

            ) {
              var i = d.callback;
              if ("function" == typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof l
                    ? (d.callback = l)
                    : d === r(c) && o(c),
                  w(n);
              } else o(c);
              d = r(c);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(s);
              null !== f && z(x, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = a), (h = !1);
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          O = -1,
          P = 5,
          M = -1;
        function T() {
          return !(t.unstable_now() - M < P);
        }
        function _() {
          if (null !== C) {
            var e = t.unstable_now();
            M = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" == typeof b)
          S = function () {
            b(_);
          };
        else if ("undefined" != typeof MessageChannel) {
          var N = new MessageChannel(),
            L = N.port2;
          (N.port1.onmessage = _),
            (S = function () {
              L.postMessage(null);
            });
        } else
          S = function () {
            v(_, 0);
          };
        function j(e) {
          (C = e), E || ((E = !0), S());
        }
        function z(e, n) {
          O = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), j(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ((a =
                "object" == typeof a &&
                null !== a &&
                "number" == typeof (a = a.delay) &&
                0 < a
                  ? i + a
                  : i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(s, e),
                  null === r(c) &&
                    e === r(s) &&
                    (g ? (y(O), (O = -1)) : (g = !0), z(x, a - i)))
                : ((e.sortIndex = l), n(c, e), m || h || ((m = !0), j(k))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        "use strict";
        e.exports = n(53);
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, i = [], l = 0; l < e.length; l++) {
            var u = e[l],
              c = r.base ? u[0] + r.base : u[0],
              s = a[c] || 0,
              f = "".concat(c, " ").concat(s);
            a[c] = s + 1;
            var d = n(f),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(p);
            else {
              var h = o(p, r);
              (r.byIndex = l),
                t.splice(l, 0, { identifier: f, updater: h, references: 1 });
            }
            i.push(f);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var l = n(a[i]);
              t[l].references--;
            }
            for (var u = r(e, o), c = 0; c < a.length; c++) {
              var s = n(a[c]);
              0 === t[s].references && (t[s].updater(), t.splice(s, 1));
            }
            a = u;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      967: (e, t) => {
        var n;
        !(function () {
          "use strict";
          var r = {}.hasOwnProperty;
          function o() {
            for (var e = "", t = 0; t < arguments.length; t++) {
              var n = arguments[t];
              n && (e = i(e, a(n)));
            }
            return e;
          }
          function a(e) {
            if ("string" == typeof e || "number" == typeof e) return e;
            if ("object" != typeof e) return "";
            if (Array.isArray(e)) return o.apply(null, e);
            if (
              e.toString !== Object.prototype.toString &&
              !e.toString.toString().includes("[native code]")
            )
              return e.toString();
            var t = "";
            for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
            return t;
          }
          function i(e, t) {
            return t ? (e ? e + " " + t : e + t) : e;
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (n = function () {
                  return o;
                }.apply(t, [])) || (e.exports = n);
        })();
      },
    },
    r = {};
  function o(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var a = (r[e] = { id: e, exports: {} });
    return n[e](a, a.exports, o), a.exports;
  }
  (o.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return o.d(t, { a: t }), t;
  }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (o.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var a = Object.create(null);
      o.r(a);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var l = 2 & r && n; "object" == typeof l && !~e.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => n[e]));
      return (i.default = () => n), o.d(a, i), a;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.nc = void 0),
    (() => {
      "use strict";
      var e = o(294),
        t = o.t(e, 2),
        n = o(745);
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(null, arguments)
        );
      }
      const a = {
        icon: {
          tag: "svg",
          attrs: { viewBox: "64 64 896 896", focusable: "false" },
          children: [
            {
              tag: "path",
              attrs: {
                d: "M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-56 284H192V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zm-56 284H192V612h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm590-630H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32zm-32 284H612V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zM746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm142 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
              },
            },
          ],
        },
        name: "qrcode",
        theme: "outlined",
      };
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function l(e, t) {
        if (e) {
          if ("string" == typeof e) return i(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }
      function u(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = a.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          l(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function c(e) {
        return (
          (c =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          c(e)
        );
      }
      function s(e) {
        var t = (function (e, t) {
          if ("object" != c(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, "string");
            if ("object" != c(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e);
        return "symbol" == c(t) ? t : t + "";
      }
      function f(e, t, n) {
        return (
          (t = s(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function d(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n = {};
            for (var r in e)
              if ({}.hasOwnProperty.call(e, r)) {
                if (t.includes(r)) continue;
                n[r] = e[r];
              }
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.includes(n) ||
                ({}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var p = o(967),
        h = o.n(p);
      function m(e, t) {
        (function (e) {
          return (
            "string" == typeof e && -1 !== e.indexOf(".") && 1 === parseFloat(e)
          );
        })(e) && (e = "100%");
        var n = (function (e) {
          return "string" == typeof e && -1 !== e.indexOf("%");
        })(e);
        return (
          (e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e)))),
          n && (e = parseInt(String(e * t), 10) / 100),
          Math.abs(e - t) < 1e-6
            ? 1
            : (e =
                360 === t
                  ? (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t))
                  : (e % t) / parseFloat(String(t)))
        );
      }
      function g(e) {
        return Math.min(1, Math.max(0, e));
      }
      function v(e) {
        return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
      }
      function y(e) {
        return e <= 1 ? "".concat(100 * Number(e), "%") : e;
      }
      function b(e) {
        return 1 === e.length ? "0" + e : String(e);
      }
      function w(e, t, n) {
        (e = m(e, 255)), (t = m(t, 255)), (n = m(n, 255));
        var r = Math.max(e, t, n),
          o = Math.min(e, t, n),
          a = 0,
          i = 0,
          l = (r + o) / 2;
        if (r === o) (i = 0), (a = 0);
        else {
          var u = r - o;
          switch (((i = l > 0.5 ? u / (2 - r - o) : u / (r + o)), r)) {
            case e:
              a = (t - n) / u + (t < n ? 6 : 0);
              break;
            case t:
              a = (n - e) / u + 2;
              break;
            case n:
              a = (e - t) / u + 4;
          }
          a /= 6;
        }
        return { h: a, s: i, l };
      }
      function x(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * n * (t - e)
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      function k(e, t, n) {
        (e = m(e, 255)), (t = m(t, 255)), (n = m(n, 255));
        var r = Math.max(e, t, n),
          o = Math.min(e, t, n),
          a = 0,
          i = r,
          l = r - o,
          u = 0 === r ? 0 : l / r;
        if (r === o) a = 0;
        else {
          switch (r) {
            case e:
              a = (t - n) / l + (t < n ? 6 : 0);
              break;
            case t:
              a = (n - e) / l + 2;
              break;
            case n:
              a = (e - t) / l + 4;
          }
          a /= 6;
        }
        return { h: a, s: u, v: i };
      }
      function S(e, t, n, r) {
        var o = [
          b(Math.round(e).toString(16)),
          b(Math.round(t).toString(16)),
          b(Math.round(n).toString(16)),
        ];
        return r &&
          o[0].startsWith(o[0].charAt(1)) &&
          o[1].startsWith(o[1].charAt(1)) &&
          o[2].startsWith(o[2].charAt(1))
          ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
          : o.join("");
      }
      function E(e) {
        return C(e) / 255;
      }
      function C(e) {
        return parseInt(e, 16);
      }
      var O = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        goldenrod: "#daa520",
        gold: "#ffd700",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavenderblush: "#fff0f5",
        lavender: "#e6e6fa",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
      };
      function P(e) {
        var t,
          n,
          r,
          o = { r: 0, g: 0, b: 0 },
          a = 1,
          i = null,
          l = null,
          u = null,
          c = !1,
          s = !1;
        return (
          "string" == typeof e &&
            (e = (function (e) {
              if (0 === (e = e.trim().toLowerCase()).length) return !1;
              var t = !1;
              if (O[e]) (e = O[e]), (t = !0);
              else if ("transparent" === e)
                return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              var n = N.rgb.exec(e);
              return n
                ? { r: n[1], g: n[2], b: n[3] }
                : (n = N.rgba.exec(e))
                ? { r: n[1], g: n[2], b: n[3], a: n[4] }
                : (n = N.hsl.exec(e))
                ? { h: n[1], s: n[2], l: n[3] }
                : (n = N.hsla.exec(e))
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : (n = N.hsv.exec(e))
                ? { h: n[1], s: n[2], v: n[3] }
                : (n = N.hsva.exec(e))
                ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                : (n = N.hex8.exec(e))
                ? {
                    r: C(n[1]),
                    g: C(n[2]),
                    b: C(n[3]),
                    a: E(n[4]),
                    format: t ? "name" : "hex8",
                  }
                : (n = N.hex6.exec(e))
                ? {
                    r: C(n[1]),
                    g: C(n[2]),
                    b: C(n[3]),
                    format: t ? "name" : "hex",
                  }
                : (n = N.hex4.exec(e))
                ? {
                    r: C(n[1] + n[1]),
                    g: C(n[2] + n[2]),
                    b: C(n[3] + n[3]),
                    a: E(n[4] + n[4]),
                    format: t ? "name" : "hex8",
                  }
                : !!(n = N.hex3.exec(e)) && {
                    r: C(n[1] + n[1]),
                    g: C(n[2] + n[2]),
                    b: C(n[3] + n[3]),
                    format: t ? "name" : "hex",
                  };
            })(e)),
          "object" == typeof e &&
            (L(e.r) && L(e.g) && L(e.b)
              ? ((t = e.r),
                (n = e.g),
                (r = e.b),
                (o = {
                  r: 255 * m(t, 255),
                  g: 255 * m(n, 255),
                  b: 255 * m(r, 255),
                }),
                (c = !0),
                (s = "%" === String(e.r).substr(-1) ? "prgb" : "rgb"))
              : L(e.h) && L(e.s) && L(e.v)
              ? ((i = y(e.s)),
                (l = y(e.v)),
                (o = (function (e, t, n) {
                  (e = 6 * m(e, 360)), (t = m(t, 100)), (n = m(n, 100));
                  var r = Math.floor(e),
                    o = e - r,
                    a = n * (1 - t),
                    i = n * (1 - o * t),
                    l = n * (1 - (1 - o) * t),
                    u = r % 6;
                  return {
                    r: 255 * [n, i, a, a, l, n][u],
                    g: 255 * [l, n, n, i, a, a][u],
                    b: 255 * [a, a, l, n, n, i][u],
                  };
                })(e.h, i, l)),
                (c = !0),
                (s = "hsv"))
              : L(e.h) &&
                L(e.s) &&
                L(e.l) &&
                ((i = y(e.s)),
                (u = y(e.l)),
                (o = (function (e, t, n) {
                  var r, o, a;
                  if (
                    ((e = m(e, 360)), (t = m(t, 100)), (n = m(n, 100)), 0 === t)
                  )
                    (o = n), (a = n), (r = n);
                  else {
                    var i = n < 0.5 ? n * (1 + t) : n + t - n * t,
                      l = 2 * n - i;
                    (r = x(l, i, e + 1 / 3)),
                      (o = x(l, i, e)),
                      (a = x(l, i, e - 1 / 3));
                  }
                  return { r: 255 * r, g: 255 * o, b: 255 * a };
                })(e.h, i, u)),
                (c = !0),
                (s = "hsl")),
            Object.prototype.hasOwnProperty.call(e, "a") && (a = e.a)),
          (a = v(a)),
          {
            ok: c,
            format: e.format || s,
            r: Math.min(255, Math.max(o.r, 0)),
            g: Math.min(255, Math.max(o.g, 0)),
            b: Math.min(255, Math.max(o.b, 0)),
            a,
          }
        );
      }
      var M = "(?:"
          .concat("[-\\+]?\\d*\\.\\d+%?", ")|(?:")
          .concat("[-\\+]?\\d+%?", ")"),
        T = "[\\s|\\(]+("
          .concat(M, ")[,|\\s]+(")
          .concat(M, ")[,|\\s]+(")
          .concat(M, ")\\s*\\)?"),
        _ = "[\\s|\\(]+("
          .concat(M, ")[,|\\s]+(")
          .concat(M, ")[,|\\s]+(")
          .concat(M, ")[,|\\s]+(")
          .concat(M, ")\\s*\\)?"),
        N = {
          CSS_UNIT: new RegExp(M),
          rgb: new RegExp("rgb" + T),
          rgba: new RegExp("rgba" + _),
          hsl: new RegExp("hsl" + T),
          hsla: new RegExp("hsla" + _),
          hsv: new RegExp("hsv" + T),
          hsva: new RegExp("hsva" + _),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        };
      function L(e) {
        return Boolean(N.CSS_UNIT.exec(String(e)));
      }
      var j = 2,
        z = 0.16,
        A = 0.05,
        D = 0.05,
        I = 0.15,
        F = 5,
        R = 4,
        H = [
          { index: 7, opacity: 0.15 },
          { index: 6, opacity: 0.25 },
          { index: 5, opacity: 0.3 },
          { index: 5, opacity: 0.45 },
          { index: 5, opacity: 0.65 },
          { index: 5, opacity: 0.85 },
          { index: 4, opacity: 0.9 },
          { index: 3, opacity: 0.95 },
          { index: 2, opacity: 0.97 },
          { index: 1, opacity: 0.98 },
        ];
      function B(e) {
        var t = k(e.r, e.g, e.b);
        return { h: 360 * t.h, s: t.s, v: t.v };
      }
      function W(e) {
        var t = e.r,
          n = e.g,
          r = e.b;
        return "#".concat(S(t, n, r, !1));
      }
      function U(e, t, n) {
        var r;
        return (
          (r =
            Math.round(e.h) >= 60 && Math.round(e.h) <= 240
              ? n
                ? Math.round(e.h) - j * t
                : Math.round(e.h) + j * t
              : n
              ? Math.round(e.h) + j * t
              : Math.round(e.h) - j * t) < 0
            ? (r += 360)
            : r >= 360 && (r -= 360),
          r
        );
      }
      function $(e, t, n) {
        return 0 === e.h && 0 === e.s
          ? e.s
          : ((r = n ? e.s - z * t : t === R ? e.s + z : e.s + A * t) > 1 &&
              (r = 1),
            n && t === F && r > 0.1 && (r = 0.1),
            r < 0.06 && (r = 0.06),
            Number(r.toFixed(2)));
        var r;
      }
      function V(e, t, n) {
        var r;
        return (
          (r = n ? e.v + D * t : e.v - I * t) > 1 && (r = 1),
          Number(r.toFixed(2))
        );
      }
      function G(e) {
        for (
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = [],
            r = P(e),
            o = F;
          o > 0;
          o -= 1
        ) {
          var a = B(r),
            i = W(P({ h: U(a, o, !0), s: $(a, o, !0), v: V(a, o, !0) }));
          n.push(i);
        }
        n.push(W(r));
        for (var l = 1; l <= R; l += 1) {
          var u = B(r),
            c = W(P({ h: U(u, l), s: $(u, l), v: V(u, l) }));
          n.push(c);
        }
        return "dark" === t.theme
          ? H.map(function (e) {
              var r,
                o,
                a,
                i = e.index,
                l = e.opacity;
              return W(
                ((r = P(t.backgroundColor || "#141414")),
                (a = (100 * l) / 100),
                {
                  r: ((o = P(n[i])).r - r.r) * a + r.r,
                  g: (o.g - r.g) * a + r.g,
                  b: (o.b - r.b) * a + r.b,
                })
              );
            })
          : n;
      }
      var Q = {
          red: "#F5222D",
          volcano: "#FA541C",
          orange: "#FA8C16",
          gold: "#FAAD14",
          yellow: "#FADB14",
          lime: "#A0D911",
          green: "#52C41A",
          cyan: "#13C2C2",
          blue: "#1677FF",
          geekblue: "#2F54EB",
          purple: "#722ED1",
          magenta: "#EB2F96",
          grey: "#666666",
        },
        X = [
          "#fff1f0",
          "#ffccc7",
          "#ffa39e",
          "#ff7875",
          "#ff4d4f",
          "#f5222d",
          "#cf1322",
          "#a8071a",
          "#820014",
          "#5c0011",
        ];
      X.primary = X[5];
      var q = [
        "#fff2e8",
        "#ffd8bf",
        "#ffbb96",
        "#ff9c6e",
        "#ff7a45",
        "#fa541c",
        "#d4380d",
        "#ad2102",
        "#871400",
        "#610b00",
      ];
      q.primary = q[5];
      var Y = [
        "#fff7e6",
        "#ffe7ba",
        "#ffd591",
        "#ffc069",
        "#ffa940",
        "#fa8c16",
        "#d46b08",
        "#ad4e00",
        "#873800",
        "#612500",
      ];
      Y.primary = Y[5];
      var K = [
        "#fffbe6",
        "#fff1b8",
        "#ffe58f",
        "#ffd666",
        "#ffc53d",
        "#faad14",
        "#d48806",
        "#ad6800",
        "#874d00",
        "#613400",
      ];
      K.primary = K[5];
      var Z = [
        "#feffe6",
        "#ffffb8",
        "#fffb8f",
        "#fff566",
        "#ffec3d",
        "#fadb14",
        "#d4b106",
        "#ad8b00",
        "#876800",
        "#614700",
      ];
      Z.primary = Z[5];
      var J = [
        "#fcffe6",
        "#f4ffb8",
        "#eaff8f",
        "#d3f261",
        "#bae637",
        "#a0d911",
        "#7cb305",
        "#5b8c00",
        "#3f6600",
        "#254000",
      ];
      J.primary = J[5];
      var ee = [
        "#f6ffed",
        "#d9f7be",
        "#b7eb8f",
        "#95de64",
        "#73d13d",
        "#52c41a",
        "#389e0d",
        "#237804",
        "#135200",
        "#092b00",
      ];
      ee.primary = ee[5];
      var te = [
        "#e6fffb",
        "#b5f5ec",
        "#87e8de",
        "#5cdbd3",
        "#36cfc9",
        "#13c2c2",
        "#08979c",
        "#006d75",
        "#00474f",
        "#002329",
      ];
      te.primary = te[5];
      var ne = [
        "#e6f4ff",
        "#bae0ff",
        "#91caff",
        "#69b1ff",
        "#4096ff",
        "#1677ff",
        "#0958d9",
        "#003eb3",
        "#002c8c",
        "#001d66",
      ];
      ne.primary = ne[5];
      var re = [
        "#f0f5ff",
        "#d6e4ff",
        "#adc6ff",
        "#85a5ff",
        "#597ef7",
        "#2f54eb",
        "#1d39c4",
        "#10239e",
        "#061178",
        "#030852",
      ];
      re.primary = re[5];
      var oe = [
        "#f9f0ff",
        "#efdbff",
        "#d3adf7",
        "#b37feb",
        "#9254de",
        "#722ed1",
        "#531dab",
        "#391085",
        "#22075e",
        "#120338",
      ];
      oe.primary = oe[5];
      var ae = [
        "#fff0f6",
        "#ffd6e7",
        "#ffadd2",
        "#ff85c0",
        "#f759ab",
        "#eb2f96",
        "#c41d7f",
        "#9e1068",
        "#780650",
        "#520339",
      ];
      ae.primary = ae[5];
      var ie = [
        "#a6a6a6",
        "#999999",
        "#8c8c8c",
        "#808080",
        "#737373",
        "#666666",
        "#404040",
        "#1a1a1a",
        "#000000",
        "#000000",
      ];
      ie.primary = ie[5];
      var le = {
          red: X,
          volcano: q,
          orange: Y,
          gold: K,
          yellow: Z,
          lime: J,
          green: ee,
          cyan: te,
          blue: ne,
          geekblue: re,
          purple: oe,
          magenta: ae,
          grey: ie,
        },
        ue = [
          "#2a1215",
          "#431418",
          "#58181c",
          "#791a1f",
          "#a61d24",
          "#d32029",
          "#e84749",
          "#f37370",
          "#f89f9a",
          "#fac8c3",
        ];
      ue.primary = ue[5];
      var ce = [
        "#2b1611",
        "#441d12",
        "#592716",
        "#7c3118",
        "#aa3e19",
        "#d84a1b",
        "#e87040",
        "#f3956a",
        "#f8b692",
        "#fad4bc",
      ];
      ce.primary = ce[5];
      var se = [
        "#2b1d11",
        "#442a11",
        "#593815",
        "#7c4a15",
        "#aa6215",
        "#d87a16",
        "#e89a3c",
        "#f3b765",
        "#f8cf8d",
        "#fae3b7",
      ];
      se.primary = se[5];
      var fe = [
        "#2b2111",
        "#443111",
        "#594214",
        "#7c5914",
        "#aa7714",
        "#d89614",
        "#e8b339",
        "#f3cc62",
        "#f8df8b",
        "#faedb5",
      ];
      fe.primary = fe[5];
      var de = [
        "#2b2611",
        "#443b11",
        "#595014",
        "#7c6e14",
        "#aa9514",
        "#d8bd14",
        "#e8d639",
        "#f3ea62",
        "#f8f48b",
        "#fafab5",
      ];
      de.primary = de[5];
      var pe = [
        "#1f2611",
        "#2e3c10",
        "#3e4f13",
        "#536d13",
        "#6f9412",
        "#8bbb11",
        "#a9d134",
        "#c9e75d",
        "#e4f88b",
        "#f0fab5",
      ];
      pe.primary = pe[5];
      var he = [
        "#162312",
        "#1d3712",
        "#274916",
        "#306317",
        "#3c8618",
        "#49aa19",
        "#6abe39",
        "#8fd460",
        "#b2e58b",
        "#d5f2bb",
      ];
      he.primary = he[5];
      var me = [
        "#112123",
        "#113536",
        "#144848",
        "#146262",
        "#138585",
        "#13a8a8",
        "#33bcb7",
        "#58d1c9",
        "#84e2d8",
        "#b2f1e8",
      ];
      me.primary = me[5];
      var ge = [
        "#111a2c",
        "#112545",
        "#15325b",
        "#15417e",
        "#1554ad",
        "#1668dc",
        "#3c89e8",
        "#65a9f3",
        "#8dc5f8",
        "#b7dcfa",
      ];
      ge.primary = ge[5];
      var ve = [
        "#131629",
        "#161d40",
        "#1c2755",
        "#203175",
        "#263ea0",
        "#2b4acb",
        "#5273e0",
        "#7f9ef3",
        "#a8c1f8",
        "#d2e0fa",
      ];
      ve.primary = ve[5];
      var ye = [
        "#1a1325",
        "#24163a",
        "#301c4d",
        "#3e2069",
        "#51258f",
        "#642ab5",
        "#854eca",
        "#ab7ae0",
        "#cda8f0",
        "#ebd7fa",
      ];
      ye.primary = ye[5];
      var be = [
        "#291321",
        "#40162f",
        "#551c3b",
        "#75204f",
        "#a02669",
        "#cb2b83",
        "#e0529c",
        "#f37fb7",
        "#f8a8cc",
        "#fad2e3",
      ];
      be.primary = be[5];
      var we = [
        "#151515",
        "#1f1f1f",
        "#2d2d2d",
        "#393939",
        "#494949",
        "#5a5a5a",
        "#6a6a6a",
        "#7b7b7b",
        "#888888",
        "#969696",
      ];
      we.primary = we[5];
      const xe = (0, e.createContext)({});
      function ke(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ke(Object(n), !0).forEach(function (t) {
                f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ke(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ee() {
        return !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      }
      var Ce = "data-rc-order",
        Oe = "data-rc-priority",
        Pe = "rc-util-key",
        Me = new Map();
      function Te() {
        var e = (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        ).mark;
        return e ? (e.startsWith("data-") ? e : "data-".concat(e)) : Pe;
      }
      function _e(e) {
        return e.attachTo
          ? e.attachTo
          : document.querySelector("head") || document.body;
      }
      function Ne(e) {
        return Array.from((Me.get(e) || e).children).filter(function (e) {
          return "STYLE" === e.tagName;
        });
      }
      function Le(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!Ee()) return null;
        var n = t.csp,
          r = t.prepend,
          o = t.priority,
          a = void 0 === o ? 0 : o,
          i = (function (e) {
            return "queue" === e ? "prependQueue" : e ? "prepend" : "append";
          })(r),
          l = "prependQueue" === i,
          u = document.createElement("style");
        u.setAttribute(Ce, i),
          l && a && u.setAttribute(Oe, "".concat(a)),
          null != n && n.nonce && (u.nonce = null == n ? void 0 : n.nonce),
          (u.innerHTML = e);
        var c = _e(t),
          s = c.firstChild;
        if (r) {
          if (l) {
            var f = (t.styles || Ne(c)).filter(function (e) {
              if (!["prepend", "prependQueue"].includes(e.getAttribute(Ce)))
                return !1;
              var t = Number(e.getAttribute(Oe) || 0);
              return a >= t;
            });
            if (f.length)
              return c.insertBefore(u, f[f.length - 1].nextSibling), u;
          }
          c.insertBefore(u, s);
        } else c.appendChild(u);
        return u;
      }
      function je(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = _e(t);
        return (t.styles || Ne(n)).find(function (n) {
          return n.getAttribute(Te(t)) === e;
        });
      }
      function ze(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = je(e, t);
        n && _e(t).removeChild(n);
      }
      function Ae(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = _e(n),
          o = Ne(r),
          a = Se(Se({}, n), {}, { styles: o });
        !(function (e, t) {
          var n = Me.get(e);
          if (
            !n ||
            !(function (e, t) {
              if (!e) return !1;
              if (e.contains) return e.contains(t);
              for (var n = t; n; ) {
                if (n === e) return !0;
                n = n.parentNode;
              }
              return !1;
            })(document, n)
          ) {
            var r = Le("", t),
              o = r.parentNode;
            Me.set(e, o), e.removeChild(r);
          }
        })(r, a);
        var i,
          l,
          u,
          c = je(t, a);
        if (c)
          return (
            null !== (i = a.csp) &&
              void 0 !== i &&
              i.nonce &&
              c.nonce !==
                (null === (l = a.csp) || void 0 === l ? void 0 : l.nonce) &&
              (c.nonce =
                null === (u = a.csp) || void 0 === u ? void 0 : u.nonce),
            c.innerHTML !== e && (c.innerHTML = e),
            c
          );
        var s = Le(e, a);
        return s.setAttribute(Te(a), t), s;
      }
      function De(e) {
        var t;
        return null == e || null === (t = e.getRootNode) || void 0 === t
          ? void 0
          : t.call(e);
      }
      var Ie = {},
        Fe = [];
      function Re(e, t) {}
      function He(e, t) {}
      function Be(e, t, n) {
        t || Ie[n] || (e(!1, n), (Ie[n] = !0));
      }
      function We(e, t) {
        Be(Re, e, t);
      }
      (We.preMessage = function (e) {
        Fe.push(e);
      }),
        (We.resetWarned = function () {
          Ie = {};
        }),
        (We.noteOnce = function (e, t) {
          Be(He, e, t);
        });
      const Ue = We;
      function $e(e) {
        return (
          "object" === c(e) &&
          "string" == typeof e.name &&
          "string" == typeof e.theme &&
          ("object" === c(e.icon) || "function" == typeof e.icon)
        );
      }
      function Ve() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Object.keys(e).reduce(function (t, n) {
          var r,
            o = e[n];
          return (
            "class" === n
              ? ((t.className = o), delete t.class)
              : (delete t[n],
                (t[
                  ((r = n),
                  r.replace(/-(.)/g, function (e, t) {
                    return t.toUpperCase();
                  }))
                ] = o)),
            t
          );
        }, {});
      }
      function Ge(t, n, r) {
        return r
          ? e.createElement(
              t.tag,
              Se(Se({ key: n }, Ve(t.attrs)), r),
              (t.children || []).map(function (e, r) {
                return Ge(e, "".concat(n, "-").concat(t.tag, "-").concat(r));
              })
            )
          : e.createElement(
              t.tag,
              Se({ key: n }, Ve(t.attrs)),
              (t.children || []).map(function (e, r) {
                return Ge(e, "".concat(n, "-").concat(t.tag, "-").concat(r));
              })
            );
      }
      function Qe(e) {
        return G(e)[0];
      }
      function Xe(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      var qe = [
          "icon",
          "className",
          "onClick",
          "style",
          "primaryColor",
          "secondaryColor",
        ],
        Ye = {
          primaryColor: "#333",
          secondaryColor: "#E6E6E6",
          calculated: !1,
        },
        Ke = function (t) {
          var n,
            r,
            o,
            a,
            i,
            l,
            u,
            c = t.icon,
            s = t.className,
            f = t.onClick,
            p = t.style,
            h = t.primaryColor,
            m = t.secondaryColor,
            g = d(t, qe),
            v = e.useRef(),
            y = Ye;
          if (
            (h && (y = { primaryColor: h, secondaryColor: m || Qe(h) }),
            (n = v),
            (r = (0, e.useContext)(xe)),
            (o = r.csp),
            (a = r.prefixCls),
            (i =
              "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n"),
            a && (i = i.replace(/anticon/g, a)),
            (0, e.useEffect)(function () {
              var e,
                t = (function (e) {
                  return De(e) instanceof ShadowRoot;
                })((e = n.current))
                  ? De(e)
                  : null;
              Ae(i, "@ant-design-icons", { prepend: !0, csp: o, attachTo: t });
            }, []),
            (l = $e(c)),
            (u = "icon should be icon definiton, but got ".concat(c)),
            Ue(l, "[@ant-design/icons] ".concat(u)),
            !$e(c))
          )
            return null;
          var b = c;
          return (
            b &&
              "function" == typeof b.icon &&
              (b = Se(
                Se({}, b),
                {},
                { icon: b.icon(y.primaryColor, y.secondaryColor) }
              )),
            Ge(
              b.icon,
              "svg-".concat(b.name),
              Se(
                Se(
                  {
                    className: s,
                    onClick: f,
                    style: p,
                    "data-icon": b.name,
                    width: "1em",
                    height: "1em",
                    fill: "currentColor",
                    "aria-hidden": "true",
                  },
                  g
                ),
                {},
                { ref: v }
              )
            )
          );
        };
      (Ke.displayName = "IconReact"),
        (Ke.getTwoToneColors = function () {
          return Se({}, Ye);
        }),
        (Ke.setTwoToneColors = function (e) {
          var t = e.primaryColor,
            n = e.secondaryColor;
          (Ye.primaryColor = t),
            (Ye.secondaryColor = n || Qe(t)),
            (Ye.calculated = !!n);
        });
      const Ze = Ke;
      function Je(e) {
        var t = u(Xe(e), 2),
          n = t[0],
          r = t[1];
        return Ze.setTwoToneColors({ primaryColor: n, secondaryColor: r });
      }
      var et = [
        "className",
        "icon",
        "spin",
        "rotate",
        "tabIndex",
        "onClick",
        "twoToneColor",
      ];
      Je(ne.primary);
      var tt = e.forwardRef(function (t, n) {
        var o = t.className,
          a = t.icon,
          i = t.spin,
          l = t.rotate,
          c = t.tabIndex,
          s = t.onClick,
          p = t.twoToneColor,
          m = d(t, et),
          g = e.useContext(xe),
          v = g.prefixCls,
          y = void 0 === v ? "anticon" : v,
          b = g.rootClassName,
          w = h()(
            b,
            y,
            f(
              f({}, "".concat(y, "-").concat(a.name), !!a.name),
              "".concat(y, "-spin"),
              !!i || "loading" === a.name
            ),
            o
          ),
          x = c;
        void 0 === x && s && (x = -1);
        var k = l
            ? {
                msTransform: "rotate(".concat(l, "deg)"),
                transform: "rotate(".concat(l, "deg)"),
              }
            : void 0,
          S = u(Xe(p), 2),
          E = S[0],
          C = S[1];
        return e.createElement(
          "span",
          r({ role: "img", "aria-label": a.name }, m, {
            ref: n,
            tabIndex: x,
            onClick: s,
            className: w,
          }),
          e.createElement(Ze, {
            icon: a,
            primaryColor: E,
            secondaryColor: C,
            style: k,
          })
        );
      });
      (tt.displayName = "AntdIcon"),
        (tt.getTwoToneColor = function () {
          var e = Ze.getTwoToneColors();
          return e.calculated
            ? [e.primaryColor, e.secondaryColor]
            : e.primaryColor;
        }),
        (tt.setTwoToneColor = Je);
      const nt = tt;
      var rt = function (t, n) {
        return e.createElement(nt, r({}, t, { ref: n, icon: a }));
      };
      const ot = e.forwardRef(rt);
      var at = o(379),
        it = o.n(at),
        lt = o(795),
        ut = o.n(lt),
        ct = o(569),
        st = o.n(ct),
        ft = o(565),
        dt = o.n(ft),
        pt = o(216),
        ht = o.n(pt),
        mt = o(589),
        gt = o.n(mt),
        vt = o(28),
        yt = {};
      (yt.styleTagTransform = gt()),
        (yt.setAttributes = dt()),
        (yt.insert = st().bind(null, "head")),
        (yt.domAPI = ut()),
        (yt.insertStyleElement = ht()),
        it()(vt.Z, yt),
        vt.Z && vt.Z.locals && vt.Z.locals;
      const bt = function (t) {
        var n = t.handleTrigger;
        return (
          t.isOpen,
          e.createElement(
            "div",
            null,
            e.createElement(
              "button",
              { onClick: n, className: "trigger-icon" },
              e.createElement(ot, null)
            )
          )
        );
      };
      function wt(e) {
        return ["small", "middle", "large"].includes(e);
      }
      const xt = e.createContext({
          getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
          iconPrefixCls: "anticon",
        }),
        { Consumer: kt } = xt;
      function St(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      const Et = function (e) {
        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(r)) |
                  ((255 & e.charCodeAt(++r)) << 8) |
                  ((255 & e.charCodeAt(++r)) << 16) |
                  ((255 & e.charCodeAt(++r)) << 24))) +
            ((59797 * (t >>> 16)) << 16)),
            (n =
              (1540483477 * (65535 & (t ^= t >>> 24)) +
                ((59797 * (t >>> 16)) << 16)) ^
              (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
        switch (o) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            n =
              1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
              ((59797 * (n >>> 16)) << 16);
        }
        return (
          ((n =
            1540483477 * (65535 & (n ^= n >>> 13)) +
            ((59797 * (n >>> 16)) << 16)) ^
            (n >>> 15)) >>>
          0
        ).toString(36);
      };
      function Ct(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ot(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, s(r.key), r);
        }
      }
      function Pt(e, t, n) {
        return (
          t && Ot(e.prototype, t),
          n && Ot(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      var Mt = "%";
      function Tt(e) {
        return e.join(Mt);
      }
      const _t = (function () {
        function e(t) {
          Ct(this, e),
            f(this, "instanceId", void 0),
            f(this, "cache", new Map()),
            (this.instanceId = t);
        }
        return (
          Pt(e, [
            {
              key: "get",
              value: function (e) {
                return this.opGet(Tt(e));
              },
            },
            {
              key: "opGet",
              value: function (e) {
                return this.cache.get(e) || null;
              },
            },
            {
              key: "update",
              value: function (e, t) {
                return this.opUpdate(Tt(e), t);
              },
            },
            {
              key: "opUpdate",
              value: function (e, t) {
                var n = t(this.cache.get(e));
                null === n ? this.cache.delete(e) : this.cache.set(e, n);
              },
            },
          ]),
          e
        );
      })();
      var Nt = "data-token-hash",
        Lt = "data-css-hash",
        jt = "__cssinjs_instance__";
      var zt = e.createContext({
        hashPriority: "low",
        cache: (function () {
          var e = Math.random().toString(12).slice(2);
          if (
            "undefined" != typeof document &&
            document.head &&
            document.body
          ) {
            var t =
                document.body.querySelectorAll("style[".concat(Lt, "]")) || [],
              n = document.head.firstChild;
            Array.from(t).forEach(function (t) {
              (t[jt] = t[jt] || e),
                t[jt] === e && document.head.insertBefore(t, n);
            });
            var r = {};
            Array.from(
              document.querySelectorAll("style[".concat(Lt, "]"))
            ).forEach(function (t) {
              var n,
                o = t.getAttribute(Lt);
              r[o]
                ? t[jt] === e &&
                  (null === (n = t.parentNode) ||
                    void 0 === n ||
                    n.removeChild(t))
                : (r[o] = !0);
            });
          }
          return new _t(e);
        })(),
        defaultCache: !0,
      });
      const At = zt;
      new RegExp("CALC_UNIT", "g");
      var Dt = (function () {
        function e() {
          Ct(this, e),
            f(this, "cache", void 0),
            f(this, "keys", void 0),
            f(this, "cacheCallTimes", void 0),
            (this.cache = new Map()),
            (this.keys = []),
            (this.cacheCallTimes = 0);
        }
        return (
          Pt(e, [
            {
              key: "size",
              value: function () {
                return this.keys.length;
              },
            },
            {
              key: "internalGet",
              value: function (e) {
                var t,
                  n,
                  r =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  o = { map: this.cache };
                return (
                  e.forEach(function (e) {
                    var t;
                    o = o
                      ? null === (t = o) ||
                        void 0 === t ||
                        null === (t = t.map) ||
                        void 0 === t
                        ? void 0
                        : t.get(e)
                      : void 0;
                  }),
                  null !== (t = o) &&
                    void 0 !== t &&
                    t.value &&
                    r &&
                    (o.value[1] = this.cacheCallTimes++),
                  null === (n = o) || void 0 === n ? void 0 : n.value
                );
              },
            },
            {
              key: "get",
              value: function (e) {
                var t;
                return null === (t = this.internalGet(e, !0)) || void 0 === t
                  ? void 0
                  : t[0];
              },
            },
            {
              key: "has",
              value: function (e) {
                return !!this.internalGet(e);
              },
            },
            {
              key: "set",
              value: function (t, n) {
                var r = this;
                if (!this.has(t)) {
                  if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
                    var o = this.keys.reduce(
                        function (e, t) {
                          var n = u(e, 2)[1];
                          return r.internalGet(t)[1] < n
                            ? [t, r.internalGet(t)[1]]
                            : e;
                        },
                        [this.keys[0], this.cacheCallTimes]
                      ),
                      a = u(o, 1)[0];
                    this.delete(a);
                  }
                  this.keys.push(t);
                }
                var i = this.cache;
                t.forEach(function (e, o) {
                  if (o === t.length - 1)
                    i.set(e, { value: [n, r.cacheCallTimes++] });
                  else {
                    var a = i.get(e);
                    a
                      ? a.map || (a.map = new Map())
                      : i.set(e, { map: new Map() }),
                      (i = i.get(e).map);
                  }
                });
              },
            },
            {
              key: "deleteByPath",
              value: function (e, t) {
                var n,
                  r = e.get(t[0]);
                if (1 === t.length)
                  return (
                    r.map ? e.set(t[0], { map: r.map }) : e.delete(t[0]),
                    null === (n = r.value) || void 0 === n ? void 0 : n[0]
                  );
                var o = this.deleteByPath(r.map, t.slice(1));
                return (
                  (r.map && 0 !== r.map.size) || r.value || e.delete(t[0]), o
                );
              },
            },
            {
              key: "delete",
              value: function (e) {
                if (this.has(e))
                  return (
                    (this.keys = this.keys.filter(function (t) {
                      return !(function (e, t) {
                        if (e.length !== t.length) return !1;
                        for (var n = 0; n < e.length; n++)
                          if (e[n] !== t[n]) return !1;
                        return !0;
                      })(t, e);
                    })),
                    this.deleteByPath(this.cache, e)
                  );
              },
            },
          ]),
          e
        );
      })();
      f(Dt, "MAX_CACHE_SIZE", 20), f(Dt, "MAX_CACHE_OFFSET", 5);
      var It = 0,
        Ft = (function () {
          function e(t) {
            Ct(this, e),
              f(this, "derivatives", void 0),
              f(this, "id", void 0),
              (this.derivatives = Array.isArray(t) ? t : [t]),
              (this.id = It),
              0 === t.length && t.length,
              (It += 1);
          }
          return (
            Pt(e, [
              {
                key: "getDerivativeToken",
                value: function (e) {
                  return this.derivatives.reduce(function (t, n) {
                    return n(e, t);
                  }, void 0);
                },
              },
            ]),
            e
          );
        })(),
        Rt = new Dt(),
        Ht = new WeakMap(),
        Bt = {},
        Wt = new WeakMap();
      function Ut(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Wt.get(e) || "";
        return (
          n ||
            (Object.keys(e).forEach(function (r) {
              var o = e[r];
              (n += r),
                o instanceof Ft
                  ? (n += o.id)
                  : o && "object" === c(o)
                  ? (n += Ut(o, t))
                  : (n += o);
            }),
            t && (n = Et(n)),
            Wt.set(e, n)),
          n
        );
      }
      function $t(e, t) {
        return Et("".concat(t, "_").concat(Ut(e, !0)));
      }
      "random-"
        .concat(Date.now(), "-")
        .concat(Math.random())
        .replace(/\./g, "");
      var Vt = Ee();
      function Gt(e) {
        return "number" == typeof e ? "".concat(e, "px") : e;
      }
      function Qt(e, t, n) {
        if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4])
          return e;
        var r = Se(
            Se(
              {},
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {}
            ),
            {},
            f(f({}, Nt, t), Lt, n)
          ),
          o = Object.keys(r)
            .map(function (e) {
              var t = r[e];
              return t ? "".concat(e, '="').concat(t, '"') : null;
            })
            .filter(function (e) {
              return e;
            })
            .join(" ");
        return "<style ".concat(o, ">").concat(e, "</style>");
      }
      var Xt = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return "--"
            .concat(t ? "".concat(t, "-") : "")
            .concat(e)
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2")
            .replace(/([a-z])([A-Z0-9])/g, "$1-$2")
            .toLowerCase();
        },
        qt = function (e, t, n) {
          return Object.keys(e).length
            ? "."
                .concat(t)
                .concat(null != n && n.scope ? ".".concat(n.scope) : "", "{")
                .concat(
                  Object.entries(e)
                    .map(function (e) {
                      var t = u(e, 2),
                        n = t[0],
                        r = t[1];
                      return "".concat(n, ":").concat(r, ";");
                    })
                    .join(""),
                  "}"
                )
            : "";
        },
        Yt = function (e, t, n) {
          var r = {},
            o = {};
          return (
            Object.entries(e).forEach(function (e) {
              var t,
                a,
                i = u(e, 2),
                l = i[0],
                c = i[1];
              if (
                null != n &&
                null !== (t = n.preserve) &&
                void 0 !== t &&
                t[l]
              )
                o[l] = c;
              else if (
                !(
                  ("string" != typeof c && "number" != typeof c) ||
                  (null != n && null !== (a = n.ignore) && void 0 !== a && a[l])
                )
              ) {
                var s,
                  f = Xt(l, null == n ? void 0 : n.prefix);
                (r[f] =
                  "number" != typeof c ||
                  (null != n &&
                    null !== (s = n.unitless) &&
                    void 0 !== s &&
                    s[l])
                    ? String(c)
                    : "".concat(c, "px")),
                  (o[l] = "var(".concat(f, ")"));
              }
            }),
            [o, qt(r, t, { scope: null == n ? void 0 : n.scope })]
          );
        },
        Kt = Ee() ? e.useLayoutEffect : e.useEffect;
      const Zt = function (t, n) {
        var r = e.useRef(!0);
        Kt(function () {
          return t(r.current);
        }, n),
          Kt(function () {
            return (
              (r.current = !1),
              function () {
                r.current = !0;
              }
            );
          }, []);
      };
      var Jt = Se({}, t).useInsertionEffect;
      const en = Jt
          ? function (e, t, n) {
              return Jt(function () {
                return e(), t();
              }, n);
            }
          : function (t, n, r) {
              e.useMemo(t, r),
                Zt(function () {
                  return n(!0);
                }, r);
            },
        tn =
          void 0 !== Se({}, t).useInsertionEffect
            ? function (t) {
                var n = [],
                  r = !1;
                return (
                  e.useEffect(function () {
                    return (
                      (r = !1),
                      function () {
                        (r = !0),
                          n.length &&
                            n.forEach(function (e) {
                              return e();
                            });
                      }
                    );
                  }, t),
                  function (e) {
                    r || n.push(e);
                  }
                );
              }
            : function () {
                return function (e) {
                  e();
                };
              },
        nn = function () {
          return !1;
        };
      function rn(t, n, r, o, a) {
        var i = e.useContext(At).cache,
          l = Tt([t].concat(St(n))),
          c = tn([l]),
          s =
            (nn(),
            function (e) {
              i.opUpdate(l, function (t) {
                var n = u(t || [void 0, void 0], 2),
                  o = n[0],
                  a = [void 0 === o ? 0 : o, n[1] || r()];
                return e ? e(a) : a;
              });
            });
        e.useMemo(
          function () {
            s();
          },
          [l]
        );
        var f = i.opGet(l)[1];
        return (
          en(
            function () {
              null == a || a(f);
            },
            function (e) {
              return (
                s(function (t) {
                  var n = u(t, 2),
                    r = n[0],
                    o = n[1];
                  return e && 0 === r && (null == a || a(f)), [r + 1, o];
                }),
                function () {
                  i.opUpdate(l, function (t) {
                    var n = u(t || [], 2),
                      r = n[0],
                      a = void 0 === r ? 0 : r,
                      s = n[1];
                    return 0 == a - 1
                      ? (c(function () {
                          (!e && i.opGet(l)) || null == o || o(s, !1);
                        }),
                        null)
                      : [a - 1, s];
                  });
                }
              );
            },
            [l]
          ),
          f
        );
      }
      var on = {},
        an = "css",
        ln = new Map(),
        un = 0;
      var cn = function (e, t, n, r) {
          var o = Se(Se({}, n.getDerivativeToken(e)), t);
          return r && (o = r(o)), o;
        },
        sn = "token";
      function fn(t, n) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = (0, e.useContext)(At),
          a = o.cache.instanceId,
          i = o.container,
          l = r.salt,
          c = void 0 === l ? "" : l,
          s = r.override,
          f = void 0 === s ? on : s,
          d = r.formatToken,
          p = r.getComputedToken,
          h = r.cssVar,
          m = (function (e, t) {
            for (var r = Ht, o = 0; o < t.length; o += 1) {
              var a = t[o];
              r.has(a) || r.set(a, new WeakMap()), (r = r.get(a));
            }
            return (
              r.has(Bt) ||
                r.set(Bt, Object.assign.apply(Object, [{}].concat(St(n)))),
              r.get(Bt)
            );
          })(0, n),
          g = Ut(m),
          v = Ut(f),
          y = h ? Ut(h) : "",
          b = rn(
            sn,
            [c, t.id, g, v, y],
            function () {
              var e,
                n = p ? p(m, f, t) : cn(m, f, t, d),
                r = Se({}, n),
                o = "";
              if (h) {
                var a = u(
                  Yt(n, h.key, {
                    prefix: h.prefix,
                    ignore: h.ignore,
                    unitless: h.unitless,
                    preserve: h.preserve,
                  }),
                  2
                );
                (n = a[0]), (o = a[1]);
              }
              var i = $t(n, c);
              (n._tokenKey = i), (r._tokenKey = $t(r, c));
              var l =
                null !== (e = null == h ? void 0 : h.key) && void 0 !== e
                  ? e
                  : i;
              (n._themeKey = l),
                (function (e) {
                  ln.set(e, (ln.get(e) || 0) + 1);
                })(l);
              var s = "".concat(an, "-").concat(Et(i));
              return (
                (n._hashId = s),
                [n, s, r, o, (null == h ? void 0 : h.key) || ""]
              );
            },
            function (e) {
              !(function (e, t) {
                ln.set(e, (ln.get(e) || 0) - 1);
                var n = Array.from(ln.keys()),
                  r = n.filter(function (e) {
                    return (ln.get(e) || 0) <= 0;
                  });
                n.length - r.length > un &&
                  r.forEach(function (e) {
                    !(function (e, t) {
                      "undefined" != typeof document &&
                        document
                          .querySelectorAll(
                            "style[".concat(Nt, '="').concat(e, '"]')
                          )
                          .forEach(function (e) {
                            var n;
                            e[jt] === t &&
                              (null === (n = e.parentNode) ||
                                void 0 === n ||
                                n.removeChild(e));
                          });
                    })(e, t),
                      ln.delete(e);
                  });
              })(e[0]._themeKey, a);
            },
            function (e) {
              var t = u(e, 4),
                n = t[0],
                r = t[3];
              if (h && r) {
                var o = Ae(r, Et("css-variables-".concat(n._themeKey)), {
                  mark: Lt,
                  prepend: "queue",
                  attachTo: i,
                  priority: -999,
                });
                (o[jt] = a), o.setAttribute(Nt, n._themeKey);
              }
            }
          );
        return b;
      }
      const dn = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
      var pn = "comm",
        hn = "rule",
        mn = "decl",
        gn = "@import",
        vn = "@keyframes",
        yn = "@layer",
        bn = Math.abs,
        wn = String.fromCharCode;
      function xn(e) {
        return e.trim();
      }
      function kn(e, t, n) {
        return e.replace(t, n);
      }
      function Sn(e, t, n) {
        return e.indexOf(t, n);
      }
      function En(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function Cn(e, t, n) {
        return e.slice(t, n);
      }
      function On(e) {
        return e.length;
      }
      function Pn(e, t) {
        return t.push(e), e;
      }
      function Mn(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function Tn(e, t, n, r) {
        switch (e.type) {
          case yn:
            if (e.children.length) break;
          case gn:
          case mn:
            return (e.return = e.return || e.value);
          case pn:
            return "";
          case vn:
            return (e.return = e.value + "{" + Mn(e.children, r) + "}");
          case hn:
            if (!On((e.value = e.props.join(",")))) return "";
        }
        return On((n = Mn(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      Object.assign;
      var _n = 1,
        Nn = 1,
        Ln = 0,
        jn = 0,
        zn = 0,
        An = "";
      function Dn(e, t, n, r, o, a, i, l) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: o,
          children: a,
          line: _n,
          column: Nn,
          length: i,
          return: "",
          siblings: l,
        };
      }
      function In() {
        return (
          (zn = jn > 0 ? En(An, --jn) : 0),
          Nn--,
          10 === zn && ((Nn = 1), _n--),
          zn
        );
      }
      function Fn() {
        return (
          (zn = jn < Ln ? En(An, jn++) : 0),
          Nn++,
          10 === zn && ((Nn = 1), _n++),
          zn
        );
      }
      function Rn() {
        return En(An, jn);
      }
      function Hn() {
        return jn;
      }
      function Bn(e, t) {
        return Cn(An, e, t);
      }
      function Wn(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Un(e) {
        return xn(Bn(jn - 1, Gn(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function $n(e) {
        for (; (zn = Rn()) && zn < 33; ) Fn();
        return Wn(e) > 2 || Wn(zn) > 3 ? "" : " ";
      }
      function Vn(e, t) {
        for (
          ;
          --t &&
          Fn() &&
          !(
            zn < 48 ||
            zn > 102 ||
            (zn > 57 && zn < 65) ||
            (zn > 70 && zn < 97)
          );

        );
        return Bn(e, Hn() + (t < 6 && 32 == Rn() && 32 == Fn()));
      }
      function Gn(e) {
        for (; Fn(); )
          switch (zn) {
            case e:
              return jn;
            case 34:
            case 39:
              34 !== e && 39 !== e && Gn(zn);
              break;
            case 40:
              41 === e && Gn(e);
              break;
            case 92:
              Fn();
          }
        return jn;
      }
      function Qn(e, t) {
        for (; Fn() && e + zn !== 57 && (e + zn !== 84 || 47 !== Rn()); );
        return "/*" + Bn(t, jn - 1) + "*" + wn(47 === e ? e : Fn());
      }
      function Xn(e) {
        for (; !Wn(Rn()); ) Fn();
        return Bn(e, jn);
      }
      function qn(e) {
        return (function (e) {
          return (An = ""), e;
        })(
          Yn(
            "",
            null,
            null,
            null,
            [""],
            (e = (function (e) {
              return (_n = Nn = 1), (Ln = On((An = e))), (jn = 0), [];
            })(e)),
            0,
            [0],
            e
          )
        );
      }
      function Yn(e, t, n, r, o, a, i, l, u) {
        for (
          var c = 0,
            s = 0,
            f = i,
            d = 0,
            p = 0,
            h = 0,
            m = 1,
            g = 1,
            v = 1,
            y = 0,
            b = "",
            w = o,
            x = a,
            k = r,
            S = b;
          g;

        )
          switch (((h = y), (y = Fn()))) {
            case 40:
              if (108 != h && 58 == En(S, f - 1)) {
                -1 !=
                  Sn(
                    (S += kn(Un(y), "&", "&\f")),
                    "&\f",
                    bn(c ? l[c - 1] : 0)
                  ) && (v = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              S += Un(y);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              S += $n(h);
              break;
            case 92:
              S += Vn(Hn() - 1, 7);
              continue;
            case 47:
              switch (Rn()) {
                case 42:
                case 47:
                  Pn(Zn(Qn(Fn(), Hn()), t, n, u), u),
                    (5 != Wn(h || 1) && 5 != Wn(Rn() || 1)) ||
                      !On(S) ||
                      " " === Cn(S, -1, void 0) ||
                      (S += " ");
                  break;
                default:
                  S += "/";
              }
              break;
            case 123 * m:
              l[c++] = On(S) * v;
            case 125 * m:
            case 59:
            case 0:
              switch (y) {
                case 0:
                case 125:
                  g = 0;
                case 59 + s:
                  -1 == v && (S = kn(S, /\f/g, "")),
                    p > 0 &&
                      (On(S) - f || (0 === m && 47 === h)) &&
                      Pn(
                        p > 32
                          ? Jn(S + ";", r, n, f - 1, u)
                          : Jn(kn(S, " ", "") + ";", r, n, f - 2, u),
                        u
                      );
                  break;
                case 59:
                  S += ";";
                default:
                  if (
                    (Pn(
                      (k = Kn(
                        S,
                        t,
                        n,
                        c,
                        s,
                        o,
                        l,
                        b,
                        (w = []),
                        (x = []),
                        f,
                        a
                      )),
                      a
                    ),
                    123 === y)
                  )
                    if (0 === s) Yn(S, t, k, k, w, a, f, l, x);
                    else
                      switch (99 === d && 110 === En(S, 3) ? 100 : d) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Yn(
                            e,
                            k,
                            k,
                            r &&
                              Pn(
                                Kn(e, k, k, 0, 0, o, l, b, o, (w = []), f, x),
                                x
                              ),
                            o,
                            x,
                            f,
                            l,
                            r ? w : x
                          );
                          break;
                        default:
                          Yn(S, k, k, k, [""], x, 0, l, x);
                      }
              }
              (c = s = p = 0), (m = v = 1), (b = S = ""), (f = i);
              break;
            case 58:
              (f = 1 + On(S)), (p = h);
            default:
              if (m < 1)
                if (123 == y) --m;
                else if (125 == y && 0 == m++ && 125 == In()) continue;
              switch (((S += wn(y)), y * m)) {
                case 38:
                  v = s > 0 ? 1 : ((S += "\f"), -1);
                  break;
                case 44:
                  (l[c++] = (On(S) - 1) * v), (v = 1);
                  break;
                case 64:
                  45 === Rn() && (S += Un(Fn())),
                    (d = Rn()),
                    (s = f = On((b = S += Xn(Hn())))),
                    y++;
                  break;
                case 45:
                  45 === h && 2 == On(S) && (m = 0);
              }
          }
        return a;
      }
      function Kn(e, t, n, r, o, a, i, l, u, c, s, f) {
        for (
          var d = o - 1,
            p = 0 === o ? a : [""],
            h = (function (e) {
              return e.length;
            })(p),
            m = 0,
            g = 0,
            v = 0;
          m < r;
          ++m
        )
          for (
            var y = 0, b = Cn(e, d + 1, (d = bn((g = i[m])))), w = e;
            y < h;
            ++y
          )
            (w = xn(g > 0 ? p[y] + " " + b : kn(b, /&\f/g, p[y]))) &&
              (u[v++] = w);
        return Dn(e, t, n, 0 === o ? hn : l, u, c, s, f);
      }
      function Zn(e, t, n, r) {
        return Dn(e, t, n, pn, wn(zn), Cn(e, 2, -2), 0, r);
      }
      function Jn(e, t, n, r, o) {
        return Dn(e, t, n, mn, Cn(e, 0, r), Cn(e, r + 1, -1), r, o);
      }
      var er,
        tr = "data-ant-cssinjs-cache-path",
        nr = "_FILE_STYLE__",
        rr = !0;
      var or = "_multi_value_";
      function ar(e) {
        return Mn(qn(e), Tn).replace(/\{%%%\:[^;];}/g, ";");
      }
      var ir = function e(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { root: !0, parentSelectors: [] },
          o = r.root,
          a = r.injectHash,
          i = r.parentSelectors,
          l = n.hashId,
          s = n.layer,
          f = (n.path, n.hashPriority),
          d = n.transformers,
          p = void 0 === d ? [] : d,
          h = (n.linters, ""),
          m = {};
        function g(t) {
          var r = t.getName(l);
          if (!m[r]) {
            var o = u(e(t.style, n, { root: !1, parentSelectors: i }), 1)[0];
            m[r] = "@keyframes ".concat(t.getName(l)).concat(o);
          }
        }
        var v = (function e(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return (
            t.forEach(function (t) {
              Array.isArray(t) ? e(t, n) : t && n.push(t);
            }),
            n
          );
        })(Array.isArray(t) ? t : [t]);
        return (
          v.forEach(function (t) {
            var r = "string" != typeof t || o ? t : {};
            if ("string" == typeof r) h += "".concat(r, "\n");
            else if (r._keyframe) g(r);
            else {
              var s = p.reduce(function (e, t) {
                var n;
                return (
                  (null == t || null === (n = t.visit) || void 0 === n
                    ? void 0
                    : n.call(t, e)) || e
                );
              }, r);
              Object.keys(s).forEach(function (t) {
                var r = s[t];
                if (
                  "object" !== c(r) ||
                  !r ||
                  ("animationName" === t && r._keyframe) ||
                  (function (e) {
                    return (
                      "object" === c(e) && e && ("_skip_check_" in e || or in e)
                    );
                  })(r)
                ) {
                  var d;
                  function S(e, t) {
                    var n = e.replace(/[A-Z]/g, function (e) {
                        return "-".concat(e.toLowerCase());
                      }),
                      r = t;
                    dn[e] ||
                      "number" != typeof r ||
                      0 === r ||
                      (r = "".concat(r, "px")),
                      "animationName" === e &&
                        null != t &&
                        t._keyframe &&
                        (g(t), (r = t.getName(l))),
                      (h += "".concat(n, ":").concat(r, ";"));
                  }
                  var p =
                    null !== (d = null == r ? void 0 : r.value) && void 0 !== d
                      ? d
                      : r;
                  "object" === c(r) && null != r && r[or] && Array.isArray(p)
                    ? p.forEach(function (e) {
                        S(t, e);
                      })
                    : S(t, p);
                } else {
                  var v = !1,
                    y = t.trim(),
                    b = !1;
                  (o || a) && l
                    ? y.startsWith("@")
                      ? (v = !0)
                      : (y = (function (e, t, n) {
                          if (!t) return e;
                          var r = ".".concat(t),
                            o = "low" === n ? ":where(".concat(r, ")") : r;
                          return e
                            .split(",")
                            .map(function (e) {
                              var t,
                                n = e.trim().split(/\s+/),
                                r = n[0] || "",
                                a =
                                  (null === (t = r.match(/^\w+/)) ||
                                  void 0 === t
                                    ? void 0
                                    : t[0]) || "";
                              return [
                                (r = ""
                                  .concat(a)
                                  .concat(o)
                                  .concat(r.slice(a.length))),
                              ]
                                .concat(St(n.slice(1)))
                                .join(" ");
                            })
                            .join(",");
                        })("&" === y ? "" : t, l, f))
                    : !o ||
                      l ||
                      ("&" !== y && "" !== y) ||
                      ((y = ""), (b = !0));
                  var w = u(
                      e(r, n, {
                        root: b,
                        injectHash: v,
                        parentSelectors: [].concat(St(i), [y]),
                      }),
                      2
                    ),
                    x = w[0],
                    k = w[1];
                  (m = Se(Se({}, m), k)), (h += "".concat(y).concat(x));
                }
              });
            }
          }),
          o
            ? s &&
              ((h = "@layer ".concat(s.name, " {").concat(h, "}")),
              s.dependencies &&
                (m["@layer ".concat(s.name)] = s.dependencies
                  .map(function (e) {
                    return "@layer ".concat(e, ", ").concat(s.name, ";");
                  })
                  .join("\n")))
            : (h = "{".concat(h, "}")),
          [h, m]
        );
      };
      function lr(e, t) {
        return Et("".concat(e.join("%")).concat(t));
      }
      function ur() {
        return null;
      }
      var cr = "style";
      function sr(t, n) {
        var o = t.token,
          a = t.path,
          i = t.hashId,
          l = t.layer,
          c = t.nonce,
          s = t.clientOnly,
          d = t.order,
          p = void 0 === d ? 0 : d,
          h = e.useContext(At),
          m = h.autoClear,
          g = (h.mock, h.defaultCache),
          v = h.hashPriority,
          y = h.container,
          b = h.ssrInline,
          w = h.transformers,
          x = h.linters,
          k = h.cache,
          S = h.layer,
          E = o._tokenKey,
          C = [E];
        S && C.push("layer"), C.push.apply(C, St(a));
        var O = Vt,
          P = rn(
            cr,
            C,
            function () {
              var e = C.join("|");
              if (
                (function (e) {
                  return (
                    (function () {
                      if (!er && ((er = {}), Ee())) {
                        var e = document.createElement("div");
                        (e.className = tr),
                          (e.style.position = "fixed"),
                          (e.style.visibility = "hidden"),
                          (e.style.top = "-9999px"),
                          document.body.appendChild(e);
                        var t = getComputedStyle(e).content || "";
                        (t = t.replace(/^"/, "").replace(/"$/, ""))
                          .split(";")
                          .forEach(function (e) {
                            var t = u(e.split(":"), 2),
                              n = t[0],
                              r = t[1];
                            er[n] = r;
                          });
                        var n,
                          r = document.querySelector("style[".concat(tr, "]"));
                        r &&
                          ((rr = !1),
                          null === (n = r.parentNode) ||
                            void 0 === n ||
                            n.removeChild(r)),
                          document.body.removeChild(e);
                      }
                    })(),
                    !!er[e]
                  );
                })(e)
              ) {
                var t = (function (e) {
                    var t = er[e],
                      n = null;
                    if (t && Ee())
                      if (rr) n = nr;
                      else {
                        var r = document.querySelector(
                          "style[".concat(Lt, '="').concat(er[e], '"]')
                        );
                        r ? (n = r.innerHTML) : delete er[e];
                      }
                    return [n, t];
                  })(e),
                  r = u(t, 2),
                  o = r[0],
                  c = r[1];
                if (o) return [o, E, c, {}, s, p];
              }
              var f = n(),
                d = u(
                  ir(f, {
                    hashId: i,
                    hashPriority: v,
                    layer: S ? l : void 0,
                    path: a.join("-"),
                    transformers: w,
                    linters: x,
                  }),
                  2
                ),
                h = d[0],
                m = d[1],
                g = ar(h),
                y = lr(C, g);
              return [g, E, y, m, s, p];
            },
            function (e, t) {
              var n = u(e, 3)[2];
              (t || m) && Vt && ze(n, { mark: Lt });
            },
            function (e) {
              var t = u(e, 4),
                n = t[0],
                r = (t[1], t[2]),
                o = t[3];
              if (O && n !== nr) {
                var a = {
                    mark: Lt,
                    prepend: !S && "queue",
                    attachTo: y,
                    priority: p,
                  },
                  i = "function" == typeof c ? c() : c;
                i && (a.csp = { nonce: i });
                var l = [],
                  s = [];
                Object.keys(o).forEach(function (e) {
                  e.startsWith("@layer") ? l.push(e) : s.push(e);
                }),
                  l.forEach(function (e) {
                    Ae(
                      ar(o[e]),
                      "_layer-".concat(e),
                      Se(Se({}, a), {}, { prepend: !0 })
                    );
                  });
                var f = Ae(n, r, a);
                (f[jt] = k.instanceId),
                  f.setAttribute(Nt, E),
                  s.forEach(function (e) {
                    Ae(ar(o[e]), "_effect-".concat(e), a);
                  });
              }
            }
          ),
          M = u(P, 3),
          T = M[0],
          _ = M[1],
          N = M[2];
        return function (t) {
          var n;
          return (
            (n =
              b && !O && g
                ? e.createElement(
                    "style",
                    r({}, f(f({}, Nt, _), Lt, N), {
                      dangerouslySetInnerHTML: { __html: T },
                    })
                  )
                : e.createElement(ur, null)),
            e.createElement(e.Fragment, null, n, t)
          );
        };
      }
      var fr = "cssVar";
      function dr(e) {
        return (e.notSplit = !0), e;
      }
      function pr(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function hr(e, t) {
        return (
          (hr = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          hr(e, t)
        );
      }
      function mr(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && hr(e, t);
      }
      function gr(e) {
        return (
          (gr = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          gr(e)
        );
      }
      function vr() {
        try {
          var e = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          );
        } catch (e) {}
        return (vr = function () {
          return !!e;
        })();
      }
      function yr(e) {
        var t = vr();
        return function () {
          var n,
            r = gr(e);
          if (t) {
            var o = gr(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" == c(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return pr(e);
          })(this, n);
        };
      }
      f(
        f(
          f({}, cr, function (e, t, n) {
            var r = u(e, 6),
              o = r[0],
              a = r[1],
              i = r[2],
              l = r[3],
              c = r[4],
              s = r[5],
              f = (n || {}).plain;
            if (c) return null;
            var d = o,
              p = {
                "data-rc-order": "prependQueue",
                "data-rc-priority": "".concat(s),
              };
            return (
              (d = Qt(o, a, i, p, f)),
              l &&
                Object.keys(l).forEach(function (e) {
                  if (!t[e]) {
                    t[e] = !0;
                    var n = Qt(ar(l[e]), a, "_effect-".concat(e), p, f);
                    e.startsWith("@layer") ? (d = n + d) : (d += n);
                  }
                }),
              [s, i, d]
            );
          }),
          sn,
          function (e, t, n) {
            var r = u(e, 5),
              o = r[2],
              a = r[3],
              i = r[4],
              l = (n || {}).plain;
            if (!a) return null;
            var c = o._tokenKey;
            return [
              -999,
              c,
              Qt(
                a,
                i,
                c,
                {
                  "data-rc-order": "prependQueue",
                  "data-rc-priority": "".concat(-999),
                },
                l
              ),
            ];
          }
        ),
        fr,
        function (e, t, n) {
          var r = u(e, 4),
            o = r[1],
            a = r[2],
            i = r[3],
            l = (n || {}).plain;
          return o
            ? [
                -999,
                a,
                Qt(
                  o,
                  i,
                  a,
                  {
                    "data-rc-order": "prependQueue",
                    "data-rc-priority": "".concat(-999),
                  },
                  l
                ),
              ]
            : null;
        }
      ),
        dr(["borderTop", "borderBottom"]),
        dr(["borderTop"]),
        dr(["borderBottom"]),
        dr(["borderLeft", "borderRight"]),
        dr(["borderLeft"]),
        dr(["borderRight"]);
      const br = Pt(function e() {
        Ct(this, e);
      });
      var wr = "CALC_UNIT",
        xr = new RegExp(wr, "g");
      function kr(e) {
        return "number" == typeof e ? "".concat(e).concat(wr) : e;
      }
      var Sr = (function (e) {
        mr(n, e);
        var t = yr(n);
        function n(e, r) {
          var o;
          Ct(this, n),
            f(pr((o = t.call(this))), "result", ""),
            f(pr(o), "unitlessCssVar", void 0),
            f(pr(o), "lowPriority", void 0);
          var a = c(e);
          return (
            (o.unitlessCssVar = r),
            e instanceof n
              ? (o.result = "(".concat(e.result, ")"))
              : "number" === a
              ? (o.result = kr(e))
              : "string" === a && (o.result = e),
            o
          );
        }
        return (
          Pt(n, [
            {
              key: "add",
              value: function (e) {
                return (
                  e instanceof n
                    ? (this.result = ""
                        .concat(this.result, " + ")
                        .concat(e.getResult()))
                    : ("number" != typeof e && "string" != typeof e) ||
                      (this.result = ""
                        .concat(this.result, " + ")
                        .concat(kr(e))),
                  (this.lowPriority = !0),
                  this
                );
              },
            },
            {
              key: "sub",
              value: function (e) {
                return (
                  e instanceof n
                    ? (this.result = ""
                        .concat(this.result, " - ")
                        .concat(e.getResult()))
                    : ("number" != typeof e && "string" != typeof e) ||
                      (this.result = ""
                        .concat(this.result, " - ")
                        .concat(kr(e))),
                  (this.lowPriority = !0),
                  this
                );
              },
            },
            {
              key: "mul",
              value: function (e) {
                return (
                  this.lowPriority &&
                    (this.result = "(".concat(this.result, ")")),
                  e instanceof n
                    ? (this.result = ""
                        .concat(this.result, " * ")
                        .concat(e.getResult(!0)))
                    : ("number" != typeof e && "string" != typeof e) ||
                      (this.result = "".concat(this.result, " * ").concat(e)),
                  (this.lowPriority = !1),
                  this
                );
              },
            },
            {
              key: "div",
              value: function (e) {
                return (
                  this.lowPriority &&
                    (this.result = "(".concat(this.result, ")")),
                  e instanceof n
                    ? (this.result = ""
                        .concat(this.result, " / ")
                        .concat(e.getResult(!0)))
                    : ("number" != typeof e && "string" != typeof e) ||
                      (this.result = "".concat(this.result, " / ").concat(e)),
                  (this.lowPriority = !1),
                  this
                );
              },
            },
            {
              key: "getResult",
              value: function (e) {
                return this.lowPriority || e
                  ? "(".concat(this.result, ")")
                  : this.result;
              },
            },
            {
              key: "equal",
              value: function (e) {
                var t = this,
                  n = (e || {}).unit,
                  r = !0;
                return (
                  "boolean" == typeof n
                    ? (r = n)
                    : Array.from(this.unitlessCssVar).some(function (e) {
                        return t.result.includes(e);
                      }) && (r = !1),
                  (this.result = this.result.replace(xr, r ? "px" : "")),
                  void 0 !== this.lowPriority
                    ? "calc(".concat(this.result, ")")
                    : this.result
                );
              },
            },
          ]),
          n
        );
      })(br);
      const Er = (function (e) {
          mr(n, e);
          var t = yr(n);
          function n(e) {
            var r;
            return (
              Ct(this, n),
              f(pr((r = t.call(this))), "result", 0),
              e instanceof n
                ? (r.result = e.result)
                : "number" == typeof e && (r.result = e),
              r
            );
          }
          return (
            Pt(n, [
              {
                key: "add",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result += e.result)
                      : "number" == typeof e && (this.result += e),
                    this
                  );
                },
              },
              {
                key: "sub",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result -= e.result)
                      : "number" == typeof e && (this.result -= e),
                    this
                  );
                },
              },
              {
                key: "mul",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result *= e.result)
                      : "number" == typeof e && (this.result *= e),
                    this
                  );
                },
              },
              {
                key: "div",
                value: function (e) {
                  return (
                    e instanceof n
                      ? (this.result /= e.result)
                      : "number" == typeof e && (this.result /= e),
                    this
                  );
                },
              },
              {
                key: "equal",
                value: function () {
                  return this.result;
                },
              },
            ]),
            n
          );
        })(br),
        Cr = function (e, t) {
          return "".concat(
            [
              t,
              e
                .replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2")
                .replace(/([a-z])([A-Z])/g, "$1-$2"),
            ]
              .filter(Boolean)
              .join("-")
          );
        };
      o(864);
      Number(e.version.split(".")[0]),
        "undefined" == typeof Reflect ? Object.keys : Reflect.ownKeys;
      const Or = function (e, t, n, r) {
        var o = Se({}, t[e]);
        null != r &&
          r.deprecatedTokens &&
          r.deprecatedTokens.forEach(function (e) {
            var t,
              n = u(e, 2),
              r = n[0],
              a = n[1];
            ((null != o && o[r]) || (null != o && o[a])) &&
              ((null !== (t = o[a]) && void 0 !== t) ||
                (o[a] = null == o ? void 0 : o[r]));
          });
        var a = Se(Se({}, n), o);
        return (
          Object.keys(a).forEach(function (e) {
            a[e] === t[e] && delete a[e];
          }),
          a
        );
      };
      var Pr = "undefined" != typeof CSSINJS_STATISTIC,
        Mr = !0;
      function Tr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (!Pr) return Object.assign.apply(Object, [{}].concat(t));
        Mr = !1;
        var r = {};
        return (
          t.forEach(function (e) {
            "object" === c(e) &&
              Object.keys(e).forEach(function (t) {
                Object.defineProperty(r, t, {
                  configurable: !0,
                  enumerable: !0,
                  get: function () {
                    return e[t];
                  },
                });
              });
          }),
          (Mr = !0),
          r
        );
      }
      var _r = {};
      function Nr() {}
      const Lr = function (e, t, n) {
        var r;
        return "function" == typeof n
          ? n(Tr(t, null !== (r = t[e]) && void 0 !== r ? r : {}))
          : null != n
          ? n
          : {};
      };
      var jr = new ((function () {
        function e() {
          Ct(this, e),
            f(this, "map", new Map()),
            f(this, "objectIDMap", new WeakMap()),
            f(this, "nextID", 0),
            f(this, "lastAccessBeat", new Map()),
            f(this, "accessBeat", 0);
        }
        return (
          Pt(e, [
            {
              key: "set",
              value: function (e, t) {
                this.clear();
                var n = this.getCompositeKey(e);
                this.map.set(n, t), this.lastAccessBeat.set(n, Date.now());
              },
            },
            {
              key: "get",
              value: function (e) {
                var t = this.getCompositeKey(e),
                  n = this.map.get(t);
                return (
                  this.lastAccessBeat.set(t, Date.now()),
                  (this.accessBeat += 1),
                  n
                );
              },
            },
            {
              key: "getCompositeKey",
              value: function (e) {
                var t = this;
                return e
                  .map(function (e) {
                    return e && "object" === c(e)
                      ? "obj_".concat(t.getObjectID(e))
                      : "".concat(c(e), "_").concat(e);
                  })
                  .join("|");
              },
            },
            {
              key: "getObjectID",
              value: function (e) {
                if (this.objectIDMap.has(e)) return this.objectIDMap.get(e);
                var t = this.nextID;
                return this.objectIDMap.set(e, t), (this.nextID += 1), t;
              },
            },
            {
              key: "clear",
              value: function () {
                var e = this;
                if (this.accessBeat > 1e4) {
                  var t = Date.now();
                  this.lastAccessBeat.forEach(function (n, r) {
                    t - n > 6e5 &&
                      (e.map.delete(r), e.lastAccessBeat.delete(r));
                  }),
                    (this.accessBeat = 0);
                }
              },
            },
          ]),
          e
        );
      })())();
      const zr = function () {
          return {};
        },
        Ar = (e) => ({
          a: {
            color: e.colorLink,
            textDecoration: e.linkDecoration,
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
            transition: `color ${e.motionDurationSlow}`,
            "-webkit-text-decoration-skip": "objects",
            "&:hover": { color: e.colorLinkHover },
            "&:active": { color: e.colorLinkActive },
            "&:active, &:hover": {
              textDecoration: e.linkHoverDecoration,
              outline: 0,
            },
            "&:focus": { textDecoration: e.linkFocusDecoration, outline: 0 },
            "&[disabled]": {
              color: e.colorTextDisabled,
              cursor: "not-allowed",
            },
          },
        }),
        Dr = {
          blue: "#1677FF",
          purple: "#722ED1",
          cyan: "#13C2C2",
          green: "#52C41A",
          magenta: "#EB2F96",
          pink: "#EB2F96",
          red: "#F5222D",
          orange: "#FA8C16",
          yellow: "#FADB14",
          volcano: "#FA541C",
          geekblue: "#2F54EB",
          gold: "#FAAD14",
          lime: "#A0D911",
        },
        Ir = Object.assign(Object.assign({}, Dr), {
          colorPrimary: "#1677ff",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#ff4d4f",
          colorInfo: "#1677ff",
          colorLink: "",
          colorTextBase: "",
          colorBgBase: "",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
          fontFamilyCode:
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          fontSize: 14,
          lineWidth: 1,
          lineType: "solid",
          motionUnit: 0.1,
          motionBase: 0,
          motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
          motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
          motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
          motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
          motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
          motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
          borderRadius: 6,
          sizeUnit: 4,
          sizeStep: 4,
          sizePopupArrow: 16,
          controlHeight: 32,
          zIndexBase: 0,
          zIndexPopupBase: 1e3,
          opacityImage: 1,
          wireframe: !1,
          motion: !0,
        });
      var Fr = (function () {
        function e(t, n) {
          var r;
          if (
            (void 0 === t && (t = ""), void 0 === n && (n = {}), t instanceof e)
          )
            return t;
          "number" == typeof t &&
            (t = (function (e) {
              return { r: e >> 16, g: (65280 & e) >> 8, b: 255 & e };
            })(t)),
            (this.originalInput = t);
          var o = P(t);
          (this.originalInput = t),
            (this.r = o.r),
            (this.g = o.g),
            (this.b = o.b),
            (this.a = o.a),
            (this.roundA = Math.round(100 * this.a) / 100),
            (this.format =
              null !== (r = n.format) && void 0 !== r ? r : o.format),
            (this.gradientType = n.gradientType),
            this.r < 1 && (this.r = Math.round(this.r)),
            this.g < 1 && (this.g = Math.round(this.g)),
            this.b < 1 && (this.b = Math.round(this.b)),
            (this.isValid = o.ok);
        }
        return (
          (e.prototype.isDark = function () {
            return this.getBrightness() < 128;
          }),
          (e.prototype.isLight = function () {
            return !this.isDark();
          }),
          (e.prototype.getBrightness = function () {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
          }),
          (e.prototype.getLuminance = function () {
            var e = this.toRgb(),
              t = e.r / 255,
              n = e.g / 255,
              r = e.b / 255;
            return (
              0.2126 *
                (t <= 0.03928
                  ? t / 12.92
                  : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (n <= 0.03928
                  ? n / 12.92
                  : Math.pow((n + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4))
            );
          }),
          (e.prototype.getAlpha = function () {
            return this.a;
          }),
          (e.prototype.setAlpha = function (e) {
            return (
              (this.a = v(e)),
              (this.roundA = Math.round(100 * this.a) / 100),
              this
            );
          }),
          (e.prototype.isMonochrome = function () {
            return 0 === this.toHsl().s;
          }),
          (e.prototype.toHsv = function () {
            var e = k(this.r, this.g, this.b);
            return { h: 360 * e.h, s: e.s, v: e.v, a: this.a };
          }),
          (e.prototype.toHsvString = function () {
            var e = k(this.r, this.g, this.b),
              t = Math.round(360 * e.h),
              n = Math.round(100 * e.s),
              r = Math.round(100 * e.v);
            return 1 === this.a
              ? "hsv(".concat(t, ", ").concat(n, "%, ").concat(r, "%)")
              : "hsva("
                  .concat(t, ", ")
                  .concat(n, "%, ")
                  .concat(r, "%, ")
                  .concat(this.roundA, ")");
          }),
          (e.prototype.toHsl = function () {
            var e = w(this.r, this.g, this.b);
            return { h: 360 * e.h, s: e.s, l: e.l, a: this.a };
          }),
          (e.prototype.toHslString = function () {
            var e = w(this.r, this.g, this.b),
              t = Math.round(360 * e.h),
              n = Math.round(100 * e.s),
              r = Math.round(100 * e.l);
            return 1 === this.a
              ? "hsl(".concat(t, ", ").concat(n, "%, ").concat(r, "%)")
              : "hsla("
                  .concat(t, ", ")
                  .concat(n, "%, ")
                  .concat(r, "%, ")
                  .concat(this.roundA, ")");
          }),
          (e.prototype.toHex = function (e) {
            return void 0 === e && (e = !1), S(this.r, this.g, this.b, e);
          }),
          (e.prototype.toHexString = function (e) {
            return void 0 === e && (e = !1), "#" + this.toHex(e);
          }),
          (e.prototype.toHex8 = function (e) {
            return (
              void 0 === e && (e = !1),
              (function (e, t, n, r, o) {
                var a,
                  i = [
                    b(Math.round(e).toString(16)),
                    b(Math.round(t).toString(16)),
                    b(Math.round(n).toString(16)),
                    b(((a = r), Math.round(255 * parseFloat(a)).toString(16))),
                  ];
                return o &&
                  i[0].startsWith(i[0].charAt(1)) &&
                  i[1].startsWith(i[1].charAt(1)) &&
                  i[2].startsWith(i[2].charAt(1)) &&
                  i[3].startsWith(i[3].charAt(1))
                  ? i[0].charAt(0) +
                      i[1].charAt(0) +
                      i[2].charAt(0) +
                      i[3].charAt(0)
                  : i.join("");
              })(this.r, this.g, this.b, this.a, e)
            );
          }),
          (e.prototype.toHex8String = function (e) {
            return void 0 === e && (e = !1), "#" + this.toHex8(e);
          }),
          (e.prototype.toHexShortString = function (e) {
            return (
              void 0 === e && (e = !1),
              1 === this.a ? this.toHexString(e) : this.toHex8String(e)
            );
          }),
          (e.prototype.toRgb = function () {
            return {
              r: Math.round(this.r),
              g: Math.round(this.g),
              b: Math.round(this.b),
              a: this.a,
            };
          }),
          (e.prototype.toRgbString = function () {
            var e = Math.round(this.r),
              t = Math.round(this.g),
              n = Math.round(this.b);
            return 1 === this.a
              ? "rgb(".concat(e, ", ").concat(t, ", ").concat(n, ")")
              : "rgba("
                  .concat(e, ", ")
                  .concat(t, ", ")
                  .concat(n, ", ")
                  .concat(this.roundA, ")");
          }),
          (e.prototype.toPercentageRgb = function () {
            var e = function (e) {
              return "".concat(Math.round(100 * m(e, 255)), "%");
            };
            return { r: e(this.r), g: e(this.g), b: e(this.b), a: this.a };
          }),
          (e.prototype.toPercentageRgbString = function () {
            var e = function (e) {
              return Math.round(100 * m(e, 255));
            };
            return 1 === this.a
              ? "rgb("
                  .concat(e(this.r), "%, ")
                  .concat(e(this.g), "%, ")
                  .concat(e(this.b), "%)")
              : "rgba("
                  .concat(e(this.r), "%, ")
                  .concat(e(this.g), "%, ")
                  .concat(e(this.b), "%, ")
                  .concat(this.roundA, ")");
          }),
          (e.prototype.toName = function () {
            if (0 === this.a) return "transparent";
            if (this.a < 1) return !1;
            for (
              var e = "#" + S(this.r, this.g, this.b, !1),
                t = 0,
                n = Object.entries(O);
              t < n.length;
              t++
            ) {
              var r = n[t],
                o = r[0];
              if (e === r[1]) return o;
            }
            return !1;
          }),
          (e.prototype.toString = function (e) {
            var t = Boolean(e);
            e = null != e ? e : this.format;
            var n = !1,
              r = this.a < 1 && this.a >= 0;
            return t || !r || (!e.startsWith("hex") && "name" !== e)
              ? ("rgb" === e && (n = this.toRgbString()),
                "prgb" === e && (n = this.toPercentageRgbString()),
                ("hex" !== e && "hex6" !== e) || (n = this.toHexString()),
                "hex3" === e && (n = this.toHexString(!0)),
                "hex4" === e && (n = this.toHex8String(!0)),
                "hex8" === e && (n = this.toHex8String()),
                "name" === e && (n = this.toName()),
                "hsl" === e && (n = this.toHslString()),
                "hsv" === e && (n = this.toHsvString()),
                n || this.toHexString())
              : "name" === e && 0 === this.a
              ? this.toName()
              : this.toRgbString();
          }),
          (e.prototype.toNumber = function () {
            return (
              (Math.round(this.r) << 16) +
              (Math.round(this.g) << 8) +
              Math.round(this.b)
            );
          }),
          (e.prototype.clone = function () {
            return new e(this.toString());
          }),
          (e.prototype.lighten = function (t) {
            void 0 === t && (t = 10);
            var n = this.toHsl();
            return (n.l += t / 100), (n.l = g(n.l)), new e(n);
          }),
          (e.prototype.brighten = function (t) {
            void 0 === t && (t = 10);
            var n = this.toRgb();
            return (
              (n.r = Math.max(
                0,
                Math.min(255, n.r - Math.round((-t / 100) * 255))
              )),
              (n.g = Math.max(
                0,
                Math.min(255, n.g - Math.round((-t / 100) * 255))
              )),
              (n.b = Math.max(
                0,
                Math.min(255, n.b - Math.round((-t / 100) * 255))
              )),
              new e(n)
            );
          }),
          (e.prototype.darken = function (t) {
            void 0 === t && (t = 10);
            var n = this.toHsl();
            return (n.l -= t / 100), (n.l = g(n.l)), new e(n);
          }),
          (e.prototype.tint = function (e) {
            return void 0 === e && (e = 10), this.mix("white", e);
          }),
          (e.prototype.shade = function (e) {
            return void 0 === e && (e = 10), this.mix("black", e);
          }),
          (e.prototype.desaturate = function (t) {
            void 0 === t && (t = 10);
            var n = this.toHsl();
            return (n.s -= t / 100), (n.s = g(n.s)), new e(n);
          }),
          (e.prototype.saturate = function (t) {
            void 0 === t && (t = 10);
            var n = this.toHsl();
            return (n.s += t / 100), (n.s = g(n.s)), new e(n);
          }),
          (e.prototype.greyscale = function () {
            return this.desaturate(100);
          }),
          (e.prototype.spin = function (t) {
            var n = this.toHsl(),
              r = (n.h + t) % 360;
            return (n.h = r < 0 ? 360 + r : r), new e(n);
          }),
          (e.prototype.mix = function (t, n) {
            void 0 === n && (n = 50);
            var r = this.toRgb(),
              o = new e(t).toRgb(),
              a = n / 100;
            return new e({
              r: (o.r - r.r) * a + r.r,
              g: (o.g - r.g) * a + r.g,
              b: (o.b - r.b) * a + r.b,
              a: (o.a - r.a) * a + r.a,
            });
          }),
          (e.prototype.analogous = function (t, n) {
            void 0 === t && (t = 6), void 0 === n && (n = 30);
            var r = this.toHsl(),
              o = 360 / n,
              a = [this];
            for (r.h = (r.h - ((o * t) >> 1) + 720) % 360; --t; )
              (r.h = (r.h + o) % 360), a.push(new e(r));
            return a;
          }),
          (e.prototype.complement = function () {
            var t = this.toHsl();
            return (t.h = (t.h + 180) % 360), new e(t);
          }),
          (e.prototype.monochromatic = function (t) {
            void 0 === t && (t = 6);
            for (
              var n = this.toHsv(),
                r = n.h,
                o = n.s,
                a = n.v,
                i = [],
                l = 1 / t;
              t--;

            )
              i.push(new e({ h: r, s: o, v: a })), (a = (a + l) % 1);
            return i;
          }),
          (e.prototype.splitcomplement = function () {
            var t = this.toHsl(),
              n = t.h;
            return [
              this,
              new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
              new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
            ];
          }),
          (e.prototype.onBackground = function (t) {
            var n = this.toRgb(),
              r = new e(t).toRgb(),
              o = n.a + r.a * (1 - n.a);
            return new e({
              r: (n.r * n.a + r.r * r.a * (1 - n.a)) / o,
              g: (n.g * n.a + r.g * r.a * (1 - n.a)) / o,
              b: (n.b * n.a + r.b * r.a * (1 - n.a)) / o,
              a: o,
            });
          }),
          (e.prototype.triad = function () {
            return this.polyad(3);
          }),
          (e.prototype.tetrad = function () {
            return this.polyad(4);
          }),
          (e.prototype.polyad = function (t) {
            for (
              var n = this.toHsl(), r = n.h, o = [this], a = 360 / t, i = 1;
              i < t;
              i++
            )
              o.push(new e({ h: (r + i * a) % 360, s: n.s, l: n.l }));
            return o;
          }),
          (e.prototype.equals = function (t) {
            return this.toRgbString() === new e(t).toRgbString();
          }),
          e
        );
      })();
      const Rr = (e, t) => new Fr(e).setAlpha(t).toRgbString(),
        Hr = (e, t) => new Fr(e).darken(t).toHexString(),
        Br = (e) => {
          const t = G(e);
          return {
            1: t[0],
            2: t[1],
            3: t[2],
            4: t[3],
            5: t[4],
            6: t[5],
            7: t[6],
            8: t[4],
            9: t[5],
            10: t[6],
          };
        },
        Wr = (e, t) => {
          const n = e || "#fff",
            r = t || "#000";
          return {
            colorBgBase: n,
            colorTextBase: r,
            colorText: Rr(r, 0.88),
            colorTextSecondary: Rr(r, 0.65),
            colorTextTertiary: Rr(r, 0.45),
            colorTextQuaternary: Rr(r, 0.25),
            colorFill: Rr(r, 0.15),
            colorFillSecondary: Rr(r, 0.06),
            colorFillTertiary: Rr(r, 0.04),
            colorFillQuaternary: Rr(r, 0.02),
            colorBgSolid: Rr(r, 1),
            colorBgSolidHover: Rr(r, 0.75),
            colorBgSolidActive: Rr(r, 0.95),
            colorBgLayout: Hr(n, 4),
            colorBgContainer: Hr(n, 0),
            colorBgElevated: Hr(n, 0),
            colorBgSpotlight: Rr(r, 0.85),
            colorBgBlur: "transparent",
            colorBorder: Hr(n, 15),
            colorBorderSecondary: Hr(n, 6),
          };
        },
        Ur =
          (($r = function (e) {
            (Q.pink = Q.magenta), (le.pink = le.magenta);
            const t = Object.keys(Dr)
              .map((t) => {
                const n = e[t] === Q[t] ? le[t] : G(e[t]);
                return new Array(10)
                  .fill(1)
                  .reduce(
                    (e, r, o) => (
                      (e[`${t}-${o + 1}`] = n[o]), (e[`${t}${o + 1}`] = n[o]), e
                    ),
                    {}
                  );
              })
              .reduce((e, t) => Object.assign(Object.assign({}, e), t), {});
            return Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(Object.assign({}, e), t),
                      (function (e, t) {
                        let {
                          generateColorPalettes: n,
                          generateNeutralColorPalettes: r,
                        } = t;
                        const {
                            colorSuccess: o,
                            colorWarning: a,
                            colorError: i,
                            colorInfo: l,
                            colorPrimary: u,
                            colorBgBase: c,
                            colorTextBase: s,
                          } = e,
                          f = n(u),
                          d = n(o),
                          p = n(a),
                          h = n(i),
                          m = n(l),
                          g = r(c, s),
                          v = n(e.colorLink || e.colorInfo),
                          y = new Fr(h[1]).mix(new Fr(h[3]), 50).toHexString();
                        return Object.assign(Object.assign({}, g), {
                          colorPrimaryBg: f[1],
                          colorPrimaryBgHover: f[2],
                          colorPrimaryBorder: f[3],
                          colorPrimaryBorderHover: f[4],
                          colorPrimaryHover: f[5],
                          colorPrimary: f[6],
                          colorPrimaryActive: f[7],
                          colorPrimaryTextHover: f[8],
                          colorPrimaryText: f[9],
                          colorPrimaryTextActive: f[10],
                          colorSuccessBg: d[1],
                          colorSuccessBgHover: d[2],
                          colorSuccessBorder: d[3],
                          colorSuccessBorderHover: d[4],
                          colorSuccessHover: d[4],
                          colorSuccess: d[6],
                          colorSuccessActive: d[7],
                          colorSuccessTextHover: d[8],
                          colorSuccessText: d[9],
                          colorSuccessTextActive: d[10],
                          colorErrorBg: h[1],
                          colorErrorBgHover: h[2],
                          colorErrorBgFilledHover: y,
                          colorErrorBgActive: h[3],
                          colorErrorBorder: h[3],
                          colorErrorBorderHover: h[4],
                          colorErrorHover: h[5],
                          colorError: h[6],
                          colorErrorActive: h[7],
                          colorErrorTextHover: h[8],
                          colorErrorText: h[9],
                          colorErrorTextActive: h[10],
                          colorWarningBg: p[1],
                          colorWarningBgHover: p[2],
                          colorWarningBorder: p[3],
                          colorWarningBorderHover: p[4],
                          colorWarningHover: p[4],
                          colorWarning: p[6],
                          colorWarningActive: p[7],
                          colorWarningTextHover: p[8],
                          colorWarningText: p[9],
                          colorWarningTextActive: p[10],
                          colorInfoBg: m[1],
                          colorInfoBgHover: m[2],
                          colorInfoBorder: m[3],
                          colorInfoBorderHover: m[4],
                          colorInfoHover: m[4],
                          colorInfo: m[6],
                          colorInfoActive: m[7],
                          colorInfoTextHover: m[8],
                          colorInfoText: m[9],
                          colorInfoTextActive: m[10],
                          colorLinkHover: v[4],
                          colorLink: v[6],
                          colorLinkActive: v[7],
                          colorBgMask: new Fr("#000")
                            .setAlpha(0.45)
                            .toRgbString(),
                          colorWhite: "#fff",
                        });
                      })(e, {
                        generateColorPalettes: Br,
                        generateNeutralColorPalettes: Wr,
                      })
                    ),
                    ((e) => {
                      const t = (function (e) {
                          const t = new Array(10).fill(null).map((t, n) => {
                            const r = n - 1,
                              o = e * Math.pow(Math.E, r / 5),
                              a = n > 1 ? Math.floor(o) : Math.ceil(o);
                            return 2 * Math.floor(a / 2);
                          });
                          return (
                            (t[1] = e),
                            t.map((e) => {
                              return {
                                size: e,
                                lineHeight: ((t = e), (t + 8) / t),
                              };
                              var t;
                            })
                          );
                        })(e),
                        n = t.map((e) => e.size),
                        r = t.map((e) => e.lineHeight),
                        o = n[1],
                        a = n[0],
                        i = n[2],
                        l = r[1],
                        u = r[0],
                        c = r[2];
                      return {
                        fontSizeSM: a,
                        fontSize: o,
                        fontSizeLG: i,
                        fontSizeXL: n[3],
                        fontSizeHeading1: n[6],
                        fontSizeHeading2: n[5],
                        fontSizeHeading3: n[4],
                        fontSizeHeading4: n[3],
                        fontSizeHeading5: n[2],
                        lineHeight: l,
                        lineHeightLG: c,
                        lineHeightSM: u,
                        fontHeight: Math.round(l * o),
                        fontHeightLG: Math.round(c * i),
                        fontHeightSM: Math.round(u * a),
                        lineHeightHeading1: r[6],
                        lineHeightHeading2: r[5],
                        lineHeightHeading3: r[4],
                        lineHeightHeading4: r[3],
                        lineHeightHeading5: r[2],
                      };
                    })(e.fontSize)
                  ),
                  (function (e) {
                    const { sizeUnit: t, sizeStep: n } = e;
                    return {
                      sizeXXL: t * (n + 8),
                      sizeXL: t * (n + 4),
                      sizeLG: t * (n + 2),
                      sizeMD: t * (n + 1),
                      sizeMS: t * n,
                      size: t * n,
                      sizeSM: t * (n - 1),
                      sizeXS: t * (n - 2),
                      sizeXXS: t * (n - 3),
                    };
                  })(e)
                ),
                ((e) => {
                  const { controlHeight: t } = e;
                  return {
                    controlHeightSM: 0.75 * t,
                    controlHeightXS: 0.5 * t,
                    controlHeightLG: 1.25 * t,
                  };
                })(e)
              ),
              (function (e) {
                const {
                  motionUnit: t,
                  motionBase: n,
                  borderRadius: r,
                  lineWidth: o,
                } = e;
                return Object.assign(
                  {
                    motionDurationFast: `${(n + t).toFixed(1)}s`,
                    motionDurationMid: `${(n + 2 * t).toFixed(1)}s`,
                    motionDurationSlow: `${(n + 3 * t).toFixed(1)}s`,
                    lineWidthBold: o + 1,
                  },
                  ((e) => {
                    let t = e,
                      n = e,
                      r = e,
                      o = e;
                    return (
                      e < 6 && e >= 5
                        ? (t = e + 1)
                        : e < 16 && e >= 6
                        ? (t = e + 2)
                        : e >= 16 && (t = 16),
                      e < 7 && e >= 5
                        ? (n = 4)
                        : e < 8 && e >= 7
                        ? (n = 5)
                        : e < 14 && e >= 8
                        ? (n = 6)
                        : e < 16 && e >= 14
                        ? (n = 7)
                        : e >= 16 && (n = 8),
                      e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
                      e > 4 && e < 8 ? (o = 4) : e >= 8 && (o = 6),
                      {
                        borderRadius: e,
                        borderRadiusXS: r,
                        borderRadiusSM: n,
                        borderRadiusLG: t,
                        borderRadiusOuter: o,
                      }
                    );
                  })(r)
                );
              })(e)
            );
          }),
          (Vr = Array.isArray($r) ? $r : [$r]),
          Rt.has(Vr) || Rt.set(Vr, new Ft(Vr)),
          Rt.get(Vr));
      var $r, Vr;
      const Gr = { token: Ir, override: { override: Ir }, hashed: !0 },
        Qr = e.createContext(Gr);
      function Xr(e) {
        return e >= 0 && e <= 255;
      }
      const qr = function (e, t) {
        const { r: n, g: r, b: o, a } = new Fr(e).toRgb();
        if (a < 1) return e;
        const { r: i, g: l, b: u } = new Fr(t).toRgb();
        for (let e = 0.01; e <= 1; e += 0.01) {
          const t = Math.round((n - i * (1 - e)) / e),
            a = Math.round((r - l * (1 - e)) / e),
            c = Math.round((o - u * (1 - e)) / e);
          if (Xr(t) && Xr(a) && Xr(c))
            return new Fr({
              r: t,
              g: a,
              b: c,
              a: Math.round(100 * e) / 100,
            }).toRgbString();
        }
        return new Fr({ r: n, g: r, b: o, a: 1 }).toRgbString();
      };
      var Yr = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      function Kr(e) {
        const { override: t } = e,
          n = Yr(e, ["override"]),
          r = Object.assign({}, t);
        Object.keys(Ir).forEach((e) => {
          delete r[e];
        });
        const o = Object.assign(Object.assign({}, n), r);
        if (!1 === o.motion) {
          const e = "0s";
          (o.motionDurationFast = e),
            (o.motionDurationMid = e),
            (o.motionDurationSlow = e);
        }
        return Object.assign(
          Object.assign(Object.assign({}, o), {
            colorFillContent: o.colorFillSecondary,
            colorFillContentHover: o.colorFill,
            colorFillAlter: o.colorFillQuaternary,
            colorBgContainerDisabled: o.colorFillTertiary,
            colorBorderBg: o.colorBgContainer,
            colorSplit: qr(o.colorBorderSecondary, o.colorBgContainer),
            colorTextPlaceholder: o.colorTextQuaternary,
            colorTextDisabled: o.colorTextQuaternary,
            colorTextHeading: o.colorText,
            colorTextLabel: o.colorTextSecondary,
            colorTextDescription: o.colorTextTertiary,
            colorTextLightSolid: o.colorWhite,
            colorHighlight: o.colorError,
            colorBgTextHover: o.colorFillSecondary,
            colorBgTextActive: o.colorFill,
            colorIcon: o.colorTextTertiary,
            colorIconHover: o.colorText,
            colorErrorOutline: qr(o.colorErrorBg, o.colorBgContainer),
            colorWarningOutline: qr(o.colorWarningBg, o.colorBgContainer),
            fontSizeIcon: o.fontSizeSM,
            lineWidthFocus: 3 * o.lineWidth,
            lineWidth: o.lineWidth,
            controlOutlineWidth: 2 * o.lineWidth,
            controlInteractiveSize: o.controlHeight / 2,
            controlItemBgHover: o.colorFillTertiary,
            controlItemBgActive: o.colorPrimaryBg,
            controlItemBgActiveHover: o.colorPrimaryBgHover,
            controlItemBgActiveDisabled: o.colorFill,
            controlTmpOutline: o.colorFillQuaternary,
            controlOutline: qr(o.colorPrimaryBg, o.colorBgContainer),
            lineType: o.lineType,
            borderRadius: o.borderRadius,
            borderRadiusXS: o.borderRadiusXS,
            borderRadiusSM: o.borderRadiusSM,
            borderRadiusLG: o.borderRadiusLG,
            fontWeightStrong: 600,
            opacityLoading: 0.65,
            linkDecoration: "none",
            linkHoverDecoration: "none",
            linkFocusDecoration: "none",
            controlPaddingHorizontal: 12,
            controlPaddingHorizontalSM: 8,
            paddingXXS: o.sizeXXS,
            paddingXS: o.sizeXS,
            paddingSM: o.sizeSM,
            padding: o.size,
            paddingMD: o.sizeMD,
            paddingLG: o.sizeLG,
            paddingXL: o.sizeXL,
            paddingContentHorizontalLG: o.sizeLG,
            paddingContentVerticalLG: o.sizeMS,
            paddingContentHorizontal: o.sizeMS,
            paddingContentVertical: o.sizeSM,
            paddingContentHorizontalSM: o.size,
            paddingContentVerticalSM: o.sizeXS,
            marginXXS: o.sizeXXS,
            marginXS: o.sizeXS,
            marginSM: o.sizeSM,
            margin: o.size,
            marginMD: o.sizeMD,
            marginLG: o.sizeLG,
            marginXL: o.sizeXL,
            marginXXL: o.sizeXXL,
            boxShadow:
              "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowSecondary:
              "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowTertiary:
              "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
            screenXS: 480,
            screenXSMin: 480,
            screenXSMax: 575,
            screenSM: 576,
            screenSMMin: 576,
            screenSMMax: 767,
            screenMD: 768,
            screenMDMin: 768,
            screenMDMax: 991,
            screenLG: 992,
            screenLGMin: 992,
            screenLGMax: 1199,
            screenXL: 1200,
            screenXLMin: 1200,
            screenXLMax: 1599,
            screenXXL: 1600,
            screenXXLMin: 1600,
            boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
            boxShadowCard: `\n      0 1px 2px -2px ${new Fr(
              "rgba(0, 0, 0, 0.16)"
            ).toRgbString()},\n      0 3px 6px 0 ${new Fr(
              "rgba(0, 0, 0, 0.12)"
            ).toRgbString()},\n      0 5px 12px 4px ${new Fr(
              "rgba(0, 0, 0, 0.09)"
            ).toRgbString()}\n    `,
            boxShadowDrawerRight:
              "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowDrawerLeft:
              "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowDrawerUp:
              "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowDrawerDown:
              "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowTabsOverflowLeft:
              "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowRight:
              "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowTop:
              "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowBottom:
              "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)",
          }),
          r
        );
      }
      var Zr = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      const Jr = {
          lineHeight: !0,
          lineHeightSM: !0,
          lineHeightLG: !0,
          lineHeightHeading1: !0,
          lineHeightHeading2: !0,
          lineHeightHeading3: !0,
          lineHeightHeading4: !0,
          lineHeightHeading5: !0,
          opacityLoading: !0,
          fontWeightStrong: !0,
          zIndexPopupBase: !0,
          zIndexBase: !0,
          opacityImage: !0,
        },
        eo = {
          size: !0,
          sizeSM: !0,
          sizeLG: !0,
          sizeMD: !0,
          sizeXS: !0,
          sizeXXS: !0,
          sizeMS: !0,
          sizeXL: !0,
          sizeXXL: !0,
          sizeUnit: !0,
          sizeStep: !0,
          motionBase: !0,
          motionUnit: !0,
        },
        to = {
          screenXS: !0,
          screenXSMin: !0,
          screenXSMax: !0,
          screenSM: !0,
          screenSMMin: !0,
          screenSMMax: !0,
          screenMD: !0,
          screenMDMin: !0,
          screenMDMax: !0,
          screenLG: !0,
          screenLGMin: !0,
          screenLGMax: !0,
          screenXL: !0,
          screenXLMin: !0,
          screenXLMax: !0,
          screenXXL: !0,
          screenXXLMin: !0,
        },
        no = (e, t, n) => {
          const r = n.getDerivativeToken(e),
            { override: o } = t,
            a = Zr(t, ["override"]);
          let i = Object.assign(Object.assign({}, r), { override: o });
          return (
            (i = Kr(i)),
            a &&
              Object.entries(a).forEach((e) => {
                let [t, n] = e;
                const { theme: r } = n,
                  o = Zr(n, ["theme"]);
                let a = o;
                r &&
                  (a = no(
                    Object.assign(Object.assign({}, i), o),
                    { override: o },
                    r
                  )),
                  (i[t] = a);
              }),
            i
          );
        };
      function ro() {
        const {
            token: t,
            hashed: n,
            theme: r,
            override: o,
            cssVar: a,
          } = e.useContext(Qr),
          i = `5.21.2-${n || ""}`,
          l = r || Ur,
          [u, c, s] = fn(l, [Ir, t], {
            salt: i,
            override: o,
            getComputedToken: no,
            formatToken: Kr,
            cssVar: a && {
              prefix: a.prefix,
              key: a.key,
              unitless: Jr,
              ignore: eo,
              preserve: to,
            },
          });
        return [l, s, n ? c : "", u, a];
      }
      const {
          genStyleHooks: oo,
          genComponentStyleHook: ao,
          genSubStyleComponent: io,
        } = (function (t) {
          var n = t.useCSP,
            r = void 0 === n ? zr : n,
            o = t.useToken,
            a = t.usePrefix,
            i = t.getResetStyles,
            l = t.getCommonStyle,
            s = t.getCompUnitless;
          function d(n, s, f) {
            var d =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              p = Array.isArray(n) ? n : [n, n],
              h = u(p, 1)[0],
              m = p.join("-"),
              g = t.layer || { name: "antd" };
            return function (t) {
              var n,
                u,
                p =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                v = o(),
                y = v.theme,
                b = v.realToken,
                w = v.hashId,
                x = v.token,
                k = v.cssVar,
                S = a(),
                E = S.rootPrefixCls,
                C = S.iconPrefixCls,
                O = r(),
                P = k ? "css" : "js",
                M =
                  ((n = function () {
                    var e = new Set();
                    return (
                      k &&
                        Object.keys(d.unitless || {}).forEach(function (t) {
                          e.add(Xt(t, k.prefix)), e.add(Xt(t, Cr(h, k.prefix)));
                        }),
                      (function (e, t) {
                        var n = "css" === e ? Sr : Er;
                        return function (e) {
                          return new n(e, t);
                        };
                      })(P, e)
                    );
                  }),
                  (u = [P, h, null == k ? void 0 : k.prefix]),
                  e.useMemo(function () {
                    var e = jr.get(u);
                    if (e) return e;
                    var t = n();
                    return jr.set(u, t), t;
                  }, u)),
                T = (function (e) {
                  return "js" === e
                    ? { max: Math.max, min: Math.min }
                    : {
                        max: function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return "max(".concat(
                            t
                              .map(function (e) {
                                return Gt(e);
                              })
                              .join(","),
                            ")"
                          );
                        },
                        min: function () {
                          for (
                            var e = arguments.length, t = new Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          return "min(".concat(
                            t
                              .map(function (e) {
                                return Gt(e);
                              })
                              .join(","),
                            ")"
                          );
                        },
                      };
                })(P),
                _ = T.max,
                N = T.min,
                L = {
                  theme: y,
                  token: x,
                  hashId: w,
                  nonce: function () {
                    return O.nonce;
                  },
                  clientOnly: d.clientOnly,
                  layer: g,
                  order: d.order || -999,
                };
              return (
                sr(
                  Se(Se({}, L), {}, { clientOnly: !1, path: ["Shared", E] }),
                  function () {
                    return "function" == typeof i ? i(x) : [];
                  }
                ),
                [
                  sr(Se(Se({}, L), {}, { path: [m, t, C] }), function () {
                    if (!1 === d.injectStyle) return [];
                    var e = (function (e) {
                        var t,
                          n = e,
                          r = Nr;
                        return (
                          Pr &&
                            "undefined" != typeof Proxy &&
                            ((t = new Set()),
                            (n = new Proxy(e, {
                              get: function (e, n) {
                                var r;
                                return (
                                  Mr &&
                                    (null === (r = t) ||
                                      void 0 === r ||
                                      r.add(n)),
                                  e[n]
                                );
                              },
                            })),
                            (r = function (e, n) {
                              var r;
                              _r[e] = {
                                global: Array.from(t),
                                component: Se(
                                  Se(
                                    {},
                                    null === (r = _r[e]) || void 0 === r
                                      ? void 0
                                      : r.component
                                  ),
                                  n
                                ),
                              };
                            })),
                          { token: n, keys: t, flush: r }
                        );
                      })(x),
                      n = e.token,
                      r = e.flush,
                      o = Lr(h, b, f),
                      a = ".".concat(t),
                      i = Or(h, b, o, { deprecatedTokens: d.deprecatedTokens });
                    k &&
                      o &&
                      "object" === c(o) &&
                      Object.keys(o).forEach(function (e) {
                        o[e] = "var(".concat(Xt(e, Cr(h, k.prefix)), ")");
                      });
                    var u = Tr(
                        n,
                        {
                          componentCls: a,
                          prefixCls: t,
                          iconCls: ".".concat(C),
                          antCls: ".".concat(E),
                          calc: M,
                          max: _,
                          min: N,
                        },
                        k ? o : i
                      ),
                      m = s(u, {
                        hashId: w,
                        prefixCls: t,
                        rootPrefixCls: E,
                        iconPrefixCls: C,
                      });
                    r(h, i);
                    var g =
                      "function" == typeof l ? l(u, t, p, d.resetFont) : null;
                    return [!1 === d.resetStyle ? null : g, m];
                  }),
                  w,
                ]
              );
            };
          }
          return {
            genStyleHooks: function (t, n, r, a) {
              var i = Array.isArray(t) ? t[0] : t;
              function l(e) {
                return ""
                  .concat(String(i))
                  .concat(e.slice(0, 1).toUpperCase())
                  .concat(e.slice(1));
              }
              var c = (null == a ? void 0 : a.unitless) || {},
                p = Se(
                  Se({}, "function" == typeof s ? s(t) : {}),
                  {},
                  f({}, l("zIndexPopup"), !0)
                );
              Object.keys(c).forEach(function (e) {
                p[l(e)] = c[e];
              });
              var h = Se(Se({}, a), {}, { unitless: p, prefixToken: l }),
                m = d(t, n, r, h),
                g = (function (t, n, r) {
                  var a = r.unitless,
                    i = r.injectStyle,
                    l = void 0 === i || i,
                    c = r.prefixToken,
                    s = r.ignore,
                    f = function (i) {
                      var l = i.rootCls,
                        f = i.cssVar,
                        d = void 0 === f ? {} : f,
                        p = o().realToken;
                      return (
                        (function (t, n) {
                          var r = t.key,
                            o = t.prefix,
                            a = t.unitless,
                            i = t.ignore,
                            l = t.token,
                            c = t.scope,
                            s = void 0 === c ? "" : c,
                            f = (0, e.useContext)(At),
                            d = f.cache.instanceId,
                            p = f.container,
                            h = l._tokenKey,
                            m = [].concat(St(t.path), [r, s, h]);
                          rn(
                            fr,
                            m,
                            function () {
                              var e = n(),
                                t = u(
                                  Yt(e, r, {
                                    prefix: o,
                                    unitless: a,
                                    ignore: i,
                                    scope: s,
                                  }),
                                  2
                                ),
                                l = t[0],
                                c = t[1];
                              return [l, c, lr(m, c), r];
                            },
                            function (e) {
                              var t = u(e, 3)[2];
                              Vt && ze(t, { mark: Lt });
                            },
                            function (e) {
                              var t = u(e, 3),
                                n = t[1],
                                o = t[2];
                              if (n) {
                                var a = Ae(n, o, {
                                  mark: Lt,
                                  prepend: "queue",
                                  attachTo: p,
                                  priority: -999,
                                });
                                (a[jt] = d), a.setAttribute(Nt, r);
                              }
                            }
                          );
                        })(
                          {
                            path: [t],
                            prefix: d.prefix,
                            key: d.key,
                            unitless: a,
                            ignore: s,
                            token: p,
                            scope: l,
                          },
                          function () {
                            var e = Lr(t, p, n),
                              o = Or(t, p, e, {
                                deprecatedTokens:
                                  null == r ? void 0 : r.deprecatedTokens,
                              });
                            return (
                              Object.keys(e).forEach(function (e) {
                                (o[c(e)] = o[e]), delete o[e];
                              }),
                              o
                            );
                          }
                        ),
                        null
                      );
                    };
                  return function (n) {
                    var r = o().cssVar;
                    return [
                      function (o) {
                        return l && r
                          ? e.createElement(
                              e.Fragment,
                              null,
                              e.createElement(f, {
                                rootCls: n,
                                cssVar: r,
                                component: t,
                              }),
                              o
                            )
                          : o;
                      },
                      null == r ? void 0 : r.key,
                    ];
                  };
                })(i, r, h);
              return function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : e,
                  n = u(m(e, t), 2)[1],
                  r = u(g(t), 2);
                return [r[0], n, r[1]];
              };
            },
            genSubStyleComponent: function (e, t, n) {
              var r = d(
                e,
                t,
                n,
                Se(
                  { resetStyle: !1, order: -998 },
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {}
                )
              );
              return function (e) {
                var t = e.prefixCls,
                  n = e.rootCls;
                return r(t, void 0 === n ? t : n), null;
              };
            },
            genComponentStyleHook: d,
          };
        })({
          usePrefix: () => {
            const { getPrefixCls: t, iconPrefixCls: n } = (0, e.useContext)(xt);
            return { rootPrefixCls: t(), iconPrefixCls: n };
          },
          useToken: () => {
            const [e, t, n, r, o] = ro();
            return { theme: e, realToken: t, hashId: n, token: r, cssVar: o };
          },
          useCSP: () => {
            const { csp: t, iconPrefixCls: n } = (0, e.useContext)(xt);
            return (
              ((e, t) => {
                const [n, r] = ro();
                sr(
                  {
                    theme: n,
                    token: r,
                    hashId: "",
                    path: ["ant-design-icons", e],
                    nonce: () => (null == t ? void 0 : t.nonce),
                    layer: { name: "antd" },
                  },
                  () => [
                    {
                      [`.${e}`]: Object.assign(
                        Object.assign(
                          {},
                          {
                            display: "inline-flex",
                            alignItems: "center",
                            color: "inherit",
                            fontStyle: "normal",
                            lineHeight: 0,
                            textAlign: "center",
                            textTransform: "none",
                            verticalAlign: "-0.125em",
                            textRendering: "optimizeLegibility",
                            "-webkit-font-smoothing": "antialiased",
                            "-moz-osx-font-smoothing": "grayscale",
                            "> *": { lineHeight: 1 },
                            svg: { display: "inline-block" },
                          }
                        ),
                        { [`.${e} .${e}-icon`]: { display: "block" } }
                      ),
                    },
                  ]
                );
              })(n, t),
              null != t ? t : {}
            );
          },
          getResetStyles: (e) => [{ "&": Ar(e) }],
          getCommonStyle: (e, t, n, r) => {
            const o = `[class^="${t}"], [class*=" ${t}"]`,
              a = n ? `.${n}` : o,
              i = {
                boxSizing: "border-box",
                "&::before, &::after": { boxSizing: "border-box" },
              };
            let l = {};
            return (
              !1 !== r &&
                (l = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
              {
                [a]: Object.assign(Object.assign(Object.assign({}, l), i), {
                  [o]: i,
                }),
              }
            );
          },
          getCompUnitless: () => Jr,
        }),
        lo = ["wrap", "nowrap", "wrap-reverse"],
        uo = [
          "flex-start",
          "flex-end",
          "start",
          "end",
          "center",
          "space-between",
          "space-around",
          "space-evenly",
          "stretch",
          "normal",
          "left",
          "right",
        ],
        co = [
          "center",
          "start",
          "end",
          "flex-start",
          "flex-end",
          "self-start",
          "self-end",
          "baseline",
          "normal",
          "stretch",
        ],
        so = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: {
              display: "flex",
              "&-vertical": { flexDirection: "column" },
              "&-rtl": { direction: "rtl" },
              "&:empty": { display: "none" },
            },
          };
        },
        fo = (e) => {
          const { componentCls: t } = e;
          return {
            [t]: {
              "&-gap-small": { gap: e.flexGapSM },
              "&-gap-middle": { gap: e.flexGap },
              "&-gap-large": { gap: e.flexGapLG },
            },
          };
        },
        po = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            lo.forEach((e) => {
              n[`${t}-wrap-${e}`] = { flexWrap: e };
            }),
            n
          );
        },
        ho = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            co.forEach((e) => {
              n[`${t}-align-${e}`] = { alignItems: e };
            }),
            n
          );
        },
        mo = (e) => {
          const { componentCls: t } = e,
            n = {};
          return (
            uo.forEach((e) => {
              n[`${t}-justify-${e}`] = { justifyContent: e };
            }),
            n
          );
        },
        go = oo(
          "Flex",
          (e) => {
            const { paddingXS: t, padding: n, paddingLG: r } = e,
              o = Tr(e, { flexGapSM: t, flexGap: n, flexGapLG: r });
            return [so(o), fo(o), po(o), ho(o), mo(o)];
          },
          () => ({}),
          { resetStyle: !1 }
        );
      const vo = e.forwardRef((t, n) => {
          const {
              prefixCls: r,
              rootClassName: o,
              className: a,
              style: i,
              flex: l,
              gap: u,
              children: c,
              vertical: s = !1,
              component: f = "div",
            } = t,
            d = (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  t.indexOf(r) < 0 &&
                  (n[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                  t.indexOf(r[o]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                    (n[r[o]] = e[r[o]]);
              }
              return n;
            })(t, [
              "prefixCls",
              "rootClassName",
              "className",
              "style",
              "flex",
              "gap",
              "children",
              "vertical",
              "component",
            ]),
            { flex: p, direction: m, getPrefixCls: g } = e.useContext(xt),
            v = g("flex", r),
            [y, b, w] = go(v),
            x = null != s ? s : null == p ? void 0 : p.vertical,
            k = h()(
              a,
              o,
              null == p ? void 0 : p.className,
              v,
              b,
              w,
              (function (e, t) {
                return h()(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        ((e, t) => {
                          const n = !0 === t.wrap ? "wrap" : t.wrap;
                          return { [`${e}-wrap-${n}`]: n && lo.includes(n) };
                        })(e, t)
                      ),
                      ((e, t) => {
                        const n = {};
                        return (
                          co.forEach((r) => {
                            n[`${e}-align-${r}`] = t.align === r;
                          }),
                          (n[`${e}-align-stretch`] = !t.align && !!t.vertical),
                          n
                        );
                      })(e, t)
                    ),
                    ((e, t) => {
                      const n = {};
                      return (
                        uo.forEach((r) => {
                          n[`${e}-justify-${r}`] = t.justify === r;
                        }),
                        n
                      );
                    })(e, t)
                  )
                );
              })(v, t),
              {
                [`${v}-rtl`]: "rtl" === m,
                [`${v}-gap-${u}`]: wt(u),
                [`${v}-vertical`]: x,
              }
            ),
            S = Object.assign(
              Object.assign({}, null == p ? void 0 : p.style),
              i
            );
          return (
            l && (S.flex = l),
            u && !wt(u) && (S.gap = u),
            y(
              e.createElement(
                f,
                Object.assign(
                  { ref: n, className: k, style: S },
                  ((E = d),
                  (C = ["justify", "wrap", "align"]),
                  (O = Object.assign({}, E)),
                  Array.isArray(C) &&
                    C.forEach(function (e) {
                      delete O[e];
                    }),
                  O)
                ),
                c
              )
            )
          );
          var E, C, O;
        }),
        yo = vo,
        bo = function (t) {
          var n = t.messages,
            r = t.activeChat,
            o = t.botIsTyping,
            a = (0, e.useRef)(null);
          return (
            (0, e.useEffect)(
              function () {
                var e;
                null === (e = a.current) ||
                  void 0 === e ||
                  e.scrollIntoView({ behavior: "smooth" });
              },
              [n, o]
            ),
            e.createElement(
              "div",
              { className: "message-list" },
              null !== r
                ? e.createElement(
                    "div",
                    null,
                    n.map(function (t) {
                      return e.createElement(
                        "div",
                        { key: t._id },
                        "user" === t.sender
                          ? e.createElement(
                              yo,
                              { justify: "end", style: { width: "100%" } },
                              e.createElement(
                                "p",
                                {
                                  style: {
                                    backgroundColor: "#713189",
                                    padding: "10px",
                                    width: "75%",
                                    borderRadius: "12px 12px 0px 12px",
                                    color: "white",
                                  },
                                },
                                t.message
                              )
                            )
                          : e.createElement(
                              yo,
                              { justify: "start", style: { width: "100%" } },
                              e.createElement(
                                "p",
                                {
                                  style: {
                                    backgroundColor: "#f5f5f5",
                                    padding: "10px",
                                    width: "75%",
                                    borderRadius: "10px 10px 10px 0px",
                                    color: "black",
                                  },
                                },
                                t.message
                              )
                            )
                      );
                    }),
                    o &&
                      e.createElement(
                        yo,
                        { justify: "start", style: { width: "100%" } },
                        e.createElement(
                          "div",
                          {
                            style: {
                              backgroundColor: "#f5f5f5",
                              padding: "10px",
                              borderRadius: "10px 10px 10px 0px",
                              color: "black",
                            },
                          },
                          e.createElement(
                            "div",
                            { className: "dots" },
                            e.createElement("span", { className: "dot" }, "."),
                            e.createElement("span", { className: "dot" }, "."),
                            e.createElement("span", { className: "dot" }, ".")
                          )
                        )
                      ),
                    e.createElement("div", { ref: a })
                  )
                : null
            )
          );
        },
        wo = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",
                },
              },
            ],
          },
          name: "up",
          theme: "outlined",
        };
      var xo = function (t, n) {
        return e.createElement(nt, r({}, t, { ref: n, icon: wo }));
      };
      const ko = e.forwardRef(xo);
      function So(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const Eo = function (t) {
          var n,
            r,
            o = t.onSendMessage,
            a =
              ((n = (0, e.useState)("")),
              (r = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(n) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != n) {
                    var r,
                      o,
                      a,
                      i,
                      l = [],
                      u = !0,
                      c = !1;
                    try {
                      if (((a = (n = n.call(e)).next), 0 === t)) {
                        if (Object(n) !== n) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (r = a.call(n)).done) &&
                          (l.push(r.value), l.length !== t);
                          u = !0
                        );
                    } catch (e) {
                      (c = !0), (o = e);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != n.return &&
                          ((i = n.return()), Object(i) !== i)
                        )
                          return;
                      } finally {
                        if (c) throw o;
                      }
                    }
                    return l;
                  }
                })(n, r) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return So(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? So(e, t)
                        : void 0
                    );
                  }
                })(n, r) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            i = a[0],
            l = a[1];
          return e.createElement(
            "div",
            { className: "message-wrapper" },
            e.createElement(
              "form",
              {
                className: "message-input-form",
                onSubmit: function (e) {
                  e.preventDefault(), "" !== i.trim() && (o(i), l(""));
                },
              },
              e.createElement("input", {
                type: "text",
                className: "message-input",
                value: i,
                onChange: function (e) {
                  return l(e.target.value);
                },
                placeholder: "Type your message...",
              }),
              e.createElement(
                "button",
                { type: "submit", className: "send-button" },
                e.createElement(ko, null)
              )
            )
          );
        },
        Co = function (t) {
          var n = t.followUp,
            r = t.onSendMessage,
            o = function (e) {
              r(e.target.innerText);
            };
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              "div",
              { className: "followup-questions-wrapper" },
              null == n
                ? void 0
                : n.map(function (t, n) {
                    return e.createElement(
                      "span",
                      { key: n, className: "followup-question", onClick: o },
                      e.createElement("span", null, t)
                    );
                  })
            )
          );
        };
      var Oo = o(577),
        Po = {};
      (Po.styleTagTransform = gt()),
        (Po.setAttributes = dt()),
        (Po.insert = st().bind(null, "head")),
        (Po.domAPI = ut()),
        (Po.insertStyleElement = ht()),
        it()(Oo.Z, Po),
        Oo.Z && Oo.Z.locals && Oo.Z.locals,
        Math.pow(10, 8);
      const Mo = 6048e5,
        To = 864e5,
        _o = 36e5,
        No = Symbol.for("constructDateFrom");
      function Lo(e, t) {
        return "function" == typeof e
          ? e(t)
          : e && "object" == typeof e && No in e
          ? e[No](t)
          : e instanceof Date
          ? new e.constructor(t)
          : new Date(t);
      }
      function jo(e, t) {
        return Lo(t || e, e);
      }
      function zo(e, t) {
        const n = () => Lo(t?.in, NaN),
          r = t?.additionalDigits ?? 2,
          o = (function (e) {
            const t = {},
              n = e.split(Ao.dateTimeDelimiter);
            let r;
            if (n.length > 2) return t;
            if (
              (/:/.test(n[0])
                ? (r = n[0])
                : ((t.date = n[0]),
                  (r = n[1]),
                  Ao.timeZoneDelimiter.test(t.date) &&
                    ((t.date = e.split(Ao.timeZoneDelimiter)[0]),
                    (r = e.substr(t.date.length, e.length)))),
              r)
            ) {
              const e = Ao.timezone.exec(r);
              e
                ? ((t.time = r.replace(e[1], "")), (t.timezone = e[1]))
                : (t.time = r);
            }
            return t;
          })(e);
        let a;
        if (o.date) {
          const e = (function (e, t) {
            const n = new RegExp(
                "^(?:(\\d{4}|[+-]\\d{" +
                  (4 + t) +
                  "})|(\\d{2}|[+-]\\d{" +
                  (2 + t) +
                  "})$)"
              ),
              r = e.match(n);
            if (!r) return { year: NaN, restDateString: "" };
            const o = r[1] ? parseInt(r[1]) : null,
              a = r[2] ? parseInt(r[2]) : null;
            return {
              year: null === a ? o : 100 * a,
              restDateString: e.slice((r[1] || r[2]).length),
            };
          })(o.date, r);
          a = (function (e, t) {
            if (null === t) return new Date(NaN);
            const n = e.match(Do);
            if (!n) return new Date(NaN);
            const r = !!n[4],
              o = Ro(n[1]),
              a = Ro(n[2]) - 1,
              i = Ro(n[3]),
              l = Ro(n[4]),
              u = Ro(n[5]) - 1;
            if (r)
              return (function (e, t, n) {
                return t >= 1 && t <= 53 && n >= 0 && n <= 6;
              })(0, l, u)
                ? (function (e, t, n) {
                    const r = new Date(0);
                    r.setUTCFullYear(e, 0, 4);
                    const o = 7 * (t - 1) + n + 1 - (r.getUTCDay() || 7);
                    return r.setUTCDate(r.getUTCDate() + o), r;
                  })(t, l, u)
                : new Date(NaN);
            {
              const e = new Date(0);
              return (function (e, t, n) {
                return (
                  t >= 0 &&
                  t <= 11 &&
                  n >= 1 &&
                  n <= (Bo[t] || (Wo(e) ? 29 : 28))
                );
              })(t, a, i) &&
                (function (e, t) {
                  return t >= 1 && t <= (Wo(e) ? 366 : 365);
                })(t, o)
                ? (e.setUTCFullYear(t, a, Math.max(o, i)), e)
                : new Date(NaN);
            }
          })(e.restDateString, e.year);
        }
        if (!a || isNaN(+a)) return n();
        const i = +a;
        let l,
          u = 0;
        if (
          o.time &&
          ((u = (function (e) {
            const t = e.match(Io);
            if (!t) return NaN;
            const n = Ho(t[1]),
              r = Ho(t[2]),
              o = Ho(t[3]);
            return (function (e, t, n) {
              return 24 === e
                ? 0 === t && 0 === n
                : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
            })(n, r, o)
              ? n * _o + 6e4 * r + 1e3 * o
              : NaN;
          })(o.time)),
          isNaN(u))
        )
          return n();
        if (!o.timezone) {
          const e = new Date(i + u),
            n = jo(0, t?.in);
          return (
            n.setFullYear(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()),
            n.setHours(
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
              e.getUTCMilliseconds()
            ),
            n
          );
        }
        return (
          (l = (function (e) {
            if ("Z" === e) return 0;
            const t = e.match(Fo);
            if (!t) return 0;
            const n = "+" === t[1] ? -1 : 1,
              r = parseInt(t[2]),
              o = (t[3] && parseInt(t[3])) || 0;
            return (function (e, t) {
              return t >= 0 && t <= 59;
            })(0, o)
              ? n * (r * _o + 6e4 * o)
              : NaN;
          })(o.timezone)),
          isNaN(l) ? n() : jo(i + u + l, t?.in)
        );
      }
      const Ao = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/,
        },
        Do = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        Io =
          /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        Fo = /^([+-])(\d{2})(?::?(\d{2}))?$/;
      function Ro(e) {
        return e ? parseInt(e) : 1;
      }
      function Ho(e) {
        return (e && parseFloat(e.replace(",", "."))) || 0;
      }
      const Bo = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function Wo(e) {
        return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
      }
      const Uo = {
        lessThanXSeconds: {
          one: "less than a second",
          other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
          one: "less than a minute",
          other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      };
      function $o(e) {
        return (t = {}) => {
          const n = t.width ? String(t.width) : e.defaultWidth;
          return e.formats[n] || e.formats[e.defaultWidth];
        };
      }
      const Vo = {
          date: $o({
            formats: {
              full: "EEEE, MMMM do, y",
              long: "MMMM do, y",
              medium: "MMM d, y",
              short: "MM/dd/yyyy",
            },
            defaultWidth: "full",
          }),
          time: $o({
            formats: {
              full: "h:mm:ss a zzzz",
              long: "h:mm:ss a z",
              medium: "h:mm:ss a",
              short: "h:mm a",
            },
            defaultWidth: "full",
          }),
          dateTime: $o({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: "{{date}}, {{time}}",
              short: "{{date}}, {{time}}",
            },
            defaultWidth: "full",
          }),
        },
        Go = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: "P",
        };
      function Qo(e) {
        return (t, n) => {
          let r;
          if (
            "formatting" === (n?.context ? String(n.context) : "standalone") &&
            e.formattingValues
          ) {
            const t = e.defaultFormattingWidth || e.defaultWidth,
              o = n?.width ? String(n.width) : t;
            r = e.formattingValues[o] || e.formattingValues[t];
          } else {
            const t = e.defaultWidth,
              o = n?.width ? String(n.width) : e.defaultWidth;
            r = e.values[o] || e.values[t];
          }
          return r[e.argumentCallback ? e.argumentCallback(t) : t];
        };
      }
      const Xo = {
        ordinalNumber: (e, t) => {
          const n = Number(e),
            r = n % 100;
          if (r > 20 || r < 10)
            switch (r % 10) {
              case 1:
                return n + "st";
              case 2:
                return n + "nd";
              case 3:
                return n + "rd";
            }
          return n + "th";
        },
        era: Qo({
          values: {
            narrow: ["B", "A"],
            abbreviated: ["BC", "AD"],
            wide: ["Before Christ", "Anno Domini"],
          },
          defaultWidth: "wide",
        }),
        quarter: Qo({
          values: {
            narrow: ["1", "2", "3", "4"],
            abbreviated: ["Q1", "Q2", "Q3", "Q4"],
            wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
          },
          defaultWidth: "wide",
          argumentCallback: (e) => e - 1,
        }),
        month: Qo({
          values: {
            narrow: [
              "J",
              "F",
              "M",
              "A",
              "M",
              "J",
              "J",
              "A",
              "S",
              "O",
              "N",
              "D",
            ],
            abbreviated: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            wide: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          },
          defaultWidth: "wide",
        }),
        day: Qo({
          values: {
            narrow: ["S", "M", "T", "W", "T", "F", "S"],
            short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            wide: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
          defaultWidth: "wide",
        }),
        dayPeriod: Qo({
          values: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "morning",
              afternoon: "afternoon",
              evening: "evening",
              night: "night",
            },
          },
          defaultWidth: "wide",
          formattingValues: {
            narrow: {
              am: "a",
              pm: "p",
              midnight: "mi",
              noon: "n",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            abbreviated: {
              am: "AM",
              pm: "PM",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
            wide: {
              am: "a.m.",
              pm: "p.m.",
              midnight: "midnight",
              noon: "noon",
              morning: "in the morning",
              afternoon: "in the afternoon",
              evening: "in the evening",
              night: "at night",
            },
          },
          defaultFormattingWidth: "wide",
        }),
      };
      function qo(e) {
        return (t, n = {}) => {
          const r = n.width,
            o =
              (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            a = t.match(o);
          if (!a) return null;
          const i = a[0],
            l =
              (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            u = Array.isArray(l)
              ? (function (e, t) {
                  for (let t = 0; t < e.length; t++) if (e[t].test(i)) return t;
                })(l)
              : (function (e, t) {
                  for (const t in e)
                    if (
                      Object.prototype.hasOwnProperty.call(e, t) &&
                      e[t].test(i)
                    )
                      return t;
                })(l);
          let c;
          return (
            (c = e.valueCallback ? e.valueCallback(u) : u),
            (c = n.valueCallback ? n.valueCallback(c) : c),
            { value: c, rest: t.slice(i.length) }
          );
        };
      }
      const Yo = {
        ordinalNumber:
          ((Ko = {
            matchPattern: /^(\d+)(th|st|nd|rd)?/i,
            parsePattern: /\d+/i,
            valueCallback: (e) => parseInt(e, 10),
          }),
          (e, t = {}) => {
            const n = e.match(Ko.matchPattern);
            if (!n) return null;
            const r = n[0],
              o = e.match(Ko.parsePattern);
            if (!o) return null;
            let a = Ko.valueCallback ? Ko.valueCallback(o[0]) : o[0];
            return (
              (a = t.valueCallback ? t.valueCallback(a) : a),
              { value: a, rest: e.slice(r.length) }
            );
          }),
        era: qo({
          matchPatterns: {
            narrow: /^(b|a)/i,
            abbreviated:
              /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
            wide: /^(before christ|before common era|anno domini|common era)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/^b/i, /^(a|c)/i] },
          defaultParseWidth: "any",
        }),
        quarter: qo({
          matchPatterns: {
            narrow: /^[1234]/i,
            abbreviated: /^q[1234]/i,
            wide: /^[1234](th|st|nd|rd)? quarter/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
          defaultParseWidth: "any",
          valueCallback: (e) => e + 1,
        }),
        month: qo({
          matchPatterns: {
            narrow: /^[jfmasond]/i,
            abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [
              /^j/i,
              /^f/i,
              /^m/i,
              /^a/i,
              /^m/i,
              /^j/i,
              /^j/i,
              /^a/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
            any: [
              /^ja/i,
              /^f/i,
              /^mar/i,
              /^ap/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^au/i,
              /^s/i,
              /^o/i,
              /^n/i,
              /^d/i,
            ],
          },
          defaultParseWidth: "any",
        }),
        day: qo({
          matchPatterns: {
            narrow: /^[smtwf]/i,
            short: /^(su|mo|tu|we|th|fr|sa)/i,
            abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
            wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
          },
          defaultMatchWidth: "wide",
          parsePatterns: {
            narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
            any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
          },
          defaultParseWidth: "any",
        }),
        dayPeriod: qo({
          matchPatterns: {
            narrow:
              /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
            any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
          },
          defaultMatchWidth: "any",
          parsePatterns: {
            any: {
              am: /^a/i,
              pm: /^p/i,
              midnight: /^mi/i,
              noon: /^no/i,
              morning: /morning/i,
              afternoon: /afternoon/i,
              evening: /evening/i,
              night: /night/i,
            },
          },
          defaultParseWidth: "any",
        }),
      };
      var Ko;
      const Zo = {
        code: "en-US",
        formatDistance: (e, t, n) => {
          let r;
          const o = Uo[e];
          return (
            (r =
              "string" == typeof o
                ? o
                : 1 === t
                ? o.one
                : o.other.replace("{{count}}", t.toString())),
            n?.addSuffix
              ? n.comparison && n.comparison > 0
                ? "in " + r
                : r + " ago"
              : r
          );
        },
        formatLong: Vo,
        formatRelative: (e, t, n, r) => Go[e],
        localize: Xo,
        match: Yo,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      };
      let Jo = {};
      function ea() {
        return Jo;
      }
      function ta(e) {
        const t = jo(e),
          n = new Date(
            Date.UTC(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              t.getHours(),
              t.getMinutes(),
              t.getSeconds(),
              t.getMilliseconds()
            )
          );
        return n.setUTCFullYear(t.getFullYear()), +e - +n;
      }
      function na(e, ...t) {
        const n = Lo.bind(null, e || t.find((e) => "object" == typeof e));
        return t.map(n);
      }
      function ra(e, t) {
        const n = jo(e, t?.in);
        return n.setHours(0, 0, 0, 0), n;
      }
      function oa(e, t) {
        const n = jo(e, t?.in);
        return (
          (function (e, t, n) {
            const [r, o] = na(n?.in, e, t),
              a = ra(r),
              i = ra(o),
              l = +a - ta(a),
              u = +i - ta(i);
            return Math.round((l - u) / To);
          })(
            n,
            (function (e, t) {
              const n = jo(e, t?.in);
              return (
                n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
              );
            })(n)
          ) + 1
        );
      }
      function aa(e, t) {
        const n = ea(),
          r =
            t?.weekStartsOn ??
            t?.locale?.options?.weekStartsOn ??
            n.weekStartsOn ??
            n.locale?.options?.weekStartsOn ??
            0,
          o = jo(e, t?.in),
          a = o.getDay(),
          i = (a < r ? 7 : 0) + a - r;
        return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
      }
      function ia(e, t) {
        return aa(e, { ...t, weekStartsOn: 1 });
      }
      function la(e, t) {
        const n = jo(e, t?.in),
          r = n.getFullYear(),
          o = Lo(n, 0);
        o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
        const a = ia(o),
          i = Lo(n, 0);
        i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
        const l = ia(i);
        return n.getTime() >= a.getTime()
          ? r + 1
          : n.getTime() >= l.getTime()
          ? r
          : r - 1;
      }
      function ua(e, t) {
        const n = jo(e, t?.in),
          r =
            +ia(n) -
            +(function (e, t) {
              const n = la(e, t),
                r = Lo(t?.in || e, 0);
              return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), ia(r);
            })(n);
        return Math.round(r / Mo) + 1;
      }
      function ca(e, t) {
        const n = jo(e, t?.in),
          r = n.getFullYear(),
          o = ea(),
          a =
            t?.firstWeekContainsDate ??
            t?.locale?.options?.firstWeekContainsDate ??
            o.firstWeekContainsDate ??
            o.locale?.options?.firstWeekContainsDate ??
            1,
          i = Lo(t?.in || e, 0);
        i.setFullYear(r + 1, 0, a), i.setHours(0, 0, 0, 0);
        const l = aa(i, t),
          u = Lo(t?.in || e, 0);
        u.setFullYear(r, 0, a), u.setHours(0, 0, 0, 0);
        const c = aa(u, t);
        return +n >= +l ? r + 1 : +n >= +c ? r : r - 1;
      }
      function sa(e, t) {
        const n = jo(e, t?.in),
          r =
            +aa(n, t) -
            +(function (e, t) {
              const n = ea(),
                r =
                  t?.firstWeekContainsDate ??
                  t?.locale?.options?.firstWeekContainsDate ??
                  n.firstWeekContainsDate ??
                  n.locale?.options?.firstWeekContainsDate ??
                  1,
                o = ca(e, t),
                a = Lo(t?.in || e, 0);
              return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), aa(a, t);
            })(n, t);
        return Math.round(r / Mo) + 1;
      }
      function fa(e, t) {
        return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
      }
      const da = {
          y(e, t) {
            const n = e.getFullYear(),
              r = n > 0 ? n : 1 - n;
            return fa("yy" === t ? r % 100 : r, t.length);
          },
          M(e, t) {
            const n = e.getMonth();
            return "M" === t ? String(n + 1) : fa(n + 1, 2);
          },
          d: (e, t) => fa(e.getDate(), t.length),
          a(e, t) {
            const n = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return n.toUpperCase();
              case "aaa":
                return n;
              case "aaaaa":
                return n[0];
              default:
                return "am" === n ? "a.m." : "p.m.";
            }
          },
          h: (e, t) => fa(e.getHours() % 12 || 12, t.length),
          H: (e, t) => fa(e.getHours(), t.length),
          m: (e, t) => fa(e.getMinutes(), t.length),
          s: (e, t) => fa(e.getSeconds(), t.length),
          S(e, t) {
            const n = t.length,
              r = e.getMilliseconds();
            return fa(Math.trunc(r * Math.pow(10, n - 3)), t.length);
          },
        },
        pa = {
          G: function (e, t, n) {
            const r = e.getFullYear() > 0 ? 1 : 0;
            switch (t) {
              case "G":
              case "GG":
              case "GGG":
                return n.era(r, { width: "abbreviated" });
              case "GGGGG":
                return n.era(r, { width: "narrow" });
              default:
                return n.era(r, { width: "wide" });
            }
          },
          y: function (e, t, n) {
            if ("yo" === t) {
              const t = e.getFullYear(),
                r = t > 0 ? t : 1 - t;
              return n.ordinalNumber(r, { unit: "year" });
            }
            return da.y(e, t);
          },
          Y: function (e, t, n, r) {
            const o = ca(e, r),
              a = o > 0 ? o : 1 - o;
            return "YY" === t
              ? fa(a % 100, 2)
              : "Yo" === t
              ? n.ordinalNumber(a, { unit: "year" })
              : fa(a, t.length);
          },
          R: function (e, t) {
            return fa(la(e), t.length);
          },
          u: function (e, t) {
            return fa(e.getFullYear(), t.length);
          },
          Q: function (e, t, n) {
            const r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "Q":
                return String(r);
              case "QQ":
                return fa(r, 2);
              case "Qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "QQQ":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return n.quarter(r, { width: "narrow", context: "formatting" });
              default:
                return n.quarter(r, { width: "wide", context: "formatting" });
            }
          },
          q: function (e, t, n) {
            const r = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "q":
                return String(r);
              case "qq":
                return fa(r, 2);
              case "qo":
                return n.ordinalNumber(r, { unit: "quarter" });
              case "qqq":
                return n.quarter(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return n.quarter(r, { width: "narrow", context: "standalone" });
              default:
                return n.quarter(r, { width: "wide", context: "standalone" });
            }
          },
          M: function (e, t, n) {
            const r = e.getMonth();
            switch (t) {
              case "M":
              case "MM":
                return da.M(e, t);
              case "Mo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "MMM":
                return n.month(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return n.month(r, { width: "narrow", context: "formatting" });
              default:
                return n.month(r, { width: "wide", context: "formatting" });
            }
          },
          L: function (e, t, n) {
            const r = e.getMonth();
            switch (t) {
              case "L":
                return String(r + 1);
              case "LL":
                return fa(r + 1, 2);
              case "Lo":
                return n.ordinalNumber(r + 1, { unit: "month" });
              case "LLL":
                return n.month(r, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return n.month(r, { width: "narrow", context: "standalone" });
              default:
                return n.month(r, { width: "wide", context: "standalone" });
            }
          },
          w: function (e, t, n, r) {
            const o = sa(e, r);
            return "wo" === t
              ? n.ordinalNumber(o, { unit: "week" })
              : fa(o, t.length);
          },
          I: function (e, t, n) {
            const r = ua(e);
            return "Io" === t
              ? n.ordinalNumber(r, { unit: "week" })
              : fa(r, t.length);
          },
          d: function (e, t, n) {
            return "do" === t
              ? n.ordinalNumber(e.getDate(), { unit: "date" })
              : da.d(e, t);
          },
          D: function (e, t, n) {
            const r = oa(e);
            return "Do" === t
              ? n.ordinalNumber(r, { unit: "dayOfYear" })
              : fa(r, t.length);
          },
          E: function (e, t, n) {
            const r = e.getDay();
            switch (t) {
              case "E":
              case "EE":
              case "EEE":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          e: function (e, t, n, r) {
            const o = e.getDay(),
              a = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "e":
                return String(a);
              case "ee":
                return fa(a, 2);
              case "eo":
                return n.ordinalNumber(a, { unit: "day" });
              case "eee":
                return n.day(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return n.day(o, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return n.day(o, { width: "short", context: "formatting" });
              default:
                return n.day(o, { width: "wide", context: "formatting" });
            }
          },
          c: function (e, t, n, r) {
            const o = e.getDay(),
              a = (o - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "c":
                return String(a);
              case "cc":
                return fa(a, t.length);
              case "co":
                return n.ordinalNumber(a, { unit: "day" });
              case "ccc":
                return n.day(o, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return n.day(o, { width: "narrow", context: "standalone" });
              case "cccccc":
                return n.day(o, { width: "short", context: "standalone" });
              default:
                return n.day(o, { width: "wide", context: "standalone" });
            }
          },
          i: function (e, t, n) {
            const r = e.getDay(),
              o = 0 === r ? 7 : r;
            switch (t) {
              case "i":
                return String(o);
              case "ii":
                return fa(o, t.length);
              case "io":
                return n.ordinalNumber(o, { unit: "day" });
              case "iii":
                return n.day(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return n.day(r, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return n.day(r, { width: "short", context: "formatting" });
              default:
                return n.day(r, { width: "wide", context: "formatting" });
            }
          },
          a: function (e, t, n) {
            const r = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return n.dayPeriod(r, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return n
                  .dayPeriod(r, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return n.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(r, { width: "wide", context: "formatting" });
            }
          },
          b: function (e, t, n) {
            const r = e.getHours();
            let o;
            switch (
              ((o =
                12 === r
                  ? "noon"
                  : 0 === r
                  ? "midnight"
                  : r / 12 >= 1
                  ? "pm"
                  : "am"),
              t)
            ) {
              case "b":
              case "bb":
                return n.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return n
                  .dayPeriod(o, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return n.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(o, { width: "wide", context: "formatting" });
            }
          },
          B: function (e, t, n) {
            const r = e.getHours();
            let o;
            switch (
              ((o =
                r >= 17
                  ? "evening"
                  : r >= 12
                  ? "afternoon"
                  : r >= 4
                  ? "morning"
                  : "night"),
              t)
            ) {
              case "B":
              case "BB":
              case "BBB":
                return n.dayPeriod(o, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return n.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return n.dayPeriod(o, { width: "wide", context: "formatting" });
            }
          },
          h: function (e, t, n) {
            if ("ho" === t) {
              let t = e.getHours() % 12;
              return 0 === t && (t = 12), n.ordinalNumber(t, { unit: "hour" });
            }
            return da.h(e, t);
          },
          H: function (e, t, n) {
            return "Ho" === t
              ? n.ordinalNumber(e.getHours(), { unit: "hour" })
              : da.H(e, t);
          },
          K: function (e, t, n) {
            const r = e.getHours() % 12;
            return "Ko" === t
              ? n.ordinalNumber(r, { unit: "hour" })
              : fa(r, t.length);
          },
          k: function (e, t, n) {
            let r = e.getHours();
            return (
              0 === r && (r = 24),
              "ko" === t
                ? n.ordinalNumber(r, { unit: "hour" })
                : fa(r, t.length)
            );
          },
          m: function (e, t, n) {
            return "mo" === t
              ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
              : da.m(e, t);
          },
          s: function (e, t, n) {
            return "so" === t
              ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
              : da.s(e, t);
          },
          S: function (e, t) {
            return da.S(e, t);
          },
          X: function (e, t, n) {
            const r = e.getTimezoneOffset();
            if (0 === r) return "Z";
            switch (t) {
              case "X":
                return ma(r);
              case "XXXX":
              case "XX":
                return ga(r);
              default:
                return ga(r, ":");
            }
          },
          x: function (e, t, n) {
            const r = e.getTimezoneOffset();
            switch (t) {
              case "x":
                return ma(r);
              case "xxxx":
              case "xx":
                return ga(r);
              default:
                return ga(r, ":");
            }
          },
          O: function (e, t, n) {
            const r = e.getTimezoneOffset();
            switch (t) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + ha(r, ":");
              default:
                return "GMT" + ga(r, ":");
            }
          },
          z: function (e, t, n) {
            const r = e.getTimezoneOffset();
            switch (t) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + ha(r, ":");
              default:
                return "GMT" + ga(r, ":");
            }
          },
          t: function (e, t, n) {
            return fa(Math.trunc(+e / 1e3), t.length);
          },
          T: function (e, t, n) {
            return fa(+e, t.length);
          },
        };
      function ha(e, t = "") {
        const n = e > 0 ? "-" : "+",
          r = Math.abs(e),
          o = Math.trunc(r / 60),
          a = r % 60;
        return 0 === a ? n + String(o) : n + String(o) + t + fa(a, 2);
      }
      function ma(e, t) {
        return e % 60 == 0
          ? (e > 0 ? "-" : "+") + fa(Math.abs(e) / 60, 2)
          : ga(e, t);
      }
      function ga(e, t = "") {
        const n = e > 0 ? "-" : "+",
          r = Math.abs(e);
        return n + fa(Math.trunc(r / 60), 2) + t + fa(r % 60, 2);
      }
      const va = (e, t) => {
          switch (e) {
            case "P":
              return t.date({ width: "short" });
            case "PP":
              return t.date({ width: "medium" });
            case "PPP":
              return t.date({ width: "long" });
            default:
              return t.date({ width: "full" });
          }
        },
        ya = (e, t) => {
          switch (e) {
            case "p":
              return t.time({ width: "short" });
            case "pp":
              return t.time({ width: "medium" });
            case "ppp":
              return t.time({ width: "long" });
            default:
              return t.time({ width: "full" });
          }
        },
        ba = {
          p: ya,
          P: (e, t) => {
            const n = e.match(/(P+)(p+)?/) || [],
              r = n[1],
              o = n[2];
            if (!o) return va(e, t);
            let a;
            switch (r) {
              case "P":
                a = t.dateTime({ width: "short" });
                break;
              case "PP":
                a = t.dateTime({ width: "medium" });
                break;
              case "PPP":
                a = t.dateTime({ width: "long" });
                break;
              default:
                a = t.dateTime({ width: "full" });
            }
            return a
              .replace("{{date}}", va(r, t))
              .replace("{{time}}", ya(o, t));
          },
        },
        wa = /^D+$/,
        xa = /^Y+$/,
        ka = ["D", "DD", "YY", "YYYY"];
      function Sa(e) {
        return !(
          (!(
            (t = e) instanceof Date ||
            ("object" == typeof t &&
              "[object Date]" === Object.prototype.toString.call(t))
          ) &&
            "number" != typeof e) ||
          isNaN(+jo(e))
        );
        var t;
      }
      const Ea = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Ca = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        Oa = /^'([^]*?)'?$/,
        Pa = /''/g,
        Ma = /[a-zA-Z]/;
      function Ta(e) {
        const t = e.match(Oa);
        return t ? t[1].replace(Pa, "'") : e;
      }
      function _a(e, t, n) {
        return (function (e, t, n) {
          const r = jo(e, n?.in);
          return isNaN(t)
            ? Lo(n?.in || e, NaN)
            : t
            ? (r.setDate(r.getDate() + t), r)
            : r;
        })(e, -t, n);
      }
      function Na(e, t, n) {
        const [r, o] = na(n?.in, e, t);
        return +ra(r) == +ra(o);
      }
      function La(e) {
        return (
          (La =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          La(e)
        );
      }
      function ja(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return za(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return za(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? za(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function za(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Aa(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Da(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Aa(Object(n), !0).forEach(function (t) {
                var r, o, a, i;
                (r = e),
                  (o = t),
                  (a = n[t]),
                  (i = (function (e, t) {
                    if ("object" != La(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, "string");
                      if ("object" != La(r)) return r;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return String(e);
                  })(o)),
                  (o = "symbol" == La(i) ? i : String(i)) in r
                    ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Aa(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      const Ia = function (t) {
        var n = t.setActiveChat,
          r = t.setSelectedOption,
          o = t.chats.map(function (e) {
            var t = (function (e, t, n) {
              const r = ea(),
                o = n?.locale ?? r.locale ?? Zo,
                a =
                  n?.firstWeekContainsDate ??
                  n?.locale?.options?.firstWeekContainsDate ??
                  r.firstWeekContainsDate ??
                  r.locale?.options?.firstWeekContainsDate ??
                  1,
                i =
                  n?.weekStartsOn ??
                  n?.locale?.options?.weekStartsOn ??
                  r.weekStartsOn ??
                  r.locale?.options?.weekStartsOn ??
                  0,
                l = jo(e, n?.in);
              if (!Sa(l)) throw new RangeError("Invalid time value");
              let u = t
                .match(Ca)
                .map((e) => {
                  const t = e[0];
                  return "p" === t || "P" === t
                    ? (0, ba[t])(e, o.formatLong)
                    : e;
                })
                .join("")
                .match(Ea)
                .map((e) => {
                  if ("''" === e) return { isToken: !1, value: "'" };
                  const t = e[0];
                  if ("'" === t) return { isToken: !1, value: Ta(e) };
                  if (pa[t]) return { isToken: !0, value: e };
                  if (t.match(Ma))
                    throw new RangeError(
                      "Format string contains an unescaped latin alphabet character `" +
                        t +
                        "`"
                    );
                  return { isToken: !1, value: e };
                });
              o.localize.preprocessor && (u = o.localize.preprocessor(l, u));
              const c = {
                firstWeekContainsDate: a,
                weekStartsOn: i,
                locale: o,
              };
              return u
                .map((r) => {
                  if (!r.isToken) return r.value;
                  const a = r.value;
                  return (
                    ((!n?.useAdditionalWeekYearTokens &&
                      (function (e) {
                        return xa.test(e);
                      })(a)) ||
                      (!n?.useAdditionalDayOfYearTokens &&
                        (function (e) {
                          return wa.test(e);
                        })(a))) &&
                      (function (e, t, n) {
                        const r = (function (e, t, n) {
                          const r =
                            "Y" === e[0] ? "years" : "days of the month";
                          return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
                        })(e, t, n);
                        if ((console.warn(r), ka.includes(e)))
                          throw new RangeError(r);
                      })(a, t, String(e)),
                    (0, pa[a[0]])(l, a, o.localize, c)
                  );
                })
                .join("");
            })(zo(e.startDate), "yyyy-MM-dd");
            return Da(Da({}, e), {}, { startDate: t });
          }),
          a = new Date(),
          i = _a(a, 7),
          l = _a(a, 1),
          u = o.filter(function (e) {
            return Na(zo(e.startDate), a);
          }),
          c = o.filter(function (e) {
            return Na(zo(e.startDate), l);
          }),
          s = o.filter(function (e) {
            return (function (e, t, n) {
              const r = +jo(e, n?.in),
                [o, a] = [+jo(t.start, n?.in), +jo(t.end, n?.in)].sort(
                  (e, t) => e - t
                );
              return r >= o && r <= a;
            })(zo(e.startDate), { start: i, end: a });
          }),
          f = [].concat(ja(u), ja(c)),
          d = new Set(
            f.map(function (e) {
              return e._id;
            })
          ),
          p = [
            { title: "Today", data: u },
            { title: "Yesterday", data: c },
            {
              title: "Previous 7 days",
              data: s.filter(function (e) {
                return !d.has(e._id);
              }),
            },
            {
              title: "Previous 30 days",
              data: o.filter(function (e) {
                return (t = zo(e.startDate)), (n = i), +jo(t) < +jo(n);
                var t, n;
              }),
            },
          ];
        return e.createElement(
          yo,
          { vertical: !0, className: "main-chat-container" },
          e.createElement(
            yo,
            { className: "w-100" },
            e.createElement("h2", { className: "color-gray" }, "History")
          ),
          e.createElement(
            yo,
            { vertical: !0, gap: 25, className: "chat-container-wrapper" },
            p.length > 0
              ? p.map(function (t) {
                  return e.createElement(
                    yo,
                    { vertical: !0, gap: 5, key: t.title },
                    e.createElement("span", null, t.title),
                    t.data.map(function (t) {
                      return e.createElement(
                        yo,
                        {
                          onClick: function () {
                            return (function (e) {
                              n(e), r(1);
                            })(t);
                          },
                          className: "chat",
                          key: t._id,
                          vertical: !0,
                          gap: 5,
                        },
                        e.createElement("span", null, t.title)
                      );
                    })
                  );
                })
              : null
          )
        );
      };
      function Fa(e) {
        return (
          (Fa =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Fa(e)
        );
      }
      function Ra() {
        Ra = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          l = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, r) {
          var a = t && t.prototype instanceof v ? t : v,
            i = Object.create(a.prototype),
            l = new _(r || []);
          return o(i, "_invoke", { value: O(e, n, l) }), i;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = s;
        var d = "suspendedStart",
          p = "suspendedYield",
          h = "executing",
          m = "completed",
          g = {};
        function v() {}
        function y() {}
        function b() {}
        var w = {};
        c(w, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          k = x && x(x(N([])));
        k && k !== n && r.call(k, i) && (w = k);
        var S = (b.prototype = v.prototype = Object.create(w));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function C(e, t) {
          function n(o, a, i, l) {
            var u = f(e[o], e, a);
            if ("throw" !== u.type) {
              var c = u.arg,
                s = c.value;
              return s && "object" == Fa(s) && r.call(s, "__await")
                ? t.resolve(s.__await).then(
                    function (e) {
                      n("next", e, i, l);
                    },
                    function (e) {
                      n("throw", e, i, l);
                    }
                  )
                : t.resolve(s).then(
                    function (e) {
                      (c.value = e), i(c);
                    },
                    function (e) {
                      return n("throw", e, i, l);
                    }
                  );
            }
            l(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(t, n, r) {
          var o = d;
          return function (a, i) {
            if (o === h) throw new Error("Generator is already running");
            if (o === m) {
              if ("throw" === a) throw i;
              return { value: e, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var l = r.delegate;
              if (l) {
                var u = P(l, r);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === d) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = h;
              var c = f(t, n, r);
              if ("normal" === c.type) {
                if (((o = r.done ? m : p), c.arg === g)) continue;
                return { value: c.arg, done: r.done };
              }
              "throw" === c.type &&
                ((o = m), (r.method = "throw"), (r.arg = c.arg));
            }
          };
        }
        function P(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                P(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var a = f(o, t.iterator, n.arg);
          if ("throw" === a.type)
            return (
              (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), g
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function M(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function T(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(M, this),
            this.reset(!0);
        }
        function N(t) {
          if (t || "" === t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(Fa(t) + " is not iterable");
        }
        return (
          (y.prototype = b),
          o(S, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = c(b, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), c(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(S)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          E(C.prototype),
          c(C.prototype, l, function () {
            return this;
          }),
          (t.AsyncIterator = C),
          (t.async = function (e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new C(s(e, n, r, o), a);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(S),
          c(S, u, "Generator"),
          c(S, i, function () {
            return this;
          }),
          c(S, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = N),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(T),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (l.type = "throw"),
                  (l.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  l = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = r.call(i, "catchLoc"),
                    c = r.call(i, "finallyLoc");
                  if (u && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), g)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), T(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    T(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function Ha(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Qa(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          Ga(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ba(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Wa(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ba(Object(n), !0).forEach(function (t) {
                var r, o, a, i;
                (r = e),
                  (o = t),
                  (a = n[t]),
                  (i = (function (e, t) {
                    if ("object" != Fa(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, "string");
                      if ("object" != Fa(r)) return r;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return String(e);
                  })(o)),
                  (o = "symbol" == Fa(i) ? i : String(i)) in r
                    ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ba(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ua(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function $a(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var a = e.apply(t, n);
            function i(e) {
              Ua(a, r, o, i, l, "next", e);
            }
            function l(e) {
              Ua(a, r, o, i, l, "throw", e);
            }
            i(void 0);
          });
        };
      }
      function Va(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = a.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          Ga(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ga(e, t) {
        if (e) {
          if ("string" == typeof e) return Qa(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Qa(e, t)
              : void 0
          );
        }
      }
      function Qa(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const Xa = function (t) {
        var n = t.activeChat,
          r = t.followUp,
          o = Va((0, e.useState)([]), 2),
          a = o[0],
          i = o[1],
          l = Va((0, e.useState)(!1), 2),
          u = l[0],
          c = l[1],
          s = (function () {
            var e = $a(
              Ra().mark(function e(t) {
                var r, o, a, l, u, s;
                return Ra().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            localStorage.getItem("contextId"),
                            (r = {
                              date: "2024-10-07T12:35:18.133Z",
                              chatId: n._id,
                              message: t,
                              sender: "user",
                            }),
                            console.log("obj", r),
                            (e.next = 6),
                            fetch(
                              "https://fbd2-2a02-2f08-4e09-9600-617e-cbd0-8491-c5fd.ngrok-free.app/message",
                              {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(Wa({}, r)),
                              }
                            )
                          );
                        case 6:
                          return (o = e.sent), (e.next = 9), o.json();
                        case 9:
                          if (
                            ((a = e.sent),
                            i(function (e) {
                              return [].concat(Ha(e), [a.data]);
                            }),
                            c(!0),
                            a.data)
                          ) {
                            e.next = 14;
                            break;
                          }
                          return e.abrupt("return");
                        case 14:
                          return (
                            (l = a.data),
                            (e.prev = 15),
                            (e.next = 18),
                            fetch(
                              "https://fbd2-2a02-2f08-4e09-9600-617e-cbd0-8491-c5fd.ngrok-free.app/response",
                              {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                  chatId: l.chatId,
                                  message: l.message,
                                }),
                              }
                            )
                          );
                        case 18:
                          return (u = e.sent), (e.next = 21), u.json();
                        case 21:
                          if ((s = e.sent).data) {
                            e.next = 24;
                            break;
                          }
                          return e.abrupt("return");
                        case 24:
                          c(!1),
                            i(function (e) {
                              return [].concat(Ha(e), [s.data]);
                            }),
                            (e.next = 31);
                          break;
                        case 28:
                          (e.prev = 28),
                            (e.t0 = e.catch(15)),
                            console.error(
                              "Error during message sending or stream processing:",
                              e.t0
                            );
                        case 31:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[15, 28]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
        return (
          (0, e.useEffect)(
            function () {
              var e = (function () {
                var e = $a(
                  Ra().mark(function e() {
                    var t, r;
                    return Ra().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                "https://fbd2-2a02-2f08-4e09-9600-617e-cbd0-8491-c5fd.ngrok-free.app/chatid",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({ chatId: n._id }),
                                }
                              )
                            );
                          case 2:
                            return (t = e.sent), (e.next = 5), t.json();
                          case 5:
                            (r = e.sent), i(r.data);
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              n && e();
            },
            [n]
          ),
          e.createElement(
            yo,
            { vertical: !0, className: "chat-container" },
            e.createElement(bo, { messages: a, activeChat: n, botIsTyping: u }),
            e.createElement(Co, { followUp: r, onSendMessage: s }),
            e.createElement(Eo, { onSendMessage: s })
          )
        );
      };
      function qa(e) {
        return (
          (qa =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          qa(e)
        );
      }
      function Ya() {
        Ya = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          l = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, r) {
          var a = t && t.prototype instanceof v ? t : v,
            i = Object.create(a.prototype),
            l = new _(r || []);
          return o(i, "_invoke", { value: O(e, n, l) }), i;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = s;
        var d = "suspendedStart",
          p = "suspendedYield",
          h = "executing",
          m = "completed",
          g = {};
        function v() {}
        function y() {}
        function b() {}
        var w = {};
        c(w, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          k = x && x(x(N([])));
        k && k !== n && r.call(k, i) && (w = k);
        var S = (b.prototype = v.prototype = Object.create(w));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function C(e, t) {
          function n(o, a, i, l) {
            var u = f(e[o], e, a);
            if ("throw" !== u.type) {
              var c = u.arg,
                s = c.value;
              return s && "object" == qa(s) && r.call(s, "__await")
                ? t.resolve(s.__await).then(
                    function (e) {
                      n("next", e, i, l);
                    },
                    function (e) {
                      n("throw", e, i, l);
                    }
                  )
                : t.resolve(s).then(
                    function (e) {
                      (c.value = e), i(c);
                    },
                    function (e) {
                      return n("throw", e, i, l);
                    }
                  );
            }
            l(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(t, n, r) {
          var o = d;
          return function (a, i) {
            if (o === h) throw new Error("Generator is already running");
            if (o === m) {
              if ("throw" === a) throw i;
              return { value: e, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var l = r.delegate;
              if (l) {
                var u = P(l, r);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === d) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = h;
              var c = f(t, n, r);
              if ("normal" === c.type) {
                if (((o = r.done ? m : p), c.arg === g)) continue;
                return { value: c.arg, done: r.done };
              }
              "throw" === c.type &&
                ((o = m), (r.method = "throw"), (r.arg = c.arg));
            }
          };
        }
        function P(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                P(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var a = f(o, t.iterator, n.arg);
          if ("throw" === a.type)
            return (
              (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), g
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function M(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function T(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(M, this),
            this.reset(!0);
        }
        function N(t) {
          if (t || "" === t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(qa(t) + " is not iterable");
        }
        return (
          (y.prototype = b),
          o(S, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = c(b, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), c(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(S)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          E(C.prototype),
          c(C.prototype, l, function () {
            return this;
          }),
          (t.AsyncIterator = C),
          (t.async = function (e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new C(s(e, n, r, o), a);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(S),
          c(S, u, "Generator"),
          c(S, i, function () {
            return this;
          }),
          c(S, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = N),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(T),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (l.type = "throw"),
                  (l.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  l = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = r.call(i, "catchLoc"),
                    c = r.call(i, "finallyLoc");
                  if (u && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), g)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), T(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    T(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function Ka(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Za(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ka(Object(n), !0).forEach(function (t) {
                var r, o, a, i;
                (r = e),
                  (o = t),
                  (a = n[t]),
                  (i = (function (e, t) {
                    if ("object" != qa(e) || !e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var r = n.call(e, "string");
                      if ("object" != qa(r)) return r;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return String(e);
                  })(o)),
                  (o = "symbol" == qa(i) ? i : String(i)) in r
                    ? Object.defineProperty(r, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (r[o] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ka(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ja(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function ei(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = a.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          ti(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ti(e, t) {
        if (e) {
          if ("string" == typeof e) return ni(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? ni(e, t)
              : void 0
          );
        }
      }
      function ni(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const ri = function (t) {
          t.apiUrl;
          var n = t.selectedOption,
            r = t.setSelectedOption,
            o = t.chats,
            a = ei((0, e.useState)([]), 2),
            i = a[0],
            l = (a[1], ei((0, e.useState)(null), 2)),
            u = l[0],
            c = l[1],
            s = (function () {
              var e,
                t =
                  ((e = Ya().mark(function e(t) {
                    return Ya().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            localStorage.getItem("contextId");
                            try {
                              c(function (e) {
                                return Za(
                                  Za({}, e),
                                  {},
                                  {
                                    conversation: [].concat(
                                      ((n = e.conversation),
                                      (function (e) {
                                        if (Array.isArray(e)) return ni(e);
                                      })(n) ||
                                        (function (e) {
                                          if (
                                            ("undefined" != typeof Symbol &&
                                              null != e[Symbol.iterator]) ||
                                            null != e["@@iterator"]
                                          )
                                            return Array.from(e);
                                        })(n) ||
                                        ti(n) ||
                                        (function () {
                                          throw new TypeError(
                                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                          );
                                        })()),
                                      [
                                        {
                                          question: t,
                                          response:
                                            "waiting for a response ...",
                                        },
                                      ]
                                    ),
                                  }
                                );
                                var n;
                              });
                            } catch (e) {
                              console.error(
                                "Error during message sending or stream processing:",
                                e
                              );
                            }
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, o) {
                      var a = e.apply(t, n);
                      function i(e) {
                        Ja(a, r, o, i, l, "next", e);
                      }
                      function l(e) {
                        Ja(a, r, o, i, l, "throw", e);
                      }
                      i(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return e.createElement(
            "div",
            { className: "chat-container" },
            (function () {
              switch (n) {
                case 1:
                  return e.createElement(Xa, {
                    activeChat: u,
                    followUp: i,
                    handleSendMessage: s,
                  });
                case 2:
                  return e.createElement("h2", null, "My products");
                case 3:
                  return e.createElement(Ia, {
                    chats: o,
                    setActiveChat: c,
                    setSelectedOption: r,
                  });
                case 4:
                  return e.createElement("h2", null, "Settings");
                default:
                  return e.createElement("h2", null, "Page Not Found");
              }
            })()
          );
        },
        oi = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",
                },
              },
            ],
          },
          name: "user",
          theme: "outlined",
        };
      var ai = function (t, n) {
        return e.createElement(nt, r({}, t, { ref: n, icon: oi }));
      };
      const ii = e.forwardRef(ai),
        li = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z",
                },
              },
            ],
          },
          name: "shopping-cart",
          theme: "outlined",
        };
      var ui = function (t, n) {
        return e.createElement(nt, r({}, t, { ref: n, icon: li }));
      };
      const ci = e.forwardRef(ui),
        si = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z",
                },
              },
            ],
          },
          name: "history",
          theme: "outlined",
        };
      var fi = function (t, n) {
        return e.createElement(nt, r({}, t, { ref: n, icon: si }));
      };
      const di = e.forwardRef(fi),
        pi = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z",
                },
              },
            ],
          },
          name: "setting",
          theme: "outlined",
        };
      var hi = function (t, n) {
        return e.createElement(nt, r({}, t, { ref: n, icon: pi }));
      };
      const mi = e.forwardRef(hi);
      function gi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      const vi = function (t) {
        var n,
          r,
          o = t.configs,
          a = t.chats,
          i =
            ((n = (0, e.useState)(1)),
            (r = 2),
            (function (e) {
              if (Array.isArray(e)) return e;
            })(n) ||
              (function (e, t) {
                var n =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    a,
                    i,
                    l = [],
                    u = !0,
                    c = !1;
                  try {
                    if (((a = (n = n.call(e)).next), 0 === t)) {
                      if (Object(n) !== n) return;
                      u = !1;
                    } else
                      for (
                        ;
                        !(u = (r = a.call(n)).done) &&
                        (l.push(r.value), l.length !== t);
                        u = !0
                      );
                  } catch (e) {
                    (c = !0), (o = e);
                  } finally {
                    try {
                      if (
                        !u &&
                        null != n.return &&
                        ((i = n.return()), Object(i) !== i)
                      )
                        return;
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return l;
                }
              })(n, r) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return gi(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(e)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? gi(e, t)
                      : void 0
                  );
                }
              })(n, r) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          l = i[0],
          u = i[1],
          c = function (e) {
            u(e);
          };
        return e.createElement(
          yo,
          { className: "chat-app-container" },
          e.createElement(
            yo,
            { className: "navbar-wrapper" },
            e.createElement(
              yo,
              { vertical: !0 },
              e.createElement(
                "div",
                {
                  onClick: function () {
                    return c(1);
                  },
                  className: "navbar-icons-wrapper",
                  style:
                    1 == l
                      ? { backgroundColor: "#713189", color: "white" }
                      : {},
                },
                e.createElement(ii, { className: "navbar-icons" })
              ),
              e.createElement(
                "div",
                {
                  onClick: function () {
                    return c(2);
                  },
                  className: "navbar-icons-wrapper",
                  style:
                    2 == l
                      ? { backgroundColor: "#713189", color: "white" }
                      : {},
                },
                e.createElement(ci, { className: "navbar-icons" })
              ),
              e.createElement(
                "div",
                {
                  onClick: function () {
                    return c(3);
                  },
                  className: "navbar-icons-wrapper",
                  style:
                    3 == l
                      ? { backgroundColor: "#713189", color: "white" }
                      : {},
                },
                e.createElement(di, { className: "navbar-icons" })
              ),
              e.createElement(
                "div",
                {
                  onClick: function () {
                    return c(4);
                  },
                  className: "navbar-icons-wrapper",
                  style:
                    4 == l
                      ? { backgroundColor: "#713189", color: "white" }
                      : {},
                },
                e.createElement(mi, { className: "navbar-icons" })
              )
            )
          ),
          e.createElement(ri, {
            apiUrl: o.apiUrl,
            selectedOption: l,
            setSelectedOption: u,
            chats: a,
          })
        );
      };
      function yi(e) {
        return (
          (yi =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          yi(e)
        );
      }
      function bi() {
        bi = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          l = a.asyncIterator || "@@asyncIterator",
          u = a.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (e) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, r) {
          var a = t && t.prototype instanceof v ? t : v,
            i = Object.create(a.prototype),
            l = new _(r || []);
          return o(i, "_invoke", { value: O(e, n, l) }), i;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = s;
        var d = "suspendedStart",
          p = "suspendedYield",
          h = "executing",
          m = "completed",
          g = {};
        function v() {}
        function y() {}
        function b() {}
        var w = {};
        c(w, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          k = x && x(x(N([])));
        k && k !== n && r.call(k, i) && (w = k);
        var S = (b.prototype = v.prototype = Object.create(w));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function C(e, t) {
          function n(o, a, i, l) {
            var u = f(e[o], e, a);
            if ("throw" !== u.type) {
              var c = u.arg,
                s = c.value;
              return s && "object" == yi(s) && r.call(s, "__await")
                ? t.resolve(s.__await).then(
                    function (e) {
                      n("next", e, i, l);
                    },
                    function (e) {
                      n("throw", e, i, l);
                    }
                  )
                : t.resolve(s).then(
                    function (e) {
                      (c.value = e), i(c);
                    },
                    function (e) {
                      return n("throw", e, i, l);
                    }
                  );
            }
            l(u.arg);
          }
          var a;
          o(this, "_invoke", {
            value: function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function O(t, n, r) {
          var o = d;
          return function (a, i) {
            if (o === h) throw new Error("Generator is already running");
            if (o === m) {
              if ("throw" === a) throw i;
              return { value: e, done: !0 };
            }
            for (r.method = a, r.arg = i; ; ) {
              var l = r.delegate;
              if (l) {
                var u = P(l, r);
                if (u) {
                  if (u === g) continue;
                  return u;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === d) throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = h;
              var c = f(t, n, r);
              if ("normal" === c.type) {
                if (((o = r.done ? m : p), c.arg === g)) continue;
                return { value: c.arg, done: r.done };
              }
              "throw" === c.type &&
                ((o = m), (r.method = "throw"), (r.arg = c.arg));
            }
          };
        }
        function P(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                P(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              g
            );
          var a = f(o, t.iterator, n.arg);
          if ("throw" === a.type)
            return (
              (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), g
            );
          var i = a.arg;
          return i
            ? i.done
              ? ((n[t.resultName] = i.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                g)
              : i
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              g);
        }
        function M(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function T(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(M, this),
            this.reset(!0);
        }
        function N(t) {
          if (t || "" === t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (a.next = a);
            }
          }
          throw new TypeError(yi(t) + " is not iterable");
        }
        return (
          (y.prototype = b),
          o(S, "constructor", { value: b, configurable: !0 }),
          o(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = c(b, u, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), c(e, u, "GeneratorFunction")),
              (e.prototype = Object.create(S)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          E(C.prototype),
          c(C.prototype, l, function () {
            return this;
          }),
          (t.AsyncIterator = C),
          (t.async = function (e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var i = new C(s(e, n, r, o), a);
            return t.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(S),
          c(S, u, "Generator"),
          c(S, i, function () {
            return this;
          }),
          c(S, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = N),
          (_.prototype = {
            constructor: _,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(T),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (l.type = "throw"),
                  (l.arg = t),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = e)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  l = i.completion;
                if ("root" === i.tryLoc) return o("end");
                if (i.tryLoc <= this.prev) {
                  var u = r.call(i, "catchLoc"),
                    c = r.call(i, "finallyLoc");
                  if (u && c) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === e || "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a
                  ? ((this.method = "next"), (this.next = a.finallyLoc), g)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), T(n), g;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    T(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = { iterator: N(t), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function wi(e, t, n, r, o, a, i) {
        try {
          var l = e[a](i),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function xi(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = a.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ki(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? ki(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ki(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var Si = function (t) {
        var n = t.config,
          r = xi((0, e.useState)(!1), 2),
          o = r[0],
          a = r[1],
          i = xi((0, e.useState)([]), 2),
          l = i[0],
          u = i[1];
        return (
          (0, e.useEffect)(function () {
            var e = (function () {
              var e,
                t =
                  ((e = bi().mark(function e() {
                    var t, n, r;
                    return bi().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch(
                                "https://fbd2-2a02-2f08-4e09-9600-617e-cbd0-8491-c5fd.ngrok-free.app/chats",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }
                              )
                            );
                          case 2:
                            return (t = e.sent), (e.next = 5), t.json();
                          case 5:
                            (n = e.sent), (r = n.data), u(r);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, o) {
                      var a = e.apply(t, n);
                      function i(e) {
                        wi(a, r, o, i, l, "next", e);
                      }
                      function l(e) {
                        wi(a, r, o, i, l, "throw", e);
                      }
                      i(void 0);
                    });
                  });
              return function () {
                return t.apply(this, arguments);
              };
            })();
            e();
          }, []),
          e.createElement(
            "div",
            null,
            e.createElement(bt, {
              handleTrigger: function () {
                a(function (e) {
                  return !e;
                });
              },
            }),
            o && e.createElement(vi, { configs: n, chats: l })
          )
        );
      };
      window.ReactChatApp = {
        init: function (t) {
          var r = document.getElementById("react-chat-widget");
          r ||
            (((r = document.createElement("div")).id = "react-chat-widget"),
            document.body.appendChild(r)),
            (0, n.s)(r).render(e.createElement(Si, { config: t }));
        },
      };
    })();
})();

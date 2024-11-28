/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var im = Object.create;
  var qr = Object.defineProperty;
  var om = Object.getOwnPropertyDescriptor;
  var am = Object.getOwnPropertyNames;
  var sm = Object.getPrototypeOf,
    um = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var g = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Me = (e, t) => {
      for (var r in t) qr(e, r, { get: t[r], enumerable: !0 });
    },
    _a = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function") for (let i of am(t)) !um.call(e, i) && i !== r && qr(e, i, { get: () => t[i], enumerable: !(n = om(t, i)) || n.enumerable });
      return e;
    };
  var pe = (e, t, r) => ((r = e != null ? im(sm(e)) : {}), _a(t || !e || !e.__esModule ? qr(r, "default", { value: e, enumerable: !0 }) : r, e)),
    $e = (e) => _a(qr({}, "__esModule", { value: !0 }), e);
  var ei = g(() => {
    "use strict";
    window.tram = (function (e) {
      function t(p, O) {
        var L = new v.Bare();
        return L.init(p, O);
      }
      function r(p) {
        return p.replace(/[A-Z]/g, function (O) {
          return "-" + O.toLowerCase();
        });
      }
      function n(p) {
        var O = parseInt(p.slice(1), 16),
          L = (O >> 16) & 255,
          M = (O >> 8) & 255,
          X = 255 & O;
        return [L, M, X];
      }
      function i(p, O, L) {
        return "#" + ((1 << 24) | (p << 16) | (O << 8) | L).toString(16).slice(1);
      }
      function o() {}
      function a(p, O) {
        f("Type warning: Expected: [" + p + "] Got: [" + typeof O + "] " + O);
      }
      function u(p, O, L) {
        f("Units do not match [" + p + "]: " + O + ", " + L);
      }
      function s(p, O, L) {
        if ((O !== void 0 && (L = O), p === void 0)) return L;
        var M = L;
        return be.test(p) || !we.test(p) ? (M = parseInt(p, 10)) : we.test(p) && (M = 1e3 * parseFloat(p)), 0 > M && (M = 0), M === M ? M : L;
      }
      function f(p) {
        K.debug && window && window.console.warn(p);
      }
      function T(p) {
        for (var O = -1, L = p ? p.length : 0, M = []; ++O < L; ) {
          var X = p[O];
          X && M.push(X);
        }
        return M;
      }
      var d = (function (p, O, L) {
          function M(ue) {
            return typeof ue == "object";
          }
          function X(ue) {
            return typeof ue == "function";
          }
          function U() {}
          function oe(ue, ae) {
            function Q() {
              var Re = new ce();
              return X(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function ce() {}
            ae === L && ((ae = ue), (ue = Object)), (Q.Bare = ce);
            var le,
              _e = (U[p] = ue[p]),
              Xe = (ce[p] = Q[p] = new U());
            return (
              (Xe.constructor = Q),
              (Q.mixin = function (Re) {
                return (ce[p] = Q[p] = oe(Q, Re)[p]), Q;
              }),
              (Q.open = function (Re) {
                if (((le = {}), X(Re) ? (le = Re.call(Q, Xe, _e, Q, ue)) : M(Re) && (le = Re), M(le))) for (var or in le) O.call(le, or) && (Xe[or] = le[or]);
                return X(Xe.init) || (Xe.init = ue), Q;
              }),
              Q.open(ae)
            );
          }
          return oe;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (p, O, L, M) {
              var X = (p /= M) * p,
                U = X * p;
              return O + L * (-2.75 * U * X + 11 * X * X + -15.5 * U + 8 * X + 0.25 * p);
            },
          ],
          "ease-in": [
            "ease-in",
            function (p, O, L, M) {
              var X = (p /= M) * p,
                U = X * p;
              return O + L * (-1 * U * X + 3 * X * X + -3 * U + 2 * X);
            },
          ],
          "ease-out": [
            "ease-out",
            function (p, O, L, M) {
              var X = (p /= M) * p,
                U = X * p;
              return O + L * (0.3 * U * X + -1.6 * X * X + 2.2 * U + -1.8 * X + 1.9 * p);
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (p, O, L, M) {
              var X = (p /= M) * p,
                U = X * p;
              return O + L * (2 * U * X + -5 * X * X + 2 * U + 2 * X);
            },
          ],
          linear: [
            "linear",
            function (p, O, L, M) {
              return (L * p) / M + O;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (p, O, L, M) {
              return L * (p /= M) * p + O;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (p, O, L, M) {
              return -L * (p /= M) * (p - 2) + O;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (p, O, L, M) {
              return (p /= M / 2) < 1 ? (L / 2) * p * p + O : (-L / 2) * (--p * (p - 2) - 1) + O;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (p, O, L, M) {
              return L * (p /= M) * p * p + O;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (p, O, L, M) {
              return L * ((p = p / M - 1) * p * p + 1) + O;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (p, O, L, M) {
              return (p /= M / 2) < 1 ? (L / 2) * p * p * p + O : (L / 2) * ((p -= 2) * p * p + 2) + O;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (p, O, L, M) {
              return L * (p /= M) * p * p * p + O;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (p, O, L, M) {
              return -L * ((p = p / M - 1) * p * p * p - 1) + O;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (p, O, L, M) {
              return (p /= M / 2) < 1 ? (L / 2) * p * p * p * p + O : (-L / 2) * ((p -= 2) * p * p * p - 2) + O;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (p, O, L, M) {
              return L * (p /= M) * p * p * p * p + O;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (p, O, L, M) {
              return L * ((p = p / M - 1) * p * p * p * p + 1) + O;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (p, O, L, M) {
              return (p /= M / 2) < 1 ? (L / 2) * p * p * p * p * p + O : (L / 2) * ((p -= 2) * p * p * p * p + 2) + O;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (p, O, L, M) {
              return -L * Math.cos((p / M) * (Math.PI / 2)) + L + O;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (p, O, L, M) {
              return L * Math.sin((p / M) * (Math.PI / 2)) + O;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (p, O, L, M) {
              return (-L / 2) * (Math.cos((Math.PI * p) / M) - 1) + O;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (p, O, L, M) {
              return p === 0 ? O : L * Math.pow(2, 10 * (p / M - 1)) + O;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (p, O, L, M) {
              return p === M ? O + L : L * (-Math.pow(2, (-10 * p) / M) + 1) + O;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (p, O, L, M) {
              return p === 0 ? O : p === M ? O + L : (p /= M / 2) < 1 ? (L / 2) * Math.pow(2, 10 * (p - 1)) + O : (L / 2) * (-Math.pow(2, -10 * --p) + 2) + O;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (p, O, L, M) {
              return -L * (Math.sqrt(1 - (p /= M) * p) - 1) + O;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (p, O, L, M) {
              return L * Math.sqrt(1 - (p = p / M - 1) * p) + O;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (p, O, L, M) {
              return (p /= M / 2) < 1 ? (-L / 2) * (Math.sqrt(1 - p * p) - 1) + O : (L / 2) * (Math.sqrt(1 - (p -= 2) * p) + 1) + O;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (p, O, L, M, X) {
              return X === void 0 && (X = 1.70158), L * (p /= M) * p * ((X + 1) * p - X) + O;
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (p, O, L, M, X) {
              return X === void 0 && (X = 1.70158), L * ((p = p / M - 1) * p * ((X + 1) * p + X) + 1) + O;
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (p, O, L, M, X) {
              return X === void 0 && (X = 1.70158), (p /= M / 2) < 1 ? (L / 2) * p * p * (((X *= 1.525) + 1) * p - X) + O : (L / 2) * ((p -= 2) * p * (((X *= 1.525) + 1) * p + X) + 2) + O;
            },
          ],
        },
        m = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
        _ = document,
        w = window,
        R = "bkwld-tram",
        A = /[\-\.0-9]/g,
        D = /[A-Z]/,
        P = "number",
        H = /^(rgb|#)/,
        z = /(em|cm|mm|in|pt|pc|px)$/,
        q = /(em|cm|mm|in|pt|pc|px|%)$/,
        te = /(deg|rad|turn)$/,
        Y = "unitless",
        $ = /(all|none) 0s ease 0s/,
        ne = /^(width|height)$/,
        j = " ",
        C = _.createElement("a"),
        b = ["Webkit", "Moz", "O", "ms"],
        N = ["-webkit-", "-moz-", "-o-", "-ms-"],
        k = function (p) {
          if (p in C.style) return { dom: p, css: p };
          var O,
            L,
            M = "",
            X = p.split("-");
          for (O = 0; O < X.length; O++) M += X[O].charAt(0).toUpperCase() + X[O].slice(1);
          for (O = 0; O < b.length; O++) if (((L = b[O] + M), L in C.style)) return { dom: L, css: N[O] + p };
        },
        B = (t.support = { bind: Function.prototype.bind, transform: k("transform"), transition: k("transition"), backface: k("backface-visibility"), timing: k("transition-timing-function") });
      if (B.transition) {
        var F = B.timing.dom;
        if (((C.style[F] = E["ease-in-back"][0]), !C.style[F])) for (var G in m) E[G][0] = m[G];
      }
      var Z = (t.frame = (function () {
          var p = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.oRequestAnimationFrame || w.msRequestAnimationFrame;
          return p && B.bind
            ? p.bind(w)
            : function (O) {
                w.setTimeout(O, 16);
              };
        })()),
        ie = (t.now = (function () {
          var p = w.performance,
            O = p && (p.now || p.webkitNow || p.msNow || p.mozNow);
          return O && B.bind
            ? O.bind(p)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        y = d(function (p) {
          function O(se, de) {
            var Ee = T(("" + se).split(j)),
              ge = Ee[0];
            de = de || {};
            var Ce = J[ge];
            if (!Ce) return f("Unsupported property: " + ge);
            if (!de.weak || !this.props[ge]) {
              var Ve = Ce[0],
                De = this.props[ge];
              return De || (De = this.props[ge] = new Ve.Bare()), De.init(this.$el, Ee, Ce, de), De;
            }
          }
          function L(se, de, Ee) {
            if (se) {
              var ge = typeof se;
              if ((de || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)), ge == "number" && de)) return (this.timer = new V({ duration: se, context: this, complete: U })), void (this.active = !0);
              if (ge == "string" && de) {
                switch (se) {
                  case "hide":
                    Q.call(this);
                    break;
                  case "stop":
                    oe.call(this);
                    break;
                  case "redraw":
                    ce.call(this);
                    break;
                  default:
                    O.call(this, se, Ee && Ee[1]);
                }
                return U.call(this);
              }
              if (ge == "function") return void se.call(this, this);
              if (ge == "object") {
                var Ce = 0;
                Xe.call(
                  this,
                  se,
                  function (Ie, nm) {
                    Ie.span > Ce && (Ce = Ie.span), Ie.stop(), Ie.animate(nm);
                  },
                  function (Ie) {
                    "wait" in Ie && (Ce = s(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  Ce > 0 && ((this.timer = new V({ duration: Ce, context: this })), (this.active = !0), de && (this.timer.complete = U));
                var Ve = this,
                  De = !1,
                  Fr = {};
                Z(function () {
                  Xe.call(Ve, se, function (Ie) {
                    Ie.active && ((De = !0), (Fr[Ie.name] = Ie.nextStyle));
                  }),
                    De && Ve.$el.css(Fr);
                });
              }
            }
          }
          function M(se) {
            (se = s(se, 0)), this.active ? this.queue.push({ options: se }) : ((this.timer = new V({ duration: se, context: this, complete: U })), (this.active = !0));
          }
          function X(se) {
            return this.active ? (this.queue.push({ options: se, args: arguments }), void (this.timer.complete = U)) : f("No active transition timer. Use start() or wait() before then().");
          }
          function U() {
            if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
              var se = this.queue.shift();
              L.call(this, se.options, !0, se.args);
            }
          }
          function oe(se) {
            this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1);
            var de;
            typeof se == "string" ? ((de = {}), (de[se] = 1)) : (de = typeof se == "object" && se != null ? se : this.props), Xe.call(this, de, Re), _e.call(this);
          }
          function ue(se) {
            oe.call(this, se), Xe.call(this, se, or, tm);
          }
          function ae(se) {
            typeof se != "string" && (se = "block"), (this.el.style.display = se);
          }
          function Q() {
            oe.call(this), (this.el.style.display = "none");
          }
          function ce() {
            this.el.offsetHeight;
          }
          function le() {
            oe.call(this), e.removeData(this.el, R), (this.$el = this.el = null);
          }
          function _e() {
            var se,
              de,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (se in this.props) (de = this.props[se]), de.active && Ee.push(de.string);
            (Ee = Ee.join(",")), this.style !== Ee && ((this.style = Ee), (this.el.style[B.transition.dom] = Ee));
          }
          function Xe(se, de, Ee) {
            var ge,
              Ce,
              Ve,
              De,
              Fr = de !== Re,
              Ie = {};
            for (ge in se) (Ve = se[ge]), ge in fe ? (Ie.transform || (Ie.transform = {}), (Ie.transform[ge] = Ve)) : (D.test(ge) && (ge = r(ge)), ge in J ? (Ie[ge] = Ve) : (De || (De = {}), (De[ge] = Ve)));
            for (ge in Ie) {
              if (((Ve = Ie[ge]), (Ce = this.props[ge]), !Ce)) {
                if (!Fr) continue;
                Ce = O.call(this, ge);
              }
              de.call(this, Ce, Ve);
            }
            Ee && De && Ee.call(this, De);
          }
          function Re(se) {
            se.stop();
          }
          function or(se, de) {
            se.set(de);
          }
          function tm(se) {
            this.$el.css(se);
          }
          function Ue(se, de) {
            p[se] = function () {
              return this.children ? rm.call(this, de, arguments) : (this.el && de.apply(this, arguments), this);
            };
          }
          function rm(se, de) {
            var Ee,
              ge = this.children.length;
            for (Ee = 0; ge > Ee; Ee++) se.apply(this.children[Ee], de);
            return this;
          }
          (p.init = function (se) {
            if (((this.$el = e(se)), (this.el = this.$el[0]), (this.props = {}), (this.queue = []), (this.style = ""), (this.active = !1), K.keepInherited && !K.fallback)) {
              var de = W(this.el, "transition");
              de && !$.test(de) && (this.upstream = de);
            }
            B.backface && K.hideBackface && h(this.el, B.backface.css, "hidden");
          }),
            Ue("add", O),
            Ue("start", L),
            Ue("wait", M),
            Ue("then", X),
            Ue("next", U),
            Ue("stop", oe),
            Ue("set", ue),
            Ue("show", ae),
            Ue("hide", Q),
            Ue("redraw", ce),
            Ue("destroy", le);
        }),
        v = d(y, function (p) {
          function O(L, M) {
            var X = e.data(L, R) || e.data(L, R, new y.Bare());
            return X.el || X.init(L), M ? X.start(M) : X;
          }
          p.init = function (L, M) {
            var X = e(L);
            if (!X.length) return this;
            if (X.length === 1) return O(X[0], M);
            var U = [];
            return (
              X.each(function (oe, ue) {
                U.push(O(ue, M));
              }),
              (this.children = U),
              this
            );
          };
        }),
        l = d(function (p) {
          function O() {
            var U = this.get();
            this.update("auto");
            var oe = this.get();
            return this.update(U), oe;
          }
          function L(U, oe, ue) {
            return oe !== void 0 && (ue = oe), U in E ? U : ue;
          }
          function M(U) {
            var oe = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(U);
            return (oe ? i(oe[1], oe[2], oe[3]) : U).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var X = { duration: 500, ease: "ease", delay: 0 };
          (p.init = function (U, oe, ue, ae) {
            (this.$el = U), (this.el = U[0]);
            var Q = oe[0];
            ue[2] && (Q = ue[2]),
              re[Q] && (Q = re[Q]),
              (this.name = Q),
              (this.type = ue[1]),
              (this.duration = s(oe[1], this.duration, X.duration)),
              (this.ease = L(oe[2], this.ease, X.ease)),
              (this.delay = s(oe[3], this.delay, X.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = ne.test(this.name)),
              (this.unit = ae.unit || this.unit || K.defaultUnit),
              (this.angle = ae.angle || this.angle || K.defaultAngle),
              K.fallback || ae.fallback ? (this.animate = this.fallback) : ((this.animate = this.transition), (this.string = this.name + j + this.duration + "ms" + (this.ease != "ease" ? j + E[this.ease][0] : "") + (this.delay ? j + this.delay + "ms" : "")));
          }),
            (p.set = function (U) {
              (U = this.convert(U, this.type)), this.update(U), this.redraw();
            }),
            (p.transition = function (U) {
              (this.active = !0), (U = this.convert(U, this.type)), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), U == "auto" && (U = O.call(this))), (this.nextStyle = U);
            }),
            (p.fallback = function (U) {
              var oe = this.el.style[this.name] || this.convert(this.get(), this.type);
              (U = this.convert(U, this.type)), this.auto && (oe == "auto" && (oe = this.convert(this.get(), this.type)), U == "auto" && (U = O.call(this))), (this.tween = new S({ from: oe, to: U, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }));
            }),
            (p.get = function () {
              return W(this.el, this.name);
            }),
            (p.update = function (U) {
              h(this.el, this.name, U);
            }),
            (p.stop = function () {
              (this.active || this.nextStyle) && ((this.active = !1), (this.nextStyle = null), h(this.el, this.name, this.get()));
              var U = this.tween;
              U && U.context && U.destroy();
            }),
            (p.convert = function (U, oe) {
              if (U == "auto" && this.auto) return U;
              var ue,
                ae = typeof U == "number",
                Q = typeof U == "string";
              switch (oe) {
                case P:
                  if (ae) return U;
                  if (Q && U.replace(A, "") === "") return +U;
                  ue = "number(unitless)";
                  break;
                case H:
                  if (Q) {
                    if (U === "" && this.original) return this.original;
                    if (oe.test(U)) return U.charAt(0) == "#" && U.length == 7 ? U : M(U);
                  }
                  ue = "hex or rgb string";
                  break;
                case z:
                  if (ae) return U + this.unit;
                  if (Q && oe.test(U)) return U;
                  ue = "number(px) or string(unit)";
                  break;
                case q:
                  if (ae) return U + this.unit;
                  if (Q && oe.test(U)) return U;
                  ue = "number(px) or string(unit or %)";
                  break;
                case te:
                  if (ae) return U + this.angle;
                  if (Q && oe.test(U)) return U;
                  ue = "number(deg) or string(angle)";
                  break;
                case Y:
                  if (ae || (Q && q.test(U))) return U;
                  ue = "number(unitless) or string(unit or %)";
              }
              return a(ue, U), U;
            }),
            (p.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        c = d(l, function (p, O) {
          p.init = function () {
            O.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), H));
          };
        }),
        I = d(l, function (p, O) {
          (p.init = function () {
            O.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (p.get = function () {
              return this.$el[this.name]();
            }),
            (p.update = function (L) {
              this.$el[this.name](L);
            });
        }),
        x = d(l, function (p, O) {
          function L(M, X) {
            var U, oe, ue, ae, Q;
            for (U in M) (ae = fe[U]), (ue = ae[0]), (oe = ae[1] || U), (Q = this.convert(M[U], ue)), X.call(this, oe, Q, ue);
          }
          (p.init = function () {
            O.init.apply(this, arguments), this.current || ((this.current = {}), fe.perspective && K.perspective && ((this.current.perspective = K.perspective), h(this.el, this.name, this.style(this.current)), this.redraw()));
          }),
            (p.set = function (M) {
              L.call(this, M, function (X, U) {
                this.current[X] = U;
              }),
                h(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (p.transition = function (M) {
              var X = this.values(M);
              this.tween = new ee({ current: this.current, values: X, duration: this.duration, delay: this.delay, ease: this.ease });
              var U,
                oe = {};
              for (U in this.current) oe[U] = U in X ? X[U] : this.current[U];
              (this.active = !0), (this.nextStyle = this.style(oe));
            }),
            (p.fallback = function (M) {
              var X = this.values(M);
              this.tween = new ee({ current: this.current, values: X, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this });
            }),
            (p.update = function () {
              h(this.el, this.name, this.style(this.current));
            }),
            (p.style = function (M) {
              var X,
                U = "";
              for (X in M) U += X + "(" + M[X] + ") ";
              return U;
            }),
            (p.values = function (M) {
              var X,
                U = {};
              return (
                L.call(this, M, function (oe, ue, ae) {
                  (U[oe] = ue), this.current[oe] === void 0 && ((X = 0), ~oe.indexOf("scale") && (X = 1), (this.current[oe] = this.convert(X, ae)));
                }),
                U
              );
            });
        }),
        S = d(function (p) {
          function O(Q) {
            ue.push(Q) === 1 && Z(L);
          }
          function L() {
            var Q,
              ce,
              le,
              _e = ue.length;
            if (_e) for (Z(L), ce = ie(), Q = _e; Q--; ) (le = ue[Q]), le && le.render(ce);
          }
          function M(Q) {
            var ce,
              le = e.inArray(Q, ue);
            le >= 0 && ((ce = ue.slice(le + 1)), (ue.length = le), ce.length && (ue = ue.concat(ce)));
          }
          function X(Q) {
            return Math.round(Q * ae) / ae;
          }
          function U(Q, ce, le) {
            return i(Q[0] + le * (ce[0] - Q[0]), Q[1] + le * (ce[1] - Q[1]), Q[2] + le * (ce[2] - Q[2]));
          }
          var oe = { ease: E.ease[1], from: 0, to: 1 };
          (p.init = function (Q) {
            (this.duration = Q.duration || 0), (this.delay = Q.delay || 0);
            var ce = Q.ease || oe.ease;
            E[ce] && (ce = E[ce][1]), typeof ce != "function" && (ce = oe.ease), (this.ease = ce), (this.update = Q.update || o), (this.complete = Q.complete || o), (this.context = Q.context || this), (this.name = Q.name);
            var le = Q.from,
              _e = Q.to;
            le === void 0 && (le = oe.from), _e === void 0 && (_e = oe.to), (this.unit = Q.unit || ""), typeof le == "number" && typeof _e == "number" ? ((this.begin = le), (this.change = _e - le)) : this.format(_e, le), (this.value = this.begin + this.unit), (this.start = ie()), Q.autoplay !== !1 && this.play();
          }),
            (p.play = function () {
              this.active || (this.start || (this.start = ie()), (this.active = !0), O(this));
            }),
            (p.stop = function () {
              this.active && ((this.active = !1), M(this));
            }),
            (p.render = function (Q) {
              var ce,
                le = Q - this.start;
              if (this.delay) {
                if (le <= this.delay) return;
                le -= this.delay;
              }
              if (le < this.duration) {
                var _e = this.ease(le, 0, 1, this.duration);
                return (ce = this.startRGB ? U(this.startRGB, this.endRGB, _e) : X(this.begin + _e * this.change)), (this.value = ce + this.unit), void this.update.call(this.context, this.value);
              }
              (ce = this.endHex || this.begin + this.change), (this.value = ce + this.unit), this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
            }),
            (p.format = function (Q, ce) {
              if (((ce += ""), (Q += ""), Q.charAt(0) == "#")) return (this.startRGB = n(ce)), (this.endRGB = n(Q)), (this.endHex = Q), (this.begin = 0), void (this.change = 1);
              if (!this.unit) {
                var le = ce.replace(A, ""),
                  _e = Q.replace(A, "");
                le !== _e && u("tween", ce, Q), (this.unit = le);
              }
              (ce = parseFloat(ce)), (Q = parseFloat(Q)), (this.begin = this.value = ce), (this.change = Q - ce);
            }),
            (p.destroy = function () {
              this.stop(), (this.context = null), (this.ease = this.update = this.complete = o);
            });
          var ue = [],
            ae = 1e3;
        }),
        V = d(S, function (p) {
          (p.init = function (O) {
            (this.duration = O.duration || 0), (this.complete = O.complete || o), (this.context = O.context), this.play();
          }),
            (p.render = function (O) {
              var L = O - this.start;
              L < this.duration || (this.complete.call(this.context), this.destroy());
            });
        }),
        ee = d(S, function (p, O) {
          (p.init = function (L) {
            (this.context = L.context), (this.update = L.update), (this.tweens = []), (this.current = L.current);
            var M, X;
            for (M in L.values) (X = L.values[M]), this.current[M] !== X && this.tweens.push(new S({ name: M, from: this.current[M], to: X, duration: L.duration, delay: L.delay, ease: L.ease, autoplay: !1 }));
            this.play();
          }),
            (p.render = function (L) {
              var M,
                X,
                U = this.tweens.length,
                oe = !1;
              for (M = U; M--; ) (X = this.tweens[M]), X.context && (X.render(L), (this.current[X.name] = X.value), (oe = !0));
              return oe ? void (this.update && this.update.call(this.context)) : this.destroy();
            }),
            (p.destroy = function () {
              if ((O.destroy.call(this), this.tweens)) {
                var L,
                  M = this.tweens.length;
                for (L = M; L--; ) this.tweens[L].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        K = (t.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !B.transition, agentTests: [] });
      (t.fallback = function (p) {
        if (!B.transition) return (K.fallback = !0);
        K.agentTests.push("(" + p + ")");
        var O = new RegExp(K.agentTests.join("|"), "i");
        K.fallback = O.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (p) {
          return new S(p);
        }),
        (t.delay = function (p, O, L) {
          return new V({ complete: O, duration: p, context: L });
        }),
        (e.fn.tram = function (p) {
          return t.call(null, this, p);
        });
      var h = e.style,
        W = e.css,
        re = { transform: B.transform && B.transform.css },
        J = {
          color: [c, H],
          background: [c, H, "background-color"],
          "outline-color": [c, H],
          "border-color": [c, H],
          "border-top-color": [c, H],
          "border-right-color": [c, H],
          "border-bottom-color": [c, H],
          "border-left-color": [c, H],
          "border-width": [l, z],
          "border-top-width": [l, z],
          "border-right-width": [l, z],
          "border-bottom-width": [l, z],
          "border-left-width": [l, z],
          "border-spacing": [l, z],
          "letter-spacing": [l, z],
          margin: [l, z],
          "margin-top": [l, z],
          "margin-right": [l, z],
          "margin-bottom": [l, z],
          "margin-left": [l, z],
          padding: [l, z],
          "padding-top": [l, z],
          "padding-right": [l, z],
          "padding-bottom": [l, z],
          "padding-left": [l, z],
          "outline-width": [l, z],
          opacity: [l, P],
          top: [l, q],
          right: [l, q],
          bottom: [l, q],
          left: [l, q],
          "font-size": [l, q],
          "text-indent": [l, q],
          "word-spacing": [l, q],
          width: [l, q],
          "min-width": [l, q],
          "max-width": [l, q],
          height: [l, q],
          "min-height": [l, q],
          "max-height": [l, q],
          "line-height": [l, Y],
          "scroll-top": [I, P, "scrollTop"],
          "scroll-left": [I, P, "scrollLeft"],
        },
        fe = {};
      B.transform && ((J.transform = [x]), (fe = { x: [q, "translateX"], y: [q, "translateY"], rotate: [te], rotateX: [te], rotateY: [te], scale: [P], scaleX: [P], scaleY: [P], skew: [te], skewX: [te], skewY: [te] })), B.transform && B.backface && ((fe.z = [q, "translateZ"]), (fe.rotateZ = [te]), (fe.scaleZ = [P]), (fe.perspective = [z]));
      var be = /ms/,
        we = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ia = g((Y1, ba) => {
    "use strict";
    var cm = window.$,
      lm = ei() && cm.tram;
    ba.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        u = r.concat,
        s = n.toString,
        f = n.hasOwnProperty,
        T = r.forEach,
        d = r.map,
        E = r.reduce,
        m = r.reduceRight,
        _ = r.filter,
        w = r.every,
        R = r.some,
        A = r.indexOf,
        D = r.lastIndexOf,
        P = Array.isArray,
        H = Object.keys,
        z = i.bind,
        q =
          (e.each =
          e.forEach =
            function (b, N, k) {
              if (b == null) return b;
              if (T && b.forEach === T) b.forEach(N, k);
              else if (b.length === +b.length) {
                for (var B = 0, F = b.length; B < F; B++) if (N.call(k, b[B], B, b) === t) return;
              } else for (var G = e.keys(b), B = 0, F = G.length; B < F; B++) if (N.call(k, b[G[B]], G[B], b) === t) return;
              return b;
            });
      (e.map = e.collect =
        function (b, N, k) {
          var B = [];
          return b == null
            ? B
            : d && b.map === d
            ? b.map(N, k)
            : (q(b, function (F, G, Z) {
                B.push(N.call(k, F, G, Z));
              }),
              B);
        }),
        (e.find = e.detect =
          function (b, N, k) {
            var B;
            return (
              te(b, function (F, G, Z) {
                if (N.call(k, F, G, Z)) return (B = F), !0;
              }),
              B
            );
          }),
        (e.filter = e.select =
          function (b, N, k) {
            var B = [];
            return b == null
              ? B
              : _ && b.filter === _
              ? b.filter(N, k)
              : (q(b, function (F, G, Z) {
                  N.call(k, F, G, Z) && B.push(F);
                }),
                B);
          });
      var te =
        (e.some =
        e.any =
          function (b, N, k) {
            N || (N = e.identity);
            var B = !1;
            return b == null
              ? B
              : R && b.some === R
              ? b.some(N, k)
              : (q(b, function (F, G, Z) {
                  if (B || (B = N.call(k, F, G, Z))) return t;
                }),
                !!B);
          });
      (e.contains = e.include =
        function (b, N) {
          return b == null
            ? !1
            : A && b.indexOf === A
            ? b.indexOf(N) != -1
            : te(b, function (k) {
                return k === N;
              });
        }),
        (e.delay = function (b, N) {
          var k = a.call(arguments, 2);
          return setTimeout(function () {
            return b.apply(null, k);
          }, N);
        }),
        (e.defer = function (b) {
          return e.delay.apply(e, [b, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (b) {
          var N, k, B;
          return function () {
            N ||
              ((N = !0),
              (k = arguments),
              (B = this),
              lm.frame(function () {
                (N = !1), b.apply(B, k);
              }));
          };
        }),
        (e.debounce = function (b, N, k) {
          var B,
            F,
            G,
            Z,
            ie,
            y = function () {
              var v = e.now() - Z;
              v < N ? (B = setTimeout(y, N - v)) : ((B = null), k || ((ie = b.apply(G, F)), (G = F = null)));
            };
          return function () {
            (G = this), (F = arguments), (Z = e.now());
            var v = k && !B;
            return B || (B = setTimeout(y, N)), v && ((ie = b.apply(G, F)), (G = F = null)), ie;
          };
        }),
        (e.defaults = function (b) {
          if (!e.isObject(b)) return b;
          for (var N = 1, k = arguments.length; N < k; N++) {
            var B = arguments[N];
            for (var F in B) b[F] === void 0 && (b[F] = B[F]);
          }
          return b;
        }),
        (e.keys = function (b) {
          if (!e.isObject(b)) return [];
          if (H) return H(b);
          var N = [];
          for (var k in b) e.has(b, k) && N.push(k);
          return N;
        }),
        (e.has = function (b, N) {
          return f.call(b, N);
        }),
        (e.isObject = function (b) {
          return b === Object(b);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
      var Y = /(.)^/,
        $ = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
        ne = /\\|'|\r|\n|\u2028|\u2029/g,
        j = function (b) {
          return "\\" + $[b];
        },
        C = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (b, N, k) {
          !N && k && (N = k), (N = e.defaults({}, N, e.templateSettings));
          var B = RegExp([(N.escape || Y).source, (N.interpolate || Y).source, (N.evaluate || Y).source].join("|") + "|$", "g"),
            F = 0,
            G = "__p+='";
          b.replace(B, function (v, l, c, I, x) {
            return (
              (G += b.slice(F, x).replace(ne, j)),
              (F = x + v.length),
              l
                ? (G +=
                    `'+
  ((__t=(` +
                    l +
                    `))==null?'':_.escape(__t))+
  '`)
                : c
                ? (G +=
                    `'+
  ((__t=(` +
                    c +
                    `))==null?'':__t)+
  '`)
                : I &&
                  (G +=
                    `';
  ` +
                    I +
                    `
  __p+='`),
              v
            );
          }),
            (G += `';
  `);
          var Z = N.variable;
          if (Z) {
            if (!C.test(Z)) throw new Error("variable is not a bare identifier: " + Z);
          } else
            (G =
              `with(obj||{}){
  ` +
              G +
              `}
  `),
              (Z = "obj");
          G =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
  ` +
            G +
            `return __p;
  `;
          var ie;
          try {
            ie = new Function(N.variable || "obj", "_", G);
          } catch (v) {
            throw ((v.source = G), v);
          }
          var y = function (v) {
            return ie.call(this, v, e);
          };
          return (
            (y.source =
              "function(" +
              Z +
              `){
  ` +
              G +
              "}"),
            y
          );
        }),
        e
      );
    })();
  });
  var Oe = g((Q1, Ca) => {
    "use strict";
    var he = {},
      Rt = {},
      Ct = [],
      ri = window.Webflow || [],
      ft = window.jQuery,
      We = ft(window),
      fm = ft(document),
      Ze = ft.isFunction,
      He = (he._ = Ia()),
      wa = (he.tram = ei() && ft.tram),
      Xr = !1,
      ni = !1;
    wa.config.hideBackface = !1;
    wa.config.keepInherited = !0;
    he.define = function (e, t, r) {
      Rt[e] && Aa(Rt[e]);
      var n = (Rt[e] = t(ft, He, r) || {});
      return xa(n), n;
    };
    he.require = function (e) {
      return Rt[e];
    };
    function xa(e) {
      he.env() && (Ze(e.design) && We.on("__wf_design", e.design), Ze(e.preview) && We.on("__wf_preview", e.preview)), Ze(e.destroy) && We.on("__wf_destroy", e.destroy), e.ready && Ze(e.ready) && dm(e);
    }
    function dm(e) {
      if (Xr) {
        e.ready();
        return;
      }
      He.contains(Ct, e.ready) || Ct.push(e.ready);
    }
    function Aa(e) {
      Ze(e.design) && We.off("__wf_design", e.design), Ze(e.preview) && We.off("__wf_preview", e.preview), Ze(e.destroy) && We.off("__wf_destroy", e.destroy), e.ready && Ze(e.ready) && pm(e);
    }
    function pm(e) {
      Ct = He.filter(Ct, function (t) {
        return t !== e.ready;
      });
    }
    he.push = function (e) {
      if (Xr) {
        Ze(e) && e();
        return;
      }
      ri.push(e);
    };
    he.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var kr = navigator.userAgent.toLowerCase(),
      Oa = (he.env.touch = "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
      gm = (he.env.chrome = /chrome/.test(kr) && /Google/.test(navigator.vendor) && parseInt(kr.match(/chrome\/(\d+)\./)[1], 10)),
      hm = (he.env.ios = /(ipod|iphone|ipad)/.test(kr));
    he.env.safari = /safari/.test(kr) && !gm && !hm;
    var ti;
    Oa &&
      fm.on("touchstart mousedown", function (e) {
        ti = e.target;
      });
    he.validClick = Oa
      ? function (e) {
          return e === ti || ft.contains(e, ti);
        }
      : function () {
          return !0;
        };
    var Sa = "resize.webflow orientationchange.webflow load.webflow",
      vm = "scroll.webflow " + Sa;
    he.resize = ii(We, Sa);
    he.scroll = ii(We, vm);
    he.redraw = ii();
    function ii(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = He.throttle(function (i) {
          He.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (He.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = He.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    he.location = function (e) {
      window.location = e;
    };
    he.env() && (he.location = function () {});
    he.ready = function () {
      (Xr = !0), ni ? mm() : He.each(Ct, Ta), He.each(ri, Ta), he.resize.up();
    };
    function Ta(e) {
      Ze(e) && e();
    }
    function mm() {
      (ni = !1), He.each(Rt, xa);
    }
    var _t;
    he.load = function (e) {
      _t.then(e);
    };
    function Ra() {
      _t && (_t.reject(), We.off("load", _t.resolve)), (_t = new ft.Deferred()), We.on("load", _t.resolve);
    }
    he.destroy = function (e) {
      (e = e || {}), (ni = !0), We.triggerHandler("__wf_destroy"), e.domready != null && (Xr = e.domready), He.each(Rt, Aa), he.resize.off(), he.scroll.off(), he.redraw.off(), (Ct = []), (ri = []), _t.state() === "pending" && Ra();
    };
    ft(he.ready);
    Ra();
    Ca.exports = window.Webflow = he;
  });
  var Na = g(($1, Pa) => {
    "use strict";
    var La = Oe();
    La.define(
      "brand",
      (Pa.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          u = /PhantomJS/i.test(navigator.userAgent),
          s = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            _ = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(_) && a.hostname !== _ && (m = !0), m && !u && ((f = f || d()), E(), setTimeout(E, 500), e(r).off(s, T).on(s, T));
        };
        function T() {
          var m = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
          e(f).attr("style", m ? "display: none !important;" : "");
        }
        function d() {
          var m = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
            _ = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({ marginRight: "4px", width: "26px" }),
            w = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
          return m.append(_, w), m[0];
        }
        function E() {
          var m = i.children(o),
            _ = m.length && m.get(0) === f,
            w = La.env("editor");
          if (_) {
            w && m.remove();
            return;
          }
          m.length && m.remove(), w || i.append(f);
        }
        return t;
      })
    );
  });
  var Ma = g((Z1, Da) => {
    "use strict";
    var Em = Oe();
    Em.define(
      "focus-visible",
      (Da.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };
          function u(P) {
            return !!(P && P !== document && P.nodeName !== "HTML" && P.nodeName !== "BODY" && "classList" in P && "contains" in P.classList);
          }
          function s(P) {
            var H = P.type,
              z = P.tagName;
            return !!((z === "INPUT" && a[H] && !P.readOnly) || (z === "TEXTAREA" && !P.readOnly) || P.isContentEditable);
          }
          function f(P) {
            P.getAttribute("data-wf-focus-visible") || P.setAttribute("data-wf-focus-visible", "true");
          }
          function T(P) {
            P.getAttribute("data-wf-focus-visible") && P.removeAttribute("data-wf-focus-visible");
          }
          function d(P) {
            P.metaKey || P.altKey || P.ctrlKey || (u(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function m(P) {
            u(P.target) && (n || s(P.target)) && f(P.target);
          }
          function _(P) {
            u(P.target) &&
              P.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              T(P.target));
          }
          function w() {
            document.visibilityState === "hidden" && (i && (n = !0), R());
          }
          function R() {
            document.addEventListener("mousemove", D), document.addEventListener("mousedown", D), document.addEventListener("mouseup", D), document.addEventListener("pointermove", D), document.addEventListener("pointerdown", D), document.addEventListener("pointerup", D), document.addEventListener("touchmove", D), document.addEventListener("touchstart", D), document.addEventListener("touchend", D);
          }
          function A() {
            document.removeEventListener("mousemove", D), document.removeEventListener("mousedown", D), document.removeEventListener("mouseup", D), document.removeEventListener("pointermove", D), document.removeEventListener("pointerdown", D), document.removeEventListener("pointerup", D), document.removeEventListener("touchmove", D), document.removeEventListener("touchstart", D), document.removeEventListener("touchend", D);
          }
          function D(P) {
            (P.target.nodeName && P.target.nodeName.toLowerCase() === "html") || ((n = !1), A());
          }
          document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("visibilitychange", w, !0), R(), r.addEventListener("focus", m, !0), r.addEventListener("blur", _, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var ka = g((J1, qa) => {
    "use strict";
    var Fa = Oe();
    Fa.define(
      "focus",
      (qa.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a));
        }
        function n(a) {
          var u = a.target,
            s = u.tagName;
          return (/^a$/i.test(s) && u.href != null) || (/^(button|textarea)$/i.test(s) && u.disabled !== !0) || (/^input$/i.test(s) && /^(button|reset|submit|radio|checkbox)$/i.test(u.type) && !u.disabled) || (!/^(button|input|textarea|select|a)$/i.test(s) && !Number.isNaN(Number.parseFloat(u.tabIndex))) || /^audio$/i.test(s) || (/^video$/i.test(s) && u.controls === !0);
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var u = e.pop();
                u.target.dispatchEvent(new MouseEvent(u.type, u));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Fa.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Vr = g((eF, Ga) => {
    "use strict";
    var oi = window.jQuery,
      Je = {},
      Gr = [],
      Xa = ".w-ix",
      Ur = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro || ((t.__wf_intro = !0), oi(t).triggerHandler(Je.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro && ((t.__wf_intro = null), oi(t).triggerHandler(Je.types.OUTRO));
        },
      };
    Je.triggers = {};
    Je.types = { INTRO: "w-ix-intro" + Xa, OUTRO: "w-ix-outro" + Xa };
    Je.init = function () {
      for (var e = Gr.length, t = 0; t < e; t++) {
        var r = Gr[t];
        r[0](0, r[1]);
      }
      (Gr = []), oi.extend(Je.triggers, Ur);
    };
    Je.async = function () {
      for (var e in Ur) {
        var t = Ur[e];
        Ur.hasOwnProperty(e) &&
          (Je.triggers[e] = function (r, n) {
            Gr.push([t, n]);
          });
      }
    };
    Je.async();
    Ga.exports = Je;
  });
  var Va = g((tF, Ua) => {
    "use strict";
    var Be = Oe(),
      Hr = Vr();
    Be.define(
      "ix",
      (Ua.exports = function (e, t) {
        var r = {},
          n,
          i = e(window),
          o = ".w-ix",
          a = e.tram,
          u = Be.env,
          s = u(),
          f = u.chrome && u.chrome < 35,
          T = "none 0s ease 0s",
          d = e(),
          E = {},
          m = [],
          _ = [],
          w = [],
          R,
          A = 1,
          D = { tabs: ".w-tab-link, .w-tab-pane", dropdown: ".w-dropdown", slider: ".w-slide", navbar: ".w-nav" };
        (r.init = function (F) {
          setTimeout(function () {
            P(F);
          }, 1);
        }),
          (r.preview = function () {
            (n = !1),
              (A = 100),
              setTimeout(function () {
                P(window.__wf_ix);
              }, 1);
          }),
          (r.design = function () {
            (n = !0), r.destroy();
          }),
          (r.destroy = function () {
            (R = !0), d.each(Y), Be.scroll.off($), Hr.async(), (m = []), (_ = []), (w = []);
          }),
          (r.ready = function () {
            if (s) return u("design") ? r.design() : r.preview();
            E && R && ((R = !1), H());
          }),
          (r.run = C),
          (r.style = s ? N : k);
        function P(F) {
          F &&
            ((E = {}),
            t.each(F, function (G) {
              E[G.slug] = G.value;
            }),
            H());
        }
        function H() {
          z(), Hr.init(), Be.redraw.up();
        }
        function z() {
          var F = e("[data-ix]");
          F.length && (F.each(Y), F.each(q), m.length && (Be.scroll.on($), setTimeout($, 1)), _.length && Be.load(ne), w.length && setTimeout(j, A));
        }
        function q(F, G) {
          var Z = e(G),
            ie = Z.attr("data-ix"),
            y = E[ie];
          if (y) {
            var v = y.triggers;
            v &&
              (r.style(Z, y.style),
              t.each(v, function (l) {
                var c = {},
                  I = l.type,
                  x = l.stepsB && l.stepsB.length;
                function S() {
                  C(l, Z, { group: "A" });
                }
                function V() {
                  C(l, Z, { group: "B" });
                }
                if (I === "load") {
                  l.preload && !s ? _.push(S) : w.push(S);
                  return;
                }
                if (I === "click") {
                  Z.on("click" + o, function (h) {
                    Be.validClick(h.currentTarget) && (Z.attr("href") === "#" && h.preventDefault(), C(l, Z, { group: c.clicked ? "B" : "A" }), x && (c.clicked = !c.clicked));
                  }),
                    (d = d.add(Z));
                  return;
                }
                if (I === "hover") {
                  Z.on("mouseenter" + o, S), Z.on("mouseleave" + o, V), (d = d.add(Z));
                  return;
                }
                if (I === "scroll") {
                  m.push({ el: Z, trigger: l, state: { active: !1 }, offsetTop: te(l.offsetTop), offsetBot: te(l.offsetBot) });
                  return;
                }
                var ee = D[I];
                if (ee) {
                  var K = Z.closest(ee);
                  K.on(Hr.types.INTRO, S).on(Hr.types.OUTRO, V), (d = d.add(K));
                  return;
                }
              }));
          }
        }
        function te(F) {
          if (!F) return 0;
          F = String(F);
          var G = parseInt(F, 10);
          return G !== G ? 0 : (F.indexOf("%") > 0 && ((G /= 100), G >= 1 && (G = 0.999)), G);
        }
        function Y(F, G) {
          e(G).off(o);
        }
        function $() {
          for (var F = i.scrollTop(), G = i.height(), Z = m.length, ie = 0; ie < Z; ie++) {
            var y = m[ie],
              v = y.el,
              l = y.trigger,
              c = l.stepsB && l.stepsB.length,
              I = y.state,
              x = v.offset().top,
              S = v.outerHeight(),
              V = y.offsetTop,
              ee = y.offsetBot;
            V < 1 && V > 0 && (V *= G), ee < 1 && ee > 0 && (ee *= G);
            var K = x + S - V >= F && x + ee <= F + G;
            K !== I.active && ((K === !1 && !c) || ((I.active = K), C(l, v, { group: K ? "A" : "B" })));
          }
        }
        function ne() {
          for (var F = _.length, G = 0; G < F; G++) _[G]();
        }
        function j() {
          for (var F = w.length, G = 0; G < F; G++) w[G]();
        }
        function C(F, G, Z, ie) {
          Z = Z || {};
          var y = Z.done,
            v = F.preserve3d;
          if (n && !Z.force) return;
          var l = Z.group || "A",
            c = F["loop" + l],
            I = F["steps" + l];
          if (!I || !I.length) return;
          if ((I.length < 2 && (c = !1), !ie)) {
            var x = F.selector;
            x && (F.descend ? (G = G.find(x)) : F.siblings ? (G = G.siblings(x)) : (G = e(x)), s && G.attr("data-ix-affect", 1)), f && G.addClass("w-ix-emptyfix"), v && G.css("transform-style", "preserve-3d");
          }
          for (var S = a(G), V = { omit3d: !v }, ee = 0; ee < I.length; ee++) b(S, I[ee], V);
          function K() {
            if (c) return C(F, G, Z, !0);
            V.width === "auto" && S.set({ width: "auto" }), V.height === "auto" && S.set({ height: "auto" }), y && y();
          }
          V.start ? S.then(K) : K();
        }
        function b(F, G, Z) {
          var ie = "add",
            y = "start";
          Z.start && (ie = y = "then");
          var v = G.transition;
          if (v) {
            v = v.split(",");
            for (var l = 0; l < v.length; l++) {
              var c = v[l];
              F[ie](c);
            }
          }
          var I = B(G, Z) || {};
          if ((I.width != null && (Z.width = I.width), I.height != null && (Z.height = I.height), v == null)) {
            Z.start
              ? F.then(function () {
                  var V = this.queue;
                  this.set(I), I.display && (F.redraw(), Be.redraw.up()), (this.queue = V), this.next();
                })
              : (F.set(I), I.display && (F.redraw(), Be.redraw.up()));
            var x = I.wait;
            x != null && (F.wait(x), (Z.start = !0));
          } else {
            if (I.display) {
              var S = I.display;
              delete I.display,
                Z.start
                  ? F.then(function () {
                      var V = this.queue;
                      this.set({ display: S }).redraw(), Be.redraw.up(), (this.queue = V), this.next();
                    })
                  : (F.set({ display: S }).redraw(), Be.redraw.up());
            }
            F[y](I), (Z.start = !0);
          }
        }
        function N(F, G) {
          var Z = a(F);
          if (!e.isEmptyObject(G)) {
            F.css("transition", "");
            var ie = F.css("transition");
            ie === T && (ie = Z.upstream = null), (Z.upstream = T), Z.set(B(G)), (Z.upstream = ie);
          }
        }
        function k(F, G) {
          a(F).set(B(G));
        }
        function B(F, G) {
          var Z = G && G.omit3d,
            ie = {},
            y = !1;
          for (var v in F) v !== "transition" && v !== "keysort" && ((Z && (v === "z" || v === "rotateX" || v === "rotateY" || v === "scaleZ")) || ((ie[v] = F[v]), (y = !0)));
          return y ? ie : null;
        }
        return r;
      })
    );
  });
  var Lt = g((rF, Ba) => {
    "use strict";
    var ai = Vr();
    function Ha(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var ym = window.jQuery,
      Wr = {},
      Wa = ".w-ix",
      _m = {
        reset: function (e, t) {
          ai.triggers.reset(e, t);
        },
        intro: function (e, t) {
          ai.triggers.intro(e, t), Ha(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          ai.triggers.outro(e, t), Ha(t, "COMPONENT_INACTIVE");
        },
      };
    Wr.triggers = {};
    Wr.types = { INTRO: "w-ix-intro" + Wa, OUTRO: "w-ix-outro" + Wa };
    ym.extend(Wr.triggers, _m);
    Ba.exports = Wr;
  });
  var si = g((nF, za) => {
    var bm = typeof global == "object" && global && global.Object === Object && global;
    za.exports = bm;
  });
  var ze = g((iF, Ka) => {
    var Im = si(),
      Tm = typeof self == "object" && self && self.Object === Object && self,
      wm = Im || Tm || Function("return this")();
    Ka.exports = wm;
  });
  var Pt = g((oF, ja) => {
    var xm = ze(),
      Am = xm.Symbol;
    ja.exports = Am;
  });
  var Za = g((aF, $a) => {
    var Ya = Pt(),
      Qa = Object.prototype,
      Om = Qa.hasOwnProperty,
      Sm = Qa.toString,
      ar = Ya ? Ya.toStringTag : void 0;
    function Rm(e) {
      var t = Om.call(e, ar),
        r = e[ar];
      try {
        e[ar] = void 0;
        var n = !0;
      } catch {}
      var i = Sm.call(e);
      return n && (t ? (e[ar] = r) : delete e[ar]), i;
    }
    $a.exports = Rm;
  });
  var es = g((sF, Ja) => {
    var Cm = Object.prototype,
      Lm = Cm.toString;
    function Pm(e) {
      return Lm.call(e);
    }
    Ja.exports = Pm;
  });
  var dt = g((uF, ns) => {
    var ts = Pt(),
      Nm = Za(),
      Dm = es(),
      Mm = "[object Null]",
      Fm = "[object Undefined]",
      rs = ts ? ts.toStringTag : void 0;
    function qm(e) {
      return e == null ? (e === void 0 ? Fm : Mm) : rs && rs in Object(e) ? Nm(e) : Dm(e);
    }
    ns.exports = qm;
  });
  var ui = g((cF, is) => {
    function km(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    is.exports = km;
  });
  var ci = g((lF, os) => {
    var Xm = ui(),
      Gm = Xm(Object.getPrototypeOf, Object);
    os.exports = Gm;
  });
  var at = g((fF, as) => {
    function Um(e) {
      return e != null && typeof e == "object";
    }
    as.exports = Um;
  });
  var li = g((dF, us) => {
    var Vm = dt(),
      Hm = ci(),
      Wm = at(),
      Bm = "[object Object]",
      zm = Function.prototype,
      Km = Object.prototype,
      ss = zm.toString,
      jm = Km.hasOwnProperty,
      Ym = ss.call(Object);
    function Qm(e) {
      if (!Wm(e) || Vm(e) != Bm) return !1;
      var t = Hm(e);
      if (t === null) return !0;
      var r = jm.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ss.call(r) == Ym;
    }
    us.exports = Qm;
  });
  var cs = g((fi) => {
    "use strict";
    Object.defineProperty(fi, "__esModule", { value: !0 });
    fi.default = $m;
    function $m(e) {
      var t,
        r = e.Symbol;
      return typeof r == "function" ? (r.observable ? (t = r.observable) : ((t = r("observable")), (r.observable = t))) : (t = "@@observable"), t;
    }
  });
  var ls = g((pi, di) => {
    "use strict";
    Object.defineProperty(pi, "__esModule", { value: !0 });
    var Zm = cs(),
      Jm = eE(Zm);
    function eE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Nt;
    typeof self < "u" ? (Nt = self) : typeof window < "u" ? (Nt = window) : typeof global < "u" ? (Nt = global) : typeof di < "u" ? (Nt = di) : (Nt = Function("return this")());
    var tE = (0, Jm.default)(Nt);
    pi.default = tE;
  });
  var gi = g((sr) => {
    "use strict";
    sr.__esModule = !0;
    sr.ActionTypes = void 0;
    sr.default = gs;
    var rE = li(),
      nE = ps(rE),
      iE = ls(),
      fs = ps(iE);
    function ps(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var ds = (sr.ActionTypes = { INIT: "@@redux/INIT" });
    function gs(e, t, r) {
      var n;
      if ((typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)), typeof r < "u")) {
        if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
        return r(gs)(e, t);
      }
      if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        u = a,
        s = !1;
      function f() {
        u === a && (u = a.slice());
      }
      function T() {
        return o;
      }
      function d(w) {
        if (typeof w != "function") throw new Error("Expected listener to be a function.");
        var R = !0;
        return (
          f(),
          u.push(w),
          function () {
            if (R) {
              (R = !1), f();
              var D = u.indexOf(w);
              u.splice(D, 1);
            }
          }
        );
      }
      function E(w) {
        if (!(0, nE.default)(w)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (typeof w.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (s) throw new Error("Reducers may not dispatch actions.");
        try {
          (s = !0), (o = i(o, w));
        } finally {
          s = !1;
        }
        for (var R = (a = u), A = 0; A < R.length; A++) R[A]();
        return w;
      }
      function m(w) {
        if (typeof w != "function") throw new Error("Expected the nextReducer to be a function.");
        (i = w), E({ type: ds.INIT });
      }
      function _() {
        var w,
          R = d;
        return (
          (w = {
            subscribe: function (D) {
              if (typeof D != "object") throw new TypeError("Expected the observer to be an object.");
              function P() {
                D.next && D.next(T());
              }
              P();
              var H = R(P);
              return { unsubscribe: H };
            },
          }),
          (w[fs.default] = function () {
            return this;
          }),
          w
        );
      }
      return E({ type: ds.INIT }), (n = { dispatch: E, subscribe: d, getState: T, replaceReducer: m }), (n[fs.default] = _), n;
    }
  });
  var vi = g((hi) => {
    "use strict";
    hi.__esModule = !0;
    hi.default = oE;
    function oE(e) {
      typeof console < "u" && typeof console.error == "function" && console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var ms = g((mi) => {
    "use strict";
    mi.__esModule = !0;
    mi.default = lE;
    var hs = gi(),
      aE = li(),
      vF = vs(aE),
      sE = vi(),
      mF = vs(sE);
    function vs(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function uE(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
    }
    function cE(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: hs.ActionTypes.INIT });
        if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
        var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + hs.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
      });
    }
    function lE(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var u;
      try {
        cE(r);
      } catch (s) {
        u = s;
      }
      return function () {
        var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
          T = arguments[1];
        if (u) throw u;
        if (!1) var d;
        for (var E = !1, m = {}, _ = 0; _ < o.length; _++) {
          var w = o[_],
            R = r[w],
            A = f[w],
            D = R(A, T);
          if (typeof D > "u") {
            var P = uE(w, T);
            throw new Error(P);
          }
          (m[w] = D), (E = E || D !== A);
        }
        return E ? m : f;
      };
    }
  });
  var ys = g((Ei) => {
    "use strict";
    Ei.__esModule = !0;
    Ei.default = fE;
    function Es(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function fE(e, t) {
      if (typeof e == "function") return Es(e, t);
      if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = Es(a, t));
      }
      return n;
    }
  });
  var _i = g((yi) => {
    "use strict";
    yi.__esModule = !0;
    yi.default = dE;
    function dE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var _s = g((bi) => {
    "use strict";
    bi.__esModule = !0;
    var pE =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    bi.default = mE;
    var gE = _i(),
      hE = vE(gE);
    function vE(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function mE() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var u = n(i, o, a),
            s = u.dispatch,
            f = [],
            T = {
              getState: u.getState,
              dispatch: function (E) {
                return s(E);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(T);
            })),
            (s = hE.default.apply(void 0, f)(u.dispatch)),
            pE({}, u, { dispatch: s })
          );
        };
      };
    }
  });
  var Ii = g((Ge) => {
    "use strict";
    Ge.__esModule = !0;
    Ge.compose = Ge.applyMiddleware = Ge.bindActionCreators = Ge.combineReducers = Ge.createStore = void 0;
    var EE = gi(),
      yE = Dt(EE),
      _E = ms(),
      bE = Dt(_E),
      IE = ys(),
      TE = Dt(IE),
      wE = _s(),
      xE = Dt(wE),
      AE = _i(),
      OE = Dt(AE),
      SE = vi(),
      IF = Dt(SE);
    function Dt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Ge.createStore = yE.default;
    Ge.combineReducers = bE.default;
    Ge.bindActionCreators = TE.default;
    Ge.applyMiddleware = xE.default;
    Ge.compose = OE.default;
  });
  var Ke,
    Ti,
    et,
    RE,
    CE,
    Br,
    LE,
    wi = me(() => {
      "use strict";
      (Ke = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Ti = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (et = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (RE = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (CE = { CHILDREN: "CHILDREN", SIBLINGS: "SIBLINGS", IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN" }),
        (Br = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (LE = { LEFT: "LEFT", RIGHT: "RIGHT", BOTTOM: "BOTTOM", TOP: "TOP", BOTTOM_LEFT: "BOTTOM_LEFT", BOTTOM_RIGHT: "BOTTOM_RIGHT", TOP_RIGHT: "TOP_RIGHT", TOP_LEFT: "TOP_LEFT", CLOCKWISE: "CLOCKWISE", COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE" });
    });
  var Le,
    PE,
    zr = me(() => {
      "use strict";
      (Le = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_RIVE: "PLUGIN_RIVE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (PE = { ELEMENT: "ELEMENT", ELEMENT_CLASS: "ELEMENT_CLASS", TRIGGER_ELEMENT: "TRIGGER_ELEMENT" });
    });
  var NE,
    bs = me(() => {
      "use strict";
      NE = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var DE,
    ME,
    FE,
    qE,
    kE,
    XE,
    GE,
    xi,
    Is = me(() => {
      "use strict";
      zr();
      ({ TRANSFORM_MOVE: DE, TRANSFORM_SCALE: ME, TRANSFORM_ROTATE: FE, TRANSFORM_SKEW: qE, STYLE_SIZE: kE, STYLE_FILTER: XE, STYLE_FONT_VARIATION: GE } = Le), (xi = { [DE]: !0, [ME]: !0, [FE]: !0, [qE]: !0, [kE]: !0, [XE]: !0, [GE]: !0 });
    });
  var Te = {};
  Me(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => ny,
    IX2_ANIMATION_FRAME_CHANGED: () => $E,
    IX2_CLEAR_REQUESTED: () => jE,
    IX2_ELEMENT_STATE_CHANGED: () => ry,
    IX2_EVENT_LISTENER_ADDED: () => YE,
    IX2_EVENT_STATE_CHANGED: () => QE,
    IX2_INSTANCE_ADDED: () => JE,
    IX2_INSTANCE_REMOVED: () => ty,
    IX2_INSTANCE_STARTED: () => ey,
    IX2_MEDIA_QUERIES_DEFINED: () => oy,
    IX2_PARAMETER_CHANGED: () => ZE,
    IX2_PLAYBACK_REQUESTED: () => zE,
    IX2_PREVIEW_REQUESTED: () => BE,
    IX2_RAW_DATA_IMPORTED: () => UE,
    IX2_SESSION_INITIALIZED: () => VE,
    IX2_SESSION_STARTED: () => HE,
    IX2_SESSION_STOPPED: () => WE,
    IX2_STOP_REQUESTED: () => KE,
    IX2_TEST_FRAME_RENDERED: () => ay,
    IX2_VIEWPORT_WIDTH_CHANGED: () => iy,
  });
  var UE,
    VE,
    HE,
    WE,
    BE,
    zE,
    KE,
    jE,
    YE,
    QE,
    $E,
    ZE,
    JE,
    ey,
    ty,
    ry,
    ny,
    iy,
    oy,
    ay,
    Ts = me(() => {
      "use strict";
      (UE = "IX2_RAW_DATA_IMPORTED"),
        (VE = "IX2_SESSION_INITIALIZED"),
        (HE = "IX2_SESSION_STARTED"),
        (WE = "IX2_SESSION_STOPPED"),
        (BE = "IX2_PREVIEW_REQUESTED"),
        (zE = "IX2_PLAYBACK_REQUESTED"),
        (KE = "IX2_STOP_REQUESTED"),
        (jE = "IX2_CLEAR_REQUESTED"),
        (YE = "IX2_EVENT_LISTENER_ADDED"),
        (QE = "IX2_EVENT_STATE_CHANGED"),
        ($E = "IX2_ANIMATION_FRAME_CHANGED"),
        (ZE = "IX2_PARAMETER_CHANGED"),
        (JE = "IX2_INSTANCE_ADDED"),
        (ey = "IX2_INSTANCE_STARTED"),
        (ty = "IX2_INSTANCE_REMOVED"),
        (ry = "IX2_ELEMENT_STATE_CHANGED"),
        (ny = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (iy = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (oy = "IX2_MEDIA_QUERIES_DEFINED"),
        (ay = "IX2_TEST_FRAME_RENDERED");
    });
  var Se = {};
  Me(Se, {
    ABSTRACT_NODE: () => i_,
    AUTO: () => Ky,
    BACKGROUND: () => Uy,
    BACKGROUND_COLOR: () => Gy,
    BAR_DELIMITER: () => Qy,
    BORDER_COLOR: () => Vy,
    BOUNDARY_SELECTOR: () => fy,
    CHILDREN: () => $y,
    COLON_DELIMITER: () => Yy,
    COLOR: () => Hy,
    COMMA_DELIMITER: () => jy,
    CONFIG_UNIT: () => yy,
    CONFIG_VALUE: () => hy,
    CONFIG_X_UNIT: () => vy,
    CONFIG_X_VALUE: () => dy,
    CONFIG_Y_UNIT: () => my,
    CONFIG_Y_VALUE: () => py,
    CONFIG_Z_UNIT: () => Ey,
    CONFIG_Z_VALUE: () => gy,
    DISPLAY: () => Wy,
    FILTER: () => Fy,
    FLEX: () => By,
    FONT_VARIATION_SETTINGS: () => qy,
    HEIGHT: () => Xy,
    HTML_ELEMENT: () => r_,
    IMMEDIATE_CHILDREN: () => Zy,
    IX2_ID_DELIMITER: () => sy,
    OPACITY: () => My,
    PARENT: () => e_,
    PLAIN_OBJECT: () => n_,
    PRESERVE_3D: () => t_,
    RENDER_GENERAL: () => a_,
    RENDER_PLUGIN: () => u_,
    RENDER_STYLE: () => s_,
    RENDER_TRANSFORM: () => o_,
    ROTATE_X: () => Ry,
    ROTATE_Y: () => Cy,
    ROTATE_Z: () => Ly,
    SCALE_3D: () => Sy,
    SCALE_X: () => xy,
    SCALE_Y: () => Ay,
    SCALE_Z: () => Oy,
    SIBLINGS: () => Jy,
    SKEW: () => Py,
    SKEW_X: () => Ny,
    SKEW_Y: () => Dy,
    TRANSFORM: () => _y,
    TRANSLATE_3D: () => wy,
    TRANSLATE_X: () => by,
    TRANSLATE_Y: () => Iy,
    TRANSLATE_Z: () => Ty,
    WF_PAGE: () => uy,
    WIDTH: () => ky,
    WILL_CHANGE: () => zy,
    W_MOD_IX: () => ly,
    W_MOD_JS: () => cy,
  });
  var sy,
    uy,
    cy,
    ly,
    fy,
    dy,
    py,
    gy,
    hy,
    vy,
    my,
    Ey,
    yy,
    _y,
    by,
    Iy,
    Ty,
    wy,
    xy,
    Ay,
    Oy,
    Sy,
    Ry,
    Cy,
    Ly,
    Py,
    Ny,
    Dy,
    My,
    Fy,
    qy,
    ky,
    Xy,
    Gy,
    Uy,
    Vy,
    Hy,
    Wy,
    By,
    zy,
    Ky,
    jy,
    Yy,
    Qy,
    $y,
    Zy,
    Jy,
    e_,
    t_,
    r_,
    n_,
    i_,
    o_,
    a_,
    s_,
    u_,
    ws = me(() => {
      "use strict";
      (sy = "|"),
        (uy = "data-wf-page"),
        (cy = "w-mod-js"),
        (ly = "w-mod-ix"),
        (fy = ".w-dyn-item"),
        (dy = "xValue"),
        (py = "yValue"),
        (gy = "zValue"),
        (hy = "value"),
        (vy = "xUnit"),
        (my = "yUnit"),
        (Ey = "zUnit"),
        (yy = "unit"),
        (_y = "transform"),
        (by = "translateX"),
        (Iy = "translateY"),
        (Ty = "translateZ"),
        (wy = "translate3d"),
        (xy = "scaleX"),
        (Ay = "scaleY"),
        (Oy = "scaleZ"),
        (Sy = "scale3d"),
        (Ry = "rotateX"),
        (Cy = "rotateY"),
        (Ly = "rotateZ"),
        (Py = "skew"),
        (Ny = "skewX"),
        (Dy = "skewY"),
        (My = "opacity"),
        (Fy = "filter"),
        (qy = "font-variation-settings"),
        (ky = "width"),
        (Xy = "height"),
        (Gy = "backgroundColor"),
        (Uy = "background"),
        (Vy = "borderColor"),
        (Hy = "color"),
        (Wy = "display"),
        (By = "flex"),
        (zy = "willChange"),
        (Ky = "AUTO"),
        (jy = ","),
        (Yy = ":"),
        (Qy = "|"),
        ($y = "CHILDREN"),
        (Zy = "IMMEDIATE_CHILDREN"),
        (Jy = "SIBLINGS"),
        (e_ = "PARENT"),
        (t_ = "preserve-3d"),
        (r_ = "HTML_ELEMENT"),
        (n_ = "PLAIN_OBJECT"),
        (i_ = "ABSTRACT_NODE"),
        (o_ = "RENDER_TRANSFORM"),
        (a_ = "RENDER_GENERAL"),
        (s_ = "RENDER_STYLE"),
        (u_ = "RENDER_PLUGIN");
    });
  var xs = {};
  Me(xs, { ActionAppliesTo: () => PE, ActionTypeConsts: () => Le, EventAppliesTo: () => Ti, EventBasedOn: () => et, EventContinuousMouseAxes: () => RE, EventLimitAffectedElements: () => CE, EventTypeConsts: () => Ke, IX2EngineActionTypes: () => Te, IX2EngineConstants: () => Se, InteractionTypeConsts: () => NE, QuickEffectDirectionConsts: () => LE, QuickEffectIds: () => Br, ReducedMotionTypes: () => xi });
  var Fe = me(() => {
    "use strict";
    wi();
    zr();
    bs();
    Is();
    Ts();
    ws();
    zr();
    wi();
  });
  var c_,
    As,
    Os = me(() => {
      "use strict";
      Fe();
      ({ IX2_RAW_DATA_IMPORTED: c_ } = Te),
        (As = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case c_:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Mt = g((ye) => {
    "use strict";
    Object.defineProperty(ye, "__esModule", { value: !0 });
    var l_ =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          };
    ye.clone = jr;
    ye.addLast = Cs;
    ye.addFirst = Ls;
    ye.removeLast = Ps;
    ye.removeFirst = Ns;
    ye.insert = Ds;
    ye.removeAt = Ms;
    ye.replaceAt = Fs;
    ye.getIn = Yr;
    ye.set = Qr;
    ye.setIn = $r;
    ye.update = ks;
    ye.updateIn = Xs;
    ye.merge = Gs;
    ye.mergeDeep = Us;
    ye.mergeIn = Vs;
    ye.omit = Hs;
    ye.addDefaults = Ws;
    var Ss = "INVALID_ARGS";
    function Rs(e) {
      throw new Error(e);
    }
    function Ai(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
    }
    var f_ = {}.hasOwnProperty;
    function jr(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Ai(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function qe(e, t, r) {
      var n = r;
      n == null && Rs(Ss);
      for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3; u < o; u++) a[u - 3] = arguments[u];
      for (var s = 0; s < a.length; s++) {
        var f = a[s];
        if (f != null) {
          var T = Ai(f);
          if (T.length)
            for (var d = 0; d <= T.length; d++) {
              var E = T[d];
              if (!(e && n[E] !== void 0)) {
                var m = f[E];
                t && Kr(n[E]) && Kr(m) && (m = qe(e, t, n[E], m)), !(m === void 0 || m === n[E]) && (i || ((i = !0), (n = jr(n))), (n[E] = m));
              }
            }
        }
      }
      return n;
    }
    function Kr(e) {
      var t = typeof e > "u" ? "undefined" : l_(e);
      return e != null && (t === "object" || t === "function");
    }
    function Cs(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Ls(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Ps(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Ns(e) {
      return e.length ? e.slice(1) : e;
    }
    function Ds(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Ms(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Fs(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Yr(e, t) {
      if ((!Array.isArray(t) && Rs(Ss), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Qr(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = jr(i);
      return (o[t] = r), o;
    }
    function qs(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a = Kr(e) && Kr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = qs(a, t, r, n + 1);
      }
      return Qr(e, o, i);
    }
    function $r(e, t, r) {
      return t.length ? qs(e, t, r, 0) : r;
    }
    function ks(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Qr(e, t, i);
    }
    function Xs(e, t, r) {
      var n = Yr(e, t),
        i = r(n);
      return $r(e, t, i);
    }
    function Gs(e, t, r, n, i, o) {
      for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
      return u.length ? qe.call.apply(qe, [null, !1, !1, e, t, r, n, i, o].concat(u)) : qe(!1, !1, e, t, r, n, i, o);
    }
    function Us(e, t, r, n, i, o) {
      for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
      return u.length ? qe.call.apply(qe, [null, !1, !0, e, t, r, n, i, o].concat(u)) : qe(!1, !0, e, t, r, n, i, o);
    }
    function Vs(e, t, r, n, i, o, a) {
      var u = Yr(e, t);
      u == null && (u = {});
      for (var s = void 0, f = arguments.length, T = Array(f > 7 ? f - 7 : 0), d = 7; d < f; d++) T[d - 7] = arguments[d];
      return T.length ? (s = qe.call.apply(qe, [null, !1, !1, u, r, n, i, o, a].concat(T))) : (s = qe(!1, !1, u, r, n, i, o, a)), $r(e, t, s);
    }
    function Hs(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (f_.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Ai(e), u = 0; u < a.length; u++) {
        var s = a[u];
        r.indexOf(s) >= 0 || (o[s] = e[s]);
      }
      return o;
    }
    function Ws(e, t, r, n, i, o) {
      for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), s = 6; s < a; s++) u[s - 6] = arguments[s];
      return u.length ? qe.call.apply(qe, [null, !0, !1, e, t, r, n, i, o].concat(u)) : qe(!0, !1, e, t, r, n, i, o);
    }
    var d_ = { clone: jr, addLast: Cs, addFirst: Ls, removeLast: Ps, removeFirst: Ns, insert: Ds, removeAt: Ms, replaceAt: Fs, getIn: Yr, set: Qr, setIn: $r, update: ks, updateIn: Xs, merge: Gs, mergeDeep: Us, mergeIn: Vs, omit: Hs, addDefaults: Ws };
    ye.default = d_;
  });
  var zs,
    p_,
    g_,
    h_,
    v_,
    m_,
    Bs,
    Ks,
    js = me(() => {
      "use strict";
      Fe();
      (zs = pe(Mt())),
        ({ IX2_PREVIEW_REQUESTED: p_, IX2_PLAYBACK_REQUESTED: g_, IX2_STOP_REQUESTED: h_, IX2_CLEAR_REQUESTED: v_ } = Te),
        (m_ = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Bs = Object.create(null, { [p_]: { value: "preview" }, [g_]: { value: "playback" }, [h_]: { value: "stop" }, [v_]: { value: "clear" } })),
        (Ks = (e = m_, t) => {
          if (t.type in Bs) {
            let r = [Bs[t.type]];
            return (0, zs.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Pe,
    E_,
    y_,
    __,
    b_,
    I_,
    T_,
    w_,
    x_,
    A_,
    O_,
    Ys,
    S_,
    Qs,
    $s = me(() => {
      "use strict";
      Fe();
      (Pe = pe(Mt())),
        ({ IX2_SESSION_INITIALIZED: E_, IX2_SESSION_STARTED: y_, IX2_TEST_FRAME_RENDERED: __, IX2_SESSION_STOPPED: b_, IX2_EVENT_LISTENER_ADDED: I_, IX2_EVENT_STATE_CHANGED: T_, IX2_ANIMATION_FRAME_CHANGED: w_, IX2_ACTION_LIST_PLAYBACK_CHANGED: x_, IX2_VIEWPORT_WIDTH_CHANGED: A_, IX2_MEDIA_QUERIES_DEFINED: O_ } = Te),
        (Ys = { active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1, reducedMotion: !1 }),
        (S_ = 20),
        (Qs = (e = Ys, t) => {
          switch (t.type) {
            case E_: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Pe.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
            }
            case y_:
              return (0, Pe.set)(e, "active", !0);
            case __: {
              let {
                payload: { step: r = S_ },
              } = t;
              return (0, Pe.set)(e, "tick", e.tick + r);
            }
            case b_:
              return Ys;
            case w_: {
              let {
                payload: { now: r },
              } = t;
              return (0, Pe.set)(e, "tick", r);
            }
            case I_: {
              let r = (0, Pe.addLast)(e.eventListeners, t.payload);
              return (0, Pe.set)(e, "eventListeners", r);
            }
            case T_: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Pe.setIn)(e, ["eventState", r], n);
            }
            case x_: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Pe.setIn)(e, ["playbackState", r], n);
            }
            case A_: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: u, min: s, max: f } = n[a];
                if (r >= s && r <= f) {
                  o = u;
                  break;
                }
              }
              return (0, Pe.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case O_:
              return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Js = g((VF, Zs) => {
    function R_() {
      (this.__data__ = []), (this.size = 0);
    }
    Zs.exports = R_;
  });
  var Zr = g((HF, eu) => {
    function C_(e, t) {
      return e === t || (e !== e && t !== t);
    }
    eu.exports = C_;
  });
  var ur = g((WF, tu) => {
    var L_ = Zr();
    function P_(e, t) {
      for (var r = e.length; r--; ) if (L_(e[r][0], t)) return r;
      return -1;
    }
    tu.exports = P_;
  });
  var nu = g((BF, ru) => {
    var N_ = ur(),
      D_ = Array.prototype,
      M_ = D_.splice;
    function F_(e) {
      var t = this.__data__,
        r = N_(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : M_.call(t, r, 1), --this.size, !0;
    }
    ru.exports = F_;
  });
  var ou = g((zF, iu) => {
    var q_ = ur();
    function k_(e) {
      var t = this.__data__,
        r = q_(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    iu.exports = k_;
  });
  var su = g((KF, au) => {
    var X_ = ur();
    function G_(e) {
      return X_(this.__data__, e) > -1;
    }
    au.exports = G_;
  });
  var cu = g((jF, uu) => {
    var U_ = ur();
    function V_(e, t) {
      var r = this.__data__,
        n = U_(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    uu.exports = V_;
  });
  var cr = g((YF, lu) => {
    var H_ = Js(),
      W_ = nu(),
      B_ = ou(),
      z_ = su(),
      K_ = cu();
    function Ft(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Ft.prototype.clear = H_;
    Ft.prototype.delete = W_;
    Ft.prototype.get = B_;
    Ft.prototype.has = z_;
    Ft.prototype.set = K_;
    lu.exports = Ft;
  });
  var du = g((QF, fu) => {
    var j_ = cr();
    function Y_() {
      (this.__data__ = new j_()), (this.size = 0);
    }
    fu.exports = Y_;
  });
  var gu = g(($F, pu) => {
    function Q_(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    pu.exports = Q_;
  });
  var vu = g((ZF, hu) => {
    function $_(e) {
      return this.__data__.get(e);
    }
    hu.exports = $_;
  });
  var Eu = g((JF, mu) => {
    function Z_(e) {
      return this.__data__.has(e);
    }
    mu.exports = Z_;
  });
  var tt = g((e2, yu) => {
    function J_(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    yu.exports = J_;
  });
  var Oi = g((t2, _u) => {
    var eb = dt(),
      tb = tt(),
      rb = "[object AsyncFunction]",
      nb = "[object Function]",
      ib = "[object GeneratorFunction]",
      ob = "[object Proxy]";
    function ab(e) {
      if (!tb(e)) return !1;
      var t = eb(e);
      return t == nb || t == ib || t == rb || t == ob;
    }
    _u.exports = ab;
  });
  var Iu = g((r2, bu) => {
    var sb = ze(),
      ub = sb["__core-js_shared__"];
    bu.exports = ub;
  });
  var xu = g((n2, wu) => {
    var Si = Iu(),
      Tu = (function () {
        var e = /[^.]+$/.exec((Si && Si.keys && Si.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function cb(e) {
      return !!Tu && Tu in e;
    }
    wu.exports = cb;
  });
  var Ri = g((i2, Au) => {
    var lb = Function.prototype,
      fb = lb.toString;
    function db(e) {
      if (e != null) {
        try {
          return fb.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Au.exports = db;
  });
  var Su = g((o2, Ou) => {
    var pb = Oi(),
      gb = xu(),
      hb = tt(),
      vb = Ri(),
      mb = /[\\^$.*+?()[\]{}|]/g,
      Eb = /^\[object .+?Constructor\]$/,
      yb = Function.prototype,
      _b = Object.prototype,
      bb = yb.toString,
      Ib = _b.hasOwnProperty,
      Tb = RegExp(
        "^" +
          bb
            .call(Ib)
            .replace(mb, "\\$&")
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
          "$"
      );
    function wb(e) {
      if (!hb(e) || gb(e)) return !1;
      var t = pb(e) ? Tb : Eb;
      return t.test(vb(e));
    }
    Ou.exports = wb;
  });
  var Cu = g((a2, Ru) => {
    function xb(e, t) {
      return e?.[t];
    }
    Ru.exports = xb;
  });
  var pt = g((s2, Lu) => {
    var Ab = Su(),
      Ob = Cu();
    function Sb(e, t) {
      var r = Ob(e, t);
      return Ab(r) ? r : void 0;
    }
    Lu.exports = Sb;
  });
  var Jr = g((u2, Pu) => {
    var Rb = pt(),
      Cb = ze(),
      Lb = Rb(Cb, "Map");
    Pu.exports = Lb;
  });
  var lr = g((c2, Nu) => {
    var Pb = pt(),
      Nb = Pb(Object, "create");
    Nu.exports = Nb;
  });
  var Fu = g((l2, Mu) => {
    var Du = lr();
    function Db() {
      (this.__data__ = Du ? Du(null) : {}), (this.size = 0);
    }
    Mu.exports = Db;
  });
  var ku = g((f2, qu) => {
    function Mb(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    qu.exports = Mb;
  });
  var Gu = g((d2, Xu) => {
    var Fb = lr(),
      qb = "__lodash_hash_undefined__",
      kb = Object.prototype,
      Xb = kb.hasOwnProperty;
    function Gb(e) {
      var t = this.__data__;
      if (Fb) {
        var r = t[e];
        return r === qb ? void 0 : r;
      }
      return Xb.call(t, e) ? t[e] : void 0;
    }
    Xu.exports = Gb;
  });
  var Vu = g((p2, Uu) => {
    var Ub = lr(),
      Vb = Object.prototype,
      Hb = Vb.hasOwnProperty;
    function Wb(e) {
      var t = this.__data__;
      return Ub ? t[e] !== void 0 : Hb.call(t, e);
    }
    Uu.exports = Wb;
  });
  var Wu = g((g2, Hu) => {
    var Bb = lr(),
      zb = "__lodash_hash_undefined__";
    function Kb(e, t) {
      var r = this.__data__;
      return (this.size += this.has(e) ? 0 : 1), (r[e] = Bb && t === void 0 ? zb : t), this;
    }
    Hu.exports = Kb;
  });
  var zu = g((h2, Bu) => {
    var jb = Fu(),
      Yb = ku(),
      Qb = Gu(),
      $b = Vu(),
      Zb = Wu();
    function qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    qt.prototype.clear = jb;
    qt.prototype.delete = Yb;
    qt.prototype.get = Qb;
    qt.prototype.has = $b;
    qt.prototype.set = Zb;
    Bu.exports = qt;
  });
  var Yu = g((v2, ju) => {
    var Ku = zu(),
      Jb = cr(),
      eI = Jr();
    function tI() {
      (this.size = 0), (this.__data__ = { hash: new Ku(), map: new (eI || Jb)(), string: new Ku() });
    }
    ju.exports = tI;
  });
  var $u = g((m2, Qu) => {
    function rI(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
    }
    Qu.exports = rI;
  });
  var fr = g((E2, Zu) => {
    var nI = $u();
    function iI(e, t) {
      var r = e.__data__;
      return nI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Zu.exports = iI;
  });
  var ec = g((y2, Ju) => {
    var oI = fr();
    function aI(e) {
      var t = oI(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Ju.exports = aI;
  });
  var rc = g((_2, tc) => {
    var sI = fr();
    function uI(e) {
      return sI(this, e).get(e);
    }
    tc.exports = uI;
  });
  var ic = g((b2, nc) => {
    var cI = fr();
    function lI(e) {
      return cI(this, e).has(e);
    }
    nc.exports = lI;
  });
  var ac = g((I2, oc) => {
    var fI = fr();
    function dI(e, t) {
      var r = fI(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    oc.exports = dI;
  });
  var en = g((T2, sc) => {
    var pI = Yu(),
      gI = ec(),
      hI = rc(),
      vI = ic(),
      mI = ac();
    function kt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    kt.prototype.clear = pI;
    kt.prototype.delete = gI;
    kt.prototype.get = hI;
    kt.prototype.has = vI;
    kt.prototype.set = mI;
    sc.exports = kt;
  });
  var cc = g((w2, uc) => {
    var EI = cr(),
      yI = Jr(),
      _I = en(),
      bI = 200;
    function II(e, t) {
      var r = this.__data__;
      if (r instanceof EI) {
        var n = r.__data__;
        if (!yI || n.length < bI - 1) return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new _I(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    uc.exports = II;
  });
  var Ci = g((x2, lc) => {
    var TI = cr(),
      wI = du(),
      xI = gu(),
      AI = vu(),
      OI = Eu(),
      SI = cc();
    function Xt(e) {
      var t = (this.__data__ = new TI(e));
      this.size = t.size;
    }
    Xt.prototype.clear = wI;
    Xt.prototype.delete = xI;
    Xt.prototype.get = AI;
    Xt.prototype.has = OI;
    Xt.prototype.set = SI;
    lc.exports = Xt;
  });
  var dc = g((A2, fc) => {
    var RI = "__lodash_hash_undefined__";
    function CI(e) {
      return this.__data__.set(e, RI), this;
    }
    fc.exports = CI;
  });
  var gc = g((O2, pc) => {
    function LI(e) {
      return this.__data__.has(e);
    }
    pc.exports = LI;
  });
  var vc = g((S2, hc) => {
    var PI = en(),
      NI = dc(),
      DI = gc();
    function tn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new PI(); ++t < r; ) this.add(e[t]);
    }
    tn.prototype.add = tn.prototype.push = NI;
    tn.prototype.has = DI;
    hc.exports = tn;
  });
  var Ec = g((R2, mc) => {
    function MI(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
      return !1;
    }
    mc.exports = MI;
  });
  var _c = g((C2, yc) => {
    function FI(e, t) {
      return e.has(t);
    }
    yc.exports = FI;
  });
  var Li = g((L2, bc) => {
    var qI = vc(),
      kI = Ec(),
      XI = _c(),
      GI = 1,
      UI = 2;
    function VI(e, t, r, n, i, o) {
      var a = r & GI,
        u = e.length,
        s = t.length;
      if (u != s && !(a && s > u)) return !1;
      var f = o.get(e),
        T = o.get(t);
      if (f && T) return f == t && T == e;
      var d = -1,
        E = !0,
        m = r & UI ? new qI() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < u; ) {
        var _ = e[d],
          w = t[d];
        if (n) var R = a ? n(w, _, d, t, e, o) : n(_, w, d, e, t, o);
        if (R !== void 0) {
          if (R) continue;
          E = !1;
          break;
        }
        if (m) {
          if (
            !kI(t, function (A, D) {
              if (!XI(m, D) && (_ === A || i(_, A, r, n, o))) return m.push(D);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(_ === w || i(_, w, r, n, o))) {
          E = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), E;
    }
    bc.exports = VI;
  });
  var Tc = g((P2, Ic) => {
    var HI = ze(),
      WI = HI.Uint8Array;
    Ic.exports = WI;
  });
  var xc = g((N2, wc) => {
    function BI(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    wc.exports = BI;
  });
  var Oc = g((D2, Ac) => {
    function zI(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Ac.exports = zI;
  });
  var Pc = g((M2, Lc) => {
    var Sc = Pt(),
      Rc = Tc(),
      KI = Zr(),
      jI = Li(),
      YI = xc(),
      QI = Oc(),
      $I = 1,
      ZI = 2,
      JI = "[object Boolean]",
      eT = "[object Date]",
      tT = "[object Error]",
      rT = "[object Map]",
      nT = "[object Number]",
      iT = "[object RegExp]",
      oT = "[object Set]",
      aT = "[object String]",
      sT = "[object Symbol]",
      uT = "[object ArrayBuffer]",
      cT = "[object DataView]",
      Cc = Sc ? Sc.prototype : void 0,
      Pi = Cc ? Cc.valueOf : void 0;
    function lT(e, t, r, n, i, o, a) {
      switch (r) {
        case cT:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          (e = e.buffer), (t = t.buffer);
        case uT:
          return !(e.byteLength != t.byteLength || !o(new Rc(e), new Rc(t)));
        case JI:
        case eT:
        case nT:
          return KI(+e, +t);
        case tT:
          return e.name == t.name && e.message == t.message;
        case iT:
        case aT:
          return e == t + "";
        case rT:
          var u = YI;
        case oT:
          var s = n & $I;
          if ((u || (u = QI), e.size != t.size && !s)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= ZI), a.set(e, t);
          var T = jI(u(e), u(t), n, i, o, a);
          return a.delete(e), T;
        case sT:
          if (Pi) return Pi.call(e) == Pi.call(t);
      }
      return !1;
    }
    Lc.exports = lT;
  });
  var rn = g((F2, Nc) => {
    function fT(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Nc.exports = fT;
  });
  var xe = g((q2, Dc) => {
    var dT = Array.isArray;
    Dc.exports = dT;
  });
  var Ni = g((k2, Mc) => {
    var pT = rn(),
      gT = xe();
    function hT(e, t, r) {
      var n = t(e);
      return gT(e) ? n : pT(n, r(e));
    }
    Mc.exports = hT;
  });
  var qc = g((X2, Fc) => {
    function vT(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Fc.exports = vT;
  });
  var Di = g((G2, kc) => {
    function mT() {
      return [];
    }
    kc.exports = mT;
  });
  var Mi = g((U2, Gc) => {
    var ET = qc(),
      yT = Di(),
      _T = Object.prototype,
      bT = _T.propertyIsEnumerable,
      Xc = Object.getOwnPropertySymbols,
      IT = Xc
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                ET(Xc(e), function (t) {
                  return bT.call(e, t);
                }));
          }
        : yT;
    Gc.exports = IT;
  });
  var Vc = g((V2, Uc) => {
    function TT(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Uc.exports = TT;
  });
  var Wc = g((H2, Hc) => {
    var wT = dt(),
      xT = at(),
      AT = "[object Arguments]";
    function OT(e) {
      return xT(e) && wT(e) == AT;
    }
    Hc.exports = OT;
  });
  var dr = g((W2, Kc) => {
    var Bc = Wc(),
      ST = at(),
      zc = Object.prototype,
      RT = zc.hasOwnProperty,
      CT = zc.propertyIsEnumerable,
      LT = Bc(
        (function () {
          return arguments;
        })()
      )
        ? Bc
        : function (e) {
            return ST(e) && RT.call(e, "callee") && !CT.call(e, "callee");
          };
    Kc.exports = LT;
  });
  var Yc = g((B2, jc) => {
    function PT() {
      return !1;
    }
    jc.exports = PT;
  });
  var nn = g((pr, Gt) => {
    var NT = ze(),
      DT = Yc(),
      Zc = typeof pr == "object" && pr && !pr.nodeType && pr,
      Qc = Zc && typeof Gt == "object" && Gt && !Gt.nodeType && Gt,
      MT = Qc && Qc.exports === Zc,
      $c = MT ? NT.Buffer : void 0,
      FT = $c ? $c.isBuffer : void 0,
      qT = FT || DT;
    Gt.exports = qT;
  });
  var on = g((z2, Jc) => {
    var kT = 9007199254740991,
      XT = /^(?:0|[1-9]\d*)$/;
    function GT(e, t) {
      var r = typeof e;
      return (t = t ?? kT), !!t && (r == "number" || (r != "symbol" && XT.test(e))) && e > -1 && e % 1 == 0 && e < t;
    }
    Jc.exports = GT;
  });
  var an = g((K2, el) => {
    var UT = 9007199254740991;
    function VT(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= UT;
    }
    el.exports = VT;
  });
  var rl = g((j2, tl) => {
    var HT = dt(),
      WT = an(),
      BT = at(),
      zT = "[object Arguments]",
      KT = "[object Array]",
      jT = "[object Boolean]",
      YT = "[object Date]",
      QT = "[object Error]",
      $T = "[object Function]",
      ZT = "[object Map]",
      JT = "[object Number]",
      ew = "[object Object]",
      tw = "[object RegExp]",
      rw = "[object Set]",
      nw = "[object String]",
      iw = "[object WeakMap]",
      ow = "[object ArrayBuffer]",
      aw = "[object DataView]",
      sw = "[object Float32Array]",
      uw = "[object Float64Array]",
      cw = "[object Int8Array]",
      lw = "[object Int16Array]",
      fw = "[object Int32Array]",
      dw = "[object Uint8Array]",
      pw = "[object Uint8ClampedArray]",
      gw = "[object Uint16Array]",
      hw = "[object Uint32Array]",
      ve = {};
    ve[sw] = ve[uw] = ve[cw] = ve[lw] = ve[fw] = ve[dw] = ve[pw] = ve[gw] = ve[hw] = !0;
    ve[zT] = ve[KT] = ve[ow] = ve[jT] = ve[aw] = ve[YT] = ve[QT] = ve[$T] = ve[ZT] = ve[JT] = ve[ew] = ve[tw] = ve[rw] = ve[nw] = ve[iw] = !1;
    function vw(e) {
      return BT(e) && WT(e.length) && !!ve[HT(e)];
    }
    tl.exports = vw;
  });
  var il = g((Y2, nl) => {
    function mw(e) {
      return function (t) {
        return e(t);
      };
    }
    nl.exports = mw;
  });
  var al = g((gr, Ut) => {
    var Ew = si(),
      ol = typeof gr == "object" && gr && !gr.nodeType && gr,
      hr = ol && typeof Ut == "object" && Ut && !Ut.nodeType && Ut,
      yw = hr && hr.exports === ol,
      Fi = yw && Ew.process,
      _w = (function () {
        try {
          var e = hr && hr.require && hr.require("util").types;
          return e || (Fi && Fi.binding && Fi.binding("util"));
        } catch {}
      })();
    Ut.exports = _w;
  });
  var sn = g((Q2, cl) => {
    var bw = rl(),
      Iw = il(),
      sl = al(),
      ul = sl && sl.isTypedArray,
      Tw = ul ? Iw(ul) : bw;
    cl.exports = Tw;
  });
  var qi = g(($2, ll) => {
    var ww = Vc(),
      xw = dr(),
      Aw = xe(),
      Ow = nn(),
      Sw = on(),
      Rw = sn(),
      Cw = Object.prototype,
      Lw = Cw.hasOwnProperty;
    function Pw(e, t) {
      var r = Aw(e),
        n = !r && xw(e),
        i = !r && !n && Ow(e),
        o = !r && !n && !i && Rw(e),
        a = r || n || i || o,
        u = a ? ww(e.length, String) : [],
        s = u.length;
      for (var f in e) (t || Lw.call(e, f)) && !(a && (f == "length" || (i && (f == "offset" || f == "parent")) || (o && (f == "buffer" || f == "byteLength" || f == "byteOffset")) || Sw(f, s))) && u.push(f);
      return u;
    }
    ll.exports = Pw;
  });
  var un = g((Z2, fl) => {
    var Nw = Object.prototype;
    function Dw(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || Nw;
      return e === r;
    }
    fl.exports = Dw;
  });
  var pl = g((J2, dl) => {
    var Mw = ui(),
      Fw = Mw(Object.keys, Object);
    dl.exports = Fw;
  });
  var cn = g((eq, gl) => {
    var qw = un(),
      kw = pl(),
      Xw = Object.prototype,
      Gw = Xw.hasOwnProperty;
    function Uw(e) {
      if (!qw(e)) return kw(e);
      var t = [];
      for (var r in Object(e)) Gw.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    gl.exports = Uw;
  });
  var bt = g((tq, hl) => {
    var Vw = Oi(),
      Hw = an();
    function Ww(e) {
      return e != null && Hw(e.length) && !Vw(e);
    }
    hl.exports = Ww;
  });
  var vr = g((rq, vl) => {
    var Bw = qi(),
      zw = cn(),
      Kw = bt();
    function jw(e) {
      return Kw(e) ? Bw(e) : zw(e);
    }
    vl.exports = jw;
  });
  var El = g((nq, ml) => {
    var Yw = Ni(),
      Qw = Mi(),
      $w = vr();
    function Zw(e) {
      return Yw(e, $w, Qw);
    }
    ml.exports = Zw;
  });
  var bl = g((iq, _l) => {
    var yl = El(),
      Jw = 1,
      e0 = Object.prototype,
      t0 = e0.hasOwnProperty;
    function r0(e, t, r, n, i, o) {
      var a = r & Jw,
        u = yl(e),
        s = u.length,
        f = yl(t),
        T = f.length;
      if (s != T && !a) return !1;
      for (var d = s; d--; ) {
        var E = u[d];
        if (!(a ? E in t : t0.call(t, E))) return !1;
      }
      var m = o.get(e),
        _ = o.get(t);
      if (m && _) return m == t && _ == e;
      var w = !0;
      o.set(e, t), o.set(t, e);
      for (var R = a; ++d < s; ) {
        E = u[d];
        var A = e[E],
          D = t[E];
        if (n) var P = a ? n(D, A, E, t, e, o) : n(A, D, E, e, t, o);
        if (!(P === void 0 ? A === D || i(A, D, r, n, o) : P)) {
          w = !1;
          break;
        }
        R || (R = E == "constructor");
      }
      if (w && !R) {
        var H = e.constructor,
          z = t.constructor;
        H != z && "constructor" in e && "constructor" in t && !(typeof H == "function" && H instanceof H && typeof z == "function" && z instanceof z) && (w = !1);
      }
      return o.delete(e), o.delete(t), w;
    }
    _l.exports = r0;
  });
  var Tl = g((oq, Il) => {
    var n0 = pt(),
      i0 = ze(),
      o0 = n0(i0, "DataView");
    Il.exports = o0;
  });
  var xl = g((aq, wl) => {
    var a0 = pt(),
      s0 = ze(),
      u0 = a0(s0, "Promise");
    wl.exports = u0;
  });
  var Ol = g((sq, Al) => {
    var c0 = pt(),
      l0 = ze(),
      f0 = c0(l0, "Set");
    Al.exports = f0;
  });
  var ki = g((uq, Sl) => {
    var d0 = pt(),
      p0 = ze(),
      g0 = d0(p0, "WeakMap");
    Sl.exports = g0;
  });
  var ln = g((cq, Ml) => {
    var Xi = Tl(),
      Gi = Jr(),
      Ui = xl(),
      Vi = Ol(),
      Hi = ki(),
      Dl = dt(),
      Vt = Ri(),
      Rl = "[object Map]",
      h0 = "[object Object]",
      Cl = "[object Promise]",
      Ll = "[object Set]",
      Pl = "[object WeakMap]",
      Nl = "[object DataView]",
      v0 = Vt(Xi),
      m0 = Vt(Gi),
      E0 = Vt(Ui),
      y0 = Vt(Vi),
      _0 = Vt(Hi),
      It = Dl;
    ((Xi && It(new Xi(new ArrayBuffer(1))) != Nl) || (Gi && It(new Gi()) != Rl) || (Ui && It(Ui.resolve()) != Cl) || (Vi && It(new Vi()) != Ll) || (Hi && It(new Hi()) != Pl)) &&
      (It = function (e) {
        var t = Dl(e),
          r = t == h0 ? e.constructor : void 0,
          n = r ? Vt(r) : "";
        if (n)
          switch (n) {
            case v0:
              return Nl;
            case m0:
              return Rl;
            case E0:
              return Cl;
            case y0:
              return Ll;
            case _0:
              return Pl;
          }
        return t;
      });
    Ml.exports = It;
  });
  var Hl = g((lq, Vl) => {
    var Wi = Ci(),
      b0 = Li(),
      I0 = Pc(),
      T0 = bl(),
      Fl = ln(),
      ql = xe(),
      kl = nn(),
      w0 = sn(),
      x0 = 1,
      Xl = "[object Arguments]",
      Gl = "[object Array]",
      fn = "[object Object]",
      A0 = Object.prototype,
      Ul = A0.hasOwnProperty;
    function O0(e, t, r, n, i, o) {
      var a = ql(e),
        u = ql(t),
        s = a ? Gl : Fl(e),
        f = u ? Gl : Fl(t);
      (s = s == Xl ? fn : s), (f = f == Xl ? fn : f);
      var T = s == fn,
        d = f == fn,
        E = s == f;
      if (E && kl(e)) {
        if (!kl(t)) return !1;
        (a = !0), (T = !1);
      }
      if (E && !T) return o || (o = new Wi()), a || w0(e) ? b0(e, t, r, n, i, o) : I0(e, t, s, r, n, i, o);
      if (!(r & x0)) {
        var m = T && Ul.call(e, "__wrapped__"),
          _ = d && Ul.call(t, "__wrapped__");
        if (m || _) {
          var w = m ? e.value() : e,
            R = _ ? t.value() : t;
          return o || (o = new Wi()), i(w, R, r, n, o);
        }
      }
      return E ? (o || (o = new Wi()), T0(e, t, r, n, i, o)) : !1;
    }
    Vl.exports = O0;
  });
  var Bi = g((fq, zl) => {
    var S0 = Hl(),
      Wl = at();
    function Bl(e, t, r, n, i) {
      return e === t ? !0 : e == null || t == null || (!Wl(e) && !Wl(t)) ? e !== e && t !== t : S0(e, t, r, n, Bl, i);
    }
    zl.exports = Bl;
  });
  var jl = g((dq, Kl) => {
    var R0 = Ci(),
      C0 = Bi(),
      L0 = 1,
      P0 = 2;
    function N0(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var u = r[i];
        if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        u = r[i];
        var s = u[0],
          f = e[s],
          T = u[1];
        if (a && u[2]) {
          if (f === void 0 && !(s in e)) return !1;
        } else {
          var d = new R0();
          if (n) var E = n(f, T, s, e, t, d);
          if (!(E === void 0 ? C0(T, f, L0 | P0, n, d) : E)) return !1;
        }
      }
      return !0;
    }
    Kl.exports = N0;
  });
  var zi = g((pq, Yl) => {
    var D0 = tt();
    function M0(e) {
      return e === e && !D0(e);
    }
    Yl.exports = M0;
  });
  var $l = g((gq, Ql) => {
    var F0 = zi(),
      q0 = vr();
    function k0(e) {
      for (var t = q0(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, F0(i)];
      }
      return t;
    }
    Ql.exports = k0;
  });
  var Ki = g((hq, Zl) => {
    function X0(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Zl.exports = X0;
  });
  var ef = g((vq, Jl) => {
    var G0 = jl(),
      U0 = $l(),
      V0 = Ki();
    function H0(e) {
      var t = U0(e);
      return t.length == 1 && t[0][2]
        ? V0(t[0][0], t[0][1])
        : function (r) {
            return r === e || G0(r, e, t);
          };
    }
    Jl.exports = H0;
  });
  var mr = g((mq, tf) => {
    var W0 = dt(),
      B0 = at(),
      z0 = "[object Symbol]";
    function K0(e) {
      return typeof e == "symbol" || (B0(e) && W0(e) == z0);
    }
    tf.exports = K0;
  });
  var dn = g((Eq, rf) => {
    var j0 = xe(),
      Y0 = mr(),
      Q0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      $0 = /^\w*$/;
    function Z0(e, t) {
      if (j0(e)) return !1;
      var r = typeof e;
      return r == "number" || r == "symbol" || r == "boolean" || e == null || Y0(e) ? !0 : $0.test(e) || !Q0.test(e) || (t != null && e in Object(t));
    }
    rf.exports = Z0;
  });
  var af = g((yq, of) => {
    var nf = en(),
      J0 = "Expected a function";
    function ji(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function")) throw new TypeError(J0);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ji.Cache || nf)()), r;
    }
    ji.Cache = nf;
    of.exports = ji;
  });
  var uf = g((_q, sf) => {
    var ex = af(),
      tx = 500;
    function rx(e) {
      var t = ex(e, function (n) {
          return r.size === tx && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    sf.exports = rx;
  });
  var lf = g((bq, cf) => {
    var nx = uf(),
      ix = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      ox = /\\(\\)?/g,
      ax = nx(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(ix, function (r, n, i, o) {
            t.push(i ? o.replace(ox, "$1") : n || r);
          }),
          t
        );
      });
    cf.exports = ax;
  });
  var Yi = g((Iq, ff) => {
    function sx(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; ) i[r] = t(e[r], r, e);
      return i;
    }
    ff.exports = sx;
  });
  var mf = g((Tq, vf) => {
    var df = Pt(),
      ux = Yi(),
      cx = xe(),
      lx = mr(),
      fx = 1 / 0,
      pf = df ? df.prototype : void 0,
      gf = pf ? pf.toString : void 0;
    function hf(e) {
      if (typeof e == "string") return e;
      if (cx(e)) return ux(e, hf) + "";
      if (lx(e)) return gf ? gf.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -fx ? "-0" : t;
    }
    vf.exports = hf;
  });
  var yf = g((wq, Ef) => {
    var dx = mf();
    function px(e) {
      return e == null ? "" : dx(e);
    }
    Ef.exports = px;
  });
  var Er = g((xq, _f) => {
    var gx = xe(),
      hx = dn(),
      vx = lf(),
      mx = yf();
    function Ex(e, t) {
      return gx(e) ? e : hx(e, t) ? [e] : vx(mx(e));
    }
    _f.exports = Ex;
  });
  var Ht = g((Aq, bf) => {
    var yx = mr(),
      _x = 1 / 0;
    function bx(e) {
      if (typeof e == "string" || yx(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -_x ? "-0" : t;
    }
    bf.exports = bx;
  });
  var pn = g((Oq, If) => {
    var Ix = Er(),
      Tx = Ht();
    function wx(e, t) {
      t = Ix(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[Tx(t[r++])];
      return r && r == n ? e : void 0;
    }
    If.exports = wx;
  });
  var gn = g((Sq, Tf) => {
    var xx = pn();
    function Ax(e, t, r) {
      var n = e == null ? void 0 : xx(e, t);
      return n === void 0 ? r : n;
    }
    Tf.exports = Ax;
  });
  var xf = g((Rq, wf) => {
    function Ox(e, t) {
      return e != null && t in Object(e);
    }
    wf.exports = Ox;
  });
  var Of = g((Cq, Af) => {
    var Sx = Er(),
      Rx = dr(),
      Cx = xe(),
      Lx = on(),
      Px = an(),
      Nx = Ht();
    function Dx(e, t, r) {
      t = Sx(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = Nx(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i ? o : ((i = e == null ? 0 : e.length), !!i && Px(i) && Lx(a, i) && (Cx(e) || Rx(e)));
    }
    Af.exports = Dx;
  });
  var Rf = g((Lq, Sf) => {
    var Mx = xf(),
      Fx = Of();
    function qx(e, t) {
      return e != null && Fx(e, t, Mx);
    }
    Sf.exports = qx;
  });
  var Lf = g((Pq, Cf) => {
    var kx = Bi(),
      Xx = gn(),
      Gx = Rf(),
      Ux = dn(),
      Vx = zi(),
      Hx = Ki(),
      Wx = Ht(),
      Bx = 1,
      zx = 2;
    function Kx(e, t) {
      return Ux(e) && Vx(t)
        ? Hx(Wx(e), t)
        : function (r) {
            var n = Xx(r, e);
            return n === void 0 && n === t ? Gx(r, e) : kx(t, n, Bx | zx);
          };
    }
    Cf.exports = Kx;
  });
  var hn = g((Nq, Pf) => {
    function jx(e) {
      return e;
    }
    Pf.exports = jx;
  });
  var Qi = g((Dq, Nf) => {
    function Yx(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Nf.exports = Yx;
  });
  var Mf = g((Mq, Df) => {
    var Qx = pn();
    function $x(e) {
      return function (t) {
        return Qx(t, e);
      };
    }
    Df.exports = $x;
  });
  var qf = g((Fq, Ff) => {
    var Zx = Qi(),
      Jx = Mf(),
      eA = dn(),
      tA = Ht();
    function rA(e) {
      return eA(e) ? Zx(tA(e)) : Jx(e);
    }
    Ff.exports = rA;
  });
  var gt = g((qq, kf) => {
    var nA = ef(),
      iA = Lf(),
      oA = hn(),
      aA = xe(),
      sA = qf();
    function uA(e) {
      return typeof e == "function" ? e : e == null ? oA : typeof e == "object" ? (aA(e) ? iA(e[0], e[1]) : nA(e)) : sA(e);
    }
    kf.exports = uA;
  });
  var $i = g((kq, Xf) => {
    var cA = gt(),
      lA = bt(),
      fA = vr();
    function dA(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!lA(t)) {
          var o = cA(r, 3);
          (t = fA(t)),
            (r = function (u) {
              return o(i[u], u, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Xf.exports = dA;
  });
  var Zi = g((Xq, Gf) => {
    function pA(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; ) if (t(e[o], o, e)) return o;
      return -1;
    }
    Gf.exports = pA;
  });
  var Vf = g((Gq, Uf) => {
    var gA = /\s/;
    function hA(e) {
      for (var t = e.length; t-- && gA.test(e.charAt(t)); );
      return t;
    }
    Uf.exports = hA;
  });
  var Wf = g((Uq, Hf) => {
    var vA = Vf(),
      mA = /^\s+/;
    function EA(e) {
      return e && e.slice(0, vA(e) + 1).replace(mA, "");
    }
    Hf.exports = EA;
  });
  var vn = g((Vq, Kf) => {
    var yA = Wf(),
      Bf = tt(),
      _A = mr(),
      zf = 0 / 0,
      bA = /^[-+]0x[0-9a-f]+$/i,
      IA = /^0b[01]+$/i,
      TA = /^0o[0-7]+$/i,
      wA = parseInt;
    function xA(e) {
      if (typeof e == "number") return e;
      if (_A(e)) return zf;
      if (Bf(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Bf(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = yA(e);
      var r = IA.test(e);
      return r || TA.test(e) ? wA(e.slice(2), r ? 2 : 8) : bA.test(e) ? zf : +e;
    }
    Kf.exports = xA;
  });
  var Qf = g((Hq, Yf) => {
    var AA = vn(),
      jf = 1 / 0,
      OA = 17976931348623157e292;
    function SA(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = AA(e)), e === jf || e === -jf)) {
        var t = e < 0 ? -1 : 1;
        return t * OA;
      }
      return e === e ? e : 0;
    }
    Yf.exports = SA;
  });
  var Ji = g((Wq, $f) => {
    var RA = Qf();
    function CA(e) {
      var t = RA(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    $f.exports = CA;
  });
  var Jf = g((Bq, Zf) => {
    var LA = Zi(),
      PA = gt(),
      NA = Ji(),
      DA = Math.max;
    function MA(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : NA(r);
      return i < 0 && (i = DA(n + i, 0)), LA(e, PA(t, 3), i);
    }
    Zf.exports = MA;
  });
  var eo = g((zq, ed) => {
    var FA = $i(),
      qA = Jf(),
      kA = FA(qA);
    ed.exports = kA;
  });
  var nd = {};
  Me(nd, { ELEMENT_MATCHES: () => XA, FLEX_PREFIXED: () => to, IS_BROWSER_ENV: () => je, TRANSFORM_PREFIXED: () => ht, TRANSFORM_STYLE_PREFIXED: () => En, withBrowser: () => mn });
  var rd,
    je,
    mn,
    XA,
    to,
    ht,
    td,
    En,
    yn = me(() => {
      "use strict";
      (rd = pe(eo())),
        (je = typeof window < "u"),
        (mn = (e, t) => (je ? e() : t)),
        (XA = mn(() => (0, rd.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], (e) => e in Element.prototype))),
        (to = mn(() => {
          let e = document.createElement("i"),
            t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (ht = mn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (td = ht.split("transform")[0]),
        (En = td ? td + "TransformStyle" : "transformStyle");
    });
  var ro = g((Kq, ud) => {
    var GA = 4,
      UA = 0.001,
      VA = 1e-7,
      HA = 10,
      yr = 11,
      _n = 1 / (yr - 1),
      WA = typeof Float32Array == "function";
    function id(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function od(e, t) {
      return 3 * t - 6 * e;
    }
    function ad(e) {
      return 3 * e;
    }
    function bn(e, t, r) {
      return ((id(t, r) * e + od(t, r)) * e + ad(t)) * e;
    }
    function sd(e, t, r) {
      return 3 * id(t, r) * e * e + 2 * od(t, r) * e + ad(t);
    }
    function BA(e, t, r, n, i) {
      var o,
        a,
        u = 0;
      do (a = t + (r - t) / 2), (o = bn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > VA && ++u < HA);
      return a;
    }
    function zA(e, t, r, n) {
      for (var i = 0; i < GA; ++i) {
        var o = sd(t, r, n);
        if (o === 0) return t;
        var a = bn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    ud.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
      var o = WA ? new Float32Array(yr) : new Array(yr);
      if (t !== r || n !== i) for (var a = 0; a < yr; ++a) o[a] = bn(a * _n, t, n);
      function u(s) {
        for (var f = 0, T = 1, d = yr - 1; T !== d && o[T] <= s; ++T) f += _n;
        --T;
        var E = (s - o[T]) / (o[T + 1] - o[T]),
          m = f + E * _n,
          _ = sd(m, t, n);
        return _ >= UA ? zA(s, m, t, n) : _ === 0 ? m : BA(s, f, f + _n, t, n);
      }
      return function (f) {
        return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : bn(u(f), r, i);
      };
    };
  });
  var br = {};
  Me(br, {
    bounce: () => SO,
    bouncePast: () => RO,
    ease: () => KA,
    easeIn: () => jA,
    easeInOut: () => QA,
    easeOut: () => YA,
    inBack: () => yO,
    inCirc: () => hO,
    inCubic: () => eO,
    inElastic: () => IO,
    inExpo: () => dO,
    inOutBack: () => bO,
    inOutCirc: () => mO,
    inOutCubic: () => rO,
    inOutElastic: () => wO,
    inOutExpo: () => gO,
    inOutQuad: () => JA,
    inOutQuart: () => oO,
    inOutQuint: () => uO,
    inOutSine: () => fO,
    inQuad: () => $A,
    inQuart: () => nO,
    inQuint: () => aO,
    inSine: () => cO,
    outBack: () => _O,
    outBounce: () => EO,
    outCirc: () => vO,
    outCubic: () => tO,
    outElastic: () => TO,
    outExpo: () => pO,
    outQuad: () => ZA,
    outQuart: () => iO,
    outQuint: () => sO,
    outSine: () => lO,
    swingFrom: () => AO,
    swingFromTo: () => xO,
    swingTo: () => OO,
  });
  function $A(e) {
    return Math.pow(e, 2);
  }
  function ZA(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function JA(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function eO(e) {
    return Math.pow(e, 3);
  }
  function tO(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function rO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function nO(e) {
    return Math.pow(e, 4);
  }
  function iO(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function oO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function aO(e) {
    return Math.pow(e, 5);
  }
  function sO(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function uO(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function cO(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function lO(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function fO(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function dO(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function pO(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function gO(e) {
    return e === 0 ? 0 : e === 1 ? 1 : (e /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function hO(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function vO(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function mO(e) {
    return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function EO(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function yO(e) {
    let t = st;
    return e * e * ((t + 1) * e - t);
  }
  function _O(e) {
    let t = st;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function bO(e) {
    let t = st;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function IO(e) {
    let t = st,
      r = 0,
      n = 1;
    return e === 0 ? 0 : e === 1 ? 1 : (r || (r = 0.3), n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r)));
  }
  function TO(e) {
    let t = st,
      r = 0,
      n = 1;
    return e === 0 ? 0 : e === 1 ? 1 : (r || (r = 0.3), n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)), n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function wO(e) {
    let t = st,
      r = 0,
      n = 1;
    return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = 0.3 * 1.5), n < 1 ? ((n = 1), (t = r / 4)) : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)), e < 1 ? -0.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(((e - t) * (2 * Math.PI)) / r) * 0.5 + 1);
  }
  function xO(e) {
    let t = st;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function AO(e) {
    let t = st;
    return e * e * ((t + 1) * e - t);
  }
  function OO(e) {
    let t = st;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function SO(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function RO(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var _r,
    st,
    KA,
    jA,
    YA,
    QA,
    no = me(() => {
      "use strict";
      (_r = pe(ro())), (st = 1.70158), (KA = (0, _r.default)(0.25, 0.1, 0.25, 1)), (jA = (0, _r.default)(0.42, 0, 1, 1)), (YA = (0, _r.default)(0, 0, 0.58, 1)), (QA = (0, _r.default)(0.42, 0, 0.58, 1));
    });
  var ld = {};
  Me(ld, { applyEasing: () => LO, createBezierEasing: () => CO, optimizeFloat: () => Ir });
  function Ir(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function CO(e) {
    return (0, cd.default)(...e);
  }
  function LO(e, t, r) {
    return t === 0 ? 0 : t === 1 ? 1 : Ir(r ? (t > 0 ? r(t) : t) : t > 0 && e && br[e] ? br[e](t) : t);
  }
  var cd,
    io = me(() => {
      "use strict";
      no();
      cd = pe(ro());
    });
  var pd = {};
  Me(pd, { createElementState: () => dd, ixElements: () => BO, mergeActionState: () => oo });
  function dd(e, t, r, n, i) {
    let o = r === PO ? (0, Wt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Wt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function oo(e, t, r, n, i) {
    let o = KO(i);
    return (0, Wt.mergeIn)(e, [t, WO, r], n, o);
  }
  function KO(e) {
    let { config: t } = e;
    return zO.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        u = t[o];
      return a != null && u != null && (r[o] = u), r;
    }, {});
  }
  var Wt,
    Yq,
    PO,
    Qq,
    NO,
    DO,
    MO,
    FO,
    qO,
    kO,
    XO,
    GO,
    UO,
    VO,
    HO,
    fd,
    WO,
    BO,
    zO,
    gd = me(() => {
      "use strict";
      Wt = pe(Mt());
      Fe();
      ({ HTML_ELEMENT: Yq, PLAIN_OBJECT: PO, ABSTRACT_NODE: Qq, CONFIG_X_VALUE: NO, CONFIG_Y_VALUE: DO, CONFIG_Z_VALUE: MO, CONFIG_VALUE: FO, CONFIG_X_UNIT: qO, CONFIG_Y_UNIT: kO, CONFIG_Z_UNIT: XO, CONFIG_UNIT: GO } = Se),
        ({ IX2_SESSION_STOPPED: UO, IX2_INSTANCE_ADDED: VO, IX2_ELEMENT_STATE_CHANGED: HO } = Te),
        (fd = {}),
        (WO = "refState"),
        (BO = (e = fd, t = {}) => {
          switch (t.type) {
            case UO:
              return fd;
            case VO: {
              let { elementId: r, element: n, origin: i, actionItem: o, refType: a } = t.payload,
                { actionTypeId: u } = o,
                s = e;
              return (0, Wt.getIn)(s, [r, n]) !== n && (s = dd(s, n, a, r, o)), oo(s, r, u, i, o);
            }
            case HO: {
              let { elementId: r, actionTypeId: n, current: i, actionItem: o } = t.payload;
              return oo(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      zO = [
        [NO, qO],
        [DO, kO],
        [MO, XO],
        [FO, GO],
      ];
    });
  var hd = g((ao) => {
    "use strict";
    Object.defineProperty(ao, "__esModule", { value: !0 });
    function jO(e, t) {
      for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    jO(ao, {
      clearPlugin: function () {
        return tS;
      },
      createPluginInstance: function () {
        return JO;
      },
      getPluginConfig: function () {
        return YO;
      },
      getPluginDestination: function () {
        return ZO;
      },
      getPluginDuration: function () {
        return QO;
      },
      getPluginOrigin: function () {
        return $O;
      },
      renderPlugin: function () {
        return eS;
      },
    });
    var YO = (e) => e.value,
      QO = (e, t) => {
        if (t.config.duration !== "auto") return null;
        let r = parseFloat(e.getAttribute("data-duration"));
        return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
      },
      $O = (e) => e || { value: 0 },
      ZO = (e) => ({ value: e.value }),
      JO = (e) => {
        let t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t;
      },
      eS = (e, t, r) => {
        if (!e) return;
        let n = t[r.actionTypeId].value / 100;
        e.goToFrame(e.frames * n);
      },
      tS = (e) => {
        window.Webflow.require("lottie").createInstance(e).stop();
      };
  });
  var md = g((so) => {
    "use strict";
    Object.defineProperty(so, "__esModule", { value: !0 });
    function rS(e, t) {
      for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    rS(so, {
      clearPlugin: function () {
        return dS;
      },
      createPluginInstance: function () {
        return lS;
      },
      getPluginConfig: function () {
        return aS;
      },
      getPluginDestination: function () {
        return cS;
      },
      getPluginDuration: function () {
        return sS;
      },
      getPluginOrigin: function () {
        return uS;
      },
      renderPlugin: function () {
        return fS;
      },
    });
    var nS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      iS = () => window.Webflow.require("spline"),
      oS = (e, t) => e.filter((r) => !t.includes(r)),
      aS = (e, t) => e.value[t],
      sS = () => null,
      vd = Object.freeze({ positionX: 0, positionY: 0, positionZ: 0, rotationX: 0, rotationY: 0, rotationZ: 0, scaleX: 1, scaleY: 1, scaleZ: 1 }),
      uS = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = oS(n, o);
          return a.length ? a.reduce((s, f) => ((s[f] = vd[f]), s), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = vd[a]), o), {});
      },
      cS = (e) => e.value,
      lS = (e, t) => {
        let r = t?.config?.target?.pluginElement;
        return r ? nS(r) : null;
      },
      fS = (e, t, r) => {
        let n = iS(),
          i = n.getInstance(e),
          o = r.config.target.objectId,
          a = (u) => {
            if (!u) throw new Error("Invalid spline app passed to renderSpline");
            let s = o && u.findObjectById(o);
            if (!s) return;
            let { PLUGIN_SPLINE: f } = t;
            f.positionX != null && (s.position.x = f.positionX), f.positionY != null && (s.position.y = f.positionY), f.positionZ != null && (s.position.z = f.positionZ), f.rotationX != null && (s.rotation.x = f.rotationX), f.rotationY != null && (s.rotation.y = f.rotationY), f.rotationZ != null && (s.rotation.z = f.rotationZ), f.scaleX != null && (s.scale.x = f.scaleX), f.scaleY != null && (s.scale.y = f.scaleY), f.scaleZ != null && (s.scale.z = f.scaleZ);
          };
        i ? a(i.spline) : n.setLoadHandler(e, a);
      },
      dS = () => null;
  });
  var Ed = g((lo) => {
    "use strict";
    Object.defineProperty(lo, "__esModule", { value: !0 });
    function pS(e, t) {
      for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    pS(lo, {
      clearPlugin: function () {
        return IS;
      },
      createPluginInstance: function () {
        return _S;
      },
      getPluginConfig: function () {
        return vS;
      },
      getPluginDestination: function () {
        return yS;
      },
      getPluginDuration: function () {
        return mS;
      },
      getPluginOrigin: function () {
        return ES;
      },
      renderPlugin: function () {
        return bS;
      },
    });
    var uo = "--wf-rive-fit",
      co = "--wf-rive-alignment",
      gS = (e) => document.querySelector(`[data-w-id="${e}"]`),
      hS = () => window.Webflow.require("rive"),
      vS = (e, t) => e.value.inputs[t],
      mS = () => null,
      ES = (e, t) => {
        if (e) return e;
        let r = {},
          { inputs: n = {} } = t.config.value;
        for (let i in n) n[i] == null && (r[i] = 0);
        return r;
      },
      yS = (e) => e.value.inputs ?? {},
      _S = (e, t) => {
        if ((t.config?.target?.selectorGuids || []).length > 0) return e;
        let n = t?.config?.target?.pluginElement;
        return n ? gS(n) : null;
      },
      bS = (e, { PLUGIN_RIVE: t }, r) => {
        let n = hS(),
          i = n.getInstance(e),
          o = n.rive.StateMachineInputType,
          { name: a, inputs: u = {} } = r.config.value || {};
        function s(f) {
          if (f.loaded) T();
          else {
            let d = () => {
              T(), f?.off("load", d);
            };
            f?.on("load", d);
          }
          function T() {
            let d = f.stateMachineInputs(a);
            if (d != null) {
              if ((f.isPlaying || f.play(a, !1), uo in u || co in u)) {
                let E = f.layout,
                  m = u[uo] ?? E.fit,
                  _ = u[co] ?? E.alignment;
                (m !== E.fit || _ !== E.alignment) && (f.layout = E.copyWith({ fit: m, alignment: _ }));
              }
              for (let E in u) {
                if (E === uo || E === co) continue;
                let m = d.find((_) => _.name === E);
                if (m != null)
                  switch (m.type) {
                    case o.Boolean: {
                      if (u[E] != null) {
                        let _ = !!u[E];
                        m.value = _;
                      }
                      break;
                    }
                    case o.Number: {
                      let _ = t[E];
                      _ != null && (m.value = _);
                      break;
                    }
                    case o.Trigger: {
                      u[E] && m.fire();
                      break;
                    }
                  }
              }
            }
          }
        }
        i?.rive ? s(i.rive) : n.setLoadHandler(e, s);
      },
      IS = (e, t) => null;
  });
  var po = g((fo) => {
    "use strict";
    Object.defineProperty(fo, "__esModule", { value: !0 });
    Object.defineProperty(fo, "normalizeColor", {
      enumerable: !0,
      get: function () {
        return TS;
      },
    });
    var yd = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32",
    };
    function TS(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        u = (typeof yd[o] == "string" ? yd[o].toLowerCase() : null) || o;
      if (u.startsWith("#")) {
        let s = u.substring(1);
        s.length === 3 || s.length === 4 ? ((t = parseInt(s[0] + s[0], 16)), (r = parseInt(s[1] + s[1], 16)), (n = parseInt(s[2] + s[2], 16)), s.length === 4 && (i = parseInt(s[3] + s[3], 16) / 255)) : (s.length === 6 || s.length === 8) && ((t = parseInt(s.substring(0, 2), 16)), (r = parseInt(s.substring(2, 4), 16)), (n = parseInt(s.substring(4, 6), 16)), s.length === 8 && (i = parseInt(s.substring(6, 8), 16) / 255));
      } else if (u.startsWith("rgba")) {
        let s = u.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)), (r = parseInt(s[1], 10)), (n = parseInt(s[2], 10)), (i = parseFloat(s[3]));
      } else if (u.startsWith("rgb")) {
        let s = u.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(s[0], 10)), (r = parseInt(s[1], 10)), (n = parseInt(s[2], 10));
      } else if (u.startsWith("hsla")) {
        let s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          T = parseFloat(s[1].replace("%", "")) / 100,
          d = parseFloat(s[2].replace("%", "")) / 100;
        i = parseFloat(s[3]);
        let E = (1 - Math.abs(2 * d - 1)) * T,
          m = E * (1 - Math.abs(((f / 60) % 2) - 1)),
          _ = d - E / 2,
          w,
          R,
          A;
        f >= 0 && f < 60 ? ((w = E), (R = m), (A = 0)) : f >= 60 && f < 120 ? ((w = m), (R = E), (A = 0)) : f >= 120 && f < 180 ? ((w = 0), (R = E), (A = m)) : f >= 180 && f < 240 ? ((w = 0), (R = m), (A = E)) : f >= 240 && f < 300 ? ((w = m), (R = 0), (A = E)) : ((w = E), (R = 0), (A = m)), (t = Math.round((w + _) * 255)), (r = Math.round((R + _) * 255)), (n = Math.round((A + _) * 255));
      } else if (u.startsWith("hsl")) {
        let s = u.match(/hsl\(([^)]+)\)/)[1].split(","),
          f = parseFloat(s[0]),
          T = parseFloat(s[1].replace("%", "")) / 100,
          d = parseFloat(s[2].replace("%", "")) / 100,
          E = (1 - Math.abs(2 * d - 1)) * T,
          m = E * (1 - Math.abs(((f / 60) % 2) - 1)),
          _ = d - E / 2,
          w,
          R,
          A;
        f >= 0 && f < 60 ? ((w = E), (R = m), (A = 0)) : f >= 60 && f < 120 ? ((w = m), (R = E), (A = 0)) : f >= 120 && f < 180 ? ((w = 0), (R = E), (A = m)) : f >= 180 && f < 240 ? ((w = 0), (R = m), (A = E)) : f >= 240 && f < 300 ? ((w = m), (R = 0), (A = E)) : ((w = E), (R = 0), (A = m)), (t = Math.round((w + _) * 255)), (r = Math.round((R + _) * 255)), (n = Math.round((A + _) * 255));
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
      return { red: t, green: r, blue: n, alpha: i };
    }
  });
  var _d = g((go) => {
    "use strict";
    Object.defineProperty(go, "__esModule", { value: !0 });
    function wS(e, t) {
      for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    wS(go, {
      clearPlugin: function () {
        return PS;
      },
      createPluginInstance: function () {
        return CS;
      },
      getPluginConfig: function () {
        return AS;
      },
      getPluginDestination: function () {
        return RS;
      },
      getPluginDuration: function () {
        return OS;
      },
      getPluginOrigin: function () {
        return SS;
      },
      renderPlugin: function () {
        return LS;
      },
    });
    var xS = po(),
      AS = (e, t) => e.value[t],
      OS = () => null,
      SS = (e, t) => {
        if (e) return e;
        let r = t.config.value,
          n = t.config.target.objectId,
          i = getComputedStyle(document.documentElement).getPropertyValue(n);
        if (r.size != null) return { size: parseInt(i, 10) };
        if (r.red != null && r.green != null && r.blue != null) return (0, xS.normalizeColor)(i);
      },
      RS = (e) => e.value,
      CS = () => null,
      LS = (e, t, r) => {
        let n = r.config.target.objectId,
          i = r.config.value.unit,
          { PLUGIN_VARIABLE: o } = t,
          { size: a, red: u, green: s, blue: f, alpha: T } = o,
          d;
        a != null && (d = a + i), u != null && f != null && s != null && T != null && (d = `rgba(${u}, ${s}, ${f}, ${T})`), d != null && document.documentElement.style.setProperty(n, d);
      },
      PS = (e, t) => {
        let r = t.config.target.objectId;
        document.documentElement.style.removeProperty(r);
      };
  });
  var Id = g((ho) => {
    "use strict";
    Object.defineProperty(ho, "__esModule", { value: !0 });
    Object.defineProperty(ho, "pluginMethodMap", {
      enumerable: !0,
      get: function () {
        return qS;
      },
    });
    var In = (Fe(), $e(xs)),
      NS = Tn(hd()),
      DS = Tn(md()),
      MS = Tn(Ed()),
      FS = Tn(_d());
    function bd(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (bd = function (n) {
        return n ? r : t;
      })(e);
    }
    function Tn(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function")) return { default: e };
      var r = bd(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var qS = new Map([
      [In.ActionTypeConsts.PLUGIN_LOTTIE, { ...NS }],
      [In.ActionTypeConsts.PLUGIN_SPLINE, { ...DS }],
      [In.ActionTypeConsts.PLUGIN_RIVE, { ...MS }],
      [In.ActionTypeConsts.PLUGIN_VARIABLE, { ...FS }],
    ]);
  });
  var Td = {};
  Me(Td, { clearPlugin: () => bo, createPluginInstance: () => XS, getPluginConfig: () => mo, getPluginDestination: () => yo, getPluginDuration: () => kS, getPluginOrigin: () => Eo, isPluginType: () => Tt, renderPlugin: () => _o });
  function Tt(e) {
    return vo.pluginMethodMap.has(e);
  }
  var vo,
    wt,
    mo,
    Eo,
    kS,
    yo,
    XS,
    _o,
    bo,
    Io = me(() => {
      "use strict";
      yn();
      vo = pe(Id());
      (wt = (e) => (t) => {
        if (!je) return () => null;
        let r = vo.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (mo = wt("getPluginConfig")),
        (Eo = wt("getPluginOrigin")),
        (kS = wt("getPluginDuration")),
        (yo = wt("getPluginDestination")),
        (XS = wt("createPluginInstance")),
        (_o = wt("renderPlugin")),
        (bo = wt("clearPlugin"));
    });
  var xd = g((ik, wd) => {
    function GS(e, t) {
      return e == null || e !== e ? t : e;
    }
    wd.exports = GS;
  });
  var Od = g((ok, Ad) => {
    function US(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Ad.exports = US;
  });
  var Rd = g((ak, Sd) => {
    function VS(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), u = a.length; u--; ) {
          var s = a[e ? u : ++i];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    Sd.exports = VS;
  });
  var Ld = g((sk, Cd) => {
    var HS = Rd(),
      WS = HS();
    Cd.exports = WS;
  });
  var To = g((uk, Pd) => {
    var BS = Ld(),
      zS = vr();
    function KS(e, t) {
      return e && BS(e, t, zS);
    }
    Pd.exports = KS;
  });
  var Dd = g((ck, Nd) => {
    var jS = bt();
    function YS(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!jS(r)) return e(r, n);
        for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; );
        return r;
      };
    }
    Nd.exports = YS;
  });
  var wo = g((lk, Md) => {
    var QS = To(),
      $S = Dd(),
      ZS = $S(QS);
    Md.exports = ZS;
  });
  var qd = g((fk, Fd) => {
    function JS(e, t, r, n, i) {
      return (
        i(e, function (o, a, u) {
          r = n ? ((n = !1), o) : t(r, o, a, u);
        }),
        r
      );
    }
    Fd.exports = JS;
  });
  var Xd = g((dk, kd) => {
    var eR = Od(),
      tR = wo(),
      rR = gt(),
      nR = qd(),
      iR = xe();
    function oR(e, t, r) {
      var n = iR(e) ? eR : nR,
        i = arguments.length < 3;
      return n(e, rR(t, 4), r, i, tR);
    }
    kd.exports = oR;
  });
  var Ud = g((pk, Gd) => {
    var aR = Zi(),
      sR = gt(),
      uR = Ji(),
      cR = Math.max,
      lR = Math.min;
    function fR(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return r !== void 0 && ((i = uR(r)), (i = r < 0 ? cR(n + i, 0) : lR(i, n - 1))), aR(e, sR(t, 3), i, !0);
    }
    Gd.exports = fR;
  });
  var Hd = g((gk, Vd) => {
    var dR = $i(),
      pR = Ud(),
      gR = dR(pR);
    Vd.exports = gR;
  });
  function Wd(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function hR(e, t) {
    if (Wd(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++) if (!Object.hasOwn(t, r[i]) || !Wd(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var xo,
    Bd = me(() => {
      "use strict";
      xo = hR;
    });
  var cp = {};
  Me(cp, {
    cleanupHTMLElement: () => dC,
    clearAllStyles: () => fC,
    clearObjectCache: () => PR,
    getActionListProgress: () => gC,
    getAffectedElements: () => Co,
    getComputedStyle: () => GR,
    getDestinationValues: () => KR,
    getElementId: () => FR,
    getInstanceId: () => DR,
    getInstanceOrigin: () => HR,
    getItemConfigByKey: () => zR,
    getMaxDurationItemIndex: () => up,
    getNamespacedParameterId: () => mC,
    getRenderType: () => op,
    getStyleProp: () => jR,
    mediaQueriesEqual: () => yC,
    observeStore: () => XR,
    reduceListToGroup: () => hC,
    reifyState: () => qR,
    renderHTMLElement: () => YR,
    shallowEqual: () => xo,
    shouldAllowMediaQuery: () => EC,
    shouldNamespaceEventParameter: () => vC,
    stringifyTarget: () => _C,
  });
  function PR() {
    wn.clear();
  }
  function DR() {
    return "i" + NR++;
  }
  function FR(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + MR++;
  }
  function qR({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, Sn.default)(
        e,
        (a, u) => {
          let { eventTypeId: s } = u;
          return a[s] || (a[s] = {}), (a[s][u.id] = u), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return i ? (o = i.map((a) => a.key)) : ((i = []), console.warn("IX2 missing mediaQueries in site data")), { ixData: { events: e, actionLists: t, eventTypeMap: n, mediaQueries: i, mediaQueryKeys: o } };
  }
  function XR({ store: e, select: t, onChange: r, comparator: n = kR }) {
    let { getState: i, subscribe: o } = e,
      a = o(s),
      u = t(i());
    function s() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, u) || ((u = f), r(u, e));
    }
    return a;
  }
  function jd(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let { id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: u } = e;
      return { id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: u };
    }
    return {};
  }
  function Co({ config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0) return o.reduce((C, b) => C.concat(Co({ config: { target: b }, event: t, eventTarget: r, elementRoot: n, elementApi: i })), []);
    let { getValidDocument: a, getQuerySelector: u, queryDocument: s, getChildElements: f, getSiblingElements: T, matchSelector: d, elementContains: E, isSiblingNode: m } = i,
      { target: _ } = e;
    if (!_) return [];
    let { id: w, objectId: R, selector: A, selectorGuids: D, appliesTo: P, useEventTarget: H } = jd(_);
    if (R) return [wn.has(R) ? wn.get(R) : wn.set(R, {}).get(R)];
    if (P === Ti.PAGE) {
      let C = a(w);
      return C ? [C] : [];
    }
    let q = (t?.action?.config?.affectedElements ?? {})[w || A] || {},
      te = !!(q.id || q.selector),
      Y,
      $,
      ne,
      j = t && u(jd(t.target));
    if ((te ? ((Y = q.limitAffectedElements), ($ = j), (ne = u(q))) : ($ = ne = u({ id: w, selector: A, selectorGuids: D })), t && H)) {
      let C = r && (ne || H === !0) ? [r] : s(j);
      if (ne) {
        if (H === RR) return s(ne).filter((b) => C.some((N) => E(b, N)));
        if (H === zd) return s(ne).filter((b) => C.some((N) => E(N, b)));
        if (H === Kd) return s(ne).filter((b) => C.some((N) => m(N, b)));
      }
      return C;
    }
    return $ == null || ne == null ? [] : je && n ? s(ne).filter((C) => n.contains(C)) : Y === zd ? s($, ne) : Y === SR ? f(s($)).filter(d(ne)) : Y === Kd ? T(s($)).filter(d(ne)) : s(ne);
  }
  function GR({ element: e, actionItem: t }) {
    if (!je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case Yt:
      case Qt:
      case $t:
      case Zt:
      case Cn:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function HR(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Tt(a)) return Eo(a)(t[a], n);
    switch (n.actionTypeId) {
      case zt:
      case Kt:
      case jt:
      case Ar:
        return t[n.actionTypeId] || Lo[n.actionTypeId];
      case Or:
        return UR(t[n.actionTypeId], n.config.filters);
      case Sr:
        return VR(t[n.actionTypeId], n.config.fontVariations);
      case rp:
        return { value: (0, ut.default)(parseFloat(o(e, An)), 1) };
      case Yt: {
        let u = o(e, rt),
          s = o(e, nt),
          f,
          T;
        return n.config.widthUnit === vt ? (f = Yd.test(u) ? parseFloat(u) : parseFloat(r.width)) : (f = (0, ut.default)(parseFloat(u), parseFloat(r.width))), n.config.heightUnit === vt ? (T = Yd.test(s) ? parseFloat(s) : parseFloat(r.height)) : (T = (0, ut.default)(parseFloat(s), parseFloat(r.height))), { widthValue: f, heightValue: T };
      }
      case Qt:
      case $t:
      case Zt:
        return uC({ element: e, actionTypeId: n.actionTypeId, computedStyle: r, getStyle: o });
      case Cn:
        return { value: (0, ut.default)(o(e, On), r.display) };
      case LR:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function KR({ element: e, actionItem: t, elementApi: r }) {
    if (Tt(t.actionTypeId)) return yo(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case zt:
      case Kt:
      case jt:
      case Ar: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case Yt: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: u } = t.config,
          { widthValue: s, heightValue: f } = t.config;
        if (!je) return { widthValue: s, heightValue: f };
        if (a === vt) {
          let T = n(e, rt);
          i(e, rt, ""), (s = o(e, "offsetWidth")), i(e, rt, T);
        }
        if (u === vt) {
          let T = n(e, nt);
          i(e, nt, ""), (f = o(e, "offsetHeight")), i(e, nt, T);
        }
        return { widthValue: s, heightValue: f };
      }
      case Qt:
      case $t:
      case Zt: {
        let { rValue: n, gValue: i, bValue: o, aValue: a, globalSwatchId: u } = t.config;
        if (u && u.startsWith("--")) {
          let { getStyle: s } = r,
            f = s(e, u),
            T = (0, Zd.normalizeColor)(f);
          return { rValue: T.red, gValue: T.green, bValue: T.blue, aValue: T.alpha };
        }
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Or:
        return t.config.filters.reduce(WR, {});
      case Sr:
        return t.config.fontVariations.reduce(BR, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function op(e) {
    if (/^TRANSFORM_/.test(e)) return ep;
    if (/^STYLE_/.test(e)) return So;
    if (/^GENERAL_/.test(e)) return Oo;
    if (/^PLUGIN_/.test(e)) return tp;
  }
  function jR(e, t) {
    return e === So ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function YR(e, t, r, n, i, o, a, u, s) {
    switch (u) {
      case ep:
        return eC(e, t, r, i, a);
      case So:
        return cC(e, t, r, i, o, a);
      case Oo:
        return lC(e, i, a);
      case tp: {
        let { actionTypeId: f } = i;
        if (Tt(f)) return _o(f)(s, t, i);
      }
    }
  }
  function eC(e, t, r, n, i) {
    let o = JR.map((u) => {
        let s = Lo[u],
          { xValue: f = s.xValue, yValue: T = s.yValue, zValue: d = s.zValue, xUnit: E = "", yUnit: m = "", zUnit: _ = "" } = t[u] || {};
        switch (u) {
          case zt:
            return `${ER}(${f}${E}, ${T}${m}, ${d}${_})`;
          case Kt:
            return `${yR}(${f}${E}, ${T}${m}, ${d}${_})`;
          case jt:
            return `${_R}(${f}${E}) ${bR}(${T}${m}) ${IR}(${d}${_})`;
          case Ar:
            return `${TR}(${f}${E}, ${T}${m})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    xt(e, ht, i), a(e, ht, o), nC(n, r) && a(e, En, wR);
  }
  function tC(e, t, r, n) {
    let i = (0, Sn.default)(t, (a, u, s) => `${a} ${s}(${u}${ZR(s, r)})`, ""),
      { setStyle: o } = n;
    xt(e, Tr, n), o(e, Tr, i);
  }
  function rC(e, t, r, n) {
    let i = (0, Sn.default)(t, (a, u, s) => (a.push(`"${s}" ${u}`), a), []).join(", "),
      { setStyle: o } = n;
    xt(e, wr, n), o(e, wr, i);
  }
  function nC({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (e === zt && n !== void 0) || (e === Kt && n !== void 0) || (e === jt && (t !== void 0 || r !== void 0));
  }
  function sC(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function uC({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ro[t],
      o = n(e, i),
      a = oC.test(o) ? o : r[i],
      u = sC(aC, a).split(xr);
    return { rValue: (0, ut.default)(parseInt(u[0], 10), 255), gValue: (0, ut.default)(parseInt(u[1], 10), 255), bValue: (0, ut.default)(parseInt(u[2], 10), 255), aValue: (0, ut.default)(parseFloat(u[3]), 1) };
  }
  function cC(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case Yt: {
        let { widthUnit: u = "", heightUnit: s = "" } = n.config,
          { widthValue: f, heightValue: T } = r;
        f !== void 0 && (u === vt && (u = "px"), xt(e, rt, o), a(e, rt, f + u)), T !== void 0 && (s === vt && (s = "px"), xt(e, nt, o), a(e, nt, T + s));
        break;
      }
      case Or: {
        tC(e, r, n.config, o);
        break;
      }
      case Sr: {
        rC(e, r, n.config, o);
        break;
      }
      case Qt:
      case $t:
      case Zt: {
        let u = Ro[n.actionTypeId],
          s = Math.round(r.rValue),
          f = Math.round(r.gValue),
          T = Math.round(r.bValue),
          d = r.aValue;
        xt(e, u, o), a(e, u, d >= 1 ? `rgb(${s},${f},${T})` : `rgba(${s},${f},${T},${d})`);
        break;
      }
      default: {
        let { unit: u = "" } = n.config;
        xt(e, i, o), a(e, i, r.value + u);
        break;
      }
    }
  }
  function lC(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case Cn: {
        let { value: i } = t.config;
        i === xR && je ? n(e, On, to) : n(e, On, i);
        return;
      }
    }
  }
  function xt(e, t, r) {
    if (!je) return;
    let n = ip[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Bt);
    if (!a) {
      o(e, Bt, n);
      return;
    }
    let u = a.split(xr).map(np);
    u.indexOf(n) === -1 && o(e, Bt, u.concat(n).join(xr));
  }
  function ap(e, t, r) {
    if (!je) return;
    let n = ip[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Bt);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        Bt,
        a
          .split(xr)
          .map(np)
          .filter((u) => u !== n)
          .join(xr)
      );
  }
  function fC({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: u } = a.action,
        { actionListId: s } = u,
        f = i[s];
      f && Qd({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Qd({ actionList: i[o], elementApi: t });
      });
  }
  function Qd({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        $d({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((u) => {
            $d({ actionGroup: u, event: t, elementApi: r });
          });
        });
  }
  function $d({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        u;
      Tt(o) ? (u = (s) => bo(o)(s, i)) : (u = sp({ effect: pC, actionTypeId: o, elementApi: r })), Co({ config: a, event: t, elementApi: r }).forEach(u);
    });
  }
  function dC(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === Yt) {
      let { config: a } = t;
      a.widthUnit === vt && n(e, rt, ""), a.heightUnit === vt && n(e, nt, "");
    }
    i(e, Bt) && sp({ effect: ap, actionTypeId: o, elementApi: r })(e);
  }
  function pC(e, t, r) {
    let { setStyle: n } = r;
    ap(e, t, r), n(e, t, ""), t === ht && n(e, En, "");
  }
  function up(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function gC(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      u = 0;
    return (
      r.forEach((s, f) => {
        if (n && f === 0) return;
        let { actionItems: T } = s,
          d = T[up(T)],
          { config: E, actionTypeId: m } = d;
        i.id === d.id && (u = a + o);
        let _ = op(m) === Oo ? 0 : E.duration;
        a += E.delay + _;
      }),
      a > 0 ? Ir(u / a) : 0
    );
  }
  function hC({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (u) => (o.push((0, Rn.mergeIn)(u, ["config"], { delay: 0, duration: 0 })), u.id === t);
    return (
      n && n.some(({ actionItems: u }) => u.some(a)),
      i &&
        i.some((u) => {
          let { continuousActionGroups: s } = u;
          return s.some(({ actionItems: f }) => f.some(a));
        }),
      (0, Rn.setIn)(r, ["actionLists"], { [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] } })
    );
  }
  function vC(e, { basedOn: t }) {
    return (e === Ke.SCROLLING_IN_VIEW && (t === et.ELEMENT || t == null)) || (e === Ke.MOUSE_MOVE && t === et.ELEMENT);
  }
  function mC(e, t) {
    return e + CR + t;
  }
  function EC(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function yC(e, t) {
    return xo(e && e.sort(), t && t.sort());
  }
  function _C(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ao + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ao + r + Ao + n;
  }
  var ut,
    Sn,
    xn,
    Rn,
    Zd,
    vR,
    mR,
    ER,
    yR,
    _R,
    bR,
    IR,
    TR,
    wR,
    xR,
    An,
    Tr,
    wr,
    rt,
    nt,
    Jd,
    AR,
    OR,
    zd,
    SR,
    Kd,
    RR,
    On,
    Bt,
    vt,
    xr,
    CR,
    Ao,
    ep,
    Oo,
    So,
    tp,
    zt,
    Kt,
    jt,
    Ar,
    rp,
    Or,
    Sr,
    Yt,
    Qt,
    $t,
    Zt,
    Cn,
    LR,
    np,
    Ro,
    ip,
    wn,
    NR,
    MR,
    kR,
    Yd,
    UR,
    VR,
    WR,
    BR,
    zR,
    Lo,
    QR,
    $R,
    ZR,
    JR,
    iC,
    oC,
    aC,
    sp,
    lp = me(() => {
      "use strict";
      (ut = pe(xd())), (Sn = pe(Xd())), (xn = pe(Hd())), (Rn = pe(Mt()));
      Fe();
      Bd();
      io();
      Zd = pe(po());
      Io();
      yn();
      ({
        BACKGROUND: vR,
        TRANSFORM: mR,
        TRANSLATE_3D: ER,
        SCALE_3D: yR,
        ROTATE_X: _R,
        ROTATE_Y: bR,
        ROTATE_Z: IR,
        SKEW: TR,
        PRESERVE_3D: wR,
        FLEX: xR,
        OPACITY: An,
        FILTER: Tr,
        FONT_VARIATION_SETTINGS: wr,
        WIDTH: rt,
        HEIGHT: nt,
        BACKGROUND_COLOR: Jd,
        BORDER_COLOR: AR,
        COLOR: OR,
        CHILDREN: zd,
        IMMEDIATE_CHILDREN: SR,
        SIBLINGS: Kd,
        PARENT: RR,
        DISPLAY: On,
        WILL_CHANGE: Bt,
        AUTO: vt,
        COMMA_DELIMITER: xr,
        COLON_DELIMITER: CR,
        BAR_DELIMITER: Ao,
        RENDER_TRANSFORM: ep,
        RENDER_GENERAL: Oo,
        RENDER_STYLE: So,
        RENDER_PLUGIN: tp,
      } = Se),
        ({ TRANSFORM_MOVE: zt, TRANSFORM_SCALE: Kt, TRANSFORM_ROTATE: jt, TRANSFORM_SKEW: Ar, STYLE_OPACITY: rp, STYLE_FILTER: Or, STYLE_FONT_VARIATION: Sr, STYLE_SIZE: Yt, STYLE_BACKGROUND_COLOR: Qt, STYLE_BORDER: $t, STYLE_TEXT_COLOR: Zt, GENERAL_DISPLAY: Cn, OBJECT_VALUE: LR } = Le),
        (np = (e) => e.trim()),
        (Ro = Object.freeze({ [Qt]: Jd, [$t]: AR, [Zt]: OR })),
        (ip = Object.freeze({ [ht]: mR, [Jd]: vR, [An]: An, [Tr]: Tr, [rt]: rt, [nt]: nt, [wr]: wr })),
        (wn = new Map());
      NR = 1;
      MR = 1;
      kR = (e, t) => e === t;
      (Yd = /px/), (UR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = QR[n.type]), r), e || {})), (VR = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = $R[n.type] || n.defaultValue || 0), r), e || {}));
      (WR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (BR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (zR = (e, t, r) => {
          if (Tt(e)) return mo(e)(r, t);
          switch (e) {
            case Or: {
              let n = (0, xn.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Sr: {
              let n = (0, xn.default)(r.fontVariations, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Lo = { [zt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }), [Kt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }), [jt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }), [Ar]: Object.freeze({ xValue: 0, yValue: 0 }) }),
        (QR = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 })),
        ($R = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (ZR = (e, t) => {
          let r = (0, xn.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (JR = Object.keys(Lo));
      (iC = "\\(([^)]+)\\)"), (oC = /^rgb/), (aC = RegExp(`rgba?${iC}`));
      sp =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case zt:
            case Kt:
            case jt:
            case Ar:
              e(n, ht, r);
              break;
            case Or:
              e(n, Tr, r);
              break;
            case Sr:
              e(n, wr, r);
              break;
            case rp:
              e(n, An, r);
              break;
            case Yt:
              e(n, rt, r), e(n, nt, r);
              break;
            case Qt:
            case $t:
            case Zt:
              e(n, Ro[t], r);
              break;
            case Cn:
              e(n, On, r);
              break;
          }
        };
    });
  var At = g((Po) => {
    "use strict";
    Object.defineProperty(Po, "__esModule", { value: !0 });
    function bC(e, t) {
      for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    bC(Po, {
      IX2BrowserSupport: function () {
        return IC;
      },
      IX2EasingUtils: function () {
        return wC;
      },
      IX2Easings: function () {
        return TC;
      },
      IX2ElementsReducer: function () {
        return xC;
      },
      IX2VanillaPlugins: function () {
        return AC;
      },
      IX2VanillaUtils: function () {
        return OC;
      },
    });
    var IC = Jt((yn(), $e(nd))),
      TC = Jt((no(), $e(br))),
      wC = Jt((io(), $e(ld))),
      xC = Jt((gd(), $e(pd))),
      AC = Jt((Io(), $e(Td))),
      OC = Jt((lp(), $e(cp)));
    function fp(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (fp = function (n) {
        return n ? r : t;
      })(e);
    }
    function Jt(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function")) return { default: e };
      var r = fp(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
  });
  var Pn,
    ct,
    SC,
    RC,
    CC,
    LC,
    PC,
    NC,
    Ln,
    dp,
    DC,
    MC,
    No,
    FC,
    qC,
    kC,
    XC,
    pp,
    gp = me(() => {
      "use strict";
      Fe();
      (Pn = pe(At())),
        (ct = pe(Mt())),
        ({ IX2_RAW_DATA_IMPORTED: SC, IX2_SESSION_STOPPED: RC, IX2_INSTANCE_ADDED: CC, IX2_INSTANCE_STARTED: LC, IX2_INSTANCE_REMOVED: PC, IX2_ANIMATION_FRAME_CHANGED: NC } = Te),
        ({ optimizeFloat: Ln, applyEasing: dp, createBezierEasing: DC } = Pn.IX2EasingUtils),
        ({ RENDER_GENERAL: MC } = Se),
        ({ getItemConfigByKey: No, getRenderType: FC, getStyleProp: qC } = Pn.IX2VanillaUtils),
        (kC = (e, t) => {
          let { position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: u, actionTypeId: s, customEasingFn: f, skipMotion: T, skipToValue: d } = e,
            { parameters: E } = t.payload,
            m = Math.max(1 - a, 0.01),
            _ = E[n];
          _ == null && ((m = 1), (_ = u));
          let w = Math.max(_, 0) || 0,
            R = Ln(w - r),
            A = T ? d : Ln(r + R * m),
            D = A * 100;
          if (A === r && e.current) return e;
          let P, H, z, q;
          for (let Y = 0, { length: $ } = i; Y < $; Y++) {
            let { keyframe: ne, actionItems: j } = i[Y];
            if ((Y === 0 && (P = j[0]), D >= ne)) {
              P = j[0];
              let C = i[Y + 1],
                b = C && D !== ne;
              (H = b ? C.actionItems[0] : null), b && ((z = ne / 100), (q = (C.keyframe - ne) / 100));
            }
          }
          let te = {};
          if (P && !H)
            for (let Y = 0, { length: $ } = o; Y < $; Y++) {
              let ne = o[Y];
              te[ne] = No(s, ne, P.config);
            }
          else if (P && H && z !== void 0 && q !== void 0) {
            let Y = (A - z) / q,
              $ = P.config.easing,
              ne = dp($, Y, f);
            for (let j = 0, { length: C } = o; j < C; j++) {
              let b = o[j],
                N = No(s, b, P.config),
                F = (No(s, b, H.config) - N) * ne + N;
              te[b] = F;
            }
          }
          return (0, ct.merge)(e, { position: A, current: te });
        }),
        (XC = (e, t) => {
          let { active: r, origin: n, start: i, immediate: o, renderType: a, verbose: u, actionItem: s, destination: f, destinationKeys: T, pluginDuration: d, instanceDelay: E, customEasingFn: m, skipMotion: _ } = e,
            w = s.config.easing,
            { duration: R, delay: A } = s.config;
          d != null && (R = d), (A = E ?? A), a === MC ? (R = 0) : (o || _) && (R = A = 0);
          let { now: D } = t.payload;
          if (r && n) {
            let P = D - (i + A);
            if (u) {
              let Y = D - i,
                $ = R + A,
                ne = Ln(Math.min(Math.max(0, Y / $), 1));
              e = (0, ct.set)(e, "verboseTimeElapsed", $ * ne);
            }
            if (P < 0) return e;
            let H = Ln(Math.min(Math.max(0, P / R), 1)),
              z = dp(w, H, m),
              q = {},
              te = null;
            return (
              T.length &&
                (te = T.reduce((Y, $) => {
                  let ne = f[$],
                    j = parseFloat(n[$]) || 0,
                    b = (parseFloat(ne) - j) * z + j;
                  return (Y[$] = b), Y;
                }, {})),
              (q.current = te),
              (q.position = H),
              H === 1 && ((q.active = !1), (q.complete = !0)),
              (0, ct.merge)(e, q)
            );
          }
          return e;
        }),
        (pp = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case SC:
              return t.payload.ixInstances || Object.freeze({});
            case RC:
              return Object.freeze({});
            case CC: {
              let { instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: u, actionListId: s, groupIndex: f, isCarrier: T, origin: d, destination: E, immediate: m, verbose: _, continuous: w, parameterId: R, actionGroups: A, smoothing: D, restingValue: P, pluginInstance: H, pluginDuration: z, instanceDelay: q, skipMotion: te, skipToValue: Y } = t.payload,
                { actionTypeId: $ } = i,
                ne = FC($),
                j = qC(ne, $),
                C = Object.keys(E).filter((N) => E[N] != null && typeof E[N] != "string"),
                { easing: b } = i.config;
              return (0, ct.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: d,
                destination: E,
                destinationKeys: C,
                immediate: m,
                verbose: _,
                current: null,
                actionItem: i,
                actionTypeId: $,
                eventId: o,
                eventTarget: a,
                eventStateKey: u,
                actionListId: s,
                groupIndex: f,
                renderType: ne,
                isCarrier: T,
                styleProp: j,
                continuous: w,
                parameterId: R,
                actionGroups: A,
                smoothing: D,
                restingValue: P,
                pluginInstance: H,
                pluginDuration: z,
                instanceDelay: q,
                skipMotion: te,
                skipToValue: Y,
                customEasingFn: Array.isArray(b) && b.length === 4 ? DC(b) : void 0,
              });
            }
            case LC: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ct.mergeIn)(e, [r], { active: !0, complete: !1, start: n });
            }
            case PC: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let u = i[a];
                u !== r && (n[u] = e[u]);
              }
              return n;
            }
            case NC: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  u = e[a],
                  s = u.continuous ? kC : XC;
                r = (0, ct.set)(r, a, s(u, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var GC,
    UC,
    VC,
    hp,
    vp = me(() => {
      "use strict";
      Fe();
      ({ IX2_RAW_DATA_IMPORTED: GC, IX2_SESSION_STOPPED: UC, IX2_PARAMETER_CHANGED: VC } = Te),
        (hp = (e = {}, t) => {
          switch (t.type) {
            case GC:
              return t.payload.ixParameters || {};
            case UC:
              return {};
            case VC: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var yp = {};
  Me(yp, { default: () => WC });
  var mp,
    Ep,
    HC,
    WC,
    _p = me(() => {
      "use strict";
      mp = pe(Ii());
      Os();
      js();
      $s();
      Ep = pe(At());
      gp();
      vp();
      ({ ixElements: HC } = Ep.IX2ElementsReducer), (WC = (0, mp.combineReducers)({ ixData: As, ixRequest: Ks, ixSession: Qs, ixElements: HC, ixInstances: pp, ixParameters: hp }));
    });
  var Ip = g((Pk, bp) => {
    var BC = dt(),
      zC = xe(),
      KC = at(),
      jC = "[object String]";
    function YC(e) {
      return typeof e == "string" || (!zC(e) && KC(e) && BC(e) == jC);
    }
    bp.exports = YC;
  });
  var wp = g((Nk, Tp) => {
    var QC = Qi(),
      $C = QC("length");
    Tp.exports = $C;
  });
  var Ap = g((Dk, xp) => {
    var ZC = "\\ud800-\\udfff",
      JC = "\\u0300-\\u036f",
      eL = "\\ufe20-\\ufe2f",
      tL = "\\u20d0-\\u20ff",
      rL = JC + eL + tL,
      nL = "\\ufe0e\\ufe0f",
      iL = "\\u200d",
      oL = RegExp("[" + iL + ZC + rL + nL + "]");
    function aL(e) {
      return oL.test(e);
    }
    xp.exports = aL;
  });
  var Mp = g((Mk, Dp) => {
    var Sp = "\\ud800-\\udfff",
      sL = "\\u0300-\\u036f",
      uL = "\\ufe20-\\ufe2f",
      cL = "\\u20d0-\\u20ff",
      lL = sL + uL + cL,
      fL = "\\ufe0e\\ufe0f",
      dL = "[" + Sp + "]",
      Do = "[" + lL + "]",
      Mo = "\\ud83c[\\udffb-\\udfff]",
      pL = "(?:" + Do + "|" + Mo + ")",
      Rp = "[^" + Sp + "]",
      Cp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Lp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      gL = "\\u200d",
      Pp = pL + "?",
      Np = "[" + fL + "]?",
      hL = "(?:" + gL + "(?:" + [Rp, Cp, Lp].join("|") + ")" + Np + Pp + ")*",
      vL = Np + Pp + hL,
      mL = "(?:" + [Rp + Do + "?", Do, Cp, Lp, dL].join("|") + ")",
      Op = RegExp(Mo + "(?=" + Mo + ")|" + mL + vL, "g");
    function EL(e) {
      for (var t = (Op.lastIndex = 0); Op.test(e); ) ++t;
      return t;
    }
    Dp.exports = EL;
  });
  var qp = g((Fk, Fp) => {
    var yL = wp(),
      _L = Ap(),
      bL = Mp();
    function IL(e) {
      return _L(e) ? bL(e) : yL(e);
    }
    Fp.exports = IL;
  });
  var Xp = g((qk, kp) => {
    var TL = cn(),
      wL = ln(),
      xL = bt(),
      AL = Ip(),
      OL = qp(),
      SL = "[object Map]",
      RL = "[object Set]";
    function CL(e) {
      if (e == null) return 0;
      if (xL(e)) return AL(e) ? OL(e) : e.length;
      var t = wL(e);
      return t == SL || t == RL ? e.size : TL(e).length;
    }
    kp.exports = CL;
  });
  var Up = g((kk, Gp) => {
    var LL = "Expected a function";
    function PL(e) {
      if (typeof e != "function") throw new TypeError(LL);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Gp.exports = PL;
  });
  var Fo = g((Xk, Vp) => {
    var NL = pt(),
      DL = (function () {
        try {
          var e = NL(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Vp.exports = DL;
  });
  var qo = g((Gk, Wp) => {
    var Hp = Fo();
    function ML(e, t, r) {
      t == "__proto__" && Hp ? Hp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
    }
    Wp.exports = ML;
  });
  var zp = g((Uk, Bp) => {
    var FL = qo(),
      qL = Zr(),
      kL = Object.prototype,
      XL = kL.hasOwnProperty;
    function GL(e, t, r) {
      var n = e[t];
      (!(XL.call(e, t) && qL(n, r)) || (r === void 0 && !(t in e))) && FL(e, t, r);
    }
    Bp.exports = GL;
  });
  var Yp = g((Vk, jp) => {
    var UL = zp(),
      VL = Er(),
      HL = on(),
      Kp = tt(),
      WL = Ht();
    function BL(e, t, r, n) {
      if (!Kp(e)) return e;
      t = VL(t, e);
      for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o; ) {
        var s = WL(t[i]),
          f = r;
        if (s === "__proto__" || s === "constructor" || s === "prototype") return e;
        if (i != a) {
          var T = u[s];
          (f = n ? n(T, s, u) : void 0), f === void 0 && (f = Kp(T) ? T : HL(t[i + 1]) ? [] : {});
        }
        UL(u, s, f), (u = u[s]);
      }
      return e;
    }
    jp.exports = BL;
  });
  var $p = g((Hk, Qp) => {
    var zL = pn(),
      KL = Yp(),
      jL = Er();
    function YL(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          u = zL(e, a);
        r(u, a) && KL(o, jL(a, e), u);
      }
      return o;
    }
    Qp.exports = YL;
  });
  var Jp = g((Wk, Zp) => {
    var QL = rn(),
      $L = ci(),
      ZL = Mi(),
      JL = Di(),
      eP = Object.getOwnPropertySymbols,
      tP = eP
        ? function (e) {
            for (var t = []; e; ) QL(t, ZL(e)), (e = $L(e));
            return t;
          }
        : JL;
    Zp.exports = tP;
  });
  var tg = g((Bk, eg) => {
    function rP(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    eg.exports = rP;
  });
  var ng = g((zk, rg) => {
    var nP = tt(),
      iP = un(),
      oP = tg(),
      aP = Object.prototype,
      sP = aP.hasOwnProperty;
    function uP(e) {
      if (!nP(e)) return oP(e);
      var t = iP(e),
        r = [];
      for (var n in e) (n == "constructor" && (t || !sP.call(e, n))) || r.push(n);
      return r;
    }
    rg.exports = uP;
  });
  var og = g((Kk, ig) => {
    var cP = qi(),
      lP = ng(),
      fP = bt();
    function dP(e) {
      return fP(e) ? cP(e, !0) : lP(e);
    }
    ig.exports = dP;
  });
  var sg = g((jk, ag) => {
    var pP = Ni(),
      gP = Jp(),
      hP = og();
    function vP(e) {
      return pP(e, hP, gP);
    }
    ag.exports = vP;
  });
  var cg = g((Yk, ug) => {
    var mP = Yi(),
      EP = gt(),
      yP = $p(),
      _P = sg();
    function bP(e, t) {
      if (e == null) return {};
      var r = mP(_P(e), function (n) {
        return [n];
      });
      return (
        (t = EP(t)),
        yP(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ug.exports = bP;
  });
  var fg = g((Qk, lg) => {
    var IP = gt(),
      TP = Up(),
      wP = cg();
    function xP(e, t) {
      return wP(e, TP(IP(t)));
    }
    lg.exports = xP;
  });
  var pg = g(($k, dg) => {
    var AP = cn(),
      OP = ln(),
      SP = dr(),
      RP = xe(),
      CP = bt(),
      LP = nn(),
      PP = un(),
      NP = sn(),
      DP = "[object Map]",
      MP = "[object Set]",
      FP = Object.prototype,
      qP = FP.hasOwnProperty;
    function kP(e) {
      if (e == null) return !0;
      if (CP(e) && (RP(e) || typeof e == "string" || typeof e.splice == "function" || LP(e) || NP(e) || SP(e))) return !e.length;
      var t = OP(e);
      if (t == DP || t == MP) return !e.size;
      if (PP(e)) return !AP(e).length;
      for (var r in e) if (qP.call(e, r)) return !1;
      return !0;
    }
    dg.exports = kP;
  });
  var hg = g((Zk, gg) => {
    var XP = qo(),
      GP = To(),
      UP = gt();
    function VP(e, t) {
      var r = {};
      return (
        (t = UP(t, 3)),
        GP(e, function (n, i, o) {
          XP(r, i, t(n, i, o));
        }),
        r
      );
    }
    gg.exports = VP;
  });
  var mg = g((Jk, vg) => {
    function HP(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; );
      return e;
    }
    vg.exports = HP;
  });
  var yg = g((eX, Eg) => {
    var WP = hn();
    function BP(e) {
      return typeof e == "function" ? e : WP;
    }
    Eg.exports = BP;
  });
  var bg = g((tX, _g) => {
    var zP = mg(),
      KP = wo(),
      jP = yg(),
      YP = xe();
    function QP(e, t) {
      var r = YP(e) ? zP : KP;
      return r(e, jP(t));
    }
    _g.exports = QP;
  });
  var Tg = g((rX, Ig) => {
    var $P = ze(),
      ZP = function () {
        return $P.Date.now();
      };
    Ig.exports = ZP;
  });
  var Ag = g((nX, xg) => {
    var JP = tt(),
      ko = Tg(),
      wg = vn(),
      eN = "Expected a function",
      tN = Math.max,
      rN = Math.min;
    function nN(e, t, r) {
      var n,
        i,
        o,
        a,
        u,
        s,
        f = 0,
        T = !1,
        d = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(eN);
      (t = wg(t) || 0), JP(r) && ((T = !!r.leading), (d = "maxWait" in r), (o = d ? tN(wg(r.maxWait) || 0, t) : o), (E = "trailing" in r ? !!r.trailing : E));
      function m(q) {
        var te = n,
          Y = i;
        return (n = i = void 0), (f = q), (a = e.apply(Y, te)), a;
      }
      function _(q) {
        return (f = q), (u = setTimeout(A, t)), T ? m(q) : a;
      }
      function w(q) {
        var te = q - s,
          Y = q - f,
          $ = t - te;
        return d ? rN($, o - Y) : $;
      }
      function R(q) {
        var te = q - s,
          Y = q - f;
        return s === void 0 || te >= t || te < 0 || (d && Y >= o);
      }
      function A() {
        var q = ko();
        if (R(q)) return D(q);
        u = setTimeout(A, w(q));
      }
      function D(q) {
        return (u = void 0), E && n ? m(q) : ((n = i = void 0), a);
      }
      function P() {
        u !== void 0 && clearTimeout(u), (f = 0), (n = s = i = u = void 0);
      }
      function H() {
        return u === void 0 ? a : D(ko());
      }
      function z() {
        var q = ko(),
          te = R(q);
        if (((n = arguments), (i = this), (s = q), te)) {
          if (u === void 0) return _(s);
          if (d) return clearTimeout(u), (u = setTimeout(A, t)), m(s);
        }
        return u === void 0 && (u = setTimeout(A, t)), a;
      }
      return (z.cancel = P), (z.flush = H), z;
    }
    xg.exports = nN;
  });
  var Sg = g((iX, Og) => {
    var iN = Ag(),
      oN = tt(),
      aN = "Expected a function";
    function sN(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(aN);
      return oN(r) && ((n = "leading" in r ? !!r.leading : n), (i = "trailing" in r ? !!r.trailing : i)), iN(e, t, { leading: n, maxWait: t, trailing: i });
    }
    Og.exports = sN;
  });
  var Cg = {};
  Me(Cg, {
    actionListPlaybackChanged: () => tr,
    animationFrameChanged: () => Dn,
    clearRequested: () => PN,
    elementStateChanged: () => zo,
    eventListenerAdded: () => Nn,
    eventStateChanged: () => Ho,
    instanceAdded: () => Wo,
    instanceRemoved: () => Bo,
    instanceStarted: () => Mn,
    mediaQueriesDefined: () => jo,
    parameterChanged: () => er,
    playbackRequested: () => CN,
    previewRequested: () => RN,
    rawDataImported: () => Xo,
    sessionInitialized: () => Go,
    sessionStarted: () => Uo,
    sessionStopped: () => Vo,
    stopRequested: () => LN,
    testFrameRendered: () => NN,
    viewportWidthChanged: () => Ko,
  });
  var Rg,
    uN,
    cN,
    lN,
    fN,
    dN,
    pN,
    gN,
    hN,
    vN,
    mN,
    EN,
    yN,
    _N,
    bN,
    IN,
    TN,
    wN,
    xN,
    AN,
    ON,
    SN,
    Xo,
    Go,
    Uo,
    Vo,
    RN,
    CN,
    LN,
    PN,
    Nn,
    NN,
    Ho,
    Dn,
    er,
    Wo,
    Mn,
    Bo,
    zo,
    tr,
    Ko,
    jo,
    Fn = me(() => {
      "use strict";
      Fe();
      (Rg = pe(At())),
        ({
          IX2_RAW_DATA_IMPORTED: uN,
          IX2_SESSION_INITIALIZED: cN,
          IX2_SESSION_STARTED: lN,
          IX2_SESSION_STOPPED: fN,
          IX2_PREVIEW_REQUESTED: dN,
          IX2_PLAYBACK_REQUESTED: pN,
          IX2_STOP_REQUESTED: gN,
          IX2_CLEAR_REQUESTED: hN,
          IX2_EVENT_LISTENER_ADDED: vN,
          IX2_TEST_FRAME_RENDERED: mN,
          IX2_EVENT_STATE_CHANGED: EN,
          IX2_ANIMATION_FRAME_CHANGED: yN,
          IX2_PARAMETER_CHANGED: _N,
          IX2_INSTANCE_ADDED: bN,
          IX2_INSTANCE_STARTED: IN,
          IX2_INSTANCE_REMOVED: TN,
          IX2_ELEMENT_STATE_CHANGED: wN,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: xN,
          IX2_VIEWPORT_WIDTH_CHANGED: AN,
          IX2_MEDIA_QUERIES_DEFINED: ON,
        } = Te),
        ({ reifyState: SN } = Rg.IX2VanillaUtils),
        (Xo = (e) => ({ type: uN, payload: { ...SN(e) } })),
        (Go = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({ type: cN, payload: { hasBoundaryNodes: e, reducedMotion: t } })),
        (Uo = () => ({ type: lN })),
        (Vo = () => ({ type: fN })),
        (RN = ({ rawData: e, defer: t }) => ({ type: dN, payload: { defer: t, rawData: e } })),
        (CN = ({ actionTypeId: e = Le.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: u, rawData: s }) => ({ type: pN, payload: { actionTypeId: e, actionListId: t, actionItemId: r, testManual: a, eventId: n, allowEvents: i, immediate: o, verbose: u, rawData: s } })),
        (LN = (e) => ({ type: gN, payload: { actionListId: e } })),
        (PN = () => ({ type: hN })),
        (Nn = (e, t) => ({ type: vN, payload: { target: e, listenerParams: t } })),
        (NN = (e = 1) => ({ type: mN, payload: { step: e } })),
        (Ho = (e, t) => ({ type: EN, payload: { stateKey: e, newState: t } })),
        (Dn = (e, t) => ({ type: yN, payload: { now: e, parameters: t } })),
        (er = (e, t) => ({ type: _N, payload: { key: e, value: t } })),
        (Wo = (e) => ({ type: bN, payload: { ...e } })),
        (Mn = (e, t) => ({ type: IN, payload: { instanceId: e, time: t } })),
        (Bo = (e) => ({ type: TN, payload: { instanceId: e } })),
        (zo = (e, t, r, n) => ({ type: wN, payload: { elementId: e, actionTypeId: t, current: r, actionItem: n } })),
        (tr = ({ actionListId: e, isPlaying: t }) => ({ type: xN, payload: { actionListId: e, isPlaying: t } })),
        (Ko = ({ width: e, mediaQueries: t }) => ({ type: AN, payload: { width: e, mediaQueries: t } })),
        (jo = () => ({ type: ON }));
    });
  var Ne = {};
  Me(Ne, { elementContains: () => $o, getChildElements: () => HN, getClosestElement: () => Rr, getProperty: () => kN, getQuerySelector: () => Qo, getRefType: () => Zo, getSiblingElements: () => WN, getStyle: () => qN, getValidDocument: () => GN, isSiblingNode: () => VN, matchSelector: () => XN, queryDocument: () => UN, setStyle: () => FN });
  function FN(e, t, r) {
    e.style[t] = r;
  }
  function qN(e, t) {
    return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t];
  }
  function kN(e, t) {
    return e[t];
  }
  function XN(e) {
    return (t) => t[Yo](e);
  }
  function Qo({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Lg) !== -1) {
        let n = e.split(Lg),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Ng))) return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function GN(e) {
    return e == null || e === document.documentElement.getAttribute(Ng) ? document : null;
  }
  function UN(e, t) {
    return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e));
  }
  function $o(e, t) {
    return e.contains(t);
  }
  function VN(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function HN(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function WN(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; ) e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function Zo(e) {
    return e != null && typeof e == "object" ? (e instanceof Element ? DN : MN) : null;
  }
  var Pg,
    Yo,
    Lg,
    DN,
    MN,
    Ng,
    Rr,
    Dg = me(() => {
      "use strict";
      Pg = pe(At());
      Fe();
      ({ ELEMENT_MATCHES: Yo } = Pg.IX2BrowserSupport), ({ IX2_ID_DELIMITER: Lg, HTML_ELEMENT: DN, PLAIN_OBJECT: MN, WF_PAGE: Ng } = Se);
      Rr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[Yo] && r[Yo](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var Jo = g((sX, Fg) => {
    var BN = tt(),
      Mg = Object.create,
      zN = (function () {
        function e() {}
        return function (t) {
          if (!BN(t)) return {};
          if (Mg) return Mg(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Fg.exports = zN;
  });
  var qn = g((uX, qg) => {
    function KN() {}
    qg.exports = KN;
  });
  var Xn = g((cX, kg) => {
    var jN = Jo(),
      YN = qn();
    function kn(e, t) {
      (this.__wrapped__ = e), (this.__actions__ = []), (this.__chain__ = !!t), (this.__index__ = 0), (this.__values__ = void 0);
    }
    kn.prototype = jN(YN.prototype);
    kn.prototype.constructor = kn;
    kg.exports = kn;
  });
  var Vg = g((lX, Ug) => {
    var Xg = Pt(),
      QN = dr(),
      $N = xe(),
      Gg = Xg ? Xg.isConcatSpreadable : void 0;
    function ZN(e) {
      return $N(e) || QN(e) || !!(Gg && e && e[Gg]);
    }
    Ug.exports = ZN;
  });
  var Bg = g((fX, Wg) => {
    var JN = rn(),
      eD = Vg();
    function Hg(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = eD), i || (i = []); ++o < a; ) {
        var u = e[o];
        t > 0 && r(u) ? (t > 1 ? Hg(u, t - 1, r, n, i) : JN(i, u)) : n || (i[i.length] = u);
      }
      return i;
    }
    Wg.exports = Hg;
  });
  var Kg = g((dX, zg) => {
    var tD = Bg();
    function rD(e) {
      var t = e == null ? 0 : e.length;
      return t ? tD(e, 1) : [];
    }
    zg.exports = rD;
  });
  var Yg = g((pX, jg) => {
    function nD(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    jg.exports = nD;
  });
  var Zg = g((gX, $g) => {
    var iD = Yg(),
      Qg = Math.max;
    function oD(e, t, r) {
      return (
        (t = Qg(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (var n = arguments, i = -1, o = Qg(n.length - t, 0), a = Array(o); ++i < o; ) a[i] = n[t + i];
          i = -1;
          for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
          return (u[t] = r(a)), iD(e, this, u);
        }
      );
    }
    $g.exports = oD;
  });
  var eh = g((hX, Jg) => {
    function aD(e) {
      return function () {
        return e;
      };
    }
    Jg.exports = aD;
  });
  var nh = g((vX, rh) => {
    var sD = eh(),
      th = Fo(),
      uD = hn(),
      cD = th
        ? function (e, t) {
            return th(e, "toString", { configurable: !0, enumerable: !1, value: sD(t), writable: !0 });
          }
        : uD;
    rh.exports = cD;
  });
  var oh = g((mX, ih) => {
    var lD = 800,
      fD = 16,
      dD = Date.now;
    function pD(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = dD(),
          i = fD - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= lD) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    ih.exports = pD;
  });
  var sh = g((EX, ah) => {
    var gD = nh(),
      hD = oh(),
      vD = hD(gD);
    ah.exports = vD;
  });
  var ch = g((yX, uh) => {
    var mD = Kg(),
      ED = Zg(),
      yD = sh();
    function _D(e) {
      return yD(ED(e, void 0, mD), e + "");
    }
    uh.exports = _D;
  });
  var dh = g((_X, fh) => {
    var lh = ki(),
      bD = lh && new lh();
    fh.exports = bD;
  });
  var gh = g((bX, ph) => {
    function ID() {}
    ph.exports = ID;
  });
  var ea = g((IX, vh) => {
    var hh = dh(),
      TD = gh(),
      wD = hh
        ? function (e) {
            return hh.get(e);
          }
        : TD;
    vh.exports = wD;
  });
  var Eh = g((TX, mh) => {
    var xD = {};
    mh.exports = xD;
  });
  var ta = g((wX, _h) => {
    var yh = Eh(),
      AD = Object.prototype,
      OD = AD.hasOwnProperty;
    function SD(e) {
      for (var t = e.name + "", r = yh[t], n = OD.call(yh, t) ? r.length : 0; n--; ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    _h.exports = SD;
  });
  var Un = g((xX, bh) => {
    var RD = Jo(),
      CD = qn(),
      LD = 4294967295;
    function Gn(e) {
      (this.__wrapped__ = e), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = LD), (this.__views__ = []);
    }
    Gn.prototype = RD(CD.prototype);
    Gn.prototype.constructor = Gn;
    bh.exports = Gn;
  });
  var Th = g((AX, Ih) => {
    function PD(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    Ih.exports = PD;
  });
  var xh = g((OX, wh) => {
    var ND = Un(),
      DD = Xn(),
      MD = Th();
    function FD(e) {
      if (e instanceof ND) return e.clone();
      var t = new DD(e.__wrapped__, e.__chain__);
      return (t.__actions__ = MD(e.__actions__)), (t.__index__ = e.__index__), (t.__values__ = e.__values__), t;
    }
    wh.exports = FD;
  });
  var Sh = g((SX, Oh) => {
    var qD = Un(),
      Ah = Xn(),
      kD = qn(),
      XD = xe(),
      GD = at(),
      UD = xh(),
      VD = Object.prototype,
      HD = VD.hasOwnProperty;
    function Vn(e) {
      if (GD(e) && !XD(e) && !(e instanceof qD)) {
        if (e instanceof Ah) return e;
        if (HD.call(e, "__wrapped__")) return UD(e);
      }
      return new Ah(e);
    }
    Vn.prototype = kD.prototype;
    Vn.prototype.constructor = Vn;
    Oh.exports = Vn;
  });
  var Ch = g((RX, Rh) => {
    var WD = Un(),
      BD = ea(),
      zD = ta(),
      KD = Sh();
    function jD(e) {
      var t = zD(e),
        r = KD[t];
      if (typeof r != "function" || !(t in WD.prototype)) return !1;
      if (e === r) return !0;
      var n = BD(r);
      return !!n && e === n[0];
    }
    Rh.exports = jD;
  });
  var Dh = g((CX, Nh) => {
    var Lh = Xn(),
      YD = ch(),
      QD = ea(),
      ra = ta(),
      $D = xe(),
      Ph = Ch(),
      ZD = "Expected a function",
      JD = 8,
      eM = 32,
      tM = 128,
      rM = 256;
    function nM(e) {
      return YD(function (t) {
        var r = t.length,
          n = r,
          i = Lh.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(ZD);
          if (i && !a && ra(o) == "wrapper") var a = new Lh([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var u = ra(o),
            s = u == "wrapper" ? QD(o) : void 0;
          s && Ph(s[0]) && s[1] == (tM | JD | eM | rM) && !s[4].length && s[9] == 1 ? (a = a[ra(s[0])].apply(a, s[3])) : (a = o.length == 1 && Ph(o) ? a[u]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            T = f[0];
          if (a && f.length == 1 && $D(T)) return a.plant(T).value();
          for (var d = 0, E = r ? t[d].apply(this, f) : T; ++d < r; ) E = t[d].call(this, E);
          return E;
        };
      });
    }
    Nh.exports = nM;
  });
  var Fh = g((LX, Mh) => {
    var iM = Dh(),
      oM = iM();
    Mh.exports = oM;
  });
  var kh = g((PX, qh) => {
    function aM(e, t, r) {
      return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
    }
    qh.exports = aM;
  });
  var Gh = g((NX, Xh) => {
    var sM = kh(),
      na = vn();
    function uM(e, t, r) {
      return r === void 0 && ((r = t), (t = void 0)), r !== void 0 && ((r = na(r)), (r = r === r ? r : 0)), t !== void 0 && ((t = na(t)), (t = t === t ? t : 0)), sM(na(e), t, r);
    }
    Xh.exports = uM;
  });
  var Yh,
    Qh,
    $h,
    Zh,
    cM,
    lM,
    fM,
    dM,
    pM,
    gM,
    hM,
    vM,
    mM,
    EM,
    yM,
    _M,
    bM,
    IM,
    TM,
    Jh,
    ev,
    wM,
    xM,
    AM,
    tv,
    OM,
    SM,
    rv,
    RM,
    ia,
    nv,
    Uh,
    Vh,
    iv,
    Lr,
    CM,
    it,
    ov,
    LM,
    ke,
    Ye,
    Pr,
    av,
    oa,
    Hh,
    aa,
    PM,
    Cr,
    NM,
    DM,
    MM,
    sv,
    Wh,
    FM,
    Bh,
    qM,
    kM,
    XM,
    zh,
    Hn,
    Wn,
    Kh,
    jh,
    uv,
    cv = me(() => {
      "use strict";
      (Yh = pe(Fh())), (Qh = pe(gn())), ($h = pe(Gh()));
      Fe();
      sa();
      Fn();
      (Zh = pe(At())),
        ({ MOUSE_CLICK: cM, MOUSE_SECOND_CLICK: lM, MOUSE_DOWN: fM, MOUSE_UP: dM, MOUSE_OVER: pM, MOUSE_OUT: gM, DROPDOWN_CLOSE: hM, DROPDOWN_OPEN: vM, SLIDER_ACTIVE: mM, SLIDER_INACTIVE: EM, TAB_ACTIVE: yM, TAB_INACTIVE: _M, NAVBAR_CLOSE: bM, NAVBAR_OPEN: IM, MOUSE_MOVE: TM, PAGE_SCROLL_DOWN: Jh, SCROLL_INTO_VIEW: ev, SCROLL_OUT_OF_VIEW: wM, PAGE_SCROLL_UP: xM, SCROLLING_IN_VIEW: AM, PAGE_FINISH: tv, ECOMMERCE_CART_CLOSE: OM, ECOMMERCE_CART_OPEN: SM, PAGE_START: rv, PAGE_SCROLL: RM } = Ke),
        (ia = "COMPONENT_ACTIVE"),
        (nv = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: Uh } = Se),
        ({ getNamespacedParameterId: Vh } = Zh.IX2VanillaUtils),
        (iv = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Lr = iv(({ element: e, nativeEvent: t }) => e === t.target)),
        (CM = iv(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (it = (0, Yh.default)([Lr, CM])),
        (ov = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !PM[i.eventTypeId]) return i;
          }
          return null;
        }),
        (LM = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!ov(e, n);
        }),
        (ke = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: u, autoStopEventId: s } = o.config,
            f = ov(e, s);
          return f && rr({ store: e, eventId: s, eventTarget: r, eventStateKey: s + Uh + n.split(Uh)[1], actionListId: (0, Qh.default)(f, "action.config.actionListId") }), rr({ store: e, eventId: a, eventTarget: r, eventStateKey: n, actionListId: u }), Nr({ store: e, eventId: a, eventTarget: r, eventStateKey: n, actionListId: u }), i;
        }),
        (Ye = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Pr = { handler: Ye(it, ke) }),
        (av = { ...Pr, types: [ia, nv].join(" ") }),
        (oa = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          { target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 },
        ]),
        (Hh = "mouseover mouseout"),
        (aa = { types: oa }),
        (PM = { PAGE_START: rv, PAGE_FINISH: tv }),
        (Cr = (() => {
          let e = window.pageXOffset !== void 0,
            r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
          return () => ({ scrollLeft: e ? window.pageXOffset : r.scrollLeft, scrollTop: e ? window.pageYOffset : r.scrollTop, stiffScrollTop: (0, $h.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight), scrollWidth: r.scrollWidth, scrollHeight: r.scrollHeight, clientWidth: r.clientWidth, clientHeight: r.clientHeight, innerWidth: window.innerWidth, innerHeight: window.innerHeight });
        })()),
        (NM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top)),
        (DM = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (MM = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Cr(),
            o = r.scrollOffsetValue,
            s = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return NM(t.getBoundingClientRect(), { left: 0, top: s, right: n, bottom: i - s });
        }),
        (sv = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ia, nv].indexOf(n) !== -1 ? n === ia : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Wh = (e) => (t, r) => {
          let n = { elementHovered: DM(t) };
          return ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n)) || n;
        }),
        (FM = (e) => (t, r) => {
          let n = { ...r, elementVisible: MM(t) };
          return ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n)) || n;
        }),
        (Bh =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Cr(),
              {
                event: { config: a, eventTypeId: u },
              } = t,
              { scrollOffsetValue: s, scrollOffsetUnit: f } = a,
              T = f === "PX",
              d = i - o,
              E = Number((n / d).toFixed(2));
            if (r && r.percentTop === E) return r;
            let m = (T ? s : (o * (s || 0)) / 100) / d,
              _,
              w,
              R = 0;
            r && ((_ = E > r.percentTop), (w = r.scrollingDown !== _), (R = w ? E : r.anchorTop));
            let A = u === Jh ? E >= R + m : E <= R - m,
              D = { ...r, percentTop: E, inBounds: A, anchorTop: R, scrollingDown: _ };
            return (r && A && (w || D.inBounds !== r.inBounds) && e(t, D)) || D;
          }),
        (qM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom),
        (kM = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (XM = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (zh =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (Hn = (e = !0) => ({
          ...av,
          handler: Ye(
            e ? it : Lr,
            sv((t, r) => (r.isActive ? Pr.handler(t, r) : r))
          ),
        })),
        (Wn = (e = !0) => ({
          ...av,
          handler: Ye(
            e ? it : Lr,
            sv((t, r) => (r.isActive ? r : Pr.handler(t, r)))
          ),
        })),
        (Kh = {
          ...aa,
          handler: FM((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered ? t : (n.eventTypeId === ev) === r ? (ke(e), { ...t, triggered: !0 }) : t;
          }),
        }),
        (jh = 0.05),
        (uv = {
          [mM]: Hn(),
          [EM]: Wn(),
          [vM]: Hn(),
          [hM]: Wn(),
          [IM]: Hn(!1),
          [bM]: Wn(!1),
          [yM]: Hn(),
          [_M]: Wn(),
          [SM]: { types: "ecommerce-cart-open", handler: Ye(it, ke) },
          [OM]: { types: "ecommerce-cart-close", handler: Ye(it, ke) },
          [cM]: {
            types: "click",
            handler: Ye(
              it,
              zh((e, { clickCount: t }) => {
                LM(e) ? t === 1 && ke(e) : ke(e);
              })
            ),
          },
          [lM]: {
            types: "click",
            handler: Ye(
              it,
              zh((e, { clickCount: t }) => {
                t === 2 && ke(e);
              })
            ),
          },
          [fM]: { ...Pr, types: "mousedown" },
          [dM]: { ...Pr, types: "mouseup" },
          [pM]: {
            types: Hh,
            handler: Ye(
              it,
              Wh((e, t) => {
                t.elementHovered && ke(e);
              })
            ),
          },
          [gM]: {
            types: Hh,
            handler: Ye(
              it,
              Wh((e, t) => {
                t.elementHovered || ke(e);
              })
            ),
          },
          [TM]: {
            types: "mousemove mouseout scroll",
            handler: ({ store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i }, o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }) => {
              let { basedOn: a, selectedAxis: u, continuousParameterGroupId: s, reverse: f, restingState: T = 0 } = r,
                { clientX: d = o.clientX, clientY: E = o.clientY, pageX: m = o.pageX, pageY: _ = o.pageY } = n,
                w = u === "X_AXIS",
                R = n.type === "mouseout",
                A = T / 100,
                D = s,
                P = !1;
              switch (a) {
                case et.VIEWPORT: {
                  A = w ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                }
                case et.PAGE: {
                  let { scrollLeft: H, scrollTop: z, scrollWidth: q, scrollHeight: te } = Cr();
                  A = w ? Math.min(H + m, q) / q : Math.min(z + _, te) / te;
                  break;
                }
                case et.ELEMENT:
                default: {
                  D = Vh(i, s);
                  let H = n.type.indexOf("mouse") === 0;
                  if (H && it({ element: t, nativeEvent: n }) !== !0) break;
                  let z = t.getBoundingClientRect(),
                    { left: q, top: te, width: Y, height: $ } = z;
                  if (!H && !qM({ left: d, top: E }, z)) break;
                  (P = !0), (A = w ? (d - q) / Y : (E - te) / $);
                  break;
                }
              }
              return R && (A > 1 - jh || A < jh) && (A = Math.round(A)), (a !== et.ELEMENT || P || P !== o.elementHovered) && ((A = f ? 1 - A : A), e.dispatch(er(D, A))), { elementHovered: P, clientX: d, clientY: E, pageX: m, pageY: _ };
            },
          },
          [RM]: {
            types: oa,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Cr(),
                u = i / (o - a);
              (u = n ? 1 - u : u), e.dispatch(er(r, u));
            },
          },
          [AM]: {
            types: oa,
            handler: ({ element: e, store: t, eventConfig: r, eventStateKey: n }, i = { scrollPercent: 0 }) => {
              let { scrollLeft: o, scrollTop: a, scrollWidth: u, scrollHeight: s, clientHeight: f } = Cr(),
                { basedOn: T, selectedAxis: d, continuousParameterGroupId: E, startsEntering: m, startsExiting: _, addEndOffset: w, addStartOffset: R, addOffsetValue: A = 0, endOffsetValue: D = 0 } = r,
                P = d === "X_AXIS";
              if (T === et.VIEWPORT) {
                let H = P ? o / u : a / s;
                return H !== i.scrollPercent && t.dispatch(er(E, H)), { scrollPercent: H };
              } else {
                let H = Vh(n, E),
                  z = e.getBoundingClientRect(),
                  q = (R ? A : 0) / 100,
                  te = (w ? D : 0) / 100;
                (q = m ? q : 1 - q), (te = _ ? te : 1 - te);
                let Y = z.top + Math.min(z.height * q, f),
                  ne = z.top + z.height * te - Y,
                  j = Math.min(f + ne, s),
                  b = Math.min(Math.max(0, f - Y), j) / j;
                return b !== i.scrollPercent && t.dispatch(er(H, b)), { scrollPercent: b };
              }
            },
          },
          [ev]: Kh,
          [wM]: Kh,
          [Jh]: {
            ...aa,
            handler: Bh((e, t) => {
              t.scrollingDown && ke(e);
            }),
          },
          [xM]: {
            ...aa,
            handler: Bh((e, t) => {
              t.scrollingDown || ke(e);
            }),
          },
          [tv]: { types: "readystatechange IX2_PAGE_UPDATE", handler: Ye(Lr, kM(ke)) },
          [rv]: { types: "readystatechange IX2_PAGE_UPDATE", handler: Ye(Lr, XM(ke)) },
        });
    });
  var Av = {};
  Me(Av, { observeRequests: () => o1, startActionGroup: () => Nr, startEngine: () => Qn, stopActionGroup: () => rr, stopAllActionGroups: () => Tv, stopEngine: () => $n });
  function o1(e) {
    Ot({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: u1 }), Ot({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: c1 }), Ot({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: l1 }), Ot({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: f1 });
  }
  function a1(e) {
    Ot({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        $n(e), yv({ store: e, elementApi: Ne }), Qn({ store: e, allowEvents: !0 }), _v();
      },
    });
  }
  function s1(e, t) {
    let r = Ot({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function u1({ rawData: e, defer: t }, r) {
    let n = () => {
      Qn({ store: r, rawData: e, allowEvents: !0 }), _v();
    };
    t ? setTimeout(n, 0) : n();
  }
  function _v() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function c1(e, t) {
    let { actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: u, testManual: s, verbose: f = !0 } = e,
      { rawData: T } = e;
    if (n && i && T && u) {
      let d = T.actionLists[n];
      d && (T = jM({ actionList: d, actionItemId: i, rawData: T }));
    }
    if ((Qn({ store: t, rawData: T, allowEvents: a, testManual: s }), (n && r === Le.GENERAL_START_ACTION) || ua(r))) {
      rr({ store: t, actionListId: n }), Iv({ store: t, actionListId: n, eventId: o });
      let d = Nr({ store: t, eventId: o, actionListId: n, immediate: u, verbose: f });
      f && d && t.dispatch(tr({ actionListId: n, isPlaying: !u }));
    }
  }
  function l1({ actionListId: e }, t) {
    e ? rr({ store: t, actionListId: e }) : Tv({ store: t }), $n(t);
  }
  function f1(e, t) {
    $n(t), yv({ store: t, elementApi: Ne });
  }
  function Qn({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Xo(t)), i.active || (e.dispatch(Go({ hasBoundaryNodes: !!document.querySelector(zn), reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches })), r && (m1(e), d1(), e.getState().ixSession.hasDefinedMediaQueries && a1(e)), e.dispatch(Uo()), p1(e, n));
  }
  function d1() {
    let { documentElement: e } = document;
    e.className.indexOf(lv) === -1 && (e.className += ` ${lv}`);
  }
  function p1(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active && (e.dispatch(Dn(n, o)), t ? s1(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function $n(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(g1), ZM(), e.dispatch(Vo());
    }
  }
  function g1({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function h1({ store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: u, restingValue: s }) {
    let { ixData: f, ixSession: T } = e.getState(),
      { events: d } = f,
      E = d[n],
      { eventTypeId: m } = E,
      _ = {},
      w = {},
      R = [],
      { continuousActionGroups: A } = a,
      { id: D } = a;
    YM(m, i) && (D = QM(t, D));
    let P = T.hasBoundaryNodes && r ? Rr(r, zn) : null;
    A.forEach((H) => {
      let { keyframe: z, actionItems: q } = H;
      q.forEach((te) => {
        let { actionTypeId: Y } = te,
          { target: $ } = te.config;
        if (!$) return;
        let ne = $.boundaryMode ? P : null,
          j = JM($) + ca + Y;
        if (((w[j] = v1(w[j], z, te)), !_[j])) {
          _[j] = !0;
          let { config: C } = te;
          Kn({ config: C, event: E, eventTarget: r, elementRoot: ne, elementApi: Ne }).forEach((b) => {
            R.push({ element: b, key: j });
          });
        }
      });
    }),
      R.forEach(({ element: H, key: z }) => {
        let q = w[z],
          te = (0, lt.default)(q, "[0].actionItems[0]", {}),
          { actionTypeId: Y } = te,
          ne = (Y === Le.PLUGIN_RIVE ? (te.config?.target?.selectorGuids || []).length === 0 : Yn(Y)) ? fa(Y)(H, te) : null,
          j = la({ element: H, actionItem: te, elementApi: Ne }, ne);
        da({ store: e, element: H, eventId: n, actionListId: o, actionItem: te, destination: j, continuous: !0, parameterId: D, actionGroups: q, smoothing: u, restingValue: s, pluginInstance: ne });
      });
  }
  function v1(e = [], t, r) {
    let n = [...e],
      i;
    return n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)), i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })), n[i].actionItems.push(r), n;
  }
  function m1(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    bv(e),
      (0, nr.default)(r, (i, o) => {
        let a = uv[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        T1({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && y1(e);
  }
  function y1(e) {
    let t = () => {
      bv(e);
    };
    E1.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(Nn(window, [r, t]));
    }),
      t();
  }
  function bv(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(Ko({ width: n, mediaQueries: i }));
    }
  }
  function T1({ logic: e, store: t, events: r }) {
    w1(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      u = _1(r, I1);
    if (!(0, pv.default)(u)) return;
    (0, nr.default)(u, (d, E) => {
      let m = r[E],
        { action: _, id: w, mediaQueries: R = o.mediaQueryKeys } = m,
        { actionListId: A } = _.config;
      e1(R, o.mediaQueryKeys) || t.dispatch(jo()),
        _.actionTypeId === Le.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((P) => {
            let { continuousParameterGroupId: H } = P,
              z = (0, lt.default)(a, `${A}.continuousParameterGroups`, []),
              q = (0, dv.default)(z, ({ id: $ }) => $ === H),
              te = (P.smoothing || 0) / 100,
              Y = (P.restingState || 0) / 100;
            q &&
              d.forEach(($, ne) => {
                let j = w + ca + ne;
                h1({ store: t, eventStateKey: j, eventTarget: $, eventId: w, eventConfig: P, actionListId: A, parameterGroup: q, smoothing: te, restingValue: Y });
              });
          }),
        (_.actionTypeId === Le.GENERAL_START_ACTION || ua(_.actionTypeId)) && Iv({ store: t, actionListId: A, eventId: w });
    });
    let s = (d) => {
        let { ixSession: E } = t.getState();
        b1(u, (m, _, w) => {
          let R = r[_],
            A = E.eventState[w],
            { action: D, mediaQueries: P = o.mediaQueryKeys } = R;
          if (!jn(P, E.mediaQueryKey)) return;
          let H = (z = {}) => {
            let q = i({ store: t, element: m, event: R, eventConfig: z, nativeEvent: d, eventStateKey: w }, A);
            t1(q, A) || t.dispatch(Ho(w, q));
          };
          D.actionTypeId === Le.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(H) : H();
        });
      },
      f = (0, mv.default)(s, i1),
      T = ({ target: d = document, types: E, throttle: m }) => {
        E.split(" ")
          .filter(Boolean)
          .forEach((_) => {
            let w = m ? f : s;
            d.addEventListener(_, w), t.dispatch(Nn(d, [_, w]));
          });
      };
    Array.isArray(n) ? n.forEach(T) : typeof n == "string" && T(e);
  }
  function w1(e) {
    if (!n1) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = Qo(o);
      t[a] || ((i === Ke.MOUSE_CLICK || i === Ke.MOUSE_SECOND_CLICK) && ((t[a] = !0), (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function Iv({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      u = a[r],
      s = o[t];
    if (s && s.useFirstGroupAsInitialState) {
      let f = (0, lt.default)(s, "actionItemGroups[0].actionItems", []),
        T = (0, lt.default)(u, "mediaQueries", n.mediaQueryKeys);
      if (!jn(T, i.mediaQueryKey)) return;
      f.forEach((d) => {
        let { config: E, actionTypeId: m } = d,
          _ = E?.target?.useEventTarget === !0 && E?.target?.objectId == null ? { target: u.target, targets: u.targets } : E,
          w = Kn({ config: _, event: u, elementApi: Ne }),
          R = Yn(m);
        w.forEach((A) => {
          let D = R ? fa(m)(A, d) : null;
          da({ destination: la({ element: A, actionItem: d, elementApi: Ne }, D), immediate: !0, store: e, element: A, eventId: r, actionItem: d, actionListId: t, pluginInstance: D });
        });
      });
    }
  }
  function Tv({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, nr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        pa(r, e), i && e.dispatch(tr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function rr({ store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      u = a.hasBoundaryNodes && r ? Rr(r, zn) : null;
    (0, nr.default)(o, (s) => {
      let f = (0, lt.default)(s, "actionItem.config.target.boundaryMode"),
        T = n ? s.eventStateKey === n : !0;
      if (s.actionListId === i && s.eventId === t && T) {
        if (u && f && !$o(u, s.element)) return;
        pa(s, e), s.verbose && e.dispatch(tr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Nr({ store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o = 0, immediate: a, verbose: u }) {
    let { ixData: s, ixSession: f } = e.getState(),
      { events: T } = s,
      d = T[t] || {},
      { mediaQueries: E = s.mediaQueryKeys } = d,
      m = (0, lt.default)(s, `actionLists.${i}`, {}),
      { actionItemGroups: _, useFirstGroupAsInitialState: w } = m;
    if (!_ || !_.length) return !1;
    o >= _.length && (0, lt.default)(d, "config.loop") && (o = 0), o === 0 && w && o++;
    let A = (o === 0 || (o === 1 && w)) && ua(d.action?.actionTypeId) ? d.config.delay : void 0,
      D = (0, lt.default)(_, [o, "actionItems"], []);
    if (!D.length || !jn(E, f.mediaQueryKey)) return !1;
    let P = f.hasBoundaryNodes && r ? Rr(r, zn) : null,
      H = BM(D),
      z = !1;
    return (
      D.forEach((q, te) => {
        let { config: Y, actionTypeId: $ } = q,
          ne = Yn($),
          { target: j } = Y;
        if (!j) return;
        let C = j.boundaryMode ? P : null;
        Kn({ config: Y, event: d, eventTarget: r, elementRoot: C, elementApi: Ne }).forEach((N, k) => {
          let B = ne ? fa($)(N, q) : null,
            F = ne ? r1($)(N, q) : null;
          z = !0;
          let G = H === te && k === 0,
            Z = zM({ element: N, actionItem: q }),
            ie = la({ element: N, actionItem: q, elementApi: Ne }, B);
          da({ store: e, element: N, actionItem: q, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o, isCarrier: G, computedStyle: Z, destination: ie, immediate: a, verbose: u, pluginInstance: B, pluginDuration: F, instanceDelay: A });
        });
      }),
      z
    );
  }
  function da(e) {
    let { store: t, computedStyle: r, ...n } = e,
      { element: i, actionItem: o, immediate: a, pluginInstance: u, continuous: s, restingValue: f, eventId: T } = n,
      d = !s,
      E = HM(),
      { ixElements: m, ixSession: _, ixData: w } = t.getState(),
      R = VM(m, i),
      { refState: A } = m[R] || {},
      D = Zo(i),
      P = _.reducedMotion && xi[o.actionTypeId],
      H;
    if (P && s)
      switch (w.events[T]?.eventTypeId) {
        case Ke.MOUSE_MOVE:
        case Ke.MOUSE_MOVE_IN_VIEWPORT:
          H = f;
          break;
        default:
          H = 0.5;
          break;
      }
    let z = KM(i, A, r, o, Ne, u);
    if ((t.dispatch(Wo({ instanceId: E, elementId: R, origin: z, refType: D, skipMotion: P, skipToValue: H, ...n })), wv(document.body, "ix2-animation-started", E), a)) {
      x1(t, E);
      return;
    }
    Ot({ store: t, select: ({ ixInstances: q }) => q[E], onChange: xv }), d && t.dispatch(Mn(E, _.tick));
  }
  function pa(e, t) {
    wv(document.body, "ix2-animation-stopping", { instanceId: e.id, state: t.getState() });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === Ev && $M(o, n, Ne), t.dispatch(Bo(e.id));
  }
  function wv(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function x1(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(Mn(t, 0)), e.dispatch(Dn(performance.now(), r));
    let { ixInstances: n } = e.getState();
    xv(n[t], e);
  }
  function xv(e, t) {
    let { active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: u, renderType: s, current: f, groupIndex: T, eventId: d, eventTarget: E, eventStateKey: m, actionListId: _, isCarrier: w, styleProp: R, verbose: A, pluginInstance: D } = e,
      { ixData: P, ixSession: H } = t.getState(),
      { events: z } = P,
      q = z && z[d] ? z[d] : {},
      { mediaQueries: te = P.mediaQueryKeys } = q;
    if (jn(te, H.mediaQueryKey) && (n || r || i)) {
      if (f || (s === UM && i)) {
        t.dispatch(zo(o, u, f, a));
        let { ixElements: Y } = t.getState(),
          { ref: $, refType: ne, refState: j } = Y[o] || {},
          C = j && j[u];
        (ne === Ev || Yn(u)) && WM($, j, C, d, a, R, Ne, s, D);
      }
      if (i) {
        if (w) {
          let Y = Nr({ store: t, eventId: d, eventTarget: E, eventStateKey: m, actionListId: _, groupIndex: T + 1, verbose: A });
          A && !Y && t.dispatch(tr({ actionListId: _, isPlaying: !1 }));
        }
        pa(e, t);
      }
    }
  }
  var dv,
    lt,
    pv,
    gv,
    hv,
    vv,
    nr,
    mv,
    Bn,
    GM,
    ua,
    ca,
    zn,
    Ev,
    UM,
    lv,
    Kn,
    VM,
    la,
    Ot,
    HM,
    WM,
    yv,
    BM,
    zM,
    KM,
    jM,
    YM,
    QM,
    jn,
    $M,
    ZM,
    JM,
    e1,
    t1,
    Yn,
    fa,
    r1,
    fv,
    n1,
    i1,
    E1,
    _1,
    b1,
    I1,
    sa = me(() => {
      "use strict";
      (dv = pe(eo())), (lt = pe(gn())), (pv = pe(Xp())), (gv = pe(fg())), (hv = pe(pg())), (vv = pe(hg())), (nr = pe(bg())), (mv = pe(Sg()));
      Fe();
      Bn = pe(At());
      Fn();
      Dg();
      cv();
      (GM = Object.keys(Br)),
        (ua = (e) => GM.includes(e)),
        ({ COLON_DELIMITER: ca, BOUNDARY_SELECTOR: zn, HTML_ELEMENT: Ev, RENDER_GENERAL: UM, W_MOD_IX: lv } = Se),
        ({ getAffectedElements: Kn, getElementId: VM, getDestinationValues: la, observeStore: Ot, getInstanceId: HM, renderHTMLElement: WM, clearAllStyles: yv, getMaxDurationItemIndex: BM, getComputedStyle: zM, getInstanceOrigin: KM, reduceListToGroup: jM, shouldNamespaceEventParameter: YM, getNamespacedParameterId: QM, shouldAllowMediaQuery: jn, cleanupHTMLElement: $M, clearObjectCache: ZM, stringifyTarget: JM, mediaQueriesEqual: e1, shallowEqual: t1 } = Bn.IX2VanillaUtils),
        ({ isPluginType: Yn, createPluginInstance: fa, getPluginDuration: r1 } = Bn.IX2VanillaPlugins),
        (fv = navigator.userAgent),
        (n1 = fv.match(/iPad/i) || fv.match(/iPhone/)),
        (i1 = 12);
      E1 = ["resize", "orientationchange"];
      (_1 = (e, t) => (0, gv.default)((0, vv.default)(e, t), hv.default)),
        (b1 = (e, t) => {
          (0, nr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + ca + o;
              t(i, n, a);
            });
          });
        }),
        (I1 = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Kn({ config: t, elementApi: Ne });
        });
    });
  var Rv = g((ha) => {
    "use strict";
    Object.defineProperty(ha, "__esModule", { value: !0 });
    function A1(e, t) {
      for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }
    A1(ha, {
      actions: function () {
        return R1;
      },
      destroy: function () {
        return Sv;
      },
      init: function () {
        return N1;
      },
      setEnv: function () {
        return P1;
      },
      store: function () {
        return Zn;
      },
    });
    var O1 = Ii(),
      S1 = C1((_p(), $e(yp))),
      ga = (sa(), $e(Av)),
      R1 = L1((Fn(), $e(Cg)));
    function C1(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Ov(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (Ov = function (n) {
        return n ? r : t;
      })(e);
    }
    function L1(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (typeof e != "object" && typeof e != "function")) return { default: e };
      var r = Ov(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    var Zn = (0, O1.createStore)(S1.default);
    function P1(e) {
      e() && (0, ga.observeRequests)(Zn);
    }
    function N1(e) {
      Sv(), (0, ga.startEngine)({ store: Zn, rawData: e, allowEvents: !0 });
    }
    function Sv() {
      (0, ga.stopEngine)(Zn);
    }
  });
  var Nv = g((HX, Pv) => {
    "use strict";
    var Cv = Oe(),
      Lv = Rv();
    Lv.setEnv(Cv.env);
    Cv.define(
      "ix2",
      (Pv.exports = function () {
        return Lv;
      })
    );
  });
  var Mv = g((WX, Dv) => {
    "use strict";
    var ir = Oe();
    ir.define(
      "links",
      (Dv.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = ir.env(),
          a = window.location,
          u = document.createElement("a"),
          s = "w--current",
          f = /index\.(html|php)$/,
          T = /\/$/,
          d,
          E;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && ir.env("design")), (E = ir.env("slug") || a.pathname || ""), ir.scroll.off(w), (d = []);
          for (var A = document.links, D = 0; D < A.length; ++D) _(A[D]);
          d.length && (ir.scroll.on(w), w());
        }
        function _(A) {
          if (!A.getAttribute("hreflang")) {
            var D = (i && A.getAttribute("href-disabled")) || A.getAttribute("href");
            if (((u.href = D), !(D.indexOf(":") >= 0))) {
              var P = e(A);
              if (u.hash.length > 1 && u.host + u.pathname === a.host + a.pathname) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
                var H = e(u.hash);
                H.length && d.push({ link: P, sec: H, active: !1 });
                return;
              }
              if (!(D === "#" || D === "")) {
                var z = u.href === a.href || D === E || (f.test(D) && T.test(E));
                R(P, s, z);
              }
            }
          }
        }
        function w() {
          var A = n.scrollTop(),
            D = n.height();
          t.each(d, function (P) {
            if (!P.link.attr("hreflang")) {
              var H = P.link,
                z = P.sec,
                q = z.offset().top,
                te = z.outerHeight(),
                Y = D * 0.5,
                $ = z.is(":visible") && q + te - Y >= A && q + Y <= A + D;
              P.active !== $ && ((P.active = $), R(H, s, $));
            }
          });
        }
        function R(A, D, P) {
          var H = A.hasClass(D);
          (P && H) || (!P && !H) || (P ? A.addClass(D) : A.removeClass(D));
        }
        return r;
      })
    );
  });
  var qv = g((BX, Fv) => {
    "use strict";
    var Jn = Oe();
    Jn.define(
      "scroll",
      (Fv.exports = function (e) {
        var t = { WF_CLICK_EMPTY: "click.wf-empty-link", WF_CLICK_SCROLL: "click.wf-scroll" },
          r = window.location,
          n = _() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          u =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (C) {
              window.setTimeout(C, 15);
            },
          s = Jn.env("editor") ? ".w-editor-body" : "body",
          f = "header, " + s + " > .header, " + s + " > .w-nav:not([data-no-scroll])",
          T = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + T + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(E));
        function _() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var w = /^#[a-zA-Z0-9][\w:.-]*$/;
        function R(C) {
          return w.test(C.hash) && C.host + C.pathname === r.host + r.pathname;
        }
        let A = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
        function D() {
          return document.body.getAttribute("data-wf-scroll-motion") === "none" || A.matches;
        }
        function P(C, b) {
          var N;
          switch (b) {
            case "add":
              (N = C.attr("tabindex")), N ? C.attr("data-wf-tabindex-swap", N) : C.attr("tabindex", "-1");
              break;
            case "remove":
              (N = C.attr("data-wf-tabindex-swap")), N ? (C.attr("tabindex", N), C.removeAttr("data-wf-tabindex-swap")) : C.removeAttr("tabindex");
              break;
          }
          C.toggleClass("wf-force-outline-none", b === "add");
        }
        function H(C) {
          var b = C.currentTarget;
          if (!(Jn.env("design") || (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(b.className)))) {
            var N = R(b) ? b.hash : "";
            if (N !== "") {
              var k = e(N);
              k.length &&
                (C && (C.preventDefault(), C.stopPropagation()),
                z(N, C),
                window.setTimeout(
                  function () {
                    q(k, function () {
                      P(k, "add"), k.get(0).focus({ preventScroll: !0 }), P(k, "remove");
                    });
                  },
                  C ? 0 : 300
                ));
            }
          }
        }
        function z(C) {
          if (r.hash !== C && n && n.pushState && !(Jn.env.chrome && r.protocol === "file:")) {
            var b = n.state && n.state.hash;
            b !== C && n.pushState({ hash: C }, "", C);
          }
        }
        function q(C, b) {
          var N = i.scrollTop(),
            k = te(C);
          if (N !== k) {
            var B = Y(C, N, k),
              F = Date.now(),
              G = function () {
                var Z = Date.now() - F;
                window.scroll(0, $(N, k, Z, B)), Z <= B ? u(G) : typeof b == "function" && b();
              };
            u(G);
          }
        }
        function te(C) {
          var b = e(f),
            N = b.css("position") === "fixed" ? b.outerHeight() : 0,
            k = C.offset().top - N;
          if (C.data("scroll") === "mid") {
            var B = i.height() - N,
              F = C.outerHeight();
            F < B && (k -= Math.round((B - F) / 2));
          }
          return k;
        }
        function Y(C, b, N) {
          if (D()) return 0;
          var k = 1;
          return (
            a.add(C).each(function (B, F) {
              var G = parseFloat(F.getAttribute("data-scroll-time"));
              !isNaN(G) && G >= 0 && (k = G);
            }),
            (472.143 * Math.log(Math.abs(b - N) + 125) - 2e3) * k
          );
        }
        function $(C, b, N, k) {
          return N > k ? b : C + (b - C) * ne(N / k);
        }
        function ne(C) {
          return C < 0.5 ? 4 * C * C * C : (C - 1) * (2 * C - 2) * (2 * C - 2) + 1;
        }
        function j() {
          var { WF_CLICK_EMPTY: C, WF_CLICK_SCROLL: b } = t;
          o.on(b, d, H),
            o.on(C, T, function (N) {
              N.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: j };
      })
    );
  });
  var Xv = g((zX, kv) => {
    "use strict";
    var D1 = Oe();
    D1.define(
      "touch",
      (kv.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null;
          });
        function n(o) {
          var a = !1,
            u = !1,
            s = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            T;
          o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", E, !1), o.addEventListener("touchend", m, !1), o.addEventListener("touchcancel", _, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", E, !1), o.addEventListener("mouseup", m, !1), o.addEventListener("mouseout", _, !1);
          function d(R) {
            var A = R.touches;
            (A && A.length > 1) || ((a = !0), A ? ((u = !0), (f = A[0].clientX)) : (f = R.clientX), (T = f));
          }
          function E(R) {
            if (a) {
              if (u && R.type === "mousemove") {
                R.preventDefault(), R.stopPropagation();
                return;
              }
              var A = R.touches,
                D = A ? A[0].clientX : R.clientX,
                P = D - T;
              (T = D), Math.abs(P) > s && r && String(r()) === "" && (i("swipe", R, { direction: P > 0 ? "right" : "left" }), _());
            }
          }
          function m(R) {
            if (a && ((a = !1), u && R.type === "mouseup")) {
              R.preventDefault(), R.stopPropagation(), (u = !1);
              return;
            }
          }
          function _() {
            a = !1;
          }
          function w() {
            o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", E, !1), o.removeEventListener("touchend", m, !1), o.removeEventListener("touchcancel", _, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", E, !1), o.removeEventListener("mouseup", m, !1), o.removeEventListener("mouseout", _, !1), (o = null);
          }
          this.destroy = w;
        }
        function i(o, a, u) {
          var s = e.Event(o, { originalEvent: a });
          e(a.target).trigger(s, u);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var Vv = g((KX, Uv) => {
    "use strict";
    var St = Oe(),
      M1 = Lt(),
      Qe = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
      Gv = !0,
      F1 = /^#[a-zA-Z0-9\-_]+$/;
    St.define(
      "dropdown",
      (Uv.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = St.env(),
          o = !1,
          a,
          u = St.env.touch,
          s = ".w-dropdown",
          f = "w--open",
          T = M1.triggers,
          d = 900,
          E = "focusout" + s,
          m = "keydown" + s,
          _ = "mouseenter" + s,
          w = "mousemove" + s,
          R = "mouseleave" + s,
          A = (u ? "click" : "mouseup") + s,
          D = "w-close" + s,
          P = "setting" + s,
          H = e(document),
          z;
        (n.ready = q),
          (n.design = function () {
            o && b(), (o = !1), q();
          }),
          (n.preview = function () {
            (o = !0), q();
          });
        function q() {
          (a = i && St.env("design")), (z = H.find(s)), z.each(te);
        }
        function te(c, I) {
          var x = e(I),
            S = e.data(I, s);
          S || (S = e.data(I, s, { open: !1, el: x, config: {}, selectedIdx: -1 })), (S.toggle = S.el.children(".w-dropdown-toggle")), (S.list = S.el.children(".w-dropdown-list")), (S.links = S.list.find("a:not(.w-dropdown .w-dropdown a)")), (S.complete = B(S)), (S.mouseLeave = G(S)), (S.mouseUpOutside = k(S)), (S.mouseMoveOutside = Z(S)), Y(S);
          var V = S.toggle.attr("id"),
            ee = S.list.attr("id");
          V || (V = "w-dropdown-toggle-" + c),
            ee || (ee = "w-dropdown-list-" + c),
            S.toggle.attr("id", V),
            S.toggle.attr("aria-controls", ee),
            S.toggle.attr("aria-haspopup", "menu"),
            S.toggle.attr("aria-expanded", "false"),
            S.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
            S.toggle.prop("tagName") !== "BUTTON" && (S.toggle.attr("role", "button"), S.toggle.attr("tabindex") || S.toggle.attr("tabindex", "0")),
            S.list.attr("id", ee),
            S.list.attr("aria-labelledby", V),
            S.links.each(function (h, W) {
              W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"), F1.test(W.hash) && W.addEventListener("click", C.bind(null, S));
            }),
            S.el.off(s),
            S.toggle.off(s),
            S.nav && S.nav.off(s);
          var K = ne(S, Gv);
          a && S.el.on(P, $(S)), a || (i && ((S.hovering = !1), C(S)), S.config.hover && S.toggle.on(_, F(S)), S.el.on(D, K), S.el.on(m, ie(S)), S.el.on(E, l(S)), S.toggle.on(A, K), S.toggle.on(m, v(S)), (S.nav = S.el.closest(".w-nav")), S.nav.on(D, K));
        }
        function Y(c) {
          var I = Number(c.el.css("z-index"));
          (c.manageZ = I === d || I === d + 1), (c.config = { hover: c.el.attr("data-hover") === "true" && !u, delay: c.el.attr("data-delay") });
        }
        function $(c) {
          return function (I, x) {
            (x = x || {}), Y(c), x.open === !0 && j(c, !0), x.open === !1 && C(c, { immediate: !0 });
          };
        }
        function ne(c, I) {
          return r(function (x) {
            if (c.open || (x && x.type === "w-close")) return C(c, { forceClose: I });
            j(c);
          });
        }
        function j(c) {
          if (!c.open) {
            N(c), (c.open = !0), c.list.addClass(f), c.toggle.addClass(f), c.toggle.attr("aria-expanded", "true"), T.intro(0, c.el[0]), St.redraw.up(), c.manageZ && c.el.css("z-index", d + 1);
            var I = St.env("editor");
            a || H.on(A, c.mouseUpOutside), c.hovering && !I && c.el.on(R, c.mouseLeave), c.hovering && I && H.on(w, c.mouseMoveOutside), window.clearTimeout(c.delayId);
          }
        }
        function C(c, { immediate: I, forceClose: x } = {}) {
          if (c.open && !(c.config.hover && c.hovering && !x)) {
            c.toggle.attr("aria-expanded", "false"), (c.open = !1);
            var S = c.config;
            if ((T.outro(0, c.el[0]), H.off(A, c.mouseUpOutside), H.off(w, c.mouseMoveOutside), c.el.off(R, c.mouseLeave), window.clearTimeout(c.delayId), !S.delay || I)) return c.complete();
            c.delayId = window.setTimeout(c.complete, S.delay);
          }
        }
        function b() {
          H.find(s).each(function (c, I) {
            e(I).triggerHandler(D);
          });
        }
        function N(c) {
          var I = c.el[0];
          z.each(function (x, S) {
            var V = e(S);
            V.is(I) || V.has(I).length || V.triggerHandler(D);
          });
        }
        function k(c) {
          return (
            c.mouseUpOutside && H.off(A, c.mouseUpOutside),
            r(function (I) {
              if (c.open) {
                var x = e(I.target);
                if (!x.closest(".w-dropdown-toggle").length) {
                  var S = e.inArray(c.el[0], x.parents(s)) === -1,
                    V = St.env("editor");
                  if (S) {
                    if (V) {
                      var ee = x.parents().length === 1 && x.parents("svg").length === 1,
                        K = x.parents(".w-editor-bem-EditorHoverControls").length;
                      if (ee || K) return;
                    }
                    C(c);
                  }
                }
              }
            })
          );
        }
        function B(c) {
          return function () {
            c.list.removeClass(f), c.toggle.removeClass(f), c.manageZ && c.el.css("z-index", "");
          };
        }
        function F(c) {
          return function () {
            (c.hovering = !0), j(c);
          };
        }
        function G(c) {
          return function () {
            (c.hovering = !1), c.links.is(":focus") || C(c);
          };
        }
        function Z(c) {
          return r(function (I) {
            if (c.open) {
              var x = e(I.target),
                S = e.inArray(c.el[0], x.parents(s)) === -1;
              if (S) {
                var V = x.parents(".w-editor-bem-EditorHoverControls").length,
                  ee = x.parents(".w-editor-bem-RTToolbar").length,
                  K = e(".w-editor-bem-EditorOverlay"),
                  h = K.find(".w-editor-edit-outline").length || K.find(".w-editor-bem-RTToolbar").length;
                if (V || ee || h) return;
                (c.hovering = !1), C(c);
              }
            }
          });
        }
        function ie(c) {
          return function (I) {
            if (!(a || !c.open))
              switch (((c.selectedIdx = c.links.index(document.activeElement)), I.keyCode)) {
                case Qe.HOME:
                  return c.open ? ((c.selectedIdx = 0), y(c), I.preventDefault()) : void 0;
                case Qe.END:
                  return c.open ? ((c.selectedIdx = c.links.length - 1), y(c), I.preventDefault()) : void 0;
                case Qe.ESCAPE:
                  return C(c), c.toggle.focus(), I.stopPropagation();
                case Qe.ARROW_RIGHT:
                case Qe.ARROW_DOWN:
                  return (c.selectedIdx = Math.min(c.links.length - 1, c.selectedIdx + 1)), y(c), I.preventDefault();
                case Qe.ARROW_LEFT:
                case Qe.ARROW_UP:
                  return (c.selectedIdx = Math.max(-1, c.selectedIdx - 1)), y(c), I.preventDefault();
              }
          };
        }
        function y(c) {
          c.links[c.selectedIdx] && c.links[c.selectedIdx].focus();
        }
        function v(c) {
          var I = ne(c, Gv);
          return function (x) {
            if (!a) {
              if (!c.open)
                switch (x.keyCode) {
                  case Qe.ARROW_UP:
                  case Qe.ARROW_DOWN:
                    return x.stopPropagation();
                }
              switch (x.keyCode) {
                case Qe.SPACE:
                case Qe.ENTER:
                  return I(), x.stopPropagation(), x.preventDefault();
              }
            }
          };
        }
        function l(c) {
          return r(function (I) {
            var { relatedTarget: x, target: S } = I,
              V = c.el[0],
              ee = V.contains(x) || V.contains(S);
            return ee || C(c), I.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var Wv = g((jX, Hv) => {
    "use strict";
    var va = Oe(),
      q1 = (e, t, r, n) => {
        let i = document.createElement("div");
        t.appendChild(i),
          turnstile.render(i, {
            sitekey: e,
            callback: function (o) {
              r(o);
            },
            "error-callback": function () {
              n();
            },
          });
      };
    va.define(
      "forms",
      (Hv.exports = function (e, t) {
        let r = "TURNSTILE_LOADED";
        var n = {},
          i = e(document),
          o,
          a = window.location,
          u = window.XDomainRequest && !window.atob,
          s = ".w-form",
          f,
          T = /e(-)?mail/i,
          d = /^\S+@\S+$/,
          E = window.alert,
          m = va.env(),
          _,
          w,
          R;
        let A = i.find("[data-turnstile-sitekey]").data("turnstile-sitekey"),
          D;
        var P = /list-manage[1-9]?.com/i,
          H = t.debounce(function () {}, 100);
        n.ready =
          n.design =
          n.preview =
            function () {
              q(), z(), !m && !_ && Y();
            };
        function z() {
          (f = e("html").attr("data-wf-site")), (w = "https://webflow.com/api/v1/form/" + f), u && w.indexOf("https://webflow.com") >= 0 && (w = w.replace("https://webflow.com", "https://formdata.webflow.com")), (R = `${w}/signFile`), (o = e(s + " form")), o.length && o.each(te);
        }
        function q() {
          A &&
            ((D = document.createElement("script")),
            (D.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"),
            document.head.appendChild(D),
            (D.onload = () => {
              i.trigger(r);
            }));
        }
        function te(l, c) {
          var I = e(c),
            x = e.data(c, s);
          x || (x = e.data(c, s, { form: I })), $(x);
          var S = I.closest("div.w-form");
          (x.done = S.find("> .w-form-done")),
            (x.fail = S.find("> .w-form-fail")),
            (x.fileUploads = S.find(".w-file-upload")),
            x.fileUploads.each(function (K) {
              ie(K, x);
            }),
            A &&
              ((x.wait = !1),
              ne(x),
              i.on(typeof turnstile < "u" ? "ready" : r, function () {
                q1(
                  A,
                  c,
                  (K) => {
                    (x.turnstileToken = K), $(x);
                  },
                  () => {
                    ne(x);
                  }
                );
              }));
          var V = x.form.attr("aria-label") || x.form.attr("data-name") || "Form";
          x.done.attr("aria-label") || x.form.attr("aria-label", V), x.done.attr("tabindex", "-1"), x.done.attr("role", "region"), x.done.attr("aria-label") || x.done.attr("aria-label", V + " success"), x.fail.attr("tabindex", "-1"), x.fail.attr("role", "region"), x.fail.attr("aria-label") || x.fail.attr("aria-label", V + " failure");
          var ee = (x.action = I.attr("action"));
          if (((x.handler = null), (x.redirect = I.attr("data-redirect")), P.test(ee))) {
            x.handler = F;
            return;
          }
          if (!ee) {
            if (f) {
              x.handler = B;
              return;
            }
            H();
          }
        }
        function Y() {
          (_ = !0),
            i.on("submit", s + " form", function (K) {
              var h = e.data(this, s);
              h.handler && ((h.evt = K), h.handler(h));
            });
          let l = ".w-checkbox-input",
            c = ".w-radio-input",
            I = "w--redirected-checked",
            x = "w--redirected-focus",
            S = "w--redirected-focus-visible",
            V = ":focus-visible, [data-wf-focus-visible]",
            ee = [
              ["checkbox", l],
              ["radio", c],
            ];
          i.on("change", s + ' form input[type="checkbox"]:not(' + l + ")", (K) => {
            e(K.target).siblings(l).toggleClass(I);
          }),
            i.on("change", s + ' form input[type="radio"]', (K) => {
              e(`input[name="${K.target.name}"]:not(${l})`).map((W, re) => e(re).siblings(c).removeClass(I));
              let h = e(K.target);
              h.hasClass("w-radio-input") || h.siblings(c).addClass(I);
            }),
            ee.forEach(([K, h]) => {
              i.on("focus", s + ` form input[type="${K}"]:not(` + h + ")", (W) => {
                e(W.target).siblings(h).addClass(x), e(W.target).filter(V).siblings(h).addClass(S);
              }),
                i.on("blur", s + ` form input[type="${K}"]:not(` + h + ")", (W) => {
                  e(W.target).siblings(h).removeClass(`${x} ${S}`);
                });
            });
        }
        function $(l) {
          var c = (l.btn = l.form.find(':input[type="submit"]'));
          (l.wait = l.btn.attr("data-wait") || null), (l.success = !1), c.prop("disabled", !!(A && !l.turnstileToken)), l.label && c.val(l.label);
        }
        function ne(l) {
          var c = l.btn,
            I = l.wait;
          c.prop("disabled", !0), I && ((l.label = c.val()), c.val(I));
        }
        function j(l, c) {
          var I = null;
          return (
            (c = c || {}),
            l.find(':input:not([type="submit"]):not([type="file"])').each(function (x, S) {
              var V = e(S),
                ee = V.attr("type"),
                K = V.attr("data-name") || V.attr("name") || "Field " + (x + 1);
              K = encodeURIComponent(K);
              var h = V.val();
              if (ee === "checkbox") h = V.is(":checked");
              else if (ee === "radio") {
                if (c[K] === null || typeof c[K] == "string") return;
                h = l.find('input[name="' + V.attr("name") + '"]:checked').val() || null;
              }
              typeof h == "string" && (h = e.trim(h)), (c[K] = h), (I = I || k(V, ee, K, h));
            }),
            I
          );
        }
        function C(l) {
          var c = {};
          return (
            l.find(':input[type="file"]').each(function (I, x) {
              var S = e(x),
                V = S.attr("data-name") || S.attr("name") || "File " + (I + 1),
                ee = S.attr("data-value");
              typeof ee == "string" && (ee = e.trim(ee)), (c[V] = ee);
            }),
            c
          );
        }
        let b = { _mkto_trk: "marketo" };
        function N() {
          return document.cookie.split("; ").reduce(function (c, I) {
            let x = I.split("="),
              S = x[0];
            if (S in b) {
              let V = b[S],
                ee = x.slice(1).join("=");
              c[V] = ee;
            }
            return c;
          }, {});
        }
        function k(l, c, I, x) {
          var S = null;
          return c === "password" ? (S = "Passwords cannot be submitted.") : l.attr("required") ? (x ? T.test(l.attr("type")) && (d.test(x) || (S = "Please enter a valid email address for: " + I)) : (S = "Please fill out the required field: " + I)) : I === "g-recaptcha-response" && !x && (S = "Please confirm you\u2019re not a robot."), S;
        }
        function B(l) {
          Z(l), G(l);
        }
        function F(l) {
          $(l);
          var c = l.form,
            I = {};
          if (/^https/.test(a.href) && !/^https/.test(l.action)) {
            c.attr("method", "post");
            return;
          }
          Z(l);
          var x = j(c, I);
          if (x) return E(x);
          ne(l);
          var S;
          t.each(I, function (h, W) {
            T.test(W) && (I.EMAIL = h), /^((full[ _-]?)?name)$/i.test(W) && (S = h), /^(first[ _-]?name)$/i.test(W) && (I.FNAME = h), /^(last[ _-]?name)$/i.test(W) && (I.LNAME = h);
          }),
            S && !I.FNAME && ((S = S.split(" ")), (I.FNAME = S[0]), (I.LNAME = I.LNAME || S[1]));
          var V = l.action.replace("/post?", "/post-json?") + "&c=?",
            ee = V.indexOf("u=") + 2;
          ee = V.substring(ee, V.indexOf("&", ee));
          var K = V.indexOf("id=") + 3;
          (K = V.substring(K, V.indexOf("&", K))),
            (I["b_" + ee + "_" + K] = ""),
            e
              .ajax({ url: V, data: I, dataType: "jsonp" })
              .done(function (h) {
                (l.success = h.result === "success" || /already/.test(h.msg)), l.success || console.info("MailChimp error: " + h.msg), G(l);
              })
              .fail(function () {
                G(l);
              });
        }
        function G(l) {
          var c = l.form,
            I = l.redirect,
            x = l.success;
          if (x && I) {
            va.location(I);
            return;
          }
          l.done.toggle(x), l.fail.toggle(!x), x ? l.done.focus() : l.fail.focus(), c.toggle(!x), $(l);
        }
        function Z(l) {
          l.evt && l.evt.preventDefault(), (l.evt = null);
        }
        function ie(l, c) {
          if (!c.fileUploads || !c.fileUploads[l]) return;
          var I,
            x = e(c.fileUploads[l]),
            S = x.find("> .w-file-upload-default"),
            V = x.find("> .w-file-upload-uploading"),
            ee = x.find("> .w-file-upload-success"),
            K = x.find("> .w-file-upload-error"),
            h = S.find(".w-file-upload-input"),
            W = S.find(".w-file-upload-label"),
            re = W.children(),
            J = K.find(".w-file-upload-error-msg"),
            fe = ee.find(".w-file-upload-file"),
            be = ee.find(".w-file-remove-link"),
            we = fe.find(".w-file-upload-file-name"),
            p = J.attr("data-w-size-error"),
            O = J.attr("data-w-type-error"),
            L = J.attr("data-w-generic-error");
          if (
            (m ||
              W.on("click keydown", function (ae) {
                (ae.type === "keydown" && ae.which !== 13 && ae.which !== 32) || (ae.preventDefault(), h.click());
              }),
            W.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            be.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            m)
          )
            h.on("click", function (ae) {
              ae.preventDefault();
            }),
              W.on("click", function (ae) {
                ae.preventDefault();
              }),
              re.on("click", function (ae) {
                ae.preventDefault();
              });
          else {
            be.on("click keydown", function (ae) {
              if (ae.type === "keydown") {
                if (ae.which !== 13 && ae.which !== 32) return;
                ae.preventDefault();
              }
              h.removeAttr("data-value"), h.val(""), we.html(""), S.toggle(!0), ee.toggle(!1), W.focus();
            }),
              h.on("change", function (ae) {
                (I = ae.target && ae.target.files && ae.target.files[0]), I && (S.toggle(!1), K.toggle(!1), V.toggle(!0), V.focus(), we.text(I.name), ue() || ne(c), (c.fileUploads[l].uploading = !0), y(I, U));
              });
            var M = W.outerHeight();
            h.height(M), h.width(1);
          }
          function X(ae) {
            var Q = ae.responseJSON && ae.responseJSON.msg,
              ce = L;
            typeof Q == "string" && Q.indexOf("InvalidFileTypeError") === 0 ? (ce = O) : typeof Q == "string" && Q.indexOf("MaxFileSizeError") === 0 && (ce = p), J.text(ce), h.removeAttr("data-value"), h.val(""), V.toggle(!1), S.toggle(!0), K.toggle(!0), K.focus(), (c.fileUploads[l].uploading = !1), ue() || $(c);
          }
          function U(ae, Q) {
            if (ae) return X(ae);
            var ce = Q.fileName,
              le = Q.postData,
              _e = Q.fileId,
              Xe = Q.s3Url;
            h.attr("data-value", _e), v(Xe, le, I, ce, oe);
          }
          function oe(ae) {
            if (ae) return X(ae);
            V.toggle(!1), ee.css("display", "inline-block"), ee.focus(), (c.fileUploads[l].uploading = !1), ue() || $(c);
          }
          function ue() {
            var ae = (c.fileUploads && c.fileUploads.toArray()) || [];
            return ae.some(function (Q) {
              return Q.uploading;
            });
          }
        }
        function y(l, c) {
          var I = new URLSearchParams({ name: l.name, size: l.size });
          e.ajax({ type: "GET", url: `${R}?${I}`, crossDomain: !0 })
            .done(function (x) {
              c(null, x);
            })
            .fail(function (x) {
              c(x);
            });
        }
        function v(l, c, I, x, S) {
          var V = new FormData();
          for (var ee in c) V.append(ee, c[ee]);
          V.append("file", I, x),
            e
              .ajax({ type: "POST", url: l, data: V, processData: !1, contentType: !1 })
              .done(function () {
                S(null);
              })
              .fail(function (K) {
                S(K);
              });
        }
        return n;
      })
    );
  });
  var Kv = g((YX, zv) => {
    "use strict";
    var ma = Oe(),
      Bv = "w-condition-invisible",
      k1 = "." + Bv;
    function X1(e) {
      return e.filter(function (t) {
        return !Mr(t);
      });
    }
    function Mr(e) {
      return !!(e.$el && e.$el.closest(k1).length);
    }
    function Ea(e, t) {
      for (var r = e; r >= 0; r--) if (!Mr(t[r])) return r;
      return -1;
    }
    function ya(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!Mr(t[r])) return r;
      return -1;
    }
    function G1(e, t) {
      return Ea(e - 1, t) === -1;
    }
    function U1(e, t) {
      return ya(e + 1, t) === -1;
    }
    function Dr(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function V1(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        u = a + "-",
        s = /(^|\s+)/g,
        f = [],
        T,
        d,
        E,
        m = [];
      function _(v, l) {
        return (
          (f = o(v) ? v : [v]),
          d || _.build(),
          X1(f).length > 1 &&
            ((d.items = d.empty),
            f.forEach(function (c, I) {
              var x = ie("thumbnail"),
                S = ie("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(x);
              Dr(S, `show item ${I + 1} of ${f.length}`),
                Mr(c) && S.addClass(Bv),
                (d.items = d.items.add(S)),
                ne(c.thumbnailUrl || c.url, function (V) {
                  V.prop("width") > V.prop("height") ? B(V, "wide") : B(V, "tall"), x.append(B(V, "thumbnail-image"));
                });
            }),
            d.strip.empty().append(d.items),
            B(d.content, "group")),
          i(F(d.lightbox, "hide").trigger("focus")).add("opacity .3s").start({ opacity: 1 }),
          B(d.html, "noscroll"),
          _.show(l || 0)
        );
      }
      (_.build = function () {
        return (
          _.destroy(),
          (d = { html: r(t.documentElement), empty: r() }),
          (d.arrowLeft = ie("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view")),
          (d.arrowRight = ie("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view")),
          (d.close = ie("control close").attr("role", "button")),
          Dr(d.arrowLeft, "previous image"),
          Dr(d.arrowRight, "next image"),
          Dr(d.close, "close lightbox"),
          (d.spinner = ie("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image")),
          (d.strip = ie("strip").attr("role", "tablist")),
          (E = new b(d.spinner, N("hide"))),
          (d.content = ie("content").append(d.spinner, d.arrowLeft, d.arrowRight, d.close)),
          (d.container = ie("container").append(d.content, d.strip)),
          (d.lightbox = ie("backdrop hide").append(d.container)),
          d.strip.on("click", k("item"), P),
          d.content.on("swipe", H).on("click", k("left"), R).on("click", k("right"), A).on("click", k("close"), D).on("click", k("image, caption"), A),
          d.container.on("click", k("view"), D).on("dragstart", k("img"), q),
          d.lightbox.on("keydown", te).on("focusin", z),
          r(n).append(d.lightbox),
          _
        );
      }),
        (_.destroy = function () {
          d && (F(d.html, "noscroll"), d.lightbox.remove(), (d = void 0));
        }),
        (_.show = function (v) {
          if (v !== T) {
            var l = f[v];
            if (!l) return _.hide();
            if (Mr(l)) {
              if (v < T) {
                var c = Ea(v - 1, f);
                v = c > -1 ? c : v;
              } else {
                var I = ya(v + 1, f);
                v = I > -1 ? I : v;
              }
              l = f[v];
            }
            var x = T;
            (T = v), d.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), E.show();
            var S = (l.html && y(l.width, l.height)) || l.url;
            return (
              ne(S, function (V) {
                if (v !== T) return;
                var ee = ie("figure", "figure").append(B(V, "image")),
                  K = ie("frame").append(ee),
                  h = ie("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(K),
                  W,
                  re;
                l.html && ((W = r(l.html)), (re = W.is("iframe")), re && W.on("load", J), ee.append(B(W, "embed"))), l.caption && ee.append(ie("caption", "figcaption").text(l.caption)), d.spinner.before(h), re || J();
                function J() {
                  if ((d.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), E.hide(), v !== T)) {
                    h.remove();
                    return;
                  }
                  let fe = G1(v, f);
                  G(d.arrowLeft, "inactive", fe), Z(d.arrowLeft, fe), fe && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                  let be = U1(v, f);
                  if (
                    (G(d.arrowRight, "inactive", be),
                    Z(d.arrowRight, be),
                    be && d.arrowRight.is(":focus") && d.arrowLeft.focus(),
                    d.view
                      ? (i(d.view).add("opacity .3s").start({ opacity: 0 }).then(j(d.view)),
                        i(h)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: v > x ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : h.css("opacity", 1),
                    (d.view = h),
                    d.view.prop("tabIndex", 0),
                    d.items)
                  ) {
                    F(d.items, "active"), d.items.removeAttr("aria-selected");
                    var we = d.items.eq(v);
                    B(we, "active"), we.attr("aria-selected", !0), C(we);
                  }
                }
              }),
              d.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              m.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (m.push({ node: r(this), hidden: r(this).attr("aria-hidden"), tabIndex: r(this).attr("tabIndex") }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                d.close.focus()),
              _
            );
          }
        }),
        (_.hide = function () {
          return i(d.lightbox).add("opacity .3s").start({ opacity: 0 }).then($), _;
        }),
        (_.prev = function () {
          var v = Ea(T - 1, f);
          v > -1 && _.show(v);
        }),
        (_.next = function () {
          var v = ya(T + 1, f);
          v > -1 && _.show(v);
        });
      function w(v) {
        return function (l) {
          this === l.target && (l.stopPropagation(), l.preventDefault(), v());
        };
      }
      var R = w(_.prev),
        A = w(_.next),
        D = w(_.hide),
        P = function (v) {
          var l = r(this).index();
          v.preventDefault(), _.show(l);
        },
        H = function (v, l) {
          v.preventDefault(), l.direction === "left" ? _.next() : l.direction === "right" && _.prev();
        },
        z = function () {
          this.focus();
        };
      function q(v) {
        v.preventDefault();
      }
      function te(v) {
        var l = v.keyCode;
        l === 27 || Y(l, "close") ? _.hide() : l === 37 || Y(l, "left") ? _.prev() : l === 39 || Y(l, "right") ? _.next() : Y(l, "item") && r(":focus").click();
      }
      function Y(v, l) {
        if (v !== 13 && v !== 32) return !1;
        var c = r(":focus").attr("class"),
          I = N(l).trim();
        return c.includes(I);
      }
      function $() {
        d &&
          (d.strip.scrollLeft(0).empty(),
          F(d.html, "noscroll"),
          B(d.lightbox, "hide"),
          d.view && d.view.remove(),
          F(d.content, "group"),
          B(d.arrowLeft, "inactive"),
          B(d.arrowRight, "inactive"),
          (T = d.view = void 0),
          m.forEach(function (v) {
            var l = v.node;
            l && (v.hidden ? l.attr("aria-hidden", v.hidden) : l.removeAttr("aria-hidden"), v.tabIndex ? l.attr("tabIndex", v.tabIndex) : l.removeAttr("tabIndex"));
          }),
          (m = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function ne(v, l) {
        var c = ie("img", "img");
        return (
          c.one("load", function () {
            l(c);
          }),
          c.attr("src", v),
          c
        );
      }
      function j(v) {
        return function () {
          v.remove();
        };
      }
      function C(v) {
        var l = v.get(0),
          c = d.strip.get(0),
          I = l.offsetLeft,
          x = l.clientWidth,
          S = c.scrollLeft,
          V = c.clientWidth,
          ee = c.scrollWidth - V,
          K;
        I < S ? (K = Math.max(0, I + x - V)) : I + x > V + S && (K = Math.min(I, ee)), K != null && i(d.strip).add("scroll-left 500ms").start({ "scroll-left": K });
      }
      function b(v, l, c) {
        (this.$element = v), (this.className = l), (this.delay = c || 200), this.hide();
      }
      (b.prototype.show = function () {
        var v = this;
        v.timeoutId ||
          (v.timeoutId = setTimeout(function () {
            v.$element.removeClass(v.className), delete v.timeoutId;
          }, v.delay));
      }),
        (b.prototype.hide = function () {
          var v = this;
          if (v.timeoutId) {
            clearTimeout(v.timeoutId), delete v.timeoutId;
            return;
          }
          v.$element.addClass(v.className);
        });
      function N(v, l) {
        return v.replace(s, (l ? " ." : " ") + u);
      }
      function k(v) {
        return N(v, !0);
      }
      function B(v, l) {
        return v.addClass(N(l));
      }
      function F(v, l) {
        return v.removeClass(N(l));
      }
      function G(v, l, c) {
        return v.toggleClass(N(l), c);
      }
      function Z(v, l) {
        return v.attr("aria-hidden", l).attr("tabIndex", l ? -1 : 0);
      }
      function ie(v, l) {
        return B(r(t.createElement(l || "div")), v);
      }
      function y(v, l) {
        var c = '<svg xmlns="http://www.w3.org/2000/svg" width="' + v + '" height="' + l + '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(c);
      }
      return (
        (function () {
          var v = e.navigator.userAgent,
            l = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            c = v.match(l),
            I = v.indexOf("Android ") > -1 && v.indexOf("Chrome") === -1;
          if (!I && (!c || c[2] > 7)) return;
          var x = t.createElement("style");
          t.head.appendChild(x), e.addEventListener("resize", S, !0);
          function S() {
            var V = e.innerHeight,
              ee = e.innerWidth,
              K =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                V +
                "px}.w-lightbox-view {width:" +
                ee +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * V +
                "px}.w-lightbox-image {max-width:" +
                ee +
                "px;max-height:" +
                V +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * V +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * V +
                "px}.w-lightbox-item {width:" +
                0.1 * V +
                "px;padding:" +
                0.02 * V +
                "px " +
                0.01 * V +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * V +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * V +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * V +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * V +
                "px}.w-lightbox-image {max-width:" +
                0.96 * ee +
                "px;max-height:" +
                0.96 * V +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * ee +
                "px;max-height:" +
                0.84 * V +
                "px}}";
            x.textContent = K;
          }
          S();
        })(),
        _
      );
    }
    ma.define(
      "lightbox",
      (zv.exports = function (e) {
        var t = {},
          r = ma.env(),
          n = V1(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          u = ".w-lightbox",
          s;
        t.ready = t.design = t.preview = f;
        function f() {
          (a = r && ma.env("design")),
            n.destroy(),
            (s = {}),
            (o = i.find(u)),
            o.webflowLightBox(),
            o.each(function () {
              Dr(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var m = this;
            e.each(m, function (_, w) {
              var R = e.data(w, u);
              R || (R = e.data(w, u, { el: e(w), mode: "images", images: [], embed: "" })),
                R.el.off(u),
                T(R),
                a
                  ? R.el.on("setting" + u, T.bind(null, R))
                  : R.el.on("click" + u, d(R)).on("click" + u, function (A) {
                      A.preventDefault();
                    });
            });
          },
        });
        function T(m) {
          var _ = m.el.children(".w-json").html(),
            w,
            R;
          if (!_) {
            m.items = [];
            return;
          }
          try {
            _ = JSON.parse(_);
          } catch (A) {
            console.error("Malformed lightbox JSON configuration.", A);
          }
          E(_),
            _.items.forEach(function (A) {
              A.$el = m.el;
            }),
            (w = _.group),
            w ? ((R = s[w]), R || (R = s[w] = []), (m.items = R), _.items.length && ((m.index = R.length), R.push.apply(R, _.items))) : ((m.items = _.items), (m.index = 0));
        }
        function d(m) {
          return function () {
            m.items.length && n(m.items, m.index || 0);
          };
        }
        function E(m) {
          m.images &&
            (m.images.forEach(function (_) {
              _.type = "image";
            }),
            (m.items = m.images)),
            m.embed && ((m.embed.type = "video"), (m.items = [m.embed])),
            m.groupId && (m.group = m.groupId);
        }
        return t;
      })
    );
  });
  var Yv = g((QX, jv) => {
    "use strict";
    var mt = Oe(),
      H1 = Lt(),
      Ae = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, ESCAPE: 27, SPACE: 32, ENTER: 13, HOME: 36, END: 35 };
    mt.define(
      "navbar",
      (jv.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          u,
          s,
          f,
          T,
          d = mt.env(),
          E = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          _ = "w--open",
          w = "w--nav-dropdown-open",
          R = "w--nav-dropdown-toggle-open",
          A = "w--nav-dropdown-list-open",
          D = "w--nav-link-open",
          P = H1.triggers,
          H = e();
        (r.ready = r.design = r.preview = z),
          (r.destroy = function () {
            (H = e()), q(), s && s.length && s.each(ne);
          });
        function z() {
          (f = d && mt.env("design")), (T = mt.env("editor")), (u = e(document.body)), (s = o.find(m)), s.length && (s.each($), q(), te());
        }
        function q() {
          mt.resize.off(Y);
        }
        function te() {
          mt.resize.on(Y);
        }
        function Y() {
          s.each(l);
        }
        function $(h, W) {
          var re = e(W),
            J = e.data(W, m);
          J || (J = e.data(W, m, { open: !1, el: re, config: {}, selectedIdx: -1 })), (J.menu = re.find(".w-nav-menu")), (J.links = J.menu.find(".w-nav-link")), (J.dropdowns = J.menu.find(".w-dropdown")), (J.dropdownToggle = J.menu.find(".w-dropdown-toggle")), (J.dropdownList = J.menu.find(".w-dropdown-list")), (J.button = re.find(".w-nav-button")), (J.container = re.find(".w-container")), (J.overlayContainerId = "w-nav-overlay-" + h), (J.outside = y(J));
          var fe = re.find(".w-nav-brand");
          fe && fe.attr("href") === "/" && fe.attr("aria-label") == null && fe.attr("aria-label", "home"),
            J.button.attr("style", "-webkit-user-select: text;"),
            J.button.attr("aria-label") == null && J.button.attr("aria-label", "menu"),
            J.button.attr("role", "button"),
            J.button.attr("tabindex", "0"),
            J.button.attr("aria-controls", J.overlayContainerId),
            J.button.attr("aria-haspopup", "menu"),
            J.button.attr("aria-expanded", "false"),
            J.el.off(m),
            J.button.off(m),
            J.menu.off(m),
            b(J),
            f ? (j(J), J.el.on("setting" + m, N(J))) : (C(J), J.button.on("click" + m, Z(J)), J.menu.on("click" + m, "a", ie(J)), J.button.on("keydown" + m, k(J)), J.el.on("keydown" + m, B(J))),
            l(h, W);
        }
        function ne(h, W) {
          var re = e.data(W, m);
          re && (j(re), e.removeData(W, m));
        }
        function j(h) {
          h.overlay && (K(h, !0), h.overlay.remove(), (h.overlay = null));
        }
        function C(h) {
          h.overlay || ((h.overlay = e(E).appendTo(h.el)), h.overlay.attr("id", h.overlayContainerId), (h.parent = h.menu.parent()), K(h, !0));
        }
        function b(h) {
          var W = {},
            re = h.config || {},
            J = (W.animation = h.el.attr("data-animation") || "default");
          (W.animOver = /^over/.test(J)), (W.animDirect = /left$/.test(J) ? -1 : 1), re.animation !== J && h.open && t.defer(G, h), (W.easing = h.el.attr("data-easing") || "ease"), (W.easing2 = h.el.attr("data-easing2") || "ease");
          var fe = h.el.attr("data-duration");
          (W.duration = fe != null ? Number(fe) : 400), (W.docHeight = h.el.attr("data-doc-height")), (h.config = W);
        }
        function N(h) {
          return function (W, re) {
            re = re || {};
            var J = i.width();
            b(h),
              re.open === !0 && V(h, !0),
              re.open === !1 && K(h, !0),
              h.open &&
                t.defer(function () {
                  J !== i.width() && G(h);
                });
          };
        }
        function k(h) {
          return function (W) {
            switch (W.keyCode) {
              case Ae.SPACE:
              case Ae.ENTER:
                return Z(h)(), W.preventDefault(), W.stopPropagation();
              case Ae.ESCAPE:
                return K(h), W.preventDefault(), W.stopPropagation();
              case Ae.ARROW_RIGHT:
              case Ae.ARROW_DOWN:
              case Ae.HOME:
              case Ae.END:
                return h.open ? (W.keyCode === Ae.END ? (h.selectedIdx = h.links.length - 1) : (h.selectedIdx = 0), F(h), W.preventDefault(), W.stopPropagation()) : (W.preventDefault(), W.stopPropagation());
            }
          };
        }
        function B(h) {
          return function (W) {
            if (h.open)
              switch (((h.selectedIdx = h.links.index(document.activeElement)), W.keyCode)) {
                case Ae.HOME:
                case Ae.END:
                  return W.keyCode === Ae.END ? (h.selectedIdx = h.links.length - 1) : (h.selectedIdx = 0), F(h), W.preventDefault(), W.stopPropagation();
                case Ae.ESCAPE:
                  return K(h), h.button.focus(), W.preventDefault(), W.stopPropagation();
                case Ae.ARROW_LEFT:
                case Ae.ARROW_UP:
                  return (h.selectedIdx = Math.max(-1, h.selectedIdx - 1)), F(h), W.preventDefault(), W.stopPropagation();
                case Ae.ARROW_RIGHT:
                case Ae.ARROW_DOWN:
                  return (h.selectedIdx = Math.min(h.links.length - 1, h.selectedIdx + 1)), F(h), W.preventDefault(), W.stopPropagation();
              }
          };
        }
        function F(h) {
          if (h.links[h.selectedIdx]) {
            var W = h.links[h.selectedIdx];
            W.focus(), ie(W);
          }
        }
        function G(h) {
          h.open && (K(h, !0), V(h, !0));
        }
        function Z(h) {
          return a(function () {
            h.open ? K(h) : V(h);
          });
        }
        function ie(h) {
          return function (W) {
            var re = e(this),
              J = re.attr("href");
            if (!mt.validClick(W.currentTarget)) {
              W.preventDefault();
              return;
            }
            J && J.indexOf("#") === 0 && h.open && K(h);
          };
        }
        function y(h) {
          return (
            h.outside && o.off("click" + m, h.outside),
            function (W) {
              var re = e(W.target);
              (T && re.closest(".w-editor-bem-EditorOverlay").length) || v(h, re);
            }
          );
        }
        var v = a(function (h, W) {
          if (h.open) {
            var re = W.closest(".w-nav-menu");
            h.menu.is(re) || K(h);
          }
        });
        function l(h, W) {
          var re = e.data(W, m),
            J = (re.collapsed = re.button.css("display") !== "none");
          if ((re.open && !J && !f && K(re, !0), re.container.length)) {
            var fe = I(re);
            re.links.each(fe), re.dropdowns.each(fe);
          }
          re.open && ee(re);
        }
        var c = "max-width";
        function I(h) {
          var W = h.container.css(c);
          return (
            W === "none" && (W = ""),
            function (re, J) {
              (J = e(J)), J.css(c, ""), J.css(c) === "none" && J.css(c, W);
            }
          );
        }
        function x(h, W) {
          W.setAttribute("data-nav-menu-open", "");
        }
        function S(h, W) {
          W.removeAttribute("data-nav-menu-open");
        }
        function V(h, W) {
          if (h.open) return;
          (h.open = !0), h.menu.each(x), h.links.addClass(D), h.dropdowns.addClass(w), h.dropdownToggle.addClass(R), h.dropdownList.addClass(A), h.button.addClass(_);
          var re = h.config,
            J = re.animation;
          (J === "none" || !n.support.transform || re.duration <= 0) && (W = !0);
          var fe = ee(h),
            be = h.menu.outerHeight(!0),
            we = h.menu.outerWidth(!0),
            p = h.el.height(),
            O = h.el[0];
          if ((l(0, O), P.intro(0, O), mt.redraw.up(), f || o.on("click" + m, h.outside), W)) {
            X();
            return;
          }
          var L = "transform " + re.duration + "ms " + re.easing;
          if ((h.overlay && ((H = h.menu.prev()), h.overlay.show().append(h.menu)), re.animOver)) {
            n(h.menu)
              .add(L)
              .set({ x: re.animDirect * we, height: fe })
              .start({ x: 0 })
              .then(X),
              h.overlay && h.overlay.width(we);
            return;
          }
          var M = p + be;
          n(h.menu).add(L).set({ y: -M }).start({ y: 0 }).then(X);
          function X() {
            h.button.attr("aria-expanded", "true");
          }
        }
        function ee(h) {
          var W = h.config,
            re = W.docHeight ? o.height() : u.height();
          return W.animOver ? h.menu.height(re) : h.el.css("position") !== "fixed" && (re -= h.el.outerHeight(!0)), h.overlay && h.overlay.height(re), re;
        }
        function K(h, W) {
          if (!h.open) return;
          (h.open = !1), h.button.removeClass(_);
          var re = h.config;
          if (((re.animation === "none" || !n.support.transform || re.duration <= 0) && (W = !0), P.outro(0, h.el[0]), o.off("click" + m, h.outside), W)) {
            n(h.menu).stop(), O();
            return;
          }
          var J = "transform " + re.duration + "ms " + re.easing2,
            fe = h.menu.outerHeight(!0),
            be = h.menu.outerWidth(!0),
            we = h.el.height();
          if (re.animOver) {
            n(h.menu)
              .add(J)
              .start({ x: be * re.animDirect })
              .then(O);
            return;
          }
          var p = we + fe;
          n(h.menu).add(J).start({ y: -p }).then(O);
          function O() {
            h.menu.height(""), n(h.menu).set({ x: 0, y: 0 }), h.menu.each(S), h.links.removeClass(D), h.dropdowns.removeClass(w), h.dropdownToggle.removeClass(R), h.dropdownList.removeClass(A), h.overlay && h.overlay.children().length && (H.length ? h.menu.insertAfter(H) : h.menu.prependTo(h.parent), h.overlay.attr("style", "").hide()), h.el.triggerHandler("w-close"), h.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Zv = g(($X, $v) => {
    "use strict";
    var Et = Oe(),
      W1 = Lt(),
      ot = { ARROW_LEFT: 37, ARROW_UP: 38, ARROW_RIGHT: 39, ARROW_DOWN: 40, SPACE: 32, ENTER: 13, HOME: 36, END: 35 },
      Qv = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    Et.define(
      "slider",
      ($v.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          u = Et.env(),
          s = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          T = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          d = "w-slider-force-show",
          E = W1.triggers,
          m,
          _ = !1;
        (r.ready = function () {
          (a = Et.env("design")), w();
        }),
          (r.design = function () {
            (a = !0), setTimeout(w, 1e3);
          }),
          (r.preview = function () {
            (a = !1), w();
          }),
          (r.redraw = function () {
            (_ = !0), w(), (_ = !1);
          }),
          (r.destroy = R);
        function w() {
          (o = i.find(s)), o.length && (o.each(P), !m && (R(), A()));
        }
        function R() {
          Et.resize.off(D), Et.redraw.off(r.redraw);
        }
        function A() {
          Et.resize.on(D), Et.redraw.on(r.redraw);
        }
        function D() {
          o.filter(":visible").each(B);
        }
        function P(y, v) {
          var l = e(v),
            c = e.data(v, s);
          c || (c = e.data(v, s, { index: 0, depth: 1, hasFocus: { keyboard: !1, mouse: !1 }, el: l, config: {} })),
            (c.mask = l.children(".w-slider-mask")),
            (c.left = l.children(".w-slider-arrow-left")),
            (c.right = l.children(".w-slider-arrow-right")),
            (c.nav = l.children(".w-slider-nav")),
            (c.slides = c.mask.children(".w-slide")),
            c.slides.each(E.reset),
            _ && (c.maskWidth = 0),
            l.attr("role") === void 0 && l.attr("role", "region"),
            l.attr("aria-label") === void 0 && l.attr("aria-label", "carousel");
          var I = c.mask.attr("id");
          if (
            (I || ((I = "w-slider-mask-" + y), c.mask.attr("id", I)),
            !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(T).appendTo(c.mask)),
            c.left.attr("role", "button"),
            c.left.attr("tabindex", "0"),
            c.left.attr("aria-controls", I),
            c.left.attr("aria-label") === void 0 && c.left.attr("aria-label", "previous slide"),
            c.right.attr("role", "button"),
            c.right.attr("tabindex", "0"),
            c.right.attr("aria-controls", I),
            c.right.attr("aria-label") === void 0 && c.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            c.left.hide(), c.right.hide(), c.nav.hide(), (m = !0);
            return;
          }
          c.el.off(s),
            c.left.off(s),
            c.right.off(s),
            c.nav.off(s),
            H(c),
            a
              ? (c.el.on("setting" + s, b(c)), C(c), (c.hasTimer = !1))
              : (c.el.on("swipe" + s, b(c)), c.left.on("click" + s, Y(c)), c.right.on("click" + s, $(c)), c.left.on("keydown" + s, te(c, Y)), c.right.on("keydown" + s, te(c, $)), c.nav.on("keydown" + s, "> div", b(c)), c.config.autoplay && !c.hasTimer && ((c.hasTimer = !0), (c.timerCount = 1), j(c)), c.el.on("mouseenter" + s, q(c, !0, "mouse")), c.el.on("focusin" + s, q(c, !0, "keyboard")), c.el.on("mouseleave" + s, q(c, !1, "mouse")), c.el.on("focusout" + s, q(c, !1, "keyboard"))),
            c.nav.on("click" + s, "> div", b(c)),
            u ||
              c.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var x = l.filter(":hidden");
          x.addClass(d);
          var S = l.parents(":hidden");
          S.addClass(d), _ || B(y, v), x.removeClass(d), S.removeClass(d);
        }
        function H(y) {
          var v = {};
          (v.crossOver = 0), (v.animation = y.el.attr("data-animation") || "slide"), v.animation === "outin" && ((v.animation = "cross"), (v.crossOver = 0.5)), (v.easing = y.el.attr("data-easing") || "ease");
          var l = y.el.attr("data-duration");
          if (((v.duration = l != null ? parseInt(l, 10) : 500), z(y.el.attr("data-infinite")) && (v.infinite = !0), z(y.el.attr("data-disable-swipe")) && (v.disableSwipe = !0), z(y.el.attr("data-hide-arrows")) ? (v.hideArrows = !0) : y.config.hideArrows && (y.left.show(), y.right.show()), z(y.el.attr("data-autoplay")))) {
            (v.autoplay = !0), (v.delay = parseInt(y.el.attr("data-delay"), 10) || 2e3), (v.timerMax = parseInt(y.el.attr("data-autoplay-limit"), 10));
            var c = "mousedown" + s + " touchstart" + s;
            a ||
              y.el.off(c).one(c, function () {
                C(y);
              });
          }
          var I = y.right.width();
          (v.edge = I ? I + 40 : 100), (y.config = v);
        }
        function z(y) {
          return y === "1" || y === "true";
        }
        function q(y, v, l) {
          return function (c) {
            if (v) y.hasFocus[l] = v;
            else if (e.contains(y.el.get(0), c.relatedTarget) || ((y.hasFocus[l] = v), (y.hasFocus.mouse && l === "keyboard") || (y.hasFocus.keyboard && l === "mouse"))) return;
            v ? (y.ariaLiveLabel.attr("aria-live", "polite"), y.hasTimer && C(y)) : (y.ariaLiveLabel.attr("aria-live", "off"), y.hasTimer && j(y));
          };
        }
        function te(y, v) {
          return function (l) {
            switch (l.keyCode) {
              case ot.SPACE:
              case ot.ENTER:
                return v(y)(), l.preventDefault(), l.stopPropagation();
            }
          };
        }
        function Y(y) {
          return function () {
            k(y, { index: y.index - 1, vector: -1 });
          };
        }
        function $(y) {
          return function () {
            k(y, { index: y.index + 1, vector: 1 });
          };
        }
        function ne(y, v) {
          var l = null;
          v === y.slides.length && (w(), F(y)),
            t.each(y.anchors, function (c, I) {
              e(c.els).each(function (x, S) {
                e(S).index() === v && (l = I);
              });
            }),
            l != null && k(y, { index: l, immediate: !0 });
        }
        function j(y) {
          C(y);
          var v = y.config,
            l = v.timerMax;
          (l && y.timerCount++ > l) ||
            (y.timerId = window.setTimeout(function () {
              y.timerId == null || a || ($(y)(), j(y));
            }, v.delay));
        }
        function C(y) {
          window.clearTimeout(y.timerId), (y.timerId = null);
        }
        function b(y) {
          return function (v, l) {
            l = l || {};
            var c = y.config;
            if (a && v.type === "setting") {
              if (l.select === "prev") return Y(y)();
              if (l.select === "next") return $(y)();
              if ((H(y), F(y), l.select == null)) return;
              ne(y, l.select);
              return;
            }
            if (v.type === "swipe") return c.disableSwipe || Et.env("editor") ? void 0 : l.direction === "left" ? $(y)() : l.direction === "right" ? Y(y)() : void 0;
            if (y.nav.has(v.target).length) {
              var I = e(v.target).index();
              if ((v.type === "click" && k(y, { index: I }), v.type === "keydown"))
                switch (v.keyCode) {
                  case ot.ENTER:
                  case ot.SPACE: {
                    k(y, { index: I }), v.preventDefault();
                    break;
                  }
                  case ot.ARROW_LEFT:
                  case ot.ARROW_UP: {
                    N(y.nav, Math.max(I - 1, 0)), v.preventDefault();
                    break;
                  }
                  case ot.ARROW_RIGHT:
                  case ot.ARROW_DOWN: {
                    N(y.nav, Math.min(I + 1, y.pages)), v.preventDefault();
                    break;
                  }
                  case ot.HOME: {
                    N(y.nav, 0), v.preventDefault();
                    break;
                  }
                  case ot.END: {
                    N(y.nav, y.pages), v.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function N(y, v) {
          var l = y.children().eq(v).focus();
          y.children().not(l);
        }
        function k(y, v) {
          v = v || {};
          var l = y.config,
            c = y.anchors;
          y.previous = y.index;
          var I = v.index,
            x = {};
          I < 0 ? ((I = c.length - 1), l.infinite && ((x.x = -y.endX), (x.from = 0), (x.to = c[0].width))) : I >= c.length && ((I = 0), l.infinite && ((x.x = c[c.length - 1].width), (x.from = -c[c.length - 1].x), (x.to = x.from - x.x))), (y.index = I);
          var S = y.nav.children().eq(I).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
          y.nav.children().not(S).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), l.hideArrows && (y.index === c.length - 1 ? y.right.hide() : y.right.show(), y.index === 0 ? y.left.hide() : y.left.show());
          var V = y.offsetX || 0,
            ee = (y.offsetX = -c[y.index].x),
            K = { x: ee, opacity: 1, visibility: "" },
            h = e(c[y.index].els),
            W = e(c[y.previous] && c[y.previous].els),
            re = y.slides.not(h),
            J = l.animation,
            fe = l.easing,
            be = Math.round(l.duration),
            we = v.vector || (y.index > y.previous ? 1 : -1),
            p = "opacity " + be + "ms " + fe,
            O = "transform " + be + "ms " + fe;
          if ((h.find(Qv).removeAttr("tabindex"), h.removeAttr("aria-hidden"), h.find("*").removeAttr("aria-hidden"), re.find(Qv).attr("tabindex", "-1"), re.attr("aria-hidden", "true"), re.find("*").attr("aria-hidden", "true"), a || (h.each(E.intro), re.each(E.outro)), v.immediate && !_)) {
            n(h).set(K), X();
            return;
          }
          if (y.index === y.previous) return;
          if ((a || y.ariaLiveLabel.text(`Slide ${I + 1} of ${c.length}.`), J === "cross")) {
            var L = Math.round(be - be * l.crossOver),
              M = Math.round(be - L);
            (p = "opacity " + L + "ms " + fe), n(W).set({ visibility: "" }).add(p).start({ opacity: 0 }), n(h).set({ visibility: "", x: ee, opacity: 0, zIndex: y.depth++ }).add(p).wait(M).then({ opacity: 1 }).then(X);
            return;
          }
          if (J === "fade") {
            n(W).set({ visibility: "" }).stop(), n(h).set({ visibility: "", x: ee, opacity: 0, zIndex: y.depth++ }).add(p).start({ opacity: 1 }).then(X);
            return;
          }
          if (J === "over") {
            (K = { x: y.endX }),
              n(W).set({ visibility: "" }).stop(),
              n(h)
                .set({ visibility: "", zIndex: y.depth++, x: ee + c[y.index].width * we })
                .add(O)
                .start({ x: ee })
                .then(X);
            return;
          }
          l.infinite && x.x ? (n(y.slides.not(W)).set({ visibility: "", x: x.x }).add(O).start({ x: ee }), n(W).set({ visibility: "", x: x.from }).add(O).start({ x: x.to }), (y.shifted = W)) : (l.infinite && y.shifted && (n(y.shifted).set({ visibility: "", x: V }), (y.shifted = null)), n(y.slides).set({ visibility: "" }).add(O).start({ x: ee }));
          function X() {
            (h = e(c[y.index].els)), (re = y.slides.not(h)), J !== "slide" && (K.visibility = "hidden"), n(re).set(K);
          }
        }
        function B(y, v) {
          var l = e.data(v, s);
          if (l) {
            if (Z(l)) return F(l);
            a && ie(l) && F(l);
          }
        }
        function F(y) {
          var v = 1,
            l = 0,
            c = 0,
            I = 0,
            x = y.maskWidth,
            S = x - y.config.edge;
          S < 0 && (S = 0),
            (y.anchors = [{ els: [], x: 0, width: 0 }]),
            y.slides.each(function (ee, K) {
              c - l > S && (v++, (l += x), (y.anchors[v - 1] = { els: [], x: c, width: 0 })), (I = e(K).outerWidth(!0)), (c += I), (y.anchors[v - 1].width += I), y.anchors[v - 1].els.push(K);
              var h = ee + 1 + " of " + y.slides.length;
              e(K).attr("aria-label", h), e(K).attr("role", "group");
            }),
            (y.endX = c),
            a && (y.pages = null),
            y.nav.length && y.pages !== v && ((y.pages = v), G(y));
          var V = y.index;
          V >= v && (V = v - 1), k(y, { immediate: !0, index: V });
        }
        function G(y) {
          var v = [],
            l,
            c = y.el.attr("data-nav-spacing");
          c && (c = parseFloat(c) + "px");
          for (var I = 0, x = y.pages; I < x; I++)
            (l = e(f)),
              l
                .attr("aria-label", "Show slide " + (I + 1) + " of " + x)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              y.nav.hasClass("w-num") && l.text(I + 1),
              c != null && l.css({ "margin-left": c, "margin-right": c }),
              v.push(l);
          y.nav.empty().append(v);
        }
        function Z(y) {
          var v = y.mask.width();
          return y.maskWidth !== v ? ((y.maskWidth = v), !0) : !1;
        }
        function ie(y) {
          var v = 0;
          return (
            y.slides.each(function (l, c) {
              v += e(c).outerWidth(!0);
            }),
            y.slidesWidth !== v ? ((y.slidesWidth = v), !0) : !1
          );
        }
        return r;
      })
    );
  });
  var em = g((ZX, Jv) => {
    "use strict";
    var yt = Oe(),
      B1 = Lt();
    yt.define(
      "tabs",
      (Jv.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = yt.env,
          u = a.safari,
          s = a(),
          f = "data-w-tab",
          T = "data-w-pane",
          d = ".w-tabs",
          E = "w--current",
          m = "w--tab-active",
          _ = B1.triggers,
          w = !1;
        (t.ready = t.design = t.preview = R),
          (t.redraw = function () {
            (w = !0), R(), (w = !1);
          }),
          (t.destroy = function () {
            (i = n.find(d)), i.length && (i.each(P), A());
          });
        function R() {
          (o = s && yt.env("design")), (i = n.find(d)), i.length && (i.each(H), yt.env("preview") && !w && i.each(P), A(), D());
        }
        function A() {
          yt.redraw.off(t.redraw);
        }
        function D() {
          yt.redraw.on(t.redraw);
        }
        function P(j, C) {
          var b = e.data(C, d);
          b && (b.links && b.links.each(_.reset), b.panes && b.panes.each(_.reset));
        }
        function H(j, C) {
          var b = d.substr(1) + "-" + j,
            N = e(C),
            k = e.data(C, d);
          if ((k || (k = e.data(C, d, { el: N, config: {} })), (k.current = null), (k.tabIdentifier = b + "-" + f), (k.paneIdentifier = b + "-" + T), (k.menu = N.children(".w-tab-menu")), (k.links = k.menu.children(".w-tab-link")), (k.content = N.children(".w-tab-content")), (k.panes = k.content.children(".w-tab-pane")), k.el.off(d), k.links.off(d), k.menu.attr("role", "tablist"), k.links.attr("tabindex", "-1"), z(k), !o)) {
            k.links.on("click" + d, te(k)), k.links.on("keydown" + d, Y(k));
            var B = k.links.filter("." + E),
              F = B.attr(f);
            F && $(k, { tab: F, immediate: !0 });
          }
        }
        function z(j) {
          var C = {};
          C.easing = j.el.attr("data-easing") || "ease";
          var b = parseInt(j.el.attr("data-duration-in"), 10);
          b = C.intro = b === b ? b : 0;
          var N = parseInt(j.el.attr("data-duration-out"), 10);
          (N = C.outro = N === N ? N : 0), (C.immediate = !b && !N), (j.config = C);
        }
        function q(j) {
          var C = j.current;
          return Array.prototype.findIndex.call(j.links, (b) => b.getAttribute(f) === C, null);
        }
        function te(j) {
          return function (C) {
            C.preventDefault();
            var b = C.currentTarget.getAttribute(f);
            b && $(j, { tab: b });
          };
        }
        function Y(j) {
          return function (C) {
            var b = q(j),
              N = C.key,
              k = { ArrowLeft: b - 1, ArrowUp: b - 1, ArrowRight: b + 1, ArrowDown: b + 1, End: j.links.length - 1, Home: 0 };
            if (N in k) {
              C.preventDefault();
              var B = k[N];
              B === -1 && (B = j.links.length - 1), B === j.links.length && (B = 0);
              var F = j.links[B],
                G = F.getAttribute(f);
              G && $(j, { tab: G });
            }
          };
        }
        function $(j, C) {
          C = C || {};
          var b = j.config,
            N = b.easing,
            k = C.tab;
          if (k !== j.current) {
            j.current = k;
            var B;
            j.links.each(function (l, c) {
              var I = e(c);
              if (C.immediate || b.immediate) {
                var x = j.panes[l];
                c.id || (c.id = j.tabIdentifier + "-" + l), x.id || (x.id = j.paneIdentifier + "-" + l), (c.href = "#" + x.id), c.setAttribute("role", "tab"), c.setAttribute("aria-controls", x.id), c.setAttribute("aria-selected", "false"), x.setAttribute("role", "tabpanel"), x.setAttribute("aria-labelledby", c.id);
              }
              c.getAttribute(f) === k ? ((B = c), I.addClass(E).removeAttr("tabindex").attr({ "aria-selected": "true" }).each(_.intro)) : I.hasClass(E) && I.removeClass(E).attr({ tabindex: "-1", "aria-selected": "false" }).each(_.outro);
            });
            var F = [],
              G = [];
            j.panes.each(function (l, c) {
              var I = e(c);
              c.getAttribute(f) === k ? F.push(c) : I.hasClass(m) && G.push(c);
            });
            var Z = e(F),
              ie = e(G);
            if (C.immediate || b.immediate) {
              Z.addClass(m).each(_.intro), ie.removeClass(m), w || yt.redraw.up();
              return;
            } else {
              var y = window.scrollX,
                v = window.scrollY;
              B.focus(), window.scrollTo(y, v);
            }
            ie.length && b.outro
              ? (ie.each(_.outro),
                r(ie)
                  .add("opacity " + b.outro + "ms " + N, { fallback: u })
                  .start({ opacity: 0 })
                  .then(() => ne(b, ie, Z)))
              : ne(b, ie, Z);
          }
        }
        function ne(j, C, b) {
          if ((C.removeClass(m).css({ opacity: "", transition: "", transform: "", width: "", height: "" }), b.addClass(m).each(_.intro), yt.redraw.up(), !j.intro)) return r(b).set({ opacity: 1 });
          r(b)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + j.intro + "ms " + j.easing, { fallback: u })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Na();
  Ma();
  ka();
  Vr();
  Va();
  Lt();
  Nv();
  Mv();
  qv();
  Xv();
  Vv();
  Wv();
  Kv();
  Yv();
  Zv();
  em();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
  
  timm/lib/timm.js:
    (*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     *)
  */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require("ix").init([
  { slug: "appear-pharagraph", name: "appear pharagraph", value: { style: { opacity: 0, x: "-100%", y: "0px", z: "0px" }, triggers: [{ type: "scroll", stepsA: [{ opacity: 1, transition: "opacity 1500ms ease 0, transform 1500ms ease 0", x: "0px", y: "0px", z: "0px" }], stepsB: [] }] } },
  { slug: "appear-img", name: "appear img", value: { style: { opacity: 0.35 }, triggers: [{ type: "scroll", stepsA: [{ wait: "150ms" }, { opacity: 1, transition: "opacity 2000ms ease 0" }], stepsB: [{ wait: "250ms" }, { opacity: 0.35, transition: "opacity 1000ms ease 0" }] }] } },
  { slug: "counries-name", name: "counries name", value: { style: {}, triggers: [{ type: "scroll", stepsA: [{ transition: "transform 25000ms ease 0", x: "-45%", y: "0px", z: "0px" }], stepsB: [{ transition: "transform 3000ms ease 0", x: "0px", y: "0px", z: "0px" }] }] } },
  { slug: "appear-title-inner", name: "appear title inner", value: { style: { opacity: 0 }, triggers: [{ type: "load", stepsA: [{ opacity: 1, transition: "transform 2000ms ease 0, opacity 3500ms ease 0" }], stepsB: [] }] } },
  { slug: "hiddenpop", name: "hiddenpop", value: { style: { display: "none" }, triggers: [{ type: "load", stepsA: [{ wait: "4000ms" }, { display: "flex" }], stepsB: [] }] } },
  { slug: "closepop", name: "closepop", value: { style: {}, triggers: [{ type: "click", selector: ".popsuscribe", stepsA: [{ display: "none" }], stepsB: [] }] } },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-10", affectedElements: {}, playInReverse: false, autoStopEventId: "e-2" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { selector: ".accordion", originalId: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4", appliesTo: "CLASS" },
      targets: [{ selector: ".accordion", originalId: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4", appliesTo: "CLASS" }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
      createdOn: 1607396336493,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-11", affectedElements: {}, playInReverse: false, autoStopEventId: "e-4" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { selector: ".accordion", originalId: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4", appliesTo: "CLASS" },
      targets: [{ selector: ".accordion", originalId: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4", appliesTo: "CLASS" }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
      createdOn: 1607396423673,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-12", affectedElements: {}, playInReverse: false, autoStopEventId: "e-6" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { selector: ".accordion.active", originalId: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4", appliesTo: "CLASS" },
      targets: [{ selector: ".accordion.active", originalId: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4", appliesTo: "CLASS" }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
      createdOn: 1607397512110,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-14", affectedElements: {}, playInReverse: false, autoStopEventId: "e-10" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66b64f859d775269645f82b6", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66b64f859d775269645f82b6", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1724195067137,
    },
    "e-10": {
      id: "e-10",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: false, autoStopEventId: "e-9" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66b64f859d775269645f82b6", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66b64f859d775269645f82b6", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1724195067137,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-14", affectedElements: {}, playInReverse: false, autoStopEventId: "e-12" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66c7cce268aad64e8c705823", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66c7cce268aad64e8c705823", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725314951243,
    },
    "e-12": {
      id: "e-12",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-15", affectedElements: {}, playInReverse: false, autoStopEventId: "e-11" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66c7cce268aad64e8c705823", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66c7cce268aad64e8c705823", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725314951243,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-16", affectedElements: {}, playInReverse: false, autoStopEventId: "e-14" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66d751d1f82713aff43708f4", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66d751d1f82713aff43708f4", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725387218204,
    },
    "e-14": {
      id: "e-14",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-17", affectedElements: {}, playInReverse: false, autoStopEventId: "e-13" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66d751d1f82713aff43708f4", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66d751d1f82713aff43708f4", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725387218204,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-18", affectedElements: {}, playInReverse: false, autoStopEventId: "e-16" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66d7a242ee2d7ead4690d4ea", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66d7a242ee2d7ead4690d4ea", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725407811162,
    },
    "e-16": {
      id: "e-16",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-15" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66d7a242ee2d7ead4690d4ea", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66d7a242ee2d7ead4690d4ea", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725407811162,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-18" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66d8de2df48db57eccdaaa9d", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66d8de2df48db57eccdaaa9d", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725488685838,
    },
    "e-18": {
      id: "e-18",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-17" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66d8de2df48db57eccdaaa9d", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66d8de2df48db57eccdaaa9d", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725488685838,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-22", affectedElements: {}, playInReverse: false, autoStopEventId: "e-20" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66da249756f4ff39504f2129", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66da249756f4ff39504f2129", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725572248056,
    },
    "e-20": {
      id: "e-20",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-23", affectedElements: {}, playInReverse: false, autoStopEventId: "e-19" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66da249756f4ff39504f2129", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66da249756f4ff39504f2129", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725572248056,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-24", affectedElements: {}, playInReverse: false, autoStopEventId: "e-22" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66da3bb6d83fea857e7e5480", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66da3bb6d83fea857e7e5480", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725578167007,
    },
    "e-22": {
      id: "e-22",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-25", affectedElements: {}, playInReverse: false, autoStopEventId: "e-21" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66da3bb6d83fea857e7e5480", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66da3bb6d83fea857e7e5480", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725578167007,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-26", affectedElements: {}, playInReverse: false, autoStopEventId: "e-24" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66db79b9f34ff171ab63e72b", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66db79b9f34ff171ab63e72b", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725659577922,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-27", affectedElements: {}, playInReverse: false, autoStopEventId: "e-23" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66db79b9f34ff171ab63e72b", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66db79b9f34ff171ab63e72b", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725659577922,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-28", affectedElements: {}, playInReverse: false, autoStopEventId: "e-26" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66db80eaddd2db4cb1f6396c", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66db80eaddd2db4cb1f6396c", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725661418378,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-29", affectedElements: {}, playInReverse: false, autoStopEventId: "e-25" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66db80eaddd2db4cb1f6396c", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66db80eaddd2db4cb1f6396c", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725661418378,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-30", affectedElements: {}, playInReverse: false, autoStopEventId: "e-28" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66db9122e25bc132126a07cd", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66db9122e25bc132126a07cd", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725665570994,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-31", affectedElements: {}, playInReverse: false, autoStopEventId: "e-27" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66db9122e25bc132126a07cd", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66db9122e25bc132126a07cd", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725665570994,
    },
    "e-30": {
      id: "e-30",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-33", affectedElements: {}, playInReverse: false, autoStopEventId: "e-29" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66e099cfde6b1f4cac615af1", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66e099cfde6b1f4cac615af1", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1725995472184,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-34", affectedElements: {}, playInReverse: false, autoStopEventId: "e-32" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66e9c666bfd59027dd169c01", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66e9c666bfd59027dd169c01", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1726596710696,
    },
    "e-32": {
      id: "e-32",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-35", affectedElements: {}, playInReverse: false, autoStopEventId: "e-31" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66e9c666bfd59027dd169c01", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66e9c666bfd59027dd169c01", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1726596710696,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_UP",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-36", affectedElements: {}, playInReverse: false, autoStopEventId: "e-34" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66f5abdaafe026768f3ebe89", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66f5abdaafe026768f3ebe89", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1727376346603,
    },
    "e-34": {
      id: "e-34",
      name: "",
      animationType: "preset",
      eventTypeId: "PAGE_SCROLL_DOWN",
      action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-37", affectedElements: {}, playInReverse: false, autoStopEventId: "e-33" } },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: { id: "66f5abdaafe026768f3ebe89", appliesTo: "PAGE", styleBlockIds: [] },
      targets: [{ id: "66f5abdaafe026768f3ebe89", appliesTo: "PAGE", styleBlockIds: [] }],
      config: { loop: false, playInReverse: false, scrollOffsetValue: 0, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
      createdOn: 1727376346603,
    },
  },
  actionLists: {
    "a-10": {
      id: "a-10",
      title: "accordion-open",
      actionItemGroups: [
        {
          actionItems: [
            { id: "a-10-n", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "ease", duration: 750, target: { useEventTarget: true, id: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4" }, widthValue: 80, widthUnit: "%", heightUnit: "PX", locked: false } },
            { id: "a-10-n-2", actionTypeId: "STYLE_BACKGROUND_COLOR", config: { delay: 0, easing: "ease", duration: 300, target: { useEventTarget: true, id: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4" }, globalSwatchId: "", rValue: 99, bValue: 96, gValue: 96, aValue: 0 } },
            { id: "a-10-n-3", actionTypeId: "STYLE_TEXT_COLOR", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4" }, globalSwatchId: "", rValue: 255, bValue: 255, gValue: 255, aValue: 0 } },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1607396344049,
    },
    "a-11": {
      id: "a-11",
      title: "accordion-siblings-close",
      actionItemGroups: [
        {
          actionItems: [
            { id: "a-11-n", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "SIBLINGS", selector: ".accordion", selectorGuids: ["75fcd78a-82e4-6798-0989-4f4b3d372885"] }, widthValue: 6.666, widthUnit: "%", heightUnit: "PX", locked: false } },
            { id: "a-11-n-2", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "", duration: 500, target: { selector: ".accordion.active", selectorGuids: ["75fcd78a-82e4-6798-0989-4f4b3d372885", "75fcd78a-82e4-6798-0989-4f4b3d372886"] }, widthValue: 80, widthUnit: "%", heightUnit: "PX", locked: false } },
            { id: "a-11-n-3", actionTypeId: "STYLE_BACKGROUND_COLOR", config: { delay: 0, easing: "", duration: 500, target: { selector: ".accordion.active", selectorGuids: ["75fcd78a-82e4-6798-0989-4f4b3d372885", "75fcd78a-82e4-6798-0989-4f4b3d372886"] }, globalSwatchId: "", rValue: 99, bValue: 96, gValue: 96, aValue: 0 } },
            { id: "a-11-n-4", actionTypeId: "STYLE_BACKGROUND_COLOR", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "SIBLINGS", selector: ".accordion", selectorGuids: ["75fcd78a-82e4-6798-0989-4f4b3d372885"] }, globalSwatchId: "--darkergrey", rValue: 187, bValue: 187, gValue: 187, aValue: 1 } },
            { id: "a-11-n-5", actionTypeId: "STYLE_TEXT_COLOR", config: { delay: 0, easing: "", duration: 500, target: { selector: ".accordion.active", selectorGuids: ["75fcd78a-82e4-6798-0989-4f4b3d372885", "75fcd78a-82e4-6798-0989-4f4b3d372886"] }, globalSwatchId: "", rValue: 255, bValue: 255, gValue: 255, aValue: 0 } },
            { id: "a-11-n-6", actionTypeId: "STYLE_TEXT_COLOR", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "SIBLINGS", selector: ".accordion", selectorGuids: ["75fcd78a-82e4-6798-0989-4f4b3d372885"] }, globalSwatchId: "", rValue: 255, bValue: 255, gValue: 255, aValue: 1 } },
          ],
        },
        {
          actionItems: [
            { id: "a-11-n-7", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "ease", duration: 750, target: { useEventTarget: "SIBLINGS", selector: ".accordion", selectorGuids: ["75fcd78a-82e4-6798-0989-4f4b3d372885"] }, widthValue: 6.666, widthUnit: "%", heightUnit: "PX", locked: false } },
            { id: "a-11-n-8", actionTypeId: "STYLE_BACKGROUND_COLOR", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "SIBLINGS", selector: ".accordion", selectorGuids: ["75fcd78a-82e4-6798-0989-4f4b3d372885"] }, globalSwatchId: "--darkergrey", rValue: 187, bValue: 187, gValue: 187, aValue: 1 } },
            { id: "a-11-n-9", actionTypeId: "STYLE_TEXT_COLOR", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: "SIBLINGS", selector: ".accordion", selectorGuids: ["75fcd78a-82e4-6798-0989-4f4b3d372885"] }, globalSwatchId: "", rValue: 255, bValue: 255, gValue: 255, aValue: 1 } },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1607396433627,
    },
    "a-12": {
      id: "a-12",
      title: "active-initial-appearance",
      actionItemGroups: [
        {
          actionItems: [
            { id: "a-12-n", actionTypeId: "STYLE_TEXT_COLOR", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4" }, globalSwatchId: "", rValue: 255, bValue: 255, gValue: 255, aValue: 0 } },
            { id: "a-12-n-2", actionTypeId: "STYLE_SIZE", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4" }, widthValue: 80, widthUnit: "%", heightUnit: "PX", locked: false } },
            { id: "a-12-n-3", actionTypeId: "STYLE_BACKGROUND_COLOR", config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "66b64f859d775269645f82b6|5603978b-45d6-72ac-b930-0ac144688ec4" }, globalSwatchId: "", rValue: 99, bValue: 96, gValue: 96, aValue: 0 } },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1607397517118,
    },
    "a-14": { id: "a-14", title: "shownavbar", actionItemGroups: [{ actionItems: [{ id: "a-14-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-15": { id: "a-15", title: "hidenavbar", actionItemGroups: [{ actionItems: [{ id: "a-15-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-16": { id: "a-16", title: "shownavbar 2", actionItemGroups: [{ actionItems: [{ id: "a-16-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66d751d1f82713aff43708f4|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-17": { id: "a-17", title: "hidenavbar 2", actionItemGroups: [{ actionItems: [{ id: "a-17-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66d751d1f82713aff43708f4|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-18": { id: "a-18", title: "shownavbar 3", actionItemGroups: [{ actionItems: [{ id: "a-18-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66d7a242ee2d7ead4690d4ea|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-19": { id: "a-19", title: "hidenavbar 3", actionItemGroups: [{ actionItems: [{ id: "a-19-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66d7a242ee2d7ead4690d4ea|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-20": { id: "a-20", title: "shownavbar 4", actionItemGroups: [{ actionItems: [{ id: "a-20-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66d8de2df48db57eccdaaa9d|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-21": { id: "a-21", title: "hidenavbar 4", actionItemGroups: [{ actionItems: [{ id: "a-21-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66d8de2df48db57eccdaaa9d|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-22": { id: "a-22", title: "shownavbar 5", actionItemGroups: [{ actionItems: [{ id: "a-22-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66da249756f4ff39504f2129|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-23": { id: "a-23", title: "hidenavbar 5", actionItemGroups: [{ actionItems: [{ id: "a-23-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66da249756f4ff39504f2129|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-24": { id: "a-24", title: "shownavbar 6", actionItemGroups: [{ actionItems: [{ id: "a-24-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66da3bb6d83fea857e7e5480|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-25": { id: "a-25", title: "hidenavbar 6", actionItemGroups: [{ actionItems: [{ id: "a-25-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66da3bb6d83fea857e7e5480|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-26": { id: "a-26", title: "shownavbar 7", actionItemGroups: [{ actionItems: [{ id: "a-26-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66db79b9f34ff171ab63e72b|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-27": { id: "a-27", title: "hidenavbar 7", actionItemGroups: [{ actionItems: [{ id: "a-27-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66db79b9f34ff171ab63e72b|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-28": { id: "a-28", title: "shownavbar 8", actionItemGroups: [{ actionItems: [{ id: "a-28-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66db80eaddd2db4cb1f6396c|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-29": { id: "a-29", title: "hidenavbar 8", actionItemGroups: [{ actionItems: [{ id: "a-29-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66db80eaddd2db4cb1f6396c|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-30": { id: "a-30", title: "shownavbar 9", actionItemGroups: [{ actionItems: [{ id: "a-30-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66db9122e25bc132126a07cd|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-31": { id: "a-31", title: "hidenavbar 9", actionItemGroups: [{ actionItems: [{ id: "a-31-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66db9122e25bc132126a07cd|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-33": { id: "a-33", title: "hidenavbar 10", actionItemGroups: [{ actionItems: [{ id: "a-33-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66e099cfde6b1f4cac615af1|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-34": { id: "a-34", title: "shownavbar 11", actionItemGroups: [{ actionItems: [{ id: "a-34-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66e9c666bfd59027dd169c01|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-35": { id: "a-35", title: "hidenavbar 11", actionItemGroups: [{ actionItems: [{ id: "a-35-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66e9c666bfd59027dd169c01|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
    "a-36": { id: "a-36", title: "shownavbar 12", actionItemGroups: [{ actionItems: [{ id: "a-36-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66f5abdaafe026768f3ebe89|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: 0, xUnit: "PX", yUnit: "px", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195075557 },
    "a-37": { id: "a-37", title: "hidenavbar 12", actionItemGroups: [{ actionItems: [{ id: "a-37-n", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "", duration: 500, target: { id: "66f5abdaafe026768f3ebe89|2ebd3733-637e-5308-3580-d915f0902401" }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" } }] }], useFirstGroupAsInitialState: false, createdOn: 1724195138002 },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});

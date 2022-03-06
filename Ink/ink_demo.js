// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function() {
    var a = this;
    var b = function() {
        var c = function(d) {
            var test = "string" === typeof STATIC_JS_PREFIX ? STATIC_JS_PREFIX + (STATIC_JS_PREFIX.match(/\/$/) ? "" : "/") + d : d;
            console.log(test);
            return test;
        };
        try {
            if ("undefined" === typeof window.inkLoadWasmModule)
                throw Error("Se");
            window.inkLoadWasmModule({
                q3: c
            }).then(function(d) {
                a.na = d;
                jqb(a)
            })
        } catch (d) {
            F8(a, d instanceof Error ? d : Error("Te"))
        }
    };
    "undefined" !== typeof window.inkLoadWasmModule ? b() : window.inkLoadWasmPostRun = b;


    var E8 = function(a) {
        return a.Va().querySelector(".ink-engine")
    }
      , lqb = function(a, b) {
        var c = G8(a);
        hl(new (H8(a).PagePropertiesProto), function(e) {
            e.initFromJs(b, a.O);
            c.resetWithPageProperties(e)
        });
        if (pj(b, 3)) {
            var d = qj(b, 3);
            kqb(a, new pl({
                left: (Pk(d, 1) || 0) - 100,
                top: (Pk(d, 4) || 0) + 100,
                right: (Pk(d, 2) || 0) + 100,
                bottom: (Pk(d, 3) || 0) - 100
            }))
        }
    }
      , F8 = function(a, b) {
        b = void 0 === b ? Error("Ue") : b;
        a.dispatchEvent(new Xob(b));
        a.U.stop();
        null != a.ha && (a.ha.mb(),
        a.ha = null);
        if (a.oa) {
            b = a.oa;
            var c = a.Va()
              , d = a.Ra
              , e = b.H.indexOf(c);
            if (-1 !== e) {
                var f = b.listeners[e];
                d = f.indexOf(d);
                -1 !== d && (f.splice(d, 1),
                0 === f.length && (b.H.splice(e, 1),
                b.listeners.splice(e, 1),
                b.U.splice(e, 1),
                b.O && b.O.unobserve(c),
                0 === b.H.length && (b.V = !1)))
            }
            a.oa = null
        }
        a.na = null;
        a.ka = null
    }
      , mqb = function(a) {
        var b = screen.orientation.angle + (a.Ca ? .01 : 0);
        E8(a).style.transform = 0 === Math.abs(b % 360) ? "" : "rotateZ(" + b + "deg)"
    }
      , jqb = function(a) {
        H8(a).onAbort = function(e) {
            F8(a, Error("We`" + e))
        }
        ;
        var b = E8(a);
        nqb(a);
        var c = {
            alpha: a.VA,
            antialias: !0
        };
        0 !== a.JA || !oqb() || ia("Linux") || ia("Windows") && a.VA || (c.desynchronized = !0,
        c.preserveDrawingBuffer = !0,
        c.antialias = !1);
        a.rE ? a.H = b.getContext("webgl", c) : (a.H = b.getContext("webgl2", c),
        a.H || (a.H = b.getContext("webgl", c)));
        if (a.H) {
            H8(a).canvas = b;
            H8(a).preinitializedWebGLContext = a.H;
            Rpb(a.U, function() {
                return void pqb(a)
            });
            c = a.H.getContextAttributes();
            a.V = 2 === a.JA || !(null === c || void 0 === c || !c.desynchronized);
            a.V && a.H instanceof WebGL2RenderingContext && Qpb(a.U, a.H);
            a.H.clearColor(1, 1, 1, 1);
            a.H.pixelStorei(a.H.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            window.inkHostRegistry = window.inkHostRegistry || {};
            window.inkWasmRegistry = window.inkWasmRegistry || {};
            a.host = new Npb(a,a.U,a.H,a.shouldPreloadShaders,a.shouldRegisterDocument);
            window.inkHostRegistry[a.ua] = a.host;
            window.inkWasmRegistry[a.ua] = H8(a);
            a.listen(wpb, function(e) {
                a.onSequencePointReached(e.id)
            });
            a.listen(qpb, function(e) {
                a.onPdfSaveComplete(e.H)
            });
            a.listen(spb, function(e) {
                a.onPdfSaveFailed(e.error)
            });
            a.listen(Cpb, function(e) {
                a.Ca = e.H;
                a.V && mqb(a)
            });
            c = qqb(a);
            var d = Math.floor(Math.random() * Math.pow(2, 52));
            try {
                a.ka = H8(a).makeSEngine(c, d, a.ua)
            } finally {
                c["delete"]()
            }
            a.ha = new A8(H8(a),a.ka,E8(a),a.V,a.U);
            Ypb(a.ha);
            a.listen(Kpb, function(e) {
                a.ha && a.ha.setKeyboardMode(e.mode)
            });
            I8(a, a.va, a.Aa, a.Na, a.Ka);
            a.oa = new Spb;
            Tpb(a.oa, a.Va(), a.Ra);
            a.V && (rqb(a, 18, !0),
            c = function() {
                mqb(a);
                iqb(a, ah(a.Va()), tv())
            }
            ,
            screen.orientation.addEventListener("change", c),
            c());
            b.addEventListener("contextmenu", function(e) {
                return void e.preventDefault()
            });
            a.U.start();
            el(a, Kob)
        } else
            F8(a, Error("Ve"))
    }
      , oqb = function() {
        var a, b = document.createElement("canvas");
        document.body.appendChild(b);
        try {
            var c = b.getContext("webgl", {
                desynchronized: !0
            });
            return !(null === (a = null === c || void 0 === c ? void 0 : c.getContextAttributes()) || void 0 === a || !a.desynchronized)
        } finally {
            b.remove()
        }
    }
      , qqb = function(a) {
        var b = new (H8(a).ViewportProto)
          , c = E8(a)
          , d = c.width
          , e = c.height;
        a.V && 90 === screen.orientation.angle % 180 && (d = c.height,
        e = c.width);
        b.width = d || Math.floor(800 * a.W);
        b.height = e || Math.floor(600 * a.W);
        b.ppi = 96 * a.W;
        b.num_hardware_px_per_virtual_px = a.W;
        b.screen_rotation = a.V ? screen.orientation.angle % 360 : 0;
        return b
    }
      , iqb = function(a, b, c) {
        a.W = c;
        null != a.ha && (a.ha.oa = c);
        var d = E8(a);
        nqb(a, b);
        var e = d.width / c;
        c = d.height / c;
        d.style.width = e + "px";
        d.style.height = c + "px";
        if (a.V)
            switch (screen.orientation.angle) {
            case 90:
                d.style.left = c + "px";
                d.style.top = "0px";
                break;
            case 180:
                d.style.left = e + "px";
                d.style.top = c + "px";
                break;
            case 270:
                d.style.left = "0px";
                d.style.top = e + "px";
                break;
            default:
                d.style.left = "0px",
                d.style.top = "0px"
            }
        if (!b.isEmpty() && a.ka) {
            var f = a.ka;
            hl(qqb(a), function(h) {
                return void f.setViewport(h)
            })
        }
    }
      , nqb = function(a, b) {
        var c = E8(a);
        b = b || ah(c);
        a.V && 90 === screen.orientation.angle % 180 ? (c.width = Math.floor(b.height * a.W),
        c.height = Math.floor(b.width * a.W)) : (c.width = Math.floor(b.width * a.W),
        c.height = Math.floor(b.height * a.W))
    }
      , J8 = function(a, b, c, d, e) {
        var f = G8(a);
        hl(new (H8(a).ClientBitmap)(b,[c.width, c.height],H8(a).ImageFormat.RGBA_8888), function(h) {
            return void hl(new (H8(a).ImageInfoProto), function(k) {
                k.uri = d;
                k.asset_type = H8(a).AssetType.values[e];
                gl(f.addImageData(k, h))
            })
        })
    }
      , sqb = function(a, b, c, d, e) {
        var f = G8(a);
        J8(a, b, c, d, 1);
        hl(new (H8(a).BorderProto), function(h) {
            h.initFromJs(e, a.O);
            f.setPageBorder(h)
        })
    }
      , tqb = function(a, b, c, d, e) {
        var f = G8(a);
        J8(a, b, c, d, 5);
        hl(new (H8(a).BackgroundImageInfoProto), function(h) {
            h.initFromJs(e, a.O);
            gl(f.setBackgroundImage(h))
        })
    }
      , uqb = function(a) {
        return hl(G8(a).getPageProperties(), function(b) {
            return new t8(b.background_color.argb)
        })
    }
      , vqb = function(a) {
        var b = G8(a);
        hl(new (H8(a).ColorProto), function(c) {
            c.argb = (new Uint32Array([w8.a << 24 | w8.r << 16 | w8.g << 8 | w8.b]))[0];
            c.premultiplied = !1;
            b.setOutOfBoundsColor(c);
            y8(a.U)
        })
    }
      , wqb = function(a, b) {
        var c = G8(a);
        hl(new (H8(a).GridInfoProto), function(d) {
            d.initFromJs(b, a.O);
            gl(c.setGrid(d))
        })
    }
      , pqb = function(a) {
        H8(a)._draw(G8(a).$$.ptr)
    }
      , kqb = function(a, b) {
        gl(G8(a).setCameraPositionRect(npb(b)));
        pqb(a)
    }
      , xqb = function(a, b) {
        var c = G8(a);
        hl(new (H8(a).CameraConstraintsProto), function(d) {
            d.initFromJs(b, a.O);
            gl(c.setCameraConstraints(d))
        })
    }
      , yqb = function(a, b) {
        var c = G8(a);
        hl(new (H8(a).MovementConstraintsProto), function(d) {
            d.initFromJs(b, a.O);
            gl(c.setCameraMovementConstraints(d))
        })
    }
      , zqb = function(a) {
        return hl(G8(a).getToolParams(), function(b) {
            var c = new uZ;
            b.copyToJs(c, a.O);
            return c
        })
    }
      , Aqb = function(a, b) {
        var c = G8(a);
        hl(new (H8(a).ToolParamsProto), function(d) {
            d.initFromJs(b, a.O);
            gl(c.setToolParams(d))
        })
    }
      , rqb = function(a, b, c) {
        G8(a).assignFlag(H8(a).Flag.values[b], !!c)
    }
      , I8 = function(a, b, c, d, e) {
        a.va = b;
        a.Aa = c;
        a.Na = d;
        a.Ka = e;
        var f = G8(a);
        hl(new (H8(a).RectProto), function(h) {
            h.xlow = b;
            h.ylow = e;
            h.xhigh = d;
            h.yhigh = c;
            var k = H8(a).UndoPolicy.NOT_UNDOABLE
              , l = H8(a).CameraUpdatePolicy.AUTO_UPDATE;
            gl(f.setPageBounds(h, k, l))
        })
    }
      , Bqb = function(a, b) {
        var c = G8(a);
        hl(new (H8(a).AnimationExportProto), function(d) {
            d.initFromJs(b, a.O);
            c.startAnimationExport(d)
        })
    };
    D8.prototype.mj = function() {
        gl(G8(this).undo())
    }
    ;
    var Cqb = function(a) {
        return hl(G8(a).getSnapshotWithUndoStack(), function(b) {
            var c = new YZ;
            b.copyToJs(c, a.O);
            return c
        })
    }
      , Dqb = function(a, b) {
        var c = G8(a);
        hl(new (H8(a).SnapshotProto), function(d) {
            d.initFromJs(b, a.O);
            c.loadFromSnapshot(d)
        })
    }
      , H8 = function(a) {
        if (!a.na)
            throw Error("Xe");
        return a.na
    }
      , G8 = function(a) {
        if (!a.ka)
            throw Error("Xe");
        return a.ka
    };
    D8.prototype.flush = function(a) {
        var b = this
          , c = G8(this);
        this.ta[this.Ga] = a;
        hl(new (H8(this).SequencePointProto), function(d) {
            d.id = b.Ga++;
            c.addSequencePoint(d)
        })
    }
    ;
    D8.prototype.onSequencePointReached = function(a) {
        if (this.ta.hasOwnProperty(a)) {
            var b = this.ta[a];
            delete this.ta[a];
            b()
        }
    }
    ;
    var Eqb = function(a, b) {
        var c = G8(a);
        hl(new (H8(a).AddTextProto), function(d) {
            d.initFromJs(b, a.O);
            return fl(c.addText(d))
        })
    }
      , Fqb = function(a, b) {
        var c = G8(a);
        hl(new (H8(a).UpdateTextProto), function(d) {
            d.initFromJs(b, a.O);
            gl(c.updateText(d))
        })
    };
    D8.prototype.onPdfSaveComplete = function(a) {
        var b;
        null === (b = this.Oa.shift()) || void 0 === b ? void 0 : b.resolve(a)
    }
    ;
    D8.prototype.onPdfSaveFailed = function(a) {
        var b;
        null === (b = this.Oa.shift()) || void 0 === b ? void 0 : b.reject(a)
    }
    ;
    D8.prototype.addElement = function(a, b) {
        b = void 0 === b ? "" : b;
        gl(G8(this).addElement(a, b))
    }
    ;
    var Gqb = function(a) {
        return hl(G8(a).getCameraPosition(), function(b) {
            if (!b.ok)
                throw Error(b.status.ToString);
            return hl(b.value, function(c) {
                var d = new d8;
                c.copyToJs(d, a.O);
                return d
            })
        })
    }
      , Hqb = function(a) {
        return hl(G8(a).getCameraTransform(), function(b) {
            var c = new cZ;
            b.copyToJs(c, a.O);
            return c
        })
    }
      , K8 = function(a) {
        return hl(G8(a).getPageProperties(), function(b) {
            b = b.bounds;
            return new pl({
                top: b.yhigh,
                right: b.xhigh,
                bottom: b.ylow,
                left: b.xlow
            })
        })
    }
      , Iqb = function(a, b) {
        gl(G8(a).setMouseWheelBehavior(H8(a).MouseWheelBehavior.values[b]))
    }
      , Jqb = function(a) {
        function b() {
            var r = e.createFramebuffer()
              , t = e.createTexture();
            e.bindTexture(e.TEXTURE_2D, t);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, k, l, 0, e.RGBA, e.UNSIGNED_BYTE, null);
            e.bindFramebuffer(e.FRAMEBUFFER, r);
            e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
            return r
        }
        function c(r) {
            var t = r.createFramebuffer()
              , w = r.createRenderbuffer();
            r.bindRenderbuffer(r.RENDERBUFFER, w);
            r.renderbufferStorageMultisample(r.RENDERBUFFER, Math.min(r.getParameter(r.MAX_SAMPLES), 4), r.RGBA8, k, l);
            r.bindFramebuffer(r.FRAMEBUFFER, t);
            r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, w);
            return t
        }
        function d(r) {
            return "undefined" !== typeof WebGL2RenderingContext && r instanceof WebGL2RenderingContext
        }
        if (!a.H)
            throw Error("Ye");
        if (!a.host)
            throw Error("Ze");
        var e = a.H
          , f = E8(a)
          , h = x([f.width, f.height]);
        f = h.next().value;
        h = h.next().value;
        var k = f
          , l = h;
        try {
            var p = d(e) ? c(e) : b();
            a.host.U = p;
            pqb(a);
            d(e) && (f = p,
            p = b(),
            e.bindFramebuffer(e.READ_FRAMEBUFFER, f),
            e.bindFramebuffer(e.DRAW_FRAMEBUFFER, p),
            e.blitFramebuffer(0, 0, k, l, 0, 0, k, l, e.COLOR_BUFFER_BIT, e.NEAREST));
            e.bindFramebuffer(e.FRAMEBUFFER, p);
            var q = new Uint8Array(k * l * 4);
            e.readPixels(0, 0, k, l, e.RGBA, e.UNSIGNED_BYTE, q);
            return new Uint8ClampedArray(q.buffer)
        } finally {
            a.host.U = null,
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }
    };
    var Kqb = function(a, b) {
        a = b && b.Gx;
        return B('<div class="ink-canvas-parent"><style' + (a ? ' nonce="' + A(hB(a)) + '"' : "") + '>\n        .ink-canvas-parent {\n          height: 100%;\n          position: relative;\n          width: 100%;\n        }\n        .ink-layer-container {\n          height: 100%;\n          position: relative;\n          width: 100%;\n        }\n        .ink-engine {\n          height: 100%;\n          left: 0;\n          position: absolute;\n          top: 0;\n          width: 100%;\n          touch-action: none;\n        }\n        .above-ink-canvas {\n          display: none;\n        }\n      </style><div class="above-ink-canvas"></div><div class="ink-layer-container"></div><div class="below-ink-canvas"></div></div>')
    };
    var Lqb = function(a, b) {
        a = b && b.Gx;
        return B('<table id="ink-text-editor-frame"><style' + (a ? ' nonce="' + A(hB(a)) + '"' : "") + '>\n      #ink-text-editor-frame {\n        border-collapse: collapse;\n        position: absolute;\n      }\n      #ink-text-editor-box {\n        background: none;\n        border: none;\n        display: block;\n        outline: none;\n        overflow: hidden;\n        padding: 2px;\n        resize: none;\n      }\n      .ink-text-editor-bar-horz {\n        background: linear-gradient(to bottom, rgba(0,0,0,0) 4px,\n                                    var(--cros-color-prominent-light, #1A73E8) 4px,\n                                    var(--cros-color-prominent-light, #1A73E8) 6px,\n                                    rgba(0,0,0,0) 6px);\n        padding: 1px;\n      }\n      .ink-text-editor-bar-vert {\n        background: linear-gradient(to right, rgba(0,0,0,0) 4px,\n                                    var(--cros-color-prominent-light, #1A73E8) 4px,\n                                    var(--cros-color-prominent-light, #1A73E8) 6px,\n                                    rgba(0,0,0,0) 6px);\n        padding: 1px;\n      }\n      .ink-text-editor-handle {\n        background: radial-gradient(closest-side, var(--cros-color-prominent-light, #1A73E8),\n                                    var(--cros-color-prominent-light, #1A73E8) calc(80% - 0.2px),\n                                    #fff calc(80% + 0.2px),\n                                    #fff calc(100% - 0.2px),\n                                    rgba(0,0,0,0) calc(100% + 0.2px),\n                                    rgba(0,0,0,0));\n        min-width: 8px;\n        width: 8px;\n        min-height: 8px;\n        height: 8px;\n        padding: 1px;\n      }\n      .ink-text-editor-handle[data-handle-pos=\'N\'],\n      .ink-text-editor-handle[data-handle-pos=\'S\'] {\n        cursor: ns-resize;\n      }\n      .ink-text-editor-handle[data-handle-pos=\'E\'],\n      .ink-text-editor-handle[data-handle-pos=\'W\'] {\n        cursor: ew-resize;\n      }\n      .ink-text-editor-handle[data-handle-pos=\'NE\'],\n      .ink-text-editor-handle[data-handle-pos=\'SW\'] {\n        cursor: nesw-resize;\n      }\n      .ink-text-editor-handle[data-handle-pos=\'NW\'],\n      .ink-text-editor-handle[data-handle-pos=\'SE\'] {\n        cursor: nwse-resize;\n      }\n    </style><tr><td class="ink-text-editor-handle" data-handle-pos="NW" draggable="true"></td><td class="ink-text-editor-bar-horz"></td><td class="ink-text-editor-handle" data-handle-pos="N" draggable="true"></td><td class="ink-text-editor-bar-horz"></td><td class="ink-text-editor-handle" data-handle-pos="NE" draggable="true"></td></tr><tr><td class="ink-text-editor-bar-vert"></td><td class="ink-text-editor-center" rowspan="3" colspan="3"><textarea id="ink-text-editor-box" rows="1"></textarea></td><td class="ink-text-editor-bar-vert"></td></tr><tr><td class="ink-text-editor-handle" data-handle-pos="W" draggable="true"></td><td class="ink-text-editor-handle" data-handle-pos="E" draggable="true"></td></tr><tr><td class="ink-text-editor-bar-vert"></td><td class="ink-text-editor-bar-vert"></td></tr><tr><td class="ink-text-editor-handle" data-handle-pos="SW" draggable="true"></td><td class="ink-text-editor-bar-horz"></td><td class="ink-text-editor-handle" data-handle-pos="S" draggable="true"></td><td class="ink-text-editor-bar-horz"></td><td class="ink-text-editor-handle" data-handle-pos="SE" draggable="true"></td></tr></table>')
    };
    var L8 = function() {
        Me.call(this);
        this.W = this.V = this.U = 0;
        this.O = this.H = 24;
        this.ha = new Image;
        this.ha.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    };
    N(L8, Me);
    L8.prototype.Ja = function() {
        this.Ma = z(Lqb)
    }
    ;
    L8.prototype.Ea = function() {
        var a = this;
        Me.prototype.Ea.call(this);
        for (var b = x(this.Va().querySelectorAll(".ink-text-editor-handle")), c = b.next(); !c.done; c = b.next())
            c = c.value,
            this.Ba().listen(c, "dragstart", function(d) {
                d = d.Bc.dataTransfer;
                d.setDragImage(a.ha, 1, 1);
                d.effectAllowed = "move"
            }),
            this.Ba().listen(c, "drag", function(d) {
                if (0 !== d.clientY) {
                    var e = d.target.dataset.handlePos;
                    if ("N" === e || "NW" === e || "NE" === e) {
                        var f = Math.max(a.U, 24)
                          , h = Math.max(f, a.O);
                        f = Math.min(d.offsetY, h - f);
                        a.O = h - f;
                        a.W += f
                    } else if ("S" === e || "SW" === e || "SE" === e)
                        h = Math.max(a.U, 24),
                        f = Math.max(h, a.O),
                        a.O = f + Math.max(d.offsetY, h - f);
                    if ("W" === e || "NW" === e || "SW" === e)
                        d = Math.min(d.offsetX, a.H - 24),
                        a.H -= d,
                        a.V += d;
                    else if ("E" === e || "NE" === e || "SE" === e)
                        a.H += Math.max(d.offsetX, 24 - a.H);
                    M8(a);
                    el(a, new Hpb)
                }
            });
        b = N8(this);
        this.Ba().listen(b, "input", function() {
            M8(a)
        });
        M8(this);
        b.focus()
    }
    ;
    var M8 = function(a) {
        var b = a.Va();
        b.style.left = a.V - 13 + "px";
        b.style.top = a.W - 13 + "px";
        b = N8(a);
        b.style.width = a.H + "px";
        b.style.height = "auto";
        a.U = b.scrollHeight;
        b.style.height = Math.max(a.U, a.O) + "px"
    }
      , N8 = function(a) {
        return a.Va().querySelector("#ink-text-editor-box")
    }
      , Mqb = function(a, b) {
        b = Qk(b);
        var c = N8(a);
        c.style.fontFamily = b.family;
        c.style.fontStyle = b.style;
        c.style.fontWeight = b.weight;
        M8(a)
    }
      , O8 = function(a) {
        return Number(window.getComputedStyle(N8(a)).fontSize.replace("px", "")) / a.H
    };
    var P8 = function(a, b) {
        if (a instanceof P8)
            this.O = a.O;
        else {
            var c;
            if (c = La(a))
                a: {
                    for (var d = c = 0; d < a.length; d++) {
                        if (!La(a[d]) || 0 < c && a[d].length != c) {
                            c = !1;
                            break a
                        }
                        for (var e = 0; e < a[d].length; e++)
                            if ("number" !== typeof a[d][e]) {
                                c = !1;
                                break a
                            }
                        0 == c && (c = a[d].length)
                    }
                    c = 0 != c
                }
            if (c)
                this.O = Ka(a);
            else if (a instanceof Xh)
                this.O = Nqb(a.height, a.width);
            else if ("number" === typeof a && "number" === typeof b && 0 < a && 0 < b)
                this.O = Nqb(a, b);
            else
                throw Error("$e");
        }
        this.H = new Xh(this.O[0].length,this.O.length)
    }
      , Q8 = function(a, b, c) {
        for (var d = 0; d < a.getSize().height; d++)
            for (var e = 0; e < a.getSize().width; e++)
                b.call(c, a.O[d][e], d, e, a)
    }
      , Oqb = function(a, b) {
        var c = new P8(a.getSize());
        Q8(a, function(d, e, f) {
            c.O[e][f] = b.call(void 0, d, e, f, a)
        });
        return c
    }
      , Nqb = function(a, b) {
        for (var c = [], d = 0; d < a; d++) {
            c[d] = [];
            for (var e = 0; e < b; e++)
                c[d][e] = 0
        }
        return c
    };
    P8.prototype.add = function(a) {
        if (!Wu(this.H, a.getSize()))
            throw Error("af");
        return Oqb(this, function(b, c, d) {
            return b + a.O[c][d]
        })
    }
    ;
    var Pqb = function(a, b) {
        if (a.H.height != b.getSize().height)
            throw Error("bf`" + b.H.height + "`" + a.H.height);
        var c = new P8(a.H.height,a.H.width + b.H.width);
        Q8(a, function(d, e, f) {
            c.O[e][f] = d
        });
        Q8(b, function(d, e, f) {
            c.O[e][this.H.width + f] = d
        }, a);
        return c
    };
    P8.prototype.equals = function(a, b) {
        if (this.H.width != a.H.width || this.H.height != a.H.height)
            return !1;
        b = b || 0;
        for (var c = 0; c < this.H.height; c++)
            for (var d = 0; d < this.H.width; d++)
                if (!(Math.abs(this.O[c][d] - a.O[c][d]) <= (b || 1E-6)))
                    return !1;
        return !0
    }
    ;
    var Rqb = function(a) {
        if (a.H.width != a.H.height)
            throw Error("cf");
        if (1 == a.getSize().width) {
            var b = R8(a, 0, 0);
            return 0 == b ? null : new P8([[1 / Number(b)]])
        }
        b = a.H.height;
        for (var c = [], d = 0; d < b; d++) {
            c[d] = [];
            for (var e = 0; e < b; e++)
                c[d][e] = d == e ? 1 : 0
        }
        b = new P8(c);
        a: {
            a = Pqb(a, b);
            c = new P8(a);
            for (e = d = 0; e < c.H.height && !(d >= c.H.width); e++) {
                for (var f = e; 0 == c.O[f][d]; )
                    if (f++,
                    f == c.H.height && (f = e,
                    d++,
                    d == c.H.width)) {
                        a = c;
                        break a
                    }
                var h = a
                  , k = e
                  , l = h.O[f];
                h.O[f] = h.O[k];
                h.O[k] = l;
                f = c.O[e][d];
                for (h = d; h < c.H.width; h++)
                    c.O[e][h] /= f;
                for (f = 0; f < c.H.height; f++)
                    if (f != e)
                        for (k = c.O[f][d],
                        h = d; h < c.H.width; h++)
                            c.O[f][h] -= k * c.O[e][h];
                d++
            }
            a = c
        }
        return Qqb(a, 0, b.H.width - 1, b.H.height - 1).equals(b) ? Qqb(a, b.H.width) : null
    };
    P8.prototype.getSize = function() {
        return this.H
    }
    ;
    var R8 = function(a, b, c) {
        return 0 <= b && b < a.H.height && 0 <= c && c < a.H.width ? a.O[b][c] : null
    }
      , Qqb = function(a, b, c, d) {
        var e = new P8((c ? c : a.H.height - 1) + 1,(d ? d : a.H.width - 1) - b + 1);
        Q8(e, function(f, h, k) {
            e.O[h][k] = this.O[h][b + k]
        }, a);
        return e
    }
      , Sqb = function(a, b) {
        var c = new P8(a.H.height,b.getSize().width);
        Q8(c, function(d, e, f) {
            for (var h = d = 0; h < this.H.width; h++)
                d += R8(this, e, h) * R8(b, h, f);
            if (!(0 <= e && e < c.H.height && 0 <= f && f < c.H.width))
                throw Error("df`" + e + "`" + f + "`" + c.H.height + "`" + c.H.width);
            c.O[e][f] = d
        }, a);
        return c
    }
      , Tqb = function(a, b) {
        return Oqb(a, function(c) {
            return c * b
        })
    };
    var S8 = function(a, b) {
        b = new P8([[b.x], [b.y], [1]]);
        if (b instanceof P8) {
            if (a.H.width != b.getSize().height)
                throw Error("ef");
            a = Sqb(a, b)
        } else if ("number" === typeof b)
            a = Tqb(a, b);
        else
            throw Error("ff");
        return new CS(R8(a, 0, 0) || 0,R8(a, 1, 0) || 0)
    };
    var Wqb = function(a) {
        Me.call(this);
        var b = this;
        this.U = a;
        this.O = null;
        this.ka = "";
        this.H = null;
        this.V = new CS(0,0);
        this.ha = new CS(0,0);
        this.W = new CS(0,0);
        this.ta = new CS(0,0);
        this.na = new CS(0,0);
        this.oa = 1;
        this.ua = function() {
            if (null !== b.H) {
                var c = b.H;
                Uqb(b, Vqb(b, c), O8(c))
            }
        }
    };
    N(Wqb, Me);
    Wqb.prototype.onCameraChanged = function() {
        null !== this.H && Xqb(this, this.H)
    }
    ;
    var Yqb = function(a) {
        a.O = null;
        a.H && (a.H.kb(Gpb, a.ua),
        a.H.mb(),
        a.H = null)
    }
      , Uqb = function(a, b, c) {
        var d = qj(b, 4);
        var e = Math.sin(d);
        var f = Math.cos(d)
          , h = .5 * qj(b, 3);
        d = new CS(qj(qj(b, 1), 1),qj(qj(b, 1), 2));
        var k = new CS(d.x - h * e,d.y + h * f);
        h = new CS(d.x + h * e,d.y - h * f);
        var l = .5 * qj(b, 2);
        b = new CS(k.x - l * f,k.y - l * e);
        e = new CS(k.x + l * f,k.y + l * e);
        f = a.U();
        a.V = S8(f, b);
        a.ha = S8(f, e);
        a.W = S8(f, k);
        a.ta = S8(f, h);
        a.na = S8(f, d);
        a.oa = c
    }
      , Xqb = function(a, b) {
        var c = Rqb(a.U())
          , d = S8(c, a.V)
          , e = S8(c, a.ha)
          , f = S8(c, a.W)
          , h = S8(c, a.ta);
        c = S8(c, a.na);
        var k = window.devicePixelRatio;
        d = Uu(d, e) / k;
        f = Uu(f, h) / k;
        h = c.x / k - d / 2;
        c = a.Va().clientHeight - c.y / k - f / 2;
        b.H = Math.max(d, 24);
        b.O = Math.max(f, 24);
        M8(b);
        b.V = h;
        b.W = c;
        M8(b);
        N8(b).style.fontSize = b.H * a.oa + "px";
        M8(b)
    }
      , Vqb = function(a, b) {
        var c = b.Va();
        var d = new CS(c.offsetLeft + 13 + b.H / 2,c.offsetTop + 13 + Math.max(b.U, b.O) / 2);
        var e = window.devicePixelRatio;
        c = b.H * e;
        b = Math.max(b.U, b.O) * e;
        var f = d.x * e;
        d = (a.Va().clientHeight - d.y) * e;
        a = new al;
        bl(a, 1, f);
        bl(a, 2, d);
        f = new bZ;
        bl(f, 1, a);
        f.mc(c);
        bl(f, 3, b);
        return f
    };
    var nl = null;
    var Zqb = RegExp("^host:([A-Z_]+):(.*)$");
    var T8 = function() {
        Me.call(this);
        this.O = "";
        this.H = "auto";
        this.U = !1;
        this.V = kg.hf ? this.ha : this.W
    };
    N(T8, Me);
    T8.prototype.Ea = function() {
        var a = this;
        Me.prototype.Ea.call(this);
        var b = this.Va();
        b.addEventListener("pointermove", function(c) {
            "pen" === c.pointerType && "" !== b.style.cursor ? (a.U = !0,
            b.style.cursor = "") : "pen" !== c.pointerType && "" === b.style.cursor && (a.U = !1,
            b.style.cursor = a.O,
            b.style.cursor = a.H)
        })
    }
    ;
    var $qb = function(a) {
        return 127 < .5 * (Math.max(a.r, a.g, a.b) + Math.min(a.r, a.g, a.b)) ? jpb : kpb
    };
    T8.prototype.W = function(a, b, c) {
        var d = document.createElement("canvas")
          , e = d.getContext("2d")
          , f = Math.ceil(2 * a);
        d.width = f;
        d.height = f;
        e.fillStyle = u8($qb(c));
        e.beginPath();
        e.arc(a, a, a, 0, 2 * Math.PI);
        e.closePath();
        e.fill();
        e.fillStyle = u8(c);
        e.beginPath();
        e.arc(a, a, a - b, 0, 2 * Math.PI);
        e.closePath();
        e.fill();
        return d.toDataURL()
    }
    ;
    T8.prototype.ha = function(a, b, c) {
        b = $qb(c);
        a = Math.round(a);
        return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + 2 * a + '" height="' + 2 * a + '" viewBox="0 0 ' + 2 * a + " " + 2 * a + '"><circle cx="' + a + '" cy="' + a + '" r="' + (a - 1) + '" stroke="' + u8(b) + '" stroke-width="1" fill="' + u8(c) + '"/></svg>'
    }
    ;
    var U8 = function(a, b) {
        Me.call(this);
        var c = this;
        this.ha = 0;
        this.U = null;
        this.ka = 0;
        this.W = new T8;
        this.Ia(this.W);
        this.H = new D8(a);
        this.Ia(this.H);
        this.H.listen(opb, function(d) {
            c.onImageExported(d.id, d.size, d.imageData, d.H, d.O, d.errorMessage)
        });
        this.H.listen(ypb, function(d) {
            c.requestImage(d.uri)
        });
        this.H.listen(Apb, function(d) {
            var e = c.W
              , f = d.H
              , h = d.color;
            d = d.mg;
            e.O = "";
            e.H = "auto";
            switch (f) {
            case 1:
                f = window.devicePixelRatio || 1;
                d = Math.round(mk((d || 0) / f, 3, 16));
                var k = e.V(d, 1, h);
                e.H = "url('" + k + "') " + d + " " + d + ", auto";
                1 < f && (e.O = e.H,
                h = e.V(2 * d, 2, h),
                e.H = "-webkit-image-set(url('" + k + "') 1x, url('" + h + "') 2x) " + (d + " " + d + ", auto"));
                break;
            case 2:
                e.H = "crosshair";
                break;
            case 3:
                e.H = "grab";
                break;
            case 4:
                e.H = "grabbing";
                break;
            case 5:
                e.H = "move";
                break;
            case 11:
                e.H = "pointer";
                break;
            case 6:
                e.H = "ew-resize";
                break;
            case 7:
                e.H = "ns-resize";
                break;
            case 8:
                e.H = "nesw-resize";
                break;
            case 9:
                e.H = "nwse-resize";
                break;
            case 10:
                e.H = "text";
                break;
            default:
                e.H = "default"
            }
            e.U || (h = e.Va(),
            h.style.cursor = e.O,
            h.style.cursor = e.H)
        });
        this.Ba().Eb(this.H, Kob, function() {
            var d;
            return Qc(function(e) {
                if (1 == e.H)
                    return null === (d = a.j4) || void 0 === d || d ? Rc(e, arb(c), 3) : e.vf(2);
                2 != e.H && vqb(c.H);
                b(c);
                e.H = 0
            })
        });
        this.O = new Wqb(function() {
            var d = Hqb(c.H);
            return new P8([[qj(d, 3), qj(d, 6), qj(d, 1)], [qj(d, 7), qj(d, 4), qj(d, 2)], [qj(d, 8), qj(d, 9), qj(d, 10)]])
        }
        );
        this.Ia(this.O);
        this.O.listen(Epb, function(d) {
            d = d.H;
            null !== d && G8(c.H).beginTextEditing(d)
        });
        this.O.listen(Ipb, function(d) {
            var e = d.O
              , f = d.H
              , h = d.text;
            d = d.V;
            Zk(qj(h, 1)) ? e ? (f = new jZ,
            bl(f, 1, e),
            f.Vb(h),
            bl(f, 5, d),
            Fqb(c.H, f)) : (e = new hZ,
            e.Vb(h),
            bl(e, 4, d),
            bl(e, 2, f),
            Eqb(c.H, e)) : e && gl(G8(c.H).removeElement(e))
        });
        this.Ba().listen(this.H, Nob, function(d) {
            if (pj(d.H, 4)) {
                var e = c.O
                  , f = qj(d.H, 4);
                Yqb(e);
                d = qj(f, 1);
                var h = qj(f, 2)
                  , k = qj(f, 3)
                  , l = qj(f, 4);
                el(e, new Fpb(d));
                f = new L8;
                f.render(e.Va());
                Uqb(e, l, qj(k, 4));
                Xqb(e, f);
                l = qj(k, 1);
                N8(f).value = l;
                l = Yk(qj(k, 5));
                N8(f).style.color = Xk(l);
                Mqb(f, Pk(k, 3));
                l = qj(k, 6);
                N8(f).style.textAlign = uha(l);
                N8(f).style.textShadow = yha(Pk(k, 7), f.H);
                d || (k = f.Va().parentElement,
                l = k.clientWidth,
                13 > f.V ? f.V = 13 : f.V + f.H + 13 > l && (f.V = l - (f.H + 13)),
                M8(f),
                l = Math.max(f.U, f.O),
                k = k.clientHeight,
                13 > f.W ? (f.W = 13,
                M8(f)) : f.W + l + 13 > k && (f.W = k - (l + 13),
                M8(f)),
                Uqb(e, Vqb(e, f), O8(f)));
                e.O = d;
                e.ka = h;
                e.H = f;
                e.H.listen(Gpb, e.ua)
            } else if (pj(d.H, 5)) {
                e = c.O;
                d = qj(d.H, 5);
                if (!e.H || Pk(d, 1) !== e.O)
                    throw Error("gf`" + qj(d, 1));
                pj(d, 2) && (h = gpb(qj(d, 2)),
                N8(e.H).style.color = Xk(h));
                pj(d, 3) && (h = e.H,
                f = qj(d, 3) / window.devicePixelRatio,
                N8(h).style.fontSize = f + "px",
                M8(h));
                pj(d, 4) && (d = qj(d, 4),
                h = qj(d, 2),
                N8(e.H).style.textAlign = uha(h),
                Mqb(e.H, Pk(d, 1)),
                h = Pk(d, 3),
                d = null,
                h && (d = new fZ,
                f = v8(gpb(qj(h, 1)))[0],
                bl(d, 1, f),
                f = O8(e.H),
                k = qj(h, 2) * f,
                bl(d, 2, k),
                k = qj(h, 3) * f,
                bl(d, 3, k),
                h = qj(h, 4) * f,
                bl(d, 4, h)),
                e = e.H,
                N8(e).style.textShadow = yha(d, e.H))
            } else if (pj(d.H, 6)) {
                if (e = c.O,
                d = qj(d.H, 6),
                Pk(d, 1) === e.O && e.H) {
                    if (null === e.O)
                        throw Error("hf");
                    k = window.getComputedStyle(N8(e.H));
                    l = tha(k.textAlign);
                    h = e.H.H;
                    f = e.H.U;
                    d = new gZ;
                    d.Vb(N8(e.H).value);
                    var p = k.fontWeight
                      , q = mj(Zk(k.fontFamily.split(",")[0]), "\"'")
                      , r = "normal" !== k.fontStyle;
                    p = "bold" === p ? 700 : Number(p) || 400;
                    var t = 500 <= p
                      , w = new eZ;
                    switch (q) {
                    case "Courier":
                        t ? r ? bl(w, 1, 8) : bl(w, 1, 7) : r ? bl(w, 1, 6) : bl(w, 1, 5);
                        break;
                    case "Helvetica":
                        t ? r ? bl(w, 1, 4) : bl(w, 1, 3) : r ? bl(w, 1, 2) : bl(w, 1, 1);
                        break;
                    case "Symbol":
                        bl(w, 1, 13);
                        break;
                    case "Times":
                        t ? r ? bl(w, 1, 12) : bl(w, 1, 11) : r ? bl(w, 1, 10) : bl(w, 1, 9);
                        break;
                    default:
                        t = new dZ,
                        bl(t, 1, q),
                        bl(t, 2, r),
                        bl(t, 3, p),
                        bl(w, 5, t)
                    }
                    bl(d, 3, w);
                    q = O8(e.H);
                    bl(d, 4, q);
                    q = v8(hpb(k.color))[0];
                    bl(d, 5, q);
                    bl(d, 6, l);
                    (k = k.textShadow.match(/^(.+) ([0-9.]+)px ([0-9.]+)px ([0-9.]+)px$/)) ? (l = new fZ,
                    q = v8(hpb(k[1]))[0],
                    bl(l, 1, q),
                    bl(l, 3, Number(k[2]) / h),
                    bl(l, 4, Number(k[3]) / h),
                    bl(l, 2, Number(k[4]) / h),
                    k = l) : k = null;
                    k && bl(d, 7, k);
                    h = Aha(d, h, f);
                    bl(d, 8, h);
                    h = e.O;
                    f = e.ka;
                    l = e.H;
                    q = window.devicePixelRatio;
                    k = l.H * q;
                    l = l.U * q;
                    p = Rqb(e.U());
                    q = S8(p, e.W);
                    r = S8(p, e.V);
                    p = S8(p, e.ha);
                    r = new CS(p.x - r.x,p.y - r.y);
                    r = Math.atan2(r.y, r.x);
                    p = new al;
                    bl(p, 1, q.x + .5 * l * Math.sin(r));
                    bl(p, 2, q.y - .5 * l * Math.cos(r));
                    q = new bZ;
                    bl(q, 1, p);
                    q.mc(k);
                    bl(q, 3, l);
                    bl(q, 4, r);
                    Yqb(e);
                    el(e, new Jpb(h,f,d,q))
                }
            } else
                pj(d.H, 9) && Yqb(c.O)
        });
        this.Ba().listen(this.H, Mob, function() {
            c.O.onCameraChanged()
        });
        this.Yy = a.Yy;
        this.V = new Map;
        this.Zr = new Set
    };
    N(U8, Me);
    var crb = function(a) {
        var b = "string" === typeof a.parentElement ? document.querySelector(a.parentElement) : a.parentElement;
        if (!b)
            throw Error("pf`" + a.parentElement);
        return new Promise(function(c, d) {
            var e = function(h) {
                d(h)
            }
              , f = new U8(a,function(h) {
                h.kb(s8, e);
                if (a.Zr)
                    for (var k = x(a.Zr), l = k.next(); !l.done; l = k.next())
                        brb(l.value);
                c(h)
            }
            );
            f.listen(s8, e);
            f.render(b)
        }
        )
    }
      , V8 = function(a) {
        a = E8(a.H);
        return new Xh(a.clientWidth,a.clientHeight)
    }
      , arb = function(a) {
        var b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AgPEBYrHoEFUgAAAw1JREFUeNrt3b9uE0EQBvBvZvd8LURUkVwEkEDAm9AgQYOQKHgZWloqUMoUaVJSpAivQBEhJGhSWiAlKXz7JwXey9nE9vrOgHT3fZKVFM5F/mUyN5tIY8F2EtG/yNYucnZ21keg/57d3V1RMvzdEJjABGYITGACM+1iNz5RxGGPzCIbnT+i3RA1AjgFcADgR4zRDwTVABjHGF8AeJwOaDnYNgd29jGGED6JyMvxeDwZYvVOJpN3FxcXH0TkWfMovQpac6p39jgdMi4A7Ozs/HLOvQkhfEkurW9yDVh47+GcOxgybsre3t5P59y+937OqHUFhxAQQkBVVd85E/yOc+5bcuk0pqWLeO/hvQ+krV289x45yLqqPSRk5xym0yllZ5lOp6iqCiGEtW3C5lZwzq/DUOK9h4jUwK3GtGYFz1oEZa97cA2crJaNapozoiVk5rqCm+2h898ihn487uKiWPMPy2arYG7G7TQHM91CYAITmCEwgQnMEJjABGYITGCGwAQmMENgAhOYITCBCUwCAhOYITCBCcwQmMAEZghMYIbABCYwQ2ACE5ghMIEJzBCYwAyBCUxghsAEJjBDYAIzBP63wFkLcUX4lhAp3nu79Qr23t8lbZ37WwNuLFx7fnJycnvossfHx7dijK+WGLWrYBFBjPHh5eXl/tHR0Z0h41ZV9T7G+EREum/AThcREaiqqOpTAJ8PDw8/VlX11TnnhgArIrYsy3vn5+evy7J8NLNADrJd1xpUFcaY9BBVfSAib2foAPq7GTAZGGNSkcFaC2stjDH161+BLGsrOAEXRYGyLOsNgKqK5hbovgIng/T6R6MRiqKogVtVcPqi5k+tKIo5XOfcYICNMbDWYjQaoSzLP4BXtYqVFayqiDHCWlsjJnDnXPYG0j5UcCqy9LDWtq/gZcipHxVFMbfitec3uMX70FwP7nyTW2zyaSt236v3pipO7UJVs9pDVgU3p4n0jZqwQwBeHFlzYLPn4MXPb4Lt+5i2CJ1zgsuu4GUX2vBNk3qJnvX8jOdwv3h7O1wBYIqaD5lCtYoAAAAASUVORK5CYII=";
        b = void 0 === b ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AgPEBYrHoEFUgAAAw1JREFUeNrt3b9uE0EQBvBvZvd8LURUkVwEkEDAm9AgQYOQKHgZWloqUMoUaVJSpAivQBEhJGhSWiAlKXz7JwXey9nE9vrOgHT3fZKVFM5F/mUyN5tIY8F2EtG/yNYucnZ21keg/57d3V1RMvzdEJjABGYITGACM+1iNz5RxGGPzCIbnT+i3RA1AjgFcADgR4zRDwTVABjHGF8AeJwOaDnYNgd29jGGED6JyMvxeDwZYvVOJpN3FxcXH0TkWfMovQpac6p39jgdMi4A7Ozs/HLOvQkhfEkurW9yDVh47+GcOxgybsre3t5P59y+937OqHUFhxAQQkBVVd85E/yOc+5bcuk0pqWLeO/hvQ+krV289x45yLqqPSRk5xym0yllZ5lOp6iqCiGEtW3C5lZwzq/DUOK9h4jUwK3GtGYFz1oEZa97cA2crJaNapozoiVk5rqCm+2h898ihn487uKiWPMPy2arYG7G7TQHM91CYAITmCEwgQnMEJjABGYITGCGwAQmMENgAhOYITCBCUwCAhOYITCBCcwQmMAEZghMYIbABCYwQ2ACE5ghMIEJzBCYwAyBCUxghsAEJjBDYAIzBP63wFkLcUX4lhAp3nu79Qr23t8lbZ37WwNuLFx7fnJycnvossfHx7dijK+WGLWrYBFBjPHh5eXl/tHR0Z0h41ZV9T7G+EREum/AThcREaiqqOpTAJ8PDw8/VlX11TnnhgArIrYsy3vn5+evy7J8NLNADrJd1xpUFcaY9BBVfSAib2foAPq7GTAZGGNSkcFaC2stjDH161+BLGsrOAEXRYGyLOsNgKqK5hbovgIng/T6R6MRiqKogVtVcPqi5k+tKIo5XOfcYICNMbDWYjQaoSzLP4BXtYqVFayqiDHCWlsjJnDnXPYG0j5UcCqy9LDWtq/gZcipHxVFMbfitec3uMX70FwP7nyTW2zyaSt236v3pipO7UJVs9pDVgU3p4n0jZqwQwBeHFlzYLPn4MXPb4Lt+5i2CJ1zgsuu4GUX2vBNk3qJnvX8jOdwv3h7O1wBYIqaD5lCtYoAAAAASUVORK5CYII=" : b;
        var c, d, e;
        return Qc(function(f) {
            if (1 == f.H)
                return c = "sketchology://border0",
                d = new wZ,
                bl(d, 1, c),
                a.U = ml(b),
                Rc(f, a.U, 2);
            e = f.O;
            sqb(a.H, e.data, e.size, c, d);
            f.H = 0
        })
    }
      , drb = function(a) {
        var b = void 0 === b ? 999 : b;
        var c = Jqb(a.H)
          , d = E8(a.H)
          , e = d.width
          , f = d.height
          , h = document.createElement("canvas");
        h.className = "ink-engine-overlay";
        h.width = e;
        h.height = f;
        var k = h.getContext("2d");
        c = Fha(c, new Xh(e,f), !0);
        k.putImageData(c, 0, 0);
        k = (k = d.style.transform.match(/rotateZ\(([0-9]+)\.?[0-9]*deg\)/)) ? Number(k[1]) : 0;
        c = 90 === k % 180;
        var l = h;
        if (0 < k) {
            l = document.createElement("canvas");
            l.width = c ? f : e;
            l.height = c ? e : f;
            var p = l.getContext("2d");
            p.translate(l.width / 2, l.height / 2);
            p.rotate(k * Math.PI / 180);
            p.translate(-e / 2, -f / 2);
            p.drawImage(h, 0, 0)
        }
        l.style.position = "relative";
        l.style.left = "0px";
        l.style.top = "0px";
        l.style.width = c ? d.style.height : d.style.width;
        l.style.height = c ? d.style.width : d.style.height;
        l.style.zIndex = "" + b;
        d.insertAdjacentElement("afterend", l);
        var q = document.createElement("div");
        q.style.position = "absolute";
        q.style.left = "0";
        q.style.top = "0";
        q.style.width = "100%";
        q.style.height = "100%";
        q.style.backgroundColor = Xk(uqb(a.H));
        l.insertAdjacentElement("afterend", q);
        return function() {
            l.remove();
            q.remove();
            y8(a.H.U)
        }
    };
    U8.prototype.mj = function() {
        this.H.mj()
    }
    ;
    var erb = function(a, b) {
        var c;
        return Qc(function(d) {
            if (1 == d.H)
                return Rc(d, ml(b), 2);
            c = d.O;
            var e = c.data
              , f = c.size
              , h = "sketchology://background_" + a.ha;
            a.ha++;
            var k = new vZ;
            bl(k, 1, h);
            tqb(a.H, e, f, h, k);
            d.H = 0
        })
    }
      , frb = function(a) {
        var b, c, d, e, f, h, k, l, p, q, r, t, w, I;
        return Qc(function(P) {
            switch (P.H) {
            case 1:
                G8(a.H).evictAllTextures();
                b || (b = {
                    backgroundColor: lpb,
                    mu: {
                        left: 0,
                        right: 800,
                        bottom: 0,
                        top: 600
                    }
                });
                c = new IZ;
                if (!b.backgroundImage) {
                    if (b.backgroundColor) {
                        var ea = ipb(b.backgroundColor);
                        bl(c, 1, ea)
                    } else
                        ea = ipb(lpb),
                        bl(c, 1, ea);
                    P.vf(2);
                    break
                }
                d = 5;
                e = "host:" + sl(d) + ":" + b.backgroundImage.fl;
                if (!b.backgroundImage.source) {
                    P.vf(3);
                    break
                }
                return Rc(P, ml(b.backgroundImage.source), 4);
            case 4:
                f = P.O,
                J8(a.H, f.data, f.size, e, d);
            case 3:
                h = new vZ,
                bl(h, 1, e),
                bl(c, 2, h);
            case 2:
                if (b.grid) {
                    k = new xZ;
                    if (b.grid.fl)
                        bl(k, 1, "host:" + sl(3) + ":" + b.grid.fl);
                    else if (b.grid.type) {
                        l = Hnb.get(b.grid.type);
                        if (!l)
                            throw Error("rf`" + b.grid.type);
                        bl(k, 1, l)
                    }
                    b.grid.size && bl(k, 3, b.grid.size);
                    b.grid.gs && (ea = v8(b.grid.gs)[0],
                    bl(k, 2, ea));
                    p = b.grid.origin || new Kj(0,0);
                    q = new al;
                    bl(q, 1, p.x);
                    bl(q, 2, p.y);
                    bl(k, 4, q);
                    bl(c, 5, k)
                } else
                    ea = new xZ,
                    bl(c, 5, ea);
                b.mu && (r = b.mu instanceof pl ? b.mu : new pl(b.mu),
                ea = Dha(r),
                bl(c, 3, ea));
                lqb(a.H, c);
                return Rc(P, a.flush(), 5);
            case 5:
                t = x(a.Zr);
                for (w = t.next(); !w.done; w = t.next())
                    I = w.value,
                    a.requestImage(I);
                y8(a.H.U);
                P.H = 0
            }
        })
    }
      , grb = function(a, b) {
        kqb(a.H, b instanceof pl ? b : new pl(b))
    }
      , hrb = function(a) {
        var b = Gqb(a.H);
        if (0 !== Pk(b, 4))
            throw Error("sf");
        a = Pk(Pk(b, 1), 1) || 0;
        var c = Pk(Pk(b, 1), 2) || 0
          , d = Pk(b, 2) || 0;
        b = Pk(b, 3) || 0;
        return new pl({
            top: c + .5 * b,
            right: a + .5 * d,
            bottom: c - .5 * b,
            left: a - .5 * d
        })
    }
      , W8 = function(a) {
        a = G8(a.H).getMinimumBoundingRect();
        return new pl(a)
    };
    U8.prototype.addElement = function(a, b) {
        this.H.addElement(a, b)
    }
    ;
    U8.prototype.clear = function() {
        G8(this.H).removeAllElements()
    }
    ;
    U8.prototype.flush = function() {
        var a = this;
        return new Promise(function(b) {
            a.H.flush(b)
        }
        )
    }
    ;
    var jrb = function(a, b) {
        return new Promise(function(c, d) {
            irb(a, {
                sE: b,
                frameRate: 1,
                sG: 1
            }, function(e) {
                Iha(e, b.qP).then(c)
            }).catch(d)
        }
        )
    }
      , krb = function(a, b) {
        return new Promise(function(c, d) {
            irb(a, {
                sE: b,
                frameRate: 1,
                sG: 1
            }, function(e) {
                Hha(e, b.qP).then(c)
            }).catch(d)
        }
        )
    }
      , irb = function(a, b, c) {
        var d = a.ka;
        ++a.ka;
        var e = new e8;
        sob(e, Eha(b.sE, d));
        bl(e, 2, b.frameRate);
        bl(e, 3, b.sG);
        return new Promise(function(f, h) {
            a.V.set(d, {
                EW: c,
                Ml: f,
                onError: h
            });
            a.H.flush(function() {
                Bqb(a.H, e)
            })
        }
        )
    };
    U8.prototype.onImageExported = function(a, b, c, d, e, f) {
        var h = this, k, l;
        return Qc(function(p) {
            k = h.V.get(a);
            if (!k)
                return p.return();
            if (f)
                return h.V.delete(a),
                k.onError(Error(f)),
                p.return();
            l = {
                data: c,
                size: b
            };
            k.EW(l, d, e);
            d + 1 >= e && (h.V.delete(a),
            k.Ml());
            p.H = 0
        })
    }
    ;
    U8.prototype.requestImage = function(a) {
        var b = this;
        lrb(this, a).then(function(c) {
            2 === c.jl && 2048 < Bha(c.image.size) ? G8(b.H).rejectTextureUri(a) : J8(b.H, c.image.data, c.image.size, a, c.jl)
        }, function() {
            G8(b.H).rejectTextureUri(a)
        })
    }
    ;
    var lrb = function(a, b) {
        var c, d, e;
        return Qc(function(f) {
            if (1 == f.H) {
                var h;
                if (h = b.match(Zqb)) {
                    var k = Jha(h[1]);
                    h = null === k ? null : {
                        jl: k,
                        fl: h[2]
                    }
                } else
                    h = null;
                if (c = h)
                    return f.return(mrb(a, c.jl, c.fl));
                if (b.startsWith("sketchology://background_"))
                    return f.return(mrb(a, 5, "sketchology-legacy-background"));
                if ("sketchology://border0" !== b)
                    return b.startsWith("inkbrush:") ? (a.Zr.add(b),
                    d = b.substring(9),
                    f.return(brb(d))) : f.return(nrb(b));
                null === a.U && (a.U = ml("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AgPEBYrHoEFUgAAAw1JREFUeNrt3b9uE0EQBvBvZvd8LURUkVwEkEDAm9AgQYOQKHgZWloqUMoUaVJSpAivQBEhJGhSWiAlKXz7JwXey9nE9vrOgHT3fZKVFM5F/mUyN5tIY8F2EtG/yNYucnZ21keg/57d3V1RMvzdEJjABGYITGACM+1iNz5RxGGPzCIbnT+i3RA1AjgFcADgR4zRDwTVABjHGF8AeJwOaDnYNgd29jGGED6JyMvxeDwZYvVOJpN3FxcXH0TkWfMovQpac6p39jgdMi4A7Ozs/HLOvQkhfEkurW9yDVh47+GcOxgybsre3t5P59y+937OqHUFhxAQQkBVVd85E/yOc+5bcuk0pqWLeO/hvQ+krV289x45yLqqPSRk5xym0yllZ5lOp6iqCiGEtW3C5lZwzq/DUOK9h4jUwK3GtGYFz1oEZa97cA2crJaNapozoiVk5rqCm+2h898ihn487uKiWPMPy2arYG7G7TQHM91CYAITmCEwgQnMEJjABGYITGCGwAQmMENgAhOYITCBCUwCAhOYITCBCcwQmMAEZghMYIbABCYwQ2ACE5ghMIEJzBCYwAyBCUxghsAEJjBDYAIzBP63wFkLcUX4lhAp3nu79Qr23t8lbZ37WwNuLFx7fnJycnvossfHx7dijK+WGLWrYBFBjPHh5eXl/tHR0Z0h41ZV9T7G+EREum/AThcREaiqqOpTAJ8PDw8/VlX11TnnhgArIrYsy3vn5+evy7J8NLNADrJd1xpUFcaY9BBVfSAib2foAPq7GTAZGGNSkcFaC2stjDH161+BLGsrOAEXRYGyLOsNgKqK5hbovgIng/T6R6MRiqKogVtVcPqi5k+tKIo5XOfcYICNMbDWYjQaoSzLP4BXtYqVFayqiDHCWlsjJnDnXPYG0j5UcCqy9LDWtq/gZcipHxVFMbfitec3uMX70FwP7nyTW2zyaSt236v3pipO7UJVs9pDVgU3p4n0jZqwQwBeHFlzYLPn4MXPb4Lt+5i2CJ1zgsuu4GUX2vBNk3qJnvX8jOdwv3h7O1wBYIqaD5lCtYoAAAAASUVORK5CYII="));
                return Rc(f, a.U, 5)
            }
            e = f.O;
            return f.return({
                image: e,
                jl: 1
            })
        })
    }
      , mrb = function(a, b, c) {
        var d, e, f;
        return Qc(function(h) {
            if (1 == h.H) {
                if (!a.Yy)
                    throw Error("tf");
                d = 6 !== b;
                return Rc(h, a.Yy(c), 2)
            }
            if (3 != h.H)
                return e = h.O,
                Rc(h, ml(e, {
                    wP: d
                }), 3);
            f = h.O;
            return h.return({
                image: f,
                jl: b
            })
        })
    }
      , brb = function(a) {
        var b, c;
        return Qc(function(d) {
            if (1 == d.H)
                return b = "brushes/" + a,
                Rc(d, ml(b), 2);
            c = d.O;
            return d.return({
                image: c,
                jl: 4
            })
        })
    }
      , nrb = function(a) {
        var b, c, d;
        return Qc(function(e) {
            if (1 == e.H) {
                b = sha(a);
                if ("none" === b)
                    throw Error("uf");
                c = Inb.get(b);
                if (!c)
                    throw Error("vf`" + b + "`" + a);
                return Rc(e, ml(c), 3)
            }
            d = e.O;
            return e.return({
                image: d,
                jl: 3
            })
        })
    };
    U8.prototype.Ja = function() {
        this.Ma = z(Kqb)
    }
    ;
    U8.prototype.Ea = function() {
        var a = this;
        Me.prototype.Ea.call(this);
        var b = this.Va().querySelector(".ink-layer-container");
        this.H.render(b);
        this.W.Ta(b);
        this.O.Ta(b);
        this.Ba();
        window.addEventListener("resize", function() {
            if (a.H.V && 0 !== V8(a).area()) {
                var c = void 0
                  , d = void 0
                  , e = function() {
                    c && c();
                    c = void 0
                };
                c ? (clearTimeout(d),
                d = setTimeout(e, 50)) : 0 < V8(a).area() && (c = drb(a),
                d = setTimeout(e, 50))
            }
        })
    }
    ;
    var orb = function() {
        return B('<svg class="ink-pen-icon ink-icon" fill="none" fill-rule="evenodd" height="24px" stroke="none" stroke-width="1" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon fill="#424242" points="3 17.25 3 21 6.74 21 14.28 13.47 10.53 9.72"></polygon><path color="#000000" class="ink-icon-color" d="M18.37,3.3 L20.71,5.63 C21.1,6.02 21.11,6.66 20.72,7.05 L15.35,12.41 L11.59,8.65 L14.12,6.12 L13.39,5.39 L7.73,11.05 L6.33,9.65 L12.7,3.29 C13.09,2.9 13.74,2.91 14.12,3.3 L15.54,4.71 L16.96,3.3 C17.34,2.91 17.98,2.91 18.37,3.3 L18.37,3.3 Z"></path><path fill="#424242" class="ink-cap-border" d="M17.7,4L20,6.3L15.4,11L13,8.6l1.8-1.8l0.7-0.7l-0.7-0.7l-0.2-0.2l0.2,0.2l0.7,0.7l0.7-0.7L17.7,4 M13.4,3 c-0.3,0-0.5,0.1-0.7,0.3L6.3,9.6l1.4,1.4l5.7-5.7l0.7,0.7l-2.5,2.5l3.8,3.8L20.7,7c0.4-0.4,0.4-1,0-1.4l-2.3-2.3 C18.2,3.1,17.9,3,17.7,3S17.2,3.1,17,3.3l-1.4,1.4l-1.4-1.4C13.9,3.1,13.7,3,13.4,3L13.4,3z"></path></svg>')
    }
      , prb = function() {
        return B('<svg class="ink-marker-icon ink-icon" fill="none" fill-rule="evenodd" height="24px" stroke="none" stroke-width="1" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#424242" d="M9.7,9.49 L13.99,13.79 L7.45,20.33 L6.73,19.61 L5.3,21.04 C4.51,21.83 3.23,21.83 2.44,21.04 C1.65,20.25 1.65,18.96 2.44,18.18 L3.87,16.75 L3.15,16.03 L9.7,9.49 L9.7,9.49 Z"></path><path color="#ff5252" class="ink-icon-color" d="M21.26,3.69 L19.8,2.22 C19.02,1.44 17.75,1.44 16.97,2.22 L10.76,8.43 L15.05,12.73 L21.26,6.52 C22.05,5.74 22.05,4.47 21.26,3.69 L21.26,3.69 Z"></path><path fill="#424242" class="ink-cap-border" d="M18.4,2.6c0.3,0,0.5,0.1,0.7,0.3l1.5,1.5c0.2,0.2,0.3,0.4,0.3,0.7s-0.1,0.5-0.3,0.7l-5.5,5.5l-2.9-2.9 l5.5-5.5C17.9,2.7,18.1,2.6,18.4,2.6 M18.4,1.6c-0.5,0-1,0.2-1.4,0.6l-6.2,6.2l4.3,4.3l6.2-6.2c0.8-0.8,0.8-2,0-2.8l-1.5-1.5 C19.4,1.8,18.9,1.6,18.4,1.6L18.4,1.6z"></path></svg>')
    }
      , qrb = function() {
        return B('<svg class="ink-highlighter-icon ink-icon" fill="none" fill-rule="evenodd" height="24px" stroke="none" stroke-width="1" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#424242" d="M10.22,9.49 L4.31,15.49 C3.54,16.29 3.61,17.54 4.39,18.34 L0.77,22 L6.45,22 L7.19,21.25 C7.97,22.06 9.14,22.11 9.92,21.3 L15.88,15.25 L10.22,9.49 L10.22,9.49 Z"></path><path color="#ffbc00" class="ink-icon-color" d="M22.68,5.49 L19.86,2.62 C19.08,1.82 17.79,1.78 17.02,2.58 L11.27,8.43 L16.93,14.18 L22.62,8.4 C23.39,7.59 23.45,6.29 22.68,5.49 L22.68,5.49 Z"></path><path fill="#424242" class="ink-cap-border" d="M18.4,3c0.3,0,0.5,0.1,0.7,0.3L22,6.2c0.4,0.4,0.4,1.1-0.1,1.5l-5,5.1l-4.3-4.3l5.1-5.2 C17.9,3.1,18.1,3,18.4,3 M18.4,2c-0.5,0-1,0.2-1.4,0.6l-5.8,5.9l5.7,5.8l5.7-5.8c0.8-0.8,0.8-2.1,0.1-2.9l-2.8-2.9 C19.5,2.2,18.9,2,18.4,2L18.4,2z"></path></svg>')
    }
      , rrb = function() {
        return B('<svg class="ink-eraser-icon ink-icon" height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#424242" d="M21.41,11.33 L13.04,20 L4.73,20 L2.58,17.86 C1.8,17.08 1.8,15.83 2.58,15.04 L13.62,3.58 C14.4,2.81 15.68,2.81 16.46,3.58 L21.41,8.51 C22.2,9.29 22.2,10.55 21.41,11.33 L21.41,11.33 Z"></path><polygon color="#4285f4" class="ink-icon-color" points="17.26 18 15.26 20 21.96 20 21.96 18"></polygon></svg>')
    }
      , srb = function() {
        return B('<svg class="ink-edit-icon ink-icon" height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path color="#4285f4" class="ink-icon-color" d="M21,17 L18.42,17 L20.93,19.56 C20.75,20.25 20.2,20.82 19.52,21 L17,18.5 L17,21 L15,21 L15,15 L21,15 L21,17 L21,17 Z"></path><path fill="#424242" d="M19,7 L21,7 L21,9 L19,9 L19,7 L19,7 Z M21,5 L19,5 L19,3.08 C20.1,3.08 21,4 21,5 L21,5 Z M15,3 L17,3 L17,5 L15,5 L15,3 L15,3 Z M19,11 L21,11 L21,13 L19,13 L19,11 L19,11 Z M9,21 L7,21 L7,19 L9,19 L9,21 L9,21 Z M5,9 L3,9 L3,7 L5,7 L5,9 L5,9 Z M5,3.08 L5,5 L3,5 C3,4 4,3.08 5,3.08 L5,3.08 Z M5,17 L3,17 L3,15 L5,15 L5,17 L5,17 Z M9,5 L7,5 L7,3 L9,3 L9,5 L9,5 Z M13,5 L11,5 L11,3 L13,3 L13,5 L13,5 Z M13,21 L11,21 L11,19 L13,19 L13,21 L13,21 Z M5,13 L3,13 L3,11 L5,11 L5,13 L5,13 Z M5,21.08 C3.9,21.08 3,20 3,19 L5,19 L5,21.08 L5,21.08 Z"></path></svg>')
    }
      , trb = function() {
        return B('<svg class="ink-redo-icon ink-icon" height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>')
    }
      , urb = function() {
        return B('<svg class="ink-undo-icon ink-icon" height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>')
    }
      , vrb = function() {
        return B('<svg class="ink-fullscreen-icon ink-icon" height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path class="ink-show-unchecked" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/><path class="ink-show-checked" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>')
    }
      , wrb = function() {
        return B('<svg class="ink-back-icon ink-icon" height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>')
    }
      , xrb = function() {
        return B('<svg class="ink-more-icon ink-icon" height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>')
    };
    var yrb = function(a) {
        var b = a.Yk
          , c = a.Tf;
        a = a.bl;
        return B('<div class="ink-button-container"><button class="ink-button"' + (c ? ' aria-label="' + A(c) + '"' : "") + "></button>" + (b ? '<button class="ink-button ink-dropdown"' + (a ? ' aria-label="' + A(a) + '"' : "") + ">" + B('<svg class="ink-arrow-icon ink-icon" fill="#000000" height="24px" width="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>') + "</button>" : "") + "</div>")
    };
    var X8 = function(a) {
        Me.call(this);
        this.canvas = a;
        this.ua = a.Ya("below-ink-canvas");
        this.Ga = "rtl" === document.querySelector("html").getAttribute("dir")
    };
    N(X8, Me);
    X8.prototype.render = function() {
        Me.prototype.render.call(this, this.ua)
    }
    ;
    X8.prototype.Ea = function() {
        var a = this;
        Me.prototype.Ea.call(this);
        window.addEventListener("touchstart", function(b) {
            zrb(a, b)
        });
        window.addEventListener("mousedown", function(b) {
            zrb(a, b)
        });
        this.ma().addEventListener("click", function(b) {
            Arb(a, b)
        });
        this.ma().addEventListener("keydown", function(b) {
            if (27 === b.keyCode)
                a.hide(),
                b.stopPropagation();
            else if (9 === b.keyCode && b.target === document.activeElement) {
                var c = a.ma().querySelectorAll("button");
                b.target === c[c.length - 1] && a.hide()
            }
        })
    }
    ;
    var zrb = function(a, b) {
        if (a.isVisible()) {
            b = b.target;
            do
                if (b === a.ma() || b === a.getParent().ma())
                    return;
            while (b = b.parentElement);
            a.hide()
        }
    };
    X8.prototype.show = function(a) {
        var b = this
          , c = this.Va();
        c.style.visibility = "hidden";
        c.style.display = "block";
        Brb(this);
        el(this, "show");
        requestAnimationFrame(function() {
            var d = yz(a).x + a.offsetWidth / 2
              , e = 13;
            b.Ga && (e = -e);
            var f = d - c.offsetWidth / 2 + e;
            d + c.offsetWidth / 2 + e > window.innerWidth - 2 && (f = window.innerWidth - 2 - c.offsetWidth + e);
            2 > f && (f = 2);
            d = Math.max(yz(b.canvas.ma()).x, 0);
            c.style.left = f - d + "px";
            c.style.visibility = "visible";
            requestAnimationFrame(function() {
                b.Aa()
            })
        })
    }
    ;
    X8.prototype.hide = function() {
        el(this, "hide");
        this.ma().style.display = "none"
    }
    ;
    X8.prototype.isVisible = function() {
        return "none" !== this.ma().style.display
    }
    ;
    var Brb = function(a) {
        for (var b = x(a.ua.querySelectorAll(".ink-menu")), c = b.next(); !c.done; c = b.next())
            c = c.value,
            c !== a.ma() && "none" !== c.style.display && (c.style.display = "none")
    };
    X8.prototype.Aa = function() {
        this.ma().firstElementChild.focus()
    }
    ;
    var Y8 = function(a, b) {
        Me.call(this);
        b = b || {};
        this.ua = [];
        this.va = [];
        this.ta = !!b.Yk;
        this.oa = a;
        this.O = !!b.checked;
        this.U = void 0 === b.enabled ? !0 : !!b.enabled;
        this.ka = b.Tf || null;
        this.Aa = b.bl || null;
        this.ha = null;
        this.na = b.className;
        this.V = this.W = null;
        this.H = document.createElement("div")
    };
    N(Y8, Me);
    Y8.prototype.Ja = function() {
        var a = this
          , b = z(yrb, {
            Yk: this.ta,
            Tf: this.ka,
            bl: this.Aa
        });
        if (this.oa) {
            var c = z(this.oa);
            b.querySelector("button").appendChild(c);
            this.ha && Array.prototype.forEach.call(c.querySelectorAll(".ink-icon-color"), function(d) {
                d.setAttribute("color", a.ha)
            })
        } else
            b.querySelector("button").textContent = this.ka;
        this.na && D(b, this.na);
        this.H.style.fontSize = "8px";
        this.H.style.visibility = "hidden";
        b.querySelector("button").appendChild(this.H);
        this.Ma = b
    }
    ;
    Y8.prototype.Ea = function() {
        var a = this;
        Me.prototype.Ea.call(this);
        var b = this.Va()
          , c = b.querySelector("button");
        this.W = c;
        this.V = b.querySelector(".ink-dropdown");
        c.addEventListener("click", function(h) {
            a.U && (Kha(h, c),
            a.ua.forEach(function(k) {
                k(h)
            }))
        });
        for (var d = x(["focus", "blur"]), e = d.next(); !e.done; e = d.next())
            c.addEventListener(e.value, function() {
                return b.classList.remove("ink-no-border")
            });
        d = x(["mouseup", "mousedown", "pointerup", "pointerdown"]);
        for (e = d.next(); !e.done; e = d.next())
            c.addEventListener(e.value, function() {
                return b.classList.add("ink-no-border")
            });
        if (this.V) {
            var f = this.V;
            f.addEventListener("click", function(h) {
                a.U && (Kha(h, f),
                a.va.forEach(function(k) {
                    k(h)
                }))
            })
        }
        Z8(this, this.O);
        this.setEnabled(this.U)
    }
    ;
    var $8 = function(a, b) {
        a.ua.push(b)
    }
      , Crb = function(a, b) {
        a.va.push(b)
    }
      , a9 = function(a, b) {
        $8(a, b);
        Crb(a, b)
    }
      , Drb = function(a, b) {
        if (b.getParent())
            throw Error("wf");
        a.kd(b, a.Xc(), !1);
        b.render();
        $8(a, function() {
            b.isVisible() ? b.hide() : (a.O || !a.ta) && b.show(a.Va())
        });
        Crb(a, function() {
            b.isVisible() ? b.hide() : b.show(a.Va())
        })
    }
      , b9 = function(a, b) {
        a.ma() ? Array.prototype.forEach.call(a.ma().querySelectorAll(".ink-icon-color"), function(c) {
            c.setAttribute("color", b)
        }) : a.ha = b
    }
      , Z8 = function(a, b) {
        a.O = b;
        a.ma() && (a.O ? D(a.ma(), "ink-checked") : My(a.ma(), "ink-checked"))
    };
    Y8.prototype.isEnabled = function() {
        return this.U
    }
    ;
    Y8.prototype.setEnabled = function(a) {
        this.U = a;
        this.ma() && (this.U ? My(this.ma(), "ink-disabled") : D(this.ma(), "ink-disabled"),
        this.W.disabled = !this.U)
    }
    ;
    Y8.prototype.Vb = function(a) {
        a ? (this.H.style.visibility = "visible",
        this.H.style.height = "auto",
        this.H.style.width = "auto",
        this.H.textContent = a) : (this.H.style.visibility = "hidden",
        this.H.style.height = "0px",
        this.H.style.width = "0px")
    }
    ;
    var Erb = function(a, b) {
        a = a.rtl;
        b = b && b.Gx;
        return B("<style" + (b ? ' nonce="' + A(hB(b)) + '"' : "") + '>\n    .above-ink-canvas {\n      display: block;\n    }\n    .ink-button-container {\n      vertical-align: middle;\n      font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n      font-size: 16px;\n    }\n    .ink-layer-container {\n      height: calc(100% - 56px);\n    }\n    .ink-toolbar {\n      background-color: #ffffff;\n      border-bottom: 1px solid rgba(0, 0, 0, .24);\n      box-sizing: border-box;\n      height: 56px;\n      padding: 8px 0;\n      text-align: center;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      touch-action: none;\n      position: relative;\n    }\n    .ink-menu button, .ink-toolbar button {\n      outline: unset;\n      -webkit-tap-highlight-color: transparent;\n      position: relative;\n      overflow: hidden;\n    }\n    .ink-menu .ripple-effect, .ink-toolbar .ripple-effect {\n      position: absolute;\n      border-radius: 50%;\n      width: 5px;\n      height: 5px;\n      background: rgba(0, 0, 0, 0.12);\n      animation: ink-ripple-animation 0.3s ease-in;\n    }\n    @keyframes ink-ripple-animation {\n      from {\n        transform: scale(1);\n        opacity: (0.4);\n      }\n      to {\n        transform: scale(100);\n        opacity: 0;\n      }\n    }\n    .ink-toolbar-begin, .ink-toolbar-end, .ink-button-container {\n      display: inline-block;\n    }\n    .ink-toolbar-begin, .ink-toolbar-end {\n      height: 100%;\n    }\n    .ink-toolbar-begin {\n      float: left;\n    }\n    .ink-toolbar-end {\n      float: right;\n    }\n    .ink-button-container {\n      height: 100%;\n      margin-left: 16px;\n    }\n    .ink-toolbar-begin .ink-button-container:first-child {\n      margin-left: 12px;\n    }\n    .ink-toolbar-end .ink-button-container:last-child {\n      margin-right: 12px;\n    }\n    .ink-icon-color {\n      fill: #424242;\n    }\n    .ink-toolbar:not(.ink-no-hover) .ink-button-container:hover .ink-icon-color, .ink-checked .ink-icon-color {\n      fill: currentColor;\n    }\n    .ink-show-checked {\n      display: none;\n    }\n    .ink-show-unchecked {\n      display: inline;\n    }\n    .ink-button-container.ink-checked .ink-show-checked {\n      display: inline;\n    }\n    .ink-button-container.ink-checked .ink-show-unchecked {\n      display: none;\n    }\n    .ink-button {\n      background-color: #ffffff;\n      border: 1px solid #ffffff;\n      cursor: pointer;\n      height: 100%;\n      margin: 0;\n      padding: 0;\n    }\n    .ink-button.ink-dropdown {\n      border-left-width: 0;\n      width: 18px;\n    }\n    .ink-icon {\n      opacity: 0.54;\n      padding: 8px 7px;\n    }\n    .ink-arrow-icon {\n      padding: 8px 0;\n    }\n    .ink-toolbar:not(.ink-no-hover) .ink-button-container:hover:not(.ink-disabled):not(.ink-no-border) .ink-button,\n    .ink-toolbar:not(.ink-no-hover) .ink-button-container:not(.ink-disabled):not(.ink-no-border) .ink-button:focus {\n      border-color: #e5e5e5;\n    }\n    .ink-toolbar:not(.ink-no-hover) .ink-button-container:hover:not(.ink-disabled) .ink-icon:not(.ink-circle-icon), .ink-checked .ink-icon {\n      opacity: 0.87;\n    }\n    .ink-disabled .ink-button {\n      cursor: not-allowed;\n      opacity: 0.26;\n    }\n    .ink-cap-border {\n      visibility: hidden;\n    }\n    .ink-icon-color[color="#fafafa"] + .ink-cap-border {\n      visibility: visible;\n    }\n\n    .below-ink-canvas {\n      position: absolute;\n      top: 50px;\n      width: 100%;\n    }\n    .ink-menu {\n      background: #ffffff;\n      border-radius: 2px;\n      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);\n      position: absolute;\n      width: 150px;\n    }\n    .ink-menu-item {\n      background-color: #ffffff;\n      border-color: #ffffff;\n      border-style: solid;\n      border-width: 0;\n      color: #333333;\n      cursor: pointer;\n      display: block;\n      font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n      font-size: 16px;\n      padding: 8px 0 8px 16px;\n      text-align: left;\n      width: 100%;\n    }\n    .ink-menu-item:hover {\n      background: #eeeeee;\n    }\n    .ink-menu-item:first-child {\n      border-top-width: 8px;\n    }\n    .ink-menu-item:last-child {\n      border-bottom-width: 8px;\n    }\n    .ink-palette {\n      width: 344px;\n    }\n    .ink-color-row {\n      height: 50px;\n    }\n    .ink-color, .ink-expand, .ink-size, .ink-shape-kind, .ink-align, .ink-font, .ink-shadow-size, .ink-spacer {\n      border-color: rgba(0,0,0,0);\n      border-radius: 50px;\n      border-style: solid;\n      border-width: 1px;\n      height: 20px;\n      margin: 15px 11px;\n      padding: 0;\n      vertical-align: middle;\n      width: 20px;\n    }\n    .ink-color {\n      transition: all 0.3s;\n    }\n    .ink-color:first-child {\n      margin-left: 15px;\n    }\n    .ink-color:hover {\n      cursor: pointer;\n      transform: scale(1.3, 1.3);\n    }\n    .ink-color.ink-selected {\n      transform: scale(1.6, 1.6);\n    }\n    .ink-expand {\n      background-color: #ffffff;\n      margin-right: 15px;\n    }\n    .ink-expand:hover {\n      cursor: pointer;\n    }\n    .ink-expand .ink-expand-icon {\n      border-width: 0;\n      height: 20px;\n      transition: transform 0.4s;\n      width: 20px;\n    }\n    .ink-shape-kind {\n      background-color: white;\n      border-radius: 0;\n      width: 32px;\n      height: 32px;\n      margin: 9px 5px;\n      stroke: black;\n      stroke-width: 3px;\n      transition: all 0.2s;\n    }\n    .ink-shape-kind:first-child {\n      margin-left: 9px;\n    }\n    .ink-shape-kind:hover {\n      stroke-width: 5px;\n      cursor: pointer;\n    }\n    .ink-shape-kind.ink-selected {\n      stroke: #4285f4;\n      stroke-width: 5px;\n    }\n    .ink-align {\n      background-color: #ffffff;\n      height: 34px;\n      margin: 8px 4px;\n      padding: 4px 3px;\n      width: 34px;\n    }\n    .ink-align:hover {\n      border-color: rgba(0,0,0,0.12);\n      cursor: pointer;\n    }\n    .ink-align.ink-selected {\n      border-color: #000000;\n      fill: #4285f4;\n    }\n    .ink-font {\n      background-color: #ffffff;\n      height: 34px;\n      margin: 8px 4px;\n      padding: 4px 3px;\n      width: 34px;\n    }\n    .ink-font:hover {\n      border-color: rgba(0,0,0,0.12);\n      cursor: pointer;\n    }\n    .ink-font.ink-selected {\n      border-color: #000000;\n      fill: #4285f4;\n    }\n    .ink-font:first-child {\n      margin-left: 8px;\n    }\n    .ink-shadow-size {\n      background-color: #ffffff;\n      height: 34px;\n      margin: 8px 4px;\n      width: 34px;\n    }\n    .ink-shadow-size:hover {\n      border-color: rgba(0,0,0,0.12);\n      cursor: pointer;\n    }\n    .ink-shadow-size.ink-selected {\n      border-color: #000000;\n    }\n    .ink-shadow-size:first-child {\n      margin-left: 8px;\n    }\n    .ink-spacer {\n      display: inline-block;\n      width: 18px;\n    }\n    .ink-palette-expanded .ink-expand-icon {\n      transform: rotate(180deg);\n    }\n    .ink-size {\n      background-color: #ffffff;\n      height: 34px;\n      margin: 8px 4px;\n      width: 34px;\n    }\n    .ink-size:hover {\n      border-color: rgba(0,0,0,0.12);\n      cursor: pointer;\n    }\n    .ink-size.ink-selected {\n      border-color: #000000;\n    }\n    .ink-size:first-child {\n      margin-left: 8px;\n    }\n    .ink-size div {\n      background-color: #000000;\n      border-radius: 50px;\n    }\n    .ink-size-row {\n      border-top: 1px solid #ffffff;\n    }\n    .ink-palette-expanded .ink-size-row {\n      border-top: 1px solid rgba(0,0,0,0.12);\n    }\n    .ink-text-row {\n      height: 50px;\n    }\n    .ink-color-rows-container {\n      overflow: hidden;\n      transition: height 0.3s cubic-bezier(0.4, 0.0, 0.2, 1) 0s;\n    }\n    .ink-palette-collapsed .ink-color-rows-container {\n      height: 50px !important;\n    }\n    .ink-color[color-data="#fafafa"] {\n      border-color: #bbbbbb;\n    }\n    .ink-palette-collapsed .ink-color-row:nth-child(n+2) {\n      visibility: hidden;\n    }\n\n    .ink-circle-icon .ink-icon-color {\n      fill: currentColor;\n    }\n    .ink-checked .ink-circle-icon.ink-icon {\n      opacity: 1;\n    }\n    .ink-circle-icon.ink-icon {\n      opacity: 1;\n      transition: transform 0.3s;\n    }\n    .ink-checked .ink-circle-icon {\n      transform: scale(1.6);\n    }\n    .ink-button-container:not(.ink-checked):hover .ink-circle-icon {\n      transform: scale(1.3);\n    }\n    .ink-menu-hidden {\n      display: none;\n    }\n    .ink-numeric-input {\n      margin-left: 3px;\n      width: 40px;\n    }\n    .ink-text-input {\n      margin-left: 3px;\n    }\n    .ink-search-count {\n      color: #888;\n      display: inline-block;\n      font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n      font-size: 13.3333px;\n      height: 100%;\n      margin-left: 8px;\n    }\n    #ink-snackbar {\n      visibility: hidden;\n      min-width: 250px;\n      background-color: #595959;\n      color: #ffffff;\n      text-align: center;\n      border-radius: 2px;\n      padding: 16px;\n      position: fixed;\n      font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n      left: 50%;\n      top: 30px;\n      z-index: 1;\n      }\n    #ink-snackbar.show {\n      visibility: visible;\n      -webkit-animation: fadein 0.5s, fadeout 0.5s 4.75s;\n      animation: fadein 0.5s, fadeout 0.5s 4.75s;\n    }\n    @-webkit-keyframes fadein {\n      from {top: 0; opacity: 0;}\n      to {top: 30px; opacity: 1;}\n    }\n    @keyframes fadein {\n      from {top: 0; opacity: 0;}\n      to {top: 30px; opacity: 1;}\n    }\n    @-webkit-keyframes fadeout {\n      from {top: 30px; opacity: 1;}\n      to {top: 0; opacity: 0;}\n    }\n    @keyframes fadeout {\n      from {top: 30px; opacity: 1;}\n      to {top: 0; opacity: 0;}\n    }\n    .ink-input {\n      display: inline-block;\n      height: 100%;\n      margin-left: 16px;\n      font-family: Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\n      font-size: 13.3333px;\n    }\n    ' + (a ? "\n        .ink-toolbar-begin {\n          float: right;\n        }\n        .ink-toolbar-end {\n          float: left;\n        }\n        .ink-button-container {\n          margin-left: 0;\n          margin-right: 16px;\n        }\n        .ink-input {\n          margin-left: 0;\n          margin-right: 16px;\n         }\n        .ink-toolbar-begin .ink-button-container:first-child {\n          margin-left: 0;\n          margin-right: 12px;\n        }\n        .ink-toolbar-end .ink-button-container:last-child {\n          margin-left: 12px;\n          margin-right: 16px;\n        }\n        .ink-button.ink-dropdown {\n          border-left-width: 1px;\n          border-right-width: 0;\n        }\n        .ink-back-icon, .ink-redo-icon, .ink-undo-icon {\n          transform: scaleX(-1);\n        }\n        .ink-menu-item {\n          padding: 8px 16px 8px 0;\n          text-align: right;\n        }\n        .ink-color:first-child {\n          margin: 15px 15px 15px 11px;\n        }\n        .ink-expand {\n          margin: 15px 11px 15px 15px;\n        }\n        .ink-size:first-child {\n          margin: 4px 8px 4px 0;\n        }\n      " : "") + '</style><div class="ink-toolbar"><div class="ink-toolbar-begin"></div><div class="ink-toolbar-end"></div><div id="ink-snackbar"></div></div>')
    };
    var c9 = function(a) {
        Me.call(this);
        this.O = [];
        this.V = [];
        this.rb = a.Ya("above-ink-canvas");
        this.canvas = a;
        this.vd(a)
    };
    N(c9, Me);
    g = c9.prototype;
    g.render = function() {
        Me.prototype.render.call(this, this.rb)
    }
    ;
    g.Ja = function() {
        var a = "rtl" === document.querySelector("html").getAttribute("dir");
        a = z(Erb, {
            rtl: a
        });
        if (this.O.length)
            for (var b = a.querySelector(".ink-toolbar-begin"), c = x(this.O), d = c.next(); !d.done; d = c.next())
                d = d.value,
                d instanceof Element ? b.appendChild(d) : d.render(b);
        if (this.V.length)
            for (b = a.querySelector(".ink-toolbar-end"),
            c = x(this.V),
            d = c.next(); !d.done; d = c.next())
                d = d.value,
                d instanceof Element ? b.appendChild(d) : d.render(b);
        this.Ma = a
    }
    ;
    g.Ea = function() {
        Me.prototype.Ea.call(this);
        var a = this.Va().querySelector(".ink-toolbar");
        ["pointerdown", "pointermove"].forEach(function(b) {
            a.addEventListener(b, function(c) {
                Oy(a, "ink-no-hover", "touch" == c.pointerType)
            })
        })
    }
    ;
    g.SO = function() {
        var a = Mc.apply(0, arguments)
          , b = a[0];
        a.forEach(function(c) {
            c === b ? Z8(c, !0) : Z8(c, !1);
            a9(c, function() {
                a.forEach(function(d) {
                    d !== c && Z8(d, !1)
                });
                Z8(c, !0)
            })
        })
    }
    ;
    g.Zl = function(a) {
        var b = a.Of
          , c = a.Yd
          , d = a.color
          , e = a.strokeWidth
          , f = a.p3
          , h = a.Qu
          , k = a.xA
          , l = a.wA
          , p = a.textAlign
          , q = a.NA
          , r = a.av;
        a = zqb(this.canvas.H);
        bl(a, 1, b);
        if (null != c) {
            var t = new tZ;
            bl(t, 1, c);
            bl(a, 5, t)
        } else
            Ou(a, 5);
        null != d && (c = v8(hpb(d)),
        bl(a, 2, c[0]));
        null != e && (c = new lZ,
        bl(c, 7, e),
        bl(c, 8, 4),
        bl(a, 3, c));
        null != f && pj(a, 5) && (e = new sZ,
        bl(e, 1, "host:" + sl(4) + ":" + f.fl),
        f.xY && bl(e, 4, f.xY),
        f.AY && bl(e, 3, f.AY),
        f.IY && (c = new lZ,
        bl(c, 7, f.IY),
        bl(c, 8, f.n4 || 4),
        bl(e, 2, c)),
        bl(Pk(a, 5), 3, e));
        19 == b ? (f = qj(a, 8),
        null != h && bl(f, 1, h),
        null != k && bl(f, 3, k),
        null != l && bl(f, 4, l),
        bl(a, 8, f)) : Ou(a, 8);
        13 == b || 14 == b ? (h = qj(a, 7),
        null != p && bl(h, 2, p),
        null != q && (p = new eZ,
        bl(p, 1, q),
        bl(h, 1, p)),
        r ? (q = new pZ,
        p = ipb(Yk(128)),
        bl(q, 1, p),
        bl(q, 2, r),
        bl(q, 3, r),
        bl(q, 4, r),
        bl(h, 3, q)) : Ou(h, 3),
        bl(a, 7, h)) : Ou(a, 7);
        7 == b ? (b = new mZ,
        bl(a, 4, b)) : Ou(a, 4);
        Aqb(this.canvas.H, a)
    }
    ;
    var Frb = new Map([[2, "EDIT"], [3, "MAGIC_ERASE"], [4, "QUERY"]])
      , Grb = new Map([[1, "CALLIGRAPHY"], [6, "ERASER"], [8, "HIGHLIGHTER"], [2, "INKPEN"], [3, "MARKER"], [12, "PENCIL"], [4, "BALLPOINT"]])
      , d9 = function(a, b) {
        var c = a.strokeWidth
          , d = a.Of
          , e = a.Yd;
        this.color = a.color;
        this.strokeWidth = c;
        this.Of = d;
        this.Yd = e;
        this.bm = b
    }
      , Hrb = function(a) {
        for (var b = 0, c = x(Frb), d = c.next(); !d.done; d = c.next())
            d = d.value,
            d[1] == a.tool && (b = d[0]);
        c = x(Grb);
        for (d = c.next(); !d.done; d = c.next())
            if (d = d.value,
            d[1] == a.tool) {
                b = 1;
                var e = d[0];
                break
            }
        if ("BALLPOINT" == a.tool || "BALLPOINT_IN_PEN_MODE_ELSE_MARKER" == a.tool)
            b = 1,
            e = 3;
        return new d9({
            color: a.color,
            strokeWidth: a.strokeWidth,
            Of: b,
            Yd: e
        },a.updatedTime)
    };
    d9.prototype.$a = function() {
        var a = {};
        return a.color = this.color,
        a.strokeWidth = this.strokeWidth,
        a.tool = null != this.Yd ? Grb.get(this.Yd) : Frb.get(this.Of),
        a.updatedTime = this.bm,
        a
    }
    ;
    var Irb = [[{
        color: "#000000",
        name: "Zwart"
    }, {
        color: "#ff5252",
        name: "Rood"
    }, {
        color: "#ffbc00",
        name: "Geel"
    }, {
        color: "#00c853",
        name: "Groen"
    }, {
        color: "#00b0ff",
        name: "Cyaan"
    }, {
        color: "#d500f9",
        name: "Paars"
    }, {
        color: "#8d6e63",
        name: "Bruin"
    }], [{
        color: "#fafafa",
        name: "Wit"
    }, {
        color: "#a52714",
        name: "Karmozijnrood"
    }, {
        color: "#ee8100",
        name: "Geelbruin"
    }, {
        color: "#558b2f",
        name: "Avocadogroen"
    }, {
        color: "#01579b",
        name: "Kobaltblauw"
    }, {
        color: "#8e24aa",
        name: "Dieppaars"
    }, {
        color: "#4e342e",
        name: "Donkerbruin"
    }], [{
        color: "#90a4ae",
        name: "Donkergrijs"
    }, {
        color: "#ff4081",
        name: "Felroze"
    }, {
        color: "#ff6e40",
        name: "Oranje"
    }, {
        color: "#aeea00",
        name: "Limoengroen"
    }, {
        color: "#304ffe",
        name: "Blauw"
    }, {
        color: "#7c4dff",
        name: "Violet"
    }, {
        color: "#1de9b6",
        name: "Blauwgroen"
    }], [{
        color: "#cfd8dc",
        name: "Lichtgrijs"
    }, {
        color: "#f8bbd0",
        name: "Lichtroze"
    }, {
        color: "#ffccbc",
        name: "Lichtoranje"
    }, {
        color: "#f0f4c3",
        name: "Lichtgroen"
    }, {
        color: "#9fa8da",
        name: "Lichtblauw"
    }, {
        color: "#d1c4e9",
        name: "Lavendel"
    }, {
        color: "#b2dfdb",
        name: "Lichtblauwgroen"
    }]];
    var Krb = function(a) {
        var b = a.MO
          , c = a.dY
          , d = a.QF
          , e = a.RF;
        a = a.vY;
        for (var f = '<div class="ink-menu ink-palette ink-palette-collapsed" style="display:none;"><div class="ink-color-rows-container" style="height:' + A(bB(50 * b.length)) + 'px;">', h = Math.max(0, Math.ceil(b.length)), k = 0; k < h; k++) {
            var l = k;
            f += '<div class="ink-color-row">';
            for (var p = b[l], q = p.length, r = 0; r < q; r++) {
                var t = p[r]
                  , w = t.color;
                t = B('<button aria-label="' + A(t.name) + '" class="ink-color" color-data="' + A(w) + '" style="background:' + A(bB(w)) + ';" tabindex="0"></button>');
                f += t
            }
            0 == l && (f += '<button aria-label="',
            f += be("More colors"),
            f += '" class="ink-expand">' + B('<svg class="ink-expand-icon" height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>') + "</button>");
            f += "</div>"
        }
        f += '</div><div class="ink-size-row">';
        b = c.length;
        for (h = 0; h < b; h++)
            k = c[h],
            l = k.mg,
            p = k.Xj,
            k = B('<button aria-label="' + A(k.name) + '" class="ink-size" size-data="' + A(l) + '" tabindex="0"><div style="height:' + A(bB(p)) + "px;width:" + A(bB(p)) + "px;margin:0 " + A(bB(16 - p / 2)) + 'px;"></div></button>'),
            f += k;
        f += "</div>" + (d ? '<div class="ink-shape-row">' + e9("rect") + e9("ellipse") + e9("line") + e9("arrow") + "</div>" : "");
        if (e) {
            f += '<div class="ink-text-row">' + Jrb("HELVETICA_REGULAR", "24px Helvetica") + Jrb("TIMES_OBLIQUE", "italic 24px Times") + Jrb("COURIER_BOLD", "bold 25px Courier") + '<div class="ink-spacer"></div>' + f9("left", 4, 8) + f9("center", 8, 8) + f9("right", 12, 8) + f9("justify", 4, 16) + '</div><div class="ink-shadow-row">';
            c = a.length;
            for (d = 0; d < c; d++)
                e = a[d],
                b = e.sk,
                e = B('<button aria-label="' + A(e.name) + '" class="ink-shadow-size" shadow-size-data="' + A(b) + '" tabindex="0"><svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><text x="3" y="20" style="font: 24px serif; text-shadow: ' + A(bB(24 * b)) + "px " + A(bB(24 * b)) + "px " + A(bB(24 * b)) + 'px rgba(0,0,0,0.5);">T</text></svg></button>'),
                f += e;
            f += "</div>"
        }
        return B(f + "</div>")
    }
      , e9 = function(a) {
        var b = "rect" == a ? '<rect x="4" y="5" width="20" height="18" fill="none"/>' : "ellipse" == a ? '<ellipse cx="14" cy="14" rx="10" ry="9" fill="none"/>' : "line" == a ? '<path d="M4,20 L24,8" fill="none" stroke-linecap="round"/>' : "arrow" == a ? '<path d="M3,20.6 L19,11 L20.5,13.5 L23,8.4 L17.5,8.5 L21,14" fill="none"/>' : "";
        return B('<button shape-kind-data="' + A(a) + '" aria-label="' + A(a) + ' shape" class="ink-shape-kind" tabindex="0"><svg height="28px" version="1.1" viewBox="0 0 28 28" width="28px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + b + "</svg></button>")
    }
      , f9 = function(a, b, c) {
        return B('<button align-data="' + A(a) + '" aria-label="Align ' + A(a) + '" class="ink-align" tabindex="0"><svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect x="4" y="5" width="16" height="3"/><rect x="4" y="11" width="16" height="3"/><rect x="' + A(b) + '" y="17" width="' + A(c) + '" height="3"/></svg></button>')
    }
      , Jrb = function(a, b) {
        return B('<button aria-label="' + A(a) + ' font" class="ink-font" font-data="' + A(a) + '" style="font: ' + A(bB(b)) + '" tabindex="0"><svg height="24px" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><text x="4" y="21">A</text></svg></button>')
    };
    var Lrb = [{
        sk: 0,
        name: "0%"
    }, {
        sk: .03,
        name: "3%"
    }, {
        sk: .06,
        name: "6%"
    }, {
        sk: .09,
        name: "9%"
    }, {
        sk: .12,
        name: "12%"
    }, {
        sk: .15,
        name: "15%"
    }, {
        sk: .18,
        name: "18%"
    }, {
        sk: .21,
        name: "21%"
    }]
      , g9 = function(a, b, c, d, e) {
        X8.call(this, a);
        e = e || {};
        this.va = [];
        this.Ca = [];
        this.Na = [];
        this.Ra = [];
        this.Ua = [];
        this.Wa = [];
        this.ha = e.color || "#000000";
        this.ka = null != e.size ? e.size : d[0].mg;
        this.Ka = c;
        this.Oa = d;
        this.oa = !!e.QF;
        this.O = e.Qu || 1;
        this.V = e.xA || 0;
        this.H = e.wA || 0;
        this.ta = !!e.RF;
        this.U = e.textAlign || 1;
        this.W = e.NA || 1;
        this.na = e.av || 0
    };
    N(g9, X8);
    g9.prototype.Ja = function() {
        this.Ma = z(Krb, {
            MO: this.Ka,
            dY: this.Oa,
            QF: this.oa,
            RF: this.ta,
            vY: Lrb
        });
        Mrb(this, {
            color: this.ha,
            size: this.ka,
            Qu: this.oa ? this.O : void 0,
            xA: this.oa ? this.V : void 0,
            wA: this.oa ? this.H : void 0,
            textAlign: this.ta ? this.U : void 0,
            NA: this.ta ? this.W : void 0,
            av: this.ta ? this.na : void 0
        })
    }
    ;
    var Arb = function(a, b) {
        for (b = b.target; "BUTTON" != b.tagName; ) {
            if (!b || b === a.ma())
                return;
            b = b.parentElement
        }
        if (Zg(b, "ink-color")) {
            var c = a.ma().querySelector(".ink-color.ink-selected");
            c !== b && (My(c, "ink-selected"),
            D(b, "ink-selected"),
            a.ha = b.getAttribute("color-data"));
            a.va.forEach(function(d) {
                d(a.ha)
            })
        } else if (Zg(b, "ink-size"))
            c = a.ma().querySelector(".ink-size.ink-selected"),
            c !== b && (My(c, "ink-selected"),
            D(b, "ink-selected"),
            a.ka = parseFloat(b.getAttribute("size-data"))),
            a.Ca.forEach(function(d) {
                d(a.ka)
            });
        else if (Zg(b, "ink-expand"))
            Qy(a.ma(), "ink-palette-collapsed"),
            Qy(a.ma(), "ink-palette-expanded");
        else if (Zg(b, "ink-shape-kind")) {
            c = a.ma().querySelector(".ink-shape-kind.ink-selected");
            if (c !== b)
                switch (My(c, "ink-selected"),
                D(b, "ink-selected"),
                b = b.getAttribute("shape-kind-data"),
                b) {
                case "rect":
                    a.O = 1;
                    a.V = 0;
                    a.H = 0;
                    break;
                case "ellipse":
                    a.O = 2;
                    a.V = 0;
                    a.H = 0;
                    break;
                case "line":
                    a.O = 3;
                    a.V = 1;
                    a.H = 1;
                    break;
                case "arrow":
                    a.O = 3;
                    a.V = 0;
                    a.H = 2;
                    break;
                default:
                    console.error("Unexpected shape-kind-data value: " + b)
                }
            a.Na.forEach(function(d) {
                d({
                    Qu: a.O,
                    W3: a.V,
                    O2: a.H
                })
            })
        } else if (Zg(b, "ink-align")) {
            c = a.ma().querySelector(".ink-align.ink-selected");
            if (c !== b)
                switch (My(c, "ink-selected"),
                D(b, "ink-selected"),
                b = b.getAttribute("align-data"),
                b) {
                case "left":
                    a.U = 1;
                    break;
                case "center":
                    a.U = 2;
                    break;
                case "right":
                    a.U = 3;
                    break;
                case "justify":
                    a.U = 4;
                    break;
                default:
                    console.error("Unexpected align-data value: " + b)
                }
            a.Ra.forEach(function(d) {
                d(a.U)
            })
        } else if (Zg(b, "ink-font")) {
            c = a.ma().querySelector(".ink-font.ink-selected");
            if (c !== b)
                switch (My(c, "ink-selected"),
                D(b, "ink-selected"),
                b = b.getAttribute("font-data"),
                b) {
                case "HELVETICA_REGULAR":
                    a.W = 1;
                    break;
                case "TIMES_OBLIQUE":
                    a.W = 10;
                    break;
                case "COURIER_BOLD":
                    a.W = 7;
                    break;
                default:
                    console.error("Unexpected font-data value: " + b)
                }
            a.Ua.forEach(function(d) {
                d(a.W)
            })
        } else
            Zg(b, "ink-shadow-size") && (c = a.ma().querySelector(".ink-shadow-size.ink-selected"),
            c !== b && (My(c, "ink-selected"),
            D(b, "ink-selected"),
            a.na = parseFloat(b.getAttribute("shadow-size-data"))),
            a.Wa.forEach(function(d) {
                d(a.na)
            }))
    }
      , h9 = function(a, b) {
        a.va.push(b)
    }
      , Nrb = function(a, b) {
        a.Ca.push(b)
    };
    g9.prototype.show = function(a, b) {
        Mrb(this, b || {});
        Zg(this.ma(), "ink-palette-expanded") || this.ma().querySelector(".ink-color.ink-selected").parentElement === this.ma().querySelector(".ink-color-row:first-child") || (D(this.ma(), "ink-palette-expanded"),
        My(this.ma(), "ink-palette-collapsed"));
        X8.prototype.show.call(this, a)
    }
    ;
    var Mrb = function(a, b) {
        a.ha = b.color || a.ha;
        a.ka = b.size || a.ka;
        a.O = b.Qu || a.O;
        a.V = b.xA || a.V;
        a.H = b.wA || a.H;
        a.U = b.textAlign || a.U;
        a.W = b.NA || a.W;
        a.na = void 0 !== b.av ? b.av : a.na;
        b = a.ma();
        var c = b.querySelector('button[color-data="' + a.ha + '"]');
        if (!c)
            throw Error("xf");
        var d = b.querySelector('button[size-data="' + a.ka + '"]');
        if (!d)
            throw Error("yf");
        for (var e = b.querySelectorAll(".ink-selected"), f = 0, h = e.length; f < h; f++)
            e[f] !== c && e[f] !== d && My(e[f], "ink-selected");
        D(c, "ink-selected");
        D(d, "ink-selected");
        if (a.oa) {
            switch (a.O) {
            case 1:
                c = "rect";
                break;
            case 2:
                c = "ellipse";
                break;
            case 3:
                c = 2 === a.H ? "arrow" : "line";
                break;
            default:
                c = ""
            }
            c = b.querySelector('button[shape-kind-data="' + c + '"]');
            if (!c)
                throw Error("zf");
            D(c, "ink-selected")
        }
        if (a.ta) {
            switch (a.U) {
            case 1:
                c = "left";
                break;
            case 2:
                c = "center";
                break;
            case 3:
                c = "right";
                break;
            case 4:
                c = "justify";
                break;
            default:
                c = ""
            }
            c = b.querySelector('button[align-data="' + c + '"]');
            if (!c)
                throw Error("Af");
            D(c, "ink-selected");
            switch (a.W) {
            case 1:
                c = "HELVETICA_REGULAR";
                break;
            case 10:
                c = "TIMES_OBLIQUE";
                break;
            case 7:
                c = "COURIER_BOLD";
                break;
            default:
                c = ""
            }
            c = b.querySelector('button[font-data="' + c + '"]');
            if (!c)
                throw Error("Bf");
            D(c, "ink-selected");
            a = b.querySelector('button[shadow-size-data="' + a.na + '"]');
            if (!a)
                throw Error("Cf");
            D(a, "ink-selected")
        }
    };
    g9.prototype.Sc = function() {
        return this.ha
    }
    ;
    g9.prototype.getSize = function() {
        return this.ka
    }
    ;
    g9.prototype.Aa = function() {
        this.ma().querySelector(".ink-color.ink-selected").focus()
    }
    ;
    var i9 = [{
        mg: .2379,
        Xj: 2,
        name: "Dikte 1"
    }, {
        mg: .2931,
        Xj: 4,
        name: "Dikte 2"
    }, {
        mg: .4167,
        Xj: 8,
        name: "Dikte 3"
    }, {
        mg: .5657,
        Xj: 12,
        name: "Dikte 4"
    }, {
        mg: .7244,
        Xj: 16,
        name: "Dikte 8"
    }, {
        mg: .8878,
        Xj: 20,
        name: "Dikte 12"
    }, {
        mg: 1.0536,
        Xj: 24,
        name: "Dikte 16"
    }, {
        mg: 1.2209,
        Xj: 28,
        name: "Dikte 20"
    }];
    var Orb = i9[1].mg
      , Prb = i9[3].mg
      , Qrb = Object.freeze({
        Of: 3
    })
      , j9 = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        c9.call(this, a);
        this.Oa = b;
        this.ua = this.U = void 0;
        this.ha = this.Ra = this.Ga = null;
        this.ka = new Rnb(b,c);
        this.Da(this.ka);
        this.ka.Ib(this);
        this.W = null;
        this.na = new o4(b || void 0);
        this.Da(this.na);
        this.na.Ib(this);
        a = new p4("Pagina wissen","Pi");
        this.na.Ia(a, !0);
        this.oa = c;
        this.Wa = this.Ua = this.ab = this.Na = this.Za = this.ob = this.nb = this.Aa = null;
        this.Ka = [];
        this.ta = null;
        this.H = new D7(b);
        this.Da(this.H);
        this.H.Ib(this);
        this.Ca = [this.na, this.ka, this.H];
        this.Tb = new Map([[2, 9387], [3, 9386]]);
        this.ub = new Map([[4, 9389], [1, 9388], [8, 9391], [3, 9390]]);
        this.va = new Set
    };
    N(j9, c9);
    j9.prototype.Ja = function() {
        var a = this
          , b = new Y8(wrb,{
            Tf: "Terug"
        });
        $8(b, function() {
            return void a.dispatchEvent(new Onb)
        });
        this.Aa = new Y8(srb,{
            Tf: "Selectietool"
        });
        $8(this.Aa, function() {
            k9(a, {
                Of: 2
            })
        });
        this.W = new Y8(rrb,{
            Yk: !0,
            Tf: "Gumtool",
            bl: "Optiemenu van gumtool openen"
        });
        $8(this.W, function() {
            return k9(a, Qrb)
        });
        Crb(this.W, function() {
            a.na.show(a.W.Va(), 2, 3)
        });
        var c = new Y8(orb,{
            Yk: !0,
            Tf: "Kalligrafietool",
            bl: "Kleur- en diktekiezer van kalligrafietool openen"
        });
        this.nb = c;
        this.va.add(c);
        var d = new g9(this.canvas,{
            Of: 1,
            Yd: 1
        },Irb,i9,{
            color: "#000000",
            size: Orb
        });
        this.ob = d;
        this.Ca.push(d);
        var e = {
            Of: 1,
            Yd: 1,
            get color() {
                return d.Sc()
            },
            get strokeWidth() {
                return d.getSize()
            }
        };
        a9(c, function() {
            return k9(a, e)
        });
        h9(d, function(P) {
            k9(a, e);
            b9(c, P)
        });
        Nrb(d, function() {
            return k9(a, e)
        });
        Drb(c, d);
        this.Zl(e);
        var f = new Y8(prb,{
            Yk: !0,
            Tf: "Markeertool",
            bl: "Kleur- en diktekiezer van markeertool openen"
        });
        this.Za = f;
        this.va.add(f);
        var h = new g9(this.canvas,{
            Of: 1,
            Yd: 3
        },Irb,i9,{
            color: "#ff5252",
            size: Orb
        });
        this.ab = h;
        this.Ca.push(h);
        var k = {
            Of: 1,
            Yd: 3,
            get color() {
                return h.Sc()
            },
            get strokeWidth() {
                return h.getSize()
            }
        };
        this.Na = k;
        a9(f, function() {
            return k9(a, k)
        });
        h9(h, function(P) {
            k9(a, k);
            b9(f, P)
        });
        Nrb(h, function() {
            return k9(a, k)
        });
        Drb(f, h);
        var l = new Y8(qrb,{
            Yk: !0,
            Tf: "Highlighttool",
            bl: "Kleur- en diktekiezer van highlighttool openen"
        });
        this.Ua = l;
        this.va.add(l);
        var p = new g9(this.canvas,{
            Of: 1,
            Yd: 8
        },Irb,i9,{
            color: "#ffbc00",
            size: Prb
        });
        this.Wa = p;
        this.Ca.push(p);
        var q = {
            Of: 1,
            Yd: 8,
            get color() {
                return p.Sc()
            },
            get strokeWidth() {
                return p.getSize()
            }
        };
        a9(l, function() {
            return k9(a, q)
        });
        h9(p, function(P) {
            k9(a, q);
            b9(l, P)
        });
        h9(p, function() {
            return k9(a, q)
        });
        Nrb(p, function() {
            return k9(a, q)
        });
        Drb(l, p);
        this.ta = new Y8(mbb,{
            Yk: !0,
            Tf: "Rasteropties openen",
            bl: "Rasteropties openen"
        });
        a9(this.ta, function() {
            a.H.show(a.ta.Va(), 2, 3)
        });
        var r = new Y8(urb,{
            Tf: "Ongedaan maken",
            enabled: !1
        });
        this.Ga = r;
        $8(r, function() {
            a.canvas.mj();
            a.dispatchEvent("Ui")
        });
        var t = new Y8(trb,{
            Tf: "Opnieuw",
            enabled: !1
        });
        $8(t, function() {
            gl(G8(a.canvas.H).redo());
            a.dispatchEvent("Ti")
        });
        var w = new Y8(vrb,{
            Tf: "Volledig scherm"
        });
        this.Ra = w;
        $8(w, function() {
            Z8(w, !w.O);
            a.dispatchEvent(new Qnb(w.O))
        });
        var I = new Y8(lbb,{
            Tf: "Nieuwe notitie maken"
        });
        $8(I, function() {
            return void a.dispatchEvent("Si")
        });
        this.ha = new Y8(xrb,{
            Tf: "Meer opties"
        });
        $8(this.ha, function() {
            a.ka.show(a.ha.Va())
        });
        this.oa || this.O.push(b);
        this.O.push(this.Aa);
        this.O.push(this.W);
        this.O.push(c);
        this.O.push(f);
        this.O.push(l);
        this.O.push(this.ta);
        this.V.push(r);
        this.V.push(t);
        this.oa && this.V.push(I);
        this.oa || this.V.push(w);
        this.oa || this.V.push(this.ha);
        this.Ka = [c, this.Aa, this.W, f, l];
        this.SO.apply(this, Tc(this.Ka));
        this.Ba().listen(this.canvas, Lob, function(P) {
            if (P = Pk(P.H, 10))
                r.setEnabled(qj(P, 1)),
                t.setEnabled(qj(P, 2))
        });
        c9.prototype.Ja.call(this);
        this.Ca.forEach(function(P) {
            P && a.Ba().listen(P, ["hide", "show"], a.Ab)
        });
        b = new Map;
        b.set(this.na, this.W.V);
        b.set(this.ka, this.ha.W);
        this.H && b.set(this.H, this.ta.W);
        b.forEach(function(P, ea) {
            P && a.Ba().listen(ea, "hide", function() {
                return P.focus()
            })
        })
    }
    ;
    var Rrb = function(a) {
        a.oa && a.ha && a.Ga.ma() && a.ha.render(a.Ga.ma().parentElement);
        var b = a.ka;
        b.Ia(b.O, !0);
        b.Ia(b.H, !0);
        b.H.setVisible(!1);
        a.Na.Yd = 4;
        3 == a.U.Yd && a.Zl(a.Na)
    };
    j9.prototype.Zl = function(a) {
        c9.prototype.Zl.call(this, a);
        this.U = new d9(a,Date.now())
    }
    ;
    var k9 = function(a, b) {
        var c = !a.U || a.U.Of != b.Of || a.U.Yd != b.Yd;
        a.Zl(b);
        a.dispatchEvent(new Srb(a.U));
        (b = null != b.Yd ? a.ub.get(b.Yd) : a.Tb.get(b.Of)) && a.Oa && c && a.Oa.log(b);
        a.ua = void 0
    }
      , Trb = function(a, b) {
        i9.some(function(e) {
            return e.mg === b.strokeWidth
        }) || (b = new d9({
            color: b.color,
            strokeWidth: a.U.strokeWidth,
            Of: b.Of,
            Yd: b.Yd
        },b.bm));
        a.Zl(b);
        switch (b.Yd) {
        case 4:
        case 3:
            var c = a.Za;
            var d = a.ab;
            break;
        case 8:
            c = a.Ua;
            d = a.Wa;
            break;
        case 1:
            c = a.nb,
            d = a.ob
        }
        c && (null != b.color && b9(c, b.color),
        a.Ka.forEach(function(e) {
            Z8(e, c == e)
        }));
        d && Mrb(d, {
            color: b.color,
            size: b.strokeWidth
        })
    }
      , Urb = function(a, b) {
        a.va.forEach(function(c) {
            !b && c.O && (a.ua = a.U,
            a.Zl(Qrb));
            c.setEnabled(b)
        });
        b && (a.ua && Trb(a, a.ua),
        a.ua = void 0)
    };
    j9.prototype.Ab = function(a) {
        this.dispatchEvent("hide" === a.type ? "Qi" : "Ri")
    }
    ;
    var Vrb = function(a) {
        return a.H ? a.H.H : "none"
    }
      , Srb = function(a) {
        V.call(this, "Oi");
        this.Rq = a
    };
    N(Srb, V);
    var Wrb = new Set([4, 1, 3, 8])
      , Xrb = function(a, b, c) {
        L.call(this);
        this.V = a;
        this.O = b;
        this.H = c;
        this.U = 0
    };
    N(Xrb, L);
    Xrb.prototype.init = function() {
        var a = this;
        Nv([Yrb(this), Zrb(this)]).then(function(b) {
            var c = null
              , d = 0;
            b = x(b);
            for (var e = b.next(); !e.done; e = b.next())
                (e = e.value) && e.bm > d && (d = e.bm,
                c = e);
            c && $rb(a, c)
        });
        (new F(this)).listen(this.V, "Oi", function(b) {
            if (!b.Rq.Yd || Wrb.has(b.Rq.Yd))
                a.O && M5(a.O, "Metadata", "inkbrush", b.Rq.$a()),
                a.H && asb(a.H, b.Rq),
                a.U = b.Rq.bm
        });
        this.H && bsb(this.H, function(b) {
            return $rb(a, b)
        })
    }
    ;
    var Yrb = function(a) {
        return new Iv(function(b) {
            a.O ? a.O.get("Metadata", "inkbrush", function(c) {
                c ? b(Hrb(c)) : b(null)
            }, function() {
                return b(null)
            }) : b(null)
        }
        )
    }
      , Zrb = function(a) {
        return new Iv(function(b) {
            a.H ? csb(a.H, b) : b(null)
        }
        )
    }
      , $rb = function(a, b) {
        b.bm > a.U && b.Yd && Wrb.has(b.Yd) && (Trb(a.V, b),
        a.U = b.bm)
    };
    var l9 = {}
      , dsb = Object.freeze((l9.dots = new t8(4291611852),
    l9.rules = new t8(4289317612),
    l9.square = new t8(4292730333),
    l9))
      , m9 = {}
      , esb = Object.freeze((m9.dots = 9394,
    m9.none = 9395,
    m9.rules = 9393,
    m9.square = 9392,
    m9))
      , fsb = new t8(4289317612)
      , n9 = function(a, b, c) {
        b = void 0 === b ? null : b;
        Me.call(this, c);
        this.W = b;
        this.Zc = a;
        this.Ga = this.va = this.O = this.canvas = null;
        this.na = !0;
        this.Oa = 0;
        this.Jb = !1;
        this.ob = null;
        this.xc = this.Pb = !1;
        this.Ua = new P2;
        this.ka = null;
        this.Wa = new Kj;
        this.Uc = !1
    };
    N(n9, Me);
    n9.prototype.Ja = function() {
        Me.prototype.Ja.call(this);
        this.ma().classList.add("nA1mMd-L9AdLc")
    }
    ;
    n9.prototype.Ea = function() {
        Me.prototype.Ea.call(this);
        this.Ua.config(this.Va())
    }
    ;
    n9.prototype.wf = function(a) {
        var b = this;
        crb({
            parentElement: this.Va()
        }).then(function(c) {
            b.canvas = c;
            b.va = bv("ink-layer-container");
            b.O = new j9(b.canvas,b.W,b.Zc);
            b.Da(b.O);
            b.O.render();
            c = new Xrb(b.O,b.Oc(),b.Gc());
            b.Da(c);
            c.init();
            b.Ba().listen(b.O, "Pi", b.ne).listen(b.O, "Ji", b.Xe).listen(b.O, "Ri", b.yd).listen(b.O, "Qi", b.je);
            b.canvas.listen(Nob, function(d) {
                Pk(d.H, 7) && !b.Uc && (b.Uc = !0,
                gsb(b))
            });
            hsb(b, !0);
            b.canvas.listen(Lob, function(d) {
                b.Za && b.Za.start();
                d = d.H;
                pj(d, 12) && (b.Oa = qj(Pk(d, 12), 1),
                isb(b));
                if (pj(d, 7) && (b.Jb = !0,
                b.na)) {
                    var e = W8(b.canvas).bottom;
                    d = V8(b.canvas);
                    var f = K8(b.canvas.H);
                    if (e <= f.bottom + .8 * d.height) {
                        !b.Pb && e <= (b.ob || 0) && (b.Pb = !0,
                        b.W && b.W.log(9414));
                        UX().speak("Canvas naar beneden uitgevouwen.");
                        d = K8(b.canvas.H);
                        var h = V8(b.canvas);
                        d && h && (f = d.top - 10 * (d.right - d.left),
                        e = Math.min(e - .8 * h.height, d.bottom),
                        e < f && (b.xc || (b.W && b.W.log(9415),
                        UX().speak("Kan niet verder uitvouwen. De maximum canvashoogte is bereikt.")),
                        b.xc = !0),
                        e = Math.max(e, f),
                        f = hrb(b.canvas)) && (I8(b.canvas.H, d.left, d.top, d.right, e),
                        grb(b.canvas, f))
                    }
                }
            });
            a()
        })
    }
    ;
    var hsb = function(a, b) {
        if (b) {
            b = new H7;
            var c = new J7;
            bl(b, 2, c);
            xqb(a.canvas.H, b);
            b = new F7;
            bl(b, 6, !1);
            yqb(a.canvas.H, b);
            Iqb(a.canvas.H, 2)
        } else
            b = new H7,
            c = new I7,
            bl(b, 1, c),
            xqb(a.canvas.H, b),
            b = new F7,
            bl(b, 6, !0),
            yqb(a.canvas.H, b),
            Iqb(a.canvas.H, 3)
    };
    n9.prototype.rr = function(a) {
        this.O && Z8(this.O.Ra, a);
        this.ma().classList.toggle("n9oEIb", a)
    }
    ;
    var jsb = function(a, b) {
        Pk(b, 1) && Pk(Pk(b, 1), 5) && Pk(Pk(Pk(b, 1), 5), 4) ? (b = Pk(Pk(Pk(b, 1), 5), 4),
        a.Wa.x = pj(b, 1) ? Pk(b, 1) : 0,
        a.Wa.y = pj(b, 2) ? Pk(b, 2) : V8(a.canvas).height) : (a.Wa.x = 0,
        a.Wa.y = V8(a.canvas).height)
    }
      , ksb = function(a, b) {
        b instanceof YZ && (b = sha(qj(qj(qj(b, 1), 5), 1)));
        a = a.O;
        a.H && Jnb(a.H, b)
    }
      , lsb = function(a, b) {
        a: {
            var c = a.canvas;
            b = {
                type: b,
                gs: dsb[b] || fsb,
                size: 35,
                origin: a.Wa
            };
            a = new xZ;
            if (b.fl)
                bl(a, 1, "host:" + sl(3) + ":" + b.fl);
            else if (b.type && "none" !== b.type) {
                var d = Hnb.get(b.type);
                if (!d)
                    throw Error("qf`" + b.type);
                bl(a, 1, d)
            } else {
                gl(G8(c.H).clearGrid());
                break a
            }
            b.gs && (d = v8(b.gs)[0],
            bl(a, 2, d));
            b.size && bl(a, 3, b.size);
            b = b.origin || new Kj(0,0);
            d = new al;
            bl(d, 1, b.x);
            bl(d, 2, b.y);
            bl(a, 4, d);
            wqb(c.H, a)
        }
    };
    n9.prototype.Oc = function() {
        return null
    }
    ;
    n9.prototype.Gc = function() {
        return null
    }
    ;
    var isb = function(a) {
        zi(yi(), "n_detl") && (95E5 <= a.Oa ? (a.O && Urb(a.O, !1),
        a.ka ? (N2(a.ka, "Deze tekening heeft de maximale grootte bereikt."),
        L2(a.ka)) : a.ka = Q2(a.Ua, "Deze tekening heeft de maximale grootte bereikt.", "Tekening toevoegen", function() {
            return a.rb()
        }, 6)) : 8E6 <= a.Oa ? (a.O && Urb(a.O, !0),
        a.ka ? N2(a.ka, "Deze tekening heeft bijna de maximale grootte bereikt. Voeg eventueel een nieuwe tekening aan deze notitie toe.") : a.ka = Q2(a.Ua, "Deze tekening heeft bijna de maximale grootte bereikt. Voeg eventueel een nieuwe tekening aan deze notitie toe.", "Tekening toevoegen", function() {
            return a.rb()
        }, 6)) : a.ka && (a.O && Urb(a.O, !0),
        a.ka.hide(),
        a.ka = null))
    }
      , msb = function(a, b) {
        a.canvas.flush().then(function() {
            var c = hrb(a.canvas);
            if (c) {
                var d = V8(a.canvas);
                if (d) {
                    var e = new pl({
                        top: c.top,
                        right: c.right,
                        bottom: c.bottom,
                        left: c.left
                    })
                      , f = d.width / (b.right - b.left);
                    e.top = null != b.top ? b.top : c.top;
                    e.bottom = e.top - d.height / f;
                    e.left = null != b.left ? b.left : c.left;
                    e.right = null != b.right ? b.right : c.right;
                    c = e
                }
                grb(a.canvas, c)
            }
        })
    }
      , nsb = function(a, b) {
        a.na ? a.canvas.flush().then(function() {
            var c = V8(a.canvas)
              , d = K8(a.canvas.H)
              , e = W8(a.canvas);
            if (e && d && c) {
                c = Math.min(a.ob, e.bottom - .05 * (d.right - d.left));
                var f = c > d.bottom ? c : d.bottom
            }
            f && f != d.bottom && I8(a.canvas.H, d.left, d.top, d.right, f);
            b()
        }) : b()
    }
      , osb = function(a) {
        var b = K8(a.canvas.H)
          , c = W8(a.canvas)
          , d = V8(a.canvas);
        if (b && c && 0 < c.top - c.bottom && d) {
            var e = (b.right - b.left) / d.width;
            d = d.height;
            e = Math.min(a.ob, c.bottom - .8 * d * e, b.top - d * e)
        }
        e && e != b.bottom && I8(a.canvas.H, b.left, b.top, b.right, e)
    };
    n9.prototype.ne = function() {
        this.canvas.clear()
    }
    ;
    var gsb = function(a) {
        rqb(a.canvas.H, 5, !0);
        Rrb(a.O);
        a.Ba().listen(a.O, ["Ki", "Li"], function(b) {
            rqb(a.canvas.H, 5, "Li" == b.type)
        });
        Bnb(a.xf);
        a.W && a.W.log(9396)
    };
    n9.prototype.Xe = function(a) {
        lsb(this, a.H);
        this.Za && this.Za.start();
        (a = esb[a.H]) && this.W && this.W.log(a)
    }
    ;
    n9.prototype.yd = function() {
        this.Ga || (this.Ga = fe("DIV", "TGB85e-UzWXSb-bF1uUb"),
        this.va.appendChild(this.Ga));
        C(this.Ga, !0)
    }
    ;
    n9.prototype.je = function() {
        this.Ga && C(this.Ga, !1)
    }
    ;
    var psb = new Xh(2048,1080)
      , o9 = function(a, b) {
        n9.call(this, !1, qY(a), b);
        this.U = a;
        this.V = new qsb(!1,b);
        this.Da(this.V);
        this.nb = null;
        this.Ra = !0;
        this.ta = this.H = null;
        this.jc = this.ub = !1;
        this.oa = this.Na = null;
        this.Aa = !1;
        this.ab = "";
        this.Ab = !1;
        this.ua = [];
        this.ha = new vnb(a,b);
        this.Ia(this.ha);
        this.Ka = null;
        this.yc = new Set;
        this.Ca = !1;
        this.xf = new Cnb(this.U,this.Ua,"Stylus gedetecteerd. 'Schuiven met vingers' staat aan.","stylusToast");
        this.xd = new Cnb(this.U,this.Ua,"Maak je lange notities? Er wordt automatisch meer ruimte toegevoegd als je onderaan bent.","canvasExpansion")
    };
    N(o9, n9);
    o9.prototype.render = function() {
        if (this.hb)
            throw Error("eb");
        this.V.render();
        this.V.ma().classList.add("nA1mMd-L9AdLc-V68bde");
        this.V.Wc().classList.add("nA1mMd-L9AdLc-AHe6Kc");
        this.Ja();
        this.V.ma().appendChild(this.ma());
        this.Ea()
    }
    ;
    o9.prototype.Ea = function() {
        var a = this;
        n9.prototype.Ea.call(this);
        K1(this, X1, this.zm);
        this.ha.render(this.ma());
        this.Ba().listen(this.ha, "Fi", function() {
            return void rsb(a)
        }).listen(this.ha, ["Ii", "Hi"], this.ad).listen(this.ha, "Gi", this.rb)
    }
    ;
    var f1 = function(a, b) {
        a.H || !a.canvas || a.Ab ? a.ua.push(b) : (a.Ab = !0,
        Dqb(a.canvas.H, Bl(b).sf),
        a.canvas.flush().then(function() {
            var c = function(d, e) {
                var f = this, h, k, l;
                return Qc(function(p) {
                    if (1 == p.H) {
                        h = jc(e);
                        if (k = Bl(d))
                            k.mc(800),
                            k.Ye = h;
                        d.notify();
                        l = f.ua.indexOf(d);
                        -1 != l && f.ua.splice(l, 1);
                        return Rc(p, frb(f.canvas), 2)
                    }
                    f.Ab = !1;
                    f.ua.length ? f1(f, f.ua[0]) : f.oa && (p9(f, f.oa, f.ab),
                    f.oa = null,
                    f.ab = "");
                    p.H = 0
                })
            }
            .bind(a, b);
            a.na ? jrb(a.canvas, {
                Zt: 800,
                Gp: !0,
                bounds: ssb(a)
            }).then(c) : jrb(a.canvas, {
                Zt: 800,
                Gp: !0
            }).then(c)
        }))
    }
      , ssb = function(a) {
        var b = K8(a.canvas.H)
          , c = new pl({
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left
        })
          , d = b.right - b.left
          , e = b.top - b.bottom;
        e > 2 * d && (c.bottom = b.top - 2 * d,
        e = 2 * d);
        a = W8(a.canvas);
        a.top < b.top - .1 * d && (c.top = a.top + .1 * d,
        c.bottom = c.top - e);
        return c
    }
      , Ghb = function(a, b, c, d, e) {
        var f = g0();
        f.eh(!0);
        u0(f, b);
        c && Qj(f, c);
        jY(a.U).apply(new OY(f,b), !0);
        if (b = b1(a.U.Fa().H, b).wb(f.getId()))
            c = a_(void 0, "DRAWING"),
            T0(b, c),
            b.Db(),
            i3(jY(a.U), 6),
            a.Ca = !0,
            p9(a, b, void 0, d, e)
    }
      , p9 = function(a, b, c, d, e) {
        c = void 0 === c ? "" : c;
        tsb(a);
        if (!a.U.Fa().getState().W || a.Ab) {
            a.oa = b;
            a.ab = c || "";
            var f = Bl(a.oa);
            f && d && f_(f, d)
        } else
            a.na = !c_(Bl(b)),
            hsb(a, a.na),
            a.canvas.flush().then(function() {
                a.setVisible(!0);
                a.Oa = 0;
                !c && Bl(b) && (c = Bl(b).H);
                var h = Bl(b);
                if (h) {
                    d && f_(h, d);
                    var k = h.sf;
                    a.Oa = k ? Ti.$a(k).length : 0;
                    isb(a);
                    a.Ca = !c && !h.sf;
                    if (c_(h)) {
                        k = b.H;
                        var l = b.ka;
                        Al(h) && !b.uc() && k && l ? Cjb(pY(a.U), b, a.Ca, function(p) {
                            return usb(a, p)
                        }, function() {}) : a.ta = h.V
                    }
                }
                a.na && Bnb(a.xd);
                vsb(a, b);
                "NONE" !== b.ha && "UPDATE" !== b.ha || !(a.Ca || h && h.sf) ? (a.Aa = !0,
                "GET" == b.ha && Qjb(jY(a.U), b)) : wsb(a, b, e)
            })
    }
      , wsb = function(a, b, c) {
        var d = Bl(b)
          , e = d.sf;
        if (d.H && !e)
            a.Aa = !0,
            Qjb(jY(a.U), b);
        else {
            b = 544;
            var f = 800;
            if (c_(d)) {
                var h = xsb(a, d);
                h && (b = h.height,
                f = h.width)
            }
            h = new aZ;
            if (e)
                Pk(Pk(e, 1), 3) && (h = Pk(Pk(e, 1), 3));
            else {
                e = new YZ;
                var k = new IZ;
                if (!c_(d)) {
                    var l = V8(a.canvas);
                    f = l.width || f;
                    b = l.height || b
                }
                bl(h, 1, 0);
                bl(h, 3, 0);
                bl(h, 2, f);
                bl(h, 4, b);
                bl(k, 3, h);
                bl(e, 1, k);
                f_(d, e)
            }
            jsb(a, e);
            var p = mpb(h);
            a.ob = p.bottom;
            Dqb(a.canvas.H, e);
            a.na && a.canvas.flush().then(function() {
                osb(a);
                a.canvas.flush().then(function() {
                    msb(a, p)
                })
            });
            c ? (ksb(a, c),
            lsb(a, c)) : ksb(a, e);
            !c_(d) && ysb(a);
            a.H.Na = !0
        }
    }
      , xsb = function(a, b) {
        var c = b.ua;
        b = b.Ga;
        var d = null;
        c && b && (d = new Xh(c,b),
        jl(d, psb) || (d = ll(d, psb)));
        a.ub = !0;
        a.ta && usb(a, a.ta);
        return d
    }
      , usb = function(a, b) {
        b && "string" !== typeof b || (a.ta = b,
        a.ub && a.ta && (a.ub = !1,
        erb(a.canvas, a.ta).then(function() {
            return ysb(a)
        })))
    }
      , zsb = function(a) {
        n9.prototype.wf.call(a, function() {
            a.Ba().listen(a.O, "Mi", a.rb).listen(a.O, "Ni", a.bR).listen(a.va, "pointerup", a.vy).listen(a.va, "pointerdown", a.vy).listen(a.va, "pointerleave", a.vy);
            a.nb = new ZK(a.O.ma());
            a.Da(a.nb);
            a.canvas.listen(Lnb, function(b) {
                return a.zm(b)
            });
            a.canvas.listen(Mnb, function() {
                return void rsb(a)
            });
            a.canvas.listen(Nnb, function(b) {
                b = b.H;
                a.W.log(b ? 9359 : 9360);
                a.rr(b);
                if (a.na && (b = K8(a.canvas.H)) && a.na) {
                    var c = V8(a.canvas)
                      , d = (b.right - b.left) / c.width
                      , e = b.top - b.bottom
                      , f = hrb(a.canvas);
                    f && (e < c.height * d && I8(a.canvas.H, b.left, b.top, b.right, b.top - c.height * d),
                    f.top = Math.min(f.top, b.top),
                    f.left = Math.max(f.left, b.left),
                    f.right = Math.min(f.right, b.right),
                    f.bottom = f.top - (f.right - f.left) / c.width * c.height,
                    grb(a.canvas, f))
                }
            });
            a.canvas.listen(s8, function(b) {
                a.jc = !0;
                b.preventDefault();
                b = b.cause || Error("Df");
                var c = {
                    j3: !0,
                    g3: "web-assembly"
                };
                a.isVisible() ? Y4a(hY(a.U), b, c) : (hY(a.U).log(b, c),
                Meb(a.U.Fa().getState(), !1))
            });
            a.jc || (Meb(a.U.Fa().getState(), !0),
            a.ua.length ? f1(a, a.ua[0]) : a.oa && (p9(a, a.oa, a.ab),
            a.oa = null,
            a.ab = ""))
        })
    };
    g = o9.prototype;
    g.setVisible = function(a) {
        this.isVisible() != a && (a && this.rr(this.Ra),
        this.V.setVisible(a),
        Ve(this.V.Va(), "hidden", !a),
        this.wa().H.body.style.userSelect = a ? "none" : "",
        a ? (tsb(this),
        this.Ba().listen(this.nb, "mousewheel", this.Kc).listen(Qe(this.wa()), "resize", this.Tb).listen(this.V.Wc(), "click", this.zm).listen(this.V.ma(), "keydown", this.VB),
        lY(this.U) && this.Ba().listen(lY(this.U), "ti", this.zm)) : (this.Ka = null,
        this.Ra && (this.wa().H.body.style.overflowY = "auto"),
        this.yc.clear(),
        this.Ba().kb(this.nb, "mousewheel", this.Kc).kb(Qe(this.wa()), "resize", this.Tb).kb(this.V.Wc(), "click", this.zm).kb(this.V.ma(), "keydown", this.VB),
        lY(this.U) && this.Ba().kb(lY(this.U), "ti", this.zm)))
    }
    ;
    g.isVisible = function() {
        return this.V.isVisible()
    }
    ;
    g.update = function(a) {
        var b = this;
        a.Sb() && a == this.H && a != this.Ka ? (Asb(this),
        this.setVisible(!1),
        this.dispatchEvent(new wnb(!1,!1))) : this.Ka != a || a.Sb() || this.Ka == this.H ? Bl(this.H).sf && this.Aa && "NONE" == this.H.ha && (wsb(this, this.H),
        this.Aa = !1) : q9(this).then(function() {
            b.canvas.flush().then(function() {
                p9(b, a);
                b.Ka = null
            })
        });
        this.ha.update()
    }
    ;
    g.close = function(a) {
        if (!this.isVisible())
            return Promise.resolve();
        var b = this.H.getId()
          , c = this.Ca
          , d = !this.Jb
          , e = q9(this)
          , f = Bl(this.H) && c_(Bl(this.H));
        c = d && c && !f;
        this.setVisible(!1);
        this.dispatchEvent(new wnb(a,c));
        c && (jY(this.U).apply(new LY("discardDrawing",b)),
        a || Ek(this.U).show("Lege tekening weggegooid"));
        return e
    }
    ;
    g.rr = function(a) {
        n9.prototype.rr.call(this, a);
        this.V.ma().classList.toggle("n9oEIb", a);
        var b = this.wa().H.body;
        a ? b.style.overflowY = "hidden" : (b.style.overflowY = "auto",
        this.Tb());
        this.Ra = a
    }
    ;
    var vsb = function(a, b) {
        a.H != b && (a.H && a.Ba().kb(a.H, "Ze", a.SE),
        a.H = b,
        b = a.ha,
        b.H = a.H,
        b.update(),
        a.H && a.Ba().listen(a.H, "Ze", a.SE))
    };
    o9.prototype.Oc = function() {
        return nY(this.U)
    }
    ;
    o9.prototype.Gc = function() {
        return vh(this.U, "Td")
    }
    ;
    var Bsb = function(a) {
        if (a.H) {
            Bl(a.H).Ka = !0;
            var b = a.H;
            var c = Cqb(a.canvas.H);
            a = Bl(b);
            f_(a, c);
            a.U == a.ka ? g_(a, null) : (c = tga(c),
            g_(a, c));
            a.Ka = !1;
            b.notify()
        }
    }
      , q9 = function(a) {
        return (new Promise(function(b) {
            nsb(a, function() {
                a.Aa || (a.Za && a.Za.stop(),
                Bsb(a));
                if (a.H && !a.Aa && !a.jc) {
                    var c = function(d, e) {
                        d = jc(e);
                        if (e = Bl(this.H))
                            e.Ye = d,
                            e.mc(800);
                        this.H.notify();
                        b()
                    }
                    .bind(a, a.H);
                    jrb(a.canvas, {
                        Zt: 800,
                        Gp: !0,
                        bounds: ssb(a)
                    }).then(c)
                }
            })
        }
        )).then(function() {
            return Qc(function(b) {
                return 1 == b.H ? Rc(b, a.canvas.flush(), 2) : Rc(b, Asb(a), 0)
            })
        })
    }
      , Asb = function(a) {
        return Qc(function(b) {
            if (1 == b.H)
                return a.H.Na = !1,
                vsb(a, null),
                hsb(a, !0),
                Rc(b, frb(a.canvas), 2);
            a.ta = null;
            a.ub = !1;
            a.Aa = !1;
            a.Ca = !1;
            a.xc = !1;
            a.Pb = !1;
            a.Jb = !1;
            b.H = 0
        })
    };
    o9.prototype.Tb = function() {
        this.V.vc()
    }
    ;
    o9.prototype.Kc = function(a) {
        a.preventDefault()
    }
    ;
    o9.prototype.rb = function() {
        var a = this;
        if (this.H && this.H.getParent()) {
            var b = this.H.getParent()
              , c = H0(b)
              , d = c.indexOf(this.H)
              , e = this.H
              , f = c[d + 1]
              , h = Vrb(this.O);
            q9(this).then(function() {
                a.canvas.flush().then(function() {
                    var k = N8a(e, f);
                    Ghb(a, b.getId(), k, void 0, h);
                    UX().speak("Nieuwe tekening geopend")
                })
            })
        }
    }
    ;
    var rsb = function(a) {
        var b, c, d, e;
        return Qc(function(f) {
            if (1 == f.H) {
                b = a.H.getParent();
                if (!b)
                    return f.return();
                c = H0(b);
                d = c.indexOf(a.H);
                a.W.log(9023, function(h) {
                    var k = Bl(a.H);
                    k && y5a(h, k.jy())
                });
                a.Ka = a.H;
                jY(a.U).apply(new LY("delete",a.H.getId()));
                return 1 == c.length ? Rc(f, a.close(!1), 0) : Rc(f, q9(a), 4)
            }
            if (5 != f.H)
                return Rc(f, a.canvas.flush(), 5);
            e = 0 == d ? d + 1 : d - 1;
            p9(a, c[e]);
            return f.vf(0)
        })
    };
    o9.prototype.ad = function(a) {
        var b = this
          , c = this.H.getParent();
        if (c) {
            var d = H0(c)
              , e = d.indexOf(this.H);
            q9(this).then(function() {
                b.canvas.flush().then(function() {
                    "Hi" == a.type ? (p9(b, d[(e + 1) % d.length]),
                    UX().speak("Volgende tekening geopend")) : (p9(b, d[0 <= e - 1 ? e - 1 : d.length - 1]),
                    UX().speak("Vorige tekening geopend"))
                })
            })
        }
    }
    ;
    var tsb = function(a) {
        a.va && (a.Na || (a.Na = z(snb),
        jv(a.va, a.Na, 0)),
        C(a.Na, !0),
        a.Na.classList.add("ti6hGc"),
        a.ha.setEnabled(!1))
    }
      , ysb = function(a) {
        a.Na.classList.remove("ti6hGc");
        a.dispatchEvent("Fg");
        a.ha.setEnabled(!0)
    };
    g = o9.prototype;
    g.bR = function() {
        var a = this, b, c, d, e, f, h, k, l, p, q, r;
        return Qc(function(t) {
            if (1 == t.H)
                return b = K8(a.canvas.H),
                c = npb(b),
                d = c.right,
                e = c.left,
                f = c.bottom,
                h = c.top,
                k = Math.max(h - f, d - e),
                Rc(t, krb(a.canvas, {
                    Zt: k,
                    Gp: !0
                }), 2);
            l = t.O;
            p = vna(l);
            q = a.Va();
            r = document.createElement("a");
            he(r, p);
            r.download = "ink.png";
            q.appendChild(r);
            r.click();
            q.removeChild(r);
            URL.revokeObjectURL(jc(p));
            t.H = 0
        })
    }
    ;
    g.zm = function(a) {
        this.close(a.type != Lnb)
    }
    ;
    g.VB = function(a) {
        9 == a.keyCode && a.shiftKey && a.target == this.V.ma() && dI(this.V)
    }
    ;
    g.vy = function(a) {
        "pointerdown" == a.type && (this.ha.hide(),
        a.pointerType && !this.yc.has(a.pointerType) && (this.W.log(9323, function(b) {
            switch (a.pointerType) {
            case "mouse":
                var c = 2;
                break;
            case "pen":
                c = 3;
                break;
            case "touch":
                c = 4;
                break;
            default:
                c = 1
            }
            if (!b.V) {
                b.V = new ASa;
                var d = tR(b);
                Fe(d, 43, b.V)
            }
            n(b.V, 1, c);
            return b
        }),
        this.yc.add(a.pointerType)));
        "pointerleave" != a.type && "pointerup" != a.type || this.ha.show()
    }
    ;
    g.SE = function(a) {
        this.H && a.target == this.H && wsb(this, this.H)
    }
    ;
  }());
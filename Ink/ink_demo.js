// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function() {
    var b = function() {
        var c = function(d) {
            return "string" === typeof STATIC_JS_PREFIX ? STATIC_JS_PREFIX + (STATIC_JS_PREFIX.match(/\/$/) ? "" : "/") + d : d
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
    "undefined" !== typeof window.inkLoadWasmModule ? b() : window.inkLoadWasmPostRun = b
  }());
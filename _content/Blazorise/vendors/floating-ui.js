/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.17.1.
 * Original file: /npm/@floating-ui/dom@1.4.5/dist/floating-ui.dom.browser.min.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import { computePosition as t, rectToClientRect as e } from "./floating-ui-core.js"; export { arrow, autoPlacement, detectOverflow, flip, hide, inline, limitShift, offset, shift, size } from "./floating-ui-core.js"; function n(t) { var e; return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window } function o(t) { return n(t).getComputedStyle(t) } function i(t) { return t instanceof n(t).Node } function r(t) { return i(t) ? (t.nodeName || "").toLowerCase() : "#document" } function c(t) { return t instanceof HTMLElement || t instanceof n(t).HTMLElement } function l(t) { return "undefined" != typeof ShadowRoot && (t instanceof n(t).ShadowRoot || t instanceof ShadowRoot) } function s(t) { const { overflow: e, overflowX: n, overflowY: i, display: r } = o(t); return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(r) } function f(t) { return ["table", "td", "th"].includes(r(t)) } function u(t) { const e = a(), n = o(t); return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t))) } function a() { return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none") } function d(t) { return ["html", "body", "#document"].includes(r(t)) } const h = Math.min, p = Math.max, m = Math.round, g = Math.floor, y = t => ({ x: t, y: t }); function w(t) { const e = o(t); let n = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0; const r = c(t), l = r ? t.offsetWidth : n, s = r ? t.offsetHeight : i, f = m(n) !== l || m(i) !== s; return f && (n = l, i = s), { width: n, height: i, $: f } } function x(t) { return t instanceof Element || t instanceof n(t).Element } function v(t) { return x(t) ? t : t.contextElement } function b(t) { const e = v(t); if (!c(e)) return y(1); const n = e.getBoundingClientRect(), { width: o, height: i, $: r } = w(e); let l = (r ? m(n.width) : n.width) / o, s = (r ? m(n.height) : n.height) / i; return l && Number.isFinite(l) || (l = 1), s && Number.isFinite(s) || (s = 1), { x: l, y: s } } const L = y(0); function T(t) { const e = n(t); return a() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : L } function R(t, o, i, r) { void 0 === o && (o = !1), void 0 === i && (i = !1); const c = t.getBoundingClientRect(), l = v(t); let s = y(1); o && (r ? x(r) && (s = b(r)) : s = b(t)); const f = function (t, e, o) { return void 0 === e && (e = !1), !(!o || e && o !== n(t)) && e }(l, i, r) ? T(l) : y(0); let u = (c.left + f.x) / s.x, a = (c.top + f.y) / s.y, d = c.width / s.x, h = c.height / s.y; if (l) { const t = n(l), e = r && x(r) ? n(r) : r; let o = t.frameElement; for (; o && r && e !== t;) { const t = b(o), e = o.getBoundingClientRect(), i = getComputedStyle(o), r = e.left + (o.clientLeft + parseFloat(i.paddingLeft)) * t.x, c = e.top + (o.clientTop + parseFloat(i.paddingTop)) * t.y; u *= t.x, a *= t.y, d *= t.x, h *= t.y, u += r, a += c, o = n(o).frameElement } } return e({ width: d, height: h, x: u, y: a }) } function E(t) { return x(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset } } function S(t) { var e; return null == (e = (i(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement } function C(t) { return R(S(t)).left + E(t).scrollLeft } function F(t) { if ("html" === r(t)) return t; const e = t.assignedSlot || t.parentNode || l(t) && t.host || S(t); return l(e) ? e.host : e } function O(t) { const e = F(t); return d(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : c(e) && s(e) ? e : O(e) } function D(t, e) { var o; void 0 === e && (e = []); const i = O(t), r = i === (null == (o = t.ownerDocument) ? void 0 : o.body), c = n(i); return r ? e.concat(c, c.visualViewport || [], s(i) ? i : []) : e.concat(i, D(i)) } function H(t, i, r) { let l; if ("viewport" === i) l = function (t, e) { const o = n(t), i = S(t), r = o.visualViewport; let c = i.clientWidth, l = i.clientHeight, s = 0, f = 0; if (r) { c = r.width, l = r.height; const t = a(); (!t || t && "fixed" === e) && (s = r.offsetLeft, f = r.offsetTop) } return { width: c, height: l, x: s, y: f } }(t, r); else if ("document" === i) l = function (t) { const e = S(t), n = E(t), i = t.ownerDocument.body, r = p(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), c = p(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight); let l = -n.scrollLeft + C(t); const s = -n.scrollTop; return "rtl" === o(i).direction && (l += p(e.clientWidth, i.clientWidth) - r), { width: r, height: c, x: l, y: s } }(S(t)); else if (x(i)) l = function (t, e) { const n = R(t, !0, "fixed" === e), o = n.top + t.clientTop, i = n.left + t.clientLeft, r = c(t) ? b(t) : y(1); return { width: t.clientWidth * r.x, height: t.clientHeight * r.y, x: i * r.x, y: o * r.y } }(i, r); else { const e = T(t); l = { ...i, x: i.x - e.x, y: i.y - e.y } } return e(l) } function W(t, e) { const n = F(t); return !(n === e || !x(n) || d(n)) && ("fixed" === o(n).position || W(n, e)) } function M(t, e, n) { const o = c(e), i = S(e), l = "fixed" === n, f = R(t, !0, l, e); let u = { scrollLeft: 0, scrollTop: 0 }; const a = y(0); if (o || !o && !l) if (("body" !== r(e) || s(i)) && (u = E(e)), c(e)) { const t = R(e, !0, l, e); a.x = t.x + e.clientLeft, a.y = t.y + e.clientTop } else i && (a.x = C(i)); return { x: f.left + u.scrollLeft - a.x, y: f.top + u.scrollTop - a.y, width: f.width, height: f.height } } function z(t, e) { return c(t) && "fixed" !== o(t).position ? e ? e(t) : t.offsetParent : null } function A(t, e) { const i = n(t); if (!c(t)) return i; let l = z(t, e); for (; l && f(l) && "static" === o(l).position;)l = z(l, e); return l && ("html" === r(l) || "body" === r(l) && "static" === o(l).position && !u(l)) ? i : l || function (t) { let e = F(t); for (; c(e) && !d(e);) { if (u(e)) return e; e = F(e) } return null }(t) || i } const P = { convertOffsetParentRelativeRectToViewportRelativeRect: function (t) { let { rect: e, offsetParent: n, strategy: o } = t; const i = c(n), l = S(n); if (n === l) return e; let f = { scrollLeft: 0, scrollTop: 0 }, u = y(1); const a = y(0); if ((i || !i && "fixed" !== o) && (("body" !== r(n) || s(l)) && (f = E(n)), c(n))) { const t = R(n); u = b(n), a.x = t.x + n.clientLeft, a.y = t.y + n.clientTop } return { width: e.width * u.x, height: e.height * u.y, x: e.x * u.x - f.scrollLeft * u.x + a.x, y: e.y * u.y - f.scrollTop * u.y + a.y } }, getDocumentElement: S, getClippingRect: function (t) { let { element: e, boundary: n, rootBoundary: i, strategy: c } = t; const l = [..."clippingAncestors" === n ? function (t, e) { const n = e.get(t); if (n) return n; let i = D(t).filter((t => x(t) && "body" !== r(t))), c = null; const l = "fixed" === o(t).position; let f = l ? F(t) : t; for (; x(f) && !d(f);) { const e = o(f), n = u(f); n || "fixed" !== e.position || (c = null), (l ? !n && !c : !n && "static" === e.position && c && ["absolute", "fixed"].includes(c.position) || s(f) && !n && W(t, f)) ? i = i.filter((t => t !== f)) : c = e, f = F(f) } return e.set(t, i), i }(e, this._c) : [].concat(n), i], f = l[0], a = l.reduce(((t, n) => { const o = H(e, n, c); return t.top = p(o.top, t.top), t.right = h(o.right, t.right), t.bottom = h(o.bottom, t.bottom), t.left = p(o.left, t.left), t }), H(e, f, c)); return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top } }, getOffsetParent: A, getElementRects: async function (t) { let { reference: e, floating: n, strategy: o } = t; const i = this.getOffsetParent || A, r = this.getDimensions; return { reference: M(e, await i(n), o), floating: { x: 0, y: 0, ...await r(n) } } }, getClientRects: function (t) { return Array.from(t.getClientRects()) }, getDimensions: function (t) { return w(t) }, getScale: b, isElement: x, isRTL: function (t) { return "rtl" === getComputedStyle(t).direction } }; function V(t, e, n, o) { void 0 === o && (o = {}); const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: c = "function" == typeof ResizeObserver, layoutShift: l = "function" == typeof IntersectionObserver, animationFrame: s = !1 } = o, f = v(t), u = i || r ? [...f ? D(f) : [], ...D(e)] : []; u.forEach((t => { i && t.addEventListener("scroll", n, { passive: !0 }), r && t.addEventListener("resize", n) })); const a = f && l ? function (t, e) { let n, o = null; const i = S(t); function r() { clearTimeout(n), o && o.disconnect(), o = null } return function c(l, s) { void 0 === l && (l = !1), void 0 === s && (s = 1), r(); const { left: f, top: u, width: a, height: d } = t.getBoundingClientRect(); if (l || e(), !a || !d) return; const m = { rootMargin: -g(u) + "px " + -g(i.clientWidth - (f + a)) + "px " + -g(i.clientHeight - (u + d)) + "px " + -g(f) + "px", threshold: p(0, h(1, s)) || 1 }; let y = !0; function w(t) { const e = t[0].intersectionRatio; if (e !== s) { if (!y) return c(); e ? c(!1, e) : n = setTimeout((() => { c(!1, 1e-7) }), 100) } y = !1 } try { o = new IntersectionObserver(w, { ...m, root: i.ownerDocument }) } catch (t) { o = new IntersectionObserver(w, m) } o.observe(t) }(!0), r }(f, n) : null; let d, m = -1, y = null; c && (y = new ResizeObserver((t => { let [o] = t; o && o.target === f && y && (y.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame((() => { y && y.observe(e) }))), n() })), f && !s && y.observe(f), y.observe(e)); let w = s ? R(t) : null; return s && function e() { const o = R(t); !w || o.x === w.x && o.y === w.y && o.width === w.width && o.height === w.height || n(), w = o, d = requestAnimationFrame(e) }(), n(), () => { u.forEach((t => { i && t.removeEventListener("scroll", n), r && t.removeEventListener("resize", n) })), a && a(), y && y.disconnect(), y = null, s && cancelAnimationFrame(d) } } const B = (e, n, o) => { const i = new Map, r = { platform: P, ...o }, c = { ...r.platform, _c: i }; return t(e, n, { ...r, platform: c }) }; export { V as autoUpdate, B as computePosition, D as getOverflowAncestors, P as platform }; export default null;
/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer595007381 = (function () {
    'use strict';

    var global = this;

    function Tracer() {
        this._calls = [];
        this._args = [];
        this.global = global;

        this._probeValues = {};
    }
    Tracer.prototype = {
        logEntry: function (location, args) {
            this._calls.push({
                index: this._calls.length,
                position: location,
                // args: Array.prototype.slice.call(args),
                argsCount: args.length,
                time: Date.now()
            });
            this._args.push(_.cloneDeep(args));
        },

        getCalls: function (since) {
            var calls = this._calls.filter(function(call) {
                return (since) ? call.time > since : true;
            });
            return stringify(calls);
        },

        getCallCount: function () {
            return this._calls.length;
        },

        logProbe: function (location, result) {
            this._probeValues[location.toString()] = _.cloneDeep(result);
            return result;
        },

        updateProbeValues: function () {
            var self = this;

            var probeIds = Object.keys(this._probeValues);
            var output = probeIds.map(function(probeId) {
               return {
                   id: probeId,
                   type: self.getType(self._probeValues[probeId])
               };
            });

            return stringify(output);
        },

        getType: function (value) {
            var type = typeof value;

            if (type === 'number' && isNaN(value)) {
                type = 'NaN';
            }
            if (type === null) {
                type = 'null';
            }

            return type;
        },

        test: function () {
            console.log('[recognizer tracer] test function run successfully');
        },

        connect: function () {
            return this;
        }
    };


    /**
     * JSON stringify with circular references
     * Copyright (c) Isaac Z. Schlueter ("Author")
     * The BSD License
     */
    function getSerialize(a,b){var c=[],d=[];return b=b||function(a,b){return"[Circular "+getPath(b,c,d)+"]"},function(e,f){var g=f;return"object"==typeof f&&f&&(-1!==c.indexOf(f)?g=b(e,f):(c.push(f),d.push(e))),a&&(g=a(e,g)),g}}
    function getPath(a,b,c){var d=b.indexOf(a),e=[c[d]];for(d--;d>=0;d--)b[d][e[0]]===a&&(a=b[d],e.unshift(c[d]));return"~"+e.join(".")}
    function stringify(a,b,c,d){return JSON.stringify(a,getSerialize(b,d),c)}stringify.getSerialize=getSerialize;


    /**
     * @license
     * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
     * Build: `lodash modern -o ./dist/lodash.js`
     */
    ;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
    }}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
    }function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
        t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
        return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
    }function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
    }if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
        De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
    }var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
    }function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
        if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
    });return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
        for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
        var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
    }),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
    }function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
        var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
        if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
    else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
    });return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
        for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
        return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
    }function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
        m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
        i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
    }catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
        var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
    }:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
        return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
        return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
    }},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
    },J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
        (Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
        return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
        return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
    });return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
    }else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
    })},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
    },J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
    })),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
    },J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
    }),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
    },J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
    },J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
    },J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
    }),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
    },J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
    },J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
        return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
        K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
        var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);


    return new Tracer();

}());


/**
 * Instrumented code
 */

(function () {
    __recognizer595007381.logEntry([
        1,
        1,
        1,
        9
    ], arguments);
    'use strict';
    function Game() {
        __recognizer595007381.logEntry([
            4,
            13,
            4,
            17
        ], arguments);
        this.player = null;
        this.text = null;
        this.upKey = null;
        this.downKey = null;
        this.bKey = null;
        this.mKey = null;
        this.bg = null;
        this.wall1 = null;
        this.wall2 = null;
        this.wall3 = null;
        this.wall4 = null;
        this.wall5 = null;
        this.wall6 = null;
        this.wall7 = null;
        this.wall8 = null;
        this.bitmapText = null;
        this.scaleStop = false;
        this.vScale = 0.00081;
        this.text = null;
    }
    Game.prototype = {
        create: function () {
            __recognizer595007381.logEntry([
                28,
                16,
                28,
                24
            ], arguments);
            var x = __recognizer595007381.logProbe([
                    30,
                    30,
                    30,
                    35
                ], __recognizer595007381.logProbe([
                    30,
                    25,
                    30,
                    29
                ], __recognizer595007381.logProbe([
                    30,
                    20,
                    30,
                    24
                ], this).game).width) / 2, y = __recognizer595007381.logProbe([
                    30,
                    55,
                    30,
                    61
                ], __recognizer595007381.logProbe([
                    30,
                    50,
                    30,
                    54
                ], __recognizer595007381.logProbe([
                    30,
                    45,
                    30,
                    49
                ], this).game).height) / 2;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        31,
                        22,
                        31,
                        29
                    ], __recognizer595007381.logProbe([
                        31,
                        17,
                        31,
                        21
                    ], __recognizer595007381.logProbe([
                        31,
                        12,
                        31,
                        16
                    ], this).game).physics), fn = __recognizer595007381.logProbe([
                        31,
                        30,
                        31,
                        41
                    ], obj.startSystem);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                31,
                57,
                31,
                63
            ], __recognizer595007381.logProbe([
                31,
                49,
                31,
                56
            ], __recognizer595007381.logProbe([
                31,
                42,
                31,
                48
            ], Phaser).Physics).ARCADE)));
            this.bg = function () {
                var obj = __recognizer595007381.logProbe([
                        33,
                        27,
                        33,
                        30
                    ], __recognizer595007381.logProbe([
                        33,
                        22,
                        33,
                        26
                    ], this).add), fn = __recognizer595007381.logProbe([
                        33,
                        31,
                        33,
                        41
                    ], obj.tileSprite);
                return fn.apply(obj, arguments);
            }.bind(this)(0, 0, 1280, 860, 'fondo');
            this.wall1 = function () {
                var obj = __recognizer595007381.logProbe([
                        36,
                        30,
                        36,
                        33
                    ], __recognizer595007381.logProbe([
                        36,
                        25,
                        36,
                        29
                    ], this).add), fn = __recognizer595007381.logProbe([
                        36,
                        34,
                        36,
                        40
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(0, 325, '', 0);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        37,
                        17,
                        37,
                        24
                    ], __recognizer595007381.logProbe([
                        37,
                        12,
                        37,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        37,
                        25,
                        37,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                37,
                37,
                37,
                42
            ], __recognizer595007381.logProbe([
                37,
                32,
                37,
                36
            ], this).wall1), __recognizer595007381.logProbe([
                37,
                59,
                37,
                65
            ], __recognizer595007381.logProbe([
                37,
                51,
                37,
                58
            ], __recognizer595007381.logProbe([
                37,
                44,
                37,
                50
            ], Phaser).Physics).ARCADE)));
            this.wall1.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        39,
                        23,
                        39,
                        27
                    ], __recognizer595007381.logProbe([
                        39,
                        17,
                        39,
                        22
                    ], __recognizer595007381.logProbe([
                        39,
                        12,
                        39,
                        16
                    ], this).wall1).body), fn = __recognizer595007381.logProbe([
                        39,
                        28,
                        39,
                        35
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(375, 500, 0, 0));
            this.wall2 = function () {
                var obj = __recognizer595007381.logProbe([
                        41,
                        30,
                        41,
                        33
                    ], __recognizer595007381.logProbe([
                        41,
                        25,
                        41,
                        29
                    ], this).add), fn = __recognizer595007381.logProbe([
                        41,
                        34,
                        41,
                        40
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(650, 325, '', 0);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        42,
                        17,
                        42,
                        24
                    ], __recognizer595007381.logProbe([
                        42,
                        12,
                        42,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        42,
                        25,
                        42,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                42,
                37,
                42,
                42
            ], __recognizer595007381.logProbe([
                42,
                32,
                42,
                36
            ], this).wall2), __recognizer595007381.logProbe([
                42,
                59,
                42,
                65
            ], __recognizer595007381.logProbe([
                42,
                51,
                42,
                58
            ], __recognizer595007381.logProbe([
                42,
                44,
                42,
                50
            ], Phaser).Physics).ARCADE)));
            this.wall2.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        44,
                        23,
                        44,
                        27
                    ], __recognizer595007381.logProbe([
                        44,
                        17,
                        44,
                        22
                    ], __recognizer595007381.logProbe([
                        44,
                        12,
                        44,
                        16
                    ], this).wall2).body), fn = __recognizer595007381.logProbe([
                        44,
                        28,
                        44,
                        35
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(375, 116, 0, 0));
            this.wall3 = function () {
                var obj = __recognizer595007381.logProbe([
                        46,
                        30,
                        46,
                        33
                    ], __recognizer595007381.logProbe([
                        46,
                        25,
                        46,
                        29
                    ], this).add), fn = __recognizer595007381.logProbe([
                        46,
                        34,
                        46,
                        40
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(675, 315, '', 0);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        47,
                        17,
                        47,
                        24
                    ], __recognizer595007381.logProbe([
                        47,
                        12,
                        47,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        47,
                        25,
                        47,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                47,
                37,
                47,
                42
            ], __recognizer595007381.logProbe([
                47,
                32,
                47,
                36
            ], this).wall3), __recognizer595007381.logProbe([
                47,
                59,
                47,
                65
            ], __recognizer595007381.logProbe([
                47,
                51,
                47,
                58
            ], __recognizer595007381.logProbe([
                47,
                44,
                47,
                50
            ], Phaser).Physics).ARCADE)));
            this.wall3.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        49,
                        23,
                        49,
                        27
                    ], __recognizer595007381.logProbe([
                        49,
                        17,
                        49,
                        22
                    ], __recognizer595007381.logProbe([
                        49,
                        12,
                        49,
                        16
                    ], this).wall3).body), fn = __recognizer595007381.logProbe([
                        49,
                        28,
                        49,
                        35
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(600, 220, 0, 0));
            this.wall4 = function () {
                var obj = __recognizer595007381.logProbe([
                        51,
                        30,
                        51,
                        33
                    ], __recognizer595007381.logProbe([
                        51,
                        25,
                        51,
                        29
                    ], this).add), fn = __recognizer595007381.logProbe([
                        51,
                        34,
                        51,
                        40
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(0, 225, '', 0);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        52,
                        17,
                        52,
                        24
                    ], __recognizer595007381.logProbe([
                        52,
                        12,
                        52,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        52,
                        25,
                        52,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                52,
                37,
                52,
                42
            ], __recognizer595007381.logProbe([
                52,
                32,
                52,
                36
            ], this).wall4), __recognizer595007381.logProbe([
                52,
                59,
                52,
                65
            ], __recognizer595007381.logProbe([
                52,
                51,
                52,
                58
            ], __recognizer595007381.logProbe([
                52,
                44,
                52,
                50
            ], Phaser).Physics).ARCADE)));
            this.wall4.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        54,
                        23,
                        54,
                        27
                    ], __recognizer595007381.logProbe([
                        54,
                        17,
                        54,
                        22
                    ], __recognizer595007381.logProbe([
                        54,
                        12,
                        54,
                        16
                    ], this).wall4).body), fn = __recognizer595007381.logProbe([
                        54,
                        28,
                        54,
                        35
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(390, 180, 0, 0));
            this.wall5 = function () {
                var obj = __recognizer595007381.logProbe([
                        56,
                        30,
                        56,
                        33
                    ], __recognizer595007381.logProbe([
                        56,
                        25,
                        56,
                        29
                    ], this).add), fn = __recognizer595007381.logProbe([
                        56,
                        34,
                        56,
                        40
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(385, 245, '', 0);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        57,
                        17,
                        57,
                        24
                    ], __recognizer595007381.logProbe([
                        57,
                        12,
                        57,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        57,
                        25,
                        57,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                57,
                37,
                57,
                42
            ], __recognizer595007381.logProbe([
                57,
                32,
                57,
                36
            ], this).wall5), __recognizer595007381.logProbe([
                57,
                59,
                57,
                65
            ], __recognizer595007381.logProbe([
                57,
                51,
                57,
                58
            ], __recognizer595007381.logProbe([
                57,
                44,
                57,
                50
            ], Phaser).Physics).ARCADE)));
            this.wall5.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        59,
                        23,
                        59,
                        27
                    ], __recognizer595007381.logProbe([
                        59,
                        17,
                        59,
                        22
                    ], __recognizer595007381.logProbe([
                        59,
                        12,
                        59,
                        16
                    ], this).wall5).body), fn = __recognizer595007381.logProbe([
                        59,
                        28,
                        59,
                        35
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(100, 100, 0, 0));
            this.wall6 = function () {
                var obj = __recognizer595007381.logProbe([
                        61,
                        30,
                        61,
                        33
                    ], __recognizer595007381.logProbe([
                        61,
                        25,
                        61,
                        29
                    ], this).add), fn = __recognizer595007381.logProbe([
                        61,
                        34,
                        61,
                        40
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(540, 245, '', 0);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        62,
                        17,
                        62,
                        24
                    ], __recognizer595007381.logProbe([
                        62,
                        12,
                        62,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        62,
                        25,
                        62,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                62,
                37,
                62,
                42
            ], __recognizer595007381.logProbe([
                62,
                32,
                62,
                36
            ], this).wall6), __recognizer595007381.logProbe([
                62,
                59,
                62,
                65
            ], __recognizer595007381.logProbe([
                62,
                51,
                62,
                58
            ], __recognizer595007381.logProbe([
                62,
                44,
                62,
                50
            ], Phaser).Physics).ARCADE)));
            this.wall6.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        64,
                        23,
                        64,
                        27
                    ], __recognizer595007381.logProbe([
                        64,
                        17,
                        64,
                        22
                    ], __recognizer595007381.logProbe([
                        64,
                        12,
                        64,
                        16
                    ], this).wall6).body), fn = __recognizer595007381.logProbe([
                        64,
                        28,
                        64,
                        35
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(100, 100, 0, 0));
            this.wall7 = function () {
                var obj = __recognizer595007381.logProbe([
                        66,
                        30,
                        66,
                        33
                    ], __recognizer595007381.logProbe([
                        66,
                        25,
                        66,
                        29
                    ], this).add), fn = __recognizer595007381.logProbe([
                        66,
                        34,
                        66,
                        40
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(325, 280, '', 0);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        67,
                        17,
                        67,
                        24
                    ], __recognizer595007381.logProbe([
                        67,
                        12,
                        67,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        67,
                        25,
                        67,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                67,
                37,
                67,
                42
            ], __recognizer595007381.logProbe([
                67,
                32,
                67,
                36
            ], this).wall7), __recognizer595007381.logProbe([
                67,
                59,
                67,
                65
            ], __recognizer595007381.logProbe([
                67,
                51,
                67,
                58
            ], __recognizer595007381.logProbe([
                67,
                44,
                67,
                50
            ], Phaser).Physics).ARCADE)));
            this.wall7.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        69,
                        23,
                        69,
                        27
                    ], __recognizer595007381.logProbe([
                        69,
                        17,
                        69,
                        22
                    ], __recognizer595007381.logProbe([
                        69,
                        12,
                        69,
                        16
                    ], this).wall7).body), fn = __recognizer595007381.logProbe([
                        69,
                        28,
                        69,
                        35
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(100, 100, 0, 0));
            this.wall8 = function () {
                var obj = __recognizer595007381.logProbe([
                        71,
                        30,
                        71,
                        33
                    ], __recognizer595007381.logProbe([
                        71,
                        25,
                        71,
                        29
                    ], this).add), fn = __recognizer595007381.logProbe([
                        71,
                        34,
                        71,
                        40
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(568, 285, '', 0);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        72,
                        17,
                        72,
                        24
                    ], __recognizer595007381.logProbe([
                        72,
                        12,
                        72,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        72,
                        25,
                        72,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                72,
                37,
                72,
                42
            ], __recognizer595007381.logProbe([
                72,
                32,
                72,
                36
            ], this).wall8), __recognizer595007381.logProbe([
                72,
                59,
                72,
                65
            ], __recognizer595007381.logProbe([
                72,
                51,
                72,
                58
            ], __recognizer595007381.logProbe([
                72,
                44,
                72,
                50
            ], Phaser).Physics).ARCADE)));
            this.wall8.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        74,
                        23,
                        74,
                        27
                    ], __recognizer595007381.logProbe([
                        74,
                        17,
                        74,
                        22
                    ], __recognizer595007381.logProbe([
                        74,
                        12,
                        74,
                        16
                    ], this).wall8).body), fn = __recognizer595007381.logProbe([
                        74,
                        28,
                        74,
                        35
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(100, 100, 0, 0));
            this.mendigo = function () {
                var obj = __recognizer595007381.logProbe([
                        76,
                        32,
                        76,
                        35
                    ], __recognizer595007381.logProbe([
                        76,
                        27,
                        76,
                        31
                    ], this).add), fn = __recognizer595007381.logProbe([
                        76,
                        36,
                        76,
                        42
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(770, 440, 'mendigo');
            (function () {
                var obj = __recognizer595007381.logProbe([
                        77,
                        17,
                        77,
                        24
                    ], __recognizer595007381.logProbe([
                        77,
                        12,
                        77,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        77,
                        25,
                        77,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                77,
                37,
                77,
                44
            ], __recognizer595007381.logProbe([
                77,
                32,
                77,
                36
            ], this).mendigo), __recognizer595007381.logProbe([
                77,
                61,
                77,
                67
            ], __recognizer595007381.logProbe([
                77,
                53,
                77,
                60
            ], __recognizer595007381.logProbe([
                77,
                46,
                77,
                52
            ], Phaser).Physics).ARCADE)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        78,
                        25,
                        78,
                        30
                    ], __recognizer595007381.logProbe([
                        78,
                        17,
                        78,
                        24
                    ], __recognizer595007381.logProbe([
                        78,
                        12,
                        78,
                        16
                    ], this).mendigo).scale), fn = __recognizer595007381.logProbe([
                        78,
                        31,
                        78,
                        34
                    ], obj.set);
                return fn.apply(obj, arguments);
            }.bind(this)(0.294));
            this.mendigo.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        80,
                        25,
                        80,
                        29
                    ], __recognizer595007381.logProbe([
                        80,
                        17,
                        80,
                        24
                    ], __recognizer595007381.logProbe([
                        80,
                        12,
                        80,
                        16
                    ], this).mendigo).body), fn = __recognizer595007381.logProbe([
                        80,
                        30,
                        80,
                        37
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(280, 320, -20, 25));
            this.perro = function () {
                var obj = __recognizer595007381.logProbe([
                        82,
                        30,
                        82,
                        33
                    ], __recognizer595007381.logProbe([
                        82,
                        25,
                        82,
                        29
                    ], this).add), fn = __recognizer595007381.logProbe([
                        82,
                        34,
                        82,
                        40
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(850, 500, 'perro');
            (function () {
                var obj = __recognizer595007381.logProbe([
                        83,
                        17,
                        83,
                        24
                    ], __recognizer595007381.logProbe([
                        83,
                        12,
                        83,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        83,
                        25,
                        83,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                83,
                37,
                83,
                42
            ], __recognizer595007381.logProbe([
                83,
                32,
                83,
                36
            ], this).perro), __recognizer595007381.logProbe([
                83,
                59,
                83,
                65
            ], __recognizer595007381.logProbe([
                83,
                51,
                83,
                58
            ], __recognizer595007381.logProbe([
                83,
                44,
                83,
                50
            ], Phaser).Physics).ARCADE)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        84,
                        23,
                        84,
                        28
                    ], __recognizer595007381.logProbe([
                        84,
                        17,
                        84,
                        22
                    ], __recognizer595007381.logProbe([
                        84,
                        12,
                        84,
                        16
                    ], this).perro).scale), fn = __recognizer595007381.logProbe([
                        84,
                        29,
                        84,
                        32
                    ], obj.set);
                return fn.apply(obj, arguments);
            }.bind(this)(0.302));
            this.perro.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        86,
                        23,
                        86,
                        27
                    ], __recognizer595007381.logProbe([
                        86,
                        17,
                        86,
                        22
                    ], __recognizer595007381.logProbe([
                        86,
                        12,
                        86,
                        16
                    ], this).perro).body), fn = __recognizer595007381.logProbe([
                        86,
                        28,
                        86,
                        35
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(280, 170, 30, 15));
            this.niña = function () {
                var obj = __recognizer595007381.logProbe([
                        88,
                        29,
                        88,
                        32
                    ], __recognizer595007381.logProbe([
                        88,
                        24,
                        88,
                        28
                    ], this).add), fn = __recognizer595007381.logProbe([
                        88,
                        33,
                        88,
                        39
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(100, 500, 'ni\xf1a');
            (function () {
                var obj = __recognizer595007381.logProbe([
                        89,
                        17,
                        89,
                        24
                    ], __recognizer595007381.logProbe([
                        89,
                        12,
                        89,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        89,
                        25,
                        89,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                89,
                37,
                89,
                41
            ], __recognizer595007381.logProbe([
                89,
                32,
                89,
                36
            ], this).niña), __recognizer595007381.logProbe([
                89,
                58,
                89,
                64
            ], __recognizer595007381.logProbe([
                89,
                50,
                89,
                57
            ], __recognizer595007381.logProbe([
                89,
                43,
                89,
                49
            ], Phaser).Physics).ARCADE)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        90,
                        22,
                        90,
                        27
                    ], __recognizer595007381.logProbe([
                        90,
                        17,
                        90,
                        21
                    ], __recognizer595007381.logProbe([
                        90,
                        12,
                        90,
                        16
                    ], this).niña).scale), fn = __recognizer595007381.logProbe([
                        90,
                        28,
                        90,
                        31
                    ], obj.set);
                return fn.apply(obj, arguments);
            }.bind(this)(0.5));
            this.niña.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        92,
                        22,
                        92,
                        26
                    ], __recognizer595007381.logProbe([
                        92,
                        17,
                        92,
                        21
                    ], __recognizer595007381.logProbe([
                        92,
                        12,
                        92,
                        16
                    ], this).niña).body), fn = __recognizer595007381.logProbe([
                        92,
                        27,
                        92,
                        34
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(431, 80, 60, 280));
            this.vecina1 = function () {
                var obj = __recognizer595007381.logProbe([
                        94,
                        32,
                        94,
                        35
                    ], __recognizer595007381.logProbe([
                        94,
                        27,
                        94,
                        31
                    ], this).add), fn = __recognizer595007381.logProbe([
                        94,
                        36,
                        94,
                        42
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(610, 320, 'vecina1');
            (function () {
                var obj = __recognizer595007381.logProbe([
                        95,
                        17,
                        95,
                        24
                    ], __recognizer595007381.logProbe([
                        95,
                        12,
                        95,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        95,
                        25,
                        95,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                95,
                37,
                95,
                44
            ], __recognizer595007381.logProbe([
                95,
                32,
                95,
                36
            ], this).vecina1), __recognizer595007381.logProbe([
                95,
                61,
                95,
                67
            ], __recognizer595007381.logProbe([
                95,
                53,
                95,
                60
            ], __recognizer595007381.logProbe([
                95,
                46,
                95,
                52
            ], Phaser).Physics).ARCADE)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        96,
                        25,
                        96,
                        30
                    ], __recognizer595007381.logProbe([
                        96,
                        17,
                        96,
                        24
                    ], __recognizer595007381.logProbe([
                        96,
                        12,
                        96,
                        16
                    ], this).vecina1).scale), fn = __recognizer595007381.logProbe([
                        96,
                        31,
                        96,
                        34
                    ], obj.set);
                return fn.apply(obj, arguments);
            }.bind(this)(0.15));
            this.vecina1.body.immovable = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        98,
                        25,
                        98,
                        29
                    ], __recognizer595007381.logProbe([
                        98,
                        17,
                        98,
                        24
                    ], __recognizer595007381.logProbe([
                        98,
                        12,
                        98,
                        16
                    ], this).vecina1).body), fn = __recognizer595007381.logProbe([
                        98,
                        30,
                        98,
                        37
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(290, 530, -5, 15));
            this.player = function () {
                var obj = __recognizer595007381.logProbe([
                        102,
                        31,
                        102,
                        34
                    ], __recognizer595007381.logProbe([
                        102,
                        26,
                        102,
                        30
                    ], this).add), fn = __recognizer595007381.logProbe([
                        102,
                        35,
                        102,
                        41
                    ], obj.sprite);
                return fn.apply(obj, arguments);
            }.bind(this)(550, 858, 'personajeEspaldas');
            (function () {
                var obj = __recognizer595007381.logProbe([
                        103,
                        24,
                        103,
                        34
                    ], __recognizer595007381.logProbe([
                        103,
                        17,
                        103,
                        23
                    ], __recognizer595007381.logProbe([
                        103,
                        12,
                        103,
                        16
                    ], this).player).animations), fn = __recognizer595007381.logProbe([
                        103,
                        35,
                        103,
                        38
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)('forward', [
                0,
                1,
                2,
                3,
                4,
                5
            ], 5, true));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        104,
                        24,
                        104,
                        34
                    ], __recognizer595007381.logProbe([
                        104,
                        17,
                        104,
                        23
                    ], __recognizer595007381.logProbe([
                        104,
                        12,
                        104,
                        16
                    ], this).player).animations), fn = __recognizer595007381.logProbe([
                        104,
                        35,
                        104,
                        38
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)('still', [6], 20, true));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        105,
                        24,
                        105,
                        34
                    ], __recognizer595007381.logProbe([
                        105,
                        17,
                        105,
                        23
                    ], __recognizer595007381.logProbe([
                        105,
                        12,
                        105,
                        16
                    ], this).player).animations), fn = __recognizer595007381.logProbe([
                        105,
                        35,
                        105,
                        38
                    ], obj.add);
                return fn.apply(obj, arguments);
            }.bind(this)('back', [
                5,
                4,
                3,
                2,
                1,
                0
            ], 5, true));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        106,
                        17,
                        106,
                        24
                    ], __recognizer595007381.logProbe([
                        106,
                        12,
                        106,
                        16
                    ], this).physics), fn = __recognizer595007381.logProbe([
                        106,
                        25,
                        106,
                        31
                    ], obj.enable);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                106,
                37,
                106,
                43
            ], __recognizer595007381.logProbe([
                106,
                32,
                106,
                36
            ], this).player), __recognizer595007381.logProbe([
                106,
                60,
                106,
                66
            ], __recognizer595007381.logProbe([
                106,
                52,
                106,
                59
            ], __recognizer595007381.logProbe([
                106,
                45,
                106,
                51
            ], Phaser).Physics).ARCADE)));
            this.player.body.collideWorldBounds = true;
            (function () {
                var obj = __recognizer595007381.logProbe([
                        108,
                        24,
                        108,
                        30
                    ], __recognizer595007381.logProbe([
                        108,
                        17,
                        108,
                        23
                    ], __recognizer595007381.logProbe([
                        108,
                        12,
                        108,
                        16
                    ], this).player).anchor), fn = __recognizer595007381.logProbe([
                        108,
                        31,
                        108,
                        36
                    ], obj.setTo);
                return fn.apply(obj, arguments);
            }.bind(this)(0.5, 0.98));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        109,
                        24,
                        109,
                        28
                    ], __recognizer595007381.logProbe([
                        109,
                        17,
                        109,
                        23
                    ], __recognizer595007381.logProbe([
                        109,
                        12,
                        109,
                        16
                    ], this).player).body), fn = __recognizer595007381.logProbe([
                        109,
                        29,
                        109,
                        36
                    ], obj.setSize);
                return fn.apply(obj, arguments);
            }.bind(this)(280, 320, 0, 0));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        110,
                        24,
                        110,
                        29
                    ], __recognizer595007381.logProbe([
                        110,
                        17,
                        110,
                        23
                    ], __recognizer595007381.logProbe([
                        110,
                        12,
                        110,
                        16
                    ], this).player).scale), fn = __recognizer595007381.logProbe([
                        110,
                        30,
                        110,
                        33
                    ], obj.set);
                return fn.apply(obj, arguments);
            }.bind(this)(0.275, 0.275));
            this.cursors = function () {
                var obj = __recognizer595007381.logProbe([
                        112,
                        38,
                        112,
                        46
                    ], __recognizer595007381.logProbe([
                        112,
                        32,
                        112,
                        37
                    ], __recognizer595007381.logProbe([
                        112,
                        27,
                        112,
                        31
                    ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                        112,
                        47,
                        112,
                        63
                    ], obj.createCursorKeys);
                return fn.apply(obj, arguments);
            }.bind(this)();
            this.upKey = function () {
                var obj = __recognizer595007381.logProbe([
                        113,
                        36,
                        113,
                        44
                    ], __recognizer595007381.logProbe([
                        113,
                        30,
                        113,
                        35
                    ], __recognizer595007381.logProbe([
                        113,
                        25,
                        113,
                        29
                    ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                        113,
                        45,
                        113,
                        51
                    ], obj.addKey);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                113,
                68,
                113,
                70
            ], __recognizer595007381.logProbe([
                113,
                59,
                113,
                67
            ], __recognizer595007381.logProbe([
                113,
                52,
                113,
                58
            ], Phaser).Keyboard).UP));
            this.downKey = function () {
                var obj = __recognizer595007381.logProbe([
                        114,
                        38,
                        114,
                        46
                    ], __recognizer595007381.logProbe([
                        114,
                        32,
                        114,
                        37
                    ], __recognizer595007381.logProbe([
                        114,
                        27,
                        114,
                        31
                    ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                        114,
                        47,
                        114,
                        53
                    ], obj.addKey);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                114,
                70,
                114,
                74
            ], __recognizer595007381.logProbe([
                114,
                61,
                114,
                69
            ], __recognizer595007381.logProbe([
                114,
                54,
                114,
                60
            ], Phaser).Keyboard).DOWN));
            this.bKey = function () {
                var obj = __recognizer595007381.logProbe([
                        115,
                        35,
                        115,
                        43
                    ], __recognizer595007381.logProbe([
                        115,
                        29,
                        115,
                        34
                    ], __recognizer595007381.logProbe([
                        115,
                        24,
                        115,
                        28
                    ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                        115,
                        44,
                        115,
                        50
                    ], obj.addKey);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                115,
                67,
                115,
                68
            ], __recognizer595007381.logProbe([
                115,
                58,
                115,
                66
            ], __recognizer595007381.logProbe([
                115,
                51,
                115,
                57
            ], Phaser).Keyboard).B));
            this.mKey = function () {
                var obj = __recognizer595007381.logProbe([
                        116,
                        35,
                        116,
                        43
                    ], __recognizer595007381.logProbe([
                        116,
                        29,
                        116,
                        34
                    ], __recognizer595007381.logProbe([
                        116,
                        24,
                        116,
                        28
                    ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                        116,
                        44,
                        116,
                        50
                    ], obj.addKey);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                116,
                67,
                116,
                68
            ], __recognizer595007381.logProbe([
                116,
                58,
                116,
                66
            ], __recognizer595007381.logProbe([
                116,
                51,
                116,
                57
            ], Phaser).Keyboard).M));
        },
        update: function () {
            __recognizer595007381.logEntry([
                124,
                16,
                124,
                24
            ], arguments);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        126,
                        12,
                        126,
                        19
                    ], console), fn = __recognizer595007381.logProbe([
                        126,
                        20,
                        126,
                        23
                    ], obj.log);
                return fn.apply(obj, arguments);
            }.bind(this)('Escala enX: ' + __recognizer595007381.logProbe([
                126,
                57,
                126,
                58
            ], __recognizer595007381.logProbe([
                126,
                51,
                126,
                56
            ], __recognizer595007381.logProbe([
                126,
                44,
                126,
                50
            ], __recognizer595007381.logProbe([
                126,
                39,
                126,
                43
            ], this).player).scale).x) + ', Escala en Y: ' + __recognizer595007381.logProbe([
                126,
                96,
                126,
                97
            ], __recognizer595007381.logProbe([
                126,
                90,
                126,
                95
            ], __recognizer595007381.logProbe([
                126,
                83,
                126,
                89
            ], __recognizer595007381.logProbe([
                126,
                78,
                126,
                82
            ], this).player).scale).y)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        127,
                        12,
                        127,
                        19
                    ], console), fn = __recognizer595007381.logProbe([
                        127,
                        20,
                        127,
                        23
                    ], obj.log);
                return fn.apply(obj, arguments);
            }.bind(this)('Velocidad de escala: ' + __recognizer595007381.logProbe([
                127,
                53,
                127,
                59
            ], __recognizer595007381.logProbe([
                127,
                48,
                127,
                52
            ], this).vScale)));
            if (function () {
                    var obj = __recognizer595007381.logProbe([
                            131,
                            27,
                            131,
                            35
                        ], __recognizer595007381.logProbe([
                            131,
                            21,
                            131,
                            26
                        ], __recognizer595007381.logProbe([
                            131,
                            16,
                            131,
                            20
                        ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                            131,
                            36,
                            131,
                            42
                        ], obj.isDown);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer595007381.logProbe([
                    131,
                    59,
                    131,
                    63
                ], __recognizer595007381.logProbe([
                    131,
                    50,
                    131,
                    58
                ], __recognizer595007381.logProbe([
                    131,
                    43,
                    131,
                    49
                ], Phaser).Keyboard).LEFT))) {
                this.player.body.velocity.x = -100;
            } else if (function () {
                    var obj = __recognizer595007381.logProbe([
                            135,
                            32,
                            135,
                            40
                        ], __recognizer595007381.logProbe([
                            135,
                            26,
                            135,
                            31
                        ], __recognizer595007381.logProbe([
                            135,
                            21,
                            135,
                            25
                        ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                            135,
                            41,
                            135,
                            47
                        ], obj.isDown);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer595007381.logProbe([
                    135,
                    64,
                    135,
                    69
                ], __recognizer595007381.logProbe([
                    135,
                    55,
                    135,
                    63
                ], __recognizer595007381.logProbe([
                    135,
                    48,
                    135,
                    54
                ], Phaser).Keyboard).RIGHT))) {
                this.player.body.velocity.x = 100;
            } else {
                this.player.body.velocity.x = 0;
            }
            if (function () {
                    var obj = __recognizer595007381.logProbe([
                            143,
                            27,
                            143,
                            35
                        ], __recognizer595007381.logProbe([
                            143,
                            21,
                            143,
                            26
                        ], __recognizer595007381.logProbe([
                            143,
                            16,
                            143,
                            20
                        ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                            143,
                            36,
                            143,
                            42
                        ], obj.isDown);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer595007381.logProbe([
                    143,
                    59,
                    143,
                    61
                ], __recognizer595007381.logProbe([
                    143,
                    50,
                    143,
                    58
                ], __recognizer595007381.logProbe([
                    143,
                    43,
                    143,
                    49
                ], Phaser).Keyboard).UP))) {
                if (__recognizer595007381.logProbe([
                        146,
                        40,
                        146,
                        41
                    ], __recognizer595007381.logProbe([
                        146,
                        31,
                        146,
                        39
                    ], __recognizer595007381.logProbe([
                        146,
                        24,
                        146,
                        30
                    ], __recognizer595007381.logProbe([
                        146,
                        19,
                        146,
                        23
                    ], this).player).position).y) >= 365) {
                    this.player.body.velocity.y = -100;
                    if (!__recognizer595007381.logProbe([
                            148,
                            29,
                            148,
                            38
                        ], __recognizer595007381.logProbe([
                            148,
                            24,
                            148,
                            28
                        ], this).scaleStop)) {
                        this.player.scale.y -= __recognizer595007381.logProbe([
                            149,
                            52,
                            149,
                            58
                        ], __recognizer595007381.logProbe([
                            149,
                            47,
                            149,
                            51
                        ], this).vScale);
                        this.player.scale.x -= __recognizer595007381.logProbe([
                            150,
                            52,
                            150,
                            58
                        ], __recognizer595007381.logProbe([
                            150,
                            47,
                            150,
                            51
                        ], this).vScale);
                        (function () {
                            var obj = __recognizer595007381.logProbe([
                                    151,
                                    36,
                                    151,
                                    41
                                ], __recognizer595007381.logProbe([
                                    151,
                                    29,
                                    151,
                                    35
                                ], __recognizer595007381.logProbe([
                                    151,
                                    24,
                                    151,
                                    28
                                ], this).player).scale), fn = __recognizer595007381.logProbe([
                                    151,
                                    42,
                                    151,
                                    45
                                ], obj.set);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer595007381.logProbe([
                            151,
                            64,
                            151,
                            65
                        ], __recognizer595007381.logProbe([
                            151,
                            58,
                            151,
                            63
                        ], __recognizer595007381.logProbe([
                            151,
                            51,
                            151,
                            57
                        ], __recognizer595007381.logProbe([
                            151,
                            46,
                            151,
                            50
                        ], this).player).scale).x), __recognizer595007381.logProbe([
                            151,
                            84,
                            151,
                            85
                        ], __recognizer595007381.logProbe([
                            151,
                            78,
                            151,
                            83
                        ], __recognizer595007381.logProbe([
                            151,
                            71,
                            151,
                            77
                        ], __recognizer595007381.logProbe([
                            151,
                            66,
                            151,
                            70
                        ], this).player).scale).y)));
                    }
                    (function () {
                        var obj = __recognizer595007381.logProbe([
                                153,
                                32,
                                153,
                                42
                            ], __recognizer595007381.logProbe([
                                153,
                                25,
                                153,
                                31
                            ], __recognizer595007381.logProbe([
                                153,
                                20,
                                153,
                                24
                            ], this).player).animations), fn = __recognizer595007381.logProbe([
                                153,
                                43,
                                153,
                                47
                            ], obj.play);
                        return fn.apply(obj, arguments);
                    }.bind(this)('forward', 10, true));
                }
            } else if (__recognizer595007381.logProbe([
                    157,
                    41,
                    157,
                    42
                ], __recognizer595007381.logProbe([
                    157,
                    32,
                    157,
                    40
                ], __recognizer595007381.logProbe([
                    157,
                    25,
                    157,
                    31
                ], __recognizer595007381.logProbe([
                    157,
                    20,
                    157,
                    24
                ], this).player).position).y) <= 365) {
                (function () {
                    var obj = __recognizer595007381.logProbe([
                            158,
                            28,
                            158,
                            38
                        ], __recognizer595007381.logProbe([
                            158,
                            21,
                            158,
                            27
                        ], __recognizer595007381.logProbe([
                            158,
                            16,
                            158,
                            20
                        ], this).player).animations), fn = __recognizer595007381.logProbe([
                            158,
                            39,
                            158,
                            43
                        ], obj.play);
                    return fn.apply(obj, arguments);
                }.bind(this)('still'));
                this.player.body.velocity.y = 0;
            } else if (function () {
                    var obj = __recognizer595007381.logProbe([
                            162,
                            32,
                            162,
                            40
                        ], __recognizer595007381.logProbe([
                            162,
                            26,
                            162,
                            31
                        ], __recognizer595007381.logProbe([
                            162,
                            21,
                            162,
                            25
                        ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                            162,
                            41,
                            162,
                            47
                        ], obj.isDown);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer595007381.logProbe([
                    162,
                    64,
                    162,
                    68
                ], __recognizer595007381.logProbe([
                    162,
                    55,
                    162,
                    63
                ], __recognizer595007381.logProbe([
                    162,
                    48,
                    162,
                    54
                ], Phaser).Keyboard).DOWN))) {
                if (__recognizer595007381.logProbe([
                        164,
                        40,
                        164,
                        41
                    ], __recognizer595007381.logProbe([
                        164,
                        31,
                        164,
                        39
                    ], __recognizer595007381.logProbe([
                        164,
                        24,
                        164,
                        30
                    ], __recognizer595007381.logProbe([
                        164,
                        19,
                        164,
                        23
                    ], this).player).position).y) <= 856) {
                    this.player.body.velocity.y = 100;
                    this.player.scale.y += __recognizer595007381.logProbe([
                        167,
                        48,
                        167,
                        54
                    ], __recognizer595007381.logProbe([
                        167,
                        43,
                        167,
                        47
                    ], this).vScale);
                    this.player.scale.x += __recognizer595007381.logProbe([
                        168,
                        48,
                        168,
                        54
                    ], __recognizer595007381.logProbe([
                        168,
                        43,
                        168,
                        47
                    ], this).vScale);
                    (function () {
                        var obj = __recognizer595007381.logProbe([
                                169,
                                32,
                                169,
                                42
                            ], __recognizer595007381.logProbe([
                                169,
                                25,
                                169,
                                31
                            ], __recognizer595007381.logProbe([
                                169,
                                20,
                                169,
                                24
                            ], this).player).animations), fn = __recognizer595007381.logProbe([
                                169,
                                43,
                                169,
                                47
                            ], obj.play);
                        return fn.apply(obj, arguments);
                    }.bind(this)('back', 10, true));
                }
            } else {
                (function () {
                    var obj = __recognizer595007381.logProbe([
                            174,
                            28,
                            174,
                            38
                        ], __recognizer595007381.logProbe([
                            174,
                            21,
                            174,
                            27
                        ], __recognizer595007381.logProbe([
                            174,
                            16,
                            174,
                            20
                        ], this).player).animations), fn = __recognizer595007381.logProbe([
                            174,
                            39,
                            174,
                            43
                        ], obj.play);
                    return fn.apply(obj, arguments);
                }.bind(this)('still'));
                this.player.body.velocity.y = 0;
            }
            this.text = function () {
                var obj = __recognizer595007381.logProbe([
                        181,
                        29,
                        181,
                        32
                    ], __recognizer595007381.logProbe([
                        181,
                        24,
                        181,
                        28
                    ], this).add), fn = __recognizer595007381.logProbe([
                        181,
                        33,
                        181,
                        37
                    ], obj.text);
                return fn.apply(obj, arguments);
            }.bind(this)(0, 0, 'Jack se levanto esa ma\xf1ana temprano para ir a caminar', {
                font: '20pt Courier',
                fill: '#000000',
                stroke: '#119f4e',
                strokeThickness: 2
            });
            (function () {
                var obj = __recognizer595007381.logProbe([
                        192,
                        25,
                        192,
                        31
                    ], __recognizer595007381.logProbe([
                        192,
                        17,
                        192,
                        24
                    ], __recognizer595007381.logProbe([
                        192,
                        12,
                        192,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        192,
                        32,
                        192,
                        39
                    ], obj.collide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                192,
                45,
                192,
                50
            ], __recognizer595007381.logProbe([
                192,
                40,
                192,
                44
            ], this).wall1), __recognizer595007381.logProbe([
                192,
                57,
                192,
                63
            ], __recognizer595007381.logProbe([
                192,
                52,
                192,
                56
            ], this).player), function (wall1, player) {
                __recognizer595007381.logEntry([
                    192,
                    64,
                    192,
                    72
                ], arguments);
                this.scaleStop = true;
            }, null, __recognizer595007381.logProbe([
                192,
                116,
                192,
                120
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        193,
                        25,
                        193,
                        31
                    ], __recognizer595007381.logProbe([
                        193,
                        17,
                        193,
                        24
                    ], __recognizer595007381.logProbe([
                        193,
                        12,
                        193,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        193,
                        32,
                        193,
                        39
                    ], obj.collide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                193,
                45,
                193,
                50
            ], __recognizer595007381.logProbe([
                193,
                40,
                193,
                44
            ], this).wall2), __recognizer595007381.logProbe([
                193,
                57,
                193,
                63
            ], __recognizer595007381.logProbe([
                193,
                52,
                193,
                56
            ], this).player), function (wall2, player) {
                __recognizer595007381.logEntry([
                    193,
                    64,
                    193,
                    72
                ], arguments);
                this.scaleStop = true;
            }, null, __recognizer595007381.logProbe([
                193,
                116,
                193,
                120
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        194,
                        25,
                        194,
                        31
                    ], __recognizer595007381.logProbe([
                        194,
                        17,
                        194,
                        24
                    ], __recognizer595007381.logProbe([
                        194,
                        12,
                        194,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        194,
                        32,
                        194,
                        39
                    ], obj.collide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                194,
                45,
                194,
                50
            ], __recognizer595007381.logProbe([
                194,
                40,
                194,
                44
            ], this).wall3), __recognizer595007381.logProbe([
                194,
                57,
                194,
                63
            ], __recognizer595007381.logProbe([
                194,
                52,
                194,
                56
            ], this).player), function (wall3, player) {
                __recognizer595007381.logEntry([
                    194,
                    64,
                    194,
                    72
                ], arguments);
                this.scaleStop = true;
            }, null, __recognizer595007381.logProbe([
                194,
                116,
                194,
                120
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        195,
                        25,
                        195,
                        31
                    ], __recognizer595007381.logProbe([
                        195,
                        17,
                        195,
                        24
                    ], __recognizer595007381.logProbe([
                        195,
                        12,
                        195,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        195,
                        32,
                        195,
                        39
                    ], obj.collide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                195,
                45,
                195,
                50
            ], __recognizer595007381.logProbe([
                195,
                40,
                195,
                44
            ], this).wall4), __recognizer595007381.logProbe([
                195,
                57,
                195,
                63
            ], __recognizer595007381.logProbe([
                195,
                52,
                195,
                56
            ], this).player), function (wall4, player) {
                __recognizer595007381.logEntry([
                    195,
                    64,
                    195,
                    72
                ], arguments);
                this.scaleStop = true;
            }, null, __recognizer595007381.logProbe([
                195,
                116,
                195,
                120
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        196,
                        25,
                        196,
                        31
                    ], __recognizer595007381.logProbe([
                        196,
                        17,
                        196,
                        24
                    ], __recognizer595007381.logProbe([
                        196,
                        12,
                        196,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        196,
                        32,
                        196,
                        39
                    ], obj.collide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                196,
                45,
                196,
                50
            ], __recognizer595007381.logProbe([
                196,
                40,
                196,
                44
            ], this).wall5), __recognizer595007381.logProbe([
                196,
                57,
                196,
                63
            ], __recognizer595007381.logProbe([
                196,
                52,
                196,
                56
            ], this).player), function (wall5, player) {
                __recognizer595007381.logEntry([
                    196,
                    64,
                    196,
                    72
                ], arguments);
                this.scaleStop = true;
            }, null, __recognizer595007381.logProbe([
                196,
                116,
                196,
                120
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        197,
                        25,
                        197,
                        31
                    ], __recognizer595007381.logProbe([
                        197,
                        17,
                        197,
                        24
                    ], __recognizer595007381.logProbe([
                        197,
                        12,
                        197,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        197,
                        32,
                        197,
                        39
                    ], obj.collide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                197,
                45,
                197,
                50
            ], __recognizer595007381.logProbe([
                197,
                40,
                197,
                44
            ], this).wall6), __recognizer595007381.logProbe([
                197,
                57,
                197,
                63
            ], __recognizer595007381.logProbe([
                197,
                52,
                197,
                56
            ], this).player), function (wall6, player) {
                __recognizer595007381.logEntry([
                    197,
                    64,
                    197,
                    72
                ], arguments);
                this.scaleStop = true;
            }, null, __recognizer595007381.logProbe([
                197,
                116,
                197,
                120
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        198,
                        25,
                        198,
                        31
                    ], __recognizer595007381.logProbe([
                        198,
                        17,
                        198,
                        24
                    ], __recognizer595007381.logProbe([
                        198,
                        12,
                        198,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        198,
                        32,
                        198,
                        39
                    ], obj.collide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                198,
                45,
                198,
                50
            ], __recognizer595007381.logProbe([
                198,
                40,
                198,
                44
            ], this).wall7), __recognizer595007381.logProbe([
                198,
                57,
                198,
                63
            ], __recognizer595007381.logProbe([
                198,
                52,
                198,
                56
            ], this).player), function (wall7, player) {
                __recognizer595007381.logEntry([
                    198,
                    64,
                    198,
                    72
                ], arguments);
                this.scaleStop = true;
            }, null, __recognizer595007381.logProbe([
                198,
                116,
                198,
                120
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        199,
                        25,
                        199,
                        31
                    ], __recognizer595007381.logProbe([
                        199,
                        17,
                        199,
                        24
                    ], __recognizer595007381.logProbe([
                        199,
                        12,
                        199,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        199,
                        32,
                        199,
                        39
                    ], obj.collide);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                199,
                45,
                199,
                50
            ], __recognizer595007381.logProbe([
                199,
                40,
                199,
                44
            ], this).wall8), __recognizer595007381.logProbe([
                199,
                57,
                199,
                63
            ], __recognizer595007381.logProbe([
                199,
                52,
                199,
                56
            ], this).player), function (wall8, player) {
                __recognizer595007381.logEntry([
                    199,
                    64,
                    199,
                    72
                ], arguments);
                this.scaleStop = true;
            }, null, __recognizer595007381.logProbe([
                199,
                116,
                199,
                120
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        201,
                        25,
                        201,
                        31
                    ], __recognizer595007381.logProbe([
                        201,
                        17,
                        201,
                        24
                    ], __recognizer595007381.logProbe([
                        201,
                        12,
                        201,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        201,
                        32,
                        201,
                        39
                    ], obj.overlap);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                201,
                45,
                201,
                49
            ], __recognizer595007381.logProbe([
                201,
                40,
                201,
                44
            ], this).niña), __recognizer595007381.logProbe([
                201,
                56,
                201,
                62
            ], __recognizer595007381.logProbe([
                201,
                51,
                201,
                55
            ], this).player), function (niña, player) {
                __recognizer595007381.logEntry([
                    201,
                    63,
                    201,
                    71
                ], arguments);
                this.text = function () {
                    var obj = __recognizer595007381.logProbe([
                            204,
                            33,
                            204,
                            36
                        ], __recognizer595007381.logProbe([
                            204,
                            28,
                            204,
                            32
                        ], this).add), fn = __recognizer595007381.logProbe([
                            204,
                            37,
                            204,
                            41
                        ], obj.text);
                    return fn.apply(obj, arguments);
                }.bind(this)(0, 30, 'Nunca habia visto una chica tan guapa\u2026 Se dec\xeda a si mismo', {
                    font: '20pt Courier',
                    fill: '#000000',
                    stroke: '#119f4e',
                    strokeThickness: 2
                });
                this.text = function () {
                    var obj = __recognizer595007381.logProbe([
                            205,
                            33,
                            205,
                            36
                        ], __recognizer595007381.logProbe([
                            205,
                            28,
                            205,
                            32
                        ], this).add), fn = __recognizer595007381.logProbe([
                            205,
                            37,
                            205,
                            41
                        ], obj.text);
                    return fn.apply(obj, arguments);
                }.bind(this)(0, 60, 'en su cabeza', {
                    font: '20pt Courier',
                    fill: '#000000',
                    stroke: '#119f4e',
                    strokeThickness: 2
                });
                if (function () {
                        var obj = __recognizer595007381.logProbe([
                                207,
                                31,
                                207,
                                39
                            ], __recognizer595007381.logProbe([
                                207,
                                25,
                                207,
                                30
                            ], __recognizer595007381.logProbe([
                                207,
                                20,
                                207,
                                24
                            ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                                207,
                                40,
                                207,
                                46
                            ], obj.isDown);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer595007381.logProbe([
                        207,
                        63,
                        207,
                        64
                    ], __recognizer595007381.logProbe([
                        207,
                        54,
                        207,
                        62
                    ], __recognizer595007381.logProbe([
                        207,
                        47,
                        207,
                        53
                    ], Phaser).Keyboard).B))) {
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                209,
                                37,
                                209,
                                40
                            ], __recognizer595007381.logProbe([
                                209,
                                32,
                                209,
                                36
                            ], this).add), fn = __recognizer595007381.logProbe([
                                209,
                                41,
                                209,
                                45
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 150, 'Se acerco a ella para declararsele abiertamente e invitarle a cenar', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                } else if (function () {
                        var obj = __recognizer595007381.logProbe([
                                215,
                                36,
                                215,
                                44
                            ], __recognizer595007381.logProbe([
                                215,
                                30,
                                215,
                                35
                            ], __recognizer595007381.logProbe([
                                215,
                                25,
                                215,
                                29
                            ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                                215,
                                45,
                                215,
                                51
                            ], obj.isDown);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer595007381.logProbe([
                        215,
                        68,
                        215,
                        69
                    ], __recognizer595007381.logProbe([
                        215,
                        59,
                        215,
                        67
                    ], __recognizer595007381.logProbe([
                        215,
                        52,
                        215,
                        58
                    ], Phaser).Keyboard).M))) {
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                217,
                                37,
                                217,
                                40
                            ], __recognizer595007381.logProbe([
                                217,
                                32,
                                217,
                                36
                            ], this).add), fn = __recognizer595007381.logProbe([
                                217,
                                41,
                                217,
                                45
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 150, 'Tiene que ser m\xeda\u2026 -Se repet\xeda, mientras se acercaba a ella y la forzaba', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                }
            }, null, __recognizer595007381.logProbe([
                220,
                19,
                220,
                23
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        222,
                        25,
                        222,
                        31
                    ], __recognizer595007381.logProbe([
                        222,
                        17,
                        222,
                        24
                    ], __recognizer595007381.logProbe([
                        222,
                        12,
                        222,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        222,
                        32,
                        222,
                        39
                    ], obj.overlap);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                222,
                45,
                222,
                52
            ], __recognizer595007381.logProbe([
                222,
                40,
                222,
                44
            ], this).mendigo), __recognizer595007381.logProbe([
                222,
                59,
                222,
                65
            ], __recognizer595007381.logProbe([
                222,
                54,
                222,
                58
            ], this).player), function (mendigo, player) {
                __recognizer595007381.logEntry([
                    222,
                    66,
                    222,
                    74
                ], arguments);
                this.text = function () {
                    var obj = __recognizer595007381.logProbe([
                            224,
                            61,
                            224,
                            64
                        ], __recognizer595007381.logProbe([
                            224,
                            56,
                            224,
                            60
                        ], this).add), fn = __recognizer595007381.logProbe([
                            224,
                            65,
                            224,
                            69
                        ], obj.text);
                    return fn.apply(obj, arguments);
                }.bind(this)(0, 30, 'Otro indigente m\xe1s en las calles de la ciudad', {
                    font: '20pt Courier',
                    fill: '#000000',
                    stroke: '#119f4e',
                    strokeThickness: 2
                });
                if (function () {
                        var obj = __recognizer595007381.logProbe([
                                225,
                                59,
                                225,
                                67
                            ], __recognizer595007381.logProbe([
                                225,
                                53,
                                225,
                                58
                            ], __recognizer595007381.logProbe([
                                225,
                                48,
                                225,
                                52
                            ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                                225,
                                68,
                                225,
                                74
                            ], obj.isDown);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer595007381.logProbe([
                        225,
                        91,
                        225,
                        92
                    ], __recognizer595007381.logProbe([
                        225,
                        82,
                        225,
                        90
                    ], __recognizer595007381.logProbe([
                        225,
                        75,
                        225,
                        81
                    ], Phaser).Keyboard).B))) {
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                227,
                                65,
                                227,
                                68
                            ], __recognizer595007381.logProbe([
                                227,
                                60,
                                227,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                227,
                                69,
                                227,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 60, 'que menos podia hacer que ayudarle con el dinero que', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                228,
                                65,
                                228,
                                68
                            ], __recognizer595007381.logProbe([
                                228,
                                60,
                                228,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                228,
                                69,
                                228,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 90, 'llevaba en sus bolsillos', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                } else if (function () {
                        var obj = __recognizer595007381.logProbe([
                                230,
                                64,
                                230,
                                72
                            ], __recognizer595007381.logProbe([
                                230,
                                58,
                                230,
                                63
                            ], __recognizer595007381.logProbe([
                                230,
                                53,
                                230,
                                57
                            ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                                230,
                                73,
                                230,
                                79
                            ], obj.isDown);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer595007381.logProbe([
                        230,
                        96,
                        230,
                        97
                    ], __recognizer595007381.logProbe([
                        230,
                        87,
                        230,
                        95
                    ], __recognizer595007381.logProbe([
                        230,
                        80,
                        230,
                        86
                    ], Phaser).Keyboard).M))) {
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                232,
                                65,
                                232,
                                68
                            ], __recognizer595007381.logProbe([
                                232,
                                60,
                                232,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                232,
                                69,
                                232,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 60, '\xbfEs que no tenemos ya bastantes vagos como tu? le', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                233,
                                65,
                                233,
                                68
                            ], __recognizer595007381.logProbe([
                                233,
                                60,
                                233,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                233,
                                69,
                                233,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 90, 'grito al hombre mientras le agredia con una patada', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                }
            }, null, __recognizer595007381.logProbe([
                236,
                47,
                236,
                51
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        238,
                        25,
                        238,
                        31
                    ], __recognizer595007381.logProbe([
                        238,
                        17,
                        238,
                        24
                    ], __recognizer595007381.logProbe([
                        238,
                        12,
                        238,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        238,
                        32,
                        238,
                        39
                    ], obj.overlap);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                238,
                45,
                238,
                50
            ], __recognizer595007381.logProbe([
                238,
                40,
                238,
                44
            ], this).perro), __recognizer595007381.logProbe([
                238,
                57,
                238,
                63
            ], __recognizer595007381.logProbe([
                238,
                52,
                238,
                56
            ], this).player), function (perro, player) {
                __recognizer595007381.logEntry([
                    238,
                    64,
                    238,
                    72
                ], arguments);
                this.text = function () {
                    var obj = __recognizer595007381.logProbe([
                            240,
                            61,
                            240,
                            64
                        ], __recognizer595007381.logProbe([
                            240,
                            56,
                            240,
                            60
                        ], this).add), fn = __recognizer595007381.logProbe([
                            240,
                            65,
                            240,
                            69
                        ], obj.text);
                    return fn.apply(obj, arguments);
                }.bind(this)(0, 30, 'Ah\xed estaba el perro que aguardaba tras su edificio todas las ma\xf1anas', {
                    font: '20pt Courier',
                    fill: '#000000',
                    stroke: '#119f4e',
                    strokeThickness: 2
                });
                if (function () {
                        var obj = __recognizer595007381.logProbe([
                                241,
                                59,
                                241,
                                67
                            ], __recognizer595007381.logProbe([
                                241,
                                53,
                                241,
                                58
                            ], __recognizer595007381.logProbe([
                                241,
                                48,
                                241,
                                52
                            ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                                241,
                                68,
                                241,
                                74
                            ], obj.isDown);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer595007381.logProbe([
                        241,
                        91,
                        241,
                        92
                    ], __recognizer595007381.logProbe([
                        241,
                        82,
                        241,
                        90
                    ], __recognizer595007381.logProbe([
                        241,
                        75,
                        241,
                        81
                    ], Phaser).Keyboard).B))) {
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                243,
                                65,
                                243,
                                68
                            ], __recognizer595007381.logProbe([
                                243,
                                60,
                                243,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                243,
                                69,
                                243,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 60, 'Jack acariciaba al perro mientras recordaba a su mascota', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                244,
                                65,
                                244,
                                68
                            ], __recognizer595007381.logProbe([
                                244,
                                60,
                                244,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                244,
                                69,
                                244,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 90, 'de nino Bobby, hacia el que tenia un gran apego', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                } else if (function () {
                        var obj = __recognizer595007381.logProbe([
                                248,
                                64,
                                248,
                                72
                            ], __recognizer595007381.logProbe([
                                248,
                                58,
                                248,
                                63
                            ], __recognizer595007381.logProbe([
                                248,
                                53,
                                248,
                                57
                            ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                                248,
                                73,
                                248,
                                79
                            ], obj.isDown);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer595007381.logProbe([
                        248,
                        96,
                        248,
                        97
                    ], __recognizer595007381.logProbe([
                        248,
                        87,
                        248,
                        95
                    ], __recognizer595007381.logProbe([
                        248,
                        80,
                        248,
                        86
                    ], Phaser).Keyboard).M))) {
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                250,
                                65,
                                250,
                                68
                            ], __recognizer595007381.logProbe([
                                250,
                                60,
                                250,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                250,
                                69,
                                250,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 60, '\u201c\xa1Largate de una vez, estoy harto de ver tus mierdas', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                251,
                                65,
                                251,
                                68
                            ], __recognizer595007381.logProbe([
                                251,
                                60,
                                251,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                251,
                                69,
                                251,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 90, 'por aqu\xed! le chillaba al animal mientras le tiraba piedra', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                }
            }, null, __recognizer595007381.logProbe([
                253,
                47,
                253,
                51
            ], this)));
            (function () {
                var obj = __recognizer595007381.logProbe([
                        255,
                        25,
                        255,
                        31
                    ], __recognizer595007381.logProbe([
                        255,
                        17,
                        255,
                        24
                    ], __recognizer595007381.logProbe([
                        255,
                        12,
                        255,
                        16
                    ], this).physics).arcade), fn = __recognizer595007381.logProbe([
                        255,
                        32,
                        255,
                        39
                    ], obj.overlap);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer595007381.logProbe([
                255,
                45,
                255,
                52
            ], __recognizer595007381.logProbe([
                255,
                40,
                255,
                44
            ], this).vecina1), __recognizer595007381.logProbe([
                255,
                59,
                255,
                65
            ], __recognizer595007381.logProbe([
                255,
                54,
                255,
                58
            ], this).player), function (vecina1, player) {
                __recognizer595007381.logEntry([
                    255,
                    66,
                    255,
                    74
                ], arguments);
                this.text = function () {
                    var obj = __recognizer595007381.logProbe([
                            257,
                            61,
                            257,
                            64
                        ], __recognizer595007381.logProbe([
                            257,
                            56,
                            257,
                            60
                        ], this).add), fn = __recognizer595007381.logProbe([
                            257,
                            65,
                            257,
                            69
                        ], obj.text);
                    return fn.apply(obj, arguments);
                }.bind(this)(0, 30, 'Se top\xf3 con su vecina de abajo,', {
                    font: '20pt Courier',
                    fill: '#000000',
                    stroke: '#119f4e',
                    strokeThickness: 2
                });
                if (function () {
                        var obj = __recognizer595007381.logProbe([
                                259,
                                59,
                                259,
                                67
                            ], __recognizer595007381.logProbe([
                                259,
                                53,
                                259,
                                58
                            ], __recognizer595007381.logProbe([
                                259,
                                48,
                                259,
                                52
                            ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                                259,
                                68,
                                259,
                                74
                            ], obj.isDown);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer595007381.logProbe([
                        259,
                        91,
                        259,
                        92
                    ], __recognizer595007381.logProbe([
                        259,
                        82,
                        259,
                        90
                    ], __recognizer595007381.logProbe([
                        259,
                        75,
                        259,
                        81
                    ], Phaser).Keyboard).B))) {
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                261,
                                65,
                                261,
                                68
                            ], __recognizer595007381.logProbe([
                                261,
                                60,
                                261,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                261,
                                69,
                                261,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 60, 'era una joven agradable cuya mirada penetraba en el', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                262,
                                65,
                                262,
                                68
                            ], __recognizer595007381.logProbe([
                                262,
                                60,
                                262,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                262,
                                69,
                                262,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 90, 'inminentemente', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                } else if (function () {
                        var obj = __recognizer595007381.logProbe([
                                266,
                                64,
                                266,
                                72
                            ], __recognizer595007381.logProbe([
                                266,
                                58,
                                266,
                                63
                            ], __recognizer595007381.logProbe([
                                266,
                                53,
                                266,
                                57
                            ], this).input).keyboard), fn = __recognizer595007381.logProbe([
                                266,
                                73,
                                266,
                                79
                            ], obj.isDown);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer595007381.logProbe([
                        266,
                        96,
                        266,
                        97
                    ], __recognizer595007381.logProbe([
                        266,
                        87,
                        266,
                        95
                    ], __recognizer595007381.logProbe([
                        266,
                        80,
                        266,
                        86
                    ], Phaser).Keyboard).M))) {
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                268,
                                65,
                                268,
                                68
                            ], __recognizer595007381.logProbe([
                                268,
                                60,
                                268,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                268,
                                69,
                                268,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 60, 'a la que mando un corte de mangas para no tener que saludarla', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                    this.text = function () {
                        var obj = __recognizer595007381.logProbe([
                                270,
                                65,
                                270,
                                68
                            ], __recognizer595007381.logProbe([
                                270,
                                60,
                                270,
                                64
                            ], this).add), fn = __recognizer595007381.logProbe([
                                270,
                                69,
                                270,
                                73
                            ], obj.text);
                        return fn.apply(obj, arguments);
                    }.bind(this)(0, 90, 'puesto que no estaba de humor para nadie', {
                        font: '20pt Courier',
                        fill: '#000000',
                        stroke: '#119f4e',
                        strokeThickness: 2
                    });
                }
            }, null, __recognizer595007381.logProbe([
                272,
                47,
                272,
                51
            ], this)));
            if (__recognizer595007381.logProbe([
                    292,
                    37,
                    292,
                    38
                ], __recognizer595007381.logProbe([
                    292,
                    28,
                    292,
                    36
                ], __recognizer595007381.logProbe([
                    292,
                    21,
                    292,
                    27
                ], __recognizer595007381.logProbe([
                    292,
                    16,
                    292,
                    20
                ], this).player).position).y) <= 365) {
                (function () {
                    var obj = __recognizer595007381.logProbe([
                            293,
                            26,
                            293,
                            31
                        ], __recognizer595007381.logProbe([
                            293,
                            21,
                            293,
                            25
                        ], __recognizer595007381.logProbe([
                            293,
                            16,
                            293,
                            20
                        ], this).game).state), fn = __recognizer595007381.logProbe([
                            293,
                            32,
                            293,
                            37
                        ], obj.start);
                    return fn.apply(obj, arguments);
                }.bind(this)('menu'));
            }
        },
        render: function () {
            __recognizer595007381.logEntry([
                300,
                16,
                300,
                24
            ], arguments);
        },
        onInputDown: function () {
            __recognizer595007381.logEntry([
                322,
                21,
                322,
                29
            ], arguments);
            (function () {
                var obj = __recognizer595007381.logProbe([
                        323,
                        18,
                        323,
                        23
                    ], __recognizer595007381.logProbe([
                        323,
                        13,
                        323,
                        17
                    ], __recognizer595007381.logProbe([
                        323,
                        8,
                        323,
                        12
                    ], this).game).state), fn = __recognizer595007381.logProbe([
                        323,
                        24,
                        323,
                        29
                    ], obj.start);
                return fn.apply(obj, arguments);
            }.bind(this)('menu'));
        }
    };
    window['el-escritor'] = __recognizer595007381.logProbe([
        329,
        32,
        329,
        45
    ], __recognizer595007381.logProbe([
        329,
        25,
        329,
        31
    ], window)['el-escritor']) || {};
    window['el-escritor'].Game = __recognizer595007381.logProbe([
        330,
        30,
        330,
        34
    ], Game);
}());
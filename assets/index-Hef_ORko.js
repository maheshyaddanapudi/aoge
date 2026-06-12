(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="165",Vc=0,to=1,Wc=2,Gl=1,Vl=2,fn=3,On=0,Le=1,pn=2,xn=0,Li=1,pa=2,eo=3,no=4,Xc=5,Qn=100,qc=101,Yc=102,Kc=103,$c=104,jc=200,Zc=201,Jc=202,Qc=203,ma=204,ga=205,th=206,eh=207,nh=208,ih=209,sh=210,rh=211,ah=212,oh=213,lh=214,ch=0,hh=1,uh=2,or=3,dh=4,fh=5,ph=6,mh=7,Ca=0,gh=1,_h=2,Un=0,Wl=1,Xl=2,ql=3,Pa=4,xh=5,Yl=6,Kl=7,$l=300,Fi=301,Oi=302,_a=303,xa=304,gr=306,Bi=1e3,ei=1001,va=1002,Ie=1003,vh=1004,Ds=1005,Ze=1006,Ar=1007,ni=1008,Bn=1009,Mh=1010,Sh=1011,lr=1012,jl=1013,zi=1014,mn=1015,vn=1016,Zl=1017,Jl=1018,ki=1020,yh=35902,Th=1021,Eh=1022,an=1023,wh=1024,bh=1025,Ii=1026,Hi=1027,Ql=1028,tc=1029,Ah=1030,ec=1031,nc=1033,Rr=33776,Cr=33777,Pr=33778,Dr=33779,io=35840,so=35841,ro=35842,ao=35843,oo=36196,lo=37492,co=37496,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,_o=37814,xo=37815,vo=37816,Mo=37817,So=37818,yo=37819,To=37820,Eo=37821,Lr=36492,wo=36494,bo=36495,Rh=36283,Ao=36284,Ro=36285,Co=36286,Ch=3200,Ph=3201,Da=0,Dh=1,In="",Be="srgb",zn="srgb-linear",La="display-p3",_r="display-p3-linear",cr="linear",ne="srgb",hr="rec709",ur="p3",li=7680,Po=519,Lh=512,Ih=513,Uh=514,ic=515,Nh=516,Fh=517,Oh=518,Bh=519,Ma=35044,Do="300 es",gn=2e3,dr=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lo=1234567;const gs=Math.PI/180,vs=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function Ia(s,t){return(s%t+t)%t}function zh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function kh(s,t,e){return s!==t?(e-s)/(t-s):0}function _s(s,t,e){return(1-e)*s+e*t}function Hh(s,t,e,n){return _s(s,t,1-Math.exp(-e*n))}function Gh(s,t=1){return t-Math.abs(Ia(s,t*2)-t)}function Vh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Wh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Xh(s,t){return s+Math.floor(Math.random()*(t-s+1))}function qh(s,t){return s+Math.random()*(t-s)}function Yh(s){return s*(.5-Math.random())}function Kh(s){s!==void 0&&(Lo=s);let t=Lo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $h(s){return s*gs}function jh(s){return s*vs}function Zh(s){return(s&s-1)===0&&s!==0}function Jh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Qh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tu(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Je(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ir={DEG2RAD:gs,RAD2DEG:vs,generateUUID:Mn,clamp:Pe,euclideanModulo:Ia,mapLinear:zh,inverseLerp:kh,lerp:_s,damp:Hh,pingpong:Gh,smoothstep:Vh,smootherstep:Wh,randInt:Xh,randFloat:qh,randFloatSpread:Yh,seededRandom:Kh,degToRad:$h,radToDeg:jh,isPowerOfTwo:Zh,ceilPowerOfTwo:Jh,floorPowerOfTwo:Qh,setQuaternionFromProperEuler:tu,normalize:Kt,denormalize:Je};class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,i,r,a,o,l,c){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],x=i[4],E=i[7],I=i[2],w=i[5],b=i[8];return r[0]=a*_+o*y+l*I,r[3]=a*m+o*x+l*w,r[6]=a*p+o*E+l*b,r[1]=c*_+h*y+u*I,r[4]=c*m+h*x+u*w,r[7]=c*p+h*E+u*b,r[2]=d*_+f*y+g*I,r[5]=d*m+f*x+g*w,r[8]=d*p+f*E+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Pt;function sc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eu(){const s=fr("canvas");return s.style.display="block",s}const Io={};function Ua(s){s in Io||(Io[s]=!0,console.warn(s))}function nu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Uo=new Pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),No=new Pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[zn]:{transfer:cr,primaries:hr,toReference:s=>s,fromReference:s=>s},[Be]:{transfer:ne,primaries:hr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_r]:{transfer:cr,primaries:ur,toReference:s=>s.applyMatrix3(No),fromReference:s=>s.applyMatrix3(Uo)},[La]:{transfer:ne,primaries:ur,toReference:s=>s.convertSRGBToLinear().applyMatrix3(No),fromReference:s=>s.applyMatrix3(Uo).convertLinearToSRGB()}},iu=new Set([zn,_r]),qt={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!iu.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ls[t].toReference,i=Ls[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ls[s].primaries},getTransfer:function(s){return s===In?cr:Ls[s].transfer}};function Ui(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Nr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ci;class su{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=fr("canvas")),ci.width=t.width,ci.height=t.height;const n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ui(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ru=0;class rc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fr(i[a].image)):r.push(Fr(i[a]))}else r=Fr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?su.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let au=0;class we extends $i{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=ei,i=ei,r=Ze,a=ni,o=an,l=Bn,c=we.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Mn(),this.name="",this.source=new rc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=$l;we.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,i=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,E=(f+1)/2,I=(p+1)/2,w=(h+d)/4,b=(u+_)/4,D=(g+m)/4;return x>E&&x>I?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=b/n):E>I?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=w/i,r=D/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=b/r,i=D/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ou extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class We extends ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ac extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lu extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const I=Math.sqrt(x),w=Math.atan2(I,p*y);m=Math.sin(m*w)/I,o=Math.sin(o*w)/I}const E=o*y;if(l=l*m+d*E,c=c*m+f*E,h=h*m+g*E,u=u*m+_*E,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new L,Fo=new ji;class ri{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(t.matrixWorld),this.union(Is)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Us.subVectors(this.max,ns),hi.subVectors(t.a,ns),ui.subVectors(t.b,ns),di.subVectors(t.c,ns),bn.subVectors(ui,hi),An.subVectors(di,ui),Wn.subVectors(hi,di);let e=[0,-bn.z,bn.y,0,-An.z,An.y,0,-Wn.z,Wn.y,bn.z,0,-bn.x,An.z,0,-An.x,Wn.z,0,-Wn.x,-bn.y,bn.x,0,-An.y,An.x,0,-Wn.y,Wn.x,0];return!Br(e,hi,ui,di,Us)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,hi,ui,di,Us))?!1:(Ns.crossVectors(bn,An),e=[Ns.x,Ns.y,Ns.z],Br(e,hi,ui,di,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new L,new L,new L,new L,new L,new L,new L,new L],Ke=new L,Is=new ri,hi=new L,ui=new L,di=new L,bn=new L,An=new L,Wn=new L,ns=new L,Us=new L,Ns=new L,Xn=new L;function Br(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xn.fromArray(s,r);const o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=t.dot(Xn),c=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const cu=new ri,is=new L,zr=new L;class Es{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(zr)),this.expandByPoint(is.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new L,kr=new L,Fs=new L,Rn=new L,Hr=new L,Os=new L,Gr=new L;class oc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){kr.copy(t).add(e).multiplyScalar(.5),Fs.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(kr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Fs),o=Rn.dot(this.direction),l=-Rn.dot(Fs),c=Rn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(kr).addScaledVector(Fs,d),f}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),i=cn.dot(cn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,i,r){Hr.subVectors(e,t),Os.subVectors(n,t),Gr.crossVectors(Hr,Os);let a=this.direction.dot(Gr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,t);const l=o*this.direction.dot(Os.crossVectors(Rn,Os));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(Rn));if(c<0||l+c>a)return null;const h=-o*Rn.dot(Gr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hu,t,uu)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),Cn.crossVectors(n,Fe),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),Cn.crossVectors(n,Fe)),Cn.normalize(),Bs.crossVectors(Fe,Cn),i[0]=Cn.x,i[4]=Bs.x,i[8]=Fe.x,i[1]=Cn.y,i[5]=Bs.y,i[9]=Fe.y,i[2]=Cn.z,i[6]=Bs.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],E=n[11],I=n[15],w=i[0],b=i[4],D=i[8],T=i[12],v=i[1],R=i[5],z=i[9],B=i[13],W=i[2],q=i[6],G=i[10],$=i[14],H=i[3],ht=i[7],pt=i[11],_t=i[15];return r[0]=a*w+o*v+l*W+c*H,r[4]=a*b+o*R+l*q+c*ht,r[8]=a*D+o*z+l*G+c*pt,r[12]=a*T+o*B+l*$+c*_t,r[1]=h*w+u*v+d*W+f*H,r[5]=h*b+u*R+d*q+f*ht,r[9]=h*D+u*z+d*G+f*pt,r[13]=h*T+u*B+d*$+f*_t,r[2]=g*w+_*v+m*W+p*H,r[6]=g*b+_*R+m*q+p*ht,r[10]=g*D+_*z+m*G+p*pt,r[14]=g*T+_*B+m*$+p*_t,r[3]=y*w+x*v+E*W+I*H,r[7]=y*b+x*R+E*q+I*ht,r[11]=y*D+x*z+E*G+I*pt,r[15]=y*T+x*B+E*$+I*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+e*c*u-e*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,E=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,I=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,w=e*y+n*x+i*E+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=y*b,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*b,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*b,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*b,t[4]=x*b,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*b,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*b,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*f+e*l*f)*b,t[8]=E*b,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*b,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*b,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*b,t[12]=I*b,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*b,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*b,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=l*c,x=l*h,E=l*u,I=n.x,w=n.y,b=n.z;return i[0]=(1-(_+p))*I,i[1]=(f+E)*I,i[2]=(g-x)*I,i[3]=0,i[4]=(f-E)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+x)*b,i[9]=(m-y)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=fi.set(i[0],i[1],i[2]).length();const a=fi.set(i[4],i[5],i[6]).length(),o=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],$e.copy(this);const c=1/r,h=1/a,u=1/o;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=gn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===gn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===dr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=gn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(o===gn)g=(a+r)*u,_=-2*u;else if(o===dr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fi=new L,$e=new $t,hu=new L(0,0,0),uu=new L(1,1,1),Cn=new L,Bs=new L,Fe=new L,Oo=new $t,Bo=new ji;class qe{constructor(t=0,e=0,n=0,i=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let du=0;const zo=new L,pi=new ji,hn=new $t,zs=new L,ss=new L,fu=new L,pu=new ji,ko=new L(1,0,0),Ho=new L(0,1,0),Go=new L(0,0,1),Vo={type:"added"},mu={type:"removed"},mi={type:"childadded",child:null},Vr={type:"childremoved",child:null};class ye extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new L,e=new qe,n=new ji,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Pt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(Ho,t)}rotateZ(t){return this.rotateOnAxis(Go,t)}translateOnAxis(t,e){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(Ho,t)}translateZ(t){return this.translateOnAxis(Go,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(ss,zs,this.up):hn.lookAt(zs,ss,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(hn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vo),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mu),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vo),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,pu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new L(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new L,un=new L,Wr=new L,dn=new L,gi=new L,_i=new L,Wo=new L,Xr=new L,qr=new L,Yr=new L;class Qe{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),un.subVectors(n,e),Wr.subVectors(t,e);const a=je.dot(je),o=je.dot(un),l=je.dot(Wr),c=un.dot(un),h=un.dot(Wr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),un.subVectors(t,e),je.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),un.subVectors(this.a,this.b),je.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;gi.subVectors(i,n),_i.subVectors(r,n),Xr.subVectors(t,n);const l=gi.dot(Xr),c=_i.dot(Xr);if(l<=0&&c<=0)return e.copy(n);qr.subVectors(t,i);const h=gi.dot(qr),u=_i.dot(qr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(gi,a);Yr.subVectors(t,r);const f=gi.dot(Yr),g=_i.dot(Yr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(_i,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Wo.subVectors(r,i),o=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Wo,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Kr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Ia(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kr(a,r,t+1/3),this.g=Kr(a,r,t),this.b=Kr(a,r,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return qt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Pe(Ee.r*255,0,255))*65536+Math.round(Pe(Ee.g*255,0,255))*256+Math.round(Pe(Ee.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,r=Ee.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Be){qt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(ks);const n=_s(Pn.h,ks.h,e),i=_s(Pn.s,ks.s,e),r=_s(Pn.l,ks.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new St;St.NAMES=lc;let gu=0;class ai extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Li,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zi extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new L,Hs=new ft;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ua("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hs.fromBufferAttribute(this,e),Hs.applyMatrix3(t),this.setXY(e,Hs.x,Hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Je(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Je(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Je(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Je(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}}class cc extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hc extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _u=0;const He=new $t,$r=new ye,xi=new L,Oe=new ri,rs=new ri,ve=new L;class Ue extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sc(t)?hc:cc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return $r.lookAt(t),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Oe.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Oe.min,rs.min),Oe.expandByPoint(ve),ve.addVectors(Oe.max,rs.max),Oe.expandByPoint(ve)):(Oe.expandByPoint(rs.min),Oe.expandByPoint(rs.max))}Oe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(t,c),ve.add(xi)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;const c=new L,h=new L,u=new L,d=new ft,f=new ft,g=new ft,_=new L,m=new L;function p(D,T,v){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[D].add(_),o[T].add(_),o[v].add(_),l[D].add(m),l[T].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,T=y.length;D<T;++D){const v=y[D],R=v.start,z=v.count;for(let B=R,W=R+z;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new L,E=new L,I=new L,w=new L;function b(D){I.fromBufferAttribute(i,D),w.copy(I);const T=o[D];x.copy(T),x.sub(I.multiplyScalar(I.dot(T))).normalize(),E.crossVectors(w,T);const R=E.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,R)}for(let D=0,T=y.length;D<T;++D){const v=y[D],R=v.start,z=v.count;for(let B=R,W=R+z;B<W;B+=3)b(t.getX(B+0)),b(t.getX(B+1)),b(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ze(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xo=new $t,qn=new oc,Gs=new Es,qo=new L,vi=new L,Mi=new L,Si=new L,jr=new L,Vs=new L,Ws=new ft,Xs=new ft,qs=new ft,Yo=new L,Ko=new L,$o=new L,Ys=new L,Ks=new L;class te extends ye{constructor(t=new Ue,e=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Vs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(jr.fromBufferAttribute(u,t),a?Vs.addScaledVector(jr,h):Vs.addScaledVector(jr.sub(e),h))}e.add(Vs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Gs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Gs,qo)===null||qn.origin.distanceToSquared(qo)>(t.far-t.near)**2))&&(Xo.copy(r).invert(),qn.copy(t.ray).applyMatrix4(Xo),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,I=x;E<I;E+=3){const w=o.getX(E),b=o.getX(E+1),D=o.getX(E+2);i=$s(this,p,t,n,c,h,u,w,b,D),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),E=o.getX(m+2);i=$s(this,a,t,n,c,h,u,y,x,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=y,I=x;E<I;E+=3){const w=E,b=E+1,D=E+2;i=$s(this,p,t,n,c,h,u,w,b,D),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,E=m+2;i=$s(this,a,t,n,c,h,u,y,x,E),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function xu(s,t,e,n,i,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===On,o),l===null)return null;Ks.copy(o),Ks.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:s}}function $s(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,vi),s.getVertexPosition(l,Mi),s.getVertexPosition(c,Si);const h=xu(s,t,e,n,vi,Mi,Si,Ys);if(h){i&&(Ws.fromBufferAttribute(i,o),Xs.fromBufferAttribute(i,l),qs.fromBufferAttribute(i,c),h.uv=Qe.getInterpolation(Ys,vi,Mi,Si,Ws,Xs,qs,new ft)),r&&(Ws.fromBufferAttribute(r,o),Xs.fromBufferAttribute(r,l),qs.fromBufferAttribute(r,c),h.uv1=Qe.getInterpolation(Ys,vi,Mi,Si,Ws,Xs,qs,new ft)),a&&(Yo.fromBufferAttribute(a,o),Ko.fromBufferAttribute(a,l),$o.fromBufferAttribute(a,c),h.normal=Qe.getInterpolation(Ys,vi,Mi,Si,Yo,Ko,$o,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};Qe.getNormal(vi,Mi,Si,u.normal),h.face=u}return h}class oi extends Ue{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(_,m,p,y,x,E,I,w,b,D,T){const v=E/b,R=I/D,z=E/2,B=I/2,W=w/2,q=b+1,G=D+1;let $=0,H=0;const ht=new L;for(let pt=0;pt<G;pt++){const _t=pt*R-B;for(let zt=0;zt<q;zt++){const jt=zt*v-z;ht[_]=jt*y,ht[m]=_t*x,ht[p]=W,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=w>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(zt/b),u.push(1-pt/D),$+=1}}for(let pt=0;pt<D;pt++)for(let _t=0;_t<b;_t++){const zt=d+_t+q*pt,jt=d+_t+q*(pt+1),X=d+(_t+1)+q*(pt+1),J=d+(_t+1)+q*pt;l.push(zt,jt,J),l.push(jt,X,J),H+=6}o.addGroup(f,H,T),f+=H,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=Gi(s[e]);for(const i in n)t[i]=n[i]}return t}function vu(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Ms={clone:Gi,merge:Ce};var Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class De extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new L,jo=new ft,Zo=new ft;class Ge extends dc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,jo,Zo),e.subVectors(Zo,jo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const yi=-90,Ti=1;class yu extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(yi,Ti,t,e);i.layers=this.layers,this.add(i);const r=new Ge(yi,Ti,t,e);r.layers=this.layers,this.add(r);const a=new Ge(yi,Ti,t,e);a.layers=this.layers,this.add(a);const o=new Ge(yi,Ti,t,e);o.layers=this.layers,this.add(o);const l=new Ge(yi,Ti,t,e);l.layers=this.layers,this.add(l);const c=new Ge(yi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fc extends we{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tu extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new oi(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:xn});r.uniforms.tEquirect.value=e;const a=new te(i,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=Ze),new yu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Zr=new L,Eu=new L,wu=new Pt;class Ln{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Zr.subVectors(n,e).cross(Eu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Zr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wu.getNormalMatrix(t),i=this.coplanarPoint(Zr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new Es,js=new L;class Fa{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],y=i[13],x=i[14],E=i[15];if(n[0].setComponents(l-r,d-c,m-f,E-p).normalize(),n[1].setComponents(l+r,d+c,m+f,E+p).normalize(),n[2].setComponents(l+a,d+h,m+g,E+y).normalize(),n[3].setComponents(l-a,d-h,m-g,E-y).normalize(),n[4].setComponents(l-o,d-u,m-_,E-x).normalize(),e===gn)n[5].setComponents(l+o,d+u,m+_,E+x).normalize();else if(e===dr)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function bu(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,o),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Vi extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let x=0;x<c;x++){const E=x*u-r;g.push(E,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const x=y+c*p,E=y+c*(p+1),I=y+1+c*(p+1),w=y+1+c*p;f.push(x,E,w),f.push(E,I,w)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ku=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Id=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ff=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:Au,alphahash_pars_fragment:Ru,alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Du,alphatest_pars_fragment:Lu,aomap_fragment:Iu,aomap_pars_fragment:Uu,batching_pars_vertex:Nu,batching_vertex:Fu,begin_vertex:Ou,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:ku,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:qu,color_pars_fragment:Yu,color_pars_vertex:Ku,color_vertex:$u,common:ju,cube_uv_reflection_fragment:Zu,defaultnormal_vertex:Ju,displacementmap_pars_vertex:Qu,displacementmap_vertex:td,emissivemap_fragment:ed,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:ad,envmap_pars_fragment:od,envmap_pars_vertex:ld,envmap_physical_pars_fragment:vd,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:dd,fog_pars_fragment:fd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:gd,lights_lambert_pars_fragment:_d,lights_pars_begin:xd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:yd,lights_phong_pars_fragment:Td,lights_physical_fragment:Ed,lights_physical_pars_fragment:wd,lights_fragment_begin:bd,lights_fragment_maps:Ad,lights_fragment_end:Rd,logdepthbuf_fragment:Cd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ld,map_fragment:Id,map_pars_fragment:Ud,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:Bd,morphinstance_vertex:zd,morphcolor_vertex:kd,morphnormal_vertex:Hd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Vd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:Kd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Zd,clearcoat_pars_fragment:Jd,iridescence_pars_fragment:Qd,opaque_fragment:tf,packing:ef,premultiplied_alpha_fragment:nf,project_vertex:sf,dithering_fragment:rf,dithering_pars_fragment:af,roughnessmap_fragment:of,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:uf,shadowmask_pars_fragment:df,skinbase_vertex:ff,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:xf,tonemapping_fragment:vf,tonemapping_pars_fragment:Mf,transmission_fragment:Sf,transmission_pars_fragment:yf,uv_pars_fragment:Tf,uv_pars_vertex:Ef,uv_vertex:wf,worldpos_vertex:bf,background_vert:Af,background_frag:Rf,backgroundCube_vert:Cf,backgroundCube_frag:Pf,cube_vert:Df,cube_frag:Lf,depth_vert:If,depth_frag:Uf,distanceRGBA_vert:Nf,distanceRGBA_frag:Ff,equirect_vert:Of,equirect_frag:Bf,linedashed_vert:zf,linedashed_frag:kf,meshbasic_vert:Hf,meshbasic_frag:Gf,meshlambert_vert:Vf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:Kf,meshphong_vert:$f,meshphong_frag:jf,meshphysical_vert:Zf,meshphysical_frag:Jf,meshtoon_vert:Qf,meshtoon_frag:tp,points_vert:ep,points_frag:np,shadow_vert:ip,shadow_frag:sp,sprite_vert:rp,sprite_frag:ap},it={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},sn={basic:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new St(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Ce([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Ce([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new St(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Ce([it.points,it.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Ce([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Ce([it.common,it.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Ce([it.sprite,it.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Ce([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Ce([it.lights,it.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};sn.physical={uniforms:Ce([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Zs={r:0,b:0,g:0},Kn=new qe,op=new $t;function lp(s,t,e,n,i,r,a){const o=new St(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const E=g(y);E===null?p(o,l):E&&E.isColor&&(p(E,1),x=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===gr)?(h===void 0&&(h=new te(new oi(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Gi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Kn.copy(x.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(op.makeRotationFromEuler(Kn)),h.material.toneMapped=qt.getTransfer(E.colorSpace)!==ne,(u!==E||d!==E.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new te(new Vi(2,2),new De({name:"BackgroundMaterial",uniforms:Gi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=qt.getTransfer(E.colorSpace)!==ne,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Zs,uc(s)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m}}function cp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,R,z,B,W){let q=!1;const G=u(B,z,R);r!==G&&(r=G,c(r.object)),q=f(v,B,z,W),q&&g(v,B,z,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(v,R,z,B),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,R,z){const B=z.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let q=W[R.id];q===void 0&&(q={},W[R.id]=q);let G=q[B];return G===void 0&&(G=d(l()),q[B]=G),G}function d(v){const R=[],z=[],B=[];for(let W=0;W<e;W++)R[W]=0,z[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,R,z,B){const W=r.attributes,q=R.attributes;let G=0;const $=z.getAttributes();for(const H in $)if($[H].location>=0){const pt=W[H];let _t=q[H];if(_t===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(_t=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(_t=v.instanceColor)),pt===void 0||pt.attribute!==_t||_t&&pt.data!==_t.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(v,R,z,B){const W={},q=R.attributes;let G=0;const $=z.getAttributes();for(const H in $)if($[H].location>=0){let pt=q[H];pt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const _t={};_t.attribute=pt,pt&&pt.data&&(_t.data=pt.data),W[H]=_t,G++}r.attributes=W,r.attributesNum=G,r.index=B}function _(){const v=r.newAttributes;for(let R=0,z=v.length;R<z;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const z=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;z[v]=1,B[v]===0&&(s.enableVertexAttribArray(v),B[v]=1),W[v]!==R&&(s.vertexAttribDivisor(v,R),W[v]=R)}function y(){const v=r.newAttributes,R=r.enabledAttributes;for(let z=0,B=R.length;z<B;z++)R[z]!==v[z]&&(s.disableVertexAttribArray(z),R[z]=0)}function x(v,R,z,B,W,q,G){G===!0?s.vertexAttribIPointer(v,R,z,W,q):s.vertexAttribPointer(v,R,z,B,W,q)}function E(v,R,z,B){_();const W=B.attributes,q=z.getAttributes(),G=R.defaultAttributeValues;for(const $ in q){const H=q[$];if(H.location>=0){let ht=W[$];if(ht===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),ht!==void 0){const pt=ht.normalized,_t=ht.itemSize,zt=t.get(ht);if(zt===void 0)continue;const jt=zt.buffer,X=zt.type,J=zt.bytesPerElement,dt=X===s.INT||X===s.UNSIGNED_INT||ht.gpuType===jl;if(ht.isInterleavedBufferAttribute){const at=ht.data,Ut=at.stride,Dt=ht.offset;if(at.isInstancedInterleavedBuffer){for(let Ht=0;Ht<H.locationSize;Ht++)p(H.location+Ht,at.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ht=0;Ht<H.locationSize;Ht++)m(H.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let Ht=0;Ht<H.locationSize;Ht++)x(H.location+Ht,_t/H.locationSize,X,pt,Ut*J,(Dt+_t/H.locationSize*Ht)*J,dt)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<H.locationSize;at++)p(H.location+at,ht.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<H.locationSize;at++)m(H.location+at);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let at=0;at<H.locationSize;at++)x(H.location+at,_t/H.locationSize,X,pt,_t*J,_t/H.locationSize*at*J,dt)}}else if(G!==void 0){const pt=G[$];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(H.location,pt);break;case 3:s.vertexAttrib3fv(H.location,pt);break;case 4:s.vertexAttrib4fv(H.location,pt);break;default:s.vertexAttrib1fv(H.location,pt)}}}}y()}function I(){D();for(const v in n){const R=n[v];for(const z in R){const B=R[z];for(const W in B)h(B[W].object),delete B[W];delete R[z]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const z in R){const B=R[z];for(const W in B)h(B[W].object),delete B[W];delete R[z]}delete n[v.id]}function b(v){for(const R in n){const z=n[R];if(z[v.id]===void 0)continue;const B=z[v.id];for(const W in B)h(B[W].object),delete B[W];delete z[v.id]}}function D(){T(),a=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function hp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)e.update(g,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function up(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==an&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const b=w===vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Bn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mn&&!b)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:E,maxSamples:I}}function dp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Ln,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let E=p.clippingState||null;l.value=E,E=h(g,d,x,f);for(let I=0;I!==x;++I)E[I]=e[I];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=f;x!==_;++x,E+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function fp(s){let t=new WeakMap;function e(a,o){return o===_a?a.mapping=Fi:o===xa&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_a||o===xa)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Tu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Oa extends dc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Di=4,Jo=[.125,.215,.35,.446,.526,.582],ti=20,Jr=new Oa,Qo=new St;let Qr=null,ta=0,ea=0,na=!1;const Jn=(1+Math.sqrt(5))/2,Ei=1/Jn,tl=[new L(-Jn,Ei,0),new L(Jn,Ei,0),new L(-Ei,0,Jn),new L(Ei,0,Jn),new L(0,Jn,-Ei),new L(0,Jn,Ei),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class el{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Qr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qr,ta,ea),this._renderer.xr.enabled=na,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:vn,format:an,colorSpace:zn,depthBuffer:!1},i=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(r)),this._blurMaterial=mp(r,t,e)}return i}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,Jr)}_sceneToCubeUV(t,e,n,i){const o=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qo),h.toneMapping=Un,h.autoClear=!1;const f=new Zi({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new te(new oi,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Qo),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;Js(i,y*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Fi||t.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tl[(i-r-1)%tl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new te(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ti-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const p=[];let y=0;for(let b=0;b<ti;++b){const D=b/_,T=Math.exp(-D*D/2);p.push(T),b===0?y+=T:b<m&&(y+=2*T)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const E=this._sizeLods[i],I=3*E*(i>x-Di?i-x+Di:0),w=4*(this._cubeSize-E);Js(e,I,w,3*E,2*E),l.setRenderTarget(e),l.render(u,Jr)}}function pp(s){const t=[],e=[],n=[];let i=s;const r=s-Di+1+Jo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Di?l=Jo[a-s+Di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,D=w>2?0:-1,T=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];y.set(T,_*g*w),x.set(d,m*g*w);const v=[w,w,w,w,w,w];E.set(v,p*g*w)}const I=new Ue;I.setAttribute("position",new ze(y,_)),I.setAttribute("uv",new ze(x,m)),I.setAttribute("faceIndex",new ze(E,p)),t.push(I),i>Di&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nl(s,t,e){const n=new We(s,t,e);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function mp(s,t,e){const n=new Float32Array(ti),i=new L(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function il(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function sl(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ba(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_a||l===xa,h=l===Fi||l===Oi;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new el(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new el(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function _p(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ua("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xp(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,E=y.length;x<E;x+=3){const I=y[x+0],w=y[x+1],b=y[x+2];d.push(I,w,w,b,b,I)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,E=y.length/3-1;x<E;x+=3){const I=x+0,w=x+1,b=x+2;d.push(I,w,w,b,b,I)}}else return;const m=new(sc(d)?hc:cc)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function vp(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/a,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y];for(let y=0;y<_.length;y++)e.update(p,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Sp(s,t,e){const n=new WeakMap,i=new Se;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let I=o.attributes.position.count*E,w=1;I>t.maxTextureSize&&(w=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const b=new Float32Array(I*w*4*u),D=new ac(b,I,w,u);D.type=mn,D.needsUpdate=!0;const T=E*4;for(let R=0;R<u;R++){const z=p[R],B=y[R],W=x[R],q=I*w*4*R;for(let G=0;G<z.count;G++){const $=G*T;g===!0&&(i.fromBufferAttribute(z,G),b[q+$+0]=i.x,b[q+$+1]=i.y,b[q+$+2]=i.z,b[q+$+3]=0),_===!0&&(i.fromBufferAttribute(B,G),b[q+$+4]=i.x,b[q+$+5]=i.y,b[q+$+6]=i.z,b[q+$+7]=0),m===!0&&(i.fromBufferAttribute(W,G),b[q+$+8]=i.x,b[q+$+9]=i.y,b[q+$+10]=i.z,b[q+$+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new ft(I,w)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function yp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class mc extends we{constructor(t,e,n,i,r,a,o,l,c,h=Ii){if(h!==Ii&&h!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=zi),n===void 0&&h===Hi&&(n=ki),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ie,this.minFilter=l!==void 0?l:Ie,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gc=new we,_c=new mc(1,1);_c.compareFunction=ic;const xc=new ac,vc=new lu,Mc=new fc,rl=[],al=[],ol=new Float32Array(16),ll=new Float32Array(9),cl=new Float32Array(4);function Ji(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=rl[i];if(r===void 0&&(r=new Float32Array(i),rl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xr(s,t){let e=al[t];e===void 0&&(e=new Int32Array(t),al[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Tp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function Ap(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;cl.set(n),s.uniformMatrix2fv(this.addr,!1,cl),ge(e,n)}}function Rp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;ll.set(n),s.uniformMatrix3fv(this.addr,!1,ll),ge(e,n)}}function Cp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;ol.set(n),s.uniformMatrix4fv(this.addr,!1,ol),ge(e,n)}}function Pp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function Lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function Up(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function Fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function Op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function Bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?_c:gc;e.setTexture2D(t||r,i)}function zp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vc,i)}function kp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Mc,i)}function Hp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xc,i)}function Gp(s){switch(s){case 5126:return Tp;case 35664:return Ep;case 35665:return wp;case 35666:return bp;case 35674:return Ap;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Dp;case 35668:case 35672:return Lp;case 35669:case 35673:return Ip;case 5125:return Up;case 36294:return Np;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return zp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Vp(s,t){s.uniform1fv(this.addr,t)}function Wp(s,t){const e=Ji(t,this.size,2);s.uniform2fv(this.addr,e)}function Xp(s,t){const e=Ji(t,this.size,3);s.uniform3fv(this.addr,e)}function qp(s,t){const e=Ji(t,this.size,4);s.uniform4fv(this.addr,e)}function Yp(s,t){const e=Ji(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Kp(s,t){const e=Ji(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function $p(s,t){const e=Ji(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function jp(s,t){s.uniform1iv(this.addr,t)}function Zp(s,t){s.uniform2iv(this.addr,t)}function Jp(s,t){s.uniform3iv(this.addr,t)}function Qp(s,t){s.uniform4iv(this.addr,t)}function tm(s,t){s.uniform1uiv(this.addr,t)}function em(s,t){s.uniform2uiv(this.addr,t)}function nm(s,t){s.uniform3uiv(this.addr,t)}function im(s,t){s.uniform4uiv(this.addr,t)}function sm(s,t,e){const n=this.cache,i=t.length,r=xr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||gc,r[a])}function rm(s,t,e){const n=this.cache,i=t.length,r=xr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||vc,r[a])}function am(s,t,e){const n=this.cache,i=t.length,r=xr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Mc,r[a])}function om(s,t,e){const n=this.cache,i=t.length,r=xr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||xc,r[a])}function lm(s){switch(s){case 5126:return Vp;case 35664:return Wp;case 35665:return Xp;case 35666:return qp;case 35674:return Yp;case 35675:return Kp;case 35676:return $p;case 5124:case 35670:return jp;case 35667:case 35671:return Zp;case 35668:case 35672:return Jp;case 35669:case 35673:return Qp;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return om}}class cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gp(e.type)}}class hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lm(e.type)}}class um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function hl(s,t){s.seq.push(t),s.map[t.id]=t}function dm(s,t,e){const n=s.name,i=n.length;for(ia.lastIndex=0;;){const r=ia.exec(n),a=ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){hl(e,c===void 0?new cm(o,s,t):new hm(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new um(o),hl(e,u)),e=u}}}class rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);dm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ul(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const fm=37297;let pm=0;function mm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function gm(s){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(s);let n;switch(t===e?n="":t===ur&&e===hr?n="LinearDisplayP3ToLinearSRGB":t===hr&&e===ur&&(n="LinearSRGBToLinearDisplayP3"),s){case zn:case _r:return[n,"LinearTransferOETF"];case Be:case La:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function dl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+mm(s.getShaderSource(t),a)}else return i}function _m(s,t){const e=gm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function xm(s,t){let e;switch(t){case Wl:e="Linear";break;case Xl:e="Reinhard";break;case ql:e="OptimizedCineon";break;case Pa:e="ACESFilmic";break;case Yl:e="AgX";break;case Kl:e="Neutral";break;case xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Mm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function fs(s){return s!==""}function fl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sa(s){return s.replace(ym,Em)}const Tm=new Map;function Em(s,t){let e=Ct[t];if(e===void 0){const n=Tm.get(t);if(n!==void 0)e=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sa(e)}const wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ml(s){return s.replace(wm,bm)}function bm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Am(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fi:case Oi:t="ENVMAP_TYPE_CUBE";break;case gr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function Pm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ca:t="ENVMAP_BLENDING_MULTIPLY";break;case gh:t="ENVMAP_BLENDING_MIX";break;case _h:t="ENVMAP_BLENDING_ADD";break}return t}function Dm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Lm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Am(e),c=Rm(e),h=Cm(e),u=Pm(e),d=Dm(e),f=vm(e),g=Mm(r),_=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(m=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[gl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Ct.tonemapping_pars_fragment:"",e.toneMapping!==Un?xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,_m("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=Sa(a),a=fl(a,e),a=pl(a,e),o=Sa(o),o=fl(o,e),o=pl(o,e),a=ml(a),o=ml(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Do?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Do?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,E=y+p+o,I=ul(i,i.VERTEX_SHADER,x),w=ul(i,i.FRAGMENT_SHADER,E);i.attachShader(_,I),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(R){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(I).trim(),W=i.getShaderInfoLog(w).trim();let q=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,w);else{const $=dl(i,I,"vertex"),H=dl(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+$+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||W==="")&&(G=!1);G&&(R.diagnostics={runnable:q,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(I),i.deleteShader(w),D=new rr(i,_),T=Sm(i,_)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,fm)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}let Im=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nm(t),e.set(t,n)),n}}class Nm{constructor(t){this.id=Im++,this.code=t,this.usedTimes=0}}function Fm(s,t,e,n,i,r,a){const o=new Na,l=new Um,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,v,R,z,B){const W=z.fog,q=B.geometry,G=T.isMeshStandardMaterial?z.environment:null,$=(T.isMeshStandardMaterial?e:t).get(T.envMap||G),H=$&&$.mapping===gr?$.image.height:null,ht=g[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const pt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=pt!==void 0?pt.length:0;let zt=0;q.morphAttributes.position!==void 0&&(zt=1),q.morphAttributes.normal!==void 0&&(zt=2),q.morphAttributes.color!==void 0&&(zt=3);let jt,X,J,dt;if(ht){const Zt=sn[ht];jt=Zt.vertexShader,X=Zt.fragmentShader}else jt=T.vertexShader,X=T.fragmentShader,l.update(T),J=l.getVertexShaderID(T),dt=l.getFragmentShaderID(T);const at=s.getRenderTarget(),Ut=B.isInstancedMesh===!0,Dt=B.isBatchedMesh===!0,Ht=!!T.map,P=!!T.matcap,kt=!!$,Ot=!!T.aoMap,re=!!T.lightMap,Tt=!!T.bumpMap,Gt=!!T.normalMap,Nt=!!T.displacementMap,Rt=!!T.emissiveMap,ue=!!T.metalnessMap,A=!!T.roughnessMap,M=T.anisotropy>0,k=T.clearcoat>0,K=T.dispersion>0,j=T.iridescence>0,Z=T.sheen>0,Mt=T.transmission>0,st=M&&!!T.anisotropyMap,rt=k&&!!T.clearcoatMap,Lt=k&&!!T.clearcoatNormalMap,Q=k&&!!T.clearcoatRoughnessMap,xt=j&&!!T.iridescenceMap,Ft=j&&!!T.iridescenceThicknessMap,bt=Z&&!!T.sheenColorMap,ot=Z&&!!T.sheenRoughnessMap,It=!!T.specularMap,Bt=!!T.specularColorMap,ce=!!T.specularIntensityMap,C=Mt&&!!T.transmissionMap,lt=Mt&&!!T.thicknessMap,V=!!T.gradientMap,Y=!!T.alphaMap,et=T.alphaTest>0,At=!!T.alphaHash,Wt=!!T.extensions;let he=Un;T.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(he=s.toneMapping);const _e={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:jt,fragmentShader:X,defines:T.defines,customVertexShaderID:J,customFragmentShaderID:dt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&B._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&B.instanceColor!==null,instancingMorph:Ut&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:zn,alphaToCoverage:!!T.alphaToCoverage,map:Ht,matcap:P,envMap:kt,envMapMode:kt&&$.mapping,envMapCubeUVHeight:H,aoMap:Ot,lightMap:re,bumpMap:Tt,normalMap:Gt,displacementMap:d&&Nt,emissiveMap:Rt,normalMapObjectSpace:Gt&&T.normalMapType===Dh,normalMapTangentSpace:Gt&&T.normalMapType===Da,metalnessMap:ue,roughnessMap:A,anisotropy:M,anisotropyMap:st,clearcoat:k,clearcoatMap:rt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:j,iridescenceMap:xt,iridescenceThicknessMap:Ft,sheen:Z,sheenColorMap:bt,sheenRoughnessMap:ot,specularMap:It,specularColorMap:Bt,specularIntensityMap:ce,transmission:Mt,transmissionMap:C,thicknessMap:lt,gradientMap:V,opaque:T.transparent===!1&&T.blending===Li&&T.alphaToCoverage===!1,alphaMap:Y,alphaTest:et,alphaHash:At,combine:T.combine,mapUv:Ht&&_(T.map.channel),aoMapUv:Ot&&_(T.aoMap.channel),lightMapUv:re&&_(T.lightMap.channel),bumpMapUv:Tt&&_(T.bumpMap.channel),normalMapUv:Gt&&_(T.normalMap.channel),displacementMapUv:Nt&&_(T.displacementMap.channel),emissiveMapUv:Rt&&_(T.emissiveMap.channel),metalnessMapUv:ue&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:st&&_(T.anisotropyMap.channel),clearcoatMapUv:rt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:ot&&_(T.sheenRoughnessMap.channel),specularMapUv:It&&_(T.specularMap.channel),specularColorMapUv:Bt&&_(T.specularColorMap.channel),specularIntensityMapUv:ce&&_(T.specularIntensityMap.channel),transmissionMapUv:C&&_(T.transmissionMap.channel),thicknessMapUv:lt&&_(T.thicknessMap.channel),alphaMapUv:Y&&_(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Gt||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(Ht||Y),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:zt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:Ht&&T.map.isVideoTexture===!0&&qt.getTransfer(T.map.colorSpace)===ne,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pn,flipSided:T.side===Le,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Wt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Wt&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function p(T){const v=[];if(T.shaderID?v.push(T.shaderID):(v.push(T.customVertexShaderID),v.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)v.push(R),v.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(y(v,T),x(v,T),v.push(s.outputColorSpace)),v.push(T.customProgramCacheKey),v.join()}function y(T,v){T.push(v.precision),T.push(v.outputColorSpace),T.push(v.envMapMode),T.push(v.envMapCubeUVHeight),T.push(v.mapUv),T.push(v.alphaMapUv),T.push(v.lightMapUv),T.push(v.aoMapUv),T.push(v.bumpMapUv),T.push(v.normalMapUv),T.push(v.displacementMapUv),T.push(v.emissiveMapUv),T.push(v.metalnessMapUv),T.push(v.roughnessMapUv),T.push(v.anisotropyMapUv),T.push(v.clearcoatMapUv),T.push(v.clearcoatNormalMapUv),T.push(v.clearcoatRoughnessMapUv),T.push(v.iridescenceMapUv),T.push(v.iridescenceThicknessMapUv),T.push(v.sheenColorMapUv),T.push(v.sheenRoughnessMapUv),T.push(v.specularMapUv),T.push(v.specularColorMapUv),T.push(v.specularIntensityMapUv),T.push(v.transmissionMapUv),T.push(v.thicknessMapUv),T.push(v.combine),T.push(v.fogExp2),T.push(v.sizeAttenuation),T.push(v.morphTargetsCount),T.push(v.morphAttributeCount),T.push(v.numDirLights),T.push(v.numPointLights),T.push(v.numSpotLights),T.push(v.numSpotLightMaps),T.push(v.numHemiLights),T.push(v.numRectAreaLights),T.push(v.numDirLightShadows),T.push(v.numPointLightShadows),T.push(v.numSpotLightShadows),T.push(v.numSpotLightShadowsWithMaps),T.push(v.numLightProbes),T.push(v.shadowMapType),T.push(v.toneMapping),T.push(v.numClippingPlanes),T.push(v.numClipIntersection),T.push(v.depthPacking)}function x(T,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.doubleSided&&o.enable(10),v.flipSided&&o.enable(11),v.useDepthPacking&&o.enable(12),v.dithering&&o.enable(13),v.transmission&&o.enable(14),v.sheen&&o.enable(15),v.opaque&&o.enable(16),v.pointsUvs&&o.enable(17),v.decodeVideoTexture&&o.enable(18),v.alphaToCoverage&&o.enable(19),T.push(o.mask)}function E(T){const v=g[T.type];let R;if(v){const z=sn[v];R=Ms.clone(z.uniforms)}else R=T.uniforms;return R}function I(T,v){let R;for(let z=0,B=h.length;z<B;z++){const W=h[z];if(W.cacheKey===v){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Lm(s,v,T,r),h.push(R)),R}function w(T){if(--T.usedTimes===0){const v=h.indexOf(T);h[v]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:I,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:D}}function Om(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Bm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _l(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Bm),n.length>1&&n.sort(d||_l),i.length>1&&i.sort(d||_l)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function zm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new xl,s.set(n,[a])):i>=r.length?(a=new xl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function km(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new St};break;case"SpotLight":e={position:new L,direction:new L,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Hm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Gm=0;function Vm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wm(s){const t=new km,e=Hm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new $t,a=new $t;function o(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,E=0,I=0,w=0,b=0;c.sort(Vm);for(let T=0,v=c.length;T<v;T++){const R=c[T],z=R.color,B=R.intensity,W=R.distance,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*B,u+=z.g*B,d+=z.b*B;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],B);b++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,H=e.get(R);H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=G,f++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(z).multiplyScalar(B),G.distance=W,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[_]=G;const $=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,$.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=$.matrix,R.castShadow){const H=e.get(R);H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,E++}_++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(z).multiplyScalar(B),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const $=R.shadow,H=e.get(R);H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(B),G.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==x||D.numSpotShadows!==E||D.numSpotMaps!==I||D.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=x,D.numSpotShadows=E,D.numSpotMaps=I,D.numLightProbes=b,n.version=Gm++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const x=c[p];if(x.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),u++}else if(x.isSpotLight){const E=n.spot[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function vl(s){const t=new Wm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Xm(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new vl(s),t.set(i,[o])):r>=a.length?(o=new vl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class qm extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ym extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jm(s,t,e){let n=new Fa;const i=new ft,r=new ft,a=new Se,o=new qm({depthPacking:Ph}),l=new Ym,c={},h=e.maxTextureSize,u={[On]:Le,[Le]:On,[pn]:pn},d=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Km,fragmentShader:$m}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let p=this.type;this.render=function(w,b,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),z=s.state;z.setBlending(xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==fn&&this.type===fn,W=p===fn&&this.type!==fn;for(let q=0,G=w.length;q<G;q++){const $=w[q],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ht=H.getFrameExtents();if(i.multiply(ht),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ht.x),i.x=r.x*ht.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ht.y),i.y=r.y*ht.y,H.mapSize.y=r.y)),H.map===null||B===!0||W===!0){const _t=this.type!==fn?{minFilter:Ie,magFilter:Ie}:{};H.map!==null&&H.map.dispose(),H.map=new We(i.x,i.y,_t),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const pt=H.getViewportCount();for(let _t=0;_t<pt;_t++){const zt=H.getViewport(_t);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),z.viewport(a),H.updateMatrices($,_t),n=H.getFrustum(),E(b,D,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===fn&&y(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,v,R)};function y(w,b){const D=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new We(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,D,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,D,f,_,null)}function x(w,b,D,T){let v=null;const R=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)v=R;else if(v=D.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=v.uuid,B=b.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let q=W[B];q===void 0&&(q=v.clone(),W[B]=q,b.addEventListener("dispose",I)),v=q}if(v.visible=b.visible,v.wireframe=b.wireframe,T===fn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:u[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=s.properties.get(v);z.light=D}return v}function E(w,b,D,T,v){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===fn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const B=t.update(w),W=w.material;if(Array.isArray(W)){const q=B.groups;for(let G=0,$=q.length;G<$;G++){const H=q[G],ht=W[H.materialIndex];if(ht&&ht.visible){const pt=x(w,ht,T,v);w.onBeforeShadow(s,w,b,D,B,pt,H),s.renderBufferDirect(D,null,B,pt,w,H),w.onAfterShadow(s,w,b,D,B,pt,H)}}}else if(W.visible){const q=x(w,W,T,v);w.onBeforeShadow(s,w,b,D,B,q,null),s.renderBufferDirect(D,null,B,q,w,null),w.onAfterShadow(s,w,b,D,B,q,null)}}const z=w.children;for(let B=0,W=z.length;B<W;B++)E(z[B],b,D,T,v)}function I(w){w.target.removeEventListener("dispose",I);for(const D in c){const T=c[D],v=w.target.uuid;v in T&&(T[v].dispose(),delete T[v])}}}function Zm(s){function t(){let C=!1;const lt=new Se;let V=null;const Y=new Se(0,0,0,0);return{setMask:function(et){V!==et&&!C&&(s.colorMask(et,et,et,et),V=et)},setLocked:function(et){C=et},setClear:function(et,At,Wt,he,_e){_e===!0&&(et*=he,At*=he,Wt*=he),lt.set(et,At,Wt,he),Y.equals(lt)===!1&&(s.clearColor(et,At,Wt,he),Y.copy(lt))},reset:function(){C=!1,V=null,Y.set(-1,0,0,0)}}}function e(){let C=!1,lt=null,V=null,Y=null;return{setTest:function(et){et?dt(s.DEPTH_TEST):at(s.DEPTH_TEST)},setMask:function(et){lt!==et&&!C&&(s.depthMask(et),lt=et)},setFunc:function(et){if(V!==et){switch(et){case ch:s.depthFunc(s.NEVER);break;case hh:s.depthFunc(s.ALWAYS);break;case uh:s.depthFunc(s.LESS);break;case or:s.depthFunc(s.LEQUAL);break;case dh:s.depthFunc(s.EQUAL);break;case fh:s.depthFunc(s.GEQUAL);break;case ph:s.depthFunc(s.GREATER);break;case mh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}V=et}},setLocked:function(et){C=et},setClear:function(et){Y!==et&&(s.clearDepth(et),Y=et)},reset:function(){C=!1,lt=null,V=null,Y=null}}}function n(){let C=!1,lt=null,V=null,Y=null,et=null,At=null,Wt=null,he=null,_e=null;return{setTest:function(Zt){C||(Zt?dt(s.STENCIL_TEST):at(s.STENCIL_TEST))},setMask:function(Zt){lt!==Zt&&!C&&(s.stencilMask(Zt),lt=Zt)},setFunc:function(Zt,en,nn){(V!==Zt||Y!==en||et!==nn)&&(s.stencilFunc(Zt,en,nn),V=Zt,Y=en,et=nn)},setOp:function(Zt,en,nn){(At!==Zt||Wt!==en||he!==nn)&&(s.stencilOp(Zt,en,nn),At=Zt,Wt=en,he=nn)},setLocked:function(Zt){C=Zt},setClear:function(Zt){_e!==Zt&&(s.clearStencil(Zt),_e=Zt)},reset:function(){C=!1,lt=null,V=null,Y=null,et=null,At=null,Wt=null,he=null,_e=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,y=null,x=null,E=null,I=null,w=new St(0,0,0),b=0,D=!1,T=null,v=null,R=null,z=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),q=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=G>=2);let H=null,ht={};const pt=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),zt=new Se().fromArray(pt),jt=new Se().fromArray(_t);function X(C,lt,V,Y){const et=new Uint8Array(4),At=s.createTexture();s.bindTexture(C,At),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<V;Wt++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,et):s.texImage2D(lt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,et);return At}const J={};J[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),r.setFunc(or),Tt(!1),Gt(to),dt(s.CULL_FACE),Ot(xn);function dt(C){c[C]!==!0&&(s.enable(C),c[C]=!0)}function at(C){c[C]!==!1&&(s.disable(C),c[C]=!1)}function Ut(C,lt){return h[C]!==lt?(s.bindFramebuffer(C,lt),h[C]=lt,C===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=lt),C===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Dt(C,lt){let V=d,Y=!1;if(C){V=u.get(lt),V===void 0&&(V=[],u.set(lt,V));const et=C.textures;if(V.length!==et.length||V[0]!==s.COLOR_ATTACHMENT0){for(let At=0,Wt=et.length;At<Wt;At++)V[At]=s.COLOR_ATTACHMENT0+At;V.length=et.length,Y=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,Y=!0);Y&&s.drawBuffers(V)}function Ht(C){return f!==C?(s.useProgram(C),f=C,!0):!1}const P={[Qn]:s.FUNC_ADD,[qc]:s.FUNC_SUBTRACT,[Yc]:s.FUNC_REVERSE_SUBTRACT};P[Kc]=s.MIN,P[$c]=s.MAX;const kt={[jc]:s.ZERO,[Zc]:s.ONE,[Jc]:s.SRC_COLOR,[ma]:s.SRC_ALPHA,[sh]:s.SRC_ALPHA_SATURATE,[nh]:s.DST_COLOR,[th]:s.DST_ALPHA,[Qc]:s.ONE_MINUS_SRC_COLOR,[ga]:s.ONE_MINUS_SRC_ALPHA,[ih]:s.ONE_MINUS_DST_COLOR,[eh]:s.ONE_MINUS_DST_ALPHA,[rh]:s.CONSTANT_COLOR,[ah]:s.ONE_MINUS_CONSTANT_COLOR,[oh]:s.CONSTANT_ALPHA,[lh]:s.ONE_MINUS_CONSTANT_ALPHA};function Ot(C,lt,V,Y,et,At,Wt,he,_e,Zt){if(C===xn){g===!0&&(at(s.BLEND),g=!1);return}if(g===!1&&(dt(s.BLEND),g=!0),C!==Xc){if(C!==_||Zt!==D){if((m!==Qn||x!==Qn)&&(s.blendEquation(s.FUNC_ADD),m=Qn,x=Qn),Zt)switch(C){case Li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pa:s.blendFunc(s.ONE,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case no:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case eo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case no:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}p=null,y=null,E=null,I=null,w.set(0,0,0),b=0,_=C,D=Zt}return}et=et||lt,At=At||V,Wt=Wt||Y,(lt!==m||et!==x)&&(s.blendEquationSeparate(P[lt],P[et]),m=lt,x=et),(V!==p||Y!==y||At!==E||Wt!==I)&&(s.blendFuncSeparate(kt[V],kt[Y],kt[At],kt[Wt]),p=V,y=Y,E=At,I=Wt),(he.equals(w)===!1||_e!==b)&&(s.blendColor(he.r,he.g,he.b,_e),w.copy(he),b=_e),_=C,D=!1}function re(C,lt){C.side===pn?at(s.CULL_FACE):dt(s.CULL_FACE);let V=C.side===Le;lt&&(V=!V),Tt(V),C.blending===Li&&C.transparent===!1?Ot(xn):Ot(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),i.setMask(C.colorWrite);const Y=C.stencilWrite;a.setTest(Y),Y&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Rt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):at(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(C){T!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),T=C)}function Gt(C){C!==Vc?(dt(s.CULL_FACE),C!==v&&(C===to?s.cullFace(s.BACK):C===Wc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):at(s.CULL_FACE),v=C}function Nt(C){C!==R&&(q&&s.lineWidth(C),R=C)}function Rt(C,lt,V){C?(dt(s.POLYGON_OFFSET_FILL),(z!==lt||B!==V)&&(s.polygonOffset(lt,V),z=lt,B=V)):at(s.POLYGON_OFFSET_FILL)}function ue(C){C?dt(s.SCISSOR_TEST):at(s.SCISSOR_TEST)}function A(C){C===void 0&&(C=s.TEXTURE0+W-1),H!==C&&(s.activeTexture(C),H=C)}function M(C,lt,V){V===void 0&&(H===null?V=s.TEXTURE0+W-1:V=H);let Y=ht[V];Y===void 0&&(Y={type:void 0,texture:void 0},ht[V]=Y),(Y.type!==C||Y.texture!==lt)&&(H!==V&&(s.activeTexture(V),H=V),s.bindTexture(C,lt||J[C]),Y.type=C,Y.texture=lt)}function k(){const C=ht[H];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Lt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ft(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(C){zt.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),zt.copy(C))}function ot(C){jt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),jt.copy(C))}function It(C,lt){let V=l.get(lt);V===void 0&&(V=new WeakMap,l.set(lt,V));let Y=V.get(C);Y===void 0&&(Y=s.getUniformBlockIndex(lt,C.name),V.set(C,Y))}function Bt(C,lt){const Y=l.get(lt).get(C);o.get(lt)!==Y&&(s.uniformBlockBinding(lt,Y,C.__bindingPointIndex),o.set(lt,Y))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},H=null,ht={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,y=null,x=null,E=null,I=null,w=new St(0,0,0),b=0,D=!1,T=null,v=null,R=null,z=null,B=null,zt.set(0,0,s.canvas.width,s.canvas.height),jt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:dt,disable:at,bindFramebuffer:Ut,drawBuffers:Dt,useProgram:Ht,setBlending:Ot,setMaterial:re,setFlipSided:Tt,setCullFace:Gt,setLineWidth:Nt,setPolygonOffset:Rt,setScissorTest:ue,activeTexture:A,bindTexture:M,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:xt,texImage3D:Ft,updateUBOMapping:It,uniformBlockBinding:Bt,texStorage2D:Lt,texStorage3D:Q,texSubImage2D:Z,texSubImage3D:Mt,compressedTexSubImage2D:st,compressedTexSubImage3D:rt,scissor:bt,viewport:ot,reset:ce}}function Jm(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):fr("canvas")}function _(A,M,k){let K=1;const j=ue(A);if((j.width>k||j.height>k)&&(K=k/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(K*j.width),Mt=Math.floor(K*j.height);u===void 0&&(u=g(Z,Mt));const st=M?g(Z,Mt):u;return st.width=Z,st.height=Mt,st.getContext("2d").drawImage(A,0,0,Z,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+Mt+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Ie&&A.minFilter!==Ze}function p(A){s.generateMipmap(A)}function y(A,M,k,K,j=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=M;if(M===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),M===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),M===s.RGBA){const Mt=j?cr:qt.getTransfer(K);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=Mt===ne?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(A,M){let k;return A?M===null||M===zi||M===ki?k=s.DEPTH24_STENCIL8:M===mn?k=s.DEPTH32F_STENCIL8:M===lr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zi||M===ki?k=s.DEPTH_COMPONENT24:M===mn?k=s.DEPTH_COMPONENT32F:M===lr&&(k=s.DEPTH_COMPONENT16),k}function E(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ie&&A.minFilter!==Ze?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function I(A){const M=A.target;M.removeEventListener("dispose",I),b(M),M.isVideoTexture&&h.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),T(M)}function b(A){const M=n.get(A);if(M.__webglInit===void 0)return;const k=A.source,K=d.get(k);if(K){const j=K[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&D(A),Object.keys(K).length===0&&d.delete(k)}n.remove(A)}function D(A){const M=n.get(A);s.deleteTexture(M.__webglTexture);const k=A.source,K=d.get(k);delete K[M.__cacheKey],a.memory.textures--}function T(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let j=0;j<M.__webglFramebuffer[K].length;j++)s.deleteFramebuffer(M.__webglFramebuffer[K][j]);else s.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)s.deleteFramebuffer(M.__webglFramebuffer[K]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=A.textures;for(let K=0,j=k.length;K<j;K++){const Z=n.get(k[K]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(A)}let v=0;function R(){v=0}function z(){const A=v;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),v+=1,A}function B(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const k=n.get(A);if(A.isVideoTexture&&Nt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{jt(k,A,M);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function q(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){jt(k,A,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function G(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){jt(k,A,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function $(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){X(k,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const H={[Bi]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},ht={[Ie]:s.NEAREST,[vh]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[Ze]:s.LINEAR,[Ar]:s.LINEAR_MIPMAP_NEAREST,[ni]:s.LINEAR_MIPMAP_LINEAR},pt={[Lh]:s.NEVER,[Bh]:s.ALWAYS,[Ih]:s.LESS,[ic]:s.LEQUAL,[Uh]:s.EQUAL,[Oh]:s.GEQUAL,[Nh]:s.GREATER,[Fh]:s.NOTEQUAL};function _t(A,M){if(M.type===mn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ze||M.magFilter===Ar||M.magFilter===Ds||M.magFilter===ni||M.minFilter===Ze||M.minFilter===Ar||M.minFilter===Ds||M.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,H[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,H[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,H[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ht[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ht[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ie||M.minFilter!==Ds&&M.minFilter!==ni||M.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function zt(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",I));const K=M.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const Z=B(M);if(Z!==A.__cacheKey){j[Z]===void 0&&(j[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[Z].usedTimes++;const Mt=j[A.__cacheKey];Mt!==void 0&&(j[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&D(M)),A.__cacheKey=Z,A.__webglTexture=j[Z].texture}return k}function jt(A,M,k){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);const j=zt(A,M),Z=M.source;e.bindTexture(K,A.__webglTexture,s.TEXTURE0+k);const Mt=n.get(Z);if(Z.version!==Mt.__version||j===!0){e.activeTexture(s.TEXTURE0+k);const st=qt.getPrimaries(qt.workingColorSpace),rt=M.colorSpace===In?null:qt.getPrimaries(M.colorSpace),Lt=M.colorSpace===In||st===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Q=_(M.image,!1,i.maxTextureSize);Q=Rt(M,Q);const xt=r.convert(M.format,M.colorSpace),Ft=r.convert(M.type);let bt=y(M.internalFormat,xt,Ft,M.colorSpace,M.isVideoTexture);_t(K,M);let ot;const It=M.mipmaps,Bt=M.isVideoTexture!==!0,ce=Mt.__version===void 0||j===!0,C=Z.dataReady,lt=E(M,Q);if(M.isDepthTexture)bt=x(M.format===Hi,M.type),ce&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,bt,Q.width,Q.height,0,xt,Ft,null));else if(M.isDataTexture)if(It.length>0){Bt&&ce&&e.texStorage2D(s.TEXTURE_2D,lt,bt,It[0].width,It[0].height);for(let V=0,Y=It.length;V<Y;V++)ot=It[V],Bt?C&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ot.width,ot.height,xt,Ft,ot.data):e.texImage2D(s.TEXTURE_2D,V,bt,ot.width,ot.height,0,xt,Ft,ot.data);M.generateMipmaps=!1}else Bt?(ce&&e.texStorage2D(s.TEXTURE_2D,lt,bt,Q.width,Q.height),C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,xt,Ft,Q.data)):e.texImage2D(s.TEXTURE_2D,0,bt,Q.width,Q.height,0,xt,Ft,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Bt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,bt,It[0].width,It[0].height,Q.depth);for(let V=0,Y=It.length;V<Y;V++)if(ot=It[V],M.format!==an)if(xt!==null)if(Bt){if(C)if(M.layerUpdates.size>0){for(const et of M.layerUpdates){const At=ot.width*ot.height;e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,et,ot.width,ot.height,1,xt,ot.data.slice(At*et,At*(et+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,ot.width,ot.height,Q.depth,xt,ot.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,bt,ot.width,ot.height,Q.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?C&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,ot.width,ot.height,Q.depth,xt,Ft,ot.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,bt,ot.width,ot.height,Q.depth,0,xt,Ft,ot.data)}else{Bt&&ce&&e.texStorage2D(s.TEXTURE_2D,lt,bt,It[0].width,It[0].height);for(let V=0,Y=It.length;V<Y;V++)ot=It[V],M.format!==an?xt!==null?Bt?C&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,ot.width,ot.height,xt,ot.data):e.compressedTexImage2D(s.TEXTURE_2D,V,bt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?C&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,ot.width,ot.height,xt,Ft,ot.data):e.texImage2D(s.TEXTURE_2D,V,bt,ot.width,ot.height,0,xt,Ft,ot.data)}else if(M.isDataArrayTexture)if(Bt){if(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,bt,Q.width,Q.height,Q.depth),C)if(M.layerUpdates.size>0){let V;switch(Ft){case s.UNSIGNED_BYTE:switch(xt){case s.ALPHA:V=1;break;case s.LUMINANCE:V=1;break;case s.LUMINANCE_ALPHA:V=2;break;case s.RGB:V=3;break;case s.RGBA:V=4;break;default:throw new Error(`Unknown texel size for format ${xt}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:V=1;break;default:throw new Error(`Unknown texel size for type ${Ft}.`)}const Y=Q.width*Q.height*V;for(const et of M.layerUpdates)e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,Q.width,Q.height,1,xt,Ft,Q.data.slice(Y*et,Y*(et+1)));M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xt,Ft,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,xt,Ft,Q.data);else if(M.isData3DTexture)Bt?(ce&&e.texStorage3D(s.TEXTURE_3D,lt,bt,Q.width,Q.height,Q.depth),C&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xt,Ft,Q.data)):e.texImage3D(s.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,xt,Ft,Q.data);else if(M.isFramebufferTexture){if(ce)if(Bt)e.texStorage2D(s.TEXTURE_2D,lt,bt,Q.width,Q.height);else{let V=Q.width,Y=Q.height;for(let et=0;et<lt;et++)e.texImage2D(s.TEXTURE_2D,et,bt,V,Y,0,xt,Ft,null),V>>=1,Y>>=1}}else if(It.length>0){if(Bt&&ce){const V=ue(It[0]);e.texStorage2D(s.TEXTURE_2D,lt,bt,V.width,V.height)}for(let V=0,Y=It.length;V<Y;V++)ot=It[V],Bt?C&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,xt,Ft,ot):e.texImage2D(s.TEXTURE_2D,V,bt,xt,Ft,ot);M.generateMipmaps=!1}else if(Bt){if(ce){const V=ue(Q);e.texStorage2D(s.TEXTURE_2D,lt,bt,V.width,V.height)}C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Ft,Q)}else e.texImage2D(s.TEXTURE_2D,0,bt,xt,Ft,Q);m(M)&&p(K),Mt.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function X(A,M,k){if(M.image.length!==6)return;const K=zt(A,M),j=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+k);const Z=n.get(j);if(j.version!==Z.__version||K===!0){e.activeTexture(s.TEXTURE0+k);const Mt=qt.getPrimaries(qt.workingColorSpace),st=M.colorSpace===In?null:qt.getPrimaries(M.colorSpace),rt=M.colorSpace===In||Mt===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let Y=0;Y<6;Y++)!Lt&&!Q?xt[Y]=_(M.image[Y],!0,i.maxCubemapSize):xt[Y]=Q?M.image[Y].image:M.image[Y],xt[Y]=Rt(M,xt[Y]);const Ft=xt[0],bt=r.convert(M.format,M.colorSpace),ot=r.convert(M.type),It=y(M.internalFormat,bt,ot,M.colorSpace),Bt=M.isVideoTexture!==!0,ce=Z.__version===void 0||K===!0,C=j.dataReady;let lt=E(M,Ft);_t(s.TEXTURE_CUBE_MAP,M);let V;if(Lt){Bt&&ce&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,It,Ft.width,Ft.height);for(let Y=0;Y<6;Y++){V=xt[Y].mipmaps;for(let et=0;et<V.length;et++){const At=V[et];M.format!==an?bt!==null?Bt?C&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,0,0,At.width,At.height,bt,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,It,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,0,0,At.width,At.height,bt,ot,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,It,At.width,At.height,0,bt,ot,At.data)}}}else{if(V=M.mipmaps,Bt&&ce){V.length>0&&lt++;const Y=ue(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,It,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xt[Y].width,xt[Y].height,bt,ot,xt[Y].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,It,xt[Y].width,xt[Y].height,0,bt,ot,xt[Y].data);for(let et=0;et<V.length;et++){const Wt=V[et].image[Y].image;Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,0,0,Wt.width,Wt.height,bt,ot,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,It,Wt.width,Wt.height,0,bt,ot,Wt.data)}}else{Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,bt,ot,xt[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,It,bt,ot,xt[Y]);for(let et=0;et<V.length;et++){const At=V[et];Bt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,0,0,bt,ot,At.image[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,It,bt,ot,At.image[Y])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),Z.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function J(A,M,k,K,j,Z){const Mt=r.convert(k.format,k.colorSpace),st=r.convert(k.type),rt=y(k.internalFormat,Mt,st,k.colorSpace);if(!n.get(M).__hasExternalTextures){const Q=Math.max(1,M.width>>Z),xt=Math.max(1,M.height>>Z);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,rt,Q,xt,M.depth,0,Mt,st,null):e.texImage2D(j,Z,rt,Q,xt,0,Mt,st,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Gt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,j,n.get(k).__webglTexture,0,Tt(M)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,j,n.get(k).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(A,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){const K=M.depthTexture,j=K&&K.isDepthTexture?K.type:null,Z=x(M.stencilBuffer,j),Mt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=Tt(M);Gt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,Z,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,Z,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,A)}else{const K=M.textures;for(let j=0;j<K.length;j++){const Z=K[j],Mt=r.convert(Z.format,Z.colorSpace),st=r.convert(Z.type),rt=y(Z.internalFormat,Mt,st,Z.colorSpace),Lt=Tt(M);k&&Gt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,rt,M.width,M.height):Gt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,rt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,rt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,j=Tt(M);if(M.depthTexture.format===Ii)Gt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===Hi)Gt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ut(A){const M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");at(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=s.createRenderbuffer(),dt(M.__webglDepthbuffer[K],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),dt(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(A,M,k){const K=n.get(A);M!==void 0&&J(K.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ut(A)}function Ht(A){const M=A.texture,k=n.get(A),K=n.get(M);A.addEventListener("dispose",w);const j=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,a.memory.textures++),Z){k.__webglFramebuffer=[];for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[st]=[];for(let rt=0;rt<M.mipmaps.length;rt++)k.__webglFramebuffer[st][rt]=s.createFramebuffer()}else k.__webglFramebuffer[st]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let st=0;st<M.mipmaps.length;st++)k.__webglFramebuffer[st]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let st=0,rt=j.length;st<rt;st++){const Lt=n.get(j[st]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Gt(A)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){const rt=j[st];k.__webglColorRenderbuffer[st]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[st]);const Lt=r.convert(rt.format,rt.colorSpace),Q=r.convert(rt.type),xt=y(rt.internalFormat,Lt,Q,rt.colorSpace,A.isXRRenderTarget===!0),Ft=Tt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,xt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,k.__webglColorRenderbuffer[st])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),_t(s.TEXTURE_CUBE_MAP,M);for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0)for(let rt=0;rt<M.mipmaps.length;rt++)J(k.__webglFramebuffer[st][rt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,rt);else J(k.__webglFramebuffer[st],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let st=0,rt=j.length;st<rt;st++){const Lt=j[st],Q=n.get(Lt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),_t(s.TEXTURE_2D,Lt),J(k.__webglFramebuffer,A,Lt,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,0),m(Lt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let st=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,K.__webglTexture),_t(st,M),M.mipmaps&&M.mipmaps.length>0)for(let rt=0;rt<M.mipmaps.length;rt++)J(k.__webglFramebuffer[rt],A,M,s.COLOR_ATTACHMENT0,st,rt);else J(k.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,st,0);m(M)&&p(st),e.unbindTexture()}A.depthBuffer&&Ut(A)}function P(A){const M=A.textures;for(let k=0,K=M.length;k<K;k++){const j=M[k];if(m(j)){const Z=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Mt=n.get(j).__webglTexture;e.bindTexture(Z,Mt),p(Z),e.unbindTexture()}}}const kt=[],Ot=[];function re(A){if(A.samples>0){if(Gt(A)===!1){const M=A.textures,k=A.width,K=A.height;let j=s.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(A),st=M.length>1;if(st)for(let rt=0;rt<M.length;rt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let rt=0;rt<M.length;rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),st){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[rt]);const Lt=n.get(M[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Lt,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,j,s.NEAREST),l===!0&&(kt.length=0,Ot.length=0,kt.push(s.COLOR_ATTACHMENT0+rt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(kt.push(Z),Ot.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),st)for(let rt=0;rt<M.length;rt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[rt]);const Lt=n.get(M[rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,Lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Tt(A){return Math.min(i.maxSamples,A.samples)}function Gt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Nt(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Rt(A,M){const k=A.colorSpace,K=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==zn&&k!==In&&(qt.getTransfer(k)===ne?(K!==an||j!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=Dt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Gt}function Qm(s,t){function e(n,i=In){let r;const a=qt.getTransfer(i);if(n===Bn)return s.UNSIGNED_BYTE;if(n===Zl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return s.BYTE;if(n===Sh)return s.SHORT;if(n===lr)return s.UNSIGNED_SHORT;if(n===jl)return s.INT;if(n===zi)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===vn)return s.HALF_FLOAT;if(n===Th)return s.ALPHA;if(n===Eh)return s.RGB;if(n===an)return s.RGBA;if(n===wh)return s.LUMINANCE;if(n===bh)return s.LUMINANCE_ALPHA;if(n===Ii)return s.DEPTH_COMPONENT;if(n===Hi)return s.DEPTH_STENCIL;if(n===Ql)return s.RED;if(n===tc)return s.RED_INTEGER;if(n===Ah)return s.RG;if(n===ec)return s.RG_INTEGER;if(n===nc)return s.RGBA_INTEGER;if(n===Rr||n===Cr||n===Pr||n===Dr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===io||n===so||n===ro||n===ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===lo)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===co)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===Mo||n===So||n===yo||n===To||n===Eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ho)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===po)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===wo||n===bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Lr)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Ao||n===Ro||n===Co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class tg extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Vt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new De({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class rg extends $i{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new sg,m=e.getContextAttributes();let p=null,y=null;const x=[],E=[],I=new ft;let w=null;const b=new Ge;b.layers.enable(1),b.viewport=new Se;const D=new Ge;D.layers.enable(2),D.viewport=new Se;const T=[b,D],v=new tg;v.layers.enable(1),v.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=x[X];return J===void 0&&(J=new sa,x[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=x[X];return J===void 0&&(J=new sa,x[X]=J),J.getGripSpace()},this.getHand=function(X){let J=x[X];return J===void 0&&(J=new sa,x[X]=J),J.getHandSpace()};function B(X){const J=E.indexOf(X.inputSource);if(J===-1)return;const dt=x[J];dt!==void 0&&(dt.update(X.inputSource,X.frame,c||a),dt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let X=0;X<x.length;X++){const J=E[X];J!==null&&(E[X]=null,x[X].disconnect(J))}R=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new We(f.framebufferWidth,f.framebufferHeight,{format:an,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,dt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Hi:Ii,dt=m.stencil?ki:zi);const Ut={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Ut),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new We(d.textureWidth,d.textureHeight,{format:an,type:Bn,depthTexture:new mc(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),jt.setContext(i),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(X){for(let J=0;J<X.removed.length;J++){const dt=X.removed[J],at=E.indexOf(dt);at>=0&&(E[at]=null,x[at].disconnect(dt))}for(let J=0;J<X.added.length;J++){const dt=X.added[J];let at=E.indexOf(dt);if(at===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=E.length){E.push(dt),at=Dt;break}else if(E[Dt]===null){E[Dt]=dt,at=Dt;break}if(at===-1)break}const Ut=x[at];Ut&&Ut.connect(dt)}}const G=new L,$=new L;function H(X,J,dt){G.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(dt.matrixWorld);const at=G.distanceTo($),Ut=J.projectionMatrix.elements,Dt=dt.projectionMatrix.elements,Ht=Ut[14]/(Ut[10]-1),P=Ut[14]/(Ut[10]+1),kt=(Ut[9]+1)/Ut[5],Ot=(Ut[9]-1)/Ut[5],re=(Ut[8]-1)/Ut[0],Tt=(Dt[8]+1)/Dt[0],Gt=Ht*re,Nt=Ht*Tt,Rt=at/(-re+Tt),ue=Rt*-re;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ue),X.translateZ(Rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=Ht+Rt,M=P+Rt,k=Gt-ue,K=Nt+(at-ue),j=kt*P/M*A,Z=Ot*P/M*A;X.projectionMatrix.makePerspective(k,K,j,Z,A,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function ht(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),v.near=D.near=b.near=X.near,v.far=D.far=b.far=X.far,(R!==v.near||z!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,z=v.far,b.near=R,b.far=z,D.near=R,D.far=z,b.updateProjectionMatrix(),D.updateProjectionMatrix(),X.updateProjectionMatrix());const J=X.parent,dt=v.cameras;ht(v,J);for(let at=0;at<dt.length;at++)ht(dt[at],J);dt.length===2?H(v,b,D):v.projectionMatrix.copy(b.projectionMatrix),pt(X,v,J)};function pt(X,J,dt){dt===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(dt.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=vs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let _t=null;function zt(X,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let at=!1;dt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Dt=0;Dt<dt.length;Dt++){const Ht=dt[Dt];let P=null;if(f!==null)P=f.getViewport(Ht);else{const Ot=u.getViewSubImage(d,Ht);P=Ot.viewport,Dt===0&&(t.setRenderTargetTextures(y,Ot.colorTexture,d.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(y))}let kt=T[Dt];kt===void 0&&(kt=new Ge,kt.layers.enable(Dt),kt.viewport=new Se,T[Dt]=kt),kt.matrix.fromArray(Ht.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Ht.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(P.x,P.y,P.width,P.height),Dt===0&&(v.matrix.copy(kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(kt)}const Ut=i.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Dt=u.getDepthInformation(dt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,i.renderState)}}for(let dt=0;dt<x.length;dt++){const at=E[dt],Ut=x[dt];at!==null&&Ut!==void 0&&Ut.update(at,J,c||a)}_t&&_t(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const jt=new pc;jt.setAnimationLoop(zt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}}const $n=new qe,ag=new $t;function og(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,E=y.envMapRotation;x&&(m.envMap.value=x,$n.copy(E),$n.x*=-1,$n.y*=-1,$n.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),m.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler($n)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lg(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const E=x.program;n.uniformBlockBinding(y,E)}function c(y,x){let E=i[y.id];E===void 0&&(g(y),E=h(y),i[y.id]=E,y.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(y,I);const w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){const x=u();y.__bindingPointIndex=x;const E=s.createBuffer(),I=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,I,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],E=y.uniforms,I=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let w=0,b=E.length;w<b;w++){const D=Array.isArray(E[w])?E[w]:[E[w]];for(let T=0,v=D.length;T<v;T++){const R=D[T];if(f(R,w,T,I)===!0){const z=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let q=0;q<B.length;q++){const G=B[q],$=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,z+W,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,E,I){const w=y.value,b=x+"_"+E;if(I[b]===void 0)return typeof w=="number"||typeof w=="boolean"?I[b]=w:I[b]=w.clone(),!0;{const D=I[b];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return I[b]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(y){const x=y.uniforms;let E=0;const I=16;for(let b=0,D=x.length;b<D;b++){const T=Array.isArray(x[b])?x[b]:[x[b]];for(let v=0,R=T.length;v<R;v++){const z=T[v],B=Array.isArray(z.value)?z.value:[z.value];for(let W=0,q=B.length;W<q;W++){const G=B[W],$=_(G),H=E%I;H!==0&&I-H<$.boundary&&(E+=I-H),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=$.storage}}}const w=E%I;return w>0&&(E+=I-w),y.__size=E,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class cg{constructor(t={}){const{canvas:e=eu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Un,this.toneMappingExposure=1;const x=this;let E=!1,I=0,w=0,b=null,D=-1,T=null;const v=new Se,R=new Se;let z=null;const B=new St(0);let W=0,q=e.width,G=e.height,$=1,H=null,ht=null;const pt=new Se(0,0,q,G),_t=new Se(0,0,q,G);let zt=!1;const jt=new Fa;let X=!1,J=!1;const dt=new $t,at=new L,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Ht(){return b===null?$:1}let P=n;function kt(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ra}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",V,!1),e.addEventListener("webglcontextcreationerror",Y,!1),P===null){const U="webgl2";if(P=kt(U,S),P===null)throw kt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ot,re,Tt,Gt,Nt,Rt,ue,A,M,k,K,j,Z,Mt,st,rt,Lt,Q,xt,Ft,bt,ot,It,Bt;function ce(){Ot=new _p(P),Ot.init(),ot=new Qm(P,Ot),re=new up(P,Ot,t,ot),Tt=new Zm(P),Gt=new Mp(P),Nt=new Om,Rt=new Jm(P,Ot,Tt,Nt,re,ot,Gt),ue=new fp(x),A=new gp(x),M=new bu(P),It=new cp(P,M),k=new xp(P,M,Gt,It),K=new yp(P,k,M,Gt),xt=new Sp(P,re,Rt),rt=new dp(Nt),j=new Fm(x,ue,A,Ot,re,It,rt),Z=new og(x,Nt),Mt=new zm,st=new Xm(Ot),Q=new lp(x,ue,A,Tt,K,d,l),Lt=new jm(x,K,re),Bt=new lg(P,Gt,re,Tt),Ft=new hp(P,Ot,Gt),bt=new vp(P,Ot,Gt),Gt.programs=j.programs,x.capabilities=re,x.extensions=Ot,x.properties=Nt,x.renderLists=Mt,x.shadowMap=Lt,x.state=Tt,x.info=Gt}ce();const C=new rg(x,P);this.xr=C,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(q,G,!1))},this.getSize=function(S){return S.set(q,G)},this.setSize=function(S,U,F=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,G=U,e.width=Math.floor(S*$),e.height=Math.floor(U*$),F===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(q*$,G*$).floor()},this.setDrawingBufferSize=function(S,U,F){q=S,G=U,$=F,e.width=Math.floor(S*F),e.height=Math.floor(U*F),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(pt)},this.setViewport=function(S,U,F,O){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,U,F,O),Tt.viewport(v.copy(pt).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(_t)},this.setScissor=function(S,U,F,O){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,U,F,O),Tt.scissor(R.copy(_t).multiplyScalar($).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(S){Tt.setScissorTest(zt=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){ht=S},this.getClearColor=function(S){return S.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(S=!0,U=!0,F=!0){let O=0;if(S){let N=!1;if(b!==null){const tt=b.texture.format;N=tt===nc||tt===ec||tt===tc}if(N){const tt=b.texture.type,ct=tt===Bn||tt===zi||tt===lr||tt===ki||tt===Zl||tt===Jl,ut=Q.getClearColor(),mt=Q.getClearAlpha(),Et=ut.r,wt=ut.g,yt=ut.b;ct?(f[0]=Et,f[1]=wt,f[2]=yt,f[3]=mt,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Et,g[1]=wt,g[2]=yt,g[3]=mt,P.clearBufferiv(P.COLOR,0,g))}else O|=P.COLOR_BUFFER_BIT}U&&(O|=P.DEPTH_BUFFER_BIT),F&&(O|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",V,!1),e.removeEventListener("webglcontextcreationerror",Y,!1),Mt.dispose(),st.dispose(),Nt.dispose(),ue.dispose(),A.dispose(),K.dispose(),It.dispose(),Bt.dispose(),j.dispose(),C.dispose(),C.removeEventListener("sessionstart",en),C.removeEventListener("sessionend",nn),Gn.stop()};function lt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Gt.autoReset,U=Lt.enabled,F=Lt.autoUpdate,O=Lt.needsUpdate,N=Lt.type;ce(),Gt.autoReset=S,Lt.enabled=U,Lt.autoUpdate=F,Lt.needsUpdate=O,Lt.type=N}function Y(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function et(S){const U=S.target;U.removeEventListener("dispose",et),At(U)}function At(S){Wt(S),Nt.remove(S)}function Wt(S){const U=Nt.get(S).programs;U!==void 0&&(U.forEach(function(F){j.releaseProgram(F)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,F,O,N,tt){U===null&&(U=Ut);const ct=N.isMesh&&N.matrixWorld.determinant()<0,ut=zc(S,U,F,O,N);Tt.setMaterial(O,ct);let mt=F.index,Et=1;if(O.wireframe===!0){if(mt=k.getWireframeAttribute(F),mt===void 0)return;Et=2}const wt=F.drawRange,yt=F.attributes.position;let Xt=wt.start*Et,ae=(wt.start+wt.count)*Et;tt!==null&&(Xt=Math.max(Xt,tt.start*Et),ae=Math.min(ae,(tt.start+tt.count)*Et)),mt!==null?(Xt=Math.max(Xt,0),ae=Math.min(ae,mt.count)):yt!=null&&(Xt=Math.max(Xt,0),ae=Math.min(ae,yt.count));const oe=ae-Xt;if(oe<0||oe===1/0)return;It.setup(N,O,ut,F,mt);let Ne,Yt=Ft;if(mt!==null&&(Ne=M.get(mt),Yt=bt,Yt.setIndex(Ne)),N.isMesh)O.wireframe===!0?(Tt.setLineWidth(O.wireframeLinewidth*Ht()),Yt.setMode(P.LINES)):Yt.setMode(P.TRIANGLES);else if(N.isLine){let vt=O.linewidth;vt===void 0&&(vt=1),Tt.setLineWidth(vt*Ht()),N.isLineSegments?Yt.setMode(P.LINES):N.isLineLoop?Yt.setMode(P.LINE_LOOP):Yt.setMode(P.LINE_STRIP)}else N.isPoints?Yt.setMode(P.POINTS):N.isSprite&&Yt.setMode(P.TRIANGLES);if(N.isBatchedMesh)N._multiDrawInstances!==null?Yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances):Yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Yt.renderInstances(Xt,oe,N.count);else if(F.isInstancedBufferGeometry){const vt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ae=Math.min(F.instanceCount,vt);Yt.renderInstances(Xt,oe,Ae)}else Yt.render(Xt,oe)};function he(S,U,F){S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=Le,S.needsUpdate=!0,Cs(S,U,F),S.side=On,S.needsUpdate=!0,Cs(S,U,F),S.side=pn):Cs(S,U,F)}this.compile=function(S,U,F=null){F===null&&(F=S),m=st.get(F),m.init(U),y.push(m),F.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),S!==F&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const O=new Set;return S.traverse(function(N){const tt=N.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const ut=tt[ct];he(ut,F,N),O.add(ut)}else he(tt,F,N),O.add(tt)}),y.pop(),m=null,O},this.compileAsync=function(S,U,F=null){const O=this.compile(S,U,F);return new Promise(N=>{function tt(){if(O.forEach(function(ct){Nt.get(ct).currentProgram.isReady()&&O.delete(ct)}),O.size===0){N(S);return}setTimeout(tt,10)}Ot.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let _e=null;function Zt(S){_e&&_e(S)}function en(){Gn.stop()}function nn(){Gn.start()}const Gn=new pc;Gn.setAnimationLoop(Zt),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(S){_e=S,C.setAnimationLoop(S),S===null?Gn.stop():Gn.start()},C.addEventListener("sessionstart",en),C.addEventListener("sessionend",nn),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(U),U=C.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,b),m=st.get(S,y.length),m.init(U),y.push(m),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),jt.setFromProjectionMatrix(dt),J=this.localClippingEnabled,X=rt.init(this.clippingPlanes,J),_=Mt.get(S,p.length),_.init(),p.push(_),C.enabled===!0&&C.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&Tr(tt,U,-1/0,x.sortObjects)}Tr(S,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,ht),Dt=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,Dt&&Q.addToRenderList(_,S),this.info.render.frame++,X===!0&&rt.beginShadows();const F=m.state.shadowsArray;Lt.render(F,S,U),X===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,N=_.transmissive;if(m.setupLights(),U.isArrayCamera){const tt=U.cameras;if(N.length>0)for(let ct=0,ut=tt.length;ct<ut;ct++){const mt=tt[ct];$a(O,N,S,mt)}Dt&&Q.render(S);for(let ct=0,ut=tt.length;ct<ut;ct++){const mt=tt[ct];Ka(_,S,mt,mt.viewport)}}else N.length>0&&$a(O,N,S,U),Dt&&Q.render(S),Ka(_,S,U);b!==null&&(Rt.updateMultisampleRenderTarget(b),Rt.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(x,S,U),It.resetDefaultState(),D=-1,T=null,y.pop(),y.length>0?(m=y[y.length-1],X===!0&&rt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Tr(S,U,F,O){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)F=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||jt.intersectsSprite(S)){O&&at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(dt);const ct=K.update(S),ut=S.material;ut.visible&&_.push(S,ct,ut,F,at.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||jt.intersectsObject(S))){const ct=K.update(S),ut=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),at.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),at.copy(ct.boundingSphere.center)),at.applyMatrix4(S.matrixWorld).applyMatrix4(dt)),Array.isArray(ut)){const mt=ct.groups;for(let Et=0,wt=mt.length;Et<wt;Et++){const yt=mt[Et],Xt=ut[yt.materialIndex];Xt&&Xt.visible&&_.push(S,ct,Xt,F,at.z,yt)}}else ut.visible&&_.push(S,ct,ut,F,at.z,null)}}const tt=S.children;for(let ct=0,ut=tt.length;ct<ut;ct++)Tr(tt[ct],U,F,O)}function Ka(S,U,F,O){const N=S.opaque,tt=S.transmissive,ct=S.transparent;m.setupLightsView(F),X===!0&&rt.setGlobalState(x.clippingPlanes,F),O&&Tt.viewport(v.copy(O)),N.length>0&&Rs(N,U,F),tt.length>0&&Rs(tt,U,F),ct.length>0&&Rs(ct,U,F),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function $a(S,U,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new We(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?vn:Bn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const tt=m.state.transmissionRenderTarget[O.id],ct=O.viewport||v;tt.setSize(ct.z,ct.w);const ut=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),Dt?Q.render(F):x.clear();const mt=x.toneMapping;x.toneMapping=Un;const Et=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),X===!0&&rt.setGlobalState(x.clippingPlanes,O),Rs(S,F,O),Rt.updateMultisampleRenderTarget(tt),Rt.updateRenderTargetMipmap(tt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let yt=0,Xt=U.length;yt<Xt;yt++){const ae=U[yt],oe=ae.object,Ne=ae.geometry,Yt=ae.material,vt=ae.group;if(Yt.side===pn&&oe.layers.test(O.layers)){const Ae=Yt.side;Yt.side=Le,Yt.needsUpdate=!0,ja(oe,F,O,Ne,Yt,vt),Yt.side=Ae,Yt.needsUpdate=!0,wt=!0}}wt===!0&&(Rt.updateMultisampleRenderTarget(tt),Rt.updateRenderTargetMipmap(tt))}x.setRenderTarget(ut),x.setClearColor(B,W),Et!==void 0&&(O.viewport=Et),x.toneMapping=mt}function Rs(S,U,F){const O=U.isScene===!0?U.overrideMaterial:null;for(let N=0,tt=S.length;N<tt;N++){const ct=S[N],ut=ct.object,mt=ct.geometry,Et=O===null?ct.material:O,wt=ct.group;ut.layers.test(F.layers)&&ja(ut,U,F,mt,Et,wt)}}function ja(S,U,F,O,N,tt){S.onBeforeRender(x,U,F,O,N,tt),S.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,U,F,O,S,tt),N.transparent===!0&&N.side===pn&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,x.renderBufferDirect(F,U,O,N,S,tt),N.side=On,N.needsUpdate=!0,x.renderBufferDirect(F,U,O,N,S,tt),N.side=pn):x.renderBufferDirect(F,U,O,N,S,tt),S.onAfterRender(x,U,F,O,N,tt)}function Cs(S,U,F){U.isScene!==!0&&(U=Ut);const O=Nt.get(S),N=m.state.lights,tt=m.state.shadowsArray,ct=N.state.version,ut=j.getParameters(S,N.state,tt,U,F),mt=j.getProgramCacheKey(ut);let Et=O.programs;O.environment=S.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(S.isMeshStandardMaterial?A:ue).get(S.envMap||O.environment),O.envMapRotation=O.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Et===void 0&&(S.addEventListener("dispose",et),Et=new Map,O.programs=Et);let wt=Et.get(mt);if(wt!==void 0){if(O.currentProgram===wt&&O.lightsStateVersion===ct)return Ja(S,ut),wt}else ut.uniforms=j.getUniforms(S),S.onBuild(F,ut,x),S.onBeforeCompile(ut,x),wt=j.acquireProgram(ut,mt),Et.set(mt,wt),O.uniforms=ut.uniforms;const yt=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(yt.clippingPlanes=rt.uniform),Ja(S,ut),O.needsLights=Hc(S),O.lightsStateVersion=ct,O.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=wt,O.uniformsList=null,wt}function Za(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=rr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ja(S,U){const F=Nt.get(S);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function zc(S,U,F,O,N){U.isScene!==!0&&(U=Ut),Rt.resetTextureUnits();const tt=U.fog,ct=O.isMeshStandardMaterial?U.environment:null,ut=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:zn,mt=(O.isMeshStandardMaterial?A:ue).get(O.envMap||ct),Et=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,wt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),yt=!!F.morphAttributes.position,Xt=!!F.morphAttributes.normal,ae=!!F.morphAttributes.color;let oe=Un;O.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Yt=Ne!==void 0?Ne.length:0,vt=Nt.get(O),Ae=m.state.lights;if(X===!0&&(J===!0||S!==T)){const ke=S===T&&O.id===D;rt.setState(O,S,ke)}let Jt=!1;O.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Ae.state.version||vt.outputColorSpace!==ut||N.isBatchedMesh&&vt.batching===!1||!N.isBatchedMesh&&vt.batching===!0||N.isBatchedMesh&&vt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&vt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&vt.instancing===!1||!N.isInstancedMesh&&vt.instancing===!0||N.isSkinnedMesh&&vt.skinning===!1||!N.isSkinnedMesh&&vt.skinning===!0||N.isInstancedMesh&&vt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&vt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&vt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&vt.instancingMorph===!1&&N.morphTexture!==null||vt.envMap!==mt||O.fog===!0&&vt.fog!==tt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==rt.numPlanes||vt.numIntersection!==rt.numIntersection)||vt.vertexAlphas!==Et||vt.vertexTangents!==wt||vt.morphTargets!==yt||vt.morphNormals!==Xt||vt.morphColors!==ae||vt.toneMapping!==oe||vt.morphTargetsCount!==Yt)&&(Jt=!0):(Jt=!0,vt.__version=O.version);let on=vt.currentProgram;Jt===!0&&(on=Cs(O,U,N));let Ps=!1,Vn=!1,Er=!1;const xe=on.getUniforms(),wn=vt.uniforms;if(Tt.useProgram(on.program)&&(Ps=!0,Vn=!0,Er=!0),O.id!==D&&(D=O.id,Vn=!0),Ps||T!==S){xe.setValue(P,"projectionMatrix",S.projectionMatrix),xe.setValue(P,"viewMatrix",S.matrixWorldInverse);const ke=xe.map.cameraPosition;ke!==void 0&&ke.setValue(P,at.setFromMatrixPosition(S.matrixWorld)),re.logarithmicDepthBuffer&&xe.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&xe.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),T!==S&&(T=S,Vn=!0,Er=!0)}if(N.isSkinnedMesh){xe.setOptional(P,N,"bindMatrix"),xe.setOptional(P,N,"bindMatrixInverse");const ke=N.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),xe.setValue(P,"boneTexture",ke.boneTexture,Rt))}N.isBatchedMesh&&(xe.setOptional(P,N,"batchingTexture"),xe.setValue(P,"batchingTexture",N._matricesTexture,Rt),xe.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&xe.setValue(P,"batchingColorTexture",N._colorsTexture,Rt));const wr=F.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&xt.update(N,F,on),(Vn||vt.receiveShadow!==N.receiveShadow)&&(vt.receiveShadow=N.receiveShadow,xe.setValue(P,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(wn.envMap.value=mt,wn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(wn.envMapIntensity.value=U.environmentIntensity),Vn&&(xe.setValue(P,"toneMappingExposure",x.toneMappingExposure),vt.needsLights&&kc(wn,Er),tt&&O.fog===!0&&Z.refreshFogUniforms(wn,tt),Z.refreshMaterialUniforms(wn,O,$,G,m.state.transmissionRenderTarget[S.id]),rr.upload(P,Za(vt),wn,Rt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(rr.upload(P,Za(vt),wn,Rt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&xe.setValue(P,"center",N.center),xe.setValue(P,"modelViewMatrix",N.modelViewMatrix),xe.setValue(P,"normalMatrix",N.normalMatrix),xe.setValue(P,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ke=O.uniformsGroups;for(let br=0,Gc=ke.length;br<Gc;br++){const Qa=ke[br];Bt.update(Qa,on),Bt.bind(Qa,on)}}return on}function kc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Hc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,U,F){Nt.get(S.texture).__webglTexture=U,Nt.get(S.depthTexture).__webglTexture=F;const O=Nt.get(S);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const F=Nt.get(S);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,F=0){b=S,I=U,w=F;let O=!0,N=null,tt=!1,ct=!1;if(S){const mt=Nt.get(S);mt.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(P.FRAMEBUFFER,null),O=!1):mt.__webglFramebuffer===void 0?Rt.setupRenderTarget(S):mt.__hasExternalTextures&&Rt.rebindTextures(S,Nt.get(S.texture).__webglTexture,Nt.get(S.depthTexture).__webglTexture);const Et=S.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ct=!0);const wt=Nt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(wt[U])?N=wt[U][F]:N=wt[U],tt=!0):S.samples>0&&Rt.useMultisampledRTT(S)===!1?N=Nt.get(S).__webglMultisampledFramebuffer:Array.isArray(wt)?N=wt[F]:N=wt,v.copy(S.viewport),R.copy(S.scissor),z=S.scissorTest}else v.copy(pt).multiplyScalar($).floor(),R.copy(_t).multiplyScalar($).floor(),z=zt;if(Tt.bindFramebuffer(P.FRAMEBUFFER,N)&&O&&Tt.drawBuffers(S,N),Tt.viewport(v),Tt.scissor(R),Tt.setScissorTest(z),tt){const mt=Nt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,F)}else if(ct){const mt=Nt.get(S.texture),Et=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.__webglTexture,F||0,Et)}D=-1},this.readRenderTargetPixels=function(S,U,F,O,N,tt,ct){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(ut=ut[ct]),ut){Tt.bindFramebuffer(P.FRAMEBUFFER,ut);try{const mt=S.texture,Et=mt.format,wt=mt.type;if(!re.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-O&&F>=0&&F<=S.height-N&&P.readPixels(U,F,O,N,ot.convert(Et),ot.convert(wt),tt)}finally{const mt=b!==null?Nt.get(b).__webglFramebuffer:null;Tt.bindFramebuffer(P.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(S,U,F,O,N,tt,ct){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=Nt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(ut=ut[ct]),ut){Tt.bindFramebuffer(P.FRAMEBUFFER,ut);try{const mt=S.texture,Et=mt.format,wt=mt.type;if(!re.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-O&&F>=0&&F<=S.height-N){const yt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.bufferData(P.PIXEL_PACK_BUFFER,tt.byteLength,P.STREAM_READ),P.readPixels(U,F,O,N,ot.convert(Et),ot.convert(wt),0),P.flush();const Xt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await nu(P,Xt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,tt)}finally{P.deleteBuffer(yt),P.deleteSync(Xt)}return tt}}finally{const mt=b!==null?Nt.get(b).__webglFramebuffer:null;Tt.bindFramebuffer(P.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(S,U=null,F=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const O=Math.pow(2,-F),N=Math.floor(S.image.width*O),tt=Math.floor(S.image.height*O),ct=U!==null?U.x:0,ut=U!==null?U.y:0;Rt.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,ct,ut,N,tt),Tt.unbindTexture()},this.copyTextureToTexture=function(S,U,F=null,O=null,N=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,F=null);let tt,ct,ut,mt,Et,wt;F!==null?(tt=F.max.x-F.min.x,ct=F.max.y-F.min.y,ut=F.min.x,mt=F.min.y):(tt=S.image.width,ct=S.image.height,ut=0,mt=0),O!==null?(Et=O.x,wt=O.y):(Et=0,wt=0);const yt=ot.convert(U.format),Xt=ot.convert(U.type);Rt.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ae=P.getParameter(P.UNPACK_ROW_LENGTH),oe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ne=P.getParameter(P.UNPACK_SKIP_PIXELS),Yt=P.getParameter(P.UNPACK_SKIP_ROWS),vt=P.getParameter(P.UNPACK_SKIP_IMAGES),Ae=S.isCompressedTexture?S.mipmaps[N]:S.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ae.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ut),P.pixelStorei(P.UNPACK_SKIP_ROWS,mt),S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Et,wt,tt,ct,yt,Xt,Ae.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Et,wt,Ae.width,Ae.height,yt,Ae.data):P.texSubImage2D(P.TEXTURE_2D,N,Et,wt,yt,Xt,Ae),P.pixelStorei(P.UNPACK_ROW_LENGTH,ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vt),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,F=null,O=null,N=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0);let tt,ct,ut,mt,Et,wt,yt,Xt,ae;const oe=S.isCompressedTexture?S.mipmaps[N]:S.image;F!==null?(tt=F.max.x-F.min.x,ct=F.max.y-F.min.y,ut=F.max.z-F.min.z,mt=F.min.x,Et=F.min.y,wt=F.min.z):(tt=oe.width,ct=oe.height,ut=oe.depth,mt=0,Et=0,wt=0),O!==null?(yt=O.x,Xt=O.y,ae=O.z):(yt=0,Xt=0,ae=0);const Ne=ot.convert(U.format),Yt=ot.convert(U.type);let vt;if(U.isData3DTexture)Rt.setTexture3D(U,0),vt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Rt.setTexture2DArray(U,0),vt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ae=P.getParameter(P.UNPACK_ROW_LENGTH),Jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),on=P.getParameter(P.UNPACK_SKIP_PIXELS),Ps=P.getParameter(P.UNPACK_SKIP_ROWS),Vn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,oe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt),S.isDataTexture||S.isData3DTexture?P.texSubImage3D(vt,N,yt,Xt,ae,tt,ct,ut,Ne,Yt,oe.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(vt,N,yt,Xt,ae,tt,ct,ut,Ne,oe.data):P.texSubImage3D(vt,N,yt,Xt,ae,tt,ct,ut,Ne,Yt,oe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ae),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,on),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ps),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vn),N===0&&U.generateMipmaps&&P.generateMipmap(vt),Tt.unbindTexture()},this.initRenderTarget=function(S){Nt.get(S).__webglFramebuffer===void 0&&Rt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Rt.setTextureCube(S,0):S.isData3DTexture?Rt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Rt.setTexture2DArray(S,0):Rt.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){I=0,w=0,b=null,Tt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===La?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===_r?"display-p3":"srgb"}}class za{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new za(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hg extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ug{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ua("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new L;class pr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Je(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Je(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Je(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Je(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Je(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vr extends ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let wi;const as=new L,bi=new L,Ai=new L,Ri=new ft,os=new ft,Sc=new $t,Qs=new L,ls=new L,tr=new L,Ml=new ft,ra=new ft,Sl=new ft;class ya extends ye{constructor(t=new vr){if(super(),this.isSprite=!0,this.type="Sprite",wi===void 0){wi=new Ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ug(e,5);wi.setIndex([0,1,2,0,2,3]),wi.setAttribute("position",new pr(n,3,0,!1)),wi.setAttribute("uv",new pr(n,2,3,!1))}this.geometry=wi,this.material=t,this.center=new ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),Sc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ai.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Ai.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;er(Qs.set(-.5,-.5,0),Ai,a,bi,i,r),er(ls.set(.5,-.5,0),Ai,a,bi,i,r),er(tr.set(.5,.5,0),Ai,a,bi,i,r),Ml.set(0,0),ra.set(1,0),Sl.set(1,1);let o=t.ray.intersectTriangle(Qs,ls,tr,!1,as);if(o===null&&(er(ls.set(-.5,.5,0),Ai,a,bi,i,r),ra.set(0,1),o=t.ray.intersectTriangle(Qs,tr,ls,!1,as),o===null))return;const l=t.ray.origin.distanceTo(as);l<t.near||l>t.far||e.push({distance:l,point:as.clone(),uv:Qe.getInterpolation(as,Qs,ls,tr,Ml,ra,Sl,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function er(s,t,e,n,i,r){Ri.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(os.x=r*Ri.x-i*Ri.y,os.y=i*Ri.x+r*Ri.y):os.copy(Ri),s.copy(t),s.x+=os.x,s.y+=os.y,s.applyMatrix4(Sc)}class dg extends we{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ie,h=Ie,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yl extends ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ci=new $t,Tl=new $t,nr=[],El=new ri,fg=new $t,cs=new te,hs=new Es;class ar extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ri),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),El.copy(t.boundingBox).applyMatrix4(Ci),this.boundingBox.union(El)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),hs.copy(t.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),t.ray.intersectsSphere(hs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ci),Tl.multiplyMatrices(n,Ci),cs.matrixWorld=Tl,cs.raycast(t,nr);for(let a=0,o=nr.length;a<o;a++){const l=nr[a];l.instanceId=r,l.object=this,e.push(l)}nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yl(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new dg(new Float32Array(i*this.count),i,this.count,Ql,mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Mr extends we{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kn extends Ue{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(f,2));function y(){const E=new L,I=new L;let w=0;const b=(e-t)/n;for(let D=0;D<=r;D++){const T=[],v=D/r,R=v*(e-t)+t;for(let z=0;z<=i;z++){const B=z/i,W=B*l+o,q=Math.sin(W),G=Math.cos(W);I.x=R*q,I.y=-v*n+m,I.z=R*G,u.push(I.x,I.y,I.z),E.set(q,b,G).normalize(),d.push(E.x,E.y,E.z),f.push(B,1-v),T.push(g++)}_.push(T)}for(let D=0;D<i;D++)for(let T=0;T<r;T++){const v=_[T][D],R=_[T+1][D],z=_[T+1][D+1],B=_[T][D+1];h.push(v,R,B),h.push(R,z,B),w+=6}c.addGroup(p,w,0),p+=w}function x(E){const I=g,w=new ft,b=new L;let D=0;const T=E===!0?t:e,v=E===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const R=g;for(let z=0;z<=i;z++){const W=z/i*l+o,q=Math.cos(W),G=Math.sin(W);b.x=T*G,b.y=m*v,b.z=T*q,u.push(b.x,b.y,b.z),d.push(0,v,0),w.x=q*.5+.5,w.y=G*.5*v+.5,f.push(w.x,w.y),g++}for(let z=0;z<i;z++){const B=I+z,W=R+z;E===!0?h.push(W,W+1,B):h.push(W+1,W,B),D+=3}c.addGroup(p,D,E===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wi extends kn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Wi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ka extends Ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new L,E=new L,I=new L;for(let w=0;w<e.length;w+=3)f(e[w+0],x),f(e[w+1],E),f(e[w+2],I),l(x,E,I,y)}function l(y,x,E,I){const w=I+1,b=[];for(let D=0;D<=w;D++){b[D]=[];const T=y.clone().lerp(E,D/w),v=x.clone().lerp(E,D/w),R=w-D;for(let z=0;z<=R;z++)z===0&&D===w?b[D][z]=T:b[D][z]=T.clone().lerp(v,z/R)}for(let D=0;D<w;D++)for(let T=0;T<2*(w-D)-1;T++){const v=Math.floor(T/2);T%2===0?(d(b[D][v+1]),d(b[D+1][v]),d(b[D][v])):(d(b[D][v+1]),d(b[D+1][v+1]),d(b[D+1][v]))}}function c(y){const x=new L;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(y),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){const y=new L;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const E=m(y)/2/Math.PI+.5,I=p(y)/Math.PI+.5;a.push(E,1-I)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],E=a[y+2],I=a[y+4],w=Math.max(x,E,I),b=Math.min(x,E,I);w>.9&&b<.1&&(x<.2&&(a[y+0]+=1),E<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const E=y*3;x.x=t[E+0],x.y=t[E+1],x.z=t[E+2]}function g(){const y=new L,x=new L,E=new L,I=new L,w=new ft,b=new ft,D=new ft;for(let T=0,v=0;T<r.length;T+=9,v+=6){y.set(r[T+0],r[T+1],r[T+2]),x.set(r[T+3],r[T+4],r[T+5]),E.set(r[T+6],r[T+7],r[T+8]),w.set(a[v+0],a[v+1]),b.set(a[v+2],a[v+3]),D.set(a[v+4],a[v+5]),I.copy(y).add(x).add(E).divideScalar(3);const R=m(I);_(w,v+0,y,R),_(b,v+2,x,R),_(D,v+4,E,R)}}function _(y,x,E,I){I<0&&y.x===1&&(a[x]=y.x-1),E.x===0&&E.z===0&&(a[x]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.vertices,t.indices,t.radius,t.details)}}class yn extends ka{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yn(t.radius,t.detail)}}class Ha extends Ue{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new L,g=new ft;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,x=y,E=y+n+1,I=y+n+2,w=y+1;o.push(x,E,w),o.push(E,I,w)}}this.setIndex(o),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ga extends Ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let E=0;p===0&&a===0?E=.5/e:p===n&&l===Math.PI&&(E=-.5/e);for(let I=0;I<=e;I++){const w=I/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+E,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const x=h[p][y+1],E=h[p][y],I=h[p+1][y],w=h[p+1][y+1];(p!==0||a>0)&&f.push(x,E,w),(p!==n-1||l<Math.PI)&&f.push(E,I,w)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Va extends Ue{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pg extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ta extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xi extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yc extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class mg extends yc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const aa=new $t,wl=new L,bl=new L;class gg{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wl.setFromMatrixPosition(t.matrixWorld),e.position.copy(wl),bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bl),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _g extends gg{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xg extends yc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new _g}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Al(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Al();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Al(){return(typeof performance>"u"?Date:performance).now()}const Rl=new $t;class Ec{constructor(t,e,n=0,i=1/0){this.ray=new oc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rl),this}intersectObject(t,e=!0,n=[]){return Ea(t,this,n,e),n.sort(Cl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ea(t[i],this,n,e);return n.sort(Cl),n}}function Cl(s,t){return s.distance-t.distance}function Ea(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ea(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);const ie=2,Wa=96,le=Wa*ie,Pl=10,vg=120,Qt=0,Ss=1,Mg=[3108832,13777710],tn=[{name:"Dark Age",cost:null},{name:"Feudal Age",cost:{food:400,gold:0},time:25},{name:"Castle Age",cost:{food:700,gold:200},time:35},{name:"Imperial Age",cost:{food:1e3,gold:600},time:45}],wa=[1,1.15,1.32,1.5],Sg=[1,1.15,1.32,1.5],_n={villager:{name:"Villager",icon:"🧑",age:1,cost:{food:50},trainTime:9,hp:32,atk:3,range:.6,atkSpeed:1.4,speed:5.4,aggro:0,gatherRate:1.25},militia:{name:"Militia",icon:"⚔️",age:1,cost:{food:50,gold:15},trainTime:9,hp:52,atk:7,range:.7,atkSpeed:1.3,speed:4.9,aggro:11},archer:{name:"Archer",icon:"🏹",age:2,cost:{wood:30,gold:35},trainTime:10,hp:36,atk:6,range:11,atkSpeed:1.6,speed:5,aggro:12,projectile:"arrow"},knight:{name:"Knight",icon:"🐎",age:3,cost:{food:70,gold:60},trainTime:13,hp:110,atk:12,range:.9,atkSpeed:1.5,speed:7.2,aggro:12},catapult:{name:"Catapult",icon:"🪓",age:4,cost:{wood:140,gold:80},trainTime:18,hp:85,atk:38,range:13,atkSpeed:4.5,speed:3.4,aggro:13,projectile:"stone",splash:2.6,bonusVsBuilding:2.2,minRange:3}},qi={towncenter:{name:"Town Center",icon:"🏛️",age:1,cost:{wood:300},buildTime:50,hp:1450,size:4,pop:10,dropoff:!0,trains:["villager"],researchesAge:!0,attack:{atk:6,range:12,atkSpeed:1.8,needsGarrison:!1}},house:{name:"House",icon:"🏠",age:1,cost:{wood:30},buildTime:9,hp:280,size:2,pop:5},storehouse:{name:"Storehouse",icon:"📦",age:1,cost:{wood:45},buildTime:10,hp:320,size:2,dropoff:!0},barracks:{name:"Barracks",icon:"⚔️",age:1,cost:{wood:125},buildTime:18,hp:750,size:3,trains:["militia"]},farm:{name:"Farm",icon:"🌾",age:1,cost:{wood:50},buildTime:8,hp:120,size:2,isFarm:!0,farmRate:.85},archeryrange:{name:"Archery Range",icon:"🏹",age:2,cost:{wood:140},buildTime:18,hp:700,size:3,trains:["archer"]},tower:{name:"Watch Tower",icon:"🗼",age:2,cost:{wood:60,gold:50},buildTime:16,hp:620,size:1,attack:{atk:7,range:13,atkSpeed:1.7}},wall:{name:"Palisade Wall",icon:"🚧",age:2,cost:{wood:8},buildTime:4,hp:320,size:1,isWall:!0},stable:{name:"Stable",icon:"🐎",age:3,cost:{wood:160},buildTime:20,hp:800,size:3,trains:["knight"]},siegeworkshop:{name:"Siege Workshop",icon:"🪓",age:4,cost:{wood:190,gold:60},buildTime:22,hp:850,size:3,trains:["catapult"]}},yg=["house","storehouse","farm","barracks","archeryrange","tower","wall","stable","siegeworkshop","towncenter"],Tg={tree:{name:"Tree",res:"wood",amount:110},berry:{name:"Berry Bush",res:"food",amount:160},gold:{name:"Gold Mine",res:"gold",amount:850}},Eg={wood:220,food:220,gold:120};function Nn(s,t){return t?s.wood>=(t.wood||0)&&s.food>=(t.food||0)&&s.gold>=(t.gold||0):!0}function ba(s,t){t&&(s.wood-=t.wood||0,s.food-=t.food||0,s.gold-=t.gold||0)}function wg(s,t){t&&(s.wood+=t.wood||0,s.food+=t.food||0,s.gold+=t.gold||0)}function oa(s){let t=s>>>0;const e=()=>(t=t*1664525+1013904223>>>0,t/4294967296),n=64,i=new Float32Array(n*n);for(let a=0;a<i.length;a++)i[a]=e();const r=a=>a*a*(3-2*a);return(a,o)=>{a=(a%n+n)%n,o=(o%n+n)%n;const l=Math.floor(a),c=Math.floor(o),h=(l+1)%n,u=(c+1)%n,d=r(a-l),f=r(o-c),g=i[c*n+l],_=i[c*n+h],m=i[u*n+l],p=i[u*n+h];return g+(_-g)*d+(m-g)*f+(g-_-m+p)*d*f}}const Yi=-.55;class bg{constructor(t=Math.random()*1e9|0){this.size=Wa,this.seed=t,this.noise=oa(t),this.noise2=oa(t^2654435769),this.moistNoise=oa(t^1374772973),this.walk=new Uint8Array(this.size*this.size),this.occupant=new Array(this.size*this.size).fill(null);for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){const i=this.tileHeight(n,e);this.walk[e*this.size+n]=i>Yi?1:0}this.version=0}heightAt(t,e){const n=t/26,i=e/26;let r=(this.noise(n,i)-.5)*2.6+(this.noise2(n*2.7,i*2.7)-.5)*1.1;const a=this.noise2(t/60+11,e/60+7);a<.15&&(r-=(.15-a)*12);const o=t-this.size*ie/2,l=e-this.size*ie/2,c=Math.max(Math.abs(o),Math.abs(l))/(this.size*ie/2);return c>.86&&(r+=(c-.86)*9),r}moistureAt(t,e){return this.moistNoise(t/34+3,e/34+9)}tileHeight(t,e){return this.heightAt((t+.5)*ie,(e+.5)*ie)}inBounds(t,e){return t>=0&&e>=0&&t<this.size&&e<this.size}isWalkable(t,e){return this.inBounds(t,e)?this.walk[e*this.size+t]===1:!1}occupantAt(t,e){return this.inBounds(t,e)?this.occupant[e*this.size+t]:null}worldToGrid(t,e){return[Math.floor(t/ie),Math.floor(e/ie)]}gridToWorld(t,e){return[(t+.5)*ie,(e+.5)*ie]}canPlace(t,e,n){for(let i=e;i<e+n;i++)for(let r=t;r<t+n;r++){if(!this.inBounds(r,i))return!1;const a=i*this.size+r;if(this.walk[a]!==1||this.occupant[a])return!1}return!0}occupy(t,e,n,i){for(let r=e;r<e+n;r++)for(let a=t;a<t+n;a++){const o=r*this.size+a;this.walk[o]=0,this.occupant[o]=i}this.version++}release(t,e,n){for(let i=e;i<e+n;i++)for(let r=t;r<t+n;r++){const a=i*this.size+r,o=this.tileHeight(r,i);this.walk[a]=o>Yi?1:0,this.occupant[a]=null}this.version++}nearestWalkable(t,e,n=10){if(this.isWalkable(t,e))return[t,e];for(let i=1;i<=n;i++)for(let r=-i;r<=i;r++)for(let a=-i;a<=i;a++)if(Math.max(Math.abs(a),Math.abs(r))===i&&this.isWalkable(t+a,e+r))return[t+a,e+r];return null}}function Ag(s,t){const e=[],n=s.size;let r=(s.seed^11259375)>>>0;const a=()=>(r=r*1664525+1013904223>>>0,r/4294967296),o=(h,u,d)=>t.every(f=>Math.hypot(h-f[0],u-f[1])>d),l=(h,u,d)=>!s.inBounds(h,u)||!s.isWalkable(h,u)||s.occupantAt(h,u)?!1:(e.push({type:d,gx:h,gy:u}),s.occupy(h,u,1,{isResourceReservation:!0,type:d}),!0),c=26;for(let h=0;h<c;h++){const u=6+a()*(n-12),d=6+a()*(n-12);if(!o(u,d,11))continue;const f=2.4+a()*3.4;for(let g=Math.floor(d-f);g<=d+f;g++)for(let _=Math.floor(u-f);_<=u+f;_++){const m=Math.hypot(_-u,g-d);m<=f&&a()<.82-m/(f*2.2)&&l(_,g,"tree")}}for(let h=0;h<9;h++){const u=Math.floor(8+a()*(n-16)),d=Math.floor(8+a()*(n-16));if(o(u,d,13))for(let f=0;f<4;f++)l(u+f%2,d+Math.floor(f/2),"gold")}for(let h=0;h<10;h++){const u=Math.floor(8+a()*(n-16)),d=Math.floor(8+a()*(n-16));if(o(u,d,13))for(let f=0;f<5;f++)l(u+Math.floor(a()*3)-1,d+Math.floor(a()*3)-1,"berry")}for(const[h,u]of t){const d=a()*Math.PI*2;for(let x=0;x<26;x++){const E=d+(a()-.5)*1.7,I=9+a()*4;l(Math.round(h+Math.cos(E)*I),Math.round(u+Math.sin(E)*I),"tree")}const f=d+Math.PI*(.6+a()*.5),g=Math.round(h+Math.cos(f)*8),_=Math.round(u+Math.sin(f)*8);for(let x=0;x<6;x++)l(g+Math.floor(a()*3)-1,_+Math.floor(a()*3)-1,"berry");const m=f+Math.PI*(.4+a()*.4),p=Math.round(h+Math.cos(m)*10),y=Math.round(u+Math.sin(m)*10);for(let x=0;x<4;x++)l(p+x%2,y+Math.floor(x/2),"gold")}return e}function Rg(s){const t=s.size,e=[[[18,18],[t-22,t-22]],[[t-22,18],[18,t-22]]],n=([a,o])=>{let l=0;for(let c=-4;c<=4;c++)for(let h=-4;h<=4;h++)s.isWalkable(a+h,o+c)||l++;return l};let i=e[0],r=1/0;for(const a of e){const o=n(a[0])+n(a[1]);o<r&&(r=o,i=a)}return i.map(([a,o])=>s.nearestWalkable(a,o,14)||[a,o])}const wc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Qi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cg=new Oa(-1,1,1,-1,0,1);class Pg extends Ue{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}}const Dg=new Pg;class Xa{constructor(t){this._mesh=new te(Dg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Cg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Lg extends Qi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ms.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Xa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Dl extends Qi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Ig extends Qi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ug{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ft);this._width=n.width,this._height=n.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lg(wc),this.copyPass.material.blending=xn,this.clock=new Tc}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Dl!==void 0&&(a instanceof Dl?n=!0:a instanceof Ig&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ng extends Qi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new St}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Fg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ki extends Qi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ft(t.x,t.y):new ft(256,256),this.clearColor=new St(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new We(r,a,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new We(r,a,{type:vn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new We(r,a,{type:vn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Fg;this.highPassUniforms=Ms.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ft(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=wc;this.copyUniforms=Ms.clone(h.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:pa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new St,this.oldClearAlpha=1,this.basic=new Zi,this.fsQuad=new Xa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ft(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ki.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ki.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new De({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ki.BlurDirectionX=new ft(1,0);Ki.BlurDirectionY=new ft(0,1);const Og={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Bg extends Qi{constructor(){super();const t=Og;this.uniforms=Ms.clone(t.uniforms),this.material=new pg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Xa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ql?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function En(s){const t=document.createElement("canvas");return t.width=t.height=s,[t,t.getContext("2d")]}function Ni(s,t,e=1){let n=e>>>0;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296),r=new Float32Array(t*t);for(let o=0;o<r.length;o++)r[o]=i();const a=o=>o*o*(3-2*o);return(o,l)=>{const c=o/s*t,h=l/s*t,u=Math.floor(c)%t,d=Math.floor(h)%t,f=(u+1)%t,g=(d+1)%t,_=a(c-Math.floor(c)),m=a(h-Math.floor(h)),p=r[d*t+u],y=r[d*t+f],x=r[g*t+u],E=r[g*t+f];return p+(y-p)*_+(x-p)*m+(p-y-x+E)*_*m}}function ts(s,t){const e=Ni(s,8,t),n=Ni(s,23,t^99),i=Ni(s,53,t^7777);return(r,a)=>e(r,a)*.5+n(r,a)*.33+i(r,a)*.17}function ws(s,t=1){const e=new Mr(s);return e.wrapS=e.wrapT=Bi,e.repeat.set(t,t),e.colorSpace=Be,e.anisotropy=4,e}function es(s,t=1.4){const e=s.width,n=s.getContext("2d").getImageData(0,0,e,e).data,i=(c,h)=>{c=(c%e+e)%e,h=(h%e+e)%e;const u=(h*e+c)*4;return(n[u]+n[u+1]+n[u+2])/765},[r,a]=En(e),o=a.createImageData(e,e);for(let c=0;c<e;c++)for(let h=0;h<e;h++){const u=(i(h+1,c)-i(h-1,c))*t,d=(i(h,c+1)-i(h,c-1))*t,f=1/Math.hypot(u,d,1),g=(c*e+h)*4;o.data[g]=(-u*f*.5+.5)*255,o.data[g+1]=(-d*f*.5+.5)*255,o.data[g+2]=(f*.5+.5)*255,o.data[g+3]=255}a.putImageData(o,0,0);const l=new Mr(r);return l.wrapS=l.wrapT=Bi,l}function zg(s=256){const[t,e]=En(s),n=ts(s,1234),i=Ni(s,96,555),r=e.createImageData(s,s);for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=.97+(n(o,a)-.5)*.22+(i(o,a)-.5)*.26;l=Math.max(.74,Math.min(1.18,l));const c=(a*s+o)*4;r.data[c]=Math.min(255,l*252),r.data[c+1]=Math.min(255,l*255),r.data[c+2]=Math.min(255,l*246),r.data[c+3]=255}return e.putImageData(r,0,0),{map:ws(t),normalMap:es(t,.8)}}function kg(s=128){const[t,e]=En(s),n=ts(s,4321),i=e.createImageData(s,s);for(let r=0;r<s;r++)for(let a=0;a<s;a++){const o=Math.sin(r/s*Math.PI*18+n(a,r)*5)*.5+.5,l=Math.sin(a/s*Math.PI*60+r*.45)*.5+.5;let c=.66+o*.26+l*.1+(n(a,r)-.5)*.22;const h=(r*s+a)*4;i.data[h]=Math.min(255,c*255),i.data[h+1]=Math.min(255,c*232),i.data[h+2]=Math.min(255,c*178),i.data[h+3]=255}return e.putImageData(i,0,0),{map:ws(t,2),normalMap:es(t,1.6),normalRepeat:2}}function Hg(s=128){const[t,e]=En(s),n=ts(s,8765),i=e.createImageData(s,s),r=6,a=4;for(let o=0;o<s;o++)for(let l=0;l<s;l++){const c=o/s*r,h=Math.floor(c)%2*.5,u=l/s*a+h,d=c-Math.floor(c),f=u-Math.floor(u),g=d<.09||f<.06?.62:1;let _=(.78+(n(l,o)-.5)*.3)*g;const m=(o*s+l)*4;i.data[m]=_*255,i.data[m+1]=_*252,i.data[m+2]=_*244,i.data[m+3]=255}return e.putImageData(i,0,0),{map:ws(t,2),normalMap:es(t,2),normalRepeat:2}}function Gg(s=128){const[t,e]=En(s),n=ts(s,2468),i=e.createImageData(s,s),r=5;for(let a=0;a<s;a++)for(let o=0;o<s;o++){const l=o/s*r,c=l-Math.floor(l)<.07?.6:1,h=Math.sin(a/s*Math.PI*34+n(o,a)*9)*.5+.5,u=Ni(s,r,33)(o,0)*.2;let d=(.72+h*.14+u+(n(o,a)-.5)*.18)*c;const f=(a*s+o)*4;i.data[f]=Math.min(255,d*255),i.data[f+1]=Math.min(255,d*224),i.data[f+2]=Math.min(255,d*184),i.data[f+3]=255}return e.putImageData(i,0,0),{map:ws(t,1.5),normalMap:es(t,1.5),normalRepeat:1.5}}function Vg(s=128){const[t,e]=En(s),n=ts(s,1357),i=Ni(s,64,777),r=e.createImageData(s,s);for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=.9+(n(o,a)-.5)*.16-(i(o,a)>.82?.12:0);const c=(a*s+o)*4;r.data[c]=l*255,r.data[c+1]=l*250,r.data[c+2]=l*238,r.data[c+3]=255}return e.putImageData(r,0,0),{map:ws(t),normalMap:es(t,.9)}}function Wg(s=128){const[t,e]=En(s),n=ts(s,9753),i=e.createImageData(s,s);for(let r=0;r<s;r++)for(let a=0;a<s;a++){const o=.5+Math.sin(n(a,r)*Math.PI*4)*.5,l=(r*s+a)*4;i.data[l]=i.data[l+1]=i.data[l+2]=o*255,i.data[l+3]=255}return e.putImageData(i,0,0),es(t,1.1)}function Xg(){const[s,t]=En(256),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#5d9bd4"),e.addColorStop(.55,"#9cc6e8"),e.addColorStop(.8,"#d8e8f2"),e.addColorStop(1,"#e8e2cf"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=new Mr(s);return n.colorSpace=Be,n}function qg(){const[s,t]=En(64),e=t.createRadialGradient(32,32,4,32,32,30);return e.addColorStop(0,"rgba(255,255,255,0.9)"),e.addColorStop(.6,"rgba(255,255,255,0.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Mr(s)}function Yg(s){const t=new cg({canvas:s,antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Vl,t.outputColorSpace=Be,t.toneMapping=Pa,t.toneMappingExposure=1.22;const e=new hg;e.background=new St(10406120),e.fog=new za(12178660,170,430);const n=new Ge(46,window.innerWidth/window.innerHeight,1,1200),i=new te(new Ga(520,24,12),new Zi({map:Xg(),side:Le,fog:!1,depthWrite:!1}));i.position.set(le/2,-40,le/2),i.renderOrder=-10,e.add(i);const r=new mg(13624821,9075285,.85);e.add(r);const a=new xg(16773848,2);a.castShadow=!0,a.shadow.mapSize.set(2048,2048),a.shadow.bias=-8e-4,a.shadow.normalBias=.04;const o=65;a.shadow.camera.left=-o,a.shadow.camera.right=o,a.shadow.camera.top=o,a.shadow.camera.bottom=-o,a.shadow.camera.near=10,a.shadow.camera.far=260,e.add(a),e.add(a.target);const l=new L(-.55,1,.35).normalize();function c(f){a.target.position.copy(f),a.position.copy(f).addScaledVector(l,110)}c(new L(le/2,0,le/2));const h=new We(window.innerWidth,window.innerHeight,{samples:4,type:vn}),u=new Ug(t,h);u.addPass(new Ng(e,n));const d=new Ki(new ft(window.innerWidth,window.innerHeight),.22,.55,.82);return u.addPass(d),u.addPass(new Bg),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),u.setSize(window.innerWidth,window.innerHeight)}),{renderer:t,scene:e,camera:n,updateSun:c,composer:u}}const Ll=new Map;function Ye(s){let t=Ll.get(s);return t||(t=new Xi({color:s}),Ll.set(s,t)),t}let la=null;function Kg(){return la||(la={thatch:kg(),stone:Hg(),planks:Gg(),plaster:Vg()}),la}const Il=new Map;function $g(s,t){const e=s+"|"+t;let n=Il.get(e);if(!n){const i=Kg()[s],r=new St(t).multiplyScalar(1.28);n=new Ta({color:r,map:i.map,normalMap:i.normalMap,normalScale:new ft(.85,.85),roughness:.95,metalness:0}),Il.set(e,n)}return n}function jg(s){switch(s){case nt.thatch:case nt.thatchDark:case nt.wheat:return"thatch";case nt.stone:case nt.stoneDark:return"stone";case nt.plank:case nt.wood:case nt.woodDark:return"planks";case nt.cream:case nt.cloth:case 13482902:case 13218441:case 12888184:case 14272931:return"plaster";default:return null}}function Zg(s,t){const e=Tn(t??8947848,.62);return s.traverse(n=>{var a,o,l;if(!n.isMesh)return;const i=(l=(o=(a=n.material)==null?void 0:a.color)==null?void 0:o.getHex)==null?void 0:l.call(o);if(i===void 0)return;let r=jg(i);r===null&&i===e&&(r="planks"),r&&(n.material=$g(r,i))}),s}const Ul=new Map;function Hn(s,t){let e=Ul.get(s);return e||(e=t(),Ul.set(s,e)),e}function gt(s,t,e,n){const i=new te(Hn(`b${s},${t},${e}`,()=>new oi(s,t,e)),Ye(n));return i.castShadow=!0,i}function fe(s,t,e,n,i=7){const r=new te(Hn(`c${s},${t},${e},${i}`,()=>new kn(s,t,e,i)),Ye(n));return r.castShadow=!0,r}function Sn(s,t,e,n=7){const i=new te(Hn(`k${s},${t},${n}`,()=>new Wi(s,t,n)),Ye(e));return i.castShadow=!0,i}function Xe(s,t,e=0){const n=new te(Hn(`s${s},${e}`,()=>new yn(s,e)),Ye(t));return n.castShadow=!0,n}const nt={skin:14262379,wood:9069114,woodDark:7031336,plank:11041871,thatch:13215836,thatchDark:11571013,stone:10328720,stoneDark:8157810,cream:15260864,cloth:12101768,leaf:4881466,leafDark:3827248,gold:15251747,berry:12729147,metal:12106948,metalDark:7238264,soil:7032627,wheat:14070606};function Tn(s,t){const e=new St(s);return e.multiplyScalar(t),e.getHex()}function qa(s,{torsoColor:t,legColor:e,headgear:n}={}){const i=new Vt,r=t??s,a=e??5917240,o={};for(const u of[-1,1]){const d=new Vt;d.position.set(u*.16,.82,0);const f=gt(.2,.8,.24,a);f.position.y=-.4,d.add(f),i.add(d),o[u<0?"lLeg":"rLeg"]=d}const l=gt(.62,.72,.4,r);l.position.y=1.18,i.add(l);const c=gt(.64,.1,.42,3812378);c.position.y=.86,i.add(c);const h=Xe(.24,nt.skin,1);h.position.y=1.74,i.add(h),o.head=h,n&&(n.position.y=1.74,i.add(n),o.hat=n);for(const u of[-1,1]){const d=new Vt;d.position.set(u*.4,1.46,0);const f=gt(.17,.62,.2,r);f.position.y=-.28,d.add(f);const g=Xe(.09,nt.skin,0);g.position.y=-.6,d.add(g),i.add(d),o[u<0?"lArm":"rArm"]=d}return i.userData.limbs=o,i}function Jg(s){const t=qa(s,{torsoColor:nt.cloth}),e=gt(.66,.16,.44,s);e.position.y=1.32,e.rotation.z=.18,t.add(e);const n=new Vt,i=fe(.035,.035,.62,nt.woodDark,5);i.rotation.x=Math.PI/2,n.add(i);const r=gt(.06,.18,.22,nt.metal);return r.position.set(0,.08,.26),n.add(r),n.position.set(0,-.6,.1),t.userData.limbs.rArm.add(n),t.userData.tool=n,t}function Qg(s){const t=Sn(.26,.3,nt.metalDark,7);t.position.y=.16;const e=new Vt;e.add(t);const n=qa(s,{torsoColor:s,headgear:e}),i=new Vt,r=gt(.06,.7,.1,nt.metal);r.position.y=-.35,r.rotation.x=Math.PI,i.add(r);const a=gt(.2,.05,.12,nt.woodDark);i.add(a),i.position.set(0,-.62,0),i.rotation.x=-Math.PI*.45,n.userData.limbs.rArm.add(i);const o=fe(.3,.3,.07,Tn(s,.75),8);o.rotation.z=Math.PI/2,o.position.set(-.14,-.35,.1);const l=Xe(.08,nt.metal,0);return l.position.set(-.2,-.35,.1),n.userData.limbs.lArm.add(o,l),n}function t0(s){const t=Sn(.27,.34,Tn(s,.8),7);t.position.y=.12;const e=new Vt;e.add(t);const n=qa(s,{torsoColor:7043658,headgear:e}),i=gt(.66,.14,.44,s);i.position.y=1.3,i.rotation.z=-.2,n.add(i);const r=new te(Hn("bow",()=>new Va(.42,.035,5,10,Math.PI)),Ye(nt.woodDark));r.castShadow=!0,r.rotation.y=Math.PI/2,r.rotation.z=Math.PI/2,r.position.set(0,-.55,.05),n.userData.limbs.lArm.add(r);const a=fe(.09,.09,.46,nt.wood,6);return a.position.set(.18,1.3,-.26),a.rotation.x=.3,n.add(a),n}function e0(s){const t=new Vt,e={},n=7229235,i=gt(.62,.62,1.5,n);i.position.y=1,t.add(i);const r=gt(.3,.6,.34,n);r.position.set(0,1.45,.72),r.rotation.x=.45,t.add(r);const a=gt(.26,.28,.52,6111529);a.position.set(0,1.74,.95),t.add(a);let o=0;for(const p of[.55,-.55])for(const y of[-.22,.22]){const x=new Vt;x.position.set(y,.78,p);const E=gt(.16,.78,.18,6111529);E.position.y=-.39,x.add(E),t.add(x),e["hLeg"+o++]=x}const l=gt(.12,.5,.14,4008986);l.position.set(0,1.05,-.85),l.rotation.x=-.5,t.add(l);const c=gt(.7,.3,1.2,s);c.position.y=1.22,t.add(c);const h=gt(.42,.56,.34,Tn(s,.85));h.position.set(0,1.78,-.1),t.add(h);const u=Xe(.2,nt.skin,1);u.position.set(0,2.2,-.1),t.add(u);const d=Sn(.22,.28,nt.metal,7);d.position.set(0,2.38,-.1),t.add(d);const f=new Vt;f.position.set(.3,1.95,-.1);const g=gt(.14,.4,.16,Tn(s,.85));g.position.y=-.18,f.add(g);const _=fe(.03,.05,1.7,nt.plank,5);_.rotation.x=Math.PI/2-.12,_.position.set(0,-.3,.5),f.add(_);const m=Sn(.06,.18,nt.metal,5);return m.rotation.x=Math.PI/2,m.position.set(0,-.2,1.36),f.add(m),t.add(f),e.rArm=f,t.userData.limbs=e,t.userData.isMounted=!0,t}function n0(s){const t=new Vt,e=gt(1.1,.26,1.7,nt.wood);e.position.y=.5,t.add(e);for(const h of[.6,-.6])for(const u of[-.62,.62]){const d=fe(.34,.34,.14,nt.woodDark,9);d.rotation.z=Math.PI/2,d.position.set(u,.34,h),t.add(d)}for(const h of[-.4,.4]){const u=gt(.12,.9,.14,nt.woodDark);u.position.set(h,.95,.1),t.add(u)}const n=fe(.06,.06,.92,nt.woodDark,6);n.rotation.z=Math.PI/2,n.position.set(0,1.3,.1),t.add(n);const i=new Vt;i.position.set(0,1.3,.1);const r=gt(.14,.14,1.9,nt.plank);r.position.z=-.55,i.add(r);const a=fe(.22,.16,.18,nt.woodDark,7);a.position.set(0,.06,-1.45),i.add(a);const o=gt(.4,.4,.3,nt.stoneDark);o.position.z=.5,i.add(o),i.rotation.x=-.5,t.add(i);const l=fe(.025,.025,.7,nt.woodDark,4);l.position.set(.5,1.1,-.75),t.add(l);const c=gt(.3,.18,.02,s);return c.position.set(.65,1.32,-.75),t.add(c),t.userData.limbs={throwArm:i},t.userData.isMachine=!0,t}const i0={villager:Jg,militia:Qg,archer:t0,knight:e0,catapult:n0};function bs(s,t=4){const e=new Vt,n=fe(.05,.05,t,nt.woodDark,5);n.position.y=t/2,e.add(n);const i=gt(.9,.55,.04,s);return i.position.set(.48,t-.35,0),e.add(i),e}function s0(s){const t=new Vt,e=7.2,n=gt(e+.6,.5,e+.6,nt.stone);n.position.y=.25,t.add(n);const i=gt(e-1.2,2.6,e-1.2,nt.cream);i.position.y=1.8,t.add(i);for(const u of[-6/2,(e-1.2)/2])for(const d of[-6/2,(e-1.2)/2]){const f=gt(.34,2.6,.34,nt.woodDark);f.position.set(u,1.8,d),t.add(f)}const r=gt(e-2.6,1.5,e-2.6,14272931);r.position.y=3.85,t.add(r);const a=Sn((e-1.4)*.78,2.4,nt.thatch,4);a.position.y=5.7,a.rotation.y=Math.PI/4,t.add(a);const o=Sn(.5,.8,s,4);o.position.y=7.1,o.rotation.y=Math.PI/4,t.add(o);const l=Sn(e*.74,1.1,nt.thatchDark,4);l.position.y=3.55,l.rotation.y=Math.PI/4,t.add(l);const c=gt(1.3,1.6,.2,nt.woodDark);c.position.set(0,1.05,(e-1.2)/2+.05),t.add(c);const h=bs(s,5.2);return h.position.set(e/2-.5,.5,e/2-.5),t.add(h),t}function r0(s){const t=new Vt,e=gt(3.2,1.7,2.8,nt.cream);e.position.y=.95,t.add(e);const n=new te(Hn("gable3.8",()=>{const l=new kn(1.55,1.55,3.8,3,1);return l.rotateZ(Math.PI/2),l.rotateX(Math.PI/6+Math.PI/2),l}),Ye(nt.thatch));n.castShadow=!0,n.scale.set(1,.72,1.05),n.position.y=2.1,t.add(n);const i=gt(.7,1.1,.15,nt.woodDark);i.position.set(.5,.65,1.45),t.add(i);const r=gt(.5,.45,.12,4863264);r.position.set(-.8,1.2,1.45),t.add(r);const a=gt(.4,1,.4,nt.stoneDark);a.position.set(-1.1,2.5,0),t.add(a);const o=gt(3.3,.16,2.9,s);return o.position.y=1.75,t.add(o),t}function a0(s){const t=new Vt,e=gt(3,1.6,3,nt.plank);e.position.y=.9,t.add(e);const n=gt(3.5,.25,3.5,nt.woodDark);n.position.y=1.85,t.add(n);const i=gt(2.2,.25,2.2,nt.wood);i.position.y=2.35,t.add(i);const r=gt(.7,.7,.7,nt.wood);r.position.set(1.7,.45,1),t.add(r);const a=gt(.55,.55,.55,nt.plank);a.position.set(1.85,.35,.1),t.add(a);const o=Xe(.4,nt.cloth,1);o.scale.y=.75,o.position.set(-1.7,.3,1.2),t.add(o);const l=gt(3.1,.14,3.1,s);return l.position.y=1.62,t.add(l),t}function o0(s){const t=new Vt,e=gt(5,2.2,4.4,13482902);e.position.y=1.25,t.add(e);const n=new te(Hn("gable5.6",()=>{const a=new kn(2.3,2.3,5.6,3,1);return a.rotateZ(Math.PI/2),a.rotateX(Math.PI/6+Math.PI/2),a}),Ye(Tn(s,.62)));n.castShadow=!0,n.scale.set(1,.6,.95),n.position.y=2.95,t.add(n);const i=gt(1.5,1.7,.2,nt.woodDark);i.position.set(0,.95,2.25),t.add(i);for(const a of[-1.6,1.6]){const o=fe(.42,.42,.1,s,8);o.rotation.x=Math.PI/2,o.position.set(a,1.6,2.26),t.add(o)}const r=bs(s,4);return r.position.set(2.2,0,-1.8),t.add(r),t}function l0(){const s=new Vt,t=gt(3.8,.18,3.8,nt.soil);t.position.y=.09,t.receiveShadow=!0,s.add(t);for(let e=0;e<4;e++){const n=gt(.5,.3,3.4,nt.wheat);n.position.set(-1.35+e*.9,.3,0),s.add(n)}for(const[e,n]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){const i=fe(.07,.07,.7,nt.woodDark,5);i.position.set(e,.35,n),s.add(i)}return s}function c0(s){const t=new Vt,e=gt(4.2,1.9,3.2,13218441);e.position.set(-.5,1.05,-.8),t.add(e);const n=gt(4.8,.25,3.8,Tn(s,.62));n.position.set(-.5,2.15,-.8),n.rotation.z=.07,t.add(n);const i=fe(.6,.6,.18,15261900,10);i.rotation.x=Math.PI/2,i.position.set(1.9,1,1.6),t.add(i);const r=fe(.36,.36,.2,13777710,10);r.rotation.x=Math.PI/2,r.position.set(1.9,1,1.6),t.add(r);const a=fe(.14,.14,.22,15251747,8);a.rotation.x=Math.PI/2,a.position.set(1.9,1,1.6),t.add(a);const o=gt(.15,1,.6,nt.woodDark);o.position.set(1.9,.5,1.6),t.add(o);const l=bs(s,3.6);return l.position.set(-2.4,0,1.2),t.add(l),t}function h0(s){const t=new Vt,e=fe(1,1.25,4.6,nt.stone,7);e.position.y=2.3,t.add(e);for(let r=0;r<7;r++){const a=r/7*Math.PI*2,o=gt(.34,.4,.34,nt.stoneDark);o.position.set(Math.cos(a)*.95,4.85,Math.sin(a)*.95),t.add(o)}const n=Sn(1.15,1.1,Tn(s,.62),7);n.position.y=5.6,t.add(n);const i=gt(.3,.5,.3,2760728);return i.position.set(0,3.6,1.05),t.add(i),t}function u0(){const s=new Vt;for(let e=-2;e<=2;e++){const n=2.2+e*7919%5*.08,i=fe(.17,.2,n,e%2?nt.wood:nt.woodDark,6);i.position.set(e*.38,n/2,0),s.add(i);const r=Sn(.17,.3,nt.woodDark,6);r.position.set(e*.38,n+.15,0),s.add(r)}const t=gt(1.9,.18,.12,nt.plank);return t.position.set(0,1.2,.2),s.add(t),s}function d0(s){const t=new Vt,e=gt(5.2,2,3.6,12888184);e.position.set(0,1.1,-.6),t.add(e);const n=new te(Hn("gable5.8",()=>{const o=new kn(2.1,2.1,5.8,3,1);return o.rotateZ(Math.PI/2),o.rotateX(Math.PI/6+Math.PI/2),o}),Ye(Tn(s,.62)));n.castShadow=!0,n.scale.set(1,.62,1),n.position.set(0,2.65,-.6),t.add(n);for(const[o,l]of[[-2.3,1.8],[-.8,2.2],[.8,2.2],[2.3,1.8]]){const c=fe(.07,.07,.8,nt.woodDark,5);c.position.set(o,.4,l),t.add(c)}const i=gt(4.6,.1,.1,nt.plank);i.position.set(0,.62,2),t.add(i);const r=Xe(.55,nt.wheat,1);r.scale.y=.6,r.position.set(1.9,.3,1.3),t.add(r);const a=bs(s,3.8);return a.position.set(-2.4,0,-2),t.add(a),t}function f0(s){const t=new Vt,e=gt(5,2.3,4.2,nt.plank);e.position.set(-.3,1.25,0),t.add(e);const n=gt(5.8,.28,5,nt.woodDark);n.position.set(-.3,2.55,0),n.rotation.x=.06,t.add(n);const i=gt(2.2,1.9,.2,4863264);i.position.set(-.3,1,2.15),t.add(i);const r=fe(.5,.5,.14,nt.woodDark,9);r.rotation.x=Math.PI/2,r.rotation.z=.4,r.position.set(2.6,.52,1),t.add(r);const a=gt(.2,.2,2.4,nt.wood);a.position.set(2.5,.2,-.6),a.rotation.y=.5,t.add(a);const o=bs(s,4);return o.position.set(-2.6,0,-1.8),t.add(o),t}const p0={towncenter:s0,house:r0,storehouse:a0,barracks:o0,farm:()=>l0(),archeryrange:c0,tower:h0,wall:()=>u0(),stable:d0,siegeworkshop:f0},bc=Object.fromEntries(Object.entries(p0).map(([s,t])=>[s,e=>Zg(t(e),e)]));function m0(){const s=new Vt,t=Xe(.85,nt.leafDark,1);t.scale.y=.7,t.position.y=.5,s.add(t);const e=Xe(.55,nt.leaf,1);e.position.set(.45,.55,.3),s.add(e);for(let n=0;n<7;n++){const i=n/7*Math.PI*2,r=Xe(.09,nt.berry,0);r.position.set(Math.cos(i)*.66,.55+Math.sin(n*2.4)*.25,Math.sin(i)*.62),s.add(r)}return s}function g0(){const s=new Vt,t=Xe(.95,nt.stoneDark,0);t.scale.set(1.1,.75,1),t.position.y=.45,t.rotation.y=.6,s.add(t);const e=Xe(.6,nt.stone,0);e.position.set(.55,.35,-.4),s.add(e);for(const[n,i,r,a]of[[.3,.85,.3,.22],[-.5,.6,.4,.18],[0,.45,.8,.16],[-.3,.95,-.3,.15]]){const o=Xe(a,nt.gold,0);o.position.set(n,i,r),s.add(o)}return s}function _0(){const s=fe(.22,.3,.4,nt.woodDark,6);return s.position.y=.2,s}function x0(s){const t=new Vt,e=s*2-.6;for(const[a,o]of[[-e/2,-e/2],[e/2,-e/2],[-e/2,e/2],[e/2,e/2]]){const l=fe(.08,.08,2.4,nt.plank,5);l.position.set(a,1.2,o),t.add(l)}const n=gt(e,.1,.3,nt.plank);n.position.set(0,1.7,-e/2),t.add(n);const i=gt(.3,.1,e,nt.plank);i.position.set(e/2,2,0),t.add(i);const r=gt(.9,.4,.6,nt.wood);return r.position.set(.2,.2,.1),t.add(r),t}function v0(s,t){const e=Wa,n=new Vi(le,le,e,e);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3),a=new St(6400073),o=new St(8174937),l=new St(10267480),c=new St(9072456),h=new St(13481847),u=new St(9276032),d=new St;for(let p=0;p<i.count;p++){const y=i.getX(p)+le/2,x=i.getZ(p)+le/2,E=t.heightAt(y,x);i.setX(p,y),i.setZ(p,x),i.setY(p,E);const I=t.moistureAt(y,x),w=(t.noise2(y*.9,x*.9)-.5)*.1;E<Yi+.35?d.copy(h):E>2.6?d.copy(u).lerp(l,Math.max(0,3.8-E)/1.2):(d.copy(a).lerp(o,I),I<.22&&d.lerp(l,(.22-I)*2),I>.85&&d.lerp(c,(I-.85)*1.2)),d.offsetHSL(0,0,w),r[p*3]=d.r,r[p*3+1]=d.g,r[p*3+2]=d.b}n.setAttribute("color",new ze(r,3)),n.computeVertexNormals();const f=zg();f.map.repeat.set(72,72),f.normalMap.wrapS=f.normalMap.wrapT=Bi,f.normalMap.repeat.set(72,72);const g=new te(n,new Ta({vertexColors:!0,map:f.map,normalMap:f.normalMap,normalScale:new ft(.6,.6),roughness:1,metalness:0}));g.receiveShadow=!0,g.name="terrain",s.add(g);const _=Wg();_.repeat.set(34,34);const m=new te(new Vi(le,le),new Ta({color:3504061,transparent:!0,opacity:.78,roughness:.18,metalness:.05,normalMap:_,normalScale:new ft(.55,.55)}));return m.rotation.x=-Math.PI/2,m.position.set(le/2,Yi-.12,le/2),s.add(m),M0(s,t),{ground:g,water:m,waterNormalTex:_}}function M0(s,t){let e=(t.seed^1592651789)>>>0;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296),i=(r,a,o,l,c,h)=>{const u=a(),d=new ar(u,Ye(o),r);d.castShadow=!0;const f=new $t,g=new ji,_=new qe;let m=0,p=0;for(;m<r&&p++<r*12;){const y=n()*le,x=n()*le,[E,I]=t.worldToGrid(y,x);if(!t.isWalkable(E,I)||t.occupantAt(E,I))continue;const w=t.heightAt(y,x),b=c+n()*(h-c);_.set(0,n()*Math.PI*2,0),g.setFromEuler(_),f.compose(new L(y,w+l*b,x),g,new L(b,b,b)),d.setMatrixAt(m++,f)}d.count=m,d.instanceMatrix.needsUpdate=!0,s.add(d)};i(180,()=>new yn(.5,0),9276032,.18,.3,1.1),i(220,()=>new yn(.45,0),5603391,.3,.5,1),i(260,()=>new Wi(.1,.35,5),14210126,.16,.7,1.3),i(140,()=>new Wi(.12,.4,5),12872330,.18,.7,1.2)}class S0{constructor(t,e=900){this.capacity=e;const n=new kn(.16,.26,1.4,6);n.translate(0,.7,0),this.trunks=new ar(n,Ye(nt.woodDark),e);const i=new Wi(1.05,2.9,7);i.translate(0,2.6,0),this.pines=new ar(i,new Xi({color:16777215}),e);const r=new yn(1.25,0);r.scale(1,1.15,1),r.translate(0,2.5,0),this.oaks=new ar(r,new Xi({color:16777215}),e);for(const a of[this.trunks,this.pines,this.oaks])a.castShadow=!0,a.count=e,a.frustumCulled=!1,t.add(a);this.zero=new $t().makeScale(0,0,0);for(let a=0;a<e;a++)this.trunks.setMatrixAt(a,this.zero),this.pines.setMatrixAt(a,this.zero),this.oaks.setMatrixAt(a,this.zero);this.next=0,this.tmpM=new $t,this.tmpC=new St}add(t,e,n,i){const r=this.next++;if(r>=this.capacity)return null;const a=i<.55?"pine":"oak",o=.8+i*7919%1*.5,l=i*31.4;this.tmpM.makeRotationY(l),this.tmpM.scale(new L(o,o*(.9+i*131%1*.35),o)),this.tmpM.setPosition(t,e,n),this.trunks.setMatrixAt(r,this.tmpM);const c=a==="pine"?this.pines:this.oaks;c.setMatrixAt(r,this.tmpM);const h=.8+i*53%1*.45;return this.tmpC.setHex(a==="pine"?3829824:5607486).multiplyScalar(h),c.setColorAt(r,this.tmpC),{idx:r,species:a}}remove(t){t&&(this.trunks.setMatrixAt(t.idx,this.zero),(t.species==="pine"?this.pines:this.oaks).setMatrixAt(t.idx,this.zero),this.flush())}flush(){this.trunks.instanceMatrix.needsUpdate=!0,this.pines.instanceMatrix.needsUpdate=!0,this.oaks.instanceMatrix.needsUpdate=!0,this.pines.instanceColor&&(this.pines.instanceColor.needsUpdate=!0),this.oaks.instanceColor&&(this.oaks.instanceColor.needsUpdate=!0)}}const Ac=new Ha(.75,.95,24);Ac.rotateX(-Math.PI/2);const y0=new Zi({color:5111646,transparent:!0,opacity:.85,depthWrite:!1}),T0=new Zi({color:16731450,transparent:!0,opacity:.85,depthWrite:!1});function Rc(s,t=!0){const e=new te(Ac,t?y0:T0);return e.scale.setScalar(s),e.renderOrder=2,e}const E0=new vr({color:2363408,depthTest:!1});class Cc{constructor(t,e=1.5,n=2.4){this.group=new Vt,this.width=e,this.bg=new ya(E0),this.bg.scale.set(e,.16,1),this.fg=new ya(new vr({color:4641845,depthTest:!1})),this.fg.center.set(0,.5),this.fg.position.x=-e/2,this.fg.scale.set(e,.12,1),this.group.add(this.bg,this.fg),this.group.position.y=n,this.group.renderOrder=5,this.group.visible=!1,t.add(this.group)}set(t,e){if(this.group.visible=e,!e)return;const n=Math.max(.001,Math.min(1,t));this.fg.scale.x=this.width*n,this.fg.material.color.setHex(n>.55?4641845:n>.25?15253536:13907232)}dispose(){this.fg.material.dispose()}}const w0=new oi(.05,.05,.85),b0=new yn(.3,0),A0=new yn(.22,0);class R0{constructor(t,e){this.scene=t,this.game=e,this.projectiles=[],this.particles=[],this.fades=[],this.smokes=[],this.smokeTex=qg()}spawnSmoke(t,e,n,i=!1,r=1){const a=new ya(new vr({map:this.smokeTex,color:i?3025446:14211288,transparent:!0,opacity:i?.5:.32,depthWrite:!1}));a.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),a.scale.setScalar(.6*r),this.scene.add(a),this.smokes.push({m:a,t:0,life:2+Math.random()*1.2,rise:1+Math.random()*.6,drift:(Math.random()-.5)*.5,grow:(1.1+Math.random()*.7)*r,o0:a.material.opacity})}updateBuildingSmoke(t){for(const e of this.game.buildings){if(e.dead||!e.complete||(e.smokeT=(e.smokeT??Math.random())-t,e.smokeT>0))continue;if(e.hp<e.maxHp*.55){e.smokeT=e.hp<e.maxHp*.3?.22:.45;const i=e.size;this.spawnSmoke(e.cx+(Math.random()-.5)*i,e.groundY+e.size+.5,e.cz+(Math.random()-.5)*i,!0,1.4)}else e.type==="house"?(e.smokeT=.8+Math.random()*.5,this.spawnSmoke(e.cx-1.1,e.groundY+3.2,e.cz,!1,.8)):e.type==="towncenter"?(e.smokeT=1.1+Math.random()*.6,this.spawnSmoke(e.cx+e.size-.5,e.groundY+2.2,e.cz+e.size-.5,!1,.9)):e.smokeT=2}}fireArrow(t,e,n,i){const r=new te(w0,Ye(5914920));r.position.copy(t),this.scene.add(r),this.projectiles.push({kind:"arrow",mesh:r,target:e,damage:n,attacker:i,speed:26})}fireStone(t,e,n,i,r){const a=new te(b0,Ye(7236192));a.position.copy(t),this.scene.add(a);const o=t.distanceTo(e);this.projectiles.push({kind:"stone",mesh:a,from:t.clone(),to:e.clone(),t:0,dur:Math.max(.7,o/16),arc:4+o*.22,damage:n,splash:i,attacker:r})}puff(t,e=13290186,n=6,i=4){for(let r=0;r<n;r++){const a=new te(A0,new Xi({color:e,transparent:!0,opacity:.9}));a.position.copy(t);const o=new L((Math.random()-.5)*i,Math.random()*i*.8+1,(Math.random()-.5)*i);this.scene.add(a),this.particles.push({mesh:a,vel:o,life:.6+Math.random()*.4,t:0})}}blood(t){this.puff(t,9051922,4,3)}fadeOut(t,e=1.6,n=1.2){this.fades.push({obj:t,t:0,dur:e,sink:n,y0:t.position.y})}update(t){const e=this.game;this.updateBuildingSmoke(t);for(let n=this.smokes.length-1;n>=0;n--){const i=this.smokes[n];if(i.t+=t,i.t>=i.life){this.scene.remove(i.m),i.m.material.dispose(),this.smokes.splice(n,1);continue}const r=i.t/i.life;i.m.position.y+=i.rise*t,i.m.position.x+=i.drift*t,i.m.scale.setScalar(.6+i.grow*r),i.m.material.opacity=i.o0*(1-r*r)}for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];if(i.kind==="arrow"){const r=i.target;if(!r||r.dead){this.scene.remove(i.mesh),this.projectiles.splice(n,1);continue}const a=r.pos3();a.y+=r.isBuilding?1.6:1.1;const o=a.clone().sub(i.mesh.position),l=o.length(),c=i.speed*t;l<=c+.2?(e.applyDamage(r,i.damage,i.attacker),this.blood(a),this.scene.remove(i.mesh),this.projectiles.splice(n,1)):(o.normalize(),i.mesh.position.addScaledVector(o,c),i.mesh.lookAt(a))}else{i.t+=t;const r=Math.min(1,i.t/i.dur);i.mesh.position.lerpVectors(i.from,i.to,r),i.mesh.position.y+=Math.sin(r*Math.PI)*i.arc,i.mesh.rotation.x+=t*6,r>=1&&(e.splashDamage(i.to,i.splash,i.damage,i.attacker),this.puff(i.to,10127984,10,6),this.scene.remove(i.mesh),this.projectiles.splice(n,1))}}for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.t+=t,i.t>=i.life){this.scene.remove(i.mesh),i.mesh.material.dispose(),this.particles.splice(n,1);continue}i.vel.y-=9*t,i.mesh.position.addScaledVector(i.vel,t),i.mesh.material.opacity=.9*(1-i.t/i.life);const r=1+i.t*1.5;i.mesh.scale.setScalar(r)}for(let n=this.fades.length-1;n>=0;n--){const i=this.fades[n];i.t+=t;const r=i.t/i.dur;if(r>=1){this.scene.remove(i.obj),this.fades.splice(n,1);continue}i.obj.position.y=i.y0-i.sink*r,i.obj.traverse(a=>{a.castShadow!==void 0&&(a.castShadow=!1)})}}}class C0{constructor(){this.a=[]}get size(){return this.a.length}push(t){const e=this.a;e.push(t);let n=e.length-1;for(;n>0;){const i=n-1>>1;if(e[i].f<=e[n].f)break;[e[i],e[n]]=[e[n],e[i]],n=i}}pop(){const t=this.a,e=t[0],n=t.pop();if(t.length){t[0]=n;let i=0;for(;;){const r=i*2+1,a=r+1;let o=i;if(r<t.length&&t[r].f<t[o].f&&(o=r),a<t.length&&t[a].f<t[o].f&&(o=a),o===i)break;[t[o],t[i]]=[t[i],t[o]],i=o}}return e}}const P0=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.4142],[1,-1,1.4142],[-1,1,1.4142],[-1,-1,1.4142]];function D0(s,t,e,n,i,r=9e3){const a=s.size;if(!s.inBounds(t,e))return null;if(!s.isWalkable(t,e)){const x=s.nearestWalkable(t,e,4);if(!x)return null;[t,e]=x}let o=!1;if(!s.isWalkable(n,i)){o=!0;const x=s.nearestWalkable(n,i,12);if(!x)return null;[n,i]=x}if(t===n&&e===i)return[];const l=new Float32Array(a*a).fill(1/0),c=new Int32Array(a*a).fill(-1),h=new Uint8Array(a*a),u=new C0,d=(x,E)=>{const I=Math.abs(x-n),w=Math.abs(E-i);return Math.max(I,w)+.4142*Math.min(I,w)},f=e*a+t;l[f]=0,u.push({i:f,x:t,y:e,f:d(t,e)});let g=f,_=d(t,e),m=0;for(;u.size&&m++<r;){const x=u.pop();if(h[x.i])continue;h[x.i]=1;const E=d(x.x,x.y);if(E<_&&(_=E,g=x.i),x.x===n&&x.y===i){g=x.i;break}for(const[I,w,b]of P0){const D=x.x+I,T=x.y+w;if(D<0||T<0||D>=a||T>=a)continue;const v=T*a+D;if(h[v]||s.walk[v]!==1||I!==0&&w!==0&&(s.walk[x.y*a+D]!==1||s.walk[T*a+x.x]!==1))continue;const R=l[x.i]+b;R<l[v]&&(l[v]=R,c[v]=x.i,u.push({i:v,x:D,y:T,f:R+d(D,T)}))}}const p=[];let y=g;if(y===f&&!(o||_<d(t,e)))return null;for(;y!==f&&y>=0;)p.push([y%a,y/a|0]),y=c[y];return p.reverse(),I0(s,t,e,p)}function L0(s,t,e,n,i){let r=Math.abs(n-t),a=Math.abs(i-e);const o=t<n?1:-1,l=e<i?1:-1;let c=r-a,h=t,u=e;for(;;){if(!s.isWalkable(h,u))return!1;if(h===n&&u===i)return!0;const d=2*c;if(d>-a){if(d<r&&!(s.isWalkable(h+o,u)&&s.isWalkable(h,u+l)))return!1;c-=a,h+=o}d<r&&(c+=r,u+=l)}}function I0(s,t,e,n){if(n.length<3)return n;const i=[];let r=t,a=e,o=0;for(;o<n.length;){let l=o;for(let c=n.length-1;c>o;c--)if(!(c-o>40)&&L0(s,r,a,n[c][0],n[c][1])){l=c;break}i.push(n[l]),[r,a]=n[l],o=l+1}return i}let U0=1;class N0{constructor(t,e,n,i,r){this.id=U0++,this.game=t,this.type=e,this.def=_n[e],this.owner=n,this.isUnit=!0,this.x=i,this.z=r,this.facing=Math.random()*Math.PI*2,this.radius=e==="knight"?.8:e==="catapult"?.95:.5;const a=wa[t.players[n].age-1];this.maxHp=Math.round(this.def.hp*a),this.hp=this.maxHp,this.dead=!1,this.order=null,this.state="idle",this.path=null,this.wpIdx=0,this.pathGoal=null,this.repathT=0,this.carry=null,this.actionT=0,this.scanT=Math.random()*.5,this.animT=Math.random()*10,this.moving=!1;const o=i0[e](t.teamColor(n));o.position.set(i,t.map.heightAt(i,r),r),o.userData.entity=this,this.group=o,this.limbs=o.userData.limbs||{},t.scene.add(o),this.selRing=Rc(this.radius+.55,n===0),this.selRing.visible=!1,o.add(this.selRing);const l=e==="knight"?2.9:e==="catapult"?2.4:2.3;this.healthBar=new Cc(o,1.4,l),this.selected=!1,this.carryMesh=null}pos3(){return new L(this.x,this.group.position.y,this.z)}setSelected(t){this.selected=t,this.selRing.visible=t}clearOrder(){this.order=null,this.state="idle",this.path=null}orderMove(t,e){this.order={kind:"move",x:t,z:e},this.state="move",this.requestPath(t,e)}orderGather(t){this.type!=="villager"||!t||t.amount<=0||(this.order={kind:"gather",node:t},this.state="toResource",this.requestPath(t.wx,t.wz))}orderGatherFarm(t){this.type!=="villager"||!t||!t.complete||(this.order={kind:"farm",farm:t},this.state="toResource",this.requestPath(t.cx,t.cz))}orderBuild(t){this.type!=="villager"||!t||t.complete||(this.order={kind:"build",building:t},this.state="toBuild",this.requestPath(t.cx,t.cz))}orderAttack(t){if(!t||t.dead)return;this.order={kind:"attack",target:t},this.state="toAttack";const e=t.isBuilding?{x:t.cx,z:t.cz}:{x:t.x,z:t.z};this.requestPath(e.x,e.z)}orderAttackMove(t,e){this.order={kind:"attackmove",x:t,z:e},this.state="move",this.requestPath(t,e)}requestPath(t,e){const n=this.game.map,[i,r]=n.worldToGrid(this.x,this.z),[a,o]=n.worldToGrid(t,e),l=D0(n,i,r,a,o);if(this.pathGoal=[a,o],this.repathT=.8+Math.random()*.4,!l||l.length===0){this.path=null;return}if(this.path=l.map(([c,h])=>n.gridToWorld(c,h)),n.isWalkable(a,o)){const c=this.path[this.path.length-1];c[0]=t,c[1]=e}this.wpIdx=0}distTo(t){if(t.isBuilding){const e=t.def.size*ie/2,n=Math.max(Math.abs(this.x-t.cx)-e,0),i=Math.max(Math.abs(this.z-t.cz)-e,0);return Math.hypot(n,i)}return Math.hypot(this.x-t.x,this.z-t.z)-(t.radius||0)}distToNode(t){const e=Math.max(Math.abs(this.x-t.wx)-ie*.5,0),n=Math.max(Math.abs(this.z-t.wz)-ie*.5,0);return Math.hypot(e,n)}update(t){if(!this.dead){switch(this.animT+=t,this.actionT-=t,this.moving=!1,this.state){case"idle":this.updateIdle(t);break;case"move":this.updateMove(t);break;case"toResource":this.updateToResource(t);break;case"gathering":this.updateGathering(t);break;case"deposit":this.updateDeposit(t);break;case"toBuild":this.updateToBuild(t);break;case"building":this.updateBuilding(t);break;case"toAttack":this.updateToAttack(t);break;case"fighting":this.updateFighting(t);break}this.animate(t)}}updateIdle(t){if(this.def.aggro>0&&(this.scanT-=t,this.scanT<=0)){this.scanT=.45;const e=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro,!0);e&&this.engage(e,!0)}}engage(t,e=!1){const n=e?this.order:null;this.order={kind:"attack",target:t,resume:n},this.state="toAttack",this.requestPath(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z)}resumeOrAcquire(){var e;const t=(e=this.order)==null?void 0:e.resume;if(t&&(this.order=t,t.kind==="move"||t.kind==="attackmove")){this.state="move",this.requestPath(t.x,t.z);return}if(this.def.aggro>0){const n=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro+2,!0);if(n){this.engage(n);return}}this.clearOrder()}updateMove(t){var e;if(((e=this.order)==null?void 0:e.kind)==="attackmove"&&this.def.aggro>0&&(this.scanT-=t,this.scanT<=0)){this.scanT=.4;const n=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro,!0);if(n){this.engage(n,!0);return}}if(this.followPath(t)){const n=this.order;this.clearOrder(),(n==null?void 0:n.kind)==="attackmove"&&(this.scanT=0)}}updateToResource(t){const e=this.order;if(!e){this.state="idle";return}if(e.kind==="gather"){const n=e.node;if(!n||n.amount<=0){this.findNextNode(n);return}if(this.distToNode(n)<1.5){this.state="gathering",this.actionT=0,this.faceTowards(n.wx,n.wz);return}}else{const n=e.farm;if(!n||n.dead||!n.complete){this.clearOrder();return}if(this.distTo(n)<1.6){this.state="gathering",this.actionT=0,this.faceTowards(n.cx,n.cz);return}}if(this.followPath(t)){const n=e.kind==="gather"?e.node.wx:e.farm.cx,i=e.kind==="gather"?e.node.wz:e.farm.cz;this.repathT<=0?this.clearOrder():this.requestPath(n,i)}this.repathT-=t}updateGathering(t){const e=this.order;if(!e){this.state="idle";return}const n=e.kind==="farm",i=n?e.farm:e.node;if(!i||i.dead||!n&&i.amount<=0){n?this.clearOrder():this.findNextNode(i);return}const r=n?"food":i.res;if(this.carry&&(this.carry.res!==r||this.carry.amt>=Pl)){this.goDeposit();return}if(this.actionT<=0){this.actionT=1/(n?i.def.farmRate:this.def.gatherRate),this.carry||(this.carry={res:r,amt:0});const a=n?1:Math.min(1,i.amount);this.carry.amt+=a,n||(i.amount-=a,i.amount<=0&&this.game.depleteNode(i),i.res==="wood"&&Math.random()<.3&&this.game.sound("chop")),this.updateCarryMesh(),this.carry.amt>=Pl&&this.goDeposit()}}goDeposit(){const t=this.game.findDropoff(this.owner,this.x,this.z);if(!t){this.clearOrder();return}this.order.drop=t,this.state="deposit",this.requestPath(t.cx,t.cz)}updateDeposit(t){const e=this.order;if(!e){this.state="idle";return}let n=e.drop;if(!n||n.dead){if(n=this.game.findDropoff(this.owner,this.x,this.z),!n){this.clearOrder();return}e.drop=n,this.requestPath(n.cx,n.cz)}if(this.distTo(n)<1.7){this.carry&&(this.game.players[this.owner].res[this.carry.res]+=Math.round(this.carry.amt),this.carry=null,this.updateCarryMesh()),e.kind==="gather"&&e.node&&e.node.amount>0?(this.state="toResource",this.requestPath(e.node.wx,e.node.wz)):e.kind==="farm"&&e.farm&&!e.farm.dead?(this.state="toResource",this.requestPath(e.farm.cx,e.farm.cz)):e.kind==="gather"?this.findNextNode(e.node):this.clearOrder();return}this.followPath(t)&&this.distTo(n)>=1.7&&this.requestPath(n.cx,n.cz)}findNextNode(t){if(!t){this.clearOrder();return}const e=this.game.findNearestNode(t.res,t.wx,t.wz,18);e?this.carry&&this.carry.amt>0&&this.carry.res===t.res?(this.order={kind:"gather",node:e},this.goDeposit()):this.orderGather(e):this.carry&&this.carry.amt>0?(this.order={kind:"gather",node:null},this.goDeposit()):this.clearOrder()}updateToBuild(t){var n;const e=(n=this.order)==null?void 0:n.building;if(!e||e.dead||e.complete){if(e&&e.complete&&e.def.isFarm){this.orderGatherFarm(e);return}this.clearOrder();return}if(this.distTo(e)<1.6){this.state="building",this.faceTowards(e.cx,e.cz);return}this.followPath(t)&&(this.repathT<=0?this.clearOrder():this.requestPath(e.cx,e.cz)),this.repathT-=t}updateBuilding(t){var n;const e=(n=this.order)==null?void 0:n.building;if(!e||e.dead){this.clearOrder();return}if(e.complete){if(e.def.isFarm){this.orderGatherFarm(e);return}this.clearOrder();return}if(this.distTo(e)>2.4){this.state="toBuild",this.requestPath(e.cx,e.cz);return}e.constructionTick(t),this.actionT<=0&&(this.actionT=.5,Math.random()<.5&&this.game.sound("hammer"))}attackRange(t){return t.isBuilding?Math.max(this.def.range,1.6):Math.max(this.def.range,this.radius+.2)}updateToAttack(t){var i;const e=(i=this.order)==null?void 0:i.target;if(!e||e.dead){this.resumeOrAcquire();return}const n=this.attackRange(e);if(this.distTo(e)<=n){this.state="fighting";return}this.repathT-=t,this.repathT<=0&&!e.isBuilding&&this.requestPath(e.x,e.z),this.followPath(t)&&this.distTo(e)>n&&this.requestPath(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z)}updateFighting(t){var r;const e=(r=this.order)==null?void 0:r.target;if(!e||e.dead){this.resumeOrAcquire();return}const n=this.attackRange(e),i=this.distTo(e);if(i>n+.6){this.state="toAttack",this.requestPath(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z);return}if(this.def.minRange&&i<this.def.minRange){const a=Math.atan2(this.z-(e.isBuilding?e.cz:e.z),this.x-(e.isBuilding?e.cx:e.x));this.requestPath(this.x+Math.cos(a)*5,this.z+Math.sin(a)*5),this.state="toAttack";return}this.faceTowards(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z),this.actionT<=0&&(this.actionT=this.def.atkSpeed,this.strike(e))}strike(t){const e=this.game,n=Math.round(this.def.atk*Sg[e.players[this.owner].age-1]);if(this.attackAnimT=.35,this.def.projectile==="arrow"){const i=this.pos3();i.y+=1.5,e.effects.fireArrow(i,t,n,this),e.sound("arrow")}else if(this.def.projectile==="stone"){const i=this.pos3();i.y+=1.6;const r=t.isBuilding?new L(t.cx,t.groundY,t.cz):t.pos3();let a=n;t.isBuilding&&this.def.bonusVsBuilding&&(a=Math.round(n*this.def.bonusVsBuilding)),e.effects.fireStone(i,r,a,this.def.splash||0,this),e.sound("catapult"),this.limbs.throwArm&&(this.throwAnimT=.5)}else{let i=n;t.isBuilding&&(i=Math.max(1,Math.round(n*(this.type==="villager"?.6:.8)))),e.applyDamage(t,i,this),e.effects.blood(t.isBuilding?new L(t.cx,t.groundY+1.2,t.cz):t.pos3().setY(this.group.position.y+1.1)),e.sound("melee")}}followPath(t){if(!this.path||this.wpIdx>=this.path.length)return this.applySeparation(t,!1),!0;const[e,n]=this.path[this.wpIdx],i=e-this.x,r=n-this.z,a=Math.hypot(i,r),o=this.def.speed*t;if(a<=Math.max(o,.25))return this.wpIdx++,this.wpIdx>=this.path.length?(this.path=null,!0):!1;const l=i/a,c=r/a;return this.tryStep(l*o,c*o),this.facing=F0(this.facing,Math.atan2(l,c),Math.min(1,t*10)),this.moving=!0,this.applySeparation(t,!0),!1}tryStep(t,e){const n=this.game.map;let i=this.x+t,r=this.z+e;const[a,o]=n.worldToGrid(i,r);if(n.isWalkable(a,o))return this.x=i,this.z=r,!0;const[l,c]=n.worldToGrid(this.x+t,this.z);if(n.isWalkable(l,c))return this.x+=t,!0;const[h,u]=n.worldToGrid(this.x,this.z+e);return n.isWalkable(h,u)?(this.z+=e,!0):!1}applySeparation(t,e){const n=this.game.unitsNear(this.x,this.z,1.8+this.radius);let i=0,r=0;for(const a of n){if(a===this||a.dead)continue;const o=this.x-a.x,l=this.z-a.z,c=Math.hypot(o,l),h=this.radius+a.radius+(e?.05:.18);if(c<h&&c>.001){const u=(h-c)/h;i+=o/c*u,r+=l/c*u}else if(c<=.001){const u=Math.random()*Math.PI*2;i+=Math.cos(u),r+=Math.sin(u)}}if(i||r){const a=(e?2.4:4.5)*t;this.tryStep(i*a,r*a)}}faceTowards(t,e){this.facing=Math.atan2(t-this.x,e-this.z)}updateCarryMesh(){const t=this.carry&&this.carry.amt>0;if(t&&!this.carryMesh){const e={wood:9069114,food:12729147,gold:15251747},n=new te(new yn(.18,0),new Xi({color:e[this.carry.res]}));n.position.set(0,1.65,-.34),this.group.add(n),this.carryMesh=n}else if(!t&&this.carryMesh)this.group.remove(this.carryMesh),this.carryMesh.material.dispose(),this.carryMesh=null;else if(t&&this.carryMesh){const e={wood:9069114,food:12729147,gold:15251747};this.carryMesh.material.color.setHex(e[this.carry.res])}}animate(t){const e=this.group;e.position.x=this.x,e.position.z=this.z,e.position.y=this.game.map.heightAt(this.x,this.z),e.rotation.y=this.facing;const n=this.limbs,i=this.animT;if(this.attackAnimT>0&&(this.attackAnimT-=t),this.throwAnimT>0&&(this.throwAnimT-=t),e.userData.isMounted){const r=this.moving?13:0;for(let a=0;a<4;a++){const o=n["hLeg"+a];o&&(o.rotation.x=this.moving?Math.sin(i*r+a*1.7)*.6:0)}n.rArm&&(n.rArm.rotation.x=this.attackAnimT>0?-.7:0),e.position.y+=this.moving?Math.abs(Math.sin(i*r*.5))*.12:0}else if(e.userData.isMachine){if(n.throwArm){const r=this.throwAnimT>0?-2:-.5;n.throwArm.rotation.x+=(r-n.throwArm.rotation.x)*Math.min(1,t*(this.throwAnimT>0?18:3))}}else{const r=this.state==="gathering"||this.state==="building";if(this.moving){const o=Math.sin(i*11)*.65;n.lLeg&&(n.lLeg.rotation.x=o),n.rLeg&&(n.rLeg.rotation.x=-o),n.lArm&&(n.lArm.rotation.x=-o*.7),n.rArm&&(n.rArm.rotation.x=o*.7)}else if(r){const a=Math.sin(i*6.5);n.rArm&&(n.rArm.rotation.x=-1.2+a*.7),n.lArm&&(n.lArm.rotation.x=-.2+a*.18),n.lLeg&&(n.lLeg.rotation.x=0),n.rLeg&&(n.rLeg.rotation.x=0)}else if(this.attackAnimT>0)n.rArm&&(n.rArm.rotation.x=-1.9+(.35-this.attackAnimT)*5),n.lArm&&(n.lArm.rotation.x=.3);else{const a=Math.sin(i*1.6)*.04;for(const o of["lLeg","rLeg","lArm","rArm"])n[o]&&(n[o].rotation.x*=.85);n.lArm&&(n.lArm.rotation.x+=a)}}this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp)}}function F0(s,t,e){let n=t-s;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return s+n*e}let O0=1e5;class B0{constructor(t,e,n,i,r,a=!1){this.id=O0++,this.game=t,this.type=e,this.def=qi[e],this.owner=n,this.isBuilding=!0,this.gx=i,this.gy=r,this.size=this.def.size,this.cx=(i+this.size/2)*ie,this.cz=(r+this.size/2)*ie,this.dead=!1,this.maxHp=this.def.hp,this.complete=a,this.progress=a?1:0,this.hp=a?this.maxHp:Math.max(1,Math.round(this.maxHp*.08)),this.trainQueue=[],this.trainT=0,this.researching=null,this.rally=null,this.atkCd=0,this.scanT=Math.random()*.4,this.atkTarget=null,t.map.occupy(i,r,this.size,this);let o=0;for(let u=r;u<r+this.size;u++)for(let d=i;d<i+this.size;d++)o+=t.map.tileHeight(d,u);this.groundY=o/(this.size*this.size)-.06;const l=new Vt;l.position.set(this.cx,this.groundY,this.cz),l.userData.entity=this,this.modelGroup=bc[e](t.teamColor(n)),l.add(this.modelGroup),this.group=l,t.scene.add(l),a||(this.scaffold=x0(this.size),l.add(this.scaffold),this.modelGroup.scale.y=.1);const c=this.size*ie*.62;this.selRing=Rc(c,n===0),this.selRing.visible=!1,this.selRing.position.y=.12,l.add(this.selRing);const h=e==="towncenter"?8.2:e==="tower"?7:4.2;this.healthBar=new Cc(l,Math.min(4.5,this.size*1.5),h),this.selected=!1}pos3(){return new L(this.cx,this.groundY,this.cz)}setSelected(t){this.selected=t,this.selRing.visible=t}constructionTick(t){if(this.complete||this.dead)return;const e=t/this.def.buildTime;this.progress=Math.min(1,this.progress+e),this.hp=Math.min(this.maxHp,this.hp+e*this.maxHp*.92),this.modelGroup.scale.y=.1+this.progress*.9,this.progress>=1&&this.finishConstruction()}finishConstruction(){this.complete=!0,this.hp=Math.max(this.hp,this.maxHp*.95),this.modelGroup.scale.y=1,this.scaffold&&(this.group.remove(this.scaffold),this.scaffold=null),this.game.onBuildingComplete(this)}canTrain(t){const e=_n[t],n=this.game.players[this.owner];return this.complete&&e&&n.age>=e.age}queueTrain(t){const e=_n[t],n=this.game.players[this.owner];return!this.canTrain(t)||this.trainQueue.length>=5||!Nn(n.res,e.cost)?!1:(ba(n.res,e.cost),this.trainQueue.push(t),this.trainQueue.length===1&&(this.trainT=0),!0)}cancelTrain(t){const e=this.trainQueue[t];e&&(wg(this.game.players[this.owner].res,_n[e].cost),this.trainQueue.splice(t,1),t===0&&(this.trainT=0))}startAgeResearch(){const t=this.game.players[this.owner];if(this.researching||t.ageResearchInProgress||t.age>=tn.length)return!1;const e=tn[t.age];return Nn(t.res,e.cost)?(ba(t.res,e.cost),this.researching={age:t.age+1,t:0,dur:e.time},t.ageResearchInProgress=!0,!0):!1}update(t){if(this.dead)return;if(this.complete&&this.trainQueue.length>0){const n=this.trainQueue[0],i=_n[n],r=this.game.players[this.owner];this.trainT+=t,this.trainT>=i.trainTime&&(r.popUsed<r.popCap?(this.trainQueue.shift(),this.trainT=0,this.game.spawnFromBuilding(this,n)):this.trainT=i.trainTime)}this.researching&&(this.researching.t+=t,this.researching.t>=this.researching.dur&&(this.game.advanceAge(this.owner,this.researching.age),this.researching=null));const e=this.def.attack;if(e&&this.complete&&(this.atkCd-=t,this.scanT-=t,(!this.atkTarget||this.atkTarget.dead||this.targetOutOfRange())&&this.scanT<=0&&(this.scanT=.5,this.atkTarget=this.game.nearestEnemy(this.owner,this.cx,this.cz,e.range,!0)),this.atkTarget&&!this.atkTarget.dead&&this.atkCd<=0&&!this.targetOutOfRange())){this.atkCd=e.atkSpeed;const n=this.pos3();n.y+=this.type==="tower"?5.4:6.5,this.game.effects.fireArrow(n,this.atkTarget,e.atk,this),this.game.sound("arrow")}this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp-.5)}targetOutOfRange(){const t=this.atkTarget;if(!t)return!0;const e=t.isBuilding?t.cx:t.x,n=t.isBuilding?t.cz:t.z;return Math.hypot(e-this.cx,n-this.cz)>this.def.attack.range+1}spawnPoint(){var a,o;const t=this.game.map,e=((a=this.rally)==null?void 0:a.x)??this.cx,n=((o=this.rally)==null?void 0:o.z)??this.cz+(this.size+1)*ie;let i=null,r=1/0;for(let l=0;l<4;l++){for(let c=this.gy-1-l;c<=this.gy+this.size+l;c++)for(let h=this.gx-1-l;h<=this.gx+this.size+l;h++){if(!(h<this.gx-l||h>=this.gx+this.size+l||c<this.gy-l||c>=this.gy+this.size+l)||!t.isWalkable(h,c))continue;const[d,f]=t.gridToWorld(h,c),g=Math.hypot(d-e,f-n);g<r&&(r=g,i=[d,f])}if(i)return i}return[this.cx,this.cz]}}let z0=1;class k0{constructor(t,e,n){this.scene=t,this.map=e,this.trees=n,this.effects=null,this.ai=null,this.time=0,this.gameOver=!1,this.players=[Qt,Ss].map(i=>({id:i,res:{...Eg},age:1,popUsed:0,popCap:0,ageResearchInProgress:!1})),this.units=[],this.buildings=[],this.nodes=[],this.stumps=[],this.hash=new Map,this.cell=4,this.treeNodeByInstance=new Map,this.onAlert=()=>{},this.soundFn=()=>{},this.onGameOver=()=>{},this.onCombat=()=>{},this.lastAttackAlert=-99}teamColor(t){return Mg[t]}sound(t){this.soundFn(t)}createResourceNodes(t){let e=12345;const n=()=>(e=e*1664525+1013904223>>>0,e/4294967296);for(const i of t){const[r,a]=this.map.gridToWorld(i.gx,i.gy),o=Tg[i.type],l={id:z0++,isNode:!0,type:i.type,res:o.res,amount:o.amount,gx:i.gx,gy:i.gy,wx:r,wz:a,dead:!1},c=this.map.heightAt(r,a);if(i.type==="tree")l.treeHandle=this.trees.add(r,c-.1,a,n()),l.treeHandle&&this.treeNodeByInstance.set(l.treeHandle.idx,l);else{const h=i.type==="berry"?m0():g0();h.position.set(r,c-.05,a),h.rotation.y=n()*Math.PI*2,h.userData.node=l,this.scene.add(h),l.mesh=h}this.map.occupant[i.gy*this.map.size+i.gx]=l,this.nodes.push(l)}this.trees.flush()}spawnUnit(t,e,n,i){const r=new N0(this,t,e,n,i);return this.units.push(r),this.players[e].popUsed+=1,r}spawnFromBuilding(t,e){const[n,i]=t.spawnPoint(),r=this.spawnUnit(e,t.owner,n,i),a=t.rally;return a&&(a.node&&!a.node.dead&&a.node.amount>0&&e==="villager"?r.orderGather(a.node):a.farm&&!a.farm.dead&&e==="villager"?r.orderGatherFarm(a.farm):a.x!==void 0&&(e!=="villager"?r.orderAttackMove(a.x,a.z):r.orderMove(a.x,a.z))),t.owner===Qt&&this.sound("ready"),r}placeBuilding(t,e,n,i,r=!1){const a=qi[e],o=this.players[t];if(!a)return null;if(!r){if(o.age<a.age||!Nn(o.res,a.cost)||!this.map.canPlace(n,i,a.size))return null;ba(o.res,a.cost)}const l=new B0(this,e,t,n,i,r);return this.buildings.push(l),r&&this.onBuildingComplete(l,!0),l}onBuildingComplete(t,e=!1){this.recalcPop(t.owner),!e&&t.owner===Qt&&this.sound("built")}recalcPop(t){let e=0;for(const n of this.buildings)n.owner===t&&n.complete&&!n.dead&&n.def.pop&&(e+=n.def.pop);this.players[t].popCap=Math.min(e,vg)}advanceAge(t,e){const n=this.players[t],i=wa[n.age-1];n.age=e,n.ageResearchInProgress=!1;const r=wa[e-1]/i;for(const a of this.units)a.owner===t&&!a.dead&&(a.maxHp=Math.round(a.maxHp*r),a.hp=Math.min(a.maxHp,Math.round(a.hp*r)));t===Qt?(this.onAlert(`You have advanced to the ${tn[e-1].name}!`,!0),this.sound("ageup")):this.onAlert(`The enemy has advanced to the ${tn[e-1].name}.`)}applyDamage(t,e,n){!t||t.dead||this.gameOver||(t.hp-=e,(t.owner===Qt||(n==null?void 0:n.owner)===Qt)&&this.onCombat(),t.owner===Qt&&this.time-this.lastAttackAlert>14&&(this.lastAttackAlert=this.time,this.onAlert("Your forces are under attack!"),this.sound("horn")),t.isUnit&&n&&!n.dead&&(t.state==="idle"||t.state==="gathering"||t.state==="toResource"||t.state==="deposit"||t.state==="move")&&n.isUnit&&(t.type!=="villager"||n.def.range<=1.5)&&t.engage(n,!0),this.ai&&this.ai.onDamage(t,n),t.hp<=0&&(t.isUnit?this.killUnit(t):this.razeBuilding(t)))}splashDamage(t,e,n,i){var r;if(!(e<=0)){for(const a of[...this.units]){if(a.dead||a===i)continue;const o=Math.hypot(a.x-t.x,a.z-t.z);o<=e&&this.applyDamage(a,Math.round(n*(o<e*.5?1:.55)),i)}for(const a of[...this.buildings]){if(a.dead)continue;const o=a.size*ie/2,l=Math.max(Math.abs(t.x-a.cx)-o,0),c=Math.max(Math.abs(t.z-a.cz)-o,0);if(Math.hypot(l,c)<=e){const h=(r=i==null?void 0:i.def)!=null&&r.bonusVsBuilding&&i.owner!==a.owner?i.def.bonusVsBuilding:1;this.applyDamage(a,Math.round(n*h*.8),i)}}}}killUnit(t){t.dead||(t.dead=!0,t.setSelected(!1),t.healthBar.set(0,!1),this.players[t.owner].popUsed-=1,this.units.splice(this.units.indexOf(t),1),this.effects.blood(t.pos3().setY(t.group.position.y+.8)),this.effects.fadeOut(t.group,1.4,1),this.sound("die"),this.checkWinLose())}razeBuilding(t){t.dead||(t.dead=!0,t.setSelected(!1),t.healthBar.set(0,!1),this.map.release(t.gx,t.gy,t.size),this.buildings.splice(this.buildings.indexOf(t),1),this.recalcPop(t.owner),t.researching&&(this.players[t.owner].ageResearchInProgress=!1),this.effects.puff(new L(t.cx,t.groundY+1.5,t.cz),9075296,16,7),this.effects.fadeOut(t.group,2.2,t.size*1.2),this.sound("collapse"),t.owner===Qt&&this.onAlert(`Your ${t.def.name} has been destroyed!`),this.ai&&this.ai.onBuildingLost(t),this.checkWinLose())}depleteNode(t){if(!t.dead)if(t.dead=!0,t.amount=0,this.map.release(t.gx,t.gy,1),this.nodes.splice(this.nodes.indexOf(t),1),t.treeHandle!==void 0&&t.treeHandle!==null){this.trees.remove(t.treeHandle);const e=_0();e.position.set(t.wx,this.map.heightAt(t.wx,t.wz)-.05,t.wz),this.scene.add(e),this.sound("treefall")}else t.mesh&&this.effects.fadeOut(t.mesh,1.2,.8)}findDropoff(t,e,n){let i=null,r=1/0;for(const a of this.buildings){if(a.owner!==t||!a.complete||a.dead||!a.def.dropoff)continue;const o=Math.hypot(a.cx-e,a.cz-n);o<r&&(r=o,i=a)}return i}findNearestNode(t,e,n,i=30){let r=null,a=1/0;for(const o of this.nodes){if(o.dead||o.res!==t||o.amount<=0)continue;const l=Math.hypot(o.wx-e,o.wz-n);l<a&&l<=i&&(a=l,r=o)}return r}nearestEnemy(t,e,n,i,r=!1){let a=null,o=1/0;for(const l of this.units){if(l.owner===t||l.dead)continue;const c=Math.hypot(l.x-e,l.z-n);c<=i&&c<o&&(o=c,a=l)}if(r)for(const l of this.buildings){if(l.owner===t||l.dead)continue;const c=l.size*ie/2,h=Math.max(Math.abs(e-l.cx)-c,0),u=Math.max(Math.abs(n-l.cz)-c,0),d=Math.hypot(h,u)+4;Math.hypot(h,u)<=i&&d<o&&(o=d,a=l)}return a}hashKey(t,e){return(t/this.cell|0)*4096+(e/this.cell|0)}rebuildHash(){this.hash.clear();for(const t of this.units){const e=this.hashKey(t.x,t.z);let n=this.hash.get(e);n||(n=[],this.hash.set(e,n)),n.push(t)}}unitsNear(t,e,n){const i=[],r=this.cell,a=(t-n)/r|0,o=(t+n)/r|0,l=(e-n)/r|0,c=(e+n)/r|0;for(let h=a;h<=o;h++)for(let u=l;u<=c;u++){const d=this.hash.get(h*4096+u);if(d)for(const f of d)Math.hypot(f.x-t,f.z-e)<=n&&i.push(f)}return i}countBuildings(t){let e=0;for(const n of this.buildings)n.owner===t&&!n.dead&&e++;return e}update(t){if(this.gameOver){this.effects.update(t);return}this.time+=t,this.rebuildHash();for(const e of[...this.units])e.update(t);for(const e of[...this.buildings])e.update(t);this.ai&&this.ai.update(t),this.effects.update(t)}checkWinLose(){if(this.gameOver||this.time<5)return;const t=this.countBuildings(Qt)>0;this.countBuildings(Ss)>0?t||(this.gameOver=!0,this.onGameOver(!1)):(this.gameOver=!0,this.onGameOver(!0))}}const Nl=[9,13,17,20],H0=[7,12,18,26],G0=[8,10,13,17];class V0{constructor(t,e,n){this.game=t,this.me=Ss,this.baseGx=e,this.baseGy=n;const[i,r]=t.map.gridToWorld(e,n);this.baseX=i,this.baseZ=r,this.ecoT=0,this.stratT=3,this.waveT=150,this.defendT=0,this.attackTargetT=0,this.attacking=!1,this.trickleT=0}p(){return this.game.players[this.me]}myUnits(t){return this.game.units.filter(e=>e.owner===this.me&&!e.dead&&(!t||e.type===t))}myBuildings(t){return this.game.buildings.filter(e=>e.owner===this.me&&!e.dead&&(!t||e.type===t))}army(){return this.game.units.filter(t=>t.owner===this.me&&!t.dead&&t.type!=="villager")}update(t){if(this.ecoT-=t,this.stratT-=t,this.waveT-=t,this.defendT-=t,this.trickleT+=t,this.trickleT>=5){this.trickleT-=5;const e=this.p().res;e.wood+=3,e.food+=3,e.gold+=2}this.ecoT<=0&&(this.ecoT=1.4,this.economy()),this.stratT<=0&&(this.stratT=2.6,this.strategy()),this.waveT<=0&&this.tryAttack(),this.attacking&&(this.attackTargetT-=t,this.attackTargetT<=0&&(this.attackTargetT=6,this.retarget()))}economy(){const t=this.p(),e=this.myUnits("villager"),n=this.myBuildings("towncenter")[0];n&&n.complete&&e.length+n.trainQueue.length<Nl[t.age-1]&&n.trainQueue.length<2&&n.queueTrain("villager"),t.popCap-t.popUsed<4&&t.popCap<120&&(this.myBuildings("house").some(o=>!o.complete)||this.construct("house"));const i=e.filter(a=>a.state==="idle");if(i.length){const a=this.neededResource(e);for(const o of i)if(a==="food"){const l=this.freeFarm(e);if(l){o.orderGatherFarm(l);continue}const c=this.game.findNearestNode("food",o.x,o.z,55);if(c){o.orderGather(c);continue}if(!this.construct("farm",o)){const h=this.game.findNearestNode("wood",o.x,o.z,60);h&&o.orderGather(h)}}else{const l=this.game.findNearestNode(a,this.baseX,this.baseZ,70)||this.game.findNearestNode("wood",o.x,o.z,70);l&&o.orderGather(l)}}const r=this.myBuildings("farm");t.age>=2&&r.length<3+t.age&&t.res.wood>150&&this.construct("farm")}neededResource(t){const e={wood:0,food:0,gold:0};for(const l of t){const c=l.order;c&&(c.kind==="farm"?e.food++:c.kind==="gather"&&c.node&&e[c.node.res]++)}const i=this.p().age===1?{wood:.38,food:.45,gold:.17}:{wood:.34,food:.38,gold:.28},r=Math.max(1,e.wood+e.food+e.gold);let a="food",o=-1/0;for(const l of["wood","food","gold"]){const c=i[l]-e[l]/r;c>o&&(o=c,a=l)}return a}freeFarm(t){var n;const e=new Set;for(const i of t)((n=i.order)==null?void 0:n.kind)==="farm"&&i.order.farm&&e.add(i.order.farm.id);return this.myBuildings("farm").find(i=>i.complete&&!e.has(i.id))||null}strategy(){const t=this.p(),e=this.myUnits("villager"),n=this.myBuildings("towncenter")[0];if(!n){t.res.wood>=qi.towncenter.cost.wood&&this.construct("towncenter");return}if(e.length>=6&&this.myBuildings("barracks").length===0&&this.construct("barracks"),this.myBuildings("storehouse").length===0&&e.length>=7){const r=this.game.findNearestNode("gold",this.baseX,this.baseZ,70);r&&Math.hypot(r.wx-this.baseX,r.wz-this.baseZ)>24&&this.constructNear("storehouse",r.wx,r.wz)}if(t.age>=2&&(this.myBuildings("archeryrange").length===0&&this.construct("archeryrange"),this.myBuildings("tower").length<2&&t.res.wood>200&&this.construct("tower")),t.age>=3&&this.myBuildings("stable").length===0&&this.construct("stable"),t.age>=4&&this.myBuildings("siegeworkshop").length===0&&this.construct("siegeworkshop"),!t.ageResearchInProgress&&t.age<tn.length){const r=tn[t.age];if(e.length>=Nl[t.age-1]-2&&Nn(t.res,r.cost)&&n.complete){const o=t.age===1?60:120;t.res.food>=(r.cost.food||0)+o*.5&&n.startAgeResearch()}}if(this.army().length<H0[t.age-1]){for(const r of this.myBuildings())if(!(!r.complete||!r.def.trains||r.type==="towncenter")&&!(r.trainQueue.length>=2))for(const a of r.def.trains)t.age>=_n[a].age&&r.queueTrain(a)}}tryAttack(){const t=this.army(),e=G0[this.p().age-1];t.length>=e?(this.attacking=!0,this.attackTargetT=0,this.waveT=100+Math.random()*40,this.retarget()):this.waveT=25}retarget(){const t=this.pickPlayerTarget();if(!t){this.attacking=!1;return}const e=this.army().filter(n=>{var i;return n.state==="idle"||n.state==="move"||((i=n.order)==null?void 0:i.kind)==="attackmove"});for(const n of e)n.orderAttackMove(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z);this.army().length<3&&(this.attacking=!1)}pickPlayerTarget(){const t=this.game.buildings.filter(n=>n.owner===Qt&&!n.dead);return t.length?t.find(n=>n.def.trains&&n.type!=="towncenter")||t.find(n=>n.type==="towncenter")||t[0]:null}onDamage(t,e){if(t.owner!==this.me||!e||e.dead||e.owner===this.me||this.defendT>0||!(Math.hypot((t.isBuilding?t.cx:t.x)-this.baseX,(t.isBuilding?t.cz:t.z)-this.baseZ)<55))return;this.defendT=10;const i=e.isBuilding?e.cx:e.x,r=e.isBuilding?e.cz:e.z;for(const a of this.army())a.state==="fighting"||a.state==="toAttack"||a.orderAttackMove(i,r)}onBuildingLost(){}construct(t,e=null){return this.constructNear(t,this.baseX,this.baseZ,e)}constructNear(t,e,n,i=null){const r=this.game,a=qi[t],o=this.p();if(o.age<a.age||!Nn(o.res,a.cost)||!["house","farm","tower"].includes(t)&&this.myBuildings(t).some(u=>!u.complete))return!1;const l=this.findSpot(e,n,a.size);if(!l)return!1;const c=r.placeBuilding(this.me,t,l[0],l[1]);if(!c)return!1;const h=i||this.nearestFreeVillager(c.cx,c.cz);if(h&&h.orderBuild(c),!h){const u=this.myUnits("villager")[0];u&&u.orderBuild(c)}return!0}nearestFreeVillager(t,e){let n=null,i=1/0;for(const r of this.myUnits("villager")){if(r.state==="building"||r.state==="toBuild")continue;const a=Math.hypot(r.x-t,r.z-e);a<i&&(i=a,n=r)}return n}findSpot(t,e,n){const i=this.game.map,[r,a]=i.worldToGrid(t,e);for(let o=3;o<26;o+=1)for(let l=0;l<16;l++){const c=l/16*Math.PI*2+o*.37,h=Math.round(r+Math.cos(c)*o)-Math.floor(n/2),u=Math.round(a+Math.sin(c)*o)-Math.floor(n/2);if(i.canPlace(h-1,u-1,n+2))return[h,u]}return null}}class W0{constructor(t,e){this.camera=t,this.map=e,this.target=new L(le/2,0,le/2),this.smoothTarget=this.target.clone(),this.dist=46,this.smoothDist=60,this.minDist=18,this.maxDist=95,this.pitch=.92,this.yaw=0,this.keys=new Set,this.mouseX=.5,this.mouseY=.5,this.edgePanEnabled=!0,window.addEventListener("keydown",n=>{n.target.tagName!=="INPUT"&&this.keys.add(n.code)}),window.addEventListener("keyup",n=>this.keys.delete(n.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("mousemove",n=>{this.mouseX=n.clientX/window.innerWidth,this.mouseY=n.clientY/window.innerHeight})}jumpTo(t,e){this.target.x=t,this.target.z=e}panBy(t,e){this.target.x+=t,this.target.z+=e}zoomBy(t,e){const n=this.dist;this.dist=Ir.clamp(this.dist*(t>0?1.13:.885),this.minDist,this.maxDist),t<0&&e&&this.dist<n&&this.target.lerp(new L(e.x,0,e.z),.18)}update(t){const e=(14+this.dist*.55)*t;let n=0,i=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(i-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(i+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(n-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(n+=1),this.edgePanEnabled&&document.hasFocus()&&(this.mouseX<.008&&(n-=1),this.mouseX>1-.008&&(n+=1),this.mouseY<.008&&(i-=1),this.mouseY>1-.008&&(i+=1)),n||i){const c=Math.hypot(n,i);this.target.x+=n/c*e,this.target.z+=i/c*e}const r=6;this.target.x=Ir.clamp(this.target.x,r,le-r),this.target.z=Ir.clamp(this.target.z,r,le-r),this.target.y=this.map.heightAt(this.target.x,this.target.z),this.smoothTarget.lerp(this.target,Math.min(1,t*9)),this.smoothDist+=(this.dist-this.smoothDist)*Math.min(1,t*7);const a=this.camera,o=Math.cos(this.pitch)*this.smoothDist,l=Math.sin(this.pitch)*this.smoothDist;a.position.set(this.smoothTarget.x+Math.sin(this.yaw)*o,this.smoothTarget.y+l,this.smoothTarget.z+Math.cos(this.yaw)*o),a.lookAt(this.smoothTarget)}}let pe=null,Fn=null,ii=!1;const Fl=new Map;function X0(){if(!pe)try{pe=new(window.AudioContext||window.webkitAudioContext),Fn=pe.createGain(),Fn.gain.value=.22,Fn.connect(pe.destination)}catch{}}function q0(){return ii=!ii,Fn&&(Fn.gain.value=ii?0:.22),ii}function Pc(){return pe?{ctx:pe,master:Fn}:null}function Y0(s,t,e,n,i=1){s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(i,t+e),s.gain.exponentialRampToValueAtTime(.001,t+e+n)}function Me(s,t,e="square",n=.5,i=0){if(!pe||ii)return;const r=pe.currentTime,a=pe.createOscillator(),o=pe.createGain();a.type=e,a.frequency.setValueAtTime(s,r),i&&a.frequency.exponentialRampToValueAtTime(Math.max(30,s+i),r+t),Y0(o,r,.005,t,n),a.connect(o).connect(Fn),a.start(r),a.stop(r+t+.05)}function jn(s,t=.4,e=1200){if(!pe||ii)return;const n=pe.currentTime,i=Math.ceil(pe.sampleRate*s),r=pe.createBuffer(1,i,pe.sampleRate),a=r.getChannelData(0);for(let h=0;h<i;h++)a[h]=(Math.random()*2-1)*(1-h/i);const o=pe.createBufferSource();o.buffer=r;const l=pe.createBiquadFilter();l.type="lowpass",l.frequency.value=e;const c=pe.createGain();c.gain.value=t,o.connect(l).connect(c).connect(Fn),o.start(n)}const K0={select:()=>Me(620,.06,"sine",.3),command:()=>{Me(440,.05,"sine",.3),setTimeout(()=>Me(560,.05,"sine",.25),45)},place:()=>Me(330,.1,"triangle",.4),error:()=>Me(160,.18,"sawtooth",.25,-40),chop:()=>jn(.08,.3,900),hammer:()=>{jn(.05,.25,2500),Me(190,.05,"square",.12)},treefall:()=>jn(.4,.3,500),melee:()=>{jn(.07,.3,3500),Me(900+Math.random()*300,.05,"square",.1,-300)},arrow:()=>jn(.12,.18,4500),catapult:()=>{Me(90,.3,"sawtooth",.3,-30),jn(.25,.3,700)},die:()=>Me(220,.25,"sawtooth",.18,-120),collapse:()=>{jn(.7,.5,400),Me(70,.5,"sawtooth",.25,-30)},horn:()=>{Me(196,.55,"sawtooth",.3),setTimeout(()=>Me(196*1.25,.5,"sawtooth",.28),240)},ageup:()=>[262,330,392,523].forEach((s,t)=>setTimeout(()=>Me(s,.3,"triangle",.32),t*130)),built:()=>{Me(392,.1,"triangle",.3),setTimeout(()=>Me(523,.15,"triangle",.3),90)},ready:()=>Me(523,.09,"sine",.25),victory:()=>[262,330,392,523,659,784].forEach((s,t)=>setTimeout(()=>Me(s,t<5?.28:.9,"triangle",.34),t*150)),defeat:()=>[392,370,311,262,196].forEach((s,t)=>setTimeout(()=>Me(s,t<4?.42:1.2,"sawtooth",.2),t*320))};function Ya(s){if(!pe||ii)return;const t=K0[s];if(!t)return;const e=performance.now(),n=Fl.get(s)||0,i=s==="chop"||s==="hammer"||s==="melee"?90:140;e-n<i||(Fl.set(s,e),t())}const Ol=[[730,1090],[530,1840],[390,1990],[570,840],[440,1020]];let Bl=0;function $0(s,t,e,n,i,r,a,o){const l=Math.floor(s.sampleRate*.025),c=s.createBuffer(1,l,s.sampleRate),h=c.getChannelData(0);for(let E=0;E<l;E++)h[E]=(Math.random()*2-1)*(1-E/l);const u=s.createBufferSource();u.buffer=c;const d=s.createBiquadFilter();d.type="bandpass",d.frequency.value=1200+Math.random()*1800;const f=s.createGain();f.gain.value=a*.5,u.connect(d).connect(f).connect(t),u.start(e-.02);const g=s.createOscillator();g.type="sawtooth",g.frequency.setValueAtTime(n*(.96+Math.random()*.08),e),g.frequency.linearRampToValueAtTime(n,e+r);const _=s.createOscillator();_.frequency.value=11+Math.random()*6;const m=s.createGain();m.gain.value=n*(o?.05:.02),_.connect(m).connect(g.frequency);const[p,y]=i,x=s.createGain();x.gain.value=0;for(const[E,I,w]of[[p,9,1],[y,11,.55],[2600,13,.18]]){const b=s.createBiquadFilter();b.type="bandpass",b.frequency.value=E*(.95+Math.random()*.1),b.Q.value=I;const D=s.createGain();D.gain.value=w,g.connect(b).connect(D).connect(x)}x.gain.setValueAtTime(0,e),x.gain.linearRampToValueAtTime(a,e+.03),x.gain.setValueAtTime(a,e+r-.045),x.gain.linearRampToValueAtTime(0,e+r),x.connect(t),g.start(e-.02),g.stop(e+r+.03),_.start(e-.02),_.stop(e+r+.03)}function ps(s){const t=Pc();if(!t)return;const{ctx:e,master:n}=t,i=performance.now();if(i<Bl)return;const r=s[0]==="m",a=s.endsWith("Select"),o=r?96+Math.random()*14:126+Math.random()*22,l=2+(Math.random()*2|0)+(a&&!r?1:0),c=e.createGain();c.gain.value=r?1.5:1.3;const h=e.createBiquadFilter();h.type="lowpass",h.frequency.value=r?2400:3200,c.connect(h).connect(n);let u=e.currentTime+.01;for(let d=0;d<l;d++){const f=d/Math.max(1,l-1),g=a?1+(f>.6?(f-.6)*.55:0):1.08-f*.18,_=.09+Math.random()*.08+(d===l-1?.06:0),m=.5+Math.random()*.2-f*(a?0:.12);$0(e,c,u,o*g,Ol[Math.random()*Ol.length|0],_,m,r),u+=_+.015+Math.random()*.025}Bl=i+(u-e.currentTime)*1e3+120}class j0{constructor({canvas:t,game:e,rtsCam:n,camera:i,terrainMesh:r,onSelectionChange:a,sound:o}){this.canvas=t,this.game=e,this.rtsCam=n,this.camera=i,this.terrain=r,this.onSelectionChange=a,this.sound=o,this.selection=[],this.groups=new Map,this.raycaster=new Ec,this.mouseNDC=new ft,this.dragStart=null,this.dragging=!1,this.placing=null,this.idleVillIdx=0,this.boxEl=document.createElement("div"),this.boxEl.style.cssText="position:fixed;border:1.5px solid #7df58b;background:rgba(110,245,140,.12);pointer-events:none;display:none;z-index:20;",document.body.appendChild(this.boxEl),t.addEventListener("mousedown",l=>this.onMouseDown(l)),window.addEventListener("mousemove",l=>this.onMouseMove(l)),window.addEventListener("mouseup",l=>this.onMouseUp(l)),t.addEventListener("contextmenu",l=>l.preventDefault()),t.addEventListener("wheel",l=>{l.preventDefault();const c=this.groundPoint(l.clientX,l.clientY);this.rtsCam.zoomBy(l.deltaY,c)},{passive:!1}),window.addEventListener("keydown",l=>this.onKeyDown(l))}setRayFrom(t,e){this.mouseNDC.set(t/window.innerWidth*2-1,-(e/window.innerHeight)*2+1),this.raycaster.setFromCamera(this.mouseNDC,this.camera)}groundPoint(t,e){this.setRayFrom(t,e);const n=this.raycaster.intersectObject(this.terrain,!1);return n.length?n[0].point:null}pick(t,e){this.setRayFrom(t,e);const n=this.game,i=[];for(const h of n.units)i.push(h.group);for(const h of n.buildings)i.push(h.group);for(const h of n.nodes)h.mesh&&i.push(h.mesh);const r=this.raycaster.intersectObjects(i,!0),a=this.raycaster.intersectObjects([n.trees.trunks,n.trees.pines,n.trees.oaks],!1),o=this.raycaster.intersectObject(this.terrain,!1);let l=null,c=1/0;if(r.length&&r[0].distance<c){c=r[0].distance;let h=r[0].object;for(;h&&!h.userData.entity&&!h.userData.node;)h=h.parent;h!=null&&h.userData.entity?l={entity:h.userData.entity}:h!=null&&h.userData.node?l={node:h.userData.node}:l=null}if(a.length&&a[0].distance<c){const h=n.treeNodeByInstance.get(a[0].instanceId);h&&!h.dead&&(l={node:h},c=a[0].distance)}return!l&&o.length?{point:o[0].point}:l&&o.length&&o[0].distance<c-.5?{point:o[0].point}:l||null}select(t,e=!1){if(!e){for(const n of this.selection)n.setSelected(!1);this.selection=[]}for(const n of t)!this.selection.includes(n)&&!n.dead&&(this.selection.push(n),n.setSelected(!0));this.pruneSelection(),this.onSelectionChange(this.selection)}pruneSelection(){this.selection=this.selection.filter(t=>!t.dead)}selectedUnits(t=!0){return this.pruneSelection(),this.selection.filter(e=>e.isUnit&&(!t||e.owner===Qt))}onMouseDown(t){if(t.button===0){if(this.placing){this.tryPlace(t.shiftKey);return}this.dragStart={x:t.clientX,y:t.clientY,shift:t.shiftKey},this.dragging=!1}else if(t.button===2){if(this.placing){this.cancelPlacement();return}this.issueContextCommand(t.clientX,t.clientY)}}onMouseMove(t){if(this.placing&&this.updateGhost(t.clientX,t.clientY),this.dragStart){const e=t.clientX-this.dragStart.x,n=t.clientY-this.dragStart.y;if(!this.dragging&&Math.hypot(e,n)>6&&(this.dragging=!0),this.dragging){const i=Math.min(t.clientX,this.dragStart.x),r=Math.min(t.clientY,this.dragStart.y);this.boxEl.style.display="block",this.boxEl.style.left=i+"px",this.boxEl.style.top=r+"px",this.boxEl.style.width=Math.abs(e)+"px",this.boxEl.style.height=Math.abs(n)+"px"}}}onMouseUp(t){if(t.button!==0||!this.dragStart)return;const e=this.dragStart;if(this.dragStart=null,this.boxEl.style.display="none",this.dragging){this.dragging=!1,this.boxSelect(e,{x:t.clientX,y:t.clientY},e.shift);return}const n=this.pick(t.clientX,t.clientY);n!=null&&n.entity?(this.select([n.entity],e.shift),this.selectFeedback([n.entity])):e.shift||this.select([])}boxSelect(t,e,n){const i=Math.min(t.x,e.x),r=Math.max(t.x,e.x),a=Math.min(t.y,e.y),o=Math.max(t.y,e.y),l=new L,c=[];for(const h of this.game.units){if(h.owner!==Qt||h.dead)continue;l.set(h.x,h.group.position.y+.8,h.z).project(this.camera);const u=(l.x+1)/2*window.innerWidth,d=(1-l.y)/2*window.innerHeight;u>=i&&u<=r&&d>=a&&d<=o&&l.z<1&&c.push(h)}if(c.length){const h=c.filter(u=>u.type!=="villager");this.select(h.length?h:c,n),this.selectFeedback(this.selection)}else n||this.select([])}selectFeedback(t){const e=t.filter(n=>n.owner===Qt);e.some(n=>n.isUnit&&n.type!=="villager")?ps("mSelect"):e.some(n=>n.isUnit)?ps("vSelect"):this.sound("select")}ackFeedback(t){t.some(e=>e.type!=="villager")?ps("mAck"):t.length?ps("vAck"):this.sound("command")}issueContextCommand(t,e){var o,l,c,h;const n=this.selection.filter(u=>!u.dead&&u.owner===Qt);if(!n.length)return;const i=this.pick(t,e);if(!i)return;const r=n.filter(u=>u.isUnit),a=n.filter(u=>u.isBuilding);if(!r.length&&a.length){for(const u of a)i.node?u.rally={node:i.node}:(o=i.entity)!=null&&o.isBuilding&&i.entity.def.isFarm&&i.entity.owner===Qt?u.rally={farm:i.entity}:i.point&&(u.rally={x:i.point.x,z:i.point.z});this.sound("command");return}if(r.length){if(i.entity){const u=i.entity;if(u.owner!==Qt){for(const d of r)d.orderAttack(u);this.ackFeedback(r)}else if(u.isBuilding&&!u.complete){for(const d of r)d.type==="villager"&&d.orderBuild(u);this.ackFeedback(r.filter(d=>d.type==="villager"))}else if(u.isBuilding&&u.def.isFarm){const d=r.filter(f=>f.type==="villager");d.length&&d[0].orderGatherFarm(u),this.ackFeedback(d)}else if(u.isBuilding&&u.def.dropoff){for(const d of r)d.type==="villager"&&((l=d.carry)==null?void 0:l.amt)>0?(d.order=((c=d.order)==null?void 0:c.kind)==="gather"||((h=d.order)==null?void 0:h.kind)==="farm"?d.order:{kind:"gather",node:null},d.goDeposit()):d.orderMove(u.cx,u.cz);this.ackFeedback(r)}else{for(const d of r)d.orderMove(u.isBuilding?u.cx:u.x,u.isBuilding?u.cz:u.z);this.ackFeedback(r)}return}if(i.node){const u=r.filter(f=>f.type==="villager"),d=r.filter(f=>f.type!=="villager");for(const f of u)f.orderGather(i.node);for(const f of d)f.orderMove(i.node.wx,i.node.wz);this.ackFeedback(r);return}i.point&&(this.moveFormation(r,i.point.x,i.point.z),this.ackFeedback(r))}}moveFormation(t,e,n){const i=t.length,r=Math.ceil(Math.sqrt(i)),a=1.7;t.forEach((o,l)=>{const c=Math.floor(l/r),u=(l%r-(r-1)/2)*a,d=(c-(Math.ceil(i/r)-1)/2)*a;o.orderMove(e+u,n+d)})}startPlacement(t){this.cancelPlacement();const e=qi[t],n=new Xi({color:5111646,transparent:!0,opacity:.55,depthWrite:!1}),i=bc[t](this.game.teamColor(Qt));i.traverse(r=>{r.isMesh&&(r.material=n,r.castShadow=!1)}),this.game.scene.add(i),this.placing={type:t,def:e,ghost:i,ghostMat:n,valid:!1,gx:0,gy:0}}updateGhost(t,e){const n=this.placing,i=this.groundPoint(t,e);if(!i){n.ghost.visible=!1;return}const r=this.game.map,a=Math.round(i.x/ie-n.def.size/2),o=Math.round(i.z/ie-n.def.size/2);n.gx=a,n.gy=o;const l=(a+n.def.size/2)*ie,c=(o+n.def.size/2)*ie;n.ghost.visible=!0,n.ghost.position.set(l,r.heightAt(l,c),c),n.valid=r.canPlace(a,o,n.def.size),n.ghostMat.color.setHex(n.valid?5111646:16728112)}tryPlace(t){const e=this.placing;if(!e||!e.valid){this.sound("error");return}const n=this.game.placeBuilding(Qt,e.type,e.gx,e.gy);if(!n){this.sound("error");return}const i=this.selectedUnits().filter(r=>r.type==="villager");for(const r of i)r.orderBuild(n);this.sound("place"),t?this.updateGhost(-1,-1):this.cancelPlacement()}cancelPlacement(){this.placing&&(this.game.scene.remove(this.placing.ghost),this.placing=null)}onKeyDown(t){if(t.code==="Escape"){this.placing?this.cancelPlacement():this.select([]);return}if(t.code.startsWith("Digit")){const e=t.code.slice(5);if(e==="0")return;if(t.ctrlKey||t.metaKey)t.preventDefault(),this.groups.set(e,[...this.selection]);else{const n=(this.groups.get(e)||[]).filter(i=>!i.dead);if(n.length){this.select(n);const i=n[0];t.repeat&&this.rtsCam.jumpTo(i.isBuilding?i.cx:i.x,i.isBuilding?i.cz:i.z)}}return}if(t.code==="KeyH"){const e=this.game.buildings.find(n=>n.owner===Qt&&n.type==="towncenter"&&!n.dead);e&&(this.rtsCam.jumpTo(e.cx,e.cz),this.select([e]));return}if(t.code==="Period"){const e=this.game.units.filter(n=>n.owner===Qt&&n.type==="villager"&&!n.dead&&n.state==="idle");if(e.length){this.idleVillIdx=(this.idleVillIdx+1)%e.length;const n=e[this.idleVillIdx];this.select([n]),this.rtsCam.jumpTo(n.x,n.z)}return}if(t.code==="KeyT")for(const e of this.selectedUnits())e.clearOrder()}}let ee=null,Ve=null,xs=null,ys=!1,Dc=null,ms=0,Lc=0;const Z0=[0,2,3,5,7,9,10],J0=50,Q0=[0,2,6,3,0,4,6,0],t_=[0,5,0,4,0,5,3,0];let us=0,Pi=0,Zn=7;const Ic=s=>440*Math.pow(2,(s-69)/12),ir=(s,t=0)=>J0+12*(t+Math.floor(s/7))+Z0[(s%7+7)%7],zl=new Map;function e_(s){let t=zl.get(s);if(t)return t;const e=ee.sampleRate,n=Ic(s),i=Math.max(2,Math.round(e/n)),a=Math.floor(e*1.6);t=ee.createBuffer(1,a,e);const o=t.getChannelData(0),l=new Float32Array(i);for(let u=0;u<i;u++)l[u]=Math.random()*2-1;let c=0;const h=.995+Math.min(.0045,n/9e4);for(let u=0;u<a;u++){const d=l[c],f=l[(c+1)%i];l[c]=h*.5*(d+f),o[u]=d,c=(c+1)%i}return zl.set(s,t),t}function kl(s,t,e=.5){const n=ee.createBufferSource();n.buffer=e_(s);const i=ee.createGain();i.gain.value=e,n.connect(i),i.connect(Ve),i.connect(xs),n.start(t)}function Hl(s,t,e,n=.4){const i=ee.createOscillator();i.type="sine";const r=Ic(s);i.frequency.setValueAtTime(r,t);const a=ee.createOscillator();a.frequency.value=5.2;const o=ee.createGain();o.gain.value=r*.008,a.connect(o).connect(i.frequency);const l=ee.createGain();l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(n,t+.08),l.gain.setValueAtTime(n,t+e-.12),l.gain.linearRampToValueAtTime(0,t+e),i.connect(l),l.connect(Ve),l.connect(xs),i.start(t),i.stop(t+e+.05),a.start(t),a.stop(t+e+.05)}function ds(s,t,e=!0){if(t<=.01)return;const n=ee.createOscillator();n.type="sine",n.frequency.setValueAtTime(e?110:180,s),n.frequency.exponentialRampToValueAtTime(e?48:80,s+.12);const i=ee.createGain();i.gain.setValueAtTime(t,s),i.gain.exponentialRampToValueAtTime(.001,s+.22),n.connect(i).connect(Ve),n.start(s),n.stop(s+.3);const r=Math.floor(ee.sampleRate*.05),a=ee.createBuffer(1,r,ee.sampleRate),o=a.getChannelData(0);for(let u=0;u<r;u++)o[u]=(Math.random()*2-1)*(1-u/r);const l=ee.createBufferSource();l.buffer=a;const c=ee.createGain();c.gain.value=t*.5;const h=ee.createBiquadFilter();h.type="bandpass",h.frequency.value=e?300:700,l.connect(h).connect(c).connect(Ve),l.start(s)}function n_(){const s=ee.sampleRate,e=Math.floor(s*1.9),n=ee.createBuffer(2,e,s);for(let r=0;r<2;r++){const a=n.getChannelData(r);for(let o=0;o<e;o++)a[o]=(Math.random()*2-1)*Math.pow(1-o/e,2.4)}const i=ee.createConvolver();return i.buffer=n,i}function i_(s){const t=ms,n=60/(68+t*26),i=n*4,r=t>.5?t_:Q0,a=r[us%r.length],o=[a,a+2,a+4];us%4===0&&(kl(ir(a,-1),s,.34),Hl(ir(a,0),s+.02,i*.96,.05+t*.03));const l=[0,2,1,2,0,2,1,2];for(let c=0;c<8;c++){if(t<.4&&(us+c)%7===3)continue;const u=o[l[c]]+(c===4&&Math.random()<.4?7:0),d=(c%4===0?.4:.22)*(.8+Math.random()*.35);kl(ir(u,1),s+c*n*.5,d)}if(us%2===(t>.5?0:1)&&Math.random()<.85){let c=s+n*(Math.random()<.5?0:.5);const h=2+(Math.random()*3|0);for(let u=0;u<h&&c<s+i-.2;u++){const d=[-2,-1,-1,1,1,2][Math.random()*6|0];Zn+=d,Zn<5&&(Zn+=4),Zn>13&&(Zn-=4),u===h-1&&(Zn=o[Math.random()*3|0]+7);const f=n*(Math.random()<.3?1.5:.75);Hl(ir(Zn-7+(t>.5?0:7),1),c,f,.16+Math.random()*.07),c+=f+(Math.random()<.3?n*.5:0)}}return t>.06&&(ds(s,.5*t,!0),ds(s+n*1.5,.3*t,!1),ds(s+n*2,.45*t,!0),t>.6&&ds(s+n*3,.3*t,!1),t>.8&&Math.random()<.5&&ds(s+n*3.5,.25*t,!1)),us++,i}function s_(){if(!ys)return;const s=performance.now()<Lc?1:0;for(ms+=(s-ms)*.06,ms<.01&&(ms=0);Pi<ee.currentTime+.5;)Pi<ee.currentTime&&(Pi=ee.currentTime+.05),Pi+=i_(Pi)}function r_(){const s=Pc();if(!s||ys)return;ee=s.ctx,Ve=ee.createGain(),Ve.gain.value=.55,Ve.connect(s.master);const t=n_();xs=ee.createGain(),xs.gain.value=.35,xs.connect(t),t.connect(Ve),ys=!0,Pi=ee.currentTime+.1,Dc=setInterval(s_,120)}function a_(s=1.5){if(ys&&(ys=!1,clearInterval(Dc),Ve)){const t=ee.currentTime;Ve.gain.setValueAtTime(Ve.gain.value,t),Ve.gain.linearRampToValueAtTime(1e-4,t+s)}}function Uc(){Lc=performance.now()+9e3}const o_={wood:"🪵",food:"🍖",gold:"🪙"};function ca(s){if(!s)return"";const t=[];for(const e of["wood","food","gold"])s[e]&&t.push(`${o_[e]}${s[e]}`);return t.join(" ")}class l_{constructor(t,e){this.game=t,this.input=e,this.selection=[],this.refreshT=0,this.el={wood:document.getElementById("res-wood"),food:document.getElementById("res-food"),gold:document.getElementById("res-gold"),pop:document.getElementById("res-pop"),age:document.getElementById("age-disp"),alerts:document.getElementById("alerts"),selTitle:document.getElementById("sel-title"),selSub:document.getElementById("sel-sub"),selCards:document.getElementById("sel-cards"),queueRow:document.getElementById("queue-row"),cmdPanel:document.getElementById("cmd-panel"),gameover:document.getElementById("gameover-overlay"),gameoverTitle:document.getElementById("gameover-title"),gameoverSub:document.getElementById("gameover-sub")},t.onAlert=(n,i)=>this.alert(n,i),t.onGameOver=n=>this.showGameOver(n)}alert(t,e=!1){const n=document.createElement("div");for(n.className="alert"+(e?" good":""),n.textContent=t,this.el.alerts.appendChild(n),setTimeout(()=>n.remove(),4200);this.el.alerts.children.length>4;)this.el.alerts.firstChild.remove()}showGameOver(t){a_(),Ya(t?"victory":"defeat"),this.el.gameover.classList.remove("hidden"),this.el.gameoverTitle.textContent=t?"Victory!":"Defeat",this.el.gameoverTitle.className=t?"victory":"defeat",this.el.gameoverSub.textContent=t?"The enemy base lies in ruins. Your empire stands triumphant!":"Your base has been destroyed. The enemy empire prevails."}setSelection(t){this.selection=t,this.renderSelection()}update(t){const e=this.game.players[Qt];this.el.wood.textContent=Math.floor(e.res.wood),this.el.food.textContent=Math.floor(e.res.food),this.el.gold.textContent=Math.floor(e.res.gold),this.el.pop.textContent=`${e.popUsed}/${e.popCap}`,this.el.age.textContent=tn[e.age-1].name+(e.ageResearchInProgress?" ⏳":""),this.refreshT-=t,this.refreshT<=0&&(this.refreshT=.3,this.renderSelection())}renderSelection(){var d;const t=this.selection.filter(f=>!f.dead),{selTitle:e,selSub:n,selCards:i,queueRow:r,cmdPanel:a}=this.el;if(i.innerHTML="",r.innerHTML="",a.innerHTML="",!t.length){e.textContent="No selection",n.textContent="Left-click or drag to select your units.";return}const o=t[0];if(t.length===1){const f=o.def;e.textContent=f.name+(o.owner!==Qt?" (enemy)":"");let g=`HP ${Math.ceil(o.hp)}/${o.maxHp}`;o.isBuilding&&!o.complete&&(g+=` — under construction ${Math.floor(o.progress*100)}%`),o.isUnit&&((d=o.carry)==null?void 0:d.amt)>0&&(g+=` — carrying ${Math.floor(o.carry.amt)} ${o.carry.res}`),o.isUnit&&f.atk&&(g+=` — ATK ${f.atk}`),n.textContent=g}else e.textContent=`${t.length} units selected`,n.textContent="";for(const f of t.slice(0,21)){const g=document.createElement("div");g.className="sel-card",g.innerHTML=`<span>${f.def.icon}</span><div class="hpbar"><div style="width:${Math.max(3,f.hp/f.maxHp*100)}%"></div></div>`,g.onclick=()=>this.input.select([f]),i.appendChild(g)}if(o.owner!==Qt)return;const l=t.filter(f=>f.isUnit),c=l.some(f=>f.type==="villager"),u=this.game.players[Qt];if(c)for(const f of yg){const g=qi[f],_=u.age<g.age,m=Nn(u.res,g.cost),p=this.button(g.icon,g.name,`${g.name}<br>${ca(g.cost)}${_?`<br>Requires ${tn[g.age-1].name}`:""}`,_||!m);!_&&m&&(p.onclick=()=>this.input.startPlacement(f)),a.appendChild(p)}if(l.length){const f=this.button("🛑","Stop (T)","Stop current order");f.onclick=()=>{for(const g of l)g.clearOrder()},a.appendChild(f)}if(t.length===1&&o.isBuilding&&o.complete){const f=o;if(f.def.trains)for(const g of f.def.trains){const _=_n[g],m=u.age<_.age,p=Nn(u.res,_.cost),y=this.button(_.icon,_.name,`Train ${_.name}<br>${ca(_.cost)}<br>HP ${_.hp} · ATK ${_.atk}${m?`<br>Requires ${tn[_.age-1].name}`:""}`,m||!p);m||(y.onclick=()=>{f.queueTrain(g)?this.game.sound("command"):this.game.sound("error"),this.renderSelection()}),a.appendChild(y)}if(f.def.researchesAge&&u.age<tn.length){const g=tn[u.age],_=u.ageResearchInProgress,m=Nn(u.res,g.cost),p=this.button("🏰","Advance",`Advance to ${g.name}<br>${ca(g.cost)}<br>${g.time}s`,_||!m);!_&&m&&(p.onclick=()=>{f.startAgeResearch()&&(this.game.sound("command"),this.renderSelection())}),a.appendChild(p)}if(f.researching){const g=document.createElement("div");g.className="q-item";const _=f.researching.t/f.researching.dur*100;g.innerHTML=`<div class="prog" style="width:${_}%"></div><span>🏰</span>`,r.appendChild(g)}if(f.trainQueue.forEach((g,_)=>{const m=document.createElement("div");m.className="q-item",m.title="Click to cancel";const p=_===0?f.trainT/_n[g].trainTime*100:0;m.innerHTML=`<div class="prog" style="width:${p}%"></div><span>${_n[g].icon}</span>`,m.onclick=()=>{f.cancelTrain(_),this.renderSelection()},r.appendChild(m)}),f.def.trains){const g=document.createElement("span");g.style.cssText="font-size:11px;color:#9c8f6e;margin-left:4px",g.textContent=f.trainQueue.length?"":"Right-click ground/resource to set rally",r.appendChild(g)}}}button(t,e,n,i=!1){const r=document.createElement("button");return r.className="cmd-btn"+(i?" disabled":""),r.innerHTML=`<span>${t}</span><span class="lbl">${e}</span><div class="tooltip">${n}</div>`,r}}class c_{constructor(t,e,n,i){this.canvas=t,this.ctx=t.getContext("2d"),this.game=e,this.rtsCam=n,this.camera=i,this.S=t.width,this.terrainLayer=document.createElement("canvas"),this.terrainLayer.width=this.S,this.terrainLayer.height=this.S,this.renderTerrain(),this.nodeT=0,this.nodeLayer=document.createElement("canvas"),this.nodeLayer.width=this.S,this.nodeLayer.height=this.S,this.renderNodes(),this.raycaster=new Ec,this.groundPlane=new Ln(new L(0,1,0),0);const r=o=>{const l=t.getBoundingClientRect(),c=(o.clientX-l.left)/l.width*le,h=(o.clientY-l.top)/l.height*le;this.rtsCam.jumpTo(c,h)};let a=!1;t.addEventListener("mousedown",o=>{o.button===0&&(a=!0,r(o))}),window.addEventListener("mousemove",o=>{a&&r(o)}),window.addEventListener("mouseup",()=>{a=!1}),t.addEventListener("contextmenu",o=>o.preventDefault())}renderTerrain(){const t=this.terrainLayer.getContext("2d"),e=this.game.map,i=this.S/e.size;for(let r=0;r<e.size;r++)for(let a=0;a<e.size;a++){const o=e.tileHeight(a,r),l=e.moistureAt((a+.5)*ie,(r+.5)*ie);let c;if(o<=Yi)c="#2d5e9e";else if(o<Yi+.35)c="#b3a263";else if(o>2.6)c="#8d8a80";else{const h=120+l*45-o*8;c=`rgb(${78+o*6|0},${h|0},52)`}t.fillStyle=c,t.fillRect(a*i,r*i,i+1,i+1)}}renderNodes(){const t=this.nodeLayer.getContext("2d");t.clearRect(0,0,this.S,this.S);const e=this.S/le;for(const n of this.game.nodes)n.dead||(t.fillStyle=n.type==="tree"?"#1e4d20":n.type==="gold"?"#e8b923":"#b03333",t.fillRect(n.wx*e-1.5,n.wz*e-1.5,3,3))}update(t){this.nodeT-=t,this.nodeT<=0&&(this.nodeT=3,this.renderNodes());const e=this.ctx,n=this.S;e.drawImage(this.terrainLayer,0,0),e.drawImage(this.nodeLayer,0,0);const i=n/le;for(const o of this.game.buildings){if(o.dead)continue;e.fillStyle=o.owner===Qt?"#4d8df5":"#e8473a";const l=Math.max(3,o.size*ie*i);e.fillRect(o.cx*i-l/2,o.cz*i-l/2,l,l)}for(const o of this.game.units)o.dead||(e.fillStyle=o.owner===Qt?"#7db8ff":"#ff7a6e",e.fillRect(o.x*i-1.5,o.z*i-1.5,3,3));e.strokeStyle="#f5f0dc",e.lineWidth=1.2,e.beginPath();const r=[[-1,-1],[1,-1],[1,1],[-1,1]];let a=!1;for(const[o,l]of r){const c=this.projectToGround(o,l);if(!c)continue;const h=Math.max(0,Math.min(n,c.x*i)),u=Math.max(0,Math.min(n,c.z*i));a?e.lineTo(h,u):(e.moveTo(h,u),a=!0)}e.closePath(),e.stroke()}projectToGround(t,e){this.raycaster.setFromCamera({x:t,y:e},this.camera);const n=new L;return this.raycaster.ray.intersectPlane(this.groundPlane,n)?n:null}}const Nc=document.getElementById("game-canvas"),{renderer:ha,scene:As,camera:Sr,updateSun:h_,composer:u_}=Yg(Nc),rn=new bg,yr=Rg(rn),d_=Ag(rn,yr),{ground:f_,waterNormalTex:p_}=v0(As,rn),m_=new S0(As),be=new k0(As,rn,m_);be.effects=new R0(As,be);be.soundFn=Ya;be.onCombat=Uc;be.createResourceNodes(d_);function Fc(s,[t,e]){let i=null;t:for(let a=0;a<12;a++)for(let o=-a;o<=a;o++)for(let l=-a;l<=a;l++){if(Math.max(Math.abs(l),Math.abs(o))!==a)continue;const c=t+l-Math.floor(4/2),h=e+o-Math.floor(4/2);if(rn.canPlace(c-1,h-1,6)){i=[c,h];break t}}i||(i=[t,e]);const r=be.placeBuilding(s,"towncenter",i[0],i[1],!0);for(let a=0;a<4;a++){const o=Math.PI*.25+a*.45,l=r.cx+Math.cos(o)*7,c=r.cz+Math.sin(o)*7,[h,u]=rn.nearestWalkable(...rn.worldToGrid(l,c),6)||rn.worldToGrid(r.cx,r.cz+8),[d,f]=rn.gridToWorld(h,u);be.spawnUnit("villager",s,d,f)}return r}const mr=Fc(Qt,yr[0]);Fc(Ss,yr[1]);be.recalcPop(Qt);be.recalcPop(Ss);const[g_,__]=yr[1];be.ai=new V0(be,g_,__);const si=new W0(Sr,rn);si.jumpTo(mr.cx,mr.cz+6);si.smoothTarget.set(mr.cx,0,mr.cz+6);let Ts;const x_=new j0({canvas:Nc,game:be,rtsCam:si,camera:Sr,terrainMesh:f_,onSelectionChange:s=>Ts&&Ts.setSelection(s),sound:Ya});Ts=new l_(be,x_);const v_=new c_(document.getElementById("minimap"),be,si,Sr);document.getElementById("mute-btn").addEventListener("click",s=>{const t=q0();s.currentTarget.innerHTML=t?"&#128263;":"&#128266;"});let Aa=!1;const Oc=new Tc;let ua=0,da=!0,sr=0,fa=0;function Bc(){requestAnimationFrame(Bc);const s=Math.min(Oc.getDelta(),.05);Aa&&be.update(s),si.update(s),h_(si.smoothTarget),Ts.update(s),v_.update(s),ua+=s,p_.offset.set(ua*.012,ua*.009),Aa&&da&&(fa++,sr+=s,sr>5&&(fa/sr<28&&(da=!1,ha.setPixelRatio(1),ha.setSize(window.innerWidth,window.innerHeight)),sr=0,fa=0)),da?u_.render():ha.render(As,Sr)}Bc();document.getElementById("start-btn").addEventListener("click",()=>{X0(),r_(),document.getElementById("start-overlay").classList.add("hidden"),Aa=!0,Oc.getDelta(),Ts.alert("Gather resources and build your empire. The enemy is preparing…",!0)});window.__game=be;window.__rtsCam=si;window.__audio={voice:ps,combatPulse:Uc};

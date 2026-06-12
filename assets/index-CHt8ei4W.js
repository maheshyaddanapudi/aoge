(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="165",Ou=0,hc=1,Bu=2,xh=1,vh=2,Rn=3,Fn=0,zt=1,mn=2,Dn=0,Ki=1,ha=2,uc=3,dc=4,ku=5,_i=100,zu=101,Hu=102,Gu=103,Vu=104,Wu=200,Xu=201,qu=202,Yu=203,ua=204,da=205,ju=206,Ku=207,$u=208,Zu=209,Ju=210,Qu=211,ed=212,td=213,nd=214,id=0,sd=1,rd=2,qr=3,od=4,ad=5,cd=6,ld=7,Ua=0,hd=1,ud=2,Qn=0,Mh=1,yh=2,Sh=3,Na=4,dd=5,Th=6,Ah=7,fc="attached",fd="detached",bh=300,es=301,ts=302,fa=303,pa=304,io=306,On=1e3,Zn=1001,Yr=1002,Bt=1003,Eh=1004,ks=1005,Wt=1006,Gr=1007,Pn=1008,ni=1009,pd=1010,md=1011,jr=1012,wh=1013,ns=1014,_n=1015,Un=1016,Rh=1017,Ch=1018,is=1020,gd=35902,_d=1021,xd=1022,cn=1023,vd=1024,Md=1025,$i=1026,ss=1027,Ph=1028,Ih=1029,yd=1030,Lh=1031,Dh=1033,_o=33776,xo=33777,vo=33778,Mo=33779,pc=35840,mc=35841,gc=35842,_c=35843,xc=36196,vc=37492,Mc=37496,yc=37808,Sc=37809,Tc=37810,Ac=37811,bc=37812,Ec=37813,wc=37814,Rc=37815,Cc=37816,Pc=37817,Ic=37818,Lc=37819,Dc=37820,Uc=37821,yo=36492,Nc=36494,Fc=36495,Sd=36283,Oc=36284,Bc=36285,kc=36286,Uh=2200,Td=2201,Ad=2202,js=2300,Ks=2301,So=2302,qi=2400,Yi=2401,Kr=2402,Fa=2500,bd=2501,Ed=0,Nh=1,ma=2,wd=3200,Rd=3201,Oa=0,Cd=1,$n="",Et="srgb",Rt="srgb-linear",Ba="display-p3",so="display-p3-linear",$r="linear",ot="srgb",Zr="rec709",Jr="p3",Ti=7680,zc=519,Pd=512,Id=513,Ld=514,Fh=515,Dd=516,Ud=517,Nd=518,Fd=519,ga=35044,Hc="300 es",In=2e3,Qr=2001;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gc=1234567;const Vs=Math.PI/180,rs=180/Math.PI;function hn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function Lt(r,e,t){return Math.max(e,Math.min(t,r))}function ka(r,e){return(r%e+e)%e}function Od(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Bd(r,e,t){return r!==e?(t-r)/(e-r):0}function Ws(r,e,t){return(1-t)*r+t*e}function kd(r,e,t,n){return Ws(r,e,1-Math.exp(-t*n))}function zd(r,e=1){return e-Math.abs(ka(r,e*2)-e)}function Hd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Gd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Vd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Wd(r,e){return r+Math.random()*(e-r)}function Xd(r){return r*(.5-Math.random())}function qd(r){r!==void 0&&(Gc=r);let e=Gc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yd(r){return r*Vs}function jd(r){return r*rs}function Kd(r){return(r&r-1)===0&&r!==0}function $d(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Zd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Jd(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vr={DEG2RAD:Vs,RAD2DEG:rs,generateUUID:hn,clamp:Lt,euclideanModulo:ka,mapLinear:Od,inverseLerp:Bd,lerp:Ws,damp:kd,pingpong:zd,smoothstep:Hd,smootherstep:Gd,randInt:Vd,randFloat:Wd,randFloatSpread:Xd,seededRandom:qd,degToRad:Yd,radToDeg:jd,isPowerOfTwo:Kd,ceilPowerOfTwo:$d,floorPowerOfTwo:Zd,setQuaternionFromProperEuler:Jd,normalize:Je,denormalize:rn};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,i,s,o,a,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],y=i[7],C=i[2],b=i[5],E=i[8];return s[0]=o*_+a*v+c*C,s[3]=o*m+a*x+c*b,s[6]=o*p+a*y+c*E,s[1]=l*_+h*v+u*C,s[4]=l*m+h*x+u*b,s[7]=l*p+h*y+u*E,s[2]=d*_+f*v+g*C,s[5]=d*m+f*x+g*b,s[8]=d*p+f*y+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Ie;function Oh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $s(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qd(){const r=$s("canvas");return r.style.display="block",r}const Vc={};function za(r){r in Vc||(Vc[r]=!0,console.warn(r))}function ef(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Wc=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xc=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lr={[Rt]:{transfer:$r,primaries:Zr,toReference:r=>r,fromReference:r=>r},[Et]:{transfer:ot,primaries:Zr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[so]:{transfer:$r,primaries:Jr,toReference:r=>r.applyMatrix3(Xc),fromReference:r=>r.applyMatrix3(Wc)},[Ba]:{transfer:ot,primaries:Jr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Xc),fromReference:r=>r.applyMatrix3(Wc).convertLinearToSRGB()}},tf=new Set([Rt,so]),qe={enabled:!0,_workingColorSpace:Rt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!tf.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=lr[e].toReference,i=lr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return lr[r].primaries},getTransfer:function(r){return r===$n?$r:lr[r].transfer}};function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ai;class nf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=$s("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sf=0;class Bh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(bo(i[o].image)):s.push(bo(i[o]))}else s=bo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function bo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rf=0;class vt extends yi{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Zn,i=Zn,s=Wt,o=Pn,a=cn,c=ni,l=vt.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=hn(),this.name="",this.source=new Bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case On:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case On:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=bh;vt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,i=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(f+1)/2,C=(p+1)/2,b=(h+d)/4,E=(u+_)/4,I=(g+m)/4;return x>y&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=E/n):y>C?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=I/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=I/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kt extends of{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kh extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),b=Math.atan2(C,p*v);m=Math.sin(m*b)/C,a=Math.sin(a*b)/C}const y=a*v;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new R,qc=new $t;class un{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(s,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),ur.subVectors(this.max,bs),bi.subVectors(e.a,bs),Ei.subVectors(e.b,bs),wi.subVectors(e.c,bs),Gn.subVectors(Ei,bi),Vn.subVectors(wi,Ei),ai.subVectors(bi,wi);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-ai.y,ai.x,0];return!wo(t,bi,Ei,wi,ur)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,bi,Ei,wi,ur))?!1:(dr.crossVectors(Gn,Vn),t=[dr.x,dr.y,dr.z],wo(t,bi,Ei,wi,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new R,new R,new R,new R,new R,new R,new R,new R],tn=new R,hr=new un,bi=new R,Ei=new R,wi=new R,Gn=new R,Vn=new R,ai=new R,bs=new R,ur=new R,dr=new R,ci=new R;function wo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ci.fromArray(r,s);const a=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const cf=new un,Es=new R,Ro=new R;class xn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Es.copy(e.center).add(Ro)),this.expandByPoint(Es.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new R,Co=new R,fr=new R,Wn=new R,Po=new R,pr=new R,Io=new R;class nr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Co.copy(e).add(t).multiplyScalar(.5),fr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Co);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fr),a=Wn.dot(this.direction),c=-Wn.dot(fr),l=Wn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Co).addScaledVector(fr,d),f}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,s){Po.subVectors(t,e),pr.subVectors(n,e),Io.crossVectors(Po,pr);let o=this.direction.dot(Io),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);const c=a*this.direction.dot(pr.crossVectors(Wn,pr));if(c<0)return null;const l=a*this.direction.dot(Po.cross(Wn));if(l<0||c+l>o)return null;const h=-a*Wn.dot(Io);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),s=1/Ri.setFromMatrixColumn(e,1).length(),o=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lf,e,hf)}lookAt(e,t,n){const i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Xn.crossVectors(n,Gt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Xn.crossVectors(n,Gt)),Xn.normalize(),mr.crossVectors(Gt,Xn),i[0]=Xn.x,i[4]=mr.x,i[8]=Gt.x,i[1]=Xn.y,i[5]=mr.y,i[9]=Gt.y,i[2]=Xn.z,i[6]=mr.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],y=n[11],C=n[15],b=i[0],E=i[4],I=i[8],A=i[12],M=i[1],P=i[5],k=i[9],B=i[13],W=i[2],q=i[6],G=i[10],K=i[14],H=i[3],de=i[7],me=i[11],xe=i[15];return s[0]=o*b+a*M+c*W+l*H,s[4]=o*E+a*P+c*q+l*de,s[8]=o*I+a*k+c*G+l*me,s[12]=o*A+a*B+c*K+l*xe,s[1]=h*b+u*M+d*W+f*H,s[5]=h*E+u*P+d*q+f*de,s[9]=h*I+u*k+d*G+f*me,s[13]=h*A+u*B+d*K+f*xe,s[2]=g*b+_*M+m*W+p*H,s[6]=g*E+_*P+m*q+p*de,s[10]=g*I+_*k+m*G+p*me,s[14]=g*A+_*B+m*K+p*xe,s[3]=v*b+x*M+y*W+C*H,s[7]=v*E+x*P+y*q+C*de,s[11]=v*I+x*k+y*G+C*me,s[15]=v*A+x*B+y*K+C*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,C=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,b=t*v+n*x+i*y+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=v*E,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*E,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*E,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*E,e[4]=x*E,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*E,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*E,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*E,e[8]=y*E,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*E,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*E,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*E,e[12]=C*E,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*E,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*E,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,v=c*l,x=c*h,y=c*u,C=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+y)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(d+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+x)*E,i[9]=(m-v)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ri.set(i[0],i[1],i[2]).length();const o=Ri.set(i[4],i[5],i[6]).length(),a=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],nn.copy(this);const l=1/s,h=1/o,u=1/a;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=In){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===In)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Qr)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=In){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===In)g=(o+s)*u,_=-2*u;else if(a===Qr)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ri=new R,nn=new Re,lf=new R(0,0,0),hf=new R(1,1,1),Xn=new R,mr=new R,Gt=new R,Yc=new Re,jc=new $t;class Qt{constructor(e=0,t=0,n=0,i=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class Ha{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uf=0;const Kc=new R,Ci=new $t,An=new Re,gr=new R,ws=new R,df=new R,ff=new $t,$c=new R(1,0,0),Zc=new R(0,1,0),Jc=new R(0,0,1),Qc={type:"added"},pf={type:"removed"},Pi={type:"childadded",child:null},Lo={type:"childremoved",child:null};class ct extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DEFAULT_UP.clone();const e=new R,t=new Qt,n=new $t,i=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ie}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis($c,e)}rotateY(e){return this.rotateOnAxis(Zc,e)}rotateZ(e){return this.rotateOnAxis(Jc,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($c,e)}translateY(e){return this.translateOnAxis(Zc,e)}translateZ(e){return this.translateOnAxis(Jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gr.copy(e):gr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(ws,gr,this.up):An.lookAt(gr,ws,this.up),this.quaternion.setFromRotationMatrix(An),i&&(An.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(An),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pf),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qc),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,df),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,ff,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ct.DEFAULT_UP=new R(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new R,bn=new R,Do=new R,En=new R,Ii=new R,Li=new R,el=new R,Uo=new R,No=new R,Fo=new R;class on{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sn.subVectors(e,t),i.cross(sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){sn.subVectors(i,t),bn.subVectors(n,t),Do.subVectors(e,t);const o=sn.dot(sn),a=sn.dot(bn),c=sn.dot(Do),l=bn.dot(bn),h=bn.dot(Do),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static isFrontFacing(e,t,n,i){return sn.subVectors(n,t),bn.subVectors(e,t),sn.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return on.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Ii.subVectors(i,n),Li.subVectors(s,n),Uo.subVectors(e,n);const c=Ii.dot(Uo),l=Li.dot(Uo);if(c<=0&&l<=0)return t.copy(n);No.subVectors(e,i);const h=Ii.dot(No),u=Li.dot(No);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ii,o);Fo.subVectors(e,s);const f=Ii.dot(Fo),g=Li.dot(Fo);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Li,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return el.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(el,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ii,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Oo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=ka(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Oo(o,s,e+1/3),this.g=Oo(o,s,e),this.b=Oo(o,s,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=zh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return qe.fromWorkingColorSpace(It.copy(this),e),Math.round(Lt(It.r*255,0,255))*65536+Math.round(Lt(It.g*255,0,255))*256+Math.round(Lt(It.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,s=It.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Et){qe.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(_r);const n=Ws(qn.h,_r.h,t),i=Ws(qn.s,_r.s,t),s=Ws(qn.l,_r.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new ue;ue.NAMES=zh;let mf=0;class Zt extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=Ki,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=da,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ln extends Zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new R,xr=new he;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ga,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return za("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ga&&(e.usage=this.usage),e}}class Hh extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gh extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gf=0;const qt=new Re,Bo=new ct,Di=new R,Vt=new un,Rs=new un,At=new R;class Ct extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Gh:Hh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Vt.min,Rs.min),Vt.expandByPoint(At),At.addVectors(Vt.max,Rs.max),Vt.expandByPoint(At)):(Vt.expandByPoint(Rs.min),Vt.expandByPoint(Rs.max))}Vt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)At.fromBufferAttribute(a,l),c&&(Di.fromBufferAttribute(e,l),At.add(Di)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new R,c[I]=new R;const l=new R,h=new R,u=new R,d=new he,f=new he,g=new he,_=new R,m=new R;function p(I,A,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,A),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(_),a[A].add(_),a[M].add(_),c[I].add(m),c[A].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,A=v.length;I<A;++I){const M=v[I],P=M.start,k=M.count;for(let B=P,W=P+k;B<W;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new R,y=new R,C=new R,b=new R;function E(I){C.fromBufferAttribute(i,I),b.copy(C);const A=a[I];x.copy(A),x.sub(C.multiplyScalar(C.dot(A))).normalize(),y.crossVectors(b,A);const P=y.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,A=v.length;I<A;++I){const M=v[I],P=M.start,k=M.count;for(let B=P,W=P+k;B<W;B+=3)E(e.getX(B+0)),E(e.getX(B+1)),E(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tl=new Re,li=new nr,vr=new xn,nl=new R,Ui=new R,Ni=new R,Fi=new R,ko=new R,Mr=new R,yr=new he,Sr=new he,Tr=new he,il=new R,sl=new R,rl=new R,Ar=new R,br=new R;class $e extends ct{constructor(e=new Ct,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Mr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(ko.fromBufferAttribute(u,e),o?Mr.addScaledVector(ko,h):Mr.addScaledVector(ko.sub(t),h))}t.add(Mr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),li.copy(e.ray).recast(e.near),!(vr.containsPoint(li.origin)===!1&&(li.intersectSphere(vr,nl)===null||li.origin.distanceToSquared(nl)>(e.far-e.near)**2))&&(tl.copy(s).invert(),li.copy(e.ray).applyMatrix4(tl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,C=x;y<C;y+=3){const b=a.getX(y),E=a.getX(y+1),I=a.getX(y+2);i=Er(this,p,e,n,l,h,u,b,E,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=Er(this,o,e,n,l,h,u,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,C=x;y<C;y+=3){const b=y,E=y+1,I=y+2;i=Er(this,p,e,n,l,h,u,b,E,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,y=m+2;i=Er(this,o,e,n,l,h,u,v,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function _f(r,e,t,n,i,s,o,a){let c;if(e.side===zt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Fn,a),c===null)return null;br.copy(a),br.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(br);return l<t.near||l>t.far?null:{distance:l,point:br.clone(),object:r}}function Er(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Ui),r.getVertexPosition(c,Ni),r.getVertexPosition(l,Fi);const h=_f(r,e,t,n,Ui,Ni,Fi,Ar);if(h){i&&(yr.fromBufferAttribute(i,a),Sr.fromBufferAttribute(i,c),Tr.fromBufferAttribute(i,l),h.uv=on.getInterpolation(Ar,Ui,Ni,Fi,yr,Sr,Tr,new he)),s&&(yr.fromBufferAttribute(s,a),Sr.fromBufferAttribute(s,c),Tr.fromBufferAttribute(s,l),h.uv1=on.getInterpolation(Ar,Ui,Ni,Fi,yr,Sr,Tr,new he)),o&&(il.fromBufferAttribute(o,a),sl.fromBufferAttribute(o,c),rl.fromBufferAttribute(o,l),h.normal=on.getInterpolation(Ar,Ui,Ni,Fi,il,sl,rl,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new R,materialIndex:0};on.getNormal(Ui,Ni,Fi,u.normal),h.face=u}return h}class Si extends Ct{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function g(_,m,p,v,x,y,C,b,E,I,A){const M=y/E,P=C/I,k=y/2,B=C/2,W=b/2,q=E+1,G=I+1;let K=0,H=0;const de=new R;for(let me=0;me<G;me++){const xe=me*P-B;for(let Ge=0;Ge<q;Ge++){const tt=Ge*M-k;de[_]=tt*v,de[m]=xe*x,de[p]=W,l.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[p]=b>0?1:-1,h.push(de.x,de.y,de.z),u.push(Ge/E),u.push(1-me/I),K+=1}}for(let me=0;me<I;me++)for(let xe=0;xe<E;xe++){const Ge=d+xe+q*me,tt=d+xe+q*(me+1),X=d+(xe+1)+q*(me+1),J=d+(xe+1)+q*me;c.push(Ge,tt,J),c.push(tt,X,J),H+=6}a.addGroup(f,H,A),f+=H,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ft(r){const e={};for(let t=0;t<r.length;t++){const n=os(r[t]);for(const i in n)e[i]=n[i]}return e}function xf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Zs={clone:os,merge:Ft};var vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends Zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wh extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=In}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new R,ol=new he,al=new he;class Ot extends Wh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,ol,al),t.subVectors(al,ol)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class yf extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ot(Oi,Bi,e,t);i.layers=this.layers,this.add(i);const s=new Ot(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const o=new Ot(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const a=new Ot(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const c=new Ot(Oi,Bi,e,t);c.layers=this.layers,this.add(c);const l=new Ot(Oi,Bi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xh extends vt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:es,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sf extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Si(5,5,5),s=new kt({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Dn});s.uniforms.tEquirect.value=t;const o=new $e(i,s),a=t.minFilter;return t.minFilter===Pn&&(t.minFilter=Wt),new yf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const zo=new R,Tf=new R,Af=new Ie;class Kn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=zo.subVectors(n,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Af.getNormalMatrix(e),i=this.coplanarPoint(zo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new xn,wr=new R;class Ga{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,s=new Kn,o=new Kn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-s,d-l,m-f,y-p).normalize(),n[1].setComponents(c+s,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+g,y+v).normalize(),n[3].setComponents(c-o,d-h,m-g,y-v).normalize(),n[4].setComponents(c-a,d-u,m-_,y-x).normalize(),t===In)n[5].setComponents(c+a,d+u,m+_,y+x).normalize();else if(t===Qr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(wr.x=i.normal.x>0?e.max.x:e.min.x,wr.y=i.normal.y>0?e.max.y:e.min.y,wr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function bf(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(r.bindBuffer(l,a),u.count===-1&&d.length===0&&r.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class as extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let x=0;x<l;x++){const y=x*u-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,y=v+l*(p+1),C=v+1+l*(p+1),b=v+1+l*p;f.push(x,y,b),f.push(y,C,b)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lf=`#ifdef USE_AOMAP
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
#endif`,Df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
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
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Of=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,zf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kf=`#define PI 3.141592653589793
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
} // validated`,$f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`
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
}`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tp=`PhysicalMaterial material;
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
#endif`,Ap=`struct PhysicalMaterial {
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
}`,bp=`
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
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
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
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
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
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hm=`float getShadowMask() {
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
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
}`,Lm=`#if DEPTH_PACKING == 3200
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
}`,Dm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,zm=`uniform vec3 diffuse;
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
}`,Hm=`#define LAMBERT
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
}`,Gm=`#define LAMBERT
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
}`,Vm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define PHONG
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
}`,jm=`#define PHONG
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
}`,Km=`#define STANDARD
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
}`,$m=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,Jm=`#define TOON
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
}`,Qm=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:Ef,alphahash_pars_fragment:wf,alphamap_fragment:Rf,alphamap_pars_fragment:Cf,alphatest_fragment:Pf,alphatest_pars_fragment:If,aomap_fragment:Lf,aomap_pars_fragment:Df,batching_pars_vertex:Uf,batching_vertex:Nf,begin_vertex:Ff,beginnormal_vertex:Of,bsdfs:Bf,iridescence_fragment:kf,bumpmap_pars_fragment:zf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Vf,clipping_planes_vertex:Wf,color_fragment:Xf,color_pars_fragment:qf,color_pars_vertex:Yf,color_vertex:jf,common:Kf,cube_uv_reflection_fragment:$f,defaultnormal_vertex:Zf,displacementmap_pars_vertex:Jf,displacementmap_vertex:Qf,emissivemap_fragment:ep,emissivemap_pars_fragment:tp,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:xp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:dp,gradientmap_pars_fragment:fp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:vp,lights_toon_pars_fragment:Mp,lights_phong_fragment:yp,lights_phong_pars_fragment:Sp,lights_physical_fragment:Tp,lights_physical_pars_fragment:Ap,lights_fragment_begin:bp,lights_fragment_maps:Ep,lights_fragment_end:wp,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Ip,map_fragment:Lp,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:Bp,morphcolor_vertex:kp,morphnormal_vertex:zp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Gp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Jp,opaque_fragment:Qp,packing:em,premultiplied_alpha_fragment:tm,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:cm,shadowmap_vertex:lm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:dm,skinning_vertex:fm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:_m,tonemapping_pars_fragment:xm,transmission_fragment:vm,transmission_pars_fragment:Mm,uv_pars_fragment:ym,uv_pars_vertex:Sm,uv_vertex:Tm,worldpos_vertex:Am,background_vert:bm,background_frag:Em,backgroundCube_vert:wm,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Im,depth_frag:Lm,distanceRGBA_vert:Dm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:Bm,meshbasic_vert:km,meshbasic_frag:zm,meshlambert_vert:Hm,meshlambert_frag:Gm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:jm,meshphysical_vert:Km,meshphysical_frag:$m,meshtoon_vert:Zm,meshtoon_frag:Jm,points_vert:Qm,points_frag:eg,shadow_vert:tg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},ie={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},pn={basic:{uniforms:Ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ue(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Ft([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Ft([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ue(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Ft([ie.points,ie.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Ft([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Ft([ie.common,ie.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Ft([ie.sprite,ie.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:Ft([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:Ft([ie.lights,ie.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};pn.physical={uniforms:Ft([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const Rr={r:0,b:0,g:0},ui=new Qt,rg=new Re;function og(r,e,t,n,i,s,o){const a=new ue(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=g(v);y===null?p(a,c):y&&y.isColor&&(p(y,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===io)?(h===void 0&&(h=new $e(new Si(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:os(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ui.copy(x.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(ui)),h.material.toneMapped=qe.getTransfer(y.colorSpace)!==ot,(u!==y||d!==y.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new $e(new as(2,2),new kt({name:"BackgroundMaterial",uniforms:os(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=qe.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(Rr,Vh(r)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function ag(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(M,P,k,B,W){let q=!1;const G=u(B,k,P);s!==G&&(s=G,l(s.object)),q=f(M,B,k,W),q&&g(M,B,k,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(M,P,k,B),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,P,k){const B=k.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let q=W[P.id];q===void 0&&(q={},W[P.id]=q);let G=q[B];return G===void 0&&(G=d(c()),q[B]=G),G}function d(M){const P=[],k=[],B=[];for(let W=0;W<t;W++)P[W]=0,k[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,P,k,B){const W=s.attributes,q=P.attributes;let G=0;const K=k.getAttributes();for(const H in K)if(K[H].location>=0){const me=W[H];let xe=q[H];if(xe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),me===void 0||me.attribute!==xe||xe&&me.data!==xe.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(M,P,k,B){const W={},q=P.attributes;let G=0;const K=k.getAttributes();for(const H in K)if(K[H].location>=0){let me=q[H];me===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const xe={};xe.attribute=me,me&&me.data&&(xe.data=me.data),W[H]=xe,G++}s.attributes=W,s.attributesNum=G,s.index=B}function _(){const M=s.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const k=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;k[M]=1,B[M]===0&&(r.enableVertexAttribArray(M),B[M]=1),W[M]!==P&&(r.vertexAttribDivisor(M,P),W[M]=P)}function v(){const M=s.newAttributes,P=s.enabledAttributes;for(let k=0,B=P.length;k<B;k++)P[k]!==M[k]&&(r.disableVertexAttribArray(k),P[k]=0)}function x(M,P,k,B,W,q,G){G===!0?r.vertexAttribIPointer(M,P,k,W,q):r.vertexAttribPointer(M,P,k,B,W,q)}function y(M,P,k,B){_();const W=B.attributes,q=k.getAttributes(),G=P.defaultAttributeValues;for(const K in q){const H=q[K];if(H.location>=0){let de=W[K];if(de===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const me=de.normalized,xe=de.itemSize,Ge=e.get(de);if(Ge===void 0)continue;const tt=Ge.buffer,X=Ge.type,J=Ge.bytesPerElement,pe=X===r.INT||X===r.UNSIGNED_INT||de.gpuType===wh;if(de.isInterleavedBufferAttribute){const oe=de.data,Fe=oe.stride,De=de.offset;if(oe.isInstancedInterleavedBuffer){for(let We=0;We<H.locationSize;We++)p(H.location+We,oe.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let We=0;We<H.locationSize;We++)m(H.location+We);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let We=0;We<H.locationSize;We++)x(H.location+We,xe/H.locationSize,X,me,Fe*J,(De+xe/H.locationSize*We)*J,pe)}else{if(de.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)p(H.location+oe,de.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let oe=0;oe<H.locationSize;oe++)x(H.location+oe,xe/H.locationSize,X,me,xe*J,xe/H.locationSize*oe*J,pe)}}else if(G!==void 0){const me=G[K];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(H.location,me);break;case 3:r.vertexAttrib3fv(H.location,me);break;case 4:r.vertexAttrib4fv(H.location,me);break;default:r.vertexAttrib1fv(H.location,me)}}}}v()}function C(){I();for(const M in n){const P=n[M];for(const k in P){const B=P[k];for(const W in B)h(B[W].object),delete B[W];delete P[k]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const k in P){const B=P[k];for(const W in B)h(B[W].object),delete B[W];delete P[k]}delete n[M.id]}function E(M){for(const P in n){const k=n[P];if(k[M.id]===void 0)continue;const B=k[M.id];for(const W in B)h(B[W].object),delete B[W];delete k[M.id]}}function I(){A(),o=!0,s!==i&&(s=i,l(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function cg(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==cn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const E=b===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ni&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==_n&&!E)}function c(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function hg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Kn,a=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:n,x=v*4;let y=p.clippingState||null;c.value=y,y=h(g,d,x,f);for(let C=0;C!==x;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ug(r){let e=new WeakMap;function t(o,a){return a===fa?o.mapping=es:a===pa&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fa||a===pa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sf(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ro extends Wh{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,cl=[.125,.215,.35,.446,.526,.582],xi=20,Ho=new ro,ll=new ue;let Go=null,Vo=0,Wo=0,Xo=!1;const gi=(1+Math.sqrt(5))/2,ki=1/gi,hl=[new R(-gi,ki,0),new R(gi,ki,0),new R(-ki,0,gi),new R(ki,0,gi),new R(0,gi,-ki),new R(0,gi,ki),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Go=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Go,Vo,Wo),this._renderer.xr.enabled=Xo,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget(),Vo=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Un,format:cn,colorSpace:Rt,depthBuffer:!1},i=dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(s)),this._blurMaterial=fg(s,e,t)}return i}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,n,i){const a=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ll),h.toneMapping=Qn,h.autoClear=!1;const f=new ln({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new $e(new Si,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(ll),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Cr(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===es||e.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Cr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ho)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=hl[(i-s-1)%hl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $e(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let v=0;for(let E=0;E<xi;++E){const I=E/_,A=Math.exp(-I*I/2);p.push(A),E===0?v+=A:E<m&&(v+=2*A)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const y=this._sizeLods[i],C=3*y*(i>x-ji?i-x+ji:0),b=4*(this._cubeSize-y);Cr(t,C,b,3*y,2*y),c.setRenderTarget(t),c.render(u,Ho)}}function dg(r){const e=[],t=[],n=[];let i=r;const s=r-ji+1+cl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-ji?c=cl[o-r+ji-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,I=b>2?0:-1,A=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];v.set(A,_*g*b),x.set(d,m*g*b);const M=[b,b,b,b,b,b];y.set(M,p*g*b)}const C=new Ct;C.setAttribute("position",new Dt(v,_)),C.setAttribute("uv",new Dt(x,m)),C.setAttribute("faceIndex",new Dt(y,p)),e.push(C),i>ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dl(r,e,t){const n=new Kt(r,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fg(r,e,t){const n=new Float32Array(xi),i=new R(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function fl(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function pl(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function pg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===fa||c===pa,h=c===es||c===ts;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ul(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new ul(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&za("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gg(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],b=v[x+1],E=v[x+2];d.push(C,b,b,E,E,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,b=x+1,E=x+2;d.push(C,b,b,E,E,C)}}else return;const m=new(Oh(d)?Gh:Hh)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function _g(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v];for(let v=0;v<_.length;v++)t.update(p,n,_[v])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function vg(r,e,t){const n=new WeakMap,i=new rt;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,b=1;C>e.maxTextureSize&&(b=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*b*4*u),I=new kh(E,C,b,u);I.type=_n,I.needsUpdate=!0;const A=y*4;for(let P=0;P<u;P++){const k=p[P],B=v[P],W=x[P],q=C*b*4*P;for(let G=0;G<k.count;G++){const K=G*A;g===!0&&(i.fromBufferAttribute(k,G),E[q+K+0]=i.x,E[q+K+1]=i.y,E[q+K+2]=i.z,E[q+K+3]=0),_===!0&&(i.fromBufferAttribute(B,G),E[q+K+4]=i.x,E[q+K+5]=i.y,E[q+K+6]=i.z,E[q+K+7]=0),m===!0&&(i.fromBufferAttribute(W,G),E[q+K+8]=i.x,E[q+K+9]=i.y,E[q+K+10]=i.z,E[q+K+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new he(C,b)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Mg(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Yh extends vt{constructor(e,t,n,i,s,o,a,c,l,h=$i){if(h!==$i&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=ns),n===void 0&&h===ss&&(n=is),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=c!==void 0?c:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jh=new vt,Kh=new Yh(1,1);Kh.compareFunction=Fh;const $h=new kh,Zh=new af,Jh=new Xh,ml=[],gl=[],_l=new Float32Array(16),xl=new Float32Array(9),vl=new Float32Array(4);function _s(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ml[i];if(s===void 0&&(s=new Float32Array(i),ml[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function oo(r,e){let t=gl[e];t===void 0&&(t=new Int32Array(e),gl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Sg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2fv(this.addr,e),yt(t,e)}}function Tg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;r.uniform3fv(this.addr,e),yt(t,e)}}function Ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4fv(this.addr,e),yt(t,e)}}function bg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;vl.set(n),r.uniformMatrix2fv(this.addr,!1,vl),yt(t,n)}}function Eg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;xl.set(n),r.uniformMatrix3fv(this.addr,!1,xl),yt(t,n)}}function wg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,n))return;_l.set(n),r.uniformMatrix4fv(this.addr,!1,_l),yt(t,n)}}function Rg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Cg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2iv(this.addr,e),yt(t,e)}}function Pg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3iv(this.addr,e),yt(t,e)}}function Ig(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4iv(this.addr,e),yt(t,e)}}function Lg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2uiv(this.addr,e),yt(t,e)}}function Ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3uiv(this.addr,e),yt(t,e)}}function Ng(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4uiv(this.addr,e),yt(t,e)}}function Fg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Kh:jh;t.setTexture2D(e||s,i)}function Og(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zh,i)}function Bg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jh,i)}function kg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$h,i)}function zg(r){switch(r){case 5126:return yg;case 35664:return Sg;case 35665:return Tg;case 35666:return Ag;case 35674:return bg;case 35675:return Eg;case 35676:return wg;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ig;case 5125:return Lg;case 36294:return Dg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}function Hg(r,e){r.uniform1fv(this.addr,e)}function Gg(r,e){const t=_s(e,this.size,2);r.uniform2fv(this.addr,t)}function Vg(r,e){const t=_s(e,this.size,3);r.uniform3fv(this.addr,t)}function Wg(r,e){const t=_s(e,this.size,4);r.uniform4fv(this.addr,t)}function Xg(r,e){const t=_s(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function qg(r,e){const t=_s(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Yg(r,e){const t=_s(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function jg(r,e){r.uniform1iv(this.addr,e)}function Kg(r,e){r.uniform2iv(this.addr,e)}function $g(r,e){r.uniform3iv(this.addr,e)}function Zg(r,e){r.uniform4iv(this.addr,e)}function Jg(r,e){r.uniform1uiv(this.addr,e)}function Qg(r,e){r.uniform2uiv(this.addr,e)}function e0(r,e){r.uniform3uiv(this.addr,e)}function t0(r,e){r.uniform4uiv(this.addr,e)}function n0(r,e,t){const n=this.cache,i=e.length,s=oo(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||jh,s[o])}function i0(r,e,t){const n=this.cache,i=e.length,s=oo(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zh,s[o])}function s0(r,e,t){const n=this.cache,i=e.length,s=oo(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jh,s[o])}function r0(r,e,t){const n=this.cache,i=e.length,s=oo(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||$h,s[o])}function o0(r){switch(r){case 5126:return Hg;case 35664:return Gg;case 35665:return Vg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return jg;case 35667:case 35671:return Kg;case 35668:case 35672:return $g;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class a0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}}class c0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o0(t.type)}}class l0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function Ml(r,e){r.seq.push(e),r.map[e.id]=e}function h0(r,e,t){const n=r.name,i=n.length;for(qo.lastIndex=0;;){const s=qo.exec(n),o=qo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ml(t,l===void 0?new a0(a,r,e):new c0(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new l0(a),Ml(t,u)),t=u}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);h0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function yl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const u0=37297;let d0=0;function f0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function p0(r){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(r);let n;switch(e===t?n="":e===Jr&&t===Zr?n="LinearDisplayP3ToLinearSRGB":e===Zr&&t===Jr&&(n="LinearSRGBToLinearDisplayP3"),r){case Rt:case so:return[n,"LinearTransferOETF"];case Et:case Ba:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Sl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+f0(r.getShaderSource(e),o)}else return i}function m0(r,e){const t=p0(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function g0(r,e){let t;switch(e){case Mh:t="Linear";break;case yh:t="Reinhard";break;case Sh:t="OptimizedCineon";break;case Na:t="ACESFilmic";break;case Th:t="AgX";break;case Ah:t="Neutral";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function x0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function zs(r){return r!==""}function Tl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Al(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(r){return r.replace(M0,S0)}const y0=new Map;function S0(r,e){let t=Pe[e];if(t===void 0){const n=y0.get(e);if(n!==void 0)t=Pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _a(t)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(r){return r.replace(T0,A0)}function A0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function El(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function E0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function w0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ts:e="ENVMAP_MODE_REFRACTION";break}return e}function R0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ua:e="ENVMAP_BLENDING_MULTIPLY";break;case hd:e="ENVMAP_BLENDING_MIX";break;case ud:e="ENVMAP_BLENDING_ADD";break}return e}function C0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function P0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=b0(t),l=E0(t),h=w0(t),u=R0(t),d=C0(t),f=_0(t),g=x0(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`)):(m=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),p=[El(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Qn?g0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),o=_a(o),o=Tl(o,t),o=Al(o,t),a=_a(a),a=Tl(a,t),a=Al(a,t),o=bl(o),a=bl(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,y=v+p+a,C=yl(i,i.VERTEX_SHADER,x),b=yl(i,i.FRAGMENT_SHADER,y);i.attachShader(_,C),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(C).trim(),W=i.getShaderInfoLog(b).trim();let q=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,b);else{const K=Sl(i,C,"vertex"),H=Sl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+K+`
`+H)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||W==="")&&(G=!1);G&&(P.diagnostics={runnable:q,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(C),i.deleteShader(b),I=new Wr(i,_),A=v0(i,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,u0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=b,this}let I0=0;class L0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new D0(e),t.set(e,n)),n}}class D0{constructor(e){this.id=I0++,this.code=e,this.usedTimes=0}}function U0(r,e,t,n,i,s,o){const a=new Ha,c=new L0,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return l.add(A),A===0?"uv":`uv${A}`}function m(A,M,P,k,B){const W=k.fog,q=B.geometry,G=A.isMeshStandardMaterial?k.environment:null,K=(A.isMeshStandardMaterial?t:e).get(A.envMap||G),H=K&&K.mapping===io?K.image.height:null,de=g[A.type];A.precision!==null&&(f=i.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));const me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=me!==void 0?me.length:0;let Ge=0;q.morphAttributes.position!==void 0&&(Ge=1),q.morphAttributes.normal!==void 0&&(Ge=2),q.morphAttributes.color!==void 0&&(Ge=3);let tt,X,J,pe;if(de){const nt=pn[de];tt=nt.vertexShader,X=nt.fragmentShader}else tt=A.vertexShader,X=A.fragmentShader,c.update(A),J=c.getVertexShaderID(A),pe=c.getFragmentShaderID(A);const oe=r.getRenderTarget(),Fe=B.isInstancedMesh===!0,De=B.isBatchedMesh===!0,We=!!A.map,D=!!A.matcap,Ve=!!K,ze=!!A.aoMap,lt=!!A.lightMap,Te=!!A.bumpMap,Xe=!!A.normalMap,Oe=!!A.displacementMap,Ce=!!A.emissiveMap,mt=!!A.metalnessMap,w=!!A.roughnessMap,S=A.anisotropy>0,z=A.clearcoat>0,j=A.dispersion>0,$=A.iridescence>0,Z=A.sheen>0,ye=A.transmission>0,se=S&&!!A.anisotropyMap,re=z&&!!A.clearcoatMap,Ue=z&&!!A.clearcoatNormalMap,Q=z&&!!A.clearcoatRoughnessMap,ve=$&&!!A.iridescenceMap,ke=$&&!!A.iridescenceThicknessMap,Ee=Z&&!!A.sheenColorMap,ae=Z&&!!A.sheenRoughnessMap,Ne=!!A.specularMap,He=!!A.specularColorMap,ft=!!A.specularIntensityMap,L=ye&&!!A.transmissionMap,ce=ye&&!!A.thicknessMap,V=!!A.gradientMap,Y=!!A.alphaMap,te=A.alphaTest>0,we=!!A.alphaHash,Ye=!!A.extensions;let pt=Qn;A.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(pt=r.toneMapping);const St={shaderID:de,shaderType:A.type,shaderName:A.name,vertexShader:tt,fragmentShader:X,defines:A.defines,customVertexShaderID:J,customFragmentShaderID:pe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:De,batchingColor:De&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Rt,alphaToCoverage:!!A.alphaToCoverage,map:We,matcap:D,envMap:Ve,envMapMode:Ve&&K.mapping,envMapCubeUVHeight:H,aoMap:ze,lightMap:lt,bumpMap:Te,normalMap:Xe,displacementMap:d&&Oe,emissiveMap:Ce,normalMapObjectSpace:Xe&&A.normalMapType===Cd,normalMapTangentSpace:Xe&&A.normalMapType===Oa,metalnessMap:mt,roughnessMap:w,anisotropy:S,anisotropyMap:se,clearcoat:z,clearcoatMap:re,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Q,dispersion:j,iridescence:$,iridescenceMap:ve,iridescenceThicknessMap:ke,sheen:Z,sheenColorMap:Ee,sheenRoughnessMap:ae,specularMap:Ne,specularColorMap:He,specularIntensityMap:ft,transmission:ye,transmissionMap:L,thicknessMap:ce,gradientMap:V,opaque:A.transparent===!1&&A.blending===Ki&&A.alphaToCoverage===!1,alphaMap:Y,alphaTest:te,alphaHash:we,combine:A.combine,mapUv:We&&_(A.map.channel),aoMapUv:ze&&_(A.aoMap.channel),lightMapUv:lt&&_(A.lightMap.channel),bumpMapUv:Te&&_(A.bumpMap.channel),normalMapUv:Xe&&_(A.normalMap.channel),displacementMapUv:Oe&&_(A.displacementMap.channel),emissiveMapUv:Ce&&_(A.emissiveMap.channel),metalnessMapUv:mt&&_(A.metalnessMap.channel),roughnessMapUv:w&&_(A.roughnessMap.channel),anisotropyMapUv:se&&_(A.anisotropyMap.channel),clearcoatMapUv:re&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:ae&&_(A.sheenRoughnessMap.channel),specularMapUv:Ne&&_(A.specularMap.channel),specularColorMapUv:He&&_(A.specularColorMap.channel),specularIntensityMapUv:ft&&_(A.specularIntensityMap.channel),transmissionMapUv:L&&_(A.transmissionMap.channel),thicknessMapUv:ce&&_(A.thicknessMap.channel),alphaMapUv:Y&&_(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Xe||S),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(We||Y),fog:!!W,useFog:A.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:pt,decodeVideoTexture:We&&A.map.isVideoTexture===!0&&qe.getTransfer(A.map.colorSpace)===ot,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===mn,flipSided:A.side===zt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ye&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ye&&A.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)M.push(P),M.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(v(M,A),x(M,A),M.push(r.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function v(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function x(A,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),A.push(a.mask)}function y(A){const M=g[A.type];let P;if(M){const k=pn[M];P=Zs.clone(k.uniforms)}else P=A.uniforms;return P}function C(A,M){let P;for(let k=0,B=h.length;k<B;k++){const W=h[k];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new P0(r,M,A,s),h.push(P)),P}function b(A){if(--A.usedTimes===0){const M=h.indexOf(A);h[M]=h[h.length-1],h.pop(),A.destroy()}}function E(A){c.remove(A)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:I}}function N0(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function F0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function wl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Rl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||F0),n.length>1&&n.sort(d||wl),i.length>1&&i.sort(d||wl)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function O0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Rl,r.set(n,[o])):i>=s.length?(o=new Rl,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function B0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ue};break;case"SpotLight":t={position:new R,direction:new R,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new R,halfWidth:new R,halfHeight:new R};break}return r[e.id]=t,t}}}function k0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let z0=0;function H0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function G0(r){const e=new B0,t=k0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,s=new Re,o=new Re;function a(l){let h=0,u=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,x=0,y=0,C=0,b=0,E=0;l.sort(H0);for(let A=0,M=l.length;A<M;A++){const P=l[A],k=P.color,B=P.intensity,W=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*B,u+=k.g*B,d+=k.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],B);E++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=t.get(P);H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(k).multiplyScalar(B),G.distance=W,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const K=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,K.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const H=t.get(P);H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=q,y++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(k).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const K=P.shadow,H=t.get(P);H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==C||I.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=C,I.numLightProbes=E,n.version=z0++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const x=l[p];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Cl(r){const e=new G0(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function V0(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Cl(r),e.set(i,[a])):s>=o.length?(a=new Cl(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class W0 extends Zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X0 extends Zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
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
}`;function j0(r,e,t){let n=new Ga;const i=new he,s=new he,o=new rt,a=new W0({depthPacking:Rd}),c=new X0,l={},h=t.maxTextureSize,u={[Fn]:zt,[zt]:Fn,[mn]:mn},d=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:q0,fragmentShader:Y0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ct;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(b,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const A=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Dn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==Rn&&this.type===Rn,W=p===Rn&&this.type!==Rn;for(let q=0,G=b.length;q<G;q++){const K=b[q],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const de=H.getFrameExtents();if(i.multiply(de),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/de.x),i.x=s.x*de.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/de.y),i.y=s.y*de.y,H.mapSize.y=s.y)),H.map===null||B===!0||W===!0){const xe=this.type!==Rn?{minFilter:Bt,magFilter:Bt}:{};H.map!==null&&H.map.dispose(),H.map=new Kt(i.x,i.y,xe),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const me=H.getViewportCount();for(let xe=0;xe<me;xe++){const Ge=H.getViewport(xe);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),k.viewport(o),H.updateMatrices(K,xe),n=H.getFrustum(),y(E,I,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Rn&&v(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(A,M,P)};function v(b,E){const I=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Kt(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,I,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,I,f,_,null)}function x(b,E,I,A){let M=null;const P=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?c:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=M.uuid,B=E.uuid;let W=l[k];W===void 0&&(W={},l[k]=W);let q=W[B];q===void 0&&(q=M.clone(),W[B]=q,E.addEventListener("dispose",C)),M=q}if(M.visible=E.visible,M.wireframe=E.wireframe,A===Rn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=r.properties.get(M);k.light=I}return M}function y(b,E,I,A,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Rn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const B=e.update(b),W=b.material;if(Array.isArray(W)){const q=B.groups;for(let G=0,K=q.length;G<K;G++){const H=q[G],de=W[H.materialIndex];if(de&&de.visible){const me=x(b,de,A,M);b.onBeforeShadow(r,b,E,I,B,me,H),r.renderBufferDirect(I,null,B,me,b,H),b.onAfterShadow(r,b,E,I,B,me,H)}}}else if(W.visible){const q=x(b,W,A,M);b.onBeforeShadow(r,b,E,I,B,q,null),r.renderBufferDirect(I,null,B,q,b,null),b.onAfterShadow(r,b,E,I,B,q,null)}}const k=b.children;for(let B=0,W=k.length;B<W;B++)y(k[B],E,I,A,M)}function C(b){b.target.removeEventListener("dispose",C);for(const I in l){const A=l[I],M=b.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}function K0(r){function e(){let L=!1;const ce=new rt;let V=null;const Y=new rt(0,0,0,0);return{setMask:function(te){V!==te&&!L&&(r.colorMask(te,te,te,te),V=te)},setLocked:function(te){L=te},setClear:function(te,we,Ye,pt,St){St===!0&&(te*=pt,we*=pt,Ye*=pt),ce.set(te,we,Ye,pt),Y.equals(ce)===!1&&(r.clearColor(te,we,Ye,pt),Y.copy(ce))},reset:function(){L=!1,V=null,Y.set(-1,0,0,0)}}}function t(){let L=!1,ce=null,V=null,Y=null;return{setTest:function(te){te?pe(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(te){ce!==te&&!L&&(r.depthMask(te),ce=te)},setFunc:function(te){if(V!==te){switch(te){case id:r.depthFunc(r.NEVER);break;case sd:r.depthFunc(r.ALWAYS);break;case rd:r.depthFunc(r.LESS);break;case qr:r.depthFunc(r.LEQUAL);break;case od:r.depthFunc(r.EQUAL);break;case ad:r.depthFunc(r.GEQUAL);break;case cd:r.depthFunc(r.GREATER);break;case ld:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}V=te}},setLocked:function(te){L=te},setClear:function(te){Y!==te&&(r.clearDepth(te),Y=te)},reset:function(){L=!1,ce=null,V=null,Y=null}}}function n(){let L=!1,ce=null,V=null,Y=null,te=null,we=null,Ye=null,pt=null,St=null;return{setTest:function(nt){L||(nt?pe(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(nt){ce!==nt&&!L&&(r.stencilMask(nt),ce=nt)},setFunc:function(nt,dn,fn){(V!==nt||Y!==dn||te!==fn)&&(r.stencilFunc(nt,dn,fn),V=nt,Y=dn,te=fn)},setOp:function(nt,dn,fn){(we!==nt||Ye!==dn||pt!==fn)&&(r.stencilOp(nt,dn,fn),we=nt,Ye=dn,pt=fn)},setLocked:function(nt){L=nt},setClear:function(nt){St!==nt&&(r.clearStencil(nt),St=nt)},reset:function(){L=!1,ce=null,V=null,Y=null,te=null,we=null,Ye=null,pt=null,St=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,v=null,x=null,y=null,C=null,b=new ue(0,0,0),E=0,I=!1,A=null,M=null,P=null,k=null,B=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=G>=1):K.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=G>=2);let H=null,de={};const me=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Ge=new rt().fromArray(me),tt=new rt().fromArray(xe);function X(L,ce,V,Y){const te=new Uint8Array(4),we=r.createTexture();r.bindTexture(L,we),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<V;Ye++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ce+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return we}const J={};J[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),pe(r.DEPTH_TEST),s.setFunc(qr),Te(!1),Xe(hc),pe(r.CULL_FACE),ze(Dn);function pe(L){l[L]!==!0&&(r.enable(L),l[L]=!0)}function oe(L){l[L]!==!1&&(r.disable(L),l[L]=!1)}function Fe(L,ce){return h[L]!==ce?(r.bindFramebuffer(L,ce),h[L]=ce,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ce),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function De(L,ce){let V=d,Y=!1;if(L){V=u.get(ce),V===void 0&&(V=[],u.set(ce,V));const te=L.textures;if(V.length!==te.length||V[0]!==r.COLOR_ATTACHMENT0){for(let we=0,Ye=te.length;we<Ye;we++)V[we]=r.COLOR_ATTACHMENT0+we;V.length=te.length,Y=!0}}else V[0]!==r.BACK&&(V[0]=r.BACK,Y=!0);Y&&r.drawBuffers(V)}function We(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const D={[_i]:r.FUNC_ADD,[zu]:r.FUNC_SUBTRACT,[Hu]:r.FUNC_REVERSE_SUBTRACT};D[Gu]=r.MIN,D[Vu]=r.MAX;const Ve={[Wu]:r.ZERO,[Xu]:r.ONE,[qu]:r.SRC_COLOR,[ua]:r.SRC_ALPHA,[Ju]:r.SRC_ALPHA_SATURATE,[$u]:r.DST_COLOR,[ju]:r.DST_ALPHA,[Yu]:r.ONE_MINUS_SRC_COLOR,[da]:r.ONE_MINUS_SRC_ALPHA,[Zu]:r.ONE_MINUS_DST_COLOR,[Ku]:r.ONE_MINUS_DST_ALPHA,[Qu]:r.CONSTANT_COLOR,[ed]:r.ONE_MINUS_CONSTANT_COLOR,[td]:r.CONSTANT_ALPHA,[nd]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(L,ce,V,Y,te,we,Ye,pt,St,nt){if(L===Dn){g===!0&&(oe(r.BLEND),g=!1);return}if(g===!1&&(pe(r.BLEND),g=!0),L!==ku){if(L!==_||nt!==I){if((m!==_i||x!==_i)&&(r.blendEquation(r.FUNC_ADD),m=_i,x=_i),nt)switch(L){case Ki:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ha:r.blendFunc(r.ONE,r.ONE);break;case uc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ki:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ha:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case uc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case dc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,v=null,y=null,C=null,b.set(0,0,0),E=0,_=L,I=nt}return}te=te||ce,we=we||V,Ye=Ye||Y,(ce!==m||te!==x)&&(r.blendEquationSeparate(D[ce],D[te]),m=ce,x=te),(V!==p||Y!==v||we!==y||Ye!==C)&&(r.blendFuncSeparate(Ve[V],Ve[Y],Ve[we],Ve[Ye]),p=V,v=Y,y=we,C=Ye),(pt.equals(b)===!1||St!==E)&&(r.blendColor(pt.r,pt.g,pt.b,St),b.copy(pt),E=St),_=L,I=!1}function lt(L,ce){L.side===mn?oe(r.CULL_FACE):pe(r.CULL_FACE);let V=L.side===zt;ce&&(V=!V),Te(V),L.blending===Ki&&L.transparent===!1?ze(Dn):ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const Y=L.stencilWrite;o.setTest(Y),Y&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ce(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){A!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),A=L)}function Xe(L){L!==Ou?(pe(r.CULL_FACE),L!==M&&(L===hc?r.cullFace(r.BACK):L===Bu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),M=L}function Oe(L){L!==P&&(q&&r.lineWidth(L),P=L)}function Ce(L,ce,V){L?(pe(r.POLYGON_OFFSET_FILL),(k!==ce||B!==V)&&(r.polygonOffset(ce,V),k=ce,B=V)):oe(r.POLYGON_OFFSET_FILL)}function mt(L){L?pe(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function w(L){L===void 0&&(L=r.TEXTURE0+W-1),H!==L&&(r.activeTexture(L),H=L)}function S(L,ce,V){V===void 0&&(H===null?V=r.TEXTURE0+W-1:V=H);let Y=de[V];Y===void 0&&(Y={type:void 0,texture:void 0},de[V]=Y),(Y.type!==L||Y.texture!==ce)&&(H!==V&&(r.activeTexture(V),H=V),r.bindTexture(L,ce||J[L]),Y.type=L,Y.texture=ce)}function z(){const L=de[H];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){Ge.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ge.copy(L))}function ae(L){tt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),tt.copy(L))}function Ne(L,ce){let V=c.get(ce);V===void 0&&(V=new WeakMap,c.set(ce,V));let Y=V.get(L);Y===void 0&&(Y=r.getUniformBlockIndex(ce,L.name),V.set(L,Y))}function He(L,ce){const Y=c.get(ce).get(L);a.get(ce)!==Y&&(r.uniformBlockBinding(ce,Y,L.__bindingPointIndex),a.set(ce,Y))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},H=null,de={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,v=null,x=null,y=null,C=null,b=new ue(0,0,0),E=0,I=!1,A=null,M=null,P=null,k=null,B=null,Ge.set(0,0,r.canvas.width,r.canvas.height),tt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:pe,disable:oe,bindFramebuffer:Fe,drawBuffers:De,useProgram:We,setBlending:ze,setMaterial:lt,setFlipSided:Te,setCullFace:Xe,setLineWidth:Oe,setPolygonOffset:Ce,setScissorTest:mt,activeTexture:w,bindTexture:S,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:ve,texImage3D:ke,updateUBOMapping:Ne,uniformBlockBinding:He,texStorage2D:Ue,texStorage3D:Q,texSubImage2D:Z,texSubImage3D:ye,compressedTexSubImage2D:se,compressedTexSubImage3D:re,scissor:Ee,viewport:ae,reset:ft}}function $0(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new he,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return f?new OffscreenCanvas(w,S):$s("canvas")}function _(w,S,z){let j=1;const $=mt(w);if(($.width>z||$.height>z)&&(j=z/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(j*$.width),ye=Math.floor(j*$.height);u===void 0&&(u=g(Z,ye));const se=S?g(Z,ye):u;return se.width=Z,se.height=ye,se.getContext("2d").drawImage(w,0,0,Z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+ye+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==Bt&&w.minFilter!==Wt}function p(w){r.generateMipmap(w)}function v(w,S,z,j,$=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=S;if(S===r.RED&&(z===r.FLOAT&&(Z=r.R32F),z===r.HALF_FLOAT&&(Z=r.R16F),z===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.R8UI),z===r.UNSIGNED_SHORT&&(Z=r.R16UI),z===r.UNSIGNED_INT&&(Z=r.R32UI),z===r.BYTE&&(Z=r.R8I),z===r.SHORT&&(Z=r.R16I),z===r.INT&&(Z=r.R32I)),S===r.RG&&(z===r.FLOAT&&(Z=r.RG32F),z===r.HALF_FLOAT&&(Z=r.RG16F),z===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RG8UI),z===r.UNSIGNED_SHORT&&(Z=r.RG16UI),z===r.UNSIGNED_INT&&(Z=r.RG32UI),z===r.BYTE&&(Z=r.RG8I),z===r.SHORT&&(Z=r.RG16I),z===r.INT&&(Z=r.RG32I)),S===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),S===r.RGBA){const ye=$?$r:qe.getTransfer(j);z===r.FLOAT&&(Z=r.RGBA32F),z===r.HALF_FLOAT&&(Z=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Z=ye===ot?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(w,S){let z;return w?S===null||S===ns||S===is?z=r.DEPTH24_STENCIL8:S===_n?z=r.DEPTH32F_STENCIL8:S===jr&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ns||S===is?z=r.DEPTH_COMPONENT24:S===_n?z=r.DEPTH_COMPONENT32F:S===jr&&(z=r.DEPTH_COMPONENT16),z}function y(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Bt&&w.minFilter!==Wt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function C(w){const S=w.target;S.removeEventListener("dispose",C),E(S),S.isVideoTexture&&h.delete(S)}function b(w){const S=w.target;S.removeEventListener("dispose",b),A(S)}function E(w){const S=n.get(w);if(S.__webglInit===void 0)return;const z=w.source,j=d.get(z);if(j){const $=j[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(w),Object.keys(j).length===0&&d.delete(z)}n.remove(w)}function I(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const z=w.source,j=d.get(z);delete j[S.__cacheKey],o.memory.textures--}function A(w){const S=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let $=0;$<S.__webglFramebuffer[j].length;$++)r.deleteFramebuffer(S.__webglFramebuffer[j][$]);else r.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)r.deleteFramebuffer(S.__webglFramebuffer[j]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=w.textures;for(let j=0,$=z.length;j<$;j++){const Z=n.get(z[j]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(w)}let M=0;function P(){M=0}function k(){const w=M;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),M+=1,w}function B(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function W(w,S){const z=n.get(w);if(w.isVideoTexture&&Oe(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(z,w,S);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}function q(w,S){const z=n.get(w);if(w.version>0&&z.__version!==w.version){tt(z,w,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)}function G(w,S){const z=n.get(w);if(w.version>0&&z.__version!==w.version){tt(z,w,S);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)}function K(w,S){const z=n.get(w);if(w.version>0&&z.__version!==w.version){X(z,w,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)}const H={[On]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[Yr]:r.MIRRORED_REPEAT},de={[Bt]:r.NEAREST,[Eh]:r.NEAREST_MIPMAP_NEAREST,[ks]:r.NEAREST_MIPMAP_LINEAR,[Wt]:r.LINEAR,[Gr]:r.LINEAR_MIPMAP_NEAREST,[Pn]:r.LINEAR_MIPMAP_LINEAR},me={[Pd]:r.NEVER,[Fd]:r.ALWAYS,[Id]:r.LESS,[Fh]:r.LEQUAL,[Ld]:r.EQUAL,[Nd]:r.GEQUAL,[Dd]:r.GREATER,[Ud]:r.NOTEQUAL};function xe(w,S){if(S.type===_n&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Wt||S.magFilter===Gr||S.magFilter===ks||S.magFilter===Pn||S.minFilter===Wt||S.minFilter===Gr||S.minFilter===ks||S.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,H[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,H[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,H[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,de[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bt||S.minFilter!==ks&&S.minFilter!==Pn||S.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ge(w,S){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",C));const j=S.source;let $=d.get(j);$===void 0&&($={},d.set(j,$));const Z=B(S);if(Z!==w.__cacheKey){$[Z]===void 0&&($[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[Z].usedTimes++;const ye=$[w.__cacheKey];ye!==void 0&&($[w.__cacheKey].usedTimes--,ye.usedTimes===0&&I(S)),w.__cacheKey=Z,w.__webglTexture=$[Z].texture}return z}function tt(w,S,z){let j=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=r.TEXTURE_3D);const $=Ge(w,S),Z=S.source;t.bindTexture(j,w.__webglTexture,r.TEXTURE0+z);const ye=n.get(Z);if(Z.version!==ye.__version||$===!0){t.activeTexture(r.TEXTURE0+z);const se=qe.getPrimaries(qe.workingColorSpace),re=S.colorSpace===$n?null:qe.getPrimaries(S.colorSpace),Ue=S.colorSpace===$n||se===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Q=_(S.image,!1,i.maxTextureSize);Q=Ce(S,Q);const ve=s.convert(S.format,S.colorSpace),ke=s.convert(S.type);let Ee=v(S.internalFormat,ve,ke,S.colorSpace,S.isVideoTexture);xe(j,S);let ae;const Ne=S.mipmaps,He=S.isVideoTexture!==!0,ft=ye.__version===void 0||$===!0,L=Z.dataReady,ce=y(S,Q);if(S.isDepthTexture)Ee=x(S.format===ss,S.type),ft&&(He?t.texStorage2D(r.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ve,ke,null));else if(S.isDataTexture)if(Ne.length>0){He&&ft&&t.texStorage2D(r.TEXTURE_2D,ce,Ee,Ne[0].width,Ne[0].height);for(let V=0,Y=Ne.length;V<Y;V++)ae=Ne[V],He?L&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,ae.width,ae.height,ve,ke,ae.data):t.texImage2D(r.TEXTURE_2D,V,Ee,ae.width,ae.height,0,ve,ke,ae.data);S.generateMipmaps=!1}else He?(ft&&t.texStorage2D(r.TEXTURE_2D,ce,Ee,Q.width,Q.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,ve,ke,Q.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ve,ke,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ee,Ne[0].width,Ne[0].height,Q.depth);for(let V=0,Y=Ne.length;V<Y;V++)if(ae=Ne[V],S.format!==cn)if(ve!==null)if(He){if(L)if(S.layerUpdates.size>0){for(const te of S.layerUpdates){const we=ae.width*ae.height;t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,te,ae.width,ae.height,1,ve,ae.data.slice(we*te,we*(te+1)),0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,ae.width,ae.height,Q.depth,ve,ae.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,V,Ee,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,V,0,0,0,ae.width,ae.height,Q.depth,ve,ke,ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,V,Ee,ae.width,ae.height,Q.depth,0,ve,ke,ae.data)}else{He&&ft&&t.texStorage2D(r.TEXTURE_2D,ce,Ee,Ne[0].width,Ne[0].height);for(let V=0,Y=Ne.length;V<Y;V++)ae=Ne[V],S.format!==cn?ve!==null?He?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,V,0,0,ae.width,ae.height,ve,ae.data):t.compressedTexImage2D(r.TEXTURE_2D,V,Ee,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?L&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,ae.width,ae.height,ve,ke,ae.data):t.texImage2D(r.TEXTURE_2D,V,Ee,ae.width,ae.height,0,ve,ke,ae.data)}else if(S.isDataArrayTexture)if(He){if(ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ee,Q.width,Q.height,Q.depth),L)if(S.layerUpdates.size>0){let V;switch(ke){case r.UNSIGNED_BYTE:switch(ve){case r.ALPHA:V=1;break;case r.LUMINANCE:V=1;break;case r.LUMINANCE_ALPHA:V=2;break;case r.RGB:V=3;break;case r.RGBA:V=4;break;default:throw new Error(`Unknown texel size for format ${ve}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:V=1;break;default:throw new Error(`Unknown texel size for type ${ke}.`)}const Y=Q.width*Q.height*V;for(const te of S.layerUpdates)t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,te,Q.width,Q.height,1,ve,ke,Q.data.slice(Y*te,Y*(te+1)));S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ve,ke,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,ve,ke,Q.data);else if(S.isData3DTexture)He?(ft&&t.texStorage3D(r.TEXTURE_3D,ce,Ee,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ve,ke,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,ve,ke,Q.data);else if(S.isFramebufferTexture){if(ft)if(He)t.texStorage2D(r.TEXTURE_2D,ce,Ee,Q.width,Q.height);else{let V=Q.width,Y=Q.height;for(let te=0;te<ce;te++)t.texImage2D(r.TEXTURE_2D,te,Ee,V,Y,0,ve,ke,null),V>>=1,Y>>=1}}else if(Ne.length>0){if(He&&ft){const V=mt(Ne[0]);t.texStorage2D(r.TEXTURE_2D,ce,Ee,V.width,V.height)}for(let V=0,Y=Ne.length;V<Y;V++)ae=Ne[V],He?L&&t.texSubImage2D(r.TEXTURE_2D,V,0,0,ve,ke,ae):t.texImage2D(r.TEXTURE_2D,V,Ee,ve,ke,ae);S.generateMipmaps=!1}else if(He){if(ft){const V=mt(Q);t.texStorage2D(r.TEXTURE_2D,ce,Ee,V.width,V.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,ke,Q)}else t.texImage2D(r.TEXTURE_2D,0,Ee,ve,ke,Q);m(S)&&p(j),ye.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function X(w,S,z){if(S.image.length!==6)return;const j=Ge(w,S),$=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+z);const Z=n.get($);if($.version!==Z.__version||j===!0){t.activeTexture(r.TEXTURE0+z);const ye=qe.getPrimaries(qe.workingColorSpace),se=S.colorSpace===$n?null:qe.getPrimaries(S.colorSpace),re=S.colorSpace===$n||ye===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let Y=0;Y<6;Y++)!Ue&&!Q?ve[Y]=_(S.image[Y],!0,i.maxCubemapSize):ve[Y]=Q?S.image[Y].image:S.image[Y],ve[Y]=Ce(S,ve[Y]);const ke=ve[0],Ee=s.convert(S.format,S.colorSpace),ae=s.convert(S.type),Ne=v(S.internalFormat,Ee,ae,S.colorSpace),He=S.isVideoTexture!==!0,ft=Z.__version===void 0||j===!0,L=$.dataReady;let ce=y(S,ke);xe(r.TEXTURE_CUBE_MAP,S);let V;if(Ue){He&&ft&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Ne,ke.width,ke.height);for(let Y=0;Y<6;Y++){V=ve[Y].mipmaps;for(let te=0;te<V.length;te++){const we=V[te];S.format!==cn?Ee!==null?He?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,0,0,we.width,we.height,Ee,we.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,Ne,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,0,0,we.width,we.height,Ee,ae,we.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te,Ne,we.width,we.height,0,Ee,ae,we.data)}}}else{if(V=S.mipmaps,He&&ft){V.length>0&&ce++;const Y=mt(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Ne,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ve[Y].width,ve[Y].height,Ee,ae,ve[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,ve[Y].width,ve[Y].height,0,Ee,ae,ve[Y].data);for(let te=0;te<V.length;te++){const Ye=V[te].image[Y].image;He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te+1,0,0,Ye.width,Ye.height,Ee,ae,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te+1,Ne,Ye.width,Ye.height,0,Ee,ae,Ye.data)}}else{He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ee,ae,ve[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ne,Ee,ae,ve[Y]);for(let te=0;te<V.length;te++){const we=V[te];He?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te+1,0,0,Ee,ae,we.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,te+1,Ne,Ee,ae,we.image[Y])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Z.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function J(w,S,z,j,$,Z){const ye=s.convert(z.format,z.colorSpace),se=s.convert(z.type),re=v(z.internalFormat,ye,se,z.colorSpace);if(!n.get(S).__hasExternalTextures){const Q=Math.max(1,S.width>>Z),ve=Math.max(1,S.height>>Z);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,Z,re,Q,ve,S.depth,0,ye,se,null):t.texImage2D($,Z,re,Q,ve,0,ye,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),Xe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,$,n.get(z).__webglTexture,0,Te(S)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,$,n.get(z).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(w,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer){const j=S.depthTexture,$=j&&j.isDepthTexture?j.type:null,Z=x(S.stencilBuffer,$),ye=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=Te(S);Xe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,Z,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,w)}else{const j=S.textures;for(let $=0;$<j.length;$++){const Z=j[$],ye=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),re=v(Z.internalFormat,ye,se,Z.colorSpace),Ue=Te(S);z&&Xe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,re,S.width,S.height):Xe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ue,re,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,re,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const j=n.get(S.depthTexture).__webglTexture,$=Te(S);if(S.depthTexture.format===$i)Xe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===ss)Xe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Fe(w){const S=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");oe(S.__webglFramebuffer,w)}else if(z){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]=r.createRenderbuffer(),pe(S.__webglDepthbuffer[j],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),pe(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(w,S,z){const j=n.get(w);S!==void 0&&J(j.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Fe(w)}function We(w){const S=w.texture,z=n.get(w),j=n.get(S);w.addEventListener("dispose",b);const $=w.textures,Z=w.isWebGLCubeRenderTarget===!0,ye=$.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=S.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let re=0;re<S.mipmaps.length;re++)z.__webglFramebuffer[se][re]=r.createFramebuffer()}else z.__webglFramebuffer[se]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)z.__webglFramebuffer[se]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ye)for(let se=0,re=$.length;se<re;se++){const Ue=n.get($[se]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),o.memory.textures++)}if(w.samples>0&&Xe(w)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const re=$[se];z.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const Ue=s.convert(re.format,re.colorSpace),Q=s.convert(re.type),ve=v(re.internalFormat,Ue,Q,re.colorSpace,w.isXRRenderTarget===!0),ke=Te(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,ve,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,z.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),xe(r.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)J(z.__webglFramebuffer[se][re],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,re);else J(z.__webglFramebuffer[se],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,re=$.length;se<re;se++){const Ue=$[se],Q=n.get(Ue);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),xe(r.TEXTURE_2D,Ue),J(z.__webglFramebuffer,w,Ue,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),m(Ue)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),xe(se,S),S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)J(z.__webglFramebuffer[re],w,S,r.COLOR_ATTACHMENT0,se,re);else J(z.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,se,0);m(S)&&p(se),t.unbindTexture()}w.depthBuffer&&Fe(w)}function D(w){const S=w.textures;for(let z=0,j=S.length;z<j;z++){const $=S[z];if(m($)){const Z=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ye=n.get($).__webglTexture;t.bindTexture(Z,ye),p(Z),t.unbindTexture()}}}const Ve=[],ze=[];function lt(w){if(w.samples>0){if(Xe(w)===!1){const S=w.textures,z=w.width,j=w.height;let $=r.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(w),se=S.length>1;if(se)for(let re=0;re<S.length;re++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let re=0;re<S.length;re++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[re]);const Ue=n.get(S[re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ue,0)}r.blitFramebuffer(0,0,z,j,0,0,z,j,$,r.NEAREST),c===!0&&(Ve.length=0,ze.length=0,Ve.push(r.COLOR_ATTACHMENT0+re),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ve.push(Z),ze.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ze)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let re=0;re<S.length;re++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,ye.__webglColorRenderbuffer[re]);const Ue=n.get(S[re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,Ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const S=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Te(w){return Math.min(i.maxSamples,w.samples)}function Xe(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Oe(w){const S=o.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Ce(w,S){const z=w.colorSpace,j=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Rt&&z!==$n&&(qe.getTransfer(z)===ot?(j!==cn||$!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=K,this.rebindTextures=De,this.setupRenderTarget=We,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Xe}function Z0(r,e){function t(n,i=$n){let s;const o=qe.getTransfer(i);if(n===ni)return r.UNSIGNED_BYTE;if(n===Rh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return r.UNSIGNED_SHORT_5_5_5_1;if(n===gd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===pd)return r.BYTE;if(n===md)return r.SHORT;if(n===jr)return r.UNSIGNED_SHORT;if(n===wh)return r.INT;if(n===ns)return r.UNSIGNED_INT;if(n===_n)return r.FLOAT;if(n===Un)return r.HALF_FLOAT;if(n===_d)return r.ALPHA;if(n===xd)return r.RGB;if(n===cn)return r.RGBA;if(n===vd)return r.LUMINANCE;if(n===Md)return r.LUMINANCE_ALPHA;if(n===$i)return r.DEPTH_COMPONENT;if(n===ss)return r.DEPTH_STENCIL;if(n===Ph)return r.RED;if(n===Ih)return r.RED_INTEGER;if(n===yd)return r.RG;if(n===Lh)return r.RG_INTEGER;if(n===Dh)return r.RGBA_INTEGER;if(n===_o||n===xo||n===vo||n===Mo)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===gc||n===_c)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xc||n===vc||n===Mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xc||n===vc)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yc||n===Sc||n===Tc||n===Ac||n===bc||n===Ec||n===wc||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Uc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ac)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yo||n===Nc||n===Fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yo)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sd||n===Oc||n===Bc||n===kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class J0 extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Le extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q0={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Le;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
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

}`;class n_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new vt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kt({vertexShader:e_,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new as(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class i_ extends yi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new n_,m=t.getContextAttributes();let p=null,v=null;const x=[],y=[],C=new he;let b=null;const E=new Ot;E.layers.enable(1),E.viewport=new rt;const I=new Ot;I.layers.enable(2),I.viewport=new rt;const A=[E,I],M=new J0;M.layers.enable(1),M.layers.enable(2);let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=x[X];return J===void 0&&(J=new Yo,x[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=x[X];return J===void 0&&(J=new Yo,x[X]=J),J.getGripSpace()},this.getHand=function(X){let J=x[X];return J===void 0&&(J=new Yo,x[X]=J),J.getHandSpace()};function B(X){const J=y.indexOf(X.inputSource);if(J===-1)return;const pe=x[J];pe!==void 0&&(pe.update(X.inputSource,X.frame,l||o),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let X=0;X<x.length;X++){const J=y[X];J!==null&&(y[X]=null,x[X].disconnect(J))}P=null,k=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kt(f.framebufferWidth,f.framebufferHeight,{format:cn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,pe=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=m.stencil?ss:$i,pe=m.stencil?is:ns);const Fe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Kt(d.textureWidth,d.textureHeight,{format:cn,type:ni,depthTexture:new Yh(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(X){for(let J=0;J<X.removed.length;J++){const pe=X.removed[J],oe=y.indexOf(pe);oe>=0&&(y[oe]=null,x[oe].disconnect(pe))}for(let J=0;J<X.added.length;J++){const pe=X.added[J];let oe=y.indexOf(pe);if(oe===-1){for(let De=0;De<x.length;De++)if(De>=y.length){y.push(pe),oe=De;break}else if(y[De]===null){y[De]=pe,oe=De;break}if(oe===-1)break}const Fe=x[oe];Fe&&Fe.connect(pe)}}const G=new R,K=new R;function H(X,J,pe){G.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);const oe=G.distanceTo(K),Fe=J.projectionMatrix.elements,De=pe.projectionMatrix.elements,We=Fe[14]/(Fe[10]-1),D=Fe[14]/(Fe[10]+1),Ve=(Fe[9]+1)/Fe[5],ze=(Fe[9]-1)/Fe[5],lt=(Fe[8]-1)/Fe[0],Te=(De[8]+1)/De[0],Xe=We*lt,Oe=We*Te,Ce=oe/(-lt+Te),mt=Ce*-lt;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(mt),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=We+Ce,S=D+Ce,z=Xe-mt,j=Oe+(oe-mt),$=Ve*D/S*w,Z=ze*D/S*w;X.projectionMatrix.makePerspective(z,j,$,Z,w,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function de(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),M.near=I.near=E.near=X.near,M.far=I.far=E.far=X.far,(P!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,k=M.far,E.near=P,E.far=k,I.near=P,I.far=k,E.updateProjectionMatrix(),I.updateProjectionMatrix(),X.updateProjectionMatrix());const J=X.parent,pe=M.cameras;de(M,J);for(let oe=0;oe<pe.length;oe++)de(pe[oe],J);pe.length===2?H(M,E,I):M.projectionMatrix.copy(E.projectionMatrix),me(X,M,J)};function me(X,J,pe){pe===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=rs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let xe=null;function Ge(X,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let oe=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let De=0;De<pe.length;De++){const We=pe[De];let D=null;if(f!==null)D=f.getViewport(We);else{const ze=u.getViewSubImage(d,We);D=ze.viewport,De===0&&(e.setRenderTargetTextures(v,ze.colorTexture,d.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(v))}let Ve=A[De];Ve===void 0&&(Ve=new Ot,Ve.layers.enable(De),Ve.viewport=new rt,A[De]=Ve),Ve.matrix.fromArray(We.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(We.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(D.x,D.y,D.width,D.height),De===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(Ve)}const Fe=i.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const De=u.getDepthInformation(pe[0]);De&&De.isValid&&De.texture&&_.init(e,De,i.renderState)}}for(let pe=0;pe<x.length;pe++){const oe=y[pe],Fe=x[pe];oe!==null&&Fe!==void 0&&Fe.update(oe,J,l||o)}xe&&xe(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const tt=new qh;tt.setAnimationLoop(Ge),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const di=new Qt,s_=new Re;function r_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,di.copy(y),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(di)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function o_(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function l(v,x){let y=i[v.id];y===void 0&&(g(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(v,C);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function h(v){const x=u();v.__bindingPointIndex=x;const y=r.createBuffer(),C=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,C,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],y=v.uniforms,C=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,E=y.length;b<E;b++){const I=Array.isArray(y[b])?y[b]:[y[b]];for(let A=0,M=I.length;A<M;A++){const P=I[A];if(f(P,b,A,C)===!0){const k=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let q=0;q<B.length;q++){const G=B[q],K=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,k+W,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,x,y,C){const b=v.value,E=x+"_"+y;if(C[E]===void 0)return typeof b=="number"||typeof b=="boolean"?C[E]=b:C[E]=b.clone(),!0;{const I=C[E];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return C[E]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(v){const x=v.uniforms;let y=0;const C=16;for(let E=0,I=x.length;E<I;E++){const A=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,P=A.length;M<P;M++){const k=A[M],B=Array.isArray(k.value)?k.value:[k.value];for(let W=0,q=B.length;W<q;W++){const G=B[W],K=_(G),H=y%C;H!==0&&C-H<K.boundary&&(y+=C-H),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=K.storage}}}const b=y%C;return b>0&&(y+=C-b),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class a_{constructor(e={}){const{canvas:t=Qd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let y=!1,C=0,b=0,E=null,I=-1,A=null;const M=new rt,P=new rt;let k=null;const B=new ue(0);let W=0,q=t.width,G=t.height,K=1,H=null,de=null;const me=new rt(0,0,q,G),xe=new rt(0,0,q,G);let Ge=!1;const tt=new Ga;let X=!1,J=!1;const pe=new Re,oe=new R,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function We(){return E===null?K:1}let D=n;function Ve(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Y,!1),D===null){const U="webgl2";if(D=Ve(U,T),D===null)throw Ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ze,lt,Te,Xe,Oe,Ce,mt,w,S,z,j,$,Z,ye,se,re,Ue,Q,ve,ke,Ee,ae,Ne,He;function ft(){ze=new mg(D),ze.init(),ae=new Z0(D,ze),lt=new lg(D,ze,e,ae),Te=new K0(D),Xe=new xg(D),Oe=new N0,Ce=new $0(D,ze,Te,Oe,lt,ae,Xe),mt=new ug(x),w=new pg(x),S=new bf(D),Ne=new ag(D,S),z=new gg(D,S,Xe,Ne),j=new Mg(D,z,S,Xe),ve=new vg(D,lt,Ce),re=new hg(Oe),$=new U0(x,mt,w,ze,lt,Ne,re),Z=new r_(x,Oe),ye=new O0,se=new V0(ze),Q=new og(x,mt,w,Te,j,d,c),Ue=new j0(x,j,lt),He=new o_(D,Xe,lt,Te),ke=new cg(D,ze,Xe),Ee=new _g(D,ze,Xe),Xe.programs=$.programs,x.capabilities=lt,x.extensions=ze,x.properties=Oe,x.renderLists=ye,x.shadowMap=Ue,x.state=Te,x.info=Xe}ft();const L=new i_(x,D);this.xr=L,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(q,G,!1))},this.getSize=function(T){return T.set(q,G)},this.setSize=function(T,U,F=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,G=U,t.width=Math.floor(T*K),t.height=Math.floor(U*K),F===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(q*K,G*K).floor()},this.setDrawingBufferSize=function(T,U,F){q=T,G=U,K=F,t.width=Math.floor(T*F),t.height=Math.floor(U*F),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,U,F,O){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,U,F,O),Te.viewport(M.copy(me).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,U,F,O){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,U,F,O),Te.scissor(P.copy(xe).multiplyScalar(K).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(T){Te.setScissorTest(Ge=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){de=T},this.getClearColor=function(T){return T.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(T=!0,U=!0,F=!0){let O=0;if(T){let N=!1;if(E!==null){const ee=E.texture.format;N=ee===Dh||ee===Lh||ee===Ih}if(N){const ee=E.texture.type,le=ee===ni||ee===ns||ee===jr||ee===is||ee===Rh||ee===Ch,fe=Q.getClearColor(),ge=Q.getClearAlpha(),Ae=fe.r,be=fe.g,Se=fe.b;le?(f[0]=Ae,f[1]=be,f[2]=Se,f[3]=ge,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=Ae,g[1]=be,g[2]=Se,g[3]=ge,D.clearBufferiv(D.COLOR,0,g))}else O|=D.COLOR_BUFFER_BIT}U&&(O|=D.DEPTH_BUFFER_BIT),F&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),ye.dispose(),se.dispose(),Oe.dispose(),mt.dispose(),w.dispose(),j.dispose(),Ne.dispose(),He.dispose(),$.dispose(),L.dispose(),L.removeEventListener("sessionstart",dn),L.removeEventListener("sessionend",fn),ri.stop()};function ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Xe.autoReset,U=Ue.enabled,F=Ue.autoUpdate,O=Ue.needsUpdate,N=Ue.type;ft(),Xe.autoReset=T,Ue.enabled=U,Ue.autoUpdate=F,Ue.needsUpdate=O,Ue.type=N}function Y(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function te(T){const U=T.target;U.removeEventListener("dispose",te),we(U)}function we(T){Ye(T),Oe.remove(T)}function Ye(T){const U=Oe.get(T).programs;U!==void 0&&(U.forEach(function(F){$.releaseProgram(F)}),T.isShaderMaterial&&$.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,F,O,N,ee){U===null&&(U=Fe);const le=N.isMesh&&N.matrixWorld.determinant()<0,fe=Du(T,U,F,O,N);Te.setMaterial(O,le);let ge=F.index,Ae=1;if(O.wireframe===!0){if(ge=z.getWireframeAttribute(F),ge===void 0)return;Ae=2}const be=F.drawRange,Se=F.attributes.position;let je=be.start*Ae,ht=(be.start+be.count)*Ae;ee!==null&&(je=Math.max(je,ee.start*Ae),ht=Math.min(ht,(ee.start+ee.count)*Ae)),ge!==null?(je=Math.max(je,0),ht=Math.min(ht,ge.count)):Se!=null&&(je=Math.max(je,0),ht=Math.min(ht,Se.count));const ut=ht-je;if(ut<0||ut===1/0)return;Ne.setup(N,O,fe,F,ge);let Ht,Ze=ke;if(ge!==null&&(Ht=S.get(ge),Ze=Ee,Ze.setIndex(Ht)),N.isMesh)O.wireframe===!0?(Te.setLineWidth(O.wireframeLinewidth*We()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(N.isLine){let Me=O.linewidth;Me===void 0&&(Me=1),Te.setLineWidth(Me*We()),N.isLineSegments?Ze.setMode(D.LINES):N.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else N.isPoints?Ze.setMode(D.POINTS):N.isSprite&&Ze.setMode(D.TRIANGLES);if(N.isBatchedMesh)N._multiDrawInstances!==null?Ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances):Ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Ze.renderInstances(je,ut,N.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ut=Math.min(F.instanceCount,Me);Ze.renderInstances(je,ut,Ut)}else Ze.render(je,ut)};function pt(T,U,F){T.transparent===!0&&T.side===mn&&T.forceSinglePass===!1?(T.side=zt,T.needsUpdate=!0,ar(T,U,F),T.side=Fn,T.needsUpdate=!0,ar(T,U,F),T.side=mn):ar(T,U,F)}this.compile=function(T,U,F=null){F===null&&(F=T),m=se.get(F),m.init(U),v.push(m),F.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),T!==F&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const O=new Set;return T.traverse(function(N){const ee=N.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){const fe=ee[le];pt(fe,F,N),O.add(fe)}else pt(ee,F,N),O.add(ee)}),v.pop(),m=null,O},this.compileAsync=function(T,U,F=null){const O=this.compile(T,U,F);return new Promise(N=>{function ee(){if(O.forEach(function(le){Oe.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){N(T);return}setTimeout(ee,10)}ze.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let St=null;function nt(T){St&&St(T)}function dn(){ri.stop()}function fn(){ri.start()}const ri=new qh;ri.setAnimationLoop(nt),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(T){St=T,L.setAnimationLoop(T),T===null?ri.stop():ri.start()},L.addEventListener("sessionstart",dn),L.addEventListener("sessionend",fn),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(U),U=L.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,U,E),m=se.get(T,v.length),m.init(U),v.push(m),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(pe),J=this.localClippingEnabled,X=re.init(this.clippingPlanes,J),_=ye.get(T,p.length),_.init(),p.push(_),L.enabled===!0&&L.isPresenting===!0){const ee=x.xr.getDepthSensingMesh();ee!==null&&fo(ee,U,-1/0,x.sortObjects)}fo(T,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,de),De=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,De&&Q.addToRenderList(_,T),this.info.render.frame++,X===!0&&re.beginShadows();const F=m.state.shadowsArray;Ue.render(F,T,U),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,N=_.transmissive;if(m.setupLights(),U.isArrayCamera){const ee=U.cameras;if(N.length>0)for(let le=0,fe=ee.length;le<fe;le++){const ge=ee[le];rc(O,N,T,ge)}De&&Q.render(T);for(let le=0,fe=ee.length;le<fe;le++){const ge=ee[le];sc(_,T,ge,ge.viewport)}}else N.length>0&&rc(O,N,T,U),De&&Q.render(T),sc(_,T,U);E!==null&&(Ce.updateMultisampleRenderTarget(E),Ce.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,U),Ne.resetDefaultState(),I=-1,A=null,v.pop(),v.length>0?(m=v[v.length-1],X===!0&&re.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function fo(T,U,F,O){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)F=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||tt.intersectsSprite(T)){O&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const le=j.update(T),fe=T.material;fe.visible&&_.push(T,le,fe,F,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||tt.intersectsObject(T))){const le=j.update(T),fe=T.material;if(O&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),oe.copy(T.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),oe.copy(le.boundingSphere.center)),oe.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(fe)){const ge=le.groups;for(let Ae=0,be=ge.length;Ae<be;Ae++){const Se=ge[Ae],je=fe[Se.materialIndex];je&&je.visible&&_.push(T,le,je,F,oe.z,Se)}}else fe.visible&&_.push(T,le,fe,F,oe.z,null)}}const ee=T.children;for(let le=0,fe=ee.length;le<fe;le++)fo(ee[le],U,F,O)}function sc(T,U,F,O){const N=T.opaque,ee=T.transmissive,le=T.transparent;m.setupLightsView(F),X===!0&&re.setGlobalState(x.clippingPlanes,F),O&&Te.viewport(M.copy(O)),N.length>0&&or(N,U,F),ee.length>0&&or(ee,U,F),le.length>0&&or(le,U,F),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function rc(T,U,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new Kt(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Un:ni,minFilter:Pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ee=m.state.transmissionRenderTarget[O.id],le=O.viewport||M;ee.setSize(le.z,le.w);const fe=x.getRenderTarget();x.setRenderTarget(ee),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),De?Q.render(F):x.clear();const ge=x.toneMapping;x.toneMapping=Qn;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),X===!0&&re.setGlobalState(x.clippingPlanes,O),or(T,F,O),Ce.updateMultisampleRenderTarget(ee),Ce.updateRenderTargetMipmap(ee),ze.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Se=0,je=U.length;Se<je;Se++){const ht=U[Se],ut=ht.object,Ht=ht.geometry,Ze=ht.material,Me=ht.group;if(Ze.side===mn&&ut.layers.test(O.layers)){const Ut=Ze.side;Ze.side=zt,Ze.needsUpdate=!0,oc(ut,F,O,Ht,Ze,Me),Ze.side=Ut,Ze.needsUpdate=!0,be=!0}}be===!0&&(Ce.updateMultisampleRenderTarget(ee),Ce.updateRenderTargetMipmap(ee))}x.setRenderTarget(fe),x.setClearColor(B,W),Ae!==void 0&&(O.viewport=Ae),x.toneMapping=ge}function or(T,U,F){const O=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ee=T.length;N<ee;N++){const le=T[N],fe=le.object,ge=le.geometry,Ae=O===null?le.material:O,be=le.group;fe.layers.test(F.layers)&&oc(fe,U,F,ge,Ae,be)}}function oc(T,U,F,O,N,ee){T.onBeforeRender(x,U,F,O,N,ee),T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(x,U,F,O,T,ee),N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=zt,N.needsUpdate=!0,x.renderBufferDirect(F,U,O,N,T,ee),N.side=Fn,N.needsUpdate=!0,x.renderBufferDirect(F,U,O,N,T,ee),N.side=mn):x.renderBufferDirect(F,U,O,N,T,ee),T.onAfterRender(x,U,F,O,N,ee)}function ar(T,U,F){U.isScene!==!0&&(U=Fe);const O=Oe.get(T),N=m.state.lights,ee=m.state.shadowsArray,le=N.state.version,fe=$.getParameters(T,N.state,ee,U,F),ge=$.getProgramCacheKey(fe);let Ae=O.programs;O.environment=T.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(T.isMeshStandardMaterial?w:mt).get(T.envMap||O.environment),O.envMapRotation=O.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",te),Ae=new Map,O.programs=Ae);let be=Ae.get(ge);if(be!==void 0){if(O.currentProgram===be&&O.lightsStateVersion===le)return cc(T,fe),be}else fe.uniforms=$.getUniforms(T),T.onBuild(F,fe,x),T.onBeforeCompile(fe,x),be=$.acquireProgram(fe,ge),Ae.set(ge,be),O.uniforms=fe.uniforms;const Se=O.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Se.clippingPlanes=re.uniform),cc(T,fe),O.needsLights=Nu(T),O.lightsStateVersion=le,O.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=be,O.uniformsList=null,be}function ac(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Wr.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function cc(T,U){const F=Oe.get(T);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function Du(T,U,F,O,N){U.isScene!==!0&&(U=Fe),Ce.resetTextureUnits();const ee=U.fog,le=O.isMeshStandardMaterial?U.environment:null,fe=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Rt,ge=(O.isMeshStandardMaterial?w:mt).get(O.envMap||le),Ae=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,be=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Se=!!F.morphAttributes.position,je=!!F.morphAttributes.normal,ht=!!F.morphAttributes.color;let ut=Qn;O.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ut=x.toneMapping);const Ht=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ze=Ht!==void 0?Ht.length:0,Me=Oe.get(O),Ut=m.state.lights;if(X===!0&&(J===!0||T!==A)){const Xt=T===A&&O.id===I;re.setState(O,T,Xt)}let it=!1;O.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ut.state.version||Me.outputColorSpace!==fe||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==ge||O.fog===!0&&Me.fog!==ee||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==re.numPlanes||Me.numIntersection!==re.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==be||Me.morphTargets!==Se||Me.morphNormals!==je||Me.morphColors!==ht||Me.toneMapping!==ut||Me.morphTargetsCount!==Ze)&&(it=!0):(it=!0,Me.__version=O.version);let yn=Me.currentProgram;it===!0&&(yn=ar(O,U,N));let cr=!1,oi=!1,po=!1;const Tt=yn.getUniforms(),Hn=Me.uniforms;if(Te.useProgram(yn.program)&&(cr=!0,oi=!0,po=!0),O.id!==I&&(I=O.id,oi=!0),cr||A!==T){Tt.setValue(D,"projectionMatrix",T.projectionMatrix),Tt.setValue(D,"viewMatrix",T.matrixWorldInverse);const Xt=Tt.map.cameraPosition;Xt!==void 0&&Xt.setValue(D,oe.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&Tt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Tt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,oi=!0,po=!0)}if(N.isSkinnedMesh){Tt.setOptional(D,N,"bindMatrix"),Tt.setOptional(D,N,"bindMatrixInverse");const Xt=N.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Tt.setValue(D,"boneTexture",Xt.boneTexture,Ce))}N.isBatchedMesh&&(Tt.setOptional(D,N,"batchingTexture"),Tt.setValue(D,"batchingTexture",N._matricesTexture,Ce),Tt.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&Tt.setValue(D,"batchingColorTexture",N._colorsTexture,Ce));const mo=F.morphAttributes;if((mo.position!==void 0||mo.normal!==void 0||mo.color!==void 0)&&ve.update(N,F,yn),(oi||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,Tt.setValue(D,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Hn.envMap.value=ge,Hn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(Hn.envMapIntensity.value=U.environmentIntensity),oi&&(Tt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Uu(Hn,po),ee&&O.fog===!0&&Z.refreshFogUniforms(Hn,ee),Z.refreshMaterialUniforms(Hn,O,K,G,m.state.transmissionRenderTarget[T.id]),Wr.upload(D,ac(Me),Hn,Ce)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Wr.upload(D,ac(Me),Hn,Ce),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Tt.setValue(D,"center",N.center),Tt.setValue(D,"modelViewMatrix",N.modelViewMatrix),Tt.setValue(D,"normalMatrix",N.normalMatrix),Tt.setValue(D,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Xt=O.uniformsGroups;for(let go=0,Fu=Xt.length;go<Fu;go++){const lc=Xt[go];He.update(lc,yn),He.bind(lc,yn)}}return yn}function Uu(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Nu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,U,F){Oe.get(T.texture).__webglTexture=U,Oe.get(T.depthTexture).__webglTexture=F;const O=Oe.get(T);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const F=Oe.get(T);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,F=0){E=T,C=U,b=F;let O=!0,N=null,ee=!1,le=!1;if(T){const ge=Oe.get(T);ge.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(D.FRAMEBUFFER,null),O=!1):ge.__webglFramebuffer===void 0?Ce.setupRenderTarget(T):ge.__hasExternalTextures&&Ce.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);const be=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(be[U])?N=be[U][F]:N=be[U],ee=!0):T.samples>0&&Ce.useMultisampledRTT(T)===!1?N=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(be)?N=be[F]:N=be,M.copy(T.viewport),P.copy(T.scissor),k=T.scissorTest}else M.copy(me).multiplyScalar(K).floor(),P.copy(xe).multiplyScalar(K).floor(),k=Ge;if(Te.bindFramebuffer(D.FRAMEBUFFER,N)&&O&&Te.drawBuffers(T,N),Te.viewport(M),Te.scissor(P),Te.setScissorTest(k),ee){const ge=Oe.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,F)}else if(le){const ge=Oe.get(T.texture),Ae=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.__webglTexture,F||0,Ae)}I=-1},this.readRenderTargetPixels=function(T,U,F,O,N,ee,le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe){Te.bindFramebuffer(D.FRAMEBUFFER,fe);try{const ge=T.texture,Ae=ge.format,be=ge.type;if(!lt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-O&&F>=0&&F<=T.height-N&&D.readPixels(U,F,O,N,ae.convert(Ae),ae.convert(be),ee)}finally{const ge=E!==null?Oe.get(E).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(T,U,F,O,N,ee,le){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&le!==void 0&&(fe=fe[le]),fe){Te.bindFramebuffer(D.FRAMEBUFFER,fe);try{const ge=T.texture,Ae=ge.format,be=ge.type;if(!lt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-O&&F>=0&&F<=T.height-N){const Se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),D.readPixels(U,F,O,N,ae.convert(Ae),ae.convert(be),0),D.flush();const je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await ef(D,je,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee)}finally{D.deleteBuffer(Se),D.deleteSync(je)}return ee}}finally{const ge=E!==null?Oe.get(E).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(T,U=null,F=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const O=Math.pow(2,-F),N=Math.floor(T.image.width*O),ee=Math.floor(T.image.height*O),le=U!==null?U.x:0,fe=U!==null?U.y:0;Ce.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,le,fe,N,ee),Te.unbindTexture()},this.copyTextureToTexture=function(T,U,F=null,O=null,N=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,F=null);let ee,le,fe,ge,Ae,be;F!==null?(ee=F.max.x-F.min.x,le=F.max.y-F.min.y,fe=F.min.x,ge=F.min.y):(ee=T.image.width,le=T.image.height,fe=0,ge=0),O!==null?(Ae=O.x,be=O.y):(Ae=0,be=0);const Se=ae.convert(U.format),je=ae.convert(U.type);Ce.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),ut=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ht=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Me=D.getParameter(D.UNPACK_SKIP_IMAGES),Ut=T.isCompressedTexture?T.mipmaps[N]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ge),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Ae,be,ee,le,Se,je,Ut.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Ae,be,Ut.width,Ut.height,Se,Ut.data):D.texSubImage2D(D.TEXTURE_2D,N,Ae,be,Se,je,Ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Me),N===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,U,F=null,O=null,N=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0);let ee,le,fe,ge,Ae,be,Se,je,ht;const ut=T.isCompressedTexture?T.mipmaps[N]:T.image;F!==null?(ee=F.max.x-F.min.x,le=F.max.y-F.min.y,fe=F.max.z-F.min.z,ge=F.min.x,Ae=F.min.y,be=F.min.z):(ee=ut.width,le=ut.height,fe=ut.depth,ge=0,Ae=0,be=0),O!==null?(Se=O.x,je=O.y,ht=O.z):(Se=0,je=0,ht=0);const Ht=ae.convert(U.format),Ze=ae.convert(U.type);let Me;if(U.isData3DTexture)Ce.setTexture3D(U,0),Me=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ce.setTexture2DArray(U,0),Me=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=D.getParameter(D.UNPACK_ROW_LENGTH),it=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yn=D.getParameter(D.UNPACK_SKIP_PIXELS),cr=D.getParameter(D.UNPACK_SKIP_ROWS),oi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Me,N,Se,je,ht,ee,le,fe,Ht,Ze,ut.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,N,Se,je,ht,ee,le,fe,Ht,ut.data):D.texSubImage3D(Me,N,Se,je,ht,ee,le,fe,Ht,Ze,ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yn),D.pixelStorei(D.UNPACK_SKIP_ROWS,cr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,oi),N===0&&U.generateMipmaps&&D.generateMipmap(Me),Te.unbindTexture()},this.initRenderTarget=function(T){Oe.get(T).__webglFramebuffer===void 0&&Ce.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ce.setTextureCube(T,0):T.isData3DTexture?Ce.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ce.setTexture2DArray(T,0):Ce.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){C=0,b=0,E=null,Te.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ba?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===so?"display-p3":"srgb"}}class Wa{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(e),this.near=t,this.far=n}clone(){return new Wa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class c_ extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ga,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return za("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new R;class Js{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ao extends Zt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zi;const Cs=new R,Hi=new R,Gi=new R,Vi=new he,Ps=new he,eu=new Re,Pr=new R,Is=new R,Ir=new R,Pl=new he,jo=new he,Il=new he;class xa extends ct{constructor(e=new ao){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qh(t,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new Js(n,3,0,!1)),zi.setAttribute("uv",new Js(n,2,3,!1))}this.geometry=zi,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),eu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Gi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Lr(Pr.set(-.5,-.5,0),Gi,o,Hi,i,s),Lr(Is.set(.5,-.5,0),Gi,o,Hi,i,s),Lr(Ir.set(.5,.5,0),Gi,o,Hi,i,s),Pl.set(0,0),jo.set(1,0),Il.set(1,1);let a=e.ray.intersectTriangle(Pr,Is,Ir,!1,Cs);if(a===null&&(Lr(Is.set(-.5,.5,0),Gi,o,Hi,i,s),jo.set(0,1),a=e.ray.intersectTriangle(Pr,Ir,Is,!1,Cs),a===null))return;const c=e.ray.origin.distanceTo(Cs);c<e.near||c>e.far||t.push({distance:c,point:Cs.clone(),uv:on.getInterpolation(Cs,Pr,Is,Ir,Pl,jo,Il,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lr(r,e,t,n,i,s){Vi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ps.x=s*Vi.x-i*Vi.y,Ps.y=i*Vi.x+s*Vi.y):Ps.copy(Vi),r.copy(e),r.x+=Ps.x,r.y+=Ps.y,r.applyMatrix4(eu)}const Ll=new R,Dl=new rt,Ul=new rt,l_=new R,Nl=new Re,Dr=new R,Ko=new xn,Fl=new Re,$o=new nr;class h_ extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fc,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(i),e.ray.intersectsSphere(Ko)!==!1&&(Fl.copy(i).invert(),$o.copy(e.ray).applyMatrix4(Fl),!(this.boundingBox!==null&&$o.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,$o)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Dl.fromBufferAttribute(i.attributes.skinIndex,e),Ul.fromBufferAttribute(i.attributes.skinWeight,e),Ll.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Ul.getComponent(s);if(o!==0){const a=Dl.getComponent(s);Nl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(l_.copy(Ll).applyMatrix4(Nl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tu extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nu extends vt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Bt,h=Bt,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ol=new Re,u_=new Re;class Xa{constructor(e=[],t=[]){this.uuid=hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:u_;Ol.multiplyMatrices(a,t[s]),Ol.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new nu(t,e,e,cn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new tu),this.bones.push(o),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class va extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new Re,Bl=new Re,Ur=[],kl=new un,d_=new Re,Ls=new $e,Ds=new xn;class Xs extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new va(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,d_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),kl.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(kl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Ds.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),e.ray.intersectsSphere(Ds)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Wi),Bl.multiplyMatrices(n,Wi),Ls.matrixWorld=Bl,Ls.raycast(e,Ur);for(let o=0,a=Ur.length;o<a;o++){const c=Ur[o];c.instanceId=s,c.object=this,t.push(c)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new va(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nu(new Float32Array(i*this.count),i,this.count,Ph,_n));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class iu extends Zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eo=new R,to=new R,zl=new Re,Us=new nr,Nr=new xn,Zo=new R,Hl=new R;class qa extends ct{constructor(e=new Ct,t=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)eo.fromBufferAttribute(t,i-1),to.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=eo.distanceTo(to);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=s,e.ray.intersectsSphere(Nr)===!1)return;zl.copy(i).invert(),Us.copy(e.ray).applyMatrix4(zl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),x=Fr(this,e,Us,c,p,v);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Fr(this,e,Us,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Fr(this,e,Us,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Fr(this,e,Us,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fr(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(eo.fromBufferAttribute(o,i),to.fromBufferAttribute(o,s),t.distanceSqToSegment(eo,to,Zo,Hl)>n)return;Zo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Zo);if(!(c<e.near||c>e.far))return{distance:c,point:Hl.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const Gl=new R,Vl=new R;class f_ extends qa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Gl.fromBufferAttribute(t,i),Vl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gl.distanceTo(Vl);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p_ extends qa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class su extends Zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wl=new Re,Ma=new nr,Or=new xn,Br=new R;class m_ extends ct{constructor(e=new Ct,t=new su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=s,e.ray.intersectsSphere(Or)===!1)return;Wl.copy(i).invert(),Ma.copy(e.ray).applyMatrix4(Wl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Br.fromBufferAttribute(u,m),Xl(Br,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Br.fromBufferAttribute(u,g),Xl(Br,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xl(r,e,t,n,i,s,o){const a=Ma.distanceSqToPoint(r);if(a<t){const c=new R;Ma.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class co extends vt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ii extends Ct{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function v(){const y=new R,C=new R;let b=0;const E=(t-e)/n;for(let I=0;I<=s;I++){const A=[],M=I/s,P=M*(t-e)+e;for(let k=0;k<=i;k++){const B=k/i,W=B*c+a,q=Math.sin(W),G=Math.cos(W);C.x=P*q,C.y=-M*n+m,C.z=P*G,u.push(C.x,C.y,C.z),y.set(q,E,G).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-M),A.push(g++)}_.push(A)}for(let I=0;I<i;I++)for(let A=0;A<s;A++){const M=_[A][I],P=_[A+1][I],k=_[A+1][I+1],B=_[A][I+1];h.push(M,P,B),h.push(P,k,B),b+=6}l.addGroup(p,b,0),p+=b}function x(y){const C=g,b=new he,E=new R;let I=0;const A=y===!0?e:t,M=y===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let k=0;k<=i;k++){const W=k/i*c+a,q=Math.cos(W),G=Math.sin(W);E.x=A*G,E.y=m*M,E.z=A*q,u.push(E.x,E.y,E.z),d.push(0,M,0),b.x=q*.5+.5,b.y=G*.5*M+.5,f.push(b.x,b.y),g++}for(let k=0;k<i;k++){const B=C+k,W=P+k;y===!0?h.push(W,W+1,B):h.push(W+1,W,B),I+=3}l.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class cs extends ii{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new cs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ya extends Ct{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new at(s,3)),this.setAttribute("normal",new at(s.slice(),3)),this.setAttribute("uv",new at(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new R,y=new R,C=new R;for(let b=0;b<t.length;b+=3)f(t[b+0],x),f(t[b+1],y),f(t[b+2],C),c(x,y,C,v)}function c(v,x,y,C){const b=C+1,E=[];for(let I=0;I<=b;I++){E[I]=[];const A=v.clone().lerp(y,I/b),M=x.clone().lerp(y,I/b),P=b-I;for(let k=0;k<=P;k++)k===0&&I===b?E[I][k]=A:E[I][k]=A.clone().lerp(M,k/P)}for(let I=0;I<b;I++)for(let A=0;A<2*(b-I)-1;A++){const M=Math.floor(A/2);A%2===0?(d(E[I][M+1]),d(E[I+1][M]),d(E[I][M])):(d(E[I][M+1]),d(E[I+1][M+1]),d(E[I+1][M]))}}function l(v){const x=new R;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const v=new R;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;o.push(y,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],C=o[v+4],b=Math.max(x,y,C),E=Math.min(x,y,C);b>.9&&E<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const v=new R,x=new R,y=new R,C=new R,b=new he,E=new he,I=new he;for(let A=0,M=0;A<s.length;A+=9,M+=6){v.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),y.set(s[A+6],s[A+7],s[A+8]),b.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),C.copy(v).add(x).add(y).divideScalar(3);const P=m(C);_(b,M+0,v,P),_(E,M+2,x,P),_(I,M+4,y,P)}}function _(v,x,y,C){C<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.vertices,e.indices,e.radius,e.details)}}class Bn extends Ya{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bn(e.radius,e.detail)}}class ja extends Ct{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new R,g=new he;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,y=v+n+1,C=v+n+2,b=v+1;a.push(x,y,b),a.push(y,C,b)}}this.setIndex(a),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ka extends Ct{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const b=C/t;u.x=-e*Math.cos(i+b*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+b*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+y,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=h[p][v+1],y=h[p][v],C=h[p+1][v],b=h[p+1][v+1];(p!==0||o>0)&&f.push(x,y,b),(p!==n-1||c<Math.PI)&&f.push(y,C,b)}this.setIndex(f),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $a extends Ct{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class g_ extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ls extends Zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vn extends ls{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hs extends Zt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function kr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function __(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function x_(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ql(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function ru(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ir{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class v_ extends ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qi,endingEnd:qi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yi:s=e,a=2*t-n;break;case Kr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yi:o=e,c=2*n-t;break;case Kr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let C=0;C!==a;++C)s[C]=p*o[h+C]+v*o[l+C]+x*o[c+C]+y*o[u+C];return s}}class ou extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class M_ extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new M_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new v_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&__(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===So,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Ks;class xs extends Mn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=js;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class au extends Mn{}au.prototype.ValueTypeName="color";class us extends Mn{}us.prototype.ValueTypeName="number";class y_ extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)$t.slerpFlat(s,0,o,l-a,o,l,c);return s}}class ds extends Mn{InterpolantFactoryMethodLinear(e){return new y_(this.times,this.values,this.getValueSize(),e)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Mn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=js;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Mn{}fs.prototype.ValueTypeName="vector";class ya{constructor(e="",t=-1,n=[],i=Fa){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(T_(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=x_(c);c=ql(c,1,h),l=ql(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new us(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];ru(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new us(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(fs,f+".position",d,"pos",i),n(ds,f+".quaternion",d,"rot",i),n(fs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function S_(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return us;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return au;case"quaternion":return ds;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function T_(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=S_(r.type);if(r.times===void 0){const t=[],n=[];ru(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Jn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class A_{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const b_=new A_;class Ms{constructor(e){this.manager=e!==void 0?e:b_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const wn={};class E_ extends Error{constructor(e,t){super(e),this.response=t}}class cu extends Ms{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Jn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(wn[e]!==void 0){wn[e].push({onLoad:t,onProgress:n,onError:i});return}wn[e]=[],wn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=wn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:y})=>{if(x)p.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let b=0,E=h.length;b<E;b++){const I=h[b];I.onProgress&&I.onProgress(C)}p.enqueue(y),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new E_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Jn.add(e,l);const h=wn[e];delete wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=wn[e];if(h===void 0)throw this.manager.itemError(e),l;delete wn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class w_ extends Ms{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jn.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=$s("img");function c(){h(),Jn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class R_ extends Ms{constructor(e){super(e)}load(e,t,n,i){const s=new vt,o=new w_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class lo extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class C_ extends lo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Jo=new Re,Yl=new R,jl=new R;class Za{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yl),jl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jl),t.updateMatrixWorld(),Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class P_ extends Za{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class I_ extends lo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new P_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Kl=new Re,Ns=new R,Qo=new R;class L_ extends Za{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ns),Qo.copy(n.position),Qo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qo),n.updateMatrixWorld(),i.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl)}}class D_ extends lo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new L_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class U_ extends Za{constructor(){super(new ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lu extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new U_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class N_ extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Jn.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Jn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Jn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Jn.add(e,c),s.manager.itemStart(e)}}class hu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$l(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$l();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $l(){return(typeof performance>"u"?Date:performance).now()}class F_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){$t.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;$t.multiplyQuaternionsFlat(e,o,e,t,e,n),$t.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Ja="\\[\\]\\.:\\/",O_=new RegExp("["+Ja+"]","g"),Qa="[^"+Ja+"]",B_="[^"+Ja.replace("\\.","")+"]",k_=/((?:WC+[\/:])*)/.source.replace("WC",Qa),z_=/(WCOD+)?/.source.replace("WCOD",B_),H_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qa),G_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qa),V_=new RegExp("^"+k_+z_+H_+G_+"$"),W_=["material","materials","bones","map"];class X_{constructor(e,t,n){const i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O_,"")}static parseTrackName(e){const t=V_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);W_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=X_;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class q_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:qi,endingEnd:qi};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Td,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case bd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Fa:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Ad;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Uh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Yi,i.endingEnd=Yi):(e?i.endingStart=this.zeroSlopeAtStart?Yi:qi:i.endingStart=Kr,t?i.endingEnd=this.zeroSlopeAtEnd?Yi:qi:i.endingEnd=Kr)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const Y_=new Float32Array(1);class j_ extends yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new F_(Ke.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ou(new Float32Array(2),new Float32Array(2),1,Y_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?ya.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Fa),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new q_(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ya.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Zl=new Re;class uu{constructor(e,t,n=0,i=1/0){this.ray=new nr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zl),this}intersectObject(e,t=!0,n=[]){return Sa(e,this,n,t),n.sort(Jl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Sa(e[i],this,n,t);return n.sort(Jl),n}}function Jl(r,e){return r.distance-e.distance}function Sa(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Sa(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);const et=2,ec=96,dt=ec*et,Ql=10,K_=120,Qe=0,Qs=1,$_=[3108832,13777710],an=[{name:"Dark Age",cost:null},{name:"Feudal Age",cost:{food:400,gold:0},time:25},{name:"Castle Age",cost:{food:700,gold:200},time:35},{name:"Imperial Age",cost:{food:1e3,gold:600},time:45}],Ta=[1,1.15,1.32,1.5],Z_=[1,1.15,1.32,1.5],Ln={villager:{name:"Villager",icon:"🧑",age:1,cost:{food:50},trainTime:9,hp:32,atk:3,range:.6,atkSpeed:1.4,speed:5.4,aggro:0,gatherRate:1.25},militia:{name:"Militia",icon:"⚔️",age:1,cost:{food:50,gold:15},trainTime:9,hp:52,atk:7,range:.7,atkSpeed:1.3,speed:4.9,aggro:11},archer:{name:"Archer",icon:"🏹",age:2,cost:{wood:30,gold:35},trainTime:10,hp:36,atk:6,range:11,atkSpeed:1.6,speed:5,aggro:12,projectile:"arrow"},knight:{name:"Knight",icon:"🐎",age:3,cost:{food:70,gold:60},trainTime:13,hp:110,atk:12,range:.9,atkSpeed:1.5,speed:7.2,aggro:12},catapult:{name:"Catapult",icon:"🪓",age:4,cost:{wood:140,gold:80},trainTime:18,hp:85,atk:38,range:13,atkSpeed:4.5,speed:3.4,aggro:13,projectile:"stone",splash:2.6,bonusVsBuilding:2.2,minRange:3}},ps={towncenter:{name:"Town Center",icon:"🏛️",age:1,cost:{wood:300},buildTime:50,hp:1450,size:4,pop:10,dropoff:!0,trains:["villager"],researchesAge:!0,attack:{atk:6,range:12,atkSpeed:1.8,needsGarrison:!1}},house:{name:"House",icon:"🏠",age:1,cost:{wood:30},buildTime:9,hp:280,size:2,pop:5},storehouse:{name:"Storehouse",icon:"📦",age:1,cost:{wood:45},buildTime:10,hp:320,size:2,dropoff:!0},barracks:{name:"Barracks",icon:"⚔️",age:1,cost:{wood:125},buildTime:18,hp:750,size:3,trains:["militia"]},farm:{name:"Farm",icon:"🌾",age:1,cost:{wood:50},buildTime:8,hp:120,size:2,isFarm:!0,farmRate:.85},archeryrange:{name:"Archery Range",icon:"🏹",age:2,cost:{wood:140},buildTime:18,hp:700,size:3,trains:["archer"]},tower:{name:"Watch Tower",icon:"🗼",age:2,cost:{wood:60,gold:50},buildTime:16,hp:620,size:1,attack:{atk:7,range:13,atkSpeed:1.7}},wall:{name:"Palisade Wall",icon:"🚧",age:2,cost:{wood:8},buildTime:4,hp:320,size:1,isWall:!0},stable:{name:"Stable",icon:"🐎",age:3,cost:{wood:160},buildTime:20,hp:800,size:3,trains:["knight"]},siegeworkshop:{name:"Siege Workshop",icon:"🪓",age:4,cost:{wood:190,gold:60},buildTime:22,hp:850,size:3,trains:["catapult"]}},J_=["house","storehouse","farm","barracks","archeryrange","tower","wall","stable","siegeworkshop","towncenter"],Q_={tree:{name:"Tree",res:"wood",amount:110},berry:{name:"Berry Bush",res:"food",amount:160},gold:{name:"Gold Mine",res:"gold",amount:850}},ex={wood:220,food:220,gold:120};function ei(r,e){return e?r.wood>=(e.wood||0)&&r.food>=(e.food||0)&&r.gold>=(e.gold||0):!0}function Aa(r,e){e&&(r.wood-=e.wood||0,r.food-=e.food||0,r.gold-=e.gold||0)}function tx(r,e){e&&(r.wood+=e.wood||0,r.food+=e.food||0,r.gold+=e.gold||0)}function ea(r){let e=r>>>0;const t=()=>(e=e*1664525+1013904223>>>0,e/4294967296),n=64,i=new Float32Array(n*n);for(let o=0;o<i.length;o++)i[o]=t();const s=o=>o*o*(3-2*o);return(o,a)=>{o=(o%n+n)%n,a=(a%n+n)%n;const c=Math.floor(o),l=Math.floor(a),h=(c+1)%n,u=(l+1)%n,d=s(o-c),f=s(a-l),g=i[l*n+c],_=i[l*n+h],m=i[u*n+c],p=i[u*n+h];return g+(_-g)*d+(m-g)*f+(g-_-m+p)*d*f}}const ms=-.55;class nx{constructor(e=Math.random()*1e9|0){this.size=ec,this.seed=e,this.noise=ea(e),this.noise2=ea(e^2654435769),this.moistNoise=ea(e^1374772973),this.walk=new Uint8Array(this.size*this.size),this.occupant=new Array(this.size*this.size).fill(null);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){const i=this.tileHeight(n,t);this.walk[t*this.size+n]=i>ms?1:0}this.version=0}heightAt(e,t){const n=e/26,i=t/26;let s=(this.noise(n,i)-.5)*2.6+(this.noise2(n*2.7,i*2.7)-.5)*1.1;const o=this.noise2(e/60+11,t/60+7);o<.15&&(s-=(.15-o)*12);const a=e-this.size*et/2,c=t-this.size*et/2,l=Math.max(Math.abs(a),Math.abs(c))/(this.size*et/2);return l>.86&&(s+=(l-.86)*9),s}moistureAt(e,t){return this.moistNoise(e/34+3,t/34+9)}tileHeight(e,t){return this.heightAt((e+.5)*et,(t+.5)*et)}inBounds(e,t){return e>=0&&t>=0&&e<this.size&&t<this.size}isWalkable(e,t){return this.inBounds(e,t)?this.walk[t*this.size+e]===1:!1}occupantAt(e,t){return this.inBounds(e,t)?this.occupant[t*this.size+e]:null}worldToGrid(e,t){return[Math.floor(e/et),Math.floor(t/et)]}gridToWorld(e,t){return[(e+.5)*et,(t+.5)*et]}canPlace(e,t,n){for(let i=t;i<t+n;i++)for(let s=e;s<e+n;s++){if(!this.inBounds(s,i))return!1;const o=i*this.size+s;if(this.walk[o]!==1||this.occupant[o])return!1}return!0}occupy(e,t,n,i){for(let s=t;s<t+n;s++)for(let o=e;o<e+n;o++){const a=s*this.size+o;this.walk[a]=0,this.occupant[a]=i}this.version++}release(e,t,n){for(let i=t;i<t+n;i++)for(let s=e;s<e+n;s++){const o=i*this.size+s,a=this.tileHeight(s,i);this.walk[o]=a>ms?1:0,this.occupant[o]=null}this.version++}nearestWalkable(e,t,n=10){if(this.isWalkable(e,t))return[e,t];for(let i=1;i<=n;i++)for(let s=-i;s<=i;s++)for(let o=-i;o<=i;o++)if(Math.max(Math.abs(o),Math.abs(s))===i&&this.isWalkable(e+o,t+s))return[e+o,t+s];return null}}function ix(r,e){const t=[],n=r.size;let s=(r.seed^11259375)>>>0;const o=()=>(s=s*1664525+1013904223>>>0,s/4294967296),a=(h,u,d)=>e.every(f=>Math.hypot(h-f[0],u-f[1])>d),c=(h,u,d)=>!r.inBounds(h,u)||!r.isWalkable(h,u)||r.occupantAt(h,u)?!1:(t.push({type:d,gx:h,gy:u}),r.occupy(h,u,1,{isResourceReservation:!0,type:d}),!0),l=26;for(let h=0;h<l;h++){const u=6+o()*(n-12),d=6+o()*(n-12);if(!a(u,d,11))continue;const f=2.4+o()*3.4;for(let g=Math.floor(d-f);g<=d+f;g++)for(let _=Math.floor(u-f);_<=u+f;_++){const m=Math.hypot(_-u,g-d);m<=f&&o()<.82-m/(f*2.2)&&c(_,g,"tree")}}for(let h=0;h<9;h++){const u=Math.floor(8+o()*(n-16)),d=Math.floor(8+o()*(n-16));if(a(u,d,13))for(let f=0;f<4;f++)c(u+f%2,d+Math.floor(f/2),"gold")}for(let h=0;h<10;h++){const u=Math.floor(8+o()*(n-16)),d=Math.floor(8+o()*(n-16));if(a(u,d,13))for(let f=0;f<5;f++)c(u+Math.floor(o()*3)-1,d+Math.floor(o()*3)-1,"berry")}for(const[h,u]of e){const d=o()*Math.PI*2;for(let x=0;x<26;x++){const y=d+(o()-.5)*1.7,C=9+o()*4;c(Math.round(h+Math.cos(y)*C),Math.round(u+Math.sin(y)*C),"tree")}const f=d+Math.PI*(.6+o()*.5),g=Math.round(h+Math.cos(f)*8),_=Math.round(u+Math.sin(f)*8);for(let x=0;x<6;x++)c(g+Math.floor(o()*3)-1,_+Math.floor(o()*3)-1,"berry");const m=f+Math.PI*(.4+o()*.4),p=Math.round(h+Math.cos(m)*10),v=Math.round(u+Math.sin(m)*10);for(let x=0;x<4;x++)c(p+x%2,v+Math.floor(x/2),"gold")}return t}function sx(r){const e=r.size,t=[[[18,18],[e-22,e-22]],[[e-22,18],[18,e-22]]],n=([o,a])=>{let c=0;for(let l=-4;l<=4;l++)for(let h=-4;h<=4;h++)r.isWalkable(o+h,a+l)||c++;return c};let i=t[0],s=1/0;for(const o of t){const a=n(o[0])+n(o[1]);a<s&&(s=a,i=o)}return i.map(([o,a])=>r.nearestWalkable(o,a,14)||[o,a])}const du={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rx=new ro(-1,1,1,-1,0,1);class ox extends Ct{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const ax=new ox;class tc{constructor(e){this._mesh=new $e(ax,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cx extends ys{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zs.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new tc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class eh extends ys{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class lx extends ys{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cx(du),this.copyPass.material.blending=Dn,this.clock=new hu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}eh!==void 0&&(o instanceof eh?n=!0:o instanceof lx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ux extends ys{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const dx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class gs extends ys{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(s,o,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Kt(s,o,{type:Un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Kt(s,o,{type:Un});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=dx;this.highPassUniforms=Zs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new he(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=du;this.copyUniforms=Zs.clone(h.uniforms),this.blendMaterial=new kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ha,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ue,this.oldClearAlpha=1,this.basic=new ln,this.fsQuad=new tc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new he(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}gs.BlurDirectionX=new he(1,0);gs.BlurDirectionY=new he(0,1);const fx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class px extends ys{constructor(){super();const e=fx;this.uniforms=Zs.clone(e.uniforms),this.material=new g_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new tc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Th?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ah&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function zn(r){const e=document.createElement("canvas");return e.width=e.height=r,[e,e.getContext("2d")]}function Ji(r,e,t=1){let n=t>>>0;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=new Float32Array(e*e);for(let a=0;a<s.length;a++)s[a]=i();const o=a=>a*a*(3-2*a);return(a,c)=>{const l=a/r*e,h=c/r*e,u=Math.floor(l)%e,d=Math.floor(h)%e,f=(u+1)%e,g=(d+1)%e,_=o(l-Math.floor(l)),m=o(h-Math.floor(h)),p=s[d*e+u],v=s[d*e+f],x=s[g*e+u],y=s[g*e+f];return p+(v-p)*_+(x-p)*m+(p-v-x+y)*_*m}}function Ss(r,e){const t=Ji(r,8,e),n=Ji(r,23,e^99),i=Ji(r,53,e^7777);return(s,o)=>t(s,o)*.5+n(s,o)*.33+i(s,o)*.17}function sr(r,e=1){const t=new co(r);return t.wrapS=t.wrapT=On,t.repeat.set(e,e),t.colorSpace=Et,t.anisotropy=4,t}function Ts(r,e=1.4){const t=r.width,n=r.getContext("2d").getImageData(0,0,t,t).data,i=(l,h)=>{l=(l%t+t)%t,h=(h%t+t)%t;const u=(h*t+l)*4;return(n[u]+n[u+1]+n[u+2])/765},[s,o]=zn(t),a=o.createImageData(t,t);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const u=(i(h+1,l)-i(h-1,l))*e,d=(i(h,l+1)-i(h,l-1))*e,f=1/Math.hypot(u,d,1),g=(l*t+h)*4;a.data[g]=(-u*f*.5+.5)*255,a.data[g+1]=(-d*f*.5+.5)*255,a.data[g+2]=(f*.5+.5)*255,a.data[g+3]=255}o.putImageData(a,0,0);const c=new co(s);return c.wrapS=c.wrapT=On,c}function mx(r=256){const[e,t]=zn(r),n=Ss(r,1234),i=Ji(r,96,555),s=t.createImageData(r,r);for(let o=0;o<r;o++)for(let a=0;a<r;a++){let c=.97+(n(a,o)-.5)*.22+(i(a,o)-.5)*.26;c=Math.max(.74,Math.min(1.18,c));const l=(o*r+a)*4;s.data[l]=Math.min(255,c*252),s.data[l+1]=Math.min(255,c*255),s.data[l+2]=Math.min(255,c*246),s.data[l+3]=255}return t.putImageData(s,0,0),{map:sr(e),normalMap:Ts(e,.8)}}function gx(r=128){const[e,t]=zn(r),n=Ss(r,4321),i=t.createImageData(r,r);for(let s=0;s<r;s++)for(let o=0;o<r;o++){const a=Math.sin(s/r*Math.PI*18+n(o,s)*5)*.5+.5,c=Math.sin(o/r*Math.PI*60+s*.45)*.5+.5;let l=.66+a*.26+c*.1+(n(o,s)-.5)*.22;const h=(s*r+o)*4;i.data[h]=Math.min(255,l*255),i.data[h+1]=Math.min(255,l*232),i.data[h+2]=Math.min(255,l*178),i.data[h+3]=255}return t.putImageData(i,0,0),{map:sr(e,2),normalMap:Ts(e,1.6),normalRepeat:2}}function _x(r=128){const[e,t]=zn(r),n=Ss(r,8765),i=t.createImageData(r,r),s=6,o=4;for(let a=0;a<r;a++)for(let c=0;c<r;c++){const l=a/r*s,h=Math.floor(l)%2*.5,u=c/r*o+h,d=l-Math.floor(l),f=u-Math.floor(u),g=d<.09||f<.06?.62:1;let _=(.78+(n(c,a)-.5)*.3)*g;const m=(a*r+c)*4;i.data[m]=_*255,i.data[m+1]=_*252,i.data[m+2]=_*244,i.data[m+3]=255}return t.putImageData(i,0,0),{map:sr(e,2),normalMap:Ts(e,2),normalRepeat:2}}function xx(r=128){const[e,t]=zn(r),n=Ss(r,2468),i=t.createImageData(r,r),s=5;for(let o=0;o<r;o++)for(let a=0;a<r;a++){const c=a/r*s,l=c-Math.floor(c)<.07?.6:1,h=Math.sin(o/r*Math.PI*34+n(a,o)*9)*.5+.5,u=Ji(r,s,33)(a,0)*.2;let d=(.72+h*.14+u+(n(a,o)-.5)*.18)*l;const f=(o*r+a)*4;i.data[f]=Math.min(255,d*255),i.data[f+1]=Math.min(255,d*224),i.data[f+2]=Math.min(255,d*184),i.data[f+3]=255}return t.putImageData(i,0,0),{map:sr(e,1.5),normalMap:Ts(e,1.5),normalRepeat:1.5}}function vx(r=128){const[e,t]=zn(r),n=Ss(r,1357),i=Ji(r,64,777),s=t.createImageData(r,r);for(let o=0;o<r;o++)for(let a=0;a<r;a++){let c=.9+(n(a,o)-.5)*.16-(i(a,o)>.82?.12:0);const l=(o*r+a)*4;s.data[l]=c*255,s.data[l+1]=c*250,s.data[l+2]=c*238,s.data[l+3]=255}return t.putImageData(s,0,0),{map:sr(e),normalMap:Ts(e,.9)}}function Mx(r=128){const[e,t]=zn(r),n=Ss(r,9753),i=t.createImageData(r,r);for(let s=0;s<r;s++)for(let o=0;o<r;o++){const a=.5+Math.sin(n(o,s)*Math.PI*4)*.5,c=(s*r+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=a*255,i.data[c+3]=255}return t.putImageData(i,0,0),Ts(e,1.1)}function yx(){const[r,e]=zn(256),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#5d9bd4"),t.addColorStop(.55,"#9cc6e8"),t.addColorStop(.8,"#d8e8f2"),t.addColorStop(1,"#e8e2cf"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new co(r);return n.colorSpace=Et,n}function Sx(){const[r,e]=zn(64),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.6,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new co(r)}function Tx(r){const e=new a_({canvas:r,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=vh,e.outputColorSpace=Et,e.toneMapping=Na,e.toneMappingExposure=1.22;const t=new c_;t.background=new ue(10406120),t.fog=new Wa(12178660,170,430);const n=new Ot(46,window.innerWidth/window.innerHeight,1,1200),i=new $e(new Ka(520,24,12),new ln({map:yx(),side:zt,fog:!1,depthWrite:!1}));i.position.set(dt/2,-40,dt/2),i.renderOrder=-10,t.add(i);const s=new C_(13624821,9075285,.85);t.add(s);const o=new lu(16773848,2);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-8e-4,o.shadow.normalBias=.04;const a=65;o.shadow.camera.left=-a,o.shadow.camera.right=a,o.shadow.camera.top=a,o.shadow.camera.bottom=-a,o.shadow.camera.near=10,o.shadow.camera.far=260,t.add(o),t.add(o.target);const c=new R(-.55,1,.35).normalize();function l(f){o.target.position.copy(f),o.position.copy(f).addScaledVector(c,110)}l(new R(dt/2,0,dt/2));const h=new Kt(window.innerWidth,window.innerHeight,{samples:4,type:Un}),u=new hx(e,h);u.addPass(new ux(t,n));const d=new gs(new he(window.innerWidth,window.innerHeight),.22,.55,.82);return u.addPass(d),u.addPass(new px),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),u.setSize(window.innerWidth,window.innerHeight)}),{renderer:e,scene:t,camera:n,updateSun:l,composer:u}}const th=new Map;function en(r){let e=th.get(r);return e||(e=new hs({color:r}),th.set(r,e)),e}let ta=null;function Ax(){return ta||(ta={thatch:gx(),stone:_x(),planks:xx(),plaster:vx()}),ta}const nh=new Map;function bx(r,e){const t=r+"|"+e;let n=nh.get(t);if(!n){const i=Ax()[r],s=new ue(e).multiplyScalar(1.28);n=new ls({color:s,map:i.map,normalMap:i.normalMap,normalScale:new he(.85,.85),roughness:.95,metalness:0}),nh.set(t,n)}return n}function Ex(r){switch(r){case ne.thatch:case ne.thatchDark:case ne.wheat:return"thatch";case ne.stone:case ne.stoneDark:return"stone";case ne.plank:case ne.wood:case ne.woodDark:return"planks";case ne.cream:case ne.cloth:case 13482902:case 13218441:case 12888184:case 14272931:return"plaster";default:return null}}function wx(r,e){const t=kn(e??8947848,.62);return r.traverse(n=>{var o,a,c;if(!n.isMesh)return;const i=(c=(a=(o=n.material)==null?void 0:o.color)==null?void 0:a.getHex)==null?void 0:c.call(a);if(i===void 0)return;let s=Ex(i);s===null&&i===t&&(s="planks"),s&&(n.material=bx(s,i))}),r}const ih=new Map;function si(r,e){let t=ih.get(r);return t||(t=e(),ih.set(r,t)),t}function _e(r,e,t,n){const i=new $e(si(`b${r},${e},${t}`,()=>new Si(r,e,t)),en(n));return i.castShadow=!0,i}function _t(r,e,t,n,i=7){const s=new $e(si(`c${r},${e},${t},${i}`,()=>new ii(r,e,t,i)),en(n));return s.castShadow=!0,s}function Nn(r,e,t,n=7){const i=new $e(si(`k${r},${e},${n}`,()=>new cs(r,e,n)),en(t));return i.castShadow=!0,i}function Jt(r,e,t=0){const n=new $e(si(`s${r},${t}`,()=>new Bn(r,t)),en(e));return n.castShadow=!0,n}const ne={skin:14262379,wood:9069114,woodDark:7031336,plank:11041871,thatch:13215836,thatchDark:11571013,stone:10328720,stoneDark:8157810,cream:15260864,cloth:12101768,leaf:4881466,leafDark:3827248,gold:15251747,berry:12729147,metal:12106948,metalDark:7238264,soil:7032627,wheat:14070606};function kn(r,e){const t=new ue(r);return t.multiplyScalar(e),t.getHex()}function nc(r,{torsoColor:e,legColor:t,headgear:n}={}){const i=new Le,s=e??r,o=t??5917240,a={};for(const u of[-1,1]){const d=new Le;d.position.set(u*.16,.82,0);const f=_e(.2,.8,.24,o);f.position.y=-.4,d.add(f),i.add(d),a[u<0?"lLeg":"rLeg"]=d}const c=_e(.62,.72,.4,s);c.position.y=1.18,i.add(c);const l=_e(.64,.1,.42,3812378);l.position.y=.86,i.add(l);const h=Jt(.24,ne.skin,1);h.position.y=1.74,i.add(h),a.head=h,n&&(n.position.y=1.74,i.add(n),a.hat=n);for(const u of[-1,1]){const d=new Le;d.position.set(u*.4,1.46,0);const f=_e(.17,.62,.2,s);f.position.y=-.28,d.add(f);const g=Jt(.09,ne.skin,0);g.position.y=-.6,d.add(g),i.add(d),a[u<0?"lArm":"rArm"]=d}return i.userData.limbs=a,i}function Rx(r){const e=nc(r,{torsoColor:ne.cloth}),t=_e(.66,.16,.44,r);t.position.y=1.32,t.rotation.z=.18,e.add(t);const n=new Le,i=_t(.035,.035,.62,ne.woodDark,5);i.rotation.x=Math.PI/2,n.add(i);const s=_e(.06,.18,.22,ne.metal);return s.position.set(0,.08,.26),n.add(s),n.position.set(0,-.6,.1),e.userData.limbs.rArm.add(n),e.userData.tool=n,e}function Cx(r){const e=Nn(.26,.3,ne.metalDark,7);e.position.y=.16;const t=new Le;t.add(e);const n=nc(r,{torsoColor:r,headgear:t}),i=new Le,s=_e(.06,.7,.1,ne.metal);s.position.y=-.35,s.rotation.x=Math.PI,i.add(s);const o=_e(.2,.05,.12,ne.woodDark);i.add(o),i.position.set(0,-.62,0),i.rotation.x=-Math.PI*.45,n.userData.limbs.rArm.add(i);const a=_t(.3,.3,.07,kn(r,.75),8);a.rotation.z=Math.PI/2,a.position.set(-.14,-.35,.1);const c=Jt(.08,ne.metal,0);return c.position.set(-.2,-.35,.1),n.userData.limbs.lArm.add(a,c),n}function Px(r){const e=Nn(.27,.34,kn(r,.8),7);e.position.y=.12;const t=new Le;t.add(e);const n=nc(r,{torsoColor:7043658,headgear:t}),i=_e(.66,.14,.44,r);i.position.y=1.3,i.rotation.z=-.2,n.add(i);const s=new $e(si("bow",()=>new $a(.42,.035,5,10,Math.PI)),en(ne.woodDark));s.castShadow=!0,s.rotation.y=Math.PI/2,s.rotation.z=Math.PI/2,s.position.set(0,-.55,.05),n.userData.limbs.lArm.add(s);const o=_t(.09,.09,.46,ne.wood,6);return o.position.set(.18,1.3,-.26),o.rotation.x=.3,n.add(o),n}function Ix(r){const e=new Le,t={},n=7229235,i=_e(.62,.62,1.5,n);i.position.y=1,e.add(i);const s=_e(.3,.6,.34,n);s.position.set(0,1.45,.72),s.rotation.x=.45,e.add(s);const o=_e(.26,.28,.52,6111529);o.position.set(0,1.74,.95),e.add(o);let a=0;for(const p of[.55,-.55])for(const v of[-.22,.22]){const x=new Le;x.position.set(v,.78,p);const y=_e(.16,.78,.18,6111529);y.position.y=-.39,x.add(y),e.add(x),t["hLeg"+a++]=x}const c=_e(.12,.5,.14,4008986);c.position.set(0,1.05,-.85),c.rotation.x=-.5,e.add(c);const l=_e(.7,.3,1.2,r);l.position.y=1.22,e.add(l);const h=_e(.42,.56,.34,kn(r,.85));h.position.set(0,1.78,-.1),e.add(h);const u=Jt(.2,ne.skin,1);u.position.set(0,2.2,-.1),e.add(u);const d=Nn(.22,.28,ne.metal,7);d.position.set(0,2.38,-.1),e.add(d);const f=new Le;f.position.set(.3,1.95,-.1);const g=_e(.14,.4,.16,kn(r,.85));g.position.y=-.18,f.add(g);const _=_t(.03,.05,1.7,ne.plank,5);_.rotation.x=Math.PI/2-.12,_.position.set(0,-.3,.5),f.add(_);const m=Nn(.06,.18,ne.metal,5);return m.rotation.x=Math.PI/2,m.position.set(0,-.2,1.36),f.add(m),e.add(f),t.rArm=f,e.userData.limbs=t,e.userData.isMounted=!0,e}function Lx(r){const e=new Le,t=_e(1.1,.26,1.7,ne.wood);t.position.y=.5,e.add(t);for(const h of[.6,-.6])for(const u of[-.62,.62]){const d=_t(.34,.34,.14,ne.woodDark,9);d.rotation.z=Math.PI/2,d.position.set(u,.34,h),e.add(d)}for(const h of[-.4,.4]){const u=_e(.12,.9,.14,ne.woodDark);u.position.set(h,.95,.1),e.add(u)}const n=_t(.06,.06,.92,ne.woodDark,6);n.rotation.z=Math.PI/2,n.position.set(0,1.3,.1),e.add(n);const i=new Le;i.position.set(0,1.3,.1);const s=_e(.14,.14,1.9,ne.plank);s.position.z=-.55,i.add(s);const o=_t(.22,.16,.18,ne.woodDark,7);o.position.set(0,.06,-1.45),i.add(o);const a=_e(.4,.4,.3,ne.stoneDark);a.position.z=.5,i.add(a),i.rotation.x=-.5,e.add(i);const c=_t(.025,.025,.7,ne.woodDark,4);c.position.set(.5,1.1,-.75),e.add(c);const l=_e(.3,.18,.02,r);return l.position.set(.65,1.32,-.75),e.add(l),e.userData.limbs={throwArm:i},e.userData.isMachine=!0,e}const Dx={villager:Rx,militia:Cx,archer:Px,knight:Ix,catapult:Lx};function Ux(r,e=4){return As(r,e)}function As(r,e=4){const t=new Le,n=_t(.05,.05,e,ne.woodDark,5);n.position.y=e/2,t.add(n);const i=_e(.9,.55,.04,r);return i.position.set(.48,e-.35,0),t.add(i),t}function Nx(r){const e=new Le,t=7.2,n=_e(t+.6,.5,t+.6,ne.stone);n.position.y=.25,e.add(n);const i=_e(t-1.2,2.6,t-1.2,ne.cream);i.position.y=1.8,e.add(i);for(const u of[-6/2,(t-1.2)/2])for(const d of[-6/2,(t-1.2)/2]){const f=_e(.34,2.6,.34,ne.woodDark);f.position.set(u,1.8,d),e.add(f)}const s=_e(t-2.6,1.5,t-2.6,14272931);s.position.y=3.85,e.add(s);const o=Nn((t-1.4)*.78,2.4,ne.thatch,4);o.position.y=5.7,o.rotation.y=Math.PI/4,e.add(o);const a=Nn(.5,.8,r,4);a.position.y=7.1,a.rotation.y=Math.PI/4,e.add(a);const c=Nn(t*.74,1.1,ne.thatchDark,4);c.position.y=3.55,c.rotation.y=Math.PI/4,e.add(c);const l=_e(1.3,1.6,.2,ne.woodDark);l.position.set(0,1.05,(t-1.2)/2+.05),e.add(l);const h=As(r,5.2);return h.position.set(t/2-.5,.5,t/2-.5),e.add(h),e}function Fx(r){const e=new Le,t=_e(3.2,1.7,2.8,ne.cream);t.position.y=.95,e.add(t);const n=new $e(si("gable3.8",()=>{const c=new ii(1.55,1.55,3.8,3,1);return c.rotateZ(Math.PI/2),c.rotateX(Math.PI/6+Math.PI/2),c}),en(ne.thatch));n.castShadow=!0,n.scale.set(1,.72,1.05),n.position.y=2.1,e.add(n);const i=_e(.7,1.1,.15,ne.woodDark);i.position.set(.5,.65,1.45),e.add(i);const s=_e(.5,.45,.12,4863264);s.position.set(-.8,1.2,1.45),e.add(s);const o=_e(.4,1,.4,ne.stoneDark);o.position.set(-1.1,2.5,0),e.add(o);const a=_e(3.3,.16,2.9,r);return a.position.y=1.75,e.add(a),e}function Ox(r){const e=new Le,t=_e(3,1.6,3,ne.plank);t.position.y=.9,e.add(t);const n=_e(3.5,.25,3.5,ne.woodDark);n.position.y=1.85,e.add(n);const i=_e(2.2,.25,2.2,ne.wood);i.position.y=2.35,e.add(i);const s=_e(.7,.7,.7,ne.wood);s.position.set(1.7,.45,1),e.add(s);const o=_e(.55,.55,.55,ne.plank);o.position.set(1.85,.35,.1),e.add(o);const a=Jt(.4,ne.cloth,1);a.scale.y=.75,a.position.set(-1.7,.3,1.2),e.add(a);const c=_e(3.1,.14,3.1,r);return c.position.y=1.62,e.add(c),e}function Bx(r){const e=new Le,t=_e(5,2.2,4.4,13482902);t.position.y=1.25,e.add(t);const n=new $e(si("gable5.6",()=>{const o=new ii(2.3,2.3,5.6,3,1);return o.rotateZ(Math.PI/2),o.rotateX(Math.PI/6+Math.PI/2),o}),en(kn(r,.62)));n.castShadow=!0,n.scale.set(1,.6,.95),n.position.y=2.95,e.add(n);const i=_e(1.5,1.7,.2,ne.woodDark);i.position.set(0,.95,2.25),e.add(i);for(const o of[-1.6,1.6]){const a=_t(.42,.42,.1,r,8);a.rotation.x=Math.PI/2,a.position.set(o,1.6,2.26),e.add(a)}const s=As(r,4);return s.position.set(2.2,0,-1.8),e.add(s),e}function kx(){const r=new Le,e=_e(3.8,.18,3.8,ne.soil);e.position.y=.09,e.receiveShadow=!0,r.add(e);for(let t=0;t<4;t++){const n=_e(.5,.3,3.4,ne.wheat);n.position.set(-1.35+t*.9,.3,0),r.add(n)}for(const[t,n]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){const i=_t(.07,.07,.7,ne.woodDark,5);i.position.set(t,.35,n),r.add(i)}return r}function zx(r){const e=new Le,t=_e(4.2,1.9,3.2,13218441);t.position.set(-.5,1.05,-.8),e.add(t);const n=_e(4.8,.25,3.8,kn(r,.62));n.position.set(-.5,2.15,-.8),n.rotation.z=.07,e.add(n);const i=_t(.6,.6,.18,15261900,10);i.rotation.x=Math.PI/2,i.position.set(1.9,1,1.6),e.add(i);const s=_t(.36,.36,.2,13777710,10);s.rotation.x=Math.PI/2,s.position.set(1.9,1,1.6),e.add(s);const o=_t(.14,.14,.22,15251747,8);o.rotation.x=Math.PI/2,o.position.set(1.9,1,1.6),e.add(o);const a=_e(.15,1,.6,ne.woodDark);a.position.set(1.9,.5,1.6),e.add(a);const c=As(r,3.6);return c.position.set(-2.4,0,1.2),e.add(c),e}function Hx(r){const e=new Le,t=_t(1,1.25,4.6,ne.stone,7);t.position.y=2.3,e.add(t);for(let s=0;s<7;s++){const o=s/7*Math.PI*2,a=_e(.34,.4,.34,ne.stoneDark);a.position.set(Math.cos(o)*.95,4.85,Math.sin(o)*.95),e.add(a)}const n=Nn(1.15,1.1,kn(r,.62),7);n.position.y=5.6,e.add(n);const i=_e(.3,.5,.3,2760728);return i.position.set(0,3.6,1.05),e.add(i),e}function Gx(){const r=new Le;for(let t=-2;t<=2;t++){const n=2.2+t*7919%5*.08,i=_t(.17,.2,n,t%2?ne.wood:ne.woodDark,6);i.position.set(t*.38,n/2,0),r.add(i);const s=Nn(.17,.3,ne.woodDark,6);s.position.set(t*.38,n+.15,0),r.add(s)}const e=_e(1.9,.18,.12,ne.plank);return e.position.set(0,1.2,.2),r.add(e),r}function Vx(r){const e=new Le,t=_e(5.2,2,3.6,12888184);t.position.set(0,1.1,-.6),e.add(t);const n=new $e(si("gable5.8",()=>{const a=new ii(2.1,2.1,5.8,3,1);return a.rotateZ(Math.PI/2),a.rotateX(Math.PI/6+Math.PI/2),a}),en(kn(r,.62)));n.castShadow=!0,n.scale.set(1,.62,1),n.position.set(0,2.65,-.6),e.add(n);for(const[a,c]of[[-2.3,1.8],[-.8,2.2],[.8,2.2],[2.3,1.8]]){const l=_t(.07,.07,.8,ne.woodDark,5);l.position.set(a,.4,c),e.add(l)}const i=_e(4.6,.1,.1,ne.plank);i.position.set(0,.62,2),e.add(i);const s=Jt(.55,ne.wheat,1);s.scale.y=.6,s.position.set(1.9,.3,1.3),e.add(s);const o=As(r,3.8);return o.position.set(-2.4,0,-2),e.add(o),e}function Wx(r){const e=new Le,t=_e(5,2.3,4.2,ne.plank);t.position.set(-.3,1.25,0),e.add(t);const n=_e(5.8,.28,5,ne.woodDark);n.position.set(-.3,2.55,0),n.rotation.x=.06,e.add(n);const i=_e(2.2,1.9,.2,4863264);i.position.set(-.3,1,2.15),e.add(i);const s=_t(.5,.5,.14,ne.woodDark,9);s.rotation.x=Math.PI/2,s.rotation.z=.4,s.position.set(2.6,.52,1),e.add(s);const o=_e(.2,.2,2.4,ne.wood);o.position.set(2.5,.2,-.6),o.rotation.y=.5,e.add(o);const a=As(r,4);return a.position.set(-2.6,0,-1.8),e.add(a),e}const Xx={towncenter:Nx,house:Fx,storehouse:Ox,barracks:Bx,farm:()=>kx(),archeryrange:zx,tower:Hx,wall:()=>Gx(),stable:Vx,siegeworkshop:Wx},fu=Object.fromEntries(Object.entries(Xx).map(([r,e])=>[r,t=>wx(e(t),t)]));function qx(){const r=new Le,e=Jt(.85,ne.leafDark,1);e.scale.y=.7,e.position.y=.5,r.add(e);const t=Jt(.55,ne.leaf,1);t.position.set(.45,.55,.3),r.add(t);for(let n=0;n<7;n++){const i=n/7*Math.PI*2,s=Jt(.09,ne.berry,0);s.position.set(Math.cos(i)*.66,.55+Math.sin(n*2.4)*.25,Math.sin(i)*.62),r.add(s)}return r}function Yx(){const r=new Le,e=Jt(.95,ne.stoneDark,0);e.scale.set(1.1,.75,1),e.position.y=.45,e.rotation.y=.6,r.add(e);const t=Jt(.6,ne.stone,0);t.position.set(.55,.35,-.4),r.add(t);for(const[n,i,s,o]of[[.3,.85,.3,.22],[-.5,.6,.4,.18],[0,.45,.8,.16],[-.3,.95,-.3,.15]]){const a=Jt(o,ne.gold,0);a.position.set(n,i,s),r.add(a)}return r}function jx(){const r=_t(.22,.3,.4,ne.woodDark,6);return r.position.y=.2,r}function Kx(r){const e=new Le,t=r*2-.6;for(const[o,a]of[[-t/2,-t/2],[t/2,-t/2],[-t/2,t/2],[t/2,t/2]]){const c=_t(.08,.08,2.4,ne.plank,5);c.position.set(o,1.2,a),e.add(c)}const n=_e(t,.1,.3,ne.plank);n.position.set(0,1.7,-t/2),e.add(n);const i=_e(.3,.1,t,ne.plank);i.position.set(t/2,2,0),e.add(i);const s=_e(.9,.4,.6,ne.wood);return s.position.set(.2,.2,.1),e.add(s),e}function $x(r,e){const t=ec,n=new as(dt,dt,t,t);n.rotateX(-Math.PI/2);const i=n.attributes.position,s=new Float32Array(i.count*3),o=new ue(6400073),a=new ue(8174937),c=new ue(10267480),l=new ue(9072456),h=new ue(13481847),u=new ue(9276032),d=new ue;for(let p=0;p<i.count;p++){const v=i.getX(p)+dt/2,x=i.getZ(p)+dt/2,y=e.heightAt(v,x);i.setX(p,v),i.setZ(p,x),i.setY(p,y);const C=e.moistureAt(v,x),b=(e.noise2(v*.9,x*.9)-.5)*.1;y<ms+.35?d.copy(h):y>2.6?d.copy(u).lerp(c,Math.max(0,3.8-y)/1.2):(d.copy(o).lerp(a,C),C<.22&&d.lerp(c,(.22-C)*2),C>.85&&d.lerp(l,(C-.85)*1.2)),d.offsetHSL(0,0,b),s[p*3]=d.r,s[p*3+1]=d.g,s[p*3+2]=d.b}n.setAttribute("color",new Dt(s,3)),n.computeVertexNormals();const f=mx();f.map.repeat.set(72,72),f.normalMap.wrapS=f.normalMap.wrapT=On,f.normalMap.repeat.set(72,72);const g=new $e(n,new ls({vertexColors:!0,map:f.map,normalMap:f.normalMap,normalScale:new he(.6,.6),roughness:1,metalness:0}));g.receiveShadow=!0,g.name="terrain",r.add(g);const _=Mx();_.repeat.set(34,34);const m=new $e(new as(dt,dt),new ls({color:3504061,transparent:!0,opacity:.78,roughness:.18,metalness:.05,normalMap:_,normalScale:new he(.55,.55)}));return m.rotation.x=-Math.PI/2,m.position.set(dt/2,ms-.12,dt/2),r.add(m),Zx(r,e),{ground:g,water:m,waterNormalTex:_}}function Zx(r,e){let t=(e.seed^1592651789)>>>0;const n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),i=(s,o,a,c,l,h)=>{const u=o(),d=new Xs(u,en(a),s);d.castShadow=!0;const f=new Re,g=new $t,_=new Qt;let m=0,p=0;for(;m<s&&p++<s*12;){const v=n()*dt,x=n()*dt,[y,C]=e.worldToGrid(v,x);if(!e.isWalkable(y,C)||e.occupantAt(y,C))continue;const b=e.heightAt(v,x),E=l+n()*(h-l);_.set(0,n()*Math.PI*2,0),g.setFromEuler(_),f.compose(new R(v,b+c*E,x),g,new R(E,E,E)),d.setMatrixAt(m++,f)}d.count=m,d.instanceMatrix.needsUpdate=!0,r.add(d)};i(180,()=>new Bn(.5,0),9276032,.18,.3,1.1),i(220,()=>new Bn(.45,0),5603391,.3,.5,1),i(260,()=>new cs(.1,.35,5),14210126,.16,.7,1.3),i(140,()=>new cs(.12,.4,5),12872330,.18,.7,1.2)}class Jx{constructor(e,t=900){this.capacity=t;const n=new ii(.16,.26,1.4,6);n.translate(0,.7,0),this.trunks=new Xs(n,en(ne.woodDark),t);const i=new cs(1.05,2.9,7);i.translate(0,2.6,0),this.pines=new Xs(i,new hs({color:16777215}),t);const s=new Bn(1.25,0);s.scale(1,1.15,1),s.translate(0,2.5,0),this.oaks=new Xs(s,new hs({color:16777215}),t);for(const o of[this.trunks,this.pines,this.oaks])o.castShadow=!0,o.count=t,o.frustumCulled=!1,e.add(o);this.zero=new Re().makeScale(0,0,0);for(let o=0;o<t;o++)this.trunks.setMatrixAt(o,this.zero),this.pines.setMatrixAt(o,this.zero),this.oaks.setMatrixAt(o,this.zero);this.next=0,this.tmpM=new Re,this.tmpC=new ue}add(e,t,n,i){const s=this.next++;if(s>=this.capacity)return null;const o=i<.55?"pine":"oak",a=.8+i*7919%1*.5,c=i*31.4;this.tmpM.makeRotationY(c),this.tmpM.scale(new R(a,a*(.9+i*131%1*.35),a)),this.tmpM.setPosition(e,t,n),this.trunks.setMatrixAt(s,this.tmpM);const l=o==="pine"?this.pines:this.oaks;l.setMatrixAt(s,this.tmpM);const h=.8+i*53%1*.45;return this.tmpC.setHex(o==="pine"?3829824:5607486).multiplyScalar(h),l.setColorAt(s,this.tmpC),{idx:s,species:o}}remove(e){e&&(this.trunks.setMatrixAt(e.idx,this.zero),(e.species==="pine"?this.pines:this.oaks).setMatrixAt(e.idx,this.zero),this.flush())}flush(){this.trunks.instanceMatrix.needsUpdate=!0,this.pines.instanceMatrix.needsUpdate=!0,this.oaks.instanceMatrix.needsUpdate=!0,this.pines.instanceColor&&(this.pines.instanceColor.needsUpdate=!0),this.oaks.instanceColor&&(this.oaks.instanceColor.needsUpdate=!0)}}const pu=new ja(.75,.95,24);pu.rotateX(-Math.PI/2);const Qx=new ln({color:5111646,transparent:!0,opacity:.85,depthWrite:!1}),ev=new ln({color:16731450,transparent:!0,opacity:.85,depthWrite:!1});function mu(r,e=!0){const t=new $e(pu,e?Qx:ev);return t.scale.setScalar(r),t.renderOrder=2,t}const tv=new ao({color:2363408,depthTest:!1});class gu{constructor(e,t=1.5,n=2.4){this.group=new Le,this.width=t,this.bg=new xa(tv),this.bg.scale.set(t,.16,1),this.fg=new xa(new ao({color:4641845,depthTest:!1})),this.fg.center.set(0,.5),this.fg.position.x=-t/2,this.fg.scale.set(t,.12,1),this.group.add(this.bg,this.fg),this.group.position.y=n,this.group.renderOrder=5,this.group.visible=!1,e.add(this.group)}set(e,t){if(this.group.visible=t,!t)return;const n=Math.max(.001,Math.min(1,e));this.fg.scale.x=this.width*n,this.fg.material.color.setHex(n>.55?4641845:n>.25?15253536:13907232)}dispose(){this.fg.material.dispose()}}const nv=new Si(.05,.05,.85),iv=new Bn(.3,0),sv=new Bn(.22,0);class rv{constructor(e,t){this.scene=e,this.game=t,this.projectiles=[],this.particles=[],this.fades=[],this.smokes=[],this.smokeTex=Sx()}spawnSmoke(e,t,n,i=!1,s=1){const o=new xa(new ao({map:this.smokeTex,color:i?3025446:14211288,transparent:!0,opacity:i?.5:.32,depthWrite:!1}));o.position.set(e+(Math.random()-.5)*.4,t,n+(Math.random()-.5)*.4),o.scale.setScalar(.6*s),this.scene.add(o),this.smokes.push({m:o,t:0,life:2+Math.random()*1.2,rise:1+Math.random()*.6,drift:(Math.random()-.5)*.5,grow:(1.1+Math.random()*.7)*s,o0:o.material.opacity})}updateBuildingSmoke(e){for(const t of this.game.buildings){if(t.dead||!t.complete||(t.smokeT=(t.smokeT??Math.random())-e,t.smokeT>0))continue;if(t.hp<t.maxHp*.55){t.smokeT=t.hp<t.maxHp*.3?.22:.45;const i=t.size;this.spawnSmoke(t.cx+(Math.random()-.5)*i,t.groundY+t.size+.5,t.cz+(Math.random()-.5)*i,!0,1.4)}else t.type==="house"?(t.smokeT=.8+Math.random()*.5,this.spawnSmoke(t.cx-1.1,t.groundY+3.2,t.cz,!1,.8)):t.type==="towncenter"?(t.smokeT=1.1+Math.random()*.6,this.spawnSmoke(t.cx+t.size-.5,t.groundY+2.2,t.cz+t.size-.5,!1,.9)):t.smokeT=2}}fireArrow(e,t,n,i){const s=new $e(nv,en(5914920));s.position.copy(e),this.scene.add(s),this.projectiles.push({kind:"arrow",mesh:s,target:t,damage:n,attacker:i,speed:26})}fireStone(e,t,n,i,s){const o=new $e(iv,en(7236192));o.position.copy(e),this.scene.add(o);const a=e.distanceTo(t);this.projectiles.push({kind:"stone",mesh:o,from:e.clone(),to:t.clone(),t:0,dur:Math.max(.7,a/16),arc:4+a*.22,damage:n,splash:i,attacker:s})}puff(e,t=13290186,n=6,i=4){for(let s=0;s<n;s++){const o=new $e(sv,new hs({color:t,transparent:!0,opacity:.9}));o.position.copy(e);const a=new R((Math.random()-.5)*i,Math.random()*i*.8+1,(Math.random()-.5)*i);this.scene.add(o),this.particles.push({mesh:o,vel:a,life:.6+Math.random()*.4,t:0})}}blood(e){this.puff(e,9051922,4,3)}fadeOut(e,t=1.6,n=1.2,i=null){this.fades.push({obj:e,t:0,dur:t,sink:n,y0:e.position.y,mixer:i})}update(e){const t=this.game;this.updateBuildingSmoke(e);for(let n=this.smokes.length-1;n>=0;n--){const i=this.smokes[n];if(i.t+=e,i.t>=i.life){this.scene.remove(i.m),i.m.material.dispose(),this.smokes.splice(n,1);continue}const s=i.t/i.life;i.m.position.y+=i.rise*e,i.m.position.x+=i.drift*e,i.m.scale.setScalar(.6+i.grow*s),i.m.material.opacity=i.o0*(1-s*s)}for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];if(i.kind==="arrow"){const s=i.target;if(!s||s.dead){this.scene.remove(i.mesh),this.projectiles.splice(n,1);continue}const o=s.pos3();o.y+=s.isBuilding?1.6:1.1;const a=o.clone().sub(i.mesh.position),c=a.length(),l=i.speed*e;c<=l+.2?(t.applyDamage(s,i.damage,i.attacker),this.blood(o),this.scene.remove(i.mesh),this.projectiles.splice(n,1)):(a.normalize(),i.mesh.position.addScaledVector(a,l),i.mesh.lookAt(o))}else{i.t+=e;const s=Math.min(1,i.t/i.dur);i.mesh.position.lerpVectors(i.from,i.to,s),i.mesh.position.y+=Math.sin(s*Math.PI)*i.arc,i.mesh.rotation.x+=e*6,s>=1&&(t.splashDamage(i.to,i.splash,i.damage,i.attacker),this.puff(i.to,10127984,10,6),this.scene.remove(i.mesh),this.projectiles.splice(n,1))}}for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.t+=e,i.t>=i.life){this.scene.remove(i.mesh),i.mesh.material.dispose(),this.particles.splice(n,1);continue}i.vel.y-=9*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.material.opacity=.9*(1-i.t/i.life);const s=1+i.t*1.5;i.mesh.scale.setScalar(s)}for(let n=this.fades.length-1;n>=0;n--){const i=this.fades[n];i.t+=e,i.mixer&&i.mixer.update(e);const s=i.t/i.dur;if(s>=1){this.scene.remove(i.obj),this.fades.splice(n,1);continue}i.obj.position.y=i.y0-i.sink*s,i.obj.traverse(o=>{o.castShadow!==void 0&&(o.castShadow=!1)})}}}class ov{constructor(){this.a=[]}get size(){return this.a.length}push(e){const t=this.a;t.push(e);let n=t.length-1;for(;n>0;){const i=n-1>>1;if(t[i].f<=t[n].f)break;[t[i],t[n]]=[t[n],t[i]],n=i}}pop(){const e=this.a,t=e[0],n=e.pop();if(e.length){e[0]=n;let i=0;for(;;){const s=i*2+1,o=s+1;let a=i;if(s<e.length&&e[s].f<e[a].f&&(a=s),o<e.length&&e[o].f<e[a].f&&(a=o),a===i)break;[e[a],e[i]]=[e[i],e[a]],i=a}}return t}}const av=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.4142],[1,-1,1.4142],[-1,1,1.4142],[-1,-1,1.4142]];function cv(r,e,t,n,i,s=9e3){const o=r.size;if(!r.inBounds(e,t))return null;if(!r.isWalkable(e,t)){const x=r.nearestWalkable(e,t,4);if(!x)return null;[e,t]=x}let a=!1;if(!r.isWalkable(n,i)){a=!0;const x=r.nearestWalkable(n,i,12);if(!x)return null;[n,i]=x}if(e===n&&t===i)return[];const c=new Float32Array(o*o).fill(1/0),l=new Int32Array(o*o).fill(-1),h=new Uint8Array(o*o),u=new ov,d=(x,y)=>{const C=Math.abs(x-n),b=Math.abs(y-i);return Math.max(C,b)+.4142*Math.min(C,b)},f=t*o+e;c[f]=0,u.push({i:f,x:e,y:t,f:d(e,t)});let g=f,_=d(e,t),m=0;for(;u.size&&m++<s;){const x=u.pop();if(h[x.i])continue;h[x.i]=1;const y=d(x.x,x.y);if(y<_&&(_=y,g=x.i),x.x===n&&x.y===i){g=x.i;break}for(const[C,b,E]of av){const I=x.x+C,A=x.y+b;if(I<0||A<0||I>=o||A>=o)continue;const M=A*o+I;if(h[M]||r.walk[M]!==1||C!==0&&b!==0&&(r.walk[x.y*o+I]!==1||r.walk[A*o+x.x]!==1))continue;const P=c[x.i]+E;P<c[M]&&(c[M]=P,l[M]=x.i,u.push({i:M,x:I,y:A,f:P+d(I,A)}))}}const p=[];let v=g;if(v===f&&!(a||_<d(e,t)))return null;for(;v!==f&&v>=0;)p.push([v%o,v/o|0]),v=l[v];return p.reverse(),hv(r,e,t,p)}function lv(r,e,t,n,i){let s=Math.abs(n-e),o=Math.abs(i-t);const a=e<n?1:-1,c=t<i?1:-1;let l=s-o,h=e,u=t;for(;;){if(!r.isWalkable(h,u))return!1;if(h===n&&u===i)return!0;const d=2*l;if(d>-o){if(d<s&&!(r.isWalkable(h+a,u)&&r.isWalkable(h,u+c)))return!1;l-=o,h+=a}d<s&&(l+=s,u+=c)}}function hv(r,e,t,n){if(n.length<3)return n;const i=[];let s=e,o=t,a=0;for(;a<n.length;){let c=a;for(let l=n.length-1;l>a;l--)if(!(l-a>40)&&lv(r,s,o,n[l][0],n[l][1])){c=l;break}i.push(n[c]),[s,o]=n[c],a=c+1}return i}function sh(r,e){if(e===Ed)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===ma||e===Nh){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===ma)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class _u extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mv(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new xv(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Cv(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=qs.extractUrlBase(e);o=qs.resolveURL(l,this.path)}else o=qs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new cu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===xu){try{o[Be.KHR_BINARY_GLTF]=new Pv(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Be.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Vv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Be.KHR_MATERIALS_UNLIT:o[u]=new fv;break;case Be.KHR_DRACO_MESH_COMPRESSION:o[u]=new Iv(s,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:o[u]=new Lv;break;case Be.KHR_MESH_QUANTIZATION:o[u]=new Dv;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function uv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dv{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Rt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new lu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new D_(h),l.distance=u;break;case"spot":l=new I_(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Cn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class fv{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return ln}extendParams(e,t,n){const i=[];e.color=new ue(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Rt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Et))}return Promise.all(i)}}class pv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class mv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(a,a)}return Promise.all(s)}}class gv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class _v{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class xv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Rt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class vv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Mv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ue().setRGB(a[0],a[1],a[2],Rt),Promise.all(s)}}class yv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Sv{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ue().setRGB(a[0],a[1],a[2],Rt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(s)}}class Tv{constructor(e){this.parser=e,this.name=Be.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Av{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class bv{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Ev{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wv{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Rv{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Cv{constructor(e){this.name=Be.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Yt.TRIANGLES&&l.mode!==Yt.TRIANGLE_STRIP&&l.mode!==Yt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Re,m=new R,p=new $t,v=new R(1,1,1),x=new Xs(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),x.setMatrixAt(y,_.compose(m,p,v));for(const y in c)if(y==="_COLOR_0"){const C=c[y];x.instanceColor=new va(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);ct.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const xu="glTF",Fs=12,rh={JSON:1313821514,BIN:5130562};class Pv{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Fs,s=new DataView(e,Fs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===rh.JSON){const l=new Uint8Array(e,Fs+o,a);this.content=n.decode(l)}else if(c===rh.BIN){const l=Fs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Iv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=ba[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=ba[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Qi[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,Rt,d)})})}}class Lv{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Dv{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class vu extends ir{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+u;for(let y=0;y!==a;y++){const C=o[_+y+a],b=o[_+y+c]*h,E=o[g+y+a],I=o[g+y]*h;s[y]=v*C+x*b+m*E+p*I}return s}}const Uv=new $t;class Nv extends vu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Uv.fromArray(s).normalize().toArray(s),s}}const Yt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},oh={9728:Bt,9729:Wt,9984:Eh,9985:Gr,9986:ks,9987:Pn},ah={33071:Zn,33648:Yr,10497:On},na={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ba={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fv={CUBICSPLINE:void 0,LINEAR:Ks,STEP:js},ia={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ov(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ls({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),r.DefaultMaterial}function fi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Cn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Bv(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function kv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zv(r){let e;const t=r.extensions&&r.extensions[Be.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sa(t.attributes):e=r.indices+":"+sa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+sa(r.targets[n]);return e}function sa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ea(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Gv=new Re;class Vv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new R_(this.options.manager):this.textureLoader=new N_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fi(s,a,i),Cn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(qs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=na[i.type],a=Qi[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Dt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=na[i.type],l=Qi[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new l(a,p*f,i.count*f/h),x=new Qh(_,f/h),t.cache.add(v,x)),m=new Js(x,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Dt(_,c,g);if(i.sparse!==void 0){const p=na.SCALAR,v=Qi[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,C=new v(o[1],x,i.sparse.count*p),b=new l(o[2],y,i.sparse.count*c);a!==null&&(m=new Dt(m.array.slice(),m.itemSize,m.normalized));for(let E=0,I=C.length;E<I;E++){const A=C[E];if(m.setX(A,b[E*c]),c>=2&&m.setY(A,b[E*c+1]),c>=3&&m.setZ(A,b[E*c+2]),c>=4&&m.setW(A,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=oh[d.magFilter]||Wt,h.minFilter=oh[d.minFilter]||Pn,h.wrapS=ah[d.wrapS]||On,h.wrapT=ah[d.wrapT]||On,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new vt(_);m.needsUpdate=!0,d(m)}),t.load(qs.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Cn(u,o),u.userData.mimeType=o.mimeType||Hv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Be.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new su,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new iu,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ls}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Be.KHR_MATERIALS_UNLIT]){const u=i[Be.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Rt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=mn);const h=s.alphaMode||ia.OPAQUE;if(h===ia.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ia.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ln&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new he(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==ln&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ln){const u=s.emissiveFactor;a.emissive=new ue().setRGB(u[0],u[1],u[2],Rt)}return s.emissiveTexture!==void 0&&o!==ln&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Et)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Cn(u,s),t.associations.set(u,{materials:e}),s.extensions&&fi(i,u,s),u})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ch(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=zv(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=ch(new Ct,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Ov(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const v=l[f];if(m.mode===Yt.TRIANGLES||m.mode===Yt.TRIANGLE_STRIP||m.mode===Yt.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new h_(_,v):new $e(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Yt.TRIANGLE_STRIP?p.geometry=sh(p.geometry,Nh):m.mode===Yt.TRIANGLE_FAN&&(p.geometry=sh(p.geometry,ma));else if(m.mode===Yt.LINES)p=new f_(_,v);else if(m.mode===Yt.LINE_STRIP)p=new qa(_,v);else if(m.mode===Yt.LINE_LOOP)p=new p_(_,v);else if(m.mode===Yt.POINTS)p=new m_(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&kv(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Cn(p,s),m.extensions&&fi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&fi(i,u[0],s),u[0];const d=new Le;s.extensions&&fi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Vr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ro(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Cn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Re;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Xa(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,x=d.length;v<x;v++){const y=d[v],C=f[v],b=g[v],E=_[v],I=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const A=n._createAnimationTracks(y,C,b,E,I);if(A)for(let M=0;M<A.length;M++)p.push(A[M])}return new ya(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Gv)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new tu:l.length>1?h=new Le:l.length===1?h=l[0]:h=new ct,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Cn(h,s),s.extensions&&fi(n,h,s),s.matrix!==void 0){const u=new Re;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Le;n.name&&(s.name=i.createUniqueName(n.name)),Cn(s,n),n.extensions&&fi(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Zt||d instanceof vt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];jn[s.path]===jn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(jn[s.path]){case jn.weights:l=us;break;case jn.rotation:l=ds;break;case jn.position:case jn.scale:l=fs;break;default:switch(n.itemSize){case 1:l=us;break;case 2:case 3:default:l=fs;break}break}const h=i.interpolation!==void 0?Fv[i.interpolation]:Ks,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+jn[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ea(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ds?Nv:vu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Wv(r,e,t){const n=e.attributes,i=new un;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){const h=Ea(Qi[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new R,c=new R;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Ea(Qi[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new xn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function ch(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=ba[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return qe.workingColorSpace!==Rt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),Cn(r,e),Wv(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Bv(r,e.targets,t):r})}function Xv(r){const e=new Map,t=new Map,n=r.clone();return Mu(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Mu(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Mu(r.children[n],e.children[n],t)}const yu={villager:{file:"Rogue",height:1.75},militia:{file:"Barbarian",height:1.85},archer:{file:"Ranger",height:1.8},knight:{file:"Knight",height:1.95}},qv={idle:"Idle_A",walk:"Running_A",work:"Interact",shoot:"Throw",death:"Death_A"},wa=new Map;let Ra=new Map,Ca=!1;async function Yv(){const r="/aoge/models/units/",e=new _u;try{if(!(await fetch(r+"Rogue.glb",{method:"HEAD"})).ok)return!1;const n=[...new Set(Object.values(yu).map(i=>i.file))];await Promise.all(n.map(async i=>{const o=(await e.loadAsync(r+i+".glb")).scene,a=new un().setFromObject(o);o.traverse(c=>{(c.isMesh||c.isSkinnedMesh)&&(c.castShadow=!0,c.frustumCulled=!1)}),wa.set(i,{scene:o,height:a.max.y-a.min.y})}));for(const i of["Rig_Medium_General","Rig_Medium_MovementBasic"]){const s=await e.loadAsync(r+i+".glb");for(const o of s.animations)Ra.set(o.name,o)}Ca=wa.size>0&&Ra.size>0}catch(t){return console.warn("unit pack unavailable:",t.message),!1}return Ca}const lh=new Map;function jv(r,e,t){const n=t+"|"+r.uuid;let i=lh.get(n);return i||(i=r.clone(),i.color&&i.color.lerp(new ue(e),.45),lh.set(n,i)),i}function Kv(r,e){if(!Ca)return null;const t=yu[r];if(!t)return null;const n=wa.get(t.file);if(!n)return null;const i=Xv(n.scene),s=t.height/(n.height||t.height);i.scale.setScalar(s),i.rotation.y=Math.PI;const o=r+"|"+e;i.traverse(l=>{(l.isMesh||l.isSkinnedMesh)&&l.material&&(l.material=jv(l.material,e,o))});const a=new j_(i),c={};for(const[l,h]of Object.entries(qv)){const u=Ra.get(h);u&&(c[l]=a.clipAction(u))}return c.death&&(c.death.setLoop(Uh),c.death.clampWhenFinished=!0),{model:i,mixer:a,actions:c}}let $v=1;class Zv{constructor(e,t,n,i,s){this.id=$v++,this.game=e,this.type=t,this.def=Ln[t],this.owner=n,this.isUnit=!0,this.x=i,this.z=s,this.facing=Math.random()*Math.PI*2,this.radius=t==="knight"?.8:t==="catapult"?.95:.5;const o=Ta[e.players[n].age-1];this.maxHp=Math.round(this.def.hp*o),this.hp=this.maxHp,this.dead=!1,this.order=null,this.state="idle",this.path=null,this.wpIdx=0,this.pathGoal=null,this.repathT=0,this.carry=null,this.actionT=0,this.scanT=Math.random()*.5,this.animT=Math.random()*10,this.moving=!1;const a=new Le;a.position.set(i,e.map.heightAt(i,s),s),a.userData.entity=this,this.group=a,this.mixer=null,this.actions=null,this.actionName=null,this.limbs={},this.adoptModel(),e.scene.add(a),this.selRing=mu(this.radius+.55,n===0),this.selRing.visible=!1,a.add(this.selRing);const c=t==="knight"?2.9:t==="catapult"?2.4:2.3;this.healthBar=new gu(a,1.4,c),this.selected=!1,this.carryMesh=null}pos3(){return new R(this.x,this.group.position.y,this.z)}adoptModel(){const e=Kv(this.type,this.game.teamColor(this.owner));if(e&&this.procModel)this.group.remove(this.procModel),this.procModel=null;else if(this.procModel||this.mixer&&!e)return;e?(this.group.add(e.model),this.mixer=e.mixer,this.actions=e.actions,this.actionName=null,this.limbs={}):this.procModel||(this.procModel=Dx[this.type](this.game.teamColor(this.owner)),this.group.add(this.procModel),this.limbs=this.procModel.userData.limbs||{})}playAction(e,t=.16){var i;if(this.actionName===e||!((i=this.actions)!=null&&i[e]))return;const n=this.actions[this.actionName];n&&n.fadeOut(t),this.actions[e].reset().fadeIn(t).play(),this.actionName=e}setSelected(e){this.selected=e,this.selRing.visible=e}clearOrder(){this.order=null,this.state="idle",this.path=null}orderMove(e,t){this.order={kind:"move",x:e,z:t},this.state="move",this.requestPath(e,t)}orderGather(e){this.type!=="villager"||!e||e.amount<=0||(this.order={kind:"gather",node:e},this.state="toResource",this.requestPath(e.wx,e.wz))}orderGatherFarm(e){this.type!=="villager"||!e||!e.complete||(this.order={kind:"farm",farm:e},this.state="toResource",this.requestPath(e.cx,e.cz))}orderBuild(e){this.type!=="villager"||!e||e.complete||(this.order={kind:"build",building:e},this.state="toBuild",this.requestPath(e.cx,e.cz))}orderAttack(e){if(!e||e.dead)return;this.order={kind:"attack",target:e},this.state="toAttack";const t=e.isBuilding?{x:e.cx,z:e.cz}:{x:e.x,z:e.z};this.requestPath(t.x,t.z)}orderAttackMove(e,t){this.order={kind:"attackmove",x:e,z:t},this.state="move",this.requestPath(e,t)}requestPath(e,t){const n=this.game.map,[i,s]=n.worldToGrid(this.x,this.z),[o,a]=n.worldToGrid(e,t),c=cv(n,i,s,o,a);if(this.pathGoal=[o,a],this.repathT=.8+Math.random()*.4,!c||c.length===0){this.path=null;return}if(this.path=c.map(([l,h])=>n.gridToWorld(l,h)),n.isWalkable(o,a)){const l=this.path[this.path.length-1];l[0]=e,l[1]=t}this.wpIdx=0}distTo(e){if(e.isBuilding){const t=e.def.size*et/2,n=Math.max(Math.abs(this.x-e.cx)-t,0),i=Math.max(Math.abs(this.z-e.cz)-t,0);return Math.hypot(n,i)}return Math.hypot(this.x-e.x,this.z-e.z)-(e.radius||0)}distToNode(e){const t=Math.max(Math.abs(this.x-e.wx)-et*.5,0),n=Math.max(Math.abs(this.z-e.wz)-et*.5,0);return Math.hypot(t,n)}update(e){if(!this.dead){switch(this.animT+=e,this.actionT-=e,this.moving=!1,this.state){case"idle":this.updateIdle(e);break;case"move":this.updateMove(e);break;case"toResource":this.updateToResource(e);break;case"gathering":this.updateGathering(e);break;case"deposit":this.updateDeposit(e);break;case"toBuild":this.updateToBuild(e);break;case"building":this.updateBuilding(e);break;case"toAttack":this.updateToAttack(e);break;case"fighting":this.updateFighting(e);break}this.animate(e)}}updateIdle(e){if(this.def.aggro>0&&(this.scanT-=e,this.scanT<=0)){this.scanT=.45;const t=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro,!0);t&&this.engage(t,!0)}}engage(e,t=!1){const n=t?this.order:null;this.order={kind:"attack",target:e,resume:n},this.state="toAttack",this.requestPath(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z)}resumeOrAcquire(){var t;const e=(t=this.order)==null?void 0:t.resume;if(e&&(this.order=e,e.kind==="move"||e.kind==="attackmove")){this.state="move",this.requestPath(e.x,e.z);return}if(this.def.aggro>0){const n=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro+2,!0);if(n){this.engage(n);return}}this.clearOrder()}updateMove(e){var t;if(((t=this.order)==null?void 0:t.kind)==="attackmove"&&this.def.aggro>0&&(this.scanT-=e,this.scanT<=0)){this.scanT=.4;const n=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro,!0);if(n){this.engage(n,!0);return}}if(this.followPath(e)){const n=this.order;this.clearOrder(),(n==null?void 0:n.kind)==="attackmove"&&(this.scanT=0)}}updateToResource(e){const t=this.order;if(!t){this.state="idle";return}if(t.kind==="gather"){const n=t.node;if(!n||n.amount<=0){this.findNextNode(n);return}if(this.distToNode(n)<1.5){this.state="gathering",this.actionT=0,this.faceTowards(n.wx,n.wz);return}}else{const n=t.farm;if(!n||n.dead||!n.complete){this.clearOrder();return}if(this.distTo(n)<1.6){this.state="gathering",this.actionT=0,this.faceTowards(n.cx,n.cz);return}}if(this.followPath(e)){const n=t.kind==="gather"?t.node.wx:t.farm.cx,i=t.kind==="gather"?t.node.wz:t.farm.cz;this.repathT<=0?this.clearOrder():this.requestPath(n,i)}this.repathT-=e}updateGathering(e){const t=this.order;if(!t){this.state="idle";return}const n=t.kind==="farm",i=n?t.farm:t.node;if(!i||i.dead||!n&&i.amount<=0){n?this.clearOrder():this.findNextNode(i);return}const s=n?"food":i.res;if(this.carry&&(this.carry.res!==s||this.carry.amt>=Ql)){this.goDeposit();return}if(this.actionT<=0){this.actionT=1/(n?i.def.farmRate:this.def.gatherRate),this.carry||(this.carry={res:s,amt:0});const o=n?1:Math.min(1,i.amount);this.carry.amt+=o,n||(i.amount-=o,i.amount<=0&&this.game.depleteNode(i),i.res==="wood"&&Math.random()<.3&&this.game.sound("chop")),this.updateCarryMesh(),this.carry.amt>=Ql&&this.goDeposit()}}goDeposit(){const e=this.game.findDropoff(this.owner,this.x,this.z);if(!e){this.clearOrder();return}this.order.drop=e,this.state="deposit",this.requestPath(e.cx,e.cz)}updateDeposit(e){const t=this.order;if(!t){this.state="idle";return}let n=t.drop;if(!n||n.dead){if(n=this.game.findDropoff(this.owner,this.x,this.z),!n){this.clearOrder();return}t.drop=n,this.requestPath(n.cx,n.cz)}if(this.distTo(n)<1.7){this.carry&&(this.game.players[this.owner].res[this.carry.res]+=Math.round(this.carry.amt),this.carry=null,this.updateCarryMesh()),t.kind==="gather"&&t.node&&t.node.amount>0?(this.state="toResource",this.requestPath(t.node.wx,t.node.wz)):t.kind==="farm"&&t.farm&&!t.farm.dead?(this.state="toResource",this.requestPath(t.farm.cx,t.farm.cz)):t.kind==="gather"?this.findNextNode(t.node):this.clearOrder();return}this.followPath(e)&&this.distTo(n)>=1.7&&this.requestPath(n.cx,n.cz)}findNextNode(e){if(!e){this.clearOrder();return}const t=this.game.findNearestNode(e.res,e.wx,e.wz,18);t?this.carry&&this.carry.amt>0&&this.carry.res===e.res?(this.order={kind:"gather",node:t},this.goDeposit()):this.orderGather(t):this.carry&&this.carry.amt>0?(this.order={kind:"gather",node:null},this.goDeposit()):this.clearOrder()}updateToBuild(e){var n;const t=(n=this.order)==null?void 0:n.building;if(!t||t.dead||t.complete){if(t&&t.complete&&t.def.isFarm){this.orderGatherFarm(t);return}this.clearOrder();return}if(this.distTo(t)<1.6){this.state="building",this.faceTowards(t.cx,t.cz);return}this.followPath(e)&&(this.repathT<=0?this.clearOrder():this.requestPath(t.cx,t.cz)),this.repathT-=e}updateBuilding(e){var n;const t=(n=this.order)==null?void 0:n.building;if(!t||t.dead){this.clearOrder();return}if(t.complete){if(t.def.isFarm){this.orderGatherFarm(t);return}this.clearOrder();return}if(this.distTo(t)>2.4){this.state="toBuild",this.requestPath(t.cx,t.cz);return}t.constructionTick(e),this.actionT<=0&&(this.actionT=.5,Math.random()<.5&&this.game.sound("hammer"))}attackRange(e){return e.isBuilding?Math.max(this.def.range,1.6):Math.max(this.def.range,this.radius+.2)}updateToAttack(e){var i;const t=(i=this.order)==null?void 0:i.target;if(!t||t.dead){this.resumeOrAcquire();return}const n=this.attackRange(t);if(this.distTo(t)<=n){this.state="fighting";return}this.repathT-=e,this.repathT<=0&&!t.isBuilding&&this.requestPath(t.x,t.z),this.followPath(e)&&this.distTo(t)>n&&this.requestPath(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z)}updateFighting(e){var s;const t=(s=this.order)==null?void 0:s.target;if(!t||t.dead){this.resumeOrAcquire();return}const n=this.attackRange(t),i=this.distTo(t);if(i>n+.6){this.state="toAttack",this.requestPath(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z);return}if(this.def.minRange&&i<this.def.minRange){const o=Math.atan2(this.z-(t.isBuilding?t.cz:t.z),this.x-(t.isBuilding?t.cx:t.x));this.requestPath(this.x+Math.cos(o)*5,this.z+Math.sin(o)*5),this.state="toAttack";return}this.faceTowards(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z),this.actionT<=0&&(this.actionT=this.def.atkSpeed,this.strike(t))}strike(e){const t=this.game,n=Math.round(this.def.atk*Z_[t.players[this.owner].age-1]);if(this.attackAnimT=.35,this.def.projectile==="arrow"){const i=this.pos3();i.y+=1.5,t.effects.fireArrow(i,e,n,this),t.sound("arrow")}else if(this.def.projectile==="stone"){const i=this.pos3();i.y+=1.6;const s=e.isBuilding?new R(e.cx,e.groundY,e.cz):e.pos3();let o=n;e.isBuilding&&this.def.bonusVsBuilding&&(o=Math.round(n*this.def.bonusVsBuilding)),t.effects.fireStone(i,s,o,this.def.splash||0,this),t.sound("catapult"),this.limbs.throwArm&&(this.throwAnimT=.5)}else{let i=n;e.isBuilding&&(i=Math.max(1,Math.round(n*(this.type==="villager"?.6:.8)))),t.applyDamage(e,i,this),t.effects.blood(e.isBuilding?new R(e.cx,e.groundY+1.2,e.cz):e.pos3().setY(this.group.position.y+1.1)),t.sound("melee")}}followPath(e){if(!this.path||this.wpIdx>=this.path.length)return this.applySeparation(e,!1),!0;const[t,n]=this.path[this.wpIdx],i=t-this.x,s=n-this.z,o=Math.hypot(i,s),a=this.def.speed*e;if(o<=Math.max(a,.25))return this.wpIdx++,this.wpIdx>=this.path.length?(this.path=null,!0):!1;const c=i/o,l=s/o;return this.tryStep(c*a,l*a),this.facing=Jv(this.facing,Math.atan2(c,l),Math.min(1,e*10)),this.moving=!0,this.applySeparation(e,!0),!1}tryStep(e,t){const n=this.game.map;let i=this.x+e,s=this.z+t;const[o,a]=n.worldToGrid(i,s);if(n.isWalkable(o,a))return this.x=i,this.z=s,!0;const[c,l]=n.worldToGrid(this.x+e,this.z);if(n.isWalkable(c,l))return this.x+=e,!0;const[h,u]=n.worldToGrid(this.x,this.z+t);return n.isWalkable(h,u)?(this.z+=t,!0):!1}applySeparation(e,t){const n=this.game.unitsNear(this.x,this.z,1.8+this.radius);let i=0,s=0;for(const o of n){if(o===this||o.dead)continue;const a=this.x-o.x,c=this.z-o.z,l=Math.hypot(a,c),h=this.radius+o.radius+(t?.05:.18);if(l<h&&l>.001){const u=(h-l)/h;i+=a/l*u,s+=c/l*u}else if(l<=.001){const u=Math.random()*Math.PI*2;i+=Math.cos(u),s+=Math.sin(u)}}if(i||s){const o=(t?2.4:4.5)*e;this.tryStep(i*o,s*o)}}faceTowards(e,t){this.facing=Math.atan2(e-this.x,t-this.z)}updateCarryMesh(){const e=this.carry&&this.carry.amt>0;if(e&&!this.carryMesh){const t={wood:9069114,food:12729147,gold:15251747},n=new $e(new Bn(.18,0),new hs({color:t[this.carry.res]}));n.position.set(0,1.65,-.34),this.group.add(n),this.carryMesh=n}else if(!e&&this.carryMesh)this.group.remove(this.carryMesh),this.carryMesh.material.dispose(),this.carryMesh=null;else if(e&&this.carryMesh){const t={wood:9069114,food:12729147,gold:15251747};this.carryMesh.material.color.setHex(t[this.carry.res])}}animate(e){var o;const t=this.group;if(t.position.x=this.x,t.position.z=this.z,t.position.y=this.game.map.heightAt(this.x,this.z),t.rotation.y=this.facing,this.attackAnimT>0&&(this.attackAnimT-=e),this.throwAnimT>0&&(this.throwAnimT-=e),this.mixer){let a="idle";this.moving?a="walk":this.state==="gathering"||this.state==="building"?a="work":this.state==="fighting"&&(a=this.def.projectile?"shoot":"work"),this.playAction(a),this.mixer.update(e),this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp);return}const n=((o=this.procModel)==null?void 0:o.userData)||{},i=this.limbs,s=this.animT;if(n.isMounted){const a=this.moving?13:0;for(let c=0;c<4;c++){const l=i["hLeg"+c];l&&(l.rotation.x=this.moving?Math.sin(s*a+c*1.7)*.6:0)}i.rArm&&(i.rArm.rotation.x=this.attackAnimT>0?-.7:0),t.position.y+=this.moving?Math.abs(Math.sin(s*a*.5))*.12:0}else if(n.isMachine){if(i.throwArm){const a=this.throwAnimT>0?-2:-.5;i.throwArm.rotation.x+=(a-i.throwArm.rotation.x)*Math.min(1,e*(this.throwAnimT>0?18:3))}}else{const a=this.state==="gathering"||this.state==="building";if(this.moving){const l=Math.sin(s*11)*.65;i.lLeg&&(i.lLeg.rotation.x=l),i.rLeg&&(i.rLeg.rotation.x=-l),i.lArm&&(i.lArm.rotation.x=-l*.7),i.rArm&&(i.rArm.rotation.x=l*.7)}else if(a){const c=Math.sin(s*6.5);i.rArm&&(i.rArm.rotation.x=-1.2+c*.7),i.lArm&&(i.lArm.rotation.x=-.2+c*.18),i.lLeg&&(i.lLeg.rotation.x=0),i.rLeg&&(i.rLeg.rotation.x=0)}else if(this.attackAnimT>0)i.rArm&&(i.rArm.rotation.x=-1.9+(.35-this.attackAnimT)*5),i.lArm&&(i.lArm.rotation.x=.3);else{const c=Math.sin(s*1.6)*.04;for(const l of["lLeg","rLeg","lArm","rArm"])i[l]&&(i[l].rotation.x*=.85);i.lArm&&(i.lArm.rotation.x+=c)}}this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp)}}function Jv(r,e,t){let n=e-r;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return r+n*t}const Su={towncenter:["TownCenter_FirstAge_Level3","TownCenter_SecondAge_Level1","TownCenter_SecondAge_Level2","TownCenter_SecondAge_Level3"],house:["Houses_FirstAge_1_Level2","Houses_FirstAge_2_Level2","Houses_SecondAge_1_Level2","Houses_SecondAge_3_Level3"],barracks:["Barracks_FirstAge_Level2","Barracks_FirstAge_Level3","Barracks_SecondAge_Level2","Barracks_SecondAge_Level3"],archeryrange:["Archery_FirstAge_Level2","Archery_FirstAge_Level3","Archery_SecondAge_Level2","Archery_SecondAge_Level3"],farm:["Farm_FirstAge_Level2_Wheat","Farm_FirstAge_Level3_Wheat","Farm_SecondAge_Level2_Wheat","Farm_SecondAge_Level3_Wheat"],tower:["WatchTower_FirstAge_Level2","WatchTower_FirstAge_Level3","WatchTower_SecondAge_Level2","WatchTower_SecondAge_Level3"],storehouse:["Market_FirstAge_Level2","Market_FirstAge_Level3","Market_SecondAge_Level2","Market_SecondAge_Level3"],stable:["Windmill_FirstAge","Windmill_FirstAge","Windmill_SecondAge","Windmill_SecondAge"],siegeworkshop:["TowerHouse_FirstAge","TowerHouse_FirstAge","TowerHouse_SecondAge","TowerHouse_SecondAge"],wall:["Wall_FirstAge","Wall_FirstAge","Wall_SecondAge","Wall_SecondAge"],_farmdirt:["Farm_Dirt_Level2"]},Pa=new Map;let Xr=!1,Ia=[];function Qv(r){Xr?r():Ia.push(r)}function eM(r){const e=new Le;e.add(r);const t=new un().setFromObject(r),n=t.getCenter(new R);return r.position.x-=n.x,r.position.z-=n.z,r.position.y-=t.min.y,r.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.material&&(i.material.roughness=Math.min(1,(i.material.roughness??.9)+.1),i.material.metalness=0))}),e.userData.footprint=Math.max(t.max.x-t.min.x,t.max.z-t.min.z),e}async function tM(){const r="/aoge/models/buildings/";let e;try{const s=await fetch(r+"index.json");if(!s.ok)return!1;e=await s.json()}catch{return!1}const t=new Map(e.map(s=>[s.replace(/\.(glb|gltf)$/i,""),s])),n=new _u,i=[...new Set(Object.values(Su).flat())].filter(s=>t.has(s));return await Promise.all(i.map(async s=>{try{const o=await n.loadAsync(r+t.get(s));Pa.set(s,eM(o.scene))}catch(o){console.warn("pack model failed:",s,o.message)}})),Xr=Pa.size>0,Xr&&(Ia.forEach(s=>s()),Ia=[]),Xr}function Tu(r,e,t){const n=Su[r];if(!n)return null;const i=n[Math.min(3,Math.max(0,e-1))],s=hh(i,t);if(!s)return null;if(r==="farm"){const o=hh("Farm_Dirt_Level2",t);if(o){const a=new Le;return o.position.y=.16,s.position.y=.22,a.add(o,s),a}}return s}function hh(r,e){const t=Pa.get(r);if(!t)return null;const n=t.clone(!0),i=e*et*.96,s=i/(t.userData.footprint||i);return n.scale.setScalar(s),n}let nM=1e5;class iM{constructor(e,t,n,i,s,o=!1){this.id=nM++,this.game=e,this.type=t,this.def=ps[t],this.owner=n,this.isBuilding=!0,this.gx=i,this.gy=s,this.size=this.def.size,this.cx=(i+this.size/2)*et,this.cz=(s+this.size/2)*et,this.dead=!1,this.maxHp=this.def.hp,this.complete=o,this.progress=o?1:0,this.hp=o?this.maxHp:Math.max(1,Math.round(this.maxHp*.08)),this.trainQueue=[],this.trainT=0,this.researching=null,this.rally=null,this.atkCd=0,this.scanT=Math.random()*.4,this.atkTarget=null,e.map.occupy(i,s,this.size,this);let a=0;for(let u=s;u<s+this.size;u++)for(let d=i;d<i+this.size;d++)a+=e.map.tileHeight(d,u);this.groundY=a/(this.size*this.size)-.06;const c=new Le;c.position.set(this.cx,this.groundY,this.cz),c.userData.entity=this,this.modelGroup=new Le,this.modelGroup.add(this.buildModel()),c.add(this.modelGroup),this.group=c,e.scene.add(c),o||(this.scaffold=Kx(this.size),c.add(this.scaffold),this.modelGroup.scale.y=.1);const l=this.size*et*.62;this.selRing=mu(l,n===0),this.selRing.visible=!1,this.selRing.position.y=.12,c.add(this.selRing);const h=t==="towncenter"?8.2:t==="tower"?7:4.2;this.healthBar=new gu(c,Math.min(4.5,this.size*1.5),h),this.selected=!1}pos3(){return new R(this.cx,this.groundY,this.cz)}buildModel(){const e=this.game.teamColor(this.owner),t=this.game.players[this.owner].age,n=Tu(this.type,t,this.size);if(n){const i=new Le;if(i.add(n),!this.def.isFarm&&!this.def.isWall){const s=Ux(e,3+this.size*.6);s.position.set(this.size*et*.36,0,this.size*et*.36),i.add(s)}return i}return fu[this.type](e)}reskin(){if(!this.dead){for(;this.modelGroup.children.length;)this.modelGroup.remove(this.modelGroup.children[0]);this.modelGroup.add(this.buildModel())}}setSelected(e){this.selected=e,this.selRing.visible=e}constructionTick(e){if(this.complete||this.dead)return;const t=e/this.def.buildTime;this.progress=Math.min(1,this.progress+t),this.hp=Math.min(this.maxHp,this.hp+t*this.maxHp*.92),this.modelGroup.scale.y=.1+this.progress*.9,this.progress>=1&&this.finishConstruction()}finishConstruction(){this.complete=!0,this.hp=Math.max(this.hp,this.maxHp*.95),this.modelGroup.scale.y=1,this.scaffold&&(this.group.remove(this.scaffold),this.scaffold=null),this.game.onBuildingComplete(this)}canTrain(e){const t=Ln[e],n=this.game.players[this.owner];return this.complete&&t&&n.age>=t.age}queueTrain(e){const t=Ln[e],n=this.game.players[this.owner];return!this.canTrain(e)||this.trainQueue.length>=5||!ei(n.res,t.cost)?!1:(Aa(n.res,t.cost),this.trainQueue.push(e),this.trainQueue.length===1&&(this.trainT=0),!0)}cancelTrain(e){const t=this.trainQueue[e];t&&(tx(this.game.players[this.owner].res,Ln[t].cost),this.trainQueue.splice(e,1),e===0&&(this.trainT=0))}startAgeResearch(){const e=this.game.players[this.owner];if(this.researching||e.ageResearchInProgress||e.age>=an.length)return!1;const t=an[e.age];return ei(e.res,t.cost)?(Aa(e.res,t.cost),this.researching={age:e.age+1,t:0,dur:t.time},e.ageResearchInProgress=!0,!0):!1}update(e){if(this.dead)return;if(this.complete&&this.trainQueue.length>0){const n=this.trainQueue[0],i=Ln[n],s=this.game.players[this.owner];this.trainT+=e,this.trainT>=i.trainTime&&(s.popUsed<s.popCap?(this.trainQueue.shift(),this.trainT=0,this.game.spawnFromBuilding(this,n)):this.trainT=i.trainTime)}this.researching&&(this.researching.t+=e,this.researching.t>=this.researching.dur&&(this.game.advanceAge(this.owner,this.researching.age),this.researching=null));const t=this.def.attack;if(t&&this.complete&&(this.atkCd-=e,this.scanT-=e,(!this.atkTarget||this.atkTarget.dead||this.targetOutOfRange())&&this.scanT<=0&&(this.scanT=.5,this.atkTarget=this.game.nearestEnemy(this.owner,this.cx,this.cz,t.range,!0)),this.atkTarget&&!this.atkTarget.dead&&this.atkCd<=0&&!this.targetOutOfRange())){this.atkCd=t.atkSpeed;const n=this.pos3();n.y+=this.type==="tower"?5.4:6.5,this.game.effects.fireArrow(n,this.atkTarget,t.atk,this),this.game.sound("arrow")}this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp-.5)}targetOutOfRange(){const e=this.atkTarget;if(!e)return!0;const t=e.isBuilding?e.cx:e.x,n=e.isBuilding?e.cz:e.z;return Math.hypot(t-this.cx,n-this.cz)>this.def.attack.range+1}spawnPoint(){var o,a;const e=this.game.map,t=((o=this.rally)==null?void 0:o.x)??this.cx,n=((a=this.rally)==null?void 0:a.z)??this.cz+(this.size+1)*et;let i=null,s=1/0;for(let c=0;c<4;c++){for(let l=this.gy-1-c;l<=this.gy+this.size+c;l++)for(let h=this.gx-1-c;h<=this.gx+this.size+c;h++){if(!(h<this.gx-c||h>=this.gx+this.size+c||l<this.gy-c||l>=this.gy+this.size+c)||!e.isWalkable(h,l))continue;const[d,f]=e.gridToWorld(h,l),g=Math.hypot(d-t,f-n);g<s&&(s=g,i=[d,f])}if(i)return i}return[this.cx,this.cz]}}let sM=1;class rM{constructor(e,t,n){this.scene=e,this.map=t,this.trees=n,this.effects=null,this.ai=null,this.time=0,this.gameOver=!1,this.players=[Qe,Qs].map(i=>({id:i,res:{...ex},age:1,popUsed:0,popCap:0,ageResearchInProgress:!1})),this.units=[],this.buildings=[],this.nodes=[],this.stumps=[],this.hash=new Map,this.cell=4,this.treeNodeByInstance=new Map,this.onAlert=()=>{},this.soundFn=()=>{},this.onGameOver=()=>{},this.onCombat=()=>{},this.lastAttackAlert=-99}teamColor(e){return $_[e]}sound(e){this.soundFn(e)}createResourceNodes(e){let t=12345;const n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(const i of e){const[s,o]=this.map.gridToWorld(i.gx,i.gy),a=Q_[i.type],c={id:sM++,isNode:!0,type:i.type,res:a.res,amount:a.amount,gx:i.gx,gy:i.gy,wx:s,wz:o,dead:!1},l=this.map.heightAt(s,o);if(i.type==="tree")c.treeHandle=this.trees.add(s,l-.1,o,n()),c.treeHandle&&this.treeNodeByInstance.set(c.treeHandle.idx,c);else{const h=i.type==="berry"?qx():Yx();h.position.set(s,l-.05,o),h.rotation.y=n()*Math.PI*2,h.userData.node=c,this.scene.add(h),c.mesh=h}this.map.occupant[i.gy*this.map.size+i.gx]=c,this.nodes.push(c)}this.trees.flush()}spawnUnit(e,t,n,i){const s=new Zv(this,e,t,n,i);return this.units.push(s),this.players[t].popUsed+=1,s}spawnFromBuilding(e,t){const[n,i]=e.spawnPoint(),s=this.spawnUnit(t,e.owner,n,i),o=e.rally;return o&&(o.node&&!o.node.dead&&o.node.amount>0&&t==="villager"?s.orderGather(o.node):o.farm&&!o.farm.dead&&t==="villager"?s.orderGatherFarm(o.farm):o.x!==void 0&&(t!=="villager"?s.orderAttackMove(o.x,o.z):s.orderMove(o.x,o.z))),e.owner===Qe&&this.sound("ready"),s}placeBuilding(e,t,n,i,s=!1){const o=ps[t],a=this.players[e];if(!o)return null;if(!s){if(a.age<o.age||!ei(a.res,o.cost)||!this.map.canPlace(n,i,o.size))return null;Aa(a.res,o.cost)}const c=new iM(this,t,e,n,i,s);return this.buildings.push(c),s&&this.onBuildingComplete(c,!0),c}onBuildingComplete(e,t=!1){this.recalcPop(e.owner),!t&&e.owner===Qe&&this.sound("built")}recalcPop(e){let t=0;for(const n of this.buildings)n.owner===e&&n.complete&&!n.dead&&n.def.pop&&(t+=n.def.pop);this.players[e].popCap=Math.min(t,K_)}advanceAge(e,t){const n=this.players[e],i=Ta[n.age-1];n.age=t,n.ageResearchInProgress=!1;const s=Ta[t-1]/i;for(const o of this.units)o.owner===e&&!o.dead&&(o.maxHp=Math.round(o.maxHp*s),o.hp=Math.min(o.maxHp,Math.round(o.hp*s)));for(const o of this.buildings)o.owner===e&&!o.dead&&o.reskin();e===Qe?(this.onAlert(`You have advanced to the ${an[t-1].name}!`,!0),this.sound("ageup")):this.onAlert(`The enemy has advanced to the ${an[t-1].name}.`)}applyDamage(e,t,n){!e||e.dead||this.gameOver||(e.hp-=t,(e.owner===Qe||(n==null?void 0:n.owner)===Qe)&&this.onCombat(),e.owner===Qe&&this.time-this.lastAttackAlert>14&&(this.lastAttackAlert=this.time,this.onAlert("Your forces are under attack!"),this.sound("horn")),e.isUnit&&n&&!n.dead&&(e.state==="idle"||e.state==="gathering"||e.state==="toResource"||e.state==="deposit"||e.state==="move")&&n.isUnit&&(e.type!=="villager"||n.def.range<=1.5)&&e.engage(n,!0),this.ai&&this.ai.onDamage(e,n),e.hp<=0&&(e.isUnit?this.killUnit(e):this.razeBuilding(e)))}splashDamage(e,t,n,i){var s;if(!(t<=0)){for(const o of[...this.units]){if(o.dead||o===i)continue;const a=Math.hypot(o.x-e.x,o.z-e.z);a<=t&&this.applyDamage(o,Math.round(n*(a<t*.5?1:.55)),i)}for(const o of[...this.buildings]){if(o.dead)continue;const a=o.size*et/2,c=Math.max(Math.abs(e.x-o.cx)-a,0),l=Math.max(Math.abs(e.z-o.cz)-a,0);if(Math.hypot(c,l)<=t){const h=(s=i==null?void 0:i.def)!=null&&s.bonusVsBuilding&&i.owner!==o.owner?i.def.bonusVsBuilding:1;this.applyDamage(o,Math.round(n*h*.8),i)}}}}killUnit(e){var t;e.dead||(e.dead=!0,e.setSelected(!1),e.healthBar.set(0,!1),this.players[e.owner].popUsed-=1,this.units.splice(this.units.indexOf(e),1),this.effects.blood(e.pos3().setY(e.group.position.y+.8)),e.mixer&&((t=e.actions)!=null&&t.death)?(e.playAction("death",.1),this.effects.fadeOut(e.group,2.2,.6,e.mixer)):this.effects.fadeOut(e.group,1.4,1),this.sound("die"),this.checkWinLose())}razeBuilding(e){e.dead||(e.dead=!0,e.setSelected(!1),e.healthBar.set(0,!1),this.map.release(e.gx,e.gy,e.size),this.buildings.splice(this.buildings.indexOf(e),1),this.recalcPop(e.owner),e.researching&&(this.players[e.owner].ageResearchInProgress=!1),this.effects.puff(new R(e.cx,e.groundY+1.5,e.cz),9075296,16,7),this.effects.fadeOut(e.group,2.2,e.size*1.2),this.sound("collapse"),e.owner===Qe&&this.onAlert(`Your ${e.def.name} has been destroyed!`),this.ai&&this.ai.onBuildingLost(e),this.checkWinLose())}depleteNode(e){if(!e.dead)if(e.dead=!0,e.amount=0,this.map.release(e.gx,e.gy,1),this.nodes.splice(this.nodes.indexOf(e),1),e.treeHandle!==void 0&&e.treeHandle!==null){this.trees.remove(e.treeHandle);const t=jx();t.position.set(e.wx,this.map.heightAt(e.wx,e.wz)-.05,e.wz),this.scene.add(t),this.sound("treefall")}else e.mesh&&this.effects.fadeOut(e.mesh,1.2,.8)}findDropoff(e,t,n){let i=null,s=1/0;for(const o of this.buildings){if(o.owner!==e||!o.complete||o.dead||!o.def.dropoff)continue;const a=Math.hypot(o.cx-t,o.cz-n);a<s&&(s=a,i=o)}return i}findNearestNode(e,t,n,i=30){let s=null,o=1/0;for(const a of this.nodes){if(a.dead||a.res!==e||a.amount<=0)continue;const c=Math.hypot(a.wx-t,a.wz-n);c<o&&c<=i&&(o=c,s=a)}return s}nearestEnemy(e,t,n,i,s=!1){let o=null,a=1/0;for(const c of this.units){if(c.owner===e||c.dead)continue;const l=Math.hypot(c.x-t,c.z-n);l<=i&&l<a&&(a=l,o=c)}if(s)for(const c of this.buildings){if(c.owner===e||c.dead)continue;const l=c.size*et/2,h=Math.max(Math.abs(t-c.cx)-l,0),u=Math.max(Math.abs(n-c.cz)-l,0),d=Math.hypot(h,u)+4;Math.hypot(h,u)<=i&&d<a&&(a=d,o=c)}return o}hashKey(e,t){return(e/this.cell|0)*4096+(t/this.cell|0)}rebuildHash(){this.hash.clear();for(const e of this.units){const t=this.hashKey(e.x,e.z);let n=this.hash.get(t);n||(n=[],this.hash.set(t,n)),n.push(e)}}unitsNear(e,t,n){const i=[],s=this.cell,o=(e-n)/s|0,a=(e+n)/s|0,c=(t-n)/s|0,l=(t+n)/s|0;for(let h=o;h<=a;h++)for(let u=c;u<=l;u++){const d=this.hash.get(h*4096+u);if(d)for(const f of d)Math.hypot(f.x-e,f.z-t)<=n&&i.push(f)}return i}countBuildings(e){let t=0;for(const n of this.buildings)n.owner===e&&!n.dead&&t++;return t}update(e){if(this.gameOver){this.effects.update(e);return}this.time+=e,this.rebuildHash();for(const t of[...this.units])t.update(e);for(const t of[...this.buildings])t.update(e);this.ai&&this.ai.update(e),this.effects.update(e)}checkWinLose(){if(this.gameOver||this.time<5)return;const e=this.countBuildings(Qe)>0;this.countBuildings(Qs)>0?e||(this.gameOver=!0,this.onGameOver(!1)):(this.gameOver=!0,this.onGameOver(!0))}}const uh=[9,13,17,20],oM=[7,12,18,26],aM=[8,10,13,17];class cM{constructor(e,t,n){this.game=e,this.me=Qs,this.baseGx=t,this.baseGy=n;const[i,s]=e.map.gridToWorld(t,n);this.baseX=i,this.baseZ=s,this.ecoT=0,this.stratT=3,this.waveT=150,this.defendT=0,this.attackTargetT=0,this.attacking=!1,this.trickleT=0}p(){return this.game.players[this.me]}myUnits(e){return this.game.units.filter(t=>t.owner===this.me&&!t.dead&&(!e||t.type===e))}myBuildings(e){return this.game.buildings.filter(t=>t.owner===this.me&&!t.dead&&(!e||t.type===e))}army(){return this.game.units.filter(e=>e.owner===this.me&&!e.dead&&e.type!=="villager")}update(e){if(this.ecoT-=e,this.stratT-=e,this.waveT-=e,this.defendT-=e,this.trickleT+=e,this.trickleT>=5){this.trickleT-=5;const t=this.p().res;t.wood+=3,t.food+=3,t.gold+=2}this.ecoT<=0&&(this.ecoT=1.4,this.economy()),this.stratT<=0&&(this.stratT=2.6,this.strategy()),this.waveT<=0&&this.tryAttack(),this.attacking&&(this.attackTargetT-=e,this.attackTargetT<=0&&(this.attackTargetT=6,this.retarget()))}economy(){const e=this.p(),t=this.myUnits("villager"),n=this.myBuildings("towncenter")[0];n&&n.complete&&t.length+n.trainQueue.length<uh[e.age-1]&&n.trainQueue.length<2&&n.queueTrain("villager"),e.popCap-e.popUsed<4&&e.popCap<120&&(this.myBuildings("house").some(a=>!a.complete)||this.construct("house"));const i=t.filter(o=>o.state==="idle");if(i.length){const o=this.neededResource(t);for(const a of i)if(o==="food"){const c=this.freeFarm(t);if(c){a.orderGatherFarm(c);continue}const l=this.game.findNearestNode("food",a.x,a.z,55);if(l){a.orderGather(l);continue}if(!this.construct("farm",a)){const h=this.game.findNearestNode("wood",a.x,a.z,60);h&&a.orderGather(h)}}else{const c=this.game.findNearestNode(o,this.baseX,this.baseZ,70)||this.game.findNearestNode("wood",a.x,a.z,70);c&&a.orderGather(c)}}const s=this.myBuildings("farm");e.age>=2&&s.length<3+e.age&&e.res.wood>150&&this.construct("farm")}neededResource(e){const t={wood:0,food:0,gold:0};for(const c of e){const l=c.order;l&&(l.kind==="farm"?t.food++:l.kind==="gather"&&l.node&&t[l.node.res]++)}const i=this.p().age===1?{wood:.38,food:.45,gold:.17}:{wood:.34,food:.38,gold:.28},s=Math.max(1,t.wood+t.food+t.gold);let o="food",a=-1/0;for(const c of["wood","food","gold"]){const l=i[c]-t[c]/s;l>a&&(a=l,o=c)}return o}freeFarm(e){var n;const t=new Set;for(const i of e)((n=i.order)==null?void 0:n.kind)==="farm"&&i.order.farm&&t.add(i.order.farm.id);return this.myBuildings("farm").find(i=>i.complete&&!t.has(i.id))||null}strategy(){const e=this.p(),t=this.myUnits("villager"),n=this.myBuildings("towncenter")[0];if(!n){e.res.wood>=ps.towncenter.cost.wood&&this.construct("towncenter");return}if(t.length>=6&&this.myBuildings("barracks").length===0&&this.construct("barracks"),this.myBuildings("storehouse").length===0&&t.length>=7){const s=this.game.findNearestNode("gold",this.baseX,this.baseZ,70);s&&Math.hypot(s.wx-this.baseX,s.wz-this.baseZ)>24&&this.constructNear("storehouse",s.wx,s.wz)}if(e.age>=2&&(this.myBuildings("archeryrange").length===0&&this.construct("archeryrange"),this.myBuildings("tower").length<2&&e.res.wood>200&&this.construct("tower")),e.age>=3&&this.myBuildings("stable").length===0&&this.construct("stable"),e.age>=4&&this.myBuildings("siegeworkshop").length===0&&this.construct("siegeworkshop"),!e.ageResearchInProgress&&e.age<an.length){const s=an[e.age];if(t.length>=uh[e.age-1]-2&&ei(e.res,s.cost)&&n.complete){const a=e.age===1?60:120;e.res.food>=(s.cost.food||0)+a*.5&&n.startAgeResearch()}}if(this.army().length<oM[e.age-1]){for(const s of this.myBuildings())if(!(!s.complete||!s.def.trains||s.type==="towncenter")&&!(s.trainQueue.length>=2))for(const o of s.def.trains)e.age>=Ln[o].age&&s.queueTrain(o)}}tryAttack(){const e=this.army(),t=aM[this.p().age-1];e.length>=t?(this.attacking=!0,this.attackTargetT=0,this.waveT=100+Math.random()*40,this.retarget()):this.waveT=25}retarget(){const e=this.pickPlayerTarget();if(!e){this.attacking=!1;return}const t=this.army().filter(n=>{var i;return n.state==="idle"||n.state==="move"||((i=n.order)==null?void 0:i.kind)==="attackmove"});for(const n of t)n.orderAttackMove(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z);this.army().length<3&&(this.attacking=!1)}pickPlayerTarget(){const e=this.game.buildings.filter(n=>n.owner===Qe&&!n.dead);return e.length?e.find(n=>n.def.trains&&n.type!=="towncenter")||e.find(n=>n.type==="towncenter")||e[0]:null}onDamage(e,t){if(e.owner!==this.me||!t||t.dead||t.owner===this.me||this.defendT>0||!(Math.hypot((e.isBuilding?e.cx:e.x)-this.baseX,(e.isBuilding?e.cz:e.z)-this.baseZ)<55))return;this.defendT=10;const i=t.isBuilding?t.cx:t.x,s=t.isBuilding?t.cz:t.z;for(const o of this.army())o.state==="fighting"||o.state==="toAttack"||o.orderAttackMove(i,s)}onBuildingLost(){}construct(e,t=null){return this.constructNear(e,this.baseX,this.baseZ,t)}constructNear(e,t,n,i=null){const s=this.game,o=ps[e],a=this.p();if(a.age<o.age||!ei(a.res,o.cost)||!["house","farm","tower"].includes(e)&&this.myBuildings(e).some(u=>!u.complete))return!1;const c=this.findSpot(t,n,o.size);if(!c)return!1;const l=s.placeBuilding(this.me,e,c[0],c[1]);if(!l)return!1;const h=i||this.nearestFreeVillager(l.cx,l.cz);if(h&&h.orderBuild(l),!h){const u=this.myUnits("villager")[0];u&&u.orderBuild(l)}return!0}nearestFreeVillager(e,t){let n=null,i=1/0;for(const s of this.myUnits("villager")){if(s.state==="building"||s.state==="toBuild")continue;const o=Math.hypot(s.x-e,s.z-t);o<i&&(i=o,n=s)}return n}findSpot(e,t,n){const i=this.game.map,[s,o]=i.worldToGrid(e,t);for(let a=3;a<26;a+=1)for(let c=0;c<16;c++){const l=c/16*Math.PI*2+a*.37,h=Math.round(s+Math.cos(l)*a)-Math.floor(n/2),u=Math.round(o+Math.sin(l)*a)-Math.floor(n/2);if(i.canPlace(h-1,u-1,n+2))return[h,u]}return null}}class lM{constructor(e,t){this.camera=e,this.map=t,this.target=new R(dt/2,0,dt/2),this.smoothTarget=this.target.clone(),this.dist=46,this.smoothDist=60,this.minDist=18,this.maxDist=95,this.pitch=.92,this.yaw=0,this.keys=new Set,this.mouseX=.5,this.mouseY=.5,this.edgePanEnabled=!0,window.addEventListener("keydown",n=>{n.target.tagName!=="INPUT"&&this.keys.add(n.code)}),window.addEventListener("keyup",n=>this.keys.delete(n.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("mousemove",n=>{this.mouseX=n.clientX/window.innerWidth,this.mouseY=n.clientY/window.innerHeight})}jumpTo(e,t){this.target.x=e,this.target.z=t}panBy(e,t){this.target.x+=e,this.target.z+=t}zoomBy(e,t){const n=this.dist;this.dist=Vr.clamp(this.dist*(e>0?1.13:.885),this.minDist,this.maxDist),e<0&&t&&this.dist<n&&this.target.lerp(new R(t.x,0,t.z),.18)}update(e){const t=(14+this.dist*.55)*e;let n=0,i=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(i-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(i+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(n-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(n+=1),this.edgePanEnabled&&document.hasFocus()&&(this.mouseX<.008&&(n-=1),this.mouseX>1-.008&&(n+=1),this.mouseY<.008&&(i-=1),this.mouseY>1-.008&&(i+=1)),n||i){const l=Math.hypot(n,i);this.target.x+=n/l*t,this.target.z+=i/l*t}const s=6;this.target.x=Vr.clamp(this.target.x,s,dt-s),this.target.z=Vr.clamp(this.target.z,s,dt-s),this.target.y=this.map.heightAt(this.target.x,this.target.z),this.smoothTarget.lerp(this.target,Math.min(1,e*9)),this.smoothDist+=(this.dist-this.smoothDist)*Math.min(1,e*7);const o=this.camera,a=Math.cos(this.pitch)*this.smoothDist,c=Math.sin(this.pitch)*this.smoothDist;o.position.set(this.smoothTarget.x+Math.sin(this.yaw)*a,this.smoothTarget.y+c,this.smoothTarget.z+Math.cos(this.yaw)*a),o.lookAt(this.smoothTarget)}}let xt=null,ti=null,vi=!1;const dh=new Map;function hM(){if(!xt)try{xt=new(window.AudioContext||window.webkitAudioContext),ti=xt.createGain(),ti.gain.value=.22,ti.connect(xt.destination)}catch{}}function uM(){return vi=!vi,ti&&(ti.gain.value=vi?0:.22),vi}function Au(){return xt?{ctx:xt,master:ti}:null}function dM(r,e,t,n,i=1){r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(i,e+t),r.gain.exponentialRampToValueAtTime(.001,e+t+n)}function bt(r,e,t="square",n=.5,i=0){if(!xt||vi)return;const s=xt.currentTime,o=xt.createOscillator(),a=xt.createGain();o.type=t,o.frequency.setValueAtTime(r,s),i&&o.frequency.exponentialRampToValueAtTime(Math.max(30,r+i),s+e),dM(a,s,.005,e,n),o.connect(a).connect(ti),o.start(s),o.stop(s+e+.05)}function pi(r,e=.4,t=1200){if(!xt||vi)return;const n=xt.currentTime,i=Math.ceil(xt.sampleRate*r),s=xt.createBuffer(1,i,xt.sampleRate),o=s.getChannelData(0);for(let h=0;h<i;h++)o[h]=(Math.random()*2-1)*(1-h/i);const a=xt.createBufferSource();a.buffer=s;const c=xt.createBiquadFilter();c.type="lowpass",c.frequency.value=t;const l=xt.createGain();l.gain.value=e,a.connect(c).connect(l).connect(ti),a.start(n)}const fM={select:()=>bt(620,.06,"sine",.3),command:()=>{bt(440,.05,"sine",.3),setTimeout(()=>bt(560,.05,"sine",.25),45)},place:()=>bt(330,.1,"triangle",.4),error:()=>bt(160,.18,"sawtooth",.25,-40),chop:()=>pi(.08,.3,900),hammer:()=>{pi(.05,.25,2500),bt(190,.05,"square",.12)},treefall:()=>pi(.4,.3,500),melee:()=>{pi(.07,.3,3500),bt(900+Math.random()*300,.05,"square",.1,-300)},arrow:()=>pi(.12,.18,4500),catapult:()=>{bt(90,.3,"sawtooth",.3,-30),pi(.25,.3,700)},die:()=>bt(220,.25,"sawtooth",.18,-120),collapse:()=>{pi(.7,.5,400),bt(70,.5,"sawtooth",.25,-30)},horn:()=>{bt(196,.55,"sawtooth",.3),setTimeout(()=>bt(196*1.25,.5,"sawtooth",.28),240)},ageup:()=>[262,330,392,523].forEach((r,e)=>setTimeout(()=>bt(r,.3,"triangle",.32),e*130)),built:()=>{bt(392,.1,"triangle",.3),setTimeout(()=>bt(523,.15,"triangle",.3),90)},ready:()=>bt(523,.09,"sine",.25),victory:()=>[262,330,392,523,659,784].forEach((r,e)=>setTimeout(()=>bt(r,e<5?.28:.9,"triangle",.34),e*150)),defeat:()=>[392,370,311,262,196].forEach((r,e)=>setTimeout(()=>bt(r,e<4?.42:1.2,"sawtooth",.2),e*320))};function ic(r){if(!xt||vi)return;const e=fM[r];if(!e)return;const t=performance.now(),n=dh.get(r)||0,i=r==="chop"||r==="hammer"||r==="melee"?90:140;t-n<i||(dh.set(r,t),e())}const fh=[[730,1090],[530,1840],[390,1990],[570,840],[440,1020]];let ph=0;function pM(r,e,t,n,i,s,o,a){const c=Math.floor(r.sampleRate*.025),l=r.createBuffer(1,c,r.sampleRate),h=l.getChannelData(0);for(let y=0;y<c;y++)h[y]=(Math.random()*2-1)*(1-y/c);const u=r.createBufferSource();u.buffer=l;const d=r.createBiquadFilter();d.type="bandpass",d.frequency.value=1200+Math.random()*1800;const f=r.createGain();f.gain.value=o*.5,u.connect(d).connect(f).connect(e),u.start(t-.02);const g=r.createOscillator();g.type="sawtooth",g.frequency.setValueAtTime(n*(.96+Math.random()*.08),t),g.frequency.linearRampToValueAtTime(n,t+s);const _=r.createOscillator();_.frequency.value=11+Math.random()*6;const m=r.createGain();m.gain.value=n*(a?.05:.02),_.connect(m).connect(g.frequency);const[p,v]=i,x=r.createGain();x.gain.value=0;for(const[y,C,b]of[[p,9,1],[v,11,.55],[2600,13,.18]]){const E=r.createBiquadFilter();E.type="bandpass",E.frequency.value=y*(.95+Math.random()*.1),E.Q.value=C;const I=r.createGain();I.gain.value=b,g.connect(E).connect(I).connect(x)}x.gain.setValueAtTime(0,t),x.gain.linearRampToValueAtTime(o,t+.03),x.gain.setValueAtTime(o,t+s-.045),x.gain.linearRampToValueAtTime(0,t+s),x.connect(e),g.start(t-.02),g.stop(t+s+.03),_.start(t-.02),_.stop(t+s+.03)}function Hs(r){const e=Au();if(!e)return;const{ctx:t,master:n}=e,i=performance.now();if(i<ph)return;const s=r[0]==="m",o=r.endsWith("Select"),a=s?96+Math.random()*14:126+Math.random()*22,c=2+(Math.random()*2|0)+(o&&!s?1:0),l=t.createGain();l.gain.value=s?1.5:1.3;const h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=s?2400:3200,l.connect(h).connect(n);let u=t.currentTime+.01;for(let d=0;d<c;d++){const f=d/Math.max(1,c-1),g=o?1+(f>.6?(f-.6)*.55:0):1.08-f*.18,_=.09+Math.random()*.08+(d===c-1?.06:0),m=.5+Math.random()*.2-f*(o?0:.12);pM(t,l,u,a*g,fh[Math.random()*fh.length|0],_,m,s),u+=_+.015+Math.random()*.025}ph=i+(u-t.currentTime)*1e3+120}class mM{constructor({canvas:e,game:t,rtsCam:n,camera:i,terrainMesh:s,onSelectionChange:o,sound:a}){this.canvas=e,this.game=t,this.rtsCam=n,this.camera=i,this.terrain=s,this.onSelectionChange=o,this.sound=a,this.selection=[],this.groups=new Map,this.raycaster=new uu,this.mouseNDC=new he,this.dragStart=null,this.dragging=!1,this.placing=null,this.idleVillIdx=0,this.boxEl=document.createElement("div"),this.boxEl.style.cssText="position:fixed;border:1.5px solid #7df58b;background:rgba(110,245,140,.12);pointer-events:none;display:none;z-index:20;",document.body.appendChild(this.boxEl),e.addEventListener("mousedown",c=>this.onMouseDown(c)),window.addEventListener("mousemove",c=>this.onMouseMove(c)),window.addEventListener("mouseup",c=>this.onMouseUp(c)),e.addEventListener("contextmenu",c=>c.preventDefault()),e.addEventListener("wheel",c=>{c.preventDefault();const l=this.groundPoint(c.clientX,c.clientY);this.rtsCam.zoomBy(c.deltaY,l)},{passive:!1}),window.addEventListener("keydown",c=>this.onKeyDown(c))}setRayFrom(e,t){this.mouseNDC.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),this.raycaster.setFromCamera(this.mouseNDC,this.camera)}groundPoint(e,t){this.setRayFrom(e,t);const n=this.raycaster.intersectObject(this.terrain,!1);return n.length?n[0].point:null}pick(e,t){this.setRayFrom(e,t);const n=this.game,i=[];for(const h of n.units)i.push(h.group);for(const h of n.buildings)i.push(h.group);for(const h of n.nodes)h.mesh&&i.push(h.mesh);const s=this.raycaster.intersectObjects(i,!0),o=this.raycaster.intersectObjects([n.trees.trunks,n.trees.pines,n.trees.oaks],!1),a=this.raycaster.intersectObject(this.terrain,!1);let c=null,l=1/0;if(s.length&&s[0].distance<l){l=s[0].distance;let h=s[0].object;for(;h&&!h.userData.entity&&!h.userData.node;)h=h.parent;h!=null&&h.userData.entity?c={entity:h.userData.entity}:h!=null&&h.userData.node?c={node:h.userData.node}:c=null}if(o.length&&o[0].distance<l){const h=n.treeNodeByInstance.get(o[0].instanceId);h&&!h.dead&&(c={node:h},l=o[0].distance)}return!c&&a.length?{point:a[0].point}:c&&a.length&&a[0].distance<l-.5?{point:a[0].point}:c||null}select(e,t=!1){if(!t){for(const n of this.selection)n.setSelected(!1);this.selection=[]}for(const n of e)!this.selection.includes(n)&&!n.dead&&(this.selection.push(n),n.setSelected(!0));this.pruneSelection(),this.onSelectionChange(this.selection)}pruneSelection(){this.selection=this.selection.filter(e=>!e.dead)}selectedUnits(e=!0){return this.pruneSelection(),this.selection.filter(t=>t.isUnit&&(!e||t.owner===Qe))}onMouseDown(e){if(e.button===0){if(this.placing){this.tryPlace(e.shiftKey);return}this.dragStart={x:e.clientX,y:e.clientY,shift:e.shiftKey},this.dragging=!1}else if(e.button===2){if(this.placing){this.cancelPlacement();return}this.issueContextCommand(e.clientX,e.clientY)}}onMouseMove(e){if(this.placing&&this.updateGhost(e.clientX,e.clientY),this.dragStart){const t=e.clientX-this.dragStart.x,n=e.clientY-this.dragStart.y;if(!this.dragging&&Math.hypot(t,n)>6&&(this.dragging=!0),this.dragging){const i=Math.min(e.clientX,this.dragStart.x),s=Math.min(e.clientY,this.dragStart.y);this.boxEl.style.display="block",this.boxEl.style.left=i+"px",this.boxEl.style.top=s+"px",this.boxEl.style.width=Math.abs(t)+"px",this.boxEl.style.height=Math.abs(n)+"px"}}}onMouseUp(e){if(e.button!==0||!this.dragStart)return;const t=this.dragStart;if(this.dragStart=null,this.boxEl.style.display="none",this.dragging){this.dragging=!1,this.boxSelect(t,{x:e.clientX,y:e.clientY},t.shift);return}const n=this.pick(e.clientX,e.clientY);n!=null&&n.entity?(this.select([n.entity],t.shift),this.selectFeedback([n.entity])):t.shift||this.select([])}boxSelect(e,t,n){const i=Math.min(e.x,t.x),s=Math.max(e.x,t.x),o=Math.min(e.y,t.y),a=Math.max(e.y,t.y),c=new R,l=[];for(const h of this.game.units){if(h.owner!==Qe||h.dead)continue;c.set(h.x,h.group.position.y+.8,h.z).project(this.camera);const u=(c.x+1)/2*window.innerWidth,d=(1-c.y)/2*window.innerHeight;u>=i&&u<=s&&d>=o&&d<=a&&c.z<1&&l.push(h)}if(l.length){const h=l.filter(u=>u.type!=="villager");this.select(h.length?h:l,n),this.selectFeedback(this.selection)}else n||this.select([])}selectFeedback(e){const t=e.filter(n=>n.owner===Qe);t.some(n=>n.isUnit&&n.type!=="villager")?Hs("mSelect"):t.some(n=>n.isUnit)?Hs("vSelect"):this.sound("select")}ackFeedback(e){e.some(t=>t.type!=="villager")?Hs("mAck"):e.length?Hs("vAck"):this.sound("command")}issueContextCommand(e,t){var a,c,l,h;const n=this.selection.filter(u=>!u.dead&&u.owner===Qe);if(!n.length)return;const i=this.pick(e,t);if(!i)return;const s=n.filter(u=>u.isUnit),o=n.filter(u=>u.isBuilding);if(!s.length&&o.length){for(const u of o)i.node?u.rally={node:i.node}:(a=i.entity)!=null&&a.isBuilding&&i.entity.def.isFarm&&i.entity.owner===Qe?u.rally={farm:i.entity}:i.point&&(u.rally={x:i.point.x,z:i.point.z});this.sound("command");return}if(s.length){if(i.entity){const u=i.entity;if(u.owner!==Qe){for(const d of s)d.orderAttack(u);this.ackFeedback(s)}else if(u.isBuilding&&!u.complete){for(const d of s)d.type==="villager"&&d.orderBuild(u);this.ackFeedback(s.filter(d=>d.type==="villager"))}else if(u.isBuilding&&u.def.isFarm){const d=s.filter(f=>f.type==="villager");d.length&&d[0].orderGatherFarm(u),this.ackFeedback(d)}else if(u.isBuilding&&u.def.dropoff){for(const d of s)d.type==="villager"&&((c=d.carry)==null?void 0:c.amt)>0?(d.order=((l=d.order)==null?void 0:l.kind)==="gather"||((h=d.order)==null?void 0:h.kind)==="farm"?d.order:{kind:"gather",node:null},d.goDeposit()):d.orderMove(u.cx,u.cz);this.ackFeedback(s)}else{for(const d of s)d.orderMove(u.isBuilding?u.cx:u.x,u.isBuilding?u.cz:u.z);this.ackFeedback(s)}return}if(i.node){const u=s.filter(f=>f.type==="villager"),d=s.filter(f=>f.type!=="villager");for(const f of u)f.orderGather(i.node);for(const f of d)f.orderMove(i.node.wx,i.node.wz);this.ackFeedback(s);return}i.point&&(this.moveFormation(s,i.point.x,i.point.z),this.ackFeedback(s))}}moveFormation(e,t,n){const i=e.length,s=Math.ceil(Math.sqrt(i)),o=1.7;e.forEach((a,c)=>{const l=Math.floor(c/s),u=(c%s-(s-1)/2)*o,d=(l-(Math.ceil(i/s)-1)/2)*o;a.orderMove(t+u,n+d)})}startPlacement(e){this.cancelPlacement();const t=ps[e],n=new hs({color:5111646,transparent:!0,opacity:.55,depthWrite:!1}),i=Tu(e,this.game.players[Qe].age,t.size)||fu[e](this.game.teamColor(Qe));i.traverse(s=>{s.isMesh&&(s.material=n,s.castShadow=!1)}),this.game.scene.add(i),this.placing={type:e,def:t,ghost:i,ghostMat:n,valid:!1,gx:0,gy:0}}updateGhost(e,t){const n=this.placing,i=this.groundPoint(e,t);if(!i){n.ghost.visible=!1;return}const s=this.game.map,o=Math.round(i.x/et-n.def.size/2),a=Math.round(i.z/et-n.def.size/2);n.gx=o,n.gy=a;const c=(o+n.def.size/2)*et,l=(a+n.def.size/2)*et;n.ghost.visible=!0,n.ghost.position.set(c,s.heightAt(c,l),l),n.valid=s.canPlace(o,a,n.def.size),n.ghostMat.color.setHex(n.valid?5111646:16728112)}tryPlace(e){const t=this.placing;if(!t||!t.valid){this.sound("error");return}const n=this.game.placeBuilding(Qe,t.type,t.gx,t.gy);if(!n){this.sound("error");return}const i=this.selectedUnits().filter(s=>s.type==="villager");for(const s of i)s.orderBuild(n);this.sound("place"),e?this.updateGhost(-1,-1):this.cancelPlacement()}cancelPlacement(){this.placing&&(this.game.scene.remove(this.placing.ghost),this.placing=null)}onKeyDown(e){if(e.code==="Escape"){this.placing?this.cancelPlacement():this.select([]);return}if(e.code.startsWith("Digit")){const t=e.code.slice(5);if(t==="0")return;if(e.ctrlKey||e.metaKey)e.preventDefault(),this.groups.set(t,[...this.selection]);else{const n=(this.groups.get(t)||[]).filter(i=>!i.dead);if(n.length){this.select(n);const i=n[0];e.repeat&&this.rtsCam.jumpTo(i.isBuilding?i.cx:i.x,i.isBuilding?i.cz:i.z)}}return}if(e.code==="KeyH"){const t=this.game.buildings.find(n=>n.owner===Qe&&n.type==="towncenter"&&!n.dead);t&&(this.rtsCam.jumpTo(t.cx,t.cz),this.select([t]));return}if(e.code==="Period"){const t=this.game.units.filter(n=>n.owner===Qe&&n.type==="villager"&&!n.dead&&n.state==="idle");if(t.length){this.idleVillIdx=(this.idleVillIdx+1)%t.length;const n=t[this.idleVillIdx];this.select([n]),this.rtsCam.jumpTo(n.x,n.z)}return}if(e.code==="KeyT")for(const t of this.selectedUnits())t.clearOrder()}}let st=null,jt=null,Ys=null,er=!1,bu=null,Gs=0,Eu=0;const gM=[0,2,3,5,7,9,10],_M=50,xM=[0,2,6,3,0,4,6,0],vM=[0,5,0,4,0,5,3,0];let Os=0,Xi=0,mi=7;const wu=r=>440*Math.pow(2,(r-69)/12),zr=(r,e=0)=>_M+12*(e+Math.floor(r/7))+gM[(r%7+7)%7],mh=new Map;function MM(r){let e=mh.get(r);if(e)return e;const t=st.sampleRate,n=wu(r),i=Math.max(2,Math.round(t/n)),o=Math.floor(t*1.6);e=st.createBuffer(1,o,t);const a=e.getChannelData(0),c=new Float32Array(i);for(let u=0;u<i;u++)c[u]=Math.random()*2-1;let l=0;const h=.995+Math.min(.0045,n/9e4);for(let u=0;u<o;u++){const d=c[l],f=c[(l+1)%i];c[l]=h*.5*(d+f),a[u]=d,l=(l+1)%i}return mh.set(r,e),e}function gh(r,e,t=.5){const n=st.createBufferSource();n.buffer=MM(r);const i=st.createGain();i.gain.value=t,n.connect(i),i.connect(jt),i.connect(Ys),n.start(e)}function _h(r,e,t,n=.4){const i=st.createOscillator();i.type="sine";const s=wu(r);i.frequency.setValueAtTime(s,e);const o=st.createOscillator();o.frequency.value=5.2;const a=st.createGain();a.gain.value=s*.008,o.connect(a).connect(i.frequency);const c=st.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(n,e+.08),c.gain.setValueAtTime(n,e+t-.12),c.gain.linearRampToValueAtTime(0,e+t),i.connect(c),c.connect(jt),c.connect(Ys),i.start(e),i.stop(e+t+.05),o.start(e),o.stop(e+t+.05)}function Bs(r,e,t=!0){if(e<=.01)return;const n=st.createOscillator();n.type="sine",n.frequency.setValueAtTime(t?110:180,r),n.frequency.exponentialRampToValueAtTime(t?48:80,r+.12);const i=st.createGain();i.gain.setValueAtTime(e,r),i.gain.exponentialRampToValueAtTime(.001,r+.22),n.connect(i).connect(jt),n.start(r),n.stop(r+.3);const s=Math.floor(st.sampleRate*.05),o=st.createBuffer(1,s,st.sampleRate),a=o.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);const c=st.createBufferSource();c.buffer=o;const l=st.createGain();l.gain.value=e*.5;const h=st.createBiquadFilter();h.type="bandpass",h.frequency.value=t?300:700,c.connect(h).connect(l).connect(jt),c.start(r)}function yM(){const r=st.sampleRate,t=Math.floor(r*1.9),n=st.createBuffer(2,t,r);for(let s=0;s<2;s++){const o=n.getChannelData(s);for(let a=0;a<t;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/t,2.4)}const i=st.createConvolver();return i.buffer=n,i}function SM(r){const e=Gs,n=60/(68+e*26),i=n*4,s=e>.5?vM:xM,o=s[Os%s.length],a=[o,o+2,o+4];Os%4===0&&(gh(zr(o,-1),r,.34),_h(zr(o,0),r+.02,i*.96,.05+e*.03));const c=[0,2,1,2,0,2,1,2];for(let l=0;l<8;l++){if(e<.4&&(Os+l)%7===3)continue;const u=a[c[l]]+(l===4&&Math.random()<.4?7:0),d=(l%4===0?.4:.22)*(.8+Math.random()*.35);gh(zr(u,1),r+l*n*.5,d)}if(Os%2===(e>.5?0:1)&&Math.random()<.85){let l=r+n*(Math.random()<.5?0:.5);const h=2+(Math.random()*3|0);for(let u=0;u<h&&l<r+i-.2;u++){const d=[-2,-1,-1,1,1,2][Math.random()*6|0];mi+=d,mi<5&&(mi+=4),mi>13&&(mi-=4),u===h-1&&(mi=a[Math.random()*3|0]+7);const f=n*(Math.random()<.3?1.5:.75);_h(zr(mi-7+(e>.5?0:7),1),l,f,.16+Math.random()*.07),l+=f+(Math.random()<.3?n*.5:0)}}return e>.06&&(Bs(r,.5*e,!0),Bs(r+n*1.5,.3*e,!1),Bs(r+n*2,.45*e,!0),e>.6&&Bs(r+n*3,.3*e,!1),e>.8&&Math.random()<.5&&Bs(r+n*3.5,.25*e,!1)),Os++,i}function TM(){if(!er)return;const r=performance.now()<Eu?1:0;for(Gs+=(r-Gs)*.06,Gs<.01&&(Gs=0);Xi<st.currentTime+.5;)Xi<st.currentTime&&(Xi=st.currentTime+.05),Xi+=SM(Xi)}function AM(){const r=Au();if(!r||er)return;st=r.ctx,jt=st.createGain(),jt.gain.value=.55,jt.connect(r.master);const e=yM();Ys=st.createGain(),Ys.gain.value=.35,Ys.connect(e),e.connect(jt),er=!0,Xi=st.currentTime+.1,bu=setInterval(TM,120)}function bM(r=1.5){if(er&&(er=!1,clearInterval(bu),jt)){const e=st.currentTime;jt.gain.setValueAtTime(jt.gain.value,e),jt.gain.linearRampToValueAtTime(1e-4,e+r)}}function Ru(){Eu=performance.now()+9e3}const EM={wood:"🪵",food:"🍖",gold:"🪙"};function ra(r){if(!r)return"";const e=[];for(const t of["wood","food","gold"])r[t]&&e.push(`${EM[t]}${r[t]}`);return e.join(" ")}class wM{constructor(e,t){this.game=e,this.input=t,this.selection=[],this.refreshT=0,this.el={wood:document.getElementById("res-wood"),food:document.getElementById("res-food"),gold:document.getElementById("res-gold"),pop:document.getElementById("res-pop"),age:document.getElementById("age-disp"),alerts:document.getElementById("alerts"),selTitle:document.getElementById("sel-title"),selSub:document.getElementById("sel-sub"),selCards:document.getElementById("sel-cards"),queueRow:document.getElementById("queue-row"),cmdPanel:document.getElementById("cmd-panel"),gameover:document.getElementById("gameover-overlay"),gameoverTitle:document.getElementById("gameover-title"),gameoverSub:document.getElementById("gameover-sub")},e.onAlert=(n,i)=>this.alert(n,i),e.onGameOver=n=>this.showGameOver(n)}alert(e,t=!1){const n=document.createElement("div");for(n.className="alert"+(t?" good":""),n.textContent=e,this.el.alerts.appendChild(n),setTimeout(()=>n.remove(),4200);this.el.alerts.children.length>4;)this.el.alerts.firstChild.remove()}showGameOver(e){bM(),ic(e?"victory":"defeat"),this.el.gameover.classList.remove("hidden"),this.el.gameoverTitle.textContent=e?"Victory!":"Defeat",this.el.gameoverTitle.className=e?"victory":"defeat",this.el.gameoverSub.textContent=e?"The enemy base lies in ruins. Your empire stands triumphant!":"Your base has been destroyed. The enemy empire prevails."}setSelection(e){this.selection=e,this.renderSelection()}update(e){const t=this.game.players[Qe];this.el.wood.textContent=Math.floor(t.res.wood),this.el.food.textContent=Math.floor(t.res.food),this.el.gold.textContent=Math.floor(t.res.gold),this.el.pop.textContent=`${t.popUsed}/${t.popCap}`,this.el.age.textContent=an[t.age-1].name+(t.ageResearchInProgress?" ⏳":""),this.refreshT-=e,this.refreshT<=0&&(this.refreshT=.3,this.renderSelection())}renderSelection(){var d;const e=this.selection.filter(f=>!f.dead),{selTitle:t,selSub:n,selCards:i,queueRow:s,cmdPanel:o}=this.el;if(i.innerHTML="",s.innerHTML="",o.innerHTML="",!e.length){t.textContent="No selection",n.textContent="Left-click or drag to select your units.";return}const a=e[0];if(e.length===1){const f=a.def;t.textContent=f.name+(a.owner!==Qe?" (enemy)":"");let g=`HP ${Math.ceil(a.hp)}/${a.maxHp}`;a.isBuilding&&!a.complete&&(g+=` — under construction ${Math.floor(a.progress*100)}%`),a.isUnit&&((d=a.carry)==null?void 0:d.amt)>0&&(g+=` — carrying ${Math.floor(a.carry.amt)} ${a.carry.res}`),a.isUnit&&f.atk&&(g+=` — ATK ${f.atk}`),n.textContent=g}else t.textContent=`${e.length} units selected`,n.textContent="";for(const f of e.slice(0,21)){const g=document.createElement("div");g.className="sel-card",g.innerHTML=`<span>${f.def.icon}</span><div class="hpbar"><div style="width:${Math.max(3,f.hp/f.maxHp*100)}%"></div></div>`,g.onclick=()=>this.input.select([f]),i.appendChild(g)}if(a.owner!==Qe)return;const c=e.filter(f=>f.isUnit),l=c.some(f=>f.type==="villager"),u=this.game.players[Qe];if(l)for(const f of J_){const g=ps[f],_=u.age<g.age,m=ei(u.res,g.cost),p=this.button(g.icon,g.name,`${g.name}<br>${ra(g.cost)}${_?`<br>Requires ${an[g.age-1].name}`:""}`,_||!m);!_&&m&&(p.onclick=()=>this.input.startPlacement(f)),o.appendChild(p)}if(c.length){const f=this.button("🛑","Stop (T)","Stop current order");f.onclick=()=>{for(const g of c)g.clearOrder()},o.appendChild(f)}if(e.length===1&&a.isBuilding&&a.complete){const f=a;if(f.def.trains)for(const g of f.def.trains){const _=Ln[g],m=u.age<_.age,p=ei(u.res,_.cost),v=this.button(_.icon,_.name,`Train ${_.name}<br>${ra(_.cost)}<br>HP ${_.hp} · ATK ${_.atk}${m?`<br>Requires ${an[_.age-1].name}`:""}`,m||!p);m||(v.onclick=()=>{f.queueTrain(g)?this.game.sound("command"):this.game.sound("error"),this.renderSelection()}),o.appendChild(v)}if(f.def.researchesAge&&u.age<an.length){const g=an[u.age],_=u.ageResearchInProgress,m=ei(u.res,g.cost),p=this.button("🏰","Advance",`Advance to ${g.name}<br>${ra(g.cost)}<br>${g.time}s`,_||!m);!_&&m&&(p.onclick=()=>{f.startAgeResearch()&&(this.game.sound("command"),this.renderSelection())}),o.appendChild(p)}if(f.researching){const g=document.createElement("div");g.className="q-item";const _=f.researching.t/f.researching.dur*100;g.innerHTML=`<div class="prog" style="width:${_}%"></div><span>🏰</span>`,s.appendChild(g)}if(f.trainQueue.forEach((g,_)=>{const m=document.createElement("div");m.className="q-item",m.title="Click to cancel";const p=_===0?f.trainT/Ln[g].trainTime*100:0;m.innerHTML=`<div class="prog" style="width:${p}%"></div><span>${Ln[g].icon}</span>`,m.onclick=()=>{f.cancelTrain(_),this.renderSelection()},s.appendChild(m)}),f.def.trains){const g=document.createElement("span");g.style.cssText="font-size:11px;color:#9c8f6e;margin-left:4px",g.textContent=f.trainQueue.length?"":"Right-click ground/resource to set rally",s.appendChild(g)}}}button(e,t,n,i=!1){const s=document.createElement("button");return s.className="cmd-btn"+(i?" disabled":""),s.innerHTML=`<span>${e}</span><span class="lbl">${t}</span><div class="tooltip">${n}</div>`,s}}class RM{constructor(e,t,n,i){this.canvas=e,this.ctx=e.getContext("2d"),this.game=t,this.rtsCam=n,this.camera=i,this.S=e.width,this.terrainLayer=document.createElement("canvas"),this.terrainLayer.width=this.S,this.terrainLayer.height=this.S,this.renderTerrain(),this.nodeT=0,this.nodeLayer=document.createElement("canvas"),this.nodeLayer.width=this.S,this.nodeLayer.height=this.S,this.renderNodes(),this.raycaster=new uu,this.groundPlane=new Kn(new R(0,1,0),0);const s=a=>{const c=e.getBoundingClientRect(),l=(a.clientX-c.left)/c.width*dt,h=(a.clientY-c.top)/c.height*dt;this.rtsCam.jumpTo(l,h)};let o=!1;e.addEventListener("mousedown",a=>{a.button===0&&(o=!0,s(a))}),window.addEventListener("mousemove",a=>{o&&s(a)}),window.addEventListener("mouseup",()=>{o=!1}),e.addEventListener("contextmenu",a=>a.preventDefault())}renderTerrain(){const e=this.terrainLayer.getContext("2d"),t=this.game.map,i=this.S/t.size;for(let s=0;s<t.size;s++)for(let o=0;o<t.size;o++){const a=t.tileHeight(o,s),c=t.moistureAt((o+.5)*et,(s+.5)*et);let l;if(a<=ms)l="#2d5e9e";else if(a<ms+.35)l="#b3a263";else if(a>2.6)l="#8d8a80";else{const h=120+c*45-a*8;l=`rgb(${78+a*6|0},${h|0},52)`}e.fillStyle=l,e.fillRect(o*i,s*i,i+1,i+1)}}renderNodes(){const e=this.nodeLayer.getContext("2d");e.clearRect(0,0,this.S,this.S);const t=this.S/dt;for(const n of this.game.nodes)n.dead||(e.fillStyle=n.type==="tree"?"#1e4d20":n.type==="gold"?"#e8b923":"#b03333",e.fillRect(n.wx*t-1.5,n.wz*t-1.5,3,3))}update(e){this.nodeT-=e,this.nodeT<=0&&(this.nodeT=3,this.renderNodes());const t=this.ctx,n=this.S;t.drawImage(this.terrainLayer,0,0),t.drawImage(this.nodeLayer,0,0);const i=n/dt;for(const a of this.game.buildings){if(a.dead)continue;t.fillStyle=a.owner===Qe?"#4d8df5":"#e8473a";const c=Math.max(3,a.size*et*i);t.fillRect(a.cx*i-c/2,a.cz*i-c/2,c,c)}for(const a of this.game.units)a.dead||(t.fillStyle=a.owner===Qe?"#7db8ff":"#ff7a6e",t.fillRect(a.x*i-1.5,a.z*i-1.5,3,3));t.strokeStyle="#f5f0dc",t.lineWidth=1.2,t.beginPath();const s=[[-1,-1],[1,-1],[1,1],[-1,1]];let o=!1;for(const[a,c]of s){const l=this.projectToGround(a,c);if(!l)continue;const h=Math.max(0,Math.min(n,l.x*i)),u=Math.max(0,Math.min(n,l.z*i));o?t.lineTo(h,u):(t.moveTo(h,u),o=!0)}t.closePath(),t.stroke()}projectToGround(e,t){this.raycaster.setFromCamera({x:e,y:t},this.camera);const n=new R;return this.raycaster.ray.intersectPlane(this.groundPlane,n)?n:null}}const Cu=document.getElementById("game-canvas"),{renderer:oa,scene:rr,camera:ho,updateSun:CM,composer:PM}=Tx(Cu),gn=new nx,uo=sx(gn),IM=ix(gn,uo),{ground:LM,waterNormalTex:DM}=$x(rr,gn),UM=new Jx(rr),wt=new rM(rr,gn,UM);wt.effects=new rv(rr,wt);wt.soundFn=ic;wt.onCombat=Ru;wt.createResourceNodes(IM);function Pu(r,[e,t]){let i=null;e:for(let o=0;o<12;o++)for(let a=-o;a<=o;a++)for(let c=-o;c<=o;c++){if(Math.max(Math.abs(c),Math.abs(a))!==o)continue;const l=e+c-Math.floor(4/2),h=t+a-Math.floor(4/2);if(gn.canPlace(l-1,h-1,6)){i=[l,h];break e}}i||(i=[e,t]);const s=wt.placeBuilding(r,"towncenter",i[0],i[1],!0);for(let o=0;o<4;o++){const a=Math.PI*.25+o*.45,c=s.cx+Math.cos(a)*7,l=s.cz+Math.sin(a)*7,[h,u]=gn.nearestWalkable(...gn.worldToGrid(c,l),6)||gn.worldToGrid(s.cx,s.cz+8),[d,f]=gn.gridToWorld(h,u);wt.spawnUnit("villager",r,d,f)}return s}const no=Pu(Qe,uo[0]);Pu(Qs,uo[1]);wt.recalcPop(Qe);wt.recalcPop(Qs);const[NM,FM]=uo[1];wt.ai=new cM(wt,NM,FM);tM();Qv(()=>{for(const r of wt.buildings)r.reskin()});Yv().then(r=>{if(r)for(const e of wt.units)e.adoptModel()});const Mi=new lM(ho,gn);Mi.jumpTo(no.cx,no.cz+6);Mi.smoothTarget.set(no.cx,0,no.cz+6);let tr;const OM=new mM({canvas:Cu,game:wt,rtsCam:Mi,camera:ho,terrainMesh:LM,onSelectionChange:r=>tr&&tr.setSelection(r),sound:ic});tr=new wM(wt,OM);const BM=new RM(document.getElementById("minimap"),wt,Mi,ho);document.getElementById("mute-btn").addEventListener("click",r=>{const e=uM();r.currentTarget.innerHTML=e?"&#128263;":"&#128266;"});let La=!1;const Iu=new hu;let aa=0,ca=!0,Hr=0,la=0;function Lu(){requestAnimationFrame(Lu);const r=Math.min(Iu.getDelta(),.05);La&&wt.update(r),Mi.update(r),CM(Mi.smoothTarget),tr.update(r),BM.update(r),aa+=r,DM.offset.set(aa*.012,aa*.009),La&&ca&&(la++,Hr+=r,Hr>5&&(la/Hr<28&&(ca=!1,oa.setPixelRatio(1),oa.setSize(window.innerWidth,window.innerHeight)),Hr=0,la=0)),ca?PM.render():oa.render(rr,ho)}Lu();document.getElementById("start-btn").addEventListener("click",()=>{hM(),AM(),document.getElementById("start-overlay").classList.add("hidden"),La=!0,Iu.getDelta(),tr.alert("Gather resources and build your empire. The enemy is preparing…",!0)});window.__game=wt;window.__rtsCam=Mi;window.__audio={voice:Hs,combatPulse:Ru};

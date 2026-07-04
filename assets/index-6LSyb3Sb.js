(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _c="165",Wd=0,$c=1,Xd=2,fu=1,pu=2,Vn=3,jn=0,Wt=1,an=2,Yn=0,ys=1,ec=2,Zc=3,Qc=4,qd=5,Bi=100,Yd=101,Kd=102,jd=103,$d=104,Zd=200,Qd=201,Jd=202,ef=203,tc=204,nc=205,tf=206,nf=207,sf=208,rf=209,of=210,af=211,cf=212,lf=213,hf=214,uf=0,df=1,ff=2,Co=3,pf=4,mf=5,gf=6,_f=7,xc=0,xf=1,vf=2,pi=0,mu=1,gu=2,_u=3,vc=4,Mf=5,xu=6,vu=7,Jc="attached",yf="detached",Mu=300,Es=301,Rs=302,ic=303,sc=304,Go=306,$n=1e3,di=1001,Po=1002,Gt=1003,yu=1004,hr=1005,Ht=1006,So=1007,Xn=1008,xi=1009,Sf=1010,bf=1011,Io=1012,Su=1013,Cs=1014,Tn=1015,Kn=1016,bu=1017,wu=1018,Ps=1020,wf=35902,Tf=1021,Af=1022,gn=1023,Ef=1024,Rf=1025,Ss=1026,Is=1027,Tu=1028,Au=1029,Cf=1030,Eu=1031,Ru=1033,ia=33776,sa=33777,ra=33778,oa=33779,el=35840,tl=35841,nl=35842,il=35843,sl=36196,rl=37492,ol=37496,al=37808,cl=37809,ll=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,_l=37818,xl=37819,vl=37820,Ml=37821,aa=36492,yl=36494,Sl=36495,Pf=36283,bl=36284,wl=36285,Tl=36286,Cu=2200,If=2201,Lf=2202,vr=2300,Mr=2301,ca=2302,gs=2400,_s=2401,Lo=2402,Mc=2500,Df=2501,Nf=0,Pu=1,rc=2,Uf=3200,Ff=3201,yc=0,Bf=1,ui="",Ct="srgb",It="srgb-linear",Sc="display-p3",Vo="display-p3-linear",Do="linear",ct="srgb",No="rec709",Uo="p3",Yi=7680,Al=519,Of=512,kf=513,zf=514,Iu=515,Hf=516,Gf=517,Vf=518,Wf=519,oc=35044,El="300 es",qn=2e3,Fo=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rl=1234567;const mr=Math.PI/180,Ls=180/Math.PI;function vn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Nt(r,e,t){return Math.max(e,Math.min(t,r))}function bc(r,e){return(r%e+e)%e}function Xf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function qf(r,e,t){return r!==e?(t-r)/(e-r):0}function gr(r,e,t){return(1-t)*r+t*e}function Yf(r,e,t,n){return gr(r,e,1-Math.exp(-t*n))}function Kf(r,e=1){return e-Math.abs(bc(r,e*2)-e)}function jf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function $f(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Zf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Qf(r,e){return r+Math.random()*(e-r)}function Jf(r){return r*(.5-Math.random())}function ep(r){r!==void 0&&(Rl=r);let e=Rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tp(r){return r*mr}function np(r){return r*Ls}function ip(r){return(r&r-1)===0&&r!==0}function sp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function op(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function nt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const _r={DEG2RAD:mr,RAD2DEG:Ls,generateUUID:vn,clamp:Nt,euclideanModulo:bc,mapLinear:Xf,inverseLerp:qf,lerp:gr,damp:Yf,pingpong:Kf,smoothstep:jf,smootherstep:$f,randInt:Zf,randFloat:Qf,randFloatSpread:Jf,seededRandom:ep,degToRad:tp,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:rp,setQuaternionFromProperEuler:op,normalize:nt,denormalize:pn};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,s,o,a,c,l){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],S=i[7],C=i[2],A=i[5],T=i[8];return s[0]=o*_+a*v+c*C,s[3]=o*m+a*x+c*A,s[6]=o*p+a*S+c*T,s[1]=l*_+h*v+u*C,s[4]=l*m+h*x+u*A,s[7]=l*p+h*S+u*T,s[2]=d*_+f*v+g*C,s[5]=d*m+f*x+g*A,s[8]=d*p+f*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Ue;function Lu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ap(){const r=yr("canvas");return r.style.display="block",r}const Cl={};function wc(r){r in Cl||(Cl[r]=!0,console.warn(r))}function cp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Pl=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Il=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fr={[It]:{transfer:Do,primaries:No,toReference:r=>r,fromReference:r=>r},[Ct]:{transfer:ct,primaries:No,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Vo]:{transfer:Do,primaries:Uo,toReference:r=>r.applyMatrix3(Il),fromReference:r=>r.applyMatrix3(Pl)},[Sc]:{transfer:ct,primaries:Uo,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Il),fromReference:r=>r.applyMatrix3(Pl).convertLinearToSRGB()}},lp=new Set([It,Vo]),Ze={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!lp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Fr[e].toReference,i=Fr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Fr[r].primaries},getTransfer:function(r){return r===ui?Do:Fr[r].transfer}};function bs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ha(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ki;class hp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ki===void 0&&(Ki=yr("canvas")),Ki.width=e.width,Ki.height=e.height;const n=Ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=bs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bs(t[n]/255)*255):t[n]=bs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let up=0;class Du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ua(i[o].image)):s.push(ua(i[o]))}else s=ua(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ua(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dp=0;class yt extends Xi{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=di,i=di,s=Ht,o=Xn,a=gn,c=xi,l=yt.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=vn(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Mu;yt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,i=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,S=(f+1)/2,C=(p+1)/2,A=(h+d)/4,T=(u+_)/4,P=(g+m)/4;return x>S&&x>C?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=T/n):S>C?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=A/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=P/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fp extends Xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends fp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nu extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pp extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ft{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,p*v);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const S=a*v;if(c=c*m+d*S,l=l*m+f*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new E,Ll=new Ft;class Mn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Or.subVectors(this.max,Ks),ji.subVectors(e.a,Ks),$i.subVectors(e.b,Ks),Zi.subVectors(e.c,Ks),ni.subVectors($i,ji),ii.subVectors(Zi,$i),Ai.subVectors(ji,Zi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ai.z,Ai.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ai.z,0,-Ai.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ai.y,Ai.x,0];return!fa(t,ji,$i,Zi,Or)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,ji,$i,Zi,Or))?!1:(kr.crossVectors(ni,ii),t=[kr.x,kr.y,kr.z],fa(t,ji,$i,Zi,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new E,new E,new E,new E,new E,new E,new E,new E],hn=new E,Br=new Mn,ji=new E,$i=new E,Zi=new E,ni=new E,ii=new E,Ai=new E,Ks=new E,Or=new E,kr=new E,Ei=new E;function fa(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ei.fromArray(r,s);const a=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mp=new Mn,js=new E,pa=new E;class Ln{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(pa)),this.expandByPoint(js.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new E,ma=new E,zr=new E,si=new E,ga=new E,Hr=new E,_a=new E;class Cr{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ma.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ma);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zr),a=si.dot(this.direction),c=-si.dot(zr),l=si.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ma).addScaledVector(zr,d),f}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,i,s){ga.subVectors(t,e),Hr.subVectors(n,e),_a.crossVectors(ga,Hr);let o=this.direction.dot(_a),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,e);const c=a*this.direction.dot(Hr.crossVectors(si,Hr));if(c<0)return null;const l=a*this.direction.dot(ga.cross(si));if(l<0||c+l>o)return null;const h=-a*si.dot(_a);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gp,e,_p)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ri.crossVectors(n,Qt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ri.crossVectors(n,Qt)),ri.normalize(),Gr.crossVectors(Qt,ri),i[0]=ri.x,i[4]=Gr.x,i[8]=Qt.x,i[1]=ri.y,i[5]=Gr.y,i[9]=Qt.y,i[2]=ri.z,i[6]=Gr.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],S=n[11],C=n[15],A=i[0],T=i[4],P=i[8],M=i[12],y=i[1],I=i[5],B=i[9],k=i[13],H=i[2],q=i[6],G=i[10],Z=i[14],V=i[3],fe=i[7],_e=i[11],ve=i[15];return s[0]=o*A+a*y+c*H+l*V,s[4]=o*T+a*I+c*q+l*fe,s[8]=o*P+a*B+c*G+l*_e,s[12]=o*M+a*k+c*Z+l*ve,s[1]=h*A+u*y+d*H+f*V,s[5]=h*T+u*I+d*q+f*fe,s[9]=h*P+u*B+d*G+f*_e,s[13]=h*M+u*k+d*Z+f*ve,s[2]=g*A+_*y+m*H+p*V,s[6]=g*T+_*I+m*q+p*fe,s[10]=g*P+_*B+m*G+p*_e,s[14]=g*M+_*k+m*Z+p*ve,s[3]=v*A+x*y+S*H+C*V,s[7]=v*T+x*I+S*q+C*fe,s[11]=v*P+x*B+S*G+C*_e,s[15]=v*M+x*k+S*Z+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,S=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,C=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,A=t*v+n*x+i*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*p+n*c*p)*T,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*T,e[4]=x*T,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(g*c*s-o*m*s-g*i*l+t*m*l+o*i*p-t*c*p)*T,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*T,e[8]=S*T,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*T,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*T,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*T,e[12]=C*T,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*T,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*T,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,v=c*l,x=c*h,S=c*u,C=n.x,A=n.y,T=n.z;return i[0]=(1-(_+p))*C,i[1]=(f+S)*C,i[2]=(g-x)*C,i[3]=0,i[4]=(f-S)*A,i[5]=(1-(d+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+x)*T,i[9]=(m-v)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Qi.set(i[0],i[1],i[2]).length();const o=Qi.set(i[4],i[5],i[6]).length(),a=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const l=1/s,h=1/o,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=qn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===qn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Fo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=qn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(a===qn)g=(o+s)*u,_=-2*u;else if(a===Fo)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new E,un=new Te,gp=new E(0,0,0),_p=new E(1,1,1),ri=new E,Gr=new E,Qt=new E,Dl=new Te,Nl=new Ft;class jt{constructor(e=0,t=0,n=0,i=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xp=0;const Ul=new E,Ji=new Ft,kn=new Te,Vr=new E,$s=new E,vp=new E,Mp=new Ft,Fl=new E(1,0,0),Bl=new E(0,1,0),Ol=new E(0,0,1),kl={type:"added"},yp={type:"removed"},es={type:"childadded",child:null},xa={type:"childremoved",child:null};class ut extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new E,t=new jt,n=new Ft,i=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ue}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt($s,Vr,this.up):kn.lookAt(Vr,$s,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(kn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yp),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,vp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new E(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new E,zn=new E,va=new E,Hn=new E,ts=new E,ns=new E,zl=new E,Ma=new E,ya=new E,Sa=new E;class mn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){dn.subVectors(i,t),zn.subVectors(n,t),va.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(zn),c=dn.dot(va),l=zn.dot(zn),h=zn.dot(va),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),zn.subVectors(e,t),dn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),dn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(s,n),Ma.subVectors(e,n);const c=ts.dot(Ma),l=ns.dot(Ma);if(c<=0&&l<=0)return t.copy(n);ya.subVectors(e,i);const h=ts.dot(ya),u=ns.dot(ya);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ts,o);Sa.subVectors(e,s);const f=ts.dot(Sa),g=ns.dot(Sa);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ns,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return zl.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(zl,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function ba(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class he{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=bc(e,1),t=Nt(t,0,1),n=Nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ba(o,s,e+1/3),this.g=ba(o,s,e),this.b=ba(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=Uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ze.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Nt(Dt.r*255,0,255))*65536+Math.round(Nt(Dt.g*255,0,255))*256+Math.round(Nt(Dt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,s=Dt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Ct){Ze.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Wr);const n=gr(oi.h,Wr.h,t),i=gr(oi.s,Wr.s,t),s=gr(oi.l,Wr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new he;he.NAMES=Uu;let Sp=0;class ln extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=ys,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tc&&(n.blendSrc=this.blendSrc),this.blendDst!==nc&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pt extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new E,Xr=new ue;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}}class Fu extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bu extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bp=0;const sn=new Te,wa=new ut,is=new E,Jt=new Mn,Zs=new Mn,Et=new E;class St extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Bu:Fu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Jt.min,Zs.min),Jt.expandByPoint(Et),Et.addVectors(Jt.max,Zs.max),Jt.expandByPoint(Et)):(Jt.expandByPoint(Zs.min),Jt.expandByPoint(Zs.max))}Jt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Et.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(e,l),Et.add(is)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new E,c[P]=new E;const l=new E,h=new E,u=new E,d=new ue,f=new ue,g=new ue,_=new E,m=new E;function p(P,M,y){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[P].add(_),a[M].add(_),a[y].add(_),c[P].add(m),c[M].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){const y=v[P],I=y.start,B=y.count;for(let k=I,H=I+B;k<H;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new E,S=new E,C=new E,A=new E;function T(P){C.fromBufferAttribute(i,P),A.copy(C);const M=a[P];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(A,M);const I=S.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,I)}for(let P=0,M=v.length;P<M;++P){const y=v[P],I=y.start,B=y.count;for(let k=I,H=I+B;k<H;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new E,s=new E,o=new E,a=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Mt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new Te,Ri=new Cr,qr=new Ln,Gl=new E,ss=new E,rs=new E,os=new E,Ta=new E,Yr=new E,Kr=new ue,jr=new ue,$r=new ue,Vl=new E,Wl=new E,Xl=new E,Zr=new E,Qr=new E;class ze extends ut{constructor(e=new St,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Ta.fromBufferAttribute(u,e),o?Yr.addScaledVector(Ta,h):Yr.addScaledVector(Ta.sub(t),h))}t.add(Yr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),!(qr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(qr,Gl)===null||Ri.origin.distanceToSquared(Gl)>(e.far-e.near)**2))&&(Hl.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=x;S<C;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);i=Jr(this,p,e,n,l,h,u,A,T,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);i=Jr(this,o,e,n,l,h,u,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,C=x;S<C;S+=3){const A=S,T=S+1,P=S+2;i=Jr(this,p,e,n,l,h,u,A,T,P),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,S=m+2;i=Jr(this,o,e,n,l,h,u,v,x,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function wp(r,e,t,n,i,s,o,a){let c;if(e.side===Wt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===jn,a),c===null)return null;Qr.copy(a),Qr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Qr);return l<t.near||l>t.far?null:{distance:l,point:Qr.clone(),object:r}}function Jr(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,ss),r.getVertexPosition(c,rs),r.getVertexPosition(l,os);const h=wp(r,e,t,n,ss,rs,os,Zr);if(h){i&&(Kr.fromBufferAttribute(i,a),jr.fromBufferAttribute(i,c),$r.fromBufferAttribute(i,l),h.uv=mn.getInterpolation(Zr,ss,rs,os,Kr,jr,$r,new ue)),s&&(Kr.fromBufferAttribute(s,a),jr.fromBufferAttribute(s,c),$r.fromBufferAttribute(s,l),h.uv1=mn.getInterpolation(Zr,ss,rs,os,Kr,jr,$r,new ue)),o&&(Vl.fromBufferAttribute(o,a),Wl.fromBufferAttribute(o,c),Xl.fromBufferAttribute(o,l),h.normal=mn.getInterpolation(Zr,ss,rs,os,Vl,Wl,Xl,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new E,materialIndex:0};mn.getNormal(ss,rs,os,u.normal),h.face=u}return h}class ei extends St{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(_,m,p,v,x,S,C,A,T,P,M){const y=S/T,I=C/P,B=S/2,k=C/2,H=A/2,q=T+1,G=P+1;let Z=0,V=0;const fe=new E;for(let _e=0;_e<G;_e++){const ve=_e*I-k;for(let Ye=0;Ye<q;Ye++){const it=Ye*y-B;fe[_]=it*v,fe[m]=ve*x,fe[p]=H,l.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[p]=A>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ye/T),u.push(1-_e/P),Z+=1}}for(let _e=0;_e<P;_e++)for(let ve=0;ve<T;ve++){const Ye=d+ve+q*_e,it=d+ve+q*(_e+1),X=d+(ve+1)+q*(_e+1),Q=d+(ve+1)+q*_e;c.push(Ye,it,Q),c.push(it,X,Q),V+=6}a.addGroup(f,V,M),f+=V,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(r){const e={};for(let t=0;t<r.length;t++){const n=Ds(r[t]);for(const i in n)e[i]=n[i]}return e}function Tp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ou(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Sr={clone:Ds,merge:kt};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ku extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new E,ql=new ue,Yl=new ue;class zt extends ku{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,ql,Yl),t.subVectors(Yl,ql)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const as=-90,cs=1;class Rp extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(as,cs,e,t);i.layers=this.layers,this.add(i);const s=new zt(as,cs,e,t);s.layers=this.layers,this.add(s);const o=new zt(as,cs,e,t);o.layers=this.layers,this.add(o);const a=new zt(as,cs,e,t);a.layers=this.layers,this.add(a);const c=new zt(as,cs,e,t);c.layers=this.layers,this.add(c);const l=new zt(as,cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zu extends yt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cp extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ei(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Yn});s.uniforms.tEquirect.value=t;const o=new ze(i,s),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Ht),new Rp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Aa=new E,Pp=new E,Ip=new Ue;class hi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Aa.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ip.getNormalMatrix(e),i=this.coplanarPoint(Aa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Ln,eo=new E;class Ac{constructor(e=new hi,t=new hi,n=new hi,i=new hi,s=new hi,o=new hi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],x=i[14],S=i[15];if(n[0].setComponents(c-s,d-l,m-f,S-p).normalize(),n[1].setComponents(c+s,d+l,m+f,S+p).normalize(),n[2].setComponents(c+o,d+h,m+g,S+v).normalize(),n[3].setComponents(c-o,d-h,m-g,S-v).normalize(),n[4].setComponents(c-a,d-u,m-_,S-x).normalize(),t===qn)n[5].setComponents(c+a,d+u,m+_,S+x).normalize();else if(t===Fo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(eo.x=i.normal.x>0?e.max.x:e.min.x,eo.y=i.normal.y>0?e.max.y:e.min.y,eo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Lp(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(r.bindBuffer(l,a),u.count===-1&&d.length===0&&r.bufferSubData(l,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class In extends St{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*d-o;for(let x=0;x<l;x++){const S=x*u-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const x=v+l*p,S=v+l*(p+1),C=v+1+l*(p+1),A=v+1+l*p;f.push(x,S,A),f.push(S,C,A)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
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
#endif`,Up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kp=`#ifdef USE_AOMAP
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
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`
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
}`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
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
}`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
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
#endif`,Im=`struct PhysicalMaterial {
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
}`,Lm=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gm=`#if defined( USE_POINTS_UV )
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
#endif`,Vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
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
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_g=`float getShadowMask() {
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
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yg=`#ifdef USE_SKINNING
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
#endif`,Sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`#include <common>
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
}`,kg=`#if DEPTH_PACKING == 3200
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
}`,zg=`#define DISTANCE
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
}`,Hg=`#define DISTANCE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Kg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,Zg=`#define MATCAP
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
}`,Qg=`#define NORMAL
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
}`,Jg=`#define NORMAL
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
}`,e0=`#define PHONG
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
}`,t0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,r0=`#define TOON
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
}`,o0=`uniform float size;
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
}`,a0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,l0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Dp,alphahash_pars_fragment:Np,alphamap_fragment:Up,alphamap_pars_fragment:Fp,alphatest_fragment:Bp,alphatest_pars_fragment:Op,aomap_fragment:kp,aomap_pars_fragment:zp,batching_pars_vertex:Hp,batching_vertex:Gp,begin_vertex:Vp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Zp,color_fragment:Qp,color_pars_fragment:Jp,color_pars_vertex:em,color_vertex:tm,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:cm,colorspace_fragment:lm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Tm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:_m,fog_fragment:xm,fog_pars_fragment:vm,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:ym,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:bm,lights_pars_begin:wm,lights_toon_fragment:Am,lights_toon_pars_fragment:Em,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Im,lights_fragment_begin:Lm,lights_fragment_maps:Dm,lights_fragment_end:Nm,logdepthbuf_fragment:Um,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:Om,map_fragment:km,map_pars_fragment:zm,map_particle_fragment:Hm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Vm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:Km,morphtarget_vertex:jm,normal_fragment_begin:$m,normal_fragment_maps:Zm,normal_pars_fragment:Qm,normal_pars_vertex:Jm,normal_vertex:eg,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:cg,project_vertex:lg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:dg,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:_g,skinbase_vertex:xg,skinning_pars_vertex:vg,skinning_vertex:Mg,skinnormal_vertex:yg,specularmap_fragment:Sg,specularmap_pars_fragment:bg,tonemapping_fragment:wg,tonemapping_pars_fragment:Tg,transmission_fragment:Ag,transmission_pars_fragment:Eg,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Pg,worldpos_vertex:Ig,background_vert:Lg,background_frag:Dg,backgroundCube_vert:Ng,backgroundCube_frag:Ug,cube_vert:Fg,cube_frag:Bg,depth_vert:Og,depth_frag:kg,distanceRGBA_vert:zg,distanceRGBA_frag:Hg,equirect_vert:Gg,equirect_frag:Vg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:qg,meshbasic_frag:Yg,meshlambert_vert:Kg,meshlambert_frag:jg,meshmatcap_vert:$g,meshmatcap_frag:Zg,meshnormal_vert:Qg,meshnormal_frag:Jg,meshphong_vert:e0,meshphong_frag:t0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:o0,points_frag:a0,shadow_vert:c0,shadow_frag:l0,sprite_vert:h0,sprite_frag:u0},ie={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},wn={basic:{uniforms:kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new he(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:kt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:kt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:kt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new he(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:kt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:kt([ie.points,ie.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:kt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:kt([ie.common,ie.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:kt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:kt([ie.sprite,ie.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:kt([ie.common,ie.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:kt([ie.lights,ie.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};wn.physical={uniforms:kt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const to={r:0,b:0,g:0},Pi=new jt,d0=new Te;function f0(r,e,t,n,i,s,o){const a=new he(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const S=g(v);S===null?p(a,c):S&&S.isColor&&(p(S,1),x=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Go)?(h===void 0&&(h=new ze(new ei(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Ds(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Pi.copy(x.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(Pi)),h.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ct,(u!==S||d!==S.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ze(new In(2,2),new Vt({name:"BackgroundMaterial",uniforms:Ds(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(S.colorSpace)!==ct,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,x){v.getRGB(to,Ou(r)),n.buffers.color.setClear(to.r,to.g,to.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function p0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(y,I,B,k,H){let q=!1;const G=u(k,B,I);s!==G&&(s=G,l(s.object)),q=f(y,k,B,H),q&&g(y,k,B,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,S(y,I,B,k),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return r.createVertexArray()}function l(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,I,B){const k=B.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let q=H[I.id];q===void 0&&(q={},H[I.id]=q);let G=q[k];return G===void 0&&(G=d(c()),q[k]=G),G}function d(y){const I=[],B=[],k=[];for(let H=0;H<t;H++)I[H]=0,B[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,I,B,k){const H=s.attributes,q=I.attributes;let G=0;const Z=B.getAttributes();for(const V in Z)if(Z[V].location>=0){const _e=H[V];let ve=q[V];if(ve===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor)),_e===void 0||_e.attribute!==ve||ve&&_e.data!==ve.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function g(y,I,B,k){const H={},q=I.attributes;let G=0;const Z=B.getAttributes();for(const V in Z)if(Z[V].location>=0){let _e=q[V];_e===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor));const ve={};ve.attribute=_e,_e&&_e.data&&(ve.data=_e.data),H[V]=ve,G++}s.attributes=H,s.attributesNum=G,s.index=k}function _(){const y=s.newAttributes;for(let I=0,B=y.length;I<B;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const B=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;B[y]=1,k[y]===0&&(r.enableVertexAttribArray(y),k[y]=1),H[y]!==I&&(r.vertexAttribDivisor(y,I),H[y]=I)}function v(){const y=s.newAttributes,I=s.enabledAttributes;for(let B=0,k=I.length;B<k;B++)I[B]!==y[B]&&(r.disableVertexAttribArray(B),I[B]=0)}function x(y,I,B,k,H,q,G){G===!0?r.vertexAttribIPointer(y,I,B,H,q):r.vertexAttribPointer(y,I,B,k,H,q)}function S(y,I,B,k){_();const H=k.attributes,q=B.getAttributes(),G=I.defaultAttributeValues;for(const Z in q){const V=q[Z];if(V.location>=0){let fe=H[Z];if(fe===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),fe!==void 0){const _e=fe.normalized,ve=fe.itemSize,Ye=e.get(fe);if(Ye===void 0)continue;const it=Ye.buffer,X=Ye.type,Q=Ye.bytesPerElement,me=X===r.INT||X===r.UNSIGNED_INT||fe.gpuType===Su;if(fe.isInterleavedBufferAttribute){const oe=fe.data,He=oe.stride,Fe=fe.offset;if(oe.isInstancedInterleavedBuffer){for(let je=0;je<V.locationSize;je++)p(V.location+je,oe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let je=0;je<V.locationSize;je++)m(V.location+je);r.bindBuffer(r.ARRAY_BUFFER,it);for(let je=0;je<V.locationSize;je++)x(V.location+je,ve/V.locationSize,X,_e,He*Q,(Fe+ve/V.locationSize*je)*Q,me)}else{if(fe.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe,fe.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let oe=0;oe<V.locationSize;oe++)m(V.location+oe);r.bindBuffer(r.ARRAY_BUFFER,it);for(let oe=0;oe<V.locationSize;oe++)x(V.location+oe,ve/V.locationSize,X,_e,ve*Q,ve/V.locationSize*oe*Q,me)}}else if(G!==void 0){const _e=G[Z];if(_e!==void 0)switch(_e.length){case 2:r.vertexAttrib2fv(V.location,_e);break;case 3:r.vertexAttrib3fv(V.location,_e);break;case 4:r.vertexAttrib4fv(V.location,_e);break;default:r.vertexAttrib1fv(V.location,_e)}}}}v()}function C(){P();for(const y in n){const I=n[y];for(const B in I){const k=I[B];for(const H in k)h(k[H].object),delete k[H];delete I[B]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const I=n[y.id];for(const B in I){const k=I[B];for(const H in k)h(k[H].object),delete k[H];delete I[B]}delete n[y.id]}function T(y){for(const I in n){const B=n[I];if(B[y.id]===void 0)continue;const k=B[y.id];for(const H in k)h(k[H].object),delete k[H];delete B[y.id]}}function P(){M(),o=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function m0(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function g0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==gn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const T=A===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==xi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!T)}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:S,maxSamples:C}}function _0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new hi,a=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const v=s?0:n,x=v*4;let S=p.clippingState||null;c.value=S,S=h(g,d,x,f);for(let C=0;C!==x;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,S=f;x!==_;++x,S+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function x0(r){let e=new WeakMap;function t(o,a){return a===ic?o.mapping=Es:a===sc&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ic||a===sc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Cp(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Wo extends ku{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,Kl=[.125,.215,.35,.446,.526,.582],Oi=20,Ea=new Wo,jl=new he;let Ra=null,Ca=0,Pa=0,Ia=!1;const Fi=(1+Math.sqrt(5))/2,ls=1/Fi,$l=[new E(-Fi,ls,0),new E(Fi,ls,0),new E(-ls,0,Fi),new E(ls,0,Fi),new E(0,Fi,-ls),new E(0,Fi,ls),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ra,Ca,Pa),this._renderer.xr.enabled=Ia,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ra=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Kn,format:gn,colorSpace:It,depthBuffer:!1},i=Ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ql(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v0(s)),this._blurMaterial=M0(s,e,t)}return i}_compileMaterial(e){const t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,i){const a=new zt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jl),h.toneMapping=pi,h.autoClear=!1;const f=new Pt({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new ze(new ei,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(jl),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;no(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Es||e.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;no(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$l[(i-s-1)%$l.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ze(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let v=0;for(let T=0;T<Oi;++T){const P=T/_,M=Math.exp(-P*P/2);p.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const S=this._sizeLods[i],C=3*S*(i>x-xs?i-x+xs:0),A=4*(this._cubeSize-S);no(t,C,A,3*S,2*S),c.setRenderTarget(t),c.render(u,Ea)}}function v0(r){const e=[],t=[],n=[];let i=r;const s=r-xs+1+Kl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-xs?c=Kl[o-r+xs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),x=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,P=A>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(M,_*g*A),x.set(d,m*g*A);const y=[A,A,A,A,A,A];S.set(y,p*g*A)}const C=new St;C.setAttribute("position",new Mt(v,_)),C.setAttribute("uv",new Mt(x,m)),C.setAttribute("faceIndex",new Mt(S,p)),e.push(C),i>xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ql(r,e,t){const n=new cn(r,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function M0(r,e,t){const n=new Float32Array(Oi),i=new E(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Jl(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function eh(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function y0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ic||c===sc,h=c===Es||c===Rs;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Zl(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Zl(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function S0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&wc("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function b0(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],A=v[x+1],T=v[x+2];d.push(C,A,A,T,T,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,A=x+1,T=x+2;d.push(C,A,A,T,T,C)}}else return;const m=new(Lu(d)?Bu:Fu)(d,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function w0(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(d[m]/o,f[m]);else{_.multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v];for(let v=0;v<_.length;v++)t.update(p,n,_[v])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function T0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function A0(r,e,t){const n=new WeakMap,i=new at;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let S=a.attributes.position.count*x,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*C*4*u),T=new Nu(A,S,C,u);T.type=Tn,T.needsUpdate=!0;const P=x*4;for(let y=0;y<u;y++){const I=m[y],B=p[y],k=v[y],H=S*C*4*y;for(let q=0;q<I.count;q++){const G=q*P;f===!0&&(i.fromBufferAttribute(I,q),A[H+G+0]=i.x,A[H+G+1]=i.y,A[H+G+2]=i.z,A[H+G+3]=0),g===!0&&(i.fromBufferAttribute(B,q),A[H+G+4]=i.x,A[H+G+5]=i.y,A[H+G+6]=i.z,A[H+G+7]=0),_===!0&&(i.fromBufferAttribute(k,q),A[H+G+8]=i.x,A[H+G+9]=i.y,A[H+G+10]=i.z,A[H+G+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new ue(S,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function E0(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Gu extends yt{constructor(e,t,n,i,s,o,a,c,l,h=Ss){if(h!==Ss&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Cs),n===void 0&&h===Is&&(n=Ps),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vu=new yt,Wu=new Gu(1,1);Wu.compareFunction=Iu;const Xu=new Nu,qu=new pp,Yu=new zu,th=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function zs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=th[i];if(s===void 0&&(s=new Float32Array(i),th[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Xo(r,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function R0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function C0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),wt(t,e)}}function P0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),wt(t,e)}}function I0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),wt(t,e)}}function L0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;rh.set(n),r.uniformMatrix2fv(this.addr,!1,rh),wt(t,n)}}function D0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;sh.set(n),r.uniformMatrix3fv(this.addr,!1,sh),wt(t,n)}}function N0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;ih.set(n),r.uniformMatrix4fv(this.addr,!1,ih),wt(t,n)}}function U0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function F0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2iv(this.addr,e),wt(t,e)}}function B0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3iv(this.addr,e),wt(t,e)}}function O0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4iv(this.addr,e),wt(t,e)}}function k0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2uiv(this.addr,e),wt(t,e)}}function H0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;r.uniform3uiv(this.addr,e),wt(t,e)}}function G0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4uiv(this.addr,e),wt(t,e)}}function V0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Wu:Vu;t.setTexture2D(e||s,i)}function W0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qu,i)}function X0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yu,i)}function q0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xu,i)}function Y0(r){switch(r){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return I0;case 35674:return L0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return F0;case 35668:case 35672:return B0;case 35669:case 35673:return O0;case 5125:return k0;case 36294:return z0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function K0(r,e){r.uniform1fv(this.addr,e)}function j0(r,e){const t=zs(e,this.size,2);r.uniform2fv(this.addr,t)}function $0(r,e){const t=zs(e,this.size,3);r.uniform3fv(this.addr,t)}function Z0(r,e){const t=zs(e,this.size,4);r.uniform4fv(this.addr,t)}function Q0(r,e){const t=zs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function J0(r,e){const t=zs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function e_(r,e){const t=zs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function t_(r,e){r.uniform1iv(this.addr,e)}function n_(r,e){r.uniform2iv(this.addr,e)}function i_(r,e){r.uniform3iv(this.addr,e)}function s_(r,e){r.uniform4iv(this.addr,e)}function r_(r,e){r.uniform1uiv(this.addr,e)}function o_(r,e){r.uniform2uiv(this.addr,e)}function a_(r,e){r.uniform3uiv(this.addr,e)}function c_(r,e){r.uniform4uiv(this.addr,e)}function l_(r,e,t){const n=this.cache,i=e.length,s=Xo(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Vu,s[o])}function h_(r,e,t){const n=this.cache,i=e.length,s=Xo(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||qu,s[o])}function u_(r,e,t){const n=this.cache,i=e.length,s=Xo(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Yu,s[o])}function d_(r,e,t){const n=this.cache,i=e.length,s=Xo(t,i);bt(n,s)||(r.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xu,s[o])}function f_(r){switch(r){case 5126:return K0;case 35664:return j0;case 35665:return $0;case 35666:return Z0;case 35674:return Q0;case 35675:return J0;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return o_;case 36295:return a_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}class p_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y0(t.type)}}class m_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f_(t.type)}}class g_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function oh(r,e){r.seq.push(e),r.map[e.id]=e}function __(r,e,t){const n=r.name,i=n.length;for(La.lastIndex=0;;){const s=La.exec(n),o=La.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){oh(t,l===void 0?new p_(a,r,e):new m_(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new g_(a),oh(t,u)),t=u}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);__(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ah(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const x_=37297;let v_=0;function M_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function y_(r){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(r);let n;switch(e===t?n="":e===Uo&&t===No?n="LinearDisplayP3ToLinearSRGB":e===No&&t===Uo&&(n="LinearSRGBToLinearDisplayP3"),r){case It:case Vo:return[n,"LinearTransferOETF"];case Ct:case Sc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function ch(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+M_(r.getShaderSource(e),o)}else return i}function S_(r,e){const t=y_(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function b_(r,e){let t;switch(e){case mu:t="Linear";break;case gu:t="Reinhard";break;case _u:t="OptimizedCineon";break;case vc:t="ACESFilmic";break;case xu:t="AgX";break;case vu:t="Neutral";break;case Mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function w_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function T_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ur(r){return r!==""}function lh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(r){return r.replace(E_,C_)}const R_=new Map;function C_(r,e){let t=Ne[e];if(t===void 0){const n=R_.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}const P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(r){return r.replace(P_,I_)}function I_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dh(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function L_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function D_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Es:case Rs:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function U_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case xf:e="ENVMAP_BLENDING_MIX";break;case vf:e="ENVMAP_BLENDING_ADD";break}return e}function F_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function B_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=L_(t),l=D_(t),h=N_(t),u=U_(t),d=F_(t),f=w_(t),g=T_(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(m=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ne.tonemapping_pars_fragment:"",t.toneMapping!==pi?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,S_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=ac(o),o=lh(o,t),o=hh(o,t),a=ac(a),a=lh(a,t),a=hh(a,t),o=uh(o),a=uh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+o,S=v+p+a,C=ah(i,i.VERTEX_SHADER,x),A=ah(i,i.FRAGMENT_SHADER,S);i.attachShader(_,C),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(I){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(C).trim(),H=i.getShaderInfoLog(A).trim();let q=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,A);else{const Z=ch(i,C,"vertex"),V=ch(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Z+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||H==="")&&(G=!1);G&&(I.diagnostics={runnable:q,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(C),i.deleteShader(A),P=new bo(i,_),M=A_(i,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,x_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let O_=0;class k_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new z_(e),t.set(e,n)),n}}class z_{constructor(e){this.id=O_++,this.code=e,this.usedTimes=0}}function H_(r,e,t,n,i,s,o){const a=new Tc,c=new k_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,I,B,k){const H=B.fog,q=k.geometry,G=M.isMeshStandardMaterial?B.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),V=Z&&Z.mapping===Go?Z.image.height:null,fe=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const _e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ve=_e!==void 0?_e.length:0;let Ye=0;q.morphAttributes.position!==void 0&&(Ye=1),q.morphAttributes.normal!==void 0&&(Ye=2),q.morphAttributes.color!==void 0&&(Ye=3);let it,X,Q,me;if(fe){const st=wn[fe];it=st.vertexShader,X=st.fragmentShader}else it=M.vertexShader,X=M.fragmentShader,c.update(M),Q=c.getVertexShaderID(M),me=c.getFragmentShaderID(M);const oe=r.getRenderTarget(),He=k.isInstancedMesh===!0,Fe=k.isBatchedMesh===!0,je=!!M.map,D=!!M.matcap,Ke=!!Z,Xe=!!M.aoMap,dt=!!M.lightMap,we=!!M.bumpMap,$e=!!M.normalMap,Ge=!!M.displacementMap,De=!!M.emissiveMap,_t=!!M.metalnessMap,R=!!M.roughnessMap,b=M.anisotropy>0,z=M.clearcoat>0,K=M.dispersion>0,j=M.iridescence>0,$=M.sheen>0,Se=M.transmission>0,se=b&&!!M.anisotropyMap,re=z&&!!M.clearcoatMap,Be=z&&!!M.clearcoatNormalMap,ee=z&&!!M.clearcoatRoughnessMap,Me=j&&!!M.iridescenceMap,We=j&&!!M.iridescenceThicknessMap,Re=$&&!!M.sheenColorMap,ae=$&&!!M.sheenRoughnessMap,Oe=!!M.specularMap,qe=!!M.specularColorMap,mt=!!M.specularIntensityMap,L=Se&&!!M.transmissionMap,ce=Se&&!!M.thicknessMap,W=!!M.gradientMap,Y=!!M.alphaMap,ne=M.alphaTest>0,Ce=!!M.alphaHash,Qe=!!M.extensions;let gt=pi;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(gt=r.toneMapping);const Tt={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:X,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&k._colorsTexture!==null,instancing:He,instancingColor:He&&k.instanceColor!==null,instancingMorph:He&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:It,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:D,envMap:Ke,envMapMode:Ke&&Z.mapping,envMapCubeUVHeight:V,aoMap:Xe,lightMap:dt,bumpMap:we,normalMap:$e,displacementMap:d&&Ge,emissiveMap:De,normalMapObjectSpace:$e&&M.normalMapType===Bf,normalMapTangentSpace:$e&&M.normalMapType===yc,metalnessMap:_t,roughnessMap:R,anisotropy:b,anisotropyMap:se,clearcoat:z,clearcoatMap:re,clearcoatNormalMap:Be,clearcoatRoughnessMap:ee,dispersion:K,iridescence:j,iridescenceMap:Me,iridescenceThicknessMap:We,sheen:$,sheenColorMap:Re,sheenRoughnessMap:ae,specularMap:Oe,specularColorMap:qe,specularIntensityMap:mt,transmission:Se,transmissionMap:L,thicknessMap:ce,gradientMap:W,opaque:M.transparent===!1&&M.blending===ys&&M.alphaToCoverage===!1,alphaMap:Y,alphaTest:ne,alphaHash:Ce,combine:M.combine,mapUv:je&&_(M.map.channel),aoMapUv:Xe&&_(M.aoMap.channel),lightMapUv:dt&&_(M.lightMap.channel),bumpMapUv:we&&_(M.bumpMap.channel),normalMapUv:$e&&_(M.normalMap.channel),displacementMapUv:Ge&&_(M.displacementMap.channel),emissiveMapUv:De&&_(M.emissiveMap.channel),metalnessMapUv:_t&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:se&&_(M.anisotropyMap.channel),clearcoatMapUv:re&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:We&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ae&&_(M.sheenRoughnessMap.channel),specularMapUv:Oe&&_(M.specularMap.channel),specularColorMapUv:qe&&_(M.specularColorMap.channel),specularIntensityMapUv:mt&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:Y&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($e||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(je||Y),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ye,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:gt,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===an,flipSided:M.side===Wt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Qe&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)y.push(I),y.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(v(y,M),x(y,M),y.push(r.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function v(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),M.push(a.mask)}function S(M){const y=g[M.type];let I;if(y){const B=wn[y];I=Sr.clone(B.uniforms)}else I=M.uniforms;return I}function C(M,y){let I;for(let B=0,k=h.length;B<k;B++){const H=h[B];if(H.cacheKey===y){I=H,++I.usedTimes;break}}return I===void 0&&(I=new B_(r,y,M,s),h.push(I)),I}function A(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function G_(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function V_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function fh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ph(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||V_),n.length>1&&n.sort(d||fh),i.length>1&&i.sort(d||fh)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function W_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ph,r.set(n,[o])):i>=s.length?(o=new ph,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function X_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new he};break;case"SpotLight":t={position:new E,direction:new E,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new E,halfWidth:new E,halfHeight:new E};break}return r[e.id]=t,t}}}function q_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Y_=0;function K_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function j_(r){const e=new X_,t=q_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const i=new E,s=new Te,o=new Te;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,x=0,S=0,C=0,A=0,T=0;l.sort(K_);for(let M=0,y=l.length;M<y;M++){const I=l[M],B=I.color,k=I.intensity,H=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*k,u+=B.g*k,d+=B.b*k;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],k);T++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,V=t.get(I);V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=G,f++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(B).multiplyScalar(k),G.distance=H,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[_]=G;const Z=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,Z.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,I.castShadow){const V=t.get(I);V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,S++}_++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(B).multiplyScalar(k),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const Z=I.shadow,V=t.get(I);V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=G,g++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(k),G.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=T,n.version=Y_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const x=l[p];if(x.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(x.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function mh(r){const e=new j_(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function $_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new mh(r),e.set(i,[a])):s>=o.length?(a=new mh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Z_ extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q_ extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ex=`uniform sampler2D shadow_pass;
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
}`;function tx(r,e,t){let n=new Ac;const i=new ue,s=new ue,o=new at,a=new Z_({depthPacking:Ff}),c=new Q_,l={},h=t.maxTextureSize,u={[jn]:Wt,[Wt]:jn,[an]:an},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:J_,fragmentShader:ex}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let p=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),y=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),B=r.state;B.setBlending(Yn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=p!==Vn&&this.type===Vn,H=p===Vn&&this.type!==Vn;for(let q=0,G=A.length;q<G;q++){const Z=A[q],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const fe=V.getFrameExtents();if(i.multiply(fe),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/fe.x),i.x=s.x*fe.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/fe.y),i.y=s.y*fe.y,V.mapSize.y=s.y)),V.map===null||k===!0||H===!0){const ve=this.type!==Vn?{minFilter:Gt,magFilter:Gt}:{};V.map!==null&&V.map.dispose(),V.map=new cn(i.x,i.y,ve),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const _e=V.getViewportCount();for(let ve=0;ve<_e;ve++){const Ye=V.getViewport(ve);o.set(s.x*Ye.x,s.y*Ye.y,s.x*Ye.z,s.y*Ye.w),B.viewport(o),V.updateMatrices(Z,ve),n=V.getFrustum(),S(T,P,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&v(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,y,I)};function v(A,T){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,P,f,_,null)}function x(A,T,P,M){let y=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)y=I;else if(y=P.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=y.uuid,k=T.uuid;let H=l[B];H===void 0&&(H={},l[B]=H);let q=H[k];q===void 0&&(q=y.clone(),H[k]=q,T.addEventListener("dispose",C)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,M===Vn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=r.properties.get(y);B.light=P}return y}function S(A,T,P,M,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=e.update(A),H=A.material;if(Array.isArray(H)){const q=k.groups;for(let G=0,Z=q.length;G<Z;G++){const V=q[G],fe=H[V.materialIndex];if(fe&&fe.visible){const _e=x(A,fe,M,y);A.onBeforeShadow(r,A,T,P,k,_e,V),r.renderBufferDirect(P,null,k,_e,A,V),A.onAfterShadow(r,A,T,P,k,_e,V)}}}else if(H.visible){const q=x(A,H,M,y);A.onBeforeShadow(r,A,T,P,k,q,null),r.renderBufferDirect(P,null,k,q,A,null),A.onAfterShadow(r,A,T,P,k,q,null)}}const B=A.children;for(let k=0,H=B.length;k<H;k++)S(B[k],T,P,M,y)}function C(A){A.target.removeEventListener("dispose",C);for(const P in l){const M=l[P],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function nx(r){function e(){let L=!1;const ce=new at;let W=null;const Y=new at(0,0,0,0);return{setMask:function(ne){W!==ne&&!L&&(r.colorMask(ne,ne,ne,ne),W=ne)},setLocked:function(ne){L=ne},setClear:function(ne,Ce,Qe,gt,Tt){Tt===!0&&(ne*=gt,Ce*=gt,Qe*=gt),ce.set(ne,Ce,Qe,gt),Y.equals(ce)===!1&&(r.clearColor(ne,Ce,Qe,gt),Y.copy(ce))},reset:function(){L=!1,W=null,Y.set(-1,0,0,0)}}}function t(){let L=!1,ce=null,W=null,Y=null;return{setTest:function(ne){ne?me(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(ne){ce!==ne&&!L&&(r.depthMask(ne),ce=ne)},setFunc:function(ne){if(W!==ne){switch(ne){case uf:r.depthFunc(r.NEVER);break;case df:r.depthFunc(r.ALWAYS);break;case ff:r.depthFunc(r.LESS);break;case Co:r.depthFunc(r.LEQUAL);break;case pf:r.depthFunc(r.EQUAL);break;case mf:r.depthFunc(r.GEQUAL);break;case gf:r.depthFunc(r.GREATER);break;case _f:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}W=ne}},setLocked:function(ne){L=ne},setClear:function(ne){Y!==ne&&(r.clearDepth(ne),Y=ne)},reset:function(){L=!1,ce=null,W=null,Y=null}}}function n(){let L=!1,ce=null,W=null,Y=null,ne=null,Ce=null,Qe=null,gt=null,Tt=null;return{setTest:function(st){L||(st?me(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(st){ce!==st&&!L&&(r.stencilMask(st),ce=st)},setFunc:function(st,Sn,bn){(W!==st||Y!==Sn||ne!==bn)&&(r.stencilFunc(st,Sn,bn),W=st,Y=Sn,ne=bn)},setOp:function(st,Sn,bn){(Ce!==st||Qe!==Sn||gt!==bn)&&(r.stencilOp(st,Sn,bn),Ce=st,Qe=Sn,gt=bn)},setLocked:function(st){L=st},setClear:function(st){Tt!==st&&(r.clearStencil(st),Tt=st)},reset:function(){L=!1,ce=null,W=null,Y=null,ne=null,Ce=null,Qe=null,gt=null,Tt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,v=null,x=null,S=null,C=null,A=new he(0,0,0),T=0,P=!1,M=null,y=null,I=null,B=null,k=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=G>=2);let V=null,fe={};const _e=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Ye=new at().fromArray(_e),it=new at().fromArray(ve);function X(L,ce,W,Y){const ne=new Uint8Array(4),Ce=r.createTexture();r.bindTexture(L,Ce),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<W;Qe++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(ce+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return Ce}const Q={};Q[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(r.DEPTH_TEST),s.setFunc(Co),we(!1),$e($c),me(r.CULL_FACE),Xe(Yn);function me(L){l[L]!==!0&&(r.enable(L),l[L]=!0)}function oe(L){l[L]!==!1&&(r.disable(L),l[L]=!1)}function He(L,ce){return h[L]!==ce?(r.bindFramebuffer(L,ce),h[L]=ce,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ce),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Fe(L,ce){let W=d,Y=!1;if(L){W=u.get(ce),W===void 0&&(W=[],u.set(ce,W));const ne=L.textures;if(W.length!==ne.length||W[0]!==r.COLOR_ATTACHMENT0){for(let Ce=0,Qe=ne.length;Ce<Qe;Ce++)W[Ce]=r.COLOR_ATTACHMENT0+Ce;W.length=ne.length,Y=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,Y=!0);Y&&r.drawBuffers(W)}function je(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const D={[Bi]:r.FUNC_ADD,[Yd]:r.FUNC_SUBTRACT,[Kd]:r.FUNC_REVERSE_SUBTRACT};D[jd]=r.MIN,D[$d]=r.MAX;const Ke={[Zd]:r.ZERO,[Qd]:r.ONE,[Jd]:r.SRC_COLOR,[tc]:r.SRC_ALPHA,[of]:r.SRC_ALPHA_SATURATE,[sf]:r.DST_COLOR,[tf]:r.DST_ALPHA,[ef]:r.ONE_MINUS_SRC_COLOR,[nc]:r.ONE_MINUS_SRC_ALPHA,[rf]:r.ONE_MINUS_DST_COLOR,[nf]:r.ONE_MINUS_DST_ALPHA,[af]:r.CONSTANT_COLOR,[cf]:r.ONE_MINUS_CONSTANT_COLOR,[lf]:r.CONSTANT_ALPHA,[hf]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(L,ce,W,Y,ne,Ce,Qe,gt,Tt,st){if(L===Yn){g===!0&&(oe(r.BLEND),g=!1);return}if(g===!1&&(me(r.BLEND),g=!0),L!==qd){if(L!==_||st!==P){if((m!==Bi||x!==Bi)&&(r.blendEquation(r.FUNC_ADD),m=Bi,x=Bi),st)switch(L){case ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ec:r.blendFunc(r.ONE,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ec:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Zc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,v=null,S=null,C=null,A.set(0,0,0),T=0,_=L,P=st}return}ne=ne||ce,Ce=Ce||W,Qe=Qe||Y,(ce!==m||ne!==x)&&(r.blendEquationSeparate(D[ce],D[ne]),m=ce,x=ne),(W!==p||Y!==v||Ce!==S||Qe!==C)&&(r.blendFuncSeparate(Ke[W],Ke[Y],Ke[Ce],Ke[Qe]),p=W,v=Y,S=Ce,C=Qe),(gt.equals(A)===!1||Tt!==T)&&(r.blendColor(gt.r,gt.g,gt.b,Tt),A.copy(gt),T=Tt),_=L,P=!1}function dt(L,ce){L.side===an?oe(r.CULL_FACE):me(r.CULL_FACE);let W=L.side===Wt;ce&&(W=!W),we(W),L.blending===ys&&L.transparent===!1?Xe(Yn):Xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const Y=L.stencilWrite;o.setTest(Y),Y&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),De(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function we(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function $e(L){L!==Wd?(me(r.CULL_FACE),L!==y&&(L===$c?r.cullFace(r.BACK):L===Xd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),y=L}function Ge(L){L!==I&&(q&&r.lineWidth(L),I=L)}function De(L,ce,W){L?(me(r.POLYGON_OFFSET_FILL),(B!==ce||k!==W)&&(r.polygonOffset(ce,W),B=ce,k=W)):oe(r.POLYGON_OFFSET_FILL)}function _t(L){L?me(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function R(L){L===void 0&&(L=r.TEXTURE0+H-1),V!==L&&(r.activeTexture(L),V=L)}function b(L,ce,W){W===void 0&&(V===null?W=r.TEXTURE0+H-1:W=V);let Y=fe[W];Y===void 0&&(Y={type:void 0,texture:void 0},fe[W]=Y),(Y.type!==L||Y.texture!==ce)&&(V!==W&&(r.activeTexture(W),V=W),r.bindTexture(L,ce||Q[L]),Y.type=L,Y.texture=ce)}function z(){const L=fe[V];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){Ye.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function ae(L){it.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),it.copy(L))}function Oe(L,ce){let W=c.get(ce);W===void 0&&(W=new WeakMap,c.set(ce,W));let Y=W.get(L);Y===void 0&&(Y=r.getUniformBlockIndex(ce,L.name),W.set(L,Y))}function qe(L,ce){const Y=c.get(ce).get(L);a.get(ce)!==Y&&(r.uniformBlockBinding(ce,Y,L.__bindingPointIndex),a.set(ce,Y))}function mt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},V=null,fe={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,v=null,x=null,S=null,C=null,A=new he(0,0,0),T=0,P=!1,M=null,y=null,I=null,B=null,k=null,Ye.set(0,0,r.canvas.width,r.canvas.height),it.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:me,disable:oe,bindFramebuffer:He,drawBuffers:Fe,useProgram:je,setBlending:Xe,setMaterial:dt,setFlipSided:we,setCullFace:$e,setLineWidth:Ge,setPolygonOffset:De,setScissorTest:_t,activeTexture:R,bindTexture:b,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:Me,texImage3D:We,updateUBOMapping:Oe,uniformBlockBinding:qe,texStorage2D:Be,texStorage3D:ee,texSubImage2D:$,texSubImage3D:Se,compressedTexSubImage2D:se,compressedTexSubImage3D:re,scissor:Re,viewport:ae,reset:mt}}function ix(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):yr("canvas")}function _(R,b,z){let K=1;const j=_t(R);if((j.width>z||j.height>z)&&(K=z/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(K*j.width),Se=Math.floor(K*j.height);u===void 0&&(u=g($,Se));const se=b?g($,Se):u;return se.width=$,se.height=Se,se.getContext("2d").drawImage(R,0,0,$,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Se+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Gt&&R.minFilter!==Ht}function p(R){r.generateMipmap(R)}function v(R,b,z,K,j=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=b;if(b===r.RED&&(z===r.FLOAT&&($=r.R32F),z===r.HALF_FLOAT&&($=r.R16F),z===r.UNSIGNED_BYTE&&($=r.R8)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.R8UI),z===r.UNSIGNED_SHORT&&($=r.R16UI),z===r.UNSIGNED_INT&&($=r.R32UI),z===r.BYTE&&($=r.R8I),z===r.SHORT&&($=r.R16I),z===r.INT&&($=r.R32I)),b===r.RG&&(z===r.FLOAT&&($=r.RG32F),z===r.HALF_FLOAT&&($=r.RG16F),z===r.UNSIGNED_BYTE&&($=r.RG8)),b===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RG8UI),z===r.UNSIGNED_SHORT&&($=r.RG16UI),z===r.UNSIGNED_INT&&($=r.RG32UI),z===r.BYTE&&($=r.RG8I),z===r.SHORT&&($=r.RG16I),z===r.INT&&($=r.RG32I)),b===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),b===r.RGBA){const Se=j?Do:Ze.getTransfer(K);z===r.FLOAT&&($=r.RGBA32F),z===r.HALF_FLOAT&&($=r.RGBA16F),z===r.UNSIGNED_BYTE&&($=Se===ct?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(R,b){let z;return R?b===null||b===Cs||b===Ps?z=r.DEPTH24_STENCIL8:b===Tn?z=r.DEPTH32F_STENCIL8:b===Io&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Cs||b===Ps?z=r.DEPTH_COMPONENT24:b===Tn?z=r.DEPTH_COMPONENT32F:b===Io&&(z=r.DEPTH_COMPONENT16),z}function S(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Ht?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&h.delete(b)}function A(R){const b=R.target;b.removeEventListener("dispose",A),M(b)}function T(R){const b=n.get(R);if(b.__webglInit===void 0)return;const z=R.source,K=d.get(z);if(K){const j=K[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&P(R),Object.keys(K).length===0&&d.delete(z)}n.remove(R)}function P(R){const b=n.get(R);r.deleteTexture(b.__webglTexture);const z=R.source,K=d.get(z);delete K[b.__cacheKey],o.memory.textures--}function M(R){const b=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let j=0;j<b.__webglFramebuffer[K].length;j++)r.deleteFramebuffer(b.__webglFramebuffer[K][j]);else r.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)r.deleteFramebuffer(b.__webglFramebuffer[K]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=R.textures;for(let K=0,j=z.length;K<j;K++){const $=n.get(z[K]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(R)}let y=0;function I(){y=0}function B(){const R=y;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),y+=1,R}function k(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function H(R,b){const z=n.get(R);if(R.isVideoTexture&&Ge(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(z,R,b);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function q(R,b){const z=n.get(R);if(R.version>0&&z.__version!==R.version){it(z,R,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function G(R,b){const z=n.get(R);if(R.version>0&&z.__version!==R.version){it(z,R,b);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function Z(R,b){const z=n.get(R);if(R.version>0&&z.__version!==R.version){X(z,R,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}const V={[$n]:r.REPEAT,[di]:r.CLAMP_TO_EDGE,[Po]:r.MIRRORED_REPEAT},fe={[Gt]:r.NEAREST,[yu]:r.NEAREST_MIPMAP_NEAREST,[hr]:r.NEAREST_MIPMAP_LINEAR,[Ht]:r.LINEAR,[So]:r.LINEAR_MIPMAP_NEAREST,[Xn]:r.LINEAR_MIPMAP_LINEAR},_e={[Of]:r.NEVER,[Wf]:r.ALWAYS,[kf]:r.LESS,[Iu]:r.LEQUAL,[zf]:r.EQUAL,[Vf]:r.GEQUAL,[Hf]:r.GREATER,[Gf]:r.NOTEQUAL};function ve(R,b){if(b.type===Tn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ht||b.magFilter===So||b.magFilter===hr||b.magFilter===Xn||b.minFilter===Ht||b.minFilter===So||b.minFilter===hr||b.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,V[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,fe[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Gt||b.minFilter!==hr&&b.minFilter!==Xn||b.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ye(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const K=b.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const $=k(b);if($!==R.__cacheKey){j[$]===void 0&&(j[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[$].usedTimes++;const Se=j[R.__cacheKey];Se!==void 0&&(j[R.__cacheKey].usedTimes--,Se.usedTimes===0&&P(b)),R.__cacheKey=$,R.__webglTexture=j[$].texture}return z}function it(R,b,z){let K=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=r.TEXTURE_3D);const j=Ye(R,b),$=b.source;t.bindTexture(K,R.__webglTexture,r.TEXTURE0+z);const Se=n.get($);if($.version!==Se.__version||j===!0){t.activeTexture(r.TEXTURE0+z);const se=Ze.getPrimaries(Ze.workingColorSpace),re=b.colorSpace===ui?null:Ze.getPrimaries(b.colorSpace),Be=b.colorSpace===ui||se===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ee=_(b.image,!1,i.maxTextureSize);ee=De(b,ee);const Me=s.convert(b.format,b.colorSpace),We=s.convert(b.type);let Re=v(b.internalFormat,Me,We,b.colorSpace,b.isVideoTexture);ve(K,b);let ae;const Oe=b.mipmaps,qe=b.isVideoTexture!==!0,mt=Se.__version===void 0||j===!0,L=$.dataReady,ce=S(b,ee);if(b.isDepthTexture)Re=x(b.format===Is,b.type),mt&&(qe?t.texStorage2D(r.TEXTURE_2D,1,Re,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Re,ee.width,ee.height,0,Me,We,null));else if(b.isDataTexture)if(Oe.length>0){qe&&mt&&t.texStorage2D(r.TEXTURE_2D,ce,Re,Oe[0].width,Oe[0].height);for(let W=0,Y=Oe.length;W<Y;W++)ae=Oe[W],qe?L&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,ae.width,ae.height,Me,We,ae.data):t.texImage2D(r.TEXTURE_2D,W,Re,ae.width,ae.height,0,Me,We,ae.data);b.generateMipmaps=!1}else qe?(mt&&t.texStorage2D(r.TEXTURE_2D,ce,Re,ee.width,ee.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,Me,We,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Re,ee.width,ee.height,0,Me,We,ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qe&&mt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Re,Oe[0].width,Oe[0].height,ee.depth);for(let W=0,Y=Oe.length;W<Y;W++)if(ae=Oe[W],b.format!==gn)if(Me!==null)if(qe){if(L)if(b.layerUpdates.size>0){for(const ne of b.layerUpdates){const Ce=ae.width*ae.height;t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,ne,ae.width,ae.height,1,Me,ae.data.slice(Ce*ne,Ce*(ne+1)),0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,ae.width,ae.height,ee.depth,Me,ae.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,Re,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,ae.width,ae.height,ee.depth,Me,We,ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,Re,ae.width,ae.height,ee.depth,0,Me,We,ae.data)}else{qe&&mt&&t.texStorage2D(r.TEXTURE_2D,ce,Re,Oe[0].width,Oe[0].height);for(let W=0,Y=Oe.length;W<Y;W++)ae=Oe[W],b.format!==gn?Me!==null?qe?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,ae.width,ae.height,Me,ae.data):t.compressedTexImage2D(r.TEXTURE_2D,W,Re,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?L&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,ae.width,ae.height,Me,We,ae.data):t.texImage2D(r.TEXTURE_2D,W,Re,ae.width,ae.height,0,Me,We,ae.data)}else if(b.isDataArrayTexture)if(qe){if(mt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Re,ee.width,ee.height,ee.depth),L)if(b.layerUpdates.size>0){let W;switch(We){case r.UNSIGNED_BYTE:switch(Me){case r.ALPHA:W=1;break;case r.LUMINANCE:W=1;break;case r.LUMINANCE_ALPHA:W=2;break;case r.RGB:W=3;break;case r.RGBA:W=4;break;default:throw new Error(`Unknown texel size for format ${Me}.`)}break;case r.UNSIGNED_SHORT_4_4_4_4:case r.UNSIGNED_SHORT_5_5_5_1:case r.UNSIGNED_SHORT_5_6_5:W=1;break;default:throw new Error(`Unknown texel size for type ${We}.`)}const Y=ee.width*ee.height*W;for(const ne of b.layerUpdates)t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,ee.width,ee.height,1,Me,We,ee.data.slice(Y*ne,Y*(ne+1)));b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Me,We,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,Me,We,ee.data);else if(b.isData3DTexture)qe?(mt&&t.texStorage3D(r.TEXTURE_3D,ce,Re,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Me,We,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,Me,We,ee.data);else if(b.isFramebufferTexture){if(mt)if(qe)t.texStorage2D(r.TEXTURE_2D,ce,Re,ee.width,ee.height);else{let W=ee.width,Y=ee.height;for(let ne=0;ne<ce;ne++)t.texImage2D(r.TEXTURE_2D,ne,Re,W,Y,0,Me,We,null),W>>=1,Y>>=1}}else if(Oe.length>0){if(qe&&mt){const W=_t(Oe[0]);t.texStorage2D(r.TEXTURE_2D,ce,Re,W.width,W.height)}for(let W=0,Y=Oe.length;W<Y;W++)ae=Oe[W],qe?L&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,Me,We,ae):t.texImage2D(r.TEXTURE_2D,W,Re,Me,We,ae);b.generateMipmaps=!1}else if(qe){if(mt){const W=_t(ee);t.texStorage2D(r.TEXTURE_2D,ce,Re,W.width,W.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,We,ee)}else t.texImage2D(r.TEXTURE_2D,0,Re,Me,We,ee);m(b)&&p(K),Se.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function X(R,b,z){if(b.image.length!==6)return;const K=Ye(R,b),j=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);const $=n.get(j);if(j.version!==$.__version||K===!0){t.activeTexture(r.TEXTURE0+z);const Se=Ze.getPrimaries(Ze.workingColorSpace),se=b.colorSpace===ui?null:Ze.getPrimaries(b.colorSpace),re=b.colorSpace===ui||Se===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let Y=0;Y<6;Y++)!Be&&!ee?Me[Y]=_(b.image[Y],!0,i.maxCubemapSize):Me[Y]=ee?b.image[Y].image:b.image[Y],Me[Y]=De(b,Me[Y]);const We=Me[0],Re=s.convert(b.format,b.colorSpace),ae=s.convert(b.type),Oe=v(b.internalFormat,Re,ae,b.colorSpace),qe=b.isVideoTexture!==!0,mt=$.__version===void 0||K===!0,L=j.dataReady;let ce=S(b,We);ve(r.TEXTURE_CUBE_MAP,b);let W;if(Be){qe&&mt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Oe,We.width,We.height);for(let Y=0;Y<6;Y++){W=Me[Y].mipmaps;for(let ne=0;ne<W.length;ne++){const Ce=W[ne];b.format!==gn?Re!==null?qe?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,Oe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,0,0,Ce.width,Ce.height,Re,ae,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne,Oe,Ce.width,Ce.height,0,Re,ae,Ce.data)}}}else{if(W=b.mipmaps,qe&&mt){W.length>0&&ce++;const Y=_t(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,Oe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Me[Y].width,Me[Y].height,Re,ae,Me[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Oe,Me[Y].width,Me[Y].height,0,Re,ae,Me[Y].data);for(let ne=0;ne<W.length;ne++){const Qe=W[ne].image[Y].image;qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,0,0,Qe.width,Qe.height,Re,ae,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,Oe,Qe.width,Qe.height,0,Re,ae,Qe.data)}}else{qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Re,ae,Me[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Oe,Re,ae,Me[Y]);for(let ne=0;ne<W.length;ne++){const Ce=W[ne];qe?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,0,0,Re,ae,Ce.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne+1,Oe,Re,ae,Ce.image[Y])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),$.__version=j.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Q(R,b,z,K,j,$){const Se=s.convert(z.format,z.colorSpace),se=s.convert(z.type),re=v(z.internalFormat,Se,se,z.colorSpace);if(!n.get(b).__hasExternalTextures){const ee=Math.max(1,b.width>>$),Me=Math.max(1,b.height>>$);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,$,re,ee,Me,b.depth,0,Se,se,null):t.texImage2D(j,$,re,ee,Me,0,Se,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),$e(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,j,n.get(z).__webglTexture,0,we(b)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,j,n.get(z).__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(R,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){const K=b.depthTexture,j=K&&K.isDepthTexture?K.type:null,$=x(b.stencilBuffer,j),Se=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=we(b);$e(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,$,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,$,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,$,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,R)}else{const K=b.textures;for(let j=0;j<K.length;j++){const $=K[j],Se=s.convert($.format,$.colorSpace),se=s.convert($.type),re=v($.internalFormat,Se,se,$.colorSpace),Be=we(b);z&&$e(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,re,b.width,b.height):$e(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Be,re,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,re,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const K=n.get(b.depthTexture).__webglTexture,j=we(b);if(b.depthTexture.format===Ss)$e(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(b.depthTexture.format===Is)$e(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function He(R){const b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");oe(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]=r.createRenderbuffer(),me(b.__webglDepthbuffer[K],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),me(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(R,b,z){const K=n.get(R);b!==void 0&&Q(K.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&He(R)}function je(R){const b=R.texture,z=n.get(R),K=n.get(b);R.addEventListener("dispose",A);const j=R.textures,$=R.isWebGLCubeRenderTarget===!0,Se=j.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=b.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let re=0;re<b.mipmaps.length;re++)z.__webglFramebuffer[se][re]=r.createFramebuffer()}else z.__webglFramebuffer[se]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<b.mipmaps.length;se++)z.__webglFramebuffer[se]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(Se)for(let se=0,re=j.length;se<re;se++){const Be=n.get(j[se]);Be.__webglTexture===void 0&&(Be.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&$e(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const re=j[se];z.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const Be=s.convert(re.format,re.colorSpace),ee=s.convert(re.type),Me=v(re.internalFormat,Be,ee,re.colorSpace,R.isXRRenderTarget===!0),We=we(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,We,Me,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,z.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),me(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ve(r.TEXTURE_CUBE_MAP,b);for(let se=0;se<6;se++)if(b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)Q(z.__webglFramebuffer[se][re],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,re);else Q(z.__webglFramebuffer[se],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,re=j.length;se<re;se++){const Be=j[se],ee=n.get(Be);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),ve(r.TEXTURE_2D,Be),Q(z.__webglFramebuffer,R,Be,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),m(Be)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,K.__webglTexture),ve(se,b),b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)Q(z.__webglFramebuffer[re],R,b,r.COLOR_ATTACHMENT0,se,re);else Q(z.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,se,0);m(b)&&p(se),t.unbindTexture()}R.depthBuffer&&He(R)}function D(R){const b=R.textures;for(let z=0,K=b.length;z<K;z++){const j=b[z];if(m(j)){const $=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Se=n.get(j).__webglTexture;t.bindTexture($,Se),p($),t.unbindTexture()}}}const Ke=[],Xe=[];function dt(R){if(R.samples>0){if($e(R)===!1){const b=R.textures,z=R.width,K=R.height;let j=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=n.get(R),se=b.length>1;if(se)for(let re=0;re<b.length;re++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let re=0;re<b.length;re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[re]);const Be=n.get(b[re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Be,0)}r.blitFramebuffer(0,0,z,K,0,0,z,K,j,r.NEAREST),c===!0&&(Ke.length=0,Xe.length=0,Ke.push(r.COLOR_ATTACHMENT0+re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ke.push($),Xe.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let re=0;re<b.length;re++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,Se.__webglColorRenderbuffer[re]);const Be=n.get(b[re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,Be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function we(R){return Math.min(i.maxSamples,R.samples)}function $e(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ge(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function De(R,b){const z=R.colorSpace,K=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==It&&z!==ui&&(Ze.getTransfer(z)===ct?(K!==gn||j!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=Fe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=$e}function sx(r,e){function t(n,i=ui){let s;const o=Ze.getTransfer(i);if(n===xi)return r.UNSIGNED_BYTE;if(n===bu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===wf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sf)return r.BYTE;if(n===bf)return r.SHORT;if(n===Io)return r.UNSIGNED_SHORT;if(n===Su)return r.INT;if(n===Cs)return r.UNSIGNED_INT;if(n===Tn)return r.FLOAT;if(n===Kn)return r.HALF_FLOAT;if(n===Tf)return r.ALPHA;if(n===Af)return r.RGB;if(n===gn)return r.RGBA;if(n===Ef)return r.LUMINANCE;if(n===Rf)return r.LUMINANCE_ALPHA;if(n===Ss)return r.DEPTH_COMPONENT;if(n===Is)return r.DEPTH_STENCIL;if(n===Tu)return r.RED;if(n===Au)return r.RED_INTEGER;if(n===Cf)return r.RG;if(n===Eu)return r.RG_INTEGER;if(n===Ru)return r.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===oa)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ia)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ia)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===el)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===ol)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sl||n===rl)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ol)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===cl||n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===Ml)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===al)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===yl||n===Sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===aa)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pf||n===bl||n===wl||n===Tl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===aa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class rx extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pe extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ox={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ox)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`;class lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new yt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vt({vertexShader:ax,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class hx extends Xi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new lx,m=t.getContextAttributes();let p=null,v=null;const x=[],S=[],C=new ue;let A=null;const T=new zt;T.layers.enable(1),T.viewport=new at;const P=new zt;P.layers.enable(2),P.viewport=new at;const M=[T,P],y=new rx;y.layers.enable(1),y.layers.enable(2);let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=x[X];return Q===void 0&&(Q=new Da,x[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=x[X];return Q===void 0&&(Q=new Da,x[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=x[X];return Q===void 0&&(Q=new Da,x[X]=Q),Q.getHandSpace()};function k(X){const Q=S.indexOf(X.inputSource);if(Q===-1)return;const me=x[Q];me!==void 0&&(me.update(X.inputSource,X.frame,l||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",q);for(let X=0;X<x.length;X++){const Q=S[X];Q!==null&&(S[X]=null,x[X].disconnect(Q))}I=null,B=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,v=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",H),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new cn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,me=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Is:Ss,me=m.stencil?Ps:Cs);const He={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new cn(d.textureWidth,d.textureHeight,{format:gn,type:xi,depthTexture:new Gu(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(X){for(let Q=0;Q<X.removed.length;Q++){const me=X.removed[Q],oe=S.indexOf(me);oe>=0&&(S[oe]=null,x[oe].disconnect(me))}for(let Q=0;Q<X.added.length;Q++){const me=X.added[Q];let oe=S.indexOf(me);if(oe===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=S.length){S.push(me),oe=Fe;break}else if(S[Fe]===null){S[Fe]=me,oe=Fe;break}if(oe===-1)break}const He=x[oe];He&&He.connect(me)}}const G=new E,Z=new E;function V(X,Q,me){G.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(me.matrixWorld);const oe=G.distanceTo(Z),He=Q.projectionMatrix.elements,Fe=me.projectionMatrix.elements,je=He[14]/(He[10]-1),D=He[14]/(He[10]+1),Ke=(He[9]+1)/He[5],Xe=(He[9]-1)/He[5],dt=(He[8]-1)/He[0],we=(Fe[8]+1)/Fe[0],$e=je*dt,Ge=je*we,De=oe/(-dt+we),_t=De*-dt;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(_t),X.translateZ(De),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=je+De,b=D+De,z=$e-_t,K=Ge+(oe-_t),j=Ke*D/b*R,$=Xe*D/b*R;X.projectionMatrix.makePerspective(z,K,j,$,R,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function fe(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),y.near=P.near=T.near=X.near,y.far=P.far=T.far=X.far,(I!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,B=y.far,T.near=I,T.far=B,P.near=I,P.far=B,T.updateProjectionMatrix(),P.updateProjectionMatrix(),X.updateProjectionMatrix());const Q=X.parent,me=y.cameras;fe(y,Q);for(let oe=0;oe<me.length;oe++)fe(me[oe],Q);me.length===2?V(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),_e(X,y,Q)};function _e(X,Q,me){me===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ls*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ve=null;function Ye(X,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let oe=!1;me.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let Fe=0;Fe<me.length;Fe++){const je=me[Fe];let D=null;if(f!==null)D=f.getViewport(je);else{const Xe=u.getViewSubImage(d,je);D=Xe.viewport,Fe===0&&(e.setRenderTargetTextures(v,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(v))}let Ke=M[Fe];Ke===void 0&&(Ke=new zt,Ke.layers.enable(Fe),Ke.viewport=new at,M[Fe]=Ke),Ke.matrix.fromArray(je.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(je.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(D.x,D.y,D.width,D.height),Fe===0&&(y.matrix.copy(Ke.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(Ke)}const He=i.enabledFeatures;if(He&&He.includes("depth-sensing")){const Fe=u.getDepthInformation(me[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,i.renderState)}}for(let me=0;me<x.length;me++){const oe=S[me],He=x[me];oe!==null&&He!==void 0&&He.update(oe,Q,l||o)}ve&&ve(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const it=new Hu;it.setAnimationLoop(Ye),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}const Ii=new jt,ux=new Te;function dx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ou(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,Ii.copy(S),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(ux.makeRotationFromEuler(Ii)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fx(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const S=x.program;n.uniformBlockBinding(v,S)}function l(v,x){let S=i[v.id];S===void 0&&(g(v),S=h(v),i[v.id]=S,v.addEventListener("dispose",m));const C=x.program;n.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(d(v),s[v.id]=A)}function h(v){const x=u();v.__bindingPointIndex=x;const S=r.createBuffer(),C=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,C,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],S=v.uniforms,C=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=P.length;M<y;M++){const I=P[M];if(f(I,A,M,C)===!0){const B=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let q=0;q<k.length;q++){const G=k[q],Z=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,B+H,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,x,S,C){const A=v.value,T=x+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(v){const x=v.uniforms;let S=0;const C=16;for(let T=0,P=x.length;T<P;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,I=M.length;y<I;y++){const B=M[y],k=Array.isArray(B.value)?B.value:[B.value];for(let H=0,q=k.length;H<q;H++){const G=k[H],Z=_(G),V=S%C;V!==0&&C-V<Z.boundary&&(S+=C-V),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=Z.storage}}}const A=S%C;return A>0&&(S+=C-A),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class px{constructor(e={}){const{canvas:t=ap(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=pi,this.toneMappingExposure=1;const x=this;let S=!1,C=0,A=0,T=null,P=-1,M=null;const y=new at,I=new at;let B=null;const k=new he(0);let H=0,q=t.width,G=t.height,Z=1,V=null,fe=null;const _e=new at(0,0,q,G),ve=new at(0,0,q,G);let Ye=!1;const it=new Ac;let X=!1,Q=!1;const me=new Te,oe=new E,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function je(){return T===null?Z:1}let D=n;function Ke(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_c}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",Y,!1),D===null){const N="webgl2";if(D=Ke(N,w),D===null)throw Ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Xe,dt,we,$e,Ge,De,_t,R,b,z,K,j,$,Se,se,re,Be,ee,Me,We,Re,ae,Oe,qe;function mt(){Xe=new S0(D),Xe.init(),ae=new sx(D,Xe),dt=new g0(D,Xe,e,ae),we=new nx(D),$e=new T0(D),Ge=new G_,De=new ix(D,Xe,we,Ge,dt,ae,$e),_t=new x0(x),R=new y0(x),b=new Lp(D),Oe=new p0(D,b),z=new b0(D,b,$e,Oe),K=new E0(D,z,b,$e),Me=new A0(D,dt,De),re=new _0(Ge),j=new H_(x,_t,R,Xe,dt,Oe,re),$=new dx(x,Ge),Se=new W_,se=new $_(Xe),ee=new f0(x,_t,R,we,K,d,c),Be=new tx(x,K,dt),qe=new fx(D,$e,dt,we),We=new m0(D,Xe,$e),Re=new w0(D,Xe,$e),$e.programs=j.programs,x.capabilities=dt,x.extensions=Xe,x.properties=Ge,x.renderLists=Se,x.shadowMap=Be,x.state=we,x.info=$e}mt();const L=new hx(x,D);this.xr=L,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(q,G,!1))},this.getSize=function(w){return w.set(q,G)},this.setSize=function(w,N,F=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,G=N,t.width=Math.floor(w*Z),t.height=Math.floor(N*Z),F===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(q*Z,G*Z).floor()},this.setDrawingBufferSize=function(w,N,F){q=w,G=N,Z=F,t.width=Math.floor(w*F),t.height=Math.floor(N*F),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(_e)},this.setViewport=function(w,N,F,O){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,N,F,O),we.viewport(y.copy(_e).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,N,F,O){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,N,F,O),we.scissor(I.copy(ve).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(w){we.setScissorTest(Ye=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(w=!0,N=!0,F=!0){let O=0;if(w){let U=!1;if(T!==null){const te=T.texture.format;U=te===Ru||te===Eu||te===Au}if(U){const te=T.texture.type,le=te===xi||te===Cs||te===Io||te===Ps||te===bu||te===wu,pe=ee.getClearColor(),xe=ee.getClearAlpha(),Ae=pe.r,Ee=pe.g,be=pe.b;le?(f[0]=Ae,f[1]=Ee,f[2]=be,f[3]=xe,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=Ae,g[1]=Ee,g[2]=be,g[3]=xe,D.clearBufferiv(D.COLOR,0,g))}else O|=D.COLOR_BUFFER_BIT}N&&(O|=D.DEPTH_BUFFER_BIT),F&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Se.dispose(),se.dispose(),Ge.dispose(),_t.dispose(),R.dispose(),K.dispose(),Oe.dispose(),qe.dispose(),j.dispose(),L.dispose(),L.removeEventListener("sessionstart",Sn),L.removeEventListener("sessionend",bn),wi.stop()};function ce(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=$e.autoReset,N=Be.enabled,F=Be.autoUpdate,O=Be.needsUpdate,U=Be.type;mt(),$e.autoReset=w,Be.enabled=N,Be.autoUpdate=F,Be.needsUpdate=O,Be.type=U}function Y(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ne(w){const N=w.target;N.removeEventListener("dispose",ne),Ce(N)}function Ce(w){Qe(w),Ge.remove(w)}function Qe(w){const N=Ge.get(w).programs;N!==void 0&&(N.forEach(function(F){j.releaseProgram(F)}),w.isShaderMaterial&&j.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,F,O,U,te){N===null&&(N=He);const le=U.isMesh&&U.matrixWorld.determinant()<0,pe=zd(w,N,F,O,U);we.setMaterial(O,le);let xe=F.index,Ae=1;if(O.wireframe===!0){if(xe=z.getWireframeAttribute(F),xe===void 0)return;Ae=2}const Ee=F.drawRange,be=F.attributes.position;let Je=Ee.start*Ae,ft=(Ee.start+Ee.count)*Ae;te!==null&&(Je=Math.max(Je,te.start*Ae),ft=Math.min(ft,(te.start+te.count)*Ae)),xe!==null?(Je=Math.max(Je,0),ft=Math.min(ft,xe.count)):be!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,be.count));const pt=ft-Je;if(pt<0||pt===1/0)return;Oe.setup(U,O,pe,F,xe);let Zt,tt=We;if(xe!==null&&(Zt=b.get(xe),tt=Re,tt.setIndex(Zt)),U.isMesh)O.wireframe===!0?(we.setLineWidth(O.wireframeLinewidth*je()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(U.isLine){let ye=O.linewidth;ye===void 0&&(ye=1),we.setLineWidth(ye*je()),U.isLineSegments?tt.setMode(D.LINES):U.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else U.isPoints?tt.setMode(D.POINTS):U.isSprite&&tt.setMode(D.TRIANGLES);if(U.isBatchedMesh)U._multiDrawInstances!==null?tt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances):tt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)tt.renderInstances(Je,pt,U.count);else if(F.isInstancedBufferGeometry){const ye=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Bt=Math.min(F.instanceCount,ye);tt.renderInstances(Je,pt,Bt)}else tt.render(Je,pt)};function gt(w,N,F){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=Wt,w.needsUpdate=!0,Nr(w,N,F),w.side=jn,w.needsUpdate=!0,Nr(w,N,F),w.side=an):Nr(w,N,F)}this.compile=function(w,N,F=null){F===null&&(F=w),m=se.get(F),m.init(N),v.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),w!==F&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const O=new Set;return w.traverse(function(U){const te=U.material;if(te)if(Array.isArray(te))for(let le=0;le<te.length;le++){const pe=te[le];gt(pe,F,U),O.add(pe)}else gt(te,F,U),O.add(te)}),v.pop(),m=null,O},this.compileAsync=function(w,N,F=null){const O=this.compile(w,N,F);return new Promise(U=>{function te(){if(O.forEach(function(le){Ge.get(le).currentProgram.isReady()&&O.delete(le)}),O.size===0){U(w);return}setTimeout(te,10)}Xe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Tt=null;function st(w){Tt&&Tt(w)}function Sn(){wi.stop()}function bn(){wi.start()}const wi=new Hu;wi.setAnimationLoop(st),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(w){Tt=w,L.setAnimationLoop(w),w===null?wi.stop():wi.start()},L.addEventListener("sessionstart",Sn),L.addEventListener("sessionend",bn),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(N),N=L.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,T),m=se.get(w,v.length),m.init(N),v.push(m),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),it.setFromProjectionMatrix(me),Q=this.localClippingEnabled,X=re.init(this.clippingPlanes,Q),_=Se.get(w,p.length),_.init(),p.push(_),L.enabled===!0&&L.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&Jo(te,N,-1/0,x.sortObjects)}Jo(w,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,fe),Fe=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Fe&&ee.addToRenderList(_,w),this.info.render.frame++,X===!0&&re.beginShadows();const F=m.state.shadowsArray;Be.render(F,w,N),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,U=_.transmissive;if(m.setupLights(),N.isArrayCamera){const te=N.cameras;if(U.length>0)for(let le=0,pe=te.length;le<pe;le++){const xe=te[le];Xc(O,U,w,xe)}Fe&&ee.render(w);for(let le=0,pe=te.length;le<pe;le++){const xe=te[le];Wc(_,w,xe,xe.viewport)}}else U.length>0&&Xc(O,U,w,N),Fe&&ee.render(w),Wc(_,w,N);T!==null&&(De.updateMultisampleRenderTarget(T),De.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,N),Oe.resetDefaultState(),P=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],X===!0&&re.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Jo(w,N,F,O){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)F=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||it.intersectsSprite(w)){O&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const le=K.update(w),pe=w.material;pe.visible&&_.push(w,le,pe,F,oe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||it.intersectsObject(w))){const le=K.update(w),pe=w.material;if(O&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),oe.copy(w.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),oe.copy(le.boundingSphere.center)),oe.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(pe)){const xe=le.groups;for(let Ae=0,Ee=xe.length;Ae<Ee;Ae++){const be=xe[Ae],Je=pe[be.materialIndex];Je&&Je.visible&&_.push(w,le,Je,F,oe.z,be)}}else pe.visible&&_.push(w,le,pe,F,oe.z,null)}}const te=w.children;for(let le=0,pe=te.length;le<pe;le++)Jo(te[le],N,F,O)}function Wc(w,N,F,O){const U=w.opaque,te=w.transmissive,le=w.transparent;m.setupLightsView(F),X===!0&&re.setGlobalState(x.clippingPlanes,F),O&&we.viewport(y.copy(O)),U.length>0&&Dr(U,N,F),te.length>0&&Dr(te,N,F),le.length>0&&Dr(le,N,F),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Xc(w,N,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new cn(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Kn:xi,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const te=m.state.transmissionRenderTarget[O.id],le=O.viewport||y;te.setSize(le.z,le.w);const pe=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(k),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),Fe?ee.render(F):x.clear();const xe=x.toneMapping;x.toneMapping=pi;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),X===!0&&re.setGlobalState(x.clippingPlanes,O),Dr(w,F,O),De.updateMultisampleRenderTarget(te),De.updateRenderTargetMipmap(te),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let be=0,Je=N.length;be<Je;be++){const ft=N[be],pt=ft.object,Zt=ft.geometry,tt=ft.material,ye=ft.group;if(tt.side===an&&pt.layers.test(O.layers)){const Bt=tt.side;tt.side=Wt,tt.needsUpdate=!0,qc(pt,F,O,Zt,tt,ye),tt.side=Bt,tt.needsUpdate=!0,Ee=!0}}Ee===!0&&(De.updateMultisampleRenderTarget(te),De.updateRenderTargetMipmap(te))}x.setRenderTarget(pe),x.setClearColor(k,H),Ae!==void 0&&(O.viewport=Ae),x.toneMapping=xe}function Dr(w,N,F){const O=N.isScene===!0?N.overrideMaterial:null;for(let U=0,te=w.length;U<te;U++){const le=w[U],pe=le.object,xe=le.geometry,Ae=O===null?le.material:O,Ee=le.group;pe.layers.test(F.layers)&&qc(pe,N,F,xe,Ae,Ee)}}function qc(w,N,F,O,U,te){w.onBeforeRender(x,N,F,O,U,te),w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,N,F,O,w,te),U.transparent===!0&&U.side===an&&U.forceSinglePass===!1?(U.side=Wt,U.needsUpdate=!0,x.renderBufferDirect(F,N,O,U,w,te),U.side=jn,U.needsUpdate=!0,x.renderBufferDirect(F,N,O,U,w,te),U.side=an):x.renderBufferDirect(F,N,O,U,w,te),w.onAfterRender(x,N,F,O,U,te)}function Nr(w,N,F){N.isScene!==!0&&(N=He);const O=Ge.get(w),U=m.state.lights,te=m.state.shadowsArray,le=U.state.version,pe=j.getParameters(w,U.state,te,N,F),xe=j.getProgramCacheKey(pe);let Ae=O.programs;O.environment=w.isMeshStandardMaterial?N.environment:null,O.fog=N.fog,O.envMap=(w.isMeshStandardMaterial?R:_t).get(w.envMap||O.environment),O.envMapRotation=O.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",ne),Ae=new Map,O.programs=Ae);let Ee=Ae.get(xe);if(Ee!==void 0){if(O.currentProgram===Ee&&O.lightsStateVersion===le)return Kc(w,pe),Ee}else pe.uniforms=j.getUniforms(w),w.onBuild(F,pe,x),w.onBeforeCompile(pe,x),Ee=j.acquireProgram(pe,xe),Ae.set(xe,Ee),O.uniforms=pe.uniforms;const be=O.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=re.uniform),Kc(w,pe),O.needsLights=Gd(w),O.lightsStateVersion=le,O.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=Ee,O.uniformsList=null,Ee}function Yc(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=bo.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Kc(w,N){const F=Ge.get(w);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.batchingColor=N.batchingColor,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.instancingMorph=N.instancingMorph,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function zd(w,N,F,O,U){N.isScene!==!0&&(N=He),De.resetTextureUnits();const te=N.fog,le=O.isMeshStandardMaterial?N.environment:null,pe=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:It,xe=(O.isMeshStandardMaterial?R:_t).get(O.envMap||le),Ae=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ee=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!F.morphAttributes.position,Je=!!F.morphAttributes.normal,ft=!!F.morphAttributes.color;let pt=pi;O.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=x.toneMapping);const Zt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=Zt!==void 0?Zt.length:0,ye=Ge.get(O),Bt=m.state.lights;if(X===!0&&(Q===!0||w!==M)){const nn=w===M&&O.id===P;re.setState(O,w,nn)}let rt=!1;O.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Bt.state.version||ye.outputColorSpace!==pe||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==xe||O.fog===!0&&ye.fog!==te||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==re.numPlanes||ye.numIntersection!==re.numIntersection)||ye.vertexAlphas!==Ae||ye.vertexTangents!==Ee||ye.morphTargets!==be||ye.morphNormals!==Je||ye.morphColors!==ft||ye.toneMapping!==pt||ye.morphTargetsCount!==tt)&&(rt=!0):(rt=!0,ye.__version=O.version);let Fn=ye.currentProgram;rt===!0&&(Fn=Nr(O,N,U));let Ur=!1,Ti=!1,ea=!1;const At=Fn.getUniforms(),ti=ye.uniforms;if(we.useProgram(Fn.program)&&(Ur=!0,Ti=!0,ea=!0),O.id!==P&&(P=O.id,Ti=!0),Ur||M!==w){At.setValue(D,"projectionMatrix",w.projectionMatrix),At.setValue(D,"viewMatrix",w.matrixWorldInverse);const nn=At.map.cameraPosition;nn!==void 0&&nn.setValue(D,oe.setFromMatrixPosition(w.matrixWorld)),dt.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&At.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ti=!0,ea=!0)}if(U.isSkinnedMesh){At.setOptional(D,U,"bindMatrix"),At.setOptional(D,U,"bindMatrixInverse");const nn=U.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),At.setValue(D,"boneTexture",nn.boneTexture,De))}U.isBatchedMesh&&(At.setOptional(D,U,"batchingTexture"),At.setValue(D,"batchingTexture",U._matricesTexture,De),At.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",U._colorsTexture,De));const ta=F.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&Me.update(U,F,Fn),(Ti||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,At.setValue(D,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ti.envMap.value=xe,ti.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&N.environment!==null&&(ti.envMapIntensity.value=N.environmentIntensity),Ti&&(At.setValue(D,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&Hd(ti,ea),te&&O.fog===!0&&$.refreshFogUniforms(ti,te),$.refreshMaterialUniforms(ti,O,Z,G,m.state.transmissionRenderTarget[w.id]),bo.upload(D,Yc(ye),ti,De)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(bo.upload(D,Yc(ye),ti,De),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&At.setValue(D,"center",U.center),At.setValue(D,"modelViewMatrix",U.modelViewMatrix),At.setValue(D,"normalMatrix",U.normalMatrix),At.setValue(D,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const nn=O.uniformsGroups;for(let na=0,Vd=nn.length;na<Vd;na++){const jc=nn[na];qe.update(jc,Fn),qe.bind(jc,Fn)}}return Fn}function Hd(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Gd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,N,F){Ge.get(w.texture).__webglTexture=N,Ge.get(w.depthTexture).__webglTexture=F;const O=Ge.get(w);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const F=Ge.get(w);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,F=0){T=w,C=N,A=F;let O=!0,U=null,te=!1,le=!1;if(w){const xe=Ge.get(w);xe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(D.FRAMEBUFFER,null),O=!1):xe.__webglFramebuffer===void 0?De.setupRenderTarget(w):xe.__hasExternalTextures&&De.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);const Ee=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ee[N])?U=Ee[N][F]:U=Ee[N],te=!0):w.samples>0&&De.useMultisampledRTT(w)===!1?U=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Ee)?U=Ee[F]:U=Ee,y.copy(w.viewport),I.copy(w.scissor),B=w.scissorTest}else y.copy(_e).multiplyScalar(Z).floor(),I.copy(ve).multiplyScalar(Z).floor(),B=Ye;if(we.bindFramebuffer(D.FRAMEBUFFER,U)&&O&&we.drawBuffers(w,U),we.viewport(y),we.scissor(I),we.setScissorTest(B),te){const xe=Ge.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,F)}else if(le){const xe=Ge.get(w.texture),Ae=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,F||0,Ae)}P=-1},this.readRenderTargetPixels=function(w,N,F,O,U,te,le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){we.bindFramebuffer(D.FRAMEBUFFER,pe);try{const xe=w.texture,Ae=xe.format,Ee=xe.type;if(!dt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-O&&F>=0&&F<=w.height-U&&D.readPixels(N,F,O,U,ae.convert(Ae),ae.convert(Ee),te)}finally{const xe=T!==null?Ge.get(T).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,N,F,O,U,te,le){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(pe=pe[le]),pe){we.bindFramebuffer(D.FRAMEBUFFER,pe);try{const xe=w.texture,Ae=xe.format,Ee=xe.type;if(!dt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-O&&F>=0&&F<=w.height-U){const be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),D.readPixels(N,F,O,U,ae.convert(Ae),ae.convert(Ee),0),D.flush();const Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await cp(D,Je,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te)}finally{D.deleteBuffer(be),D.deleteSync(Je)}return te}}finally{const xe=T!==null?Ge.get(T).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(w,N=null,F=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const O=Math.pow(2,-F),U=Math.floor(w.image.width*O),te=Math.floor(w.image.height*O),le=N!==null?N.x:0,pe=N!==null?N.y:0;De.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,le,pe,U,te),we.unbindTexture()},this.copyTextureToTexture=function(w,N,F=null,O=null,U=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,F=null);let te,le,pe,xe,Ae,Ee;F!==null?(te=F.max.x-F.min.x,le=F.max.y-F.min.y,pe=F.min.x,xe=F.min.y):(te=w.image.width,le=w.image.height,pe=0,xe=0),O!==null?(Ae=O.x,Ee=O.y):(Ae=0,Ee=0);const be=ae.convert(N.format),Je=ae.convert(N.type);De.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ft=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zt=D.getParameter(D.UNPACK_SKIP_PIXELS),tt=D.getParameter(D.UNPACK_SKIP_ROWS),ye=D.getParameter(D.UNPACK_SKIP_IMAGES),Bt=w.isCompressedTexture?w.mipmaps[U]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,xe),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Ae,Ee,te,le,be,Je,Bt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Ae,Ee,Bt.width,Bt.height,be,Bt.data):D.texSubImage2D(D.TEXTURE_2D,U,Ae,Ee,be,Je,Bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ye),U===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,N,F=null,O=null,U=0){w.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0);let te,le,pe,xe,Ae,Ee,be,Je,ft;const pt=w.isCompressedTexture?w.mipmaps[U]:w.image;F!==null?(te=F.max.x-F.min.x,le=F.max.y-F.min.y,pe=F.max.z-F.min.z,xe=F.min.x,Ae=F.min.y,Ee=F.min.z):(te=pt.width,le=pt.height,pe=pt.depth,xe=0,Ae=0,Ee=0),O!==null?(be=O.x,Je=O.y,ft=O.z):(be=0,Je=0,ft=0);const Zt=ae.convert(N.format),tt=ae.convert(N.type);let ye;if(N.isData3DTexture)De.setTexture3D(N,0),ye=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)De.setTexture2DArray(N,0),ye=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Bt=D.getParameter(D.UNPACK_ROW_LENGTH),rt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Fn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ur=D.getParameter(D.UNPACK_SKIP_ROWS),Ti=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(ye,U,be,Je,ft,te,le,pe,Zt,tt,pt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,U,be,Je,ft,te,le,pe,Zt,pt.data):D.texSubImage3D(ye,U,be,Je,ft,te,le,pe,Zt,tt,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ur),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ti),U===0&&N.generateMipmaps&&D.generateMipmap(ye),we.unbindTexture()},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&De.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?De.setTextureCube(w,0):w.isData3DTexture?De.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?De.setTexture2DArray(w,0):De.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,we.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sc?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Vo?"display-p3":"srgb"}}let mx=class Ku{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(e),this.near=t,this.far=n}clone(){return new Ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}};class gx extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ju{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return wc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new E;class br{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new br(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mi extends ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hs;const Qs=new E,us=new E,ds=new E,fs=new ue,Js=new ue,$u=new Te,io=new E,er=new E,so=new E,gh=new ue,Na=new ue,_h=new ue;class wr extends ut{constructor(e=new mi){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new St;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ju(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new br(n,3,0,!1)),hs.setAttribute("uv",new br(n,2,3,!1))}this.geometry=hs,this.material=e,this.center=new ue(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),$u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;ro(io.set(-.5,-.5,0),ds,o,us,i,s),ro(er.set(.5,-.5,0),ds,o,us,i,s),ro(so.set(.5,.5,0),ds,o,us,i,s),gh.set(0,0),Na.set(1,0),_h.set(1,1);let a=e.ray.intersectTriangle(io,er,so,!1,Qs);if(a===null&&(ro(er.set(-.5,.5,0),ds,o,us,i,s),Na.set(0,1),a=e.ray.intersectTriangle(io,so,er,!1,Qs),a===null))return;const c=e.ray.origin.distanceTo(Qs);c<e.near||c>e.far||t.push({distance:c,point:Qs.clone(),uv:mn.getInterpolation(Qs,io,er,so,gh,Na,_h,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ro(r,e,t,n,i,s){fs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Js.x=s*fs.x-i*fs.y,Js.y=i*fs.x+s*fs.y):Js.copy(fs),r.copy(e),r.x+=Js.x,r.y+=Js.y,r.applyMatrix4($u)}const xh=new E,vh=new at,Mh=new at,_x=new E,yh=new Te,oo=new E,Ua=new Ln,Sh=new Te,Fa=new Cr;class xx extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jc,this.bindMatrix=new Te,this.bindMatrixInverse=new Te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingBox.expandByPoint(oo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oo),this.boundingSphere.expandByPoint(oo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1&&(Sh.copy(i).invert(),Fa.copy(e.ray).applyMatrix4(Sh),!(this.boundingBox!==null&&Fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;vh.fromBufferAttribute(i.attributes.skinIndex,e),Mh.fromBufferAttribute(i.attributes.skinWeight,e),xh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Mh.getComponent(s);if(o!==0){const a=vh.getComponent(s);yh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_x.copy(xh).applyMatrix4(yh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zu extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qu extends yt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Gt,h=Gt,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new Te,vx=new Te;class Rc{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Te;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:vx;bh.multiplyMatrices(a,t[s]),bh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Rc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qu(t,e,e,gn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Zu),this.bones.push(o),this.boneInverses.push(new Te().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class cc extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new Te,wh=new Te,ao=[],Th=new Mn,Mx=new Te,tr=new ze,nr=new Ln;class Ns extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Th.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Th)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),nr.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ps),wh.multiplyMatrices(n,ps),tr.matrixWorld=wh,tr.raycast(e,ao);for(let o=0,a=ao.length;o<a;o++){const c=ao[o];c.instanceId=s,c.object=this,t.push(c)}ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qu(new Float32Array(i*this.count),i,this.count,Tu,Tn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ju extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new E,Oo=new E,Ah=new Te,ir=new Cr,co=new Ln,Ba=new E,Eh=new E;class Cc extends ut{constructor(e=new St,t=new Ju){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Bo.fromBufferAttribute(t,i-1),Oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bo.distanceTo(Oo);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(i),co.radius+=s,e.ray.intersectsSphere(co)===!1)return;Ah.copy(i).invert(),ir.copy(e.ray).applyMatrix4(Ah);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),x=lo(this,e,ir,c,p,v);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=lo(this,e,ir,c,_,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=lo(this,e,ir,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=lo(this,e,ir,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lo(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(Bo.fromBufferAttribute(o,i),Oo.fromBufferAttribute(o,s),t.distanceSqToSegment(Bo,Oo,Ba,Eh)>n)return;Ba.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ba);if(!(c<e.near||c>e.far))return{distance:c,point:Eh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}const Rh=new E,Ch=new E;class yx extends Cc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Rh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rh.distanceTo(Ch);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sx extends Cc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ed extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ph=new Te,lc=new Cr,ho=new Ln,uo=new E;class bx extends ut{constructor(e=new St,t=new ed){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;Ph.copy(i).invert(),lc.copy(e.ray).applyMatrix4(Ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);uo.fromBufferAttribute(u,m),Ih(uo,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)uo.fromBufferAttribute(u,g),Ih(uo,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ih(r,e,t,n,i,s,o){const a=lc.distanceSqToPoint(r);if(a<t){const c=new E;lc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class yi extends yt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn extends St{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function v(){const S=new E,C=new E;let A=0;const T=(t-e)/n;for(let P=0;P<=s;P++){const M=[],y=P/s,I=y*(t-e)+e;for(let B=0;B<=i;B++){const k=B/i,H=k*c+a,q=Math.sin(H),G=Math.cos(H);C.x=I*q,C.y=-y*n+m,C.z=I*G,u.push(C.x,C.y,C.z),S.set(q,T,G).normalize(),d.push(S.x,S.y,S.z),f.push(k,1-y),M.push(g++)}_.push(M)}for(let P=0;P<i;P++)for(let M=0;M<s;M++){const y=_[M][P],I=_[M+1][P],B=_[M+1][P+1],k=_[M][P+1];h.push(y,I,k),h.push(I,B,k),A+=6}l.addGroup(p,A,0),p+=A}function x(S){const C=g,A=new ue,T=new E;let P=0;const M=S===!0?e:t,y=S===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const I=g;for(let B=0;B<=i;B++){const H=B/i*c+a,q=Math.cos(H),G=Math.sin(H);T.x=M*G,T.y=m*y,T.z=M*q,u.push(T.x,T.y,T.z),d.push(0,y,0),A.x=q*.5+.5,A.y=G*.5*y+.5,f.push(A.x,A.y),g++}for(let B=0;B<i;B++){const k=C+B,H=I+B;S===!0?h.push(H,H+1,k):h.push(H+1,H,k),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hi extends yn{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Hi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pc extends St{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new E,S=new E,C=new E;for(let A=0;A<t.length;A+=3)f(t[A+0],x),f(t[A+1],S),f(t[A+2],C),c(x,S,C,v)}function c(v,x,S,C){const A=C+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const M=v.clone().lerp(S,P/A),y=x.clone().lerp(S,P/A),I=A-P;for(let B=0;B<=I;B++)B===0&&P===A?T[P][B]=M:T[P][B]=M.clone().lerp(y,B/I)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){const y=Math.floor(M/2);M%2===0?(d(T[P][y+1]),d(T[P+1][y]),d(T[P][y])):(d(T[P][y+1]),d(T[P+1][y+1]),d(T[P+1][y]))}}function l(v){const x=new E;for(let S=0;S<s.length;S+=3)x.x=s[S+0],x.y=s[S+1],x.z=s[S+2],x.normalize().multiplyScalar(v),s[S+0]=x.x,s[S+1]=x.y,s[S+2]=x.z}function h(){const v=new E;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const S=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;o.push(S,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],S=o[v+2],C=o[v+4],A=Math.max(x,S,C),T=Math.min(x,S,C);A>.9&&T<.1&&(x<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,x){const S=v*3;x.x=e[S+0],x.y=e[S+1],x.z=e[S+2]}function g(){const v=new E,x=new E,S=new E,C=new E,A=new ue,T=new ue,P=new ue;for(let M=0,y=0;M<s.length;M+=9,y+=6){v.set(s[M+0],s[M+1],s[M+2]),x.set(s[M+3],s[M+4],s[M+5]),S.set(s[M+6],s[M+7],s[M+8]),A.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),C.copy(v).add(x).add(S).divideScalar(3);const I=m(C);_(A,y+0,v,I),_(T,y+2,x,I),_(P,y+4,S,I)}}function _(v,x,S,C){C<0&&v.x===1&&(o[x]=v.x-1),S.x===0&&S.z===0&&(o[x]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.vertices,e.indices,e.radius,e.details)}}class Zn extends Pc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zn(e.radius,e.detail)}}class qo extends St{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new E,g=new ue;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=s+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,x=v,S=v+n+1,C=v+n+2,A=v+1;a.push(x,S,A),a.push(S,C,A)}}this.setIndex(a),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ic extends St{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const A=C/t;u.x=-e*Math.cos(i+A*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+A*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+S,1-x),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=h[p][v+1],S=h[p][v],C=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&f.push(x,S,A),(p!==n-1||c<Math.PI)&&f.push(S,C,A)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lc extends St{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wx extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qn extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends Qn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class An extends ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function fo(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Tx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ax(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function td(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ex extends Pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gs,endingEnd:gs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _s:s=e,a=2*t-n;break;case Lo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _s:o=e,c=2*n-t;break;case Lo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,S=f*m-f*_;for(let C=0;C!==a;++C)s[C]=p*o[h+C]+v*o[l+C]+x*o[c+C]+S*o[u+C];return s}}class nd extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class Rx extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case ca:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Tx(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ca,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Mr;class Hs extends Nn{constructor(e,t,n){super(e,t,n)}}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=vr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class id extends Nn{}id.prototype.ValueTypeName="color";class Us extends Nn{}Us.prototype.ValueTypeName="number";class Cx extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)Ft.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Gi extends Nn{InterpolantFactoryMethodLinear(e){return new Cx(this.times,this.values,this.getValueSize(),e)}}Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends Nn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=vr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends Nn{}Fs.prototype.ValueTypeName="vector";class ko{constructor(e="",t=-1,n=[],i=Mc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Ix(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Nn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Ax(c);c=Lh(c,1,h),l=Lh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Us(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];td(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new Us(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Fs,f+".position",d,"pos",i),n(Gi,f+".quaternion",d,"rot",i),n(Fs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Px(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return Fs;case"color":return id;case"quaternion":return Gi;case"bool":case"boolean":return Hs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ix(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Px(r.type);if(r.times===void 0){const t=[],n=[];td(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const fi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Lx{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Dx=new Lx;class Vs{constructor(e){this.manager=e!==void 0?e:Dx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class Nx extends Error{constructor(e,t){super(e),this.response=t}}class sd extends Vs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=fi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:i});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Gn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:S})=>{if(x)p.close();else{_+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,T=h.length;A<T;A++){const P=h[A];P.onProgress&&P.onProgress(C)}p.enqueue(S),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new Nx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{fi.add(e,l);const h=Gn[e];delete Gn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Gn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Gn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ux extends Vs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=yr("img");function c(){h(),fi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Fx extends Vs{constructor(e){super(e)}load(e,t,n,i){const s=new yt,o=new Ux(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Yo extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Bx extends Yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Oa=new Te,Dh=new E,Nh=new E;class Dc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dh),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),Oa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ox extends Dc{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kx extends Yo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Ox}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uh=new Te,sr=new E,ka=new E;class zx extends Dc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(sr),ka.copy(n.position),ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ka),n.updateMatrixWorld(),i.makeTranslation(-sr.x,-sr.y,-sr.z),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh)}}class Hx extends Yo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Gx extends Dc{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rd extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Gx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vx extends Vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=fi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return fi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),fi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});fi.add(e,c),s.manager.itemStart(e)}}class od{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Fh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Fh(){return(typeof performance>"u"?Date:performance).now()}class Wx{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ft.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Ft.multiplyQuaternionsFlat(e,o,e,t,e,n),Ft.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Nc="\\[\\]\\.:\\/",Xx=new RegExp("["+Nc+"]","g"),Uc="[^"+Nc+"]",qx="[^"+Nc.replace("\\.","")+"]",Yx=/((?:WC+[\/:])*)/.source.replace("WC",Uc),Kx=/(WCOD+)?/.source.replace("WCOD",qx),jx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),$x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),Zx=new RegExp("^"+Yx+Kx+jx+$x+"$"),Qx=["material","materials","bones","map"];class Jx{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xx,"")}static parseTrackName(e){const t=Zx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Qx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=Jx;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ev{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:gs,endingEnd:gs};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=If,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Df:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Mc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Lf;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Cu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=_s,i.endingEnd=_s):(e?i.endingStart=this.zeroSlopeAtStart?_s:gs:i.endingStart=Lo,t?i.endingEnd=this.zeroSlopeAtEnd?_s:gs:i.endingEnd=Lo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const tv=new Float32Array(1);class nv extends Xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new Wx(et.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new nd(new Float32Array(2),new Float32Array(2),1,tv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?ko.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Mc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new ev(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ko.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Bh=new Te;class ad{constructor(e,t,n=0,i=1/0){this.ray=new Cr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bh),this}intersectObject(e,t=!0,n=[]){return hc(e,this,n,t),n.sort(Oh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)hc(e[i],this,n,t);return n.sort(Oh),n}}function Oh(r,e){return r.distance-e.distance}function hc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)hc(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_c);const ke=2,Vi=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams,cd={small:72,medium:96,large:128},Ko=cd[Vi.get("size")]?Vi.get("size"):"medium",Fc=cd[Ko],Ie=Fc*ke,iv=/^[0-9a-z]+$/.test(Vi.get("seed")||"")?parseInt(Vi.get("seed"),36)>>>0:Math.random()*1e9|0,ld={green:{name:"Green",moist:0,forestMul:1},arid:{name:"Arid",moist:-.34,forestMul:.55},lush:{name:"Lush",moist:.28,forestMul:1.5}},jo=ld[Vi.get("biome")]?Vi.get("biome"):"green",hd=ld[jo],vi=Vi.get("foes")==="2"?2:1,kh=10,sv=120,de=0,rv=1,ov=[3108832,13777710,10170585],av=["Blue","Red","Purple"],qt=[{name:"Dark Age",cost:null},{name:"Feudal Age",cost:{food:400,gold:0},time:25},{name:"Castle Age",cost:{food:700,gold:200},time:35},{name:"Imperial Age",cost:{food:1e3,gold:600},time:45}],uc=[1,1.15,1.32,1.5],cv=[1,1.15,1.32,1.5],_n={villager:{name:"Villager",icon:"🧑",age:1,cost:{food:50},trainTime:9,hp:32,atk:3,range:.6,atkSpeed:1.4,speed:5.4,aggro:0,gatherRate:1.25},militia:{name:"Militia",icon:"⚔️",age:1,cost:{food:50,gold:15},trainTime:9,hp:52,atk:7,range:.7,atkSpeed:1.3,speed:4.9,aggro:11},spearman:{name:"Spearman",icon:"🔱",age:2,cost:{food:40,wood:25},trainTime:9,hp:55,atk:7,range:.8,atkSpeed:1.4,speed:5.2,aggro:11,bonusVsCav:2.5},archer:{name:"Archer",icon:"🏹",age:2,cost:{wood:30,gold:35},trainTime:10,hp:36,atk:6,range:11,atkSpeed:1.6,speed:5,aggro:12,projectile:"arrow"},knight:{name:"Knight",icon:"🐎",age:3,cost:{food:70,gold:60},trainTime:13,hp:110,atk:12,range:.9,atkSpeed:1.5,speed:7.2,aggro:12,cavalry:!0},catapult:{name:"Catapult",icon:"🪓",age:4,cost:{wood:140,gold:80},trainTime:18,hp:85,atk:38,range:13,atkSpeed:4.5,speed:3.4,aggro:13,projectile:"stone",splash:2.6,bonusVsBuilding:2.2,minRange:3}},Bs={towncenter:{name:"Town Center",icon:"🏛️",age:1,cost:{wood:300},buildTime:50,hp:1450,size:4,pop:10,dropoff:!0,trains:["villager"],researchesAge:!0,attack:{atk:6,range:12,atkSpeed:1.8,needsGarrison:!1}},house:{name:"House",icon:"🏠",age:1,cost:{wood:30},buildTime:9,hp:280,size:2,pop:5},storehouse:{name:"Storehouse",icon:"📦",age:1,cost:{wood:45},buildTime:10,hp:320,size:2,dropoff:!0},barracks:{name:"Barracks",icon:"⚔️",age:1,cost:{wood:125},buildTime:18,hp:750,size:3,trains:["militia","spearman"]},farm:{name:"Farm",icon:"🌾",age:1,cost:{wood:50},buildTime:8,hp:120,size:2,isFarm:!0,farmRate:.85},archeryrange:{name:"Archery Range",icon:"🏹",age:2,cost:{wood:140},buildTime:18,hp:700,size:3,trains:["archer"]},tower:{name:"Watch Tower",icon:"🗼",age:2,cost:{wood:40,stone:70},buildTime:16,hp:620,size:1,attack:{atk:7,range:13,atkSpeed:1.7}},wall:{name:"Palisade Wall",icon:"🚧",age:2,cost:{wood:8},buildTime:4,hp:320,size:1,isWall:!0},gate:{name:"Gate",icon:"🚪",age:2,cost:{wood:10,stone:15},buildTime:6,hp:400,size:1,isWall:!0,isGate:!0},blacksmith:{name:"Blacksmith",icon:"⚒️",age:2,cost:{wood:120},buildTime:16,hp:640,size:2,techs:["forging","scalearmor","wheelbarrow","masonry"]},market:{name:"Market",icon:"⚖️",age:2,cost:{wood:110},buildTime:14,hp:600,size:2,isMarket:!0},stable:{name:"Stable",icon:"🐎",age:3,cost:{wood:160},buildTime:20,hp:800,size:3,trains:["knight"]},siegeworkshop:{name:"Siege Workshop",icon:"🪓",age:4,cost:{wood:190,gold:60},buildTime:22,hp:850,size:3,trains:["catapult"]}},lv=["house","storehouse","farm","barracks","archeryrange","tower","wall","gate","blacksmith","market","stable","siegeworkshop","towncenter"],Wi={forging:{name:"Forging",icon:"🔥",age:2,cost:{food:120,gold:60},time:25,desc:"+15% unit attack",mod:{atkMult:1.15}},scalearmor:{name:"Scale Armor",icon:"🛡",age:2,cost:{food:100,gold:80},time:25,desc:"+15% unit HP",mod:{hpMult:1.15}},wheelbarrow:{name:"Wheelbarrow",icon:"🛒",age:2,cost:{food:150,wood:60},time:30,desc:"+15% gather rate",mod:{gatherMult:1.15}},masonry:{name:"Masonry",icon:"🧱",age:3,cost:{food:130,stone:60},time:30,desc:"+20% building HP",mod:{bldHpMult:1.2}}},Xt={lot:100,sellGold:60,buyGold:90},Bc=["wood","food","gold","stone"],hv={tree:{name:"Tree",res:"wood",amount:110},berry:{name:"Berry Bush",res:"food",amount:160},gold:{name:"Gold Mine",res:"gold",amount:850},stone:{name:"Stone Mine",res:"stone",amount:700}},uv={wood:220,food:220,gold:120,stone:80};function xn(r,e){return e?Bc.every(t=>(r[t]||0)>=(e[t]||0)):!0}function wo(r,e){if(e)for(const t of Bc)r[t]=(r[t]||0)-(e[t]||0)}function To(r,e){if(e)for(const t of Bc)r[t]=(r[t]||0)+(e[t]||0)}function za(r){let e=r>>>0;const t=()=>(e=e*1664525+1013904223>>>0,e/4294967296),n=64,i=new Float32Array(n*n);for(let o=0;o<i.length;o++)i[o]=t();const s=o=>o*o*(3-2*o);return(o,a)=>{o=(o%n+n)%n,a=(a%n+n)%n;const c=Math.floor(o),l=Math.floor(a),h=(c+1)%n,u=(l+1)%n,d=s(o-c),f=s(a-l),g=i[l*n+c],_=i[l*n+h],m=i[u*n+c],p=i[u*n+h];return g+(_-g)*d+(m-g)*f+(g-_-m+p)*d*f}}const tn=-.55;class dv{constructor(e=Math.random()*1e9|0){this.size=Fc,this.seed=e,this.noise=za(e),this.noise2=za(e^2654435769),this.moistNoise=za(e^1374772973),this.walk=new Uint8Array(this.size*this.size),this.occupant=new Array(this.size*this.size).fill(null),this.gateOwner=new Int8Array(this.size*this.size).fill(-1);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){const i=this.tileHeight(n,t);this.walk[t*this.size+n]=i>tn?1:0}this.version=0}heightAt(e,t){const n=e/26,i=t/26;let s=(this.noise(n,i)-.5)*2.6+(this.noise2(n*2.7,i*2.7)-.5)*1.1;const o=this.noise2(e/60+11,t/60+7);o<.15&&(s-=(.15-o)*12);const a=e-this.size*ke/2,c=t-this.size*ke/2,l=Math.max(Math.abs(a),Math.abs(c))/(this.size*ke/2);return l>.86&&(s+=(l-.86)*9),s}moistureAt(e,t){return Math.max(0,Math.min(1,this.moistNoise(e/34+3,t/34+9)+hd.moist))}tileHeight(e,t){return this.heightAt((e+.5)*ke,(t+.5)*ke)}inBounds(e,t){return e>=0&&t>=0&&e<this.size&&t<this.size}isWalkable(e,t){return this.inBounds(e,t)?this.walk[t*this.size+e]===1:!1}occupantAt(e,t){return this.inBounds(e,t)?this.occupant[t*this.size+e]:null}worldToGrid(e,t){return[Math.floor(e/ke),Math.floor(t/ke)]}gridToWorld(e,t){return[(e+.5)*ke,(t+.5)*ke]}canPlace(e,t,n){for(let i=t;i<t+n;i++)for(let s=e;s<e+n;s++){if(!this.inBounds(s,i))return!1;const o=i*this.size+s;if(this.walk[o]!==1||this.occupant[o])return!1}return!0}occupy(e,t,n,i,s=-1){for(let o=t;o<t+n;o++)for(let a=e;a<e+n;a++){const c=o*this.size+a;this.walk[c]=0,this.gateOwner[c]=s,this.occupant[c]=i}this.version++}release(e,t,n){for(let i=t;i<t+n;i++)for(let s=e;s<e+n;s++){const o=i*this.size+s,a=this.tileHeight(s,i);this.walk[o]=a>tn?1:0,this.gateOwner[o]=-1,this.occupant[o]=null}this.version++}isWalkableFor(e,t,n){if(!this.inBounds(e,t))return!1;const i=t*this.size+e;return this.walk[i]===1||this.gateOwner[i]===n}nearestWalkable(e,t,n=10){if(this.isWalkable(e,t))return[e,t];for(let i=1;i<=n;i++)for(let s=-i;s<=i;s++)for(let o=-i;o<=i;o++)if(Math.max(Math.abs(o),Math.abs(s))===i&&this.isWalkable(e+o,t+s))return[e+o,t+s];return null}}function fv(r,e,t=!1){const n=[],i=r.size;let o=(r.seed^11259375)>>>0;const a=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=(u,d,f)=>e.every(g=>Math.hypot(u-g[0],d-g[1])>f),l=(u,d,f)=>!r.inBounds(u,d)||!r.isWalkable(u,d)||r.occupantAt(u,d)?!1:(n.push({type:f,gx:u,gy:d}),r.occupy(u,d,1,{isResourceReservation:!0,type:f}),!0),h=Math.round((t?7:26)*hd.forestMul*(i/96));for(let u=0;u<h;u++){const d=6+a()*(i-12),f=6+a()*(i-12);if(!c(d,f,11))continue;const g=2.4+a()*3.4;for(let _=Math.floor(f-g);_<=f+g;_++)for(let m=Math.floor(d-g);m<=d+g;m++){const p=Math.hypot(m-d,_-f);p<=g&&a()<.82-p/(g*2.2)&&l(m,_,"tree")}}for(let u=0;u<9;u++){const d=Math.floor(8+a()*(i-16)),f=Math.floor(8+a()*(i-16));if(c(d,f,13))for(let g=0;g<4;g++)l(d+g%2,f+Math.floor(g/2),"gold")}for(let u=0;u<7;u++){const d=Math.floor(8+a()*(i-16)),f=Math.floor(8+a()*(i-16));if(c(d,f,13))for(let g=0;g<4;g++)l(d+g%2,f+Math.floor(g/2),"stone")}for(let u=0;u<10;u++){const d=Math.floor(8+a()*(i-16)),f=Math.floor(8+a()*(i-16));if(c(d,f,13))for(let g=0;g<5;g++)l(d+Math.floor(a()*3)-1,f+Math.floor(a()*3)-1,"berry")}for(const[u,d]of e){const f=a()*Math.PI*2;for(let T=0;T<(t?8:26);T++){const P=f+(a()-.5)*1.7,M=9+a()*4;l(Math.round(u+Math.cos(P)*M),Math.round(d+Math.sin(P)*M),"tree")}const g=f+Math.PI*(.6+a()*.5),_=Math.round(u+Math.cos(g)*8),m=Math.round(d+Math.sin(g)*8);for(let T=0;T<6;T++)l(_+Math.floor(a()*3)-1,m+Math.floor(a()*3)-1,"berry");const p=g+Math.PI*(.4+a()*.4),v=Math.round(u+Math.cos(p)*10),x=Math.round(d+Math.sin(p)*10);for(let T=0;T<4;T++)l(v+T%2,x+Math.floor(T/2),"gold");const S=p+Math.PI*(.35+a()*.3),C=Math.round(u+Math.cos(S)*12),A=Math.round(d+Math.sin(S)*12);for(let T=0;T<4;T++)l(C+T%2,A+Math.floor(T/2),"stone")}return n}function pv(r,e=2){const t=r.size,n=e>=3?[[[18,18],[t-22,t-22],[t-22,18]],[[18,18],[t-22,t-22],[18,t-22]]]:[[[18,18],[t-22,t-22]],[[t-22,18],[18,t-22]]],i=([a,c])=>{let l=0;for(let h=-4;h<=4;h++)for(let u=-4;u<=4;u++)r.isWalkable(a+u,c+h)||l++;return l};let s=n[0],o=1/0;for(const a of n){const c=a.reduce((l,h)=>l+i(h),0);c<o&&(o=c,s=a)}return s.map(([a,c])=>r.nearestWalkable(a,c,14)||[a,c])}const ud={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ws{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const mv=new Wo(-1,1,1,-1,0,1);class gv extends St{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const _v=new gv;class Oc{constructor(e){this._mesh=new ze(_v,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,mv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xv extends Ws{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Vt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Sr.clone(e.uniforms),this.material=new Vt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Oc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zh extends Ws{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class vv extends Ws{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Mv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ue);this._width=n.width,this._height=n.height,t=new cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xv(ud),this.copyPass.material.blending=Yn,this.clock=new od}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zh!==void 0&&(o instanceof zh?n=!0:o instanceof vv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class yv extends Ws{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new he}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Sv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Os extends Ws{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new he(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(s,o,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new cn(s,o,{type:Kn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new cn(s,o,{type:Kn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=Sv;this.highPassUniforms=Sr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ue(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ud;this.copyUniforms=Sr.clone(h.uniforms),this.blendMaterial=new Vt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ec,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new he,this.oldClearAlpha=1,this.basic=new Pt,this.fsQuad=new Oc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Vt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Vt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Os.BlurDirectionX=new ue(1,0);Os.BlurDirectionY=new ue(0,1);const bv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class wv extends Ws{constructor(){super();const e=bv;this.uniforms=Sr.clone(e.uniforms),this.material=new wx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Oc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_u?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Un(r){const e=document.createElement("canvas");return e.width=e.height=r,[e,e.getContext("2d")]}function ws(r,e,t=1){let n=t>>>0;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=new Float32Array(e*e);for(let a=0;a<s.length;a++)s[a]=i();const o=a=>a*a*(3-2*a);return(a,c)=>{const l=a/r*e,h=c/r*e,u=Math.floor(l)%e,d=Math.floor(h)%e,f=(u+1)%e,g=(d+1)%e,_=o(l-Math.floor(l)),m=o(h-Math.floor(h)),p=s[d*e+u],v=s[d*e+f],x=s[g*e+u],S=s[g*e+f];return p+(v-p)*_+(x-p)*m+(p-v-x+S)*_*m}}function Xs(r,e){const t=ws(r,8,e),n=ws(r,23,e^99),i=ws(r,53,e^7777);return(s,o)=>t(s,o)*.5+n(s,o)*.33+i(s,o)*.17}function qs(r,e=1){const t=new yi(r);return t.wrapS=t.wrapT=$n,t.repeat.set(e,e),t.colorSpace=Ct,t.anisotropy=4,t}function qi(r,e=1.4){const t=r.width,n=r.getContext("2d").getImageData(0,0,t,t).data,i=(l,h)=>{l=(l%t+t)%t,h=(h%t+t)%t;const u=(h*t+l)*4;return(n[u]+n[u+1]+n[u+2])/765},[s,o]=Un(t),a=o.createImageData(t,t);for(let l=0;l<t;l++)for(let h=0;h<t;h++){const u=(i(h+1,l)-i(h-1,l))*e,d=(i(h,l+1)-i(h,l-1))*e,f=1/Math.hypot(u,d,1),g=(l*t+h)*4;a.data[g]=(-u*f*.5+.5)*255,a.data[g+1]=(-d*f*.5+.5)*255,a.data[g+2]=(f*.5+.5)*255,a.data[g+3]=255}o.putImageData(a,0,0);const c=new yi(s);return c.wrapS=c.wrapT=$n,c}function Tv(r=256){const[e,t]=Un(r),n=Xs(r,1234),i=ws(r,96,555),s=t.createImageData(r,r);for(let o=0;o<r;o++)for(let a=0;a<r;a++){let c=.97+(n(a,o)-.5)*.22+(i(a,o)-.5)*.26;c=Math.max(.74,Math.min(1.18,c));const l=(o*r+a)*4;s.data[l]=Math.min(255,c*252),s.data[l+1]=Math.min(255,c*255),s.data[l+2]=Math.min(255,c*246),s.data[l+3]=255}return t.putImageData(s,0,0),{map:qs(e),normalMap:qi(e,.8)}}function Av(r=128){const[e,t]=Un(r),n=Xs(r,4321),i=t.createImageData(r,r);for(let o=0;o<r;o++)for(let a=0;a<r;a++){const c=Math.sin(o/r*Math.PI*18+n(a,o)*5)*.5+.5,l=Math.sin(a/r*Math.PI*60+o*.45)*.5+.5;let h=.66+c*.26+l*.1+(n(a,o)-.5)*.22;const u=(o*r+a)*4;i.data[u]=Math.min(255,h*255),i.data[u+1]=Math.min(255,h*232),i.data[u+2]=Math.min(255,h*178),i.data[u+3]=255}t.putImageData(i,0,0);const s=qi(e,1.6);return s.repeat.set(2,2),{map:qs(e,2),normalMap:s}}function Ev(r=128){const[e,t]=Un(r),n=Xs(r,8765),i=t.createImageData(r,r),s=6,o=4;for(let c=0;c<r;c++)for(let l=0;l<r;l++){const h=c/r*s,u=Math.floor(h)%2*.5,d=l/r*o+u,f=h-Math.floor(h),g=d-Math.floor(d),_=f<.09||g<.06?.62:1;let m=(.78+(n(l,c)-.5)*.3)*_;const p=(c*r+l)*4;i.data[p]=m*255,i.data[p+1]=m*252,i.data[p+2]=m*244,i.data[p+3]=255}t.putImageData(i,0,0);const a=qi(e,2);return a.repeat.set(2,2),{map:qs(e,2),normalMap:a}}function Rv(r=128){const[e,t]=Un(r),n=Xs(r,2468),i=t.createImageData(r,r),s=5;for(let a=0;a<r;a++)for(let c=0;c<r;c++){const l=c/r*s,h=l-Math.floor(l)<.07?.6:1,u=Math.sin(a/r*Math.PI*34+n(c,a)*9)*.5+.5,d=ws(r,s,33)(c,0)*.2;let f=(.72+u*.14+d+(n(c,a)-.5)*.18)*h;const g=(a*r+c)*4;i.data[g]=Math.min(255,f*255),i.data[g+1]=Math.min(255,f*224),i.data[g+2]=Math.min(255,f*184),i.data[g+3]=255}t.putImageData(i,0,0);const o=qi(e,1.5);return o.repeat.set(1.5,1.5),{map:qs(e,1.5),normalMap:o}}function Cv(r=128){const[e,t]=Un(r),n=Xs(r,1357),i=ws(r,64,777),s=t.createImageData(r,r);for(let o=0;o<r;o++)for(let a=0;a<r;a++){let c=.9+(n(a,o)-.5)*.16-(i(a,o)>.82?.12:0);const l=(o*r+a)*4;s.data[l]=c*255,s.data[l+1]=c*250,s.data[l+2]=c*238,s.data[l+3]=255}return t.putImageData(s,0,0),{map:qs(e),normalMap:qi(e,.9)}}function Pv(r=256){const[e,t]=Un(r);t.fillStyle="#9c9c9c",t.fillRect(0,0,r,r);let n=7855;const i=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=(a,c,l,h,u)=>{for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){t.save(),t.translate(a+d*r,c+f*r),t.rotate(h);const g=t.createRadialGradient(0,-l*.2,l*.1,0,0,l);g.addColorStop(0,`rgb(${u},${u},${u})`),g.addColorStop(1,`rgb(${u*.62|0},${u*.62|0},${u*.62|0})`),t.fillStyle=g,t.beginPath(),t.ellipse(0,0,l,l*.6,0,0,Math.PI*2),t.fill(),t.restore()}};for(const[a,c,l,h,u]of[[90,18,30,175,215],[220,9,17,195,240],[380,4,9,210,255]])for(let d=0;d<a;d++)s(i()*r,i()*r,c+i()*(l-c),i()*Math.PI,h+i()*(u-h)|0);return{map:qs(e),normalMap:qi(e,2)}}function Iv(r=128){const[e,t]=Un(r),n=Xs(r,9753),i=t.createImageData(r,r);for(let s=0;s<r;s++)for(let o=0;o<r;o++){const a=.5+Math.sin(n(o,s)*Math.PI*4)*.5,c=(s*r+o)*4;i.data[c]=i.data[c+1]=i.data[c+2]=a*255,i.data[c+3]=255}return t.putImageData(i,0,0),qi(e,1.1)}function Lv(){const[r,e]=Un(256),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#5d9bd4"),t.addColorStop(.55,"#9cc6e8"),t.addColorStop(.8,"#d8e8f2"),t.addColorStop(1,"#e8e2cf"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new yi(r);return n.colorSpace=Ct,n}function Dv(){const[r,e]=Un(64),t=e.createRadialGradient(32,32,4,32,32,30);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.6,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new yi(r)}function Nv(r){const e=new px({canvas:r,antialias:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=pu,e.outputColorSpace=Ct,e.toneMapping=vc,e.toneMappingExposure=1.22;const t=new gx;t.background=new he(10406120),t.fog=new mx(12178660,170,430);const n=new zt(46,window.innerWidth/window.innerHeight,1,1200),i=new ze(new Ic(520,24,12),new Pt({map:Lv(),side:Wt,fog:!1,depthWrite:!1}));i.position.set(Ie/2,-40,Ie/2),i.renderOrder=-10,t.add(i);const s=new Bx(13624821,9075285,.85);t.add(s);const o=new rd(16773848,2);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-8e-4,o.shadow.normalBias=.04;const a=65;o.shadow.camera.left=-a,o.shadow.camera.right=a,o.shadow.camera.top=a,o.shadow.camera.bottom=-a,o.shadow.camera.near=10,o.shadow.camera.far=260,t.add(o),t.add(o.target);const c=new E(-.55,1,.35).normalize();let l=0;function h(_,m=50){o.target.position.copy(_),o.position.copy(_).addScaledVector(c,110);const p=Math.min(150,30+m*1.15);Math.abs(p-l)>2&&(l=p,o.shadow.camera.left=-p,o.shadow.camera.right=p,o.shadow.camera.top=p,o.shadow.camera.bottom=-p,o.shadow.camera.updateProjectionMatrix())}h(new E(Ie/2,0,Ie/2));const u=Math.min(window.devicePixelRatio,2),d=new cn(window.innerWidth*u,window.innerHeight*u,{samples:4,type:Kn}),f=new Mv(e,d);f.addPass(new yv(t,n));const g=new Os(new ue(window.innerWidth,window.innerHeight),.22,.55,.82);return f.addPass(g),f.addPass(new wv),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),f.setSize(window.innerWidth,window.innerHeight)}),{renderer:e,scene:t,camera:n,updateSun:h,composer:f}}function Hh(r,e){if(e===Nf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===rc||e===Pu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===rc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class kc extends Vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Hv(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new Fv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new Jv(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=xr.extractUrlBase(e);o=xr.resolveURL(l,this.path)}else o=xr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new sd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===dd){try{o[Ve.KHR_BINARY_GLTF]=new eM(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new fM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ve.KHR_MATERIALS_UNLIT:o[u]=new Bv;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[u]=new tM(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[u]=new nM;break;case Ve.KHR_MESH_QUANTIZATION:o[u]=new iM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Uv(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Fv{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new he(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],It);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new rd(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Hx(h),l.distance=u;break;case"spot":l=new kx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Bv{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){const i=[];e.color=new he(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(i)}}class Ov{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class kv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(a,a)}return Promise.all(s)}}class zv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Hv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Gv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Vv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Wv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(a[0],a[1],a[2],It),Promise.all(s)}}class Xv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class qv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(s)}}class Yv{constructor(e){this.parser=e,this.name=Ve.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Kv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class jv{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class $v{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Zv{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qv{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Jv{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==on.TRIANGLES&&l.mode!==on.TRIANGLE_STRIP&&l.mode!==on.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Te,m=new E,p=new Ft,v=new E(1,1,1),x=new Ns(g.geometry,g.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&v.fromBufferAttribute(c.SCALE,S),x.setMatrixAt(S,_.compose(m,p,v));for(const S in c)if(S==="_COLOR_0"){const C=c[S];x.instanceColor=new cc(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);ut.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const dd="glTF",rr=12,Gh={JSON:1313821514,BIN:5130562};class eM{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-rr,s=new DataView(e,rr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Gh.JSON){const l=new Uint8Array(e,rr+o,a);this.content=n.decode(l)}else if(c===Gh.BIN){const l=rr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=dc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=dc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ts[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,It,d)})})}}class nM{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iM{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class fd extends Pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,v=1-m,x=p-d+u;for(let S=0;S!==a;S++){const C=o[_+S+a],A=o[_+S+c]*h,T=o[g+S+a],P=o[g+S]*h;s[S]=v*C+x*A+m*T+p*P}return s}}const sM=new Ft;class rM extends fd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return sM.fromArray(s).normalize().toArray(s),s}}const on={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vh={9728:Gt,9729:Ht,9984:yu,9985:So,9986:hr,9987:Xn},Wh={33071:di,33648:Po,10497:$n},Ha={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oM={CUBICSPLINE:void 0,LINEAR:Mr,STEP:vr},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Qn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),r.DefaultMaterial}function Li(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cM(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function lM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hM(r){let e;const t=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Va(t.attributes):e=r.indices+":"+Va(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Va(r.targets[n]);return e}function Va(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function fc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const dM=new Te;class fM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Uv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Fx(this.options.manager):this.textureLoader=new Vx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Li(s,a,i),Wn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(xr.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ha[i.type],a=Ts[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Mt(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ha[i.type],l=Ts[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new l(a,p*f,i.count*f/h),x=new ju(_,f/h),t.cache.add(v,x)),m=new br(x,c,d%f/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new Mt(_,c,g);if(i.sparse!==void 0){const p=Ha.SCALAR,v=Ts[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,C=new v(o[1],x,i.sparse.count*p),A=new l(o[2],S,i.sparse.count*c);a!==null&&(m=new Mt(m.array.slice(),m.itemSize,m.normalized));for(let T=0,P=C.length;T<P;T++){const M=C[T];if(m.setX(M,A[T*c]),c>=2&&m.setY(M,A[T*c+1]),c>=3&&m.setZ(M,A[T*c+2]),c>=4&&m.setW(M,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Vh[d.magFilter]||Ht,h.minFilter=Vh[d.minFilter]||Xn,h.wrapS=Wh[d.wrapS]||$n,h.wrapT=Wh[d.wrapT]||$n,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new yt(_);m.needsUpdate=!0,d(m)}),t.load(xr.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Wn(u,o),u.userData.mimeType=o.mimeType||uM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ed,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ju,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ve.KHR_MATERIALS_UNLIT]){const u=i[Ve.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new he(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],It),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=an);const h=s.alphaMode||Ga.OPAQUE;if(h===Ga.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ga.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ue(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Pt&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Pt){const u=s.emissiveFactor;a.emissive=new he().setRGB(u[0],u[1],u[2],It)}return s.emissiveTexture!==void 0&&o!==Pt&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Wn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Li(i,u,s),u})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Xh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=hM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Xh(new St,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?aM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const v=l[f];if(m.mode===on.TRIANGLES||m.mode===on.TRIANGLE_STRIP||m.mode===on.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new xx(_,v):new ze(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===on.TRIANGLE_STRIP?p.geometry=Hh(p.geometry,Pu):m.mode===on.TRIANGLE_FAN&&(p.geometry=Hh(p.geometry,rc));else if(m.mode===on.LINES)p=new yx(_,v);else if(m.mode===on.LINE_STRIP)p=new Cc(_,v);else if(m.mode===on.LINE_LOOP)p=new Sx(_,v);else if(m.mode===on.POINTS)p=new bx(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&lM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Wn(p,s),m.extensions&&Li(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Li(i,u[0],s),u[0];const d=new Pe;s.extensions&&Li(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(_r.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Te;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Rc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,x=d.length;v<x;v++){const S=d[v],C=f[v],A=g[v],T=_[v],P=m[v];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=n._createAnimationTracks(S,C,A,T,P);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new ko(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,dM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Zu:l.length>1?h=new Pe:l.length===1?h=l[0]:h=new ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Wn(h,s),s.extensions&&Li(n,h,s),s.matrix!==void 0){const u=new Te;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Pe;n.name&&(s.name=i.createUniqueName(n.name)),Wn(s,n),n.extensions&&Li(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof ln||d instanceof yt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];ci[s.path]===ci.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ci[s.path]){case ci.weights:l=Us;break;case ci.rotation:l=Gi;break;case ci.position:case ci.scale:l=Fs;break;default:switch(n.itemSize){case 1:l=Us;break;case 2:case 3:default:l=Fs;break}break}const h=i.interpolation!==void 0?oM[i.interpolation]:Mr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ci[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=fc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Gi?rM:fd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pM(r,e,t){const n=e.attributes,i=new Mn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new E(c[0],c[1],c[2]),new E(l[0],l[1],l[2])),a.normalized){const h=fc(Ts[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new E,c=new E;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=fc(Ts[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ln;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Xh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=dc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ze.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Wn(r,e),pM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?cM(r,e.targets,t):r})}const qh=new Map;function $t(r){let e=qh.get(r);return e||(e=new An({color:r}),qh.set(r,e)),e}let Wa=null;function mM(){return Wa||(Wa={thatch:Av(),stone:Ev(),planks:Rv(),plaster:Cv()}),Wa}const Yh=new Map;function gM(r,e){const t=r+"|"+e;let n=Yh.get(t);if(!n){const i=mM()[r],s=new he(e).multiplyScalar(1.28);n=new Qn({color:s,map:i.map,normalMap:i.normalMap,normalScale:new ue(.85,.85),roughness:.95,metalness:0}),Yh.set(t,n)}return n}function _M(r){switch(r){case J.thatch:case J.thatchDark:case J.wheat:return"thatch";case J.stone:case J.stoneDark:return"stone";case J.plank:case J.wood:case J.woodDark:return"planks";case J.cream:case J.cloth:case 13482902:case 13218441:case 12888184:case 14272931:return"plaster";default:return null}}function xM(r,e){const t=Jn(e??8947848,.62);return r.traverse(n=>{if(!n.isMesh)return;const i=n.material?.color?.getHex?.();if(i===void 0)return;let s=_M(i);s===null&&i===t&&(s="planks"),s&&(n.material=gM(s,i))}),r}const Kh=new Map;function Si(r,e){let t=Kh.get(r);return t||(t=e(),Kh.set(r,t)),t}function ge(r,e,t,n){const i=new ze(Si(`b${r},${e},${t}`,()=>new ei(r,e,t)),$t(n));return i.castShadow=!0,i}function vt(r,e,t,n,i=7){const s=new ze(Si(`c${r},${e},${t},${i}`,()=>new yn(r,e,t,i)),$t(n));return s.castShadow=!0,s}function Cn(r,e,t,n=7){const i=new ze(Si(`k${r},${e},${n}`,()=>new Hi(r,e,n)),$t(t));return i.castShadow=!0,i}function Kt(r,e,t=0){const n=new ze(Si(`s${r},${t}`,()=>new Zn(r,t)),$t(e));return n.castShadow=!0,n}const J={skin:14262379,wood:9069114,woodDark:7031336,plank:11041871,thatch:13215836,thatchDark:11571013,stone:10328720,stoneDark:8157810,cream:15260864,cloth:12101768,leaf:4881466,leafDark:3827248,gold:15251747,berry:12729147,metal:12106948,metalDark:7238264,soil:7032627,wheat:14070606};function Jn(r,e){const t=new he(r);return t.multiplyScalar(e),t.getHex()}function zc(r,{torsoColor:e,legColor:t,headgear:n}={}){const i=new Pe,s=e??r,o=t??5917240,a={};for(const u of[-1,1]){const d=new Pe;d.position.set(u*.16,.82,0);const f=ge(.2,.8,.24,o);f.position.y=-.4,d.add(f),i.add(d),a[u<0?"lLeg":"rLeg"]=d}const c=ge(.62,.72,.4,s);c.position.y=1.18,i.add(c);const l=ge(.64,.1,.42,3812378);l.position.y=.86,i.add(l);const h=Kt(.24,J.skin,1);h.position.y=1.74,i.add(h),a.head=h,n&&(n.position.y=1.74,i.add(n),a.hat=n);for(const u of[-1,1]){const d=new Pe;d.position.set(u*.4,1.46,0);const f=ge(.17,.62,.2,s);f.position.y=-.28,d.add(f);const g=Kt(.09,J.skin,0);g.position.y=-.6,d.add(g),i.add(d),a[u<0?"lArm":"rArm"]=d}return i.userData.limbs=a,i}function vM(r){const e=zc(r,{torsoColor:J.cloth}),t=ge(.66,.16,.44,r);t.position.y=1.32,t.rotation.z=.18,e.add(t);const n=new Pe,i=vt(.035,.035,.62,J.woodDark,5);i.rotation.x=Math.PI/2,n.add(i);const s=ge(.06,.18,.22,J.metal);return s.position.set(0,.08,.26),n.add(s),n.position.set(0,-.6,.1),e.userData.limbs.rArm.add(n),e.userData.tool=n,e}function jh(r){const e=Cn(.26,.3,J.metalDark,7);e.position.y=.16;const t=new Pe;t.add(e);const n=zc(r,{torsoColor:r,headgear:t}),i=new Pe,s=ge(.06,.7,.1,J.metal);s.position.y=-.35,s.rotation.x=Math.PI,i.add(s);const o=ge(.2,.05,.12,J.woodDark);i.add(o),i.position.set(0,-.62,0),i.rotation.x=-Math.PI*.45,n.userData.limbs.rArm.add(i);const a=vt(.3,.3,.07,Jn(r,.75),8);a.rotation.z=Math.PI/2,a.position.set(-.14,-.35,.1);const c=Kt(.08,J.metal,0);return c.position.set(-.2,-.35,.1),n.userData.limbs.lArm.add(a,c),n}function MM(r){const e=Cn(.27,.34,Jn(r,.8),7);e.position.y=.12;const t=new Pe;t.add(e);const n=zc(r,{torsoColor:7043658,headgear:t}),i=ge(.66,.14,.44,r);i.position.y=1.3,i.rotation.z=-.2,n.add(i);const s=new ze(Si("bow",()=>new Lc(.42,.035,5,10,Math.PI)),$t(J.woodDark));s.castShadow=!0,s.rotation.y=Math.PI/2,s.rotation.z=Math.PI/2,s.position.set(0,-.55,.05),n.userData.limbs.lArm.add(s);const o=vt(.09,.09,.46,J.wood,6);return o.position.set(.18,1.3,-.26),o.rotation.x=.3,n.add(o),n}function yM(r){const e=new Pe,t={},n=7229235,i=ge(.62,.62,1.5,n);i.position.y=1,e.add(i);const s=ge(.3,.6,.34,n);s.position.set(0,1.45,.72),s.rotation.x=.45,e.add(s);const o=ge(.26,.28,.52,6111529);o.position.set(0,1.74,.95),e.add(o);let a=0;for(const p of[.55,-.55])for(const v of[-.22,.22]){const x=new Pe;x.position.set(v,.78,p);const S=ge(.16,.78,.18,6111529);S.position.y=-.39,x.add(S),e.add(x),t["hLeg"+a++]=x}const c=ge(.12,.5,.14,4008986);c.position.set(0,1.05,-.85),c.rotation.x=-.5,e.add(c);const l=ge(.7,.3,1.2,r);l.position.y=1.22,e.add(l);const h=ge(.42,.56,.34,Jn(r,.85));h.position.set(0,1.78,-.1),e.add(h);const u=Kt(.2,J.skin,1);u.position.set(0,2.2,-.1),e.add(u);const d=Cn(.22,.28,J.metal,7);d.position.set(0,2.38,-.1),e.add(d);const f=new Pe;f.position.set(.3,1.95,-.1);const g=ge(.14,.4,.16,Jn(r,.85));g.position.y=-.18,f.add(g);const _=vt(.03,.05,1.7,J.plank,5);_.rotation.x=Math.PI/2-.12,_.position.set(0,-.3,.5),f.add(_);const m=Cn(.06,.18,J.metal,5);return m.rotation.x=Math.PI/2,m.position.set(0,-.2,1.36),f.add(m),e.add(f),t.rArm=f,e.userData.limbs=t,e.userData.isMounted=!0,e}function SM(r){const e=new Pe,t=ge(1.1,.26,1.7,J.wood);t.position.y=.5,e.add(t);for(const h of[.6,-.6])for(const u of[-.62,.62]){const d=vt(.34,.34,.14,J.woodDark,9);d.rotation.z=Math.PI/2,d.position.set(u,.34,h),e.add(d)}for(const h of[-.4,.4]){const u=ge(.12,.9,.14,J.woodDark);u.position.set(h,.95,.1),e.add(u)}const n=vt(.06,.06,.92,J.woodDark,6);n.rotation.z=Math.PI/2,n.position.set(0,1.3,.1),e.add(n);const i=new Pe;i.position.set(0,1.3,.1);const s=ge(.14,.14,1.9,J.plank);s.position.z=-.55,i.add(s);const o=vt(.22,.16,.18,J.woodDark,7);o.position.set(0,.06,-1.45),i.add(o);const a=ge(.4,.4,.3,J.stoneDark);a.position.z=.5,i.add(a),i.rotation.x=-.5,e.add(i);const c=vt(.025,.025,.7,J.woodDark,4);c.position.set(.5,1.1,-.75),e.add(c);const l=ge(.3,.18,.02,r);return l.position.set(.65,1.32,-.75),e.add(l),e.userData.limbs={throwArm:i},e.userData.isMachine=!0,e}const bM={villager:vM,militia:jh,spearman:jh,archer:MM,knight:yM,catapult:SM};function pd(r,e=4){return Ys(r,e)}function Ys(r,e=4){const t=new Pe,n=vt(.05,.05,e,J.woodDark,5);n.position.y=e/2,t.add(n);const i=ge(.9,.55,.04,r);return i.position.set(.48,e-.35,0),t.add(i),t}function wM(r){const e=new Pe,t=7.2,n=ge(t+.6,.5,t+.6,J.stone);n.position.y=.25,e.add(n);const i=ge(t-1.2,2.6,t-1.2,J.cream);i.position.y=1.8,e.add(i);for(const u of[-6/2,(t-1.2)/2])for(const d of[-6/2,(t-1.2)/2]){const f=ge(.34,2.6,.34,J.woodDark);f.position.set(u,1.8,d),e.add(f)}const s=ge(t-2.6,1.5,t-2.6,14272931);s.position.y=3.85,e.add(s);const o=Cn((t-1.4)*.78,2.4,J.thatch,4);o.position.y=5.7,o.rotation.y=Math.PI/4,e.add(o);const a=Cn(.5,.8,r,4);a.position.y=7.1,a.rotation.y=Math.PI/4,e.add(a);const c=Cn(t*.74,1.1,J.thatchDark,4);c.position.y=3.55,c.rotation.y=Math.PI/4,e.add(c);const l=ge(1.3,1.6,.2,J.woodDark);l.position.set(0,1.05,(t-1.2)/2+.05),e.add(l);const h=Ys(r,5.2);return h.position.set(t/2-.5,.5,t/2-.5),e.add(h),e}function TM(r){const e=new Pe,t=ge(3.2,1.7,2.8,J.cream);t.position.y=.95,e.add(t);const n=new ze(Si("gable3.8",()=>{const c=new yn(1.55,1.55,3.8,3,1);return c.rotateZ(Math.PI/2),c.rotateX(Math.PI/6+Math.PI/2),c}),$t(J.thatch));n.castShadow=!0,n.scale.set(1,.72,1.05),n.position.y=2.1,e.add(n);const i=ge(.7,1.1,.15,J.woodDark);i.position.set(.5,.65,1.45),e.add(i);const s=ge(.5,.45,.12,4863264);s.position.set(-.8,1.2,1.45),e.add(s);const o=ge(.4,1,.4,J.stoneDark);o.position.set(-1.1,2.5,0),e.add(o);const a=ge(3.3,.16,2.9,r);return a.position.y=1.75,e.add(a),e}function Xa(r){const e=new Pe,t=ge(3,1.6,3,J.plank);t.position.y=.9,e.add(t);const n=ge(3.5,.25,3.5,J.woodDark);n.position.y=1.85,e.add(n);const i=ge(2.2,.25,2.2,J.wood);i.position.y=2.35,e.add(i);const s=ge(.7,.7,.7,J.wood);s.position.set(1.7,.45,1),e.add(s);const o=ge(.55,.55,.55,J.plank);o.position.set(1.85,.35,.1),e.add(o);const a=Kt(.4,J.cloth,1);a.scale.y=.75,a.position.set(-1.7,.3,1.2),e.add(a);const c=ge(3.1,.14,3.1,r);return c.position.y=1.62,e.add(c),e}function AM(r){const e=new Pe,t=ge(5,2.2,4.4,13482902);t.position.y=1.25,e.add(t);const n=new ze(Si("gable5.6",()=>{const o=new yn(2.3,2.3,5.6,3,1);return o.rotateZ(Math.PI/2),o.rotateX(Math.PI/6+Math.PI/2),o}),$t(Jn(r,.62)));n.castShadow=!0,n.scale.set(1,.6,.95),n.position.y=2.95,e.add(n);const i=ge(1.5,1.7,.2,J.woodDark);i.position.set(0,.95,2.25),e.add(i);for(const o of[-1.6,1.6]){const a=vt(.42,.42,.1,r,8);a.rotation.x=Math.PI/2,a.position.set(o,1.6,2.26),e.add(a)}const s=Ys(r,4);return s.position.set(2.2,0,-1.8),e.add(s),e}function EM(){const r=new Pe,e=ge(3.8,.18,3.8,J.soil);e.position.y=.09,e.receiveShadow=!0,r.add(e);for(let t=0;t<4;t++){const n=ge(.5,.3,3.4,J.wheat);n.position.set(-1.35+t*.9,.3,0),r.add(n)}for(const[t,n]of[[-1.9,-1.9],[1.9,-1.9],[-1.9,1.9],[1.9,1.9]]){const i=vt(.07,.07,.7,J.woodDark,5);i.position.set(t,.35,n),r.add(i)}return r}function RM(r){const e=new Pe,t=ge(4.2,1.9,3.2,13218441);t.position.set(-.5,1.05,-.8),e.add(t);const n=ge(4.8,.25,3.8,Jn(r,.62));n.position.set(-.5,2.15,-.8),n.rotation.z=.07,e.add(n);const i=vt(.6,.6,.18,15261900,10);i.rotation.x=Math.PI/2,i.position.set(1.9,1,1.6),e.add(i);const s=vt(.36,.36,.2,13777710,10);s.rotation.x=Math.PI/2,s.position.set(1.9,1,1.6),e.add(s);const o=vt(.14,.14,.22,15251747,8);o.rotation.x=Math.PI/2,o.position.set(1.9,1,1.6),e.add(o);const a=ge(.15,1,.6,J.woodDark);a.position.set(1.9,.5,1.6),e.add(a);const c=Ys(r,3.6);return c.position.set(-2.4,0,1.2),e.add(c),e}function CM(r){const e=new Pe,t=vt(1,1.25,4.6,J.stone,7);t.position.y=2.3,e.add(t);for(let s=0;s<7;s++){const o=s/7*Math.PI*2,a=ge(.34,.4,.34,J.stoneDark);a.position.set(Math.cos(o)*.95,4.85,Math.sin(o)*.95),e.add(a)}const n=Cn(1.15,1.1,Jn(r,.62),7);n.position.y=5.6,e.add(n);const i=ge(.3,.5,.3,2760728);return i.position.set(0,3.6,1.05),e.add(i),e}function PM(){const r=new Pe;for(let t=-2;t<=2;t++){const n=2.2+t*7919%5*.08,i=vt(.17,.2,n,t%2?J.wood:J.woodDark,6);i.position.set(t*.38,n/2,0),r.add(i);const s=Cn(.17,.3,J.woodDark,6);s.position.set(t*.38,n+.15,0),r.add(s)}const e=ge(1.9,.18,.12,J.plank);return e.position.set(0,1.2,.2),r.add(e),r}function IM(){const r=new Pe;for(const n of[-.85,.85]){const i=vt(.22,.26,2.6,J.woodDark,6);i.position.set(n,1.3,0),r.add(i);const s=Cn(.22,.3,J.wood,6);s.position.set(n,2.75,0),r.add(s)}const e=ge(2.3,.28,.34,J.plank);e.position.y=2.45,r.add(e);const t=ge(1.9,.14,.12,J.wood);return t.position.set(0,2.05,.12),r.add(t),r}function LM(r){const e=new Pe,t=ge(5.2,2,3.6,12888184);t.position.set(0,1.1,-.6),e.add(t);const n=new ze(Si("gable5.8",()=>{const a=new yn(2.1,2.1,5.8,3,1);return a.rotateZ(Math.PI/2),a.rotateX(Math.PI/6+Math.PI/2),a}),$t(Jn(r,.62)));n.castShadow=!0,n.scale.set(1,.62,1),n.position.set(0,2.65,-.6),e.add(n);for(const[a,c]of[[-2.3,1.8],[-.8,2.2],[.8,2.2],[2.3,1.8]]){const l=vt(.07,.07,.8,J.woodDark,5);l.position.set(a,.4,c),e.add(l)}const i=ge(4.6,.1,.1,J.plank);i.position.set(0,.62,2),e.add(i);const s=Kt(.55,J.wheat,1);s.scale.y=.6,s.position.set(1.9,.3,1.3),e.add(s);const o=Ys(r,3.8);return o.position.set(-2.4,0,-2),e.add(o),e}function DM(r){const e=new Pe,t=ge(5,2.3,4.2,J.plank);t.position.set(-.3,1.25,0),e.add(t);const n=ge(5.8,.28,5,J.woodDark);n.position.set(-.3,2.55,0),n.rotation.x=.06,e.add(n);const i=ge(2.2,1.9,.2,4863264);i.position.set(-.3,1,2.15),e.add(i);const s=vt(.5,.5,.14,J.woodDark,9);s.rotation.x=Math.PI/2,s.rotation.z=.4,s.position.set(2.6,.52,1),e.add(s);const o=ge(.2,.2,2.4,J.wood);o.position.set(2.5,.2,-.6),o.rotation.y=.5,e.add(o);const a=Ys(r,4);return a.position.set(-2.6,0,-1.8),e.add(a),e}const NM={towncenter:wM,house:TM,storehouse:Xa,barracks:AM,farm:()=>EM(),archeryrange:RM,tower:CM,wall:()=>PM(),gate:()=>IM(),stable:LM,siegeworkshop:DM,blacksmith:Xa,market:Xa},md=Object.fromEntries(Object.entries(NM).map(([r,e])=>[r,t=>xM(e(t),t)]));function UM(){const r=new Pe,e=Kt(.85,J.leafDark,1);e.scale.y=.7,e.position.y=.5,r.add(e);const t=Kt(.55,J.leaf,1);t.position.set(.45,.55,.3),r.add(t);for(let n=0;n<7;n++){const i=n/7*Math.PI*2,s=Kt(.09,J.berry,0);s.position.set(Math.cos(i)*.66,.55+Math.sin(n*2.4)*.25,Math.sin(i)*.62),r.add(s)}return r}function FM(){const r=new Pe,e=Kt(.95,J.stoneDark,0);e.scale.set(1.1,.75,1),e.position.y=.45,e.rotation.y=.6,r.add(e);const t=Kt(.6,J.stone,0);t.position.set(.55,.35,-.4),r.add(t);for(const[n,i,s,o]of[[.3,.85,.3,.22],[-.5,.6,.4,.18],[0,.45,.8,.16],[-.3,.95,-.3,.15]]){const a=Kt(o,J.gold,0);a.position.set(n,i,s),r.add(a)}return r}function BM(){const r=new Pe,e=Kt(.9,12170924,0);e.scale.set(1.15,.8,1),e.position.y=.42,e.rotation.y=1.1,r.add(e);const t=Kt(.62,10855066,0);t.position.set(-.55,.35,.35),t.rotation.y=.4,r.add(t);const n=ge(.7,.35,.5,12894646);return n.position.set(.5,.2,-.5),n.rotation.y=.7,r.add(n),r}function OM(r){const e=new Pe,t=r*2-.6;for(const[o,a]of[[-t/2,-t/2],[t/2,-t/2],[-t/2,t/2],[t/2,t/2]]){const c=vt(.08,.08,2.4,J.plank,5);c.position.set(o,1.2,a),e.add(c)}const n=ge(t,.1,.3,J.plank);n.position.set(0,1.7,-t/2),e.add(n);const i=ge(.3,.1,t,J.plank);i.position.set(t/2,2,0),e.add(i);const s=ge(.9,.4,.6,J.wood);return s.position.set(.2,.2,.1),e.add(s),e}function kM(r,e){const t=Fc,n=new In(Ie,Ie,t,t);n.rotateX(-Math.PI/2);const i=n.attributes.position,s=new Float32Array(i.count*3),o=new he(6400073),a=new he(8174937),c=new he(10267480),l=new he(9072456),h=new he(13481847),u=new he(9276032),d=new he;for(let p=0;p<i.count;p++){const v=i.getX(p)+Ie/2,x=i.getZ(p)+Ie/2,S=e.heightAt(v,x);i.setX(p,v),i.setZ(p,x),i.setY(p,S);const C=e.moistureAt(v,x),A=(e.noise2(v*.9,x*.9)-.5)*.1;S<tn+.35?d.copy(h):S>2.6?d.copy(u).lerp(c,Math.max(0,3.8-S)/1.2):(d.copy(o).lerp(a,C),C<.22&&d.lerp(c,(.22-C)*2),C>.85&&d.lerp(l,(C-.85)*1.2)),d.offsetHSL(0,0,A),s[p*3]=d.r,s[p*3+1]=d.g,s[p*3+2]=d.b}n.setAttribute("color",new Mt(s,3)),n.computeVertexNormals();const f=Tv();f.map.repeat.set(72,72),f.normalMap.wrapS=f.normalMap.wrapT=$n,f.normalMap.repeat.set(72,72);const g=new ze(n,new Qn({vertexColors:!0,map:f.map,normalMap:f.normalMap,normalScale:new ue(.6,.6),roughness:1,metalness:0}));g.receiveShadow=!0,g.name="terrain",r.add(g);const _=Iv();_.repeat.set(34,34);const m=new ze(new In(Ie,Ie),new Qn({color:3504061,transparent:!0,opacity:.78,roughness:.18,metalness:.05,normalMap:_,normalScale:new ue(.55,.55)}));return m.rotation.x=-Math.PI/2,m.position.set(Ie/2,tn-.12,Ie/2),r.add(m),zM(r,e),{ground:g,water:m,waterNormalTex:_}}function zM(r,e){let t=(e.seed^1592651789)>>>0;const n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),i=(s,o,a,c,l,h)=>{const u=o(),d=new Ns(u,$t(a),s);d.castShadow=!0;const f=new Te,g=new Ft,_=new jt;let m=0,p=0;for(;m<s&&p++<s*12;){const v=n()*Ie,x=n()*Ie,[S,C]=e.worldToGrid(v,x);if(!e.isWalkable(S,C)||e.occupantAt(S,C))continue;const A=e.heightAt(v,x),T=l+n()*(h-l);_.set(0,n()*Math.PI*2,0),g.setFromEuler(_),f.compose(new E(v,A+c*T,x),g,new E(T,T,T)),d.setMatrixAt(m++,f)}d.count=m,d.instanceMatrix.needsUpdate=!0,r.add(d)};i(180,()=>new Zn(.5,0),9276032,.18,.3,1.1),i(220,()=>new Zn(.45,0),5603391,.3,.5,1),i(260,()=>new Hi(.1,.35,5),14210126,.16,.7,1.3),i(140,()=>new Hi(.12,.4,5),12872330,.18,.7,1.2)}const $h=[5213242,6266952,4160057,6989902,4554556,5672770,3764271],HM=[{file:"tree_default",scale:2.6},{file:"tree_oak",scale:3.4},{file:"tree_detailed",scale:3.1},{file:"tree_fat",scale:3.6},{file:"tree_pineDefaultA",scale:2.7},{file:"tree_pineRoundB",scale:3.2},{file:"tree_pineTallB_detailed",scale:2.4}];function qa(r,e){const t=r.index?r.toNonIndexed():r,n=t.attributes.position,i=new Float32Array(n.count*2),s=new E,o=new E,a=new E,c=new E,l=new E,h=new E;for(let u=0;u<n.count;u+=3){s.fromBufferAttribute(n,u),o.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),c.subVectors(o,s),l.subVectors(a,s),h.crossVectors(c,l);const d=Math.abs(h.x),f=Math.abs(h.y),g=Math.abs(h.z);for(let _=0;_<3;_++){const m=_===0?s:_===1?o:a;let p,v;d>=f&&d>=g?(p=m.z,v=m.y):f>=d&&f>=g?(p=m.x,v=m.z):(p=m.x,v=m.y),i[(u+_)*2]=p*e,i[(u+_)*2+1]=v*e}}return t.setAttribute("uv",new Mt(i,2)),t}class GM{constructor(e,t=1e3){this.scene=e,this.capacity=t,this.zero=new Te().makeScale(0,0,0),this.tmpM=new Te,this.tmpC=new he,this.next=0,this.species=[],this.pickMeshes=[],this.ready=!1;const n=Pv();this.leafMat=new Qn({color:16777215,map:n.map,normalMap:n.normalMap,normalScale:new ue(.9,.9),roughness:.92,metalness:0})}_addMesh(e,t,n,i){const s=new Ns(e,t,this.capacity);s.castShadow=!0,s.receiveShadow=!0,s.frustumCulled=!1,s.count=this.capacity;for(let o=0;o<this.capacity;o++)s.setMatrixAt(o,this.zero);return this.scene.add(s),this.pickMeshes.push(s),{inst:s,isLeaf:n,baseColor:i}}async load(){const e="/aoge/models/nature/";try{const t=new kc;await Promise.all(HM.map(async(n,i)=>{const s=await t.loadAsync(e+n.file+".glb");s.scene.updateMatrixWorld(!0);const o=[];s.scene.traverse(a=>{if(!a.isMesh)return;const c=a.geometry.clone();if(c.applyMatrix4(a.matrixWorld),/leaf|foliage/i.test(a.material?.name||"")){const h=qa(c,1.9/n.scale);o.push(this._addMesh(h,this.leafMat,!0,new he($h[i%$h.length])))}else{const h=new An({color:8017206});o.push(this._addMesh(c,h,!1,null))}}),this.species[i]={parts:o,scale:n.scale}})),this.species=this.species.filter(Boolean),this.ready=this.species.length>0}catch{this._buildFallback()}return this.ready||this._buildFallback(),this.ready}_buildFallback(){if(this.ready)return;const e=new yn(.16,.26,1.4,6);e.translate(0,.7,0);const t=new Hi(1.05,2.9,7);t.translate(0,2.6,0);const n=new Zn(1.25,0);n.scale(1,1.15,1),n.translate(0,2.5,0),this.species=[{scale:1,parts:[this._addMesh(e,$t(J.woodDark),!1,null),this._addMesh(qa(t,.6),this.leafMat,!0,new he(3829824))]},{scale:1,parts:[this._addMesh(e.clone(),$t(J.woodDark),!1,null),this._addMesh(qa(n,.6),this.leafMat,!0,new he(5607486))]}],this.ready=!0}add(e,t,n,i){if(!this.ready)return null;const s=this.next++;if(s>=this.capacity)return null;const o=this.species[Math.floor(i*997)%this.species.length],a=o.scale*(.82+i*7919%1*.42),c=i*31.4;this.tmpM.makeRotationY(c),this.tmpM.scale(new E(a,a*(.9+i*131%1*.3),a)),this.tmpM.setPosition(e,t,n);const l=.82+i*53%1*.4;for(const h of o.parts)h.inst.setMatrixAt(s,this.tmpM),h.isLeaf&&h.baseColor&&(this.tmpC.copy(h.baseColor).multiplyScalar(l),h.inst.setColorAt(s,this.tmpC));return{idx:s,species:o,matrix:this.tmpM.clone(),hidden:!1}}remove(e){if(e){e.matrix=null;for(const t of e.species.parts)t.inst.setMatrixAt(e.idx,this.zero),t.inst.instanceMatrix.needsUpdate=!0}}setHidden(e,t){if(!(!e||!e.matrix||e.hidden===t)){e.hidden=t;for(const n of e.species.parts)n.inst.setMatrixAt(e.idx,t?this.zero:e.matrix),n.inst.instanceMatrix.needsUpdate=!0}}flush(){const e=Math.max(1,this.next);for(const t of this.pickMeshes)t.count=e,t.instanceMatrix.needsUpdate=!0,t.instanceColor&&(t.instanceColor.needsUpdate=!0)}}const gd=new qo(.75,.95,24);gd.rotateX(-Math.PI/2);const VM=new Pt({color:5111646,transparent:!0,opacity:.85,depthWrite:!1}),WM=new Pt({color:16731450,transparent:!0,opacity:.85,depthWrite:!1});function _d(r,e=!0){const t=new ze(gd,e?VM:WM);return t.scale.setScalar(r),t.renderOrder=2,t}const XM=new mi({color:2363408,depthTest:!1}),Zh=[new mi({color:4641845,depthTest:!1}),new mi({color:15253536,depthTest:!1}),new mi({color:13907232,depthTest:!1})];class xd{constructor(e,t=1.5,n=2.4){this.group=new Pe,this.width=t,this.bg=new wr(XM),this.bg.scale.set(t,.16,1),this.fg=new wr(Zh[0]),this.fg.center.set(0,.5),this.fg.position.x=-t/2,this.fg.scale.set(t,.12,1),this.group.add(this.bg,this.fg),this.group.position.y=n,this.group.renderOrder=5,this.group.visible=!1,e.add(this.group)}set(e,t){if(this.group.visible=t,!t)return;const n=Math.max(.001,Math.min(1,e));this.fg.scale.x=this.width*n,this.fg.material=Zh[n>.55?0:n>.25?1:2]}}const qM=new ei(.05,.05,.85),YM=new Zn(.3,0),KM=new Zn(.22,0),jM=new ei(1,.7,1),$M=new An({color:9143671}),po=new E,mo=new E,go=new Map;function ZM(r){let e=go.get(r);if(e)return e;const t=document.createElement("canvas");t.width=96,t.height=48;const n=t.getContext("2d");return n.font="bold 30px Trebuchet MS, sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeStyle="rgba(0,0,0,.85)",n.lineWidth=5,n.strokeText(String(r),48,24),n.fillStyle="#ffd24a",n.fillText(String(r),48,24),e=new yi(t),go.size>120&&go.clear(),go.set(r,e),e}class QM{constructor(e,t){this.scene=e,this.game=t,this.projectiles=[],this.particles=[],this.fades=[],this.smokes=[],this.smokeTex=Dv()}spawnSmoke(e,t,n,i=!1,s=1){const o=new wr(new mi({map:this.smokeTex,color:i?3025446:14211288,transparent:!0,opacity:i?.5:.32,depthWrite:!1}));o.position.set(e+(Math.random()-.5)*.4,t,n+(Math.random()-.5)*.4),o.scale.setScalar(.6*s),this.scene.add(o),this.smokes.push({m:o,t:0,life:2+Math.random()*1.2,rise:1+Math.random()*.6,drift:(Math.random()-.5)*.5,grow:(1.1+Math.random()*.7)*s,o0:o.material.opacity})}updateBuildingSmoke(e){for(const t of this.game.buildings){if(t.dead||!t.complete||(t.smokeT=(t.smokeT??Math.random())-e,t.smokeT>0))continue;if(t.hp<t.maxHp*.55){t.smokeT=t.hp<t.maxHp*.3?.22:.45;const i=t.size;this.spawnSmoke(t.cx+(Math.random()-.5)*i,t.groundY+t.size+.5,t.cz+(Math.random()-.5)*i,!0,1.4)}else t.type==="house"?(t.smokeT=.8+Math.random()*.5,this.spawnSmoke(t.cx-1.1,t.groundY+3.2,t.cz,!1,.8)):t.type==="towncenter"?(t.smokeT=1.1+Math.random()*.6,this.spawnSmoke(t.cx+t.size-.5,t.groundY+2.2,t.cz+t.size-.5,!1,.9)):t.smokeT=2}}fireArrow(e,t,n,i){const s=new ze(qM,$t(5914920));s.position.copy(e),this.scene.add(s),this.projectiles.push({kind:"arrow",mesh:s,target:t,damage:n,attacker:i,speed:26})}fireStone(e,t,n,i,s){const o=new ze(YM,$t(7236192));o.position.copy(e),this.scene.add(o);const a=e.distanceTo(t);this.projectiles.push({kind:"stone",mesh:o,from:e.clone(),to:t.clone(),t:0,dur:Math.max(.7,a/16),arc:4+a*.22,damage:n,splash:i,attacker:s})}puff(e,t=13290186,n=6,i=4){const s=new An({color:t,transparent:!0,opacity:.9});s.userData.refs=n;for(let o=0;o<n;o++){const a=new ze(KM,s);a.position.copy(e);const c=new E((Math.random()-.5)*i,Math.random()*i*.8+1,(Math.random()-.5)*i);this.scene.add(a),this.particles.push({mesh:a,vel:c,life:.6+Math.random()*.4,t:0})}}blood(e){this.puff(e,9051922,4,3)}damageNumber(e,t,n,i){if(i<1||this.dmgNums?.length>36)return;const s=new wr(new mi({map:ZM(Math.round(i)),depthTest:!1,transparent:!0}));s.scale.set(1.7,.85,1),s.position.set(e+(Math.random()-.5)*.6,t,n),s.renderOrder=6,this.scene.add(s),(this.dmgNums=this.dmgNums||[]).push({s,t:0})}spawnRubble(e,t,n,i){const s=new Pe,o=3+i*2;for(let a=0;a<o;a++){const c=new ze(jM,$M),l=.3+Math.random()*.5*i;c.scale.set(l,l*.5,l),c.position.set((Math.random()-.5)*i*1.6,l*.2,(Math.random()-.5)*i*1.6),c.rotation.y=Math.random()*Math.PI,c.castShadow=!0,s.add(c)}s.position.set(e,t,n),this.scene.add(s),(this.rubble=this.rubble||[]).push({g:s,t:0})}fadeOut(e,t=1.6,n=1.2,i=null){e.traverse(s=>{s.castShadow!==void 0&&(s.castShadow=!1)}),this.fades.push({obj:e,t:0,dur:t,sink:n,y0:e.position.y,mixer:i})}update(e){const t=this.game;this.updateBuildingSmoke(e);for(let n=this.smokes.length-1;n>=0;n--){const i=this.smokes[n];if(i.t+=e,i.t>=i.life){this.scene.remove(i.m),i.m.material.dispose(),this.smokes.splice(n,1);continue}const s=i.t/i.life;i.m.position.y+=i.rise*e,i.m.position.x+=i.drift*e,i.m.scale.setScalar(.6+i.grow*s),i.m.material.opacity=i.o0*(1-s*s)}for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];if(i.kind==="arrow"){const s=i.target;if(!s||s.dead){this.scene.remove(i.mesh),this.projectiles.splice(n,1);continue}po.set(s.isBuilding?s.cx:s.x,s.isBuilding?s.groundY+1.6:s.group.position.y+1.1,s.isBuilding?s.cz:s.z),mo.copy(po).sub(i.mesh.position);const o=mo.length(),a=i.speed*e;o<=a+.2?(t.applyDamage(s,i.damage,i.attacker),this.blood(po),this.scene.remove(i.mesh),this.projectiles.splice(n,1)):(mo.normalize(),i.mesh.position.addScaledVector(mo,a),i.mesh.lookAt(po))}else{i.t+=e;const s=Math.min(1,i.t/i.dur);i.mesh.position.lerpVectors(i.from,i.to,s),i.mesh.position.y+=Math.sin(s*Math.PI)*i.arc,i.mesh.rotation.x+=e*6,s>=1&&(t.splashDamage(i.to,i.splash,i.damage,i.attacker),this.puff(i.to,10127984,10,6),this.scene.remove(i.mesh),this.projectiles.splice(n,1))}}for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];if(i.t+=e,i.t>=i.life){this.scene.remove(i.mesh);const o=i.mesh.material;o.userData.refs!==void 0&&--o.userData.refs<=0&&o.dispose(),this.particles.splice(n,1);continue}i.vel.y-=9*e,i.mesh.position.addScaledVector(i.vel,e),i.mesh.material.opacity=.9*(1-i.t/i.life);const s=1+i.t*1.5;i.mesh.scale.setScalar(s)}if(this.dmgNums)for(let n=this.dmgNums.length-1;n>=0;n--){const i=this.dmgNums[n];if(i.t+=e,i.t>1.1){this.scene.remove(i.s),i.s.material.dispose(),this.dmgNums.splice(n,1);continue}i.s.position.y+=e*1.6,i.s.material.opacity=1-Math.max(0,i.t-.5)/.6}if(this.rubble)for(let n=this.rubble.length-1;n>=0;n--){const i=this.rubble[n];i.t+=e,i.t>22&&(i.g.position.y-=e*.5,i.t>26&&(this.scene.remove(i.g),this.rubble.splice(n,1)))}for(let n=this.fades.length-1;n>=0;n--){const i=this.fades[n];i.t+=e,i.mixer&&i.mixer.update(e);const s=i.t/i.dur;if(s>=1){this.scene.remove(i.obj),this.fades.splice(n,1);continue}i.obj.position.y=i.y0-i.sink*s}}}class JM{constructor(){this.a=[]}get size(){return this.a.length}push(e){const t=this.a;t.push(e);let n=t.length-1;for(;n>0;){const i=n-1>>1;if(t[i].f<=t[n].f)break;[t[i],t[n]]=[t[n],t[i]],n=i}}pop(){const e=this.a,t=e[0],n=e.pop();if(e.length){e[0]=n;let i=0;for(;;){const s=i*2+1,o=s+1;let a=i;if(s<e.length&&e[s].f<e[a].f&&(a=s),o<e.length&&e[o].f<e[a].f&&(a=o),a===i)break;[e[a],e[i]]=[e[i],e[a]],i=a}}return t}}let or=null;const ey=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.4142],[1,-1,1.4142],[-1,1,1.4142],[-1,-1,1.4142]];function ty(r,e,t,n,i,s=9e3,o=-1){const a=r.size,c=M=>r.walk[M]===1||o>=0&&r.gateOwner[M]===o;if(!r.inBounds(e,t))return null;if(!c(t*a+e)){const M=r.nearestWalkable(e,t,4);if(!M)return null;[e,t]=M}let l=!1;if(!r.inBounds(n,i)||!c(i*a+n)){l=!0;const M=r.nearestWalkable(n,i,12);if(!M)return null;[n,i]=M}if(e===n&&t===i)return[];(!or||or.g.length!==a*a)&&(or={g:new Float32Array(a*a),parent:new Int32Array(a*a),closed:new Int32Array(a*a),genG:new Int32Array(a*a),gen:0}),or.gen++;const h=or,u=h.gen,d=M=>h.genG[M]===u?h.g[M]:1/0,f=(M,y)=>{h.g[M]=y,h.genG[M]=u},g=M=>h.closed[M]===u,_=M=>{h.closed[M]=u},m=M=>h.genG[M]===u?h.parent[M]:-1,p=new JM,v=(M,y)=>{const I=Math.abs(M-n),B=Math.abs(y-i);return Math.max(I,B)+.4142*Math.min(I,B)},x=t*a+e;f(x,0),h.parent[x]=-1,p.push({i:x,x:e,y:t,f:v(e,t)});let S=x,C=v(e,t),A=0;for(;p.size&&A++<s;){const M=p.pop();if(g(M.i))continue;_(M.i);const y=v(M.x,M.y);if(y<C&&(C=y,S=M.i),M.x===n&&M.y===i){S=M.i;break}for(const[I,B,k]of ey){const H=M.x+I,q=M.y+B;if(H<0||q<0||H>=a||q>=a)continue;const G=q*a+H;if(g(G)||!c(G)||I!==0&&B!==0&&(!c(M.y*a+H)||!c(q*a+M.x)))continue;const Z=d(M.i)+k;Z<d(G)&&(f(G,Z),h.parent[G]=M.i,p.push({i:G,x:H,y:q,f:Z+v(H,q)}))}}const T=[];let P=S;if(P===x&&!(l||C<v(e,t)))return null;for(;P!==x&&P>=0;)T.push([P%a,P/a|0]),P=m(P);return T.reverse(),iy(r,e,t,T,o)}function ny(r,e,t,n,i,s=-1){const o=(g,_)=>s>=0?r.isWalkableFor(g,_,s):r.isWalkable(g,_);let a=Math.abs(n-e),c=Math.abs(i-t);const l=e<n?1:-1,h=t<i?1:-1;let u=a-c,d=e,f=t;for(;;){if(!o(d,f))return!1;if(d===n&&f===i)return!0;const g=2*u;if(g>-c){if(g<a&&!(o(d+l,f)&&o(d,f+h)))return!1;u-=c,d+=l}g<a&&(u+=a,f+=h)}}function iy(r,e,t,n,i=-1){if(n.length<3)return n;const s=[];let o=e,a=t,c=0;for(;c<n.length;){let l=c;for(let h=n.length-1;h>c;h--)if(!(h-c>40)&&ny(r,o,a,n[h][0],n[h][1],i)){l=h;break}s.push(n[l]),[o,a]=n[l],c=l+1}return s}function sy(r){const e=new Map,t=new Map,n=r.clone();return vd(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function vd(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)vd(r.children[n],e.children[n],t)}const Md={villager:{file:"Rogue",height:1.75,weaponR:"axe_1handed"},militia:{file:"Barbarian",height:1.85,weaponR:"axe_1handed",weaponL:"shield_round_barbarian"},spearman:{file:"Barbarian",height:1.85,weaponR:"spear_proc"},archer:{file:"Ranger",height:1.8,weaponL:"bow_withString"},knight:{file:"Knight",height:1.95,weaponR:"sword_1handed",weaponL:"shield_round"}},ry=["axe_1handed","sword_1handed","bow_withString","shield_round","shield_round_barbarian"],dr=new Map;let Ya,Ka;function oy(){Ya=Ya||new Qn({color:9069112,roughness:.9}),Ka=Ka||new Qn({color:12174028,metalness:.7,roughness:.35});const r=new Pe,e=new ze(new yn(.035,.04,1.7,6),Ya);e.position.y=.5;const t=new ze(new Hi(.075,.3,6),Ka);return t.position.y=.5+.85+.15,e.castShadow=t.castShadow=!0,r.add(e,t),r}const ay={idle:"Idle_A",walk:"Running_A",work:"Interact",melee:"CombatMelee",shoot:"CombatBow",death:"Death_A"},zo=new Map;let Ao=new Map,pc=!1;function cy(r,e,t){return Promise.race([r,new Promise((n,i)=>setTimeout(()=>i(new Error("timeout: "+t)),e))])}async function ly(){const r="/aoge/models/units/",e=new kc;try{const t=[...new Set(Object.values(Md).map(n=>n.file))];await Promise.all(t.map(async n=>{const s=(await e.loadAsync(r+n+".glb")).scene,o=new Mn().setFromObject(s);s.traverse(a=>{(a.isMesh||a.isSkinnedMesh)&&(a.castShadow=!0,a.frustumCulled=!1)}),zo.set(n,{scene:s,height:o.max.y-o.min.y})}));for(const n of["Rig_Medium_General","Rig_Medium_MovementBasic"]){const i=await e.loadAsync(r+n+".glb");for(const s of i.animations)Ao.set(s.name,s)}pc=zo.size>0&&Ao.size>0,await Promise.all(ry.map(async n=>{try{const i=await cy(e.loadAsync(r+"weapons/"+n+".glb"),1e4,n);i.scene.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),dr.set(n,i.scene)}catch{}}));try{for(const n of uy())Ao.set(n.name,n)}catch(n){console.warn("combat clips failed:",n.message)}}catch(t){return console.warn("unit pack unavailable:",t.message),!1}return pc}function hy(){const r=zo.values().next().value;if(!r)return null;r.scene.updateMatrixWorld(!0);const e={},t=["chest","spine","upperarmr","lowerarmr","handr","upperarml","lowerarml","handl","head"];for(const n of t){const i=r.scene.getObjectByName(n);if(!i)continue;const s=new Ft;i.parent.getWorldQuaternion(s),e[n]={local:i.quaternion.clone(),parentWorld:s,invParent:s.clone().invert()}}return e}function Qh(r,e,t){const n=[],i=new E;for(const s of t){const o=e[s.bone];if(!o)continue;i.set(s.axis[0],s.axis[1],s.axis[2]).normalize();const a=[],c=[];for(const[l,h]of s.keys){const u=new Ft().setFromAxisAngle(i,h),d=o.invParent.clone().multiply(u).multiply(o.parentWorld).multiply(o.local);a.push(l),c.push(d.x,d.y,d.z,d.w)}n.push(new Gi(s.bone+".quaternion",a,c))}return new ko(r,-1,n)}function uy(){const r=hy();if(!r)return[];const e=[1,0,0],t=[0,1,0],n=Qh("CombatMelee",r,[{bone:"upperarmr",axis:e,keys:[[0,0],[.18,-1.45],[.36,1.15],[.55,.5],[.8,0]]},{bone:"lowerarmr",axis:e,keys:[[0,0],[.18,-.9],[.36,.25],[.8,0]]},{bone:"chest",axis:t,keys:[[0,0],[.18,.3],[.36,-.28],[.8,0]]},{bone:"spine",axis:t,keys:[[0,0],[.36,-.15],[.8,0]]}]),i=Qh("CombatBow",r,[{bone:"upperarml",axis:e,keys:[[0,0],[.28,1.35],[.7,1.35],[.95,0]]},{bone:"lowerarml",axis:e,keys:[[0,0],[.28,.2],[.95,0]]},{bone:"upperarmr",axis:t,keys:[[0,0],[.3,.55],[.62,.55],[.7,.2],[.95,0]]},{bone:"lowerarmr",axis:e,keys:[[0,0],[.3,1.5],[.62,1.55],[.7,.3],[.95,0]]},{bone:"chest",axis:t,keys:[[0,0],[.3,-.35],[.62,-.35],[.95,0]]}]);return[n,i]}const Jh=new Map;function dy(r,e,t){const n=t+"|"+r.uuid;let i=Jh.get(n);return i||(i=r.clone(),i.color&&i.color.lerp(new he(e),.45),Jh.set(n,i)),i}function fy(r,e){if(!pc)return null;const t=Md[r];if(!t)return null;const n=zo.get(t.file);if(!n)return null;const i=sy(n.scene),s=t.height/(n.height||t.height);i.scale.setScalar(s),i.rotation.y=Math.PI;const o=r+"|"+e;if(i.traverse(l=>{(l.isMesh||l.isSkinnedMesh)&&l.material&&(l.material=dy(l.material,e,o))}),t.weaponR==="spear_proc"){const l=i.getObjectByName("handslotr");l&&l.add(oy())}else if(t.weaponR&&dr.has(t.weaponR)){const l=i.getObjectByName("handslotr");l&&l.add(dr.get(t.weaponR).clone(!0))}if(t.weaponL&&dr.has(t.weaponL)){const l=i.getObjectByName("handslotl");l&&l.add(dr.get(t.weaponL).clone(!0))}const a=new nv(i),c={};for(const[l,h]of Object.entries(ay)){const u=Ao.get(h);u&&(c[l]=a.clipAction(u))}return c.death&&(c.death.setLoop(Cu),c.death.clampWhenFinished=!0),{model:i,mixer:a,actions:c}}let py=1;const yd=new Pt({colorWrite:!1,depthWrite:!1}),eu=new Map;function my(r,e){const t=r.toFixed(2)+"x"+e.toFixed(2);let n=eu.get(t);return n||(n=new yn(r,r,e,8),eu.set(t,n)),n}const gy=new Zn(.18,0),_o={wood:new An({color:9069114}),food:new An({color:12729147}),gold:new An({color:15251747}),stone:new An({color:12170924})};class _y{constructor(e,t,n,i,s){this.id=py++,this.game=e,this.type=t,this.def=_n[t],this.owner=n,this.isUnit=!0,this.x=i,this.z=s,this.facing=e.rand()*Math.PI*2,this.radius=t==="knight"?.8:t==="catapult"?.95:.5;const o=uc[e.players[n].age-1];this.maxHp=Math.round(this.def.hp*o*(e.players[n].mods?.hpMult||1)),this.hp=this.maxHp,this.dead=!1,this.order=null,this.state="idle",this.path=null,this.wpIdx=0,this.pathGoal=null,this.repathT=0,this.carry=null,this.actionT=0,this.stance="aggressive",this.post=null,this.scanT=e.rand()*.5,this.animT=e.rand()*10,this.moving=!1;const a=new Pe;a.position.set(i,e.map.heightAt(i,s),s),a.userData.entity=this,this.group=a,this.mixer=null,this.actions=null,this.actionName=null,this.limbs={},this.adoptModel();const c=t==="catapult"?2.4:t==="knight"?2.8:2,l=this.radius+.35,h=new ze(my(l,c),yd);h.position.y=c/2,h.userData.entity=this,a.add(h),e.scene.add(a),this.selRing=_d(this.radius+.55,n===0),this.selRing.visible=!1,a.add(this.selRing);const u=t==="knight"?2.9:t==="catapult"?2.4:2.3;this.healthBar=new xd(a,1.4,u),this.selected=!1,this.carryMesh=null}pos3(){return new E(this.x,this.group.position.y,this.z)}adoptModel(){const e=fy(this.type,this.game.teamColor(this.owner));if(e&&this.procModel)this.group.remove(this.procModel),this.procModel=null;else if(this.procModel||this.mixer&&!e)return;e?(this.group.add(e.model),this.mixer=e.mixer,this.actions=e.actions,this.actionName=null,this.limbs={}):this.procModel||(this.procModel=bM[this.type](this.game.teamColor(this.owner)),this.group.add(this.procModel),this.limbs=this.procModel.userData.limbs||{})}playAction(e,t=.16){if(this.actionName===e||!this.actions?.[e])return;const n=this.actions[this.actionName];n&&n.fadeOut(t),this.actions[e].reset().fadeIn(t).play(),this.actionName=e}setSelected(e){this.selected=e,this.selRing.visible=e}clearOrder(e=!1){e&&(this.orderQueue=null),this.order=null,this.state="idle",this.path=null,!e&&this.orderQueue?.length&&this.orderQueue.shift()()}pushOrder(e){if(this.state==="idle"&&!this.order){e();return}(this.orderQueue=this.orderQueue||[]).push(e)}orderMove(e,t){this.order={kind:"move",x:e,z:t},this.state="move",this.requestPath(e,t)}orderGather(e){if(!(this.type!=="villager"||!e||e.amount<=0)){if(!this.game.nodeReachable(e)){const t=this.game.findNearestReachableNode(e.res,e.wx,e.wz,60,e);t&&(e=t)}this.order={kind:"gather",node:e},this.state="toResource",this.approachN=0,this.requestPath(e.wx,e.wz)}}orderGatherFarm(e){this.type!=="villager"||!e||!e.complete||e.owner!==this.owner||(this.order={kind:"farm",farm:e},this.state="toResource",this.requestPath(e.cx,e.cz))}orderBuild(e){this.type!=="villager"||!e||e.dead||e.complete&&e.hp>=e.maxHp-.5||(this.order={kind:"build",building:e},this.state="toBuild",this.requestPath(e.cx,e.cz))}orderAttack(e){if(!e||e.dead)return;this.order={kind:"attack",target:e},this.state="toAttack",this.stuckN=0;const t=e.isBuilding?{x:e.cx,z:e.cz}:{x:e.x,z:e.z};this.requestPath(t.x,t.z)}orderAttackMove(e,t){this.order={kind:"attackmove",x:e,z:t},this.state="move",this.requestPath(e,t)}orderGarrison(e){!e||e.dead||!e.complete||(this.order={kind:"garrison",building:e},this.state="toGarrison",this.requestPath(e.cx,e.cz))}updateToGarrison(e){const t=this.order?.building;if(!t||t.dead){this.clearOrder();return}if(this.distTo(t)<1.8){this.garrisoned=t,(t.garrison=t.garrison||[]).push(this),this.group.visible=!1,this.setSelected(!1),this.order=null,this.state="garrisoned",this.path=null;return}this.followPath(e)&&this.requestPath(t.cx,t.cz)}requestPath(e,t){const n=this.game.map,[i,s]=n.worldToGrid(this.x,this.z),[o,a]=n.worldToGrid(e,t),c=ty(n,i,s,o,a,9e3,this.owner);if(this.pathGoal=[o,a],this.repathT=.8+this.game.rand()*.4,this.progT=0,this.progX=this.x,this.progZ=this.z,!c||c.length===0){this.path=null;return}const l=c[c.length-1],h=l[0]===o&&l[1]===a;if(this.path=c.map(([u,d])=>n.gridToWorld(u,d)),h&&n.isWalkableFor(o,a,this.owner)){const u=this.path[this.path.length-1];u[0]=e,u[1]=t}this.wpIdx=0}distTo(e){if(e.isBuilding){const t=e.def.size*ke/2,n=Math.max(Math.abs(this.x-e.cx)-t,0),i=Math.max(Math.abs(this.z-e.cz)-t,0);return Math.hypot(n,i)}return Math.hypot(this.x-e.x,this.z-e.z)-(e.radius||0)}distToNode(e){const t=Math.max(Math.abs(this.x-e.wx)-ke*.5,0),n=Math.max(Math.abs(this.z-e.wz)-ke*.5,0);return Math.hypot(t,n)}update(e){if(!this.dead){switch(this.animT+=e,this.actionT-=e,this.moving=!1,this.state){case"garrisoned":return;case"toGarrison":this.updateToGarrison(e);break;case"idle":this.updateIdle(e);break;case"move":this.updateMove(e);break;case"toResource":this.updateToResource(e);break;case"gathering":this.updateGathering(e);break;case"deposit":this.updateDeposit(e);break;case"toBuild":this.updateToBuild(e);break;case"building":this.updateBuilding(e);break;case"toAttack":this.updateToAttack(e);break;case"fighting":this.updateFighting(e);break}this.animate(e)}}updateIdle(e){if(this.def.aggro>0&&(this.scanT-=e,this.scanT<=0)){this.scanT=.45;const t=this.stance==="hold"?this.attackRangeMax():this.def.aggro,n=this.game.nearestEnemy(this.owner,this.x,this.z,t,!0);n&&(this.stance!=="aggressive"&&!this.post&&(this.post={x:this.x,z:this.z}),this.engage(n,!0))}}attackRangeMax(){return Math.max(this.def.range,1.6)}engage(e,t=!1){const n=t?this.order:null;this.order={kind:"attack",target:e,resume:n},this.state="toAttack",this.requestPath(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z)}resumeOrAcquire(){const e=this.order?.resume;if(e){if(e.kind==="move"||e.kind==="attackmove"){this.order=e,this.state="move",this.requestPath(e.x,e.z);return}if(e.kind==="gather"&&e.node&&!e.node.dead&&e.node.amount>0){this.orderGather(e.node);return}if(e.kind==="farm"&&e.farm&&!e.farm.dead&&e.farm.complete){this.orderGatherFarm(e.farm);return}if(e.kind==="build"&&e.building&&!e.building.dead&&!e.building.complete){this.orderBuild(e.building);return}if(e.kind==="attack"&&e.target&&!e.target.dead){this.orderAttack(e.target);return}}if(this.def.aggro>0&&this.stance==="aggressive"){const t=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro+2,!0);if(t){this.engage(t);return}}if(this.stance==="defensive"&&this.post){const t=this.post;this.post=null,this.orderMove(t.x,t.z);return}this.clearOrder()}updateMove(e){if(this.order?.kind==="attackmove"&&this.def.aggro>0&&(this.scanT-=e,this.scanT<=0)){this.scanT=.4;const t=this.game.nearestEnemy(this.owner,this.x,this.z,this.def.aggro,!0);if(t){this.engage(t,!0);return}}if(this.followPath(e)){const t=this.order;this.clearOrder(),t?.kind==="attackmove"&&(this.scanT=0)}}updateToResource(e){const t=this.order;if(!t){this.state="idle";return}if(t.kind==="gather"){const n=t.node;if(!n||n.amount<=0){this.findNextNode(n);return}if(this.distToNode(n)<1.5){this.state="gathering",this.actionT=0,this.faceTowards(n.wx,n.wz);return}}else{const n=t.farm;if(!n||n.dead||!n.complete){this.clearOrder();return}if(this.distTo(n)<1.6){this.state="gathering",this.actionT=0,this.faceTowards(n.cx,n.cz);return}}if(this.followPath(e)){if(this.approachN=(this.approachN||0)+1,this.approachN>3){if(this.approachN=0,t.kind==="gather"){const s=this.game.findNearestReachableNode(t.node.res,this.x,this.z,50,t.node);if(s&&s!==t.node){this.orderGather(s);return}}this.clearOrder();return}const n=t.kind==="gather"?t.node.wx:t.farm.cx,i=t.kind==="gather"?t.node.wz:t.farm.cz;this.requestPath(n,i)}}updateGathering(e){const t=this.order;if(!t){this.state="idle";return}const n=t.kind==="farm",i=n?t.farm:t.node;if(!i||i.dead||!n&&i.amount<=0){n?this.clearOrder():this.findNextNode(i);return}const s=n?"food":i.res;if(this.carry&&(this.carry.res!==s||this.carry.amt>=kh)){this.goDeposit();return}if(this.actionT<=0){const o=this.game.players[this.owner].mods?.gatherMult||1;this.actionT=1/((n?i.def.farmRate:this.def.gatherRate)*o),this.carry||(this.carry={res:s,amt:0});const a=n?1:Math.min(1,i.amount);this.carry.amt+=a,n||(i.amount-=a,i.amount<=0&&this.game.depleteNode(i),i.res==="wood"&&this.game.rand()<.3&&this.game.sound("chop")),this.updateCarryMesh(),this.carry.amt>=kh&&this.goDeposit()}}goDeposit(){const e=this.game.findDropoff(this.owner,this.x,this.z);if(!e){this.clearOrder();return}this.order.drop=e,this.state="deposit",this.requestPath(e.cx,e.cz)}updateDeposit(e){const t=this.order;if(!t){this.state="idle";return}let n=t.drop;if(!n||n.dead){if(n=this.game.findDropoff(this.owner,this.x,this.z),!n){this.clearOrder();return}t.drop=n,this.requestPath(n.cx,n.cz)}if(this.distTo(n)<1.7){if(this.carry){const i=Math.round(this.carry.amt);this.game.players[this.owner].res[this.carry.res]+=i,this.game.stats[this.owner][this.carry.res]+=i,this.carry=null,this.updateCarryMesh()}t.kind==="gather"&&t.node&&t.node.amount>0?(this.state="toResource",this.requestPath(t.node.wx,t.node.wz)):t.kind==="farm"&&t.farm&&!t.farm.dead?(this.state="toResource",this.requestPath(t.farm.cx,t.farm.cz)):t.kind==="gather"?this.findNextNode(t.node):this.clearOrder();return}this.followPath(e)&&this.distTo(n)>=1.7&&this.requestPath(n.cx,n.cz)}findNextNode(e){if(!e){this.clearOrder();return}const t=this.game.findNearestReachableNode(e.res,e.wx,e.wz,22,e);t?this.carry&&this.carry.amt>0&&this.carry.res===e.res?(this.order={kind:"gather",node:t},this.goDeposit()):this.orderGather(t):this.carry&&this.carry.amt>0?(this.order={kind:"gather",node:null},this.goDeposit()):this.clearOrder()}buildOrderDone(e){return e.complete&&e.hp>=e.maxHp-.5}updateToBuild(e){const t=this.order?.building;if(!t||t.dead||this.buildOrderDone(t)){if(t&&t.complete&&t.def.isFarm){this.orderGatherFarm(t);return}this.clearOrder();return}if(this.distTo(t)<1.6){this.state="building",this.faceTowards(t.cx,t.cz);return}this.followPath(e)&&(this.repathT<=0?this.clearOrder():this.requestPath(t.cx,t.cz)),this.repathT-=e}updateBuilding(e){const t=this.order?.building;if(!t||t.dead){this.clearOrder();return}if(this.buildOrderDone(t)){if(t.def.isFarm){this.orderGatherFarm(t);return}this.clearOrder();return}if(this.distTo(t)>2.4){this.state="toBuild",this.requestPath(t.cx,t.cz);return}t.complete?t.repairTick(e):t.constructionTick(e),this.actionT<=0&&(this.actionT=.5,this.game.rand()<.5&&this.game.sound("hammer"))}attackRange(e){return e.isBuilding?Math.max(this.def.range,1.6):Math.max(this.def.range,this.radius+.2)}updateToAttack(e){const t=this.order?.target;if(!t||t.dead){this.resumeOrAcquire();return}const n=this.attackRange(t),i=this.distTo(t);if(this.stance==="hold"&&i>n){this.clearOrder();return}if(this.stance==="defensive"&&this.post&&Math.hypot(this.x-this.post.x,this.z-this.post.z)>16){const s=this.post;this.post=null,this.orderMove(s.x,s.z);return}if(i<=n&&(!this.def.minRange||i>=this.def.minRange)){this.state="fighting",this.stuckN=0;return}if(this.repathT-=e,this.repathT<=0&&!t.isBuilding&&this.requestPath(t.x,t.z),this.followPath(e)){if(this.def.minRange&&i<this.def.minRange){const s=Math.atan2(this.z-(t.isBuilding?t.cz:t.z),this.x-(t.isBuilding?t.cx:t.x))+(this.game.rand()-.5);this.requestPath(this.x+Math.cos(s)*6,this.z+Math.sin(s)*6);return}if(this.distTo(t)>n){if(this.stuckN=(this.stuckN||0)+1,this.stuckN>=3){this.stuckN=0;const s=this.game.nearestEnemy(this.owner,this.x,this.z,12,!0);if(s&&s!==t){this.orderAttack(s);return}this.resumeOrAcquire();return}this.requestPath(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z)}}}updateFighting(e){const t=this.order?.target;if(!t||t.dead){this.resumeOrAcquire();return}const n=this.attackRange(t),i=this.distTo(t);if(i>n+.6){this.state="toAttack",this.requestPath(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z);return}if(this.def.minRange&&i<this.def.minRange){const s=Math.atan2(this.z-(t.isBuilding?t.cz:t.z),this.x-(t.isBuilding?t.cx:t.x));this.requestPath(this.x+Math.cos(s)*5,this.z+Math.sin(s)*5),this.state="toAttack";return}this.faceTowards(t.isBuilding?t.cx:t.x,t.isBuilding?t.cz:t.z),this.actionT<=0&&(this.actionT=this.def.atkSpeed,this.strike(t))}strike(e){const t=this.game,n=t.players[this.owner],i=Math.round(this.def.atk*cv[n.age-1]*(n.mods?.atkMult||1));if(this.attackAnimT=.35,this.def.projectile==="arrow"){const s=this.pos3();s.y+=1.5,t.effects.fireArrow(s,e,i,this),t.sound("arrow")}else if(this.def.projectile==="stone"){const s=this.pos3();s.y+=1.6;const o=e.isBuilding?new E(e.cx,e.groundY,e.cz):e.pos3();t.effects.fireStone(s,o,i,this.def.splash||0,this),t.sound("catapult"),this.limbs.throwArm&&(this.throwAnimT=.5)}else{let s=i;!e.isBuilding&&this.def.bonusVsCav&&e.def?.cavalry&&(s=Math.round(s*this.def.bonusVsCav)),e.isBuilding&&(s=Math.max(1,Math.round(i*(this.type==="villager"?.6:.8)))),t.applyDamage(e,s,this),t.effects.blood(e.isBuilding?new E(e.cx,e.groundY+1.2,e.cz):e.pos3().setY(this.group.position.y+1.1)),t.sound("melee")}}followPath(e){if(!this.path||this.wpIdx>=this.path.length)return this.applySeparation(e,!1),!0;const[t,n]=this.path[this.wpIdx],i=t-this.x,s=n-this.z,o=Math.hypot(i,s),a=this.def.speed*e;if(o<=Math.max(a,.25))return this.wpIdx++,this.wpIdx>=this.path.length?(this.path=null,!0):!1;const c=i/o,l=s/o;if(this.tryStep(c*a,l*a),this.facing=xy(this.facing,Math.atan2(c,l),Math.min(1,e*10)),this.moving=!0,this.applySeparation(e,!0),this.progT=(this.progT||0)+e,this.progT>2){const h=Math.hypot(this.x-(this.progX??this.x),this.z-(this.progZ??this.z));if(this.progX=this.x,this.progZ=this.z,this.progT=0,h<.3)return this.path=null,!0}return!1}tryStep(e,t){const n=this.game.map;let i=this.x+e,s=this.z+t;const[o,a]=n.worldToGrid(i,s);if(n.isWalkableFor(o,a,this.owner))return this.x=i,this.z=s,!0;const[c,l]=n.worldToGrid(this.x+e,this.z);if(n.isWalkableFor(c,l,this.owner))return this.x+=e,!0;const[h,u]=n.worldToGrid(this.x,this.z+t);return n.isWalkableFor(h,u,this.owner)?(this.z+=t,!0):!1}applySeparation(e,t){const n=this.game.unitsNear(this.x,this.z,1.8+this.radius);let i=0,s=0;for(const o of n){if(o===this||o.dead)continue;const a=this.x-o.x,c=this.z-o.z,l=Math.hypot(a,c),h=this.radius+o.radius+(t?.05:.18);if(l<h&&l>.001){const u=(h-l)/h;i+=a/l*u,s+=c/l*u}else if(l<=.001){const u=this.game.rand()*Math.PI*2;i+=Math.cos(u),s+=Math.sin(u)}}if(i||s){const o=(t?2.4:4.5)*e;this.tryStep(i*o,s*o)}}faceTowards(e,t){this.facing=Math.atan2(e-this.x,t-this.z)}updateCarryMesh(){const e=this.carry&&this.carry.amt>0;if(e&&!this.carryMesh){const t=new ze(gy,_o[this.carry.res]||_o.wood);t.position.set(0,1.65,-.34),this.group.add(t),this.carryMesh=t}else!e&&this.carryMesh?(this.group.remove(this.carryMesh),this.carryMesh=null):e&&this.carryMesh&&(this.carryMesh.material=_o[this.carry.res]||_o.wood)}animate(e){const t=this.group;if(t.position.x=this.x,t.position.z=this.z,t.position.y=this.game.map.heightAt(this.x,this.z),t.rotation.y=this.facing,this.hitT>0){this.hitT-=e;const o=Math.max(0,this.hitT)/.16;t.scale.setScalar(1+.16*o)}else t.scale.x!==1&&t.scale.setScalar(1);if(this.attackAnimT>0&&(this.attackAnimT-=e),this.throwAnimT>0&&(this.throwAnimT-=e),this.mixer){let o="idle";this.moving?o="walk":this.state==="gathering"||this.state==="building"?o="work":this.state==="fighting"&&(this.def.projectile?o=this.actions?.shoot?"shoot":"work":o=this.actions?.melee?"melee":"work"),this.playAction(o),this.mixer.update(e),this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp);return}const n=this.procModel?.userData||{},i=this.limbs,s=this.animT;if(n.isMounted){const o=this.moving?13:0;for(let a=0;a<4;a++){const c=i["hLeg"+a];c&&(c.rotation.x=this.moving?Math.sin(s*o+a*1.7)*.6:0)}i.rArm&&(i.rArm.rotation.x=this.attackAnimT>0?-.7:0),t.position.y+=this.moving?Math.abs(Math.sin(s*o*.5))*.12:0}else if(n.isMachine){if(i.throwArm){const o=this.throwAnimT>0?-2:-.5;i.throwArm.rotation.x+=(o-i.throwArm.rotation.x)*Math.min(1,e*(this.throwAnimT>0?18:3))}}else{const o=this.state==="gathering"||this.state==="building";if(this.moving){const c=Math.sin(s*11)*.65;i.lLeg&&(i.lLeg.rotation.x=c),i.rLeg&&(i.rLeg.rotation.x=-c),i.lArm&&(i.lArm.rotation.x=-c*.7),i.rArm&&(i.rArm.rotation.x=c*.7)}else if(o){const a=Math.sin(s*6.5);i.rArm&&(i.rArm.rotation.x=-1.2+a*.7),i.lArm&&(i.lArm.rotation.x=-.2+a*.18),i.lLeg&&(i.lLeg.rotation.x=0),i.rLeg&&(i.rLeg.rotation.x=0)}else if(this.attackAnimT>0)i.rArm&&(i.rArm.rotation.x=-1.9+(.35-this.attackAnimT)*5),i.lArm&&(i.lArm.rotation.x=.3);else{const a=Math.sin(s*1.6)*.04;for(const c of["lLeg","rLeg","lArm","rArm"])i[c]&&(i[c].rotation.x*=.85);i.lArm&&(i.lArm.rotation.x+=a)}}this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp)}}function xy(r,e,t){let n=e-r;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return r+n*t}const Sd={towncenter:["TownCenter_FirstAge_Level3","TownCenter_SecondAge_Level1","TownCenter_SecondAge_Level2","TownCenter_SecondAge_Level3"],house:["Houses_FirstAge_1_Level2","Houses_FirstAge_2_Level2","Houses_SecondAge_1_Level2","Houses_SecondAge_3_Level3"],barracks:["Barracks_FirstAge_Level2","Barracks_FirstAge_Level3","Barracks_SecondAge_Level2","Barracks_SecondAge_Level3"],archeryrange:["Archery_FirstAge_Level2","Archery_FirstAge_Level3","Archery_SecondAge_Level2","Archery_SecondAge_Level3"],farm:["Farm_FirstAge_Level2_Wheat","Farm_FirstAge_Level3_Wheat","Farm_SecondAge_Level2_Wheat","Farm_SecondAge_Level3_Wheat"],tower:["WatchTower_FirstAge_Level2","WatchTower_FirstAge_Level3","WatchTower_SecondAge_Level2","WatchTower_SecondAge_Level3"],storehouse:["Market_FirstAge_Level2","Market_FirstAge_Level3","Market_SecondAge_Level2","Market_SecondAge_Level3"],market:["Market_FirstAge_Level2","Market_FirstAge_Level3","Market_SecondAge_Level2","Market_SecondAge_Level3"],blacksmith:["TowerHouse_FirstAge","TowerHouse_FirstAge","TowerHouse_SecondAge","TowerHouse_SecondAge"],stable:["Windmill_FirstAge","Windmill_FirstAge","Windmill_SecondAge","Windmill_SecondAge"],siegeworkshop:["TowerHouse_FirstAge","TowerHouse_FirstAge","TowerHouse_SecondAge","TowerHouse_SecondAge"],wall:["Wall_FirstAge","Wall_FirstAge","Wall_SecondAge","Wall_SecondAge"],_farmdirt:["Farm_Dirt_Level2"]},mc=new Map;let Eo=!1,gc=[];function vy(r){Eo?r():gc.push(r)}function My(r){const e=new Pe;e.add(r);const t=new Mn().setFromObject(r),n=t.getCenter(new E);return r.position.x-=n.x,r.position.z-=n.z,r.position.y-=t.min.y,r.traverse(i=>{i.isMesh&&(i.castShadow=!0,i.receiveShadow=!0,i.material&&(i.material.roughness=Math.min(1,(i.material.roughness??.9)+.1),i.material.metalness=0))}),e.userData.footprint=Math.max(t.max.x-t.min.x,t.max.z-t.min.z),e}async function yy(){const r="/aoge/models/buildings/";let e;try{const s=await fetch(r+"index.json");if(!s.ok)return!1;e=await s.json()}catch{return!1}const t=new Map(e.map(s=>[s.replace(/\.(glb|gltf)$/i,""),s])),n=new kc,i=[...new Set(Object.values(Sd).flat())].filter(s=>t.has(s));return await Promise.all(i.map(async s=>{try{const o=await n.loadAsync(r+t.get(s));mc.set(s,My(o.scene))}catch(o){console.warn("pack model failed:",s,o.message)}})),Eo=mc.size>0,Eo&&(gc.forEach(s=>s()),gc=[]),Eo}function bd(r,e,t){const n=Sd[r];if(!n)return null;const i=n[Math.min(3,Math.max(0,e-1))],s=tu(i,t);if(!s)return null;if(r==="farm"){const o=tu("Farm_Dirt_Level2",t);if(o){const a=new Pe;return o.position.y=.16,s.position.y=.22,a.add(o,s),a}}return s}function tu(r,e){const t=mc.get(r);if(!t)return null;const n=t.clone(!0),i=e*ke*.96,s=i/(t.userData.footprint||i);return n.scale.setScalar(s),n}let Sy=1e5;const nu=new Map;function by(r,e){const t=r+"x"+e.toFixed(1);let n=nu.get(t);return n||(n=new ei(r*ke*.96,e,r*ke*.96),nu.set(t,n)),n}class wy{constructor(e,t,n,i,s,o=!1){this.id=Sy++,this.game=e,this.type=t,this.def=Bs[t],this.owner=n,this.isBuilding=!0,this.gx=i,this.gy=s,this.size=this.def.size,this.cx=(i+this.size/2)*ke,this.cz=(s+this.size/2)*ke,this.dead=!1,this.maxHp=Math.round(this.def.hp*(e.players[n].mods?.bldHpMult||1)),this.complete=o,this.progress=o?1:0,this.hp=o?this.maxHp:Math.max(1,Math.round(this.maxHp*.08)),this.trainQueue=[],this.trainT=0,this.researching=null,this.rally=null,this.atkCd=0,this.scanT=e.rand()*.4,this.atkTarget=null,e.map.occupy(i,s,this.size,this,this.def.isGate?n:-1);let a=0;for(let f=s;f<s+this.size;f++)for(let g=i;g<i+this.size;g++)a+=e.map.tileHeight(g,f);this.groundY=a/(this.size*this.size)-.06;const c=new Pe;c.position.set(this.cx,this.groundY,this.cz),c.userData.entity=this,this.modelGroup=new Pe,this.modelGroup.add(this.buildModel()),c.add(this.modelGroup);const l=Math.max(2.5,this.size*1.6),h=new ze(by(this.size,l),yd);h.position.y=l/2,h.userData.entity=this,c.add(h),this.group=c,e.scene.add(c),o||(this.scaffold=OM(this.size),c.add(this.scaffold),this.modelGroup.scale.y=.1);const u=this.size*ke*.62;this.selRing=_d(u,n===0),this.selRing.visible=!1,this.selRing.position.y=.12,c.add(this.selRing);const d=t==="towncenter"?8.2:t==="tower"?7:4.2;this.healthBar=new xd(c,Math.min(4.5,this.size*1.5),d),this.selected=!1}pos3(){return new E(this.cx,this.groundY,this.cz)}buildModel(){const e=this.game.teamColor(this.owner),t=this.game.players[this.owner].age,n=bd(this.type,t,this.size);if(n){const i=new Pe;if(i.add(n),!this.def.isFarm&&!this.def.isWall){const s=pd(e,3+this.size*.6);s.position.set(this.size*ke*.36,0,this.size*ke*.36),i.add(s)}return i}return md[this.type](e)}reskin(){if(!this.dead){for(;this.modelGroup.children.length;)this.modelGroup.remove(this.modelGroup.children[0]);this.modelGroup.add(this.buildModel())}}setSelected(e){this.selected=e,this.selRing.visible=e}constructionTick(e){if(this.complete||this.dead)return;this.buildersNow=(this.buildersNow||0)+1;const t=Math.max(1,this.builderCount||1),n=e/this.def.buildTime*(Math.pow(t,.7)/t);this.progress=Math.min(1,this.progress+n),this.hp=Math.min(this.maxHp,this.hp+n*this.maxHp*.92),this.modelGroup.scale.y=.1+this.progress*.9,this.progress>=1&&this.finishConstruction()}repairTick(e){if(!this.complete||this.dead||this.hp>=this.maxHp)return;const t=this.game.players[this.owner].res,n=e*.5;if(t.wood<n)return;t.wood-=n;const i=Math.max(1,this.builderCount||1);this.buildersNow=(this.buildersNow||0)+1;const s=e/this.def.buildTime*.5*(Math.pow(i,.7)/i);this.hp=Math.min(this.maxHp,this.hp+s*this.maxHp)}finishConstruction(){this.complete=!0,this.hp=Math.min(this.maxHp,this.hp),this.modelGroup.scale.y=1,this.scaffold&&(this.group.remove(this.scaffold),this.scaffold=null),this.game.onBuildingComplete(this)}canTrain(e){const t=_n[e],n=this.game.players[this.owner];return this.complete&&t&&n.age>=t.age&&!!this.def.trains?.includes(e)}queueTrain(e){const t=_n[e],n=this.game.players[this.owner];return!this.canTrain(e)||this.trainQueue.length>=5||!xn(n.res,t.cost)?!1:(wo(n.res,t.cost),this.trainQueue.push(e),this.trainQueue.length===1&&(this.trainT=0),!0)}cancelTrain(e){const t=this.trainQueue[e];t&&(To(this.game.players[this.owner].res,_n[t].cost),this.trainQueue.splice(e,1),e===0&&(this.trainT=0))}startTech(e){const t=this.game.players[this.owner],n=Wi[e];return!this.complete||!this.def.techs?.includes(e)||!n||this.researching||t.techs.includes(e)||t.age<n.age||this.game.buildings.some(i=>!i.dead&&i.owner===this.owner&&i.researching?.tech===e)||!xn(t.res,n.cost)?!1:(wo(t.res,n.cost),this.researching={tech:e,t:0,dur:n.time},!0)}startAgeResearch(){const e=this.game.players[this.owner];if(!this.complete||!this.def.researchesAge||this.researching||e.ageResearchInProgress||e.age>=qt.length)return!1;const t=qt[e.age];return xn(e.res,t.cost)?(wo(e.res,t.cost),this.researching={age:e.age+1,t:0,dur:t.time},e.ageResearchInProgress=!0,!0):!1}update(e){if(this.dead)return;if(this.builderCount=this.buildersNow||0,this.buildersNow=0,this.complete&&this.trainQueue.length>0){const n=this.trainQueue[0],i=_n[n],s=this.game.players[this.owner];this.trainT+=e,this.trainT>=i.trainTime&&(s.popUsed<s.popCap?(this.trainQueue.shift(),this.trainT=0,this.game.spawnFromBuilding(this,n)):this.trainT=i.trainTime)}this.researching&&(this.researching.t+=e,this.researching.t>=this.researching.dur&&(this.researching.tech?this.game.applyTech(this.owner,this.researching.tech):this.game.advanceAge(this.owner,this.researching.age),this.researching=null));const t=this.def.attack;if(t&&this.complete&&(this.atkCd-=e,this.scanT-=e,(!this.atkTarget||this.atkTarget.dead||this.targetOutOfRange())&&this.scanT<=0&&(this.scanT=.5,this.atkTarget=this.game.nearestEnemy(this.owner,this.cx,this.cz,t.range,!0)),this.atkTarget&&!this.atkTarget.dead&&this.atkCd<=0&&!this.targetOutOfRange())){this.atkCd=t.atkSpeed;const n=this.pos3();n.y+=this.type==="tower"?5.4:6.5;const i=1+(this.garrison?.length||0)*.4;this.game.effects.fireArrow(n,this.atkTarget,Math.round(t.atk*i),this),this.game.sound("arrow")}this.healthBar.set(this.hp/this.maxHp,this.selected||this.hp<this.maxHp-.5)}targetOutOfRange(){const e=this.atkTarget;if(!e)return!0;const t=e.isBuilding?e.cx:e.x,n=e.isBuilding?e.cz:e.z;return Math.hypot(t-this.cx,n-this.cz)>this.def.attack.range+1}spawnPoint(){const e=this.game.map,t=this.rally?.x??this.cx,n=this.rally?.z??this.cz+(this.size+1)*ke;let i=null,s=1/0;for(let o=0;o<4;o++){for(let a=this.gy-1-o;a<=this.gy+this.size+o;a++)for(let c=this.gx-1-o;c<=this.gx+this.size+o;c++){if(!(c<this.gx-o||c>=this.gx+this.size+o||a<this.gy-o||a>=this.gy+this.size+o)||!e.isWalkable(c,a))continue;const[h,u]=e.gridToWorld(c,a),d=Math.hypot(h-t,u-n);d<s&&(s=d,i=[h,u])}if(i)return i}return[this.cx,this.cz]}}function rn(r,e){const t=[];for(const n of e){const i=r.units.find(s=>s.id===n&&!s.dead);i&&t.push(i)}return t}const en=(r,e)=>r.buildings.find(t=>t.id===e&&!t.dead)||null,iu=(r,e)=>r.nodes.find(t=>t.id===e&&!t.dead)||null,Ty=(r,e)=>r.units.find(t=>t.id===e&&!t.dead)||en(r,e);function fn(r,e,t){e?r.pushOrder(t):(r.orderQueue=null,t())}function Ay(r){const e=Math.ceil(Math.sqrt(r)),t=1.7,n=[];for(let i=0;i<r;i++){const s=Math.floor(i/e),o=i%e;n.push([(o-(e-1)/2)*t,(s-(Math.ceil(r/e)-1)/2)*t])}return n}function wd(r,e){switch(e.k){case"move":{const t=rn(r,e.ids),n=Ay(t.length);return t.forEach((i,s)=>fn(i,e.shift,()=>i.orderMove(e.x+n[s][0],e.z+n[s][1]))),t.length>0}case"attackmove":{for(const t of rn(r,e.ids))fn(t,e.shift,()=>t.orderAttackMove(e.x,e.z));return!0}case"attack":{const t=Ty(r,e.t);if(!t)return!1;for(const n of rn(r,e.ids))fn(n,e.shift,()=>n.orderAttack(t));return!0}case"gather":{const t=iu(r,e.n);if(!t)return!1;for(const n of rn(r,e.ids))n.type==="villager"?fn(n,e.shift,()=>n.orderGather(t)):fn(n,e.shift,()=>n.orderMove(t.wx,t.wz));return!0}case"farm":{const t=en(r,e.f);if(!t)return!1;for(const n of rn(r,e.ids))n.type==="villager"&&fn(n,e.shift,()=>n.orderGatherFarm(t));return!0}case"build":{const t=en(r,e.b);if(!t)return!1;for(const n of rn(r,e.ids))n.type==="villager"&&fn(n,e.shift,()=>n.orderBuild(t));return!0}case"deposit":{const t=en(r,e.b);if(!t)return!1;for(const n of rn(r,e.ids))n.type==="villager"&&n.carry?.amt>0?(n.order=n.order?.kind==="gather"||n.order?.kind==="farm"?n.order:{kind:"gather",node:null},n.goDeposit()):fn(n,e.shift,()=>n.orderMove(t.cx,t.cz));return!0}case"garrison":{const t=en(r,e.b);if(!t)return!1;for(const n of rn(r,e.ids))fn(n,e.shift,()=>n.orderGarrison(t));return!0}case"stop":{for(const t of rn(r,e.ids))t.clearOrder(!0);return!0}case"stance":{for(const t of rn(r,e.ids))t.stance=e.s,t.post=null;return!0}case"place":{const t=r.placeBuilding(e.o??0,e.t,e.gx,e.gy);if(!t)return null;for(const n of rn(r,e.ids||[]))n.type==="villager"&&fn(n,e.shift,()=>n.orderBuild(t));return t}case"placeline":{const t=[];for(const[i,s]of e.tiles){const o=r.placeBuilding(e.o??0,e.t,i,s);o&&t.push(o)}const n=rn(r,e.ids||[]).filter(i=>i.type==="villager");return t.forEach((i,s)=>{const o=n.length?n[s%n.length]:null;o&&fn(o,e.shift||s>=n.length,()=>o.orderBuild(i))}),t.length}case"train":{const t=en(r,e.b);return t?t.queueTrain(e.u):!1}case"cancelTrain":{const t=en(r,e.b);return t&&t.cancelTrain(e.i),!0}case"age":{const t=en(r,e.b);return t?t.startAgeResearch():!1}case"tech":{const t=en(r,e.b);return t?t.startTech(e.id):!1}case"trade":return r.trade(e.o??0,e.kind,e.dir);case"bell":{const t=en(r,e.b);return t&&r.townBell(t),!0}case"demolish":{const t=en(r,e.b);return t&&r.deleteBuilding(t),!0}case"rally":{for(const t of e.bs){const n=en(r,t);if(n)if(e.n!==void 0){const i=iu(r,e.n);i&&(n.rally={node:i})}else if(e.f!==void 0){const i=en(r,e.f);i&&(n.rally={farm:i})}else n.rally={x:e.x,z:e.z}}return!0}default:return!1}}let Ey=1;class Ry{constructor(e,t,n){this.scene=e,this.map=t,this.trees=n,this.effects=null,this.ai=null,this.ais=[],this.fog=null,this.tick=0,this.rngState=(t.seed^2654435769)>>>0||1,this.cmdLog=null,this.onCommand=null,this.replayMode=!1,this.onTick=null,this.time=0,this.gameOver=!1,this.players=Array.from({length:1+vi},(i,s)=>({id:s,res:{...uv},age:1,popUsed:0,popCap:0,ageResearchInProgress:!1,techs:[],mods:{atkMult:1,hpMult:1,gatherMult:1,bldHpMult:1}})),this.stats=this.players.map(()=>({wood:0,food:0,gold:0,stone:0,trained:0,lost:0,kills:0,built:0,bLost:0,razed:0})),this.units=[],this.buildings=[],this.nodes=[],this.stumps=[],this.hash=new Map,this.cell=4,this.treeNodeByInstance=new Map,this.onAlert=()=>{},this.soundFn=()=>{},this.onGameOver=()=>{},this.onCombat=()=>{},this.lastAttackAlert=-99}teamColor(e){return ov[e]}sound(e){this.soundFn(e)}hostile(e,t){return e!==t&&e===de!=(t===de)}rand(){let e=(this.rngState+=1831565813)>>>0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}exec(e){if(!this.replayMode&&!(this.onCommand&&this.onCommand(e)===!1))return this.cmdLog&&this.cmdLog.push({t:this.tick,...e}),wd(this,e)}stateHash(){let e=2166136261;const t=n=>{e=(e^Math.imul(Math.round(n*256)|0,2654435761)>>>0)>>>0,e=(e<<13|e>>>19)>>>0};for(const n of this.units)t(n.id),t(n.x),t(n.z),t(n.hp);for(const n of this.buildings)t(n.id),t(n.hp),t(n.progress),t(n.trainQueue.length);for(const n of this.players)t(n.res.wood),t(n.res.food),t(n.res.gold),t(n.res.stone||0),t(n.age);return t(this.tick),e>>>0}createResourceNodes(e){let t=12345;const n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(const i of e){const[s,o]=this.map.gridToWorld(i.gx,i.gy),a=hv[i.type],c={id:Ey++,isNode:!0,type:i.type,res:a.res,amount:a.amount,gx:i.gx,gy:i.gy,wx:s,wz:o,dead:!1},l=this.map.heightAt(s,o);if(i.type==="tree")c.treeHandle=this.trees.add(s,l-.1,o,n()),c.treeHandle&&this.treeNodeByInstance.set(c.treeHandle.idx,c);else{const h=i.type==="berry"?UM():i.type==="stone"?BM():FM();h.position.set(s,l-.05,o),h.rotation.y=n()*Math.PI*2,h.userData.node=c,this.scene.add(h),c.mesh=h}this.map.occupant[i.gy*this.map.size+i.gx]=c,this.nodes.push(c)}this.trees.flush()}spawnUnit(e,t,n,i){const s=new _y(this,e,t,n,i);return this.units.push(s),this.players[t].popUsed+=1,s}spawnFromBuilding(e,t){const[n,i]=e.spawnPoint(),s=this.spawnUnit(t,e.owner,n,i);this.stats[e.owner].trained++;const o=e.rally;if(o)if(o.node&&!o.node.dead&&o.node.amount>0&&t==="villager")s.orderGather(o.node);else if(o.farm&&!o.farm.dead&&t==="villager")s.orderGatherFarm(o.farm);else if((o.node||o.farm)&&t!=="villager"){const a=o.node?o.node.wx:o.farm.cx,c=o.node?o.node.wz:o.farm.cz;s.orderAttackMove(a,c)}else o.x!==void 0&&(t!=="villager"?s.orderAttackMove(o.x,o.z):s.orderMove(o.x,o.z));return e.owner===de&&this.sound("ready"),s}canPlaceBuilding(e,t,n){if(!this.map.canPlace(e,t,n))return!1;const i=e*ke,s=t*ke,o=(e+n)*ke,a=(t+n)*ke;for(const c of this.units)if(!c.dead&&c.x>i-.4&&c.x<o+.4&&c.z>s-.4&&c.z<a+.4)return!1;return!0}placeBuilding(e,t,n,i,s=!1){const o=Bs[t],a=this.players[e];if(!o)return null;if(!s){if(a.age<o.age||!xn(a.res,o.cost)||!this.canPlaceBuilding(n,i,o.size))return null;wo(a.res,o.cost)}const c=new wy(this,t,e,n,i,s);return this.buildings.push(c),s&&this.onBuildingComplete(c,!0),c}onBuildingComplete(e,t=!1){this.recalcPop(e.owner),t||this.stats[e.owner].built++,!t&&e.owner===de&&this.sound("built")}recalcPop(e){let t=0;for(const n of this.buildings)n.owner===e&&n.complete&&!n.dead&&n.def.pop&&(t+=n.def.pop);this.players[e].popCap=Math.min(t,sv)}advanceAge(e,t){const n=this.players[e],i=uc[n.age-1];n.age=t,n.ageResearchInProgress=!1;const s=uc[t-1]/i;for(const o of this.units)o.owner===e&&!o.dead&&(o.maxHp=Math.round(o.maxHp*s),o.hp=Math.min(o.maxHp,Math.round(o.hp*s)));for(const o of this.buildings)o.owner===e&&!o.dead&&o.reskin();e===de?(this.onAlert(`You have advanced to the ${qt[t-1].name}!`,!0),this.sound("ageup")):this.onAlert(`The enemy has advanced to the ${qt[t-1].name}.`)}applyTech(e,t){const n=this.players[e];if(n.techs.includes(t))return;const i=Wi[t];n.techs.push(t);for(const[s,o]of Object.entries(i.mod))n.mods[s]*=o;if(i.mod.hpMult)for(const s of this.units)s.owner===e&&!s.dead&&(s.maxHp=Math.round(s.maxHp*i.mod.hpMult),s.hp=Math.min(s.maxHp,Math.round(s.hp*i.mod.hpMult)));if(i.mod.bldHpMult)for(const s of this.buildings)s.owner===e&&!s.dead&&(s.maxHp=Math.round(s.maxHp*i.mod.bldHpMult),s.hp=Math.min(s.maxHp,Math.round(s.hp*i.mod.bldHpMult)));e===de&&(this.onAlert(`Research complete: ${i.name} (${i.desc})`,!0),this.sound("ageup"))}trade(e,t,n){const i=this.players[e].res;if(n==="sell"){if((i[t]||0)<Xt.lot)return!1;i[t]-=Xt.lot,i.gold=(i.gold||0)+Xt.sellGold}else{if((i.gold||0)<Xt.buyGold)return!1;i.gold-=Xt.buyGold,i[t]=(i[t]||0)+Xt.lot}return e===de&&this.sound("deposit"),!0}applyDamage(e,t,n){if(!(!e||e.dead||this.gameOver)){if(e.hp-=t,t>=1){const i=e.isBuilding?e.groundY+e.size*1.4:e.group.position.y+2.2;this.effects.damageNumber(e.isBuilding?e.cx:e.x,i,e.isBuilding?e.cz:e.z,t),e.isUnit&&(e.hitT=.16)}(e.owner===de||n?.owner===de)&&this.onCombat(),e.owner===de&&this.time-this.lastAttackAlert>14&&(this.lastAttackAlert=this.time,this.onAlert("Your forces are under attack!"),this.sound("horn")),e.owner===de&&this.time-(this.lastPingT||-9)>3&&(this.lastPingT=this.time,this.onPing?.(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z)),e.isUnit&&n&&!n.dead&&this.hostile(e.owner,n.owner)&&(e.state==="idle"||e.state==="gathering"||e.state==="toResource"||e.state==="deposit"||e.state==="move"||e.state==="building"||e.state==="toBuild")&&(e.type!=="villager"||n.isUnit&&n.def.range<=1.5?e.engage(n,!0):this.fleeHome(e));for(const i of this.ais)i.onDamage(e,n);if(e.hp<=0){const i=this.stats;e.isUnit?(i[e.owner].lost++,n&&this.hostile(e.owner,n.owner)&&i[n.owner].kills++,this.killUnit(e)):(i[e.owner].bLost++,n&&this.hostile(e.owner,n.owner)&&i[n.owner].razed++,this.razeBuilding(e))}}}fleeHome(e){if(e.fleeCd&&this.time<e.fleeCd)return;e.fleeCd=this.time+6;const t=this.findDropoff(e.owner,e.x,e.z);t&&e.orderMove(t.cx,t.cz)}splashDamage(e,t,n,i){if(!(t<=0)){for(const s of[...this.units]){if(s.dead||s===i||s.garrisoned)continue;const o=Math.hypot(s.x-e.x,s.z-e.z);o<=t&&this.applyDamage(s,Math.round(n*(o<t*.5?1:.55)),i)}for(const s of[...this.buildings]){if(s.dead)continue;const o=s.size*ke/2,a=Math.max(Math.abs(e.x-s.cx)-o,0),c=Math.max(Math.abs(e.z-s.cz)-o,0);if(Math.hypot(a,c)<=t){const l=i?.def?.bonusVsBuilding&&i.owner!==s.owner?i.def.bonusVsBuilding:1;this.applyDamage(s,Math.round(n*l),i)}}}}killUnit(e){e.dead||(e.dead=!0,e.setSelected(!1),e.healthBar.set(0,!1),this.players[e.owner].popUsed-=1,this.units.splice(this.units.indexOf(e),1),this.effects.blood(e.pos3().setY(e.group.position.y+.8)),e.mixer&&e.actions?.death?(e.playAction("death",.1),this.effects.fadeOut(e.group,2.2,.6,e.mixer)):this.effects.fadeOut(e.group,1.4,1),this.sound("die"),this.checkWinLose())}razeBuilding(e,t=!1){if(e.dead)return;if(e.dead=!0,e.setSelected(!1),e.healthBar.set(0,!1),e.garrison?.length){for(const i of e.garrison){i.garrisoned=null,i.group.visible=!0;const[s,o]=e.spawnPoint();i.x=s,i.z=o,i.clearOrder(!0)}e.garrison=[]}const n=this.players[e.owner].res;for(const i of e.trainQueue)To(n,_n[i].cost);e.trainQueue.length=0,e.researching&&(To(n,e.researching.tech?Wi[e.researching.tech].cost:qt[e.researching.age-1].cost),e.researching.tech||(this.players[e.owner].ageResearchInProgress=!1)),this.map.release(e.gx,e.gy,e.size),this.buildings.splice(this.buildings.indexOf(e),1),this.recalcPop(e.owner),this.effects.puff(new E(e.cx,e.groundY+1.5,e.cz),9075296,16,7),this.effects.fadeOut(e.group,2.2,e.size*1.2),this.effects.spawnRubble(e.cx,e.groundY,e.cz,e.size),this.sound("collapse"),!t&&e.owner===de&&this.onAlert(`Your ${e.def.name} has been destroyed!`);for(const i of this.ais)i.me===e.owner&&i.onBuildingLost(e);this.checkWinLose()}deleteBuilding(e){!e||e.dead||(e.complete||To(this.players[e.owner].res,e.def.cost),this.razeBuilding(e,!0))}addStump(e,t,n){if(!this.stumpMesh){const o=new yn(.22,.3,.4,6);o.translate(0,.2,0),this.stumpMesh=new Ns(o,$t(J.woodDark),400),this.stumpMesh.count=0,this.stumpMesh.frustumCulled=!1,this.stumpN=0,this.scene.add(this.stumpMesh)}const i=this.stumpN%400,s=new Te().makeRotationY(this.rand()*6.28);s.setPosition(e,t,n),this.stumpMesh.setMatrixAt(i,s),this.stumpN++,this.stumpMesh.count=Math.min(400,this.stumpN),this.stumpMesh.instanceMatrix.needsUpdate=!0}depleteNode(e){e.dead||(e.dead=!0,e.amount=0,this.map.release(e.gx,e.gy,1),this.nodes.splice(this.nodes.indexOf(e),1),e.treeHandle!==void 0&&e.treeHandle!==null?(this.trees.remove(e.treeHandle),this.treeNodeByInstance.delete(e.treeHandle.idx),this.addStump(e.wx,this.map.heightAt(e.wx,e.wz)-.05,e.wz),this.sound("treefall")):e.mesh&&this.effects.fadeOut(e.mesh,1.2,.8))}findDropoff(e,t,n){let i=null,s=1/0;for(const o of this.buildings){if(o.owner!==e||!o.complete||o.dead||!o.def.dropoff)continue;const a=Math.hypot(o.cx-t,o.cz-n);a<s&&(s=a,i=o)}return i}findNearestNode(e,t,n,i=30){let s=null,o=1/0;for(const a of this.nodes){if(a.dead||a.res!==e||a.amount<=0)continue;const c=Math.hypot(a.wx-t,a.wz-n);c<o&&c<=i&&(o=c,s=a)}return s}nodeReachable(e){if(!e||e.dead)return!1;for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)if(!(n===0&&t===0)&&this.map.isWalkable(e.gx+n,e.gy+t))return!0;return!1}findNearestReachableNode(e,t,n,i=40,s=null){let o=null,a=1/0;for(const c of this.nodes){if(c.dead||c===s||c.res!==e||c.amount<=0)continue;const l=Math.hypot(c.wx-t,c.wz-n);l<=i&&l<a&&this.nodeReachable(c)&&(a=l,o=c)}return o}townBell(e){if(!e||e.dead||!e.complete)return;if(e.garrison?.length){for(const n of e.garrison){n.garrisoned=null,n.group.visible=!0;const[i,s]=e.spawnPoint();n.x=i,n.z=s,n.clearOrder(!0)}e.garrison=[],this.sound("command");return}let t=0;for(const n of this.units)n.owner!==e.owner||n.dead||n.type!=="villager"||n.garrisoned||Math.hypot(n.x-e.cx,n.z-e.cz)<45&&(n.orderGarrison(e),t++);e.owner===de&&this.onAlert(t?`Town bell! ${t} villagers heading to safety.`:"No villagers in range of the bell."),this.sound("horn")}nearestEnemy(e,t,n,i,s=!1){let o=null,a=1/0;for(const c of this.units){if(!this.hostile(e,c.owner)||c.dead||c.garrisoned)continue;const l=Math.hypot(c.x-t,c.z-n);l<=i&&l<a&&(a=l,o=c)}if(s)for(const c of this.buildings){if(!this.hostile(e,c.owner)||c.dead)continue;const l=c.size*ke/2,h=Math.max(Math.abs(t-c.cx)-l,0),u=Math.max(Math.abs(n-c.cz)-l,0),d=Math.hypot(h,u)+4;Math.hypot(h,u)<=i&&d<a&&(a=d,o=c)}return o}hashKey(e,t){return(e/this.cell|0)*4096+(t/this.cell|0)}rebuildHash(){for(const e of this.hash.values())e.length=0;for(const e of this.units){const t=this.hashKey(e.x,e.z);let n=this.hash.get(t);n||(n=[],this.hash.set(t,n)),n.push(e)}}unitsNear(e,t,n){const i=[],s=this.cell,o=(e-n)/s|0,a=(e+n)/s|0,c=(t-n)/s|0,l=(t+n)/s|0;for(let h=o;h<=a;h++)for(let u=c;u<=l;u++){const d=this.hash.get(h*4096+u);if(d)for(const f of d)Math.hypot(f.x-e,f.z-t)<=n&&i.push(f)}return i}countBuildings(e){let t=0;for(const n of this.buildings)n.owner===e&&!n.dead&&t++;return t}update(e){if(this.gameOver){this.effects.update(e);return}this.time+=e,!this._wlChecked&&this.time>=5&&(this._wlChecked=!0,this.checkWinLose()),this.rebuildHash();const t=this._uScratch||(this._uScratch=[]);t.length=0;for(const i of this.units)t.push(i);for(const i of t)i.dead||i.update(e);const n=this._bScratch||(this._bScratch=[]);n.length=0;for(const i of this.buildings)n.push(i);for(const i of n)i.dead||i.update(e);for(const i of this.ais)i.update(e);this.fog?.update(this,e),this.effects.update(e),this.tick++,this.onTick?.()}sideDefeated(e){return this.countBuildings(e)>0?!1:!this.units.some(t=>t.owner===e&&!t.dead&&t.type==="villager")}checkWinLose(){if(this.gameOver||this.time<5)return;this.players.every((t,n)=>n===de||this.sideDefeated(n))?(this.gameOver=!0,this.fog?.revealAll(),this.onGameOver(!0)):this.sideDefeated(de)&&(this.gameOver=!0,this.fog?.revealAll(),this.onGameOver(!1))}}const Cy=[9,13,17,20],Py=[8,13,19,27],Iy=[6,9,12,16],su={easy:{trickle:[0,0,0,0],villMul:.6,armyMul:.3,atkMul:3,firstWave:1e9,waveMul:3,ecoScale:1.8,maxAge:1},normal:{trickle:[3,3,2,1],villMul:1,armyMul:1,atkMul:1,firstWave:150,waveMul:1,ecoScale:1,maxAge:4},hard:{trickle:[6,6,4,2],villMul:1.15,armyMul:1.3,atkMul:.7,firstWave:85,waveMul:.7,ecoScale:.8,maxAge:4}};class Ly{constructor(e,t,n,i="normal",s=rv){this.game=e,this.me=s,this.baseGx=t,this.baseGy=n;const[o,a]=e.map.gridToWorld(t,n);this.baseX=o,this.baseZ=a,this.ecoT=0,this.stratT=3,this.defendT=0,this.attackTargetT=0,this.attacking=!1,this.trickleT=0,this.setDifficulty(i)}setDifficulty(e){this.difficulty=e,this.d=su[e]||su.normal,this.waveT=this.d.firstWave}villTarget(e){return Math.max(4,Math.round(Cy[e-1]*this.d.villMul))}armyCap(e){const t=Math.round(Py[e-1]*this.d.armyMul),n=this.game.units.filter(i=>i.owner===0&&!i.dead&&i.type!=="villager").length;return Math.max(t,Math.min(40,Math.round(n*1.1*this.d.armyMul)))}attackThreshold(e){return Math.round(Iy[e-1]*this.d.atkMul)}p(){return this.game.players[this.me]}myUnits(e){return this.game.units.filter(t=>t.owner===this.me&&!t.dead&&(!e||t.type===e))}myBuildings(e){return this.game.buildings.filter(t=>t.owner===this.me&&!t.dead&&(!e||t.type===e))}army(){return this.game.units.filter(e=>e.owner===this.me&&!e.dead&&e.type!=="villager")}update(e){if(this.ecoT-=e,this.stratT-=e,this.waveT-=e,this.defendT-=e,this.trickleT+=e,this.trickleT>=5){this.trickleT-=5;const t=this.p().res,[n,i,s,o]=this.d.trickle;t.wood+=n,t.food+=i,t.gold+=s,t.stone=(t.stone||0)+(o||0)}this.ecoT<=0&&(this.ecoT=1.4*this.d.ecoScale,this.economy()),this.stratT<=0&&(this.stratT=2.6*this.d.ecoScale,this.strategy()),this.waveT<=0&&this.tryAttack(),this.attacking&&(this.attackTargetT-=e,this.attackTargetT<=0&&(this.attackTargetT=6,this.retarget()))}economy(){const e=this.p(),t=this.myUnits("villager"),n=this.myBuildings("towncenter")[0];n&&n.complete&&t.length+n.trainQueue.length<this.villTarget(e.age)&&n.trainQueue.length<2&&n.queueTrain("villager"),e.popCap-e.popUsed<4&&e.popCap<120&&(this.myBuildings("house").some(c=>!c.complete)||this.construct("house"));const i=this.myBuildings().filter(a=>a.complete&&a.hp<a.maxHp*.7).sort((a,c)=>a.hp/a.maxHp-c.hp/c.maxHp)[0];if(i&&e.res.wood>30&&!t.some(c=>c.order?.kind==="build"&&c.order.building===i)){const c=t.find(l=>l.state==="idle")||null;c&&c.orderBuild(i)}for(const a of["wood","gold"])if(!this.game.findNearestReachableNode(a,this.baseX,this.baseZ,70)){const l=this.game.findNearestReachableNode(a,this.baseX,this.baseZ,400);l&&this.constructNear("storehouse",l.wx,l.wz)}const s=t.filter(a=>a.state==="idle");if(s.length){const a=this.neededResource(t);for(const c of s)if(a==="food"){const l=this.freeFarm(t);if(l){c.orderGatherFarm(l);continue}const h=this.game.findNearestNode("food",c.x,c.z,55);if(h){c.orderGather(h);continue}if(!this.construct("farm",c)){const u=this.game.findNearestNode("wood",c.x,c.z,60);u&&c.orderGather(u)}}else{const l=this.game.findNearestNode(a,this.baseX,this.baseZ,70)||this.game.findNearestNode("wood",c.x,c.z,70);l&&c.orderGather(l)}}const o=this.myBuildings("farm");e.age>=2&&o.length<3+e.age&&e.res.wood>150&&this.construct("farm")}neededResource(e){const t={wood:0,food:0,gold:0,stone:0};for(const l of e){const h=l.order;h&&(h.kind==="farm"?t.food++:h.kind==="gather"&&h.node&&t[h.node.res]++)}const n=this.p(),i=n.age>=2&&(n.res.stone||0)<120?.14:0,s=n.age===1?{wood:.38,food:.45,gold:.17,stone:0}:{wood:.32-i/2,food:.36,gold:.18,stone:i},o=Math.max(1,t.wood+t.food+t.gold+(t.stone||0));let a="food",c=-1/0;for(const l of["wood","food","gold","stone"]){const h=(s[l]||0)-(t[l]||0)/o;h>c&&(c=h,a=l)}return a}freeFarm(e){const t=new Set;for(const n of e)n.order?.kind==="farm"&&n.order.farm&&t.add(n.order.farm.id);return this.myBuildings("farm").find(n=>n.complete&&!t.has(n.id))||null}strategy(){const e=this.p(),t=this.myUnits("villager"),n=this.myBuildings("towncenter")[0];if(!n){e.res.wood>=Bs.towncenter.cost.wood&&this.construct("towncenter");return}if(t.length>=6&&this.myBuildings("barracks").length===0&&this.construct("barracks"),this.myBuildings("storehouse").length===0&&t.length>=7){const a=this.game.findNearestNode("gold",this.baseX,this.baseZ,70);a&&Math.hypot(a.wx-this.baseX,a.wz-this.baseZ)>24&&this.constructNear("storehouse",a.wx,a.wz)}e.age>=2&&(this.myBuildings("archeryrange").length===0&&this.construct("archeryrange"),this.myBuildings("tower").length<2&&e.res.wood>200&&this.construct("tower"),this.myBuildings("blacksmith").length===0&&e.res.wood>180&&this.construct("blacksmith")),e.age>=3&&this.myBuildings("stable").length===0&&this.construct("stable"),e.age>=3&&this.myBuildings("market").length===0&&e.res.wood>220&&this.construct("market"),e.age>=4&&this.myBuildings("siegeworkshop").length===0&&this.construct("siegeworkshop");const i=this.myBuildings("blacksmith").find(a=>a.complete&&!a.researching);if(i){for(const[a,c]of Object.entries(Wi))if(!(e.age<c.age||e.techs.includes(a))&&!this.myBuildings("blacksmith").some(l=>l.researching?.tech===a)&&xn(e.res,c.cost)&&e.res.food>(c.cost.food||0)+120){i.startTech(a);break}}if(this.myBuildings("market").find(a=>a.complete)&&e.res.gold<60&&(e.res.wood>500?this.game.trade(this.me,"wood","sell"):e.res.food>800&&this.game.trade(this.me,"food","sell")),!e.ageResearchInProgress&&e.age<qt.length&&e.age<this.d.maxAge){const a=qt[e.age];if(t.length>=this.villTarget(e.age)-2&&xn(e.res,a.cost)&&n.complete){const l=e.age===1?60:120;e.res.food>=(a.cost.food||0)+l*.5&&n.startAgeResearch()}}if(this.army().length<this.armyCap(e.age)){const a=this.game.buildings.filter(h=>h.owner===de&&!h.dead&&(h.type==="tower"||h.def.isWall)).length,c=this.myBuildings().filter(h=>h.complete&&h.def.trains&&h.type!=="towncenter");a>=4&&c.sort((h,u)=>(u.type==="siegeworkshop"?1:0)-(h.type==="siegeworkshop"?1:0));const l=this.game.units.filter(h=>h.owner===de&&!h.dead&&h.def.cavalry).length;for(const h of c)if(!(h.trainQueue.length>=2)){h.type==="barracks"&&l>=3&&e.age>=_n.spearman.age&&h.queueTrain("spearman");for(const u of h.def.trains)e.age>=_n[u].age&&h.queueTrain(u)}}}tryAttack(){const e=this.army(),t=this.attackThreshold(this.p().age);e.length>=t?(this.attacking=!0,this.attackTargetT=0,this.wave=e.map(n=>n.id),this.waveSize0=this.wave.length,this.waveT=(100+this.game.rand()*40)*this.d.waveMul,this.retarget()):this.waveT=25*this.d.waveMul}waveUnits(){return this.wave?this.game.units.filter(e=>!e.dead&&this.wave.includes(e.id)):[]}retarget(){const e=this.pickPlayerTarget();if(!e){this.attacking=!1,this.wave=null;return}const t=this.waveUnits();if(t.length<Math.max(2,this.waveSize0*.35)){for(const n of t)n.orderMove(this.baseX,this.baseZ);this.attacking=!1,this.wave=null;return}for(const n of t)n.state==="fighting"||n.state==="toAttack"||n.orderAttackMove(e.isBuilding?e.cx:e.x,e.isBuilding?e.cz:e.z)}pickPlayerTarget(){const e=this.game.buildings.filter(n=>n.owner===de&&!n.dead);return e.length?e.find(n=>n.def.trains&&n.type!=="towncenter")||e.find(n=>n.type==="towncenter")||e.find(n=>!n.def.isWall)||e[0]:null}onDamage(e,t){if(e.owner!==this.me||!t||t.dead||t.owner===this.me||this.defendT>0)return;this.defendT=4;const n=t.isBuilding?t.cx:t.x,i=t.isBuilding?t.cz:t.z,s=this.wave||[];for(const o of this.army()){if(s.includes(o.id))continue;o.state==="fighting"||o.state==="toAttack"||o.orderAttackMove(n,i)}}onBuildingLost(){}construct(e,t=null){return this.constructNear(e,this.baseX,this.baseZ,t)}constructNear(e,t,n,i=null){const s=this.game,o=Bs[e],a=this.p();if(a.age<o.age||!xn(a.res,o.cost)||!["house","farm","tower"].includes(e)&&this.myBuildings(e).some(u=>!u.complete))return!1;const c=this.findSpot(t,n,o.size);if(!c)return!1;const l=s.placeBuilding(this.me,e,c[0],c[1]);if(!l)return!1;const h=i||this.nearestFreeVillager(l.cx,l.cz);if(h&&h.orderBuild(l),!h){const u=this.myUnits("villager")[0];u&&u.orderBuild(l)}return!0}nearestFreeVillager(e,t){let n=null,i=1/0;for(const s of this.myUnits("villager")){if(s.state==="building"||s.state==="toBuild")continue;const o=Math.hypot(s.x-e,s.z-t);o<i&&(i=o,n=s)}return n}findSpot(e,t,n){const i=this.game.map,[s,o]=i.worldToGrid(e,t);for(let a=3;a<26;a+=1)for(let c=0;c<16;c++){const l=c/16*Math.PI*2+a*.37,h=Math.round(s+Math.cos(l)*a)-Math.floor(n/2),u=Math.round(o+Math.sin(l)*a)-Math.floor(n/2);if(i.canPlace(h-1,u-1,n+2))return[h,u]}return null}}const Dy={villager:7,militia:8,archer:9,knight:9,catapult:9},Ny={towncenter:11,tower:13};class Uy{constructor(e){this.map=e,this.size=e.size,this.state=new Uint8Array(this.size*this.size),this.enabled=!0,this.revealed=!1,this.dirty=!0,this.version=0,this.updateT=0,this._circles=new Map}circle(e){let t=this._circles.get(e);if(!t){const n=[];for(let i=-e;i<=e;i++)for(let s=-e;s<=e;s++)s*s+i*i<=e*e&&n.push(s,i);t=Int16Array.from(n),this._circles.set(e,t)}return t}stamp(e,t,n){const i=this.circle(n),s=this.size,o=this.state;for(let a=0;a<i.length;a+=2){const c=e+i[a],l=t+i[a+1];c>=0&&l>=0&&c<s&&l<s&&(o[l*s+c]=2)}}update(e,t){!this.enabled||this.revealed||(this.updateT-=t,!(this.updateT>0)&&(this.updateT=.25,this.recompute(e)))}recompute(e){const t=this.state;for(let i=0;i<t.length;i++)t[i]===2&&(t[i]=1);const n=this.map;for(const i of e.units){if(i.dead||i.owner!==de||i.garrisoned)continue;const[s,o]=n.worldToGrid(i.x,i.z);this.stamp(s,o,Dy[i.type]??8)}for(const i of e.buildings){if(i.dead||i.owner!==de)continue;const s=i.complete?Ny[i.type]??5+i.size:4;this.stamp(i.gx+(i.size>>1),i.gy+(i.size>>1),s)}this.dirty=!0,this.version++}stateAt(e,t){return!this.enabled||this.revealed?2:e<0||t<0||e>=this.size||t>=this.size?0:this.state[t*this.size+e]}stateAtWorld(e,t){const[n,i]=this.map.worldToGrid(e,t);return this.stateAt(n,i)}visibleWorld(e,t){return this.stateAtWorld(e,t)===2}exploredWorld(e,t){return this.stateAtWorld(e,t)>=1}revealAll(){this.revealed=!0,this.state.fill(2),this.dirty=!0,this.version++}}class Fy{constructor(e,t,n){this.fog=n;const i=n.size;this.small=document.createElement("canvas"),this.small.width=this.small.height=i,this.smallCtx=this.small.getContext("2d"),this.img=this.smallCtx.createImageData(i,i),this.big=document.createElement("canvas"),this.big.width=this.big.height=i*3,this.bigCtx=this.big.getContext("2d"),this.tex=new yi(this.big),this.tex.minFilter=Ht,this.tex.magFilter=Ht;const s=new In(Ie,Ie,i,i);s.rotateX(-Math.PI/2);const o=s.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a)+Ie/2,l=o.getZ(a)+Ie/2;o.setX(a,c),o.setZ(a,l),o.setY(a,Math.max(t.heightAt(c,l),tn)+.9)}this.mesh=new ze(s,new Pt({color:461328,transparent:!0,alphaMap:this.tex,depthWrite:!1})),this.mesh.renderOrder=5,this.mesh.frustumCulled=!1,this.mesh.name="fog-shroud",e.add(this.mesh),this.refresh()}refresh(){const e=this.fog.state,t=this.fog.revealed||!this.fog.enabled,n=this.img.data;for(let i=0;i<e.length;i++){const s=t||e[i]===2?0:e[i]===1?112:255;n[i*4+1]=s,n[i*4+3]=255}this.smallCtx.putImageData(this.img,0,0),this.bigCtx.filter="blur(2px)",this.bigCtx.drawImage(this.small,0,0,this.big.width,this.big.height),this.tex.needsUpdate=!0}}class By{constructor(e,t){this.camera=e,this.map=t,this.target=new E(Ie/2,0,Ie/2),this.smoothTarget=this.target.clone(),this.dist=46,this.smoothDist=60,this.minDist=18,this.maxDist=95,this.pitch=.92,this.yaw=0,this.keys=new Set,this.mouseX=.5,this.mouseY=.5,this.edgePanEnabled=!0,window.addEventListener("keydown",n=>{n.target.tagName!=="INPUT"&&(document.querySelector(".overlay:not(.hidden)")||this.keys.add(n.code))}),window.addEventListener("keyup",n=>this.keys.delete(n.code)),window.addEventListener("blur",()=>this.keys.clear()),this.pointerIn=!1,this.overUI=!1,window.addEventListener("mousemove",n=>{this.mouseX=n.clientX/window.innerWidth,this.mouseY=n.clientY/window.innerHeight,this.pointerIn=!0,this.overUI=!(n.target&&n.target.id==="game-canvas")}),document.documentElement.addEventListener("mouseleave",()=>{this.pointerIn=!1})}jumpTo(e,t){this.target.x=e,this.target.z=t}panBy(e,t){this.target.x+=e,this.target.z+=t}zoomBy(e,t){const n=this.dist;this.dist=_r.clamp(this.dist*(e>0?1.13:.885),this.minDist,this.maxDist),e<0&&t&&this.dist<n&&this.target.lerp(new E(t.x,0,t.z),.18)}update(e){const t=(14+this.dist*.55)*e;let n=0,i=0;if((this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(i-=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(i+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(n-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(n+=1),this.edgePanEnabled&&document.hasFocus()&&this.pointerIn&&!this.overUI&&(this.mouseX<.008&&(n-=1),this.mouseX>1-.008&&(n+=1),this.mouseY<.008&&(i-=1),this.mouseY>1-.008&&(i+=1)),n||i){const l=Math.hypot(n,i);this.target.x+=n/l*t,this.target.z+=i/l*t}const s=6;this.target.x=_r.clamp(this.target.x,s,Ie-s),this.target.z=_r.clamp(this.target.z,s,Ie-s),this.target.y=this.map.heightAt(this.target.x,this.target.z),this.smoothTarget.lerp(this.target,Math.min(1,e*9)),this.smoothDist+=(this.dist-this.smoothDist)*Math.min(1,e*7);const o=this.camera,a=Math.cos(this.pitch)*this.smoothDist,c=Math.sin(this.pitch)*this.smoothDist;o.position.set(this.smoothTarget.x+Math.sin(this.yaw)*a,this.smoothTarget.y+c,this.smoothTarget.z+Math.cos(this.yaw)*a),o.lookAt(this.smoothTarget)}}let lt=null,gi=null,ki=!1;const ru=new Map;function Oy(){if(lt){lt.state==="suspended"&&lt.resume();return}try{lt=new(window.AudioContext||window.webkitAudioContext),gi=lt.createGain(),gi.gain.value=.22,gi.connect(lt.destination),lt.state==="suspended"&&lt.resume();const r=()=>{lt&&lt.state==="suspended"&&lt.resume()};document.addEventListener("pointerdown",r),document.addEventListener("touchend",r),document.addEventListener("visibilitychange",()=>{document.hidden||r()})}catch{}}function ky(){return ki=!ki,gi&&(gi.gain.value=ki?0:.22),ki}function Td(){return lt?{ctx:lt,master:gi}:null}function zy(r,e,t,n,i=1){r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(i,e+t),r.gain.exponentialRampToValueAtTime(.001,e+t+n)}function Rt(r,e,t="square",n=.5,i=0){if(!lt||ki)return;const s=lt.currentTime,o=lt.createOscillator(),a=lt.createGain();o.type=t,o.frequency.setValueAtTime(r,s),i&&o.frequency.exponentialRampToValueAtTime(Math.max(30,r+i),s+e),zy(a,s,.005,e,n),o.connect(a).connect(gi),o.start(s),o.stop(s+e+.05)}function Di(r,e=.4,t=1200){if(!lt||ki)return;const n=lt.currentTime,i=Math.ceil(lt.sampleRate*r),s=lt.createBuffer(1,i,lt.sampleRate),o=s.getChannelData(0);for(let h=0;h<i;h++)o[h]=(Math.random()*2-1)*(1-h/i);const a=lt.createBufferSource();a.buffer=s;const c=lt.createBiquadFilter();c.type="lowpass",c.frequency.value=t;const l=lt.createGain();l.gain.value=e,a.connect(c).connect(l).connect(gi),a.start(n)}const Hy={select:()=>Rt(620,.06,"sine",.3),command:()=>{Rt(440,.05,"sine",.3),setTimeout(()=>Rt(560,.05,"sine",.25),45)},place:()=>Rt(330,.1,"triangle",.4),error:()=>Rt(160,.18,"sawtooth",.25,-40),chop:()=>Di(.08,.3,900),hammer:()=>{Di(.05,.25,2500),Rt(190,.05,"square",.12)},treefall:()=>Di(.4,.3,500),melee:()=>{Di(.07,.3,3500),Rt(900+Math.random()*300,.05,"square",.1,-300)},arrow:()=>Di(.12,.18,4500),catapult:()=>{Rt(90,.3,"sawtooth",.3,-30),Di(.25,.3,700)},die:()=>Rt(220,.25,"sawtooth",.18,-120),collapse:()=>{Di(.7,.5,400),Rt(70,.5,"sawtooth",.25,-30)},horn:()=>{Rt(196,.55,"sawtooth",.3),setTimeout(()=>Rt(196*1.25,.5,"sawtooth",.28),240)},ageup:()=>[262,330,392,523].forEach((r,e)=>setTimeout(()=>Rt(r,.3,"triangle",.32),e*130)),built:()=>{Rt(392,.1,"triangle",.3),setTimeout(()=>Rt(523,.15,"triangle",.3),90)},ready:()=>Rt(523,.09,"sine",.25),victory:()=>[262,330,392,523,659,784].forEach((r,e)=>setTimeout(()=>Rt(r,e<5?.28:.9,"triangle",.34),e*150)),defeat:()=>[392,370,311,262,196].forEach((r,e)=>setTimeout(()=>Rt(r,e<4?.42:1.2,"sawtooth",.2),e*320))};function Hc(r){if(!lt||ki)return;const e=Hy[r];if(!e)return;const t=performance.now(),n=ru.get(r)||0,i=r==="chop"||r==="hammer"||r==="melee"?90:140;t-n<i||(ru.set(r,t),e())}const ou=[[730,1090],[530,1840],[390,1990],[570,840],[440,1020]];let au=0;function Gy(r,e,t,n,i,s,o,a){const c=Math.floor(r.sampleRate*.025),l=r.createBuffer(1,c,r.sampleRate),h=l.getChannelData(0);for(let S=0;S<c;S++)h[S]=(Math.random()*2-1)*(1-S/c);const u=r.createBufferSource();u.buffer=l;const d=r.createBiquadFilter();d.type="bandpass",d.frequency.value=1200+Math.random()*1800;const f=r.createGain();f.gain.value=o*.5,u.connect(d).connect(f).connect(e),u.start(t-.02);const g=r.createOscillator();g.type="sawtooth",g.frequency.setValueAtTime(n*(.96+Math.random()*.08),t),g.frequency.linearRampToValueAtTime(n,t+s);const _=r.createOscillator();_.frequency.value=11+Math.random()*6;const m=r.createGain();m.gain.value=n*(a?.05:.02),_.connect(m).connect(g.frequency);const[p,v]=i,x=r.createGain();x.gain.value=0;for(const[S,C,A]of[[p,9,1],[v,11,.55],[2600,13,.18]]){const T=r.createBiquadFilter();T.type="bandpass",T.frequency.value=S*(.95+Math.random()*.1),T.Q.value=C;const P=r.createGain();P.gain.value=A,g.connect(T).connect(P).connect(x)}x.gain.setValueAtTime(0,t),x.gain.linearRampToValueAtTime(o,t+.03),x.gain.setValueAtTime(o,t+s-.045),x.gain.linearRampToValueAtTime(0,t+s),x.connect(e),g.start(t-.02),g.stop(t+s+.03),_.start(t-.02),_.stop(t+s+.03)}function fr(r){const e=Td();if(!e)return;const{ctx:t,master:n}=e,i=performance.now();if(i<au)return;const s=r[0]==="m",o=r.endsWith("Select"),a=s?96+Math.random()*14:126+Math.random()*22,c=2+(Math.random()*2|0)+(o&&!s?1:0),l=t.createGain();l.gain.value=s?1.5:1.3;const h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=s?2400:3200,l.connect(h).connect(n);let u=t.currentTime+.01;for(let d=0;d<c;d++){const f=d/Math.max(1,c-1),g=o?1+(f>.6?(f-.6)*.55:0):1.08-f*.18,_=.09+Math.random()*.08+(d===c-1?.06:0),m=.5+Math.random()*.2-f*(o?0:.12);Gy(t,l,u,a*g,ou[Math.random()*ou.length|0],_,m,s),u+=_+.015+Math.random()*.025}au=i+(u-t.currentTime)*1e3+120}class Vy{constructor({canvas:e,game:t,rtsCam:n,camera:i,terrainMesh:s,onSelectionChange:o,sound:a}){this.canvas=e,this.game=t,this.rtsCam=n,this.camera=i,this.terrain=s,this.onSelectionChange=o,this.sound=a,this.selection=[],this.groups=new Map,this.raycaster=new ad,this.mouseNDC=new ue,this.dragStart=null,this.dragging=!1,this.placing=null,this.idleVillIdx=0,this.boxEl=document.createElement("div"),this.boxEl.style.cssText="position:fixed;border:1.5px solid #7df58b;background:rgba(110,245,140,.12);pointer-events:none;display:none;z-index:20;",document.body.appendChild(this.boxEl),e.addEventListener("mousedown",c=>this.onMouseDown(c)),window.addEventListener("mousemove",c=>this.onMouseMove(c)),window.addEventListener("mouseup",c=>this.onMouseUp(c)),e.addEventListener("dblclick",c=>this.onDblClick(c)),e.addEventListener("contextmenu",c=>c.preventDefault()),e.addEventListener("wheel",c=>{c.preventDefault();const l=this.groundPoint(c.clientX,c.clientY);this.rtsCam.zoomBy(c.deltaY,l)},{passive:!1}),window.addEventListener("keydown",c=>this.onKeyDown(c)),this.setupTouch()}setupTouch(){const e="ontouchstart"in window||navigator.maxTouchPoints>0;this.boxArmed=!1,this.touch=null,this.pinch=null;const t=this.canvas,n=12,i=400;t.addEventListener("touchstart",o=>{if(o.preventDefault(),o.touches.length===1){const a=o.touches[0];this.touch={x0:a.clientX,y0:a.clientY,x:a.clientX,y:a.clientY,t0:performance.now(),moved:!1},this.placing&&this.updateGhost(a.clientX,a.clientY),this.boxArmed&&(this.dragStart={x:a.clientX,y:a.clientY,shift:!1},this.dragging=!1)}else if(o.touches.length===2){this.touch=null,this.dragStart=null,this.dragging=!1,this.boxEl.style.display="none",this.placing&&this.cancelPlacement();const[a,c]=o.touches;this.pinch={d:Math.hypot(a.clientX-c.clientX,a.clientY-c.clientY),mx:(a.clientX+c.clientX)/2,my:(a.clientY+c.clientY)/2}}},{passive:!1}),window.addEventListener("touchmove",o=>{if(this.pinch&&o.touches.length>=2){o.preventDefault();const[a,c]=o.touches,l=Math.hypot(a.clientX-c.clientX,a.clientY-c.clientY),h=(a.clientX+c.clientX)/2,u=(a.clientY+c.clientY)/2;if(this.pinch.d>0){const d=this.pinch.d/l;this.rtsCam.dist=_r.clamp(this.rtsCam.dist*d,this.rtsCam.minDist,this.rtsCam.maxDist)}this.panScreen(this.pinch.mx,this.pinch.my,h,u),this.pinch={d:l,mx:h,my:u};return}if(this.touch&&o.touches.length===1){o.preventDefault();const a=o.touches[0],c=this.touch.x,l=this.touch.y;if(this.touch.x=a.clientX,this.touch.y=a.clientY,Math.hypot(a.clientX-this.touch.x0,a.clientY-this.touch.y0)>n&&(this.touch.moved=!0),this.placing){this.updateGhost(a.clientX,a.clientY);return}if(this.boxArmed&&this.dragStart){this.dragging=!0;const h=Math.min(a.clientX,this.dragStart.x),u=Math.min(a.clientY,this.dragStart.y);this.boxEl.style.display="block",this.boxEl.style.left=h+"px",this.boxEl.style.top=u+"px",this.boxEl.style.width=Math.abs(a.clientX-this.dragStart.x)+"px",this.boxEl.style.height=Math.abs(a.clientY-this.dragStart.y)+"px";return}this.touch.moved&&this.panScreen(c,l,a.clientX,a.clientY)}},{passive:!1}),window.addEventListener("touchend",o=>{if(this.pinch&&o.touches.length<2&&(this.pinch=null),!this.touch)return;const a=this.touch,c=!a.moved&&performance.now()-a.t0<i;o.touches.length===0&&(this.placing?this.tryPlace(!1):this.boxArmed?(this.dragging&&this.boxSelect(this.dragStart,{x:a.x,y:a.y},!1),this.setBoxArmed(!1)):c&&this.handleTap(a.x0,a.y0),this.dragStart=null,this.dragging=!1,this.boxEl.style.display="none",this.touch=null)},{passive:!1});const s=document.getElementById("touch-box-btn");s&&(e&&s.classList.remove("hidden"),s.addEventListener("click",()=>this.setBoxArmed(!this.boxArmed))),e&&document.body.classList.add("is-touch")}setBoxArmed(e){this.boxArmed=e;const t=document.getElementById("touch-box-btn");t&&t.classList.toggle("armed",e)}panScreen(e,t,n,i){const s=this.screenToPlane(e,t),o=this.screenToPlane(n,i);s&&o&&this.rtsCam.panBy(s.x-o.x,s.z-o.z)}screenToPlane(e,t){this.setRayFrom(e,t);const n=this.raycaster.ray,i=this.rtsCam.smoothTarget.y;if(Math.abs(n.direction.y)<1e-5)return null;const s=(i-n.origin.y)/n.direction.y;return s<=0?null:new E().copy(n.direction).multiplyScalar(s).add(n.origin)}handleTap(e,t){if(this.attackMoveArmed){this.fireAttackMove(e,t);return}const n=this.pick(e,t)||{},i=n.entity||null,s=this.selection.filter(l=>!l.dead&&l.owner===de),o=s.filter(l=>l.isUnit),a=s.filter(l=>l.isBuilding);if(o.length){const l=i&&i.owner!==de?i:this.unitNearScreen(e,t,34,"foe");if(l)return this.dispatchContext({entity:l});if(n.node)return this.dispatchContext(n);if(i?.isBuilding&&i.owner===de){const u=o.some(f=>f.type==="villager"&&f.carry?.amt>0),d=o.some(f=>f.type==="villager");if(!i.complete||i.def.isFarm||i.def.dropoff&&u||d&&i.hp<i.maxHp-.5)return this.dispatchContext({entity:i});this.select([i]),this.selectFeedback([i]);return}const h=i?.isUnit&&i.owner===de?i:this.unitNearScreen(e,t,30,de);if(h){this.select([h]),this.selectFeedback([h]);return}if(n.point)return this.dispatchContext(n);this.select([]);return}if(a.length){if(i&&i.owner===de){this.select([i]),this.selectFeedback([i]);return}if(n.node||n.point)return this.dispatchContext(n);if(i){this.select([i]),this.onSelectionChange(this.selection);return}this.select([]);return}const c=i&&i.owner===de?i:this.unitNearScreen(e,t,34,de);if(c){this.select([c]),this.selectFeedback([c]);return}if(i){this.select([i]),this.onSelectionChange(this.selection);return}this.select([])}setRayFrom(e,t){this.mouseNDC.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),this.raycaster.setFromCamera(this.mouseNDC,this.camera)}groundPoint(e,t){this.setRayFrom(e,t);const n=this.raycaster.intersectObject(this.terrain,!1);return n.length?n[0].point:null}pick(e,t){this.setRayFrom(e,t);const n=this.game,i=[];for(const h of n.units)h.group.visible&&i.push(h.group);for(const h of n.buildings)h.group.visible&&i.push(h.group);for(const h of n.nodes)h.mesh&&h.mesh.visible&&i.push(h.mesh);const s=this.raycaster.intersectObjects(i,!0),o=this.raycaster.intersectObjects(n.trees.pickMeshes,!1),a=this.raycaster.intersectObject(this.terrain,!1);let c=null,l=1/0;if(s.length&&s[0].distance<l){l=s[0].distance;let h=s[0].object;for(;h&&!h.userData.entity&&!h.userData.node;)h=h.parent;h?.userData.entity?c={entity:h.userData.entity}:h?.userData.node?c={node:h.userData.node}:c=null}if(o.length&&o[0].distance<l){const h=n.treeNodeByInstance.get(o[0].instanceId);h&&!h.dead&&(c={node:h},l=o[0].distance)}return!c&&a.length?{point:a[0].point}:c&&a.length&&a[0].distance<l-.5?{point:a[0].point}:c||null}select(e,t=!1){if(!t){for(const n of this.selection)n.setSelected(!1);this.selection=[]}for(const n of e)!this.selection.includes(n)&&!n.dead&&(this.selection.push(n),n.setSelected(!0));this.pruneSelection(),this.onSelectionChange(this.selection)}pruneSelection(){this.selection=this.selection.filter(e=>!e.dead)}selectedUnits(e=!0){return this.pruneSelection(),this.selection.filter(t=>t.isUnit&&(!e||t.owner===de))}onMouseDown(e){if(e.button===0){if(this.placing){if(this.placing.def.isWall){this.placing.lineStart={gx:this.placing.gx,gy:this.placing.gy};return}this.tryPlace(e.shiftKey);return}if(this.attackMoveArmed){this.fireAttackMove(e.clientX,e.clientY);return}this.dragStart={x:e.clientX,y:e.clientY,shift:e.shiftKey},this.dragging=!1}else if(e.button===2){if(this.placing){this.cancelPlacement();return}if(this.attackMoveArmed){this.disarmAttackMove();return}this.issueContextCommand(e.clientX,e.clientY,e.shiftKey)}}armAttackMove(){this.selectedUnits().some(e=>e.type!=="villager")&&(this.attackMoveArmed=!0,this.canvas.style.cursor="crosshair")}disarmAttackMove(){this.attackMoveArmed=!1,this.canvas.style.cursor="default"}fireAttackMove(e,t){this.disarmAttackMove();const n=this.pick(e,t),i=this.selectedUnits().filter(o=>o.type!=="villager");if(!i.length||!n)return;const s=i.map(o=>o.id);if(n.entity&&n.entity.owner!==de)this.game.exec({k:"attack",ids:s,t:n.entity.id});else{const o=n.point||(n.node?{x:n.node.wx,z:n.node.wz}:null);if(!o)return;this.game.exec({k:"attackmove",ids:s,x:o.x,z:o.z})}this.ackFeedback(i)}onDblClick(e){const n=this.pick(e.clientX,e.clientY)?.entity;if(!n?.isUnit||n.owner!==de)return;const i=new E,s=this.game.units.filter(o=>o.owner!==de||o.dead||o.type!==n.type||o.garrisoned?!1:(i.set(o.x,o.group.position.y+.8,o.z).project(this.camera),i.z<1&&Math.abs(i.x)<=1&&Math.abs(i.y)<=1));s.length&&(this.select(s),this.selectFeedback(s))}cycleIdleVillager(){const e=this.game.units.filter(n=>n.owner===de&&n.type==="villager"&&!n.dead&&n.state==="idle"&&!n.garrisoned);if(!e.length)return;this.idleVillIdx=(this.idleVillIdx+1)%e.length;const t=e[this.idleVillIdx];this.select([t]),this.rtsCam.jumpTo(t.x,t.z)}onMouseMove(e){this.placing&&(this.updateGhost(e.clientX,e.clientY),this.placing.lineStart&&this.updateWallLine()),this.hoverT=this.hoverT||0;const t=performance.now();if(!this.placing&&!this.attackMoveArmed&&t-this.hoverT>130)if(this.hoverT=t,this.selectedUnits().some(n=>n.type!=="villager")){const n=this.pick(e.clientX,e.clientY);this.canvas.style.cursor=n?.entity&&n.entity.owner!==de?"pointer":"default"}else this.canvas.style.cursor==="pointer"&&(this.canvas.style.cursor="default");if(this.dragStart){const n=e.clientX-this.dragStart.x,i=e.clientY-this.dragStart.y;if(!this.dragging&&Math.hypot(n,i)>6&&(this.dragging=!0),this.dragging){const s=Math.min(e.clientX,this.dragStart.x),o=Math.min(e.clientY,this.dragStart.y);this.boxEl.style.display="block",this.boxEl.style.left=s+"px",this.boxEl.style.top=o+"px",this.boxEl.style.width=Math.abs(n)+"px",this.boxEl.style.height=Math.abs(i)+"px"}}}wallLineTiles(){const e=this.placing;if(!e?.lineStart)return[];const t=[];let{gx:n,gy:i}=e.lineStart;const s=e.gx,o=e.gy,a=Math.abs(s-n),c=Math.abs(o-i),l=n<s?1:-1,h=i<o?1:-1;let u=a-c,d=n,f=i;for(let g=0;g<40&&(t.push([d,f]),!(d===s&&f===o));g++){const _=2*u;_>-c&&(u-=c,d+=l),_<a&&(u+=a,f+=h)}return t}updateWallLine(){if(!this.linePreview){this.linePreview=[];const t=new In(1.8,1.8);t.rotateX(-Math.PI/2);for(let n=0;n<40;n++){const i=new ze(t,new Pt({color:5111646,transparent:!0,opacity:.45,depthWrite:!1}));i.visible=!1,i.renderOrder=3,this.game.scene.add(i),this.linePreview.push(i)}}const e=this.wallLineTiles();for(let t=0;t<this.linePreview.length;t++){const n=this.linePreview[t];if(t<e.length){const[i,s]=e[t],[o,a]=this.game.map.gridToWorld(i,s);n.visible=!0,n.position.set(o,this.game.map.heightAt(o,a)+.1,a),n.material.color.setHex(this.game.canPlaceBuilding(i,s,1)?5111646:16728112)}else n.visible=!1}}hideWallLine(){if(this.linePreview)for(const e of this.linePreview)e.visible=!1}onMouseUp(e){if(e.button===0&&this.placing?.lineStart){const o=this.wallLineTiles(),a=this.selectedUnits().filter(l=>l.type==="villager");this.game.exec({k:"placeline",t:this.placing.type,o:de,tiles:o,ids:a.map(l=>l.id)})?this.sound("place"):this.sound("error"),this.placing.lineStart=null,this.hideWallLine(),e.shiftKey||this.cancelPlacement();return}if(e.button!==0||!this.dragStart)return;const t=this.dragStart;if(this.dragStart=null,this.boxEl.style.display="none",this.dragging){this.dragging=!1,this.boxSelect(t,{x:e.clientX,y:e.clientY},t.shift);return}let i=this.pick(e.clientX,e.clientY)?.entity||null;const s=this.unitNearScreen(e.clientX,e.clientY,30);s&&(!i||i.isBuilding)&&(i=s),i?(this.select([i],t.shift),this.selectFeedback([i])):t.shift||this.select([])}unitNearScreen(e,t,n,i=null){const s=new E;let o=null,a=n*n;for(const c of this.game.units){if(c.dead||!c.group.visible||(i==="foe"?c.owner===de:i!==null&&c.owner!==i)||(s.set(c.x,c.group.position.y+.9,c.z).project(this.camera),s.z>=1))continue;const l=(s.x+1)/2*window.innerWidth,h=(1-s.y)/2*window.innerHeight,u=(l-e)**2+(h-t)**2;u<a&&(a=u,o=c)}return o}boxSelect(e,t,n){const i=Math.min(e.x,t.x),s=Math.max(e.x,t.x),o=Math.min(e.y,t.y),a=Math.max(e.y,t.y),c=new E,l=[];for(const h of this.game.units){if(h.owner!==de||h.dead)continue;c.set(h.x,h.group.position.y+.8,h.z).project(this.camera);const u=(c.x+1)/2*window.innerWidth,d=(1-c.y)/2*window.innerHeight;u>=i&&u<=s&&d>=o&&d<=a&&c.z<1&&l.push(h)}if(l.length){const h=l.filter(u=>u.type!=="villager");this.select(h.length?h:l,n),this.selectFeedback(this.selection)}else n||this.select([])}selectFeedback(e){const t=e.filter(n=>n.owner===de);t.some(n=>n.isUnit&&n.type!=="villager")?fr("mSelect"):t.some(n=>n.isUnit)?fr("vSelect"):this.sound("select")}ackFeedback(e){e.some(t=>t.type!=="villager")?fr("mAck"):e.length?fr("vAck"):this.sound("command")}issueContextCommand(e,t,n=!1){let i=this.pick(e,t);if(i||(i={}),!i.entity&&!i.node){const s=this.unitNearScreen(e,t,22,"foe");s&&(i={entity:s})}this.dispatchContext(i,n)}dispatchContext(e,t=!1){const n=this.selection.filter(c=>!c.dead&&c.owner===de);if(!n.length||!e||!e.entity&&!e.node&&!e.point)return;const i=n.filter(c=>c.isUnit),s=n.filter(c=>c.isBuilding),o=this.game,a=i.map(c=>c.id);if(!i.length&&s.length){const c=s.map(l=>l.id);e.node?o.exec({k:"rally",bs:c,n:e.node.id}):e.entity?.isBuilding&&e.entity.def.isFarm&&e.entity.owner===de?o.exec({k:"rally",bs:c,f:e.entity.id}):e.point&&o.exec({k:"rally",bs:c,x:e.point.x,z:e.point.z}),this.sound("command");return}if(i.length){if(e.entity){const c=e.entity;c.owner!==de?(o.exec({k:"attack",ids:a,t:c.id,shift:t}),this.ackFeedback(i)):c.isBuilding&&(!c.complete||c.hp<c.maxHp-.5)&&!c.def.isFarm?(o.exec({k:"build",ids:a,b:c.id,shift:t}),this.ackFeedback(i.filter(l=>l.type==="villager"))):c.isBuilding&&c.def.isFarm?(o.exec({k:"farm",ids:a,f:c.id,shift:t}),this.ackFeedback(i.filter(l=>l.type==="villager"))):c.isBuilding&&c.def.dropoff?(o.exec({k:"deposit",ids:a,b:c.id,shift:t}),this.ackFeedback(i)):(o.exec({k:"move",ids:a,x:c.isBuilding?c.cx:c.x,z:c.isBuilding?c.cz:c.z,shift:t}),this.ackFeedback(i));return}if(e.node){o.exec({k:"gather",ids:a,n:e.node.id,shift:t}),this.ackFeedback(i);return}e.point&&(o.exec({k:"move",ids:a,x:e.point.x,z:e.point.z,shift:t}),this.ackFeedback(i))}}startPlacement(e){this.cancelPlacement();const t=Bs[e],n=new An({color:5111646,transparent:!0,opacity:.55,depthWrite:!1}),i=bd(e,this.game.players[de].age,t.size)||md[e](this.game.teamColor(de));i.traverse(s=>{s.isMesh&&(s.material=n,s.castShadow=!1)}),this.game.scene.add(i),this.placing={type:e,def:t,ghost:i,ghostMat:n,valid:!1,gx:0,gy:0}}updateGhost(e,t){const n=this.placing,i=this.groundPoint(e,t);if(!i){n.ghost.visible=!1;return}const s=this.game.map,o=Math.round(i.x/ke-n.def.size/2),a=Math.round(i.z/ke-n.def.size/2);n.gx=o,n.gy=a;const c=(o+n.def.size/2)*ke,l=(a+n.def.size/2)*ke;n.ghost.visible=!0,n.ghost.position.set(c,s.heightAt(c,l),l),n.valid=this.game.canPlaceBuilding(o,a,n.def.size),n.ghostMat.color.setHex(n.valid?5111646:16728112)}tryPlace(e){const t=this.placing;if(!t||!t.valid){this.sound("error");return}const n=this.selectedUnits().filter(s=>s.type==="villager");if(!this.game.exec({k:"place",t:t.type,o:de,gx:t.gx,gy:t.gy,ids:n.map(s=>s.id)})){this.sound("error");return}this.sound("place"),e?(t.valid=!1,t.ghost.visible=!1):this.cancelPlacement()}cancelPlacement(){this.placing&&(this.game.scene.remove(this.placing.ghost),this.placing=null,this.hideWallLine())}onKeyDown(e){if(!document.querySelector(".overlay:not(.hidden)")){if(e.code==="Escape"){this.placing?this.cancelPlacement():this.attackMoveArmed?this.disarmAttackMove():this.select([]);return}if(e.code==="KeyA"&&!e.ctrlKey&&!e.metaKey){this.armAttackMove();return}if(e.code==="KeyM"){const t=this.game.units.filter(n=>n.owner===de&&!n.dead&&n.type!=="villager"&&!n.garrisoned);t.length&&(this.select(t),this.selectFeedback(t));return}if(e.code.startsWith("Digit")){const t=e.code.slice(5);if(t==="0")return;if(e.shiftKey||e.ctrlKey||e.metaKey)e.preventDefault(),this.groups.set(t,[...this.selection]),this.sound("command");else{const n=(this.groups.get(t)||[]).filter(i=>!i.dead);if(n.length){this.select(n);const i=performance.now(),s=this.lastRecall?.d===t&&i-this.lastRecall.t<450;this.lastRecall={d:t,t:i};const o=n[0];(s||e.repeat)&&this.rtsCam.jumpTo(o.isBuilding?o.cx:o.x,o.isBuilding?o.cz:o.z)}}return}if(e.code==="KeyH"){const t=this.game.buildings.find(n=>n.owner===de&&n.type==="towncenter"&&!n.dead);t&&(this.rtsCam.jumpTo(t.cx,t.cz),this.select([t]));return}if(e.code==="Period"){this.cycleIdleVillager();return}e.code==="KeyT"&&this.game.exec({k:"stop",ids:this.selectedUnits().map(t=>t.id)})}}}let ot=null,Yt=null,zi=null,Tr=!1,Ad=null,pr=0,Ed=0;const Wy=[0,2,3,5,7,9,10],Xy=50,qy=[0,2,6,3,0,4,6,0],Yy=[0,5,0,4,0,5,3,0];let ar=0,ms=0,Ni=7;const Rd=r=>440*Math.pow(2,(r-69)/12),xo=(r,e=0)=>Xy+12*(e+Math.floor(r/7))+Wy[(r%7+7)%7],cu=new Map;function Ky(r){let e=cu.get(r);if(e)return e;const t=ot.sampleRate,n=Rd(r),i=Math.max(2,Math.round(t/n)),o=Math.floor(t*1.6);e=ot.createBuffer(1,o,t);const a=e.getChannelData(0),c=new Float32Array(i);for(let u=0;u<i;u++)c[u]=Math.random()*2-1;let l=0;const h=.995+Math.min(.0045,n/9e4);for(let u=0;u<o;u++){const d=c[l],f=c[(l+1)%i];c[l]=h*.5*(d+f),a[u]=d,l=(l+1)%i}return cu.set(r,e),e}function lu(r,e,t=.5){const n=ot.createBufferSource();n.buffer=Ky(r);const i=ot.createGain();i.gain.value=t,n.connect(i),i.connect(Yt),i.connect(zi),n.start(e)}function hu(r,e,t,n=.4){const i=ot.createOscillator();i.type="sine";const s=Rd(r);i.frequency.setValueAtTime(s,e);const o=ot.createOscillator();o.frequency.value=5.2;const a=ot.createGain();a.gain.value=s*.008,o.connect(a).connect(i.frequency);const c=ot.createGain();c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(n,e+.08),c.gain.setValueAtTime(n,e+t-.12),c.gain.linearRampToValueAtTime(0,e+t),i.connect(c),c.connect(Yt),c.connect(zi),i.start(e),i.stop(e+t+.05),o.start(e),o.stop(e+t+.05)}function cr(r,e,t=!0){if(e<=.01)return;const n=ot.createOscillator();n.type="sine",n.frequency.setValueAtTime(t?110:180,r),n.frequency.exponentialRampToValueAtTime(t?48:80,r+.12);const i=ot.createGain();i.gain.setValueAtTime(e,r),i.gain.exponentialRampToValueAtTime(.001,r+.22),n.connect(i).connect(Yt),n.start(r),n.stop(r+.3);const s=Math.floor(ot.sampleRate*.05),o=ot.createBuffer(1,s,ot.sampleRate),a=o.getChannelData(0);for(let u=0;u<s;u++)a[u]=(Math.random()*2-1)*(1-u/s);const c=ot.createBufferSource();c.buffer=o;const l=ot.createGain();l.gain.value=e*.5;const h=ot.createBiquadFilter();h.type="bandpass",h.frequency.value=t?300:700,c.connect(h).connect(l).connect(Yt),c.start(r)}function jy(){const r=ot.sampleRate,t=Math.floor(r*1.9),n=ot.createBuffer(2,t,r);for(let s=0;s<2;s++){const o=n.getChannelData(s);for(let a=0;a<t;a++)o[a]=(Math.random()*2-1)*Math.pow(1-a/t,2.4)}const i=ot.createConvolver();return i.buffer=n,i}function $y(r){const e=pr,n=60/(68+e*26),i=n*4,s=e>.5?Yy:qy,o=s[ar%s.length],a=[o,o+2,o+4];ar%4===0&&(lu(xo(o,-1),r,.34),hu(xo(o,0),r+.02,i*.96,.05+e*.03));const c=[0,2,1,2,0,2,1,2];for(let l=0;l<8;l++){if(e<.4&&(ar+l)%7===3)continue;const u=a[c[l]]+(l===4&&Math.random()<.4?7:0),d=(l%4===0?.4:.22)*(.8+Math.random()*.35);lu(xo(u,1),r+l*n*.5,d)}if(ar%2===(e>.5?0:1)&&Math.random()<.85){let l=r+n*(Math.random()<.5?0:.5);const h=2+(Math.random()*3|0);for(let u=0;u<h&&l<r+i-.2;u++){const d=[-2,-1,-1,1,1,2][Math.random()*6|0];Ni+=d,Ni<5&&(Ni+=4),Ni>13&&(Ni-=4),u===h-1&&(Ni=a[Math.random()*3|0]+7);const f=n*(Math.random()<.3?1.5:.75);hu(xo(Ni-7+(e>.5?0:7),1),l,f,.16+Math.random()*.07),l+=f+(Math.random()<.3?n*.5:0)}}return e>.06&&(cr(r,.5*e,!0),cr(r+n*1.5,.3*e,!1),cr(r+n*2,.45*e,!0),e>.6&&cr(r+n*3,.3*e,!1),e>.8&&Math.random()<.5&&cr(r+n*3.5,.25*e,!1)),ar++,i}function Zy(){if(!Tr)return;const r=performance.now()<Ed?1:0;for(pr+=(r-pr)*.06,pr<.01&&(pr=0);ms<ot.currentTime+.5;)ms<ot.currentTime&&(ms=ot.currentTime+.05),ms+=$y(ms)}function Qy(){const r=Td();if(!r||Tr)return;ot=r.ctx,Yt=ot.createGain(),Yt.gain.value=.55,Yt.connect(r.master);const e=jy();zi=ot.createGain(),zi.gain.value=.35,zi.connect(e),e.connect(Yt),Tr=!0,ms=ot.currentTime+.1,Ad=setInterval(Zy,120)}function Jy(r=1.5){if(Tr&&(Tr=!1,clearInterval(Ad),Yt)){const e=ot.currentTime;Yt.gain.setValueAtTime(Yt.gain.value,e),Yt.gain.linearRampToValueAtTime(1e-4,e+r);const t=Yt,n=zi;setTimeout(()=>{try{t.disconnect(),n.disconnect()}catch{}},r*1e3+100),Yt=null,zi=null}}function Cd(){Ed=performance.now()+9e3}const eS={wood:"🪵",food:"🍖",gold:"🪙",stone:"🪨"},tS=["KeyQ","KeyE","KeyR","KeyF","KeyG","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyY"];function li(r){if(!r)return"";const e=[];for(const t of["wood","food","gold","stone"])r[t]&&e.push(`${eS[t]}${r[t]}`);return e.join(" ")}class nS{constructor(e,t){this.game=e,this.input=t,this.selection=[],this.dyn=[],this.structKey=null,this.el={wood:document.getElementById("res-wood"),food:document.getElementById("res-food"),gold:document.getElementById("res-gold"),stone:document.getElementById("res-stone"),pop:document.getElementById("res-pop"),age:document.getElementById("age-disp"),alerts:document.getElementById("alerts"),selTitle:document.getElementById("sel-title"),selSub:document.getElementById("sel-sub"),selCards:document.getElementById("sel-cards"),queueRow:document.getElementById("queue-row"),cmdPanel:document.getElementById("cmd-panel"),gameover:document.getElementById("gameover-overlay"),gameoverTitle:document.getElementById("gameover-title"),gameoverSub:document.getElementById("gameover-sub"),idleBtn:document.getElementById("idle-btn"),idleCount:document.getElementById("idle-count")},this.hotkeys=new Map,e.onAlert=(n,i)=>this.alert(n,i),e.onGameOver=n=>this.showGameOver(n),this.el.idleBtn.classList.remove("hidden"),this.el.idleBtn.addEventListener("click",()=>this.input.cycleIdleVillager()),window.addEventListener("keydown",n=>{if(n.target.tagName==="INPUT"||n.shiftKey||n.ctrlKey||n.metaKey||document.querySelector(".overlay:not(.hidden)"))return;const i=this.hotkeys.get(n.code);i&&!i.classList.contains("disabled")&&i.click()})}alert(e,t=!1){const n=document.createElement("div");for(n.className="alert"+(t?" good":""),n.textContent=e,this.el.alerts.appendChild(n),setTimeout(()=>n.remove(),4200);this.el.alerts.children.length>4;)this.el.alerts.firstChild.remove()}showGameOver(e){Jy(),Hc(e?"victory":"defeat"),this.el.gameover.classList.remove("hidden"),this.el.gameoverTitle.textContent=e?"Victory!":"Defeat",this.el.gameoverTitle.className=e?"victory":"defeat",this.el.gameoverSub.textContent=e?"The enemy base lies in ruins. Your empire stands triumphant!":"Your base has been destroyed. The enemy empire prevails.",this.renderScore()}renderScore(){const e=document.getElementById("score-table");if(!e)return;const t=this.game,n=Math.floor(t.time/60),i=Math.floor(t.time%60),s=(c,l)=>Math.round((c.wood+c.food+c.gold+c.stone)*.1+c.kills*20+c.razed*50+c.built*15+c.trained*5+l.techs.length*100+(l.age-1)*200),o=[["Resources gathered",c=>(c.wood+c.food+c.gold+c.stone).toLocaleString()],["Units trained",c=>c.trained],["Units lost",c=>c.lost],["Enemy units killed",c=>c.kills],["Buildings built",c=>c.built],["Buildings lost",c=>c.bLost],["Buildings destroyed",c=>c.razed],["Techs / Age",(c,l)=>`${l.techs.length} / ${qt[l.age-1].name.replace(" Age","")}`],["SCORE",(c,l)=>`<b>${s(c,l).toLocaleString()}</b>`]];let a=`<div style="color:#9c8f6e;font-size:12px;margin:4px 0">Match time ${n}:${String(i).padStart(2,"0")}</div>`;a+='<table class="score"><tr><th style="text-align:left"></th>'+t.players.map((c,l)=>`<th>${l===de?"You":av[l]}</th>`).join("")+"</tr>";for(const[c,l]of o)a+=`<tr><td style="text-align:left">${c}</td>`+t.players.map((h,u)=>`<td>${l(t.stats[u],h)}</td>`).join("")+"</tr>";e.innerHTML=a+"</table>"}setSelection(e){this.selection=e,this.structKey=null,this.renderSelection()}computeStructKey(){const e=this.selection.filter(s=>!s.dead),t=this.game.players[de];let n=e.map(s=>s.id).join(",")+"|"+t.age+"|"+t.techs.length;const i=e[0];return e.length===1&&i?.isBuilding&&(n+="|"+(i.complete?"c":"u")+"|"+i.trainQueue.join(",")+"|"+(i.researching?"R":"")+"|"+(t.ageResearchInProgress?"A":"")+"|"+(i.garrison?.length||0)),n}update(e){const t=this.game.players[de];if(this.el.wood.textContent=Math.floor(t.res.wood),this.el.food.textContent=Math.floor(t.res.food),this.el.gold.textContent=Math.floor(t.res.gold),this.el.stone.textContent=Math.floor(t.res.stone||0),this.el.pop.textContent=`${t.popUsed}/${t.popCap}`,this.el.age.textContent=qt[t.age-1].name+(t.ageResearchInProgress?" ⏳":""),this.idleT=(this.idleT||0)-e,this.idleT<=0){this.idleT=.5;const i=this.game.units.filter(s=>s.owner===de&&!s.dead&&s.type==="villager"&&s.state==="idle"&&!s.garrisoned).length;this.el.idleCount.textContent=i,this.el.idleBtn.classList.toggle("none",i===0)}const n=this.computeStructKey();if(n!==this.structKey)this.structKey=n,this.renderSelection();else for(const i of this.dyn)i()}renderSelection(){const e=this.selection.filter(d=>!d.dead),{selTitle:t,selSub:n,selCards:i,queueRow:s,cmdPanel:o}=this.el;if(i.innerHTML="",s.innerHTML="",o.innerHTML="",this.dyn=[],this.hotkeys.clear(),this._keyIdx=0,!e.length){t.textContent="No selection",n.textContent="Left-click or drag to select your units.";return}const a=e[0];if(e.length===1){const d=a.def;t.textContent=d.name+(a.owner!==de?" (enemy)":"");const f=()=>{let g=`HP ${Math.ceil(a.hp)}/${a.maxHp}`;return a.isBuilding&&!a.complete&&(g+=` — under construction ${Math.floor(a.progress*100)}%`),a.isUnit&&a.carry?.amt>0&&(g+=` — carrying ${Math.floor(a.carry.amt)} ${a.carry.res}`),a.isUnit&&d.atk&&(g+=` — ATK ${d.atk}`),g};n.textContent=f(),this.dyn.push(()=>{n.textContent=f()})}else t.textContent=`${e.length} units selected`,n.textContent="";for(const d of e.slice(0,21)){const f=document.createElement("div");f.className="sel-card",f.innerHTML=`<span>${d.def.icon}</span><div class="hpbar"><div></div></div>`;const g=f.querySelector(".hpbar > div"),_=()=>{g.style.width=Math.max(3,d.hp/d.maxHp*100)+"%"};_(),this.dyn.push(_),f.onclick=()=>this.input.select([d]),i.appendChild(f)}if(a.owner!==de)return;const c=e.filter(d=>d.isUnit),l=c.some(d=>d.type==="villager"),h=this.game,u=h.players[de];if(l)for(const d of lv){const f=Bs[d],g=()=>u.age<f.age,_=()=>!g()&&xn(u.res,f.cost),m=this.button(f.icon,f.name,`${f.name}<br>${li(f.cost)}${u.age<f.age?`<br>Requires ${qt[f.age-1].name}`:""}`,!_(),li(f.cost));m.onclick=()=>{_()?this.input.startPlacement(d):this.game.sound("error")},this.dyn.push(()=>m.classList.toggle("disabled",!_())),this.addCmd(m)}if(c.length){const d=c.filter(g=>g.type!=="villager");if(d.length){const g=this.button("⚔️","Atk-Move (A)","Attack-move: engage everything on the way<br>Press A then click a destination");g.onclick=()=>this.input.armAttackMove(),this.addCmd(g);const _=[["😠","Aggro","aggressive","Chase anything that comes close"],["🛡","Defend","defensive","Fight back, then return to this position"],["✋","Hold","hold","Never move; only hit what is in weapon range"]];for(const[m,p,v,x]of _){const S=this.button(m,p,x);S.onclick=()=>{this.game.exec({k:"stance",ids:d.map(C=>C.id),s:v}),this.game.sound("command")},this.dyn.push(()=>S.classList.toggle("stance-on",d.every(C=>C.stance===v))),this.addCmd(S)}}const f=this.button("🛑","Stop (T)","Stop current order");f.onclick=()=>{this.game.exec({k:"stop",ids:c.map(g=>g.id)})},this.addCmd(f)}if(e.length===1&&a.isBuilding){const d=a;if(d.complete&&d.def.trains)for(const g of d.def.trains){const _=_n[g],m=()=>u.age>=_.age&&xn(u.res,_.cost),p=this.button(_.icon,_.name,`Train ${_.name}<br>${li(_.cost)}<br>HP ${_.hp} · ATK ${_.atk}${u.age<_.age?`<br>Requires ${qt[_.age-1].name}`:""}`,!m(),li(_.cost));p.onclick=()=>{if(u.age<_.age){this.game.sound("error");return}this.game.exec({k:"train",b:d.id,u:g})?this.game.sound("command"):this.game.sound("error")},this.dyn.push(()=>p.classList.toggle("disabled",!m())),this.addCmd(p)}if(d.complete&&d.def.techs)for(const g of d.def.techs){if(u.techs.includes(g))continue;const _=Wi[g],m=()=>this.game.buildings.some(x=>!x.dead&&x.owner===de&&x.researching?.tech===g),p=()=>u.age>=_.age&&!d.researching&&!m()&&xn(u.res,_.cost),v=this.button(_.icon,_.name,`${_.name}: ${_.desc}<br>${li(_.cost)}<br>${_.time}s${u.age<_.age?`<br>Requires ${qt[_.age-1].name}`:""}`,!p(),li(_.cost));v.onclick=()=>{this.game.exec({k:"tech",b:d.id,id:g})?this.game.sound("command"):this.game.sound("error")},this.dyn.push(()=>v.classList.toggle("disabled",!p())),this.addCmd(v)}if(d.complete&&d.def.isMarket)for(const g of["wood","food","stone"]){const _=this.button("📤",`Sell ${g}`,`Sell ${Xt.lot} ${g} for ${Xt.sellGold} gold`,!1,`${Xt.lot} ${g}`);_.onclick=()=>{h.exec({k:"trade",o:de,kind:g,dir:"sell"})||this.game.sound("error")},this.dyn.push(()=>_.classList.toggle("disabled",(u.res[g]||0)<Xt.lot)),this.addCmd(_);const m=this.button("📥",`Buy ${g}`,`Buy ${Xt.lot} ${g} for ${Xt.buyGold} gold`,!1,`${Xt.buyGold}G`);m.onclick=()=>{h.exec({k:"trade",o:de,kind:g,dir:"buy"})||this.game.sound("error")},this.dyn.push(()=>m.classList.toggle("disabled",(u.res.gold||0)<Xt.buyGold)),this.addCmd(m)}if(d.complete&&d.def.researchesAge&&u.age<qt.length){const g=qt[u.age],_=()=>!u.ageResearchInProgress&&xn(u.res,g.cost),m=this.button("🏰","Advance",`Advance to ${g.name}<br>${li(g.cost)}<br>${g.time}s`,!_(),li(g.cost));m.onclick=()=>{_()&&this.game.exec({k:"age",b:d.id})?this.game.sound("command"):this.game.sound("error")},this.dyn.push(()=>m.classList.toggle("disabled",!_())),this.addCmd(m)}const f=this.button("🗑",d.complete?"Demolish":"Cancel",d.complete?`Demolish this ${d.def.name} (no refund)`:"Cancel construction<br>full refund");if(f.onclick=()=>{h.exec({k:"demolish",b:d.id}),this.input.select([])},this.addCmd(f),d.complete&&d.type==="towncenter"){const g=this.button("🔔",d.garrison?.length?"Release":"Bell",d.garrison?.length?`Release ${d.garrison.length} villagers`:"Ring the bell: nearby villagers hide inside (they add arrows)");g.onclick=()=>{h.exec({k:"bell",b:d.id})},this.addCmd(g)}if(d.researching){const g=document.createElement("div");g.className="q-item",g.innerHTML=`<div class="prog"></div><span>${d.researching.tech?Wi[d.researching.tech].icon:"🏰"}</span>`;const _=g.querySelector(".prog"),m=()=>{d.researching&&(_.style.width=d.researching.t/d.researching.dur*100+"%")};m(),this.dyn.push(m),s.appendChild(g)}if(d.trainQueue.forEach((g,_)=>{const m=document.createElement("div");m.className="q-item",m.title="Click to cancel",m.innerHTML=`<div class="prog"></div><span>${_n[g].icon}</span>`;const p=m.querySelector(".prog"),v=()=>{p.style.width=(_===0&&d.trainQueue[0]===g?d.trainT/_n[g].trainTime*100:0)+"%"};v(),this.dyn.push(v),m.onclick=()=>{const x=d.trainQueue[_]===g?_:d.trainQueue.indexOf(g);x>=0&&this.game.exec({k:"cancelTrain",b:d.id,i:x})},s.appendChild(m)}),d.complete&&d.def.trains){const g=document.createElement("span");g.style.cssText="font-size:11px;color:#9c8f6e;margin-left:4px",g.textContent=d.trainQueue.length?"":"Right-click ground/resource to set rally",s.appendChild(g)}}}addCmd(e){const t=tS[this._keyIdx++];if(t){this.hotkeys.set(t,e);const n=document.createElement("span");n.className="key",n.textContent=t.slice(3),e.appendChild(n)}this.el.cmdPanel.appendChild(e)}button(e,t,n,i=!1,s=""){const o=document.createElement("button");return o.className="cmd-btn"+(i?" disabled":""),o.innerHTML=`<span>${e}</span><span class="lbl">${t}</span>`+(s?`<span class="cost">${s}</span>`:"")+`<div class="tooltip">${n}</div>`,o}}class iS{constructor(e,t,n,i,s=null){this.canvas=e,this.ctx=e.getContext("2d"),this.game=t,this.rtsCam=n,this.camera=i,this.input=s,this.pings=[],this.S=e.width,t.onPing=(l,h)=>this.pings.push({x:l,z:h,t:0}),this.terrainLayer=document.createElement("canvas"),this.terrainLayer.width=this.S,this.terrainLayer.height=this.S,this.renderTerrain(),this.nodeT=0,this.nodeLayer=document.createElement("canvas"),this.nodeLayer.width=this.S,this.nodeLayer.height=this.S,this.renderNodes(),this.fogV=-1,this.fogLayer=document.createElement("canvas"),this.fogLayer.width=this.fogLayer.height=this.S,this.fogSmall=document.createElement("canvas");const o=t.map.size;this.fogSmall.width=this.fogSmall.height=o,this.fogImg=this.fogSmall.getContext("2d").createImageData(o,o),this.raycaster=new ad,this.groundPlane=new hi(new E(0,1,0),0);const a=l=>{const h=e.getBoundingClientRect(),u=(l.clientX-h.left)/h.width*Ie,d=(l.clientY-h.top)/h.height*Ie;this.rtsCam.jumpTo(u,d)};let c=!1;e.addEventListener("mousedown",l=>{if(l.button===0)c=!0,a(l);else if(l.button===2&&this.input){const h=e.getBoundingClientRect(),u=(l.clientX-h.left)/h.width*Ie,d=(l.clientY-h.top)/h.height*Ie;this.input.dispatchContext({point:{x:u,y:0,z:d}},l.shiftKey)}}),window.addEventListener("mousemove",l=>{c&&a(l)}),window.addEventListener("mouseup",()=>{c=!1}),e.addEventListener("contextmenu",l=>l.preventDefault()),e.addEventListener("touchstart",l=>{l.preventDefault(),l.touches[0]&&a(l.touches[0])},{passive:!1}),e.addEventListener("touchmove",l=>{l.preventDefault(),l.touches[0]&&a(l.touches[0])},{passive:!1})}renderTerrain(){const e=this.terrainLayer.getContext("2d"),t=this.game.map,i=this.S/t.size;for(let s=0;s<t.size;s++)for(let o=0;o<t.size;o++){const a=t.tileHeight(o,s),c=t.moistureAt((o+.5)*ke,(s+.5)*ke);let l;if(a<=tn)l="#2d5e9e";else if(a<tn+.35)l="#b3a263";else if(a>2.6)l="#8d8a80";else{const h=120+c*45-a*8;l=`rgb(${78+a*6|0},${h|0},52)`}e.fillStyle=l,e.fillRect(o*i,s*i,i+1,i+1)}}renderNodes(){const e=this.nodeLayer.getContext("2d");e.clearRect(0,0,this.S,this.S);const t=this.S/Ie,n=this.game.fog;for(const i of this.game.nodes)i.dead||n&&!n.exploredWorld(i.wx,i.wz)||(e.fillStyle=i.type==="tree"?"#1e4d20":i.type==="gold"?"#e8b923":i.type==="stone"?"#b8b5aa":"#b03333",e.fillRect(i.wx*t-1.5,i.wz*t-1.5,3,3))}renderFog(){const e=this.game.fog;e.size;const t=this.fogImg.data,n=e.state,i=e.revealed;for(let a=0;a<n.length;a++)t[a*4+3]=i||n[a]===2?0:n[a]===1?96:235;this.fogSmall.getContext("2d").putImageData(this.fogImg,0,0);const o=this.fogLayer.getContext("2d");o.clearRect(0,0,this.S,this.S),o.imageSmoothingEnabled=!0,o.drawImage(this.fogSmall,0,0,this.S,this.S)}update(e){if(this.nodeT-=e,this.nodeT<=0&&(this.nodeT=3,this.renderNodes()),this.drawT=(this.drawT||0)-e,this.drawT>0)return;this.drawT=.08;const t=this.ctx,n=this.S;t.drawImage(this.terrainLayer,0,0),t.drawImage(this.nodeLayer,0,0);const i=n/Ie,s=this.game.fog,o=["#4d8df5","#e8473a","#b45de8"],a=["#7db8ff","#ff7a6e","#d79bff"];for(const h of this.game.buildings){if(h.dead||s&&h.owner!==de&&!s.exploredWorld(h.cx,h.cz))continue;t.fillStyle=o[h.owner]||o[1];const u=Math.max(3,h.size*ke*i);t.fillRect(h.cx*i-u/2,h.cz*i-u/2,u,u)}for(const h of this.game.units)h.dead||s&&h.owner!==de&&!s.visibleWorld(h.x,h.z)||(t.fillStyle=a[h.owner]||a[1],t.fillRect(h.x*i-1.5,h.z*i-1.5,3,3));s&&s.enabled&&(this.fogV!==s.version&&(this.fogV=s.version,this.renderFog()),t.drawImage(this.fogLayer,0,0));for(let h=this.pings.length-1;h>=0;h--){const u=this.pings[h];if(u.t+=e+.08,u.t>3){this.pings.splice(h,1);continue}const d=u.t%1;t.strokeStyle=`rgba(255,60,40,${1-d})`,t.lineWidth=2,t.beginPath(),t.arc(u.x*i,u.z*i,3+d*10,0,Math.PI*2),t.stroke()}t.strokeStyle="#f5f0dc",t.lineWidth=1.2,t.beginPath();const c=[[-1,-1],[1,-1],[1,1],[-1,1]];let l=!1;for(const[h,u]of c){const d=this.projectToGround(h,u);if(!d)continue;const f=Math.max(0,Math.min(n,d.x*i)),g=Math.max(0,Math.min(n,d.z*i));l?t.lineTo(f,g):(t.moveTo(f,g),l=!0)}t.closePath(),t.stroke()}projectToGround(e,t){return this.raycaster.setFromCamera({x:e,y:t},this.camera),this._scratch=this._scratch||new E,this.raycaster.ray.intersectPlane(this.groundPlane,this._scratch)?this._scratch:null}}const Pd="aoge-save";function sS(r,e){const t={v:1,seed:r.map.seed.toString(36),size:Ko,biome:jo,foes:String(vi),difficulty:e,time:r.time,savedAt:Date.now(),players:r.players.map(n=>({res:{...n.res},age:n.age,techs:[...n.techs]})),units:r.units.filter(n=>!n.dead).map(n=>({t:n.type,o:n.owner,x:+(n.garrisoned?n.garrisoned.cx:n.x).toFixed(1),z:+(n.garrisoned?n.garrisoned.cz:n.z).toFixed(1),hp:Math.round(n.hp),st:n.stance!=="aggressive"?n.stance:void 0})),buildings:r.buildings.filter(n=>!n.dead).map(n=>({t:n.type,o:n.owner,gx:n.gx,gy:n.gy,hp:Math.round(n.hp),c:n.complete?1:0,pr:n.complete?void 0:+n.progress.toFixed(3),q:n.trainQueue.length?[...n.trainQueue]:void 0,qt:n.trainQueue.length?+n.trainT.toFixed(1):void 0,r:n.researching?{...n.researching}:void 0,ry:n.rally&&n.rally.x!==void 0?{x:n.rally.x,z:n.rally.z}:void 0})),nodes:r.nodes.filter(n=>!n.dead).map(n=>({gx:n.gx,gy:n.gy,a:Math.round(n.amount)})),stats:r.stats,fog:r.fog?oS(r.fog.state):void 0};return localStorage.setItem(Pd,JSON.stringify(t)),t}function Id(){try{return JSON.parse(localStorage.getItem(Pd)||"null")}catch{return null}}function rS(r,e){e.players.forEach((n,i)=>{const s=r.players[i];if(s){s.res={...n.res},s.age=n.age,s.techs=[...n.techs];for(const o of s.techs)for(const[a,c]of Object.entries(Wi[o].mod))s.mods[a]*=c}});for(const n of e.buildings){const i=r.placeBuilding(n.o,n.t,n.gx,n.gy,!0);i&&(n.c||(i.complete=!1,i.progress=n.pr||0),i.hp=Math.min(i.maxHp,n.hp),n.q&&(i.trainQueue=[...n.q],i.trainT=n.qt||0),n.r&&(i.researching={...n.r},n.r.tech||(r.players[n.o].ageResearchInProgress=!0)),n.ry&&(i.rally={x:n.ry.x,z:n.ry.z}))}r.players.forEach((n,i)=>r.recalcPop(i));for(const n of e.units){const i=r.spawnUnit(n.t,n.o,n.x,n.z);i.hp=Math.min(i.maxHp,n.hp),n.st&&(i.stance=n.st)}const t=new Map(e.nodes.map(n=>[n.gx+","+n.gy,n.a]));for(const n of[...r.nodes]){const i=t.get(n.gx+","+n.gy);i===void 0?(n.amount=0,r.depleteNode(n)):n.amount=i}if(r.time=e.time||0,e.stats&&e.stats.forEach((n,i)=>{r.stats[i]&&(r.stats[i]={...r.stats[i],...n})}),e.fog&&r.fog){const n=atob(e.fog),i=r.fog.state;for(let s=0;s<n.length&&s<i.length;s++)i[s]=n.charCodeAt(s);r.fog.dirty=!0,r.fog.version++}}function oS(r){let e="";for(let t=0;t<r.length;t+=4096)e+=String.fromCharCode(...r.subarray(t,t+4096));return btoa(e)}function uu(r,e){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d"),i=n.createRadialGradient(64,64,6,64,64,62);return i.addColorStop(0,r),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,128,128),new yi(t)}function aS(){const r=document.createElement("canvas");r.width=64,r.height=64;const e=r.getContext("2d");for(let n=0;n<9;n++){const i=8+n*6+Math.sin(n*7.3)*3,s=(n-4)*2.2+Math.sin(n*3.1)*2,o=30+n%3*10,a=e.createLinearGradient(0,64,0,64-o);a.addColorStop(0,"#3d6e2e"),a.addColorStop(1,"#7fb254"),e.strokeStyle=a,e.lineWidth=2.4,e.beginPath(),e.moveTo(i,64),e.quadraticCurveTo(i+s*.4,64-o*.6,i+s,64-o),e.stroke()}return new yi(r)}class cS{constructor(e,t){this.scene=e,this.map=t,this.t=0,this.deepTiles=[],this.shoreTiles=[];for(let n=1;n<t.size-1;n+=2)for(let i=1;i<t.size-1;i+=2){const s=t.tileHeight(i,n);s<=tn-.35?this.deepTiles.push([i,n]):s>tn-.12&&s<=tn+.04&&this.shoreTiles.push([i,n])}this._buildBirds(),this._buildClouds(),this._buildRipples(),this._buildGrass()}_buildBirds(){const e=new St;e.setAttribute("position",new Mt(new Float32Array([0,0,.35,-.9,.12,-.3,0,0,-.05,0,0,.35,0,0,-.05,.9,.12,-.3]),3)),e.computeVertexNormals();const t=new Pt({color:2829107,side:an});this.flocks=[];const n=3*6;this.birdMesh=new Ns(e,t,n),this.birdMesh.frustumCulled=!1,this.scene.add(this.birdMesh);let i=0;for(let s=0;s<3;s++){const o={x:Math.random()*Ie,z:Math.random()*Ie,y:26+s*4,dir:Math.random()*Math.PI*2,speed:6.5+s,birds:[]};for(let a=0;a<6;a++)o.birds.push({idx:i++,ox:a%3*2.2-2.2+a*.4,oz:Math.floor(a/3)*1.8-a%2,phase:Math.random()*6.28});this.flocks.push(o)}}_buildClouds(){this.clouds=[];const e=uu("rgba(255,255,255,0.85)","rgba(255,255,255,0)"),t=uu("rgba(0,0,0,0.75)","rgba(0,0,0,0)"),n=new In(1,1);for(let i=0;i<4;i++){const s=new Pe,o=3+i%3;for(let c=0;c<o;c++){const l=new wr(new mi({map:e,transparent:!0,opacity:.5,depthWrite:!1})),h=10+Math.random()*9;l.scale.set(h*1.5,h*.7,1),l.position.set((c-o/2)*7,(Math.random()-.5)*2.5,(Math.random()-.5)*5),s.add(l)}s.position.set(Math.random()*Ie,38+i*3,Math.random()*Ie),this.scene.add(s);const a=new ze(n,new Pt({map:t,transparent:!0,opacity:.1,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.scale.set(30,22,1),a.renderOrder=2,this.scene.add(a),this.clouds.push({group:s,shadow:a,speed:.9+Math.random()*.7,drift:Math.random()*.4-.2})}}_buildRipples(){if(this.ripples=[],!this.deepTiles.length&&!this.shoreTiles.length)return;const e=new qo(.75,.95,24);for(let t=0;t<10;t++){const n=new ze(e,new Pt({color:14675708,transparent:!0,opacity:0,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.renderOrder=2,this.scene.add(n);const i={mesh:n,t:Math.random()*-6,dur:2.2};this._respawnRipple(i),this.ripples.push(i)}}_respawnRipple(e){const n=this.shoreTiles.length&&(!this.deepTiles.length||Math.random()<.5)?this.shoreTiles:this.deepTiles;if(!n.length){e.t=-9999;return}const[i,s]=n[Math.random()*n.length|0],o=(i+.5)*ke,a=(s+.5)*ke;e.mesh.position.set(o+(Math.random()-.5)*2,tn-.06,a+(Math.random()-.5)*2),e.t=-Math.random()*5}_buildGrass(){const e=aS(),t=new In(1.1,1.1);t.translate(0,.5,0);const n=t.clone().rotateY(Math.PI/2),i=new St,s=t.toNonIndexed(),o=n.toNonIndexed(),a=new Float32Array(s.attributes.position.count*3+o.attributes.position.count*3);a.set(s.attributes.position.array,0),a.set(o.attributes.position.array,s.attributes.position.count*3);const c=new Float32Array(s.attributes.uv.count*2+o.attributes.uv.count*2);c.set(s.attributes.uv.array,0),c.set(o.attributes.uv.array,s.attributes.uv.count*2),i.setAttribute("position",new Mt(a,3)),i.setAttribute("uv",new Mt(c,2)),i.computeVertexNormals();const l=new An({map:e,alphaTest:.35,side:an}),h=550,u=new Ns(i,l,h);u.frustumCulled=!1;const d=new Te,f=new Ft,g=new jt,_=new E;let m=0,p=0;const v=this.map;for(;m<h&&p++<h*14;){const x=Math.random()*Ie,S=Math.random()*Ie,[C,A]=v.worldToGrid(x,S);if(!v.isWalkable(C,A)||v.occupantAt(C,A)||v.moistureAt(x,S)<.45)continue;const T=v.heightAt(x,S);if(T<tn+.3)continue;g.set(0,Math.random()*Math.PI,0),f.setFromEuler(g);const P=.7+Math.random()*.7;d.compose(_.set(x,T-.03,S),f,new E(P,P,P)),u.setMatrixAt(m++,d)}u.count=m,u.instanceMatrix.needsUpdate=!0,this.scene.add(u)}update(e){this.t+=e;const t=this.t,n=this._m4=this._m4||new Te,i=this._q=this._q||new Ft,s=this._e=this._e||new jt,o=this._s=this._s||new E;for(const a of this.flocks){a.x+=Math.cos(a.dir)*a.speed*e,a.z+=Math.sin(a.dir)*a.speed*e,a.dir+=Math.sin(t*.11+a.y)*.0012,a.x<-20&&(a.x=Ie+18),a.x>Ie+20&&(a.x=-18),a.z<-20&&(a.z=Ie+18),a.z>Ie+20&&(a.z=-18);for(const c of a.birds){const l=Math.sin(t*7+c.phase);s.set(0,-a.dir+Math.PI/2,l*.55),i.setFromEuler(s),n.compose(o.set(a.x+c.ox,a.y+Math.sin(t*.9+c.phase)*.7,a.z+c.oz),i,this._one=this._one||new E(1,1,1)),this.birdMesh.setMatrixAt(c.idx,n)}}this.birdMesh.instanceMatrix.needsUpdate=!0;for(const a of this.clouds){a.group.position.x+=a.speed*e,a.group.position.z+=a.drift*e,a.group.position.x>Ie+40&&(a.group.position.x=-40),a.group.position.z>Ie+40&&(a.group.position.z=-40),a.group.position.z<-40&&(a.group.position.z=Ie+40);const c=a.group.position.x,l=a.group.position.z;c>-5&&c<Ie+5&&l>-5&&l<Ie+5?(a.shadow.visible=!0,a.shadow.position.set(c,Math.max(this.map.heightAt(c,l),tn)+.42,l)):a.shadow.visible=!1}for(const a of this.ripples){if(a.t+=e,a.t<0)continue;if(a.t>=a.dur){this._respawnRipple(a),a.mesh.material.opacity=0;continue}const c=a.t/a.dur,l=.4+c*2.6;a.mesh.scale.set(l,l,1),a.mesh.material.opacity=.5*(1-c)}}}const Ld=document.getElementById("game-canvas"),{renderer:Ro,scene:bi,camera:Ir,updateSun:lS,composer:hS}=Nv(Ld),$o=new URLSearchParams(location.search).has("lite");$o&&(Ro.shadowMap.enabled=!1);const Lr=new URLSearchParams(location.search),Ut=new dv(iv),vs=pv(Ut,1+vi),uS=fv(Ut,vs,$o),{ground:dS,waterNormalTex:fS}=kM(bi,Ut),Gc=new GM(bi,1e3);await Gc.load();const Le=new Ry(bi,Ut,Gc);Le.effects=new QM(bi,Le);Le.soundFn=Hc;Le.onCombat=Cd;Le.createResourceNodes(uS);function du(r,[e,t]){let i=null;e:for(let o=0;o<12;o++)for(let a=-o;a<=o;a++)for(let c=-o;c<=o;c++){if(Math.max(Math.abs(c),Math.abs(a))!==o)continue;const l=e+c-Math.floor(4/2),h=t+a-Math.floor(4/2);if(Ut.canPlace(l-1,h-1,6)){i=[l,h];break e}}i||(i=[e,t]);const s=Le.placeBuilding(r,"towncenter",i[0],i[1],!0);for(let o=0;o<4;o++){const a=Math.PI*.25+o*.45,c=s.cx+Math.cos(a)*7,l=s.cz+Math.sin(a)*7,[h,u]=Ut.nearestWalkable(...Ut.worldToGrid(c,l),6)||Ut.worldToGrid(s.cx,s.cz+8),[d,f]=Ut.gridToWorld(h,u);Le.spawnUnit("villager",r,d,f)}return s}const Pn=new Uy(Ut);Le.fog=Pn;Lr.has("nofog")&&Pn.revealAll();const En=Lr.has("replay")?(()=>{try{return JSON.parse(localStorage.getItem("aoge-replay")||"null")}catch{return null}})():null,Ar=Lr.has("load")&&!En?Id():null;let ks;if(Ar)rS(Le,Ar),ks=Le.buildings.find(r=>r.owner===de&&r.type==="towncenter")||Le.buildings.find(r=>r.owner===de)||{cx:vs[0][0]*ke,cz:vs[0][1]*ke};else{ks=du(de,vs[0]);for(let r=1;r<=vi;r++)du(r,vs[r]);for(let r=0;r<=vi;r++)Le.recalcPop(r)}for(let r=1;r<=vi;r++){let[e,t]=vs[r];const n=Le.buildings.find(i=>i.owner===r&&i.type==="towncenter");n&&(e=n.gx,t=n.gy),Le.ais.push(new Ly(Le,e,t,"normal",r))}Le.ai=Le.ais[0];if(En){Pn.revealAll(),Le.replayMode=!0;let r=0;Le.onTick=()=>{for(;r<En.log.length&&En.log[r].t<=Le.tick;)wd(Le,En.log[r++])}}Pn.recompute(Le);const pS=new Fy(bi,Ut,Pn),Dd=$o?null:new cS(bi,Ut);function Nd(){for(const r of Le.units)r.owner===de||r.dead||(r.group.visible=!r.garrisoned&&Pn.visibleWorld(r.x,r.z));for(const r of Le.buildings)r.owner===de||r.dead||(r.group.visible=Pn.exploredWorld(r.cx,r.cz));for(const r of Le.nodes){if(r.dead)continue;const e=Pn.exploredWorld(r.wx,r.wz);r.mesh?r.mesh.visible=e:r.treeHandle&&Gc.setHidden(r.treeHandle,!e)}}Nd();yy();vy(()=>{for(const r of Le.buildings)r.reskin()});ly().then(r=>{if(r)for(const e of Le.units)e.adoptModel()});const _i=new By(Ir,Ut);_i.jumpTo(ks.cx,ks.cz+6);_i.smoothTarget.set(ks.cx,0,ks.cz+6);let Mi;const Zo=new Vy({canvas:Ld,game:Le,rtsCam:_i,camera:Ir,terrainMesh:dS,onSelectionChange:r=>Mi&&Mi.setSelection(r),sound:Hc});Mi=new nS(Le,Zo);const Ud=new iS(document.getElementById("minimap"),Le,_i,Ir,Zo);document.getElementById("mute-btn").addEventListener("click",r=>{const e=ky();r.currentTarget.innerHTML=e?"&#128263;":"&#128266;"});let Ho=!1;const Fd=new od,Ms=pd(16767344,3);Ms.visible=!1;bi.add(Ms);function mS(){const r=Zo.selection,t=(r.length===1&&r[0].isBuilding&&r[0].owner===de&&!r[0].dead?r[0]:null)?.rally;if(!t){Ms.visible=!1;return}const n=t.x??t.node?.wx??t.farm?.cx,i=t.z??t.node?.wz??t.farm?.cz;if(n===void 0){Ms.visible=!1;return}Ms.visible=!0,Ms.position.set(n,Ut.heightAt(n,i),i)}let ja=0,$a=!$o,vo=0,Za=0,Er=1;function Rr(r){Er=Math.max(1,Math.min(4,r|0));for(const e of document.querySelectorAll(".speed-btn"))e.classList.toggle("active",+e.dataset.speed===Er)}window.__setSpeed=Rr;let As=!1;function Bd(r){As=r,document.getElementById("pause-btn").classList.toggle("paused",As),As&&Mi.alert("Paused — press P to resume",!0)}document.getElementById("pause-btn").addEventListener("click",()=>Bd(!As));window.addEventListener("keydown",r=>{r.code==="KeyP"&&r.target.tagName!=="INPUT"&&!document.querySelector(".overlay:not(.hidden)")&&Bd(!As)});const Mo=.05;let lr=0;function Od(){requestAnimationFrame(Od);const r=Math.min(Fd.getDelta(),.05);if(Ho&&!As){lr+=r*Er;let e=0;for(;lr>=Mo&&e++<16;)Le.update(Mo),lr-=Mo;lr>Mo*16&&(lr=0)}_i.update(r),lS(_i.smoothTarget,_i.smoothDist),Pn.dirty&&(pS.refresh(),Nd(),Pn.dirty=!1),Mi.update(r),Ud.update(r),mS(),ja+=r,fS.offset.set(ja*.012,ja*.009),Dd?.update(r),Ho&&$a&&(Za++,vo+=r,vo>5&&(Za/vo<28&&($a=!1,Ro.setPixelRatio(1),Ro.setSize(window.innerWidth,window.innerHeight)),vo=0,Za=0)),$a?hS.render():Ro.render(bi,Ir)}Od();let Vc="normal";function Qo(r,e=!1){Vc=r;for(const n of Le.ais)n.setDifficulty(r);if(!e&&!En&&(Le.cmdLog=[]),r==="easy"&&!e){const n=Le.players[de].res;n.wood+=900,n.food+=3500,n.gold+=1800,n.stone+=400}Oy(),Qy(),document.getElementById("start-overlay").classList.add("hidden"),Ho=!0,Fd.getDelta();const t=r[0].toUpperCase()+r.slice(1);Mi.alert(e?`Welcome back — ${t} game resumed.`:`${t} game — gather resources and build your empire. The enemy is preparing…`,!0)}for(const r of["easy","normal","hard"]){const e=document.getElementById("start-"+r);e&&e.addEventListener("click",()=>Qo(r))}const yo=document.getElementById("opt-size"),Qa=document.getElementById("opt-biome"),Ja=document.getElementById("opt-foes");if(yo){yo.value=Ko,Qa.value=jo,Ja.value=String(vi);const r=e=>{const t=new URLSearchParams;t.set("size",yo.value),t.set("biome",Qa.value),t.set("foes",Ja.value),t.set("seed",(e?Math.random()*1e9|0:Ut.seed).toString(36)),Lr.has("lite")&&t.set("lite",""),location.search=t.toString()};for(const e of[yo,Qa,Ja])e.addEventListener("change",()=>r(!1));document.getElementById("opt-newmap").addEventListener("click",()=>r(!0))}const Ui=Id(),Rn=document.getElementById("resume-btn");Ui&&Rn&&!Ar&&!En&&(Rn.classList.remove("hidden"),Rn.textContent=`💾 Resume saved game (${Ui.difficulty}, ${Math.floor((Ui.time||0)/60)} min in)`,Rn.addEventListener("click",()=>{const r=new URLSearchParams;r.set("load","1"),r.set("seed",Ui.seed),r.set("size",Ui.size),r.set("biome",Ui.biome),r.set("foes",Ui.foes),Lr.has("lite")&&r.set("lite",""),location.search=r.toString()}));if(Ar){for(const r of["easy","normal","hard"])document.getElementById("start-"+r)?.classList.add("hidden");document.getElementById("map-opts")?.classList.add("hidden"),Rn.classList.remove("hidden"),Rn.textContent="▶ Continue saved game",Rn.addEventListener("click",()=>Qo(Ar.difficulty||"normal",!0))}if(En){for(const r of["easy","normal","hard"])document.getElementById("start-"+r)?.classList.add("hidden");document.getElementById("map-opts")?.classList.add("hidden"),Rn.classList.remove("hidden"),Rn.textContent="▶ Watch replay",Rn.addEventListener("click",()=>Qo(En.difficulty||"normal",!1))}const gS=Le.onGameOver;Le.onGameOver=r=>{if(Le.cmdLog&&!En)try{localStorage.setItem("aoge-replay",JSON.stringify({seed:Ut.seed.toString(36),size:Ko,biome:jo,foes:String(vi),difficulty:Vc,log:Le.cmdLog}))}catch{}gS(r)};document.getElementById("replay-btn")?.addEventListener("click",()=>{let r=null;try{r=JSON.parse(localStorage.getItem("aoge-replay")||"null")}catch{}if(!r)return;const e=new URLSearchParams;e.set("replay","1"),e.set("seed",r.seed),e.set("size",r.size),e.set("biome",r.biome),e.set("foes",r.foes),location.search=e.toString()});function kd(){if(!Ho||Le.gameOver){Mi.alert("Nothing to save yet.");return}sS(Le,Vc),Mi.alert("Game saved — resume it from the start screen anytime.",!0)}document.getElementById("save-btn").addEventListener("click",kd);for(const r of document.querySelectorAll(".speed-btn"))r.addEventListener("click",()=>Rr(+r.dataset.speed));window.addEventListener("keydown",r=>{r.target.tagName!=="INPUT"&&(document.querySelector(".overlay:not(.hidden)")||(r.code==="BracketRight"?Rr(Er+1):r.code==="BracketLeft"&&Rr(Er-1)))});Rr(1);window.__game=Le;window.__rtsCam=_i;window.__input=Zo;window.__audio={voice:fr,combatPulse:Cd};window.__minimap=Ud;window.__startGame=Qo;window.__save=kd;window.__ambient=Dd;window.__project=(r,e,t)=>{const n=new E(r,e,t).project(Ir);return{x:(n.x+1)/2*window.innerWidth,y:(1-n.y)/2*window.innerHeight,z:n.z}};

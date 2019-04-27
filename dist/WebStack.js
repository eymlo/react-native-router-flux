Object.defineProperty(exports,"__esModule",{value:true});exports.push=push;exports.





addOnPopHandler=addOnPopHandler;function push(){if(window&&window.history&&window.history.pushState){window.history.pushState({},"","");}}function addOnPopHandler(callback){
if(window&&window.addEventListener){
window.addEventListener('popstate',callback);
}
}
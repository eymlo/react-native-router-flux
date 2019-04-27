Object.defineProperty(exports,"__esModule",{value:true});exports.matchPath=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _pathToRegexp=require('path-to-regexp');var _pathToRegexp2=_interopRequireDefault(_pathToRegexp);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toArray(arr){return Array.isArray(arr)?arr:Array.from(arr);}































var compilePathToRegex=function compilePathToRegex(path){
var keys=[];
var re=(0,_pathToRegexp2.default)(path,keys);


return{re:re,keys:keys};
};



























var matchPath=exports.matchPath=function matchPath(path,url){


var urlCleaned='';
var pathToMatch=path;


if(path.match(/\?path=/)){
urlCleaned=url.split('path=')[1]||'';
pathToMatch=path.split('path=')[1];
}else{
urlCleaned=url.split('?')[0];
}


var urlToMatch=!urlCleaned.endsWith('/')?urlCleaned+'/':urlCleaned;var _compilePathToRegex=


compilePathToRegex(pathToMatch),re=_compilePathToRegex.re,keys=_compilePathToRegex.keys;


var match=re.exec(urlToMatch);


if(!match){return null;}var _match=_toArray(



match),compiledUrl=_match[0],values=_match.slice(1);



if(urlToMatch!==compiledUrl){return null;}

var params=keys.reduce(function(acc,key,index){return(
_extends({},acc,_defineProperty({},key.name,values[index])));},{});


return{path:path,params:params};
};











var pathParser=function pathParser(url){var possibleMatchingpaths=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];return(
possibleMatchingpaths.
map(function(path){return matchPath(path,url);}).
find(function(obj){return obj;}));};exports.default=

pathParser;
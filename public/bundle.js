!function e(n,r,o){function t(u,f){if(!r[u]){if(!n[u]){var l="function"==typeof require&&require;if(!f&&l)return l(u,!0);if(i)return i(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var c=r[u]={exports:{}};n[u][0].call(c.exports,function(e){var r=n[u][1][e];return t(r?r:e)},c,c.exports,e,n,r,o)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<o.length;u++)t(o[u]);return t}({1:[function(e,n,r){e("./test.js"),e("./test2.js"),console.log("Hi Binh")},{"./test.js":2,"./test2.js":3}],2:[function(e,n,r){console.log("hello i bundled")},{}],3:[function(e,n,r){console.log("hello bundled 2")},{}]},{},[1]);
!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire1b1c;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire1b1c=o);var i=o("bpxeT"),d=o("2TvXO"),u=o("lF0Zg");o("jzQFI");var c,a=o("7hrFt"),s=[],l=[],v=[],f=!0;function m(){return(m=e(i)(e(d).mark((function t(){return e(d).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,a.downloadWatchedQueuedMoviesFromDB)(),e.next=3,new Promise((function(e){setTimeout((function(){e(y())}),1e3)}));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function y(){try{var e=a.itemAccess.data();console.log(e);var t=Object.keys(e).length;if(console.log(t),0===t||void 0===e.queuedMovies||void 0===e.watchedMovies)return void p();var n=e.queuedMovies.length,r=e.watchedMovies.length,o=e.watchedMovies,i=e.queuedMovies;if(console.log(n),0!==n&&"[]"!==i){var d=e.queuedMovies[0];l=JSON.parse(d)}if(0!==r&&"[]"!==o){var u=e.watchedMovies[0];s=JSON.parse(u)}p(),console.log("You movies saved in watched are:",s,"and queued are: ",l)}catch(e){console.log("I couldn't load the data from the database, because: ",e)}}function p(){q(h);var e=document.querySelector(".clear-btn");(e.innerText="CLEAR WATCHED LIST",s.length>0)?(0,u.renderMoviesList)(s):document.querySelector(".error-message").innerText='Oops! Your "watched" library is empty!';e.addEventListener("click",L)}function L(){f?(console.log("clear watched list"),s=[],(0,a.uploadWatchedQueuedMoviesToDB)("watched",s)):(console.log("clear queue list"),l=[],(0,a.uploadWatchedQueuedMoviesToDB)("queued",l)),document.querySelector(".movies-div").innerHTML=""}function q(e){e.classList.add("active")}function M(e){e.classList.remove("active")}document.addEventListener("DOMContentLoaded",(function(){return m.apply(this,arguments)}));var h=document.querySelector(".watched-btn"),T=document.querySelector(".queue-btn");h.addEventListener("click",(function(){q(h),M(T),f=!0,document.querySelector(".clear-btn").innerText="CLEAR WATCHED LIST";var e=document.querySelector(".error-message");if(0===s.length)return e.innerText='Oops! Your "watched" library is empty!',void(document.querySelector(".movies-div").innerHTML="");e.innerText="",(0,u.renderMoviesList)(s)})),T.addEventListener("click",(function(){q(T),M(h),f=!1,document.querySelector(".clear-btn").innerText="CLEAR QUEUE LIST";var e=document.querySelector(".error-message");if(0===l.length)return e.innerText='Oops! Your "queue" library is empty!',void(document.querySelector(".movies-div").innerHTML="");e.innerText="",(0,u.renderMoviesList)(l)}));var w=document.getElementById("closeModalBtn2"),g=document.querySelector(".bckdrp");w.addEventListener("click",(function(){g.style.display="none"})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(g.style.display="none")})),g.addEventListener("click",(function(e){e.target===g&&(g.style.display="none")}));var S=document.querySelector(".wbtn2"),b=document.querySelector(".qbtn2");S.addEventListener("click",(function(){if(c.watched){c.watched=!1,S.innerHTML="Add to watched";var e=s.findIndex((function(e){return e.id===c.id}));s.splice(e,1)}else S.innerHTML="Remove from watched",c.watched=!0,s.push(c);(0,a.uploadWatchedQueuedMoviesToDB)(s,l),f?(0,u.renderMoviesList)(s):(0,u.renderMoviesList)(l)})),b.addEventListener("click",(function(){if(c.queued){c.queued=!1,b.innerHTML="Add to queue";var e=l.findIndex((function(e){return e.id===c.id}));l.splice(e,1)}else b.innerHTML="Remove from queue",c.queued=!0,l.push(c);(0,a.uploadWatchedQueuedMoviesToDB)(s,l),f?(0,u.renderMoviesList)(s):(0,u.renderMoviesList)(l)})),document.querySelector(".movdiv2").addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;v=f?s:l;var t=e.target.attributes[0].value,n=v.findIndex((function(e){return t-e.id==0})),r=document.querySelector(".title-film"),o=document.querySelector(".movie-poster"),i=document.querySelector(".vote"),d=document.querySelector(".votes"),u=document.querySelector(".popularity"),a=document.querySelector(".title"),m=document.querySelector(".genres"),y=document.querySelector(".description-text");c=v[n],r.innerHTML=c.title,o.src=c.poster_path,i.innerHTML=c.vote_average,d.innerHTML=" / "+c.vote_count,u.innerHTML=c.popularity,a.innerHTML=c.original_title,m.innerHTML=c.genres,y.innerHTML=c.overview,c.watched?S.innerHTML="Remove from watched":S.innerHTML="Add to watched";c.queued?b.innerHTML="Remove from queue":b.innerHTML="Add to queue";g.style.display="block"}))}();
//# sourceMappingURL=my_library.030eee8e.js.map

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire23fa;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire23fa=o);var r=o("1dkLo");o("5uEKZ");var i,d=o("jPzW1"),c=[],u=[],s=[],l=!0;function a(){m(y);const e=document.querySelector(".clear-btn");if(e.innerText="CLEAR WATCHED LIST",c.length>0)(0,r.renderMoviesList)(c);else{document.querySelector(".error-message").innerText='Oops! Your "watched" library is empty!'}e.addEventListener("click",v)}function v(){l?(console.log("clear watched list"),c=[],(0,d.uploadWatchedQueuedMoviesToDB)("watched",c)):(console.log("clear queue list"),u=[],(0,d.uploadWatchedQueuedMoviesToDB)("queued",u));document.querySelector(".movies-div").innerHTML=""}function m(e){e.classList.add("active")}function f(e){e.classList.remove("active")}document.addEventListener("DOMContentLoaded",(async function(){(0,d.downloadWatchedQueuedMoviesFromDB)(),await new Promise((e=>{setTimeout((()=>{e(function(){try{const e=d.itemAccess.data();console.log(e);const t=Object.keys(e).length;if(console.log(t),0===t||void 0===e.queuedMovies||void 0===e.watchedMovies)return void a();const n=e.queuedMovies.length,o=e.watchedMovies.length,r=e.watchedMovies,i=e.queuedMovies;if(console.log(n),0!==n&&"[]"!==i){const t=e.queuedMovies[0];u=JSON.parse(t)}if(0!==o&&"[]"!==r){const t=e.watchedMovies[0];c=JSON.parse(t)}a(),console.log("You movies saved in watched are:",c,"and queued are: ",u)}catch(e){console.log("I couldn't load the data from the database, because: ",e)}}())}),1e3)}))}));const y=document.querySelector(".watched-btn"),L=document.querySelector(".queue-btn");y.addEventListener("click",(function(){m(y),f(L),l=!0,document.querySelector(".clear-btn").innerText="CLEAR WATCHED LIST";const e=document.querySelector(".error-message");if(0!==c.length)e.innerText="",(0,r.renderMoviesList)(c);else{e.innerText='Oops! Your "watched" library is empty!';document.querySelector(".movies-div").innerHTML=""}})),L.addEventListener("click",(function(){m(L),f(y),l=!1,document.querySelector(".clear-btn").innerText="CLEAR QUEUE LIST";const e=document.querySelector(".error-message");if(0!==u.length)e.innerText="",(0,r.renderMoviesList)(u);else{e.innerText='Oops! Your "queue" library is empty!';document.querySelector(".movies-div").innerHTML=""}}));const q=document.getElementById("closeModalBtn2"),M=document.querySelector(".bckdrp");q.addEventListener("click",(function(){M.style.display="none"})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(M.style.display="none")})),M.addEventListener("click",(function(e){e.target===M&&(M.style.display="none")}));const p=document.querySelector(".wbtn2"),T=document.querySelector(".qbtn2");p.addEventListener("click",(function(){if(i.watched){i.watched=!1,p.innerHTML="Add to watched";let e=c.findIndex((e=>e.id===i.id));c.splice(e,1)}else p.innerHTML="Remove from watched",i.watched=!0,c.push(i);(0,d.uploadWatchedQueuedMoviesToDB)(c,u),l?(0,r.renderMoviesList)(c):(0,r.renderMoviesList)(u)})),T.addEventListener("click",(function(){if(i.queued){i.queued=!1,T.innerHTML="Add to queue";let e=u.findIndex((e=>e.id===i.id));u.splice(e,1)}else T.innerHTML="Remove from queue",i.queued=!0,u.push(i);(0,d.uploadWatchedQueuedMoviesToDB)(c,u),l?(0,r.renderMoviesList)(c):(0,r.renderMoviesList)(u)}));document.querySelector(".movdiv2").addEventListener("click",(function(e){if("IMG"!==e.target.nodeName)return;s=l?c:u;const t=e.target.attributes[0].value;var n=s.findIndex((e=>t-e.id==0));const o=document.querySelector(".title-film"),r=document.querySelector(".movie-poster"),d=document.querySelector(".vote"),a=document.querySelector(".votes"),v=document.querySelector(".popularity"),m=document.querySelector(".title"),f=document.querySelector(".genres"),y=document.querySelector(".description-text");i=s[n],o.innerHTML=i.title,r.src=i.poster_path,d.innerHTML=i.vote_average,a.innerHTML=" / "+i.vote_count,v.innerHTML=i.popularity,m.innerHTML=i.original_title,f.innerHTML=i.genres,y.innerHTML=i.overview,i.watched?p.innerHTML="Remove from watched":p.innerHTML="Add to watched";i.queued?T.innerHTML="Remove from queue":T.innerHTML="Add to queue";M.style.display="block"}));
//# sourceMappingURL=my_library.88c7ac1f.js.map
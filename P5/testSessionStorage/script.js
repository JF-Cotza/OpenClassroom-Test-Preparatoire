"use strict"
const getId=($id)=>{return document.getElementById($id);}
const localValue = ($key) => { return localStorage.getItem($key) }
const sessionValue = ($key) => { return sessionStorage.getItem($key) }

let toLocal = getId('sendLocal');
let toSession = getId('sendSession');
let toCookie = getId('toCookie')

let fromLocal=getId('getLocal');
let fromSession = getId('getSession');
let getCookie = getId('getCookie')

let localinfos = getId('localinfos');
let sessioninfos = getId('sessioninfos');
let cookieInfo = getId('cookieInfo');

let viderStockage = getId('viderStockage');

if(toLocal || toSession || toCookie){
    console.log("page d'envoi 1");
    toLocal.addEventListener('click',function () {
        localStorage.setItem('local','valeur pour le local');
    } )
    toSession.addEventListener('click', function () {
        sessionStorage.setItem('session', 'valeur pour la session');
    })
    toCookie.addEventListener('click',function () {
        document.cookie ='cookie=cookie; path=/';
        document.cookie ='cooking=cook; path=/';
    })

}
else{
    console.log("page de réception 1");
}

if (fromLocal ||fromSession) {
    console.log("page de réception 2");
    fromLocal.addEventListener('click',function () {
        if(localValue('local')){
            localinfos.textContent=localValue('local');
        }
        else{
            localinfos.textContent ='vide';
        }
    })
    fromSession.addEventListener('click', function () {
        if (sessionValue('session')) {
            sessioninfos.textContent = sessionValue('session');
        }
        else {
            sessioninfos.textContent = 'vide';
        }
    })
    getCookie.addEventListener('click', function () {
        if (document.cookie) {
            cookieInfo.textContent = decodeURIComponent(document.cookie);;
        }
        else {
            cookieInfo.textContent = 'vide';
        }
    })
    viderStockage.addEventListener('click',function () {
        localStorage.clear();
        sessionStorage.clear();
        document.cookie=('cookie= ; path=/');
        cookies.remove('cooking');
    })

}
else {
    console.log("page d'envoi 2");
}


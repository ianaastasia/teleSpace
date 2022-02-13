const visibleP = document.querySelector('.info-p');
const btnInfo = document.querySelector('.btnInfo');
btnInfo.onclick = function(){
    visibleP.classList.toggle('info-p-visible');
}
const Heart = document.querySelector('.love');
Heart.onclick = function(){
    if (Heart.classList.toggle('fav-change'))
    alert('Телескоп добавлен в избранное!')
    else {
        alert('Телескоп удален из избранного!')
    }
}
const visiblePt = document.querySelector('.info-p-2');
const btnInfot = document.querySelector('.btnInfo-2');
btnInfot.onclick = function(){
    visiblePt.classList.toggle('info-p-visible');
}
const Heartt = document.querySelector('.love-2');
Heartt.onclick = function(){
    if (Heartt.classList.toggle('fav-change'))
    alert('Телескоп добавлен в избранное!')
    else {
        alert('Телескоп удален из избранного!')
    }
}
const visiblePth = document.querySelector('.info-p-3');
const btnInfoth = document.querySelector('.btnInfo-3');
btnInfoth.onclick = function(){
    visiblePth.classList.toggle('info-p-visible');
}
const Heartth = document.querySelector('.love-3');
Heartth.onclick = function(){
    if (Heartth.classList.toggle('fav-change'))
    alert('Телескоп добавлен в избранное!')
    else {
        alert('Телескоп удален из избранного!')
    }
}
const visiblePfo = document.querySelector('.info-p-4');
const btnInfofo = document.querySelector('.btnInfo-4');
btnInfofo.onclick = function(){
    visiblePfo.classList.toggle('info-p-visible');
}
const Heartfo = document.querySelector('.love-4');
Heartfo.onclick = function(){
    if (Heartfo.classList.toggle('fav-change'))
    alert('Телескоп добавлен в избранное!')
    else {
        alert('Телескоп удален из избранного!')
    }
}
const visiblePfa = document.querySelector('.info-p-5');
const btnInfofa = document.querySelector('.btnInfo-5');
btnInfofa.onclick = function(){
    visiblePfa.classList.toggle('info-p-visible');
}
const Heartfa = document.querySelector('.love-5');
Heartfa.onclick = function(){
    if (Heartfa.classList.toggle('fav-change'))
    alert('Телескоп добавлен в избранное!')
    else {
        alert('Телескоп удален из избранного!')
    }
}
const visiblePs = document.querySelector('.info-p-6');
const btnInfos = document.querySelector('.btnInfo-6');
btnInfos.onclick = function(){
    visiblePs.classList.toggle('info-p-visible');
}
const Hearts = document.querySelector('.love-6');
Hearts.onclick = function(){
    if (Hearts.classList.toggle('fav-change'))
    alert('Телескоп добавлен в избранное!')
    else {
        alert('Телескоп удален из избранного!')
    }
}
let arr = ['2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'],
   block = document.querySelector('.collection'),
   i = 0;
   block.onclick = boom;
   function boom() {
    block.style.backgroundImage='url(../img/'+arr[i]+')';
    i++;
    if (i == arr.length) {
     i = 0;
    }
}

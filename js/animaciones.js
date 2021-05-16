let objt = document.querySelectorAll('#nave');
let done = false;

var t1 = '#nave'
var t2 = '#nave2'
var t3 = '#objeto'
var t4 = '#objeto2'

document.getElementById('cerrar').addEventListener("click", () => {{  done = true;  }}) 
document.getElementById('abrir').addEventListener("click", () =>  {{  done = false; }}) 
function pause() {
 animaciones2.pause();
 animaciones1.pause();
 animaciones3.pause();
 animaciones4.pause();
}
function play(){
  animaciones2.play();
  animaciones1.play();
  animaciones3.play();
  animaciones4.play();
}

//ANIMACIONES 
const animaciones1 = anime({
  autoplay: false,
  targets: t1,
  translateX: [
    { value: 800, duration: 4000, easing: 'easeInOutSine'},
    { value: 10, duration: 4000, easing: 'easeInOutSine', direction: "reverse"}
              ],
  opacity:[
                  { value: 0, delay: 4000}
          ],
  scale: [
      {value: 1.25, duration: 2000, easing: 'easeInOutSine'},
      {value: 1, duration: 2000, easing: 'easeInOutQuad',}
    ],
loop: true,
loopComplete: () => {
  if (done) {
    pause();
  }}
});
 const animaciones2 = anime({
   autoplay: false,
  targets: t2,
  translateX: [
    { value: -800, duration: 4000, easing: 'easeInOutSine', delay: 4000}
              ],
  opacity: [
      { value: 0},
      { value: 1, delay: 3500}
  ],
  scale: [
      {value: .75, duration: 2000, easing: 'easeInOutSine', delay: 4000},
      {value: 1, duration: 2000, easing: 'easeInOutQuad'}
    ],
loop: true,
loopComplete: () => {
  if (done) {
    pause();
  }}
});
//ROCA
const animaciones3 = anime({
autoplay: false,
targets: t3,
translateX: [
{ value: -800, duration: 4000, easing: 'easeInOutSine'},
{ value: 10, duration: 4000, easing: 'easeInOutSine', }
      ],
opacity: [
{ value: 0, delay: 4000}
],
scale: [
{value: .75, duration: 2000, easing: 'easeInOutSine'},
{value: 1, duration: 2000, easing: 'easeInOutQuad'}
],
rotate: {
value: 360,
duration: 4000,
easing: 'easeInOutSine'
},
loop: true,
loopComplete: () => {
  if (done) {
    pause();
  }}
});
var animaciones4 = anime({
  autoplay: false,
  targets: t4,
  translateX: [
  { value: 800, duration: 4000, easing: 'easeInOutSine', delay: 4000},
          ],
  opacity:[
  { value: 0},
  { value: 1, delay: 3500}
      ],
  scale: [
  {value: 1.25, duration: 2000, easing: 'easeInOutSine', delay: 4000},
  {value: 1, duration: 2000, easing: 'easeInOutQuad',}
  ],
  rotate: {
  value: 360,
  duration: 4000,
  delay: 4000,
  easing: 'easeInOutSine'
  },
  loop: true,
  });

document.addEventListener("DOMContentLoaded", () => {{
play()
}}) 










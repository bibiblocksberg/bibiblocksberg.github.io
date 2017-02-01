/*var canvas = document.getElementById('can');
document.getElementById('os').innerHTML = window.navigator.oscpu;
//var ctx = canvas.getContext('2d');
var currentloc = [45,45,10,10];
var vx = 5;
var vy = 7;
//var xarr = [1,5,10,25];
//var yarr = [2,8,7,32];
//ctx.fillRect(45,45,10,10);
//var out = document.getElementById('out');
var img = document.getElementById('image');
img.style.width = '20px';
img.style.height = '20px';

canvas.addEventListener('mousemove',function(event) {
  if(event.region) {
    alert("hit region: " + event.region);
  }
});

function draw() {
    
   // ctx.clearRect(currentloc[0] - 5,currentloc[1] - 5,currentloc[2] + 10,currentloc[3] + 10);
   
    if (currentloc[0] >= 300 || currentloc[0] <= 0){
        vx = -vx;
    }
    if (currentloc[1] >= 150 || currentloc[1] <= 0){
        vy = -vy;
    }
    var random = Math.random()*100;
   
    
        if (random > 80) { ctx.fillStyle = 'red';};
        
        if (random < 80) { ctx.fillStyle = 'green'; };
      
        if (random < 40) { ctx.fillStyle = 'yellow'; };
        
        if (random < 20) { ctx.fillStyle = 'blue'; }
    

    
   currentloc[0] = currentloc[0] + vx;
   currentloc[1] = currentloc[1] + vy;
   ctx.fillRect(currentloc[0],currentloc[1],currentloc[2],currentloc[3]);

   

}

function hearts() {
    ctx.drawImage(img,Math.random()*200,Math.random()*200,20,20);
}

setInterval(draw,40);
setInterval(hearts,5000);
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
ctx.fill();
ctx.addHitRegion({id: 'square'});
*/
//$('body').css('background-color',localStorage.getItem('bcolor'));

if(localStorage !== undefined) {
    console.log('localStorage available!');
}
else {
    alert('No localStorage! ruuun');
}

function changeBackground() {

    selected = $('select').val();
    var l = localStorage;
    l.setItem('bcolor', selected);
    $('body').css('background-color',selected);
    console.log(selected);
      
}

console.log(document.documentMode);
$('button').click(changeBackground);

console.log(document.documentMode);

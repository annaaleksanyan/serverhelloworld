var socket;
function main() {
    socket = io();
};
window.onload = main;

function setup() {
    createCanvas(400, 400);
    background(32,178,170);  
    socket = io.connect('localhost:3000')
    socket.on('mouse', newDrawing);
}
function newDrawing(data){
    fill(255,0,100);
    ellipse(data.x, data.y, 36, 36);
}
function mouseDragged(){
    console.log('Sending: ' + mouseX + ',' + mouseY);
    var data = {
        x: mouseX,
        y: mouseY
    }
    socket.emit('mouse', data);
    fill(255);
    ellipse(mouseX, mouseY, 36, 36);
}






















// var socket;
// function main() {
//     socket = io();
// };
// window.onload = main;

// function mouseDragged() {
//     console.log('Sending: ' + mouseX + ' , ' + mouseY);
//     var data = {
//         x: mouseX,
//         y: mouseY
//     }
//     socket.emit('mouse', data);
//     fill(0, 0, 0)
//     return false;
// }
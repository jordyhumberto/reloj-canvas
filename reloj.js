var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var color = '#ffffff';
ctx.strokeStyle = color;
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = color;

function degToRoad(degree)
{
    var factor = Math.PI / 180;
    return factor * degree;
}

function renderTime()
{
    var now = new Date();
    var today = now.toDateString();
    var time = now.toLocaleTimeString();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var newSconds = seconds + (milliseconds / 1000);

    //background
    var gradient = ctx.createRadialGradient(250,250,1,250,250,300);
    gradient.addColorStop(0,'#343232');
    gradient.addColorStop(1,'black');

    ctx.fillStyle = gradient;
    //ctx.fillStyle='#333333';
    ctx.fillRect(0,0,500,500);

    //hours
    ctx.beginPath();
    ctx.arc(250,250,200,degToRoad(270),degToRoad((hours * 15) - 90));
    ctx.stroke();

    //minutes
    ctx.beginPath();
    ctx.arc(250,250,170,degToRoad(270),degToRoad((minutes * 6) - 90));
    ctx.stroke();

    //seconds
    ctx.beginPath();
    ctx.arc(250,250,140,degToRoad(270),degToRoad((newSconds * 6) - 90));
    ctx.stroke();

    //date
    ctx.fillStyle = color;
    ctx.font = '24px Arial';
    ctx.fillText(today,170 ,250);

    //time
    ctx.fillStyle = color;
    ctx.font = '15px Arial';
    ctx.fillText(time,170 ,280);
}

setInterval(renderTime,40);

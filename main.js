var canvas,ctx;
canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 3;
    //////////////////////////////////////////////
    ctx.rect(140,98,530,300);
    ctx.stroke();
    /////////////////////////////////////////////
    ctx.moveTo(300,190);
    ctx.beginPath();
    ctx.strokeStyle = "#1212E1";
    ctx.arc(300,190,40,0,360);
    ctx.stroke();
    ////////////////////////////////////////////
    ctx.moveTo(400,190);
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.arc(400,190,40,0,360);
    ctx.stroke();
    ////////////////////////////////////////////
    ctx.moveTo(500,190);
    ctx.beginPath();
    ctx.strokeStyle = "#EF120E";
    ctx.arc(500,190,40,0,360);
    ctx.stroke();
    ///////////////////////////////////////////
    ctx.moveTo(350,240);
    ctx.beginPath();
    ctx.strokeStyle = "#F8A811";
    ctx.arc(350,240,40,0,360);
    ctx.stroke();
    ///////////////////////////////////////////
    ctx.moveTo(450,240);
    ctx.beginPath();
    ctx.strokeStyle = "#0D7E0D";
    ctx.arc(450,240,40,0,360);
    ctx.stroke();
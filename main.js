var canvas, ctr;

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');

    var i = 0;
    while (i < 50) {
        var theP = getRandomInt(0, 100);
        var theP2 = getRandomInt(0, 100);
        var theS = getRandomInt(1, 10);
        var theAngle = getRandomInt(1, 360);
        drawCreeper(theP, theP2, theAngle, theS);
        i++;
    }
}




function drawCreeper(x, y, angle, tScale) {
    ctx.save();
    ctx.scale(tScale, tScale);
    ctx.translate(x, y);
    ctx.rotate(angle);
    var greenArray = ['#84a47d', '#0c870b', '#388f30', '#a8a8a8', '#68ae58',
        '#3a7138'
    ];
    //blotches
    var i = 0;
    var i2 = 0;
    var cnt = true;
    while (cnt) {
        var theColor = greenArray[getRandomInt(0, 5)];
        //console.log('color: ' + theColor);
        ctx.fillStyle = theColor;
        ctx.fillRect(i, i2, 2, 2);
        //console.log('x: ' + i + ' y:' + i2);
        i = i + 2;
        var remainder = i % 16;
        if (remainder === 0) {
            i2 = i2 + 2;
            i = 0;
        }
        if (i === 0 && i2 == 16) {
            cnt = false;
        }
    }
    // da face
    ctx.fillStyle = '#000000';
    ctx.fillRect(4, 4, 2, 2);
    ctx.fillRect(10, 4, 2, 2);
    ctx.fillRect(6, 8, 2, 2);
    ctx.fillRect(8, 8, 2, 2);
    ctx.fillRect(4, 10, 2, 2);
    ctx.fillRect(6, 10, 2, 2);
    ctx.fillRect(8, 10, 2, 2);
    ctx.fillRect(10, 10, 2, 2);
    //main head color
    ctx.lineWidth = .5;
    ctx.strokeStyle = '#000000';
    ctx.strokeRect(0, 0, 16, 16);
    ctx.restore();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
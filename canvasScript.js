document.addEventListener("DOMContentLoaded", function () {
    
    drawShape("circle", 90);
    drawShape("square", 150);
    drawShape("heart", 100);
    drawShape("triangle", 150);
    drawShape("pentagon", 100);
    drawShape("star", 100);
    drawOval("oval", 120, 70);
    drawShape("hexagon", 100);
    drawShape("rhombus", 170);
    drawRectangle("rectangle", 190, 100);
    drawTrapezoid("trapezoid", 140, 200, 130);
    drawParallelogram("parallelogram", 180, 120, 50);

    function drawShape(shapeId, size) {
        var canvas = document.getElementById(shapeId);
        var ctx = canvas.getContext("2d");

        switch (shapeId) {
            case "circle":
                drawCircle(ctx, canvas.width / 2, canvas.height / 2, size);
                break;
            case "square":
                drawSquare(ctx, canvas.width / 2, canvas.height / 2, size);
                break;
            case "heart":
                drawHeart(ctx, canvas.width / 2, canvas.height / 2, size);
                break;
            case "triangle":
                drawTriangle(ctx, canvas.width / 2, canvas.height / 2, size);
                break;
            case "pentagon":
                drawPentagon(ctx, canvas.width / 2, canvas.height / 2, size);
                break;
            case "star":
                drawStar(ctx, canvas.width / 2, canvas.height / 2, size);
                break;
            case "hexagon":
                drawHexagon(ctx, canvas.width / 2, canvas.height / 2, size);
                break;
            case "rhombus":
                drawRhombus(ctx, canvas.width / 2, canvas.height / 2, size);
                break;
        }
    }
    function drawCircle(ctx, x, y, radius) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff4e6"; 
        ctx.fill();
        ctx.closePath();
    }
    function drawSquare(ctx, x, y, size) {
        var halfSize = size / 2;
        ctx.fillStyle = "#fff4e6"; 
        ctx.fillRect(x - halfSize, y - halfSize, size, size);
    }
    function drawHeart(ctx, x, y, size) {
        ctx.fillStyle = "#fff4e6";
        ctx.beginPath();
        ctx.moveTo(x, y - size / 2);
        ctx.bezierCurveTo(x + size / 2, y - size, x + size, y, x, y + size);
        ctx.bezierCurveTo(x - size, y, x - size / 2, y - size, x, y - size / 2);
        ctx.fill();
        ctx.closePath();
    }
    function drawTriangle(ctx, x, y, size) {
        ctx.fillStyle = "#fff4e6"; 
        ctx.beginPath();
        ctx.moveTo(x, y - size / 2);
        ctx.lineTo(x + size / 2, y + size / 2);
        ctx.lineTo(x - size / 2, y + size / 2);
        ctx.fill();
        ctx.closePath();
    }
    function drawPentagon(ctx, x, y, size) {
        ctx.fillStyle = "#fff4e6";
        ctx.beginPath();
        for (var i = 0; i < 5; i++) {
            var angle = (i * 2 * Math.PI) / 5;
            var px = x + size * Math.cos(angle);
            var py = y + size * Math.sin(angle);
            ctx.lineTo(px, py);
        }
        ctx.fill();
        ctx.closePath();
    }
    function drawStar(ctx, x, y, size) {
        ctx.fillStyle = "#fff4e6";
        ctx.beginPath();
        for (var i = 0; i < 5; i++) {
            var outerRadius = size;
            var innerRadius = size / 2;
            var outerX = x + outerRadius * Math.cos((i * 2 * Math.PI) / 5);
            var outerY = y + outerRadius * Math.sin((i * 2 * Math.PI) / 5);
            ctx.lineTo(outerX, outerY);

            var innerX = x + innerRadius * Math.cos(((i + 0.5) * 2 * Math.PI) / 5);
            var innerY = y + innerRadius * Math.sin(((i + 0.5) * 2 * Math.PI) / 5);
            ctx.lineTo(innerX, innerY);
        }
        ctx.fill();
        ctx.closePath();
    }
    function drawOval(shapeId, sizeX, sizeY) {
        var canvas = document.getElementById(shapeId);
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.ellipse(canvas.width / 2, canvas.height / 2, sizeX, sizeY, 0, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff4e6"; 
        ctx.fill();
        ctx.closePath();
    }
    function drawHexagon(ctx, x, y, size) {
        ctx.fillStyle = "#fff4e6"; 
        ctx.beginPath();
        for (var i = 0; i < 6; i++) {
            var angle = (i * 2 * Math.PI) / 6;
            var px = x + size * Math.cos(angle);
            var py = y + size * Math.sin(angle);
            ctx.lineTo(px, py);
        }
        ctx.fill();
        ctx.closePath();
    }
    function drawRhombus(ctx, x, y, size) {
        ctx.fillStyle = "#fff4e6";
        ctx.beginPath();
        ctx.moveTo(x, y - size / 2);
        ctx.lineTo(x + size / 2, y);
        ctx.lineTo(x, y + size / 2);
        ctx.lineTo(x - size / 2, y);
        ctx.fill();
        ctx.closePath();
    }
    function drawRectangle(shapeId, width, height) {
        var canvas = document.getElementById(shapeId);
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#fff4e6";
        ctx.fillRect(canvas.width / 2 - width / 2, canvas.height / 2 - height / 2, width, height);
    }
    function drawTrapezoid(shapeId, baseWidth, topWidth, height) {
        var canvas = document.getElementById(shapeId);
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#fff4e6"; 
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - baseWidth / 2, canvas.height / 2 - height / 2);
        ctx.lineTo(canvas.width / 2 + baseWidth / 2, canvas.height / 2 - height / 2);
        ctx.lineTo(canvas.width / 2 + topWidth / 2, canvas.height / 2 + height / 2);
        ctx.lineTo(canvas.width / 2 - topWidth / 2, canvas.height / 2 + height / 2);
        ctx.fill();
        ctx.closePath();
    }
    function drawParallelogram(shapeId, baseWidth, height, skew) {
        var canvas = document.getElementById(shapeId);
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#fff4e6";
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - baseWidth / 2, canvas.height / 2 - height / 2);
        ctx.lineTo(canvas.width / 2 + baseWidth / 2, canvas.height / 2 - height / 2);
        ctx.lineTo(canvas.width / 2 + baseWidth / 2 - skew, canvas.height / 2 + height / 2);
        ctx.lineTo(canvas.width / 2 - baseWidth / 2 - skew, canvas.height / 2 + height / 2);
        ctx.fill();
        ctx.closePath();
    }
});
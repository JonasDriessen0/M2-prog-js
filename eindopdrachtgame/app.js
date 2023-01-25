class App
{
    card()
    {
        let canvas = document.getElementById("canvasId");
        canvas.style.border = "15px solid black";
    }

    house(x, y)
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.lineWidth = 15

        g.beginPath()
        g.fillStyle = "brown"
        g.moveTo(x + 75, y + 25);
        g.lineTo(x + 50, y + 75);
        g.lineTo(x + 50, y + 125);
        g.lineTo(x + 150, y + 150);
        g.lineTo(x + 200, y + 125);
        g.lineTo(x + 200, y + 75);
        g.lineTo(x + 175, y + 50);
        g.closePath();
        g.stroke();
        g.fill();

        //roof
        g.beginPath()
        g.fillStyle = "White"
        g.moveTo(x + 175, y + 50);
        g.lineTo(x + 75, y + 25);
        g.lineTo(x + 50, y + 75);
        g.lineTo(x + 150, y + 100);
        g.closePath();
        g.stroke();
        g.fill();

        // roof other bit
        g.lineWidth = 5
        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(x + 180, y + 45);
        g.lineTo(x + 210, y + 72);
        g.closePath();
        g.stroke();
        g.fill();

        // window
        g.beginPath()
        g.fillStyle = "yellow"
        g.moveTo(x + 75, y + 100)
        g.lineTo(x + 75, y + 125)
        g.lineTo(x + 120, y + 136)
        g.lineTo(x + 120, y + 111)
        g.closePath();
        g.stroke();
        g.fill();
    }

    road()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.lineWidth = 15;
        g.beginPath();
        g.fillStyle = "#404040";
        g.moveTo(300, 1);
        g.lineTo(300, 800);
        g.lineTo(500, 800);
        g.lineTo(500, 1);
        g.closePath();
        g.stroke();
        g.fill();
    }
}
let app = new App();
app.card();
app.house(10, 20);
app.house(40, 180);
app.house(10, 330);
app.house(40, 480);
app.house(10, 630);
app.house(500, 20);
app.house(550, 180);
app.house(500, 330);
app.house(550, 480);
app.house(500, 630);
app.road();
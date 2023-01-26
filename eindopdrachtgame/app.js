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
        
        // house structure
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
        g.moveTo(350, 0);
        g.lineTo(300, 800);
        g.lineTo(500, 800);
        g.lineTo(450, 0);
        g.closePath();
        g.stroke();
        g.fill();

        // road stripes
        for(let y = 0; y < 800; y += 100) {
            g.beginPath();
            g.fillStyle = "white";
            g.moveTo(395, y);
            g.lineTo(395, y + 50);
            g.lineTo(405, y + 50);
            g.lineTo(405, y);
            g.closePath();
            g.stroke();
            g.fill();
        }
    }

    tree(x, y)
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.lineWidth = 15;
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(50 + x, 0 + y);
        g.lineTo(25 + x, 70 + y);
        g.lineTo(75 + x, 70 + y);
        g.closePath();
        g.stroke();
        g.fill();
    
        g.beginPath();
        g.fillStyle = "brown";
        g.moveTo(45 + x, 79 + y);
        g.lineTo(45 + x, 100 + y);
        g.lineTo(55 + x, 100 + y);
        g.lineTo(55 + x, 79 + y);
        g.closePath();
        g.stroke();
        g.fill();
    }

    text()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");

        g.fillStyle = "green"
        g.font = "bold 75px Calibri";
        g.lineWidth =1;
        g.strokeStyle = 'white';
        g.fillText("Merry Christmas!", 230, 100);
        g.strokeText("Merry Christmas!", 230, 100);
    }
}
let app = new App();
app.card();
app.house(50, 20);
app.house(40, 180);
app.house(10, 330);
app.house(20, 480);
app.house(10, 630);
app.house(500, 20);
app.house(550, 180);
app.house(500, 330);
app.house(540, 480);
app.house(560, 630);
app.road();
app.tree(50, 100);
app.tree(500, 180);
app.tree(10, 560);
app.tree(700, 400);
app.tree(-10, 260);
app.tree(700, 750);
app.text();
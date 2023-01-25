class App
{
    runapplication()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(70,20);
        g.closePath();
        g.stroke();
        g.fill();
    }

    tekenHuis()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(70,20);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

let app = new App();
app.runapplication();

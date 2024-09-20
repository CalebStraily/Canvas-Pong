window.onload = function()
{
    c = document.getElementById('gc');
    cc = c.getContext('2d');
    setInterval(update, 1000/30);
    c.addEventListener('mousemove', function(e)
    {
        p1YPos = e.clientY - paddleHeight / 2;
    });
}

let p1YPos = 40;
let p2YPos = 40;
let paddThickness = 10;
let paddleHeight = 100;
let ballXPos = 50;
let ballYPos = 50;
let xVelocity = 4;
let yVelocity = 4;
let ballDimension = 6;
let score1 = 0; 
let score2 = 0;
let aiSpeed = 2;

console.log(score1);
console.log(score2);

function reset()
{
    ballXPos = c.width / 2;
    ballYPos = c.height / 2;
    xVelocity = -xVelocity;
    yVelocity = 3;
}

function update()
{

    ballXPos += xVelocity;
    ballYPos += yVelocity;

    if (ballYPos < 0 && yVelocity < 0)
    {
        yVelocity = -yVelocity;
    }

    if (ballYPos > c.height && yVelocity > 0)
    {
        yVelocity = -yVelocity;
    }

    if (ballXPos < 0)
    {
        if(ballYPos > p1YPos && ballYPos < p1YPos + paddleHeight)
        {
            xVelocity = -xVelocity;
            dy = ballYPos - (p1YPos + paddleHeight / 2);
            yVelocity = dy * 0.3;
        }
        else
        {
            score2++;
            reset();
        }
    }

    if (ballXPos > c.width)
    {
        if(ballYPos > p2YPos && ballYPos < p2YPos + paddleHeight)
        {
            xVelocity = -xVelocity;
            dy = ballYPos - (p2YPos + paddleHeight / 2);
            yVelocity = dy * 0.3;
        }
        else
        {
            score1++;
            reset();
        }
    }

    if (p2YPos + paddleHeight/2 < ballYPos)
    {
        p2YPos += aiSpeed;
    }
    else
    {
        p2YPos -= aiSpeed;
    }

    cc.fillStyle = 'black';
    cc.fillRect(0, 0, c.width, c.height);
    cc.fillStyle = 'white';
    cc.fillRect(0, p1YPos, paddThickness, paddleHeight);
    cc.fillRect(c.width-paddThickness, p2YPos, paddThickness, paddleHeight);
    cc.fillRect(ballXPos - ballDimension / 2, ballYPos - ballDimension / 2, ballDimension, ballDimension);
    cc.fillText(score1, 100, 100);
    cc.fillText(score2, c.width - 100, 100)
}
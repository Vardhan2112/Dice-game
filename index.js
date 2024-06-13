var n=Math.floor(Math.random()*6)+1;
var m=Math.floor(Math.random()*6)+1;

if(n===1)
{
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
else if(n===2)
{
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
else if(n===3)
    {
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
    }
else if(n===4)
    {
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");
    }
    else if(n===5)
        {
            document.querySelector(".img1").setAttribute("src","./images/dice5.png");
        }
        else{
            document.querySelector(".img1").setAttribute("src","./images/dice6.png");
        }





   if(m===1)
        {
            document.querySelector(".img2").setAttribute("src","./images/dice1.png");
        }
        else if(m===2)
        {
            document.querySelector(".img2").setAttribute("src","./images/dice2.png");
        }
        else if(m===3)
            {
                document.querySelector(".img2").setAttribute("src","./images/dice3.png");
            }
        else if(m===4)
            {
                document.querySelector(".img2").setAttribute("src","./images/dice4.png");
            }
            else if(m===5)
                {
                    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
                }
                else{
                    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
                }


if(n>m)
    {
        document.querySelector("h1").textContent="🚩Player 1 wins";
    }
if(n<m)
    {
            document.querySelector("h1").textContent="Player 2 wins🚩";
        }
if(n===m){
            document.querySelector("h1").textContent="DRAW!";
}
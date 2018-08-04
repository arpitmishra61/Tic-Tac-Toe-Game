
var parentBox= document.querySelector('.gamebox')
var childBox=parentBox.children;
var count2=1
var count=0;

//Giving Id to lable elements

  for(var i=0;i<childBox.length;i++)
 { if(childBox[i].tagName=='LABLE')
   {childBox[i].id=String(count2)
   count2++}
   
   
  }
  
 
//Adding Event listner to buttons(1-9)
var check = new Array(9);
for(var i=0;i<childBox.length;i++)
if(childBox[i].tagName=='LABLE')
  childBox[i].addEventListener('click',display)

//Display (0 or X) After Event listner(callBackFunction)
  
function display(e)
{
if(count%2==0)
{e.target.innerHTML='0';

check[Number(e.target.id)-1]='0'}

else
  {e.target.innerHTML='X'
  check[Number(e.target.id)-1]='X'}
count=count+1;


result();}

function showin(no)
{ var p1=document.getElementById('player1')
  var gameBox=document.querySelector('.gamebox')
  var p2=document.getElementById('player2')
  var image=document.getElementById('winningImage')
  gameBox.style.pointerEvents = "button:disabled";
    if(no==0)
   { 
  
   p1.style.width="300px"
   image.style.visibility="visible";
   p1.innerHTML="PLAYER 1 WINS"
   
   
   p1.style.fontSize="50px"
   p1.style.backgroundColor="tomato"
p1.style.color="white"
p1.style.marginLeft="50px"
p2.style.display="none"

gameBox.style.left="700px";
gameBox.style.paddingTop="30px";


gameBox.backgroundColor='tomato';

}
    
    else
   {

   p2.style.width="300px"
   p2.innerHTML="PLAYER 2 WINS"
   
   p1.style.backgroundImageSize="10%"
   
   p2.style.fontSize="50px"
   p2.style.backgroundColor="tomato"
   p2.style.color="white"
   p2.style.marginRight="50px"
    p1.style.display="none"

gameBox.style.right="700px";
gameBox.style.paddingTop="30px";
image.style.visibility="visible"
gameBox.backgroundColor="tomato";

    return false
   }


}


function draw()
{var p1=document.getElementById('player1')
var p2=document.getElementById('player2')
p1.innerHTML='DRAW'
p2.innerHTML='DRAW'


}
   
function result()

{var flag=2;
     console.log(check)
   for(var i=0;i<=2;i++)
{  
    //ROW CHECK
    
    if(i==0&&(check[i]=='0' && check[i+1]=='0' && check[i+2]=='0' && showin(0) || check[i]=='X' && check[i+1]=='X' && check[i+2]=='X' && showin(1) ))
   {}
   else

   if(i==1&&(check[3*i]=='0' && check[3*i+1]=='0' && check[3*i+2]=='0' && showin(0)  || check[3*i]=='X' && check[3*i+1]=='X' && check[3*i+2]=='X' && showin(1) ))
   {}
   else

 if(i==2&&(check[3*i]=='0' && check[3*i+1]=='0' && check[3*i+2]=='0' && showin(0) || check[3*i]=='X' && check[3*i+1]=='X' && check[3*i+2]=='X' && showin(1)) )
 {}



 //COLOUMN CHECK


 if(i==0&&(check[i+2]=='0' && check[i+5]=='0' && check[i+8]=='0' && showin(0) || check[i+2]=='X' && check[i+5]=='X' && check[i+8]=='X' && showin(1) ))
   {}
   else

   if(i==1&&(check[3*i-2]=='0' && check[3*i+1]=='0' && check[3*i+4]=='0' && showin(0)  || check[3*i-2]=='X' && check[3*i+1]=='X' && check[3*i+4]=='X' && showin(1) ))
   {}
   else

 if(i==2&&(check[3*i]=='0' && check[3*i-3]=='0' && check[3*i-6]=='0' && showin(0) || check[3*i]=='X' && check[3*i-3]=='X' && check[3*i-6]=='X' && showin(1)) )
 {}



else
 //DIGONAL  CHECK

 if(i==0&&(check[i]=='0' && check[i+4]=='0' && check[i+8]=='0' && showin(0) || check[i]=='X' && check[i+4]=='X' && check[i+8]=='X' && showin(1) ))
   {}
   else

   if(i==1&&(check[2*i]=='0' && check[2*i+2]=='0' && check[2*i+4]=='0' && showin(0)  || check[2*i]=='X' && check[2*i+2]=='X' && check[2*i+4]=='X' && showin(1) ))
   {}
   else
   
   if(count==9 && showin()==TRUE)
   draw();
  
}
}

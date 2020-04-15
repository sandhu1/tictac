//console.log("connected");
var restart=document.querySelector('#b');

var squares=document.querySelectorAll('td');




function clear(){
  for (var i = 0; i <squares.length; i++) {
    squares[i].textContent='';
  }
}
restart.addEventListener('click',clear)



function changemark(){
  if (this.textContent=== '') {
    this.textContent="X";
  }else if (this.textContent==='X') {
    this.textContent='0';
  }else{
    this.textContent='';
  }
}



for(var j=0;j<squares.length;j++)
{
  squares[j].addEventListener('click',changemark);
}

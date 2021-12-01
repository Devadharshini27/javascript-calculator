function clr(){ 
  document.getElementById("result").value ="";
}
function number(val){
  document.getElementById("result").value+=val;
  
}
function display(val){
  document.getElementById("result").value+=val
}
function equal(){
  let x=document.getElementById("result").value;
  let y=eval(x);
  document.getElementById("result").value=y;
}

let one = document.querySelector('.cel')
let two = document.querySelector('.fah')
function change(){
  if (one.value===""){
    two.value=""
  }
else{
  two.value = (one.value*9/5)+32;
}
}
one.addEventListener('input', change);

function change2(){
  if(two.value===""){
    one.value=""
  }
  else{
  one.value = (two.value-32)*5/9;
}}
two.addEventListener('input', change2)
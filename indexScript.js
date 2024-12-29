let btn = document.querySelector(".toggle");
let icon = btn.querySelector(".fa-bars");


  btn.onclick = function (){
    if(icon.classList.contains("fa-bars")){
      icon.classList.replace("fa-bars","fa-xmark");
      document.getElementById("sidebar").style.display='flex';
    }
    else{
      icon.classList.replace("fa-xmark","fa-bars");
      document.getElementById("sidebar").style.display='none';
    }
  }

  function hideSidebar(){
    document.getElementById("sidebar").style.display='none';
    icon.classList.replace("fa-xmark","fa-bars");
  }

function showPersonalInfo(){
let personalContent =document.getElementById('personalContent');
let Li_list = document.getElementById('li-pd');
personalContent.style.display = "flex";
let loc = document.getElementById('education');
   loc.style.display ='none';
   document.getElementById('li-loc').style.textDecoration='none';
 if(personalContent.style.display === 'flex'){
      Li_list.style.textDecoration = '2px orangered underline'
 }
}

function showLocation(){
  let Li_list = document.getElementById('li-pd');
  let location = document.getElementById('education');
  document.getElementById('personalContent').style.display="none";
  let loc=document.getElementById('li-loc');
  location.style.display="flex";
  Li_list.style.textDecoration = 'none';

  if(location.style.display === "flex"){
      loc.style.textDecoration = "2px orangered underline";
  }
}

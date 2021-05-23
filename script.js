var men = document.getElementsByClassName("img") [0];
var m = document.getElementsByClassName('menu') [0];

men.addEventListener('click', function(){
   m.classList.toggle('hide');
   

});


var bar = document.querySelector('.src')
var n = document.querySelector('.bar')


bar.addEventListener('click', function(){

	n.classList.toggle('hide');
});
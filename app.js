//Тоглогчийн  ээлжийг хадгалах хувьсагч , 1-р тоглогч 0. 2-р тоглогч 1
 
var acrivePlayer = 1;


//Тоглогчдийн оноог хадгалах хувьсагч

var scores = [0 , 0];



//Тоглогчийн ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч

var roundScore = 0;



//Шоо аль талаараа буусанг хадгалах 1-6 гэсэн энэ утгуудыг санамсаргүйгээр үүсгэж өгнө





//Тоглоом эхлэхэд бэлдэж байна

//document.getElementById('#score-0').te





document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";


document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

document.querySelector(".btn-roll").addEventListener('click' , function (){
	var diceNumber = Math.floor( Math.random()*6)+1;
	
document.querySelector(".dice").src = 'dice-' + diceNumber + '.png' 

	alert('Shoo buulaaa: ' + diceNumber);
});


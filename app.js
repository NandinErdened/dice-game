//Тоглогчийн  ээлжийг хадгалах хувьсагч , 1-р тоглогч 0. 2-р тоглогч 1
 
var acrivePlayer = 0;


//Тоглогчдийн оноог хадгалах хувьсагч

var scores = [0 , 0];



//Тоглогчийн ээлжиндээ цуглуулж буй оноог хадгалах хувьсагч

var roundScore = 0;



//Шоо аль талаараа буусанг хадгалах 1-6 гэсэн энэ утгуудыг санамсаргүйгээр үүсгэж өгнө





//Тоглоом эхлэхэд бэлдэж байна

document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";


document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display="none";
//Шоог хөдөлгөх
document.querySelector(".btn-roll").addEventListener('click' , function (){
	
	//1-6 доторх санамсаргүй тоог гаргаж ирнэ.
	var diceNumber = Math.floor( Math.random()*6)+1;  

	//Шооны зургийг веб дээр гаргаж ирнэ.
	diceDom.style.display="block";	

	//Буусан санамсаргүй тоогд харгалзах зургийг гаргах.
	diceDom.src = 'dice-' + diceNumber + '.png' 
	

//Ээлжийн оноог өөрчилнө. Буусан тоо нэгээс ялгаатай бол
	if(diceNumber !==1 ){
		//1-ээс ялгаатай буулаа. Буусан тоог тоглогчид нэмж өгнө.
		
		roundScore = roundScore + diceNumber;
		document.getElementById('current-'+ acrivePlayer).textContent = roundScore;


		 }else {
//1 буусан бол тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
//Энэ тоглогчийн оноог 0 болгоно
switchToNextPlayer();

	} 
});

// HOLD товчны event
		document.querySelector(".btn-hold").addEventListener("click", function(){
// eeljind ug toglogchiin tsugluulsan eeljiin onoog global onoonder n nemne
		scores[acrivePlayer] = scores[acrivePlayer] + roundScore;

// Дэлгэц дээрх тоог өөрчилнө
		document.getElementById('score-' +acrivePlayer).textContent = scores[acrivePlayer];

// Уг тоглогч хожсон эсэхийг шалгах
		if(scores[acrivePlayer]>=100){

			//ylagch
			document.getElementById('name-' + acrivePlayer).textContent = "WINNER!!!";
			document.querySelector('.player-' + acrivePlayer+ '-panel').classList.add('winner');
			document.querySelector('.player-' + acrivePlayer+ '-panel').classList.remove('active');

		}else{

		}

// Ээлжийн оноог 0 болгоно.
		switchToNextPlayer();
});

// Ээлж солих
function switchToNextPlayer(){
			roundScore = 0;
		document.getElementById('current-'+ acrivePlayer).textContent = roundScore;

//Тоглогчийн ээлжийн оноог нөгөө тоглогч руу шилжүүлнэ

//Хэрэв идэвхитэй тоглогч 0 байвал идэвхитэй тоглогчийг 1 болго
//Үгүй бол идэвхитэй тоглогчийг 0 болго		
		acrivePlayer===0 ? (acrivePlayer  = 1 ): (acrivePlayer = 0);
	

//Улаан цэгийг шилжүүлнэ
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
	
//Шоог түр алга болгох
		diceDom.style.display="none";

};

// shine togloom
document.querySelector('.btn-new').addEventListener('click' , function(){

})
//Тоглогчийн  ээлжийг хадгалах хувьсагч , 1-р тоглогч 0. 2-р тоглогч 1
 
var acrivePlayer = 1;


//Тоглогчдийн оноог хадгалах хувьсагч

var scores = [0 , 0];



//toglogchiin eeljindee tsugluulj bui onoog hadgalah huvisagch

var roundScore = 0;



//shoo ali talaaraa buusang hadgalah 1-6 gesen ene utguudiig sanamsarguigeer uusgej ogno

var dice = Math.floor( Math.random()*6)+1;
// window.document.querySelector('#score-0').textContent = dice;
// document.querySelector('#score-1').textContent = dice;
document.querySelector(".dice").style.display="none";
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
console.log('Шоо: '+ dice)
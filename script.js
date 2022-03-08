const shovel = document.querySelector('.tool1');
const tractor = document.querySelector('.tool2')
console.log(shovel);
const gardeningFork = document.querySelector('.tool3');
const wheelBarrow = document.querySelector('.tool4');
console.log(wheelBarrow);

const toolPhoto = document.querySelector('.tool-photo');
const toolContent = document.querySelector('.tool-content')

const headingName = document.querySelector('.heading-name');

const readAloud = document.querySelector('.btn');



shovel.addEventListener('click', function(shovel){
    shovel.preventDefault();
   toolPhoto.classList.toggle('shovel');
   headingName.textContent = 'Shovel';

   toolContent.textContent ='A shovel is a tool for digging, lifting, and moving bulk materials, such as soil, coal, gravel, snow, sand, or ore. Most shovels are hand tools consisting of a broad blade fixed to a medium-length handle. Shovel blades are usually made of sheet steel or hard plastics and are very strong.'


});


tractor.addEventListener('click', function(tractor){
    tractor.preventDefault();
   toolPhoto.classList.toggle('tractor');
   headingName.textContent = 'Tractor';

   toolContent.textContent = 'Tractors are generally associated with farming as farmers use them alongside machinery to perform implements like ploughing, tilling, sowing, and harrowing. In addition, a tractor is used for pushing or pulling the machinery, thereby making the farming operations more convenient.'

});



gardeningFork.addEventListener('click', function(gardeningFork){
    gardeningFork.preventDefault();
   toolPhoto.classList.toggle('gardening-fork');
   headingName.textContent = 'Gardening Fork';

   toolContent.textContent = 'It is used for loosening, lifting and turning over soil in gardening and farming, and not to be confused with the pitchfork, a similar tined tool used for moving (or throwing) loose materials such as hay, straw, silage, and manure. A garden fork is used similarly to a spade in loosening and turning over soil.'

});

wheelBarrow.addEventListener('click', function(wheelBarrow){
    wheelBarrow.preventDefault();
   toolPhoto.classList.toggle('wheel-barrow');
   headingName.textContent = 'Wheel Barrow';

   toolContent.textContent = 'Wheelbarrows are used for a variety of things, such as moving rock, mulch or compost to the garden, moving trees or large shrubs from one spot to another, hauling bricks, disposing of garden debris, or even for mixing concrete or fertilizers.'

});

readAloud.addEventListener('click',function (speak){
    let text = toolContent.textContent;
    console.log(text);

    console.log('sam');
    let speech = new SpeechSynthesisUtterance(text);
    let voices = window.speechSynthesis.getVoices();

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
    
});


// weather
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
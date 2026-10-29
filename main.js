const board= document.getElementById('astronaut_arr');
const bot= document.getElementById('bot');
const filter= document.getElementById('filter');

let _= '. . .      .           .            .                     . .         .          .         .                     .    .                .';
document.getElementById('background').textContent= _.repeat(1000);

const astronauts = [
  { name: "Ray", rol: "Pilote", exp: 7 }
];

function real_print(aaa,bbb,ccc)
{
  const exp_on= '<span class="exp_on">#</span>';
  const exp_off= '<span class="exp_off">#</span>';
  const display= `<li>
  <em class='li_ li_label'>Astronaut</em> <em class='li_ li_name'>${aaa}</em>, 
  <em class='li_ li_rol'>${bbb}</em> with ${exp_on.repeat(ccc)}${exp_off.repeat(10-ccc)}
  </li>`;
  return display;
}

function print()
{
board.innerHTML= '';
for( let x of astronauts )
{
  const display= real_print(x.name,x.rol,x.exp);
  board.insertAdjacentHTML('beforeend',display);
}
}
print();



document.getElementById('inp_but').addEventListener('click',function()
{
  _name= document.getElementById('inp_name').value;
  _rol= document.getElementById('inp_rol').value;
  _exp= document.getElementById('inp_exp').value;

  bot.classList.add('popup');
  setTimeout(function(){ bot.classList.remove('popup'); },2000);
  if( _name.length!==0 && _rol.length!==0 && 1<=_exp && _exp<=10)
  {
    bot.style.color= 'rgb(0,255,0)';
    bot.textContent= 'Astronaut added';

    astronauts.push({name:_name,rol:_rol,exp:_exp});
    print();
  }
  else{ bot.textContent= 'You must fill all the inputs'; bot.style.color= 'rgb(255,85,0)'; }
});


filter.addEventListener('click',function()
{

for( let x of astronauts )
{
  if( filter.value===x.rol.toLowerCase() )
  {
    board.innerHTML= '';
  const display= real_print(x.name,x.rol,x.exp);
  board.insertAdjacentHTML('beforeend',display);
  }
  if( filter.value==='all' ){ print(); }
}

});




console.log(
  '\n\n%c  🥷 www.x-ray.world  %c\n\n',
  `
    background: linear-gradient(135deg, #1f005c, #5b0060, #870060, #ac005c, #c8004b, #e10032, #f51f16, #f94b00);
    
    font-size: 40px;
    color:white;
    font-weight: 900;
    font-family: 'Courier New', monospace;
    text-transform: uppercase;
    letter-spacing: 5px;
    padding: 25px 40px;
    border: 4px solid #00ffff;
    border-radius: 15px;
    
    /* Extreme 3D Glitch Depth Effect */
    text-shadow: 
      -3px -3px 0 #ff00ff,  /* Cyan/Magenta offset */
      3px 3px 0 #00ffff,
      6px 6px 0 #1f005c,    /* Dark shadow depth */
      9px 9px 20px rgba(255, 0, 255, 0.7); /* Neon blur glow */
      
    box-shadow: 
      0 0 30px rgba(0, 255, 255, 0.6), 
      inset 0 0 20px rgba(255, 0, 255, 0.4);
  `,
  'background: transparent;' // Resets style for trailing log lines
);





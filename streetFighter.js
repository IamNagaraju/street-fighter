let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
let position = [0,0];
let moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right'];


function streetFighterSelection(fighters, position, moves){
let selections = [];

for (var i = 0; i < moves.length; i ++){
  if(moves[i] == 'up'){
    position[0]=0; 
  } else if(moves[i] =='down') {
    position[0]=1;
  } else if(moves[i] == 'right') {
   position[1] = (position[1] == 5) ? 0 : position[1]+=1;

  } else {
    position[1] = (position[1] == 0) ? 5 : position[1]-=1;
  }
  selections.push(fighters[position[0]][position[1]]);
}

return selections;
}

console.log(streetFighterSelection(fighters, position, moves));
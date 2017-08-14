function simplePluralHandler(i, string){
  if(i>1 || i===0) { // cuz the song says "no more bottle's'"
    return (string + 's');
  } else {
    return string;
  }
};
function zeroHandler(i) {
  if( i===0 ) {
    return "No more";
  } else {
    return i;
  }
}
function switchHandler(i) {
  if(i===0) {
    return 'Go to the store and buy some more'
  } else {
    return 'Take one down and pass it around'
  }
}
const context = {
  name:'beer',
  unit:'bottle',
  quantity:99
}
// just for fun
const m = String.fromCharCode(0x266C);
const mHead = m.repeat(4)+'  ';
console.log(m.repeat(30)+'\n'+"    99 Bottles of Beer"+'\n'+m.repeat(30));

let name = context.name;
let i = context.quantity;
for (i; i>=0; i--) {
  let startUnit=simplePluralHandler(i, context.unit);
  let endUnit=simplePluralHandler(i, context.unit);
  let quantI = zeroHandler(i)
  let quantII = zeroHandler(i-1)
  if (quantII===-1){
    quantII=context.quantity;
  }
  console.log(
    `${mHead}${quantI} ${startUnit} of ${name} on the wall, ${quantI} ${startUnit} of ${name}.${'\n'}${mHead}${switchHandler(i)}, ${quantII} ${endUnit} of ${name} on the wall.${'\n'}`
  );
}

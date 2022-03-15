// SPREAD & DESTRUCTURING WITH FUNCTIONS EXERCISE
const jPDinos = [
    "Velociraptors",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
  ];
  
  function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
  }
  seeDinos(...jPDinos);
  /*
  Velociraptors
  [ 'Tyrannosaurus Rex', 'Dilophosaurus' ]
  */
  
  console.log(`===============`);
  
  const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
  };
  
  seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
  }
  seeCharacters(jPCharacters); // Laura Dern
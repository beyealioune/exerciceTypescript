interface AnimauxInterface {
    pattes : number;
    couleur : string;
}


class Animaux implements AnimauxInterface {
pattes: number;
couleur: string;

constructor(pattes : number , couleur : string){
    this.pattes = pattes;
    this.couleur = couleur;

}
}


class Chat extends Animaux {

}

class chatChartreux extends Chat {

}
class chatEuropeen extends Chat {

}

class Chien extends Animaux {

}

class Oiseaux extends Animaux {

}
class Poisson extends Animaux {

}




function photographier(animaux: Animaux) {
  console.log("Quel belle photo");
}

function miauler(chat: Chat) {
    console.log("Miaou");
  }
  
  function aboyer(chien: Chien) {
    console.log("waf waf");
  }
  
  function voler(oiseaux: Oiseaux) {
    console.log("je vole");
  }
  
  
  function nager(poisson: Poisson) {
    console.log("je nage");
  }

  function caress(Animaux){
    if(Animaux.pattes === 4){
        console.log("bravo");
    } else { console.log("pas bravo")}

  }
 function nourrir(animaux){
    if(animaux.couleur === "noire"){
    console.log('je te nouris')}
    else { console.log("je te nouris pas")};
 }



const rex = new Chat(0,"rouge");
caress(rex);
// class Chat extends Animaux {

// }



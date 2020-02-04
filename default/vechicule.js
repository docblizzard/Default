class Vehicule {
    constructor(name) {
        this.name = name || "vehicule";
    }
    

}


class Voiture extends Vehicule {
    
    constructor(name) {
        super(name || "vehicule");
        this.name = "voiture";    
        this.roues = 4;
        this.porte = 5;
        this.moteur = {
            puissance: 60,
            marche: false,
        };
        this.voyants = {
            marche: false
        };    
    }
    
    contact() {
        console.log("on allume le contact");        
        
    }
    allumerLesVoyants(){
        console.log("les voyants s'allument");
       this.allumerLesVoyants();
    }
        
    demarre() {
        console.log("Démarre le moteur");
        this.moteur.marche = true;    
    }
    
    coupe() {
        console.log("On coupe le moteur");
        this.moteur.marche = false;    
    }
    
    decontact() {
        this.eteindreLesVoyants() {
            console.log(" les voyants s'éteignent");
    }   


}   
 class Sportive extends Voiture {
    constructor(name) {
        super(name || "sportive");
        this.name = "sportive";
        this.moteur.puissance = 450;
        this.porte = 3;
    }
    
    
}    
const test_vehicule = () => {
    
    console.log("test vehicule");
    
    let maVoiture = new Voiture(); // let maVoiture = new Sportive("ma porsche");
 // let test2 = new Voiture();
    console.log(maVoiture.moteur.marche);
    
    maVoiture.contact();     
    maVoiture.demarre();
    console.log(maVoiture.moteur.marche);
    
    let usine = [];
    for (let i= 0; i < 10 000 ; i ++) usine.push(new.Sportive() );
    console.log(usine);
};

// Constructeur peut prendre des arguments

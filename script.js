class Killer {
    fazerSom() {
        return "Algum som genérico...";
    }

    emitirSom(volume) {
        // Sobrecarga simulada
        if (!volume) return this.fazerSom();
        if (volume === "baixo") return this.fazerSom().toLowerCase();
        if (volume === "alto") return this.fazerSom().toUpperCase() + "!!!";
    }
}

class Noli extends Killer {
    fazerSom() {
        return "*Glitch* TIME-E-E FOR SOME.. *Glitch* MURDER-R-ER! *Damn daniel laugh SFX* >:D*";
    }
}

class Coolkid extends Killer {
    fazerSom() {
        return "I'M TELLING DAD!";
    }
}

class Evilshed extends Killer {
    fazerSom() {
        return "This is, MASS INFECTION!";
    }
}

class Johndoe extends Killer {
    fazerSom() {
        return "Next time, try THREE LIVES!"
    }
}

class Coolkidm4 extends Killer {
    fazerSom() {
        return "Ring around the rosies... *laughter*"
    }
}

class Devesto extends Killer {
    fazerSom() {
        return "Today's the first day of the end of your l-l-lives! *Monster Mash music"
    }
}   

class Divadayo extends Killer {
    fazerSom() {
        return "Forsaken? More like your mo- *Static*"
    }
}

class Mafioso extends Killer {
    fazerSom() {
        return "Men, stand your ground."
    }
}

class Gasharpoon extends Killer {
    fazerSom() {
        return "The fault lies with you, Ishmael"
    }
}

const selectKiller = document.getElementById("killerSelect");
const selectVolume = document.getElementById("volumeSelect");
const btnSom = document.getElementById("btnSom");
const resultado = document.getElementById("resultado");
const img = document.getElementById("killerImg");

btnSom.addEventListener("click", () => {
    const tipo = selectKiller.value;
    const volume = selectVolume.value;

    let killer;
    switch (tipo) {
        case "noli":
            killer = new Noli();
            img.src = "a-noli-skin-was-one-of-the-things-showcased-so-that-means-v0-gaoqb4y7qm0f1.png";
            tocarSom(somNoli);
            break;
        case "coolkid":
            killer = new Coolkid();
            img.src = "TheCoolestKidRender.webp";
            tocarSom(somKid)
            break;
        case "evilshed":
            killer = new Evilshed();
            img.src = "My_Goat.webp";
            tocarSom(somShed)
            break;
        case "johndoe":
            killer = new Johndoe();
            img.src = "NewiconjohnDoe.webp";
            tocarSom(somDoe)
            break;
        case "coolkidm4":
            killer = new Coolkidm4();
            img.src = "Ms4icon.webp";
            tocarSom(somKidm4)
            break;
        case "devesto":
            killer = new Devesto();
            img.src= "Devesto_Noli_V2.webp";
            tocarSom(somDevesto)
            break;
        case "diva":
            killer = new Divadayo();
            img.src= "Mikukid.webp";
            tocarSom(somDiva)
            break;
        case "mafioso":
            killer = new Mafioso();
            img.src= "MafiosoCropped_Render.webp";
            tocarSom(somMafioso)
            break;
        case "pirate":
            killer = new Gasharpoon();
            img.src="John_doe_pirate_skin.webp";
            tocarSom(somPirate)
            break;

        default:
            resultado.textContent = "Selecione um killer!";
            img.classList.remove("show");
            return;
    }

    resultado.textContent = killer.emitirSom(volume);
    img.classList.add("show");

});

// Sons
const somNoli = new Audio('Introduction.ogg');

function tocarSom(somNoli) {
    somNoli.currentTime = 0;
    somNoli.play();
}

const somKid = new Audio('Coolkid_stun2.mp3');

function tocarSom(somKid) {
    somKid.currentTime = 0;
    somKid.play();
}

const somShed = new Audio('Massinfection.mp3');

function tocarSom(somShed) {
    somShed.currentTime = 0;
    somShed.play();
}

const somDoe = new Audio('NEXT_TIME_TRY_3_LIFE.mp3')

function tocarSom(somDoe) {
    somDoe.currentTime = 0;
    somDoe.play();
}

const somKidm4 = new Audio('Milestone4c00lkiddEditedIdle1.mp3')

function tocarSom(somKidm4) {
    somKidm4.currentTime = 0;
    somKidm4.play();
}

const somDevesto = new Audio('Devestointro.mp3')

function tocarSom(somDevesto) {
    somDevesto.currentTime = 0;
    somDevesto.play();
}

const somDiva = new Audio('DivaDayoIdle6.mp3')

function tocarSom(somDiva) {
    somDiva.currentTime = 0;
    somDiva.play();
}

const somMafioso = new Audio('Mafiosointro1.mp3')

function tocarSom(somMafioso) {
    somMafioso.currentTime = 0;
    somMafioso.play();
}

const somPirate = new Audio('Gasharpoon_intro_1.wav')

function tocarSom(somPirate) {
    somPirate.currentTime = 0;
    somPirate.play();
}
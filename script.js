const img = document.querySelector("#img");
const buttons = document.querySelector("#buttons");
let indexPicture = 0;
let intervalId = null;

/*Funções*/

const famyliSlide = (event) => {
    stopAutomatic();
    famyli[event.target.id]();
    
   
};

const nextPicture = () =>{
    if (indexPicture < 2) {
        indexPicture++
    }else{
        indexPicture = 0;
    }
    
};

const famyliOliveira = () =>{
    const pictures = ["dad","mother","son"];
    const picture = pictures[indexPicture];
    famyli[picture]();
    nextPicture(); 
};

const stopAutomatic = () =>{
    clearInterval(intervalId);

};

const famyli =  {
    "dad":       () => img.src = "./pai.jpg",
    "mother":    () => img.src = "./mãe.jpg",
    "son":       () => img.src = "./filho.jpg",
    "automatic": () => intervalId = setInterval(famyliOliveira,1000),
};

/*eventos*/

buttons.addEventListener("click",famyliSlide);


const Display = document.getElementById("Display")
var Resultado = 0

function AdicionarDisplay(input){
    if(Display.textContent == 0){
        Display.textContent = "";
        Display.textContent += input;
    }else{
        Display.textContent += input;
    }
}
function DeletarDisplay(){
    Display.textContent = "0";
}
function Somar(){
    Resultado = eval(Display.textContent);
    Display.textContent = Resultado
}
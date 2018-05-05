function operacion(){
    
    var a = document.getElementById('cajatextoa').value;
    var b = document.getElementById('cajatextob').value;
    var c = document.getElementById('cajatextoc').value;
   
   
    Resultado=((b*b)-4*a*c);
   
    if(Resultado<0){
        
    alert("No hay solucion");

    }
    
    else{
        
        x1=(-b+(Math.sqrt(Resultado))/(2*a));
        x2=(-b-(Math.sqrt(Resultado))/(2*a));
        
        
         Resultado1 = document.getElementById('cajatexto4').value = x1;
         Resultado2 = document.getElementById('cajatexto5').value = x2;
    }
    return false;     
}

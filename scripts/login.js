form.addEventListener('submit',function LocalStorage(){
           
    //captura de datos y almacenamiento en variables
    let user = document.querySelector('#user').value;
    let contraseña = document.querySelector('#pass').value;


    //validación de campos vacíos
    if(user=="" || contraseña==""){
         alert('Ingresar todos los campos');
         return true;
    }
    else{
        if(isNaN(user)){
            localStorage.setItem("Usuario", user);
            localStorage.setItem("Contraseña", contraseña);
            getLocalStorage();
        }else{
             alert("INCORRECTO");
        }
        return false;
    }

    
})

//Obtener la información del local storage//
function getLocalStorage(){
    let userSave = localStorage.getItem("Usuario");
    let contraSave = localStorage.getItem("Contraseña");
    alert(`La información del login es: 
    User- ${userSave},
    Contraseña- ${contraSave}`);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script carregado!")//Teste

    const email = document.querySelector("#email")
    const password = document.querySelector("#senha")

    //Botão de entrar
    document.querySelectorAll('button')[0].addEventListener("click", ()=>{
        if(email.value.length < 10 || password.value <8){
            console.log("Por favor preencha os campos");
        }
        else{
            document.getElementById("loginForm").addEventListener("submit", (event)=>{
                event.preventDefault()
                //Emails para exemplificação
                let email_client = 'cliente@email.com'
                let email_super = 'supermarket@email.com'
                let email_suport = 'suporte@email.com'
                //Senhas para exemplificação
                let passw_client = '$%k01jh#'
                let passw_super = '%$b04jh#'
                let passw_suport = 'ag$%#hj09'

                if(email.value == email_client || password.value == passw_client){
                    console.log("Cliente acessado" + " Email: " + email.value + " Senha: " + password.value);

                    location.href = 'cliente/index.html'
/*
                    document.getElementById("loginForm").style.display = 'none'
                    const img = document.createElement('img')
                    img.id = 'slogan'
                    img.src = '../imagens/store-min.png'
                    img.style.zIndex = 1
                    img.width = 20
                    img.height = 20
    
                    document.querySelector('body').appendChild(img)

                    setTimeout(()=>{
                        
                    },2000)*/
                }
                else if(email.value == email_super || password.value == passw_super){
                    console.log("Supermercado acessado" + " Email: " + email.value + " Senha: " + password.value);

                    document.getElementById("loginForm").style.display = 'none'
                    
                    const img = document.createElement('img')
                    img.id = 'slogan'
                    img.src = 'imagens/store-min.png'
                    img.style.zIndex = 1
                    img.width = 20
                    img.height = 20
    
                    document.querySelector('body').appendChild(img)

                    setTimeout(()=>{
                        location.href = 'supermercado/index.html'
                    },2000)
                }
                else if(email.value == email_suport || password.value == passw_suport){
                    console.log("Suporte acessado" + " Email: " + email.value + " Senha: " + password.value);
                    /*
                    document.getElementById("loginForm").style.display = 'none'
                    
                    const img = document.createElement('img')
                    img.id = 'slogan'
                    img.src = '../imagens/store-min.png'
                    img.style.zIndex = 1
                    img.width = 20
                    img.height = 20
    
                    document.querySelector('body').appendChild(img)

                    setTimeout(()=>{
                        location.href = '../suporte/'
                    },2000)*/
                }
            })
        }
    })

});//Carregamento

function Register() {
/*Essa função redireciona para a tela de escolha entre supermercado e comprador*/
setTimeout(()=>{
    location.href = '../choose.html'
}); 
}
const inputField= document.querySelector('input');

const button=document.querySelector('button');
button.addEventListener('click',function(){
    inputField.value=generatePassword();
    alertBox.style.display='none';
});

var copiedText= document.querySelector('#copied-text');
const copyButton= document.querySelector('.copy-icon');

copyButton.addEventListener('click', handleCopyText);
inputField.addEventListener('click', handleCopyText);

function handleCopyText(){
    if(inputField.value!=""){
        inputField.select();
        document.execCommand('copy');
        copiedText.style.display = 'inline';
        copyButton.style.visibility='hidden';
        console.log(copiedText.style.display);
        setTimeout(() => {
            copiedText.style.display = 'none';
            copyButton.style.visibility='visible';
        }, 3000);
    }
    else{
        alertContainer();
    }

}

function generatePassword(){
    var lowercaseLetters=Array.from({length:26}, (_,index)=>
    String.fromCharCode(95+ index)
);
    var CapitalLetters= Array.from({length:26}, (_,index)=>
        String.fromCharCode(65+ index)
    );
    var numbers= Array.from({length:10},(_, index)=>index);
    var specialCharacters=['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '<', '>', ',', '.', '/', '?', '`', '~'];
    var password="";
    for(let i=0; i<4; i++){
        password= password+ lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)];
        password= password+ CapitalLetters[Math.floor(Math.random()*CapitalLetters.length)];
        password= password+ numbers[Math.floor(Math.random()*numbers.length)];
        password= password+ specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
    }
    return password;
}

const progress= document.querySelector('.progress-bar');

function progressBar(){
    let width=null;
    setInterval(()=>{
        if (width >= 100) {
            clearInterval()}
        else{
            width++;
            progress.style.width= width + '%';
        }
    }, 85);
}

var alertCloseButton= document.querySelector('.alert-close');
var alertMessage= document.querySelector('.alert-message');
var alertBox= document.querySelector('.alert-container');
function alertContainer(){
    alertBox.style.display='block';
    progressBar();
    alertMessage.innerHTML="Generate a password first";
    setTimeout(()=>{
        alertBox.style.display='none';
    }, 9700);
    
}



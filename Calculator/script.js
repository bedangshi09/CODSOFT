let input=document.getElementById('calc');
let buttons=document.querySelectorAll('button');
let string="";
let arry=Array.from(buttons);
arry.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML =='Clear'){
              string="";
              input.value=string;
        }
        else if(e.target.innerHTML == 'del'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
})
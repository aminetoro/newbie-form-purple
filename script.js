document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    /* image selection */
    const errorimg = document.createElement('img');
    errorimg.src = './images/icon-error.svg';
    errorimg.classList.add('errorimg');
    /* select input values */
    const infoForm = [...e.target];
    /* select input Names */
    const errornames = infoForm.map((el)=>{console.log(el.name)});
    /* delete error messages */
    if(document.querySelectorAll('.formaterror')){
        document.querySelectorAll('.formaterror').forEach(el=>{
              el.remove();
        })
    }
    if(document.querySelectorAll('.errorimg')){
        document.querySelectorAll('.errorimg').forEach(el=>{
              el.remove();
        })
    }
    /* loop trough array to handle errors */
    infoForm.forEach((el,index)=>{
        const elvalue = el.value; 
        if(!elvalue){
        const errormsg = `${el.name} cannot be empty`;
        const error = document.createElement('div');
        error.classList.add('formaterror');
        error.innerHTML = errormsg;
        document.forms[0].querySelectorAll('.form-control')[index].insertAdjacentElement('afterbegin',errorimg.cloneNode());
        document.forms[0].querySelectorAll('.form-control')[index].insertAdjacentElement('afterend',error);
        
        }else if(el.classList[0] === 'email'){
            if(!validateEmail(el.value)){
        const errormsg = `Looks like an invalid email`;
        console.log('ami');
        const error = document.createElement('div');
        error.classList.add('formaterror');
        error.innerHTML = errormsg;
        document.forms[0].querySelectorAll('.form-control')[index].insertAdjacentElement('afterend',error);
        document.forms[0].querySelectorAll('.form-control')[index].insertAdjacentElement('afterbegin',errorimg);
                }
        }else{
           /* insert Element into  */

        }
        
    })
    
    /* regular expression function for email */
    function validateEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
})   
   
 

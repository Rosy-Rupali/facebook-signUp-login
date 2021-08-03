window.addEventListener('DOMContentLoaded', (event) => {

    const firstName = document.querySelector('#firstName');
    const textError = document.querySelector('.name-error');
    firstName.addEventListener('input', function () {
      if (firstName.value.length == 0) {
        textError.textContent = "";
        return;
      }
      try {
        (new SignUpUpdate()).firstName = firstName.value;
        textError.textContent = "";
      } catch (e) {
        textError.textContent = e;
      }
    })

    const phoneElement=document.querySelector('#phone');
    const phoneError=document.querySelector('.mobile-error');
    phoneElement.addEventListener('input',function(){
        try{
            (new SignUpUpdate()).mobileNumber=phoneElement.value;
            phoneError.textContent="";
        }catch(e){
            phoneError.textContent=e;
        }
    })
});

    const SignUp =()=>{
        try{
          let signupData=createSignupData();
          createAndUpdateStorage(signupData);
        }catch(e){
            console.log(e);
            return;
        }
      
    }

    const createSignupData=()=>{
        let signup=new SignUpUpdate();
        signup.firstName=document.querySelector('#firstName').value,
        signup.mobileNumber=document.querySelector('#phone').value,
        signup.surname=document.querySelector('#surname').value,
        signup.email=document.querySelector('#mail').value,
        signup.password=document.querySelector('#pass').value
        alert(JSON.stringify(signup));
        return signup;
      }

      const createAndUpdateStorage=(signupData)=>{
        let signupList=JSON.stringify(localStorage.getItem("SignUpList"));
        if(signupList != "null") signupList.push(signupData);
        else signupList=[signupData];
        alert(signupList.toString());
        localStorage.setItem("SignUpList",JSON.stringify(signupList));
    }
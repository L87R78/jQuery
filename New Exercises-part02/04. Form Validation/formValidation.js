function  validate() {
    let userName = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckBox = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let submitBtn = $('#submit');
    let validationDiv = $('#valid');

    let hasAllIsValid = true;
    let savePassword = '';

    companyCheckBox.on('change',  function () {
        if(companyCheckBox.is(':checked')){
            companyInfo.css('display', 'block');
        }else{
            companyInfo.css('display', 'none')
        }
    });

    submitBtn.on('click',  function (ev) {
        ev.preventDefault();
        getUserName();
        getEmail();
        getPassword();
        getConfirmPassword();
        getCompanyNumber();
        result();
    });




    function getUserName() {
        let name = userName[0].value;
        let regex = /^[A-Za-z0-9]{3,20}$/;
        let checkName = regex.test(name);

        if(checkName){
            userName.css('border-color', 'none');
        }else{
            userName.css('border-color', '#ff0000');
            hasAllIsValid = false;
        }
    }
    function getEmail() {
        let getEmail = email[0].value;
        let regex = /[a-zA-Z0-9_]+@\..+/;
        let checkEmail = regex.test(getEmail);

        if(checkEmail){
            email.css('border-color', 'none');
        }else{
            email.css('border-color', '#ff0000');
            hasAllIsValid = false;

        }
    }
    function getPassword() {
        let getPassword = password[0].value;
        savePassword = getPassword;

        let regex = /^[a-zA-Z0-9_]{5,15}$/;
        let checkPassword = regex.test(getPassword);
        if(checkPassword){
            password.css('border-color', 'none');
        }else{
            password.css('border-color', '#ff0000');
            hasAllIsValid = false;
        }
    }
    function getConfirmPassword() {
        let getComPassword = confirmPassword[0].value;


        let regex = /^[a-zA-Z0-9_]{5,15}$/;
        let checkComPassword = regex.test(getComPassword);
        if(checkComPassword === true && savePassword === getComPassword && savePassword.length === getComPassword.length){
            confirmPassword.css('border-color', 'none');
        }
        else{
            confirmPassword.css('border-color', '#ff0000');
            hasAllIsValid = false;
        }
    }
    function getCompanyNumber() {
        let getCompanyNumber = Number(companyNumber[0].value);
        if(getCompanyNumber >= 1000 && getCompanyNumber <= 9999){
            companyNumber.css('border-color', 'none');
        }else{
            companyNumber.css('border-color', '#ff0000');
            hasAllIsValid = false;
        }
    }

  function result() {
      if(hasAllIsValid === true){
          validationDiv.css("display", "block");
      }else{
          validationDiv.css("display", "none");
      }
  }
}
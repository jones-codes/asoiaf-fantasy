Template.Register.events({
    'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var trimInput = function(val) {
        return val.replace(/^\s*|\s*$/g, "");
        }
        var isValidPassword = function(val) {
        return val.length >= 6 ? true : false; 
    }
    emailVar = trimInput(emailVar);
    if(isValidPassword(passwordVar)){
        Accounts.createUser({
        email: emailVar,
        password: passwordVar}, 
        function(error){
          if (error)
          return "The user account creation has failed.";
          else
          return "Success. Account has been created and user has logged in successfully";
        });
    }
    
        return false;
    
    }
});
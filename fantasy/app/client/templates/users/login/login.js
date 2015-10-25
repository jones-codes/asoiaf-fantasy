Template.Login.events({
    'submit form': function(event) {
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;
      var trimInput = function(val) {
        return val.replace(/^\s*|\s*$/g, "");
      }
      emailVar = trimInput(emailVar);
      Meteor.loginWithPassword(emailVar, passwordVar, function(error){
        if(error)
         return "Your login attempt has failed.";
        else
        return "You are now logged in.";
      });
      return false;
    }
});
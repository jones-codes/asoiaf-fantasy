Template.WarriorsList.helpers({
    warriors: function () {
      //Show highest rank at the top
      var currentUserId = Meteor.userId();
      return Warriors.find({draftedBy: undefined}, {sort: {rank: 1}});
      //return Warriors.find({claimedBy: currentUserId}, {sort: {rank: +1}});
    },
    'selectedClass': function () {
      var warriorId = this._id;
      var selectedWarrior = Session.get('selectedWarrior');
      if(warriorId == selectedWarrior){
        return "selected"
      }
    }
});
  
Template.WarriorsList.events({

    'click .warrior': function(){
      var warriorId = this._id;
      Session.set('selectedWarrior', warriorId);
    },
    'click .remove': function(){
      var selectedWarrior = Session.get('selectedWarrior');
      Meteor.call('removeWarriorData', selectedWarrior);
    },
    'click .draft': function(){
      var selectedWarrior = Session.get('selectedWarrior');
      Meteor.call('draftWarrior', selectedWarrior);
    }
    
    /*'submit .new-warrior': function (event) {
  // Prevent default browser form submit
  event.preventDefault();
  
  // Get value from form element
  var text = event.target.text.value;
  rank = rank + 1;
  //Isert a Warrior into the collection
  Warriors.insert({
    name: text,
    rank: rank,
    createdAt: new Date() //current time
  });
  
  // Clear form
  event.target.text.value = "";

},
*/
});
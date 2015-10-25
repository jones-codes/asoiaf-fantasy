Template.CurrentTeam.helpers({
    currentWarriors: function () {
      //Show highest rank at the top
      var currentUserId = Meteor.userId();
      return Warriors.find({draftedBy: currentUserId}, {sort: {rank: 1}});
    }
});
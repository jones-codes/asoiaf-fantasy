/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
    'draftWarrior': function(selectedWarrior){
      var currentUserId = Meteor.userId();
      Warriors.update(selectedWarrior, {$addtoSet: {draftedBy: currentUserId}});
    },
    'insertWarriorData': function(warriorNameVar, rankVar, weaponVar, armorVar){
      var currentUserId = Meteor.userId();
      rankVar = Number(rankVar);
      Warriors.insert({
        name: warriorNameVar,
        rank: rankVar,
        weapon: weaponVar,
        armor: armorVar,
        createdBy: currentUserId
      });
    },
    'removeWarriorData': function(selectedWarrior){
      var currentUserId = Meteor.userId();
      Warriors.remove(selectedWarrior);
      //Warriors.remove({_id: selectedWarrior, createdBy: currentUserId});
    }
    
});


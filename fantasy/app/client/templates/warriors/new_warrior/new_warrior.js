 Template.NewWarrior.events({
    'submit form': function(event){
      event.preventDefault();
      var warriorNameVar = event.target.warriorName.value;
      var rankVar = event.target.rank.value;
      var weaponVar = event.target.weapon.value;
      var armorVar = event.target.armor.value;
      
      Meteor.call('insertWarriorData', warriorNameVar, rankVar, weaponVar, armorVar);
      event.target.warriorName.value = "";
      event.target.rank.value = "";
      event.target.weapon.value = "";
      event.target.armor.value = "";
      
     }
  });
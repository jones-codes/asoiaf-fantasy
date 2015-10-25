
/*global Warriors*/
Warriors = new Mongo.Collection('warriors');


if (Meteor.isServer) {
  /*
  Meteor.publish('theWarriors', function(){
    return Warriors.find();
  });
  
  
  Warriors.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Warriors.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
  */
}

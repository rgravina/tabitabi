import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (this.get("session").get("isAuthenticated")) {
      console.log("Authenticated.")
    };
  },
  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", {provider: provider}).then(function(data) {
        //console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});

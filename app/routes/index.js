import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (this.get("session").get("isAuthenticated")) {
      this.transitionTo("home");
    }
  },
  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", {provider: provider}).then(() => {
        this.transitionTo("home");
      });
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  showWhyLogin: false,
  actions: {
    toggleShowWhyLogin() {
      this.set('showWhyLogin', !this.get('showWhyLogin'));
    }
  }
});
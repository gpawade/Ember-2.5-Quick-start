import Ember from 'ember';

export default Ember.Controller.extend({
    
     actions:{
        saveuser(){
            var username = this.get("username");
            if(username){
                var obj = this.store.createRecord("user", {
                    name : username
                });
                obj.save().then(()=>{
                    this.transitionToRoute("user");
                });
            }
            return false;
        }
    }
});

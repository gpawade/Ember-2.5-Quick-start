import DS from 'ember-data';

export default DS.Adapter.extend({
    user : Ember.A(),
    
    init(){
        this.get("user").pushObject({ name : 'john', id:1});
    },
    // findRecord()
    createRecord(store, type, snapshot){
        
         var deferred = Ember.RSVP.defer();
         
             Ember.run(()=>{
                  var user = this.get("user");
             user.pushObject({
                 name : snapshot.name,
                 id : user.length
             });
             
                 
                 deferred.resolve();
             });
             
         return deferred.promise;
    },
    // updateRecord()
    // deleteRecord()
    findAll(store, type){
        return this.get('user');
    }
    // query()
        
});

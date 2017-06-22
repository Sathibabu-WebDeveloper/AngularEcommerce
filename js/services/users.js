
 app.factory('users', function($http,$firebaseArray,$firebaseObject,Session){

        var ref = firebase.database().ref().child("users"); 
        var users = $firebaseArray(ref);
        var key;

        return {
          signup: function(user) {             
              users.$add({
                name: user.username,
                email: user.email,
                password: user.password 
              }).then(function(ref) {   
                key = ref.key;
                Session.create(key);    
               // console.log('Added:',key);
              })
              return key;
          },
          signin: function(id) {
              var data = ref.child(id);             
              return $firebaseArray(data);
          },
          isAuthenticated:  function () {
            return !!Session.key;
          }
        };

 });
 


 app.service('Session', function () {
  this.create = function (key) {
    this.key = key;   
  };
  this.destroy = function () {
    this.key = null;   
  };
})
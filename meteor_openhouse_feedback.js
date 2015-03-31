OpenHouseList = new Mongo.Collection("openhouses");
if (Meteor.isServer) {
  console.log("server code ...");
  //OpenHouseList.remove({});
  if (!OpenHouseList.findOne()) {
    OpenHouseList.insert({
      id : 1,
      address : "1234 Main St",
      city : "Omaha",
      state : "NE",
      zipCode : "12345"

    });

    OpenHouseList.insert({
      id : 2,
      address : "3344 Shorelines",
      city : "Miami",
      state : "FL",
      zipCode : "99100"

    });

    OpenHouseList.insert({
      id : 3,
      address : "100 Main Lane",
      city : "Kansas City",
      state : "MS",
      zipCode : "99741"

    });

  }
  
}

if (Meteor.isClient) {
  //console.log("Hello Client");
  
  // helpers for openhouse template
  Template.openhouse.helpers ({
    'text1' : function() {
        return "Listings";
    },
    'listings' : function() {
        return OpenHouseList.find();
    }
    
  });
  
  //events for openhouse template
  Template.openhouse.events({
    // events go here
    'click ul': function(item) {
      console.log('you clicked the openhouse template....' + item.target.textContent);
    }
    
  });
  
}
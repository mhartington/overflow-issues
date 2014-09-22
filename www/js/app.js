// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('PlaylistsCtrl', function($scope) {
	    $scope.playlists = [
		          { title: 'Reggae', id: 1 },
			        { title: 'Chill', id: 2 },
			        { title: 'Dubstep', id: 3 },
					      { title: 'Indie', id: 4 },
					      { title: 'Rap', id: 5 },
						            { title: 'Cowbell', id: 6 },
						            { title: 'Breaks', id: 7 },
								          { title: 'Jungle', id: 8 },
								          { title: 'Drum & Bass', id: 9 },
										        { title: 'Classics', id: 10 },
										        { title: 'Blah', id: 11 },
												      { title: 'Foo', id: 12 },
												      { title: 'Bar', id: 13 },
													            { title: 'House', id: 14 },
													            { title: 'Trance', id: 15 },
															          { title: 'EDM', id: 15 },
															          { title: 'Country', id: 16 },
																	        { title: 'Rock', id: 17 }
	        ];
		  })

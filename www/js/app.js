// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('intuu', ['ionic', 'starter.controllers', 'UserApp'])

.run(function($ionicPlatform, user) {
  // UserApp
  user.init({ appId: '54512f0eb2a76' });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl',
      data: {
        public: true
      }
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent' :{
          templateUrl: 'templates/login.html'
        }
      },
      data: { login: true }
    })

    .state('app.signup', {
      url: '/signup',
      views: {
        'menuContent' :{
          templateUrl: 'templates/signup.html'
        }
      },
      data: { public: true }
    })

    .state('app.cuestionario', {
      url: '/cuestionario',
      views: {
        'menuContent' :{
          templateUrl: 'templates/cuestionario.html'
        }
      },
      data: { public: true }
    })
    .state('app.q1', {
      url: "/cuestionario/1",
      views: {
        'menuContent' :{
          templateUrl: "templates/q1.html"
        }
      },
      data: { public: false }
    })
    .state('app.q2', {
      url: "/cuestionario/2",
      views: {
        'menuContent' :{
          templateUrl: "templates/q2.html"
        }
      }
    })
    .state('app.q3', {
      url: "/cuestionario/3",
      views: {
        'menuContent' :{
          templateUrl: "templates/q3.html"
        }
      }
    })
    .state('app.q4', {
      url: "/cuestionario/4",
      views: {
        'menuContent' :{
          templateUrl: "templates/q4.html"
        }
      }
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.magazine', {
      url: "/magazine",
      views: {
        'menuContent' :{
          templateUrl: "templates/magazine.html"
        }
      }
    })
    
    .state('app.map', {
      url: "/map",
      views: {
        'menuContent' :{
          templateUrl: "templates/map.html"
        }
      }
    })

    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cuestionario/1');
});


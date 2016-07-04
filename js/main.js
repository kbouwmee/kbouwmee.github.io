'use strict';

if('serviceWorker' in navigator) {
  console.log('Service Worker is supported');
  navigator.serviceWorker.register('sw.js').then(function(reg) {
    console.log(':^',reg);
    // NEW
    reg.pushManager.subscribe({
      userVisibleOnly: true
    }).then(function(sub) {
      console.log('endpoint:', sub.endpoint);
    });
    // END
  }).catch(function(err) {
    console.log(':^', err);
  });
}

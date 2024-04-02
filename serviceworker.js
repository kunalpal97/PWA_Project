self.addEventListener('push', function(event) {
  const options = {
  body: 'Your wishlisted HP laptop was restocked!',
  icon: 'pwa_img.png'
  };
  event.waitUntil(
  self.registration.showNotification('New notification', options)
  );
  });
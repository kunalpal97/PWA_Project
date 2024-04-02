Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
    // Permission granted, you can now show notifications
    }
    });
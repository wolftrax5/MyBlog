
// install service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
      console.error(error.message);
    });
  }
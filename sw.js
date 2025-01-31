self.addEventListener('install', event => {
    console.log('Service Worker Installed');
});

self.addEventListener('activate', event => {
    console.log('Service Worker Activated');
});

self.addEventListener('push', event => {
    const options = {
        body: "Mal0 is still watching...",
        icon: "https://static1.e621.net/data/sample/09/98/09984f856cf3a83ff95f21ac2157a3bf.jpg",
        requireInteraction: true
    };
    event.waitUntil(
        self.registration.showNotification("Mal0", options)
    );
});

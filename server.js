const Pusher = require('pusher');

const pusher = new Pusher({
    appId: 'APP_ID',
    key: 'APP_KEY',
    secret: 'APP_SECRET',
    cluster: 'CLUSTER',
});

pusher.trigger('my-channel', 'my-event', {
    message: 'Olá, mundo!'
});

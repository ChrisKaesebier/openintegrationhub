const CommunicationRouterApp = require('./src/CommunicationRouterApp.js');
(async () => {
    try {
        const app = new CommunicationRouterApp();
        await app.start();
    } catch (e) {
        console.error('Critical error, going to die', e, e && e.stack); //eslint-disable-line
        process.exit(1);
    }
})();

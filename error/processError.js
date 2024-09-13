module.exports = {
    loadError: async function(client) {
        process.on('beforeExit', (code) => {
            return send(code);
        });
        process.on('exit', (error) => {
            return send(error);
        });
        process.on('unhandledRejection', (reason, promise) => {
            return send(reason);
        });
        process.on('rejectionHandled', (promise) => {
            return send(promise);
        });
        process.on('uncaughtException', (error, origin) => {
            return send(error);
        });
        process.on('uncaughtExceptionMonitor', (error, origin) => {
            return send(error);
        });
        process.on('warning', (warning) => {
            return send(warning);
        });
    }
}

function send(err) {
    console.clear();
    console.error(err);
}

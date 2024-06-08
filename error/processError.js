module.exports = {
    loadError: async function(client) {
        process.on('beforeExit', (code) => {
            console.clear();
            console.error(code);
        });
        process.on('exit', (error) => {
            console.clear();
            console.error(error);
        });
        process.on('unhandledRejection', (reason, promise) => {
            console.clear();
            console.error(reason);
        });
        process.on('rejectionHandled', (promise) => {
            console.clear();
            console.error(promise);
        });
        process.on('uncaughtException', (error, origin) => {
            console.clear();
            console.error(error);
        });
        process.on('uncaughtExceptionMonitor', (error, origin) => {
            console.clear();
            console.error(error);
        });
        process.on('warning', (warning) => {
            console.clear();
            console.error(warning);
        });
    }
}
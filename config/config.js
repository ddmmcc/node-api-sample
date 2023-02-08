const env = process.argv.includes('pro') ? 'pro' : 'dev';
const port = 9031;
module.exports = {
    env: env,
    port: port,
}
/**
 * Wrapper around the ugly NodeJS async import()
 *
 * @param {} options 
 */

const servePublic = async function(app, options, callback) {
    const mod = await import('../dist/src/index.js');
    mod.servePublic(app, options, callback);
};

module.exports = servePublic;
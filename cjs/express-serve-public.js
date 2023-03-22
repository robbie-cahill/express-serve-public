/**
 * Wrapper around the ugly NodeJS async import()
 *
 * @param {} options 
 */

const servePublic = async function(app, options, callback) {
    const servePublic = await import('../dist/src/index.js');
    servePublic(app, options, callback);
};

module.exports = servePublic;
const { getUser } = require('./auth');

async function loggedInUser(req, res, next) {
    const userUid = req.cookies?.uid;
    if (!userUid) return res.redirect('/login');

    const user = await getUser(userUid); // await because async
    if (!user) return res.redirect('/login');

    req.user = user;
    next();
}

// Optional middleware if you just want to attach user but not redirect
async function checkAuth(req, res, next) {
    const userUid = req.cookies?.uid;
    if (!userUid) {
        req.user = null;
        return next();
    }

    const user = await getUser(userUid);
    req.user = user || null;
    next();
}

module.exports = {
    loggedInUser,
    checkAuth
};

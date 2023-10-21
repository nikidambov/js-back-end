const router = require("express").Router();

const electronicManager = require('../managers/electronicManager');
const { getErrorMessage } = require('../utils/errorHelpers');

router.get('/', async (req, res) => {
    const electronics = await electronicManager.getAll().lean();

    res.render('electronics', { electronics });
})

router.get('/create', (req, res) => {
    res.render('electronics/create');
});

router.post('/create', async (req, res) => {
    const electronicData = {
        ...req.body,
        owner: req.user._id,
    };

    try {
        await electronicManager.create(electronicData);

        res.redirect('/electronics');
    } catch (err) {
        res.render('electronics/create', { error: getErrorMessage(err) });
    }
});

router.get('/:electronicId/details', async (req, res) => {
    const electronicId = req.params.electronicId;
    const electronic = await electronicManager.getOne(electronicId).lean();
    const isOwner = req.user?._id == electronic.owner._id;

    res.render('electronics/details', { electronic, isOwner });
});

router.get('/:electronicId/delete', async (req, res) => {
    const electronicId = req.params.electronicId;
    try {
        await electronicManager.delete(electronicId);

        res.redirect('/electronics');
    } catch (err) {
        res.render(`electronics/details`, { error: "Unsuccessful deletion" });
    }
});

router.get('/:electronicId/edit', async (req, res) => {
    const electronic = await electronicManager.getOne(req.params.electronicId).lean();
    res.render('electronics/edit', { electronic });
});

router.post('/:electronicId/edit', async (req, res) => {
    const electronicId = req.params.electronicId;
    try {
        const electronicData = req.body;
        await electronicManager.edit(electronicId, electronicData);

        res.redirect(`/electronics/${electronicId}/details`);
    } catch (err) {
        res.render('photos/edit', { error: 'Unable to update', ...electronicData });
    }
});

module.exports = router;
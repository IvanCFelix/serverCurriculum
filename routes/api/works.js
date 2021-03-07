const { get } = require('../api');

const router = require('express').Router();
const { Work } = require('../../db')

router.get('/', async (req, res) => {
    const works = await Work.findAll();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(works);
});

router.post('/', async (req, res) => {
    const works = await Work.create(req.body);
    res.json(works);
});

router.put('/:workId', async (req, res) => {
    const works = await Work.update(req.body, {
        where: { id: req.params.workId }
    })
    res.json(works);
});

router.delete('/:workId', async (req, res) => {
     await Work.destroy({
        where: { id: req.params.workId }
    })
    res.json({success:"Se a eliminado el dato"});
}); 




module.exports = router;
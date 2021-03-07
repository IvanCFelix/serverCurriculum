const { get } = require('../api');

const router = require('express').Router();
const { Skill } = require('../../db')

router.get('/', async (req, res) => {
    const skill = await Skill.findAll();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(skill);
});

router.post('/', async (req, res) => {
    const skill = await Skill.create(req.body);
    res.json(skill);
});

router.put('/:skillId', async (req, res) => {
    const skill = await Skill.update(req.body, {
        where: { id: req.params.skillId }
    })
    res.json(skill);
});

router.delete('/:skillId', async (req, res) => {
    await Skill.destroy({
        where: { id: req.params.skillId }
    })
    res.json({ success: "Se a eliminado el dato" });
});

module.exports = router;
const { get } = require('../api');

const router = require('express').Router();
const {Sofwares} = require('../../db')

router.get('/',async (req,res)=>{
const softwares = await Sofwares.findAll();
res.setHeader('Access-Control-Allow-Origin', '*');
res.json(softwares);
});

router.post('/',async (req,res)=>{
    const softwares = await Sofwares.create(req.body);
    res.json(softwares);
    });

router.put('/:sofwareId',async (req,res)=>{
        const softwares = await Sofwares.update(req.body,{
            where:{id:req.params.softwareId}
        })
        res.json(softwares);
        });

module.exports = router;
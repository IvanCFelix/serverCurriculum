const { get } = require('../api');

const router = require('express').Router();
const {Software} = require('../../db')

router.get('/',async (req,res)=>{
const software = await Software.findAll();
res.setHeader('Access-Control-Allow-Origin', '*');
res.json(software);
});

router.post('/',async (req,res)=>{
    const software = await Software.create(req.body);
    res.json(software);
    });

router.put('/:softwareId',async (req,res)=>{
        const software = await Software.update(req.body,{
            where:{id:req.params.softwareId}
        })
        res.json(software);
        });

module.exports = router;
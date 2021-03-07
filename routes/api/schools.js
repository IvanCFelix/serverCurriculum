const { get } = require('../api');

const router = require('express').Router();
const {School} = require('../../db')

router.get('/',async (req,res)=>{
const school = await School.findAll();
res.setHeader('Access-Control-Allow-Origin', '*');
res.json(school);
});

router.post('/',async (req,res)=>{
    const school = await School.create(req.body);
    res.json(school);
    });

router.put('/:schoolId',async (req,res)=>{
        const school = await School.update(req.body,{
            where:{id:req.params.schoolId}
        })
        res.json(school);
        });

module.exports = router;
const { get } = require('../api');

const router = require('express').Router();
const {User} = require('../../db')

router.get('/',async (req,res)=>{
const users = await User.findAll();
res.setHeader('Access-Control-Allow-Origin', '*');
res.json(users);
});

router.post('/',async (req,res)=>{
    const user = await User.create(req.body);
    res.json(user);
    });

router.put('/:userId',async (req,res)=>{
        const user = await User.update(req.body,{
            where:{id:req.params.userId}
        })
        res.json(user);
        });

        

module.exports = router;
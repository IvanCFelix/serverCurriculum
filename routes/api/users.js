const { get } = require('../api');

const router = require('express').Router();
const {User} = require('../../db')

router.get('/',async (req,res)=>{
const users = await User.findAll();
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
        res.status(200).send("Datos actualizados");
        });

module.exports = router;
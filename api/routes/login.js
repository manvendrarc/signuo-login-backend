const express = require('express')
const router =express.Router() // Router give router options which give options to how to manage different requests from user like GET,POST,PATCH,DELETE

//localhost: 5001/users/login

router.get('/',(req,res)=>{
    res.status(200).json({msg: 'GET request to /users/login' })
})
router.get('/:variableId',(req,res)=>{
    // Interview Q:- What do you mean by queryParam & how is it handled
    // Ans:- 
    const queryParam = req.params.variableId
    res.status(200).json({msg: `GET request to /users/login/${queryParam}` })
})

//Any data sent over the POST request is carried in the body  
router.post('/',(req,res)=>{
    const userId = req.body.id
    const userPassword = req.body.password
    
    res.status(201).json({msg: 'POST Successful', details:`UserId: ${userId} & Password: ${userPassword}` })
})

router.patch('/',(req,res)=>{
    res.status(200).json({msg: 'PATCH request to /users/login' })
})

router.delete('/',(req,res)=>{
    res.status(200).json({msg: 'DELETE request to /users/login' })
})

module.exports = router;
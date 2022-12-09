const express = require('express')
const router =express.Router() // Router give routeroptions which give options to how to manage different requests from user like GET,POST,PATCH,DELETE

//localhost: 5001/users/signup

router.get('/',(req,res)=>{
    res.status(200).json({msg: 'GET request to /users/signup' })
})
// email and password are 2 values expected from user
// email & password --> request
//NOTE -- NODEJS DONOT HAVE A DIRECT ACCESS TO req.body OBJECT
router.post('/',(req,res)=>{
    const userEmail = req.body.email
    const userPassword = req.body.password
    
    const userDetails = {
        email: userEmail,
        password: userPassword
    }
    res.status(201).json({msg:"Signup Successful", details:userDetails})
 })

router.patch('/',(req,res)=>{
    res.status(200).json({msg: 'PATCH request to /users/signup' })
})

router.delete('/',(req,res)=>{
    res.status(200).json({msg: 'DELETE request to /users/signup' })
})

module.exports = router;
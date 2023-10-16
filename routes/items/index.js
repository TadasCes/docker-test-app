const express = require('express')
const router = express.Router()


router.get('/items', async (req,res) => {
    try {
        console.log("works")
    } catch (err) {
        console.log("not")
    }
})

module.exports = router
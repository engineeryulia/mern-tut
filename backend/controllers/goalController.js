const asyncHandler = require('express-async-handler')
//@desc  Get goals
//rout GET/api/goals
//access Private
const getGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Get goals'})
})

//@desc  Set goals
//rout POST/api/goals
//access Private
const setGoal = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)//.json({message: 'Please add a text field'})
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goals'})
})

//@desc  Update goals
//rout PUT/api/goals/:id
//access Private
const updateGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//@desc  Delete goals
//rout DELETE/api/goals/:id
//access Private
const deleteGoal = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}
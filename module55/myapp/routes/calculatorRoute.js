// const express = require("express");
// const router = express.Router();

// router.get('/add',(req,res) =>{
//     let number1=parseInt(req.query.num1);
//     let number2=parseInt(req.query.num2);
//     let sum=number1+number2;
//     console.log(sum)
//     res.status(200)
//     res.json({result:sum})
//     })

// router.get('/sub',(req,res) =>{
//     let number1=parseInt(req.query.num1);
//     let number2=parseInt(req.query.num2);
//     let sum1=number1-number2;
//     console.log(sum1)
//     res.status(200)
//     res.json({result:sum1})
//     })

// router.get('/multiply',(req,res) =>{
//     let number1=parseInt(req.query.num1);
//     let number2=parseInt(req.query.num2);
//     let sum2=number1*number2;
//     console.log(sum2)
//     res.status(200)
//     res.json({result:sum2})
//     })

// router.get('/divion',(req,res) =>{
//     let number1=parseInt(req.query.num1);
//     let number2=parseInt(req.query.num2);
//     let sum3=number1/number2;
//     console.log(sum3)
//     res.status(200)
//     res.json({result:sum3})
//     })

// module.exports = router;

const express = require("express");
const calculatorController = require("../controllers/calculatorController");
const router = express.Router();
router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});
router.get("/sub", (req, res) => {
  calculatorController.subNumbers(req, res);
});
router.get("/multiply", (req, res) => {
  calculatorController.multiplyNumbers(req, res);
});
router.get("/division", (req, res) => {
  calculatorController.divisionNumbers(req, res);
});

module.exports = router;

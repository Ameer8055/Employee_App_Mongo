const express = require('express');
const router = express.Router();


router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const movieModel = require('../model/EmployeeData');


function employeeRouting(navbar){

    router.get('/',(req,res)=>
    {                                               //home page showing
        res.render('Home',{navbar});
    });



    router.get('/list',async(req,res)=>
    {
        try {
                                                                            //Employee list get from server
            const data = await movieModel.find();
            res.render('EmployeeList',{navbar,data});
            
        } catch (error) {
            console.log(error);   
        }
        
    })



    router.get('/adding',(req,res)=>
    {                                                           //add form showing
        res.render('AddEmployee',{navbar});
    })

    //posting
    router.post('/add',async(req,res)=>
    {
        try {
                                                                            //adding details to the database
            const item = req.body;
            const result = await movieModel.create(item);
            res.redirect('/BasicRoute/list');

            
        } catch (error) {
            console.log(error);
            res.status(500).send({ message: "Error Occured" });
            
        }
    })

    router.get('/editForm/:id',async(req,res)=>
    {
                                                                                    //edit page reneder
            const id = req.params.id;
            const data = await movieModel.findOne({"_id":id})
            res.render('EditEmployee',{navbar,data,employeeid:req.params.id});
    }
)
    router.post('/edit/:id',async (req,res)=>
    {                                                                       //editing and updating the list
        try {
            const data = await movieModel.findByIdAndUpdate(req.params.id,req.body);
            res.redirect('/BasicRoute/list');
            
        } catch (error) {
            console.log('error');
        }

    })

    router.get('/delete/:id',async(req,res)=>
        {
            try {
                const data = await movieModel.findByIdAndDelete(req.params.id);
                res.redirect('/BasicRoute/list');
                } catch (error) {
                    console.log(error);
                    res.status(500).send({ message: "Error Occured" });
                    }
                    }
    )

    return router;
}















module.exports = employeeRouting;
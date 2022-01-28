const pool = require('../dbConfig');
const queries = require('./queries');
const express = require('express');

const app = express();

const getUsers = ((req, res) => {

    pool.query(queries.getUsers, (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);
    })

});

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (err, results) => {
        if(err) throw err;
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) => {
    const { name, email, password} = req.body;

    //check if email already exists
    pool.query(queries.checkEmailExists, [email, password], (err, results) => {
        if(results.rows.length){
            res.send("Email already exists.");
        }
      
        //add user to the database

    pool.query(queries.addUser, [name, email, password], (err, results) => {
        if(err) throw err;
        res.status(201).send("User created successfully.");
    })
    
    });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (err, results) =>{
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User does not exists in the database.");
        }
        pool.query(queries.deleteUser, [id], (err, results) =>{
            if(err) throw err;
            res.status(200).send("User removed successfully.");
        })
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, password} = req.body;

    pool.query(queries.getUserById, [id], (err, results) =>{
        const noUserFound = !results.rows.length;
        if(noUserFound){
            res.send("User does not exists in the database.");
        }

        pool.query(queries.updateUser, [name, email, password, id], (err, results) =>{
            if(err) throw err;
            [req.body.name, req.body.email, req.body.password]
            res.status(200).send("User updated successfully.");

        })

    })

}

// const updateUserByEmail = (req, res) => {
//     const id = parseInt(req.params.id);
//     const { name } = req.body;

//     pool.query(queries.getUserById, [id], (err, results) =>{
//         const noUserFound = !results.rows.length;
//         if(noUserFound){
//             res.send("User does not exists in the database.");
//         }

//         pool.query(queries.updateUserByEmail, [email, id], (err, results) =>{
//             if(err) throw err;
//             res.status(200).send("User updated successfully.");
//         })

//     })

// }

// const updateUserByPassword = (req, res) => {
//     const id = parseInt(req.params.id);
//     const { name } = req.body;

//     pool.query(queries.getUserById, [id], (err, results) =>{
//         const noUserFound = !results.rows.length;
//         if(noUserFound){
//             res.send("User does not exists in the database.");
//         }

//         pool.query(queries.updateUserByPassword, [password, id], (err, results) =>{
//             if(err) throw err;
//             res.status(200).send("User updated successfully.");
//         })

//     })

// }

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
//     updateUserByEmail,
//     updateUserByPassword,
}
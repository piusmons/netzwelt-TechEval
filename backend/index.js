const express = require('express');
const cors = require('cors');
const axios = require('axios')



const PORT = 4000;

const app = express()
app.use(cors())
app.use(express.json())



app.post('/login', async(req, res) => {
    const { username, password } = req.body
    
    
    //res.status(200).json({username})

    const options = {
        Headers: {'X-Custom-Header': 'value'}
    };

    const body = {
        username: username,
        password: password
    };
    
        await axios.post('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', body, options)
                .then((response) => {
                    const data = response.data
                    console.log(data)
                    res.send({logIn: "SUCCESS"})
                    
                    
                    
                    
                })
                .catch((error) => {
                    console.log(error)
                    res.send({logIn: "FAIL"})
                    
                    
                })
    
    

    
           
})





app.listen(PORT, () => console.log(`listening to port ${PORT}`))


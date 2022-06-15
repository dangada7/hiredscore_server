const express = require('express')
const cors = require('cors')
const axios = require('axios');

const app = express()
const port = 3000
app.use(cors())

// endPoints
let endPoints = {
    getCandidate : "/getCandidate",
}

let getCandidateUrl = "https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122"


// ==== end points =======

// getCandidate
app.get(endPoints.getCandidate, (req, res) => {

    axios.get(getCandidateUrl)
        .then(response => {
            res.send(response.data)
        })

})

// start listener
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJlbXByZW5kZWRvciIsImlhdCI6MTcyNjg5MzY1Nn0.d-dIs_nrRc05Tn-hvwpSFNIEjRDImEihd-T-T4Imn6g'



function virifyToken(token, secret){
    return jwt.verify(token, secret);
}

const payload = virifyToken(token, secret);

console.log(payload);
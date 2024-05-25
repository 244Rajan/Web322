/**
 *  WEB322 - Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites, friends, GPT or otherwise) or distributed to other students.
 *  I understand that if caught doing so, I will receive zero on this assignment and possibly 
 *  fail the entire course.
 *  Name: [Rajan Yadav]
 *  Student ID: [157764226]
 *  Date: [2024-05-25]
 *  Vercel Web App URL: [https://vercel.com/rajan-yadavs-projects-30ed3093]
 *  GitHub Repository URL: [https://github.com/244Rajan/Web322]
 */

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Rajan Yadav - 157764226'); 
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

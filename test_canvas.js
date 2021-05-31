const fs = require('fs');
const canvas = require('./canvas.js');
const https = require('https');
const qs = require('qs');
require('dotenv').config();

console.log('test');
const token = process.env.TOKEN;
const url = process.env.URL;

let c = new canvas.Canvas(url, token)
r1 = c.get('/courses/499638', {})
console.log(r1)
r2 = c.get('/courses/499638/assignments', {})
console.log(r2)
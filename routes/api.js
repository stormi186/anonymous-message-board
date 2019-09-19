/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const mongo = require('mongodb');
const mongoose = require('mongoose');
const mongooseConfig = require('../config/mongoose_config');
require('dotenv').config();
const { MONGO_DB } = process.env;
const { expect } = require('chai');
const { Thread } = require('../models/Thread');
const { ObjectId } = require('mongodb');

mongoose.connect(CONNECTION_STRING, mongooseConfig);

const db = mongoose.connection;

module.exports = function (app) {
  
  app.route('/api/threads/:board');
    
  app.route('/api/replies/:board');

};

import {MongoClient, ObjectId} from 'mongodb';
import mysql from 'mysql2/promise';
import { mongoURI, mysqlConnect } from './secrets.js';

const db1 = await mysql.createConnection(mysqlConnect)
const [movieList] = await db1.execute("Select * From movies")
db1.end()

const connection = new MongoClient(mongoURI)
connection.connect()
const db2 = connection.db('Cluster0');
  await db2.collection("movies")
    .insertMany(movieList)
connection.close()






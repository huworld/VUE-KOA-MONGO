const MongoClient = require('mongodb').MongoClient;
const Config = require('./mongo.js')
const ObjectID = require('mongodb').ObjectID

class Db{

    static getInstance(){
        if(!Db.instance){//解决多次实例化问题
            Db.instance = new Db();
        }return Db.instance;
        
    }

    constructor(){
        console.log('c')
        this.dbClient = ''
        this.connect()//初始化连接数据库
    }

    connect(){
        return new Promise((resolve,reject)=>{
            if(!this.dbClient){//解决数据库多次连接
                MongoClient.connect(Config.dburl,{ useNewUrlParser: true },(err,client)=>{
                    // console.log(client)
                    if(err){
                        console.log('链接出错')
                        reject(err)
                        return
                    }else{
                        this.dbClient = client.db(Config.dbname)
                        resolve(this.dbClient)
                        console.log('链接成功')
                    }
                })
            }else{
                resolve(this.dbClient)
            }
        })
    }
    //查
    find(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then(db=>{
                let result = db.collection(collectionName).find(json);
                result.toArray((err,dosc)=>{
                    if(err){
                        reject(err)
                        return;
                    }else{
                        resolve(dosc)
                    }
                })
            }).catch((err)=>{
                console.log(err)
            })
        })
    }
    //增
    insert(collectionName,json){
        return new Promise((resolve,reject)=>{
            this.connect().then(db=>{
                db.collection(collectionName).insertOne(json,(err,result)=>{
                    if(err){
                        reject(err)
                    }
                    resolve(result)
                })
            })
        })
    }
    //改
    update(collectionName,json1,json2){
        return new Promise((resolve,reject)=>{
            this.connect().then(db=>{
                db.collection(collectionName).updateOne(json1,{
                    $set:json2
                },(err,result)=>{
                    if(err){
                        reject(err)
                    }
                    resolve(result)
                })
            })
        })
    }
    //删
    remove(collectionName,json){
        console.log('a')
        return new Promise((resolve,reject)=>{
            this.connect().then(db=>{
                db.collection(collectionName).removeOne(json,(err,result)=>{
                    if(err){
                        reject(err)
                    }
                    resolve(result)
                })
            })
        })
    }
    //查询mongodb id封装（字符串转对象）
    getObjectID(id){
        return new ObjectID(id)
    }

}
module.exports = Db.getInstance()
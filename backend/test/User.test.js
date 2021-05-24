import Chai from 'chai'
import chaiHTTP from 'chai-http'
import { response } from 'express'
import {describe,it as test} from 'mocha'
import application from '../Server.js'


Chai.should()
Chai.use(chaiHTTP)

const randomString=Math.random().toString(36).substring(7)

//not found 

const testNonExistingRoute=()=> {
    test('Expecting 404 NOT_FOUND',(done) => {
        Chai.request(application)
        .get(  `/${randomString}`)
        .end((request,response) => {
            response.should.have.a.status(404)
            done()
        })
    })



}

const getAllUsers= ()=> {
    test('Fetch All User from DB Get ',(done) => {
        Chai.request(application)
        .get(  '/user')
        .end((request,response) => {
            response.should.have.a.status(200)
            response.body.should.be.a('array')

            done()
        })
    })
}

const createUser= ()=> {

const mockData={

    username: randomString,
    password: randomString
}

    test('CREATE USER POST ',(done) => {
        Chai.request(application)
        .post(  '/user')
        .send(mockData)
        .end((request,response) => {
            response.should.have.a.status(201)
            response.body.should.be.a('object')
            response.body.should.have.property('username').eq(mockData.username)
            response.body.should.have.property('password').eq(mockData.password)
            done()
        })
    })
}



describe('TESTING USER API ROUTE',()=>{
    testNonExistingRoute()
    getAllUsers()
    createUser()
})
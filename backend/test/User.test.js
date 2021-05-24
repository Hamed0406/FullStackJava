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
describe('API call non Existing route.404,not-found',()=> {
    test('Expecting 404 NOT_FOUND',(done) => {
        Chai.request(application)
        .get(  `/${randomString}`)
        .end((request,response) => {
            response.should.have.a.status(404)
            done()
        })
    })

}
)
}



describe('TESTING USER API ROUTE',()=>{
    testNonExistingRoute()
})
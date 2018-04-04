import {
    getData
} from './service.js'

// A simple example test
describe('#getData() using Promises', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })
    it('should load github', () => {
        const result = getData('https://api.github.com/repos/angular/angular.js/issues').then((data) => {

        })
    })
})
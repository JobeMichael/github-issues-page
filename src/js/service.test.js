//api.test.js
import {
    getData
} from './service.js'

describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls github and returns data ', () => {
        fetch.mockResponseOnce(JSON.stringify({}))

        //assert on the response
        getData().then(res => {
            expect(res).toEqual({})
        })

        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual('https://api.github.com/repos/angular/angular.js/issues')
    })
})
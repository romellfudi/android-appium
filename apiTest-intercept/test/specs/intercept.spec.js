assert = require('assert');

describe('Web Intercept ', () => {
    it('should get data', async () => {
        await browser.url(`https://amazon.com/`);
        await browser.setupInterceptor();

        // Capture the network request and store the response
        const response = await browser.expectRequest('GET', '/api/2017/suggestions', 200);

        // Log the response body
        console.log('RESPONSE BODY:', response.body);

        await $('#twotabsearchtextbox').setValue('mobile');
        await browser.pause(2000);

        browser.assertRequests();

    })
})


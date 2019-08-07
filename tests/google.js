module.exports = {
    beforeEach: browser => {
        browser.url('http://www.Google.com')
    },
    after: browser => {
        browser.end()
    },
    'Google Search 3 items': browser => {
        browser
            .setValue('input[name="q"]', ['Puppies', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .verify.containsText('#res', 'Puppies')
            .pause(100)
            .clearValue('input[name="q"]')
            .setValue('input[name="q"]', ['Cars', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .verify.containsText('#res', 'Cars')
            .pause(100)
            .clearValue('input[name="q"]')
            .setValue('input[name="q"]', ['Video Games', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .verify.containsText('#res', 'Video Games')
            .pause(100)
    },
    // 'Google Search click test': browser => {
    //     browser
    //         .setValue('input[name="q"]', '5 gum')
    //         .click('button[data-ved="0ahUKEwjk6cni0OzjAhVcPn0KHaMQCOEQ4dUDCAc"]')
    //         .waitForElementVisible('#res')
    //         .verify.containsText('#res', '5 gum')
    //         .pause(1000)
    //         .clearValue('input[name="q"]')
    // }
}
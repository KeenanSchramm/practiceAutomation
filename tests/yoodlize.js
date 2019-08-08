var yoodlizer
module.exports = {
    beforeEach: browser => {
        yoodlizer = browser.page.yoodlizePObject()
        yoodlizer.navigate()
    },
    // QAE-52
    'Recreational vehicles': browser => {
        yoodlizer
            .click('@rVSeeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Recreational Vehicles")
    },
    'Outdoor Gear': browser => {
        yoodlizer
            .click('@oGSeeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Outdoor Gear")
    },
    'Electronics': browser => {
        yoodlizer
            .click('@eSeeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Electronics")
    },
    'Party & Wedding Equipment': browser => {
        yoodlizer
            .click('@pWESeeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Party & Wedding Equipment")
    },
    'Tools': browser => {
        yoodlizer
            .click('@tseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Tools")
    },
    'Clothing': browser => {
        yoodlizer
            .click('@cseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Clothing")
    },
    'Home and Kitchen': browser => {
        yoodlizer
            .click('@hkseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Home and Kitchen")
    },
    'Toys and Games': browser => {
        yoodlizer
            .click('@tgseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Toys and Games")
    },
    'Lawn and Garden': browser => {
        yoodlizer
            .click('@lgseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Lawn and Garden")
    },
    'Sporting Goods': browser => {
        yoodlizer
            .click('@sgseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Sporting Goods")
    },
    'DVDs & Video Games': browser => {
        yoodlizer
            .click('@dvgseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"DVDs & Video Games")
    },
    'Venues': browser => {
        yoodlizer
            .click('@vseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Venues")
    },
    'Local Experts': browser => {
        yoodlizer
            .click('@leseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Local Experts")
    },
    'Guided Experiences': browser => {
        yoodlizer
            .click('@geseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Experiences")
    },
    'Music': browser => {
        yoodlizer
            .click('@museeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Music")
    },
    'Business Equipment': browser => {
        yoodlizer
            .click('@beseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Business Equipment")
    },
    'Misc': browser => {
        yoodlizer
            .click('@miseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Misc")
    },
    'Tools BC': browser => {
        yoodlizer
            .click('@tbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Tools")
    },
    'Outdoor Gear BC': browser => {
        yoodlizer
            .click('@ogbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Outdoor Gear")
    },
    'Electronics BC': browser => {
        yoodlizer
            .click('@ebcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Electronics")
    },
    'Party & Wedding Equipment BC': browser => {
        yoodlizer
            .click('@pwebcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Party & Wedding Equipment")
    },
    'Recreational Vehicles BC': browser => {
        yoodlizer
            .click('@rvbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Recreational Vehicles")
    },
    'Clothing BC': browser => {
        yoodlizer
            .click('@cbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Clothing")
    },
    'Home and Kitchen BC': browser => {
        yoodlizer
            .click('@hkbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory', "Home and Kitchen")
    },
    'Toys and Games BC': browser => {
        yoodlizer
            .click('@tgbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Toys and Games")
    },
    'Lawn and Garden BC': browser => {
        yoodlizer
            .click('@lgbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Lawn and Garden")
    },
    'Sporting Goods BC': browser => {
        yoodlizer
            .click('@sgbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Sporting Goods")
    },
    'DVDs & Video Games BC': browser => {
        yoodlizer
            .click('@dvgbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"DVDs & Video Games")
    },
    'Venues BC': browser => {
        yoodlizer
            .click('@vbcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Venues")
    },
    'Local Experts BC': browser => {
        yoodlizer
            .click('@lebcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Local Experts")
    },
    'Guided Experiences BC': browser => {
        yoodlizer
            .click('@gebcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Experiences")
    },
    'Music BC': browser => {
        yoodlizer
            .click('@mubcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Music")
    },
    'Misc BC': browser => {
        yoodlizer
            .click('@mibcseeAll')
            .pause(500)
            .waitForElementVisible('@searchCatagory')
            .verify.containsText('@searchCatagory',"Misc")
    },
    'Rubix Search': browser => {
        yoodlizer
            .setValue('@searchBar', ['Rubix Cube', browser.Keys.ENTER])
            .verify.containsText('@searchCatagory',"Rubix Cube")
            .useXpath()
            .verify.containsText('@cardTitle', "Rubix Cube")
            .click('@firstResult')
            .verify.containsText('//div[@class="sc-jqCOkK hxTVNb sc-gqjmRU fptSCa"]',"Rubix Cube")
            .click('@picRightArrow')
            .click('@picLeftArrow')
            .verify.containsText('@price',"22")
    },
}
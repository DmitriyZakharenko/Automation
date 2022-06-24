describe('Ebay Product Search', () => {
    it('should open the main url and verify the title', async () => {
        await browser.url('https://www.ebay.com/')
        await expect(browser).toHaveTitle('Электроника, автомобили, мода, коллекционирование, купоны и другие товары | eBay')
    })
})
describe('Ebay Product Search', () => {
    it('should open the main url and verify the title', async () => {
        await browser.url('https://www.ebay.com/')
        await expect(browser).toHaveTitle('Электроника, автомобили, мода, коллекционирование, купоны и другие товары | eBay')
    })

    it('should search for a product and verify the search text value', () => {
       const searchInput = $('#gh-ac')
       const searchBtn = $('#gh-btn')

       searchInput.addValue('Laptop')
       searchBtn.click()

       expect(searchInput).toHaveValue('Laptop')
    })

    it('should redirect to a new page and verify the title', () => {
        expect(browser).toHaveTitle('laptop: Search Result | eBay')
    })

    it('should update the search category', () => {
        const category = $('#gh-cat option:nth-child(1)')

        expect(category).toHaveText('Ноутбуки и нетбуки PC')
    })
})
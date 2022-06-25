// const assert = require("assert")
// // const { createPublicKey } = require("crypto")
// // const { Browser } = require("puppeteer")

//     describe('Handle alert', () => {
//         it('Capture text and accept alert', async () => {

//             await browser.url("https://mail.rediff.com/cgi-bin/login.cgi")
//             await (await $("input[name='proceed']")).click()

//             const alert_text = await browser.getAlertText()
//             await browser.pause(2000)
//             await browser.acceptAlert()
//             assert.deepEqual(alert_text, "Please enter a valid user name")
//         })
//     })

   
    
    const assert = require("assert")
    // const { createPublicKey } = require("crypto")
    // const { Browser } = require("puppeteer")
    
        describe('Handle alert', () => {
            it('Capture text and accept alert', async () => {
    
                await browser.url("https://zoom.us/join")
                
                await $('#join-confno').setValue('tewsqsst@test.com')

                await (await $('#btnSubmit')).click()
                await browser.pause(2000)
                const alert_text = await browser.getAlertText()
                
                await browser.acceptAlert()
                assert.deepEqual(alert_text, "Сайт https://us02web.zoom.us собирается открыть это приложение.")
            })
        })


//     const assert = require("assert")
// // const { createPublicKey } = require("crypto")
// // const { Browser } = require("puppeteer")

//     describe('Handle alert', () => {
//         it('Capture text and accept alert', async () => {

//             await browser.url("https://console.nopass.us/#/account/08f41e31-cc37-4823-a6bc-6abeb57b9ad0/user-registration/9ab8e7b3")
//             // await (await $("input[name='proceed']")).click()
//             await $('main > .qr-section > .qr-code-image > .this-device-link > .qr-link').waitForDisplayed({timeout: 20000})
//             await $('main > .qr-section > .qr-code-image > .this-device-link > .qr-link').click()
//             await $('.finish-registration-container > main > .no-qr-block > .mat-focus-indicator > .mat-button-wrapper').click()

//             const alert_text = await browser.getAlertText()
//             await browser.pause(2000)
//             await browser.acceptAlert()
//             assert.deepEqual(alert_text, "Please enter a valid user name")
//         })
//     })
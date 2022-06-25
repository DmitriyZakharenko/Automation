describe('Example of mocha tests', () => {
    before('Should open project', async function() {
        await browser.url(`https://ps-saas-aws.identite.us/Identity/Account/Register`);
        await expect(browser).toHaveTitle('Registration - Demo')

    });

    it('Should not allow to create user with blank username', async function() {
        await $('#Input_Email').setValue('tewsqsst@test.com')
        await $('#registerButton').click()
        await expect(browser).toHaveTitle('NoPass')
        await $('main > .qr-section > .qr-code-image > .this-device-link > .qr-link').waitForDisplayed({timeout: 20000})
        await $('main > .qr-section > .qr-code-image > .this-device-link > .qr-link').click()

        // await browser.url(`https://console.nopass.us/#/account`)
        await $('body > app-root > app-register-account-with-qr > div > div > main > div > button.mat-focus-indicator.forms-button.small.mat-button.mat-button-base.mat-primary > span.mat-button-wrapper').click()
        // await $('.finish-registration-container > main > .no-qr-block > .mat-focus-indicator > .mat-button-wrapper').click()
        // await (await $('.finish-registration-container > main > .no-qr-block > .mat-focus-indicator > .mat-button-wrapper')).click()
        // const alert_text = await browser.getAlertText()
        // await browser.pause(2000)
        await browser.acceptAlert()
          // const input = await $('#username')
          // await input.setValue('anonymous')
      
        // await browser.keys('ArrowLeft')
        // await browser.keys('Enter')



        // const myButton = await $('#myButton')
        // await myButton.click({ button: 'Enter' })

      //   it('should demonstrate a click using an offset', async () => {
      //     const myButton = await $('#myButton')
      //     await myButton.click({ x: 30 }) // clicks 30 horizontal pixels away from location of the button (from center point of element)
      // })

        // const browser = await chromium.launch({headless: false});
        // const browserContext = await browser.newContext();
        // const page = await browserContext.newPage();
        // await page.fill(".navbar__search-input", "context");
        // // Wait for the search to complete and show up in the drop down
        // await page.waitForSelector(".dropdownMenu_X-NJ", { state: 'visible' });
        // await page.keyboard.press('Enter');

        // const puppeteer = require('puppeteer');

        // (async function main() {
        //   try {
        //     const browser = await puppeteer.launch(
        //       { headless: false, defaultViewport: null });
        //     const [page] = await browser.pages();
        
        //     await page.goto('https://example.org/');
        
        //     const data = await page.evaluate(() => {
        //       document.body.appendChild(document.createElement('iframe')).src =
        //         'https://example.org/?foo=bar';
        //     });
        
        //     await page.waitFor(3000);
        //     console.log(page.frames().map(frame => frame.url()));
        //     await page.frames()[1].focus('a');
        //     await page.keyboard.press('Enter');
        
        //     //await browser.close();
        //   } catch (err) {
        //     console.error(err);
        //   }
        // })()

        // await page.type(String.fromCharCode(37))
        // await page.keyboard.press("ArrowLeft")
        // await page.keyboard.press("Enter")
        let errorMessage = await $('#errorMessageOnRegister')
        await errorMessage.waitForDisplayed({timeout: 1000000})
        // await expect(await errorMessage.getText()).toEqual("Username is required")
    })
    // it('Should not allow to create user with blank password', async function() {
    //     await $('#userNameOnRegister').setValue('Hiqo')
    //     await $('#passwordOnRegister').setValue('')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Password is required")
    // })
    // it('Should not allow to create user with less than 3 characters is username', async function() {
    //     await $('#userNameOnRegister').setValue('Hi')
    //     await $('#passwordOnRegister').setValue('123abcA!')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Username should contain at least 3 characters")
    // })
    // it('Should not allow to create user with more than 40 characters is username', async function() {
    //     await browser.execute(async function() {
    //         const username = document.querySelector("#userNameOnRegister")
    //         username.removeAttribute('maxlength')
    //     })
    //     await $('#userNameOnRegister').setValue('HiqoHiqoHiqoHiqoHiqoHiqoHiqoHiqoHiqoHiqo!')
    //     await $('#passwordOnRegister').setValue('123abcA!')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Username can't exceed 40 characters")
    // })
    // it('Should not allow to create user with prefix space in username', async function() {
    //     await $('#userNameOnRegister').setValue(' Hiqo')
    //     await $('#passwordOnRegister').setValue('123abcA!')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Prefix and postfix spaces are not allowed is username")
    // })
    // it('Should not allow to create user with postfix space in username', async function() {
    //     await $('#userNameOnRegister').setValue('Hiqo ')
    //     await $('#passwordOnRegister').setValue('123abcA!')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Prefix and postfix spaces are not allowed is username")
    // })
    // it('Should not allow to create user with less than 8 characters is password', async function() {
    //     await $('#userNameOnRegister').setValue('Hiqo')
    //     await $('#passwordOnRegister').setValue('123abcA')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Password should contain at least 8 characters")
    // })
    // it('Should not allow to create user more less than 20 characters is password', async function() {
    //     await browser.execute(async function() {
    //         const username = document.querySelector("#passwordOnRegister")
    //         username.removeAttribute('maxlength')
    //     })
    //     await $('#userNameOnRegister').setValue('Hiqo')
    //     await $('#passwordOnRegister').setValue('123abcA123abcA123abcA')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Password can't exceed 20 characters")
    // })
    // it('Should not allow to create user without upper case characters is password', async function() {
    //     await $('#userNameOnRegister').setValue('Hiqo')
    //     await $('#passwordOnRegister').setValue('123abcaa')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Password should contain at least one character in upper case")
    // })
    // it('Should not allow to create user without lower case characters is password', async function() {
    //     await $('#userNameOnRegister').setValue('Hiqo')
    //     await $('#passwordOnRegister').setValue('123ABCAA')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Password should contain at least one character in lower case")
    // })
    // it('Should allow to create user without 3 characters is username and 8 in password', async function() {
    //     await $('#userNameOnRegister').setValue('Hiq')
    //     await $('#passwordOnRegister').setValue('123abcA!')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Successfully registered! Please, click Back to return on login page")
    // })
    // it('Should allow to create user without 40 characters is username and 20 in password', async function() {
    //     await $('#userNameOnRegister').setValue('HiqoUserHiqoUserHiqoUserHiqoUserHiqoUser')
    //     await $('#passwordOnRegister').setValue('123abcA123abcA123abc')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Successfully registered! Please, click Back to return on login page")
    // })
    // it('Should not allow to create user without credentials that are already in the application', async function() {
    //     await $('#userNameOnRegister').setValue('HiqoUserHiqoUserHiqoUserHiqoUserHiqoUser')
    //     await $('#passwordOnRegister').setValue('123abcA123abcA123abc')
    //     await $('#register').click()
    //     let errorMessage = await $('#errorMessageOnRegister')
    //     await errorMessage.waitForDisplayed({timeout: 3000})
    //     await expect(await errorMessage.getText()).toEqual("Username is in use")
    // })

});
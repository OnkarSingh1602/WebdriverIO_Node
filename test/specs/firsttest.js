describe("Test Suite ",async()=>{
    xit("First testcases",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
       await expect(browser).toHaveTitleContaining('LoginPage Practise | Rahul Shetty Academy')
       await $("#username").setValue("hero")
       //await browser.pause(2000)
       await $('input[type="password"]').setValue("learning2")
       //await browser.pause(2000)
       await $("#signInBtn").click()
       await console.log($(".alert-danger").getText())
       await browser.waitUntil(async()=>await $("#signInBtn").getAttribute("value") === 'Sign In',
       {
        timeout: 5000,
        timeoutMsg: 'TimeOut Error not displayed after 5 seconds'
        })
        await console.log($(".alert-danger").getText())
        await expect($('p')).toHaveText('(username is rahulshettyacademy and Password is learning)')
        

    })
    it("Radiobutton handleing ",async ()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
       await expect(browser).toHaveTitleContaining('LoginPage Practise | Rahul Shetty Academy')
       await $("#username").setValue("hero")
       await $('input[type="password"]').setValue("learning2")
       let radiobutton = await $$(".radiotextsty")
       radiobutton[1].click()
       const modal = $(".modal-body")
       await modal.waitForDisplayed()
       await $("#cancelBtn").click()
       console.log (await $$(".customradio")[0].$("span").isSelected()) //chained locator
       radiobutton[1].click()
       await modal.waitForDisplayed()
       await $("#okayBtn").click();
       radiobutton[0].click()
       await expect(modal).not.toBeDisplayed()

    })


})
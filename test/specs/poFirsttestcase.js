
import LoginPage from './pageObject/loginPage'

describe("Test Suite ",async()=>{
    it("First testcases",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        console.log(await browser.getTitle())
       await expect(browser).toHaveTitleContaining('LoginPage Practise | Rahul Shetty Academy')
       await LoginPage.Login("rahulshettyacademy","learning")
       await console.log($(".alert-danger").getText())
       await browser.waitUntil(async()=>await $("#signInBtn").getAttribute("value") === 'Sign In',
       {
        timeout: 5000,
        timeoutMsg: 'TimeOut Error not displayed after 5 seconds'
        })
        await console.log($(".alert-danger").getText())
        await expect($('p')).toHaveText('(username is rahulshettyacademy and Password is learning)')
        

    })
   

})
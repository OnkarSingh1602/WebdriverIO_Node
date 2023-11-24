//Automate the test cases to validate the error message on login screen 
//Automate the test case to validate that modal is not displayed if we choose Admin radio button
//Automate the sucessfull login for user radio button with student in drop down selecting the check box
describe("Login Page Validation",async()=>{
    it("Error message for invalid login details",async ()=>{
       await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
       await browser.getTitle()
       await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
       await $("#username").setValue("rahulshettyacademy")
       await $("input[name='password']").setValue("learning1")
       await $(".btn-md").click()
       await  browser.waitUntil(async()=> await $("#signInBtn").getAttribute("value") === "Sign In",
       {
        timeout: 10000,
        timeoutMsg: 'Error Not displayed till 10s'
       })
       let errorMessage = await $(".alert-danger").getText()
        console.log(errorMessage)
       await expect(errorMessage).toEqual("Incorrect username/password.")
    })
    it("Login Sucessfull ",async()=>{
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.getTitle()
        await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
        await $("#username").setValue("rahulshettyacademy")
        await $("input[name='password']").setValue("learning")
        let radiolocation = $$(".customradio")
        await radiolocation[1].click()
        let modaldisp = $(".modal-body")
        await modaldisp.waitForDisplayed({timeout: 3000})
        await $("#okayBtn").click()
        let dropdownSelect = $('select[class="form-control"]')
        await dropdownSelect.selectByAttribute('value',"teach")
        await dropdownSelect.selectByVisibleText("Student")
        await dropdownSelect.selectByIndex(2)
        await $(".termsText").click()
        await $("#signInBtn").click()
        await browser.getTitle()
        await $(".btn-primary").waitForExist()
        await expect(browser).toHaveTitle("ProtoCommerce")
    })
    it("modal is not displayed with Admin",async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await browser.getTitle()
        await expect(browser).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
        await $("#username").setValue("rahulshettyacademy")
        await $("input[name='password']").setValue("learning")
        let radiolocation = $$(".customradio")
        await radiolocation[1].click()
        let modaldisp = $(".modal-body")
        await modaldisp.waitForDisplayed({timeout: 3000})
        await $("#cancelBtn").click()
        await radiolocation[0].click()
        await console.log(radiolocation[0].isSelected())
        await expect(modaldisp).not.toBeDisplayed()
    })
    // write a code to handle dynamic drop down
    it("handle dynamic drop down",async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000)
        let dynamicDrop = await $$('li[class="ui-menu-item"] div')
        for (let i=0;i<dynamicDrop.length;i++)
        {
            if(await dynamicDrop[i].getText() === "India")
            {
                await dynamicDrop[i].click()
                break    
            }
        }



    })
    //Write a code to handle check boxes and take screen shot 
    it("check boxes and take screen shot",async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        let checkboxloc =await $$('input[Type="Checkbox"]')
        await checkboxloc[1].click()
        await browser.saveScreenshot("CheckboxScreenShot.png")

    })
    
    //Write a code to scroll down and hover over and perform action 

    it("scroll down and hover over",async()=>
    {
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
      await $("#mousehover").scrollIntoView()
      await $("#mousehover").moveTo()
      await $("=Top").click()
    })

})
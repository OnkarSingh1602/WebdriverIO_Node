describe("testsuite ",async()=>{
it("sucessful login",async()=>{
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    await browser.getTitle()
    await expect(browser).toHaveTitleContaining("LoginPage Practise | Rahul Shetty Academy")
    await $('input[name="username"]').setValue("rahulshettyacademy")
    await $('#password').setValue('learning')
    await $('#signInBtn').click()
    await browser.pause(5000)
    await browser.getTitle()
    await expect(browser).toHaveTitleContaining("ProtoCommerce")
    await expect( $(".btn-primary")).toExist()


   



})

})
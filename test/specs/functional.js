// Handle the alert
//const expectchai= require('chai').expect

describe("Function checkup",async()=>
{
    xit("AlertHandling ",async()=>
    {
        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
        await $('button[ondblclick="myFunction()"]').doubleClick()
        await browser.pause(10000)
        console.log(await browser.isAlertOpen())
        const alerttext=(await browser.getAlertText())
        await expect(alerttext).toEqual("You double clicked me.. Thank You..")
        await browser.acceptAlert()
        await browser.pause(3000)
        console.log(await browser.isAlertOpen())
       
    })
    it("web table validation",async()=>
    { 
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("tr th:nth-child(1)").click()
         const originalVeggis = await $$('tr td:nth-child(1)')
        const veggiloc=originalVeggis.slice()
        const newveggi= veggiloc.sort()
       //await expectchai(newveggi).toEqual(originalVeggis)
        
        
        
    })

})
   
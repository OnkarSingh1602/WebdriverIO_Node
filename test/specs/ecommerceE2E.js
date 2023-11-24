describe("Ecommerce Application",async()=>
{
    it("End to End test ",async()=>
    {
        const products =["iphone X", "Blackberry"]
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $('#username').setValue("rahulshettyacademy")
        await $('input[type="password"]').setValue("learning")
        await $('input[value="Sign In"]').click()
        await $('*=Checkout').waitForExist()
        const itemlist = await $$('div[class="card h-100"')
        for (let i=0;i<await itemlist.length;i++)
        {
          const item=await itemlist[i].$('div h4 a')
          if(products.includes(await item.getText()))
          {
            await itemlist[i].$('div button').click()
          }
        }
        await $('*=Checkout').click()
        const checkoutList= await $$("//tbody/tr/td[4]/strong")
        const TotalPaisa =(await Promise.all (await checkoutList.map(async (checkoutList)=> parseInt ((await checkoutList.getText()).split(".")[1].trim()))))
        .reduce((acc,price)=> acc+price,0)
        
       /*  let totalAmount=0
        for (let j=0;j<2;j++)
        {
            const itemblock = await checkoutList[j].$$('td')
            let amount = await itemblock[3].getText()
            let money = amount.slice(3)
            totalAmount= parseInt(money)+totalAmount
        }
        console.log(totalAmount)  */
        let populatedAmount= await $("//tbody/tr[3]/td[5]").getText()
        let populatedmoney=await parseInt(populatedAmount.slice(3))
        
        expect(TotalPaisa).toEqual(populatedmoney)

        await $('//tbody/tr[4]/td[5]').click()
        await $("#country").setValue("Ind")
        const country =await  $$('div [class ="suggestions"] ul')
        for (let i=0 ;i<country.length;I++)
        {
          if (country[i].$('li a') =="India")
          {
            await country[i].click()
          }
        }

        await $('input[value="Purchase"]').click()
        const SuccessScreen = await $(".close").getText()
        expect(SuccessScreen).toHaveTextContaining("Success! Thank you! Your order will be delivered in next few weeks :-).")
 
    })
})
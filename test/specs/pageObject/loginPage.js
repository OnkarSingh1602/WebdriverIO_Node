class LoginPage
{
    get userName()
    {
        return $("#username")
    }
    get password()
    {
        return $('input[type="password"]')
    }
    get signIn()
    {
        return $("#signInBtn")
    }
    get alert()
    {
        return $(".alert-danger")
    }

  async Login(username,password)
  {
    await this.userName.setValue(username)
    await this.password.setValue(password)
    await this.signIn.click()
  }
}
export default new LoginPage()
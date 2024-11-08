import { Locator, Page } from "@playwright/test";

export class LoginPage{

    private readonly usernameText: Locator
    private readonly passwordTxt: Locator
    private readonly loginBoton: Locator

    constructor(page: Page){
        this.usernameText = page.locator('input[name =\'username\']');
        this.passwordTxt = page.locator('input[name =\'password\']');
        this.loginBoton = page.getByRole('button', { name: 'Login' });
    }

    async fillUsername(username: string){
        await this.usernameText.fill(username);
    }

    async fillPassword(password: string){
        await this.passwordTxt.fill(password)
    }

    async fillCredentials(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
      }

    async botonEnter(){
        await this.loginBoton.click()
    }

}
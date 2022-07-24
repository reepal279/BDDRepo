package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import testBase.TestBase;

public class SigninPage extends TestBase {
	

	public void login() {
		/*Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//span[contains(text(),'Account & Lists')]"))).build().perform();
		driver.findElement(By.xpath("//div[@id='nav-flyout-ya-signin']//a[@class='nav-action-button']//span[@class='nav-action-inner'][contains(text(),'Sign in')]")).click();
		driver.findElement(By.id("ap_email")).sendKeys("email");*/
		driver.findElement(By.id("nav-link-accountList-nav-line-1")).click();
		driver.findElement(By.id("ap_email")).sendKeys("saumypatel18374@gmail.com");
		
	}
	
	public void Actionclick() {
		driver.findElement(By.id("continue")).click();
	}
	
	public void Password() {
		/*driver.findElement(By.id("ap_password")).sendKeys("password");
		driver.findElement(By.xpath("//div[@class='a-column a-span12 a-text-center']")).click();*/
		driver.findElement(By.id("ap_password")).sendKeys("Qwerty@1289");
		driver.findElement(By.id("signInSubmit")).click();
	}
	
	public void verifyprofile() {
		/*WebElement varify = driver.findElement(By.xpath("//span[(contains(text(),'Sammy1357'))]"));
		System.out.println(varify);
		varify.isDisplayed();*/
		WebElement varify = driver.findElement(By.xpath("//span[(contains(text(),'Sammy1357'))]"));
		System.out.println(varify);
         String actualtitle = "Hello, Sammy1357";
         System.out.println(actualtitle);
	}
}

package pages;

import java.io.IOException;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import testBase.TestBase;

public class LoginPage extends TestBase {

 
	public  String  getTitle() throws IOException, InterruptedException {
		String actualTitle = driver.getTitle();
	    System.out.println(actualTitle);
		Assert.assertEquals(actualTitle,"Amazon.ca: Low Prices – Fast Shipping – Millions of Items");
		return actualTitle;
		
	}
	
	
	public  void headerLinks() {
	
		WebElement Header = driver.findElement(By.xpath("//div[@id='nav-xshop']"));
		List<WebElement> AllLinks = Header.findElements(By.tagName("a"));
		System.out.println(AllLinks.size());
		
		for (int i=0;i<AllLinks.size();i++) {
			System.out.println(AllLinks.get(i).getText());
		}
   
	}
	
	
}

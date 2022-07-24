package pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class GiftideaPage  extends LoginPage{
	
	public static void clickongift() {
		driver.findElement(By.linkText("Gift Ideas")).click();
	}
	
	public void titlepage() {
		driver.getTitle();
	}


	public static void category() {
	WebElement A = 	driver.findElement(By.xpath("//div[@class='b5zgse-0 ktKnEO']/a"));
	
		List<WebElement> alllinks = A.findElements(By.tagName("a"));
	   
	   for (int a=0;a<alllinks.size();a++) {
	 	  System.out.println(alllinks.get(a).getText());
	   }
	}
}

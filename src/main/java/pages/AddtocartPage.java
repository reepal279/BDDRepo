package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class AddtocartPage extends LoginPage{

	public void search() {
	//driver.findElement(By.id("twotabsearchtextbox")).sendKeys("LaptopName");
		driver.findElement(By.id("twotabsearchtextbox")).sendKeys("Laptop");
	}
	
	public void brand() {
		//driver.findElement(By.xpath("//li[@id='p_89/Lenovo']//span[@class='a-list-item']//a[@class='a-link-normal s-navigation-item']//div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']//label")).click();
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		WebElement  laptopckeckbox= driver.findElement(By.xpath("//li[@id='p_89/Lenovo']//span[@class='a-list-item']//a[@class='a-link-normal s-navigation-item']//div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']//label"));
		jse.executeScript("arguments[0].click();",laptopckeckbox);
	}
	
	public void displaysize() {
		/*JavascriptExecutor jse = (JavascriptExecutor)driver;
		WebElement display = driver.findElement(By.xpath("//li[@id='p_n_size_browse-bin/7326920011']//span[@class='a-list-item']//a[@class='a-link-normal s-navigation-item']//div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']//label"));
		jse.executeScript("arguments[0].click();",display);*/
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		WebElement display = driver.findElement(By.xpath("//li[@id='p_n_size_browse-bin/7326920011']//span[@class='a-list-item']//a[@class='a-link-normal s-navigation-item']//div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']//label"));
		jse.executeScript("arguments[0].click();",display);
	
	}
	

	public void Cpucorenumber() {
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		//WebElement number = driver.findElement(By.xpath("//li[@id='p_n_feature_fourteen_browse-bin/7322419011']//span[@class='a-list-item']//a[@class='a-link-normal s-navigation-item']//div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']//label"));
		//jse.executeScript("arguments[0].click();",number);
		WebElement number = driver.findElement(By.xpath("//li[@id='p_n_feature_fourteen_browse-bin/7322419011']//span[@class='a-list-item']//a[@class='a-link-normal s-navigation-item']//div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']//label"));
		jse.executeScript("arguments[0].click();",number);
	
	}

     public void ramsize() {
    	
    	 JavascriptExecutor jse = (JavascriptExecutor)driver;
    	 WebElement rams = driver.findElement(By.xpath("//li[@id='p_n_feature_twenty-five_browse-bin/23720047011']//span[@class='a-list-item']//a[@class='a-link-normal s-navigation-item']//div[@class='a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left']//label"));
 		jse.executeScript("arguments[0].click();",rams);

     }
     public void clickonlaptop() {
 	     //driver.findElement(By.xpath("//div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_2']//div[@class='s-card-container s-overflow-hidden aok-relative s-expand-height s-include-content-margin s-latency-cf-section s-card-border']//div[@class='a-section a-spacing-base']//div[@class='a-section a-spacing-small s-padding-left-small s-padding-right-small']")).click();
    	 driver.findElement(By.linkText("Lenovo ThinkPad T480 14-inch HD Business Laptop (Intel 8th Gen Quad-Core i5-8250U, 16GB DDR4 RAM, Toshiba 256GB PCIe NVMe 2242 M.2 SSD) Fingerprint, Thunderbolt 3 Type-C, WiFi, Windows 10 Pro (Renewed)")).click();
     }
 	
     public void addtocartbutton() {
 		//driver.findElement(By.xpath("//input[@id='add-to-cart-button']")).click();
 		//driver.findElement(By.xpath("//span[@id='attachSiNoCoverage']//span[@class='a-button-inner']//input[@type='submit']")).click();
    	 driver.findElement(By.xpath("//input[@id='add-to-cart-button']")).click();
    	 //accidental protection plan
    	 driver.findElement(By.id("attachSiNoCoverage")).click();
     }
     
     public void Gotocart() {
  		//driver.findElement(By.xpath("//span[@class='nav-cart-icon nav-sprite']")).click();
    	 driver.findElement(By.xpath("//span[@class='nav-cart-icon nav-sprite']")).click();
     }
   
  
     public void checkout() {
   		//driver.findElement(By.xpath("//span[@id='sc-buy-box-ptc-button']//span[@class='a-button-inner']//input[@type='submit']")).click();
    	 driver.findElement(By.xpath("//form[@id='sw-ptc-form']")).click();
     }

}

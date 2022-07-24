package StepDefination;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.AddtocartPage;
import pages.LoginPage;
import pages.SigninPage;
import testBase.TestBase;
import testUtil.TestUtil;

public class AddtocartStepDefination extends TestBase{
AddtocartPage addtocartPage;
LoginPage loginPage;
TestBase testbase;
SigninPage signinPage;
TestUtil testUtil;

@Given("^search for \"([^\"]*)\"$")
public void search_for(String LaptopName) throws IOException  {
	addtocartPage.search();
}

@Then("^select \"([^\"]*)\"$")
public void select1(String arg1){
	addtocartPage.brand();
}

@Then("^select (\\d+)\"([^\"]*)\" display size$")
public void select_display_size(int arg1, String arg2){
	addtocartPage.displaysize();
}

@Then("^select Quad core Number of CPU cores$")
public void select_Quad_core_Number_of_CPU_cores(){
	addtocartPage.Cpucorenumber();
}

@Then("^select  \"([^\"]*)\"$")
public void select(String arg1){
	addtocartPage.ramsize();
}

@Then("^click on Lenovo Thinkpad T(\\d+) laptop$")
public void click_on_Lenovo_Thinkpad_T_laptop(int arg1) {
	addtocartPage.clickonlaptop();
}

@Then("^add to cart$")
public void add_to_cart(){
	addtocartPage.addtocartbutton();
}

@Then("^go to cart$")
public void go_to_cart(){
	addtocartPage.Gotocart();
}

@Then("^verify your added product is correct or not$")
public void verify_your_added_product_is_correct_or_not() {
	  WebElement expected = driver.findElement(By.xpath("//span[@class='a-truncate-cut']"));   
	  String actual = "Lenovo ThinkPad T480 14-inch HD Business Laptop (Intel 8th Gen Quad-Core i5-8250U, 16GB DDR4 RAM, Toshiba 256GB PCIe NVMe 2242 M.2 SSD) Fingerprint, Thunderbolt…";
	  Assert.assertEquals(actual,expected,"title is same ");
}

@Then("^click on proceed to checkout$")
public void click_on_proceed_to_checkout() {
	addtocartPage.checkout();
}
}

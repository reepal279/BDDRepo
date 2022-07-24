	package StepDefination;

import java.io.IOException;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.LoginPage;
import pages.SigninPage;
import testBase.TestBase;
import testUtil.TestUtil;

public class LoginStepDefination extends TestBase {
	/*LoginPage loginPage;
	SigninPage signinPage;
	TestUtil testUtil;*/
	LoginPage loginPage;
	TestBase testbase;
	SigninPage signinPage;
	TestUtil testUtil;
	
	

	@Given("^open amazon links$")
	public void open_amazon_links() throws IOException, InterruptedException{
		initialization();

	}

	@When("^get a title of page$")
	public void get_a_title_of_page() throws IOException, InterruptedException{
		 loginPage = new LoginPage();
		loginPage.getTitle();
		
	}

	@Then("^get a all page top links$")
	public void get_a_all_page_top_links() {
		loginPage.headerLinks();
		
	}
	@Then("^close the browser\\.$")
	public void close_the_browser() throws Throwable {
	  closebrowser();
	}
	
}

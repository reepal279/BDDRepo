package StepDefination;

import java.io.IOException;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.LoginPage;
import pages.SigninPage;
import testBase.TestBase;
import testUtil.TestUtil;

public class SigninStepDefination extends TestBase {
	LoginPage loginPage;
	TestBase testbase;
	SigninPage signinPage;
	TestUtil testUtil;
    
	@Given("^enter emailadress\"([^\"]*)\"$")
	public void enter_emailadress(String arg1) throws IOException{
		signinPage.login();
	}

	@Then("^click on continue$")
	public void click_on_continue(){
		signinPage.Actionclick();
	}

	@Then("^entre \"([^\"]*)\"$")
	public void entre(String arg1){
		signinPage.Password();
	}

	@Then("^verify your profile$")
	public void verify_your_profile(){
		signinPage.verifyprofile();
	}

}

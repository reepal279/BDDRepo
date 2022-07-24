package StepDefination;

import java.io.IOException;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.GiftideaPage;
import pages.LoginPage;
import pages.SigninPage;
import testBase.TestBase;
import testUtil.TestUtil;

public class GiftIdeaStepDefination extends TestBase{
	GiftideaPage giftideaPage;

	
	@Given("^go to gift ideas$")
	public void go_to_gift_ideas() throws IOException {
		GiftideaPage.clickongift();
	}

	@When("^get a title of a page$")
	public void get_a_title_of_a_page() throws IOException, InterruptedException{
		String actualtitle = "Gifts for Everyone | Amazon.ca Gift Finder";
		  Assert.assertEquals(actualtitle,LoginPage.getTitle(),"title is same ");
	}

	@Then("^get catogery under who are you shopping for$")
	public void get_catogery_under_who_are_you_shopping_for() {
		GiftideaPage.category();
	}

}

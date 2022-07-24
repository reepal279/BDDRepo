package myRunner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(
		features = "C:\\Selenium_workSpace\\amazon\\src\\main\\java\\feature\\login.feature",
		glue= {"StepDefination"},
		plugin= {"pretty", "html:test-output"},
	    monochrome = true,  //Monochrome displays the console output in a proper readable format.
        strict = true, 
		dryRun = false
		)

public class Runner {
    private TestNGCucumberRunner testNGCucumberRunner;

    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper cucumberFeature) {
        testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
    }

    @DataProvider  // this Dataprovider is not related to Excel data. It is  used to run "Multiple Features files" one by one.
    public Object[][] features() {
        return testNGCucumberRunner.provideFeatures();
    }

     
    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        testNGCucumberRunner.finish();
   }
    
}

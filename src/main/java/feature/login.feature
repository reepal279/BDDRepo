@login
Feature: amazon site

Scenario: amazon site 

Given open amazon links
When get a title of page
Then get a all page top links

Scenario Outline: sign-in to your account

Given enter emailadress"<email>" 
Then click on continue
Then entre "<password>"
Then verify your profile
Examples:
 |email|password|
 |saumypatel18374@gmail.com|Qwerty@1289|
 

Scenario Outline: search for Lenovo Thinkpad T480 laptop

Given search for "<LaptopName>"
Then select "<brand>"
Then select 14" to 14.9" display size
Then select Quad core Number of CPU cores
Then select  "<RAM size>"
Then click on Lenovo Thinkpad T480 laptop
Then add to cart 
Then go to cart 
Then verify your added product is correct or not
Then click on proceed to checkout
Examples:
|LaptopName|brand|RAM size|
|Thinkpad|lenovo|16 GB|


Scenario: Go to gift ideas

Given go to gift ideas
When get a title of a page
Then get catogery under who are you shopping for 
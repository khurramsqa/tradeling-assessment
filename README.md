# tradeling-assessment

## Pre-Req:
1. Following softwares should be installed on to your machine else follow instructions as mentioned:
  1. Nodejs --> If not then please follow below steps:
    1. Navigate to https://nodejs.org/en/download/. 
    2. Click the Windows Installer button to download the latest default version. The Node.js installer includes the NPM package manager. 
    3. Once installation finished you can verify your installation by executing these commands:
        -- node –v --> It will display the version of Nodejs and similarly you can do for
        -- npm -v --> It will display the npm version).
  2. Visual Source code.
  3. Cypress
  
## Download or clone the code:
1. Go to github, and clone the code from "tradeling-assessment" to your local drive.
2. Open VS code and open the "tradeling-assessment" folder which was just cloned from github.
3. Go to the terminal tab of VS code and type the below command:
  1. npm init --> will create package.json.
  2. npm init --> for setting up the local project.

## Running the Code:
1. The assignment is placed under cypress folder as:
  1. Cypress//integration//Amazon//automation_scripts.js --> All Amazon scenarios are automated in this one file.
  2. 1. Cypress//integration//Amazon//Binance//automation_scenario1. Binance scenario-1 automation code present here.
     2. Cypress//integration//Amazon//Binance//automation_scenario2. Binance scenario-2 automation code present here.
     3. Cypress//integration//Amazon//Binance//automation_scenario3. Binance scenario-3 automation code present here.
     
2. To execute the code we have to run the testrunner by executing following command on the terminal of VS Code:
   1. node_modules\.bin\cypress open --> It will open the testrunner window and if error comes due to restriction policy then type below command:
      a. Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
   2. As the Testrunner window showing now try to execute the scenarios and see the results. Thanks!

## Manual Scenario Creation:
  For manual test cases please refer to the sheet: ---> Tradelingassessment test cases.xlsx
   
## Challenges/Limitations:
1. I have hands on experience in Selenium but for this case Study I have to learn Cypress parallel to automate the given scenarios.
2. Amazon security forces to ask for OTP even if existing user is logged in multiple browsers.
3. I did Amazaon scenario automation with existing account as for New account creation in Amazon I was associating gmail account but it rquires gmail api integration. Its an exciting dimension with great challenges so at the moment I am only able to expose gmail api with cypress (Automation is yet to done and I am working on it as I found it an exciting learning opportunity for myself).

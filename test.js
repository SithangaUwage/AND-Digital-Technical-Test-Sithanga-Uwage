var assert = require('assert');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

// ***************************************************************************************************** //
// Change file path
driver.get("C://Users//Sithanga Uwage//Desktop//AND Digital Technical Test Sithanga Uwage//index.html");
// ***************************************************************************************************** //

var selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectAll = driver.findElement({
  id: 'filterText'
}).sendKeys('All');
driver.sleep(8000);
selectElem.click();


selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectJavaScript = driver.findElement({
  id: 'filterText'
}).sendKeys('JavaScript');
driver.sleep(8000);
selectElem.click();


selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectPHP = driver.findElement({
  id: 'filterText'
}).sendKeys('PHP');
driver.sleep(8000);
selectElem.click();


selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectDocker = driver.findElement({
  id: 'filterText'
}).sendKeys('Docker');
driver.sleep(8000);
selectElem.click();

selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectRuby = driver.findElement({
  id: 'filterText'
}).sendKeys('Ruby');
driver.sleep(8000);
selectElem.click();

selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectPython = driver.findElement({
  id: 'filterText'
}).sendKeys('Python');
driver.sleep(8000);
selectElem.click();

driver.sleep(12000);
selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectAzure = driver.findElement({
  id: 'filterText'
}).sendKeys('Azure');
driver.sleep(8000);
selectElem.click();

selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectJava = driver.findElement({
  id: 'filterText'
}).sendKeys('Java');
driver.sleep(8000);
selectElem.click();

selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectAWS = driver.findElement({
  id: 'filterText'
}).sendKeys('AWS');
driver.sleep(8000);
selectElem.click();

selectElem = driver.findElement(webdriver.By.id("filterText"));
selectElem.click();
var selectDotNet = driver.findElement({
  id: 'filterText'
}).sendKeys('.Net');
driver.sleep(8000);
selectElem.click();

driver.sleep(8000);

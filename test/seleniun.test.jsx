const {Builder,Key,By,Capabilities} = require(selenium-webdrive);
const chromeCapabilities = Capabilities.chrome()
chromeCapabilities.set('chromeOptions',{args:['--headless']});
let driver = new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
driver.get('  http://172.19.64.1:3000 ');
setTimeout(()=> {console.log("page load");},2000);

driver.findElement(By.id('email')).sendKeys('dbonisegniabf@gmail.com');
driver.findElement(By.id('pass')).sendKeys('1234567');
driver.findElement(By.xpath("//button[@type='submit']")).clik()
driver.quit
driver.close

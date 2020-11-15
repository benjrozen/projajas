const StrainsPage = require('../page-objects/StrainsPage.js');

var HomePage = new (require('../page-objects/HomePage.js')) ;
var StrainsPage = new (require('../page-objects/StrainsPage.js')) ;


  describe("Test potlopedia site", () => {
    browser.ignoreSynchronization=true;

    it("Go to home page", () => {
      browser.get("https://tunker95.pythonanywhere.com/"); // Go to a specific URL
      console.log("Home Page Open succesffully") // Log a message
    });

    it("Test search", () => {
      HomePage.searchBar.click()
      HomePage.searchBar.sendKeys("master")
      HomePage.magnifier.click()
      expect(browser.getCurrentUrl()).toEqual("https://tunker95.pythonanywhere.com/result")
    });

    it("Go to strains page", () => {
      HomePage.menu.click()
      HomePage.menuStrains.click()
      expect(element(by.css(StrainsPage.coIsrntainer)).isPresent().toBe(true);
      browser.sleep(5000)

    });
  });
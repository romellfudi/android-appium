import DisneylandPage from "../pageobjects/disneylandPage.js";

describe("Disneyland park", () => {
  let disneylandPage;

  beforeEach(async () => {
    driver.launchApp();
    disneylandPage = new DisneylandPage();
  });

  afterEach(async () => {
    await driver.closeApp();
  });

  it("1. Category List Test", async () => {
    await disneylandPage.checkIfHotelsCatIsEnabledInCategoryList();
  });

  it("2. Privacy & Legal", async () => {
    await disneylandPage.checkIfListTheWholeListOfPrivacy();
  });

  it("3. Add Plans option", async () => {
    await disneylandPage.checkIfReserveOptionIsListed();
  });


});

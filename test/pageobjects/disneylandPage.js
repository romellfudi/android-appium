// This is an example of a page object for the DisneylandPage android app
export default class DisneylandPage {
  constructor() {
    // select by accessibility "Map, Tab, 2of5"
    this.mapButton = $("~Map, Tab, 2of5");
    // select by id com.disney.wdpro.dlr:id/categoryTitleLayout
    this.catList = $(
      `android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/categoryTitleLayout")`
    );
    // select by class android.widget.LinearLayout and accessibility id "Hotels, Category, 10of11, button"
    this.hotels = $("~Hotels, Category, 10of11, button");
    // select Recycler View by id com.disney.wdpro.dlr:id/moreScreenRecyclerView
    this.recyclerView = $(
      `android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/moreScreenRecyclerView")`
    );
    // select by accessibility id "More Options, Tab, 5of5"
    this.menuButton = $("~More Options, Tab, 5of5");
    // select by accessibility option ids
    this.profileOption = $("~My Profile button");
    this.propertyRulesOption = $("~Property Rules button");
    this.linktoAccountOption = $("~Link to Account button");
    this.helpOption = $("~Help button");
    this.privacyOption = $("~Privacy & Legal button");
    // select liner layout by id com.disney.wdpro.dlr:id/privacy_and_legal_elements
    this.privacyLayout = $(
      `android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/privacy_and_legal_elements")`
    );
    // select by class TextView with text "Privacy Policy"
    this.elemt1 = $(`android=new UiSelector().className("android.widget.TextView").text("Privacy Policy")`);
    // select by class TextView with text "Terms of Use"
    this.elemt2 = $(`android=new UiSelector().className("android.widget.TextView").text("Terms of Use")`);
    // select by class TextView with text "Supplemental Terms and Conditions"
    this.elemt3 = $(`android=new UiSelector().className("android.widget.TextView").text("Supplemental Terms and Conditions")`);
    // select by class TextView with text "Legal Notices"
    this.elemt4 = $(`android=new UiSelector().className("android.widget.TextView").text("Legal Notices")`);
    // select by class TextView with text "Property Rules"
    this.elemt5 = $(`android=new UiSelector().className("android.widget.TextView").text("Property Rules")`);
    // select by class TextView with text "Electronic Communications Disclosure"
    this.elemt6 = $(`android=new UiSelector().className("android.widget.TextView").text("Electronic Communications Disclosure")`);
    // select Add Plans button by id com.disney.wdpro.dlr:id/tab_animated_icon
    this.addPlans = $(
      `android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/tab_animated_icon")`
    );
    // select Check Dining Availability button by class android.widget.FrameLayout and content-desc "Check Dining Availability, 1 of 7, button"
    this.reserve = $("~Check Dining Availability, 1 of 7, button");
  }

  async checkIfHotelsCatIsEnabledInCategoryList() {
    // 1. A Map view should be shown
    await expect(this.mapButton).toBeDisplayed();
    await this.mapButton.click();
    // 2. Different categories are listed to select
    await expect(this.catList).toBeDisplayed();
    await this.catList.click();
    // // 3. Hotels category shoyld be available
    await expect(this.hotels).toBeDisplayed();
    await expect(this.hotels).toBeEnabled();
  }

  async checkIfListTheWholeListOfPrivacy() { 
    // 1. A Menu button should be shown 
    await expect(this.menuButton).toBeDisplayed();
    await this.menuButton.click();
    // 2. Different categories are listed to select: Profile, Property Rules, Link to Account, Help, Privacy & Legal
    await expect(this.recyclerView).toBeDisplayed();
    await this.recyclerView.touchAction([
      { action: "press", x: 10, y: 500 },
      { action: "moveTo", x: 10, y: -5000 },
      "release"
    ]);
    await expect(this.profileOption).toBeDisplayed();
    await expect(this.propertyRulesOption).toBeDisplayed();
    await expect(this.linktoAccountOption).toBeDisplayed();
    await expect(this.helpOption).toBeDisplayed();
    await expect(this.privacyOption).toBeDisplayed();
    // 3. Privacy & Legal screen is displayed
    await this.privacyOption.click();
    await expect(this.privacyLayout).toBeDisplayed();
    // 4. User should be able to see the whole list of Privacy & Legal options (6 elements)
    await expect(this.elemt1).toBeDisplayed(); // Privacy Policy
    await expect(this.elemt2).toBeDisplayed(); // Terms of Use
    await expect(this.elemt3).toBeDisplayed(); // Supplemental Terms and Conditions
    await expect(this.elemt4).toBeDisplayed(); // Legal Notices
    await expect(this.elemt5).toBeDisplayed(); // Property Rules
    await expect(this.elemt6).toBeDisplayed(); // Electronic Communications Disclosure
  }

  async checkIfReserveOptionIsListed() {
    // 1. Add Plans Option List is shown to the user
    await expect(this.addPlans).toBeDisplayed();
    await this.addPlans.click();
    // 2. Reserve Dining Option should be enabled
    await expect(this.reserve).toBeDisplayed();
    await expect(this.reserve).toBeEnabled(); 
  }
}

import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationmenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationmenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});

describe("when user is logged out", () => {
  it("prompts user to sign in", () => {
    const wrapper = mount(MainNav);
    const loginButton = wrapper.findComponent("[data-test='action-button']");
    expect(loginButton.exists()).toBe(true);
  });
});

describe("when user logs in", () => {
  it("displays user profile image", async () => {
    const wrapper = mount(MainNav);
    let profileImage = wrapper.findComponent("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(false);

    const loginButton = wrapper.findComponent("[data-test='action-button']");
    await loginButton.trigger("click");

    profileImage = wrapper.findComponent("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(true);
  });
});
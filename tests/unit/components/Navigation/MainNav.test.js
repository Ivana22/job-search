import { shallowMount } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
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
    const wrapper = shallowMount(MainNav);
    const loginButton = wrapper.findComponent("[data-test='action-button']");
    expect(loginButton.exists()).toBe(true);
  });
});

describe("when user logs in", () => {
  it("displays user profile image", async () => {
    const wrapper = shallowMount(MainNav);
    let profileImage = wrapper.findComponent("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(false);

    const loginButton = wrapper.findComponent("[data-test='action-button']");
    await loginButton.trigger("click");

    profileImage = wrapper.findComponent("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(true);
  });

  it("displays subnav with additional information", async () => {
    const wrapper = shallowMount(MainNav);
    let subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(false);

    const loginButton = wrapper.findComponent("[data-test='action-button']");
    await loginButton.trigger("click");

    subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(true);
  });
});

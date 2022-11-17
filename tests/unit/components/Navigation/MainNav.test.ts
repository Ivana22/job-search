import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";
import { GlobalState } from "@/store/types";

interface MockStore {
  state: Partial<GlobalState>;
}

describe("MainNav", () => {
  const createConfig = ($store: MockStore) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Bobo Careers");
  });

  it("displays menu items for navigation", () => {
    const $store = {
      state: {
        isLoggedIn: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
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

  describe("when user is logged in", () => {
    describe("when user is logged out", () => {
      it("issues call to vuex to login user", async () => {
        const commit = jest.fn();
        const $store = {
          state: {
            isLoggedIn: false,
          },
          commit,
        };

        const wrapper = shallowMount(MainNav, createConfig($store));

        const loginButton = wrapper.findComponent(
          "[data-test='action-button']"
        );
        await loginButton.trigger("click");
        expect(commit).toHaveBeenCalledWith("LOGIN_USER");
      });

      it("prompts user to sign in", () => {
        const $store = {
          state: {
            isLoggedIn: false,
          },
        };
        const wrapper = shallowMount(MainNav, createConfig($store));
        const loginButton = wrapper.findComponent(
          "[data-test='action-button']"
        );
        expect(loginButton.exists()).toBe(true);
      });
    });

    describe("when user logs in", () => {
      it("displays user profile image", () => {
        const $store = {
          state: {
            isLoggedIn: true,
          },
        };
        const wrapper = shallowMount(MainNav, createConfig($store));
        const profileImage = wrapper.findComponent(
          "[data-test='profile-image']"
        );
        expect(profileImage.exists()).toBe(true);
      });

      it("displays subnav with additional information", () => {
        const $store = {
          state: {
            isLoggedIn: true,
          },
        };
        const wrapper = shallowMount(MainNav, createConfig($store));

        const subnav = wrapper.find("[data-test='subnav']");
        expect(subnav.exists()).toBe(true);
      });
    });
  });
});

import mutations from "@/store/mutations";
import { createJob, createState, createDegree } from "./utils";

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      // const state = { isLoggedIn: false } as GlobalState;
      const startingState = createState({ isLoggedIn: false });
      mutations.LOGIN_USER(startingState);
      expect(startingState.isLoggedIn).toBe(true);
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const startingState = createState({ jobs: [] });
      const job1 = createJob();
      const job2 = createJob();
      mutations.RECEIVE_JOBS(startingState, [job1, job2]);
      expect(startingState.jobs).toEqual([job1, job2]);
    });
  });

  describe("RECEIVE_DEGREES", () => {
    it("receives degrees from API response", () => {
      const startingState = createState({ degrees: [] });
      const degree1 = createDegree();
      const degree2 = createDegree();
      mutations.RECEIVE_DEGREES(startingState, [degree1, degree2]);
      expect(startingState.degrees).toEqual([degree1, degree2]);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedOrganizations: [] });
      mutations.ADD_SELECTED_ORGANIZATIONS(startingState, ["Org1", "Org2"]);
      expect(startingState.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates job types that the user has chosen to filter jobs by", () => {
      const startingState = createState({ selectedJobTypes: [] });
      mutations.ADD_SELECTED_JOB_TYPES(startingState, ["Fulltime", "Parttime"]);
      expect(startingState.selectedJobTypes).toEqual(["Fulltime", "Parttime"]);
    });
  });
});

import { Job, Degree } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
  degrees: Degree[];
  selectedDegrees: string[];
}

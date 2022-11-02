<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want do to?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear filters" type="secondary" />
        </div>
      </div>
    </section>
    <accordion header="Degree" />
    <accordion header="Job types">
      <p>Placeholder for now</p>
    </accordion>
    <JobFiltersSidebarOrganizations />
    <JobFiltersSidebarJobTypesVue />
  </div>
</template>
<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue";
import JobFiltersSidebarJobTypesVue from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarJobTypesVue,
  },
};
</script>

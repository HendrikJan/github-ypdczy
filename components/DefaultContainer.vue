<template>
  <v-app>
    <v-app-bar class="my-app-bar" flat height="auto">
      <v-container class="py-0 fill-height">
        <v-app-bar-title>TEST APP BAR TITLE</v-app-bar-title>
      </v-container>
    </v-app-bar>

    <v-main id="my-main">
      <v-container>
        <v-row>
          <v-col class="pt-0">
            <v-sheet min-height="70vh">
              <slot></slot>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const links = computed(() => [
  {
    name: $i18n.t('Course coordinator'),
    href: `/#!/courses-overview/${activeYear.value?.name}`,
    visible: props.value.hasCourses && academicYears.value.length > 0,
  },
  {
    name: $i18n.t('My Teaching Load'),
    href: `/#!/courses-overview/${activeYear.value?.name}`,
    visible: props.value.hasCourses && academicYears.value.length > 0,
  },
  {
    name: $i18n.t('Courses'),
    href: `/#!/courses-overview/${activeYear.value?.name}`,
    visible:
      props.value.readableCourseUnits.length > 0 || props.value.canReadAll,
  },
  {
    name: $i18n.t('Staff members'),
    href: `/#!/staffmembers-overview/${activeYear.value?.name}`,
    visible:
      props.value.readableStaffMemberUnits.length > 0 || props.value.canReadAll,
  },
  {
    name: $i18n.t('SAP'),
    href: `/#!/sap-overview/${activeYear.value?.name}`,
    visible:
      process.env.USE_SAP == 'true' &&
      (props.value.readableStaffMemberUnits.length > 0 ||
        props.value.canReadAll),
  },
  {
    name: $i18n.t('Osiris'),
    href: `/#!/osiris-overview/${activeYear.value?.name}`,
    visible:
      props.value.canReadSomeUnit ||
      props.value.canViewReports ||
      props.value.canReadAll,
  },
  {
    name: $i18n.t('Reports'),
    to: `/report?activeYear=/${activeYear.value?.name}`,
    visible:
      props.value.canReadAppointments ||
      props.value.canReadSomeUnit ||
      props.value.canViewReports ||
      props.value.canReadAll,
  },
  {
    name: $i18n.t('Appointments2'),
    href: `/#!/appointments-overview/${activeYear.value?.name}`,
    visible: props.value.canReadAppointments,
  },
  {
    name: $i18n.t('Settings'),
    href: `/#!/settings-overview/${activeYear.value?.name}`,
    visible:
      props.value.canReadAppointments ||
      props.value.canReadSomeUnit ||
      props.value.canReadAll,
  },
  {
    name: $i18n.t('Accounts'),
    href: `/#!/accounts-overview/${activeYear.value?.name}`,
    visible:
      props.value.readableStaffMemberUnits.length > 0 || props.value.canReadAll,
  },
  {
    name: $i18n.t('Documentation'),
    href: `/#!/documents-overview/${activeYear.value?.name}`,
    visible: true,
  },
]);
</script>

<style scoped lang="scss">
.my-app-bar {
  border-bottom: 1px solid #dddddd !important;
  min-height: 51px;
}

.my-app-bar .v-toolbar__content {
  height: auto;
}
</style>

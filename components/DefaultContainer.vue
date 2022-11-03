<template>
  <v-app>
    <v-app-bar class="my-app-bar" flat height="auto">
      <v-container class="py-0 fill-height">
        <v-app-bar-title>TAPP</v-app-bar-title>
        <v-btn class="my-nav-btn" v-for="link in links">
          {{ link.name }}
        </v-btn>
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const links = computed(() => [
  {
    name: t('Courses'),
    href: `/#!/courses-overview/`,
  },
  {
    name: t('Staff members'),
    href: `/#!/staffmembers-overview/`,
  },
  {
    name: t('SAP'),
    href: `/#!/sap-overview/`,
  },
  {
    name: t('Osiris'),
    href: `/#!/osiris-overview/`,
  },
  {
    name: t('Reports'),
    to: `/report?activeYear=/`,
  },
  {
    name: t('Appointments2'),
    href: `/#!/appointments-overview/`,
  },
  {
    name: t('Settings'),
    href: `/#!/settings-overview/`,
  },
  {
    name: t('Accounts'),
    href: `/#!/accounts-overview/`,
  },
  {
    name: t('Documentation'),
    href: `/#!/documents-overview/`,
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

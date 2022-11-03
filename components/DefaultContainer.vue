<template>
  <v-app>
    <v-app-bar>
      <v-container class="py-0 fill-height">
        <v-app-bar-title>TEST APP BAR TITLEX</v-app-bar-title>
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

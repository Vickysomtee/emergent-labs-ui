<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "@/assets/sass/main.scss";
@import "@/assets/sass/_variables.scss";

*,
::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  list-style-type: none;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>

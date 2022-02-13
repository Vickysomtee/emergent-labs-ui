module.exports = {
  css: {
       loaderOptions: {
            sass: {
                 additionalData: `
                 @import "@/assets/sass/main.scss";
                 @import "@/assets/sass/_variables.scss";
                 `
            }
       }
  }
}
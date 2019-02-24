const mix = require('laravel-mix');
const min = Mix.inProduction() ? '.min' : '';

if (!Mix.inProduction()) {
    mix.sourceMaps();
}
mix.babel(`src/js/mobilemenu.js`, `dist/mobilemenu${min}.js`);
// mix.sass(`src/scss/admin.scss`, `assets/css/admin${min}.css`);
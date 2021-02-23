let mix = require('laravel-mix');

mix.disableNotifications();
mix.setPublicPath('dist');
mix.js('src/js/main.js', 'dist');
// mix.babel(['src/js/jquery-3.5.1.min.js', 'src/js/main.js'], "dist/main.js");
mix.sass('src/sass/main.scss', 'dist');

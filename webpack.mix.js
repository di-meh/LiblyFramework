let mix = require('laravel-mix');

mix.disableNotifications();
mix.setPublicPath('dist');
mix.js('src/js/main.js', 'dist');
mix.sass('src/sass/main.scss', 'dist');

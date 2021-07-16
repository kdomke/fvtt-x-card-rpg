const mix = require('laravel-mix');
require('laravel-mix-zip');
mix.js('src/js/x-card-rpg.js', 'scripts')
    .sass('src/css/x-card-rpg.scss', 'css');

// Add versioning to assets in production environment
if ( mix.inProduction() ) {
    mix.options({
        terser: {
            terserOptions: {
                keep_fnames: true,
                compress: {
                    pure_funcs: ['console.log', 'console.debug', 'console.warn']
                }
            }
        }
    });
    mix.zip(['templates', 'img', 'sounds', 'scripts', 'lang', 'css'], ['module.json'], 'x-card-rpg.zip');
}
Mix.manifest.refresh = _ => void 0

const mix = require('laravel-mix').setPublicPath('dist');

mix.js('src/x-card-rpg.js', 'dist');


// Add versioning to assets in production environment
if ( mix.inProduction() ) {
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    //drop_console: true,
                    pure_funcs: ['console.log', 'console.debug', 'console.warn']
                }
            }
        }
    });
    mix.version();

}
Mix.manifest.refresh = _ => void 0

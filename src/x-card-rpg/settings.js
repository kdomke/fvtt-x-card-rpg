export default class Settings {
    constructor() {
        this.register_x_card_rpg_settings();
    }

    /**
     * Register the settings
     */
    register_x_card_rpg_settings() {
        Hooks.once('ready', function () {
            console.log("Register X-Card settings");
            game.settings.register("x-card-rpg", "anonymous_chat_message", {
                name: "Diffusion anonyme dans le chat",
                hint: "Lorsqu'un joueur appuie sur le bouton X-Card, diffuser anonymement un message dans le chat. Si cette case est décochée, le nom du joueur apparaitra dans la fenêtre de chat",
                scope: "world",
                config: true,
                type: Boolean,
                default: false
            });    
        })
        
    }
}

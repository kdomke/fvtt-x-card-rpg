import extraTypes from '../../../../settings-extender/settings-extender.js'

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
                default: true
            });
            game.settings.register("x-card-rpg", "x_card_rpg_custom_image", {
                name: "X-Card personnalisée",
                hint: "Vous pouvez choisir une image personnelle comme X-Card.",
                scope: "world",
                config: true,
                type: extraTypes.FilePickerImage,
                default: ''
            });
        })
        
    }

    static async getXCardPath(){
        const img_xcard_custom = game.settings.get("x-card-rpg", "x_card_rpg_custom_image");
        return  img_xcard_custom === null ? 'modules/x-card-rpg/img/x-card-rpg.png' : img_xcard_custom;
    }
}

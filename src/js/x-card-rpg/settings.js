export default class Settings {
    constructor() {
        this._register_x_card_rpg_settings();
    }

    /**
     * Register the settings
     * @private
     */
    _register_x_card_rpg_settings() {
        Hooks.once('ready', function () {
            game.settings.register("x-card-rpg", "anonymous_chat_message", {
                name: game.i18n.localize('XCardRpg.Setting_anonymous_broadcast_title'),
                hint: game.i18n.localize('XCardRpg.Setting_anonymous_broadcast_hint'),
                scope: "world",
                config: true,
                type: Boolean,
                default: true
            });
            game.settings.register("x-card-rpg", "x_card_rpg_custom_image", {
                name: game.i18n.localize('XCardRpg.Setting_custom_img_title'),
                hint: game.i18n.localize('XCardRpg.Setting_custom_img_hint'),
                scope: "world",
                config: true,
                type: String,
                filePicker: true, 
                default: ''
            });
        })
    }

    /**
     * Return the image path for the X-Card
     * @returns {Promise<string|*>}
     */
    static async getXCardPath(){
        const img_xcard_custom = game.settings.get("x-card-rpg", "x_card_rpg_custom_image");
        return  img_xcard_custom === null ? './modules/x-card-rpg/img/x-card-rpg.png' : img_xcard_custom;
    }
}

import Window from "./window"
import Settings from "./settings"
import loadImage from 'async-image';

export default class Ui {
    constructor() {
        let oldDH = CONFIG.debug.hooks;
        CONFIG.debug.hooks = true;
        this._add_x_card_button();
        CONFIG.debug.hooks = oldDH;
    }
    
    /**
     * Add the button to user menu
     * @private
     */
    _add_x_card_button() {
        Hooks.on('getSceneControlButtons', buttonsList => {
            console.log("x-card-rpg hook called")
            buttonsList.array.forEach(menuButton => {
                menuButton.xCardRPG = {
                    name: "XCardRpg.ButtonName",
                    title: "XCardRpg.ButtonTitle",
                    icon: "fas fa-times",
                    button: true,
                    onClick : this.click_handler.bind(this),
                }
            })
        })
    }

    /**
     * Click handler on the button
     * - Write a Chat Message
     * - Open a window
     */
    async click_handler(){
        game.socket.emit("module.x-card-rpg")
        Ui.create_windows_xcard();
        this.sendChatMessage();
    }
    
    
    /**
     * Send a chat message to all player and to GM
     */
    async sendChatMessage()  {
        const is_anonymous = game.settings.get("x-card-rpg", "anonymous_chat_message");
        const start_content = is_anonymous ? game.i18n.localize("XCardRpg.Chat_message_someone") : game.i18n.localize("XCardRpg.Chat_message_me");
        const messageData=  {
            type: CONST.CHAT_MESSAGE_TYPES.OTHER,
            sound :"modules/x-card-rpg/sounds/alert.wav",
            content: `<p style='text-align:center'><strong>${start_content} ${game.i18n.localize('XCardRpg.Chat_message_put_a_card')}</strong><br>${game.i18n.localize('XCardRpg.Chat_message_change_subject')}</p>`
        }
        if(is_anonymous){
            messageData.speaker = {
                alias: game.i18n.localize("XCardRpg.ButtonName")
            }
        }
        await ChatMessage.create(messageData);
    }


    /**
     * Create an application window to display the X-Card
     * @returns {Promise<void>}
     */
    static async create_windows_xcard() {
        const img_xcard = await Settings.getXCardPath();
        const img = await loadImage(img_xcard);

        let xc_window = new Window({width:img.width, height:img.height + 30});
        xc_window.render(true);
    }
}

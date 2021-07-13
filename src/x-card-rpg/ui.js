export default class Ui {
    constructor() {
        this.add_x_card_button();
    }

    /**
     * Add the button to user menu
     */
    add_x_card_button() {
        Hooks.on('getSceneControlButtons', buttonsList =>{
            let userMenu = buttonsList.find(element => element.name === 'token' )
            if(userMenu){
                userMenu.tools.push(
                    {
                        name: "XCardRpg.ButtonName",
                        title: "XCardRpg.ButtonTitle",
                        icon: "fas fa-times",
                        button: true,
                        onClick : () => {
                            console.log("X-Card!");
                            this.sendChatMessage()
                        }
                    }
                );
            }
        })
    }
    
    /**
     * Send a anonymous message to all player and to GM
     */
    async sendChatMessage()  {
        const is_anonymous = game.settings.get("x-card-rpg", "anonymous_chat_message");
        const start_content = is_anonymous ? "Quelqu'un vient" : "Je viens";
        const messageData=  {
            type: CONST.CHAT_MESSAGE_TYPES.OTHER,
            content: `<p style='text-align:center'><strong>${start_content} de poser un X-Card sur la table.</strong><br>Changeons de sujet s'il vous plait.</p>`
        }
        if(is_anonymous){
            messageData.speaker = {
                alias: game.i18n.localize("XCardRpg.ButtonName")
            }
        }
        await ChatMessage.create(messageData);
    }
}

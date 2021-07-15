

export default class Window extends Application{
    constructor(options) {
        super(options);
    }
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.template = "modules/x-card-rpg/templates/XCard.html";
        options.title = "";
        options.id = "x-card-rpg";
        options.resizable = false;
        return options;
    }

    async getData() {
        //console.log("Xcard windows getData");
        return {
            img_xcard : await this.getXCardPath()
        };
    }

    async getXCardPath(){
        const img_xcard_custom = game.settings.get("x-card-rpg", "x_card_rpg_custom_image");
        return  img_xcard_custom === null ? 'modules/x-card-rpg/img/x-card-rpg.png' : img_xcard_custom;
    }
}

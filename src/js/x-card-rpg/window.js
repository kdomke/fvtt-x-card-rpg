import Settings from "./settings"

export default class Window extends Application{
    constructor(options) {
        super(options);
    }

    /**
     * Set default option for the window
     * @returns {*|InspectOptions|acorn.Options}
     */
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.template = "modules/x-card-rpg/templates/XCard.html";
        options.title = "X-Card";
        options.id = "x-card-rpg";
        options.resizable = false;
        return options;
    }

    /**
     * Send X-card image to the template
     * @returns {Promise<{img_xcard: (string|*)}>}
     */
    async getData() {
        return {
            img_xcard : await Settings.getXCardPath()
        };
    }
}

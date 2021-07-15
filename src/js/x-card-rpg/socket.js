import Window from "./window"
import Ui from "./ui"
export default class Socket {
    constructor() {
        this._init_socket();
    }
    
    _init_socket() {
        Hooks.once('ready', async function () {
            game.socket.on("module.x-card-rpg", data => {
                Ui.create_windows_xcard();
            });
        });
    }
}

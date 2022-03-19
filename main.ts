import {Plugin} from "obsidian";

export default class NoStartupPage extends Plugin
{
    async onload():Promise<void>
    {
        this.app.workspace.onLayoutReady(()=>{
            console.log("closing all editors");
            this.app.workspace.detachLeavesOfType("markdown");
            this.app.workspace.detachLeavesOfType("graph");
        });
    }
}
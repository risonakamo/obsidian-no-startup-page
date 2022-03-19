"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obsidian_1 = require("obsidian");
class NoStartupPage extends obsidian_1.Plugin {
    async onload() {
        this.app.workspace.onLayoutReady(() => {
            console.log("closing all editors");
            this.app.workspace.detachLeavesOfType("markdown");
            this.app.workspace.detachLeavesOfType("graph");
        });
    }
}
exports.default = NoStartupPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBZ0M7QUFFaEMsTUFBcUIsYUFBYyxTQUFRLGlCQUFNO0lBRTdDLEtBQUssQ0FBQyxNQUFNO1FBRVIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEdBQUUsRUFBRTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFWRCxnQ0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2lufSBmcm9tIFwib2JzaWRpYW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vU3RhcnR1cFBhZ2UgZXh0ZW5kcyBQbHVnaW5cclxue1xyXG4gICAgYXN5bmMgb25sb2FkKCk6UHJvbWlzZTx2b2lkPlxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbkxheW91dFJlYWR5KCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2luZyBhbGwgZWRpdG9yc1wiKTtcclxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmRldGFjaExlYXZlc09mVHlwZShcIm1hcmtkb3duXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuZGV0YWNoTGVhdmVzT2ZUeXBlKFwiZ3JhcGhcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=
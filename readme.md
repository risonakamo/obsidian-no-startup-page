# No Startup Page
Plugin for [Obsidian](https://obsidian.md/) that closes all editors on startup, so there is a fresh "No file is open".

# Installation
1. copy the folder "no-startup-page" in the release folder to your .obsidian/plugins folder
2. enable the plugin in your obsidian plugins settings

# dev
building
```bash
npm run run
```

build and copy to your obsidian plugins dir
1. in scripts folder, edit build-and-install.sh to have correct paths
2. ensure node is on correct version
2. run build-and-install.sh

generate release
1. update version in manifest.json and package.json
2. ensure your node is on the right version
3. in scripts folder, run release-gen.sh
4. tag repo
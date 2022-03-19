# build and copy to your obsidian dir

set -ex
HERE=$(dirname $(realpath $BASH_SOURCE))

# set to your obsidian location
obsidian_dir=/mnt/c/Users/ktkm/Desktop/webpages/obs-notes

# dont change
plugin_dir=$obsidian_dir/.obsidian/plugins/no-startup-page
mkdir -p $plugin_dir

cd $HERE/..
npm run build
cp build/main.js manifest.json $plugin_dir
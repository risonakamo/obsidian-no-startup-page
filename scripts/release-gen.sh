set -ex
HERE=$(dirname $(realpath $BASH_SOURCE))
cd $HERE/..

release_dir=release/no-startup-page

npm run build
mkdir -p $release_dir
cp build/main.js manifest.json $release_dir
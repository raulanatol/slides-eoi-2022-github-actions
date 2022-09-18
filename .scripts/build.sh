#!/bin/bash

set -eu

rm -rf public
mkdir -p public
cp -R assets public/assets
cp -R core public/core

npm run -s og-image
npm run -s deck

#!/bin/bash

set -eu

rm -rf public
mkdir -p public/core/css public/core/config
cp -R assets public/assets
cp -R core/config public/core/config
cp -R core/css public/core/css
cp -R core/base/* public

npm run -s og-image
npm run -s deck

#!/bin/bash

set -eu

rm -rf public
mkdir -p public/core/css public/core/config public/core/components
cp -R assets public/assets
cp -R core/config public/core
cp -R core/css public/core
cp -R core/base/* public
cp -R core/components/*.css public/core/components/

npm run -s og-image
npm run -s deck

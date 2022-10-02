#!/bin/bash

set -eu

git fetch --all
git merge template/main --allow-unrelated-histories

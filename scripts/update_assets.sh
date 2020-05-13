#!/usr/bin/env bash
# Script to update assets 
# Use: run from project root dir.

ASSETS_SCSS_DIR="assets/scss/"

mkdir -p $ASSETS_SCSS_DIR/bootstrap/

#cp node_modules/bootstrap/dist/js/bootstrap.min.js $ASSETS_JS_DIR
cp -r node_modules/bootstrap/scss/* $ASSETS_SCSS_DIR/bootstrap/

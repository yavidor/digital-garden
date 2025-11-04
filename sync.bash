#!/usr/bin/env bash

git submodule update --remote --merge

sleep 1

npx quartz sync

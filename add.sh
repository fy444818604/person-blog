#!/usr/bin/env sh
set -e

nest g controller $1
nest g service $1
nest g module $1

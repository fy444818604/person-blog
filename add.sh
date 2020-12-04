#!/usr/bin/env sh
set -e

nest g module $1
nest g controller $1
nest g service $1

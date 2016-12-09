#!/bin/bash

rsync -avz --exclude '.git' -e ssh . nginx_01:/opt/bitnami/nginx/html

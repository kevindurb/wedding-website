#!/bin/bash

rsync -avz --exclude '.git' -e ssh ./dist nginx_01:/opt/bitnami/nginx/html

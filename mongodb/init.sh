#!/bin/sh

mongoimport --uri="mongodb://root:example@localhost:27017/admin" --collection=cdf --file="./codigos_dtc.csv" --type=csv --headerline
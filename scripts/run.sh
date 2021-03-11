#!/bin/sh
echo "Test load script started..."


####SAMPLE TEST#####

#docker-compose run --service-ports k6 run /scripts/backend-api/manifest.js -i=1000 --vus 10 --duration 30s
#docker-compose run --service-ports k6 run /scripts/backend-api/login.js -i=100 --vus 10 --duration 30s
#docker-compose run --service-ports k6 run /scripts/backend-api/register.js -i=100 --vus 10 --duration 30s
#docker-compose run --service-ports k6 run /scripts/backend-api/checkToken.js -i=100 --vus 10 --duration 30s

#####GREEN ROOM BACK#######
docker-compose run --service-ports k6 run /scripts/greenroom-back/registerContact.js -i=10000 --vus 10 --duration 150s
docker-compose run --service-ports k6 run /scripts/greenroom-back/getContact.js -i=10000 --vus 100 --duration 100s
docker-compose run --service-ports k6 run /scripts/greenroom-back/getContentLayout.js -i=10000 --vus 100 --duration 500s


echo "Test load script done"

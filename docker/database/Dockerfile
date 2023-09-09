FROM mysql:8.0.34

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=german_cloud
ENV MYSQL_PASSWORD=root

COPY 01-schema.sql /docker-entrypoint-initdb.d/
COPY 02-data.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

CMD ["mysqld"]

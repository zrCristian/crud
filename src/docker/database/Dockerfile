FROM mysql:8.0.34

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=db
ENV MYSQL_PASSWORD=root

COPY schema.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

CMD ["mysqld"]

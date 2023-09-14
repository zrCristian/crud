USE german_cloud; 

INSERT INTO roles (name) 
VALUES 
('Admin'), 
('User'), 
('Instructor');

INSERT INTO categories (name) VALUES 
('aws'), ('cloud'), ('certificate'), ('aws associate'), 
('aws practicioner'), ('aws professional'), ('aws specialty'), 
('kubernetes'), ('kubernetes specialty'), ('operations'), 
('google cloud'), ('azure'), ('networking'), ('development'), 
('comptia'), ('python'), ('boto3');


INSERT INTO categories (name) 
VALUES 
('Programming'), 
('Design'), 
('Marketing');

INSERT INTO courses (name, price, duration, description, image, stars) VALUES 
('AWS Solutions Architect Associate', 199, 35, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit eget nunc convallis congue. Phasellus consequat mattis velit, in placerat nisl placerat in. Aenean ultricies semper arcu ac aliquet. Ut neque urna, egestas ut condimentum a, tincidunt quis massa. Sed vestibulum tempor sem id bibendum. Cras quis urna elit. Praesent quis est neque. In eros turpis, lobortis et lectus in, pellentesque luctus odio. Curabitur sodales elementum scelerisque.', 'https://cdn.dev.eichemberger.com/courses/saa.png', 5),
('AWS Cloud Practicioner', 59, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit eget nunc convallis congue. Phasellus consequat mattis velit, in placerat nisl placerat in. Aenean ultricies semper arcu ac aliquet. Ut neque urna, egestas ut condimentum a, tincidunt quis massa. Sed vestibulum tempor sem id bibendum. Cras quis urna elit. Praesent quis est neque. In eros turpis, lobortis et lectus in, pellentesque luctus odio. Curabitur sodales elementum scelerisque.', 'https://cdn.dev.eichemberger.com/courses/cpf.png', 3),
('AWS Solutions Architect Professional', 399, NULL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit eget nunc convallis congue. Phasellus consequat mattis velit, in placerat nisl placerat in. Aenean ultricies semper arcu ac aliquet. Ut neque urna, egestas ut condimentum a, tincidunt quis massa. Sed vestibulum tempor sem id bibendum. Cras quis urna elit. Praesent quis est neque. In eros turpis, lobortis et lectus in, pellentesque luctus odio. Curabitur sodales elementum scelerisque.', 'https://cdn.dev.eichemberger.com/courses/sap.png', 5),
('AWS Database Specialty', 399, 42, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit eget nunc convallis congue. Phasellus consequat mattis velit, in placerat nisl placerat in. Aenean ultricies semper arcu ac aliquet. Ut neque urna, egestas ut condimentum a, tincidunt quis massa. Sed vestibulum tempor sem id bibendum. Cras quis urna elit. Praesent quis est neque. In eros turpis, lobortis et lectus in, pellentesque luctus odio. Curabitur sodales elementum scelerisque.', 'https://cdn.dev.eichemberger.com/courses/dbs.png', 5);

INSERT INTO courses 
(id, name, description, price, duration, image, stars)
VALUES
(5, 'Kubernetes Security Specialty', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit eget nunc convallis congue. Phasellus consequat mattis velit, in placerat nisl placerat in. Aenean ultricies semper arcu ac aliquet. Ut neque urna, egestas ut condimentum a, tincidunt quis massa. Sed vestibulum tempor sem id bibendum. Cras quis urna elit. Praesent quis est neque. In eros turpis, lobortis et lectus in, pellentesque luctus odio. Curabitur sodales elementum scelerisque.', 239, NULL, 'https://cdn.dev.eichemberger.com/courses/kss.png', 5),
(6, 'AWS Devops Professional', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit eget nunc convallis congue. Phasellus consequat mattis velit, in placerat nisl placerat in. Aenean ultricies semper arcu ac aliquet. Ut neque urna, egestas ut condimentum a, tincidunt quis massa. Sed vestibulum tempor sem id bibendum. Cras quis urna elit. Praesent quis est neque. In eros turpis, lobortis et lectus in, pellentesque luctus odio. Curabitur sodales elementum scelerisque.', 299, 56, 'https://cdn.dev.eichemberger.com/courses/dep.png', 5),
(7, 'AWS Developer Associate', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at velit eget nunc convallis congue. Phasellus consequat mattis velit, in placerat nisl placerat in. Aenean ultricies semper arcu ac aliquet. Ut neque urna, egestas ut condimentum a, tincidunt quis massa. Sed vestibulum tempor sem id bibendum. Cras quis urna elit. Praesent quis est neque. In eros turpis, lobortis et lectus in, pellentesque luctus odio. Curabitur sodales elementum scelerisque.', 199, 41, NULL, 5),
(8, 'Google Cloud Professional Architect', 'This course helps you design, develop and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.', 299, 123, NULL, 4.5),
(9, 'Azure Administrator Associate', 'Learn how to manage and maintain the infrastructure for the core web apps and services that developers build and deploy.', 199, 23, NULL, 4.5),
(10, 'AWS SysOps Administrator', 'This course is designed to teach those in a Systems Administrator role how to operate within the AWS ecosystem.', 199, NULL, NULL, 5),
(11, 'Google Cloud Network Engineer', 'Dive deep into the nuances of networking in the Google Cloud platform and enhance your knowledge of global, regional and zonal resources.', 249, 49, NULL, 4),
(12, 'Azure Developer Associate', 'Learn about the development side of Azure. From creating apps and solutions to integrating with other Azure services.', 229, NULL, NULL, 4.5),
(13, 'CompTIA Cloud+ Certification', 'CompTIA Cloud+ covers the increased diversity of knowledge, skills and abilities required of system administrators to validate what is necessary to perform effectively in data center jobs. It includes the new technologies to support the changing cloud market.', 299, NULL, NULL, 4.7),
(14, 'Python for AWS with Boto3', 'Delve into the world of AWS automation with Python''s Boto3 library. From setting up AWS resources to querying and maintaining them, this course provides a comprehensive insight into how Python can be used to manage AWS resources effectively and efficiently.', 179, NULL, NULL, 4.9);


INSERT INTO courses (name, price, duration, description, image, stars, discount, is_deleted) 
VALUES 
('AWS Solutions Architect Associate', 199.0, 30.0, 'A courses that will help you to pass the AWS solutions architect certification', 'https://cdn.dev.eichemberger.com/courses/saa.jpg', 5.0, 0.0, FALSE);

INSERT INTO users (name, lastname, email, password, profile_image, send_notification, is_deleted, role_id) 
VALUES 
('German', 'Eichemberger', 'german@admin.com', '$2a$10$eGkFOHoEbbs4y/WbtrCC2uYmmGMxg8AyxSjfnvzbYZKQc4OdBWIG.', 'https://cdn.dev.eichemberger.com/users/german.jpg', FALSE, FALSE, 1), 
('Cosmos', 'Kramerica', 'cosmos@kramerica.com', '$2a$10$eGkFOHoEbbs4y/WbtrCC2uYmmGMxg8AyxSjfnvzbYZKQc4OdBWIG.','https://cdn.dev.eichemberger.com/users/kramer.jpg', FALSE, FALSE, 2);

INSERT INTO courses_categories (course_id, category_id) 
VALUES 
(1, 1), 
(2, 2);

INSERT INTO user_favorites_courses (user_id, course_id) 
VALUES 
(1, 1), 
(2, 2);

INSERT INTO orders (user_id, final_price, order_status) 
VALUES 
(1, 90.0, 'Completed'), 
(2, 80.0, 'Pending');

INSERT INTO order_item (price, discount, course_id, order_id) 
VALUES 
(90.0, 10.0, 1, 1), 
(80.0, 0.0, 2, 2);

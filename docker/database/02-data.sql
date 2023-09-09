USE german_cloud; 

INSERT INTO roles (name) 
VALUES 
('Admin'), 
('User'), 
('Instructor');

INSERT INTO categories (name) 
VALUES 
('Programming'), 
('Design'), 
('Marketing');

INSERT INTO courses (name, price, duration, description, image, starts, discount, is_deleted) 
VALUES 
('Programming 101', 100.0, 30.0, 'An introductory course to programming', 'image1.jpg', 1.0, 0.0, FALSE), 
('Graphic Design Basics', 80.0, 20.0, 'An introductory course to graphic design', 'image2.jpg', 1.0, 10.0, FALSE);

INSERT INTO users (name, lastname, email, profile_image, send_notification, is_deleted, role_id) 
VALUES 
('John', 'Doe', 'john.doe@example.com', 'profile1.jpg', FALSE, FALSE, 2), 
('Jane', 'Smith', 'jane.smith@example.com', 'profile2.jpg', TRUE, FALSE, 2);

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

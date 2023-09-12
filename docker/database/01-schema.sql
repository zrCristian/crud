CREATE DATABASE IF NOT EXISTS german_cloud; 

USE german_cloud;

CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
); 

CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
); 

CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT,
    duration FLOAT,
    description TEXT,
    image VARCHAR(255),
    stars FLOAT,
    discount FLOAT DEFAULT 0,
    is_deleted boolean DEFAULT FALSE, 
    deleted_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS courses_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL, 
    category_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    profile_image VARCHAR(255),
    send_notification BOOLEAN DEFAULT FALSE,
    is_deleted BOOLEAN DEFAULT FALSE, 
    deleted_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id) 
);

CREATE TABLE IF NOT EXISTS user_favorites_courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    final_price FLOAT NOT NULL, 
    order_status VARCHAR(255), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS order_item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    price FLOAT NOT NULL, 
    discount FLOAT DEFAULT 0,
    course_id INT NOT NULL,
    order_id INT NOT NULL, 
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);


--VALUES TO USERS TABLE--

INSERT INTO users (user_name, email, password, avatar_url, date_join) VALUES
('Chai', 'chai@gmail.com', 'chai', 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png', '2019-01-01'),
('Ris', 'ris@ymail.com', 'ris', 'https://img.icons8.com/officel/80/000000/name.png', '2019-02-02'),
('Josh', 'josh@gmail.com', 'josh', 'https://img.icons8.com/officel/80/000000/name.png', '2019-03-03'),
('Andy', 'andy@ymail.com', 'andy', 'https://img.icons8.com/officel/80/000000/name.png', '2019-04-04'),
('Will', 'will@gmail.com', 'will', 'https://img.icons8.com/officel/80/000000/name.png', '2019-05-05'),
('Gary', 'gary@ymail.com', 'gary', 'https://img.icons8.com/officel/80/000000/name.png', '2019-06-06'),
('Peter', 'peter@gmail.com', 'peter', 'https://img.icons8.com/officel/80/000000/name.png', '2019-07-07'),
('Jarrod', 'jarrod@ymail.com', 'jarrod','https://img.icons8.com/officel/80/000000/name.png', '2019-08-08'),
('Cathy', 'cathy@gmail.com', 'cathy', 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png', '2019-09-09'),
('Nancy', 'nancy@ymail.com', 'nancy', 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png', '2019-10-10');


--VALUES TO RESOURCES TABLE--

INSERT INTO resources (title, description, url, category_id, user_id) VALUES
('Nodejs', 'Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!', 'https://nodejs.dev/', 1, 1),
('Angular', 'Angular is one of the latest web technologies designed specifically for developing dynamic web applications. With this framework, you can easily create front-end based applications without needing to use other frameworks or plugins.', 'https://angular.io/', 1, 2),
('Ruby on Rails', 'Ruby on Rails is a server-side website technology that makes app development much easier and faster. The thing that really sets this framework apart is the reusability of the code as well as some other cool features that will help you get the job done in no time.', 'https://rubyonrails.org/', 1, 3),

('Body and Health', 'The largest collection of nutrition, fitness, health and lifestyle articles', 'https://bodyandhealth.canada.com/channel/fitness/health-articles', 2, 1),
('Fine Cooking', 'Fine Cooking magazine brings out the cook in you. It provides a unique blend of inspiration and information along with triple-tested recipes, how-to techniques, and expert advice designed for cooks of all abilities.', 'https://www.youtube.com/user/FineCooking/', 2, 2),
('Home Decor DIY', 'Collection of a ton of cool home decor hacks, DIY projects and ideas for absolute beginners', 'https://www.homedit.com/diy-home-decor/', 2, 3),

('Underwater Photography', 'The DPG underwater photography guide is designed to provide practical underwater photography tips, equipment requirements, and lighting techniques that you can put to use the next time you hit the water.','http://www.divephotoguide.com/underwater-photography-techniques/', 3, 2),
('Snapseed', 'Best for all-purpose photo editing with precise control over color and exposure. Here is the link to quick 10-minute tutorial', 'https://www.youtube.com/watch?v=nTAaN3-Nf1g', 3, 3),

('Road Trip', 'It’s almost Road Trip time, and you’ve started to think about what exactly you need to pack to keep your show on the road.This will guide you through the various road trip essentials and tips that will keep the car and you running smoothly throughout the trip.','https://maketimetoseetheworld.com/road-trip-packing-list/', 4, 1),
('Discover new gems in the city', 'Solve a trail of riddles on your phone. Unlock hidden gems, stories and local recommendations from the best things to do, foodie hotspots, wicked street art, quirky museums and more.', 'https://www.secretcitytrails.com/', 4, 2);


--VALUES TO CATEGORIES TABLE--

INSERT INTO categories (name) VALUES
('Web Development'),
('Lifestyle'),
('Photography'),
('Outdoor');


--VALUES TO LIKES TABLE--

INSERT INTO likes (user_id, resource_id, val) VALUES
(1, 1, 1),
(1, 4, 0),
(2, 2, 0),
(2, 3, 1),
(3, 4, 1),
(3, 5, 1),
(4, 7, 1),
(4, 3, 0),
(5, 6, 0),
(5, 9, 1);


--VALUES TO COMMENTS TABLE--

INSERT INTO comments (user_id, resource_id, comment, created_at)
VALUES
(1, 5, 'This is a nice source for Photography! Love it!', '2019-04-15' ),
(2, 8, 'Supercool features, hope I can make it as my DIY project.','2019-01-25'),
(3, 3, 'Ahh, this make sense to me better than my school books', '2019-05-08'),
(4, 7, 'Too complicated, need something simpler and efficient', '2019-03-30'),
(5, 8, 'a bit too advanced for me', '2019-06-21'),
(2, 8, 'try to find local resources for parts', '2019-05-11'),
(6, 1, 'I should not check this, wasting my time', '2019-06-29');


--VALUES TO RATINGS TABLE--

INSERT INTO ratings (user_id, resource_id, rating) VALUES
(4, 2, 4),
(1, 3, 1),
(1, 4, 3),
(3, 9, 5),
(2, 8, 3),
(5, 6, 2),
(5, 4, 4);


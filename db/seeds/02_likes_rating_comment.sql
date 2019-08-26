-- likes, ratings, comments table seeds here (Example)

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

INSERT INTO comments (user_id, resource_id, comment, created_at)
VALUES
(1, 5, 'This is a nice source for Photography! Love it!', '2019-04-15' ),
(2, 8, 'Supercool features, hope I can make it as my DIY project.','2019-01-25'),
(3, 3, 'Ahh, this make sense to me better than my school books', '2019-05-08'),
(4, 7, 'Too complicated, need something simpler and efficient', '2019-03-30'),
(5, 8, 'a bit too advanced for me', '2019-06-21'),
(2, 8, 'try to find local resources for parts', '2019-05-11'),
(6, 1, 'I should not check this, wasting my time', '2019-06-29');

INSERT INTO ratings (user_id, resource_id, rating) VALUES
(4, 2, 4),
(1, 3, 1),
(1, 4, 3),
(3, 9, 5),
(2, 8, 3),
(5, 6, 2),
(5, 4, 4);


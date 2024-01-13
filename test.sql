--INSERT INTO author_master_tbl (author_id, author_name) VALUES ('TEST', 'TEST'); --DONE
--INSERT INTO book_master_tbl(book_id) VALUES ('TEST');
--INSERT INTO book_author (book_id, author_id) VALUES ('TEST', 'TEST');
--UPDATE book_master_tbl SET book_name = 'TEST', genre = 'TEST', publisher_id = 'TEST', publish_date = '2019-12-12', language = 'TEST', edition = 1, book_cost = 1, no_of_pages = 1, book_description = 'TEST', book_img_link = 'TEST' WHERE book_id = 'TEST'
--UPDATE publisher_master_tbl SET publisher_name = 'TEST' WHERE publisher_id = 'TEST';
--INSERT book_stock (book_id, stock_id, actual_stock, current_stock) VALUES ('TEST','TEST', 1, 1);

--DELETE FROM book_author WHERE book_id = 'TEST';
--DELETE FROM book_stock WHERE book_id = 'TEST';
--DELETE FROM book_master_tbl WHERE book_id = 'TEST';

SELECT * FROM book_master_tbl;
SELECT * FROM book_stock;
SELECT * FROM book_author;




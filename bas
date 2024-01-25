
#!/bin/bash
for i in {1..100}
do
   mysql -h  <host> -u admin --password=4BmIO4iKM4bRGLgBi -e \
   'use geeks;' \
    'select * from users'
  
done

  USE locations; \
    CREATE TABLE location_T (number1 INT NOT NULL, \
    number2 INT NOT NULL, \
    number3 INT NOT NULL, \
    names VARCHAR(100) NOT NULL,PRIMARY KEY (number1)); \
    LOAD DATA LOCAL INFILE "locations.csv" \
    INTO TABLE location_T FIELDS TERMINATED by "\t" \
    ENCLOSED BY "\"" LINES TERMINATED BY "\n" IGNORE 1 LINES \
    (number1,number2,number3,names)'

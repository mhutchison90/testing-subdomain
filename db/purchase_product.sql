update employee
set pointbalance = 	pointbalance - $3 
where employeeid = $2; 

update Products
set inventory = inventory - 1 
where productid = $1;
-- RETURNING *; 

INSERT INTO transactions(
productid, giver, total
)VALUES(
$1, $2, $3
);

-- select * from products;

--$1 = Product ID
-- $2 = Active User
-- $3 = Total Points Spent	
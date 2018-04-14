use DB09TMS170_1718
create table cust_reg
( 

subid as 'ssn' + right('0'+ CONVERT(VARCHAR(5),acc_id),5) PERSISTED unique,
name varchar(30),
dob date,
contact_num bigint,
stat varchar(20),
city varchar(20),
addr1 varchar(30),
addr2 varchar(30),
pincode bigint,
acc_id int primary key identity(100,1),
balance bigint,
statu varchar(20),
update_d date,
pwd as 'ssn' + right('0'+ CONVERT(VARCHAR(5),acc_id),5) PERSISTED unique,
rol varchar(40)
)

select * from cust_reg
create table acc_reg
(
acc_id int foreign key references reg(acc_id),
acc_name varchar(30),
amount bigint
)

create table login(id int primary key,username varchar(10),pwd varchar(10) )

insert into login values(1,'admin','admin')

drop table login

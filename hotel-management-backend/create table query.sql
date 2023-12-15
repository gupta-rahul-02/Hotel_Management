create table userRoles(
	userid int not null,
	roleid int not null,
	constraint fk_users_roles foreign key (userid) references users(userid),
	constraint fk_roles_users foreign key (roleid) references roles(roleid)
)

create table rooms(
    roomid int primary key not null identity(1,1),
    name varchar(10) not null,
    description varchar(15),
    capacity int,
    roomNo varchar(6)
)

create table bookings(
    bookingid int primary key not null identity(1,1),
    userid int not null,
    chekin datetime not null,
    chekout datetime not null,
    summary varchar(1000),
	constraint fk_bookings_users foreign key (userid) references users(userid)
)

create table bookingDetails(
    bookingid int not null,
    occupantid int not null,
    roomid int not null,
	constraint fk_bookingDetails_bookings foreign key (bookingid) references bookings(bookingid),
	constraint fk_bookingDetails_occupants foreign key (occupantid) references occupantDetails(occupantid),
	constraint fk_bookingDetails_rooms foreign key (roomid) references rooms(roomid),
)

create table billings(
    billingid int not null primary key identity(1,1),
    bookingid int not null,
    amount float not null,
    status varchar(10),
    date datetime default GetDate(),
    paymentMode varchar(15) not null,
    paymentReference varchar(25),
    discount float,
    additionalNote varchar(500) ,
	constraint fk_billings_bookings foreign key (bookingid) references bookings(bookingid),
)

create table occupantDetails(
    occupantid int not null primary key identity(1,1),
    firstName varchar(15),
    lastName varchar(15),
    email varchar(50),
    phone varchar(12),
    documentId varchar(16),
    documentType varchar(16)
)

create table userOccupants(
    userid int not null,
    occupantid int not null,
	constraint fk_users_userOccupants foreign key (userid) references users(userid),
	constraint fk_occupants_userOccupans foreign key (occupantid) references occupantDetails(occupantid),
)

create table users(
    userid int not null primary key identity(1,1),
    firstName varchar(15),
    lastName varchar(15),
    email varchar(50),
    phone varchar(12),
    active bit not null default 1,
    created datetime default GetDate(),
    updated datetime not null
)

create table roles(
	roleid int not null primary key identity(1,1),
	name varchar(20),
	active bit not null default 1,
	created datetime default GetDate(),
    updated datetime not null
)
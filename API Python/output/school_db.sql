select distinct state from basic

Create Table States_Ref (
             State_Name Varchar (20),
             State_Name_Short Varchar(2)
);

INSERT INTO States_Ref (State_name, State_Name_Short)
VALUES ('Alabama', 'AL'),
       ('Alaska', 'AK'),
       ('Arizona', 'AZ'),
       ('Arkansas', 'AR'),
       ('California', 'CA'),
       ('Colorado', 'CO'),
       ('Connecticut', 'CT'),
       ('Delaware', 'DE'),
       ('District of Columbia', 'DC'),
       ('Florida', 'FL'),
       ('Georgia', 'GA'),
       ('Hawaii', 'HI'),
       ('Idaho', 'ID'),
       ('Illinois', 'IL'),
       ('Indiana', 'IN'),
       ('Iowa', 'IA'),
       ('Kansas', 'KS'),
       ('Kentucky', 'KY'),
       ('Louisiana', 'LA'),
       ('Maine', 'ME'),
       ('Maryland', 'MD'),
       ('Massachusetts', 'MA'),
       ('Michigan', 'MI'),
       ('Minnesota', 'MN'),
       ('Mississippi', 'MS'),
       ('Missouri', 'MO'),
       ('Montana', 'MT'),
       ('Nebraska', 'NE'),
       ('Nevada', 'NV'),
       ('New Hampshire', 'NH'),
       ('New Jersey', 'NJ'),
       ('New Mexico', 'NM'),
       ('New York', 'NY'),
       ('North Carolina', 'NC'),
       ('North Dakota', 'ND'),
       ('Ohio', 'OH'),
       ('Oklahoma', 'OK'),
       ('Oregon', 'OR'),
       ('Pennsylvania', 'PA'),
       ('Rhode Island', 'RI'),
       ('South Carolina', 'SC'),
       ('South Dakota', 'SD'),
       ('Tennessee', 'TN'),
       ('Texas', 'TX'),
       ('Utah', 'UT'),
       ('Vermont', 'VT'),
       ('Virginia', 'VA'),
       ('Washington', 'WA'),
       ('West Virginia', 'WV'),
       ('Wisconsin', 'WI'),
       ('Wyoming', 'WY')
	   
select * from states_ref

select distinct basic.state from basic
left join states_ref on basic.state = state_name_short
where (basic.state = states_ref.state_name_short)

SELECT distinct state 
FROM   basic 
WHERE  state NOT IN (SELECT state_name_short FROM states_ref)

select basic.name, basic.state, basic.city, metrics.tuition_in_state
from basic
left join metrics on basic.id = metrics.id
where metrics.tuition_in_state = (select max(metrics.tuition_in_state) from metrics);

select basic.name, basic.state, basic.city, metrics.tuition_out_of_state
from basic
left join metrics on basic.id = metrics.id
where metrics.tuition_out_of_state = (select max(metrics.tuition_out_of_state) from metrics);

select basic.name, basic.state, basic.city, metrics.tuition_in_state
from basic
left join metrics on basic.id = metrics.id
where metrics.tuition_in_state = (select min(metrics.tuition_in_state) from metrics);

select basic.name, basic.state, basic.city, metrics.tuition_out_of_state
from basic
left join metrics on basic.id = metrics.id
where metrics.tuition_out_of_state = (select min(metrics.tuition_out_of_state) from metrics);

ALTER TABLE states_ref
ADD id serial PRIMARY KEY;

ALTER TABLE states_ref
ADD PRIMARY KEY (id);

alter table states_ref
drop column id

select * from states_ref


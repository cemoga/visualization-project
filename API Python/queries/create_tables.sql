DROP TABLE IF EXISTS "basic";
DROP TABLE IF EXISTS "detail";
DROP TABLE IF EXISTS "metrics";
DROP TABLE IF EXISTS "geoloc";
DROP TABLE IF EXISTS "state_fips";
DROP TABLE IF EXISTS "region_id";
DROP TABLE IF EXISTS "locale";
DROP TABLE IF EXISTS "operating";
DROP TABLE IF EXISTS "under_investigation";
DROP TABLE IF EXISTS "main_campus";
DROP TABLE IF EXISTS "institutional_characteristics_level";
DROP TABLE IF EXISTS "ownership_peps";
DROP TABLE IF EXISTS "ownership";
DROP TABLE IF EXISTS "online_only";
DROP TABLE IF EXISTS "open_admissions_policy";
DROP TABLE IF EXISTS "degrees_awarded_predominant";
DROP TABLE IF EXISTS "degrees_awarded_highest";
DROP TABLE IF EXISTS "title_iv_eligibility_type";
DROP TABLE IF EXISTS "carnegie_size_setting";
DROP TABLE IF EXISTS "carnegie_undergrad";
DROP TABLE IF EXISTS "carnegie_basic";
DROP TABLE IF EXISTS "men_only";
DROP TABLE IF EXISTS "women_only";
DROP TABLE IF EXISTS "religious_affiliation";
CREATE TABLE "basic" (
    "id" int NOT NULL,
    "ope8_id" int,
    "ope6_id" int,
    "name" varchar,
    "alias" varchar,
    "city" varchar,
    "state" varchar,
    "state_fips" int,
    "zip" varchar,
    "region_id" int,
    "locale" int,
    "school_url" varchar,
    CONSTRAINT "pk_basic" PRIMARY KEY (
        "id"
     )
);
CREATE TABLE "detail" (
    "id" int NOT NULL,
    "operating" int,
    "under_investigation" int,
    "main_campus" int,
    "branches" int,
    "institutional_characteristics_level" int,
    "ownership_peps" int,
    "ownership" int,
    "online_only" int,
    "open_admissions_policy" int
);
CREATE TABLE "metrics" (
    "id" int NOT NULL,
    "accreditor_code" varchar,
    "accreditor" varchar,
    "degrees_awarded_predominant" int,
    "degrees_awarded_highest" int,
    "title_iv_approval_date" date,
    "title_iv_eligibility_type" int,
    "ft_faculty_rate" real,
    "faculty_salary" real,
    "tuition_revenue_per_fte" real,
    "price_calculator_url" varchar,
    "instructional_expenditure_per_fte" real,
    "degree_urbanization" varchar,
    "carnegie_size_setting" int,
    "carnegie_undergrad" int,
    "carnegie_basic" int,
    "men_only" int,
    "women_only" int,
    "religious_affiliation" int,
    "tuition_in_state" real,
    "tuition_out_of_state" real
);
CREATE TABLE "geoloc" (
    "id" int NOT NULL,
    "location_lon" real,
    "location_lat" real
);
CREATE TABLE "state_fips" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_state_fips" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "region_id" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_region_id" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "locale" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_locale" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "operating" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_operating" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "under_investigation" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_under_investigation" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "main_campus" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_main_campus" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "institutional_characteristics_level" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_institutional_characteristics_level" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "ownership_peps" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_ownership_peps" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "ownership" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_ownership" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "online_only" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_online_only" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "open_admissions_policy" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_open_admissions_policy" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "degrees_awarded_predominant" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_degrees_awarded_predominant" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "degrees_awarded_highest" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_degrees_awarded_highest" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "title_iv_eligibility_type" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_title_iv_eligibility_type" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "carnegie_size_setting" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_carnegie_size_setting" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "carnegie_undergrad" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_carnegie_undergrad" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "carnegie_basic" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_carnegie_basic" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "men_only" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_men_only" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "women_only" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_women_only" PRIMARY KEY (
        "code"
     )
);
CREATE TABLE "religious_affiliation" (
    "code" int NOT NULL,
    "description" varchar,
    CONSTRAINT "pk_religious_affiliation" PRIMARY KEY (
        "code"
     )
)
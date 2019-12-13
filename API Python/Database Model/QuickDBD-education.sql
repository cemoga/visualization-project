-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/HvMhpc
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "basic" (
    "id" int   NOT NULL,
    "ope8_id" int   NOT NULL,
    "ope6_id" int   NOT NULL,
    "name" string   NOT NULL,
    "alias" string   NOT NULL,
    "city" string   NOT NULL,
    "state" string   NOT NULL,
    "state_fips" int   NOT NULL,
    "zip" string   NOT NULL,
    "region_id" int   NOT NULL,
    "locale" int   NOT NULL,
    "school_url" string   NOT NULL,
    CONSTRAINT "pk_basic" PRIMARY KEY (
        "id"
     )
);

CREATE TABLE "detail" (
    "id" int   NOT NULL,
    "operating" int   NOT NULL,
    "under_investigation" int   NOT NULL,
    "main_campus" int   NOT NULL,
    "branches" int   NOT NULL,
    "institutional_characteristics_level" int   NOT NULL,
    "ownership_peps" int   NOT NULL,
    "ownership" int   NOT NULL,
    "online_only" int   NOT NULL,
    "open_admissions_policy" int   NOT NULL
);

CREATE TABLE "metrics" (
    "id" int   NOT NULL,
    "accreditor_code" int   NOT NULL,
    "accreditor" string   NOT NULL,
    "degrees_awarded_predominant" int   NOT NULL,
    "degrees_awarded_highest" int   NOT NULL,
    "title_iv_approval_date" date   NOT NULL,
    "title_iv_eligibility_type" int   NOT NULL,
    "ft_faculty_rate" double   NOT NULL,
    "faculty_salary" double   NOT NULL,
    "tuition_revenue_per_fte" dl   NOT NULL,
    "price_calculator_url" double   NOT NULL,
    "instructional_expenditure_per_fte" double   NOT NULL,
    "degree_urbanization" string   NOT NULL,
    "carnegie_size_setting" int   NOT NULL,
    "carnegie_undergrad" int   NOT NULL,
    "carnegie_basic" int   NOT NULL,
    "men_only" int   NOT NULL,
    "women_only" int   NOT NULL,
    "religious_affiliation" int   NOT NULL,
    "tuition_in_state" double   NOT NULL,
    "tuition_out_of_state" double   NOT NULL
);

CREATE TABLE "geoloc" (
    "id" int   NOT NULL,
    "location_lon" double   NOT NULL,
    "location_lat" double   NOT NULL
);

CREATE TABLE "sample" (
    "code" int   NOT NULL,
    "description" string   NOT NULL,
    CONSTRAINT "pk_sample" PRIMARY KEY (
        "code"
     )
);

ALTER TABLE "basic" ADD CONSTRAINT "fk_basic_state_fips" FOREIGN KEY("state_fips")
REFERENCES "sample" ("code");

ALTER TABLE "basic" ADD CONSTRAINT "fk_basic_region_id" FOREIGN KEY("region_id")
REFERENCES "sample" ("code");

ALTER TABLE "basic" ADD CONSTRAINT "fk_basic_locale" FOREIGN KEY("locale")
REFERENCES "sample" ("code");

ALTER TABLE "detail" ADD CONSTRAINT "fk_detail_id" FOREIGN KEY("id")
REFERENCES "basic" ("id");

ALTER TABLE "detail" ADD CONSTRAINT "fk_detail_operating" FOREIGN KEY("operating")
REFERENCES "sample" ("code");

ALTER TABLE "detail" ADD CONSTRAINT "fk_detail_under_investigation" FOREIGN KEY("under_investigation")
REFERENCES "sample" ("code");

ALTER TABLE "detail" ADD CONSTRAINT "fk_detail_main_campus" FOREIGN KEY("main_campus")
REFERENCES "sample" ("code");

ALTER TABLE "detail" ADD CONSTRAINT "fk_detail_institutional_characteristics_level" FOREIGN KEY("institutional_characteristics_level")
REFERENCES "sample" ("code");

ALTER TABLE "detail" ADD CONSTRAINT "fk_detail_ownership_peps" FOREIGN KEY("ownership_peps")
REFERENCES "sample" ("code");

ALTER TABLE "detail" ADD CONSTRAINT "fk_detail_ownership" FOREIGN KEY("ownership")
REFERENCES "sample" ("code");

ALTER TABLE "detail" ADD CONSTRAINT "fk_detail_online_only" FOREIGN KEY("online_only")
REFERENCES "sample" ("code");

ALTER TABLE "detail" ADD CONSTRAINT "fk_detail_open_admissions_policy" FOREIGN KEY("open_admissions_policy")
REFERENCES "sample" ("code");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_id" FOREIGN KEY("id")
REFERENCES "basic" ("id");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_degrees_awarded_predominant" FOREIGN KEY("degrees_awarded_predominant")
REFERENCES "sample" ("code");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_degrees_awarded_highest" FOREIGN KEY("degrees_awarded_highest")
REFERENCES "sample" ("code");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_title_iv_eligibility_type" FOREIGN KEY("title_iv_eligibility_type")
REFERENCES "sample" ("code");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_carnegie_size_setting" FOREIGN KEY("carnegie_size_setting")
REFERENCES "sample" ("code");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_carnegie_undergrad" FOREIGN KEY("carnegie_undergrad")
REFERENCES "sample" ("code");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_carnegie_basic" FOREIGN KEY("carnegie_basic")
REFERENCES "sample" ("code");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_men_only" FOREIGN KEY("men_only")
REFERENCES "sample" ("code");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_women_only" FOREIGN KEY("women_only")
REFERENCES "sample" ("code");

ALTER TABLE "metrics" ADD CONSTRAINT "fk_metrics_religious_affiliation" FOREIGN KEY("religious_affiliation")
REFERENCES "sample" ("code");

ALTER TABLE "geoloc" ADD CONSTRAINT "fk_geoloc_id" FOREIGN KEY("id")
REFERENCES "basic" ("id");


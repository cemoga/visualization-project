select 
basic.id,
basic.ope8_id,
basic.ope6_id,
basic.name,
basic.alias,
basic.city,
basic.state,
--basic.state_fips,
state_fips.description as state_fips_dec,
basic.zip,
--basic.region_id,
region_id.description as region_id_desc,
--basic.locale,
locale.description as locale_desc,
basic.school_url,
--detail.operating,
operating.description as operating_desc,
--detail.under_investigation,
under_investigation.description as under_investigation_desc,
--detail.main_campus,
main_campus.description as main_campus_desc,
detail.branches,
--detail.institutional_characteristics_level,
institutional_characteristics_level.description as institutional_characteristics_leveldesc,
--detail.ownership_peps,
ownership_peps.description as ownership_peps_desc,
--detail.ownership,
ownership.description as ownership_desc,
--detail.online_only,
online_only.description as online_only_desc,
--detail.open_admissions_policy,
open_admissions_policy.description as open_admissions_policy_desc,
metrics.accreditor_code,
metrics.accreditor,
--metrics.degrees_awarded_predominant,
degrees_awarded_predominant.description as degrees_awarded_predominant_desc,
--metrics.degrees_awarded_highest,
degrees_awarded_highest.description as degrees_awarded_highest_desc,
metrics.title_iv_approval_date,
--metrics.title_iv_eligibility_type,
title_iv_eligibility_type.description as title_iv_eligibility_type_desc,
metrics.ft_faculty_rate,
metrics.faculty_salary,
metrics.tuition_revenue_per_fte,
metrics.price_calculator_url,
metrics.instructional_expenditure_per_fte,
metrics.degree_urbanization,
--metrics.carnegie_size_setting,
carnegie_size_setting.description as carnegie_size_setting_desc,
--metrics.carnegie_undergrad,
carnegie_undergrad.description as carnegie_undergrad_desc,
--metrics.carnegie_basic,
carnegie_basic.description as carnegie_basic_desc,
--metrics.men_only,
men_only.description as men_only_desc,
--metrics.women_only,
women_only.description as women_only_desc,
--metrics.religious_affiliation,
--religious_affiliation.description as religious_affiliation_desc,
metrics.tuition_in_state,
metrics.tuition_out_of_state,
geoloc.location_lon,
geoloc.location_lat
from basic
inner join detail on basic.id = detail.id
inner join metrics on basic.id = metrics.id 
inner join geoloc on basic.id = geoloc.id
inner join carnegie_basic on carnegie_basic.code = metrics.carnegie_basic
inner join carnegie_size_setting on carnegie_size_setting.code = metrics.carnegie_size_setting
inner join carnegie_undergrad on carnegie_undergrad.code = metrics.carnegie_undergrad
inner join degrees_awarded_highest on degrees_awarded_highest.code = metrics.degrees_awarded_highest
inner join degrees_awarded_predominant on degrees_awarded_predominant.code = metrics.degrees_awarded_predominant
inner join institutional_characteristics_level on institutional_characteristics_level.code = detail.institutional_characteristics_level
inner join locale on locale.code = basic.locale
inner join main_campus on main_campus.code = detail.main_campus
inner join men_only on men_only.code = metrics.men_only
inner join online_only on online_only.code = detail.online_only
inner join open_admissions_policy on open_admissions_policy.code = detail.open_admissions_policy
inner join operating on operating.code = detail.operating
inner join ownership on ownership.code = detail.ownership
inner join ownership_peps on ownership_peps.code = detail.ownership_peps
inner join region_id on region_id.code = basic.region_id
--inner join religious_affiliation on religious_affiliation.code = metrics.religious_affiliation
inner join state_fips on state_fips.code = basic.state_fips
inner join title_iv_eligibility_type on title_iv_eligibility_type.code = metrics.title_iv_eligibility_type
inner join under_investigation on under_investigation.code = detail.under_investigation
inner join women_only on women_only.code = metrics.women_only



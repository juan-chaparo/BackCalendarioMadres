export const queries = {
  getAllAspects:
    "EXEC SP_AM_ASPECTS_S @id_aspect = @Id_aspect, @name_aspect = @Name_aspect, @id_lenguage=@Id_lenguage",
  getAllAttendances:
    "EXEC SP_AM_ATTENDANCES_S @id_attendance = @Id_attendance, @name_attendances = @Name_attendances, @Abbreviation = @Abbreviation, @id_lenguage=@Id_lenguage",
  getAllDepartments:
    "EXEC SP_AM_DEPARTMENTS_S @id_department = @Id_department, @name_departament = @Name_departament",
  getAllDocsTypes:
    "EXEC SP_AM_DOCS_TYPES_S @id_doc_type = @Id_doc_type, @name_doc = @Name_doc, @abbreviation  = @Abbreviation, @id_lenguage=@Id_lenguage",
  getAllEducationLevels:
    "EXEC SP_AM_EDUCATION_LEVELS_S @id_education_level = @Id_education_level, @name_education_level = @Name_education_level, @id_lenguage=@Id_lenguage",
  getAllGender:
    "EXEC SP_AM_GENDER_S @id_gender = @Id_gender, @name_gender = @Name_gender, @id_lenguage=@Id_lenguage",
  getAllMaterials:
    "EXEC SP_AM_MATERIALS_S @id_material = @Id_material, @material = @Material, @id_lenguage=@Id_lenguage",
  getAllMunicipalities:
    "EXEC SP_AM_MUNICIPALITIES_S @id_municipality = @Id_municipality, @name_municipality = @Name_municipality, @id_departments = @Id_departments",
  getAllPopulationTypes:
    "EXEC SP_AM_POPULATION_TYPES_S @id_population_type = @Id_population_type, @name_population_type = @Name_population_type, @id_lenguage=@Id_lenguage",
  getAllReasonWithdrawal:
    "EXEC SP_AM_REASON_WITHDRAWAL_S @id_reason_withdrawal = @Id_reason_withdrawal, @name_reason_withdrawal = @Name_reason_withdrawal, @Abbreviation = @Abbreviation, @id_lenguage=@Id_lenguage",
  getAllRelationships:
    "EXEC SP_AM_RELATIONSHIPS_S @id_relationship = @Id_relationship, @name_relationship = @Name_relationship, @id_lenguage=@Id_lenguage",
  getAllRol:
    "EXEC SP_AM_ROL_S @id_rol = @Id_rol, @rol = @Rol, @id_lenguage=@Id_lenguage",
  getAllServiciesTypes:
    "EXEC SP_AM_SERVICES_TYPES_S @id_servicie_type = @Id_servicie_type, @name_service = @Name_service, @id_lenguage=@Id_lenguage",
  getAllServiciesModality:
    "EXEC SP_AM_SERVICIES_MODALITY_S @id_servicie_modality = @Id_servicie_modality, @name_service = @Name_service, @id_lenguage=@Id_lenguage",
  getAllTypesContribution:
    "EXEC SP_AM_TYPES_CONTRIBUTION_S @id_type_contribution = @Id_type_contribution, @type_contribution = @Type_contribution, @id_lenguage=@Id_lenguage",
  getAllActivitiesContributions:
    "EXEC SP_AV_ACTIVITIES_CONTRIBUTIONS_S @id_activity_contribution  = @Id_activity_contribution, @id_activity  = @Id_activity, @id_contribution  = @Id_contribution",
  createActivitiesContributions:
    "EXEC SP_AV_ACTIVITIES_CONTRIBUTIONS_I @id_activity  = @Id_activity, @id_contribution  = @Id_contribution",
  getAllActivitiesMaterials:
    "EXEC SP_AV_ACTIVITIES_MATERIALS_S @id_activity_material = @Id_activity_material, @id_material = @Id_material, @id_activity = @Id_activity",
  getAllActivities:
    "EXEC SP_AV_ACTIVITIES_S @id_activity = @Id, @name = @Name, @duration = @Duration, @description = @Description, @variants = @Variants, @img = @Img, @video = @Video, @adaptation_small_space = @Adaptation_small_space, @state = @State, @id_lenguage=@Id_lenguage",
  createAllActivities:
    "EXEC SP_AV_ACTIVITIES_I @name = @Name, @duration = @Duration, @description = @Description, @variants = @Variants, @img = @Img, @video = @Video, @adaptation_small_space = @Adaptation_small_space, @state = @State, @id_lenguage=@Id_lenguage",
  getAllActivityChild:
    "EXEC SP_AV_ACTIVITY_CHILD_S @id_activity_child  = @Id_activity_child, @id_schedule_activity  = @Id_schedule_activity, @id_child_uds  = @Id_child_uds, @description = @Description, @date_admission  = @Date_admission, @updt  = @Updt, @assistance  = @Assistance, @state  = @State",
  getAllAdminZonalCenters:
    "EXEC SP_AV_ADMIN_ZONAL_CENTERS_S @id_admin_zonal_center = @Id_admin_zonal_center, @id_admin = @Id_admin, @id_zonal_center = @Id_zonal_center, @date_admission = @Date_admission",
  getAllAdmins:
    "EXEC SP_AV_ADMINS_S @id_admin = @Id_admin, @first_name = @First_name, @second_name  = @Second_name, @first_last_name = @First_last_name, @second_last_name = @Second_last_name, @num_doc = @Num_doc, @id_doc_type  = @Id_doc_type, @cellphone = @Cellphone, @date_birth  = @Date_birth, @date_admission  = @Date_admission, @id_user  = @Id_user",
  getAllAgentsCommunity:
    "EXEC SP_AV_AGENTS_COMMUNITY_S @id_agent_community = @Id_agent_community, @first_name = @First_name, @second_name  = @Second_name, @first_last_name = @First_last_name, @second_last_name = @Second_last_name, @cellphone = @Cellphone, @num_doc  = @Num_doc, @id_doc_type = @Id_doc_type, @date_admission = @Date_admission, @id_education_level = @Id_education_level, @date_birth = @Date_birth, @state = @State, @img = @Img",
  getAllAgentsUds:
    "EXEC SP_AV_AGENTS_UDS_S @id_agent_uds  = @Id_agent_uds, @id_agent_community  = @Id_agent_community, @id_uds  = @Id_uds, @date_admission  = @Date_admission, @id_user  = @Id_user",
  getAllAttendants:
    "EXEC SP_AV_ATTENDANTS_S @id_attendant = @Id_attendant, @first_name = @First_name, @second_name = @Second_name, @first_last_name = @First_last_name, @second_last_name = @Second_last_name, @occupation = @Occupation, @date_birth  = @Date_birth, @id_education_level  = @Id_education_level, @date_start = @Date_start, @date_end = @Date_end, @address = @Address, @cellphone = @Cellphone, @live_child = @Live_child, @occasionally  = @Occasionally, @num_doc = @Num_doc, @id_doc_type = @Id_doc_type, @id_gender = @Id_gender, @date_admission = @Date_admission, @state = @State",
  getAllChildUds:
    "EXEC SP_AV_CHILD_UDS_S @id_child_uds = @Id_child_uds, @id_child = @Id_child, @id_agent_uds = @Id_agent_uds, @date_admission = @Date_admission, @state = @State",
  getAllChildUdsWeigth:
    "EXEC SP_AV_CHILD_UDS_WEIGTH_S @id_child_uds_weigth = @Id_child_uds_weigth, @id_child_uds = @Id_child_uds, @weigth = @Weigth, @height = @Height, @date_admission = @Date_admission",
  getAllChildAttendants:
    "EXEC SP_AV_CHILDS_ATTENDANTS_S @id_child_attendants = @Id_child_attendants, @id_child = @Id_child, @id_attendants = @Id_attendants, @date_admission = @Date_admission, @id_relationship = @Id_relationship",
  createNewChildren:
    "EXEC SP_AV_CHILDS_I @first_name = @first_nameB, @second_name = @second_nameB, @first_last_name =@first_last_nameB, @second_last_name = @second_last_nameB, @date_birth = @date_birthB, @num_docs = @num_docsB, @id_type_docs = @id_type_docsB, @id_uds = @id_udsB, @id_type_population = @id_type_populationB, @state = @stateB, @id_gender = @id_genderB",
  getChildrenId:
    "EXEC SP_AV_CHILDS_S @id_child = @Id, @first_name = @first_nameB, @second_name = @second_nameB, @first_last_name =@first_last_nameB, @second_last_name = @second_last_nameB, @date_birth = @date_birthB, @num_docs = @num_docsB, @id_type_docs = @id_type_docsB, @id_uds = @id_udsB, @id_type_population = @id_type_populationB, @state = @stateB, @id_gender = @id_genderB ",
  updateChildrenId:
    "EXEC SP_AV_CHILDS_U @id_child = @Id, @first_name = @first_nameB",
  getAllCommunity:
    "EXEC SP_AV_COMMUNITY_S @id_community = @Id_community, @id_schedule = @Id_schedule, @date_admission = @Date_admission, @state = @State",
  getAllContributions:
    "EXEC SP_AV_CONTRIBUTIONS_S @id_contribution = @Id_contribution, @contributions = @Contributions, @id_type_contribution = @Id_type_contribution,@id_lenguage=@Id_lenguage",
  getAllDiary:
    "EXEC SP_AV_DIARY_S @id_diary = @Id_diary, @id_schedule = @Id_schedule, @date_diary = @Date_diary",
  getAllFormRamDay:
    "EXEC SP_AV_FORM_RAM_DAY_S @id_form_ram_day = @Id_form_ram_day, @date_admission = @Date_admission, @id_attendance = @Id_attendance, @id_child_uds = @Id_child_uds",
  getAllShedulesActivities:
    "EXEC SP_AV_SCHEDULES_ACTIVITIES_S @id_schedule_activity = @Id_schedule_activity, @id_activity = @Id_activity, @id_schedule = @Id_schedule",
  getAllShedules:
    "EXEC SP_AV_SCHEDULES_S @id_schedule = @Id_schedule, @name = @Name, @date_admission = @Date_admission, @id_agent_uds = @Id_agent_uds, @start_shuedule = @Start_shuedule",
  getAllTracingChild:
    "EXEC SP_AV_TRACING_CHILD_S @id_tracing_child = @Id_tracing_child, @date_admission = @Date_admission, @id_child_uds = @Id_child_uds, @id_aspect = @Id_aspect, @description = @Description",
  getAllUds:
    "EXEC SP_AV_UDS_S @id_uds = @Id_uds, @name_uds = @Name_uds, @NIT = @NIT, @number_contract = @Number_contract, @code = @Code, @cellphone = @Cellphone, @address = @Address, @id_municipality = @Id_municipality, @id_servicie_type = @Id_servicie_type, @id_servicie_modality = @Id_servicie_modality, @date_admission = @Date_admission, @state = @State, @id_zonal_center = @Id_zonal_center",
  getAllUsers:
    "EXEC SP_AV_USERS_S @id_user = @Id_user, @email = @Email, @password = @Password, @id_rol = @Id_rol, @state = @State",
  getAllWithdrawal:
    "EXEC SP_AV_WITHDRAWAL_S @id_withdrawal = @Id_withdrawal, @id_child = @Id_child, @date_admission = @Date_admission, @id_reason = @Id_reason",
  getAllZonalCenters:
    "EXEC SP_AV_ZONAL_CENTERS_S @id_zonal_center = @Id_zonal_center, @name = @Name, @state = @State",
};

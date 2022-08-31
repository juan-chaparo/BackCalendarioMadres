'use strict';
const { LENGUAGE_TABLE, LenguageSchema } = require('./../models/lenguageModel');
const { ASPECTS_TABLE, aspectsSchema } = require('./../models/aspectsModel');
const { ATTENDANCES_TABLE, attendancesSchema } = require('./../models/attendancesModel');
const { DEPARTMENTS_TABLE, departmentsSchema } = require('./../models/departmentsModel');
const { DOCS_TYPES_TABLE, docTypesSchema } = require('./../models/docTypesModel');
const { EDUCATION_LEVELS_TABLE, educationLevelsSchema } = require('./../models/educationLevelsModel');
const { GENDER_TABLE, gendersSchema } = require('./../models/genderModel');
const { MATERIALS_TABLE, materialsSchema } = require('./../models/materialsModel');
const { MUNICIPALITIES_TABLE, municipalitiesSchema } = require('./../models/municipalitiesModel');
const { POPULATION_TYPES_TABLE, populationTypesSchema } = require('./../models/populationTypesModel');
const { REASON_WITHDRAWALS_TABLE, reasonWhitdrawalsSchema } = require('./../models/reasonWithdrawalModel');
const { RELATIONSHIPS_TABLE, relationshipsSchema } = require('./../models/relationshipsModel');
const { ROLE_TABLE, roleSchema } = require('./../models/rolesModel');
const { SERVICES_TYPES_TABLE, servicesTypesSchema } = require('./../models/servicesTypesModel');
const { SERVICE_MODALITIES_TABLE, serviceModalitiesSchema } = require('./../models/servicesModalityModel');
const { TYPES_CONTRIBUTIONS_TABLE, typesContributionsSchema } = require('./../models/typesContributionsModel');
const { ACTIVITIES_TABLE, activitiesSchema } = require('./../models/activitiesModel');
const { ACTIVITIES_CONTRIBUTIONS_TABLE, activitiesContributionsSchema } = require('./../models/activitiesContributionsModel');
const { ACTIVITIES_MATERIALS_TABLE, activitiesMaterialsSchema } = require('./../models/activitiesMaterialsModels');
const { ACTIVITIES_CHILD_TABLE, activitiesChildSchema } = require('./../models/activityChildModel');
const { ADMIN_ZONAL_CENTERS_TABLE, adminZonalCentersSchema } = require('./../models/adminZonalCenterModel');
const { ADMINS_TABLE, adminsSchema } = require('./../models/adminsModel');
const { AGENTS_COMMUNITY_TABLE, agentsCommunitySchema } = require('./../models/agentsComunityModel');
const { AGENTS_UDS_TABLE, agentsUdsSchema } = require('./../models/agentsUdsModel');
const { ATTENDANTS_TABLE, attendantsSchema } = require('./../models/attendantsModel');
const { CHILD_UDS_TABLE, childUdsSchema } = require('./../models/childUdsModel');
const { CHILD_UDS_WEIGTH_TABLE, ChildUdsWeigthSchema } = require('./../models/childUdsWeigthModel');
const { CHILDS_TABLE, childsSchema } = require('./../models/childsModel');
const { CHILDS_ATTENDANTS_TABLE, childsAttendantsSchema } = require('./../models/childsAttendantsModel');
const { COMMUNITY_TABLE, communitySchema } = require('./../models/communityModel');
const { CONTRIBUTION_TABLE, contributionSchema } = require('./../models/contributionModel');
const { DIARY_TABLE, diarySchema } = require('./../models/diaryModel');
const { FORM_RAM_DAY_TABLE, formRamDaySchema } = require('./../models/formRamDayModel');
const { SCHEDULE_TABLE, scheduleSchema } = require('./../models/scheduleModule');
const { SCHEDULES_ACTIVITIES_TABLE, scheduleActivitiesSchema } = require('./../models/schedulesActivitiesModel');
const { TRACING_CHILD_TABLE, tracingChildSchema } = require('./../models/tracingChildModel');
const { UDS_TABLE, udsSchema } = require('./../models/udsModel');
const { USER_TABLE, userSchema } = require('./../models/userModel');
const { WITHDRAWAL_TABLE, withdrawalSchema } = require('./../models/withdrawalModel');
const { ZONAL_CENTERS_TABLE, zonalCenterschema } = require('./../models/zonalCentersModel');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(LENGUAGE_TABLE, LenguageSchema);
    await queryInterface.createTable(ZONAL_CENTERS_TABLE, zonalCenterschema);
    await queryInterface.createTable(ASPECTS_TABLE, aspectsSchema);
    await queryInterface.createTable(ATTENDANCES_TABLE, attendancesSchema);
    await queryInterface.createTable(DEPARTMENTS_TABLE, departmentsSchema);
    await queryInterface.createTable(DOCS_TYPES_TABLE, docTypesSchema);
    await queryInterface.createTable(EDUCATION_LEVELS_TABLE, educationLevelsSchema);
    await queryInterface.createTable(GENDER_TABLE, gendersSchema);
    await queryInterface.createTable(MATERIALS_TABLE, materialsSchema);
    await queryInterface.createTable(MUNICIPALITIES_TABLE, municipalitiesSchema);
    await queryInterface.createTable(POPULATION_TYPES_TABLE, populationTypesSchema);
    await queryInterface.createTable(REASON_WITHDRAWALS_TABLE, reasonWhitdrawalsSchema);
    await queryInterface.createTable(RELATIONSHIPS_TABLE, relationshipsSchema);
    await queryInterface.createTable(ROLE_TABLE, roleSchema);
    await queryInterface.createTable(SERVICES_TYPES_TABLE, servicesTypesSchema);
    await queryInterface.createTable(SERVICE_MODALITIES_TABLE, serviceModalitiesSchema);
    await queryInterface.createTable(TYPES_CONTRIBUTIONS_TABLE, typesContributionsSchema);
    await queryInterface.createTable(ACTIVITIES_TABLE, activitiesSchema);
    await queryInterface.createTable(CONTRIBUTION_TABLE, contributionSchema);
    await queryInterface.createTable(ACTIVITIES_CONTRIBUTIONS_TABLE, activitiesContributionsSchema);
    await queryInterface.createTable(ACTIVITIES_MATERIALS_TABLE, activitiesMaterialsSchema);
    await queryInterface.createTable(USER_TABLE, userSchema);
    await queryInterface.createTable(ADMINS_TABLE, adminsSchema);
    await queryInterface.createTable(ADMIN_ZONAL_CENTERS_TABLE, adminZonalCentersSchema);
    await queryInterface.createTable(AGENTS_COMMUNITY_TABLE, agentsCommunitySchema);
    await queryInterface.createTable(UDS_TABLE, udsSchema);
    await queryInterface.createTable(AGENTS_UDS_TABLE, agentsUdsSchema);
    await queryInterface.createTable(CHILDS_TABLE, childsSchema);
    await queryInterface.createTable(CHILD_UDS_TABLE, childUdsSchema);
    await queryInterface.createTable(CHILD_UDS_WEIGTH_TABLE, ChildUdsWeigthSchema);
    await queryInterface.createTable(ATTENDANTS_TABLE, attendantsSchema);
    await queryInterface.createTable(CHILDS_ATTENDANTS_TABLE, childsAttendantsSchema);
    await queryInterface.createTable(SCHEDULE_TABLE, scheduleSchema);
    await queryInterface.createTable(SCHEDULES_ACTIVITIES_TABLE, scheduleActivitiesSchema);
    await queryInterface.createTable(ACTIVITIES_CHILD_TABLE, activitiesChildSchema);
    await queryInterface.createTable(COMMUNITY_TABLE, communitySchema);
    await queryInterface.createTable(DIARY_TABLE, diarySchema);
    await queryInterface.createTable(FORM_RAM_DAY_TABLE, formRamDaySchema);
    await queryInterface.createTable(TRACING_CHILD_TABLE, tracingChildSchema);
    await queryInterface.createTable(WITHDRAWAL_TABLE, withdrawalSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ASPECTS_TABLE);
    await queryInterface.dropTable(ATTENDANCES_TABLE);
    await queryInterface.dropTable(DEPARTMENTS_TABLE);
    await queryInterface.dropTable(DOCS_TYPES_TABLE);
    await queryInterface.dropTable(EDUCATION_LEVELS_TABLE);
    await queryInterface.dropTable(GENDER_TABLE);
    await queryInterface.dropTable(LENGUAGE_TABLE);
    await queryInterface.dropTable(MATERIALS_TABLE);
    await queryInterface.dropTable(MUNICIPALITIES_TABLE);
    await queryInterface.dropTable(POPULATION_TYPES_TABLE);
    await queryInterface.dropTable(REASON_WITHDRAWALS_TABLE);
    await queryInterface.dropTable(RELATIONSHIPS_TABLE);
    await queryInterface.dropTable(ROLE_TABLE);
    await queryInterface.dropTable(SERVICES_TYPES_TABLE, servicesTypesSchema);
    await queryInterface.dropTable(SERVICE_MODALITIES_TABLE);
    await queryInterface.dropTable(TYPES_CONTRIBUTIONS_TABLE);
    await queryInterface.dropTable(ACTIVITIES_TABLE);
    await queryInterface.dropTable(ACTIVITIES_CONTRIBUTIONS_TABLE);
    await queryInterface.dropTable(ACTIVITIES_MATERIALS_TABLE);
    await queryInterface.dropTable(ACTIVITIES_CHILD_TABLE);
    await queryInterface.dropTable(ADMIN_ZONAL_CENTERS_TABLE);
    await queryInterface.dropTable(ADMINS_TABLE);
    await queryInterface.dropTable(AGENTS_COMMUNITY_TABLE);
    await queryInterface.dropTable(AGENTS_UDS_TABLE);
    await queryInterface.dropTable(ATTENDANTS_TABLE);
    await queryInterface.dropTable(CHILD_UDS_TABLE);
    await queryInterface.dropTable(CHILD_UDS_WEIGTH_TABLE);
    await queryInterface.dropTable(CHILDS_TABLE);
    await queryInterface.dropTable(CHILDS_ATTENDANTS_TABLE);
    await queryInterface.dropTable(COMMUNITY_TABLE);
    await queryInterface.dropTable(CONTRIBUTION_TABLE);
    await queryInterface.dropTable(DIARY_TABLE);
    await queryInterface.dropTable(FORM_RAM_DAY_TABLE);
    await queryInterface.dropTable(SCHEDULE_TABLE);
    await queryInterface.dropTable(SCHEDULES_ACTIVITIES_TABLE);
    await queryInterface.dropTable(TRACING_CHILD_TABLE);
    await queryInterface.dropTable(UDS_TABLE, udsSchema);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(WITHDRAWAL_TABLE);
    await queryInterface.dropTable(ZONAL_CENTERS_TABLE);
  }
};

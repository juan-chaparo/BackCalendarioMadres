const { Aspects, aspectsSchema } = require('./aspectsModel');
const { Attendances, attendancesSchema } = require('./attendancesModel');
const { Departments, departmentsSchema } = require('./departmentsModel');
const { DocsTypes, docTypesSchema } = require('./docTypesModel');
const { educationLevels, educationLevelsSchema } = require('./educationLevelsModel');
const { Genders, gendersSchema } = require('./genderModel');
const { Lenguage, LenguageSchema } = require('./lenguageModel');
const { Materials, materialsSchema } = require('./materialsModel');
const { Municipalities, municipalitiesSchema } = require('./municipalitiesModel');
const { PopulationTypes, populationTypesSchema } = require('./populationTypesModel');
const { ReasonWhitdrawal, reasonWhitdrawalsSchema } = require('./reasonWithdrawalModel');
const { Relationships, relationshipsSchema } = require('./relationshipsModel');
const { Roles, roleSchema } = require('./rolesModel');
const { ServicesTypes, servicesTypesSchema } = require('./servicesTypesModel');
const { ServicesModalities, serviceModalitiesSchema } = require('./servicesModalityModel');
const { TypesContributions, typesContributionsSchema } = require('./typesContributionsModel');
const { Activities, activitiesSchema } = require('./activitiesModel');
const { ActivitiesContributions, activitiesContributionsSchema } = require('./activitiesContributionsModel');
const { ActivitiesMaterials, activitiesMaterialsSchema } = require('./activitiesMaterialsModels');
const { ActivityChlid, activitiesChildSchema } = require('./activityChildModel');
const { AdminZonalCenters, adminZonalCentersSchema } = require('./adminZonalCenterModel');
const { Admins, adminsSchema } = require('./adminsModel');
const { agentCommunity, agentsCommunitySchema } = require('./agentsComunityModel');
const { AgentsUds, agentsUdsSchema } = require('./agentsUdsModel');
const { Attendants, attendantsSchema } = require('./attendantsModel');
const { ChildUds, childUdsSchema } = require('./childUdsModel');
const { ChildUdsWeigth, ChildUdsWeigthSchema } = require('./childUdsWeigthModel');
const { Childs, childsSchema } = require('./childsModel');
const { ChildsAttendants, childsAttendantsSchema } = require('./childsAttendantsModel');
const { Community, communitySchema } = require('./communityModel');
const { Contribution, contributionSchema } = require('./contributionModel');
const { Diary, diarySchema } = require('./diaryModel');
const { FormRamDay, formRamDaySchema } = require('./formRamDayModel');
const { Schedule, scheduleSchema } = require('./scheduleModule');
const { SchedulesActivities, scheduleActivitiesSchema } = require('./schedulesActivitiesModel');
const { TracingChild, tracingChildSchema } = require('./tracingChildModel');
const { Uds, udsSchema } = require('./udsModel');
const { User, userSchema } = require('./userModel');
const { Withdrawal, withdrawalSchema } = require('./withdrawalModel');
const { ZonalCenters, zonalCenterschema } = require('./zonalCentersModel');

function setUpModels(sequelize) 
{
    Lenguage.init(LenguageSchema, Lenguage.config(sequelize));
    ZonalCenters.init(zonalCenterschema, ZonalCenters.config(sequelize));
    Aspects.init(aspectsSchema, Aspects.config(sequelize));
    Attendances.init(attendancesSchema, Attendances.config(sequelize));
    Departments.init(departmentsSchema, Departments.config(sequelize));
    DocsTypes.init(docTypesSchema, DocsTypes.config(sequelize));
    educationLevels.init(educationLevelsSchema, educationLevels.config(sequelize));
    Genders.init(gendersSchema, Genders.config(sequelize));
    Materials.init(materialsSchema, Materials.config(sequelize));
    Municipalities.init(municipalitiesSchema, Municipalities.config(sequelize));
    PopulationTypes.init(populationTypesSchema, PopulationTypes.config(sequelize));
    ReasonWhitdrawal.init(reasonWhitdrawalsSchema, ReasonWhitdrawal.config(sequelize));
    Relationships.init(relationshipsSchema, Relationships.config(sequelize));
    ServicesTypes.init(servicesTypesSchema, ServicesTypes.config(sequelize));
    ServicesModalities.init(serviceModalitiesSchema, ServicesModalities.config(sequelize));
    TypesContributions.init(typesContributionsSchema, TypesContributions.config(sequelize));
    Activities.init(activitiesSchema, Activities.config(sequelize));
    Contribution.init(contributionSchema, Contribution.config(sequelize));
    Uds.init(udsSchema, Uds.config(sequelize));
    SchedulesActivities.init(scheduleActivitiesSchema, SchedulesActivities.config(sequelize));
    ActivitiesContributions.init(activitiesContributionsSchema, ActivitiesContributions.config(sequelize));
    ActivitiesMaterials.init(activitiesMaterialsSchema, ActivitiesMaterials.config(sequelize));
    ActivityChlid.init(activitiesChildSchema, ActivityChlid.config(sequelize));
    Admins.init(adminsSchema, Admins.config(sequelize));
    AdminZonalCenters.init(adminZonalCentersSchema, AdminZonalCenters.config(sequelize));
    agentCommunity.init(agentsCommunitySchema, agentCommunity.config(sequelize));
    User.init(userSchema, User.config(sequelize));
    AgentsUds.init(agentsUdsSchema, AgentsUds.config(sequelize));
    Attendants.init(attendantsSchema, Attendants.config(sequelize));
    Childs.init(childsSchema, Childs.config(sequelize));
    ChildUds.init(childUdsSchema, ChildUds.config(sequelize));
    ChildUdsWeigth.init(ChildUdsWeigthSchema, ChildUdsWeigth.config(sequelize));
    ChildsAttendants.init(childsAttendantsSchema, ChildsAttendants.config(sequelize));
    Schedule.init(scheduleSchema, Schedule.config(sequelize));
    Community.init(communitySchema, Community.config(sequelize));
    Diary.init(diarySchema, Diary.config(sequelize));
    FormRamDay.init(formRamDaySchema, FormRamDay.config(sequelize));
    TracingChild.init(tracingChildSchema, TracingChild.config(sequelize));
    Withdrawal.init(withdrawalSchema, Withdrawal.config(sequelize));
    Roles.init(roleSchema, Roles.config(sequelize));

    //Associate
    Lenguage.associate(sequelize.models);
    Roles.associate(sequelize.models);
    Admins.associate(sequelize.models);
    User.associate(sequelize.models);
    TypesContributions.associate(sequelize.models);
    Contribution.associate(sequelize.models);
    Activities.associate(sequelize.models);
    Materials.associate(sequelize.models);
    ActivitiesContributions.associate(sequelize.models);
    ActivitiesMaterials.associate(sequelize.models);
    ChildUds.associate(sequelize.models);
    SchedulesActivities.associate(sequelize.models);
    ActivityChlid.associate(sequelize.models);
    DocsTypes.associate(sequelize.models);
    AdminZonalCenters.associate(sequelize.models);
    ZonalCenters.associate(sequelize.models);
    agentCommunity.associate(sequelize.models);
    educationLevels.associate(sequelize.models);
    AgentsUds.associate(sequelize.models);
    Uds.associate(sequelize.models);
    Aspects.associate(sequelize.models);
    Attendances.associate(sequelize.models);
    Attendants.associate(sequelize.models);
    Relationships.associate(sequelize.models);
    Childs.associate(sequelize.models);
    PopulationTypes.associate(sequelize.models);
    Genders.associate(sequelize.models);
    ChildUdsWeigth.associate(sequelize.models);
    Departments.associate(sequelize.models);
    Community.associate(sequelize.models);
    Schedule.associate(sequelize.models);
    Diary.associate(sequelize.models);
    FormRamDay.associate(sequelize.models);
    Municipalities.associate(sequelize.models);
    ReasonWhitdrawal.associate(sequelize.models);
    ServicesModalities.associate(sequelize.models);
    ServicesTypes.associate(sequelize.models);
    TracingChild.associate(sequelize.models);
    Withdrawal.associate(sequelize.models);
}

module.exports = setUpModels;
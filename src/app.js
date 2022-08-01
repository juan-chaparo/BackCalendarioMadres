import express from "express";
import config from "./config";
import childrenRoutes from "./routes/children.routes";
import aspectsRoutes from "./routes/aspects.routes";
import activitiesRoutes from "./routes/activities.routes";
import activitiesContributionsRoutes from "./routes/activitiesContributions.routes";
import activitiesMaterialsRoutes from "./routes/activitiesMaterials.routes";
import activityChildRoutes from "./routes/activityChild.routes";
import adminZonalCentersRoutes from "./routes/adminZonalCenters.routes";
import adminsRoutes from "./routes/admins.routes";
import agentsCommunityRoutes from "./routes/agentsCommunity.routes";
import agentsUdsRoutes from "./routes/agentsUds.routes";
import attendancesRoutes from "./routes/attendances.routes";
import attendantsRoutes from "./routes/attendants.routes";
import childAttendantsRoutes from "./routes/childAttendants.routes";
import childUdsRoutes from "./routes/childUds.routes";
import childUdsWeigthRoutes from "./routes/childUdsWeigth.routes";
import communityRoutes from "./routes/community.routes";
import contributionsRoutes from "./routes/contributions.routes";
import departmentsRoutes from "./routes/departments.routes";
import diaryRoutes from "./routes/diary.routes";
import docsTypesRoutes from "./routes/docsTypes.routes";
import educationsLevelsRoutes from "./routes/educationsLevels.routes";
import formRamDayRoutes from "./routes/formRamDay.routes";
import genderRoutes from "./routes/gender.routes";
import materialsRoutes from "./routes/materials.routes";
import municipalitiesRoutes from "./routes/municipalities.routes";
import populationTypesRoutes from "./routes/populationTypes.routes";
import reasonWithdrawalRoutes from "./routes/reasonWithdrawal.routes";
import relationshipsRoutes from "./routes/relationships.routes";
import rolRoutes from "./routes/rol.routes";
import serviciesModalityRoutes from "./routes/serviciesModality.routes";
import serviciesTypesRoutes from "./routes/serviciesTypes.routes";
import shedulesRoutes from "./routes/shedules.routes";
import shedulesActivitiesRoutes from "./routes/shedulesActivities.routes";
import tracingChildRoutes from "./routes/tracingChild.routes";
import typesContributionRoutes from "./routes/typesContribution.routes";
import udsRoutes from "./routes/uds.routes";
import usersRoutes from "./routes/users.routes";
import withdrawalRoutes from "./routes/withdrawal.routes";
import zonalCentersRoutes from "./routes/zonalCenters.routes";

const app = express();

//settings
app.set("port", config.port);

//middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(childrenRoutes);
app.use(aspectsRoutes);
app.use(activitiesRoutes);
app.use(activitiesContributionsRoutes);
app.use(activitiesMaterialsRoutes);
app.use(activityChildRoutes);
app.use(adminZonalCentersRoutes);
app.use(adminsRoutes);
app.use(agentsCommunityRoutes);
app.use(agentsUdsRoutes);
app.use(attendancesRoutes);
app.use(attendantsRoutes);
app.use(childAttendantsRoutes);
app.use(childUdsRoutes);
app.use(childUdsWeigthRoutes);
app.use(communityRoutes);
app.use(contributionsRoutes);
app.use(departmentsRoutes);
app.use(diaryRoutes);
app.use(docsTypesRoutes);
app.use(educationsLevelsRoutes);
app.use(formRamDayRoutes);
app.use(genderRoutes);
app.use(materialsRoutes);
app.use(municipalitiesRoutes);
app.use(populationTypesRoutes);
app.use(reasonWithdrawalRoutes);
app.use(relationshipsRoutes);
app.use(rolRoutes);
app.use(serviciesModalityRoutes);
app.use(serviciesTypesRoutes);
app.use(shedulesRoutes);
app.use(shedulesActivitiesRoutes);
app.use(tracingChildRoutes);
app.use(typesContributionRoutes);
app.use(udsRoutes);
app.use(usersRoutes);
app.use(withdrawalRoutes);
app.use(zonalCentersRoutes);

export default app;
const { models } = require('./../../libs/sequelize');

async function createData ()
{
    await models.am_lenguage.bulkCreate([
        { nameLenguage: "Español" }
    ]);

    await models.am_attendances.bulkCreate([
        {
            nameAttendance: "Asistencia",
            abbreviation: "A",
            idLenguage: 1
        },
        {
            nameAttendance: "Ausencia",
            abbreviation: "I",
            idLenguage: 1
        }
    ]);

    await models.am_departments.bulkCreate([
        {
            nameDepartment: 'Cundinamarca'
        }
    ])

    await models.am_docs_types.bulkCreate([
        {
            nameDoc: 'Cédula de Ciudadanía',
            abbreviation: 'C.C',
            idLenguage: 1
        },
        {
            nameDoc: 'Cédula de Extranjería',
            abbreviation: 'C.E',
            idLenguage: 1
        },
        {
            nameDoc: 'Tarjeta de Identidad',
            abbreviation: 'T.I',
            idLenguage: 1
        },
        {
            nameDoc: ' Pasaporte',
            abbreviation: 'P.A',
            idLenguage: 1
        },
        {
            nameDoc: ' Registro Civil',
            abbreviation: 'R.I',
            idLenguage: 1
        }
    ]);

    await models.am_education_levels.bulkCreate([
        {
            nameEducationLevel: 'educación basica',
            idLenguage: 1
        },
        {
            nameEducationLevel: 'educación media',
            idLenguage: 1
        },
        {
            nameEducationLevel: 'educación superior',
            idLenguage: 1
        }
    ]);

    await models.am_genders.bulkCreate([
        {
            nameGender: 'Masculino',
            idLenguage: 1
        },
        {
            nameGender: 'Femenino',
            idLenguage: 1
        },
        {
            nameGender: 'Otro',
            idLenguage: 1
        }
    ]);

    await models.am_municipalities.bulkCreate([
        {
            nameMunicipality: 'Fusagasuga',
            idDepartment: 1
        },
        {
            nameMunicipality: 'Mosquera',
            idDepartment: 1
        },
        {
            nameMunicipality: 'Funza',
            idDepartment: 1
        },
        {
            nameMunicipality: 'Cota',
            idDepartment: 1
        }
    ]);

    await models.am_population_types.bulkCreate([
        {
            NamePopulationType: 'Indigena',
            idLenguage: 1
        },
        {
            NamePopulationType: 'Gitan@',
            idLenguage: 1
        }
    ]);

    await models.am_reason_whitdrawals.bulkCreate([
        {
            nameReasonWhitdrawal: 'Cambio de dirección',
            abbreviation: 'D',
            idLenguage: 1
        },
        {
            nameReasonWhitdrawal: 'Volutario',
            abbreviation: 'V',
            idLenguage: 1
        },
        {
            nameReasonWhitdrawal: 'transición a la educación regular',
            abbreviation: 'T',
            idLenguage: 1
        },
        {
            nameReasonWhitdrawal: 'Cambio de servicio',
            abbreviation: 'S',
            idLenguage: 1
        }
    ]);

    await models.am_relationships.bulkCreate([
        {
            nameRelationship: 'Padre',
            idLenguage: 1
        },
        {
            nameRelationship: 'Madre',
            idLenguage: 1
        }
    ]);

    await models.am_rol.bulkCreate([
        {
            rol: 'Administrador General',
            idLenguage: 1
        },
        {
            rol: 'Administrador Zonal',
            idLenguage: 1
        },
        {
            rol: 'Agente Comunitario',
            idLenguage: 1
        }
    ]);

    await models.am_services_types.bulkCreate([
        {
            nameServiceType: 'Hogares de bienestar comunitario HCB - familia mujer y niños',
            idLenguage: 1
        },
        {
            nameServiceType: 'Hogares de bienestar comunitario HCB - tradicional',
            idLenguage: 1
        }
    ]);

    await models.am_services_modalities.bulkCreate([
        {
            nameServiceModality: 'viviendas comunitarias familiares',
            idLenguage: 1
        },
        {
            nameServiceModality: 'viviendas comunitarias agrupadas',
            idLenguage: 1
        },
        {
            nameServiceModality: 'varias casas comunitarias' ,
            idLenguage: 1
        }
    ]);

    await models.am_types_contributions.bulkCreate([
        {
            TypeContribution: 'Cognitive',
            idLenguage: 1
        },
        {
            TypeContribution: 'Social',
            idLenguage: 1
        }
    ]);

    await models.av_users.bulkCreate([
        {
            email: 'proyectoicbfudec@gmail.com',
            password: '$2b$10$.rab2O1bwugJFsLIQ07lSOoyyVuyc6vUMJr/vdYiAMwWKKAP8gG/m',
            idRol: 1
        }
    ]);

    await models.av_admins.bulkCreate([
        {
            firstName: 'Admin',
            firstLastName: 'test',
            secondLastName: 'icbf',
            numDoc: '1234567890',
            idDocType: 1,
            cellphone: "1234567",
            dateBirth: "2022-01-01",
            idUser: 1
        }
    ]);
}

createData();
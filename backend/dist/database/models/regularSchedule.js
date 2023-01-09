"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const regularSchedule = sequelize.define('regularSchedule', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        day: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
                isIn: [[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ]],
            }
        },
        importHash: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
            validate: {
                len: [0, 255],
            },
        },
    }, {
        indexes: [
            {
                unique: true,
                fields: ['importHash', 'tenantId'],
                where: {
                    deletedAt: null,
                },
            },
            {
                unique: true,
                fields: ['day', 'tenantId'],
                where: {
                    deletedAt: null,
                },
            },
        ],
        timestamps: true,
        paranoid: true,
    });
    regularSchedule.associate = (models) => {
        models.regularSchedule.belongsToMany(models.musicTrack, {
            as: 'musicTrack',
            constraints: false,
            through: 'regularScheduleMusicTrackMusicTrack',
        });
        models.regularSchedule.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.regularSchedule.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.regularSchedule.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return regularSchedule;
}
exports.default = default_1;
//# sourceMappingURL=regularSchedule.js.map
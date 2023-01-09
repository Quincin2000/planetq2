"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const moment_1 = __importDefault(require("moment"));
function default_1(sequelize) {
    const specialSchedule = sequelize.define('specialSchedule', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        scheduleDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            get: function () {
                // @ts-ignore
                return this.getDataValue('scheduleDate')
                    ? moment_1.default
                        // @ts-ignore
                        .utc(this.getDataValue('scheduleDate'))
                        .format('YYYY-MM-DD')
                    : null;
            },
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
        ],
        timestamps: true,
        paranoid: true,
    });
    specialSchedule.associate = (models) => {
        models.specialSchedule.belongsToMany(models.musicTrack, {
            as: 'musicTrack',
            constraints: false,
            through: 'specialScheduleMusicTrackMusicTrack',
        });
        models.specialSchedule.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.specialSchedule.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.specialSchedule.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return specialSchedule;
}
exports.default = default_1;
//# sourceMappingURL=specialSchedule.js.map
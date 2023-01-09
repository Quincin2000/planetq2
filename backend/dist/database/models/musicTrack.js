"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
function default_1(sequelize) {
    const musicTrack = sequelize.define('musicTrack', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        trackName: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        artist: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        album: {
            type: sequelize_1.DataTypes.STRING(100),
            validate: {
                len: [2, 100],
            }
        },
        externalSourceUrl: {
            type: sequelize_1.DataTypes.TEXT,
        },
        active: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
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
    musicTrack.associate = (models) => {
        models.musicTrack.hasMany(models.file, {
            as: 'cover',
            foreignKey: 'belongsToId',
            constraints: false,
            scope: {
                belongsTo: models.musicTrack.getTableName(),
                belongsToColumn: 'cover',
            },
        });
        models.musicTrack.hasMany(models.file, {
            as: 'audioTrack',
            foreignKey: 'belongsToId',
            constraints: false,
            scope: {
                belongsTo: models.musicTrack.getTableName(),
                belongsToColumn: 'audioTrack',
            },
        });
        models.musicTrack.belongsTo(models.tenant, {
            as: 'tenant',
            foreignKey: {
                allowNull: false,
            },
        });
        models.musicTrack.belongsTo(models.user, {
            as: 'createdBy',
        });
        models.musicTrack.belongsTo(models.user, {
            as: 'updatedBy',
        });
    };
    return musicTrack;
}
exports.default = default_1;
//# sourceMappingURL=musicTrack.js.map
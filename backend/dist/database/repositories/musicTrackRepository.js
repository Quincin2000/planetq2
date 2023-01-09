"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelizeRepository_1 = __importDefault(require("../../database/repositories/sequelizeRepository"));
const auditLogRepository_1 = __importDefault(require("../../database/repositories/auditLogRepository"));
const lodash_1 = __importDefault(require("lodash"));
const sequelizeFilterUtils_1 = __importDefault(require("../../database/utils/sequelizeFilterUtils"));
const Error404_1 = __importDefault(require("../../errors/Error404"));
const sequelize_1 = __importDefault(require("sequelize"));
const fileRepository_1 = __importDefault(require("./fileRepository"));
const regularScheduleRepository_1 = __importDefault(require("./regularScheduleRepository"));
const specialScheduleRepository_1 = __importDefault(require("./specialScheduleRepository"));
const Op = sequelize_1.default.Op;
class MusicTrackRepository {
    static create(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.musicTrack.create(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
                'trackName',
                'artist',
                'album',
                'externalSourceUrl',
                'active',
                'importHash',
            ])), { tenantId: tenant.id, createdById: currentUser.id, updatedById: currentUser.id }), {
                transaction,
            });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.musicTrack.getTableName(),
                belongsToColumn: 'cover',
                belongsToId: record.id,
            }, data.cover, options);
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.musicTrack.getTableName(),
                belongsToColumn: 'audioTrack',
                belongsToId: record.id,
            }, data.audioTrack, options);
            yield this._createAuditLog(auditLogRepository_1.default.CREATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    static update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let record = yield options.database.musicTrack.findOne({
                where: {
                    id,
                    tenantId: currentTenant.id,
                },
                transaction,
            });
            if (!record) {
                throw new Error404_1.default();
            }
            record = yield record.update(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
                'trackName',
                'artist',
                'album',
                'externalSourceUrl',
                'active',
                'importHash',
            ])), { updatedById: currentUser.id }), {
                transaction,
            });
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.musicTrack.getTableName(),
                belongsToColumn: 'cover',
                belongsToId: record.id,
            }, data.cover, options);
            yield fileRepository_1.default.replaceRelationFiles({
                belongsTo: options.database.musicTrack.getTableName(),
                belongsToColumn: 'audioTrack',
                belongsToId: record.id,
            }, data.audioTrack, options);
            yield this._createAuditLog(auditLogRepository_1.default.UPDATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    static destroy(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let record = yield options.database.musicTrack.findOne({
                where: {
                    id,
                    tenantId: currentTenant.id,
                },
                transaction,
            });
            if (!record) {
                throw new Error404_1.default();
            }
            yield record.destroy({
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.DELETE, record, record, options);
        });
    }
    static findById(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const include = [];
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const record = yield options.database.musicTrack.findOne({
                where: {
                    id,
                    tenantId: currentTenant.id,
                },
                include,
                transaction,
            });
            if (!record) {
                throw new Error404_1.default();
            }
            return this._fillWithRelationsAndFiles(record, options);
        });
    }
    static filterIdInTenant(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return lodash_1.default.get(yield this.filterIdsInTenant([id], options), '[0]', null);
        });
    }
    static filterIdsInTenant(ids, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!ids || !ids.length) {
                return [];
            }
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const where = {
                id: {
                    [Op.in]: ids,
                },
                tenantId: currentTenant.id,
            };
            const records = yield options.database.musicTrack.findAll({
                attributes: ['id'],
                where,
            });
            return records.map((record) => record.id);
        });
    }
    static count(filter, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            return options.database.musicTrack.count({
                where: Object.assign(Object.assign({}, filter), { tenantId: tenant.id }),
                transaction,
            });
        });
    }
    static fetchRadioList(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let regularSchedules = yield regularScheduleRepository_1.default.getRadioSchedule(options);
            let specialSchedule = yield specialScheduleRepository_1.default.getRadioSchedule(options);
            let rMusicTracks = [];
            let sMusicTracks = [];
            let combinedMusicTracks = [];
            if (regularSchedules.length > 0)
                rMusicTracks = regularSchedules[0].musicTrack;
            if (specialSchedule.length > 0) {
                sMusicTracks = specialSchedule[0].musicTrack;
                let rows = yield this._fillWithRelationsAndFilesForRows(sMusicTracks.concat(rMusicTracks), options);
                return rows;
                //return sMusicTracks.concat(rMusicTracks);
            }
            else if (rMusicTracks.length > 0) {
                let rows = yield this._fillWithRelationsAndFilesForRows(rMusicTracks, options);
                return rows;
            }
            else {
                const records = yield options.database.musicTrack.findAll();
                let rows = yield this._fillWithRelationsAndFilesForRows(records, options);
                return rows;
            }
        });
    }
    static findAndCountAll({ filter, limit = 0, offset = 0, orderBy = '' }, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let whereAnd = [];
            let include = [];
            whereAnd.push({
                tenantId: tenant.id,
            });
            if (filter) {
                if (filter.id) {
                    whereAnd.push({
                        ['id']: sequelizeFilterUtils_1.default.uuid(filter.id),
                    });
                }
                if (filter.trackName) {
                    whereAnd.push(sequelizeFilterUtils_1.default.ilikeIncludes('musicTrack', 'trackName', filter.trackName));
                }
                if (filter.artist) {
                    whereAnd.push(sequelizeFilterUtils_1.default.ilikeIncludes('musicTrack', 'artist', filter.artist));
                }
                if (filter.album) {
                    whereAnd.push(sequelizeFilterUtils_1.default.ilikeIncludes('musicTrack', 'album', filter.album));
                }
                if (filter.externalSourceUrl) {
                    whereAnd.push(sequelizeFilterUtils_1.default.ilikeIncludes('musicTrack', 'externalSourceUrl', filter.externalSourceUrl));
                }
                if (filter.active === true ||
                    filter.active === 'true' ||
                    filter.active === false ||
                    filter.active === 'false') {
                    whereAnd.push({
                        active: filter.active === true ||
                            filter.active === 'true',
                    });
                }
                if (filter.createdAtRange) {
                    const [start, end] = filter.createdAtRange;
                    if (start !== undefined &&
                        start !== null &&
                        start !== '') {
                        whereAnd.push({
                            ['createdAt']: {
                                [Op.gte]: start,
                            },
                        });
                    }
                    if (end !== undefined &&
                        end !== null &&
                        end !== '') {
                        whereAnd.push({
                            ['createdAt']: {
                                [Op.lte]: end,
                            },
                        });
                    }
                }
            }
            const where = { [Op.and]: whereAnd };
            let { rows, count, } = yield options.database.musicTrack.findAndCountAll({
                where,
                include,
                limit: limit ? Number(limit) : undefined,
                offset: offset ? Number(offset) : undefined,
                order: orderBy
                    ? [orderBy.split('_')]
                    : [['createdAt', 'DESC']],
                transaction: sequelizeRepository_1.default.getTransaction(options),
            });
            rows = yield this._fillWithRelationsAndFilesForRows(rows, options);
            return { rows, count };
        });
    }
    static findAllAutocomplete(query, limit, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let whereAnd = [{
                    tenantId: tenant.id,
                }];
            if (query) {
                whereAnd.push({
                    [Op.or]: [
                        { ['id']: sequelizeFilterUtils_1.default.uuid(query) },
                        {
                            [Op.and]: sequelizeFilterUtils_1.default.ilikeIncludes('musicTrack', 'trackName', query),
                        },
                    ],
                });
            }
            const where = { [Op.and]: whereAnd };
            const records = yield options.database.musicTrack.findAll({
                attributes: ['id', 'trackName'],
                where,
                limit: limit ? Number(limit) : undefined,
                order: [['trackName', 'ASC']],
            });
            return records.map((record) => ({
                id: record.id,
                label: record.trackName,
            }));
        });
    }
    static _createAuditLog(action, record, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = {};
            if (data) {
                values = Object.assign(Object.assign({}, record.get({ plain: true })), { cover: data.cover, audioTrack: data.audioTrack });
            }
            yield auditLogRepository_1.default.log({
                entityName: 'musicTrack',
                entityId: record.id,
                action,
                values,
            }, options);
        });
    }
    static _fillWithRelationsAndFilesForRows(rows, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!rows) {
                return rows;
            }
            return Promise.all(rows.map((record) => this._fillWithRelationsAndFiles(record, options)));
        });
    }
    static _fillWithRelationsAndFiles(record, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!record) {
                return record;
            }
            const output = record.get({ plain: true });
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            output.cover = yield fileRepository_1.default.fillDownloadUrl(yield record.getCover({
                transaction,
            }));
            output.audioTrack = yield fileRepository_1.default.fillDownloadUrl(yield record.getAudioTrack({
                transaction,
            }));
            return output;
        });
    }
}
exports.default = MusicTrackRepository;
//# sourceMappingURL=musicTrackRepository.js.map
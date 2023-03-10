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
const Op = sequelize_1.default.Op;
class RegularScheduleRepository {
    static create(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const tenant = sequelizeRepository_1.default.getCurrentTenant(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const record = yield options.database.regularSchedule.create(Object.assign(Object.assign({}, lodash_1.default.pick(data, [
                'day',
                'importHash',
            ])), { tenantId: tenant.id, createdById: currentUser.id, updatedById: currentUser.id }), {
                transaction,
            });
            yield record.setMusicTrack(data.musicTrack || [], {
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.CREATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    static update(id, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = sequelizeRepository_1.default.getCurrentUser(options);
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let record = yield options.database.regularSchedule.findOne({
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
                'day',
                'importHash',
            ])), { updatedById: currentUser.id }), {
                transaction,
            });
            yield record.setMusicTrack(data.musicTrack || [], {
                transaction,
            });
            yield this._createAuditLog(auditLogRepository_1.default.UPDATE, record, data, options);
            return this.findById(record.id, options);
        });
    }
    static destroy(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = sequelizeRepository_1.default.getTransaction(options);
            const currentTenant = sequelizeRepository_1.default.getCurrentTenant(options);
            let record = yield options.database.regularSchedule.findOne({
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
            const record = yield options.database.regularSchedule.findOne({
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
            const records = yield options.database.regularSchedule.findAll({
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
            return options.database.regularSchedule.count({
                where: Object.assign(Object.assign({}, filter), { tenantId: tenant.id }),
                transaction,
            });
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
                if (filter.day) {
                    whereAnd.push({
                        day: filter.day,
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
            let { rows, count, } = yield options.database.regularSchedule.findAndCountAll({
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
                            [Op.and]: sequelizeFilterUtils_1.default.ilikeIncludes('regularSchedule', 'day', query),
                        },
                    ],
                });
            }
            const where = { [Op.and]: whereAnd };
            const records = yield options.database.regularSchedule.findAll({
                attributes: ['id', 'day'],
                where,
                limit: limit ? Number(limit) : undefined,
                order: [['day', 'ASC']],
            });
            return records.map((record) => ({
                id: record.id,
                label: record.day,
            }));
        });
    }
    static _createAuditLog(action, record, data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = {};
            if (data) {
                values = Object.assign(Object.assign({}, record.get({ plain: true })), { musicTrackIds: data.musicTrack });
            }
            yield auditLogRepository_1.default.log({
                entityName: 'regularSchedule',
                entityId: record.id,
                action,
                values,
            }, options);
        });
    }
    static getRadioSchedule(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const d = new Date();
            let day = weekday[d.getDay()];
            const where = {
                day: day
            };
            const recordsRegularSchedule = yield options.database.regularSchedule.findAll({
                attributes: ['id'],
                where,
            });
            let rowsRegularScheduleList = yield this._fillWithRelationsAndFilesForRows(recordsRegularSchedule, options);
            return rowsRegularScheduleList;
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
            output.musicTrack = yield record.getMusicTrack({
                transaction,
            });
            return output;
        });
    }
}
exports.default = RegularScheduleRepository;
//# sourceMappingURL=regularScheduleRepository.js.map
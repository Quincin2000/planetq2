"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const roles_1 = __importDefault(require("./roles"));
const plans_1 = __importDefault(require("./plans"));
const storage_1 = __importDefault(require("./storage"));
const storage = storage_1.default.values;
const roles = roles_1.default.values;
const plans = plans_1.default.values;
class Permissions {
    static get values() {
        return {
            tenantEdit: {
                id: 'tenantEdit',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            tenantDestroy: {
                id: 'tenantDestroy',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            planEdit: {
                id: 'planEdit',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            planRead: {
                id: 'planRead',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            userEdit: {
                id: 'userEdit',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            userDestroy: {
                id: 'userDestroy',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            userCreate: {
                id: 'userCreate',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            userImport: {
                id: 'userImport',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            userRead: {
                id: 'userRead',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            userAutocomplete: {
                id: 'userAutocomplete',
                allowedRoles: [roles.admin, roles.custom],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            auditLogRead: {
                id: 'auditLogRead',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
            },
            settingsEdit: {
                id: 'settingsEdit',
                allowedRoles: [roles.admin],
                allowedPlans: [
                    plans.free,
                    plans.growth,
                    plans.enterprise,
                ],
                allowedStorage: [
                    storage.settingsBackgroundImages,
                    storage.settingsLogos,
                ],
            },
            musicTrackImport: {
                id: 'musicTrackImport',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
            },
            musicTrackCreate: {
                id: 'musicTrackCreate',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
                allowedStorage: [
                    storage.musicTrackCover,
                    storage.musicTrackAudioTrack,
                ],
            },
            musicTrackEdit: {
                id: 'musicTrackEdit',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
                allowedStorage: [
                    storage.musicTrackCover,
                    storage.musicTrackAudioTrack,
                ],
            },
            musicTrackDestroy: {
                id: 'musicTrackDestroy',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
                allowedStorage: [
                    storage.musicTrackCover,
                    storage.musicTrackAudioTrack,
                ],
            },
            musicTrackRead: {
                id: 'musicTrackRead',
                allowedRoles: [roles.admin, roles.custom],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
            },
            musicTrackAutocomplete: {
                id: 'musicTrackAutocomplete',
                allowedRoles: [roles.admin, roles.custom],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
            },
            regularScheduleImport: {
                id: 'regularScheduleImport',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
            },
            regularScheduleCreate: {
                id: 'regularScheduleCreate',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
                allowedStorage: [],
            },
            regularScheduleEdit: {
                id: 'regularScheduleEdit',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
                allowedStorage: [],
            },
            regularScheduleDestroy: {
                id: 'regularScheduleDestroy',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
                allowedStorage: [],
            },
            regularScheduleRead: {
                id: 'regularScheduleRead',
                allowedRoles: [roles.admin, roles.custom],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
            },
            regularScheduleAutocomplete: {
                id: 'regularScheduleAutocomplete',
                allowedRoles: [roles.admin, roles.custom],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
            },
            specialScheduleImport: {
                id: 'specialScheduleImport',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
            },
            specialScheduleCreate: {
                id: 'specialScheduleCreate',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
                allowedStorage: [],
            },
            specialScheduleEdit: {
                id: 'specialScheduleEdit',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
                allowedStorage: [],
            },
            specialScheduleDestroy: {
                id: 'specialScheduleDestroy',
                allowedRoles: [roles.admin],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
                allowedStorage: [],
            },
            specialScheduleRead: {
                id: 'specialScheduleRead',
                allowedRoles: [roles.admin, roles.custom],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
            },
            specialScheduleAutocomplete: {
                id: 'specialScheduleAutocomplete',
                allowedRoles: [roles.admin, roles.custom],
                allowedPlans: [plans.free, plans.growth, plans.enterprise],
            },
        };
    }
    static get asArray() {
        return Object.keys(this.values).map((value) => {
            return this.values[value];
        });
    }
}
exports.default = Permissions;
//# sourceMappingURL=permissions.js.map
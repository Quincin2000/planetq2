"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.post(`/tenant/:tenantId/regular-schedule`, require('./regularScheduleCreate').default);
    app.put(`/tenant/:tenantId/regular-schedule/:id`, require('./regularScheduleUpdate').default);
    app.post(`/tenant/:tenantId/regular-schedule/import`, require('./regularScheduleImport').default);
    app.delete(`/tenant/:tenantId/regular-schedule`, require('./regularScheduleDestroy').default);
    app.get(`/tenant/:tenantId/regular-schedule/autocomplete`, require('./regularScheduleAutocomplete').default);
    app.get(`/tenant/:tenantId/regular-schedule`, require('./regularScheduleList').default);
    app.get(`/tenant/:tenantId/regular-schedule/:id`, require('./regularScheduleFind').default);
};
//# sourceMappingURL=index.js.map
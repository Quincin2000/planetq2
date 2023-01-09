export default (app) => {
  app.post(
    `/tenant/:tenantId/special-schedule`,
    require('./specialScheduleCreate').default,
  );
  app.put(
    `/tenant/:tenantId/special-schedule/:id`,
    require('./specialScheduleUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/special-schedule/import`,
    require('./specialScheduleImport').default,
  );
  app.delete(
    `/tenant/:tenantId/special-schedule`,
    require('./specialScheduleDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/special-schedule/autocomplete`,
    require('./specialScheduleAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/special-schedule`,
    require('./specialScheduleList').default,
  );
  app.get(
    `/tenant/:tenantId/special-schedule/:id`,
    require('./specialScheduleFind').default,
  );
};

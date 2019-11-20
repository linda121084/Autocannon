import { API_PATH } from './_env';

export default [
  // 編輯
  {
    method: 'PUT',
    path: `${API_PATH}/tasks/correctiveAction/content/update`,
    body: JSON.stringify([
      {
        id: 16,
        actualStartDate: '2019-11-18T16:00:00.000Z',
        actualEndDate: '2019-11-22T16:00:00.000Z',
        comment: '三日完成',
        actualCharge: '2000.00',
        correctiveId: 47,
        status: '_SYS_CA_1',
      },
    ]),
  },

  // 送出簽核（完成驗證後的送出）
  {
    method: 'POST',
    path: `${API_PATH}/taskBpm/submit`,
    body: JSON.stringify({
      taskId: 250,
      bpmFormId: '8bafcb77-0624-45d6-9878-0fb6cc3406f9',
      bpmFormType: 'EHS002',
      bpmAction: 'Submit',
      ownerAccount: 'B32999',
      ownerOrgId: '74',
      ownerEventCode: null,
      bpmTaskId: null,
      bpmStepId: null,
      nextAccount: '012736',
      nextOrgId: 188,
      nextEventCode: 'E2',
    }),
  },

  // 搜尋
  {
    method: 'POST',
    path: `${API_PATH}/tasks/taskCenterPersonal`,
    body: JSON.stringify({
      pagingTool: { currentPage: 1, pageSize: 10 },
      queryOrderBies: [{ columnName: 'id', orderType: 'desc' }],
      queryCriterias: [
        {
          connection: 'and',
          key: 'moduleName',
          condition: '=',
          value: '_SYS_ST3_2',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'subject',
          condition: 'like',
          value: '電算',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'status',
          condition: '=',
          value: '_SYS_PL1_5',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'dueDateBegin',
          condition: '>=',
          value: '2019-11-18T16:00:00.000Z',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'dueDateEnd',
          condition: '<=',
          value: '2019-11-27T16:00:00.000Z',
          isValueADigital: false,
        },
      ],
    }),
  },
];

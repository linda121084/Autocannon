import { API_PATH } from './_env';

export default [
  // 搜尋培訓記錄
  {
    method: 'POST',
    path: `${API_PATH}/training/records/employee/summary`,
    body: JSON.stringify({
      pagingTool: { currentPage: 1, pageSize: 10 },
      queryCriterias: [
        {
          connection: 'and',
          key: 'org.id',
          condition: '=',
          value: '155',
          isValueADigital: true,
        },
        {
          connection: 'and',
          key: 'name',
          condition: 'like',
          value: '游',
          isValueADigital: false,
        },
        {
          connection: 'and',
          key: 'employee.status',
          condition: '=',
          value: '_SYS_A9_1',
          isValueADigital: false,
        },
      ],
    }),
  },
  // // 查看員工基本資料
  // {
  //   method: 'GET',
  //   path: `${API_PATH}/employees/250`,
  // },
  // // 查看員工培訓記錄（未結束、已結束）
  // {
  //   method: 'POST',
  //   path: `${API_PATH}/training/records/employee/250`,
  //   body: JSON.stringify({
  //     pagingTool: { currentPage: 1, pageSize: 10 },
  //     queryCriterias: [
  //       {
  //         connection: 'and',
  //         key: 'class.status',
  //         condition: '=',
  //         value: '_TRAINING_AG_3',
  //         isValueADigital: false,
  //       },
  //     ],
  //   }),
  // },
];

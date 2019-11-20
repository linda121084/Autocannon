import { API_PATH } from './_env';

export default [
  // 進入個人任務中心頁面
  {
    method: 'POST',
    path: `${API_PATH}/tasks/taskCenterPersonal`,
    body: JSON.stringify([
      {
        pagingTool: { currentPage: 1, pageSize: 10 },
        queryOrderBies: [{ columnName: 'id', orderType: 'desc' }],
        queryCriterias: [],
      },
    ]),
  },
];

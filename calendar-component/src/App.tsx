/*
 * @Author: 冯英祥 694838286@qq.com
 * @Date: 2024-07-02 13:56:01
 * @LastEditors: 冯英祥 694838286@qq.com
 * @LastEditTime: 2024-07-02 16:48:22
 * @FilePath: \NG\react-course-code-learn\calendar-component\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from 'dayjs';
import Calendar from './Calendar';

function App() {
  return (
    <div className="App">
      <Calendar value={dayjs("2024-07-02")}></Calendar>
    </div>
  );
}

export default App;

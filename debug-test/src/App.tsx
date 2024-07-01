/*
 * @Author: 冯英祥 694838286@qq.com
 * @Date: 2024-07-01 17:25:20
 * @LastEditors: 冯英祥 694838286@qq.com
 * @LastEditTime: 2024-07-01 17:27:03
 * @FilePath: \NG\react-course-code-learn\debug-test\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useLayoutEffect, useState } from "react";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  })
  return data;
}

function App() {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    queryData().then(data => {
      setNum(data);
    })
  }, []);

  return (
    <div onClick={(e) => {
      setNum((prevNum) => prevNum + 1)
    }}>{num}</div>
  );
}

export default App;


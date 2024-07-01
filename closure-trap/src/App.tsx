/*
 * @Author: 冯英祥 694838286@qq.com
 * @Date: 2024-07-01 16:26:43
 * @LastEditors: 冯英祥 694838286@qq.com
 * @LastEditTime: 2024-07-01 16:36:16
 * @FilePath: \NG\react-course-code-learn\closure-trap\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      console.log('Count inside interval:', count);
      setCount(count + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startTimer}>Start Timer</button>
    </div>
  );
}

export default Counter;

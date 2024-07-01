/*
 * @Author: 冯英祥 694838286@qq.com
 * @Date: 2024-06-28 17:08:36
 * @LastEditors: 冯英祥 694838286@qq.com
 * @LastEditTime: 2024-07-01 16:12:15
 * @FilePath: \学习\NG\react-course-code-learn\hook-test\src\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App5';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

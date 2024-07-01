import { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  // 使用 useEffect 处理副作用
  useEffect(() => {
    console.log('effect');
    // 设置一个定时器，每隔 1 秒打印一次 num 的值
    const timer = setInterval(() => {
      console.log(num);
    }, 1000);

    // 返回一个清理函数，在组件卸载或依赖项变化时执行
    // 首次渲染时：清理函数不会执行。
    // 依赖项变化时：清理函数会在 useEffect 再次执行之前执行。
    // 组件卸载时：清理函数会执行。
    return () => {
      console.log('clean up');
      clearInterval(timer); // 清除定时器，防止内存泄漏
    };
  }, [num]); // 依赖项为 num，当 num 变化时，执行清理函数并重新执行副作用

  // 返回一个 div，点击时 num 加 1
  return (
    <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
  );
}

export default App;

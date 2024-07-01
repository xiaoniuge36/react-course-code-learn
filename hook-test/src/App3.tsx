/*
 * @Author: 冯英祥 694838286@qq.com
 * @Date: 2024-07-01 15:55:55
 * @LastEditors: 冯英祥 694838286@qq.com
 * @LastEditTime: 2024-07-01 15:56:08
 * @FilePath: \NG\react-course-code-learn\hook-test\src\App3.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Reducer, useReducer } from "react";

interface Data {
    result: number;
}

interface Action {
    type: 'add' | 'minus',
    num: number
}
function reducer(state: Data, action: Action) {

    switch (action.type) {
        case 'add':
            return {
                result: state.result + action.num
            }
        case 'minus':
            return {
                result: state.result - action.num
            }
    }
    return state;
}

function App() {
    const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0 });

    return (
        <div>
            <div onClick={() => dispatch({ type: 'add', num: 2 })}>加</div>
            <div onClick={() => dispatch({ type: 'minus', num: 1 })}>减</div>
            <div>{res.result}</div>
        </div>
    );
}

export default App;


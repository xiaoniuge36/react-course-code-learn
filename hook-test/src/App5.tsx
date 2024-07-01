/*
 * @Author: 冯英祥 694838286@qq.com
 * @Date: 2024-07-01 16:06:55
 * @LastEditors: 冯英祥 694838286@qq.com
 * @LastEditTime: 2024-07-01 16:07:02
 * @FilePath: \NG\react-course-code-learn\hook-test\src\App5.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createContext, useContext } from 'react';

const countContext = createContext(111);

function Aaa() {
    return <div>
        <countContext.Provider value={222}>
            <Bbb></Bbb>
        </countContext.Provider>
    </div>
}

function Bbb() {
    return <div><Ccc></Ccc></div>
}

function Ccc() {
    const count = useContext(countContext);
    return <h2>context 的值为：{count}</h2>
}

export default Aaa;

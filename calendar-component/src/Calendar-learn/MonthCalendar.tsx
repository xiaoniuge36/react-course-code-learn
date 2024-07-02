/*
 * @Author: 冯英祥 694838286@qq.com
 * @Date: 2024-07-02 14:25:03
 * @LastEditors: 冯英祥 694838286@qq.com
 * @LastEditTime: 2024-07-02 15:10:51
 * @FilePath: \NG\react-course-code-learn\calendar-component\src\Calendar\MonthCalendar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Dayjs } from "dayjs";
import { CalendarProps } from ".";
interface MonthCalendarProps extends CalendarProps { }
function getAllDays(date: Dayjs) {
    const startDate = date.startOf('month');
    const day = startDate.day()

    const daysInfo = new Array(6 * 7);

    for (let i = 0; i < day; i++) {
        daysInfo[i] = {
            date: startDate.subtract(day - i, 'day'),
            currentMonth: false
        }
    }

    for (let i = day; i < daysInfo.length; i++) {
        const calcDate = startDate.add(i - day, 'day');

        daysInfo[i] = {
            date: calcDate,
            currentMonth: calcDate.month() === date.month()
        }
    }

    return daysInfo;
}


function renderDays(days: Array<{ date: Dayjs, currentMonth: boolean }>) {
    const rows = [];
    for (let i = 0; i < 6; i++) {
        const row = [];
        for (let j = 0; j < 7; j++) {
            const item = days[i * 7 + j];
            row[j] = <div className={
                "calendar-month-body-cell " + (item.currentMonth ? 'calendar-month-body-cell-current' : '')
            }>{item.date.date()}</div>
        }
        rows.push(row);
    }
    return rows.map(row => <div className="calendar-month-body-row">{row}</div>)
}



function MonthCalendar(props: MonthCalendarProps) {
    const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]; // 获取当前月周期
    const allDays = getAllDays(props.value);

    return (
        <div className="calendar-month">
            <div className="calendar-month-week-list">
                {weekList.map((week) => (
                    <div className="calendar-month-week-list-item" key={week}>
                        {week}
                    </div>
                ))}
            </div>
            <div className="calendar-month-body">
                {
                    renderDays(allDays)
                }
            </div>

        </div>
    );
}

export default MonthCalendar;

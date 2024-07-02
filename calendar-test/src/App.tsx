import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import './index.css';

// 定义日历组件的属性接口
interface CalendarProps {
  value?: Date; // 默认值
  onChange?: (date: Date) => void; // 日期变化的回调函数
}

// 定义日历组件的引用接口
interface CalendarRef {
  getDate: () => Date; // 获取当前日期的方法
  setDate: (date: Date) => void; // 设置当前日期的方法
}

// 内部日历组件，使用 React 的 forwardRef 转发 ref
const InternalCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  CalendarProps
> = (props, ref) => {
  const { value = new Date(), onChange } = props; // 解构属性，并设置默认值

  const [date, setDate] = useState(value); // 定义日期状态

  // 使用 useImperativeHandle 来定义暴露给父组件的实例值
  useImperativeHandle(ref, () => {
    return {
      getDate() {
        return date; // 返回当前日期
      },
      setDate(date: Date) {
        setDate(date); // 设置当前日期
      },
    };
  });

  // 处理上一个月按钮点击事件
  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  // 处理下一个月按钮点击事件
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  // 月份名称
  const monthNames = [
    '一月', '二月', '三月', '四月', '五月', '六月',
    '七月', '八月', '九月', '十月', '十一月', '十二月'
  ];

  // 获取某年某月的天数
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // 获取某年某月的第一天是星期几
  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // 渲染日期
  const renderDays = () => {
    const days = [];

    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth()); // 当月天数
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth()); // 当月第一天是星期几

    // 渲染上个月的最后几天
    for (let i = firstDay; i > 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="empty prev">
          {new Date(date.getFullYear(), date.getMonth(), -i + 1).getDate()}
        </div>
      );
    }

    // 渲染当前月的天数
    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = onChange?.bind(null, new Date(date.getFullYear(), date.getMonth(), i));
      days.push(
        <div
          key={i}
          className={`day ${i === date.getDate() ? 'selected' : ''}`}
          onClick={clickHandler}>
          {i}
        </div>
      );
    }

    // 渲染下个月的前几天
    for (let i = 1; days.length < 42; i++) {
      days.push(
        <div key={`next-${i}`} className="empty next">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>
          {date.getFullYear()}年{monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDays()}
      </div>
    </div>
  );
};

// 使用 React.forwardRef 包装内部日历组件
const Calendar = React.forwardRef(InternalCalendar);

function Test() {
  const calendarRef = useRef<CalendarRef>(null); // 创建日历组件的引用

  // 使用 useEffect 在组件挂载后设置日期
  useEffect(() => {
    const timer = setTimeout(() => {
      calendarRef.current?.setDate(new Date(2024, 3, 1)); // 3秒后设置日期为 2024 年 4 月 1 日
    }, 3000);

    return () => {
      clearTimeout(timer); // 清除定时器
    };
  }, []);

  return (
    <div>
      {/* 第一个日历组件，带有日期变化的回调 */}
      <Calendar
        value={new Date(new Date().toLocaleDateString())}
        onChange={(date: Date) => {
          alert(date.toLocaleDateString()); // 日期变化时弹出选择的日期
        }}></Calendar>
      {/* 第二个日历组件，使用引用来操作日期 */}
      <Calendar
        ref={calendarRef}
        value={new Date('2024-8-15')}></Calendar>
    </div>
  );
}
export default Test; // 导出 Test 组件

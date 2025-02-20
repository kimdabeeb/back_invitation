import Calendar from 'react-calendar';
import moment from 'moment';
import data from 'data.json';
import styled from '@emotion/styled';
import { MainTitEn, PointTitle } from '@/components/Text.tsx';
import 'react-calendar/dist/Calendar.css';

const CalendarWrap = () => {
  const { greeting } = data;
  const marks = ['01-03-2025'];
  const markedDate = moment(marks[0], 'DD-MM-YYYY').toDate();

  return (
    <CalendarWrapper className="pd-w gsap-div">
      <MainTitEn style={{ marginBottom: '2.5rem' }}>WEDDING DAY</MainTitEn>
      <PointTitle style={{ fontWeight: '400' }}>{greeting.eventDay}</PointTitle>
      <PointTitle style={{ fontWeight: '300' }}>Saturday, March 1, 2025 | PM 15:40 </PointTitle>
      <Calendar
        formatDay={(locale = 'ko', date) => moment(date).locale(locale).format('D')}
        selectRange={false}
        calendarType="gregory"
        showNeighboringMonth={false}
        minDetail="month"
        prevLabel={null}
        nextLabel={null}
        prev2Label={null}
        next2Label={null}
        activeStartDate={new Date(2025, 2, 1)}
        tileClassName={({ date }) => {
          return moment(date).isSame(markedDate, 'day') ? 'highlight' : '';
        }}
      />
      <style>{`
      .react-calendar * {
        text-decoration: unset!important;
      }
      .react-calendar {
        font-family: GowunBatang;
        border: none;
        margin: 3rem auto 0;
        padding-top: 25px;
        border-top: 1px solid #e5e7eb;
      .highlight {
        background: #8c9a6f;
        color: #fff;
        font-weight: bold;
        border-radius: 50%;
        max-width: 43px!important;
        position: relative;
        left: 0;
      }
      
      .react-calendar__tile { font-size: .95em; padding-top: 12px; padding-bottom:12px; }
      .react-calendar__tile--active,
      .react-calendar__navigation__label {
        background: #fff;
        font-family: GowunBatang;
        color:#000;
      }
      .react-calendar__month-view__weekdays {margin-bottom:.6rem;}
      .react-calendar__month-view__days__day--neighboringMonth {color: #5F5F5F;}
      .react-calendar__navigation {
        display: flex;
        text-align: center;
        align-items: center;
        padding: 0 .5rem;
        margin-bottom: 1rem;
          .react-calendar__navigation button {
            font-size: 1rem;
            min-width: 20px;
          }
          .react-calendar__navigation__label {
            width: 5.5rem;
            height: 1.375rem;
            font-size: 16px;
            border: none;
            font-weight: 700;
            background-color: #fff;
          }
      }
      .react-calendar__tile--active:enabled:hover,
      .react-calendar__navigation button:enabled:hover, 
      .react-calendar__navigation button:enabled:focus {
        background-color: unset;
      }
    }
    `}</style>
    </CalendarWrapper>
  );
};

export default CalendarWrap;

const CalendarWrapper = styled.div`
  display: block;
`;

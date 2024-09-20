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

  //direction={"up"}
  return (
    <>
      {/* <Fade>
        <ShowCalendar>
          <MainTitEn>March 1, 2025</MainTitEn>
        </ShowCalendar>
      </Fade> */}
      <CalendarContainer className="pd-w">
        <MainTitEn>WEDDING DAY</MainTitEn>
        <PointTitle style={{ fontWeight: '400' }}>{greeting.eventDay}</PointTitle>
        <PointTitle style={{ fontWeight: '300', color: '#111' }}>
          Saturday, March 1, 2025 | PM 15:40
        </PointTitle>
        <Calendar
          locale="ko"
          selectRange={false}
          calendarType="gregory"
          showNeighboringMonth={false}
          minDetail="month"
          prevLabel={null}
          nextLabel={null}
          prev2Label={null}
          next2Label={null}
          formatDay={(local, date) => date.toLocaleString('en', { day: 'numeric' })}
          defaultActiveStartDate={new Date(2025, 2, 1)}
          tileClassName={({ date }) => {
            return moment(date).isSame(markedDate, 'day') ? 'highlight' : '';
          }}
        />
      </CalendarContainer>
      <style>{`
      .react-calendar * {
        text-decoration: unset!important;
      }
      
      .react-calendar {
        font-family: GowunBatang;
        border: none;
        max-width: 320px;
        margin: 30px auto 0;
        padding-top: 25px;
        width: auto;
        border-top: 1px solid #e5e7eb;

      .highlight {
        background: #fff3ae;
        color: #482808;
        font-weight: bold;
        border-radius: 50%;
        max-width: 38px!important;
        position: relative;
        left: 4px;
      }
      
      .react-calendar__tile--active,
      .react-calendar__navigation__label {
        background: #fff;
        font-family: GowunBatang;
        color:#000;
      }

      .react-calendar__month-view__days__day--neighboringMonth{
        color: #5F5F5F;
      }

      .react-calendar__navigation {
        width: inherit;
        display: flex;
        text-align: center;
        align-items: center;
        padding: 0 .5rem;

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
    </>
  );
};

export default CalendarWrap;

const CalendarContainer = styled.div`
  width: 100%;
`;

const ShowCalendar = styled.div`
  background-color: saddlebrown;
  width: 100%;
  aspect-ratio: 1/1;
  & p {
    color: #fff;
    font-size: 2rem;
  }
`;

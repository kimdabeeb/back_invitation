import { Fade } from 'react-awesome-reveal';
import Calendar from 'react-calendar';
import moment from 'moment';
import data from 'data.json';
import styled from '@emotion/styled';
import { MainTitEn, PointTitle } from '@/components/Text.tsx';
import 'react-calendar/dist/Calendar.css';

const CalendarWrap = () => {
  const { greeting } = data;
  const marks = ['01-03-2025'];

  //direction={"up"}
  return (
    <>
      {/* <Fade>
        <ShowCalendar>
          <MainTitEn>March 1, 2025</MainTitEn>
        </ShowCalendar>
      </Fade> */}
      <CalendarContainer>
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
          prev2Label={null}
          next2Label={null}
          formatDay={(local, date) => date.toLocaleString('en', { day: 'numeric' })}
          tileClassName={({ date, view }) => {
            if (marks.find((x) => x === moment(date).format('DD-MM-YYYY'))) {
              return 'highlight';
            }
          }}
        />
      </CalendarContainer>
      <style>{`
      .react-calendar * {
        text-decoration: unset!important;
        color: #000;
      }
      
      .react-calendar {
        font-family: GowunBatang;
        border: none;
        max-width: 320px;
        margin: 30px auto 0;
        padding-top: 25px;
        width: auto;
        border-top: 1px solid #e5e7eb;

      .react-calendar__tile--active,
      .highlight {
        background: #fffcae;
        border-radius: 50%;
        max-width: 38px!important;
        position: relative;
        left: 4px;
      }
      .react-calendar__navigation__label {
        font-family: GowunBatang;
        color:#000;
      } 
      .react-calendar__navigation {
        width: inherit;
        display: flex;
        text-align: center;
        align-items: center;
        padding: 0 .5rem;
          .react-calendar__navigation__label {
            width: 5.5rem;
            height: 1.375rem;
            font-size: 16px;
            border: none;
            font-weight: 700;
            background-color: #fff;
          }
          .react-calendar__navigation button:enabled:hover, 
          .react-calendar__navigation button:enabled:focus {
              background-color: transparent;
          }
      }
    }
    `}</style>
    </>
  );
};

export default CalendarWrap;

const CalendarContainer = styled.div`
  width: 100%;
  margin: 20px auto 0;
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

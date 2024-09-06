import { useState } from 'react';
import Calendar from 'react-calendar';
import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import 'react-calendar/dist/Calendar.css';

const Invitation = () => {
  const { greeting } = data;
  const date = new Date('2025 03 1');

  return (
    <>
      <InvitationWrapper>
        <Paragraph>{greeting.message}</Paragraph>
        <Host />
        <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
        {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
        <CalendarContainer>
          <Calendar
            locale="ko"
            value={date}
            selectRange={false}
            defaultValue={date}
            calendarType="gregory"
            showNeighboringMonth={false}
            minDetail="month"
            prev2Label={null}
            next2Label={null}
            formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
          />
        </CalendarContainer>
      </InvitationWrapper>
      <style>{`
      .react-calendar * {
        text-decoration: unset!important;
      }
      .react-calendar {
        font-family: GowunBatang;
        border: none;
        max-width: 320px;
        width: auto;

      .react-calendar__tile--active {
        background: pink;
        border-radius: 50%;
        max-width: 38px!important;
        position: relative;
        left: 5px;
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

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const CalendarContainer = styled.div`
  width: 100%;
  margin: 20px auto 0;
  border-radius: 3px;
`;
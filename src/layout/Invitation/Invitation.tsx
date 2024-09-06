import Calendar from 'react-calendar';
import moment from 'moment';
import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import { Caption, IntroTit } from '@/components/Text.tsx';
import 'react-calendar/dist/Calendar.css';

const Invitation = () => {
  const { greeting } = data;
  const marks = ['01-03-2025'];

  return (
    <>
      <InvitationWrapper>
        <IntroTit>
          마음을 같이하여 같은 사랑을 가지고 <br />
          뜻을 합하여 한 마음을 품어 <br />
          <span>빌립보서 2:2</span>
          <br />
          <br />
          <br />
          <p>
            하나님의 떄에 서로 만난 두 사람이 <br />
            은혜로 결실을 맺게 되었습니다. <br />
            둘이 하나가 되어 평생 서로를 돕는 배필로 <br />
            서약하는 자리에 기도와 축복으로 함께 해주신다면 <br />더 없는 감사와 기쁨으로
            간직하겠습니다.
          </p>
        </IntroTit>
        <Host />
        <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
        <CalendarContainer>
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

      .react-calendar__tile--active,
      .highlight {
        background: #fffcae;
        border-radius: 50%;
        max-width: 38px!important;
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
  gap: 50px;
`;

const CalendarContainer = styled.div`
  width: 100%;
  margin: 20px auto 0;
  border-radius: 3px;
`;
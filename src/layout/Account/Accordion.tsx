import { ReactNode, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fade direction={'up'} duration={2000}>
      <AccordionWrapper>
        <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
          <p>{title}에게</p>
          <span>
            <ExpandMore fill="#ddd" />
          </span>
        </AccordionHeader>
        {isOpen && <AccordionContent>{children}</AccordionContent>}
      </AccordionWrapper>
    </Fade>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  background: #f9f9f9;
  padding: 12px 15px;
  box-sizing: border-box;
  /* box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px; */
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: all 0.3s ease-in-out;
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'GowunDodum';
  font-size: 0.8125rem;
  & > p {
    color: #a6a6a6;
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
  }
`;

const AccordionContent = styled.div`
  font-size: .8125rem;
  text-align: justify;
  padding: 10px;
`;

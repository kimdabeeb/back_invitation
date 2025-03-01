import { ReactNode, useState } from 'react';
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
      <AccordionWrapper>
        <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
          <p>{title}에게</p>
          <ExpandMore fill="#ddd" style={{cursor:'pointer'}} />
        </AccordionHeader>
        {isOpen && <AccordionContent>{children}</AccordionContent>}
      </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  margin-bottom: 15px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: all 0.3s ease-in-out;
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'GowunDodum';
  font-size: 0.875rem;
  & > p {
    color: #a6a6a6;
  }
  svg {
    user-select: none;
    transition: all 0.3s ease-in-out;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
  }
`;

const AccordionContent = styled.div`
  font-size: .85rem;
  text-align: justify;
  padding: 10px;
`;

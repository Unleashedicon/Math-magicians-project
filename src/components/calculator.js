import './calculator.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const updatedData = calculate(calculatorData, buttonName);
    setCalculatorData(updatedData);
  };

  return (
    <div className="calculator-app">
      <div className="calculator">
        <Display value={calculatorData.next || calculatorData.total || '0'} />
        <div className="Digits">
          <Button label="AC" onClick={() => handleButtonClick('AC')} />
          <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <Button label="÷" onClick={() => handleButtonClick('÷')} />
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button label="x" onClick={() => handleButtonClick('x')} />
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button label="-" onClick={() => handleButtonClick('-')} />
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button label="+" onClick={() => handleButtonClick('+')} />
          <Button label="0" onClick={() => handleButtonClick('0')} />
          <Button label="." onClick={() => handleButtonClick('.')} />
          <Button label="=" onClick={() => handleButtonClick('=')} />
        </div>
      </div>
    </div>
  );
};

const Display = ({ value }) => <div className="display">{value}</div>;

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

const Button = ({ label, onClick }) => {
  let className = 'button';
  if (['÷', 'x', '-', '+', '='].includes(label)) {
    className += ' Operators';
  } else if (['0'].includes(label)) {
    className += ' zero';
  }
  return (
    <button type="button" className={className} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Calculator;

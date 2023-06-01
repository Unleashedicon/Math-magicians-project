import './calculator.css';
import PropTypes from 'prop-types';

const Calculator = () => (
  <div className="calculator-app">
    <div className="calculator">
      <Display value="0" />
      <div className="Digits">
        <Button Label="AC" />
        <Button Label="+/-" />
        <Button Label="%" />
        <Button Label="÷" />
        <Button Label="7" />
        <Button Label="8" />
        <Button Label="9" />
        <Button Label="x" />
        <Button Label="4" />
        <Button Label="5" />
        <Button Label="6" />
        <Button Label="-" />
        <Button Label="1" />
        <Button Label="2" />
        <Button Label="5" />
        <Button Label="+" />
        <Button Label="0" />
        <Button Label="." />
        <Button Label="=" />
      </div>
    </div>
  </div>

);

const Display = ({ value }) => <div className="display">{value}</div>;
Display.propTypes = {
  value: PropTypes.string.isRequired,
};
const Button = ({ Label }) => {
  let className = 'button';
  if (['÷', 'x', '-', '+', '='].includes(Label)) {
    className += ' Operators';
  } else if (['0'].includes(Label)) {
    className += ' zero';
  }
  return (<button type="button" className={className}>{Label}</button>);
};

Button.propTypes = {
  Label: PropTypes.string.isRequired,
};
export default Calculator;

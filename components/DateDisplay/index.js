import format from 'date-fns/format';
const DateDisplay = () => {
  return (
    <>
      { <h1>{format(new Date(), "'Today is a' eeee")}</h1> }
    </>
  )
}
export default DateDisplay;

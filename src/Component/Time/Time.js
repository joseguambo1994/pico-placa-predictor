const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const minutes = [0, 10, 20, 30, 40, 50];

const Time = () => {
  return (
    <div>
      <span>
        <select>
          {hours.map((hour) => (
            <option>{hour}</option>
          ))}
        </select>
      </span>
      <select>
        {minutes.map((minute) => (
          <option>{minute}</option>
        ))}
      </select>
    </div>
  );
};

export default Time;

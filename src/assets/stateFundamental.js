const useState = (init = 0) => {
  let state = init;

  const setState = (value) => {
    state = state + value;
  };

  const getState = () => {
    return state;
  };

  return [getState, setState];
};

const [data, setData] = useState(2);

setData(5);

setData(10);

console.log(data());

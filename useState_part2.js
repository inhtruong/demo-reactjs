// mua hàng có số lượng
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => counter < 10 ? 
                                setCounter(counter + 1) : 
                                setCounter(counter)

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );

 ----------------------------------------------------------------------------
  const price = [100, 200, 300];

// khi truyền vao useState() 1 function thì gia tri return sẽ là gì trị init của userState
  const [counter, setCounter] = useState(() => {
    return price.reduce((total, cur) => total + cur);
  });

  const handleIncrease = () => setCounter(counter + 1)

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );

 ----------------------------------------------------------------------------

  const [info, setInfo] = useState({
    "name" : "Nguyen Van A",
    "age" : 20,
    "address" : ""
  })

  const handleUpdate = () => {
    setInfo({
      ...info, // sử dụng spread
      "address" : "Hue, VietNam"
    })
  }
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
  
  
  ----------------------------------------------------------------------------
  // trò random
  // Ý tưởng thêm: trò chơi số lượng thưởng có hạn
  // khi phần thưởng đó hết thì làm sao
  const gifts = [
    'Chip I9',
    'Ram 16gb RGB',
    'Vga AMD 6600T'
  ]

  // mua hàng có số lượng
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    console.log(gifts[index]);
    setGift(gifts[index]);
  }

  return (
    <div className="App">
      <h1 style={{ color: "red" }}>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );

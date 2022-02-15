// nhập form 
function App() {

  const courses = [
    {
      id: 1,
      name: "HTML, CSS"
    },
    {
      id: 2,
      name: "Javascript"
    },
    {
      id: 3,
      name: "ReactJS"
    }
  ]

  const genders = [
    {
      id: 0,
      name: "Nam"
    },
    {
      id: 1,
      name: "Nữ"
    },
  ]

  // trường hợp create item useState('')
  // trường hợp update item thì useStale(giá trị khi call API trả về)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState(0);
  const [course, setCourse] = useState([]);

  const handleCheck = (id) => {
    setCourse(prev => {
      const isChecked = course.includes(id);
      if (isChecked) {
        // filter trả về mảng trừ phần tử thỏa mãn điều kiện
        return course.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    // CALL API
    console.log({
      name,
      email,
      gender,
      course
    })
  }

  return (
    <div className="App">
      <input 
        value={name} // set giá trị mặc định
        onChange={e => setName(e.target.value)}
      />
      <input 
        value={email} // set giá trị mặc định
        onChange={e => setEmail(e.target.value)}
      />

      {/* mẫu radio */}
      {
        genders.map(resp => (
          <div key={resp.id}>
            <input 
              type="radio"
              checked={gender === resp.id}
              onChange={() => setGender(resp.id)}
            /> {resp.name}
          </div>
        ))
      }

      {/* mẫu checkbox */}
      {
        courses.map(resp => (
          <div key={resp.id}>
            <input 
              type="checkbox"
              checked={course.includes(resp.id)}
              onChange={() => handleCheck(resp.id)}
            /> {resp.name}
          </div>
        ))
      }
      <button onClick={handleSubmit}>Register</button>
    </div>
  );

}
import {useState} from 'react'

export default function Home() {
  const [ints, setInts] = useState([1, 2, 3])

  function addValue(incrementValue) {
    const newValue = Math.max(...ints) + incrementValue;
    setInts([...ints, newValue]);
  }

  function ListItems({ints, addValue}) {
    const increment = 3;
    return (
      <>
      <button onClick={() => addValue(increment)}>Add Item</button>
      {
        ints.map(id => {
          return (
            <li key={id}>{id}</li>
          )
        })
      }
      </>
    )
  }

  return (
    <ul>
      <ListItems ints={ints} addValue={addValue} />
    </ul>
  )
}



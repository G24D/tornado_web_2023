import { useState } from 'react'
import Ex01 from '../components/Ex01'
import Ex02 from '../components/Ex02'
import Ex05 from '../components/Ex05'

function App() {

  const [isEx01Visible, setEx01Visibility] = useState(false);
  const [isEx02Visible, setEx02Visibility] = useState(false);
  const [isEx05Visible, setEx05Visibility] = useState(false);

  const toggleComponent = (componentName) => {
    switch (componentName) {
      case 'Ex01':
        setEx01Visibility(!isEx01Visible);
        break;
      case 'Ex02':
        setEx02Visibility(!isEx02Visible);
        break;
      case 'Ex05':
        setEx05Visibility(!isEx05Visible);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div>
        <div>
            <button onClick={()=> toggleComponent('Ex01')}>
              EX01
            </button>
           {isEx01Visible && <Ex01 />}
        </div>
        <div>
            <button onClick={()=> toggleComponent('Ex02')}>
              EX02
            </button>
           {isEx02Visible && <Ex02 />}
        </div>
        <div>
            <button onClick={()=> toggleComponent('Ex03')}>
              EX05
            </button>
           {isEx05Visible && <Ex05 />}
        </div>

      </div>
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import Box from './component/Box'
import Button from './component/Button'
import Title from './component/Title'
import { useState, useEffect } from 'react'


// 박스 2개
// 박스 안에 이미지(가위바위보) 기본으로
// 박스 아래 버튼 3개(가위, 바위, 보)
// 버튼 클릭 시 박스 안에 이미지 변경


const selects = {
  rock: {
    name: '바위',
    img: 'https://cdn-icons-png.flaticon.com/512/835/835024.png'
  },
  paper: {
    name: '보',
    img: 'https://cdn-icons-png.flaticon.com/512/2541/2541988.png'
  },
  scissors: {
    name: '가위',
    img: 'https://cdn-icons-png.flaticon.com/512/4973/4973989.png'
  }
}



const App = () => {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [userResult, setUserResult] = useState('안내면 진 거,')
  const [computerResult, setComputerResult] = useState('가위 바위 보!')


  useEffect(() => {
    if (!userSelect || !computerSelect) return;
  
    let result = '';
  
    if (userSelect.name === computerSelect.name) {
      result = '무승부';
    } else if (
      userSelect.name === '가위' && computerSelect.name === '보' ||
      userSelect.name === '보' && computerSelect.name === '바위' ||
      userSelect.name === '바위' && computerSelect.name === '가위'
    ) {
      result = '승리';
    } else {
      result = '패배';
    }
  
    setUserResult(result);
    setComputerResult(
      result === '승리' ? '패배' :
      result === '패배' ? '승리' :
      '무승부'
    );
  
    console.log(userSelect.name, computerSelect.name);
  }, [userSelect, computerSelect]);



  const play = (choice) => {
    const randomKey = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    setUserSelect(selects[choice]);
    setComputerSelect(selects[randomKey]);
  };
  



  
  return (
    
    <div className='main'>

      <Title />
      {/* 박스 2개 컨테이너너 */}
      <div className='box-container'>
        <Box name='You' select={userSelect} result={userResult}/>
        <h3>VS</h3>
        <Box name='Computer' select={computerSelect} result={computerResult}/>
      </div>

      {/* 버튼 3개 컨테이너 */}
      <div className='button-container'>
        <Button selectImg={selects.scissors.img} onClick={() => play('scissors')}/>
        <Button selectImg={selects.rock.img} onClick={() => play('rock')}/>
        <Button selectImg={selects.paper.img} onClick={() => play('paper')}/>
      </div>

    </div>
  )
}

export default App
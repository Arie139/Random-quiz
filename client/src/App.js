import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// utils
import setAuthToken from './utils/setAuthToken';
import api from './utils/api';

// Components
import Home from './Components/HomePage/Home';

import Quiz from './Components/Quiz/Quiz';
import Score from './Components/FinalScore/Score';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  const [userToken, setUserToken] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState([]);
  const [score, setScore] = useState(0);

  // const getUserProfile = async () => {
  //   if(userToken){
  //     setAuthToken(userToken);
  //   }
  //   try {
  //     const {data} = await api.get('/auth');
  //     setUserProfile(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {

  //   getUserProfile()
  // },[userProfile])

  // console.log(userProfile)

  // check is token in localStorage
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUserToken(localStorage.getItem('token'));
    }
  }, [userToken]);

  console.log(currentQuiz);
  return (
    <BrowserRouter>
      <div>
        <Header userToken={userToken} setUserToken={setUserToken} />
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='quiz'
          element={
            <Quiz
              currentQuiz={currentQuiz}
              setCurrentQuiz={setCurrentQuiz}
              score={score}
              setScore={setScore}
            />
          }
        ></Route>
        <Route path='score' element={<Score />}></Route>
        <Route
          path='login'
          element={<Login setUserToken={setUserToken} />}
        ></Route>
        <Route
          path='signup'
          element={<Signup setUserToken={setUserToken} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MultiDatePicker from './pages/MultiDatePicker';
import Reports from './pages/Reports'
import Profile from './pages/Profile'
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout'
import { useState } from 'react';
import { Dashboard } from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Router>
          <Routes>
            <Route path='/' exact element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path='/multi-date-picker' element={<MultiDatePicker />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
          <Routes>
          <Route path='/login' element={<Login setUser={setUser} />} />
              <Route path='dashboard'
                element={
                  <ProtectedRoute user={user}>
                    <Dashboard user={user} />
                  </ProtectedRoute>
                  
                }
              />
              <Route path='*' element={<Error />} />
          </Routes>
      </Router>
    </>
    
  );
}

export default App;

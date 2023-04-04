import { Outlet } from 'react-router-dom';
import PlanInfo from '../pages/PlanInfo';

import GeneralInfo from '../components/userform/UserForm';

const PlanSignup = ({ userStatus, handleResponse }) => {
    console.log("plansignup");
  return (
    <>
      <PlanInfo userStatus={userStatus} handleResponse={handleResponse}/>
     
      {/* {handleResponse === 'payment' &&   <Payment />} */}
   
      {userStatus === 'userform' && <GeneralInfo />}
    </>
  );
};

export default PlanSignup;

import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation'
const RootLayout = () => {
  return (
    <>
      <main>
        <MainNavigation />
        
      <Outlet />
      </main>
    </>
  );
};

export default RootLayout;



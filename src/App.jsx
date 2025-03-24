import { Suspense, lazy } from 'react';
import './App.css';
import Loader from './Components/Loader'; // your animated loader

// Lazy load your routes/pages
const AllRoutes = lazy(() => import('./AllRoutes/AllRoutes'));

function App() {
  return (
    <>
      {/* Suspense will trigger loader while AllRoutes is loading */}
      <Suspense fallback={<Loader />}>
        <AllRoutes />
      </Suspense>
    </>
  );
}

export default App;

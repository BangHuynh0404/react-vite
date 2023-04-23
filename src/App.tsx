import './App.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
export default function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

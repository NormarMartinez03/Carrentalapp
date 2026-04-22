import { createBrowserRouter, Navigate } from 'react-router';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DashboardLayout } from './layouts/DashboardLayout';
import { CustomerLayout } from './layouts/CustomerLayout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Vehicles } from './pages/Vehicles';
import { Bookings } from './pages/Bookings';
import { Customers } from './pages/Customers';
import { Agents } from './pages/Agents';
import { Unauthorized } from './pages/Unauthorized';
import { Browse } from './pages/customer/Browse';
import { MyBookings } from './pages/customer/MyBookings';
import { Profile } from './pages/customer/Profile';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/unauthorized',
    element: <Unauthorized />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'agent']}>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'vehicles',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'agent']}>
            <Vehicles />
          </ProtectedRoute>
        ),
      },
      {
        path: 'bookings',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'agent']}>
            <Bookings />
          </ProtectedRoute>
        ),
      },
      {
        path: 'customers',
        element: (
          <ProtectedRoute allowedRoles={['admin', 'agent']}>
            <Customers />
          </ProtectedRoute>
        ),
      },
      {
        path: 'agents',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <Agents />
          </ProtectedRoute>
        ),
      },
      {
        path: 'reports',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="text-center py-12">
              <h2>Módulo de Reportes</h2>
              <p className="text-muted-foreground mt-2">En desarrollo</p>
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: 'revenue',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="text-center py-12">
              <h2>Módulo de Ingresos</h2>
              <p className="text-muted-foreground mt-2">En desarrollo</p>
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: 'locations',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="text-center py-12">
              <h2>Módulo de Ubicaciones</h2>
              <p className="text-muted-foreground mt-2">En desarrollo</p>
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="text-center py-12">
              <h2>Configuración</h2>
              <p className="text-muted-foreground mt-2">En desarrollo</p>
            </div>
          </ProtectedRoute>
        ),
      },
      {
        path: 'contracts',
        element: (
          <ProtectedRoute allowedRoles={['agent']}>
            <div className="text-center py-12">
              <h2>Contratos</h2>
              <p className="text-muted-foreground mt-2">En desarrollo</p>
            </div>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/',
    element: (
      <ProtectedRoute allowedRoles={['customer']}>
        <CustomerLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/browse" replace />,
      },
      {
        path: 'browse',
        element: <Browse />,
      },
      {
        path: 'my-bookings',
        element: <MyBookings />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

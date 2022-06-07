import { lazy } from 'react';

const JwtAuthDoc = lazy(() => import('./jwt/jwtAuthDoc'));

const AuthenticationDocRoutes = [
  {
    path: 'authentication/jwt',
    element: <JwtAuthDoc />,
  },
];

export default AuthenticationDocRoutes;

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function JwtAuthDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        JWT Authentication Service Example
      </Typography>

      <Typography className="mb-16" component="p">
        With JWT Authentication Service in Fuse React.
      </Typography>

      <ul>
        <li className="mb-12">
          You can <Link to="/sign-up">sign up</Link>.
        </li>
        <li className="mb-12">
          You can <Link to="/sign-in">sign in</Link>.
        </li>
        <li className="mb-12">
          Also saves user data (user shortcuts, layout, and theme settings) to db.
        </li>
      </ul>

      <Typography className="mt-32 mb-16" component="p">
        Related Service folder is located at <code>/src/app/auth/services/jwtService</code>
      </Typography>

      <Typography className="my-24 italic" component="p" color="text.secondary">
        Note: Make sure {`<Router>`} component wrapped with {`<AuthProvider>`} in
        <code>src/app/App.js</code>. The service initializes in the AuthProvider component.
      </Typography>

      <Typography className="my-24 italic" component="p" color="text.secondary">
        Important: We don't give you any backend code. We are demonstrating the usage with
        <code>@mock-api</code> (which is works with https requests as real).
      </Typography>
    </>
  );
}

export default JwtAuthDoc;

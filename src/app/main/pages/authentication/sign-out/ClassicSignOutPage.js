import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

function ClassicSignOutPage() {
  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0">
      <Paper className="flex items-center w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <img className="w-48 mx-auto" src="assets/images/logo/logo.svg" alt="logo" />

          <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight text-center">
            You have signed out!
          </Typography>
          <Typography className="flex justify-center mt-2 font-medium">
            Redirecting in 5 seconds
          </Typography>

          <Typography className="mt-32 text-md font-medium text-center" color="text.secondary">
            <span>Go to</span>
            <Link className="ml-4" to="/sign-in">
              sign in
            </Link>
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

export default ClassicSignOutPage;

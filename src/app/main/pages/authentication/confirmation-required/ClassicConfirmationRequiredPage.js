import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';

function ClassicConfirmationRequiredPage() {
  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0">
      <Paper className="w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <img className="w-48" src="assets/images/logo/logo.svg" alt="logo" />

          <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
            Confirmation required
          </Typography>
          <Typography className="mt-16">
            A confirmation mail with instructions has been sent to your email address. Follow those
            instructions to confirm your email address and activate your account.
          </Typography>

          <Typography className="mt-32 text-md font-medium" color="text.secondary">
            <span>Return to</span>
            <Link className="ml-4 text-primary-500 hover:underline" to="/sign-in">
              sign in
            </Link>
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

export default ClassicConfirmationRequiredPage;

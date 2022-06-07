import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import Chip from '@mui/material/Chip';

function SimplePricingCard(props) {
  const { period, title, yearlyPrice, monthlyPrice, buttonTitle, isPopular, details, className } =
    props;

  return (
    <Paper
      className={clsx(
        'flex-col items-center max-w-sm md:max-w-none  p-32 sm:py-48 sm:px-40 lg:rounded-2xl text-center',
        className
      )}
    >
      {isPopular && (
        <div className="flex justify-center">
          <Chip
            label="POPULAR"
            color="secondary"
            className="h-32 px-32 mb-32 rounded-full font-semibold text-center leading-none"
          />
        </div>
      )}

      <div className="text-4xl font-extrabold tracking-tight leading-tight">{title}</div>

      <div className="mt-32 flex justify-center items-baseline whitespace-nowrap">
        <Typography className="text-6xl font-semibold leading-tight tracking-tight">
          {period === 'month' && monthlyPrice}
          {period === 'year' && yearlyPrice}
        </Typography>
        <Typography className="ml-8 text-2xl" color="text.secondary">
          / month
        </Typography>
      </div>

      <Typography className="flex flex-col mt-8" color="text.secondary">
        {period === 'month' && (
          <>
            <span>billed monthly</span>
            <span>
              <b>{yearlyPrice}</b> billed yearly
            </span>
          </>
        )}
        {period === 'year' && (
          <>
            <span>billed yearly</span>
            <span>
              <b>{monthlyPrice}</b> billed monthly
            </span>
          </>
        )}
      </Typography>

      {details}

      <Button
        className="mt-40 w-full"
        size="large"
        variant={isPopular ? 'contained' : 'outlined'}
        color={isPopular ? 'secondary' : 'inherit'}
      >
        {buttonTitle}
      </Button>
    </Paper>
  );
}

SimplePricingCard.defaultProps = {
  period: '',
  title: '',
  yearlyPrice: '',
  monthlyPrice: '',
  buttonTitle: '',
  isPopular: false,
  details: '',
};

export default SimplePricingCard;

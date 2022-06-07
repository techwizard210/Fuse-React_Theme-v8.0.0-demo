import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import Chip from '@mui/material/Chip';

function ModernPricingCard(props) {
  const { period, title, subtitle, yearlyPrice, monthlyPrice, buttonTitle, isPopular, details } =
    props;

  return (
    <Paper
      className={clsx(
        'flex-col max-w-sm md:max-w-none p-24 sm:py-48 sm:px-40 relative',
        isPopular && 'ring-2 ring-primary'
      )}
    >
      {isPopular && (
        <div className="absolute inset-x-0 -top-16 flex items-center justify-center">
          <Chip
            label="POPULAR"
            color="secondary"
            className="flex items-center h-32 px-32 rounded-full font-medium text-center leading-none"
          />
        </div>
      )}

      <Typography className="text-4xl font-bold tracking-tight leading-tight">{title}</Typography>

      <Typography className="mt-8 text-lg font-medium tracking-tight" color="text.secondary">
        {subtitle}
      </Typography>

      <Divider className="w-32 h-4 my-40 rounded bg-accent" />

      <div className="flex items-baseline whitespace-nowrap">
        <Typography className="mr-8 text-2xl">USD</Typography>
        <Typography className="text-6xl font-semibold leading-tight tracking-tight">
          {period === 'month' && monthlyPrice}
          {period === 'year' && yearlyPrice}
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

      <Button
        className="mt-40 w-full"
        size="large"
        variant={isPopular ? 'contained' : 'outlined'}
        color={isPopular ? 'secondary' : 'inherit'}
      >
        {buttonTitle}
      </Button>
      {details}
    </Paper>
  );
}

ModernPricingCard.defaultProps = {
  period: '',
  title: '',
  subtitle: '',
  yearlyPrice: '',
  monthlyPrice: '',
  buttonTitle: '',
  isPopular: false,
  details: '',
};

export default ModernPricingCard;

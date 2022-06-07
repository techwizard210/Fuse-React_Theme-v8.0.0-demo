import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

function TablePricingTableHead(props) {
  const { period, data } = props;
  const { title, yearlyPrice, monthlyPrice, buttonTitle, isPopular } = data;

  return (
    <Box className="flex flex-col" sx={{ backgroundColor: 'background.paper' }}>
      <div className="flex flex-col justify-center p-16 pt-12 lg:py-32">
        <div className="flex items-center">
          <div className="text-xl lg:text-2xl font-medium">{title}</div>

          {isPopular && (
            <Chip
              label="POPULAR"
              color="secondary"
              className="hidden md:flex mx-12 h-24 px-4 rounded-full text-center leading-none text-sm font-semibold leading-6 tracking-wide"
              size="small"
            />
          )}
        </div>

        <div className="flex items-baseline lg:mt-16 whitespace-nowrap">
          <Typography className="text-lg" color="text.secondary">
            USD
          </Typography>
          <Typography className="lg:mx-8 text-2xl lg:text-4xl font-bold tracking-tight">
            {period === 'month' && monthlyPrice}
            {period === 'year' && yearlyPrice}
          </Typography>
          <Typography className="text-2xl" color="text.secondary">
            / month
          </Typography>
        </div>
        <Typography className="mt-4 lg:mt-12 text-sm lg:text-base" color="text.secondary">
          {period === 'month' && (
            <>
              billed monthly
              <br />
              <b>{yearlyPrice}</b> billed yearly
            </>
          )}
          {period === 'year' && (
            <>
              billed yearly
              <br />
              <b>{monthlyPrice}</b> billed monthly
            </>
          )}
        </Typography>

        <Button
          className="w-full min-h-32 h-32 lg:min-h-40 lg:h-40 mt-12 lg:mt-24"
          variant={isPopular ? 'contained' : 'outlined'}
          color={isPopular ? 'secondary' : 'inherit'}
        >
          {buttonTitle}
        </Button>
      </div>
    </Box>
  );
}

TablePricingTableHead.defaultProps = {
  className: '',
  period: 'month',
  data: {},
};

export default TablePricingTableHead;

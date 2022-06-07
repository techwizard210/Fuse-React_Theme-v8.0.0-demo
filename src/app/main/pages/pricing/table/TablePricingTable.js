import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import TablePricingTableHead from './TablePricingTableHead';

const tableData = [
  {
    title: 'Personal',
    monthlyPrice: '$9',
    yearlyPrice: '$6',
    buttonTitle: 'Buy Personal',
    isPopular: false,
    features: {
      unlimitedProjects: true,
      unlimitedStorage: true,
      customDomainSupport: false,
      dedicatedHardware: false,
    },
    payments: {
      fraudAnalysis: true,
      rateForInHouse: '2.9% + 30¢',
      rateForOther: '4.9% + 30¢',
      additionalFees: '2%',
    },
  },
  {
    title: 'Premium',
    monthlyPrice: '$15',
    yearlyPrice: '$12',
    buttonTitle: 'Buy Premium',
    isPopular: true,
    features: {
      unlimitedProjects: true,
      unlimitedStorage: true,
      customDomainSupport: true,
      dedicatedHardware: false,
    },
    payments: {
      fraudAnalysis: true,
      rateForInHouse: '2.9% + 30¢',
      rateForOther: '4.9% + 30¢',
      additionalFees: '1%',
    },
  },
  {
    title: 'Enterprise',
    monthlyPrice: '$69',
    yearlyPrice: '$49',
    buttonTitle: 'Buy Enterprise',
    isPopular: false,
    features: {
      unlimitedProjects: true,
      unlimitedStorage: true,
      customDomainSupport: true,
      dedicatedHardware: true,
    },
    payments: {
      fraudAnalysis: true,
      rateForInHouse: '2.4% + 30¢',
      rateForOther: '4.4% + 30¢',
      additionalFees: '0.5%',
    },
  },
];

function TablePricingTable(props) {
  const { period } = props;

  return (
    <div className="flex justify-center mt-40 sm:mt-80">
      <Paper className="flex-col lg:flex-row w-full lg:max-w-7xl overflow-x-auto overflow-y-hidden">
        <div className="grid grid-flow-col lg:grid-flow-row min-w-max lg:min-w-0 divide-x lg:divide-x-0 lg:divide-y">
          <div className="sticky left-0 grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr lg:max-w-none divide-y lg:divide-y-0 lg:divide-x shadow-lg lg:shadow-none border-r lg:border-r-0 rounded-l lg:rounded-l-none overflow-hidden">
            <Box
              className="py-32 px-16 overflow-hidden"
              sx={{ backgroundColor: 'background.paper' }}
            />
            {tableData.map((item, index) => (
              <TablePricingTableHead key={index} data={item} period={period} />
            ))}
          </div>

          <Box
            sx={{ backgroundColor: 'background.default' }}
            className="hidden lg:block p-16 col-span-full"
          >
            <Typography className="text-md font-semibold">FEATURES</Typography>
          </Box>

          <div className="grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr divide-y lg:divide-y-0 lg:divide-x">
            <Typography className="flex items-center lg:items-start max-w-128 lg:max-w-none p-16 font-medium lg:font-normal text-center lg:text-left">
              Unlimited projects
            </Typography>

            {tableData
              .map((item) => item.features.unlimitedProjects)
              .map((val, index) => (
                <TableCell value={val} key={index} />
              ))}
          </div>

          <div className="grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr divide-y lg:divide-y-0 lg:divide-x">
            <Typography className="flex items-center lg:items-start max-w-128 lg:max-w-none p-16 font-medium lg:font-normal text-center lg:text-left">
              Unlimited storage
            </Typography>

            {tableData
              .map((item) => item.features.unlimitedStorage)
              .map((val, index) => (
                <TableCell value={val} key={index} />
              ))}
          </div>

          <div className="grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr divide-y lg:divide-y-0 lg:divide-x">
            <Typography className="flex items-center lg:items-start max-w-128 lg:max-w-none p-16 font-medium lg:font-normal text-center lg:text-left">
              Custom domain support
            </Typography>

            {tableData
              .map((item) => item.features.customDomainSupport)
              .map((val, index) => (
                <TableCell value={val} key={index} />
              ))}
          </div>

          <div className="grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr divide-y lg:divide-y-0 lg:divide-x">
            <Typography className="flex items-center lg:items-start max-w-128 lg:max-w-none p-16 font-medium lg:font-normal text-center lg:text-left">
              Dedicated hardware
            </Typography>

            {tableData
              .map((item) => item.features.dedicatedHardware)
              .map((val, index) => (
                <TableCell value={val} key={index} />
              ))}
          </div>

          <Box
            sx={{ backgroundColor: 'background.default' }}
            className="hidden lg:block p-16 col-span-full"
          >
            <Typography className="text-md font-semibold">PAYMENTS</Typography>
          </Box>

          <div className="grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr divide-y lg:divide-y-0 lg:divide-x">
            <Typography className="flex items-center lg:items-start max-w-128 lg:max-w-none p-16 font-medium lg:font-normal text-center lg:text-left">
              Fraud analysis
            </Typography>

            {tableData
              .map((item) => item.payments.fraudAnalysis)
              .map((val, index) => (
                <TableCell value={val} key={index} />
              ))}
          </div>

          <div className="grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr divide-y lg:divide-y-0 lg:divide-x">
            <Typography className="flex items-center lg:items-start max-w-128 lg:max-w-none p-16 font-medium lg:font-normal text-center lg:text-left">
              Rates for in-house payment systems
            </Typography>

            {tableData
              .map((item) => item.payments.rateForInHouse)
              .map((val, index) => (
                <TableCell value={val} key={index} />
              ))}
          </div>

          <div className="grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr divide-y lg:divide-y-0 lg:divide-x">
            <Typography className="flex items-center lg:items-start max-w-128 lg:max-w-none p-16 font-medium lg:font-normal text-center lg:text-left">
              Rates for other payment systems
            </Typography>

            {tableData
              .map((item) => item.payments.rateForOther)
              .map((val, index) => (
                <TableCell value={val} key={index} />
              ))}
          </div>

          <div className="grid grid-flow-row auto-rows-fr lg:grid-flow-col lg:auto-cols-fr divide-y lg:divide-y-0 lg:divide-x">
            <Typography className="flex items-center lg:items-start max-w-128 lg:max-w-none p-16 font-medium lg:font-normal text-center lg:text-left">
              Additional fees using other payment systems
            </Typography>

            {tableData
              .map((item) => item.payments.additionalFees)
              .map((val, index) => (
                <TableCell value={val} key={index} />
              ))}
          </div>
        </div>
      </Paper>
    </div>
  );
}

function TableCell({ value }) {
  if (typeof value === 'string') {
    return (
      <div className="flex items-center justify-center lg:justify-start p-16">
        <Typography>{value}</Typography>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center lg:justify-start p-16">
      {value ? (
        <FuseSvgIcon size={20} className="text-green-600">
          heroicons-solid:check
        </FuseSvgIcon>
      ) : (
        <FuseSvgIcon size={20}>heroicons-solid:minus</FuseSvgIcon>
      )}
    </div>
  );
}

export default TablePricingTable;

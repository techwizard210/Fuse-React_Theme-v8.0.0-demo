import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function ModernPricingFeatureItem(props) {
  const { title, subtitle, icon } = props;

  return (
    <div>
      <Box
        className="flex items-center justify-center w-48 h-48 rounded"
        sx={{ backgroundColor: 'secondary.main', color: 'secondary.contrastText' }}
      >
        <FuseSvgIcon>{icon}</FuseSvgIcon>
      </Box>
      <Typography className="mt-16 text-xl font-medium">{title}</Typography>
      <Typography className="mt-8 leading-24" color="text.secondary">
        {subtitle}
      </Typography>
    </div>
  );
}

ModernPricingFeatureItem.defaultProps = {
  title: '',
  subtitle: '',
  icon: '',
};

export default ModernPricingFeatureItem;

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import { darken } from '@mui/material/styles';

const GuideListMenu = (props) => {
  const { list, className, categorySlug, maxItems } = props;

  if (list?.length === 0) {
    return null;
  }

  return (
    <div className={clsx('w-full', className)}>
      {list.slice(0, maxItems).map((item) => (
        <Typography
          component={Link}
          className="flex mt-12 font-medium no-underline hover:underline"
          key={item.id}
          to={categorySlug !== '' ? `${categorySlug}/${item.slug}` : item.slug}
          color="secondary"
          role="button"
        >
          {item.title}
        </Typography>
      ))}
      {list.length > maxItems && (
        <Button
          component={Link}
          to={categorySlug}
          className="text-12 font-medium py-2 px-12 min-h-0 h-24 mt-20"
          endIcon={<FuseSvgIcon size={20}>heroicons-outline:arrow-narrow-right</FuseSvgIcon>}
          variant="contained"
          sx={{
            color: 'text.secondary',
            backgroundColor: (theme) => darken(theme.palette.background.default, 0.1),
            '&:hover': {
              backgroundColor: (theme) => darken(theme.palette.background.default, 0.2),
            },
          }}
        >
          View All
        </Button>
      )}
    </div>
  );
};

GuideListMenu.defaultProps = {
  items: [],
  categorySlug: '',
  maxItems: 9999,
};

export default GuideListMenu;

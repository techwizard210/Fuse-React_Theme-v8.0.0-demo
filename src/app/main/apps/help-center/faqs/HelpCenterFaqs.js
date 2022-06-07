import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Typography from '@mui/material/Typography';
import { getFaqs, selectGroupedFaqs } from '../store/faqsSlice';
import { getFaqCategories } from '../store/faqCategoriesSlice';
import FaqList from './FaqList';

function HelpCenterFaqs() {
  const dispatch = useDispatch();
  const groupedFaqs = useSelector(selectGroupedFaqs);

  useEffect(() => {
    dispatch(getFaqs());
    dispatch(getFaqCategories());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center p-24 sm:p-40">
      <div className="flex flex-col w-full max-w-4xl">
        <div className="sm:mt-32">
          <Button
            component={Link}
            to={-1}
            color="secondary"
            startIcon={<FuseSvgIcon>heroicons-outline:arrow-narrow-left</FuseSvgIcon>}
          >
            Back to Help Center
          </Button>
        </div>
        <div className="mt-8 text-4xl sm:text-7xl font-extrabold tracking-tight leading-tight">
          Frequently Asked Questions
        </div>

        {groupedFaqs.map((category) => (
          <div key={category.id}>
            <Typography className="mt-48 sm:mt-64 text-3xl font-bold leading-tight tracking-tight">
              {category.title}
            </Typography>
            <FaqList className="w-full mt-32" list={category.faqs} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HelpCenterFaqs;

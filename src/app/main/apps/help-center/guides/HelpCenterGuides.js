import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { getGuideCategories } from '../store/guideCategoriesSlice';

function HelpCenterGuides() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGuideCategories());
  }, [dispatch]);

  return <Outlet />;
}

export default HelpCenterGuides;

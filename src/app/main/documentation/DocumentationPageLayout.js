import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import FuseNavigation from '@fuse/core/FuseNavigation';
import FuseSuspense from '@fuse/core/FuseSuspense';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FusePageCarded from '@fuse/core/FusePageCarded';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import DocumentationPageBreadcrumb from './DocumentationPageBreadcrumb';
import DocumentationNavigation from './DocumentationNavigation';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-wrapper': {},
  '& .FusePageCarded-leftSidebar': {},
  '& .description': {
    fontSize: 20,
    marginBottom: 40,
  },
}));

function DocumentationPageLayout(props) {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const location = useLocation();
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    setLeftSidebarOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setLeftSidebarOpen(false);
    }
  }, [location, isMobile]);

  return (
    <Root
      header={
        <div className="flex items-center justify-center py-12 px-4 md:px-12 h-full w-full">
          <IconButton
            onClick={(ev) => setLeftSidebarOpen(!leftSidebarOpen)}
            aria-label="toggle left sidebar"
            size="large"
          >
            <FuseSvgIcon>heroicons-outline:view-list</FuseSvgIcon>
          </IconButton>
          <div className="flex flex-1 items-center sm:justify-center px-8 lg:px-12">
            <Link
              color="inherit"
              to="/documentation"
              className="text-14 md:text-18 font-medium flex items-center"
              role="button"
            >
              <FuseSvgIcon className="mr-8">heroicons-outline:book-open</FuseSvgIcon>{' '}
              <span>Fuse React - Documentation</span>
            </Link>
          </div>
        </div>
      }
      content={
        <div className="p-16 md:p-24 max-w-3xl min-h-full flex flex-auto flex-col">
          <DocumentationPageBreadcrumb />
          <div className="flex flex-col flex-1 relative py-32">
            <FuseSuspense>
              <Outlet />
            </FuseSuspense>
          </div>
        </div>
      }
      leftSidebarContent={
        <div className="px-16 py-24">
          <FuseNavigation
            className={clsx('navigation')}
            navigation={DocumentationNavigation.children}
          />
        </div>
      }
      leftSidebarOpen={leftSidebarOpen}
      leftSidebarWidth={288}
      leftSidebarOnClose={() => {
        setLeftSidebarOpen(false);
      }}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default DocumentationPageLayout;

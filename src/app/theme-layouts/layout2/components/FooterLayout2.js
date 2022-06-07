import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';
import PurchaseButton from '../../shared-components/PurchaseButton';
import PoweredByLinks from '../../shared-components/PoweredByLinks';
import DocumentationButton from '../../shared-components/DocumentationButton';

function FooterLayout2(props) {
  const footerTheme = useSelector(selectFooterTheme);

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className={clsx('relative z-20 shadow-md', props.className)}
        color="default"
        sx={{ backgroundColor: footerTheme.palette.background.paper }}
      >
        <Toolbar className="container min-h-48 md:min-h-64 px-8 sm:px-12 py-0 flex items-center overflow-x-auto">
          <div className="flex grow shrink-0">
            <PurchaseButton className="mx-4" />
            <DocumentationButton className="mx-4" />
          </div>

          <div className="flex grow shrink-0 px-12 justify-end">
            <PoweredByLinks />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout2);

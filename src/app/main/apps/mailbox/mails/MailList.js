import FuseUtils from '@fuse/utils';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import withRouter from '@fuse/core/withRouter';
import { useDeepCompareEffect } from '@fuse/hooks';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { getMails, selectMails, selectSearchText } from '../store/mailsSlice';
import MailListItem from './MailListItem';

function MailList(props) {
  const dispatch = useDispatch();
  const mails = useSelector(selectMails);
  const searchText = useSelector(selectSearchText);

  const routeParams = useParams();
  const [filteredData, setFilteredData] = useState(null);
  const { t } = useTranslation('mailboxApp');

  useDeepCompareEffect(() => {
    dispatch(getMails(routeParams));
  }, [dispatch, routeParams]);

  useEffect(() => {
    function getFilteredArray() {
      if (searchText.length === 0) {
        return mails;
      }
      return FuseUtils.filterArrayByString(mails, searchText);
    }

    if (mails) {
      setFilteredData(getFilteredArray());
    }
  }, [mails, searchText]);

  if (!filteredData) {
    return null;
  }

  if (filteredData.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center p-24"
      >
        <FuseSvgIcon className="icon-size-128 mb-16" color="disabled" size={24}>
          heroicons-outline:mail-open
        </FuseSvgIcon>
        <Typography className="mt-16 text-2xl font-semibold tracking-tight" color="text.secondary">
          {t('NO_MESSAGES')}
        </Typography>
      </motion.div>
    );
  }

  return (
    <List className="p-0 w-full">
      {filteredData.map((mail) => (
        <MailListItem mail={mail} key={mail.id} />
      ))}
    </List>
  );
}

export default withRouter(MailList);

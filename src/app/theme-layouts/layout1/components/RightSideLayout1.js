import { memo } from 'react';
import ChatPanel from '../../shared-components/chatPanel/ChatPanel';
import QuickPanel from '../../shared-components/quickPanel/QuickPanel';
import NotificationPanel from '../../shared-components/notificationPanel/NotificationPanel';

function RightSideLayout1(props) {
  return (
    <>
      <ChatPanel />

      <QuickPanel />

      <NotificationPanel />
    </>
  );
}

export default memo(RightSideLayout1);

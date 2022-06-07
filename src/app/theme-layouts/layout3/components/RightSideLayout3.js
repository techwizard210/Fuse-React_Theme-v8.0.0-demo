import { memo } from 'react';
import NotificationPanel from '../../shared-components/notificationPanel/NotificationPanel';
import QuickPanel from '../../shared-components/quickPanel/QuickPanel';
import ChatPanel from '../../shared-components/chatPanel/ChatPanel';

function RightSideLayout3() {
  return (
    <>
      <ChatPanel />

      <QuickPanel />

      <NotificationPanel />
    </>
  );
}

export default memo(RightSideLayout3);

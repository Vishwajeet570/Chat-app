import React, { useEffect, useRef, useState } from 'react';
import { Divider } from 'rsuite';
import ChatRoomList from './rooms/ChatRoomList';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';

const Sidebar = () => {
  const topSidebarRef = useRef();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, [topSidebarRef]);

  return (
    <div className="h-100 pt-2">
      <div ref={topSidebarRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider>Join Conversation</Divider>
      </div>
      <ChatRoomList aboveElHeight={height} />
    </div>
  );
};

export default Sidebar;

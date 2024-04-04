import React from 'react';
import RoutingMenu from './RoutingMenu';
import TabViewer from './TabViewer';

const MainSection = () => {
    return (
        <section className="flex">
            <div className="left-section min-w-max w-[20%] pr-10">
                <RoutingMenu />
            </div>
            <div className="right-section flex-1">
                <TabViewer />
            </div>
        </section>
    );
}

export default MainSection;
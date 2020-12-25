import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';
// Hook to get our browser history.
import { useHistory } from 'react-router-dom';


export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            // history.listen will pass in a location obj. Pop
            // pathname off of the object, and rename it.
            onNavigate: ({ pathname: nextPathname }) => {
                // Risk of an infinite loop. Make sure that path has
                // indeed changed.
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
        });
        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref}></div>
};

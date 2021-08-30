import React from 'react';

//  1.  we want a reusable component that does not do a full page reload
//        prevent default took care of that
//  2.  we want to change the url without a full page reload
//        window.history.pushState({}, '', href) changes the URL
//  3.  we want each route component to detect the url change
//        navigation event and state on path (in Route component)
//  4.
const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    //  this conditional restores the command/control click function
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, '', href);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <div>
      <a onClick={onClick} className={className} href={href}>
        {children}
      </a>
    </div>
  );
};

export default Link;

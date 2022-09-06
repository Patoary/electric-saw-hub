import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
             className='custom-link'
                style={
                    match && {
                      color: '#19D3AE',
                    }
                }
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
};

export default CustomLink;
import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';

function pageNotFound(props) {
    return (
        <div>
            <ErrorIcon color="warning" fontSize="large" />
            <h1>404 Page Not Found</h1>
            
        </div>
    );
}

export default pageNotFound;
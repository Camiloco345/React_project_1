import React from 'react'

const CleanLayout = ({Children}) => {
    return (
        <div className="CleanLayout">
            {Children}
        </div>
    );
}

export default CleanLayout;
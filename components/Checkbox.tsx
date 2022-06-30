import React from 'react';

const Checkbox = ({ label, id }) => {
    return (
        <div className='inline-flex items-center mt-5 mx-3'>
            <input type="checkbox" id="checkbox" value={id} className="h-5 w-5" />
            <span className='ml-2 text-gray-700'>{label}</span>
        </div>
    );
};

export default Checkbox;
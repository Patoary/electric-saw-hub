import React from 'react';

const SkillCard = ({ skill }) => {

    return (
        <div className="bg-primary hover:bg-secondary rounded w-full">
            <p className="text-white text-xs lg:text-sm text-center p-3 uppercase font-semibold">
                {skill}
            </p>
        </div>
    );
};

export default SkillCard;
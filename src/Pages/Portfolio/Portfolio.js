import React from 'react';
import profilePic from '../../assets/images/Image.PNG';
import SkillCard from './SkillCard';
const Portfolio = () => {
    const skills = [
        "HTML",
        "CSS",
        "Javascript",
        "React.js",
        "node.js",
        "express.js",
        "mongodb",
        "Firebase",
        "stripe",
        "axios",
        "reactquery",
        "tailwind",
        "bootstrap",
        "daisyui",
      ];
    return (
        <div>
            <div className="bg-gradient-to-r from-[#19d3ae2e] to-[#00214124] min-h-screen">
                <div className="flex flex-col items-center max-w-7xl mx-auto p-5">
                    <div className="flex flex-col lg:flex-row p-4 items-center justify-center py-10 bg-white rounded-3xl shadow-sm hover:shadow-xl gap-10 my-14 border w-full lg:hover:scale-110 transition-all duration-200">
                        <div>
                            <img
                                className="w-60 h-860 rounded-full overflow-hidden"
                                src={profilePic}
                                alt="profilePic"
                            />
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <h2 className="text-4xl font-bold text-primary">Zahidul Islam</h2>
                            <p className=" text-sm">zahidpatoary2019@gmail.com</p>
                            <div className="text-center lg:text-left w-full my-4">
                                <p>Information Technology</p>
                                <p className="font-medium">
                                    Wakayama Computer College
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center gap-5 w-full">
                        <div className="border p-10 rounded-3xl shadow-sm hover:shadow-xl bg-white">
                            <h2 className="text-2xl uppercase font-semibold text-center mb-10 text-primary">
                                My Projects
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
                                <div>
                                    <h2 className="text-xl uppercase font-semibold mb-2">
                                        PKCARS
                                    </h2>
                                    <div>
                                        <div className="flex mb-2 items-center">
                                            <p className="text-md ">Live Site Link :</p>
                                            
                                            <a
                                                className="text-primary font-bold hover:text-secondary ml-2"
                                                href="https://pk-cars.web.app/"
                                                target="blank_"
                                            >
                                                PKCARS
                                            </a>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl uppercase font-semibold mb-2">
                                    Single Flash Photography
                                    </h2>
                                    <div>
                                        <div className="flex mb-2 items-center">
                                            <p className="text-md">Live Site Link :</p>
                                            <a
                                                className="text-primary font-bold hover:text-secondary ml-2"
                                                href="https://single-flash-photography.web.app"
                                                target="blank_"
                                            >
                                                Photography
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl uppercase font-semibold mb-2">
                                    Doctors Portal
                                    </h2>
                                    <div>
                                        <div className="flex mb-2 items-center">
                                            <p className="text-md">Live Site Link :</p>
                                            <a
                                                className="text-primary font-bold hover:text-secondary ml-2"
                                                href="https://doctors-portal-11851.web.app/"
                                                target="blank_"
                                            >
                                                Doctors Portal
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border p-10 rounded-3xl shadow-sm hover:shadow-xl bg-white">
                            <h2 className="text-2xl uppercase font-semibold text-center mb-10 text-primary">
                                skills that i have
                            </h2>
                            <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                                {
                                    skills.map((skill, index) => <SkillCard
                                    key={index}
                                    skill= {skill}
                                    ></SkillCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;
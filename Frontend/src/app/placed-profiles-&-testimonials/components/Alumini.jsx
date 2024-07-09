"use client";
import Image from "next/image";
import React, { useState } from "react";

const Alumini = () => {
  const courses = [
    {
      title: "Data science",
      cardData: [
        {
          profile: "/profile4.png",
          name: "Name 1",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
      ],
    },
    {
      title: "MERN Stack",
      cardData: [
        {
          profile: "/profile4.png",
          name: "Name 2",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
      ],
    },
    {
      title: "Java",
      cardData: [
        {
          profile: "/profile4.png",
          name: "Name 3",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
        {
          profile: "/profile4.png",
          name: "Ajay Sharma",
          role: "software engineer",
          location: "pune",
          before: "student",
          after: "/tata.png",
        },
      ],
    },
  ];
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  let items = courses[selectedCourse] || [];

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };
  return (
    <div className="w-full my-10 p-3">
      <div className="w-[80%] mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-semibold text-[#0466C1] uppercase mb-3">
            Our Alumini
          </h1>
          <p>
            Since our inception in 2004, ValueCoders has been delivering IT
            outsourcing services worldwide. We combine business domain
            knowledge, proven methodologies, and the technology expertise of
            450+ skilled software professionals to yield high-quality solutions
            that add value to businesses.
          </p>
        </div>

        {/* Stats div */}
        <div className="flex justify-around bg-[#8951FF] bg-opacity-[10%] p-5">
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-3xl text-[#03006D] font-semibold">12 LPA</p>
            <p className="text-xl font-medium">Highest Package</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-3xl text-[#03006D] font-semibold">126%</p>
            <p className="text-xl font-medium">Average Hike</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-3xl text-[#03006D] font-semibold">93.5%</p>
            <p className="text-xl font-medium">Placement Rate</p>
          </div>
        </div>

        {/* Filtering Div */}
        <div className="flex gap-2">
          {/* Sidebar */}
          <div className="w-[20%] rounded-md border-[1px] border-slate-300">
            <h2 className="font-semibold border-b-2 border-slate-300 p-4">
              Categories
            </h2>
            <ul>
              <div className="flex flex-col gap-3 p-3 ">
                {courses.map((course, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleSelectCourse(course)}
                      className="cursor-pointer hover:text-[#3e89df]"
                    >
                      {course.title}
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>

          {/* Content */}
          <div className="w-[80%] flex flex-wrap gap-2 grow p-2 text-black border-2 ">
            {selectedCourse ? (
              <>
                {selectedCourse.cardData.map((dt, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[30%] flex grow flex-col gap-3 p-2 border-2 text-black rounded-md"
                    >
                      <div className="flex gap-3">
                        {/* profile image */}
                        <Image
                          src={dt.profile}
                          width={50}
                          height={50}
                          className="rounded-full w-[60px] h-[60px] object-cover"
                          alt="profileImg"
                        />

                        {/* name section */}
                        <div className="flex flex-col">
                          <h1 className="text-[#03006D] font-semibold text-xl">
                            {dt.name}
                          </h1>
                          <div className="flex items-center gap-2">
                            <Image
                              src={"/briefcase.png"}
                              width={20}
                              height={20}
                              className="w-4 h-4"
                              alt="briefcaseicon"
                            />
                            <p>{dt.role}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Image
                              src={"/map-pin.png"}
                              width={20}
                              height={20}
                              className="w-4 h-4"
                              alt="mapicon"
                            />
                            <p>{dt.location}</p>
                          </div>
                        </div>
                      </div>

                      {/* before & after text*/}
                      <div className="flex justify-between">
                        {/* before */}
                        <p className="text-slate-400 ">Before</p>

                        {/* after */}
                        <p className="text-[#45C051] ">After</p>
                      </div>

                      {/* before & after section */}
                      <div className="flex justify-between">
                        <div className="text-slate-500">Student</div>
                        {/* arrow */}
                        <div className="text-3xl  flex items-center">
                          <p>&#8594;</p>
                        </div>
                        <div>
                          <Image src={"/tata.png"} width={40} height={40} alt="tataImg"/>
                        </div>
                      </div>

                      {/* hike */}
                      <div className="w-[80%] text-[#03006D] bg-[#EEF3FF] mx-auto flex gap-3 rounded-md">
                        <Image
                          src={"/arrow-up-right.png"}
                          width={20}
                          height={20}
                          className="w-4 h-4"
                          alt="briefcaseicon"
                        />
                        <p className="text-[15px] font-semibold">100 Salary hike after scaler</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumini;
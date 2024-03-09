"use client"
import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "React" },
  { skill: "Next.JS" },
  { skill: "Node.JS" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Object Oriented Programming" },
  { skill: "MongoDB" }
  // { skill: "HTML" }, add more if needed
];

const About = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-16">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-400 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10  items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi! My name is Steven Ho, and I am a{" "}
              <span className="font-bold text-teal-400">ambitious</span> and{" "}
              <span className="font-bold text-teal-400">driven</span> aspiring software engineer based in Sacramento, California.
            </p>
            <br />
            <p>
              I am currently in my senior year at California State University, 
              Sacramento, pursuing a BS in Computer Science. I am actively seeking 
              entry-level or internship opportunities to kickstart my career
               in the tech industry.
            </p>
            <br />
            <p>
              Beyond coding, I have a diverse range of hobbies that keep me engaged. 
              From outdoor activities like tennis and football to at-home hobbies 
              like gaming and coffee making, I am always eager to explore new 
              interests.
            </p>
            <br />
            <p>
              A personal belief of mine is that everyone should{" "}
               <span className="font-bold text-teal-400">challenge</span>{" "}
               themselves to learn new things and never be afraid of what lies ahead. 
               I am motivated by the fact that there is always more to learn, 
               especially in the ever-evolving field of technology. I am excited to 
               push the boundaries of this field and to challenge myself along the way.
            </p>
            <br />
            <p>
              I am thrilled to be part of the tech community and eagerly anticipate 
              the growth and knowledge that await me in my career. 
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return  <p key={idx} 
                          className="bg-gray-600 px-4 py-2 mr-2 mt-2 text-white rounded fount-semibold"
                        >
                          {item.skill}
                        </p>
              })}
            </div>
            <Image 
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
              src="/KnightStand.png" 
              alt=""
              width={150} 
              height={150} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
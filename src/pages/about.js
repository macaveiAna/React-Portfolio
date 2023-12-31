import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-7.png";
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);
const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000 });
const isInView = useInView(ref, {once:true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })

}, [springValue, value])

    return <span>ref={ref}</span>
}

const about = () => {
    return(
        <>
            <Head>
                <title>Ana | About Page</title>
                <meta name="description" content="any description"/>
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                        <p className='font-medium'>
                        Hello, I&apos;m  Ana, a dedicated Computer Science student at Portland State University with a strong 
                        passion for software engineering and problem-solving. I am set to graduate in June 2024 with a Bachelor of Science 
                        degree in Computer Science.

                        </p>
                            
                        <p className='my-4 font-medium'>
                        My skills encompass a wide range of programming languages and tools, including C++, C, Python, Rust, and more. 
                        I&apos;m comfortable with data structures and problem-solving. My experience as a Software Engineer Intern in Portland 
                        allowed me to work within a SCRUM agile team. I contributed to streamlining development processes, maintained and enhanced 
                        existing tools, and played a role in the successful migration of databases to AWS.

                        </p>

                        <p className='font-medium'>
                        In addition to my academic and professional endeavors, I am an enthusiastic participant in coding challenges and hackathons, 
                        such as the Nike Insidious Hackathon and the UDEMY 100 days of Python Code Challenge. I am excited to bring my technical expertise,
                        problem-solving skills, and passion for software development to contribute meaningfully to your team.

                        </p>
                    </div>
<div className='col-span-3 relative h-max rounded-2xl barder-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
'>
<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
    <Image src={profilePic} alt="Adriana" className='w-full h-auto rounded-2xl'
    priority
    sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
    />
</div>

<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
    
    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
        4+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
        xs:text-sm
        '>years of experience</h2>
    </div>
</div>
             
                 </div>
                 <Skills />
                 <Experience />
                 <Education />
                </Layout>
            </main>
        </>
    )
}

export default about
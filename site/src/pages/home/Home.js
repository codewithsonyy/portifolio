import './Home.css';
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Description from '../../components/description/Description'
import WorkExperience from '../../components/workExperience/WorkExperience'
import Courses from '../../components/courses/Courses'
import Education from '../../components/education/Education'
import Footer from '../../components/footer/Footer'
// Load data
// TODO : Consume from the server
import experienceData from '../../data/WorkExperience.data.json'
import coursesData from '../../data/Courses.data.json'
import educationData from '../../data/Education.data.json'

import {useState, useEffect } from 'react'

function Home() {
  const [description, setDescription] = useState({title: "", description: ""});
  useEffect(() => {
    fetch("http://localhost:3001/description")
      .then((response) => response.json())
      .then((json) => {
        setDescription(JSON.parse(json))
      })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Description description={description} />
      <WorkExperience experiences={experienceData.experiences} />
      <Courses courses={coursesData.courses} />
      <Education education={educationData.education} />
      <Footer />
    </>
  );
}

export default Home;

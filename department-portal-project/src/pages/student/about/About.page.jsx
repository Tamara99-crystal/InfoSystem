import React from 'react'
import { Link } from 'react-router-dom'
import './about.page.css'

const About = () => {
  return (
    <div>
      <div className='about-container'>
        <h1 className='welcome-note'>About</h1> 
        <h1 className='quote-note'>Welcome from the chair:</h1>
        <p className='p-1'>Welcome to the official Information Website of the Department of Computer Science at the
          University of Nigeria, Nsukka (UNN).</p>
        <p className='p-1'>
          As the Chair of this esteemed department, it is my great pleasure to extend a warm and
          enthusiastic welcome to all students and prospective learners seeking a deeper
          understanding of our vibrant academic community.</p>
        <p className='p-1'>
          This website serves as your gateway to a wealth of valuable information, resources, and
          insights about our esteemed Department of Computer Science. Whether you're a curious
          prospective student eager to explore the possibilities that lie ahead or a current student
          seeking to navigate your academic path, you've come to the right place.</p>
        <p className='p-1'>  
          Our department is committed to fostering an environment of academic excellence,
          innovation, and collaboration. Here, you'll find comprehensive details about our programs,
          FAQs, and the myriad opportunities that await you. I invite you to take full advantage of this
          information hub, which has been designed with your needs in mind. Whether you're seeking
          course details, research opportunities, or insights into the broader field of computer science,
          you'll find a wealth of resources at your fingertips.</p>
         <p className='p-1'> 
          Thank you for choosing the Department of Computer Science at UNN as your academic
          home. I am confident that your time with us will be marked by growth, discovery, and a sense
          of belonging. As you explore this website, remember that you're not just accessing
          information – you're taking your first step towards a future filled with limitless possibilities.</p>
        <p className='p-1'>
          Warm regards,</p>
        <p className='p-1'>
          Chair, Department of Computer Science </p>
        <p className='p-1'>
          University of Nigeria
        </p>
        <h1 className='undergraduate-program'>Our Department</h1>
        <p>
          The Department of Computer Science at the University of Nigeria, Nsukka.
          The department started in 1975 as sub-department in the Faculty of Physical Sciences, and
          offered combined degree programmes in:
        </p>
        <ol>
          <li>Computer Science/Statistics </li>
          <li>Computer Science/Physics</li>
          <li>Computer Science and Mathematics</li>
        </ol>

        <p>
          The single honours option started in 1981. The department is currently housed on the
          topmost floor of the J.C. Ezeilo Building, popularly called 'Abuja Building'.
        </p>
        <p>
          The department offers some degree course for the Vocational Teacher Education (VTE)
          Department. The department offers a number of specially designed service courses in
          Computer Science to all the academic faculties/departmental/sub-department in the
          University. The department employs modern teaching tools such as multimedia projectors, 
          smart boards, PA systems, etc. for effective lecture delivery.
          The M.Sc and PhD programmes were introduced in 1991. PhD officially took off by the year
          2007.
        </p>
        <p>
          As part of a dynamic staff development programme, the University of Nigeria signed a
          memorandum of understanding (MoU) with the TU DELFT University (Netherlands) in
          November 2005. The first batch of our staff left for Netherlands in 2007 and came back by
          the end of 2008.
        </p>

        <h4>Exam officer - </h4>
        <p>Mr.J.C Ukekwe , Ukekwe325@unn.edu.ng</p><br></br>

        <h4>Teaching Officer - </h4>
        <p>Mrs J.Okafor, Jenniferokafor@unn.edu.ng</p><br></br>

        <h4>Computer Science Analyst</h4>
        <p>Prof.J.K Nwobodo, JeffNwobodo@unn.edu.ng</p><br></br>

        <h4>HOD's Secretary </h4>
        <p>Mrs. Nkechi Onyemena, NkechiOnyemena@unn.edu.ng</p><br></br>

        <h4>Lab officer 1</h4>
        <p>Mr. Jacob Igwilo, JacobIgwilo@unn.edu.ng</p><br></br>

        <h4>Lab officer 2</h4>
        <p>Mrs.Blessing Ike, Ikeblessing@unn.edu.ng</p><br></br>

        <h4>Assistant Lab Officer </h4>
        <p>Felicia Itanyi, FeliciaIt@unn.edu.ng</p><br></br>

        <h4>Research Officers</h4>
        <p>Taiwo Akinlola, Taiwoakin@unn.edu.ng</p>
        <p>Ngozi Nebo, Ngnebo@unn.edu.ng</p><br></br>
        

        <h4>Research Professors:</h4>
        <p>Dr.Okoronkwo, OkoronkwoJames@unn.edu.ng</p><br></br>

        <h3>Groups & Communities(click)</h3>
        <p className='group-link'>
          <Link to='https://chat.whatsapp.com/CfgZMOaE5MxELAWAWnC8tD'>Computer Science community group</Link><br></br>
          <Link to='https://gdg.community.dev/gdg-enugu/'>Google developer's group Enugu</Link><br></br>
          <Link to='https://chat.whatsapp.com/KfHtzeAYvGa5TF6VQpVO37'>Girls in Computer Science and Statistics community</Link><br></br>
          <Link to='https://t.me/AITraderGlobal_II'>Artificial Intelligence Trade Group</Link><br></br>
          <Link to='https://chat.whatsapp.com/KfHtzeAYvGa5TF6VQpVO37'>100 level computer science group </Link>
        </p>
        


        <h3>Alumni</h3>
        <p>Your involvement is very important to us. Please make sure we have your up-to-date contact
          information, and let us know if you would be interested in visiting us, participating in
          the mentorship program for students.<br></br>
      
          We encourage you to stay in touch - the department is making a renewed effort to keep you
          informed about what your fellow alumni/ae are doing and what is happening here at the
          department.
        </p>

        

        







      </div>
    </div>
  )
}

export default About

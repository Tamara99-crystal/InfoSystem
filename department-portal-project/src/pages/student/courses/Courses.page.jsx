import React, { useState } from 'react'
import './courses.page.css'

const Courses = () => {
  const [cs, setCs] = useState(false)
  const showCS = () =>{
    setCs(prev => !prev)
  }

  const [csSt, setCsSt] = useState(false)
  const showCSST = () =>{
    setCsSt(prev => !prev)
  }

  const [csPh, setCsPh] = useState(false)
  const showCSPH = () =>{
    setCsPh(prev => !prev)
  }


  const [csMh, setCsMh] = useState(false)
  const showCSMT = () =>{
    setCsMh(prev => !prev)
  }


  const [cImg, setCImg] = useState(false)
  const [sImg, setSImg] = useState(false)
  const [mImg, setMImg] = useState(false)
  const [pImg, setPImg] = useState(false)
  return (
    <div className='curr-container'>
      <h1>Courses</h1>

        <p className='curriculum'>
          <h2>B.Sc Computer Science Programme</h2>
          <button onClick={showCS}>Curriculum</button><button>Timetable</button>
          <div className='timetable'>
            <img src="" />
          </div>
          {cs
            &&

            <div className='cs'>
          <h2>FIRST YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 103 Computer Hardware Organization 3</p>
          <p>COS 105 Introduction to Computer Science for Physical Sciences 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 111 Elementary Mathematics I 3</p>
          <p>MTH 121 Elementary Mathematics II 3</p>
          <p>PHY 115 General Physics for Physical Sciences I 2</p>
          <p>STA 131 Inference I 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 101 The use of English I 2</p>
          <p>GSP 111 Use of library I 2</p>
          <h3>Total - 19</h3>


          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 102 Computing Practice 3</p>
          <p>COS 104 Introduction to Database Systems 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 122 Elementary Mathematics III 3</p>
          <p>PHY 116 General Physics for Physical Sciences II 2</p>
          <p>PHY 118 General Physics for Physical Sciences III 2</p>
          <p>STA 132 Inference II 2</p>
          <p>STA 172 Statistical Computing I 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 102 The use of English II 2</p>
          <p>GSP 111 Use of library I 2</p>
          <h3>Total - 18</h3>


          <h2>SECOND YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 201 Computer Programming 2</p>
          <p>COS 201 Computer Programming 2</p>
          <p>COS 231 Assembly Language Programming 2</p>
          <p>COS 203 Introduction to Microcomputer Systems 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 211 Sets, Logic and Algebra 3</p>
          <p>MTH 215 Linear Algebra I 2</p>
          <p>STA 205 Statistics for Physical Sciences. & Engineering I 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 201 Social Sciences 2</p>
          <p>GSP 207 Logic, Philosophy & Human Existence 2</p>
          <h3>Electives  Courses</h3>
          <p>Choose a maximum of 3 units from the following:</p>
          <p>MTH 221 Real Analysis I 3</p>
          <p>EEE 211 Basic Electrical Engineering 3</p>
          <h3>Total - 20</h3>



          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 202 Software Engineering I 3</p>
          <p>COS 204 Introduction to Digital System Design 3</p>
          <p>COS 242 Data and Computer Communication 2</p>
          <p>COS 232 Data Structures 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>STA 206 Statistics for Physical Sciences & Engineering II 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 202 Issues in Peace & Conflict Resolution Studies 2</p>
          <p>GSP 208 Nigerian Peoples and Cultures 2</p>
          <h3>Total - 18</h3>
          <h3>Electives Courses</h3>
          <p>Choose a minimum of one course 2/3units from the following:</p>
          <p>MTH 216 Linear Algebra II 2</p>
          <p>MTH 222 Elementary Differential Equations I 3</p>
          <p>MTH 242 Mathematical Methods I 3</p>
          <h3>Total - 19/20</h3>



          <h2>THIRD YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 311 Switching Algebra & Discrete Structures 3</p>
          <p>COS 331 Operating Systems 3</p>
          <p>COS 333 Software Engineering II 2</p>
          <p>COS 335 Automata Theory and Formal Languages 2</p>
          <p>COS 337 Artificial Intelligence I 2</p>
          <p>COS 341 Computer Architecture 3</p>
          <p>COS 351 Laboratory for Digital System Design 3</p>
          <h3>Required Ancillary Courses</h3>
          <p>CED 341 Introduction to Entrepreneurship 2</p>
          <h3>Total - 20</h3>


          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
            <p>COS 382 Students Industrial Work Experience Scheme 6</p>
            <p>COS 384 Technical SIWES Report 5</p>
            <p>COS 386 SIWES Seminar 4</p>
          <h3>Required Ancillary Courses</h3>
          <p>CED 341 Introduction to Entrepreneurship 2</p>
          <h3>Total - 15</h3>


          <h2>FOURTH YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 417 Computer System Performance Evaluation 2</p>
          <p>COS 419 Operations Research 3</p>
          <p>COS 421 Database Design and Management 3</p>
          <p>COS 431 Algorithms 2</p>
          <p>COS 435 Computer Graphics and Animation 2</p>
          <p>COS 441 Advanced Computer Networks 3</p>
          <p>COS 463 Structured Programming 2</p>
          <h3>Electives Courses</h3>
          <p>Choose 2 or 3 units from the following:</p>
          <p>COS 411 Numerical Methods 3</p>
          <p>COS 413 Systems Modeling & Simulation 2</p>
          <p>COS 415 Computer Process Control 2</p>
          <p>COS 437 Project Management 2</p>
          <p>COS 439 Game Programming 2</p>
          <p>COS 461 Organization of Programming Languages 2</p>
          <p>COS 471 Web Application Development 2</p>
          <h3>Total - 19/20</h3>


          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 438 Artificial Intelligence II 2</p>
          <p>COS 490 Project 6</p>
          <p>COS 452 Advanced Digital Laboratory 3</p>
          <h3>Required Ancillary Courses</h3>
          <p>CED 342 Business Development & Management 2</p>
          <h3>Electives Courses</h3>
          <p>Choose a minimum of 4/5 units from the following:</p>
          <p>COS 434 Compiler Construction 3</p>
          <p>COS 436 Expert Systems 2</p>
          <p>COS 442 Mobile Communications 2</p>
          <p>COS 444 Computer Network Security 2</p>
          <p>COS 464 Concurrent Programming 2</p>
          <h3>Total 17/18</h3>
            </div>
          }
          
          








          <h2>B.Sc Computer Science/Statistics Programme</h2>
          <button onClick={showCSST}>Curriculum</button><button>Timetable</button>
          {
            csSt &&
            <div>
              <h2>FIRST YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 103 Computer Hardware Organization 3</p>
          <p>COS 105 Introduction to Computer Science for Physical Sciences 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 111 Elementary Mathematics I 3</p>
          <p>MTH 121 Elementary Mathematics II 3</p>
          <p>PHY 115 General Physics for Physical Sciences I 2</p>
          <p>STA 131 Inference I 2</p>
          <p>STA 111 Probability I 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 101 The use of English I 2</p>
          <p>GSP 111 Use of library I 2</p>
          <h3>Total - 20</h3>


          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 102 Computing Practice 3</p>
          <p>COS 104 Introduction to Database Systems 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 122 Elementary Mathematics III 3</p>
          <p>PHY 116 General Physics for Physical Sciences II 2</p>
          <p>PHY 118 General Physics for Physical Sciences III 2</p>
          <p>STA 132 Inference II 2</p>
          <p>STA 172 Statistical Computing I 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 102 The use of English II 2</p>
          <h3>Total - 19</h3>


          <h2>SECOND YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 201 Computer Programming 2</p>
          <p>COS 231 Assembly Language Programming 2</p>
          <p>COS 203 Introduction to Microcomputer Systems 2</p>
          <p>STA 211 Probability III 2</p>
          <p>STA 231 Inference III 3</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 215 Linear Algebra I 2</p>
          <p>MTH 221 Real Analysis I 2</p>
          <p>STA 205 Statistics for Physical Sciences. & Engineering I 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 201 Social Sciences 2</p>
          <p>GSP 207 Logic, Philosophy & Human Existence 2</p>
          <h3>Total - 19</h3>



          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 202 Software Engineering I 3</p>
          <p>COS 204 Introduction to Digital System Design 3</p>
          <p>COS 242 Data and Computer Communication 2</p>
          <p>COS 232 Data Structures 2</p>
          <p>STA 212 Probability IV 2</p>
          <p>STA 272 Statistical Computing II 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 216 Linear Algebra II 2</p>
          <p>MTH 242 Mathematical Methods I 3</p>
          <h3>General Studies Courses</h3>
          <p>GSP 202 Issues in Peace & Conflict Resolution Studies 2</p>
          <p>GSP 208 Nigerian Peoples and Cultures 2</p>
          <h3>Total - 21</h3>
          <h3>Total - 19/20</h3>



          <h2>THIRD YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 333 Software Engineering II 2</p>
          <p>COS 351 Laboratory for Digital System Design 3</p>
          <p>STA 311 Probability V 3</p>
          <p>STA 321 Distribution Theory 2</p>
          <p>STA 331 Inference IV 3</p>
          <h3>Required Ancillary Courses</h3>
          <p>CED 341 Introduction to Entrepreneurship 2</p>
          <h3>Total - 21</h3>


          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
            <p>COS 382 Students Industrial Work Experience Scheme 6</p>
            <p>COS 384 Technical SIWES Report 5</p>
            <p>COS 386 SIWES Seminar 4</p>
          <h3>Total - 15</h3>


          <h2>FOURTH YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 421 Database Design and Management 3</p>
          <p>COS 431 Algorithms 2</p>
          <h3>Computer Science Electives Courses</h3>
          <p>Choose a minimum of 6/7 units from the following</p>
          <p>COS 411 Numerical Methods 3</p>
          <p>COS 413 Systems Modeling & Simulation 2</p>
          <p>COS 415 Computer Process Control 2</p>
          <p>COS 417 Computer System Performance Evaluation 2</p>
          <p>COS 437 Project Management 2</p>
          <p>COS 419 Operations Research 3</p>
          <p>COS 439 Game Programming 2</p>
          <p>COS 463 Structured Programming 2</p>
          <p>COS 441 Advanced Computer Networks 3</p>
          <p>COS 435 Computer Graphics and Animation 2</p>
          <p>COS 461 Organization of Programming Languages 2</p>
          <p>COS 471 Web Application Development 2</p>
          <h3>Statistics Electives Courses</h3>
          <p>Choose a minimum of 6/7 units from the following</p>
          <p>STA 411 Probability VI 3</p>
          <p>STA 413 Stochastic Processes I 2</p>
          <p>STA 415 Time Series Analysis I 2</p>
          <p>STA 421 Design and Analysis of Experiment I 2</p>
          <p>STA 423 Regression Analysis 3</p>
          <p>STA 433 Multivariate Analysis I 2</p>
          <p>STA 435 Non Parametric Methods I 2</p>
          <p>STA 441 Sampling Theory & Survey Methods II 2</p>
          <h3>Total - 17/18/19</h3>


          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 490 Project 6 OR STA 492 Project 6</p>
          <p>COS 452 Advanced Digital Laboratory 3</p>
          <h3>Required Ancillary Courses</h3>
          <p>CED 342 Business Development & Management 2</p>
          <h3>Computer Electives Courses</h3>
          <p>Choose a minimum of 4/5 units from the following:</p>
          <p>COS 434 Compiler Construction 3</p>
          <p>COS 436 Expert Systems 2</p>
          <p>COS 442 Mobile Communications 2</p>
          <p>COS 444 Computer Network Security 2</p>
          <p>COS 464 Concurrent Programming 2</p>
          <h3>Statistics Electives Courses</h3>
          <p>Choose a minimum of 4 units from the following</p>
          <p>STA 414 Stochastic Process II 2</p>
          <p>STA 416 Time Series Analysis II 2</p>
          <p>STA 422 Design and Analysis of Experiment II 2</p>
          <p>STA 434 Multivariate Analysis II 2</p>
          <p>STA 452 Medical Statistics 2</p>
          <h3>Total 18/19</h3>
            </div>
          }
          




          <h2>B.Sc Computer Science/Mathematics Programme</h2>
          <button onClick={showCSMT}>Curriculum</button><button>Timetable</button>
          {
            csMh &&
            <div>
              <h2>FIRST YEAR</h2>
              <h3>First Semester</h3>
              <h4>Courses & Units</h4>
              <h5>Major Courses</h5>
              <p>COS 103 Computer Hardware Organization 3</p>
              <p>COS 105 Introduction to Computer Science for Physical Sciences 2</p>
              <p>MTH 111 Elementary Mathematics I 3</p>
              <p>MTH 121 Elementary Mathematics II 3</p>
              <h3>Required Ancillary Courses</h3>
              <p>PHY 115 General Physics for Physical Sciences I 2</p>
              <p>CHM 101 Basic Principle of Chemistry I 2</p>
              <h3>General Studies Courses</h3>
              <p>GSP 101 The use of English I 2</p>
              <p>GSP 111 Use of library I 2</p>
              <h3>Elective Courses</h3>
              <p>Choose a minimum of 2 units from the following</p>
              <p>STA 111 Probability I 2</p>
              <p>STA 131 Inference I 2</p>

              <h3>Total - 22</h3>
              <h3>Second Semester</h3>
              <h4>Courses & Units</h4>
              <h5>Major Courses</h5>
              <p>COS 102 Computing Practice 3</p>
              <p>COS 104 Introduction to Database Systems 2</p>
              <p>MTH 122 Elementary Mathematics III 3</p>
              <p>MTH 132 Elementary Mechanics I 3</p>
              <h3>Required Ancillary Courses</h3>
              <p>PHY 116 General Physics for Physical Sciences II 2</p>
              <p>PHY 118 General Physics for Physical Sciences III 2</p>
              <h3>General Studies Courses</h3>
              <p>GSP 102 The use of English II 2</p>
              <h3>Electives: Courses</h3>
              <p>Choose a minimum of 2 units from the following</p>
              <p>STA 112 Probability II 2</p>
              <p>STA 132 Inference II 2</p>
              <p>CHM 112 Basic Principle of Physical Chemistry 2</p>
              <h3>Total - 18</h3>
              <h2>SECOND YEAR</h2>
              <h3>First Semester</h3>
              <h4>Courses & Units</h4>
              <h5>Major Courses</h5>
              <p>COS 201 Computer Programming 2</p>
              <p>COS 231 Assembly Language Programming 2</p>
              <p>COS 203 Introduction to Microcomputer Systems 2</p>
              <p>MTH 211 Sets, Logic and Algebra 3</p>
              <p>MTH 215 Linear Algebra I 2</p>
              <p>MTH 221 Real Analysis I 2</p>
              <h3>Required Ancillary Courses</h3>
              <p>STA 205 Statistics for Physical Sciences. & Engineering I 2</p>
              <h3>General Studies Courses</h3>
              <p>GSP 201 Social Sciences 2</p>
              <p>GSP 207 Logic, Philosophy & Human Existence 2</p>
              <h3>Total - 23</h3>
              <h3>Second Semester</h3>
              <h4>Courses & Units</h4>
              <h5>Major Courses</h5>
              <p>COS 202 Software Engineering I 3</p>
              <p>COS 204 Introduction to Digital System Design 3</p>
              <p>COS 242 Data and Computer Communication 2</p>
              <p>COS 232 Data Structures 2</p>
              <p>MTH 216 Linear Algebra II 2</p>
              <p>MTH 222 Elementary Differential Equations I 3</p>
              <p>MTH 224 Introduction to Numerical Analysis 3</p>
              <h3>Required Ancillary Courses</h3>
              <p>STA 206 Statistics for Engineering & Physical Sciences II 2</p>
              <h3>General Studies Courses</h3>
              <p>GSP 202 Issues in Peace & Conflict Resolution Studies 2</p>
              <p>GSP 208 Nigerian Peoples and Cultures 2</p>
              <h3>Total - 22</h3>
              <h2>THIRD YEAR</h2>
              <h3>First Semester</h3>
              <h4>Courses & Units</h4>
              <h5>Major Courses</h5>
              
              <p>COS 351 Laboratory for Digital System Design 3</p>
              <p>COS 311 Switching Algebra & Discrete Structures 3</p>
              <p>COS 331 Operating Systems 3</p>
              <p>COS 341 Computer Architecture 3</p>
              <p>MTH 327 Elementary Differential Equations II 3</p>
              <p>MTH 331 Introduction to Mathematical Modeling 3</p>
              <h3>Required Ancillary Courses</h3>

              <p>CED 341 Introduction to Entrepreneurship 2</p>
              <h3>Electives</h3>
              <p>Choose a minimum of 2/3 units from the following</p>
              <p>COS 333 Software Engineering II 2</p>
              <p>COS 335 Automata Theory and Formal Languages 2</p>
              <p>COS 337 Artificial Intelligence I 2</p>
              <p>MTH 321 Metric Space Topology 3</p>
              <p>MTH 337 Optimization Theory I 2</p>
              <p>MTH 339 Analytic Dynamics 3</p>
              <h3>Total - 20/21</h3>
              <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
            <p>COS 382 Students Industrial Work Experience Scheme 6</p>
            <p>COS 384 Technical SIWES Report 5</p>
            <p>COS 386 SIWES Seminar 4</p>
          <h3>Total - 15</h3>


          <h2>FOURTH YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 421 Database Design and Management 3</p>
          <p>COS 431 Algorithms 2</p>
          <h3>Computer Science Electives Courses</h3>
          <p>Choose a minimum of 6/7 units from the following</p>
          <p>COS 411 Numerical Methods 3</p>
          <p>COS 463 Structured Programming 2</p>
          <p>COS 441 Advanced Computer Networks 3</p>
          <p>COS 435 Computer Graphics and Animation 2</p>
          <p>COS 461 Organization of Programming Languages 2</p>
          <p>COS 471 Web Application Development 2</p>
          <h3>Mathematics Electives Courses</h3>
          <p>Choose a minimum of 6/7 units from the following</p>
          <p>MTH 421 Ordinary Differential Equations 3</p>
          <p>MTH 425 Lebesgue Measure and Integration 3</p>
          <p>MTH 427 Field Theory in Mathematical Physics 3</p>
          <p>MTH 429 Functional Analysis 3</p>
          <h3>Total - 17/18/19</h3>
          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 490 Project 6 OR MTH 452 Project 4</p>
          <p>COS 452 Advanced Digital Laboratory 3</p>
          <p>MTH 428 Partial Differential Equations 3</p>
          <p>MTH 312 Abstract Algebra II 3</p>
          <p>MTH 326 Real Analysis II 3</p>
          <h3>Required Ancillary Courses</h3>
          <p>CED 342 Business Development & Management 2</p>
          
          <h3>Total 17/19</h3>
            </div>
          }
          
          
          <h2>B.Sc Computer Science/Physics Programme</h2>
          <button onClick={showCSPH}>Curriculum</button><button>Timetable</button>

          {
            csPh &&
            <div>
              <h1>B.Sc Computer Science Programme</h1>
          <h2>FIRST YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 103 Computer Hardware Organization 3</p>
          <p>COS 105 Introduction to Computer Science for Physical Sciences 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 111 Elementary Mathematics I 3</p>
          <p>MTH 121 Elementary Mathematics II 3</p>
          <p>PHY 115 General Physics for Physical Sciences I 2</p>
          <p>STA 131 Inference I 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 101 The use of English I 2</p>
          <p>GSP 111 Use of library I 2</p>
          <h3>Total - 19</h3>


          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 102 Computing Practice 3</p>
          <p>COS 104 Introduction to Database Systems 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 122 Elementary Mathematics III 3</p>
          <p>PHY 116 General Physics for Physical Sciences II 2</p>
          <p>PHY 118 General Physics for Physical Sciences III 2</p>
          <p>STA 132 Inference II 2</p>
          <p>STA 172 Statistical Computing I 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 102 The use of English II 2</p>
          <p>GSP 111 Use of library I 2</p>
          <h3>Total - 18</h3>


          <h2>SECOND YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 201 Computer Programming 2</p>
          <p>COS 201 Computer Programming 2</p>
          <p>COS 231 Assembly Language Programming 2</p>
          <p>COS 203 Introduction to Microcomputer Systems 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>MTH 211 Sets, Logic and Algebra 3</p>
          <p>MTH 215 Linear Algebra I 2</p>
          <p>STA 205 Statistics for Physical Sciences. & Engineering I 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 201 Social Sciences 2</p>
          <p>GSP 207 Logic, Philosophy & Human Existence 2</p>
          <h3>Electives  Courses</h3>
          <p>Choose a maximum of 3 units from the following:</p>
          <p>MTH 221 Real Analysis I 3</p>
          <p>EEE 211 Basic Electrical Engineering 3</p>
          <h3>Total - 20</h3>



          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 202 Software Engineering I 3</p>
          <p>COS 204 Introduction to Digital System Design 3</p>
          <p>COS 242 Data and Computer Communication 2</p>
          <p>COS 232 Data Structures 2</p>
          <h3>Required Ancillary Courses</h3>
          <p>STA 206 Statistics for Physical Sciences & Engineering II 2</p>
          <h3>General Studies Courses</h3>
          <p>GSP 202 Issues in Peace & Conflict Resolution Studies 2</p>
          <p>GSP 208 Nigerian Peoples and Cultures 2</p>
          <h3>Total - 18</h3>
          <h3>Electives Courses</h3>
          <p>Choose a minimum of one course 2/3units from the following:</p>
          <p>MTH 216 Linear Algebra II 2</p>
          <p>MTH 222 Elementary Differential Equations I 3</p>
          <p>MTH 242 Mathematical Methods I 3</p>
          <h3>Total - 19/20</h3>



          <h2>THIRD YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 311 Switching Algebra & Discrete Structures 3</p>
          <p>COS 331 Operating Systems 3</p>
          <p>COS 333 Software Engineering II 2</p>
          <p>COS 335 Automata Theory and Formal Languages 2</p>
          <p>COS 337 Artificial Intelligence I 2</p>
          <p>COS 341 Computer Architecture 3</p>
          <p>COS 351 Laboratory for Digital System Design 3</p>
          <h3>Required Ancillary Courses</h3>
          <p>CED 341 Introduction to Entrepreneurship 2</p>
          <h3>Total - 20</h3>


          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
            <p>COS 382 Students Industrial Work Experience Scheme 6</p>
            <p>COS 384 Technical SIWES Report 5</p>
            <p>COS 386 SIWES Seminar 4</p>
          <h3>Required Ancillary Courses</h3>
          <p>CED 341 Introduction to Entrepreneurship 2</p>
          <h3>Total - 15</h3>


          <h2>FOURTH YEAR</h2>
          <h3>First Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 417 Computer System Performance Evaluation 2</p>
          <p>COS 419 Operations Research 3</p>
          <p>COS 421 Database Design and Management 3</p>
          <p>COS 431 Algorithms 2</p>
          <p>COS 435 Computer Graphics and Animation 2</p>
          <p>COS 441 Advanced Computer Networks 3</p>
          <p>COS 463 Structured Programming 2</p>
          <h3>Electives Courses</h3>
          <p>Choose 2 or 3 units from the following:</p>
          <p>COS 411 Numerical Methods 3</p>
          <p>COS 413 Systems Modeling & Simulation 2</p>
          <p>COS 415 Computer Process Control 2</p>
          <p>COS 437 Project Management 2</p>
          <p>COS 439 Game Programming 2</p>
          <p>COS 461 Organization of Programming Languages 2</p>
          <p>COS 471 Web Application Development 2</p>
          <h3>Total - 19/20</h3>


          <h3>Second Semester</h3>
          <h4>Courses & Units</h4>
          <h5>Major Courses</h5>
          <p>COS 438 Artificial Intelligence II 2</p>
          <p>COS 490 Project 6</p>
          <p>COS 452 Advanced Digital Laboratory 3</p>
          <h3>Required Ancillary Courses</h3>
          <p>CED 342 Business Development & Management 2</p>
          <h3>Electives Courses</h3>
          <p>Choose a minimum of 4/5 units from the following:</p>
          <p>COS 434 Compiler Construction 3</p>
          <p>COS 436 Expert Systems 2</p>
          <p>COS 442 Mobile Communications 2</p>
          <p>COS 444 Computer Network Security 2</p>
          <p>COS 464 Concurrent Programming 2</p>
          <h3>Total 17/18</h3>
            </div>
          }


          


          



          



          


          


          
          



          






        </p>
  
    </div>
  )
}

export default Courses

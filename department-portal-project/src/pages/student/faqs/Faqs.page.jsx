import React from 'react'

const Faqs = () => {
  return (
    <div>
      I WANT TO BE PART OF NACOS EXCOs,HOW DO I BE PART OF IT?

Here are the criteria’s to be an Exco:
*Must be a Nacossite
*Must be up to date on Nacoss dues receipt
*Must have an affidavit that shows he/she is free from any secret cult
*Must not be occupying any official position in the department( if reverse is the case, the
person is meant to resign 24hrs before screening and resignation letter must be brought to
the board on the day of the screening)
* Must have a CGPA of 3.5 for president and vice president while 3.0 for other post.
First years are excluded as they don't have a CGPA currently
*Must be free from any security scandals
Positions and form prices:
PRESIDENCY:
PRESIDENT must be in 300level going to final year
VICE PRESIDENT must be in 200level going to 300level
The following posts are available for third years and second years
SECRETARY GENERAL:
TREASURER:
DIRECTOR OF SOCIALS:
WELFARE1: 
DIRECTOR OF SOFTWARE:
DIRECTOR OF GAMES:
FINANCIAL SECRETARY:
The following posts are open for second and first years only.
ASSISTANT SECRETARY GENERAL:
DIRECTOR OF SOCIALS II :
WELFARE II :
DIRECTOR OF SOFTWARE II:
LIBARIAN:
These positions is available for the first years only.
PROVOST:
PUBLIC RELATIONS OFFICER:
Get your forms from Nacos office at the required time
    </div>
  )
}

export default Faqs


import React, { useState } from 'react';
import './Faqs.page.css'; // Import your CSS file for styling

const Faqs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="faq-container">
      <div className={`faq-heading ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <bold>I WANT TO BE PART OF NACOS EXCOs, HOW DO I BE PART OF IT?</bold> 
        <div className={`arrow ${isExpanded ? 'expanded' : ''}`}></div>
      </div>
      {isExpanded && (
        <div className="faq-content">
         Here are the criterias to be an Exco:
         <bold>Must be a Nacossite</bold> 
         Must be up to date on Nacoss dues receipt
         Must have an affidavit that shows he/she is free from any secret cult
         Must not be occupying any official position in the department( if reverse is the case, the
         person is meant to resign 24hrs before screening and resignation letter must be brought to
         the board on the day of the screening)
         Must have a CGPA of 3.5 for president and vice president while 3.0 for other post.
         First years are excluded as they don't have a CGPA currently
         Must be free from any security scandals
         Positions and form prices:
         PRESIDENCY:
         PRESIDENT must be in 300level going to final year
         VICE PRESIDENT must be in 200level going to 300level
         The following posts are available for third years and second years
         SECRETARY GENERAL:
         TREASURER:
         DIRECTOR OF SOCIALS:
         WELFARE1: 
         DIRECTOR OF SOFTWARE:
         DIRECTOR OF GAMES:
         FINANCIAL SECRETARY:
         The following posts are open for second and first years only.
         ASSISTANT SECRETARY GENERAL:
         DIRECTOR OF SOCIALS II :
         WELFARE II :
         DIRECTOR OF SOFTWARE II:
         LIBARIAN:
        These positions is available for the first years only.
PROVOST:
PUBLIC RELATIONS OFFICER:
Get your forms from Nacos office at the required time
        </div>
      )}
    </div>
  );
};

export default Faqs;

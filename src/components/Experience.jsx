import React from "react";
import Heading from "../components/Heading";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="mt-7">
      <Heading>Experience</Heading>
      <div className="flex justify-center items-center">
        <Card
          projectName="Center of Image Processing, Ramaiah Institute of Technology"
          position="Student Intern (March 24 - May 24)"
          description={
            <ul className="list-disc list-inside">
              <li>Developed and implemented ML/DL models, increasing classification accuracy of utterances in IR and RGB images by 15%, enhancing the precision of automated image analysis systems.</li>
              <li>Annotated a large dataset of IR images to improve model training, leading to a significant 78% increase in accuracy.</li>
              <li>Integrated optimized models into the existing pipeline, reducing false classifications by 20% and improving overall system performance.</li>
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Experience;

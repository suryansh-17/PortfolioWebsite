// Card.js
import React from "react";

function Card({ projectName, techStack, description, codeLink, liveSiteLink }) {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold">{projectName}</h2>
      <p className="text-gray-600">{techStack}</p>{" "}
      {/* This is where the techStack is rendered */}
      <div>{description}</div>
      <div>
        <a href={codeLink} className="text-blue-500">
          View Code
        </a>
        {liveSiteLink && (
          <a href={liveSiteLink} className="text-blue-500 ml-4">
            Live Site
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;

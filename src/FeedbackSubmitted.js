import React from 'react'
import Checkmark from "./Checkmark";

const feedbackSubmitted = () => {
    return (
        <div>
          <Checkmark
          p="You have successfully submitted the feedback"
          h1="Congratulations"
          />

        </div>
      );
}

export default feedbackSubmitted
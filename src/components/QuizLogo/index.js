import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img className={className} src="/dark_souls_prepare_to_quiz_logo.png" alt="Logo Dark Souls quiz" />
  );
}

const QuizLogo = styled(Logo)`
  margin: 0 auto;
  width: 100%;
`

export default QuizLogo;


// import styled from 'styled-components';

// import React from 'react';
// import PropTypes from 'prop-types';

// function Logo({ className }) {
//   return (
//     <img width="100%" src="/dark_souls_prepare_to_quiz_logo.png"></img>
//   );
// }

// Logo.propTypes = {
//   className: PropTypes.string.isRequired,
// };

// const QuizLogo = styled(Logo)`
//   margin: auto;
//   display: block;
//   @media screen and (max-width: 500px) {
//     margin: 0;
//   }
// `;

// export default QuizLogo;
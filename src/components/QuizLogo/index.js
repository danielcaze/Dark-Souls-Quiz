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
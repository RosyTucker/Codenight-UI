import React from 'react';
import { connect } from 'react-redux';

const ProblemsHome = () => (
  <div className="problems">
    Problems
  </div>
);

export { ProblemsHome };

export default connect()(ProblemsHome);

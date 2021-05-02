import { combineReducers } from 'redux';
import jobs from './jobs';
import auth from "./auth";
import employees from "./employees";
import companies from './companies'
import errors from './errors'
import messages from './messages'
import gender from './gender'
import realtionshiphealth from './realtionshiphealth'

export default combineReducers({
    jobs,
    auth,
    employees,
    companies,
    errors,
    messages,
    gender,
    realtionshiphealth,
});
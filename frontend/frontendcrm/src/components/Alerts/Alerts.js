import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

    static propTypes = {

        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if(error !== prevProps.error) {
            if (error.msg.job_name) alert.error(`Job Name: ${error.msg.job_name.join()}`);
            if (error.msg.job_value) alert.error(`Job Value: ${error.msg.job_value.join()}`);
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if (error.msg.employee_name) alert.error(`Employee Name: ${error.msg.employee_name.join()}`);
            if (error.msg.company_name) alert.error(`Company Name: ${error.msg.company_name.join()}`);
            if (error.msg.employee_email) alert.error(`Email: ${error.msg.employee_email.join()}`);
            if (error.msg.employee_mobile_number) alert.error(`Mobile: ${error.msg.employee_mobile_number.join()}`);
            if (error.msg.employee_work_number) alert.error(`Work: ${error.msg.employee_work_number.join()}`);
            if (error.msg.gender) alert.error(`Gender: ${error.msg.gender.join()}`);


            


            
        }

        if (message !== prevProps.message) {
            if (message.postJob) alert.success(message.postJob);
            if (message.postEmployees) alert.success(message.postEmployees);
            if (message.putEmployee) alert.success(message.putEmployee);
            if (message.loadUser) alert.error(message.loadUser);
            if (message.deleteEmployee) alert.error(message.deleteEmployee);

        }

       
    }
    render() {
        return (
            <Fragment></Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages,
  });


export default connect(mapStateToProps)(withAlert()(Alerts)); 
import moment from 'moment';

export default {
  formattedDate(datetime) {
    return moment(datetime).format('Do MMM YY');
  },

  formattedTime(datetime) {
    return moment(datetime).format('HH:mm a');
  }
};

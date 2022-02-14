import PropTypes from 'prop-types';

const StatisticList = ({statistic}) => (
    <ul>
        <li>Good: {statistic[0]}</li>
        <li>Neutral: {statistic[1]}</li>
        <li>Bad: {statistic[2]}</li> 
        <li>Total: {statistic[3]}</li>
        <li>Positive feedback: {statistic[4]}%</li>
    </ul>
);

StatisticList.propTypes = {
    statistic: PropTypes.array.isRequired,
}

export default StatisticList;



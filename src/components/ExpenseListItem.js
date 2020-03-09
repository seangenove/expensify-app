import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// load a locale
// numeral.register('locale', 'php', {
//     delimiters: {
//         thousands: ',',
//         decimal: '.'
//     },
//     abbreviations: {
//         thousand: 'k',
//         million: 'm',
//         billion: 'b',
//         trillion: 't'
//     },
//     ordinal : function (number) {
//         return number === 1 ? 'er' : 'ème';
//     },
//     currency: {
//         symbol: '₱'
//     }
// });

// numeral.locale('php');

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format('MMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

export default ExpenseListItem;

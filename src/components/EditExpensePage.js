import React from 'react';

// const EditExpensePage = () => (
//     <div>
//         // This is my edit add expense component
//     </div>
// );

const EditExpensePage = (props) => {
    console.log(props);

    return (
        <div>
        Editing the expense with id of {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;
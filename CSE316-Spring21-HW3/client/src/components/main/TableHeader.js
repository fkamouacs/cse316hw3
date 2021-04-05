import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const headerStyle = props.disabled ? 'table-header-section-disabled' : 'table-header-section';
    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };

    const handleColumnClick = (event) => {
        switch (event.target.innerText) {
            case 'Task':
                props.sortItems('description');
                break;
            case 'Due Date':
                props.sortItems('due_date');
                break;
            case 'Assigned':
                props.sortItems('assigned_to');
                break;
            case 'Status':
                props.sortItems('completed');
                break;
        }
    }

    return (
        <WRow className="table-header">
            <WCol size="4">
                <WButton className={`${headerStyle}`} wType="texted" onClick={props.disabled ? clickDisabled : handleColumnClick} >Task</WButton>
            </WCol>

            <WCol size="3">
                <WButton className={`${headerStyle}`} wType="texted" onClick={props.disabled ? clickDisabled : handleColumnClick}>Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className={`${headerStyle}`} wType="texted" onClick={props.disabled ? clickDisabled : handleColumnClick} >Assigned</WButton>
            </WCol>

            <WCol size="2">
                <WButton className={`${headerStyle}`} wType="texted" onClick={props.disabled ? clickDisabled : handleColumnClick}>Status</WButton>
            </WCol>

            <WCol size="1">
                <div className="table-header-buttons">
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => props.setActiveList({})} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};

export default TableHeader;
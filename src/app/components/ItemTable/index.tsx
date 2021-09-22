import React from 'react';
// import { InputField, SelectField } from 'app/components';
import style from "./style.css"
import {ItemModel} from "app/models";
import {ItemActions, useItemActions } from 'app/actions'
import { useDispatch } from 'react-redux';

export namespace ItemTable {
    export interface Props {
        title: string,
        items: ItemModel[],
    }
}

export const ItemTable = ({ title, items }: ItemTable.Props): JSX.Element => {
    const dispatch = useDispatch();
    const itemActions = useItemActions(dispatch);

    const handleDelete = React.useCallback((i): void => {
        itemActions.deleteItem(i); 
    }, [ItemActions]);

    return (
        <table className={style.itemTable}>
            <thead>
                <tr>
                    <th>{title}</th>
                </tr>
            </thead>
            <tbody>
                {items.map( item => {
                    return (
                        <tr>
                            <td>
                                {item.text}
                                <i 
                                    className={'fa fa-window-close-o ' + style.icon}
                                    onClick={() => handleDelete(item.id)}
                                />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

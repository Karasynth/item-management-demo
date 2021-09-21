import React from 'react';
// import { InputField, SelectField } from 'app/components';
import style from "./style.css"
import {ItemModel} from "app/models";

export namespace ItemTable {
    export interface Props {
        title: string,
        items: ItemModel[],
    }
}

export const ItemTable = ({ title, items }: ItemTable.Props): JSX.Element => {
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
                            />
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  );
};

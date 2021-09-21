import React from 'react';
// import { InputField, SelectField } from 'app/components';
import style from "./style.css"

export namespace ItemTable {
  export interface Props {
      title: string,
  }
}

export const ItemTable = ({ title }: ItemTable.Props): JSX.Element => {
  return (
    <table className={style.itemTable}>
        <tr>
            <th>{title}</th>
        </tr>
        <tr>
            <td>
                ITEM
                <i 
                    className={'fa fa-window-close-o ' + style.icon}
                />
            </td>
          
        </tr>
        <tr>
            <td>
                ITEM
                <i 
                    className={'fa fa-window-close-o  ' + style.icon}
                />
            </td>
          
        </tr>
    </table>
  );
};

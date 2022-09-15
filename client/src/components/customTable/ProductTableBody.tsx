import React from 'react'
import { ProductType } from '../../types';
import { MouseEvent } from "react";


type Props= {
  tableBody: ProductType[];
  // selectSazonalidade:(e:MouseEvent<HTMLTableRowElement>,index:number) => void;
};
export default function ProductTableBody({ tableBody }: Props) {
  if (tableBody.length === 0) return <tbody></tbody>;
  return (
       <tbody>
      {
        tableBody.map((product,index) => {
          return (
            <tr key={product._id}>
              <th scope='row'>
               {product._id}
              </th>
              <td>
               {product.productName}
             </td>
              <td>
               {product.nomeFamilia}
             </td>
              <td>
               {product.marca}
             </td>
              <td>
               {product.class}
             </td>
              <td>
               {product.unidade}
             </td>
              <td>
               {product.quantidade}
             </td>
              <td>
               {product.categoria}
             </td>
            
            </tr>
          )
        })
      }
  
    </tbody>
  )
}

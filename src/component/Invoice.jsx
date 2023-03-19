import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
      }));

export default function Invoice({props,handleModal}){
   
        
  return(
  <TableContainer key={props?.order_number} component={Paper} elevation={3} sx={{ m: 0.5,p:1 }}>
        <h2 style={{ textAlign: "center" }}>Invoice</h2>
          <Stack spacing={1} direction="row"
        divider={<Divider orientation="vertical" flexItem />}>
                <Item>Order Number : {props.order_number}</Item>
                <Item>Company:{props.company_name}</Item>
                <Item>Billing Date:{props.date.billing_Date}</Item>
                <Item>Due Date:{props.date.due_Date}</Item>
                <Item>Payment Status:{props.payment_status?"PAID":"PENDING"}</Item>
                {props.payment_status?<Item>Payment Id:{props?.payemt_history?.payment_id}</Item>:null}
        </Stack>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell align="right">Descreption</TableCell>
          <TableCell align="right">Quantity</TableCell>
          <TableCell align="right">Price&nbsp;(INR)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props?.products?.map((row) => (
          <TableRow
            key={row?._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row?.item}
            </TableCell>
            <TableCell align="right">{row?.descreption}</TableCell>
            <TableCell align="right">{row?.quantity}</TableCell>
            <TableCell align="right">{row?.price}</TableCell>
          </TableRow>
        ))}
  <TableRow>
         <TableCell><strong>Subtotal :</strong>&nbsp;{props?.subtotal}</TableCell>
         <TableCell>Convenience Fee: {props?.convienance_fee}</TableCell>
         <TableCell align="right">
        <strong>Total Amount in INR</strong>
        </TableCell>
       <TableCell align="right">
{
props?.subtotal+props?.convienance_fee
}
</TableCell>
</TableRow>
      </TableBody>
    </Table>
    <Box
  m={1}
  display="flex"
  justifyContent="flex-end"
  alignitem="flex-end"
>
  {!props.payment_status?<Button variant="contained" color="primary" size='large' style={{ height: 40 }} onClick={(e)=>handleModal(props)}>
    PAY
  </Button>:<Button variant="contained" color="success" size='large' style={{ height: 40 }} disabled>
    PAID
  </Button>}
</Box>
  </TableContainer>)

}
import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function PaymentSuccess(props){
        return(
                <div>
				
				
				<div className="oc-bid-demo">
					<div className="container">
						<h1>Thank you for making the payment</h1>
						<CheckCircleOutlineIcon color="success" fontSize="large"/>
						<p>You can see the your payment details</p>
						<Link to={"/"} className="btn btn-primary">Invoice Details</Link>
					</div>
				</div>
				
			</div>
        )
}
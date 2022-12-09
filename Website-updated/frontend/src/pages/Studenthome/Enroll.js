import React from 'react'
import axios from "axios";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import getCurrentUser from '../Courses/Getcourse';
import { useEffect,useState } from 'react';
export default function Enroll({item}) {

	

	const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

	const detail={name:item.name,se:user.name};

    const initPayment = (data) => {
		const options = {
			key: "rzp_test_Ts1ONCToJJ8jvM",
			amount: data.amount,
			currency: data.currency,
			name: item.name,
			description: "Test Transaction",
			category: item.category,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:8050/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					axios.post("http://localhost:8050/enroll/store", detail)
            			.then(res=>{
                			window.alert(res.data.message)
            			})
            			.catch(err=>{
                			console.log(err)
            			})
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};
	const handlePayment = async () => {
		try {
			var cc
			axios.post("http://localhost:8050/enroll/check", detail)
            .then(res=>{
                if(res.data){
					window.alert("You have already enrolled for this course")
				}
				else
				{
					axios.post("http://localhost:8050/payment/orders", { amount: item.fee })
					.then(res=>{
					console.log(res.data);
					initPayment(res.data);
					})
				}
            })
            .catch(err=>{
                console.log(err)
            })	
		} catch (error) {
			console.log(error);
		}
	};

  return (
    <><IconButton variant='contained' size="small" color="inherit" onClick={handlePayment}><ShoppingCartIcon/></IconButton>
    <div><script src="https://checkout.razorpay.com/v1/checkout.js"></script></div></>
  )
}

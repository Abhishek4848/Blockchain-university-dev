import {React, useState} from 'react'
import styles from './Wallet.css';

const Interactions = (props) => {

	const [transferHash, setTransferHash] = useState();
	const [Error, setError] = useState();
	const [PubAddr, setPubAddr] = useState();
	const ssn = props.ssn;
	const getPub = async (e) => {
		await fetch("http://localhost:8050/getssn/"+ssn)
		.then(res => res.json())
		.then(data => {
			setPubAddr(data['pubaddr'])
		})
		.catch(err => {
			console.log("Could not fetch Pub Addr" + err);
			setError("Could not fetch Reciever Address")
		})
	}
	getPub()
	const transferHandler = async (e) => {
		e.preventDefault();
		let transferAmount = e.target.sendAmount.value;
		let recieverAddress = e.target.recieverAddress.value;

		let txt = await props.contract.transfer(recieverAddress, transferAmount);
		console.log("ammout: "+transferAmount);
		console.log(txt);
		setTransferHash("Transfer confirmation hash: " + txt.hash);
	}

	return (
			<div className={styles.interactionsCard}>
				<form onSubmit={transferHandler}>
					<h2> Transfer Credits </h2>
						<p> Reciever Address </p>
						<input type='text' id='recieverAddress' className={styles.addressInput} value={PubAddr}/>
						<p> Send Credits </p>
						<input type='number' id='sendAmount' min='0' step='1'/>

						<button type='submit' className={styles.button6}>Send</button>
						<div>
							{transferHash}
						</div>
			</form>
			</div>
		)
	
}

export default Interactions;
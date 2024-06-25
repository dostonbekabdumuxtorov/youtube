import React, { useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { RecordVoiceOver } from '@mui/icons-material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 450,
	height:300,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};

function Speech({open,setOpen}) {
	const navigate  = useNavigate()
	
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const {
		transcript,
		listening,
		resetTranscript,
		finalTranscript,
		browserSupportsSpeechRecognition
	} = useSpeechRecognition();

	
	useEffect(()=>{
		if(!listening && open){
			SpeechRecognition.startListening()
		}
	},[open])


	useEffect(()=>{
		setTimeout(() => {
			if(finalTranscript && open){
				setOpen(false)
				navigate(`/result/${finalTranscript}`)
			}
		}, 1000);
	},[finalTranscript])

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>

					{
						listening ? <div>
							<RecordVoiceOver />
							<p>Listening...</p>
						</div> : null
					}
					<h1>{transcript}</h1>
				</Box>
			</Modal>
		</div>
	)
}

export default Speech
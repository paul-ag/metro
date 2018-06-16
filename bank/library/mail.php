<?php

require_once 'config.php';
require_once 'database.php';

function send_email($data) {
	$to = $data['to'];
	$sub = $data['sub'];
	$msg = $data['msg'];
	$message = get_email_msg($data);
	$header = "From:customercare@onl53.com \r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$header .= "Content-type: text/html\r\n";
	$retval = mail ($to,$sub,$message,$header);
}

function get_email_msg($data) {
	$msg_text = "";
	
	switch($data['msg']) {
		
		case 'acc_open':
			$msg_text = '';
		break;
		
		case 'otp':
			$msg_text = sprintf("Please contact the bank to get the TAC code %u", $data['token']);
		break;
		
		case 'change_pwd':
			$msg_text = sprintf("Your password is successfully changed. New Password is : %s", $data['pwd']);
		break;
		
		case 'change_pin':
			$msg_text = sprintf("Your PIN is successfully changed. New PIN is : %u", $data['pin']);
		break;		
		
		case 'transfer':
			$msg_text = $data['body'];
		break;
		
		case 'register':
			$msg_text = $data['body'];
		break;
		
	}//switch
	return $msg_text;
}

?>
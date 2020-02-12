<?php
// header("Content-type: application/json");
// Configure your Subject Prefix and Recipient here
$subjectPrefix = 'PeinMoney Event Registration Form ';
$emailTo = '<hr@peinmoney.com>';
$errors = array(); // array to hold validation errors
$data = array(); // array to pass back data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $lastname = stripslashes(trim($_POST['lastname']));
    $firstname = stripslashes(trim($_POST['firstname']));
    $email = stripslashes(trim($_POST['email']));
    $phone = stripslashes(trim($_POST['phone']));
    $attendees = stripslashes(trim($_POST['attendees']));
    $amount = stripslashes(trim($_POST['amount']));
    $eventtype = stripslashes(trim($_POST['eventtype']));
    $amounttopay = stripslashes(trim($_POST['amounttopay']));
    $reference = stripslashes(trim($_POST['reference']));
    $status = stripslashes(trim($_POST['status']));
    if (empty($lastname)) {
        $errors['lastname'] = 'LastName is required.';
    }
    if (empty($firstname)) {
        $errors['firstname'] = 'FirstName is required.';
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Email is invalid.';
    }
    if (empty($phone)) {
        $errors['phone'] = 'Phone is required.';
    }
    if (empty($attendees)) {
        $errors['attendees'] = 'Number of Attendee(s) is required.';
    }
    if (empty($amount)) {
        $errors['amount'] = 'Amount to invest is required.';
    }
    if (empty($eventtype)) {
        $errors['eventtype'] = 'Event session  is required.';
    }
    if (empty($status)) {
        $errors['status'] = 'Status is required.';
    }

    // if there are any errors in our errors array, return a success boolean or false
    if (!empty($errors)) {
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        $subject = "$subjectPrefix";
        $body = '
            <strong>FirstName: </strong>' . $firstname . '<br />
            <strong>LastName: </strong>' . $lastname . '<br />
            <strong>Email: </strong>' . $email . '<br />
            <strong>Phone: </strong>' . $phone . '<br />
            <strong>Number of Attendee(s): </strong>' . $attendees . '<br />
            <strong>Amount To Invest: </strong>' . $amount . '<br />
            <strong>Event Session: </strong>' . $eventtype . '<br />
            <strong>Amount Paid for Attendee(s): </strong>' . $amounttopay . '<br />
            <strong>Transaction Reference Code: </strong>' . $reference . '<br />
            <strong>Investment Status: </strong>' . $status . '<br />
        ';
        $body2 = '
        <strong>Name: </strong>' . $firstname . '    ' . $lastname . '<br />
        <strong>Email: </strong>' . $email . '<br />
        <strong>Phone: </strong>' . $phone . '<br />
        <strong>Number of persons attending: </strong>' . $attendees . '<br />
        <strong>The amount you are willing to invest: </strong>' . $amount . '<br />
        <strong>Event session paid for: </strong>' . $eventtype . '<br />
        <strong>Amount paid for attendee(s): </strong>' . $amounttopay . '<br />
        <strong>Amount paid for attendee(s): </strong>' . $status . '<br />
        <strong>Payment For: </strong> Peinmoney Event Registration' . '<br />
    ';
        $headers = "MIME-Version: 1.1" . PHP_EOL;
        $headers .= "Content-type: text/html; charset=utf-8" . PHP_EOL;
        $headers .= "Content-Transfer-Encoding: 8bit" . PHP_EOL;
        $headers .= "Date: " . date('r', $_SERVER['REQUEST_TIME']) . PHP_EOL;
        $headers .= "Message-ID: <" . $_SERVER['REQUEST_TIME'] . md5($_SERVER['REQUEST_TIME']) . '@' . $_SERVER['SERVER_NAME'] . '>' . PHP_EOL;
        $headers .= "From: " . "=?UTF-8?B?" . base64_encode($lastname . ' ' . $firstname) . "?=" . "<$email>" . PHP_EOL;
        $headers .= "Return-Path: $emailTo" . PHP_EOL;
        $headers .= "Reply-To: $email" . PHP_EOL;
        $headers .= "X-Mailer: PHP/" . phpversion() . PHP_EOL;
        $headers .= "X-Originating-IP: " . $_SERVER['SERVER_ADDR'] . PHP_EOL;
        $res = mail($emailTo, "=?utf-8?B?" . base64_encode($subject) . "?=", $body, $headers);
        if($res == true){
           mail($email, "=?utf-8?B?" . base64_encode($subject) . "?=", $body2, $headers);
        $data['success'] = true;
        $data['message'] = 'Congratulations. Your message has been sent successfully. Please reload the page.'; 
        }else{
            $data['success'] = false;
        $data['errors'] = 'Something went wrong please try again.';
        }
        
    }
    // return all our data to an AJAX call
    echo json_encode($data);
}

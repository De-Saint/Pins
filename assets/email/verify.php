<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $reference = stripslashes(trim($_POST['reference']));

    $result = array();
    //The parameter after verify/ is the transaction reference to be verified
    $url = 'https://api.paystack.co/transaction/verify/'.$reference;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        // "Authorization: Bearer sk_test_a77df3ccb0244eb036d487a692492ca08a9c8ebe", //replace this with your own test key
        "Authorization: Bearer sk_live_9a264516f42a43483353617389e68d5fc1c08288", //replace this with your own test key
        "content-type: application/json",
        "cache-control: no-cache"
      ]);
    $request = curl_exec($ch);
    
    if(curl_error($ch)){
    echo 'error:' . curl_error($ch);
    }
    curl_close($ch);

    if ($request) {
        $result = json_decode($request, true);
    }

    if (array_key_exists('data', $result) && array_key_exists('status', $result['data']) && ($result['data']['status'] === 'success')) {
        $data['success'] = true;
        $data['message'] = $result; 
        //   $data['message'] = 'Congratulations. your payment was recieved.';   
    }else{
        echo "Transaction was unsuccessful";
        $data['success'] = false;
        $data['message'] = $result;
    }
echo json_encode($data);
}


?>
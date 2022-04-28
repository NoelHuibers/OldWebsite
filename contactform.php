<?php

if (isset($_POST["submit"])) {
  $honeypot = FALSE;
  if (!empty($_REQUEST['contact_me_by_fax_only']) && (bool) $_REQUEST['contact_me_by_fax_only'] == TRUE) {
    $honeypot = TRUE;
    log_spambot($_REQUEST);
  } else {
    $name = $_POST["name"];
    $mailFrom = $_POST["email"];
    $message = $_POST["message"];
  
    $mailTo = "noel@huibers.io";
    $subject = "Mail from my Website";
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an e-mail from ".$name.".\nEmail address: ".$mailFrom."\n\n".$message;
  
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
  }
}
?>
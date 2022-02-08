<?php

if (isset($_POST["submit"])) {
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
?>
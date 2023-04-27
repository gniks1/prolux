<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get form data
  $name = $_POST["name"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];
  
  // Set email recipient
  $to = "nikhilgupta@prolux.in";
  
  // Set email subject
  $subject = "New message from website contact form";
  
  // Build email message
  $email_message = "Name: " . $name . "\n\n";
  $email_message .= "Phone: " . $phone . "\n\n";
  $email_message .= "Message: " . $message . "\n\n";
  
  // Set email headers
  $headers = "From: sales@prolux.in\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  
  // Send email
  mail($to, $subject, $email_message, $headers);
  
  // Redirect to thank you page
  header("Location: thank-you.html");
  exit;
}
?>

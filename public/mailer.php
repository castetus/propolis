<?php
// Подключаем библиотеку PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/Exception.php';

if (isset($_POST['formType'])){
  $mail_data = '';
  if ($_POST['formType'] === 'consult'){
    $mail_data .= 'Имя: ' . $_POST['name'];
    $mail_data .= 'Телефон: ' . $_POST['phone'];
  } else {
    foreach ($_POST as $key => $value){
      $mail_data .= '<p>' . $key . $value . '</p>';
    }
  }
}

file_put_contents('test.txt', $_POST);
 
// Создаем письмо
$mail = new PHPMailer();
$mail->CharSet = "utf-8";
$mail->setFrom('key@med-tele.ru', ''); // от кого (email и имя)
$mail->addAddress('kboikov@mail.ru', '');  // кому (email и имя)
$mail->addAddress('flagondry76@gmail.com', '');
$mail->Subject = 'Письмо с сайта Телемед';                         // тема письма
// html текст письма
$mail->msgHTML('<html><body>
                <h1>Запрос консультации</h1>'
                . $mail_data .
                '</html></body>');
// Отправляем
if ($mail->send()) {
  echo 'sent';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
} 
?>
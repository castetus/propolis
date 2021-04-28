<?php
// Подключаем библиотеку PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/Exception.php';

$data = json_decode(file_get_contents('php://input'));
 
// Создаем письмо
$mail = new PHPMailer();
$mail->CharSet = "utf-8";
$mail->setFrom('info@pro-policy.ru', ''); // от кого (email и имя)
$mail->addAddress('adelivery@yandex.ru', '');  // кому (email и имя)
$mail->addAddress('flagondry76@gmail.com', '');
$mail->addAddress($data->email, '');
$mail->Subject = 'Письмо с сайта Прополис';                         // тема письма
// html текст письма
$mail->msgHTML('<html><body>
                <h1>Спасибо за то, что вы воспользовались нашим калькулятором!</h1>
                <p>Вам на почту отправлен расчет. Вы можете заказать обратный звонок или напрямую связаться со специалистом, чтобы оформить полис, либо самостоятельно заполнить заявку на полис <a href="https://pro-policy.ru">на нашем сайте</a>.</p>'
                . $data->data .
                '</html></body>');
// Отправляем
if ($mail->send()) {
  echo 'sent';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
} 
?>
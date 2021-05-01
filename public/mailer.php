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
$mail->Subject = 'Расчет стоимости страхового полиса';                         // тема письма
// html текст письма
$mail->msgHTML('<html><body>
                <h1>Здравствуйте!</h1>
                <p>Спасибо за то, что вы воспользовались нашим калькулятором. В этом письме представлен расчет стоимости страхового полиса, произведенный по Вашим данным.</p>'
                . $data->data .
                '<p>Вы можете заказать обратный звонок или напрямую связаться со специалистом, чтобы оформить полис, либо самостоятельно заполнить заявку на полис <a href="https://pro-policy.ru">на нашем сайте</a>.</p>
                <p>Оплата производится на сайте страховой компании (которую Вы выберете) по ссылке, которая направляется вам автоматически после согласования проекта полиса.</p>
                --
                <p>С уважением,</p>
                <a href="https://pro-policy.ru">pro-policy.ru</a><br>
                <a href="tel:88003334749">8-800-333-47-49</a><br>
                WhatsApp: <a href="https://wa.me/79967917901">+7 996 791-79-01</a><br>
                <br>
                <p>Вы получили это письмо, так как воспользовались сервисом подбора ипотечного полиса <a href="https://pro-policy.ru">pro-policy.ru</a></p>
                </html></body>');
// Отправляем
if ($mail->send()) {
  echo 'sent';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
} 
?>
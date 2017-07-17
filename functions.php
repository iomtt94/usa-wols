<?php

  if(isset($_POST['action']) && !empty($_POST['action'])) {
      $action = $_POST['action'];
      switch($action) {
          case 'send_mail_consultation' : send_mail_consultation();break;
          case 'send_mail_details' : send_mail_details();break;
          case 'send_mail_question' : send_mail_question();break;
          case 'send_mail_simple_consultation' : send_mail_simple_consultation();break;
          case 'send_mail_law_consultation' : send_mail_law_consultation();break;
          case 'send_mail_price' : send_mail_price();break;
      }
  }

  function send_mail_consultation() {
    $name = $_POST['s-name'];
    $message = 'Имя: ' . $name . "<br/>";
    $message .= 'Эл.почта: ' . $_POST['s-mail'] . "<br/>";
    $message .= 'Вопрос: ' . $_POST['s-message'] . "<br/>";

    $to = 'dmitriyv.sinelnikov@gmail.com ';
    $from = 'info@usa-wols.com';
    $subject = 'Сообщение с сайта USA wols. Заказ на консультацию специалиста';

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= 'From:  ' . $name . ' <' . $from .'>' . " \r\n" .
              'Reply-To: '.  $from . "\r\n" .
              'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
  }

  function send_mail_simple_consultation() {
    $message = 'Эл.почта: ' . $_POST['sc-mail'] . "<br/>";

    $to = 'dmitriyv.sinelnikov@gmail.com ';
    $from = 'info@usa-wols.com';
    $subject = 'Сообщение с сайта USA wols. Заказ на консультацию специалиста';

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= 'From:  ' . $message . ' <' . $from .'>' . " \r\n" .
              'Reply-To: '.  $from . "\r\n" .
              'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
  }

  function send_mail_law_consultation() {
    $name = $_POST['law-name'];
    $message = 'Имя: ' . $name . "<br/>";
    $message .= 'Телефон: ' . $_POST['law-phone'] . "<br/>";

    $to = 'dmitriyv.sinelnikov@gmail.com ';
    $from = 'info@usa-wols.com';
    $subject = 'Сообщение с сайта USA wols. Заявка на получение юридической консультации';

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= 'From:  ' . $name . ' <' . $from .'>' . " \r\n" .
              'Reply-To: '.  $from . "\r\n" .
              'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
  }

  function send_mail_details() {
    $name = $_POST['d-name'];
    $message = 'Имя: ' . $name . "<br/>";
    $message .= 'Телефон: ' . $_POST['d-phone'] . "<br/>";

    $to = 'dmitriyv.sinelnikov@gmail.com ';
    $from = 'info@usa-wols.com';
    $subject = 'Сообщение с сайта USA wols. Оговорение деталей';

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= 'From:  ' . $name . ' <' . $from .'>' . " \r\n" .
              'Reply-To: '.  $from . "\r\n" .
              'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
  }

  function send_mail_question() {
    $name = $_POST['q-name'];
    $message = 'Имя: ' . $name . "<br/>";
    $message .= 'Эл.почта: ' . $_POST['q-mail'] . "<br/>";
    $message .= 'Вопрос: ' . $_POST['q-message'] . "<br/>";

    $to = 'dmitriyv.sinelnikov@gmail.com ';
    $from = 'info@usa-wols.com';
    $subject = 'Сообщение с сайта USA wols. Вопрос или предложение';

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= 'From:  ' . $name . ' <' . $from .'>' . " \r\n" .
              'Reply-To: '.  $from . "\r\n" .
              'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
  }

function send_mail_price() {
    $name = $_POST['pr-name'];
    $message = 'Имя: ' . $name . "<br/>";
    $message .= 'Телефон: ' . $_POST['pr-phone'] . "<br/>";
    $message .= 'Эл.почта: ' . $_POST['pr-mail'] . "<br/>";
    $message .= 'Сообщение: ' . $_POST['pr-message'] . "<br/>";

    $to = 'dmitriyv.sinelnikov@gmail.com ';
    $from = 'info@usa-wols.com';
    $subject = 'Сообщение с сайта USA wols. По вопросам покупки недвижимости';

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= 'From:  ' . $name . ' <' . $from .'>' . " \r\n" .
              'Reply-To: '.  $from . "\r\n" .
              'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
  }



?>
<?php

$subdomain = 'policyonipoteka'; //Поддомен нужного аккаунта

  $clientRequest = json_decode(file_get_contents("php://input"));

  if ($clientRequest){
    $tokens = json_decode(file_get_contents('tokens.json'));
    
    $new_tokens = getRefreshToken($tokens->refresh_token);

    $access_token = json_decode($new_tokens)->access_token;

    if ($new_tokens){
      file_put_contents('tokens.json', $new_tokens);
    }
    createNewDeal($access_token, $clientRequest);
  }

function createNewContact($access_token, $data){

  global $subdomain;
  $link = 'https://' . $subdomain . '.amocrm.ru/api/v4/contacts';

  // /** Формируем заголовки */
  $headers = [
    'Authorization: Bearer ' . $access_token,
    'Content-Type: application/json'
  ];
     
  /**
   * Нам необходимо инициировать запрос к серверу.
   * Воспользуемся библиотекой cURL (поставляется в составе PHP).
   * Вы также можете использовать и кроссплатформенную программу cURL, если вы не программируете на PHP.
   */
  $curl = curl_init(); //Сохраняем дескриптор сеанса cURL
  /** Устанавливаем необходимые опции для сеанса cURL  */
  curl_setopt($curl,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-oAuth-client/1.0');
  curl_setopt($curl,CURLOPT_URL, $link);
  curl_setopt($curl,CURLOPT_HTTPHEADER, $headers);
  curl_setopt($curl,CURLOPT_HEADER, false);
  curl_setopt($curl,CURLOPT_CUSTOMREQUEST, 'POST');
  curl_setopt($curl,CURLOPT_POSTFIELDS, json_encode($data));
  curl_setopt($curl,CURLOPT_SSL_VERIFYPEER, 1);
  curl_setopt($curl,CURLOPT_SSL_VERIFYHOST, 2);
  $out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
  $code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
  curl_close($curl);
  /** Теперь мы можем обработать ответ, полученный от сервера. Это пример. Вы можете обработать данные своим способом. */
  // $code = (int)$code;
  // $errors = [
  //   400 => 'Bad request',
  //   401 => 'Unauthorized',
  //   403 => 'Forbidden',
  //   404 => 'Not found',
  //   500 => 'Internal server error',
  //   502 => 'Bad gateway',
  //   503 => 'Service unavailable',
  // ];

  // try
  // {
  //   /** Если код ответа не успешный - возвращаем сообщение об ошибке  */
  //   if ($code < 200 || $code > 204) {
  //     throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undefined error', $code);
  //   }
  // }
  // catch(\Exception $e)
  // {
  //   die('Ошибка: ' . $e->getMessage() . PHP_EOL . 'Код ошибки: ' . $e->getCode());
  // }
  var_dump($out);
}


function createNewDeal($access_token, $data){ 
  global $subdomain;
  $link = 'https://' . $subdomain . '.amocrm.ru/api/v4/leads/complex';


  // /** Формируем заголовки */
  $headers = [
    'Authorization: Bearer ' . $access_token,
    'Content-Type: application/json'
  ];

  //  $data = [
    
  //       "name" => "Сделка для примера 1",
  //       "price" => 20000,
    
  // ];  
  /**
   * Нам необходимо инициировать запрос к серверу.
   * Воспользуемся библиотекой cURL (поставляется в составе PHP).
   * Вы также можете использовать и кроссплатформенную программу cURL, если вы не программируете на PHP.
   */
  $curl = curl_init(); //Сохраняем дескриптор сеанса cURL
  /** Устанавливаем необходимые опции для сеанса cURL  */
  curl_setopt($curl,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-oAuth-client/1.0');
  curl_setopt($curl,CURLOPT_URL, $link);
  curl_setopt($curl,CURLOPT_HTTPHEADER, $headers);
  curl_setopt($curl,CURLOPT_HEADER, false);
  curl_setopt($curl,CURLOPT_CUSTOMREQUEST, 'POST');
  curl_setopt($curl,CURLOPT_POSTFIELDS, json_encode($data));
  curl_setopt($curl,CURLOPT_SSL_VERIFYPEER, 1);
  curl_setopt($curl,CURLOPT_SSL_VERIFYHOST, 2);
  $out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
  $code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
  curl_close($curl);
  /** Теперь мы можем обработать ответ, полученный от сервера. Это пример. Вы можете обработать данные своим способом. */
  $code = (int)$code;
  // $errors = [
  //   400 => 'Bad request',
  //   401 => 'Unauthorized',
  //   403 => 'Forbidden',
  //   404 => 'Not found',
  //   500 => 'Internal server error',
  //   502 => 'Bad gateway',
  //   503 => 'Service unavailable',
  // ];

  // try
  // {
  //   /** Если код ответа не успешный - возвращаем сообщение об ошибке  */
  //   if ($code < 200 || $code > 204) {
  //     throw new Exception(isset($errors[$code]) ? $errors[$code] : 'Undefined error', $code);
  //   }
  // }

  // catch(\Exception $e)
  // {
  //   die('Ошибка: ' . $e->getMessage() . PHP_EOL . 'Код ошибки: ' . $e->getCode());
  // }
  var_dump($out);
}

function getRefreshToken($token){

  global $subdomain;

  $link = 'https://' . $subdomain . '.amocrm.ru/oauth2/access_token'; //Формируем URL для запроса

  /** Соберем данные для запроса */
  $data = [
    'client_id' => '8b9620fe-6b3f-43be-b787-d0da3d2d1050',
    'client_secret' => 'wSOVPn4LakRYmVxFtzX2TGvlj3lDy4yxRN2DwGn4j93PKzp3dYeUOBts8OBooIJw',
    'grant_type' => 'refresh_token',
    'refresh_token' => $token,
    'redirect_uri' => 'https://pro-policy.ru/',
  ];
  /**
   * Нам необходимо инициировать запрос к серверу.
   * Воспользуемся библиотекой cURL (поставляется в составе PHP).
   * Вы также можете использовать и кроссплатформенную программу cURL, если вы не программируете на PHP.
   */
  $curl = curl_init(); //Сохраняем дескриптор сеанса cURL
  /** Устанавливаем необходимые опции для сеанса cURL  */
  curl_setopt($curl,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-oAuth-client/1.0');
  curl_setopt($curl,CURLOPT_URL, $link);
  curl_setopt($curl,CURLOPT_HTTPHEADER,['Content-Type:application/json']);
  curl_setopt($curl,CURLOPT_HEADER, false);
  curl_setopt($curl,CURLOPT_CUSTOMREQUEST, 'POST');
  curl_setopt($curl,CURLOPT_POSTFIELDS, json_encode($data));
  curl_setopt($curl,CURLOPT_SSL_VERIFYPEER, 1);
  curl_setopt($curl,CURLOPT_SSL_VERIFYHOST, 2);
  $out = curl_exec($curl); //Инициируем запрос к API и сохраняем ответ в переменную
  $code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
  curl_close($curl);

  $code = (int)$code;
  var_dump($out);

  if ($code < 200 || $code > 204){
    return false;
  } else {
    return $out;
  }

  // try
  // {
  //   /** Если код ответа не успешный - возвращаем сообщение об ошибке  */
  //   if ($code < 200 || $code > 204) {
  //     echo $code;
  //   } else {
  //     return $out;
  //   }
  // }
  // catch(\Exception $e)
  // {
  //   die('Ошибка: ' . $e->getMessage() . PHP_EOL . 'Код ошибки: ' . $e->getCode());
  // }
  /**
   * Данные получаем в формате JSON, поэтому, для получения читаемых данных,
   * нам придётся перевести ответ в формат, понятный PHP
   */
  $response = json_decode($out, true);

  $access_token = $response['access_token']; //Access токен
  $refresh_token = $response['refresh_token']; //Refresh токен
  $token_type = $response['token_type']; //Тип токена
  $expires_in = $response['expires_in']; //Через сколько действие токена истекает
    // var_dump($response);
  return $out;
}
?>
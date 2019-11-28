<?php

namespace Utils;

class Twilio {

    private $sid = "AC24f1e25acbbfc8880a2fdec9dc914c11"; // Your Account SID from www.twilio.com/console
    private $token = "dd700d6f74530ad413b9777909f1b4e4"; // Your Auth Token from www.twilio.com/console

    private $client;

    public function __construct() {
        $this->client = new \Twilio\Rest\Client($this->sid, $this->token);
    }

    public function sendSMS($from, $body, $to) {
        $message = $this->client->messages->create(
            $to, // Text this number
            array(
              'from' => $from, // From a valid Twilio number
              'body' => $body
            )
        );
        return $message->sid;
    }

    public function sendWhatsAppSMS($from, $to, $body) {

        $message = $this->client->messages
                  ->create("whatsapp:" . $to, // to
                           array(
                               "from" => "whatsapp:" . $from,
                               "body" => $body
                           )
                  );
        return $message;
    }

}

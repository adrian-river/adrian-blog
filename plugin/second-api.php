<?php
/*
  Plugin Name: AdrianR api
  Plugin URI: https://adrianR.com/
  Description: firts api for my page
  Version: 1.0.0
  Author: AdrianR
  Author URI: https://adrianR.com/
  License: GPLv2 or later
  Text Domain: AdrianR
*/

add_action('rest_api_init', function() {
    register_rest_route('Adrian/v1', '/home/',
    [
    'methods' => 'GET',
    'callback' => 'main_fallout',
    ]);
    register_rest_route('Adrian/v1', '/home/games/',
    [
    'methods' => 'GET',
    'callback' => 'second_api_rest',
    ]);
});

function second_api_rest(WP_REST_Request $request){
    $object = new stdClass();
    $object->juego1 = 'Fallout';
    $object->juego2 = 'Metro';
    $object->juego3 = 'sid mejers civilization IV';
    $object->juego4 = 'Age of empire II';
    $object->juego5 = 'Juegos de estrategia/gestion de recursos';
    $object->juego6 = 'Rimworld';
    $object->juego7 = 'Kenshi';

    return $object;
}
?>
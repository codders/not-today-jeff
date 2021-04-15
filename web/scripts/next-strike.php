<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$nextStartDate = strtotime("next Wednesday");
$nextEndDate = strtotime("next Thursday");
$nextStart = date('Y-m-d H:i:s', $nextStartDate);
$nextEnd = date('Y-m-d H:i:s', $nextEndDate);
$onStrike = ($nextEndDate < $nextStartDate) ? true : false;
echo '{ "start": "' . $nextStart . '", "end": "' . $nextEnd . '", "onStrike": ' . ($onStrike ? "true" : "false" ) . ' }';
//echo '{ "start": "2020-01-01 01:01:01", "end": "' . $nextEnd . '", "onStrike": ' . ($onStrike ? "true" : "false" ) . ' }';

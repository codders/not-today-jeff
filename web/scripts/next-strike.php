<?php
header("Content-Type: application/json");

$nextStartDate = strtotime("next Wednesday");
$nextEndDate = strtotime("next Thursday");
$nextStart = date('Y-m-d H:i:s', $nextStartDate);
$nextEnd = date('Y-m-d H:i:s', $nextEndDate);
$onStrike = ($nextEndDate < $nextStartDate) ? true : false;
echo '{ "start": "' . $nextStart . '", "end": "' . $nextEnd . '", "onStrike": ' . ($onStrike ? "true" : "false" ) . ' }';
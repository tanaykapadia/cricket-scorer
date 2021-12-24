<?php
    $server = "localhost";
    $user = "id18123158_tanay_scoredb";
    $pass = "@Abcd12345678";
    $db = "id18123158_scoredb";
    $conn = new mysqli($server, $user, $pass, $db);
    $id = 1;
    $score = (int)$_GET["scoreValue"];
    $wickets = (int)$_GET["wicketsValue"];
    $overs = $_GET["oversValue"];
    $updatequery = "UPDATE liveScore SET score = '$score', wickets = '$wickets', overs = '$overs' WHERE id = '$id'";
    $uquery = mysqli_query($conn,$updatequery);
?>
<?php
    $server = "localhost";
    $user = "id18123158_tanay_scoredb";
    $pass = "@Abcd12345678";
    $db = "id18123158_scoredb";
    $conn = new mysqli($server, $user, $pass, $db);
    $query = "SELECT * FROM liveScore WHERE id=1";
    $results = mysqli_query($conn, $query);
    $result = $conn -> query($query);
    $row = $result -> fetch_assoc();
    $scoreArray = array("id"=>$row["id"], "score"=>$row["score"], "wickets"=>$row["wickets"], "overs"=>$row["overs"]);
    echo json_encode($scoreArray);
?>
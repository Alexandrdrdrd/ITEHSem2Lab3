<?php
  include "connection.php";
  $groups = $_GET['group'];
  $sqlSelect = $dbh->prepare("SELECT * FROM $db.GROUPS INNER JOIN $db.LESSON_GROUPS ON $db.GROUPS.ID_GROUPS = $db.LESSON_GROUPS.FID_GROUPS INNER JOIN $db.LESSON on $db.LESSON_GROUPS.FID_LESSON2 = $db.LESSON.ID_LESSON WHERE $db.GROUPS.TITLE = :groups");
  $sqlSelect->execute(array('groups' => $groups));
  echo "<table border ='1'>";
  echo "<tr><th>Group</th><th>Day</th><th>Number</th><th>Auditorium</th><th>Disciple</th><th>Type</th></tr>";
  while($cell=$sqlSelect->fetch()){
      echo "<tr><td>$cell[1]</td><td>$cell[5]</td><td>$cell[6]</td><td>$cell[7]</td><td>$cell[8]</td><td>$cell[9]</td></tr>";
  }
  echo "</table>";
?>
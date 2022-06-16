<!DOCTYPE HTML>
<html>
<head>
    <script src="js.js"></script>
</head>
<p> Вывести расписание занятий группы
    <select name="group" id="group">
        <option>Группа</option>
</p>
<?php
    include "connection.php";
    $sqlSelect = "SELECT DISTINCT * FROM $db.groups";
    foreach ($dbh->query($sqlSelect) as $cell) {
        echo "<option>";
        print($cell[1]);
        echo "</option>";
    }
?>
</select>
<button onclick="form1()">Ok</button>


<p>Вывести расписание преподавателя 
    <select name="teacher" id="teacher">
        <option>Преподаватели</option>
</p>
<?php
    $sqlSelect = "SELECT DISTINCT * FROM $db.teacher";
    foreach ($dbh->query($sqlSelect) as $cell) {
        echo "<option>";
        print($cell[1]);
        echo "</option>";
    } 
?>
</select>
<button onclick="form2()">Ok</button>

<p>Вывести расписание для аудитории
    <select name="auditorium" id="auditorium">
        <option>Аудитория</option>
</p>
<?php
$sqlSelect = "SELECT DISTINCT auditorium FROM $db.lesson";
    foreach ($dbh->query($sqlSelect) as $cell) {
        echo "<option>";
        print($cell[0]);
        echo "</option>";
    }
?>
</select>
<button onclick="form3()">Ok</button>
<p id="res"></p>
</body>

</html>
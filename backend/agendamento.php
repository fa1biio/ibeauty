<?php
require_once 'db.php';

if ($_POST) {
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $servico = $_POST['servico'];
    $data = $_POST['data'];
    $hora = $_POST['hora'];

    $sql = "INSERT INTO agendamentos (nome, telefone, servico, data, hora)
            VALUES (?, ?, ?, ?, ?)";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([$nome, $telefone, $servico, $data, $hora]);

    echo "Agendado com sucesso!";
}
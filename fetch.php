<?php
require 'db.php';

try {
    $stmt = $pdo->query('SELECT name, message, created_at FROM messages ORDER BY created_at DESC');
    $messages = $stmt->fetchAll();
    echo json_encode($messages);
} catch (PDOException $e) {
    echo json_encode([]);
}
?>

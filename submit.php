<?php
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $message = $_POST['message'];

    if (!empty($name) && !empty($message)) {
        try {
            $stmt = $pdo->prepare('INSERT INTO messages (name, message) VALUES (:name, :message)');
            $stmt->execute(['name' => $name, 'message' => $message]);
            echo json_encode(['success' => true]);
        } catch (PDOException $e) {
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    } else {
        echo json_encode(['success' => false, 'error' => 'All fields are required.']);
    }
}
?>

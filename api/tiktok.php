<?php
header('Content-Type: application/json');

// Mendapatkan data dari request
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['url'])) {
    $url = $data['url'];
    $apiUrl = "https://skizo.tech/api/tiktok?apikey=yaemiko&url=" . urlencode($url);

    // Mengambil data dari API TikTok
    $response = file_get_contents($apiUrl);
    echo $response;
} else {
    echo json_encode(['success' => false, 'message' => 'URL tidak valid']);
}

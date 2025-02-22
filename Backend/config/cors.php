<?php 

// config/cors.php
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Rotas que devem ter CORS habilitado
    'allowed_methods' => ['*'], // Métodos HTTP permitidos
    'allowed_origins' => ['http://localhost:3000'], // Domínios permitidos (frontend React)
    'allowed_origins_patterns' => [], // Padrões de domínios permitidos
    'allowed_headers' => ['*'], // Headers permitidos
    'exposed_headers' => [], // Headers expostos na resposta
    'max_age' => 0, // Tempo de cache do CORS (em segundos)
    'supports_credentials' => true, // Permite credenciais (cookies, sessões, etc.)
];
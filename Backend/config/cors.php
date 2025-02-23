<?php 
return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Certifique-se de que api/* está incluído
    'allowed_methods' => ['*'],
    'allowed_origins' => ['http://localhost:3000'], // Permitir React
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true, // **Define como true para permitir credenciais**
];

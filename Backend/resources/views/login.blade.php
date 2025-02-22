<!-- filepath: /C:/Users/claud/Documents/GitHub/Teste/Backend/resources/views/login.blade.php -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <!-- Usando Bootstrap para facilitar a estilização -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<div class="container mt-5">
   <div class="row justify-content-center">
      <div class="col-md-6">
         <div class="card">
            <div class="card-header text-center">
               Login
            </div>
            <div class="card-body">
               @if(session('success'))
                  <div class="alert alert-success">
                      {{ session('success') }}
                  </div>
               @endif

               @if($errors->any())
                  <div class="alert alert-danger">
                      <ul class="mb-0">
                          @foreach ($errors->all() as $error)
                              <li>{{ $error }}</li>
                          @endforeach
                      </ul>
                  </div>
               @endif

               <form action="{{ route('login') }}" method="POST">
                  @csrf
                  <div class="form-group">
                     <label for="Log_admin">Nome</label>
                     <input type="text" name="Log_admin" id="Log_admin" class="form-control" placeholder="Digite seu nome" required>
                  </div>
                  <div class="form-group">
                     <label for="Pass_admin">Senha</label>
                     <input type="password" name="Pass_admin" id="Pass_admin" class="form-control" placeholder="Digite sua senha" required>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Entrar</button>
               </form>
            </div>
         </div>
      </div>
   </div>
</div>
</body>
</html>
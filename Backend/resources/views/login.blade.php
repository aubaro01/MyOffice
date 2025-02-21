<form action="http://localhost:8000/api/login" method="POST">
    @csrf
    <input type="text" name="Log_admin" placeholder="Login">
    <input type="password" name="Pass_admin" placeholder="Senha">
    <button type="submit">Login</button>
</form>
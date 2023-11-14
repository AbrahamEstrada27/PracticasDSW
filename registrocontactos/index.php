<?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $bd = "registrocontactos";

    $conexion = mysqli_connect($servidor, $usuario, $clave, $bd)or die("PROBLEMAS DE CONEXIÓN");
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Registro Contactos</title>
</head>
<body>
    <form action="#" name="registrocontactos" method="post">

      <div class="card m-5 ">
        <h1 class="text-center">FORMULARIO</h1>
        <hr>
        <div class="card-body d-flex">
          <div class="input-group mb-3 m-3">
            <span class="input-group-text" id="basic-addon1">Nombre</span>
            <input type="text" class="form-control" placeholder="Nombre" name="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" required>
          </div>

          <div class="input-group mb-3 m-3">
            <span class="input-group-text" id="basic-addon1">Telefono</span>
            <input type="text" class="form-control" placeholder="Telefono" name="Telefono" aria-label="Telefono" aria-describedby="basic-addon1" required>
          </div>

          <div class="input-group mb-3 m-3">
            <span class="input-group-text" id="basic-addon1">Correo</span>
            <input type="mail" class="form-control" placeholder="Correo" name="Correo" aria-label="Correo" aria-describedby="basic-addon1" required>
          </div>

          <div class="input-group mb-3 m-3">
            <span class="input-group-text" id="basic-addon1">Comentarios</span>
            <input type="text" class="form-control" placeholder="Comentarios" name="Comentarios" aria-label="Comentarios" aria-describedby="basic-addon1" required>
          </div>  
        </div>

      </div>
      <center><button type="submit" name="registro" class="btn btn-success mt-1 w-25 text-center m-5">Success</button></center>


    </form>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>
<?php
    if(isset($_POST['registro'])){
        $nombre = $_POST['Nombre'];
        $telefono = $_POST['Telefono'];
        $correo = $_POST['Correo'];
        $comentarios = $_POST['Comentarios'];

        $sql = "INSERT INTO contacto(Nombre, Telefono, Correo, Comentarios) VALUES ('$nombre', '$telefono', '$correo', '$comentarios')";

        $ejecutar = mysqli_query($conexion, $sql);
    }

?>
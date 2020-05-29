<!DOCTYPE html>
<html lang="es">
	<head>
		<title>Estados || Municipios</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1">
		<script src="https://kit.fontawesome.com/1f8614daef.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
	</head>
    <body>
        <form class="form-estados" id="form-estados">
            <h1 class="title__form-estados">Selecciona tu estado y municipio</h1>
            <label for="estado" class="etiqueta__form-estados">Estado :</label>
            <div class="cont__form-estados select">
                <select id="estado" name="estado" class="select__form-estados">
                    <option disabled selected>Selecciona tu estado</option>
                </select>
                <span class="icon__form-estados"><i class="fas fa-chevron-down"></i></i></span>
            </div>
            <label for="municipio" class="etiqueta__form-estados">Delegación o Municipio :</label>
            <div class="cont__form-estados select">
                <select id="municipio" name="municipio" class="select__form-estados">
                    <option disabled selected>Selecciona tu municipio</option>
                    <optgroup id="input-municipio"></optgroup>
                </select>
                <span class="icon__form-estados"><i class="fas fa-chevron-down"></i></span>
            </div>
            <label for="enviar" class="btn__form-estados">Enviar</label>
            <input type="submit" id="enviar">
        </form>
        <script src="js/edos.js"></script>
    </body>   
</html>
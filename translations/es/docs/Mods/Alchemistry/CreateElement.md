# Crear elemento
Creación de elementos personalizados para la alquimia

# Paquete
`mods.alchemistry.Util.createElementUtil.createElement`
## Cargador
Esto debe cargarse con `#loader alchemistry`

## Metodos
- **int atomicNumber** ID para el nuevo elemento
- **Nombre de cadena** Nuevo nombre de elementos
- **Abrebiación de cadenas** Abrebiación de nuevos elementos
- **** Elemento rojo sombreado, RGB
- **int verde** Elemento sombreado verde, RGB
- **int. azul** Elemento azul sombreado, RGB

## Creación
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Util.createElement(int atomicNumber, String name, String abbreviation, int red, int green, int blue);

mods.alchemistry.Util.createElement(150,"vibranium","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);Util.createElement(150,"vibranio","Vrb", 70, 90, 250);
mods.alchemistry.Util.createElement(151,"unobtanium","Uno",30,54,69);
```

## Notas

- Por favor use nombres en minúsculas
- Los números atómicos preexistentes no se pueden sobrescribir
- La línea '#loader alchemistry' es necesaria en la parte superior del archivo. Este archivo sólo puede ser usado para crear elementos y compuestos, otras recetas deben ser puestas en otros archivos.
- NOTA: A partir de la v1.0.2, El Mod Resource Loader debe ser utilizado para incluir la imagen y modelo json para elementos personalizados. Si desea generar estos recursos automáticamente, he creado un programa JAR de línea de comandos [aquí](https://github.com/al132mc/alchemistry-resource-creator/releases) para hacerlo.

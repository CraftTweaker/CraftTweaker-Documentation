# Crear compuesto
Generación de compuestos de alquimia personalizada

# Paquete
```zenscript
mods.alchemistry.Util.createCompoundUtiliza.crearCompuesto
```

## Cargador
Esto debe cargarse con `#loader alchemistry`

## Metodos
- **int meta** meta para nuevo Compund
- **Nombre de la cadena** Nombre para el nuevo Compund
- **intar rojo** sombra roja, RGB
- **int verde** compuesto sombreado verde, RGB
- **int azul** compuesto por sombra azul, RGB
- **Object[][]** Cada Bracket contiene un elemento diferente seguido por una coma y la cantidad a usar en su Compuesto

## Creación
```zenscript
mods.alchemistry.Atomizermods.alchemistry.Util.createCompound(int meta, String name, int red, int green, int blue, Object[][] components);

mods.alchemistry.Util.createCompound(1000, "vibranium sufide", 20, 69, 185,
[["vibranium", 1],
 ["sulfur", 3]]);Util.createCompound(1000, "sufide vibranio", 20, 69, 185,
[["vibranium", 1],
 ["sulfur", 3]]);
```

## Notas
- Por favor use nombres en minúsculas
- La línea '#loader alchemistry' es necesaria en la parte superior del archivo. Este archivo sólo puede ser usado para crear elementos y compuestos, otras recetas deben ser puestas en otros archivos.
- El campo componentes requiere que cada entrada sea una matriz como ["celulose", 5], indicando el elemento/compuesto y su cantidad. Los argumentos de cadena se utilizan aquí en lugar de las pilas de elementos como una forma de asegurar que sólo se usen elementos/compuestos.
- El campo meta es requerido para asegurarse de que sus nuevos compuestos tienen un identificador inalterable incluso cuando se crean o eliminan otros compuestos. Cada compuesto debe tener un valor meta único. En el momento de escribir esto, el mod sólo utiliza los valores meta de aproximadamente 0 a 35, pero empiezo a numerar tu meta a 1000 (como visto arriba) o superior para asegurar que tus combinaciones personalizadas nunca chocan con las recetas internas de Alchemistry

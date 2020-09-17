### Clase

```zenscript
importar mods.roots.Fey;
```

#### Métodos

```zenscript
void addRecipe(
  nombre de cadena, // el nombre de la receta; si sustituye una receta existente, asegúrate de usar el mismo nombre para asegurar la continuidad de Patchouli
  Salida de ItemStack, // la pila de artículos producida por esta receta
  entradas IIngredient[] // una matriz de IIngredients que componen la receta; debe contener 5 elementos
);
```

* * *

```zenscript
void addRecipe(
  nombre de cadena, // el nombre de la receta; si sustituye una receta existente, asegúrate de usar el mismo nombre para asegurar la continuidad de Patchouli
  Salida de ItemStack, // la pila de artículos producida por esta receta
  entradas IIngredient[], // una matriz de IIngredients que componen la receta; debe contener 5 objetos
  int xp // la cantidad de xp (en niveles) para recompensar al jugador por fabricar esta receta
);
```

* * *

```zenscript
vacía removeRecipe(
  ItemStack output // el artículo producido por la receta que desea eliminar
);
```

* * *

### Ejemplos

```zenscript
import mods.roots.Fey;

// Añade una receta para TNT usando 4 pólvora y lana roja
Pierde. ddRecipe("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:wool:14>]);

// Añade la receta anterior pero también otorga al jugador 6 niveles (de 0-6 relativamente) cada vez que se fabrica
Fey. ddReceta("tnt", <minecraft:tnt>, [<minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder>, <minecraft:gunpowder> , <minecraft:gunpowder>, <minecraft:wool:14>], 6);

// Elimina la receta del hacha viviente
Pies. emoveRecipe(<roots:living_axe>);

// Añade una receta diferente para el hacha viva, usando el mismo nombre, para asegurar que aparezca en Patchouli. Por defecto, todos los nombres de las recetas de Fabricación de Fey son los mismos que el nombre del registro del artículo.
Fey.addRecipe("living_axe", <roots:living_axe>, [<minecraft:sand>, <minecraft:dirt>, <minecraft:stone>, <minecraft:glass>, <minecraft:stone_axe>]);
```

### Notas

Es importante para la continuidad de Patchouli que, si eliminas una receta predeterminada (digamos `living_axe`), que lo reemplaces por otra receta y le das a esa receta el nombre `"living_axe"` si deseas que Patchouli muestre correctamente la nueva receta.
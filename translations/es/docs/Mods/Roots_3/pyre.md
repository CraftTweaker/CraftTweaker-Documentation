### Clase

```zenscript
importar mods.roots.Pyre;
```

#### Métodos

```zenscript
void addRecipe(
  nombre de cadena, // el nombre de la receta que se está agregando; si se sustituye una receta de juego existente, asegúrese de que el nombre correcto es utilizado
  Salida de ItemStack, // la salida de esta receta
  IIngredient[] entradas // una lista de cinco ingredientes (no más, ni menos)
);
```

* * *

```zenscript
void addRecipe(
  nombre de cadena, // el nombre de la receta que se está agregando; si se sustituye una receta de juego existente, asegúrese de que el nombre correcto es utilizado
  Salida de ItemStack, // la salida de esta receta
  entradas de IIngredient[], // una lista de cinco ingredientes
  int xp // la cantidad de xp en niveles que se concede después de la elaboración
);
```

* * *

```zenscript
vacía removeRecipe(
  Salida de ItemStack // la salida de la receta para eliminar
);
```

* * *

### Ejemplos

```zenscript
import mods.roots.Pyre;

// Elimina la receta para estalicmadura; ten en cuenta que la cantidad no se considera
// al comprobar si la receta coincide.
Pyre.removeRecipe(<roots:stalicripe>);

// Re-agrega el estalicripe usando una receta adicional que no otorga XP,
// pero con una salida considerablemente mayor
Pyre. ddRecipe("estalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:emerald_block>, <minecraft:deadbush>]);

// Como arriba, pero recompensando 30 niveles de experiencia (calculado a partir del nivel 0)
Pire. ddRecipe("estalicripe", <roots:stalicripe>*64, [<minecraft:diamond_block>, <minecraft:gold_block>, <minecraft:iron_block>, <minecraft:iron_block> , <minecraft:emerald_block>, <minecraft:deadbush>], 30);
```

### Notas

Es extremadamente importante al reemplazar las recetas para asegurar que el nombre de la receta sea el mismo para asegurarse de que Patchouli reporta correctamente la receta correcta para fabricar los objetos básicos.

Para todos los demás objetos, por favor usa un nombre que describe lo que hace tu receta.
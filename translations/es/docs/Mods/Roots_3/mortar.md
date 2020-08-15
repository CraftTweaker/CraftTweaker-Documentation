### Clase

```zenscript
importar mods.roots.Mortar;
```

#### Métodos

```zenscript
anular añadir receta (
  Salida de ItemStack, // la salida del objeto de esta receta
  entradas IIngredient[] // un conjunto de ingredientes que es 5 largo o 1 largo
);
```

* * *

```zenscript
anular cambioSpell(
  nombre ortografía de la cadena, // el nombre del hechizo como en el registro de hechizos
  IIngredient[] introduce // un arreglo de 5 artículos que son los nuevos ingredientes de la receta
);
```

* * *

```zenscript
vacía removeRecipe(
  ItemStack output // la pila de artículos producida por la receta
);
```

* * *

### Ejemplos

```zenscript
importar mods.roots. ortar;

// Añade una receta que hace pólvora de pedernal
// Como la receta solo tiene una entrada, automáticamente
// generará 5 recetas, aumentando el número de entradas y
// la cantidad de la salida respectivamente.
Mortar.addRecipe(<minecraft:gunpowder>, [<minecraft:flint>]);

// Esta receta utiliza cinco ingredientes para crear una cama.
Mortero. ddRecipe(<minecraft:bed>, [<minecraft:wool>, <minecraft:wool>, <minecraft:planks>, <minecraft:planks>, <minecraft:planks>]);

// Esto eliminará todas las recetas que tienen la harina de la raíz como salida
// incluyendo cualquier receta de múltiples ingredientes
Mortar. emoveRecipe(<roots:flour>);

// Esto cambiará la receta para el hechizo de suplicación del bosque a
// simplemente requiere cinco piezas de azúcar.
Mortar.changeSpell("spell_supplication", [<minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>, <minecraft:sugar>]);
```
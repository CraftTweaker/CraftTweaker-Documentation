# Mortero

## Adicional

```zenscript
import mods.cuisine.Mortar;

// El tercer parámetro 'step' significa "cuántas veces necesita para bajar la pestaña"
Mortar. dd(ItemStack[] entradas, salida ItemStack, paso int);

Mortar.add([<item:minecraft:dirt>, <item:minecraft:cobblestone>], <item:minecraft:diamond>, 3);
```

## Eliminar

```zenscript
import mods.cuisine.Mortar;

// Quitar por entrada.
Mortar.remove(IItemStack[] input);

Mortar.remove([<item:minecraft:dirt>, <item:minecraft:cobblestone>]);

// Eliminar por salida.
Mortar.removeByOutput(salida IIngrediente);

Mortar.removeByOutput(<item:minecraft:diamond>);
Mortar.removeByOutput(<ore:gemDiamond>);

// Eliminar por identificador.
Mortar.remove(String id);

Mortar.remove("recipe_name");

// ¡Elimina todo!
Mártar.removeTo();
```
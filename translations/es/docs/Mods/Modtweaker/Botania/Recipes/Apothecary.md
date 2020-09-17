# Apóstol gaseoso

El paquete de portafolio se utiliza para añadir o quitar recetas para/de Botania Petal aprovecary.

## Llamando

Puedes llamar al paquete de portafolio usando `mods.botania.Scotthecary`

## Añadir receta

Puedes añadir recetas usando el [ItemStack](/Vanilla/Items/IItemStack/) devuelto como parámetro de salida, o el nombre de la flor de botania como cadena. el nombre de la cuerda sólo funciona para las flores de botania.  
Recuerda una cosa, sin embargo:  
El portafolio es **hardcoded para aceptar solo mascotas**, así que mientras puedas añadir recetas con cualquier ingrediente, solo deberías usar objetos que puedas lanzar en el apoteador.

```zenscript
//mods.botania.Withthecary.addRecipe(salida IItemStack, IIngredient[] entrada);
mods.botania.s3.amazonaws.com/thecary.addRecipe(<minecraft:melon>, [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>]);

//mods. otania.Withthecary.addRecipe(String output, IIngredient[] input);
mods.botania.Withthecary.addRecipe("daybloom", [<ore:petalLime>, <ore:petalLime>, <ore:petalLime>, <ore:petalRed>]);
```

## Eliminación de receta

Puede eliminar las recetas usando el [ItemStack](/Vanilla/Items/IItemStack/) devuelto como parámetro de salida, o el nombre de la flor de botania como cadena. el nombre de la cuerda sólo funciona para las flores de botania.

```zenscript
//mods.botania.s3.amazonaws.com/thecary.removeRecipe(salida IItemStack);
mods.botania.s3.amazonaws.com/thecary.removeRecipe(<minecraft:melon>);

//mods.botania.s3.amazonaws.com/thecary.removeRecipe(String output);
mods.botania.s3.amazonaws.com/thecary.removeRecipe("daybloom");
```
# Caldero

El paquete de caldero se utiliza para añadir o quitar recetas para el caldero. Ten en cuenta que si el caldero está establecido en `simple` en la configuración, sólo las recetas que utilizan agua podrán ser elaboradas pero todas las recetas se seguirán mostrando en JEI.

## Llamando

Puedes llamar al paquete Cauldron usando `mods.inspirations.Cauldron`

## Fluidos

Las inspiraciones presentan tres tipos de recetas utilizando fluidos: las que transforman un objeto usando un fluido, para transformar un fluido usando un ítem, y uno para añadir un relleno con un líquido usando un ítem. Mientras todos los manipuladores toman una pila de fluidos, sólo el tipo de fluido afectará a la receta. Las calderas de inspiración utilizan el sistema de vainilla de tres botellas en un caldero, por lo que las cantidades se manejan en otro parámetro.

### Añadir fluido

Añade una receta que convierte el objeto de entrada al objeto de salida usando el fluido.

* El objeto de entrada soporta tamaños de pila para requerir que la pila sostenida sea de cierto tamaño.
* Los niveles determinan cuántos niveles se consumen por la receta. Soporta 0-3, por defecto a 1
* La bobina determina si el caldero debe ser colocado sobre el fuego para la receta. Puede ser cierto para requerirlo, falso para requerir no tener fuego, o null (predeterminado) para ignorarlo.

```zenscript
//mods.inspirations.Cauldron.addFluidRecipe(salida ItemStack, entrada IIngrediente, fluido ILiquidStack, niveles @niveles de int opcionales, @Hircuito booleano opcional);
mods.inspirations. auldron.addFluidRecipe(<minecraft:blaze_rod>, <minecraft:blaze_powder> * 2, <liquid:lava>);
mods.inspirations.Cauldron.addFluidRecipe(<minecraft:water_bucket>, <minecraft:ice>, <liquid:lava>, 1, true);
```

### Eliminar fluidos

Elimina una receta de líquido existente del caldero.

```zenscript
//mods.inspirations.Cauldron.removeFluidRecipe(salida IIngrediente, @Optional IIngredient input, @Optional ILiquidStack fluid)
mods.inspirations.Cauldron.removeFluidRecipe(<minecraft:beetroot_soup>);
```

### Añadir transformación de fluidos

Añade una receta que convierte el fluido al fluido de salida usando el objeto.

* El objeto de entrada soporta tamaños de pila para requerir que la pila sostenida sea de cierto tamaño.
* El nivel máximo determina la cantidad máxima de fluido permitida para esta transformación. Utilizado para permitir que las recetas tengan una versión más barata si la caldera contiene menos líquido.
* La bobina determina si el caldero debe ser colocado sobre el fuego para la receta. Puede ser cierto para requerirlo, falso para requerir no tener fuego, o null (predeterminado) para ignorarlo.

```zenscript
//mods.inspirations.Cauldron.addFluidTransform(salida ILiquidStack, entrada IIngrediente, líquidStack fluido, @Optional int maxLevels, @Optional boolean booleee);
mods.inspirations.Cauldron.addFluidTransform(<liquid:lava>, <minecraft:blaze_powder>, <liquid:water>, 2, false);
```

### Eliminación de transformación de fluidos

Elimina una receta de transformación de líquido existente del caldero. La salida es `IIngrediente` pero solo soporta una pila de fluidos o comodín.

```zenscript
//mods.inspirations.Cauldron.removeFluidTransform(salida IIngrediente, [entrada IIngrediente, [fluido IFluidStack]]);
mods.inspirations.Cauldron.removeFluidTransform(<liquid:beetroot_soup>, <minecraft:beetroot>, <liquid:water>);
```

### Añadir receta

Añade una receta que llena el caldero con el fluido proporcionado.

* El objeto de entrada soporta tamaños de pila para requerir que la pila sostenida sea de cierto tamaño.
* Los niveles determinan cuánto llena la receta la caldera. Por defecto es 1 si no se proporciona.
* El contenedor determina el objeto devuelto después de realizar esta receta. Si no se proporciona ninguna, el valor predeterminado es nulo.

```zenscript
//mods.inspirations.Cauldron.addFillRecipe(entrada IIngredient, ILiquidStack fluid, @Optional int levels, @Optional ItemStack container);
mods.inspirations.Cauldron.addFillRecipe(<ore:gemDiamond>, <liquid:water>, 2, <minecraft:emerald>);
mods.inspirations.Cauldron.addFillRecipe(<minecraft:emerald>, <liquid:lava>);
```

### Llenar eliminación de recetas

Elimina una receta de llenado existente del caldero.

```zenscript
//mods.inspirations.Cauldron.removeFillRecipe(entrada IIngredient, @Optional ILiquidStack fluid);
mods.inspirations.Cauldron.removeFillRecipe(<minecraft:beetroot_soup>);
mods.inspirations.Cauldron.removeFillRecipe(<*>, <liquid:mushroom_stew>);
```

## Pociones y Pociones

Las inspiraciones incluyen dos tipos de recetas de poción usando pociones: recetas de elaboración que cambian una poción de un tipo a otro. y recetas de poción que cambian un objeto usando una poción.

Puesto que las recetas toman `Poción tipo`'s en lugar de `Poción`directamente, los parámetros de la poción son cadenas. Se puede obtener una lista de todos los tipos de pociones usando el comando `/ct inspirations potions`.

### Añadido de cerveza

Añade una receta convirtiendo la poción de entrada a la poción de salida usando el reagente.

```zenscript
//mods.inspirations.Cauldron.addBrewingRecipe(String output, String input, IIngredient reagent);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:invisibility", "minecraft:thick", <minecraft:diamond>);
mods.inspirations.Cauldron.addBrewingRecipe("minecraft:healing", "minecraft:thick", <ore:gemEmerald>);
```

### Eliminación de la elaboración

Elimina una receta de elaboración del caldero. Tanto la entrada como la salida pueden establecerse en null para actuar como comodín.

```zenscript
//mods.inspirations.Cauldron.removeBrewingRecipe(String output, @Optional String input, @Optional IIngredient reagent);
mods.inspirations.Cauldron.removeBrewingRecipe("inspirations:haste");
mods.inspirations.Cauldron.removeBrewingRecipe("minecraft:awkward", "minecraft:water", <minecraft:nether_wart>);
```

### Añadir receta de poción

Añade una receta que convierte el objeto de entrada al objeto de salida usando la poción.

* Los niveles determinan cuántos niveles se consumen por la receta. Soporta 0-3, por defecto a 1
* La bobina determina si el caldero debe ser colocado sobre el fuego para la receta. Puede ser cierto para requerirlo, falso para requerir no tener fuego, o null (predeterminado) para ignorarlo.

```zenscript
//mods.inspirations.Cauldron.addPotionRecipe(salida ItemStack, entrada IIngrediente, poción de cadena, @niveles de int opcionales, @booleana opcional);
mods.inspirations.Cauldron.addPotionRecipe(<minecraft:golden_apple>, <minecraft:apple>, "minecraft:regeneration", 2); 
```

### Quitar receta de poción

Elimina una receta de poción existente del caldero. Por defecto no existen recetas de poción, pero los addons pueden añadir una receta.

```zenscript
//mods.inspirations.Cauldron.removePotionRecipe(IIngredient output, @Optional IIngredient input, @Optional String potion);
```

## Tintes

Las inspiraciones tienen un solo tipo de receta de tinte para transformar un objeto usando un tinte. Las recetas de tinte toman un color de cadena que representa un valor de `EnumDyeColor`. Para obtener una lista de todos los valores, se proporciona el comando `/ct inspirations dyes`.

### Agregando

Añade una receta que convierte la entrada a la salida usando el tinte consumiendo un solo nivel de agua teñida.

```zenscript
//mods.inspirations.Cauldron.addDyeRecipe(salida ItemStack, entrada IIngredient, tintura de cuerda);
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:diamond>, <minecraft:emerald>, "azul");
mods.inspirations.Cauldron.addDyeRecipe(<minecraft:emerald>, <minecraft:diamond>, "lime");
```

### Eliminar

Elimina una receta de tinte existente del caldero.

```zenscript
//mods.inspirations.Cauldron.removeDyeRecipe(salida IIngredient, @Optional IIngredient input, @Optional String tine)
mods.inspirations.Cauldron.removeDyeRecipe(<*>, <*>, "blue");
mods.inspirations.Cauldron.removeDyeRecipe(<inspirations:carpeted_trapdoor_white>);
```
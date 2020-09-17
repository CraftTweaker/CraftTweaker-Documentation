# Primer receta

Un objeto de receta es la receta actual. Puedes obtener tal objeto del [RecipeBuilder](/Mods/ModularMachinery/Recipes/RecipeBuilder/) y usar sus métodos para dar realmente las recetas y cosas a la receta.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar mods.modularmachinery.RecipePrimer;`

## Métodos

Cada uno de estos métodos hace dos cosas: en primer lugar, modifica el objeto, luego devuelve el objeto en sí mismo (como otra receta Primer).  
Esto significa que puede llamar a cada método por sí mismo o haga una llamada donde añada cada pieza de código (ejemplo a continuación).

### Establecer la oportunidad

```zenscript
setChance(oportunidad flotante);
```

### Añadiendo requisitos de energía y combustible

```zenscript
addEnergyPerTickInput(int perTick);
addEnergyPerTickOutput(int perTick);


//Typo? Esto es lo que el código fuente sais, si no funciona prueba Entrada
addFuelItemInout(int requiredTotalBurnTime);
```

### Agregando entradas

Puedes añadir [ItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) o [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) como entrada.

```zenscript
addItemInput(IItemStack stack);

addItemInput(IOreDictEntry oreDict);
addItemInput(IOreDictEntry oreDict, int amount);


addFluidInput(ILiquidStack stack);
```

### Adding outputs

Puedes añadir [ItemStacks](/Vanilla/Items/IItemStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) o [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) como salida.

```zenscript
addItemOutput(ItemStack stack);

addItemOutput(IOreDictEntry oreDict);
addItemOutput(IOreDictEntry oreDict, int amount);


addFluidOutput(ILiquidStack stack);
```

### Construyendo la receta

Después de haber hecho los cambios anteriores, necesitas construir la receta para que realmente haga algo.

```zenscript
build();
```

## Ejemplo

Puedes llamar a cada método por sí solo, o jugar al codegolf:

```zenscript
val reci = mods.modularmachinery.RecipeBuilder.newBuilder("recipeRegistryName", "associatedMachineRegistryName", 1000, 0);

reci.addEnergyPerTickInput(100);
reci.addItemInput(<ore:ingotIron>);
reci.addItemOutput(<minecraft:gold_ingot>);
reci. uild();



val rec = mods.modularmachinery.RecipeBuilder.newBuilder("anotherRecipeRegistryName", "associatedMachineRegistryName", 1000, 0);
rec.addEnergyPerTickInput(100).addFluidInput(<liquid:water> * 1000).addFluidInput(<liquid:lava> * 1000).addItemOutput(<minecraft:obsidian> * 2).build();
```
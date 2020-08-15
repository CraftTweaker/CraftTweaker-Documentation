# Refinería

## Paquete

`mods.thermalexpansion.Refinery`

## Añadir una receta

`Refinery.addRecipe(output, outputItem, input, energy);`

- `salida` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `outputItem` <[WeightedItemStack](/Vanilla/Items/WeightedItemStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
importar mods.thermalexpansion.Refinery;

// Agrega una receta que produce 1mB de lava y un diamante (con una probabilidad del 100%) por 1mB de agua
Refinería. ddReceta(<liquid:lava>, <minecraft:diamond>, <liquid:water>, 50);

// Añade una receta que produce 5mB de lava y un diamante (en una oportunidad del 1%) por 100mB de agua
Refinería. ddReceta(<liquid:lava> * 5, <minecraft:diamond> % 1, <liquid:water> * 100, 50);
```

### Añadir una receta de poción

Añade una receta para ser usada con la Aumentación de Retorno Alquímico

`Refinery.addRecipePotion(salida, entrada, energía);`

- `salida` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.addRecipePotion(<liquid:potion>.withTag({Potion: "minecraft:mundane"}) * 500, <liquid:potion>.withTag({Potion: "cofhcore:baping4"}) * 100, 100);
```

## Eliminando una receta

`Refinery.removeRecipe(entrada);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipe(<liquid:resin>);
```

### Eliminar una receta de poción

`Refinery.removeRecipePotion(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipePotion(<liquid:potion_lingering>.withTag({Potion: "cofhcore:healing3"}));
```
# Metal Press

The Metal Press package can be used to add/remove recipes to/from the Immersive Engineering Metal Press.

## Calling The Package

You can call the MetalPress package using `mods.immersiveengineering.MetalPress`.

## Rezept hinzufügen

| Required | Type       | Datentyp                                            |
| -------- | ---------- | --------------------------------------------------- |
| Required | Output     | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Required | Input      | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Required | Mold       | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Required | Energy     | Integer                                             |
| Required | Input Size | Integer                                             |

### Beispiel

```JAVA
//Example:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Remove Recipe

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```JAVA
//Example:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Remove By Mold

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```JAVA
//Example:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```
# Metal Press

The Metal Press package can be used to add/remove recipes to/from the Immersive Engineering Metal Press.

## Hinzufügen des Packages

You can call the MetalPress package using `mods.immersiveengineering.MetalPress`.

## Rezept hinzufügen

| Benötigt | Type       | Datentyp                                            |
| -------- | ---------- | --------------------------------------------------- |
| Benötigt | Output     | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Input      | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Mold       | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Energy     | Integer                                             |
| Benötigt | Input Size | Integer                                             |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.MetalPress.addRecipe(IItemStack output, IIngredient input, IItemStack mold, int energy, @Optional int inputSize);

mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000);
mods.immersiveengineering.MetalPress.addRecipe(<minecraft:diamond>, <ore:logWood>, <minecraft:emerald>, 2000, 16);
```

## Rezept entfernen

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipe(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipe(<minecraft:diamond>);
```

## Remove By Mold

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.MetalPress.removeRecipeByMold(IItemstack output);

mods.immersiveengineering.MetalPress.removeRecipeByMold(<minecraft:diamond>);
```
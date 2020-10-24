# Alloy Smelter

The Alloy Smelter package can be used to add/remove recipes to/from the Immersive Engineering Alloy Smelter.

## Hinzufügen des Packages

You can call the AlloySmelter package using `mods.immersiveengineering.AlloySmelter`

## Rezept hinzufügen

| Benötigt | Type    | Datentyp                                            |
| -------- | ------- | --------------------------------------------------- |
| Benötigt | Output  | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Input 1 | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Input 2 | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Time    | Integer                                             |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient first, IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## Rezept entfernen

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```
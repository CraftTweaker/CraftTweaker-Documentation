# Legierungsschmelzer

Das Silberschmelzpaket kann verwendet werden, um Rezepte zum Immersive Ingenieurschmelzer hinzuzufügen/zu entfernen.

## Hinzufügen des Packages

Sie können das AlloySmelter-Paket mit `mods.immersiveengineering.AlloySmelter` aufrufen.

## Rezept hinzufügen

| Benötigt | Type    | Datentyp                                            |
| -------- | ------- | --------------------------------------------------- |
| Benötigt | Output  | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Input 1 | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Input 2 | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Time    | Integer                                             |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.AlloySmelter.addRecipe(IItemStack output, IIngredient first IIngredient second, int time);
mods.immersiveengineering.AlloySmelter.addRecipe(<minecraft:diamond>, <ore:ingotIron>, <minecraft:dirt>, 2000);
```

## Rezept entfernen

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.AlloySmelter.removeRecipe(IItemstack output);
mods.immersiveengineering.AlloySmelter.removeRecipe(<minecraft:diamond>);
```
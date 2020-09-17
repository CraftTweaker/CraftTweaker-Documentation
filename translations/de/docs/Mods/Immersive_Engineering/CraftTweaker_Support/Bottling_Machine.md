# Flaschenmaschine

## Hinzufügen des Packages

Sie können das Paket BottlingMachine mit `mods.immersiveengineering.BottlingMachine` anrufen.

## Rezept hinzufügen

| Benötigt | Type        | Datentyp                                            |
| -------- | ----------- | --------------------------------------------------- |
| Benötigt | Output      | [IItemstack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Input       | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Flüssigkeit | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.BottlingMachine.addRecipe(IItemStack Output, IIngredient Input, ILiquidStack Fluid);
mods.immersiveengineering.BottlingMachine.addRecipe(<minecraft:diamond>, <ore:logWood>, <liquid:water>);
```

## Rezept entfernen

| Type   | Datentyp                                 |
| ------ | ---------------------------------------- |
| Output | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.BottlingMachine.removeRecipe(IItemStack output);
mods.immersiveengineering.BottlingMachine.removeRecipe(<minecraft:diamond>);
```
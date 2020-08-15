# Druckmaschine

Mit dem Squeezer Paket können Rezepte zum Immersive Engineering Squeezer hinzugefügt bzw. entfernt werden.

## Hinzufügen des Packages

Sie können das Squeezer Paket mit `mods.immersiveengineering.Squeezer` aufrufen.

## Rezept hinzufügen

| Benötigt | Type        | Datentyp                                            |
| -------- | ----------- | --------------------------------------------------- |
| Benötigt | Output      | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Flüssigkeit | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| Benötigt | Input       | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Energie     | Integer                                             |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Squeezer.addRecipe(IItemStack output, ILiquidStack fluid, IIngredient input, int energy);

mods.immersiveengineering.Squeezer.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Flüssigkeitsrezept entfernen

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Squeezer.removeFluidRecipe(ILiquidStack Fluid);

mods.immersiveengineering.Squeezer.removeFluidRecipe(<liquid:water>);
```

## Rezept entfernen

| Type    | Datentyp                                 |
| ------- | ---------------------------------------- |
| Ausgang | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Squeezer.removeItemRecipe(IItemStack stack);

mods.immersiveengineering.Squeezer.removeItemRecipe(<minecraft:diamond>);
```

## Nach Eingabe entfernen

| Type    | Datentyp                                 |
| ------- | ---------------------------------------- |
| Ausgang | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Squeezer.removeByInput(IItemStack stack);

mods.immersiveengineering.Squeezer.removeByInput(<minecraft:log>);
```
# Fermenter

Mit dem Fermenter-Paket können Rezepte zum Immersive Engineering Fermenter hinzugefügt bzw. entfernt werden.

## Hinzufügen des Packages

Sie können das Fermenter-Paket mit `mods.immersiveengineering.Fermenter` aufrufen.

## Rezept hinzufügen

| Benötigt | Type        | Datentyp                                            |
| -------- | ----------- | --------------------------------------------------- |
| Benötigt | Output      | [IItemStack](/Vanilla/Items/IItemStack/)            |
| Benötigt | Flüssigkeit | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)        |
| Benötigt | Input       | [IIngredient](/Vanilla/Variable_Types/IIngredient/) |
| Benötigt | Energie     | Integer                                             |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.addRecipe(IItemStack Ausgabe, ILiquidStack Flüssigkeit, IIngredient Eingabe, Int Energie);
mods.immersiveengineering.Fermenter.addRecipe(<minecraft:diamond>, <liquid:water>, <ore:logWood>, 2048);
```

## Flüssigkeitsrezept entfernen

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.removeFluidRecipe(ILiquidStack Fluid);
mods.immersiveengineering.Fermenter.removeFluidRecipe(<liquid:water>);
```

## Rezept entfernen

| Type    | Datentyp                                 |
| ------- | ---------------------------------------- |
| Ausgang | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.removeItemRecipe(IItemstack Ausgabe);
mods.immersiveengineering.Fermenter.removeItemRecipe(<minecraft:diamond>);
```

## Nach Eingabe entfernen

| Type    | Datentyp                                 |
| ------- | ---------------------------------------- |
| Ausgang | [IItemstack](/Vanilla/Items/IItemStack/) |

### Beispiel

```zenscript
mods.immersiveengineering.Fermenter.removeByInput(IItemstack input);
mods.immersiveengineering.Fermenter.removeByInput(<minecraft:diamond>);
```
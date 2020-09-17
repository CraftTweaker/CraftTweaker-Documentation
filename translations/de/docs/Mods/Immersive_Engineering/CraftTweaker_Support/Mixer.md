# Mixer

Mit dem Mixer-Paket können Rezepte zum Immersive Engineering Mixer hinzugefügt bzw. entfernt werden.

## Hinzufügen des Packages

Sie können das Mixer-Paket mit `mods.immersiveengineering.Mixer` aufrufen.

## Rezept hinzufügen

| Benötigt | Type                | Datentyp                                                      |
| -------- | ------------------- | ------------------------------------------------------------- |
| Benötigt | Flüssigkeitsausgabe | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                  |
| Benötigt | Fluid Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                  |
| Benötigt | Item Inputs         | [IIngredient](/Vanilla/Variable_Types/IIngredient/) als Array |
| Benötigt | Energie             | Integer                                                       |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack Output, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Rezept entfernen

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```
# Mixer

The Mixer package can be used to add/remove recipes to/from the Immersive Engineering Mixer.

## Calling The Package

You can call the Mixer package using `mods.immersiveengineering.Mixer`.

## Rezept hinzufügen

| Required | Type         | Datentyp                                                     |
| -------- | ------------ | ------------------------------------------------------------ |
| Required | Fluid Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| Required | Fluid Input  | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)                 |
| Required | Item Inputs  | [IIngredient](/Vanilla/Variable_Types/IIngredient/) as Array |
| Required | Energy       | Integer                                                      |

### Beispiel

```JAVA
//Example:
mods.immersiveengineering.Mixer.addRecipe(ILiquidStack output, ILiquidStack fluidInput, IIngredient[] itemInputs, int energy);

mods.immersiveengineering.Mixer.addRecipe(<liquid:lava>, <liquid:water>, [<ore:logWood>, <minecraft:dirt>], 2048);
```

## Remove Recipe

| Type   | Datentyp                                     |
| ------ | -------------------------------------------- |
| Output | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |

### Beispiel

```JAVA
//Example:
mods.immersiveengineering.Mixer.removeRecipe(ILiquidStack output);

mods.immersiveengineering.Mixer.removeRecipe(<liquid:lava>);
```
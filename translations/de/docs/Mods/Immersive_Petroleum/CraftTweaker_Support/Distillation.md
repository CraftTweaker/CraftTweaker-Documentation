# Distillation

## addRecipe

Die Distillation "addRecipe" Methode besteht aus:

| Type          | Datentyp                                             |
| ------------- | ---------------------------------------------------- |
| Output        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) Array[] |
| Output        | [ItemStack](/Vanilla/Items/IItemStack/) Array[]      |
| Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)         |
| Flux/t        | Integer                                              |
| Time in Ticks | Integer                                              |
| Chance        | Float Array []                                       |

### Preface:

Jeder ItemStack Eintrag ist mit dem entsprechenden Array-Eintrag "Chance" verknüpft.

Beispiel:

    [<minecraft:diamond>, <minecraft:leather> * 2]
    [1, 1]
    

Der Float Wert des Typs Chance sollte zwischen 0 und 1 liegen. Da es sich von einen Float-Wert in einen Prozent Wert umrechnet. Das Bedeutet:

    0.5     = 50%
    0.22374 = 22.374%
    1       = 100%
    

Während du den Float wert über 1 setzen kannst, wird er niemals einen Wert über 100% erreichen

### Beispielcode:

```zenscript
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidOutputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int energy, int time, float[] chance)

mods.immersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, 5, [1, 1]);
```
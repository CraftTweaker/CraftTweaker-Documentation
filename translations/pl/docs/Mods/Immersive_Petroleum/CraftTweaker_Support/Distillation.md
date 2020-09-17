# Destylacja

## napis

Metoda destylacji „addRecipe” składa się z:

| Typ            | Typ danych                                            |
| -------------- | ----------------------------------------------------- |
| Wyjście        | [Stos płynny](/Vanilla/Liquids/ILiquidStack/) Array[] |
| Wyjście        | [ItemStack](/Vanilla/Items/IItemStack/) Array[]       |
| Input          | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)          |
| Flux/t         | Liczba całkowita                                      |
| Czas w tickach | Liczba całkowita                                      |
| Szansa         | Pływająca tablica []                                  |

### Odmowa:

Każdy wpis ItemStack jest powiązany z odpowiednim wpisem "Szansa".

Przykład:

```zenscript
[<minecraft:diamond>, <minecraft:leather> * 2]
[1, 1]
```

Wartość "Float" powinna zawierać się w przedziale od 0 do 1. Ponieważ przekształca ją z wartości zmiennej zmiennoprzecinkowej na wartość procentową pomiędzy 0% a 100% I.E:

```zenscript
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

Podczas gdy możesz przesłać zmiennoprzecinkowe powyżej 1, nigdy nie uzyska wartości powyżej 100%

### Przykład kodu:

```zenscript
//mods.immersivepetroum.Distillation.addRecipe(ILiquidStack[] Outputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int Energy, int time, float[] szansa)

mody. mmersivepetroleum um.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, [1, 1]);
```
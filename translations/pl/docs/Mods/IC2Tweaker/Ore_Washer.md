# Wzmywarka rud

## Pakiet

`import mods.ic2.OreWasher;`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**
- **@Optional int water** Ilość wody wymagana dla jednej rundy przetwarzania tej receptury, mierzona w mB. Domyślnie 1000, jeśli nie podano.

## Dodanie

```zenscript
mods.ic2.OreWasher.addRecipe(IItemStack[] wyjścia, IIngredient input, @Optional int water);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Usuwanie

- Jeśli używasz eksperymentalnego Ic2, aby usunąć przepis, po prostu usuń odpowiedni wiersz w `config/ic2/ore_washer.ini`
- Jeśli używasz dodatków Ic2 Classic i Ic2c, aby usunąć przepis, po prostu wyłącz odpowiedni przepis w `config/ic2/ic2machineRecipes.json`.
# Wirówka termiczna

## Pakiet

`importuj mods.ic2.ThermalCentrifuge;`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**
- **@Opcjonalnie minHeat**

## Dodanie

```zenscript
mods.ic2.ThermalCentrifuge.addRecipe([IItemStack[] wyjść, IIngredient input, @Optional int minHeat);

mods.ic2.ThermalCentrifuge.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Usuwanie

- Jeśli używasz eksperymentalnego Ic2, aby usunąć przepis, po prostu usuń odpowiednią linię w `config/ic2/thermal_centrifuge.ini`
- Jeśli używasz dodatków Ic2 Classic i Ic2c, aby usunąć przepis, po prostu wyłącz odpowiedni przepis w `config/ic2/ic2machineRecipes.json`.
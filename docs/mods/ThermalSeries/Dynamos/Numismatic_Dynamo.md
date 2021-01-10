# Numismatic Dynamo

## Package

`mods.thermal.NumismaticFuel`

## Add Fuel

```zenscript
//<recipetype:thermal:numismatic_fuel>.addFuel(String name, IIngredient ingredient, int energy);
<recipetype:thermal:numismatic_fuel>.addFuel("numismatic_test", <item:minecraft:dirt>, 1000);
```

## Remove Fuel

```zenscript
//<recipetype:thermal:numismatic_fuel>.removeFuel(IItemStack outputItem);
<recipetype:thermal:numismatic_fuel>.removeFuel(<item:thermal:signalum_coin>);
```

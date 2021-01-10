# Lapidary Dynamo

## Package

`mods.thermal.LapidaryFuel`

## Add Fuel

```zenscript
//<recipetype:thermal:lapidary_fuel>.addFuel(String name, IIngredient ingredient, int energy);
<recipetype:thermal:lapidary_fuel>.addFuel("lapidary_test", <item:minecraft:dirt>, 1000);
```

## Remove Fuel

```zenscript
//<recipetype:thermal:lapidary_fuel>.removeFuel(IItemStack outputItem);
<recipetype:thermal:lapidary_fuel>.removeFuel(<item:thermal:ruby>);
```

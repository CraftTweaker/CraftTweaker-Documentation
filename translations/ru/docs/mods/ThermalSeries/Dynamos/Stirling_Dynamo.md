# Stirling Dynamo

## Add Fuel

```zenscript
//<recipetype:thermal:stirling_fuel>.addFuel(String name, IIngredient ingredient, int energy);
<recipetype:thermal:stirling_fuel>.addFuel("stirling_test", <item:minecraft:dirt>, 1000);
```

## Remove Fuel

```zenscript
//<recipetype:thermal:stirling_fuel>.removeFuel(IItemStack outputItem);
<recipetype:thermal:stirling_fuel>.removeFuel(<item:minecraft:coal_block>);
```

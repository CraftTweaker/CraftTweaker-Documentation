# Lapidary Dynamo / Lapidary Fuel

## Methods

#### Add Fuel

The following script will add Dirt as a Fuel that produces 1000 RF.

```zenscript
// <recipetype:thermal:lapidary_fuel>.addFuel(String name, IIngredient ingredient, int energy);
<recipetype:thermal:lapidary_fuel>.addFuel("lapidary_test", <item:minecraft:dirt>, 1000);
```

#### Remove Fuel

The following script will remove Rubies as a Fuel.

```zenscript
// <recipetype:thermal:lapidary_fuel>.removeFuel(IItemStack outputItem);
<recipetype:thermal:lapidary_fuel>.removeFuel(<item:thermal:ruby>);
```

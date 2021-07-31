# Numismatic Dynamo / Numismatic Fuel

## Methods

#### Add Fuel

The following script will add Dirt as a Fuel that produces 1000 RF.

```zenscript
// <recipetype:thermal:numismatic_fuel>.addFuel(String name, IIngredient ingredient, int energy);
<recipetype:thermal:numismatic_fuel>.addFuel("numismatic_test", <item:minecraft:dirt>, 1000);
```

#### Remove Fuel

The following script will remove Signalum Coins as a Fuel.

```zenscript
// <recipetype:thermal:numismatic_fuel>.removeFuel(IItemStack outputItem);
<recipetype:thermal:numismatic_fuel>.removeFuel(<item:thermal:signalum_coin>);
```

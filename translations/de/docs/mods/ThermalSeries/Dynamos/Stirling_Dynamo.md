::requiredMod[Thermal Expansion]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/thermal-expansion}

# Stirling Dynamo

## Methoden

#### Add Fuel

The following script will add Dirt as a Fuel that produces 1000 RF.

```zenscript
// <recipetype:thermal:stirling_fuel>.addFuel(String name, IIngredient ingredient, int energy);
<recipetype:thermal:stirling_fuel>.addFuel("stirling_test", <item:minecraft:dirt>, 1000);
```

#### Remove Fuel

The following script will remove Coal Blocks as a Fuel.

```zenscript
// <recipetype:thermal:stirling_fuel>.removeFuel(IItemStack outputItem);
<recipetype:thermal:stirling_fuel>.removeFuel(<item:minecraft:coal_block>);
```

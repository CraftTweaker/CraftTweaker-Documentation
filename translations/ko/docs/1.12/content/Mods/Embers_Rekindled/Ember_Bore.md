# Ember Bore

## Importing the Package
```zenscript
import mods.embers.EmberBore;
import mods.embers.EmberBoreSet;
```

## Creating/Retrieving Boresets
```zenscript
var boreset = mods.embers.EmberBore.create(int[] dimensionIDs, string[] biomes);
var defaultBoreset = mods.embers.EmberBore.getDefault();
```

## ZenMethods
```zenscript
boreset.addOutput(WeightedItemStack output);
boreset.removeOutput(IItemStack output);
boreset.clear();
```

## ZenGetters/ZenSetters
| Property Name | Type                    | Description                                                       | Getter? | Setter? |
| ------------- | ----------------------- | ----------------------------------------------------------------- | ------- | ------- |
| dimensions    | int[]                   | An array containing all dimensions for which this boreset applies | Yes     | Yes     |
| biomes        | string[]                | An array containing all biomes for which this boreset applies     | Yes     | Yes     |
| stacks        | [WeightedItemStack]()[] | An array containing all outputs of the ember bore                 | Yes     | No      |

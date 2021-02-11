# Washing Factory

### Importing

```zenscript
import mods.industrialforegoing.WashingFactory;
```

### Adding

```zenscript
WashingFactory.add(String oreDictInput, ILiquidStack fluidInput, ILiquidStack fluidOutput);
```

The first parameter is the input item, and it has to be an OreDict string. The second and third parameters are the input and output fluids respectively.

The example shown below turns a piece of Gold Ingot and 500mB of Water into 500mB of Lava:

```zenscript
WashingFactory.add("ingotGold", <liquid:water> * 500, <liquid:lava> * 500);
```

### Removing

```zenscript
WashingFactory.remove(String oreDictInput);
```

Put an OreDict string in the parameter to remove the recipe for that specific OreDict.

Example:

```zenscript
WashingFactory.remove("ingotGold");
```

# Powered Thingies :: Fluid Burner :: Coolant

### Importing

```zenscript
import mods.poweredthingies.Tweaker.fluidBurnerCoolantTweaker as coolant;
```

### Listing Keys, Removing Recipes by Key, Clearing

```zenscript
coolant().logKeys()
coolant().removeRecipe('teslathingies:fluid_tf-molten_tesla') // check <logKeys> output for valid keys
coolant().clear()
```

### Adding Recipe

##### Signature

```zenscript
addCoolant(fluid: ILiquidStack, timeMultiplier: Float)
```

`timeMultiplier` is the value that will be used to increase (or decrease) the number ticks a fuel will burn for.

##### Example

```zenscript
coolant().addCoolant(<liquid:tf-sewage> * 50, 1.1);
```

### Notes

All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).
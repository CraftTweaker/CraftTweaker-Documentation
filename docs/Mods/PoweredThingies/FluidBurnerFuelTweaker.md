# Powered Thingies :: Fluid Burner :: Fuel

### Importing
```kotlin
import mods.poweredthingies.Tweaker.fluidBurnerFuelTweaker as fuel;
```

### Listing Keys, Removing Recipes by Key, Clearing
```kotlin
fuel().logKeys()
fuel().removeRecipe('liquid:fluid_lava') // check <logKeys> output for valid keys
fuel().clear()
```

### Adding Recipe
##### Signature
```kotlin
addFuel(fluid: ILiquidStack, ticks: Int)
```
`ticks` represents the number of ticks the specified fuel will burn for.
##### Example
```kotlin
fuel().addFuel(<liquid:tf-sewage> * 50, 100);
```

### Notes
All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).
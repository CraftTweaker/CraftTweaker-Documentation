# Powered Thingies :: Tweaker Class
This is the entry point used to get instances of the individual `Tweaker` classes for each machine.

### Importing
```
import mods.poweredthingies.Tweaker;
```

### Getting Machine Specific Tweakers
```kotlin
var compoundMaker = Tweaker.compoundTweaker();
var fluidCompound = Tweaker.fluidCompoundTweaker();
var fluidBurnerFuel = Tweaker.fluidBurnerFuelTweaker();
var fluidBurnerCoolant = Tweaker.fluidBurnerCoolantTweaker();
var itemCompoundProducer = Tweaker.itemCompoundProducerTweaker();
var incinerator = Tweaker.incineratorTweaker();
var itemLiquefier = Tweaker.itemLiquefierTweaker();
var poweredKiln = Tweaker.poweredKilnTweaker();
var powderMaker = Tweaker.powderMakerTweaker();
```

### Reasons why this class even exists
Mainly because I love using base classes and Kotlin and both those things don't import well in CT. Or I'm too retarded to make it work.
So... you are stuck with using this instead of having direct access to individual classes for each machine.
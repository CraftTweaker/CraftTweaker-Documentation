# ICitizenSleepHandler

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.entity.citizen.citizenhandlers.ICitizenSleepHandler;
```


## Methods

:::group{name=findHomePos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ICitizenSleepHandler.findHomePos() as BlockPos

myICitizenSleepHandler.findHomePos();
```

:::

:::group{name=getBedLocation}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ICitizenSleepHandler.getBedLocation() as BlockPos

myICitizenSleepHandler.getBedLocation();
```

:::

:::group{name=isAsleep}

Return Type: boolean

```zenscript
// ICitizenSleepHandler.isAsleep() as boolean

myICitizenSleepHandler.isAsleep();
```

:::

:::group{name=onWakeUp}

```zenscript
// ICitizenSleepHandler.onWakeUp()

myICitizenSleepHandler.onWakeUp();
```

:::

:::group{name=shouldGoSleep}

Return Type: boolean

```zenscript
// ICitizenSleepHandler.shouldGoSleep() as boolean

myICitizenSleepHandler.shouldGoSleep();
```

:::

:::group{name=trySleep}

Return Type: boolean

```zenscript
ICitizenSleepHandler.trySleep(var1 as BlockPos) as boolean
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::



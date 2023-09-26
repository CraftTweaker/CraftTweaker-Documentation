# LunarEventInstance

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.enhancedcelestials.lunarevent.LunarEventInstance;
```


## Methods

:::group{name=active}

Return Type: boolean

```zenscript
LunarEventInstance.active(currentDay as long) as boolean
```

| Parameter  | Type |
|------------|------|
| currentDay | long |


:::

:::group{name=getDaysUntil}

Return Type: long

```zenscript
LunarEventInstance.getDaysUntil(currentDay as long) as long
```

| Parameter  | Type |
|------------|------|
| currentDay | long |


:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// LunarEventInstance.getRegistryName() as ResourceLocation

myLunarEventInstance.getRegistryName();
```

:::

:::group{name=passed}

Return Type: boolean

```zenscript
LunarEventInstance.passed(currentDay as long) as boolean
```

| Parameter  | Type |
|------------|------|
| currentDay | long |


:::

:::group{name=scheduledDay}

Return Type: long

```zenscript
// LunarEventInstance.scheduledDay() as long

myLunarEventInstance.scheduledDay();
```

:::



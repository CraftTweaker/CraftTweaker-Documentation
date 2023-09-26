# IColonyEventDescription

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.colonyEvents.descriptions.IColonyEventDescription;
```


## Methods

:::group{name=getEventPos}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// IColonyEventDescription.getEventPos() as BlockPos

myIColonyEventDescription.getEventPos();
```

:::

:::group{name=getEventTypeId}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// IColonyEventDescription.getEventTypeId() as ResourceLocation

myIColonyEventDescription.getEventTypeId();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
// IColonyEventDescription.getName() as string

myIColonyEventDescription.getName();
```

:::

:::group{name=setEventPos}

```zenscript
IColonyEventDescription.setEventPos(var1 as BlockPos)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| var1      | [BlockPos](/vanilla/api/util/math/BlockPos) |


:::

:::group{name=toDisplayString}

Return Type: string

```zenscript
// IColonyEventDescription.toDisplayString() as string

myIColonyEventDescription.toDisplayString();
```

:::



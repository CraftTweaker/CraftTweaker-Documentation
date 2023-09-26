# ILocation

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.api.colony.requestsystem.location.ILocation;
```


## Methods

:::group{name=getDimension}

Return Type: [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt;

```zenscript
// ILocation.getDimension() as ResourceKey<Level>

myILocation.getDimension();
```

:::

:::group{name=getInDimensionLocation}

Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// ILocation.getInDimensionLocation() as BlockPos

myILocation.getInDimensionLocation();
```

:::

:::group{name=isReachableFromLocation}

Return Type: boolean

```zenscript
ILocation.isReachableFromLocation(var1 as ILocation) as boolean
```

| Parameter |                                                Type                                                |
|-----------|----------------------------------------------------------------------------------------------------|
| var1      | [ILocation](/mods/sdmcrtplus/integration/minecolonies/api/colony/requestsystem/location/ILocation) |


:::



# InvalidDimension

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.waystones.InvalidDimension;
```


## Extending WaystoneTeleportError

InvalidDimension extends [WaystoneTeleportError](/mods/sdmcrtplus/integration/waystones/WaystoneTeleportError). That means all methods available in [WaystoneTeleportError](/mods/sdmcrtplus/integration/waystones/WaystoneTeleportError) are also available in InvalidDimension

## Methods

:::group{name=getDimension}

Return Type: [ResourceKey](/mods/sdmcrtplus/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt;

```zenscript
// InvalidDimension.getDimension() as ResourceKey<Level>

myInvalidDimension.getDimension();
```

:::



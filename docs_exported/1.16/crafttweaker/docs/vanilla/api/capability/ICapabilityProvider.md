# ICapabilityProvider

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.ICapabilityProvider;
```


## Methods

:::group{name=getCapability}

Return Type: T

```zenscript
ICapabilityProvider.getCapability<T : Object>(cap as Capability<T>) as T
```

| Parameter | Type | Description |
|-----------|------|-------------|
| cap | [Capability](/vanilla/api/capability/Capability)&lt;T&gt; | No Description Provided |
| T | Object | No Description Provided |


:::

:::group{name=getCapability}

Return Type: T

```zenscript
ICapabilityProvider.getCapability<T : Object>(cap as Capability<T>, side as Direction?) as T
```

| Parameter | Type | Description |
|-----------|------|-------------|
| cap | [Capability](/vanilla/api/capability/Capability)&lt;T&gt; | No Description Provided |
| side | [Direction](/vanilla/api/util/Direction)? | No Description Provided |
| T | Object | No Description Provided |


:::



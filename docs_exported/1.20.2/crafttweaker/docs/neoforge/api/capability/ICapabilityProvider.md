# ICapabilityProvider

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.ICapabilityProvider;
```


## Methods

:::group{name=getCapability}

Gets the capability.

Returns: The found capability or null.  
Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
ICapabilityProvider.getCapability<T : Object>(cap as Capability<T>) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                            Type                            |            Description             |
|-----------|------------------------------------------------------------|------------------------------------|
| cap       | [Capability](/neoforge/api/capability/Capability)&lt;T&gt; | The capability to get.             |
| T         | Object                                                     | The type of the capability to get. |


:::

:::group{name=getCapability}

Gets the capability for the given side.

Returns: The found capability or null.  
Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
ICapabilityProvider.getCapability<T : Object>(cap as Capability<T>, side as Direction?) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                            Type                            |                    Description                    |
|-----------|------------------------------------------------------------|---------------------------------------------------|
| cap       | [Capability](/neoforge/api/capability/Capability)&lt;T&gt; | The capability to get.                            |
| side      | [Direction](/vanilla/api/util/direction/Direction)?        | The side to get the capability from, can be null. |
| T         | Object                                                     | The type of the capability to get.                |


:::



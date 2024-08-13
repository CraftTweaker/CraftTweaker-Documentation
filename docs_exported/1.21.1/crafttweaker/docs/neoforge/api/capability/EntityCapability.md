# EntityCapability

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.capability.EntityCapability;
```


## Extending BaseCapability&lt;T,C&gt;

EntityCapability extends [BaseCapability](/neoforge/api/capability/BaseCapability)&lt;T,C&gt;. That means all methods available in [BaseCapability](/neoforge/api/capability/BaseCapability)&lt;T,C&gt; are also available in EntityCapability

## Methods

:::group{name=getCapability}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
EntityCapability.getCapability<T : Object, U : Object>(entity as Entity, context as U) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |
| context   | U                                    |
| T         | Object                               |
| U         | Object                               |


:::



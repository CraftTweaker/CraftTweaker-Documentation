# ItemCapability

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.capability.ItemCapability;
```


## Extending BaseCapability&lt;T,C&gt;

ItemCapability extends [BaseCapability](/neoforge/api/capability/BaseCapability)&lt;T,C&gt;. That means all methods available in [BaseCapability](/neoforge/api/capability/BaseCapability)&lt;T,C&gt; are also available in ItemCapability

## Methods

:::group{name=getCapability}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
ItemCapability.getCapability<T : Object, U : Object>(entity as ItemStack, context as U) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| entity    | [ItemStack](/vanilla/api/item/ItemStack) |
| context   | U                                        |
| T         | Object                                   |
| U         | Object                                   |


:::



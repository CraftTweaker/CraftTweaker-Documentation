# BlockCapability

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.capability.BlockCapability;
```


## Extending BaseCapability&lt;T,C&gt;

BlockCapability extends [BaseCapability](/neoforge/api/capability/BaseCapability)&lt;T,C&gt;. That means all methods available in [BaseCapability](/neoforge/api/capability/BaseCapability)&lt;T,C&gt; are also available in BlockCapability

## Methods

:::group{name=getCapability}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
BlockCapability.getCapability<T : Object, U : Object>(level as Level, pos as BlockPos, state as BlockState, blockEntity as BlockEntity, context as U) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

|  Parameter  |                         Type                         |
|-------------|------------------------------------------------------|
| level       | [Level](/vanilla/api/world/Level)                    |
| pos         | [BlockPos](/vanilla/api/util/math/BlockPos)          |
| state       | [BlockState](/vanilla/api/block/BlockState)          |
| blockEntity | [BlockEntity](/vanilla/api/block/entity/BlockEntity) |
| context     | U                                                    |
| T           | Object                                               |
| U           | Object                                               |


:::



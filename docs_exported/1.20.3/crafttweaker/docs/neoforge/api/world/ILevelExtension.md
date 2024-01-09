# ILevelExtension

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.world.ILevelExtension;
```


## Methods

:::group{name=getCapability}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
ILevelExtension.getCapability<T : Object, C : Object>(cap as BlockCapability<T,C>, pos as BlockPos, context as @org.openzen.zencode.java.ZenCodeType.Nullable C) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| cap       | [BlockCapability](/neoforge/api/capability/BlockCapability)&lt;T,C&gt; |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)                            |
| context   | @org.openzen.zencode.java.ZenCodeType.Nullable C                       |
| T         | Object                                                                 |
| C         | Object                                                                 |


:::

:::group{name=getCapability}

Return Type: @org.openzen.zencode.java.ZenCodeType.Nullable T

```zenscript
ILevelExtension.getCapability<T : Object, C : Object>(cap as BlockCapability<T,C>, pos as BlockPos, state as BlockState?, blockEntity as BlockEntity?, context as @org.openzen.zencode.java.ZenCodeType.Nullable C) as @org.openzen.zencode.java.ZenCodeType.Nullable T
```

|  Parameter  |                                  Type                                  |
|-------------|------------------------------------------------------------------------|
| cap         | [BlockCapability](/neoforge/api/capability/BlockCapability)&lt;T,C&gt; |
| pos         | [BlockPos](/vanilla/api/util/math/BlockPos)                            |
| state       | [BlockState](/vanilla/api/block/BlockState)?                           |
| blockEntity | [BlockEntity](/vanilla/api/block/entity/BlockEntity)?                  |
| context     | @org.openzen.zencode.java.ZenCodeType.Nullable C                       |
| T           | Object                                                                 |
| C           | Object                                                                 |


:::



# ExpandBlockEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.BlockEntity;
```


## Extending CapabilityProvider&lt;BlockEntity&gt;

ExpandBlockEntity extends [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[BlockEntity](/mods/sixikutils/utils/block/ExpandBlockEntity)&gt;. That means all methods available in [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[BlockEntity](/mods/sixikutils/utils/block/ExpandBlockEntity)&gt; are also available in ExpandBlockEntity

## Methods

:::group{name=getContainer}

Return Type: [Container](/mods/sixikutils/utils/world/ExpandContainer)

```zenscript
// BlockEntity.getContainer() as Container

myBlockEntity.getContainer();
```

:::

:::group{name=testSixik}

The same method as getContainerSize, only with a different execution logic. Use it if you have any problems

Returns: Ñontainer Size  
Return Type: int

```zenscript
// BlockEntity.testSixik() as int

myBlockEntity.testSixik();
```

:::


## Properties

|   Name    |                           Type                            | Has Getter | Has Setter |
|-----------|-----------------------------------------------------------|------------|------------|
| container | [Container](/mods/sixikutils/utils/world/ExpandContainer) | true       | false      |


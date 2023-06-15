# BlockEntity

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.entity.BlockEntity;
```


## Extending CapabilityProvider&lt;BlockEntity&gt;

BlockEntity extends [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[BlockEntity](/mods/sixikutils/utils/block/BlockEntity)&gt;. That means all methods available in [CapabilityProvider](/forge/api/capability/CapabilityProvider)&lt;[BlockEntity](/mods/sixikutils/utils/block/BlockEntity)&gt; are also available in BlockEntity

## Methods

:::group{name=getContainer}

Return Type: [Container](/vanilla/api/world/Container)

```zenscript
// BlockEntity.getContainer() as Container

myBlockEntity.getContainer();
```

:::

:::group{name=testSixik}

Return Type: int

```zenscript
// BlockEntity.testSixik() as int

myBlockEntity.testSixik();
```

:::


## Properties

|   Name    |                   Type                    | Has Getter | Has Setter |
|-----------|-------------------------------------------|------------|------------|
| container | [Container](/vanilla/api/world/Container) | true       | false      |


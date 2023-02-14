# VillagerProfession

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.VillagerProfession;
```


## Extending Record

VillagerProfession extends Record. That means all methods available in Record are also available in VillagerProfession

## Methods

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// VillagerProfession.getRegistryName() as ResourceLocation

myVillagerProfession.getRegistryName();
```

:::

:::group{name=name}

Return Type: string

```zenscript
// VillagerProfession.name() as string

myVillagerProfession.name();
```

:::

:::group{name=requestedItems}

Return Type: Set&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt;

```zenscript
// VillagerProfession.requestedItems() as Set<ItemDefinition>

myVillagerProfession.requestedItems();
```

:::

:::group{name=secondaryPoi}

Return Type: Set&lt;[Block](/vanilla/api/block/Block)&gt;

```zenscript
// VillagerProfession.secondaryPoi() as Set<Block>

myVillagerProfession.secondaryPoi();
```

:::

:::group{name=workSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)?

```zenscript
// VillagerProfession.workSound() as SoundEvent?

myVillagerProfession.workSound();
```

:::


## Properties

|      Name      |                             Type                              | Has Getter | Has Setter |
|----------------|---------------------------------------------------------------|------------|------------|
| commandString  | string                                                        | true       | false      |
| name           | string                                                        | true       | false      |
| registryName   | [ResourceLocation](/vanilla/api/resource/ResourceLocation)    | true       | false      |
| requestedItems | Set&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; | true       | false      |
| secondaryPoi   | Set&lt;[Block](/vanilla/api/block/Block)&gt;                  | true       | false      |
| workSound      | [SoundEvent](/vanilla/api/sound/SoundEvent)?                  | true       | false      |


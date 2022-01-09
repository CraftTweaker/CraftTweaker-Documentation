# VillagerProfession

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.VillagerProfession;
```


## Methods

:::group{name=getName}

Return Type: string

```zenscript
// VillagerProfession.getName() as string

myVillagerProfession.getName();
```

:::

:::group{name=getRequestedItems}

Return Type: Set&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt;

```zenscript
// VillagerProfession.getRequestedItems() as Set<ItemDefinition>

myVillagerProfession.getRequestedItems();
```

:::

:::group{name=getSecondaryPoi}

Return Type: Set&lt;[Block](/vanilla/api/block/Block)&gt;

```zenscript
// VillagerProfession.getSecondaryPoi() as Set<Block>

myVillagerProfession.getSecondaryPoi();
```

:::

:::group{name=getWorkSound}

Return Type: [SoundEvent](/vanilla/api/sound/SoundEvent)

```zenscript
// VillagerProfession.getWorkSound() as SoundEvent

myVillagerProfession.getWorkSound();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| commandString | string | true | false | No Description Provided |
| name | string | true | false | No Description Provided |
| requestedItems | Set&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; | true | false | No Description Provided |
| secondaryPoi | Set&lt;[Block](/vanilla/api/block/Block)&gt; | true | false | No Description Provided |
| workSound | [SoundEvent](/vanilla/api/sound/SoundEvent) | true | false | No Description Provided |


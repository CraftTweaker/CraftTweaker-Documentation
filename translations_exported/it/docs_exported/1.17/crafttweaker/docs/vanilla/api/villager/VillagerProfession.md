# VillagerProfession

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.VillagerProfession;
```


## Metodi

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


## Proprietà

| Nome           | Tipo                                                                      | Ha Getter | Ha Setter | Descrizione             |
| -------------- | ------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| commandString  | string                                                                    | sì        | no        | No Description Provided |
| nome           | string                                                                    | sì        | no        | No Description Provided |
| requestedItems | Set&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; | sì        | no        | No Description Provided |
| secondaryPoi   | Set&lt;[Block](/vanilla/api/block/Block)&gt;                  | sì        | no        | No Description Provided |
| workSound      | [SoundEvent](/vanilla/api/sound/SoundEvent)                               | sì        | no        | No Description Provided |


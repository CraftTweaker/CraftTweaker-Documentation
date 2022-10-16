# VillagerProfession

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.VillagerProfession;
```


## Extending Record

VillagerProfession extends Record. That means all methods available in Record are also available in VillagerProfession

## Metodi

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


## Proprietà

| Nome           | Tipo                                                                      | Ha Getter | Ha Setter |
| -------------- | ------------------------------------------------------------------------- | --------- | --------- |
| commandString  | string                                                                    | sì        | no        |
| nome           | string                                                                    | sì        | no        |
| requestedItems | Set&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; | sì        | no        |
| secondaryPoi   | Set&lt;[Block](/vanilla/api/block/Block)&gt;                  | sì        | no        |
| workSound      | [SoundEvent](/vanilla/api/sound/SoundEvent)?                              | sì        | no        |


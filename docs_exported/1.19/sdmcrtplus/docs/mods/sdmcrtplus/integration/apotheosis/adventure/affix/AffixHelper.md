# AffixHelper

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.integration.apotheosis.adventure.affix.AffixHelper;
```


## Static Methods

:::group{name=addLore}

```zenscript
AffixHelper.addLore(itemStack as IItemStack, lore as Component)
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |
| lore      | [Component](/vanilla/api/text/Component)   |


:::

:::group{name=applyAffix}

```zenscript
AffixHelper.applyAffix(itemStack as IItemStack, affix as AffixInstance)
```

| Parameter |                                          Type                                          |
|-----------|----------------------------------------------------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack)                                             |
| affix     | [AffixInstance](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/AffixInstance) |


:::

:::group{name=applyAffix}

```zenscript
AffixHelper.applyAffix(itemStack as IItemStack, affixes as AffixInstance[Affix])
```

| Parameter |                                                                              Type                                                                              |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack)                                                                                                                     |
| affixes   | [AffixInstance](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/AffixInstance)[[Affix](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/Affix)] |


:::

:::group{name=getAffixes}

Return Type: [AffixInstance](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/AffixInstance)[[Affix](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/Affix)]

```zenscript
AffixHelper.getAffixes(entity as Entity) as AffixInstance[Affix]
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| entity    | [Entity](/vanilla/api/entity/Entity) |


:::

:::group{name=getAffixes}

Return Type: [AffixInstance](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/AffixInstance)[[Affix](/mods/sdmcrtplus/integration/apotheosis/adventure/affix/Affix)]

```zenscript
AffixHelper.getAffixes(itemStack as IItemStack) as AffixInstance[Affix]
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) |


:::


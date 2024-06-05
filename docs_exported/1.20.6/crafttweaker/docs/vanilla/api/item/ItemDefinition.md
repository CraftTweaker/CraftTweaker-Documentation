# ItemDefinition

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemDefinition;
```


## Implemented Interfaces
ItemDefinition implements the following interfaces. That means all methods defined in these interfaces are also available in ItemDefinition

- [ItemLike](/vanilla/api/world/ItemLike)

## Static Methods

:::group{name=commonItemComponents}

Return Type: [DataComponentMap](/vanilla/api/component/DataComponentMap)

```zenscript
// ItemDefinition.commonItemComponents() as DataComponentMap

ItemDefinition.commonItemComponents();
```

:::

## Casters

|                Result Type                 | Is Implicit |
|--------------------------------------------|-------------|
| [IItemStack](/vanilla/api/item/IItemStack) | true        |

## Methods

:::group{name=addAttributeModifier}

```zenscript
ItemDefinition.addAttributeModifier(attribute as Attribute, modifier as AttributeModifier, slot as EquipmentSlotGroup)
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   |
| modifier  | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)   |
| slot      | [EquipmentSlotGroup](/vanilla/api/entity/equipment/EquipmentSlotGroup) |


:::

:::group{name=addEnchantment}

```zenscript
ItemDefinition.addEnchantment(enchantment as Enchantment, level as int)
```

|  Parameter  |                           Type                           |
|-------------|----------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |
| level       | int                                                      |


:::

:::group{name=getCommandString}

Return Type: string

```zenscript
// ItemDefinition.getCommandString() as string

myItemDefinition.getCommandString();
```

:::

:::group{name=getDefaultInstance}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemDefinition.getDefaultInstance() as IItemStack

myItemDefinition.getDefaultInstance();
```

:::

:::group{name=getRegistryName}

Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// ItemDefinition.getRegistryName() as ResourceLocation

myItemDefinition.getRegistryName();
```

:::

:::group{name=remove}

```zenscript
ItemDefinition.remove(type as DataComponentType)
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType) |


:::

:::group{name=setComponent}

```zenscript
ItemDefinition.setComponent<T : Object>(type as DataComponentType<T>, value as T)
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| value     | T                                                                      |
| T         | Object                                                                 |


:::

:::group{name=setJsonComponent}

```zenscript
ItemDefinition.setJsonComponent(type as DataComponentType, value as IData?)
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType) |
| value     | [IData](/vanilla/api/data/IData)?                             |


:::


## Properties

|           Name           |                            Type                            | Has Getter | Has Setter |
|--------------------------|------------------------------------------------------------|------------|------------|
| attributeModifiers       | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| bannerPatterns           | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| baseColor                | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| bees                     | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| blockEntityData          | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| blockState               | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| bucketEntityData         | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| bundleContents           | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| canBreak                 | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| canPlaceOn               | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| chargedProjectiles       | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| commandString            | string                                                     | true       | false      |
| container                | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| containerLoot            | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| creativeSlotLock         | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| customData               | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| customModelData          | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| customName               | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| debugStickState          | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| defaultInstance          | [IItemStack](/vanilla/api/item/IItemStack)                 | true       | false      |
| dyedColor                | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| enchantmentGlintOverride | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| enchantments             | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| entityData               | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| fireResistant            | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| fireworkExplosion        | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| fireworks                | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| food                     | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| hideAdditionalTooltip    | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| hideTooltip              | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| instrument               | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| intangibleProjectile     | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| itemName                 | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| lockCode                 | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| lodestoneTracker         | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| lore                     | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| mapColor                 | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| mapDecorations           | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| mapId                    | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| mapPostProcessing        | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| maxDamage                | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| maxStackSize             | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| noteBlockSound           | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| ominousBottleAmplifier   | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| potDecorations           | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| potionContents           | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| profile                  | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| rarity                   | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| recipes                  | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| registryName             | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| repairCost               | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| storedEnchantments       | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| suspiciousStewEffects    | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| tool                     | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| trim                     | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| unbreakable              | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| writableBookContent      | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |
| writtenBookContent       | [ItemDefinition](/vanilla/api/item/ItemDefinition)         | false      | true       |


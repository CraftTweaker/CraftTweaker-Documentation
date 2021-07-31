# EntityEquipmentPredicate

Represents the predicate for an [MCEntity](/vanilla/api/entity/MCEntity)'s equipment.

 The predicate can be used to check any number and combination of items that are being used by the entity as armor or held as weapons, either in the main hand or in the off-hand, with the help of [ItemPredicate](/vanilla/api/predicate/ItemPredicate)s.

 By default, the entity passes the checks no matter its current equipment.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EntityEquipmentPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

EntityEquipmentPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in EntityEquipmentPredicate

## Methods

:::group{name=withChestItem}

Creates and sets the [ItemPredicate](/vanilla/api/predicate/ItemPredicate) that will be used to match the entity's chest armor slot.

 Any changes that have been made previously to the item predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate)

```zenscript
EntityEquipmentPredicate.withChestItem(builder as Consumer<ItemPredicate>) as EntityEquipmentPredicate
```

| Parameter    | Type                                                                              | Description                                                                                          |
| ------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| constructeur | Consumer&lt;[ItemPredicate](/vanilla/api/predicate/ItemPredicate)&gt; | A consumer that will be used to configure the [ItemPredicate](/vanilla/api/predicate/ItemPredicate). |


:::

:::group{name=withFeetItem}

Creates and sets the [ItemPredicate](/vanilla/api/predicate/ItemPredicate) that will be used to match the entity's feet armor slot.

 Any changes that have been made previously to the item predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate)

```zenscript
EntityEquipmentPredicate.withFeetItem(builder as Consumer<ItemPredicate>) as EntityEquipmentPredicate
```

| Parameter    | Type                                                                              | Description                                                                                          |
| ------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| constructeur | Consumer&lt;[ItemPredicate](/vanilla/api/predicate/ItemPredicate)&gt; | A consumer that will be used to configure the [ItemPredicate](/vanilla/api/predicate/ItemPredicate). |


:::

:::group{name=withHeadItem}

Creates and sets the [ItemPredicate](/vanilla/api/predicate/ItemPredicate) that will be used to match the entity's head armor slot.

 Any changes that have been made previously to the item predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate)

```zenscript
EntityEquipmentPredicate.withHeadItem(builder as Consumer<ItemPredicate>) as EntityEquipmentPredicate
```

| Parameter    | Type                                                                              | Description                                                                                          |
| ------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| constructeur | Consumer&lt;[ItemPredicate](/vanilla/api/predicate/ItemPredicate)&gt; | A consumer that will be used to configure the [ItemPredicate](/vanilla/api/predicate/ItemPredicate). |


:::

:::group{name=withItemInHand}

Creates and sets the [ItemPredicate](/vanilla/api/predicate/ItemPredicate) that will be used to match the item held in the entity's hand.

 It is assumed that the entity can carry items only in its main hand.

 Any changes that have been made previously to the item predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate)

```zenscript
EntityEquipmentPredicate.withItemInHand(builder as Consumer<ItemPredicate>) as EntityEquipmentPredicate
```

| Parameter    | Type                                                                              | Description                                                                                          |
| ------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| constructeur | Consumer&lt;[ItemPredicate](/vanilla/api/predicate/ItemPredicate)&gt; | A consumer that will be used to configure the [ItemPredicate](/vanilla/api/predicate/ItemPredicate). |


:::

:::group{name=withItemInMainHand}

Creates and sets the [ItemPredicate](/vanilla/api/predicate/ItemPredicate) that will be used to match the item held in the entity's main hand.

 Any changes that have been made previously to the item predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate)

```zenscript
EntityEquipmentPredicate.withItemInMainHand(builder as Consumer<ItemPredicate>) as EntityEquipmentPredicate
```

| Parameter    | Type                                                                              | Description                                                                                          |
| ------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| constructeur | Consumer&lt;[ItemPredicate](/vanilla/api/predicate/ItemPredicate)&gt; | A consumer that will be used to configure the [ItemPredicate](/vanilla/api/predicate/ItemPredicate). |


:::

:::group{name=withItemInOffHand}

Creates and sets the [ItemPredicate](/vanilla/api/predicate/ItemPredicate) that will be used to match the item held in the entity's off hand.

 Any changes that have been made previously to the item predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate)

```zenscript
EntityEquipmentPredicate.withItemInOffHand(builder as Consumer<ItemPredicate>) as EntityEquipmentPredicate
```

| Parameter    | Type                                                                              | Description                                                                                          |
| ------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| constructeur | Consumer&lt;[ItemPredicate](/vanilla/api/predicate/ItemPredicate)&gt; | A consumer that will be used to configure the [ItemPredicate](/vanilla/api/predicate/ItemPredicate). |


:::

:::group{name=withLegsItem}

Creates and sets the [ItemPredicate](/vanilla/api/predicate/ItemPredicate) that will be used to match the entity's legs armor slot.

 Any changes that have been made previously to the item predicate will be discarded, if any.

Returns: The predicate itself for chaining.  
Return Type: [EntityEquipmentPredicate](/vanilla/api/predicate/EntityEquipmentPredicate)

```zenscript
EntityEquipmentPredicate.withLegsItem(builder as Consumer<ItemPredicate>) as EntityEquipmentPredicate
```

| Parameter    | Type                                                                              | Description                                                                                          |
| ------------ | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| constructeur | Consumer&lt;[ItemPredicate](/vanilla/api/predicate/ItemPredicate)&gt; | A consumer that will be used to configure the [ItemPredicate](/vanilla/api/predicate/ItemPredicate). |


:::



# MCItemStackMutable

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemStackMutable;
```


## Implemented Interfaces
MCItemStackMutable implements the following interfaces. That means all methods defined in these interfaces are also available in MCItemStackMutable

- [NeoForgeItemStack](/neoforge/api/item/NeoForgeItemStack)

## Static Properties

|         Name          |                            Type                            | Has Getter | Has Setter |
|-----------------------|------------------------------------------------------------|------------|------------|
| BASE_ATTACK_DAMAGE_ID | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| BASE_ATTACK_SPEED_ID  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | true       | false      |
| CRAFTTWEAKER_DATA_KEY | string                                                     | true       | false      |

## Casters

|                                              Result Type                                              | Is Implicit |
|-------------------------------------------------------------------------------------------------------|-------------|
| [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)                                | true        |
| [ItemDefinition](/vanilla/api/item/ItemDefinition)                                                    | true        |
| [ItemLike](/vanilla/api/world/ItemLike)                                                               | true        |
| [MapData](/vanilla/api/data/MapData)                                                                  | true        |
| [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true        |

## Methods

:::group{name=addGlobalAttributeModifier}

Adds an AttributeModifier to this IIngredient using a specific UUID.

 The id can be used to override an existing attribute on an ItemStack with this new modifier.
 You can use `/ct hand attributes` to get the id of the attributes on an ItemStack.

 Attributes added with this method appear on all ItemStacks that match this IIngredient,
 regardless of how or when the ItemStack was made, if you want to have the attribute on a
 single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use
 IItemStack#withAttributeModifier

```zenscript
MCItemStackMutable.addGlobalAttributeModifier(attribute as Attribute, id as ResourceLocation, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])
```

| Parameter |                                  Type                                  |              Description              |
|-----------|------------------------------------------------------------------------|---------------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)                   | The Attribute of the modifier.        |
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation)             | The id of the attribute modifier.     |
| value     | double                                                                 | The value of the modifier.            |
| operation | [AttributeOperation](/vanilla/api/entity/attribute/AttributeOperation) | The operation of the modifier.        |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[]         | What slots the modifier is valid for. |


:::

:::group{name=addShiftTooltip}

```zenscript
MCItemStackMutable.addShiftTooltip(content as Component, showMessage as Component)
```

|  Parameter  |                   Type                   | Optional |
|-------------|------------------------------------------|----------|
| content     | [Component](/vanilla/api/text/Component) | false    |
| showMessage | [Component](/vanilla/api/text/Component) | true     |


:::

:::group{name=addTooltip}

```zenscript
MCItemStackMutable.addTooltip(content as Component)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| content   | [Component](/vanilla/api/text/Component) |


:::

:::group{name=anyDamage}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// MCItemStackMutable.anyDamage() as IIngredient

myMCItemStackMutable.anyDamage();
```

:::

:::group{name=applyComponents}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.applyComponents(map as DataComponentMap) as IItemStack
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| map       | [DataComponentMap](/vanilla/api/component/DataComponentMap) |


:::

:::group{name=applyComponents}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.applyComponents(patch as DataComponentPatch) as IItemStack
```

| Parameter |                              Type                               |
|-----------|-----------------------------------------------------------------|
| patch     | [DataComponentPatch](/vanilla/api/component/DataComponentPatch) |


:::

:::group{name=applyComponentsAndValidate}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.applyComponentsAndValidate(patch as DataComponentPatch) as IItemStack
```

| Parameter |                              Type                               |
|-----------|-----------------------------------------------------------------|
| patch     | [DataComponentPatch](/vanilla/api/component/DataComponentPatch) |


:::

:::group{name=asIIngredientWithAmount}

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
// MCItemStackMutable.asIIngredientWithAmount() as IIngredientWithAmount

myMCItemStackMutable.asIIngredientWithAmount();
```

:::

:::group{name=asItemLike}

Return Type: [ItemLike](/vanilla/api/world/ItemLike)

```zenscript
// MCItemStackMutable.asItemLike() as ItemLike

myMCItemStackMutable.asItemLike();
```

:::

:::group{name=clearTooltip}

```zenscript
MCItemStackMutable.clearTooltip(leaveName as boolean)
```

| Parameter |  Type   | Optional | Default Value |
|-----------|---------|----------|---------------|
| leaveName | boolean | true     | false         |


:::

:::group{name=contains}

Does the ingredient contain the given ingredient?

Return Type: boolean

```zenscript
// MCItemStackMutable.contains(ingredient as IIngredient) as boolean

myMCItemStackMutable.contains((<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>));
```

| Parameter  |                        Type                        |       Description       |
|------------|----------------------------------------------------|-------------------------|
| ingredient | [IIngredient](/vanilla/api/ingredient/IIngredient) | The ingredient to check |


:::

:::group{name=getAttributes}

Gets the Attributes and the AttributeModifiers on this IItemStack for the given EquipmentSlot

Returns: A Map of Attribute to a List of AttributeModifier for the given EquipmentSlot.  
Return Type: stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt;[[Attribute](/vanilla/api/entity/attribute/Attribute)]

```zenscript
// MCItemStackMutable.getAttributes(slotType as EquipmentSlot) as stdlib.List<AttributeModifier>[Attribute]

myMCItemStackMutable.getAttributes(<constant:minecraft:equipmentslot:chest>);
```

| Parameter |                             Type                             |             Description             |
|-----------|--------------------------------------------------------------|-------------------------------------|
| slotType  | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | The slot to get the Attributes for. |


:::

:::group{name=getBurnTime}

Return Type: int

```zenscript
MCItemStackMutable.getBurnTime(manager as IRecipeManager) as int
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| manager   | [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager) |


:::

:::group{name=getDefinition}

Return Type: [ItemDefinition](/vanilla/api/item/ItemDefinition)

```zenscript
// MCItemStackMutable.getDefinition() as ItemDefinition

myMCItemStackMutable.getDefinition();
```

:::

:::group{name=getImmutableInternal}

Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// MCItemStackMutable.getImmutableInternal() as ItemStack

myMCItemStackMutable.getImmutableInternal();
```

:::

:::group{name=getRemainingItem}

When this ingredient stack is crafted, what will remain in the grid?
 Does not check if the stack matches though!
 Used e.g. in Crafting Table recipes.

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStackMutable.getRemainingItem(stack as IItemStack) as IItemStack

myMCItemStackMutable.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Parameter |                    Type                    |                Description                |
|-----------|--------------------------------------------|-------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) | The stack to provide for this ingredient. |


:::

:::group{name=getUseDuration}

Gets the use duration of the ItemStack for the given entity

Returns: use duration  
Return Type: int

```zenscript
// MCItemStackMutable.getUseDuration(entity as LivingEntity) as int

myMCItemStackMutable.getUseDuration(entity);
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| entity    | [LivingEntity](/vanilla/api/entity/LivingEntity) |


:::

:::group{name=grow}

Grows this IItemStack's stack size by the given amount, or 1 if no amount is given.

Returns: This IItemStack if mutable, a new one with the new amount otherwise.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStackMutable.grow(amount as int) as IItemStack

myMCItemStackMutable.grow(2);
```

| Parameter | Type |      Description       | Optional | Default Value |
|-----------|------|------------------------|----------|---------------|
| amount    | int  | The amount to grow by. | true     | 1             |


:::

:::group{name=isMutable}

Return Type: boolean

```zenscript
// MCItemStackMutable.isMutable() as boolean

myMCItemStackMutable.isMutable();
```

:::

:::group{name=modifyShiftTooltip}

```zenscript
MCItemStackMutable.modifyShiftTooltip(shiftedFunction as ITooltipFunction, unshiftedFunction as ITooltipFunction)
```

|     Parameter     |                              Type                              | Optional |
|-------------------|----------------------------------------------------------------|----------|
| shiftedFunction   | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | false    |
| unshiftedFunction | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) | true     |


:::

:::group{name=modifyTooltip}

```zenscript
MCItemStackMutable.modifyTooltip(function as ITooltipFunction)
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| function  | [ITooltipFunction](/vanilla/api/item/tooltip/ITooltipFunction) |


:::

:::group{name=mul}

Use this in contexts where machines accept more than one item to state that fact.

Return Type: [IIngredientWithAmount](/vanilla/api/ingredient/IIngredientWithAmount)

```zenscript
MCItemStackMutable.mul(amount as int) as IIngredientWithAmount
```

| Parameter | Type |
|-----------|------|
| amount    | int  |


:::

:::group{name=onlyDamaged}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// MCItemStackMutable.onlyDamaged() as IIngredient

myMCItemStackMutable.onlyDamaged();
```

:::

:::group{name=onlyDamagedAtLeast}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
MCItemStackMutable.onlyDamagedAtLeast(minDamage as int) as IIngredient
```

| Parameter | Type |
|-----------|------|
| minDamage | int  |


:::

:::group{name=onlyDamagedAtMost}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
MCItemStackMutable.onlyDamagedAtMost(maxDamage as int) as IIngredient
```

| Parameter | Type |
|-----------|------|
| maxDamage | int  |


:::

:::group{name=onlyIf}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
MCItemStackMutable.onlyIf(uid as string, function as Predicate<IItemStack>) as IIngredient
```

| Parameter |                            Type                             | Optional |
|-----------|-------------------------------------------------------------|----------|
| uid       | string                                                      | false    |
| function  | Predicate&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | true     |


:::

:::group{name=percent}

Return Type: [Percentaged](/vanilla/api/util/random/Percentaged)&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
MCItemStackMutable.percent(percentage as double) as Percentaged<IItemStack>
```

| Parameter  |  Type  |
|------------|--------|
| percentage | double |


:::

:::group{name=remove}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.remove<T : Object>(type as DataComponentType<T>) as IItemStack
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| T         | Object                                                                 |


:::

:::group{name=removeGlobalAttribute}

Removes all AttributeModifiers that use the given Attribute from this IIngredient.

 Attributes removed with this method are removed from ItemStacks that match this IIngredient,
 regardless of how or when the ItemStack was made, if you want to remove the attribute on a
 single specific ItemStack (such as a specific Diamond Sword made in a recipe), then you should use
 IItemStack#withoutAttribute.

 This method can only remove default Attributes from an ItemStack, it is still possible that
 an ItemStack can override it.

```zenscript
// MCItemStackMutable.removeGlobalAttribute(attribute as Attribute, slotTypes as EquipmentSlot[])

myMCItemStackMutable.removeGlobalAttribute(<attribute:minecraft:generic.attack_damage>, [<constant:minecraft:equipmentslot:chest>]);
```

| Parameter |                              Type                              |            Description            |
|-----------|----------------------------------------------------------------|-----------------------------------|
| attribute | [Attribute](/vanilla/api/entity/attribute/Attribute)           | The attribute to remove.          |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from. |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

```zenscript
// MCItemStackMutable.removeGlobalAttributeModifier(uuid as stdlib.UUID, slotTypes as EquipmentSlot[])

myMCItemStackMutable.removeGlobalAttributeModifier(IItemStack.BASE_ATTACK_DAMAGE_UUID, [<constant:minecraft:equipmentslot:chest>]);
```

| Parameter |                              Type                              |                    Description                    |
|-----------|----------------------------------------------------------------|---------------------------------------------------|
| uuid      | stdlib.UUID                                                    | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeGlobalAttributeModifier}

Removes all AttributeModifiers who's ID is the same as the given uuid from this IIngredient.

```zenscript
// MCItemStackMutable.removeGlobalAttributeModifier(uuid as string, slotTypes as EquipmentSlot[])

myMCItemStackMutable.removeGlobalAttributeModifier("8c1b5535-9f79-448b-87ae-52d81480aaa3", [<constant:minecraft:equipmentslot:chest>]);
```

| Parameter |                              Type                              |                    Description                    |
|-----------|----------------------------------------------------------------|---------------------------------------------------|
| uuid      | string                                                         | The unique id of the AttributeModifier to remove. |
| slotTypes | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)[] | The slot types to remove it from.                 |


:::

:::group{name=removeTooltip}

```zenscript
MCItemStackMutable.removeTooltip(regex as string)
```

| Parameter |  Type  |
|-----------|--------|
| regex     | string |


:::

:::group{name=reuse}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// MCItemStackMutable.reuse() as IIngredient

myMCItemStackMutable.reuse();
```

:::

:::group{name=setBurnTime}

Sets the burn time of this ingredient, for use in the furnace and other machines

```zenscript
// MCItemStackMutable.setBurnTime(time as int)

myMCItemStackMutable.setBurnTime(500);
```

| Parameter | Type |    Description    |
|-----------|------|-------------------|
| time      | int  | the new burn time |


:::

:::group{name=setBurnTime}

Sets the burn time of this ingredient, for use in the furnace and other machines

```zenscript
MCItemStackMutable.setBurnTime(time as int, manager as IRecipeManager)
```

| Parameter |                             Type                             |    Description    |
|-----------|--------------------------------------------------------------|-------------------|
| time      | int                                                          | the new burn time |
| manager   | [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager) |                   |


:::

:::group{name=shrink}

Shrinks this IItemStack's stack size by the given amount, or 1 if no amount is given.

Returns: This IItemStack if mutable, a new one with the new amount otherwise.  
Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// MCItemStackMutable.shrink(amount as int) as IItemStack

myMCItemStackMutable.shrink(2);
```

| Parameter | Type |       Description        | Optional | Default Value |
|-----------|------|--------------------------|----------|---------------|
| amount    | int  | The amount to shrink by. | true     | 1             |


:::

:::group{name=transformCustom}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
MCItemStackMutable.transformCustom(uid as string, function as Function<IItemStack,IItemStack>) as IIngredient
```

| Parameter |                                                 Type                                                  | Optional |
|-----------|-------------------------------------------------------------------------------------------------------|----------|
| uid       | string                                                                                                | false    |
| function  | Function&lt;[IItemStack](/vanilla/api/item/IItemStack),[IItemStack](/vanilla/api/item/IItemStack)&gt; | true     |


:::

:::group{name=transformDamage}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
MCItemStackMutable.transformDamage(amount as int) as IIngredient
```

| Parameter | Type | Optional | Default Value |
|-----------|------|----------|---------------|
| amount    | int  | true     | 1             |


:::

:::group{name=transformReplace}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
MCItemStackMutable.transformReplace(replaceWith as IItemStack) as IIngredient
```

|  Parameter  |                    Type                    |
|-------------|--------------------------------------------|
| replaceWith | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=update}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.update<T : Object>(type as DataComponentType<T>, defaultValue as T, operator as UnaryOperator<T>) as IItemStack
```

|  Parameter   |                                  Type                                  |
|--------------|------------------------------------------------------------------------|
| type         | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| defaultValue | T                                                                      |
| operator     | UnaryOperator&lt;T&gt;                                                 |
| T            | Object                                                                 |


:::

:::group{name=update}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.update<T : Object, U : Object>(type as DataComponentType<T>, defaultValue as T, data as U, operator as BiFunction<T,U,T>) as IItemStack
```

|  Parameter   |                                  Type                                  |
|--------------|------------------------------------------------------------------------|
| type         | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| defaultValue | T                                                                      |
| data         | U                                                                      |
| operator     | BiFunction&lt;T,U,T&gt;                                                |
| T            | Object                                                                 |
| U            | Object                                                                 |


:::

:::group{name=with}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.with<T : Object>(type as DataComponentType<T>, value as @org.openzen.zencode.java.ZenCodeType.Nullable T) as IItemStack
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| value     | @org.openzen.zencode.java.ZenCodeType.Nullable T                       |
| T         | Object                                                                 |


:::

:::group{name=withAttributeModifiers}

Sets the &lt;componenttype:minecraft:attribute_modifiers&gt; of the ComponentAccess to have the given [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withAttributeModifiers(modifiers as ItemAttributeModifiers) as T

myMCItemStackMutable.withAttributeModifiers(ItemAttributeModifiers.builder().add(<attribute:minecraft:player.block_break_speed>,
 AttributeModifier.create("test", 2.0, <constant:minecraft:attribute/operation:add_value>, "596e0826-7c66-42c6-b3da-45a6d667ccf7"),
 <constant:minecraft:equipmentslot/group:mainhand>).build(););
```

| Parameter |                                     Type                                     |             Description             |
|-----------|------------------------------------------------------------------------------|-------------------------------------|
| modifiers | [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers) | The attributes to give to the item. |


:::

:::group{name=withAttributeModifiers}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withAttributeModifiers(modifier as ItemAttributeModifiersEntry, showInTooltip as boolean) as T
```

|   Parameter   |                                          Type                                          | Optional | Default Value |
|---------------|----------------------------------------------------------------------------------------|----------|---------------|
| modifier      | [ItemAttributeModifiersEntry](/vanilla/api/item/component/ItemAttributeModifiersEntry) | false    |               |
| showInTooltip | boolean                                                                                | true     | true          |


:::

:::group{name=withAttributeModifiers}

Return Type: T

```zenscript
MCItemStackMutable.withAttributeModifiers(modifiers as stdlib.List<ItemAttributeModifiersEntry>, showInTooltip as boolean) as T
```

|   Parameter   |                                                   Type                                                    | Optional | Default Value |
|---------------|-----------------------------------------------------------------------------------------------------------|----------|---------------|
| modifiers     | stdlib.List&lt;[ItemAttributeModifiersEntry](/vanilla/api/item/component/ItemAttributeModifiersEntry)&gt; | false    |               |
| showInTooltip | boolean                                                                                                   | true     | true          |


:::

:::group{name=withBannerPatterns}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBannerPatterns(layers as BannerPatternLayers) as T
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| layers    | [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers) |


:::

:::group{name=withBannerPatterns}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBannerPatterns(layers as stdlib.List<BannerPatternLayersLayer>) as T
```

| Parameter |                                               Type                                                |
|-----------|---------------------------------------------------------------------------------------------------|
| layers    | stdlib.List&lt;[BannerPatternLayersLayer](/vanilla/api/block/entity/BannerPatternLayersLayer)&gt; |


:::

:::group{name=withBaseColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBaseColor(color as invalid) as T
```

| Parameter |    Type     |
|-----------|-------------|
| color     | **invalid** |


:::

:::group{name=withBees}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBees(occupants as stdlib.List<BeehiveBlockEntityOccupant>) as T
```

| Parameter |                                                    Type                                                    |
|-----------|------------------------------------------------------------------------------------------------------------|
| occupants | stdlib.List&lt;[BeehiveBlockEntityOccupant](/vanilla/api/block/entity/type/BeehiveBlockEntityOccupant)&gt; |


:::

:::group{name=withBlockEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBlockEntityData(data as CustomData) as T
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| data      | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withBlockEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBlockEntityData(data as MapData) as T
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=withBlockState}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBlockState(properties as BlockItemStateProperties) as T
```

| Parameter  |                                       Type                                       |
|------------|----------------------------------------------------------------------------------|
| properties | [BlockItemStateProperties](/vanilla/api/item/component/BlockItemStateProperties) |


:::

:::group{name=withBucketEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBucketEntityData(data as CustomData) as T
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| data      | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withBucketEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBucketEntityData(data as MapData) as T
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=withBundleContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBundleContents(contents as BundleContents) as T
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| contents  | [BundleContents](/vanilla/api/item/component/BundleContents) |


:::

:::group{name=withBundleContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withBundleContents(contents as stdlib.List<IItemStack>) as T
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| contents  | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

:::group{name=withCanBreak}

Sets the &lt;componenttype:minecraft:can_break&gt; of the ComponentAccess to have the given [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withCanBreak(predicate as AdventureModePredicate) as T
```

| Parameter |                                     Type                                     |                                           Description                                           |
|-----------|------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| predicate | [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate) | The adventure mode predicate to use to determine whether the item can be used to break a block. |


:::

:::group{name=withCanBreak}

Sets the &lt;componenttype:minecraft:can_break&gt; with the given BlockPredicates.

 Any predicate that matches will allow the Block to be broken by this ItemStack.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withCanBreak(predicates as stdlib.List<BlockPredicate>, showInTooltip as boolean) as T

myMCItemStackMutable.withCanBreak(BlockPredicate.create().of(<block:minecraft:diamond_ore>).build(), true);
```

|   Parameter   |                                    Type                                    |                    Description                     | Optional | Default Value |
|---------------|----------------------------------------------------------------------------|----------------------------------------------------|----------|---------------|
| predicates    | stdlib.List&lt;[BlockPredicate](/vanilla/api/predicate/BlockPredicate)&gt; | The collection of predicates to test for           | false    |               |
| showInTooltip | boolean                                                                    | Whether to show the ability in the tooltip or not. | true     | true          |


:::

:::group{name=withCanPlaceOn}

Sets the &lt;componenttype:minecraft:can_place_on&gt; of the ComponentAccess to have the given [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withCanPlaceOn(predicate as AdventureModePredicate) as T
```

| Parameter |                                     Type                                     |                                                Description                                                 |
|-----------|------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| predicate | [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate) | The adventure mode predicate to use to determine whether the current block can be placed on another block. |


:::

:::group{name=withCanPlaceOn}

Sets the &lt;componenttype:minecraft:can_place_on&gt; with the given BlockPredicates.

 Any predicate that matches will allow the BlockItem within the ItemStack to be placed.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withCanPlaceOn(predicates as stdlib.List<BlockPredicate>, showInTooltip as boolean) as T
```

|   Parameter   |                                    Type                                    |                      Description                       | Optional | Default Value |
|---------------|----------------------------------------------------------------------------|--------------------------------------------------------|----------|---------------|
| predicates    | stdlib.List&lt;[BlockPredicate](/vanilla/api/predicate/BlockPredicate)&gt; | The collection of predicates to test for               | false    |               |
| showInTooltip | boolean                                                                    | Whether to show the restriction in the tooltip or not. | true     | true          |


:::

:::group{name=withChargedProjectiles}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withChargedProjectiles(chargedProjectiles as ChargedProjectiles) as T
```

|     Parameter      |                                 Type                                 |
|--------------------|----------------------------------------------------------------------|
| chargedProjectiles | [ChargedProjectiles](/vanilla/api/item/component/ChargedProjectiles) |


:::

:::group{name=withChargedProjectiles}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withChargedProjectiles(item as IItemStack) as T
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=withChargedProjectiles}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withChargedProjectiles(items as stdlib.List<IItemStack>) as T
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| items     | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

:::group{name=withContainer}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withContainer(contents as ItemContainerContents) as T
```

| Parameter |                                    Type                                    |
|-----------|----------------------------------------------------------------------------|
| contents  | [ItemContainerContents](/vanilla/api/item/component/ItemContainerContents) |


:::

:::group{name=withContainer}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withContainer(contents as stdlib.List<IItemStack>) as T
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| contents  | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

:::group{name=withContainerLoot}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withContainerLoot(loot as SeededContainerLoot) as T
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| loot      | [SeededContainerLoot](/vanilla/api/item/component/SeededContainerLoot) |


:::

:::group{name=withContainerLoot}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withContainerLoot(lootTable as ResourceKey<LootTable>, seed as long) as T
```

| Parameter |                                               Type                                               |
|-----------|--------------------------------------------------------------------------------------------------|
| lootTable | [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;[LootTable](/vanilla/api/loot/LootTable)&gt; |
| seed      | long                                                                                             |


:::

:::group{name=withCreativeSlotLock}

Sets the &lt;componenttype:minecraft:creative_slot_lock&gt; of the ComponentAccess to exist.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withCreativeSlotLock() as T

myMCItemStackMutable.withCreativeSlotLock();
```

:::

:::group{name=withCustomData}

Sets the &lt;componenttype:minecraft:custom_data&gt; of the ComponentAccess to have the given [CustomData](/vanilla/api/item/component/CustomData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withCustomData(customData as CustomData) as T
```

| Parameter  |                         Type                         |
|------------|------------------------------------------------------|
| customData | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withCustomData}

Sets the <componenttype:minecraft:custom_data> of the ComponentAccess to have the given [MapData](/vanilla/api/data/MapData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withCustomData(customData as MapData) as T

myMCItemStackMutable.withCustomData({custom_ammo_thing: 1, owner: "Benji"});
```

| Parameter  |                 Type                 |             Description              |
|------------|--------------------------------------|--------------------------------------|
| customData | [MapData](/vanilla/api/data/MapData) | The MapData to set the component to. |


:::

:::group{name=withCustomModelData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withCustomModelData(data as CustomModelData) as T
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| data      | [CustomModelData](/vanilla/api/item/component/CustomModelData) |


:::

:::group{name=withCustomModelData}

Sets the &lt;componenttype:minecraft:custom_data&gt; of the ComponentAccess to have the given [CustomData](/vanilla/api/item/component/CustomData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withCustomModelData(value as int) as T

myMCItemStackMutable.withCustomModelData(2);
```

| Parameter | Type |               Description               |
|-----------|------|-----------------------------------------|
| value     | int  | The value to set the CustomModelData to |


:::

:::group{name=withCustomName}

Sets the &lt;componenttype:minecraft:custom_name&gt; of the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withCustomName(name as Component) as T

myMCItemStackMutable.withCustomName(Component.literal("Fancy Water"));
myMCItemStackMutable.withCustomName(Component.translatable("mypack.lore.fancy_water"));
```

| Parameter |                   Type                   |      Description      |
|-----------|------------------------------------------|-----------------------|
| name      | [Component](/vanilla/api/text/Component) | The component to use. |


:::

:::group{name=withDamage}

Sets the &lt;componenttype:minecraft:damage&gt; of the ComponentAccess to have the given value.
 Damage is related to durability.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withDamage(damage as int) as T

myMCItemStackMutable.withDamage(16);
```

| Parameter | Type |              Description               |
|-----------|------|----------------------------------------|
| damage    | int  | The new damage of the ComponentAccess. |


:::

:::group{name=withDebugStickState}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withDebugStickState(state as DebugStickState) as T
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| state     | [DebugStickState](/vanilla/api/item/component/DebugStickState) |


:::

:::group{name=withDyedColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withDyedColor(color as DyedItemColor) as T
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| color     | [DyedItemColor](/vanilla/api/item/component/DyedItemColor) |


:::

:::group{name=withDyedColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withDyedColor(rgb as int, showInTooltip as boolean) as T
```

|   Parameter   |  Type   | Optional | Default Value |
|---------------|---------|----------|---------------|
| rgb           | int     | false    |               |
| showInTooltip | boolean | true     | true          |


:::

:::group{name=withEnchantment}

Sets the &lt;componenttype:minecraft:enchantments&gt; of the ComponentAccess to have the given [Enchantment](/vanilla/api/item/enchantment/Enchantment) and level.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withEnchantment(enchantment as Enchantment, level as int) as T

myMCItemStackMutable.withEnchantment(<enchantment:minecraft:efficiency>, 4);
```

|  Parameter  |                           Type                           |             Description             | Optional | Default Value |
|-------------|----------------------------------------------------------|-------------------------------------|----------|---------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment to add              | false    |               |
| level       | int                                                      | The level of the enchantment to set | true     | 1             |


:::

:::group{name=withEnchantmentGlintOverride}

Sets the &lt;componenttype:minecraft:enchantment_glint_override&gt; of the ComponentAccess to have the given value.

 If it is false, the item will never render the enchantment glint
 If it is true, the item will render the enchantment glint always, indenpendently of whether it is enchanted or not.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withEnchantmentGlintOverride(value as boolean) as T

myMCItemStackMutable.withEnchantmentGlintOverride(true);
```

| Parameter |  Type   |                  Description                  |
|-----------|---------|-----------------------------------------------|
| value     | boolean | The value of the override, as described above |


:::

:::group{name=withEnchantments}

Sets the &lt;componenttype:minecraft:enchantments&gt; of the ComponentAccess to have the given [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withEnchantments(enchantments as ItemEnchantments) as T
```

|  Parameter   |                               Type                               |
|--------------|------------------------------------------------------------------|
| enchantments | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments) |


:::

:::group{name=withEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withEntityData(data as CustomData) as T
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| data      | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withEntityData(data as MapData) as T
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=withFireResistant}

Sets the &lt;componenttype:minecraft:fire_resistant&gt; of the ComponentAccess to exist.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withFireResistant() as T

myMCItemStackMutable.withFireResistant();
```

:::

:::group{name=withFireworkExplosion}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withFireworkExplosion(explosion as FireworkExplosion) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| explosion | [FireworkExplosion](/vanilla/api/item/component/FireworkExplosion) |


:::

:::group{name=withFireworks}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withFireworks(fireworks as Fireworks) as T
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| fireworks | [Fireworks](/vanilla/api/item/component/Fireworks) |


:::

:::group{name=withFireworks}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withFireworks(flightDuration as int, explosions as stdlib.List<FireworkExplosion>) as T
```

|   Parameter    |                                         Type                                          |
|----------------|---------------------------------------------------------------------------------------|
| flightDuration | int                                                                                   |
| explosions     | stdlib.List&lt;[FireworkExplosion](/vanilla/api/item/component/FireworkExplosion)&gt; |


:::

:::group{name=withFood}

Sets the &lt;componenttype:minecraft:food&gt; of the ComponentAccess to have the given [FoodProperties](/vanilla/api/food/FoodProperties)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withFood(food as FoodProperties) as T
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| food      | [FoodProperties](/vanilla/api/food/FoodProperties) |


:::

:::group{name=withHideAdditionalTooltip}

Sets the &lt;componenttype:minecraft:hide_additional_tooltip&gt; of the ComponentAccess to exist.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withHideAdditionalTooltip() as T

myMCItemStackMutable.withHideAdditionalTooltip();
```

:::

:::group{name=withHideTooltip}

Sets the &lt;componenttype:minecraft:hide_tooltip&gt; of the ComponentAccess to exist.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withHideTooltip() as T

myMCItemStackMutable.withHideTooltip();
```

:::

:::group{name=withInstrument}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withInstrument(instrument as Instrument) as T
```

| Parameter  |                         Type                         |
|------------|------------------------------------------------------|
| instrument | [Instrument](/vanilla/api/item/component/Instrument) |


:::

:::group{name=withIntangibleProjectile}

Sets the &lt;componenttype:minecraft:intangible_projectile&gt; of the ComponentAccess to have exist.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withIntangibleProjectile() as T

myMCItemStackMutable.withIntangibleProjectile();
```

:::

:::group{name=withItemName}

Sets the &lt;componenttype:minecraft:item_name&gt; of the ComponentAccess to have the given [Component](/vanilla/api/text/Component)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withItemName(name as Component) as T

myMCItemStackMutable.withItemName(Component.literal("Fancy Water"));
myMCItemStackMutable.withItemName(Component.translatable("mypack.lore.fancy_water"));
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| name      | [Component](/vanilla/api/text/Component) |


:::

:::group{name=withJsonComponent}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.withJsonComponent(type as DataComponentType, value as IData?) as IItemStack
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType) |
| value     | [IData](/vanilla/api/data/IData)?                             |


:::

:::group{name=withJsonComponents}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.withJsonComponents(value as IData) as IItemStack
```

| Parameter |               Type               |
|-----------|----------------------------------|
| value     | [IData](/vanilla/api/data/IData) |


:::

:::group{name=withLock}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withLock(code as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| code      | string |


:::

:::group{name=withLock}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withLock(lock as invalid) as T
```

| Parameter |    Type     |
|-----------|-------------|
| lock      | **invalid** |


:::

:::group{name=withLodestoneTracker}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withLodestoneTracker(tracker as LodestoneTracker) as T
```

| Parameter |                               Type                               |
|-----------|------------------------------------------------------------------|
| tracker   | [LodestoneTracker](/vanilla/api/item/component/LodestoneTracker) |


:::

:::group{name=withLore}

Sets the &lt;componenttype:minecraft:lore&gt; of the ComponentAccess to have the given stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt;

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withLore(components as stdlib.List<Component>) as T

myMCItemStackMutable.withLore([Component.literal("Found in a dark cave"), Component.translatable("Belonged to a Dragon")]);
```

| Parameter  |                            Type                             |              Description               |
|------------|-------------------------------------------------------------|----------------------------------------|
| components | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; | The list of Components to add as lore. |


:::

:::group{name=withLore}

Sets the &lt;componenttype:minecraft:lore&gt; of the ComponentAccess to have the given [ItemLore](/vanilla/api/item/component/ItemLore)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withLore(lore as ItemLore) as T
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| lore      | [ItemLore](/vanilla/api/item/component/ItemLore) |


:::

:::group{name=withMapColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withMapColor(color as MapItemColor) as T
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| color     | [MapItemColor](/vanilla/api/item/component/MapItemColor) |


:::

:::group{name=withMapColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withMapColor(rgb as int) as T
```

| Parameter | Type |
|-----------|------|
| rgb       | int  |


:::

:::group{name=withMapDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withMapDecorations(decorations as MapDecorations) as T
```

|  Parameter  |                             Type                             |
|-------------|--------------------------------------------------------------|
| decorations | [MapDecorations](/vanilla/api/item/component/MapDecorations) |


:::

:::group{name=withMapDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withMapDecorations(decorations as MapDecorationsEntry[string]) as T
```

|  Parameter  |                                      Type                                      |
|-------------|--------------------------------------------------------------------------------|
| decorations | [MapDecorationsEntry](/vanilla/api/item/component/MapDecorationsEntry)[string] |


:::

:::group{name=withMapId}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withMapId(id as int) as T
```

| Parameter | Type |
|-----------|------|
| id        | int  |


:::

:::group{name=withMapId}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withMapId(mapId as invalid) as T
```

| Parameter |    Type     |
|-----------|-------------|
| mapId     | **invalid** |


:::

:::group{name=withMapPostProcessing}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withMapPostProcessing(value as MapPostProcessing) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| value     | [MapPostProcessing](/vanilla/api/item/component/MapPostProcessing) |


:::

:::group{name=withMaxDamage}

Sets the &lt;componenttype:minecraft:max_damage&gt; of the ComponentAccess to have the given value.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withMaxDamage(maxDamage as int) as T

myMCItemStackMutable.withMaxDamage(1024);
```

| Parameter | Type |
|-----------|------|
| maxDamage | int  |


:::

:::group{name=withMaxStackSize}

Sets the &lt;componenttype:minecraft:stack_size&gt; of the ComponentAccess to have the given value.
 Non standard stack sizes may render differently and may not be handled correctly by all mods. Test your changes!

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withMaxStackSize(maxStackSize as int) as T

myMCItemStackMutable.withMaxStackSize(16);
```

|  Parameter   | Type |                 Description                  |
|--------------|------|----------------------------------------------|
| maxStackSize | int  | The new maxStackSize of the ComponentAccess. |


:::

:::group{name=withNoteBlockSound}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withNoteBlockSound(sound as ResourceLocation) as T
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| sound     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=withOminousBottleAmplifier}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withOminousBottleAmplifier(amplifier as int) as T
```

| Parameter | Type |
|-----------|------|
| amplifier | int  |


:::

:::group{name=withPotDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withPotDecorations(decorations as PotDecorations) as T
```

|  Parameter  |                             Type                             |
|-------------|--------------------------------------------------------------|
| decorations | [PotDecorations](/vanilla/api/item/component/PotDecorations) |


:::

:::group{name=withPotDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withPotDecorations(back as ItemDefinition, left as ItemDefinition, right as ItemDefinition, front as ItemDefinition) as T
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| back      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| left      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| right     | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| front     | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=withPotionContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withPotionContents(contents as invalid) as T
```

| Parameter |    Type     |
|-----------|-------------|
| contents  | **invalid** |


:::

:::group{name=withPotionContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withPotionContents(potion as Potion) as T
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| potion    | [Potion](/vanilla/api/item/alchemy/Potion) |


:::

:::group{name=withPotionContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withPotionContents(potion as Potion, customEffects as stdlib.List<MobEffectInstance>) as T
```

|   Parameter   |                                         Type                                         |
|---------------|--------------------------------------------------------------------------------------|
| potion        | [Potion](/vanilla/api/item/alchemy/Potion)                                           |
| customEffects | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; |


:::

:::group{name=withPotionContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withPotionContents(potion as Potion, customColor as int, customEffects as stdlib.List<MobEffectInstance>) as T
```

|   Parameter   |                                         Type                                         |
|---------------|--------------------------------------------------------------------------------------|
| potion        | [Potion](/vanilla/api/item/alchemy/Potion)                                           |
| customColor   | int                                                                                  |
| customEffects | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; |


:::

:::group{name=withProfile}

Return Type: T

```zenscript
MCItemStackMutable.withProfile(profile as ResolvableProfile) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| profile   | [ResolvableProfile](/vanilla/api/item/component/ResolvableProfile) |


:::

:::group{name=withRarity}

Sets the &lt;componenttype:minecraft:rarity&gt; of the ComponentAccess to have the given [Rarity](/vanilla/api/item/property/Rarity)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withRarity(rarity as Rarity) as T

myMCItemStackMutable.withRarity(<constant:minecraft:item/rarity:epic>);
```

| Parameter |                    Type                     |    Description    |
|-----------|---------------------------------------------|-------------------|
| rarity    | [Rarity](/vanilla/api/item/property/Rarity) | The rarity to set |


:::

:::group{name=withRecipes}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withRecipes(recipes as stdlib.List<ResourceLocation>) as T
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| recipes   | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt; |


:::

:::group{name=withRepairCost}

Sets the &lt;componenttype:minecraft:repair_cost&gt; of the ComponentAccess to have the given value.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withRepairCost(cost as int) as T

myMCItemStackMutable.withRepairCost(20);
```

| Parameter | Type |   Description   |
|-----------|------|-----------------|
| cost      | int  | The repair cost |


:::

:::group{name=withStoredEnchantments}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withStoredEnchantments(enchantments as ItemEnchantments) as T
```

|  Parameter   |                               Type                               |
|--------------|------------------------------------------------------------------|
| enchantments | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments) |


:::

:::group{name=withSuspiciousStewEffects}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withSuspiciousStewEffects(effects as stdlib.List<SuspiciousStewEffectsEntry>) as T
```

| Parameter |                                                  Type                                                   |
|-----------|---------------------------------------------------------------------------------------------------------|
| effects   | stdlib.List&lt;[SuspiciousStewEffectsEntry](/vanilla/api/item/component/SuspiciousStewEffectsEntry)&gt; |


:::

:::group{name=withSuspiciousStewEffects}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withSuspiciousStewEffects(suspiciousStewEffects as SuspiciousStewEffects) as T
```

|       Parameter       |                                    Type                                    |
|-----------------------|----------------------------------------------------------------------------|
| suspiciousStewEffects | [SuspiciousStewEffects](/vanilla/api/item/component/SuspiciousStewEffects) |


:::

:::group{name=withTool}

Sets the &lt;componenttype:minecraft:tool&gt; of the ComponentAccess to have the given [Tool](/vanilla/api/item/component/Tool)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withTool(tool as Tool) as T
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| tool      | [Tool](/vanilla/api/item/component/Tool) |


:::

:::group{name=withTool}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withTool(rules as stdlib.List<ToolRule>, defaultMiningSpeed as float, damagePerBlock as int) as T
```

|     Parameter      |                                Type                                 |
|--------------------|---------------------------------------------------------------------|
| rules              | stdlib.List&lt;[ToolRule](/vanilla/api/item/component/ToolRule)&gt; |
| defaultMiningSpeed | float                                                               |
| damagePerBlock     | int                                                                 |


:::

:::group{name=withTrim}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withTrim(trim as ArmorTrim) as T
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| trim      | [ArmorTrim](/vanilla/api/item/armortrim/ArmorTrim) |


:::

:::group{name=withUnbreakable}

Sets the &lt;componenttype:minecraft:unbreakable&gt; of the ComponentAccess.
 The existance of the component makes the ComponentAccess unbreakable.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withUnbreakable(showInTooltip as boolean) as T
```

|   Parameter   |  Type   |                              Description                              | Optional | Default Value |
|---------------|---------|-----------------------------------------------------------------------|----------|---------------|
| showInTooltip | boolean | Whether to show that the ComponentAccess is unbreakable in a tooltip. | true     | true          |


:::

:::group{name=withUnbreakable}

Sets the &lt;componenttype:minecraft:unbreakable&gt; of the ComponentAccess.
 The existance of the component makes the ComponentAccess unbreakable.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withUnbreakable(unbreakable as Unbreakable) as T
```

|  Parameter  |                          Type                          |                                           Description                                           |
|-------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| unbreakable | [Unbreakable](/vanilla/api/item/component/Unbreakable) | The [Unbreakable](/vanilla/api/item/component/Unbreakable) instance with the configured values. |


:::

:::group{name=withWritableBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withWritableBookContent(content as WritableBookContent) as T
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| content   | [WritableBookContent](/vanilla/api/item/component/WritableBookContent) |


:::

:::group{name=withWritableBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withWritableBookContent(pages as stdlib.List<Filterable<string>>) as T
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| pages     | stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;string&gt;&gt; |


:::

:::group{name=withWrittenBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
MCItemStackMutable.withWrittenBookContent(content as WrittenBookContent) as T
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| content   | [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent) |


:::

:::group{name=without}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
MCItemStackMutable.without<T : Object>(type as DataComponentType<T>) as IItemStack
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| T         | Object                                                                 |


:::

:::group{name=withoutAttributeModifiers}

Removes the &lt;componenttype:minecraft:attribute_modifiers&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutAttributeModifiers() as T

myMCItemStackMutable.withoutAttributeModifiers();
```

:::

:::group{name=withoutBannerPatterns}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutBannerPatterns() as T

myMCItemStackMutable.withoutBannerPatterns();
```

:::

:::group{name=withoutBaseColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutBaseColor() as T

myMCItemStackMutable.withoutBaseColor();
```

:::

:::group{name=withoutBees}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutBees() as T

myMCItemStackMutable.withoutBees();
```

:::

:::group{name=withoutBlockEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutBlockEntityData() as T

myMCItemStackMutable.withoutBlockEntityData();
```

:::

:::group{name=withoutBlockState}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutBlockState() as T

myMCItemStackMutable.withoutBlockState();
```

:::

:::group{name=withoutBucketEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutBucketEntityData() as T

myMCItemStackMutable.withoutBucketEntityData();
```

:::

:::group{name=withoutBundleContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutBundleContents() as T

myMCItemStackMutable.withoutBundleContents();
```

:::

:::group{name=withoutCanBreak}

Removes the &lt;componenttype:minecraft:can_break&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutCanBreak() as T

myMCItemStackMutable.withoutCanBreak();
```

:::

:::group{name=withoutCanPlaceOn}

Removes the &lt;componenttype:minecraft:can_place_on&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutCanPlaceOn() as T

myMCItemStackMutable.withoutCanPlaceOn();
```

:::

:::group{name=withoutChargedProjectiles}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutChargedProjectiles() as T

myMCItemStackMutable.withoutChargedProjectiles();
```

:::

:::group{name=withoutContainer}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutContainer() as T

myMCItemStackMutable.withoutContainer();
```

:::

:::group{name=withoutContainerLoot}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutContainerLoot() as T

myMCItemStackMutable.withoutContainerLoot();
```

:::

:::group{name=withoutCreativeSlotLock}

Removes the &lt;componenttype:minecraft:creative_slot_lock&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutCreativeSlotLock() as T

myMCItemStackMutable.withoutCreativeSlotLock();
```

:::

:::group{name=withoutCustomData}

Removes the &lt;componenttype:minecraft:custom_data&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutCustomData() as T

myMCItemStackMutable.withoutCustomData();
```

:::

:::group{name=withoutCustomModelData}

Removes the &lt;componenttype:minecraft:custom_model_data&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutCustomModelData() as T

myMCItemStackMutable.withoutCustomModelData();
```

:::

:::group{name=withoutCustomName}

Removes the &lt;componenttype:minecraft:custom_name&gt; from the ComponentAccess

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutCustomName() as T

myMCItemStackMutable.withoutCustomName();
```

:::

:::group{name=withoutDamage}

Removes the &lt;componenttype:minecraft:damage&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutDamage() as T

myMCItemStackMutable.withoutDamage();
```

:::

:::group{name=withoutDebugStickState}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutDebugStickState() as T

myMCItemStackMutable.withoutDebugStickState();
```

:::

:::group{name=withoutDyedColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutDyedColor() as T

myMCItemStackMutable.withoutDyedColor();
```

:::

:::group{name=withoutEnchantment}

Removes the [Enchantment](/vanilla/api/item/enchantment/Enchantment) from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutEnchantment(enchantment as Enchantment) as T

myMCItemStackMutable.withoutEnchantment(<enchantment:minecraft:mending>);
```

|  Parameter  |                           Type                           |                              Description                               |
|-------------|----------------------------------------------------------|------------------------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The [Enchantment](/vanilla/api/item/enchantment/Enchantment) to remove |


:::

:::group{name=withoutEnchantmentGlintOverride}

Removes the &lt;componenttype:minecraft:enchantment_glint_override&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutEnchantmentGlintOverride() as T

myMCItemStackMutable.withoutEnchantmentGlintOverride();
```

:::

:::group{name=withoutEnchantments}

Removes the &lt;componenttype:minecraft:enchantments&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutEnchantments() as T

myMCItemStackMutable.withoutEnchantments();
```

:::

:::group{name=withoutEntityDate}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutEntityDate() as T

myMCItemStackMutable.withoutEntityDate();
```

:::

:::group{name=withoutFireResistant}

Removes the &lt;componenttype:minecraft:fire_resistant&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutFireResistant() as T

myMCItemStackMutable.withoutFireResistant();
```

:::

:::group{name=withoutFireworkExplosion}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutFireworkExplosion() as T

myMCItemStackMutable.withoutFireworkExplosion();
```

:::

:::group{name=withoutFireworks}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutFireworks() as T

myMCItemStackMutable.withoutFireworks();
```

:::

:::group{name=withoutFood}

Removes the &lt;componenttype:minecraft:food&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutFood() as T

myMCItemStackMutable.withoutFood();
```

:::

:::group{name=withoutHideAdditionalTooltip}

Removes the &lt;componenttype:minecraft:hide_additional_tooltip&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutHideAdditionalTooltip() as T

myMCItemStackMutable.withoutHideAdditionalTooltip();
```

:::

:::group{name=withoutHideTooltip}

Removes the &lt;componenttype:minecraft:hide_tooltip&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutHideTooltip() as T

myMCItemStackMutable.withoutHideTooltip();
```

:::

:::group{name=withoutInstrument}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutInstrument() as T

myMCItemStackMutable.withoutInstrument();
```

:::

:::group{name=withoutIntangibleProjectile}

Removes the &lt;componenttype:minecraft:intangible_projectile&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutIntangibleProjectile() as T

myMCItemStackMutable.withoutIntangibleProjectile();
```

:::

:::group{name=withoutItemName}

Removes the &lt;componenttype:minecraft:item_name&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutItemName() as T

myMCItemStackMutable.withoutItemName();
```

:::

:::group{name=withoutLock}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutLock() as T

myMCItemStackMutable.withoutLock();
```

:::

:::group{name=withoutLodestoneTracker}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutLodestoneTracker() as T

myMCItemStackMutable.withoutLodestoneTracker();
```

:::

:::group{name=withoutLore}

Removes the &lt;componenttype:minecraft:lore&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutLore() as T

myMCItemStackMutable.withoutLore();
```

:::

:::group{name=withoutMapColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutMapColor() as T

myMCItemStackMutable.withoutMapColor();
```

:::

:::group{name=withoutMapDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutMapDecorations() as T

myMCItemStackMutable.withoutMapDecorations();
```

:::

:::group{name=withoutMapId}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutMapId() as T

myMCItemStackMutable.withoutMapId();
```

:::

:::group{name=withoutMapPostProcessing}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutMapPostProcessing() as T

myMCItemStackMutable.withoutMapPostProcessing();
```

:::

:::group{name=withoutMaxDamage}

Removes the &lt;componenttype:minecraft:max_damage&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutMaxDamage() as T

myMCItemStackMutable.withoutMaxDamage();
```

:::

:::group{name=withoutMaxStackSize}

Removes the &lt;componenttype:minecraft:stack_size&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutMaxStackSize() as T

myMCItemStackMutable.withoutMaxStackSize();
```

:::

:::group{name=withoutNoteBlockSound}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutNoteBlockSound() as T

myMCItemStackMutable.withoutNoteBlockSound();
```

:::

:::group{name=withoutOminousBottleAmplifier}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutOminousBottleAmplifier() as T

myMCItemStackMutable.withoutOminousBottleAmplifier();
```

:::

:::group{name=withoutPotDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutPotDecorations() as T

myMCItemStackMutable.withoutPotDecorations();
```

:::

:::group{name=withoutPotionContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutPotionContents() as T

myMCItemStackMutable.withoutPotionContents();
```

:::

:::group{name=withoutProfile}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutProfile() as T

myMCItemStackMutable.withoutProfile();
```

:::

:::group{name=withoutRarity}

Removes the &lt;componenttype:minecraft:rarity&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutRarity() as T

myMCItemStackMutable.withoutRarity();
```

:::

:::group{name=withoutRecipes}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutRecipes() as T

myMCItemStackMutable.withoutRecipes();
```

:::

:::group{name=withoutRepairCost}

Removes the &lt;componenttype:minecraft:repair_cost&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutRepairCost() as T

myMCItemStackMutable.withoutRepairCost();
```

:::

:::group{name=withoutStoredEnchantments}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutStoredEnchantments() as T

myMCItemStackMutable.withoutStoredEnchantments();
```

:::

:::group{name=withoutSuspiciousStewEffects}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutSuspiciousStewEffects() as T

myMCItemStackMutable.withoutSuspiciousStewEffects();
```

:::

:::group{name=withoutTool}

Removes the &lt;componenttype:minecraft:tool&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutTool() as T

myMCItemStackMutable.withoutTool();
```

:::

:::group{name=withoutTrim}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutTrim() as T

myMCItemStackMutable.withoutTrim();
```

:::

:::group{name=withoutUnbreakable}

Removes the &lt;componenttype:minecraft:unbreakable&gt; from the ComponentAccess

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutUnbreakable() as T

myMCItemStackMutable.withoutUnbreakable();
```

:::

:::group{name=withoutWritableBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutWritableBookContent() as T

myMCItemStackMutable.withoutWritableBookContent();
```

:::

:::group{name=withoutWrittenBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// MCItemStackMutable.withoutWrittenBookContent() as T

myMCItemStackMutable.withoutWrittenBookContent();
```

:::


## Operators

:::group{name=CONTAINS}

Does the ingredient contain the given ingredient?

```zenscript
ingredient as IIngredient in myMCItemStackMutable
(<item:minecraft:iron_ingot> | <item:minecraft:gold_ingot>) in myMCItemStackMutable
```

:::

:::group{name=EQUALS}

```zenscript
myMCItemStackMutable == o as Object
```

:::

:::group{name=MOD}

```zenscript
myMCItemStackMutable % percentage as double
```

:::

:::group{name=MUL}

Use this in contexts where machines accept more than one item to state that fact.

```zenscript
myMCItemStackMutable * amount as int
```

:::

:::group{name=OR}

```zenscript
myMCItemStackMutable | other as IIngredient
```

:::


## Properties

|            Name             |                                                    Type                                                    | Has Getter | Has Setter |                                                                                                              Description                                                                                                               |
|-----------------------------|------------------------------------------------------------------------------------------------------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amount                      | int                                                                                                        | true       | false      | Gets the amount of Items in the ItemStack                                                                                                                                                                                              |
| attributeModifiers          | [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers)                               | true       | false      | Gets the data in &lt;componenttype:minecraft:attribute_modifiers&gt;                                                                                                                                                                   |
| bannerPatterns              | [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers)                                       | true       | false      |                                                                                                                                                                                                                                        |
| baseColor                   | **invalid**                                                                                                | true       | false      |                                                                                                                                                                                                                                        |
| bees                        | stdlib.List&lt;[BeehiveBlockEntityOccupant](/vanilla/api/block/entity/type/BeehiveBlockEntityOccupant)&gt; | true       | false      |                                                                                                                                                                                                                                        |
| blockEntityData             | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      |                                                                                                                                                                                                                                        |
| blockState                  | [BlockItemStateProperties](/vanilla/api/item/component/BlockItemStateProperties)                           | true       | false      |                                                                                                                                                                                                                                        |
| bucketEntityData            | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      |                                                                                                                                                                                                                                        |
| bundleContents              | [BundleContents](/vanilla/api/item/component/BundleContents)                                               | true       | false      |                                                                                                                                                                                                                                        |
| burnTime                    | void                                                                                                       | true       | true       | Sets the burn time of this ingredient, for use in the furnace and other machines                                                                                                                                                       |
| canBreak                    | [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)                               | true       | false      | Gets the data in &lt;componenttype:minecraft:can_break&gt;                                                                                                                                                                             |
| canPlaceOn                  | [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)                               | true       | false      | Gets the data in &lt;componenttype:minecraft:can_place_on&gt;                                                                                                                                                                          |
| chargedProjectiles          | [ChargedProjectiles](/vanilla/api/item/component/ChargedProjectiles)                                       | true       | false      |                                                                                                                                                                                                                                        |
| componentsPatch             | [DataComponentPatch](/vanilla/api/component/DataComponentPatch)                                            | true       | false      |                                                                                                                                                                                                                                        |
| container                   | [ItemContainerContents](/vanilla/api/item/component/ItemContainerContents)                                 | true       | false      |                                                                                                                                                                                                                                        |
| containerLoot               | [SeededContainerLoot](/vanilla/api/item/component/SeededContainerLoot)                                     | true       | false      |                                                                                                                                                                                                                                        |
| creativeSlotLock            | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:creative_slot_lock&gt;                                                                                                                                                                    |
| customData                  | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      | Gets the data in the &lt;componenttype:minecraft:custom_data&gt;                                                                                                                                                                       |
| customModelData             | [CustomModelData](/vanilla/api/item/component/CustomModelData)                                             | true       | false      | Gets the data in &lt;componenttype:minecraft:custom_model_data&gt;                                                                                                                                                                     |
| customName                  | [Component](/vanilla/api/text/Component)                                                                   | true       | false      | Gets the data in the &lt;componenttype:minecraft:custom_name&gt; <br />  <br />  A custom name is generally displayed in italics and controlled by the user.                                                                           |
| damage                      | int                                                                                                        | true       | false      | Gets the data in the &lt;componenttype:minecraft:damage&gt;                                                                                                                                                                            |
| damageableItem              | boolean                                                                                                    | true       | false      | Returns if the ItemStack is damageable <br />  I.E Swords and tools are damageable, sticks are not.                                                                                                                                    |
| damaged                     | boolean                                                                                                    | true       | false      | Returns if the ItemStack is damaged <br />  I.E a Swords that is no at full durability is damaged.                                                                                                                                     |
| debugStickState             | [DebugStickState](/vanilla/api/item/component/DebugStickState)                                             | true       | false      |                                                                                                                                                                                                                                        |
| definition                  | [ItemDefinition](/vanilla/api/item/ItemDefinition)                                                         | true       | false      |                                                                                                                                                                                                                                        |
| descriptionId               | string                                                                                                     | true       | false      | Returns the unlocalized Name of the Item in the ItemStack                                                                                                                                                                              |
| displayName                 | [Component](/vanilla/api/text/Component)                                                                   | true       | false      | Gets the display name of the ItemStack                                                                                                                                                                                                 |
| dyedColor                   | [DyedItemColor](/vanilla/api/item/component/DyedItemColor)                                                 | true       | false      |                                                                                                                                                                                                                                        |
| enchantmentGlintOverride    | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:enchantment_glint_override&gt; <br />  <br />  If it is present, it is first checked to determine whether there is special behaviour, otherwise <br />  the code checks for enchantments. |
| enchantments                | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)                                           | true       | false      | Gets the data in &lt;componenttype:minecraft:enchantments&gt;                                                                                                                                                                          |
| entityData                  | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      |                                                                                                                                                                                                                                        |
| fireworkExplosion           | [FireworkExplosion](/vanilla/api/item/component/FireworkExplosion)                                         | true       | false      |                                                                                                                                                                                                                                        |
| fireworks                   | [Fireworks](/vanilla/api/item/component/Fireworks)                                                         | true       | false      |                                                                                                                                                                                                                                        |
| food                        | [FoodProperties](/vanilla/api/food/FoodProperties)                                                         | true       | false      | Gets the data in &lt;componenttype:minecraft:food&gt;                                                                                                                                                                                  |
| hasAttributeModifiers       | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:attribute_modifiers&gt;                                                                                                                                             |
| hasBannerPatterns           | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasBaseColor                | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasBees                     | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasBlockEntityData          | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasBlockState               | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasBucketEntityData         | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasBundleContents           | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasCanBreak                 | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:can_break&gt;                                                                                                                                                       |
| hasCanPlaceOn               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:can_place_on&gt;                                                                                                                                                    |
| hasChargedProjectiles       | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasContainer                | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasContainerLoot            | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasCustomData               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:custom_data&gt;                                                                                                                                                 |
| hasCustomModelData          | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:custom_model_data&gt;                                                                                                                                               |
| hasCustomName               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:custom_name&gt;                                                                                                                                                 |
| hasDamage                   | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:damage&gt;                                                                                                                                                      |
| hasDebugStickState          | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasDyedColor                | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasEnchantmentGlintOverride | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:enchantment_glint_override&gt;                                                                                                                                      |
| hasEnchantments             | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:enchantments&gt;                                                                                                                                                |
| hasEntityData               | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasFireworkExplosion        | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasFireworks                | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasFoil                     | boolean                                                                                                    | true       | false      | Returns true if this ItemStack has a foil effect. <br />  <br />  Foil is the glint / effect that is added to enchanted ItemStacks (and other items).                                                                                  |
| hasFood                     | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:food&gt;                                                                                                                                                            |
| hasInstrument               | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasItemName                 | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:item_namegt;                                                                                                                                                    |
| hasLock                     | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasLodestoneTracker         | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasLore                     | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:lore&gt;                                                                                                                                                        |
| hasMapColor                 | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasMapDecorations           | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasMapId                    | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasMapPostProcessing        | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasMaxDamage                | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:max_damage&gt;                                                                                                                                                  |
| hasMaxStackSize             | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:max_stack_size&gt;                                                                                                                                              |
| hasNoteBlockSound           | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasOminousBottleAmplifier   | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasPotDecorations           | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasPotionContents           | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasProfile                  | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasRarity                   | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:rarity&gt;                                                                                                                                                      |
| hasRecipes                  | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasRepairCost               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:repair_cost&gt;                                                                                                                                                     |
| hasStoredEnchantments       | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasSuspiciousStewEffects    | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasTool                     | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:tool&gt;                                                                                                                                                            |
| hasTrim                     | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasUnbreakable              | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:unbreakable&gt;                                                                                                                                                 |
| hasWritableBookContent      | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hasWrittenBookContent       | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| hideAdditionalTooltip       | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:hide_additional_tooltip&gt;                                                                                                                                                               |
| hideTooltip                 | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:hide_tooltip&gt;                                                                                                                                                                          |
| hoverName                   | [Component](/vanilla/api/text/Component)                                                                   | true       | false      | Gets the hover name of the ItemStack. <br />  <br />  This will give the raw name without the formatting that 'displayName' applies.                                                                                                   |
| instrument                  | [Instrument](/vanilla/api/item/component/Instrument)                                                       | true       | false      |                                                                                                                                                                                                                                        |
| isEnchantable               | boolean                                                                                                    | true       | false      | Can this ItemStack be enchanted?                                                                                                                                                                                                       |
| isFireResistant             | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:fire_resistant&gt;                                                                                                                                                                        |
| isIntangibleProjectile      | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:intangible_projectile&gt;                                                                                                                                                                 |
| isMutable                   | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| itemName                    | [Component](/vanilla/api/text/Component)                                                                   | true       | false      | Gets the data in the &lt;componenttype:minecraft:custom_name&gt; <br />  <br />  In the case of items, an item name is set by the make to make a special instance of an item, such as with <br />  ominous banners.                    |
| lockComponent               | **invalid**                                                                                                | true       | false      |                                                                                                                                                                                                                                        |
| lodestoneTracker            | [LodestoneTracker](/vanilla/api/item/component/LodestoneTracker)                                           | true       | false      |                                                                                                                                                                                                                                        |
| lore                        | [ItemLore](/vanilla/api/item/component/ItemLore)                                                           | true       | false      | Gets the data in the &lt;componenttype:minecraft:lore&gt;                                                                                                                                                                              |
| mapColor                    | [MapItemColor](/vanilla/api/item/component/MapItemColor)                                                   | true       | false      |                                                                                                                                                                                                                                        |
| mapDecorations              | [MapDecorations](/vanilla/api/item/component/MapDecorations)                                               | true       | false      |                                                                                                                                                                                                                                        |
| mapId                       | **invalid**                                                                                                | true       | false      |                                                                                                                                                                                                                                        |
| mapPostProcessing           | [MapPostProcessing](/vanilla/api/item/component/MapPostProcessing)                                         | true       | false      |                                                                                                                                                                                                                                        |
| maxDamage                   | int                                                                                                        | true       | false      | Returns the max damage of the ItemStack <br />  This is the max durability of the ItemStack.                                                                                                                                           |
| maxStackSize                | int                                                                                                        | true       | false      | Gets the data in the &lt;componenttype:minecraft:max_stack_size&gt;                                                                                                                                                                    |
| noteBlockSound              | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                                 | true       | false      |                                                                                                                                                                                                                                        |
| ominousBottleAmplifier      | int                                                                                                        | true       | false      |                                                                                                                                                                                                                                        |
| owner                       | string                                                                                                     | true       | false      | Gets owning mod for the Item in this IItemStack                                                                                                                                                                                        |
| potDecorations              | [PotDecorations](/vanilla/api/item/component/PotDecorations)                                               | true       | false      |                                                                                                                                                                                                                                        |
| potionContents              | **invalid**                                                                                                | true       | false      |                                                                                                                                                                                                                                        |
| profile                     | [ResolvableProfile](/vanilla/api/item/component/ResolvableProfile)                                         | true       | false      |                                                                                                                                                                                                                                        |
| prototype                   | [DataComponentMap](/vanilla/api/component/DataComponentMap)                                                | true       | false      |                                                                                                                                                                                                                                        |
| rarity                      | [Rarity](/vanilla/api/item/property/Rarity)                                                                | true       | false      | Gets the data in the &lt;componenttype:minecraft:rarity&gt;                                                                                                                                                                            |
| recipes                     | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;                              | true       | false      |                                                                                                                                                                                                                                        |
| registryName                | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                                 | true       | false      | Gets the registry name for the Item in this IItemStack                                                                                                                                                                                 |
| repairCost                  | int                                                                                                        | true       | false      | Gets the data in &lt;componenttype:minecraft:repair_cost&gt;                                                                                                                                                                           |
| stackable                   | boolean                                                                                                    | true       | false      | Returns if the ItemStack can have an amount greater than 1 <br />  I.E Swords and tools are not stackable, sticks are.                                                                                                                 |
| storedEnchantments          | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)                                           | true       | false      |                                                                                                                                                                                                                                        |
| suspiciousStewEffects       | [SuspiciousStewEffects](/vanilla/api/item/component/SuspiciousStewEffects)                                 | true       | false      |                                                                                                                                                                                                                                        |
| tool                        | [Tool](/vanilla/api/item/component/Tool)                                                                   | true       | false      | Gets the data in &lt;componenttype:minecraft:tool&gt;                                                                                                                                                                                  |
| trim                        | [ArmorTrim](/vanilla/api/item/armortrim/ArmorTrim)                                                         | true       | false      |                                                                                                                                                                                                                                        |
| unbreakable                 | [Unbreakable](/vanilla/api/item/component/Unbreakable)                                                     | true       | false      | Gets the data in the &lt;componenttype:minecraft:unbreakable&gt;                                                                                                                                                                       |
| useOnRelease                | boolean                                                                                                    | true       | false      | Returns true if this stack is considered a crossbow item                                                                                                                                                                               |
| writableBookContent         | [WritableBookContent](/vanilla/api/item/component/WritableBookContent)                                     | true       | false      |                                                                                                                                                                                                                                        |
| writtenBookContent          | [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent)                                       | true       | false      |                                                                                                                                                                                                                                        |


# IFluidStack

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.IFluidStack;
```


## Implemented Interfaces
IFluidStack implements the following interfaces. That means all methods defined in these interfaces are also available in IFluidStack

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)
- [DataComponentHolder](/vanilla/api/component/DataComponentHolder)
- [ComponentAccess](/vanilla/api/component/ComponentAccess)&lt;[IFluidStack](/vanilla/api/fluid/IFluidStack)&gt;

## Static Methods

:::group{name=empty}

Gets the empty IFluidStack

Returns: The empty IFluidStack  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.empty() as IFluidStack

IFluidStack.empty();
```

:::

## Casters

|                      Result Type                      | Is Implicit |
|-------------------------------------------------------|-------------|
| [Fluid](/vanilla/api/fluid/Fluid)                     | true        |
| [FluidIngredient](/vanilla/api/fluid/FluidIngredient) | true        |
| [IData](/vanilla/api/data/IData)                      | true        |

## Methods

:::group{name=applyComponents}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.applyComponents(map as DataComponentMap) as IFluidStack
```

| Parameter |                            Type                             |
|-----------|-------------------------------------------------------------|
| map       | [DataComponentMap](/vanilla/api/component/DataComponentMap) |


:::

:::group{name=applyComponents}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.applyComponents(patch as DataComponentPatch) as IFluidStack
```

| Parameter |                              Type                               |
|-----------|-----------------------------------------------------------------|
| patch     | [DataComponentPatch](/vanilla/api/component/DataComponentPatch) |


:::

:::group{name=asIData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// IFluidStack.asIData() as IData

myIFluidStack.asIData();
```

:::

:::group{name=asImmutable}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.asImmutable() as IFluidStack

myIFluidStack.asImmutable();
```

:::

:::group{name=asMutable}

Makes this stack mutable

Returns: A new Stack, that is mutable.  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.asMutable() as IFluidStack

myIFluidStack.asMutable();
```

:::

:::group{name=copy}

Copies the stack. Only needed when mutable stacks are involved.

Returns: A new stack, that contains the same info as this one  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.copy() as IFluidStack

myIFluidStack.copy();
```

:::

:::group{name=isImmutable}

Return Type: boolean

```zenscript
// IFluidStack.isImmutable() as boolean

myIFluidStack.isImmutable();
```

:::

:::group{name=matches}

Checks if this IFluidStack, matches the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

Returns: true if this fluid contains the other fluid  
Return Type: boolean

```zenscript
IFluidStack.matches(other as IFluidStack) as boolean
```

| Parameter |                     Type                      |             Description              |
|-----------|-----------------------------------------------|--------------------------------------|
| other     | [IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


:::

:::group{name=remove}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.remove<T : Object>(type as DataComponentType<T>) as IFluidStack
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| T         | Object                                                                 |


:::

:::group{name=setAmount}

Sets the fluid amount in MilliBuckets (mB)

Returns: A new stack, or this stack, depending on if this stack is mutable  
Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
// IFluidStack.setAmount(amount as int) as IFluidStack

myIFluidStack.setAmount(1000);
```

| Parameter | Type |            Description            |
|-----------|------|-----------------------------------|
| amount    | int  | The amount to multiply this stack |


:::

:::group{name=update}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.update<T : Object>(type as DataComponentType<T>, defaultValue as T, operator as UnaryOperator<T>) as IFluidStack
```

|  Parameter   |                                  Type                                  |
|--------------|------------------------------------------------------------------------|
| type         | [DataComponentType](/vanilla/api/component/DataComponentType)&lt;T&gt; |
| defaultValue | T                                                                      |
| operator     | UnaryOperator&lt;T&gt;                                                 |
| T            | Object                                                                 |


:::

:::group{name=update}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.update<T : Object, U : Object>(type as DataComponentType<T>, defaultValue as T, data as U, operator as BiFunction<T,U,T>) as IFluidStack
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

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.with<T : Object>(type as DataComponentType<T>, value as @org.openzen.zencode.java.ZenCodeType.Nullable T) as IFluidStack
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
// IFluidStack.withAttributeModifiers(modifiers as ItemAttributeModifiers) as T

myIFluidStack.withAttributeModifiers(ItemAttributeModifiers.builder().add(<attribute:minecraft:player.block_break_speed>,
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
IFluidStack.withAttributeModifiers(modifier as ItemAttributeModifiersEntry, showInTooltip as boolean) as T
```

|   Parameter   |                                          Type                                          | Optional | Default Value |
|---------------|----------------------------------------------------------------------------------------|----------|---------------|
| modifier      | [ItemAttributeModifiersEntry](/vanilla/api/item/component/ItemAttributeModifiersEntry) | false    |               |
| showInTooltip | boolean                                                                                | true     | true          |


:::

:::group{name=withAttributeModifiers}

Return Type: T

```zenscript
IFluidStack.withAttributeModifiers(modifiers as stdlib.List<ItemAttributeModifiersEntry>, showInTooltip as boolean) as T
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
IFluidStack.withBannerPatterns(layers as BannerPatternLayers) as T
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| layers    | [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers) |


:::

:::group{name=withBannerPatterns}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBannerPatterns(layers as stdlib.List<BannerPatternLayersLayer>) as T
```

| Parameter |                                               Type                                                |
|-----------|---------------------------------------------------------------------------------------------------|
| layers    | stdlib.List&lt;[BannerPatternLayersLayer](/vanilla/api/block/entity/BannerPatternLayersLayer)&gt; |


:::

:::group{name=withBaseColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBaseColor(color as invalid) as T
```

| Parameter |    Type     |
|-----------|-------------|
| color     | **invalid** |


:::

:::group{name=withBees}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBees(occupants as stdlib.List<BeehiveBlockEntityOccupant>) as T
```

| Parameter |                                                    Type                                                    |
|-----------|------------------------------------------------------------------------------------------------------------|
| occupants | stdlib.List&lt;[BeehiveBlockEntityOccupant](/vanilla/api/block/entity/type/BeehiveBlockEntityOccupant)&gt; |


:::

:::group{name=withBlockEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBlockEntityData(data as CustomData) as T
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| data      | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withBlockEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBlockEntityData(data as MapData) as T
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=withBlockState}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBlockState(properties as BlockItemStateProperties) as T
```

| Parameter  |                                       Type                                       |
|------------|----------------------------------------------------------------------------------|
| properties | [BlockItemStateProperties](/vanilla/api/item/component/BlockItemStateProperties) |


:::

:::group{name=withBucketEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBucketEntityData(data as CustomData) as T
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| data      | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withBucketEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBucketEntityData(data as MapData) as T
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=withBundleContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBundleContents(contents as BundleContents) as T
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| contents  | [BundleContents](/vanilla/api/item/component/BundleContents) |


:::

:::group{name=withBundleContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withBundleContents(contents as stdlib.List<IItemStack>) as T
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| contents  | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

:::group{name=withCanBreak}

Sets the &lt;componenttype:minecraft:can_break&gt; of the ComponentAccess to have the given **invalid**

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withCanBreak(predicate as invalid) as T
```

| Parameter |    Type     |                                           Description                                           |
|-----------|-------------|-------------------------------------------------------------------------------------------------|
| predicate | **invalid** | The adventure mode predicate to use to determine whether the item can be used to break a block. |


:::

:::group{name=withCanBreak}

Sets the &lt;componenttype:minecraft:can_break&gt; with the given BlockPredicates.

 Any predicate that matches will allow the Block to be broken by this ItemStack.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withCanBreak(predicates as stdlib.List<BlockPredicate>, showInTooltip as boolean) as T

myIFluidStack.withCanBreak(BlockPredicate.create().of(<block:minecraft:diamond_ore>).build(), true);
```

|   Parameter   |                                    Type                                    |                    Description                     | Optional | Default Value |
|---------------|----------------------------------------------------------------------------|----------------------------------------------------|----------|---------------|
| predicates    | stdlib.List&lt;[BlockPredicate](/vanilla/api/predicate/BlockPredicate)&gt; | The collection of predicates to test for           | false    |               |
| showInTooltip | boolean                                                                    | Whether to show the ability in the tooltip or not. | true     | true          |


:::

:::group{name=withCanPlaceOn}

Sets the &lt;componenttype:minecraft:can_place_on&gt; of the ComponentAccess to have the given **invalid**

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withCanPlaceOn(predicate as invalid) as T
```

| Parameter |    Type     |                                                Description                                                 |
|-----------|-------------|------------------------------------------------------------------------------------------------------------|
| predicate | **invalid** | The adventure mode predicate to use to determine whether the current block can be placed on another block. |


:::

:::group{name=withCanPlaceOn}

Sets the &lt;componenttype:minecraft:can_place_on&gt; with the given BlockPredicates.

 Any predicate that matches will allow the BlockItem within the ItemStack to be placed.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withCanPlaceOn(predicates as stdlib.List<BlockPredicate>, showInTooltip as boolean) as T
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
IFluidStack.withChargedProjectiles(chargedProjectiles as ChargedProjectiles) as T
```

|     Parameter      |                                 Type                                 |
|--------------------|----------------------------------------------------------------------|
| chargedProjectiles | [ChargedProjectiles](/vanilla/api/item/component/ChargedProjectiles) |


:::

:::group{name=withChargedProjectiles}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withChargedProjectiles(item as IItemStack) as T
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=withChargedProjectiles}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withChargedProjectiles(items as stdlib.List<IItemStack>) as T
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| items     | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

:::group{name=withContainer}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withContainer(contents as ItemContainerContents) as T
```

| Parameter |                                    Type                                    |
|-----------|----------------------------------------------------------------------------|
| contents  | [ItemContainerContents](/vanilla/api/item/component/ItemContainerContents) |


:::

:::group{name=withContainer}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withContainer(contents as stdlib.List<IItemStack>) as T
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| contents  | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

:::group{name=withContainerLoot}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withContainerLoot(loot as SeededContainerLoot) as T
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| loot      | [SeededContainerLoot](/vanilla/api/item/component/SeededContainerLoot) |


:::

:::group{name=withContainerLoot}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withContainerLoot(lootTable as ResourceKey<LootTable>, seed as long) as T
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
// IFluidStack.withCreativeSlotLock() as T

myIFluidStack.withCreativeSlotLock();
```

:::

:::group{name=withCustomData}

Sets the &lt;componenttype:minecraft:custom_data&gt; of the ComponentAccess to have the given [CustomData](/vanilla/api/item/component/CustomData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withCustomData(customData as CustomData) as T
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
// IFluidStack.withCustomData(customData as MapData) as T

myIFluidStack.withCustomData({custom_ammo_thing: 1, owner: "Benji"});
```

| Parameter  |                 Type                 |             Description              |
|------------|--------------------------------------|--------------------------------------|
| customData | [MapData](/vanilla/api/data/MapData) | The MapData to set the component to. |


:::

:::group{name=withCustomModelData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withCustomModelData(data as CustomModelData) as T
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
// IFluidStack.withCustomModelData(value as int) as T

myIFluidStack.withCustomModelData(2);
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
// IFluidStack.withCustomName(name as Component) as T

myIFluidStack.withCustomName(Component.literal("Fancy Water"));
myIFluidStack.withCustomName(Component.translatable("mypack.lore.fancy_water"));
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
// IFluidStack.withDamage(damage as int) as T

myIFluidStack.withDamage(16);
```

| Parameter | Type |              Description               |
|-----------|------|----------------------------------------|
| damage    | int  | The new damage of the ComponentAccess. |


:::

:::group{name=withDebugStickState}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withDebugStickState(state as DebugStickState) as T
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| state     | [DebugStickState](/vanilla/api/item/component/DebugStickState) |


:::

:::group{name=withDyedColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withDyedColor(color as DyedItemColor) as T
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| color     | [DyedItemColor](/vanilla/api/item/component/DyedItemColor) |


:::

:::group{name=withDyedColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withDyedColor(rgb as int, showInTooltip as boolean) as T
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
// IFluidStack.withEnchantment(enchantment as Enchantment, level as int) as T

myIFluidStack.withEnchantment(<enchantment:minecraft:efficiency>, 4);
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
// IFluidStack.withEnchantmentGlintOverride(value as boolean) as T

myIFluidStack.withEnchantmentGlintOverride(true);
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
IFluidStack.withEnchantments(enchantments as ItemEnchantments) as T
```

|  Parameter   |                               Type                               |
|--------------|------------------------------------------------------------------|
| enchantments | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments) |


:::

:::group{name=withEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withEntityData(data as CustomData) as T
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| data      | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withEntityData(data as MapData) as T
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
// IFluidStack.withFireResistant() as T

myIFluidStack.withFireResistant();
```

:::

:::group{name=withFireworkExplosion}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withFireworkExplosion(explosion as FireworkExplosion) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| explosion | [FireworkExplosion](/vanilla/api/item/component/FireworkExplosion) |


:::

:::group{name=withFireworks}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withFireworks(fireworks as Fireworks) as T
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| fireworks | [Fireworks](/vanilla/api/item/component/Fireworks) |


:::

:::group{name=withFireworks}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withFireworks(flightDuration as int, explosions as stdlib.List<FireworkExplosion>) as T
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
IFluidStack.withFood(food as FoodProperties) as T
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
// IFluidStack.withHideAdditionalTooltip() as T

myIFluidStack.withHideAdditionalTooltip();
```

:::

:::group{name=withHideTooltip}

Sets the &lt;componenttype:minecraft:hide_tooltip&gt; of the ComponentAccess to exist.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withHideTooltip() as T

myIFluidStack.withHideTooltip();
```

:::

:::group{name=withInstrument}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withInstrument(instrument as Instrument) as T
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
// IFluidStack.withIntangibleProjectile() as T

myIFluidStack.withIntangibleProjectile();
```

:::

:::group{name=withItemName}

Sets the &lt;componenttype:minecraft:item_name&gt; of the ComponentAccess to have the given [Component](/vanilla/api/text/Component)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withItemName(name as Component) as T

myIFluidStack.withItemName(Component.literal("Fancy Water"));
myIFluidStack.withItemName(Component.translatable("mypack.lore.fancy_water"));
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| name      | [Component](/vanilla/api/text/Component) |


:::

:::group{name=withJsonComponent}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.withJsonComponent(type as DataComponentType, value as IData?) as IFluidStack
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| type      | [DataComponentType](/vanilla/api/component/DataComponentType) |
| value     | [IData](/vanilla/api/data/IData)?                             |


:::

:::group{name=withJsonComponents}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.withJsonComponents(value as IData) as IFluidStack
```

| Parameter |               Type               |
|-----------|----------------------------------|
| value     | [IData](/vanilla/api/data/IData) |


:::

:::group{name=withLock}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withLock(code as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| code      | string |


:::

:::group{name=withLock}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withLock(lock as invalid) as T
```

| Parameter |    Type     |
|-----------|-------------|
| lock      | **invalid** |


:::

:::group{name=withLodestoneTracker}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withLodestoneTracker(tracker as LodestoneTracker) as T
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
// IFluidStack.withLore(components as stdlib.List<Component>) as T

myIFluidStack.withLore([Component.literal("Found in a dark cave"), Component.translatable("Belonged to a Dragon")]);
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
IFluidStack.withLore(lore as ItemLore) as T
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| lore      | [ItemLore](/vanilla/api/item/component/ItemLore) |


:::

:::group{name=withMapColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withMapColor(color as MapItemColor) as T
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| color     | [MapItemColor](/vanilla/api/item/component/MapItemColor) |


:::

:::group{name=withMapColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withMapColor(rgb as int) as T
```

| Parameter | Type |
|-----------|------|
| rgb       | int  |


:::

:::group{name=withMapDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withMapDecorations(decorations as MapDecorations) as T
```

|  Parameter  |                             Type                             |
|-------------|--------------------------------------------------------------|
| decorations | [MapDecorations](/vanilla/api/item/component/MapDecorations) |


:::

:::group{name=withMapDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withMapDecorations(decorations as MapDecorationsEntry[string]) as T
```

|  Parameter  |                                      Type                                      |
|-------------|--------------------------------------------------------------------------------|
| decorations | [MapDecorationsEntry](/vanilla/api/item/component/MapDecorationsEntry)[string] |


:::

:::group{name=withMapId}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withMapId(id as int) as T
```

| Parameter | Type |
|-----------|------|
| id        | int  |


:::

:::group{name=withMapId}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withMapId(mapId as invalid) as T
```

| Parameter |    Type     |
|-----------|-------------|
| mapId     | **invalid** |


:::

:::group{name=withMapPostProcessing}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withMapPostProcessing(value as MapPostProcessing) as T
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
// IFluidStack.withMaxDamage(maxDamage as int) as T

myIFluidStack.withMaxDamage(1024);
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
// IFluidStack.withMaxStackSize(maxStackSize as int) as T

myIFluidStack.withMaxStackSize(16);
```

|  Parameter   | Type |                 Description                  |
|--------------|------|----------------------------------------------|
| maxStackSize | int  | The new maxStackSize of the ComponentAccess. |


:::

:::group{name=withNoteBlockSound}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withNoteBlockSound(sound as ResourceLocation) as T
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| sound     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=withOminousBottleAmplifier}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withOminousBottleAmplifier(amplifier as int) as T
```

| Parameter | Type |
|-----------|------|
| amplifier | int  |


:::

:::group{name=withPotDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withPotDecorations(decorations as PotDecorations) as T
```

|  Parameter  |                             Type                             |
|-------------|--------------------------------------------------------------|
| decorations | [PotDecorations](/vanilla/api/item/component/PotDecorations) |


:::

:::group{name=withPotDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withPotDecorations(back as ItemDefinition, left as ItemDefinition, right as ItemDefinition, front as ItemDefinition) as T
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
IFluidStack.withPotionContents(contents as invalid) as T
```

| Parameter |    Type     |
|-----------|-------------|
| contents  | **invalid** |


:::

:::group{name=withPotionContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withPotionContents(potion as Potion) as T
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| potion    | [Potion](/vanilla/api/item/alchemy/Potion) |


:::

:::group{name=withPotionContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withPotionContents(potion as Potion, customEffects as stdlib.List<MobEffectInstance>) as T
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
IFluidStack.withPotionContents(potion as Potion, customColor as int, customEffects as stdlib.List<MobEffectInstance>) as T
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
IFluidStack.withProfile(profile as ResolvableProfile) as T
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
// IFluidStack.withRarity(rarity as Rarity) as T

myIFluidStack.withRarity(<constant:minecraft:item/rarity:epic>);
```

| Parameter |                    Type                     |    Description    |
|-----------|---------------------------------------------|-------------------|
| rarity    | [Rarity](/vanilla/api/item/property/Rarity) | The rarity to set |


:::

:::group{name=withRecipes}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withRecipes(recipes as stdlib.List<ResourceLocation>) as T
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
// IFluidStack.withRepairCost(cost as int) as T

myIFluidStack.withRepairCost(20);
```

| Parameter | Type |   Description   |
|-----------|------|-----------------|
| cost      | int  | The repair cost |


:::

:::group{name=withStoredEnchantments}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withStoredEnchantments(enchantments as ItemEnchantments) as T
```

|  Parameter   |                               Type                               |
|--------------|------------------------------------------------------------------|
| enchantments | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments) |


:::

:::group{name=withSuspiciousStewEffects}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withSuspiciousStewEffects(effects as stdlib.List<SuspiciousStewEffectsEntry>) as T
```

| Parameter |                                                  Type                                                   |
|-----------|---------------------------------------------------------------------------------------------------------|
| effects   | stdlib.List&lt;[SuspiciousStewEffectsEntry](/vanilla/api/item/component/SuspiciousStewEffectsEntry)&gt; |


:::

:::group{name=withSuspiciousStewEffects}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withSuspiciousStewEffects(suspiciousStewEffects as SuspiciousStewEffects) as T
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
IFluidStack.withTool(tool as Tool) as T
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| tool      | [Tool](/vanilla/api/item/component/Tool) |


:::

:::group{name=withTool}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withTool(rules as stdlib.List<ToolRule>, defaultMiningSpeed as float, damagePerBlock as int) as T
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
IFluidStack.withTrim(trim as ArmorTrim) as T
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
IFluidStack.withUnbreakable(showInTooltip as boolean) as T
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
IFluidStack.withUnbreakable(unbreakable as Unbreakable) as T
```

|  Parameter  |                          Type                          |                                           Description                                           |
|-------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| unbreakable | [Unbreakable](/vanilla/api/item/component/Unbreakable) | The [Unbreakable](/vanilla/api/item/component/Unbreakable) instance with the configured values. |


:::

:::group{name=withWritableBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withWritableBookContent(content as WritableBookContent) as T
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| content   | [WritableBookContent](/vanilla/api/item/component/WritableBookContent) |


:::

:::group{name=withWritableBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withWritableBookContent(pages as stdlib.List<Filterable<string>>) as T
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| pages     | stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;string&gt;&gt; |


:::

:::group{name=withWrittenBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
IFluidStack.withWrittenBookContent(content as WrittenBookContent) as T
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| content   | [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent) |


:::

:::group{name=without}

Return Type: [IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
IFluidStack.without<T : Object>(type as DataComponentType<T>) as IFluidStack
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
// IFluidStack.withoutAttributeModifiers() as T

myIFluidStack.withoutAttributeModifiers();
```

:::

:::group{name=withoutBannerPatterns}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutBannerPatterns() as T

myIFluidStack.withoutBannerPatterns();
```

:::

:::group{name=withoutBaseColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutBaseColor() as T

myIFluidStack.withoutBaseColor();
```

:::

:::group{name=withoutBees}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutBees() as T

myIFluidStack.withoutBees();
```

:::

:::group{name=withoutBlockEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutBlockEntityData() as T

myIFluidStack.withoutBlockEntityData();
```

:::

:::group{name=withoutBlockState}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutBlockState() as T

myIFluidStack.withoutBlockState();
```

:::

:::group{name=withoutBucketEntityData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutBucketEntityData() as T

myIFluidStack.withoutBucketEntityData();
```

:::

:::group{name=withoutBundleContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutBundleContents() as T

myIFluidStack.withoutBundleContents();
```

:::

:::group{name=withoutCanBreak}

Removes the &lt;componenttype:minecraft:can_break&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutCanBreak() as T

myIFluidStack.withoutCanBreak();
```

:::

:::group{name=withoutCanPlaceOn}

Removes the &lt;componenttype:minecraft:can_place_on&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutCanPlaceOn() as T

myIFluidStack.withoutCanPlaceOn();
```

:::

:::group{name=withoutChargedProjectiles}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutChargedProjectiles() as T

myIFluidStack.withoutChargedProjectiles();
```

:::

:::group{name=withoutContainer}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutContainer() as T

myIFluidStack.withoutContainer();
```

:::

:::group{name=withoutContainerLoot}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutContainerLoot() as T

myIFluidStack.withoutContainerLoot();
```

:::

:::group{name=withoutCreativeSlotLock}

Removes the &lt;componenttype:minecraft:creative_slot_lock&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutCreativeSlotLock() as T

myIFluidStack.withoutCreativeSlotLock();
```

:::

:::group{name=withoutCustomData}

Removes the &lt;componenttype:minecraft:custom_data&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutCustomData() as T

myIFluidStack.withoutCustomData();
```

:::

:::group{name=withoutCustomModelData}

Removes the &lt;componenttype:minecraft:custom_model_data&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutCustomModelData() as T

myIFluidStack.withoutCustomModelData();
```

:::

:::group{name=withoutCustomName}

Removes the &lt;componenttype:minecraft:custom_name&gt; from the ComponentAccess

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutCustomName() as T

myIFluidStack.withoutCustomName();
```

:::

:::group{name=withoutDamage}

Removes the &lt;componenttype:minecraft:damage&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutDamage() as T

myIFluidStack.withoutDamage();
```

:::

:::group{name=withoutDebugStickState}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutDebugStickState() as T

myIFluidStack.withoutDebugStickState();
```

:::

:::group{name=withoutDyedColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutDyedColor() as T

myIFluidStack.withoutDyedColor();
```

:::

:::group{name=withoutEnchantment}

Removes the [Enchantment](/vanilla/api/item/enchantment/Enchantment) from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutEnchantment(enchantment as Enchantment) as T

myIFluidStack.withoutEnchantment(<enchantment:minecraft:mending>);
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
// IFluidStack.withoutEnchantmentGlintOverride() as T

myIFluidStack.withoutEnchantmentGlintOverride();
```

:::

:::group{name=withoutEnchantments}

Removes the &lt;componenttype:minecraft:enchantments&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutEnchantments() as T

myIFluidStack.withoutEnchantments();
```

:::

:::group{name=withoutEntityDate}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutEntityDate() as T

myIFluidStack.withoutEntityDate();
```

:::

:::group{name=withoutFireResistant}

Removes the &lt;componenttype:minecraft:fire_resistant&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutFireResistant() as T

myIFluidStack.withoutFireResistant();
```

:::

:::group{name=withoutFireworkExplosion}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutFireworkExplosion() as T

myIFluidStack.withoutFireworkExplosion();
```

:::

:::group{name=withoutFireworks}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutFireworks() as T

myIFluidStack.withoutFireworks();
```

:::

:::group{name=withoutFood}

Removes the &lt;componenttype:minecraft:food&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutFood() as T

myIFluidStack.withoutFood();
```

:::

:::group{name=withoutHideAdditionalTooltip}

Removes the &lt;componenttype:minecraft:hide_additional_tooltip&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutHideAdditionalTooltip() as T

myIFluidStack.withoutHideAdditionalTooltip();
```

:::

:::group{name=withoutHideTooltip}

Removes the &lt;componenttype:minecraft:hide_tooltip&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutHideTooltip() as T

myIFluidStack.withoutHideTooltip();
```

:::

:::group{name=withoutInstrument}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutInstrument() as T

myIFluidStack.withoutInstrument();
```

:::

:::group{name=withoutIntangibleProjectile}

Removes the &lt;componenttype:minecraft:intangible_projectile&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutIntangibleProjectile() as T

myIFluidStack.withoutIntangibleProjectile();
```

:::

:::group{name=withoutItemName}

Removes the &lt;componenttype:minecraft:item_name&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutItemName() as T

myIFluidStack.withoutItemName();
```

:::

:::group{name=withoutLock}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutLock() as T

myIFluidStack.withoutLock();
```

:::

:::group{name=withoutLodestoneTracker}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutLodestoneTracker() as T

myIFluidStack.withoutLodestoneTracker();
```

:::

:::group{name=withoutLore}

Removes the &lt;componenttype:minecraft:lore&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutLore() as T

myIFluidStack.withoutLore();
```

:::

:::group{name=withoutMapColor}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutMapColor() as T

myIFluidStack.withoutMapColor();
```

:::

:::group{name=withoutMapDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutMapDecorations() as T

myIFluidStack.withoutMapDecorations();
```

:::

:::group{name=withoutMapId}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutMapId() as T

myIFluidStack.withoutMapId();
```

:::

:::group{name=withoutMapPostProcessing}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutMapPostProcessing() as T

myIFluidStack.withoutMapPostProcessing();
```

:::

:::group{name=withoutMaxDamage}

Removes the &lt;componenttype:minecraft:max_damage&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutMaxDamage() as T

myIFluidStack.withoutMaxDamage();
```

:::

:::group{name=withoutMaxStackSize}

Removes the &lt;componenttype:minecraft:stack_size&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutMaxStackSize() as T

myIFluidStack.withoutMaxStackSize();
```

:::

:::group{name=withoutNoteBlockSound}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutNoteBlockSound() as T

myIFluidStack.withoutNoteBlockSound();
```

:::

:::group{name=withoutOminousBottleAmplifier}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutOminousBottleAmplifier() as T

myIFluidStack.withoutOminousBottleAmplifier();
```

:::

:::group{name=withoutPotDecorations}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutPotDecorations() as T

myIFluidStack.withoutPotDecorations();
```

:::

:::group{name=withoutPotionContents}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutPotionContents() as T

myIFluidStack.withoutPotionContents();
```

:::

:::group{name=withoutProfile}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutProfile() as T

myIFluidStack.withoutProfile();
```

:::

:::group{name=withoutRarity}

Removes the &lt;componenttype:minecraft:rarity&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutRarity() as T

myIFluidStack.withoutRarity();
```

:::

:::group{name=withoutRecipes}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutRecipes() as T

myIFluidStack.withoutRecipes();
```

:::

:::group{name=withoutRepairCost}

Removes the &lt;componenttype:minecraft:repair_cost&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutRepairCost() as T

myIFluidStack.withoutRepairCost();
```

:::

:::group{name=withoutStoredEnchantments}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutStoredEnchantments() as T

myIFluidStack.withoutStoredEnchantments();
```

:::

:::group{name=withoutSuspiciousStewEffects}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutSuspiciousStewEffects() as T

myIFluidStack.withoutSuspiciousStewEffects();
```

:::

:::group{name=withoutTool}

Removes the &lt;componenttype:minecraft:tool&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutTool() as T

myIFluidStack.withoutTool();
```

:::

:::group{name=withoutTrim}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutTrim() as T

myIFluidStack.withoutTrim();
```

:::

:::group{name=withoutUnbreakable}

Removes the &lt;componenttype:minecraft:unbreakable&gt; from the ComponentAccess

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutUnbreakable() as T

myIFluidStack.withoutUnbreakable();
```

:::

:::group{name=withoutWritableBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutWritableBookContent() as T

myIFluidStack.withoutWritableBookContent();
```

:::

:::group{name=withoutWrittenBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// IFluidStack.withoutWrittenBookContent() as T

myIFluidStack.withoutWrittenBookContent();
```

:::


## Operators

:::group{name=CONTAINS}

Checks if this IFluidStack, matches the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

```zenscript
other as IFluidStack in myIFluidStack
```

:::

:::group{name=MUL}

Sets the fluid amount in MilliBuckets (mB)

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```

:::

:::group{name=OR}

```zenscript
myIFluidStack | other as FluidIngredient
```

:::


## Properties

|            Name             |                                                    Type                                                    | Has Getter | Has Setter |                                                                                                              Description                                                                                                               |
|-----------------------------|------------------------------------------------------------------------------------------------------------|------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amount                      | long                                                                                                       | true       | false      | Gets the fluid amount in MilliBuckets (mB).                                                                                                                                                                                            |
| attributeModifiers          | [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers)                               | true       | false      | Gets the data in &lt;componenttype:minecraft:attribute_modifiers&gt;                                                                                                                                                                   |
| bannerPatterns              | [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers)                                       | true       | false      |                                                                                                                                                                                                                                        |
| baseColor                   | **invalid**                                                                                                | true       | false      |                                                                                                                                                                                                                                        |
| bees                        | stdlib.List&lt;[BeehiveBlockEntityOccupant](/vanilla/api/block/entity/type/BeehiveBlockEntityOccupant)&gt; | true       | false      |                                                                                                                                                                                                                                        |
| blockEntityData             | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      |                                                                                                                                                                                                                                        |
| blockState                  | [BlockItemStateProperties](/vanilla/api/item/component/BlockItemStateProperties)                           | true       | false      |                                                                                                                                                                                                                                        |
| bucketEntityData            | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      |                                                                                                                                                                                                                                        |
| bundleContents              | [BundleContents](/vanilla/api/item/component/BundleContents)                                               | true       | false      |                                                                                                                                                                                                                                        |
| canBreak                    | **invalid**                                                                                                | true       | false      | Gets the data in &lt;componenttype:minecraft:can_break&gt;                                                                                                                                                                             |
| canPlaceOn                  | **invalid**                                                                                                | true       | false      | Gets the data in &lt;componenttype:minecraft:can_place_on&gt;                                                                                                                                                                          |
| chargedProjectiles          | [ChargedProjectiles](/vanilla/api/item/component/ChargedProjectiles)                                       | true       | false      |                                                                                                                                                                                                                                        |
| container                   | [ItemContainerContents](/vanilla/api/item/component/ItemContainerContents)                                 | true       | false      |                                                                                                                                                                                                                                        |
| containerLoot               | [SeededContainerLoot](/vanilla/api/item/component/SeededContainerLoot)                                     | true       | false      |                                                                                                                                                                                                                                        |
| creativeSlotLock            | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:creative_slot_lock&gt;                                                                                                                                                                    |
| customData                  | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      | Gets the data in the &lt;componenttype:minecraft:custom_data&gt;                                                                                                                                                                       |
| customModelData             | [CustomModelData](/vanilla/api/item/component/CustomModelData)                                             | true       | false      | Gets the data in &lt;componenttype:minecraft:custom_model_data&gt;                                                                                                                                                                     |
| customName                  | [Component](/vanilla/api/text/Component)                                                                   | true       | false      | Gets the data in the &lt;componenttype:minecraft:custom_name&gt; <br />  <br />  A custom name is generally displayed in italics and controlled by the user.                                                                           |
| damage                      | int                                                                                                        | true       | false      | Gets the data in the &lt;componenttype:minecraft:damage&gt;                                                                                                                                                                            |
| debugStickState             | [DebugStickState](/vanilla/api/item/component/DebugStickState)                                             | true       | false      |                                                                                                                                                                                                                                        |
| dyedColor                   | [DyedItemColor](/vanilla/api/item/component/DyedItemColor)                                                 | true       | false      |                                                                                                                                                                                                                                        |
| empty                       | boolean                                                                                                    | true       | false      | Gets whether this fluid stack is empty.                                                                                                                                                                                                |
| enchantmentGlintOverride    | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:enchantment_glint_override&gt; <br />  <br />  If it is present, it is first checked to determine whether there is special behaviour, otherwise <br />  the code checks for enchantments. |
| enchantments                | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)                                           | true       | false      | Gets the data in &lt;componenttype:minecraft:enchantments&gt;                                                                                                                                                                          |
| entityData                  | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      |                                                                                                                                                                                                                                        |
| fireworkExplosion           | [FireworkExplosion](/vanilla/api/item/component/FireworkExplosion)                                         | true       | false      |                                                                                                                                                                                                                                        |
| fireworks                   | [Fireworks](/vanilla/api/item/component/Fireworks)                                                         | true       | false      |                                                                                                                                                                                                                                        |
| fluid                       | [Fluid](/vanilla/api/fluid/Fluid)                                                                          | true       | false      | Retrieves this fluid stack's fluid.                                                                                                                                                                                                    |
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
| instrument                  | [Instrument](/vanilla/api/item/component/Instrument)                                                       | true       | false      |                                                                                                                                                                                                                                        |
| isFireResistant             | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:fire_resistant&gt;                                                                                                                                                                        |
| isImmutable                 | boolean                                                                                                    | true       | false      |                                                                                                                                                                                                                                        |
| isIntangibleProjectile      | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:intangible_projectile&gt;                                                                                                                                                                 |
| itemName                    | [Component](/vanilla/api/text/Component)                                                                   | true       | false      | Gets the data in the &lt;componenttype:minecraft:custom_name&gt; <br />  <br />  In the case of items, an item name is set by the make to make a special instance of an item, such as with <br />  ominous banners.                    |
| lockComponent               | **invalid**                                                                                                | true       | false      |                                                                                                                                                                                                                                        |
| lodestoneTracker            | [LodestoneTracker](/vanilla/api/item/component/LodestoneTracker)                                           | true       | false      |                                                                                                                                                                                                                                        |
| lore                        | [ItemLore](/vanilla/api/item/component/ItemLore)                                                           | true       | false      | Gets the data in the &lt;componenttype:minecraft:lore&gt;                                                                                                                                                                              |
| mapColor                    | [MapItemColor](/vanilla/api/item/component/MapItemColor)                                                   | true       | false      |                                                                                                                                                                                                                                        |
| mapDecorations              | [MapDecorations](/vanilla/api/item/component/MapDecorations)                                               | true       | false      |                                                                                                                                                                                                                                        |
| mapId                       | **invalid**                                                                                                | true       | false      |                                                                                                                                                                                                                                        |
| mapPostProcessing           | [MapPostProcessing](/vanilla/api/item/component/MapPostProcessing)                                         | true       | false      |                                                                                                                                                                                                                                        |
| maxDamage                   | int                                                                                                        | true       | false      | Gets the data in the &lt;componenttype:minecraft:max_damage&gt;                                                                                                                                                                        |
| maxStackSize                | int                                                                                                        | true       | false      | Gets the data in the &lt;componenttype:minecraft:max_stack_size&gt;                                                                                                                                                                    |
| noteBlockSound              | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                                 | true       | false      |                                                                                                                                                                                                                                        |
| ominousBottleAmplifier      | int                                                                                                        | true       | false      |                                                                                                                                                                                                                                        |
| potDecorations              | [PotDecorations](/vanilla/api/item/component/PotDecorations)                                               | true       | false      |                                                                                                                                                                                                                                        |
| potionContents              | **invalid**                                                                                                | true       | false      |                                                                                                                                                                                                                                        |
| profile                     | [ResolvableProfile](/vanilla/api/item/component/ResolvableProfile)                                         | true       | false      |                                                                                                                                                                                                                                        |
| rarity                      | [Rarity](/vanilla/api/item/property/Rarity)                                                                | true       | false      | Gets the data in the &lt;componenttype:minecraft:rarity&gt;                                                                                                                                                                            |
| recipes                     | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;                              | true       | false      |                                                                                                                                                                                                                                        |
| registryName                | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                                 | true       | false      | Gets the registry name for the fluid this stack is representing.                                                                                                                                                                       |
| repairCost                  | int                                                                                                        | true       | false      | Gets the data in &lt;componenttype:minecraft:repair_cost&gt;                                                                                                                                                                           |
| storedEnchantments          | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)                                           | true       | false      |                                                                                                                                                                                                                                        |
| suspiciousStewEffects       | [SuspiciousStewEffects](/vanilla/api/item/component/SuspiciousStewEffects)                                 | true       | false      |                                                                                                                                                                                                                                        |
| tool                        | [Tool](/vanilla/api/item/component/Tool)                                                                   | true       | false      | Gets the data in &lt;componenttype:minecraft:tool&gt;                                                                                                                                                                                  |
| trim                        | [ArmorTrim](/vanilla/api/item/armortrim/ArmorTrim)                                                         | true       | false      |                                                                                                                                                                                                                                        |
| unbreakable                 | [Unbreakable](/vanilla/api/item/component/Unbreakable)                                                     | true       | false      | Gets the data in the &lt;componenttype:minecraft:unbreakable&gt;                                                                                                                                                                       |
| writableBookContent         | [WritableBookContent](/vanilla/api/item/component/WritableBookContent)                                     | true       | false      |                                                                                                                                                                                                                                        |
| writtenBookContent          | [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent)                                       | true       | false      |                                                                                                                                                                                                                                        |


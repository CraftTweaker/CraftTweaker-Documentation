# ComponentAccess&LT;T : ComponentAccess<T>&GT;

An interface exposing methods to handle setting and removing DataComponents.

 DataComponents are the new way of storing data in memory, instead of writing it to NBT data and to disk every time, which has a performance cost.
 DataComponents now occupy the space that was previously occupied or known as a NBT tag.

 DataComponents are immutable. Operations that set or remove a component return a new instance of the object implementing [ComponentAccess](/vanilla/api/component/ComponentAccess)&lt;T&gt;

 DataComponents may optionally be persistent. They also may optionally be syncronised.

 In most cases, ComponentAccesses are going to be ItemStacks, although in NeoForge FluidStacks are too.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.component.ComponentAccess;
```


## Methods

:::group{name=withAttributeModifiers}

Sets the &lt;componenttype:minecraft:attribute_modifiers&gt; of the ComponentAccess to have the given [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withAttributeModifiers(modifiers as ItemAttributeModifiers) as T

myComponentAccess.withAttributeModifiers(ItemAttributeModifiers.builder().add(<attribute:minecraft:player.block_break_speed>,
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
ComponentAccess.withAttributeModifiers(modifier as ItemAttributeModifiersEntry, showInTooltip as boolean) as T
```

|   Parameter   |                                          Type                                          | Optional | Default Value |
|---------------|----------------------------------------------------------------------------------------|----------|---------------|
| modifier      | [ItemAttributeModifiersEntry](/vanilla/api/item/component/ItemAttributeModifiersEntry) | false    |               |
| showInTooltip | boolean                                                                                | true     | true          |


:::

:::group{name=withAttributeModifiers}

Return Type: T

```zenscript
ComponentAccess.withAttributeModifiers(modifiers as stdlib.List<ItemAttributeModifiersEntry>, showInTooltip as boolean) as T
```

|   Parameter   |                                                   Type                                                    | Optional | Default Value |
|---------------|-----------------------------------------------------------------------------------------------------------|----------|---------------|
| modifiers     | stdlib.List&lt;[ItemAttributeModifiersEntry](/vanilla/api/item/component/ItemAttributeModifiersEntry)&gt; | false    |               |
| showInTooltip | boolean                                                                                                   | true     | true          |


:::

:::group{name=withBannerPatterns}

Sets the &lt;componenttype:minecraft:banner_patterns&gt; of the ComponentAccess to have the given [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBannerPatterns(layers as BannerPatternLayers) as T
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| layers    | [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers) |


:::

:::group{name=withBannerPatterns}

Sets the &lt;componenttype:minecraft:banner_patterns&gt; of the ComponentAccess to have the given stdlib.List&lt;[BannerPatternLayersLayer](/vanilla/api/block/entity/BannerPatternLayersLayer)&gt;

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBannerPatterns(layers as stdlib.List<BannerPatternLayersLayer>) as T
```

| Parameter |                                               Type                                                |
|-----------|---------------------------------------------------------------------------------------------------|
| layers    | stdlib.List&lt;[BannerPatternLayersLayer](/vanilla/api/block/entity/BannerPatternLayersLayer)&gt; |


:::

:::group{name=withBaseColor}

Sets the &lt;componenttype:minecraft:base_color&gt; of the ComponentAccess to have the given [DyeColor](/vanilla/api/item/component/DyeColor)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBaseColor(color as DyeColor) as T
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| color     | [DyeColor](/vanilla/api/item/component/DyeColor) |


:::

:::group{name=withBees}

Sets the &lt;componenttype:minecraft:bees&gt; of the ComponentAccess to have the given occupants

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBees(occupants as stdlib.List<BeehiveBlockEntityOccupant>) as T
```

| Parameter |                                                    Type                                                    |
|-----------|------------------------------------------------------------------------------------------------------------|
| occupants | stdlib.List&lt;[BeehiveBlockEntityOccupant](/vanilla/api/block/entity/type/BeehiveBlockEntityOccupant)&gt; |


:::

:::group{name=withBlockEntityData}

Sets the &lt;componenttype:minecraft:block_entity_data&gt; of the ComponentAccess to have the given [CustomData](/vanilla/api/item/component/CustomData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBlockEntityData(data as CustomData) as T
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| data      | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withBlockEntityData}

Sets the &lt;componenttype:minecraft:block_entity_data&gt; of the ComponentAccess to have the given [MapData](/vanilla/api/data/MapData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBlockEntityData(data as MapData) as T
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=withBlockState}

Sets the &lt;componenttype:minecraft:block_state&gt; of the ComponentAccess to have the given [BlockItemStateProperties](/vanilla/api/item/component/BlockItemStateProperties)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBlockState(properties as BlockItemStateProperties) as T
```

| Parameter  |                                       Type                                       |
|------------|----------------------------------------------------------------------------------|
| properties | [BlockItemStateProperties](/vanilla/api/item/component/BlockItemStateProperties) |


:::

:::group{name=withBucketEntityData}

Sets the &lt;componenttype:minecraft:bucket_entity_data&gt; of the ComponentAccess to have the given [CustomData](/vanilla/api/item/component/CustomData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBucketEntityData(data as CustomData) as T
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| data      | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withBucketEntityData}

Sets the &lt;componenttype:minecraft:bucket_entity_data&gt; of the ComponentAccess to have the given [MapData](/vanilla/api/data/MapData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBucketEntityData(data as MapData) as T
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=withBundleContents}

Sets the &lt;componenttype:minecraft:bundle_contents&gt; of the ComponentAccess to have the given [BundleContents](/vanilla/api/item/component/BundleContents)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withBundleContents(contents as BundleContents) as T
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| contents  | [BundleContents](/vanilla/api/item/component/BundleContents) |


:::

:::group{name=withBundleContents}

Sets the &lt;componenttype:minecraft:bundle_contents&gt; of the ComponentAccess to have the given contents

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withBundleContents(contents as stdlib.List<IItemStack>) as T

myComponentAccess.withBundleContents([<item:minecraft:diamond> * 64]);
```

| Parameter |                             Type                              |           Description            |
|-----------|---------------------------------------------------------------|----------------------------------|
| contents  | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | A list of items to store within. |


:::

:::group{name=withCanBreak}

Sets the &lt;componenttype:minecraft:can_break&gt; of the ComponentAccess to have the given [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withCanBreak(predicate as AdventureModePredicate) as T
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
// ComponentAccess.withCanBreak(predicates as stdlib.List<BlockPredicate>, showInTooltip as boolean) as T

myComponentAccess.withCanBreak(BlockPredicate.create().of(<block:minecraft:diamond_ore>).build(), true);
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
ComponentAccess.withCanPlaceOn(predicate as AdventureModePredicate) as T
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
ComponentAccess.withCanPlaceOn(predicates as stdlib.List<BlockPredicate>, showInTooltip as boolean) as T
```

|   Parameter   |                                    Type                                    |                      Description                       | Optional | Default Value |
|---------------|----------------------------------------------------------------------------|--------------------------------------------------------|----------|---------------|
| predicates    | stdlib.List&lt;[BlockPredicate](/vanilla/api/predicate/BlockPredicate)&gt; | The collection of predicates to test for               | false    |               |
| showInTooltip | boolean                                                                    | Whether to show the restriction in the tooltip or not. | true     | true          |


:::

:::group{name=withChargedProjectiles}

Sets the &lt;componenttype:minecraft:charged_projectiles&gt; of the ComponentAccess to have the given [ChargedProjectiles](/vanilla/api/item/component/ChargedProjectiles)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withChargedProjectiles(chargedProjectiles as ChargedProjectiles) as T
```

|     Parameter      |                                 Type                                 |
|--------------------|----------------------------------------------------------------------|
| chargedProjectiles | [ChargedProjectiles](/vanilla/api/item/component/ChargedProjectiles) |


:::

:::group{name=withChargedProjectiles}

Sets the &lt;componenttype:minecraft:charged_projectiles&gt; of the ComponentAccess to have the given [IItemStack](/vanilla/api/item/IItemStack)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withChargedProjectiles(item as IItemStack) as T

myComponentAccess.withChargedProjectiles(<item:minecraft:arrow>);
```

| Parameter |                    Type                    |        Description        |
|-----------|--------------------------------------------|---------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) | The item to store within. |


:::

:::group{name=withChargedProjectiles}

Sets the &lt;componenttype:minecraft:charged_projectiles&gt; of the ComponentAccess to have the given items.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withChargedProjectiles(items as stdlib.List<IItemStack>) as T

myComponentAccess.withChargedProjectiles([<item:minecraft:arrow>]);
```

| Parameter |                             Type                              |        Description         |
|-----------|---------------------------------------------------------------|----------------------------|
| items     | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; | The items to store within. |


:::

:::group{name=withContainer}

Sets the &lt;componenttype:minecraft:container&gt; of the ComponentAccess to have the given [ItemContainerContents](/vanilla/api/item/component/ItemContainerContents)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withContainer(contents as ItemContainerContents) as T
```

| Parameter |                                    Type                                    |
|-----------|----------------------------------------------------------------------------|
| contents  | [ItemContainerContents](/vanilla/api/item/component/ItemContainerContents) |


:::

:::group{name=withContainer}

Sets the &lt;componenttype:minecraft:container&gt; of the ComponentAccess to have the given values.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withContainer(contents as stdlib.List<IItemStack>) as T
```

| Parameter |                             Type                              |
|-----------|---------------------------------------------------------------|
| contents  | stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt; |


:::

:::group{name=withContainerLoot}

Sets the &lt;componenttype:minecraft:container_loot&gt; of the ComponentAccess to have the given [SeededContainerLoot](/vanilla/api/item/component/SeededContainerLoot)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withContainerLoot(loot as SeededContainerLoot) as T
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| loot      | [SeededContainerLoot](/vanilla/api/item/component/SeededContainerLoot) |


:::

:::group{name=withContainerLoot}

Sets the &lt;componenttype:minecraft:container_loot&gt; of the ComponentAccess to have the given loot table and seed.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withContainerLoot(lootTable as ResourceKey<LootTable>, seed as long) as T
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
// ComponentAccess.withCreativeSlotLock() as T

myComponentAccess.withCreativeSlotLock();
```

:::

:::group{name=withCustomData}

Sets the &lt;componenttype:minecraft:custom_data&gt; of the ComponentAccess to have the given [CustomData](/vanilla/api/item/component/CustomData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withCustomData(customData as CustomData) as T
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
// ComponentAccess.withCustomData(customData as MapData) as T

myComponentAccess.withCustomData({custom_ammo_thing: 1, owner: "Benji"});
```

| Parameter  |                 Type                 |             Description              |
|------------|--------------------------------------|--------------------------------------|
| customData | [MapData](/vanilla/api/data/MapData) | The MapData to set the component to. |


:::

:::group{name=withCustomModelData}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withCustomModelData(data as CustomModelData) as T
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| data      | [CustomModelData](/vanilla/api/item/component/CustomModelData) |


:::

:::group{name=withCustomModelData}

Sets the &lt;componenttype:minecraft:custom_model_data&gt; of the ComponentAccess to have the given value.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withCustomModelData(value as int) as T

myComponentAccess.withCustomModelData(2);
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
// ComponentAccess.withCustomName(name as Component) as T

myComponentAccess.withCustomName(Component.literal("Fancy Water"));
myComponentAccess.withCustomName(Component.translatable("mypack.lore.fancy_water"));
```

| Parameter |                   Type                   |      Description      |
|-----------|------------------------------------------|-----------------------|
| name      | [Component](/vanilla/api/text/Component) | The component to use. |


:::

:::group{name=withDamage}

Sets the &lt;componenttype:minecraft:damage&gt; of the ComponentAccess to have the given value.
 Damage is related to durability. Using this on an item that has no maxDamage may have unforeseen issues.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withDamage(damage as int) as T

myComponentAccess.withDamage(16);
```

| Parameter | Type |              Description               |
|-----------|------|----------------------------------------|
| damage    | int  | The new damage of the ComponentAccess. |


:::

:::group{name=withDebugStickState}

Sets the &lt;componenttype:minecraft:debug_stick_state&gt; of the ComponentAccess to have the given [DebugStickState](/vanilla/api/item/component/DebugStickState)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withDebugStickState(state as DebugStickState) as T
```

| Parameter |                              Type                              |
|-----------|----------------------------------------------------------------|
| state     | [DebugStickState](/vanilla/api/item/component/DebugStickState) |


:::

:::group{name=withDyedColor}

Sets the &lt;componenttype:minecraft:dyed_color&gt; of the ComponentAccess to have the given [DyedItemColor](/vanilla/api/item/component/DyedItemColor)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withDyedColor(color as DyedItemColor) as T
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| color     | [DyedItemColor](/vanilla/api/item/component/DyedItemColor) |


:::

:::group{name=withDyedColor}

Sets the &lt;componenttype:minecraft:dyed_color&gt; of the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withDyedColor(rgb as int, showInTooltip as boolean) as T

myComponentAccess.withDyedColor(0xFFFF00, true);
```

|   Parameter   |  Type   |                  Description                  | Optional | Default Value |
|---------------|---------|-----------------------------------------------|----------|---------------|
| rgb           | int     | The colour to dye this item with              | false    |               |
| showInTooltip | boolean | Whether to show this information in a tooltip | true     | true          |


:::

:::group{name=withEnchantment}

Sets the &lt;componenttype:minecraft:enchantments&gt; of the ComponentAccess to have the given [Enchantment](/vanilla/api/item/enchantment/Enchantment) and level.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withEnchantment(enchantment as Enchantment, level as int) as T

myComponentAccess.withEnchantment(<enchantment:minecraft:efficiency>, 4);
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
// ComponentAccess.withEnchantmentGlintOverride(value as boolean) as T

myComponentAccess.withEnchantmentGlintOverride(true);
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
ComponentAccess.withEnchantments(enchantments as ItemEnchantments) as T
```

|  Parameter   |                               Type                               |
|--------------|------------------------------------------------------------------|
| enchantments | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments) |


:::

:::group{name=withEntityData}

Sets the &lt;componenttype:minecraft:entity_data&gt; of the ComponentAccess to have the given [CustomData](/vanilla/api/item/component/CustomData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withEntityData(data as CustomData) as T
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| data      | [CustomData](/vanilla/api/item/component/CustomData) |


:::

:::group{name=withEntityData}

Sets the &lt;componenttype:minecraft:entity_data&gt; of the ComponentAccess to have the given [MapData](/vanilla/api/data/MapData)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withEntityData(data as MapData) as T
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
// ComponentAccess.withFireResistant() as T

myComponentAccess.withFireResistant();
```

:::

:::group{name=withFireworkExplosion}

Sets the &lt;componenttype:minecraft:firework_explosion&gt; of the ComponentAccess to have the given [FireworkExplosion](/vanilla/api/item/component/FireworkExplosion)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withFireworkExplosion(explosion as FireworkExplosion) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| explosion | [FireworkExplosion](/vanilla/api/item/component/FireworkExplosion) |


:::

:::group{name=withFireworks}

Sets the &lt;componenttype:minecraft:fireworks&gt; of the ComponentAccess to have the given [Fireworks](/vanilla/api/item/component/Fireworks)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withFireworks(fireworks as Fireworks) as T
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| fireworks | [Fireworks](/vanilla/api/item/component/Fireworks) |


:::

:::group{name=withFireworks}

Sets the &lt;componenttype:minecraft:fireworks&gt; of the ComponentAccess to have the given duration and explosions.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withFireworks(flightDuration as int, explosions as stdlib.List<FireworkExplosion>) as T
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
ComponentAccess.withFood(food as FoodProperties) as T
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
// ComponentAccess.withHideAdditionalTooltip() as T

myComponentAccess.withHideAdditionalTooltip();
```

:::

:::group{name=withHideTooltip}

Sets the &lt;componenttype:minecraft:hide_tooltip&gt; of the ComponentAccess to exist.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withHideTooltip() as T

myComponentAccess.withHideTooltip();
```

:::

:::group{name=withInstrument}

Sets the &lt;componenttype:minecraft:instrument&gt; of the ComponentAccess to have the given [Instrument](/vanilla/api/item/component/Instrument)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withInstrument(instrument as Instrument) as T
```

| Parameter  |                         Type                         |
|------------|------------------------------------------------------|
| instrument | [Instrument](/vanilla/api/item/component/Instrument) |


:::

:::group{name=withIntangibleProjectile}

Sets the &lt;componenttype:minecraft:intangible_projectile&gt; of the ComponentAccess to exist.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withIntangibleProjectile() as T

myComponentAccess.withIntangibleProjectile();
```

:::

:::group{name=withItemName}

Sets the &lt;componenttype:minecraft:item_name&gt; of the ComponentAccess to have the given [Component](/vanilla/api/text/Component)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withItemName(name as Component) as T

myComponentAccess.withItemName(Component.literal("Fancy Water"));
myComponentAccess.withItemName(Component.translatable("mypack.lore.fancy_water"));
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| name      | [Component](/vanilla/api/text/Component) |


:::

:::group{name=withLock}

Sets the &lt;componenttype:minecraft:lock&gt; of the ComponentAccess to have the given string.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withLock(code as string) as T
```

| Parameter |  Type  |
|-----------|--------|
| code      | string |


:::

:::group{name=withLock}

Sets the &lt;componenttype:minecraft:lock&gt; of the ComponentAccess to have the given [LockCode](/vanilla/api/item/component/LockCode)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withLock(lock as LockCode) as T
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| lock      | [LockCode](/vanilla/api/item/component/LockCode) |


:::

:::group{name=withLodestoneTracker}

Sets the &lt;componenttype:minecraft:lodestone_tracker&gt; of the ComponentAccess to have the given [LodestoneTracker](/vanilla/api/item/component/LodestoneTracker)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withLodestoneTracker(tracker as LodestoneTracker) as T
```

| Parameter |                               Type                               |
|-----------|------------------------------------------------------------------|
| tracker   | [LodestoneTracker](/vanilla/api/item/component/LodestoneTracker) |


:::

:::group{name=withLore}

Return Type: T

```zenscript
ComponentAccess.withLore(components as Component) as T
```

| Parameter  |                   Type                   |
|------------|------------------------------------------|
| components | [Component](/vanilla/api/text/Component) |


:::

:::group{name=withLore}

Sets the &lt;componenttype:minecraft:lore&gt; of the ComponentAccess to have the given stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt;

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withLore(components as stdlib.List<Component>) as T

myComponentAccess.withLore([Component.literal("Found in a dark cave"), Component.translatable("Belonged to a Dragon")]);
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
ComponentAccess.withLore(lore as ItemLore) as T
```

| Parameter |                       Type                       |
|-----------|--------------------------------------------------|
| lore      | [ItemLore](/vanilla/api/item/component/ItemLore) |


:::

:::group{name=withMapColor}

Sets the &lt;componenttype:minecraft:map_color&gt; of the ComponentAccess to have the given [MapItemColor](/vanilla/api/item/component/MapItemColor)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withMapColor(color as MapItemColor) as T
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| color     | [MapItemColor](/vanilla/api/item/component/MapItemColor) |


:::

:::group{name=withMapColor}

Sets the &lt;componenttype:minecraft:map_color&gt; of the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withMapColor(rgb as int) as T

myComponentAccess.withMapColor(0xFF0000);
```

| Parameter | Type |    Description     |
|-----------|------|--------------------|
| rgb       | int  | The new map colour |


:::

:::group{name=withMapDecorations}

Sets the &lt;componenttype:minecraft:map_decorations&gt; of the ComponentAccess to have the given [MapDecorations](/vanilla/api/item/component/MapDecorations)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withMapDecorations(decorations as MapDecorations) as T
```

|  Parameter  |                             Type                             |
|-------------|--------------------------------------------------------------|
| decorations | [MapDecorations](/vanilla/api/item/component/MapDecorations) |


:::

:::group{name=withMapDecorations}

Sets the &lt;componenttype:minecraft:map_decorations&gt; of the ComponentAccess to have the given values.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withMapDecorations(decorations as MapDecorationsEntry[string]) as T
```

|  Parameter  |                                      Type                                      |
|-------------|--------------------------------------------------------------------------------|
| decorations | [MapDecorationsEntry](/vanilla/api/item/component/MapDecorationsEntry)[string] |


:::

:::group{name=withMapId}

Sets the &lt;componenttype:minecraft:map_id&gt; of the ComponentAccess to have the given value.

 A map id is only useful after the game generates one to store data.
 Therefore, you should always pass in the parameter for an id you know is available.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withMapId(id as int) as T
```

| Parameter | Type |
|-----------|------|
| id        | int  |


:::

:::group{name=withMapId}

Sets the &lt;componenttype:minecraft:map_id&gt; of the ComponentAccess to have the given [MapId](/vanilla/api/item/component/MapId)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withMapId(mapId as MapId) as T
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| mapId     | [MapId](/vanilla/api/item/component/MapId) |


:::

:::group{name=withMapPostProcessing}

Sets the &lt;componenttype:minecraft:map_post_processing&gt; of the ComponentAccess to have the given [MapPostProcessing](/vanilla/api/item/component/MapPostProcessing)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withMapPostProcessing(value as MapPostProcessing) as T
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| value     | [MapPostProcessing](/vanilla/api/item/component/MapPostProcessing) |


:::

:::group{name=withMaxDamage}

Sets the &lt;componenttype:minecraft:max_damage&gt; of the ComponentAccess to have the given value.

 It is likely that you need to call withDamage(0) in order for some things to function properly.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withMaxDamage(maxDamage as int) as T

myComponentAccess.withMaxDamage(1024);
myComponentAccess.withMaxDamage(1024);
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
// ComponentAccess.withMaxStackSize(maxStackSize as int) as T

myComponentAccess.withMaxStackSize(16);
```

|  Parameter   | Type |                 Description                  |
|--------------|------|----------------------------------------------|
| maxStackSize | int  | The new maxStackSize of the ComponentAccess. |


:::

:::group{name=withNoteBlockSound}

Sets the &lt;componenttype:minecraft:note_block_sound&gt; of the ComponentAccess to have the given [ResourceLocation](/vanilla/api/resource/ResourceLocation)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withNoteBlockSound(sound as ResourceLocation) as T
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| sound     | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=withOminousBottleAmplifier}

Sets the &lt;componenttype:minecraft:ominous_bottle_amplifier&gt; of the ComponentAccess to have the given amplifier.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withOminousBottleAmplifier(amplifier as int) as T
```

| Parameter | Type |
|-----------|------|
| amplifier | int  |


:::

:::group{name=withPotDecorations}

Sets the &lt;componenttype:minecraft:pot_decorations&gt; of the ComponentAccess to have the given [PotDecorations](/vanilla/api/item/component/PotDecorations)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withPotDecorations(decorations as PotDecorations) as T
```

|  Parameter  |                             Type                             |
|-------------|--------------------------------------------------------------|
| decorations | [PotDecorations](/vanilla/api/item/component/PotDecorations) |


:::

:::group{name=withPotDecorations}

Sets the &lt;componenttype:minecraft:pot_decorations&gt; of the ComponentAccess to have the given items.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withPotDecorations(back as ItemDefinition, left as ItemDefinition, right as ItemDefinition, front as ItemDefinition) as T
```

| Parameter |                        Type                        |
|-----------|----------------------------------------------------|
| back      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| left      | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| right     | [ItemDefinition](/vanilla/api/item/ItemDefinition) |
| front     | [ItemDefinition](/vanilla/api/item/ItemDefinition) |


:::

:::group{name=withPotionContents}

Sets the &lt;componenttype:minecraft:potion_contents&gt; of the ComponentAccess to have the given [PotionContents](/vanilla/api/item/component/PotionContents)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withPotionContents(contents as PotionContents) as T
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| contents  | [PotionContents](/vanilla/api/item/component/PotionContents) |


:::

:::group{name=withPotionContents}

Sets the &lt;componenttype:minecraft:potion_contents&gt; of the ComponentAccess to have the given [Potion](/vanilla/api/item/alchemy/Potion)
 and no custom effects

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withPotionContents(potion as Potion) as T

myComponentAccess.withPotionContents(<potion:minecraft:swiftness>);
```

| Parameter |                    Type                    |        Description         |
|-----------|--------------------------------------------|----------------------------|
| potion    | [Potion](/vanilla/api/item/alchemy/Potion) | The potion to store within |


:::

:::group{name=withPotionContents}

Sets the &lt;componenttype:minecraft:potion_contents&gt; of the ComponentAccess to have the given [Potion](/vanilla/api/item/alchemy/Potion)
 and the given [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) effects.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withPotionContents(potion as Potion, customEffects as stdlib.List<MobEffectInstance>) as T

myComponentAccess.withPotionContents(<potion:minecraft:swiftness>, [MobEffectInstance.of(<mobeffect:minecraft:strength>, 20 * 20, 1, false, false, true)]);
```

|   Parameter   |                                         Type                                         |                   Description                    |
|---------------|--------------------------------------------------------------------------------------|--------------------------------------------------|
| potion        | [Potion](/vanilla/api/item/alchemy/Potion)                                           | The potion to store within.                      |
| customEffects | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; | The effects to grant upon consuming this potion. |


:::

:::group{name=withPotionContents}

Sets the &lt;componenttype:minecraft:potion_contents&gt; of the ComponentAccess to have the given [Potion](/vanilla/api/item/alchemy/Potion)
 and the given [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) effects.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withPotionContents(potion as Potion, customColor as int, customEffects as stdlib.List<MobEffectInstance>) as T

myComponentAccess.withPotionContents(<potion:minecraft:swiftness>, 0xFFFFFF00, [MobEffectInstance.of(<mobeffect:minecraft:strength>, 20 * 20, 1, false, false, true)]);
```

|   Parameter   |                                         Type                                         |                   Description                    |
|---------------|--------------------------------------------------------------------------------------|--------------------------------------------------|
| potion        | [Potion](/vanilla/api/item/alchemy/Potion)                                           | The potion to store within.                      |
| customColor   | int                                                                                  | The ARGB color the potion will have.             |
| customEffects | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; | The effects to grant upon consuming this potion. |


:::

:::group{name=withProfile}

Sets the &lt;componenttype:minecraft:profile&gt; of the ComponentAccess to have the given [ResolvableProfile](/vanilla/api/item/component/ResolvableProfile)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withProfile(profile as ResolvableProfile) as T
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
// ComponentAccess.withRarity(rarity as Rarity) as T

myComponentAccess.withRarity(<constant:minecraft:item/rarity:epic>);
```

| Parameter |                    Type                     |    Description    |
|-----------|---------------------------------------------|-------------------|
| rarity    | [Rarity](/vanilla/api/item/property/Rarity) | The rarity to set |


:::

:::group{name=withRecipes}

Sets the &lt;componenttype:minecraft:recipes&gt; of the ComponentAccess to have the given stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withRecipes(recipes as stdlib.List<ResourceLocation>) as T
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
// ComponentAccess.withRepairCost(cost as int) as T

myComponentAccess.withRepairCost(20);
```

| Parameter | Type |   Description   |
|-----------|------|-----------------|
| cost      | int  | The repair cost |


:::

:::group{name=withStoredEnchantments}

Sets the &lt;componenttype:minecraft:stored_enchantments&gt; of the ComponentAccess to have the given [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withStoredEnchantments(enchantments as ItemEnchantments) as T
```

|  Parameter   |                               Type                               |
|--------------|------------------------------------------------------------------|
| enchantments | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments) |


:::

:::group{name=withSuspiciousStewEffects}

Sets the &lt;componenttype:minecraft:suspicious_stew_effects&gt; of the ComponentAccess to have the given [SuspiciousStewEffects](/vanilla/api/item/component/SuspiciousStewEffects)
 [SuspiciousStewEffectsEntry](/vanilla/api/item/component/SuspiciousStewEffectsEntry) is effectively a pair of Effect and duration.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withSuspiciousStewEffects(effects as stdlib.List<SuspiciousStewEffectsEntry>) as T
```

| Parameter |                                                  Type                                                   |                 Description                  |
|-----------|---------------------------------------------------------------------------------------------------------|----------------------------------------------|
| effects   | stdlib.List&lt;[SuspiciousStewEffectsEntry](/vanilla/api/item/component/SuspiciousStewEffectsEntry)&gt; | The list of effects to grant on consumption. |


:::

:::group{name=withSuspiciousStewEffects}

Sets the &lt;componenttype:minecraft:suspicious_stew_effects&gt; of the ComponentAccess to have the given [SuspiciousStewEffects](/vanilla/api/item/component/SuspiciousStewEffects)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withSuspiciousStewEffects(suspiciousStewEffects as SuspiciousStewEffects) as T
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
ComponentAccess.withTool(tool as Tool) as T
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| tool      | [Tool](/vanilla/api/item/component/Tool) |


:::

:::group{name=withTool}

Sets the &lt;componenttype:minecraft:tool&gt; of the ComponentAccess to have the given data.
 A [Tool](/vanilla/api/item/component/Tool) instance is constructed from the parameters.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withTool(rules as stdlib.List<ToolRule>, defaultMiningSpeed as float, damagePerBlock as int) as T

myComponentAccess.withTool([ToolRule.minesAndDrops(<tag:blocks:minecraft:planks>, 6.0f)], 0.25f, 1);
```

|     Parameter      |                                Type                                 |                          Description                          |
|--------------------|---------------------------------------------------------------------|---------------------------------------------------------------|
| rules              | stdlib.List&lt;[ToolRule](/vanilla/api/item/component/ToolRule)&gt; | The list of rules the new Tool instance will have             |
| defaultMiningSpeed | float                                                               | The default mining speed of the new tool                      |
| damagePerBlock     | int                                                                 | The damage or durability that is dealt to the Tool after use. |


:::

:::group{name=withTrim}

Sets the &lt;componenttype:minecraft:trim&gt; of the ComponentAccess to have the given [ArmorTrim](/vanilla/api/item/armortrim/ArmorTrim)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withTrim(trim as ArmorTrim) as T
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
ComponentAccess.withUnbreakable(showInTooltip as boolean) as T
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
ComponentAccess.withUnbreakable(unbreakable as Unbreakable) as T
```

|  Parameter  |                          Type                          |                                           Description                                           |
|-------------|--------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| unbreakable | [Unbreakable](/vanilla/api/item/component/Unbreakable) | The [Unbreakable](/vanilla/api/item/component/Unbreakable) instance with the configured values. |


:::

:::group{name=withWritableBookContent}

Sets the &lt;componenttype:minecraft:writable_book_content&gt; of the ComponentAccess to have the given [WritableBookContent](/vanilla/api/item/component/WritableBookContent)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withWritableBookContent(content as WritableBookContent) as T
```

| Parameter |                                  Type                                  |
|-----------|------------------------------------------------------------------------|
| content   | [WritableBookContent](/vanilla/api/item/component/WritableBookContent) |


:::

:::group{name=withWritableBookContent}



Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withWritableBookContent(pages as stdlib.List<Filterable<string>>) as T
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| pages     | stdlib.List&lt;[Filterable](/vanilla/api/server/Filterable)&lt;string&gt;&gt; |


:::

:::group{name=withWrittenBookContent}

Sets the &lt;componenttype:minecraft:written_book_content&gt; of the ComponentAccess to have the given [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent)

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
ComponentAccess.withWrittenBookContent(content as WrittenBookContent) as T
```

| Parameter |                                 Type                                 |
|-----------|----------------------------------------------------------------------|
| content   | [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent) |


:::

:::group{name=withoutAttributeModifiers}

Removes the &lt;componenttype:minecraft:attribute_modifiers&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutAttributeModifiers() as T

myComponentAccess.withoutAttributeModifiers();
```

:::

:::group{name=withoutBannerPatterns}

Removes the &lt;componenttype:minecraft:banner_patterns&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutBannerPatterns() as T

myComponentAccess.withoutBannerPatterns();
```

:::

:::group{name=withoutBaseColor}

Removes the &lt;componenttype:minecraft:base_color&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutBaseColor() as T

myComponentAccess.withoutBaseColor();
```

:::

:::group{name=withoutBees}

Removes the &lt;componenttype:minecraft:bees&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutBees() as T

myComponentAccess.withoutBees();
```

:::

:::group{name=withoutBlockEntityData}

Removes the &lt;componenttype:minecraft:block_entity_data&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutBlockEntityData() as T

myComponentAccess.withoutBlockEntityData();
```

:::

:::group{name=withoutBlockState}

Removes the &lt;componenttype:minecraft:block_state&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutBlockState() as T

myComponentAccess.withoutBlockState();
```

:::

:::group{name=withoutBucketEntityData}

Removes the &lt;componenttype:minecraft:bucket_entity_data&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutBucketEntityData() as T

myComponentAccess.withoutBucketEntityData();
```

:::

:::group{name=withoutBundleContents}

Removes the &lt;componenttype:minecraft:bundle_contents&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutBundleContents() as T

myComponentAccess.withoutBundleContents();
```

:::

:::group{name=withoutCanBreak}

Removes the &lt;componenttype:minecraft:can_break&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutCanBreak() as T

myComponentAccess.withoutCanBreak();
```

:::

:::group{name=withoutCanPlaceOn}

Removes the &lt;componenttype:minecraft:can_place_on&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutCanPlaceOn() as T

myComponentAccess.withoutCanPlaceOn();
```

:::

:::group{name=withoutChargedProjectiles}

Removes the &lt;componenttype:minecraft:charged_projectiles&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutChargedProjectiles() as T

myComponentAccess.withoutChargedProjectiles();
```

:::

:::group{name=withoutContainer}

Removes the &lt;componenttype:minecraft:container&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutContainer() as T

myComponentAccess.withoutContainer();
```

:::

:::group{name=withoutContainerLoot}

Removes the &lt;componenttype:minecraft:container_loot&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutContainerLoot() as T

myComponentAccess.withoutContainerLoot();
```

:::

:::group{name=withoutCreativeSlotLock}

Removes the &lt;componenttype:minecraft:creative_slot_lock&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutCreativeSlotLock() as T

myComponentAccess.withoutCreativeSlotLock();
```

:::

:::group{name=withoutCustomData}

Removes the &lt;componenttype:minecraft:custom_data&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutCustomData() as T

myComponentAccess.withoutCustomData();
```

:::

:::group{name=withoutCustomModelData}

Removes the &lt;componenttype:minecraft:custom_model_data&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutCustomModelData() as T

myComponentAccess.withoutCustomModelData();
```

:::

:::group{name=withoutCustomName}

Removes the &lt;componenttype:minecraft:custom_name&gt; from the ComponentAccess

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutCustomName() as T

myComponentAccess.withoutCustomName();
```

:::

:::group{name=withoutDamage}

Removes the &lt;componenttype:minecraft:damage&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutDamage() as T

myComponentAccess.withoutDamage();
```

:::

:::group{name=withoutDebugStickState}

Removes the &lt;componenttype:minecraft:debug_stick_state&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutDebugStickState() as T

myComponentAccess.withoutDebugStickState();
```

:::

:::group{name=withoutDyedColor}

Removes the &lt;componenttype:minecraft:dyed_color&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutDyedColor() as T

myComponentAccess.withoutDyedColor();
```

:::

:::group{name=withoutEnchantment}

Removes the [Enchantment](/vanilla/api/item/enchantment/Enchantment) from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutEnchantment(enchantment as Enchantment) as T

myComponentAccess.withoutEnchantment(<enchantment:minecraft:mending>);
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
// ComponentAccess.withoutEnchantmentGlintOverride() as T

myComponentAccess.withoutEnchantmentGlintOverride();
```

:::

:::group{name=withoutEnchantments}

Removes the &lt;componenttype:minecraft:enchantments&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutEnchantments() as T

myComponentAccess.withoutEnchantments();
```

:::

:::group{name=withoutEntityDate}

Removes the &lt;componenttype:minecraft:entity_data&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutEntityDate() as T

myComponentAccess.withoutEntityDate();
```

:::

:::group{name=withoutFireResistant}

Removes the &lt;componenttype:minecraft:fire_resistant&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutFireResistant() as T

myComponentAccess.withoutFireResistant();
```

:::

:::group{name=withoutFireworkExplosion}

Removes the &lt;componenttype:minecraft:firework_explosion&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutFireworkExplosion() as T

myComponentAccess.withoutFireworkExplosion();
```

:::

:::group{name=withoutFireworks}

Removes the &lt;componenttype:minecraft:fireworks&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutFireworks() as T

myComponentAccess.withoutFireworks();
```

:::

:::group{name=withoutFood}

Removes the &lt;componenttype:minecraft:food&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutFood() as T

myComponentAccess.withoutFood();
```

:::

:::group{name=withoutHideAdditionalTooltip}

Removes the &lt;componenttype:minecraft:hide_additional_tooltip&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutHideAdditionalTooltip() as T

myComponentAccess.withoutHideAdditionalTooltip();
```

:::

:::group{name=withoutHideTooltip}

Removes the &lt;componenttype:minecraft:hide_tooltip&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutHideTooltip() as T

myComponentAccess.withoutHideTooltip();
```

:::

:::group{name=withoutInstrument}

Removes the &lt;componenttype:minecraft:instrument&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutInstrument() as T

myComponentAccess.withoutInstrument();
```

:::

:::group{name=withoutIntangibleProjectile}

Removes the &lt;componenttype:minecraft:intangible_projectile&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutIntangibleProjectile() as T

myComponentAccess.withoutIntangibleProjectile();
```

:::

:::group{name=withoutItemName}

Removes the &lt;componenttype:minecraft:item_name&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutItemName() as T

myComponentAccess.withoutItemName();
```

:::

:::group{name=withoutLock}

Removes the &lt;componenttype:minecraft:lock&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutLock() as T

myComponentAccess.withoutLock();
```

:::

:::group{name=withoutLodestoneTracker}

Removes the &lt;componenttype:minecraft:lodestone_tracker&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutLodestoneTracker() as T

myComponentAccess.withoutLodestoneTracker();
```

:::

:::group{name=withoutLore}

Removes the &lt;componenttype:minecraft:lore&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutLore() as T

myComponentAccess.withoutLore();
```

:::

:::group{name=withoutMapColor}

Removes the &lt;componenttype:minecraft:map_color&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutMapColor() as T

myComponentAccess.withoutMapColor();
```

:::

:::group{name=withoutMapDecorations}

Removes the &lt;componenttype:minecraft:map_decorations&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutMapDecorations() as T

myComponentAccess.withoutMapDecorations();
```

:::

:::group{name=withoutMapId}

Removes the &lt;componenttype:minecraft:map_id&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutMapId() as T

myComponentAccess.withoutMapId();
```

:::

:::group{name=withoutMapPostProcessing}

Removes the &lt;componenttype:minecraft:map_post_processing&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutMapPostProcessing() as T

myComponentAccess.withoutMapPostProcessing();
```

:::

:::group{name=withoutMaxDamage}

Removes the &lt;componenttype:minecraft:max_damage&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutMaxDamage() as T

myComponentAccess.withoutMaxDamage();
```

:::

:::group{name=withoutMaxStackSize}

Removes the &lt;componenttype:minecraft:stack_size&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutMaxStackSize() as T

myComponentAccess.withoutMaxStackSize();
```

:::

:::group{name=withoutNoteBlockSound}

Removes the &lt;componenttype:minecraft:note_block_sound&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutNoteBlockSound() as T

myComponentAccess.withoutNoteBlockSound();
```

:::

:::group{name=withoutOminousBottleAmplifier}

Removes the &lt;componenttype:minecraft:ominous_bottle_amplifier&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutOminousBottleAmplifier() as T

myComponentAccess.withoutOminousBottleAmplifier();
```

:::

:::group{name=withoutPotDecorations}

Removes the &lt;componenttype:minecraft:pot_decorations&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutPotDecorations() as T

myComponentAccess.withoutPotDecorations();
```

:::

:::group{name=withoutPotionContents}

Removes the &lt;componenttype:minecraft:potion_contents&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutPotionContents() as T

myComponentAccess.withoutPotionContents();
```

:::

:::group{name=withoutProfile}

Removes the &lt;componenttype:minecraft:profile&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutProfile() as T

myComponentAccess.withoutProfile();
```

:::

:::group{name=withoutRarity}

Removes the &lt;componenttype:minecraft:rarity&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutRarity() as T

myComponentAccess.withoutRarity();
```

:::

:::group{name=withoutRecipes}

Removes the &lt;componenttype:minecraft:recipes&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutRecipes() as T

myComponentAccess.withoutRecipes();
```

:::

:::group{name=withoutRepairCost}

Removes the &lt;componenttype:minecraft:repair_cost&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutRepairCost() as T

myComponentAccess.withoutRepairCost();
```

:::

:::group{name=withoutStoredEnchantments}

Removes the &lt;componenttype:minecraft:stored_enchantments&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutStoredEnchantments() as T

myComponentAccess.withoutStoredEnchantments();
```

:::

:::group{name=withoutSuspiciousStewEffects}

Removes the &lt;componenttype:minecraft:suspicious_stew_effects&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutSuspiciousStewEffects() as T

myComponentAccess.withoutSuspiciousStewEffects();
```

:::

:::group{name=withoutTool}

Removes the &lt;componenttype:minecraft:tool&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutTool() as T

myComponentAccess.withoutTool();
```

:::

:::group{name=withoutTrim}

Removes the &lt;componenttype:minecraft:trim&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutTrim() as T

myComponentAccess.withoutTrim();
```

:::

:::group{name=withoutUnbreakable}

Removes the &lt;componenttype:minecraft:unbreakable&gt; from the ComponentAccess

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutUnbreakable() as T

myComponentAccess.withoutUnbreakable();
```

:::

:::group{name=withoutWritableBookContent}

Removes the &lt;componenttype:minecraft:writable_book_content&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutWritableBookContent() as T

myComponentAccess.withoutWritableBookContent();
```

:::

:::group{name=withoutWrittenBookContent}

Removes the &lt;componenttype:minecraft:written_book_content&gt; from the ComponentAccess.

Returns: The new instance with the modified data.  
Return Type: T

```zenscript
// ComponentAccess.withoutWrittenBookContent() as T

myComponentAccess.withoutWrittenBookContent();
```

:::


## Properties

|            Name             |                                                    Type                                                    | Has Getter | Has Setter |                                                                                                                                      Description                                                                                                                                      |
|-----------------------------|------------------------------------------------------------------------------------------------------------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| attributeModifiers          | [ItemAttributeModifiers](/vanilla/api/item/component/ItemAttributeModifiers)                               | true       | false      | Gets the data in &lt;componenttype:minecraft:attribute_modifiers&gt;                                                                                                                                                                                                                  |
| bannerPatterns              | [BannerPatternLayers](/vanilla/api/block/entity/BannerPatternLayers)                                       | true       | false      | Gets the data in &lt;componenttype:minecraft:banner_patterns&gt;                                                                                                                                                                                                                      |
| baseColor                   | [DyeColor](/vanilla/api/item/component/DyeColor)                                                           | true       | false      | Gets the data in &lt;componenttype:minecraft:base_color&gt;                                                                                                                                                                                                                           |
| bees                        | stdlib.List&lt;[BeehiveBlockEntityOccupant](/vanilla/api/block/entity/type/BeehiveBlockEntityOccupant)&gt; | true       | false      | Gets the data in &lt;componenttype:minecraft:bees&gt;                                                                                                                                                                                                                                 |
| blockEntityData             | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      | Gets the data in &lt;componenttype:minecraft:block_entity_data&gt;                                                                                                                                                                                                                    |
| blockState                  | [BlockItemStateProperties](/vanilla/api/item/component/BlockItemStateProperties)                           | true       | false      | Gets the data in &lt;componenttype:minecraft:block_state&gt;                                                                                                                                                                                                                          |
| bucketEntityData            | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      | Gets the data in &lt;componenttype:minecraft:bucket_entity_data&gt;                                                                                                                                                                                                                   |
| bundleContents              | [BundleContents](/vanilla/api/item/component/BundleContents)                                               | true       | false      | Gets the data in &lt;componenttype:minecraft:bundle_contents&gt;                                                                                                                                                                                                                      |
| canBreak                    | [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)                               | true       | false      | Gets the data in &lt;componenttype:minecraft:can_break&gt;                                                                                                                                                                                                                            |
| canPlaceOn                  | [AdventureModePredicate](/vanilla/api/item/component/AdventureModePredicate)                               | true       | false      | Gets the data in &lt;componenttype:minecraft:can_place_on&gt;                                                                                                                                                                                                                         |
| chargedProjectiles          | [ChargedProjectiles](/vanilla/api/item/component/ChargedProjectiles)                                       | true       | false      | Gets the data in &lt;componenttype:minecraft:charged_projectiles&gt;                                                                                                                                                                                                                  |
| container                   | [ItemContainerContents](/vanilla/api/item/component/ItemContainerContents)                                 | true       | false      | Gets the data in &lt;componenttype:minecraft:container&gt;                                                                                                                                                                                                                            |
| containerLoot               | [SeededContainerLoot](/vanilla/api/item/component/SeededContainerLoot)                                     | true       | false      | Gets the data in &lt;componenttype:minecraft:container_loot&gt;                                                                                                                                                                                                                       |
| creativeSlotLock            | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:creative_slot_lock&gt;                                                                                                                                                                                                                   |
| customData                  | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      | Gets the data in the &lt;componenttype:minecraft:custom_data&gt;                                                                                                                                                                                                                      |
| customModelData             | [CustomModelData](/vanilla/api/item/component/CustomModelData)                                             | true       | false      | Gets the data in &lt;componenttype:minecraft:custom_model_data&gt;                                                                                                                                                                                                                    |
| customName                  | [Component](/vanilla/api/text/Component)                                                                   | true       | false      | Gets the data in the &lt;componenttype:minecraft:custom_name&gt; <br />  <br />  A custom name is generally displayed in italics and controlled by the user.                                                                                                                          |
| damage                      | int                                                                                                        | true       | false      | Gets the data in the &lt;componenttype:minecraft:damage&gt;                                                                                                                                                                                                                           |
| debugStickState             | [DebugStickState](/vanilla/api/item/component/DebugStickState)                                             | true       | false      | Gets the data in &lt;componenttype:minecraft:debug_stick_state&gt;                                                                                                                                                                                                                    |
| dyedColor                   | [DyedItemColor](/vanilla/api/item/component/DyedItemColor)                                                 | true       | false      | Gets the data in &lt;componenttype:minecraft:dye_color&gt;                                                                                                                                                                                                                            |
| enchantmentGlintOverride    | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:enchantment_glint_override&gt; <br />  <br />  If it is present, it is first checked to determine whether there is special behaviour, otherwise <br />  the code checks for enchantments.                                                |
| enchantments                | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)                                           | true       | false      | Gets the data in &lt;componenttype:minecraft:enchantments&gt;                                                                                                                                                                                                                         |
| entityData                  | [CustomData](/vanilla/api/item/component/CustomData)                                                       | true       | false      | Gets the data in &lt;componenttype:minecraft:entity_data&gt;                                                                                                                                                                                                                          |
| fireworkExplosion           | [FireworkExplosion](/vanilla/api/item/component/FireworkExplosion)                                         | true       | false      | Gets the data in &lt;componenttype:minecraft:firework_explosion&gt;                                                                                                                                                                                                                   |
| fireworks                   | [Fireworks](/vanilla/api/item/component/Fireworks)                                                         | true       | false      | Gets the data in &lt;componenttype:minecraft:fireworks&gt;                                                                                                                                                                                                                            |
| food                        | [FoodProperties](/vanilla/api/food/FoodProperties)                                                         | true       | false      | Gets the data in &lt;componenttype:minecraft:food&gt;                                                                                                                                                                                                                                 |
| hasAttributeModifiers       | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:attribute_modifiers&gt;                                                                                                                                                                                            |
| hasBannerPatterns           | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:banner_patterns&gt;                                                                                                                                                                                                |
| hasBaseColor                | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:base_color&gt; <br />  <br />  Used for shield colouring.                                                                                                                                                          |
| hasBees                     | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:bees&gt;                                                                                                                                                                                                           |
| hasBlockEntityData          | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:block_entity_data&gt;                                                                                                                                                                                              |
| hasBlockState               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:block_state&gt;                                                                                                                                                                                                    |
| hasBucketEntityData         | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:bucket_entity_data&gt;                                                                                                                                                                                             |
| hasBundleContents           | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:bundle_contents&gt;                                                                                                                                                                                                |
| hasCanBreak                 | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:can_break&gt;                                                                                                                                                                                                      |
| hasCanPlaceOn               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:can_place_on&gt;                                                                                                                                                                                                   |
| hasChargedProjectiles       | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:charged_projectiles&gt; <br />  <br />  This component is used for crossbows.                                                                                                                                      |
| hasContainer                | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:container&gt;                                                                                                                                                                                                      |
| hasContainerLoot            | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:container_loot&gt;                                                                                                                                                                                                 |
| hasCustomData               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:custom_data&gt;                                                                                                                                                                                                |
| hasCustomModelData          | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:custom_model_data&gt;                                                                                                                                                                                              |
| hasCustomName               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:custom_name&gt;                                                                                                                                                                                                |
| hasDamage                   | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:damage&gt;                                                                                                                                                                                                     |
| hasDebugStickState          | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:debug_stick_state&gt;                                                                                                                                                                                              |
| hasDyedColor                | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:dyed_color&gt;                                                                                                                                                                                                     |
| hasEnchantmentGlintOverride | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:enchantment_glint_override&gt;                                                                                                                                                                                     |
| hasEnchantments             | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:enchantments&gt;                                                                                                                                                                                               |
| hasEntityData               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:entity_data&gt;                                                                                                                                                                                                    |
| hasFireworkExplosion        | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:firework_explosion&gt;                                                                                                                                                                                             |
| hasFireworks                | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:fireworks&gt;                                                                                                                                                                                                      |
| hasFood                     | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:food&gt;                                                                                                                                                                                                           |
| hasInstrument               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:instrument&gt;                                                                                                                                                                                                     |
| hasItemName                 | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:item_namegt;                                                                                                                                                                                                   |
| hasLock                     | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:lock&gt;                                                                                                                                                                                                           |
| hasLodestoneTracker         | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:lodestone_tracker&gt;                                                                                                                                                                                              |
| hasLore                     | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:lore&gt;                                                                                                                                                                                                       |
| hasMapColor                 | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:map_color&gt;                                                                                                                                                                                                      |
| hasMapDecorations           | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:map_decorations&gt; <br />  <br />  MapDecorations are additional elements that render on a map, such as waypoints.                                                                                                |
| hasMapId                    | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:map_id&gt;                                                                                                                                                                                                         |
| hasMapPostProcessing        | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:map_post_processing&gt; <br />  <br />  This componenet stores additional info on the map, such as the scale or whether to lock it.                                                                                |
| hasMaxDamage                | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:max_damage&gt;                                                                                                                                                                                                 |
| hasMaxStackSize             | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:max_stack_size&gt;                                                                                                                                                                                             |
| hasNoteBlockSound           | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:note_block_sound&gt;                                                                                                                                                                                               |
| hasOminousBottleAmplifier   | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:ominous_bottle_amplifier&gt;                                                                                                                                                                                       |
| hasPotDecorations           | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:pot_decorations&gt;                                                                                                                                                                                                |
| hasPotionContents           | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:potion_contents&gt; <br />  <br />  Stores Potion Data on an item.                                                                                                                                                 |
| hasProfile                  | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:profile&gt;                                                                                                                                                                                                        |
| hasRarity                   | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:rarity&gt;                                                                                                                                                                                                     |
| hasRecipes                  | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:recipes&gt; <br />  <br />  Used for Knowledge Books.                                                                                                                                                              |
| hasRepairCost               | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:repair_cost&gt;                                                                                                                                                                                                    |
| hasStoredEnchantments       | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:stored_enchantments&gt; <br />  <br />  The stored enchantments component is only present in enchanted books, since it just stores the enchantments <br />  under a lid for future use. The item is not enchanted. |
| hasSuspiciousStewEffects    | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:suspicious_stew_effects&gt;                                                                                                                                                                                        |
| hasTool                     | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:tool&gt;                                                                                                                                                                                                           |
| hasTrim                     | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:trim&gt;                                                                                                                                                                                                           |
| hasUnbreakable              | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has the &lt;componenttype:minecraft:unbreakable&gt;                                                                                                                                                                                                |
| hasWritableBookContent      | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:writable_book_content&gt;                                                                                                                                                                                          |
| hasWrittenBookContent       | boolean                                                                                                    | true       | false      | Checks whether the ComponentAccess has &lt;componenttype:minecraft:written_book_content&gt;                                                                                                                                                                                           |
| hideAdditionalTooltip       | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:hide_additional_tooltip&gt;                                                                                                                                                                                                              |
| hideTooltip                 | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:hide_tooltip&gt;                                                                                                                                                                                                                         |
| instrument                  | [Instrument](/vanilla/api/item/component/Instrument)                                                       | true       | false      | Gets the data in &lt;componenttype:minecraft:instrument&gt;                                                                                                                                                                                                                           |
| isFireResistant             | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:fire_resistant&gt;                                                                                                                                                                                                                       |
| isIntangibleProjectile      | boolean                                                                                                    | true       | false      | Gets the data in &lt;componenttype:minecraft:intangible_projectile&gt;                                                                                                                                                                                                                |
| itemName                    | [Component](/vanilla/api/text/Component)                                                                   | true       | false      | Gets the data in the &lt;componenttype:minecraft:item_name&gt; <br />  <br />  In the case of items, an item name is set by the make to make a special instance of an item, such as with <br />  ominous banners.                                                                     |
| lockComponent               | [LockCode](/vanilla/api/item/component/LockCode)                                                           | true       | false      | Gets the data in &lt;componenttype:minecraft:lock&gt;                                                                                                                                                                                                                                 |
| lodestoneTracker            | [LodestoneTracker](/vanilla/api/item/component/LodestoneTracker)                                           | true       | false      | Gets the data in &lt;componenttype:minecraft:lodestone_tracker&gt;                                                                                                                                                                                                                    |
| lore                        | [ItemLore](/vanilla/api/item/component/ItemLore)                                                           | true       | false      | Gets the data in the &lt;componenttype:minecraft:lore&gt;                                                                                                                                                                                                                             |
| mapColor                    | [MapItemColor](/vanilla/api/item/component/MapItemColor)                                                   | true       | false      | Gets the data in &lt;componenttype:minecraft:map_color&gt;                                                                                                                                                                                                                            |
| mapDecorations              | [MapDecorations](/vanilla/api/item/component/MapDecorations)                                               | true       | false      | Gets the data in &lt;componenttype:minecraft:map_decorations&gt;                                                                                                                                                                                                                      |
| mapId                       | [MapId](/vanilla/api/item/component/MapId)                                                                 | true       | false      | Gets the data in &lt;componenttype:minecraft:map_id&gt;                                                                                                                                                                                                                               |
| mapPostProcessing           | [MapPostProcessing](/vanilla/api/item/component/MapPostProcessing)                                         | true       | false      | Gets the data in &lt;componenttype:minecraft:map_post_processing&gt;                                                                                                                                                                                                                  |
| maxDamage                   | int                                                                                                        | true       | false      | Gets the data in the &lt;componenttype:minecraft:max_damage&gt;                                                                                                                                                                                                                       |
| maxStackSize                | int                                                                                                        | true       | false      | Gets the data in the &lt;componenttype:minecraft:max_stack_size&gt;                                                                                                                                                                                                                   |
| noteBlockSound              | [ResourceLocation](/vanilla/api/resource/ResourceLocation)                                                 | true       | false      | Gets the data in &lt;componenttype:minecraft:note_block_sound&gt;                                                                                                                                                                                                                     |
| ominousBottleAmplifier      | int                                                                                                        | true       | false      | Gets the data in &lt;componenttype:minecraft:ominous_bottle_amplifier&gt;                                                                                                                                                                                                             |
| potDecorations              | [PotDecorations](/vanilla/api/item/component/PotDecorations)                                               | true       | false      | Gets the data in &lt;componenttype:minecraft:pot_decorations&gt;                                                                                                                                                                                                                      |
| potionContents              | [PotionContents](/vanilla/api/item/component/PotionContents)                                               | true       | false      | Gets the data in &lt;componenttype:minecraft:potion_contents&gt;                                                                                                                                                                                                                      |
| profile                     | [ResolvableProfile](/vanilla/api/item/component/ResolvableProfile)                                         | true       | false      | Gets the data in &lt;componenttype:minecraft:profile&gt;                                                                                                                                                                                                                              |
| rarity                      | [Rarity](/vanilla/api/item/property/Rarity)                                                                | true       | false      | Gets the data in the &lt;componenttype:minecraft:rarity&gt;                                                                                                                                                                                                                           |
| recipes                     | stdlib.List&lt;[ResourceLocation](/vanilla/api/resource/ResourceLocation)&gt;                              | true       | false      | Gets the data in &lt;componenttype:minecraft:recipes&gt;                                                                                                                                                                                                                              |
| repairCost                  | int                                                                                                        | true       | false      | Gets the data in &lt;componenttype:minecraft:repair_cost&gt;                                                                                                                                                                                                                          |
| storedEnchantments          | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)                                           | true       | false      | Gets the data in &lt;componenttype:minecraft:stored_enchantments&gt;                                                                                                                                                                                                                  |
| suspiciousStewEffects       | [SuspiciousStewEffects](/vanilla/api/item/component/SuspiciousStewEffects)                                 | true       | false      | Gets the data in &lt;componenttype:minecraft:suspicious_stew_effects&gt;                                                                                                                                                                                                              |
| tool                        | [Tool](/vanilla/api/item/component/Tool)                                                                   | true       | false      | Gets the data in &lt;componenttype:minecraft:tool&gt;                                                                                                                                                                                                                                 |
| trim                        | [ArmorTrim](/vanilla/api/item/armortrim/ArmorTrim)                                                         | true       | false      | Gets the data in &lt;componenttype:minecraft:trim&gt;                                                                                                                                                                                                                                 |
| unbreakable                 | [Unbreakable](/vanilla/api/item/component/Unbreakable)                                                     | true       | false      | Gets the data in the &lt;componenttype:minecraft:unbreakable&gt;                                                                                                                                                                                                                      |
| writableBookContent         | [WritableBookContent](/vanilla/api/item/component/WritableBookContent)                                     | true       | false      | Gets the data in &lt;componenttype:minecraft:writable_book_content&gt;                                                                                                                                                                                                                |
| writtenBookContent          | [WrittenBookContent](/vanilla/api/item/component/WrittenBookContent)                                       | true       | false      | Gets the data in &lt;componenttype:minecraft:written_book_content&gt;                                                                                                                                                                                                                 |


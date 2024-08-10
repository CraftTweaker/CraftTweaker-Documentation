# ArmorGroup

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.armoreablemobs.ArmorGroup;
```


## Static Methods

:::group{name=overrideExistingArmor}

A powerful method to override the armor of a mob depending on which block they are standing on.

```zenscript
// ArmorGroup.overrideExistingArmor(type as EntityType<Entity>, map as IItemStack[EquipmentSlot], state as BlockState)

ArmorGroup.overrideExistingArmor(<entitytype:minecraft:zombie>, {<constant:minecraft:equipmentslot:chest> : <item:minecraft:netherite_chestplate>,
 <constant:minecraft:equipmentslot:mainhand> : <item:minecraft:netherite_sword>}, <blockstate:minecraft:sand>);
```

| Parameter |                                                   Type                                                   |                                                                                                     Description                                                                                                     |
|-----------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type      | [EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;                 | The [EntityType](/vanilla/api/entity/EntityType)&lt;T&gt; to Override                                                                                                                                               |
| map       | [IItemStack](/vanilla/api/item/IItemStack)[[EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)] | The Associative Array, as `EquipmentSlot[IItemStack]` that will be used as the entities armor. If an <br />  [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) is empty, it won't override what's there. |
| state     | [BlockState](/vanilla/api/block/BlockState)                                                              | The BlockState to override the armor if the aforementioned [EntityType](/vanilla/api/entity/EntityType)&lt;T&gt; spawns on top of.                                                                                  |


:::

## Constructors


```zenscript
new ArmorGroup(name as string) as ArmorGroup
```
| Parameter |  Type  |               Description                |
|-----------|--------|------------------------------------------|
| name      | string | The display name of the group to create. |



## Casters

| Result Type | Is Implicit |
|-------------|-------------|
| string      | true        |

## Methods

:::group{name=getEquipment}

Returns the AssociativeArray that corresponds to the internal `EquipmentSlot[IItemStack]`

Returns: The internal map as `EquipmentSlot[IItemStack]`  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)[[EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot)]

```zenscript
// ArmorGroup.getEquipment() as ItemStack[EquipmentSlot]

myArmorGroup.getEquipment();
```

:::

:::group{name=getName}

Gets the name of the ArmorGroup

Returns: The name of the group as a string.  
Return Type: string

```zenscript
// ArmorGroup.getName() as string

myArmorGroup.getName();
```

:::

:::group{name=getStackinSlot}

Gets the ItemStack the group will give in a selected slot. Can be null. Would be the same as using
 [ArmorGroup](/mods/ArmoreableMobs/ArmorGroup)#getEquipment() and passing the [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) as a key.

Returns: The ItemStack at the selected location. Can be null.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// ArmorGroup.getStackinSlot(slot as EquipmentSlot) as ItemStack

myArmorGroup.getStackinSlot(<constant:minecraft:equipmentslot:head>);
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::

:::group{name=getWeight}

Gets the weight of the ArmorGroup

Returns: The weight of the group as a double.  
Return Type: double

```zenscript
// ArmorGroup.getWeight() as double

myArmorGroup.getWeight();
```

:::

:::group{name=inSlot}

Links a slot to the ItemStack the entity will get when spawning. Accepts all [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) types.

Returns: The ArmorGroup that has been modified.  
Return Type: [ArmorGroup](/mods/ArmoreableMobs/ArmorGroup)

```zenscript
// ArmorGroup.inSlot(slot as EquipmentSlot, stack as IItemStack) as ArmorGroup

myArmorGroup.inSlot(<constant:minecraft:equipmentslot:feet>, <item:minecraft:iron_boots>);
```

| Parameter |                             Type                             |                              Description                              |
|-----------|--------------------------------------------------------------|-----------------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) | The slot at which the ItemStack will be placed                        |
| stack     | [IItemStack](/vanilla/api/item/IItemStack)                   | The [IItemStack](/vanilla/api/item/IItemStack) to give to the Entity. |


:::

:::group{name=register}

Registers the ArmorGroup.

```zenscript
// ArmorGroup.register(type as EntityType<Entity>)

myArmorGroup.register(<entitytype:minecraft:zombie>);
```

| Parameter |                                           Type                                           |                         Description                          |
|-----------|------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| type      | [EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt; | The entity at which the ArmorGroup will be applied on spawn. |


:::

:::group{name=setWeight}

Sets the weight at which the armor group can spawn. The chance a group has to spawn on an entity is determined using a pseudo
 random number and the total weight of ArmorGroups that entity can have.

Returns: The ArmorGroup that has been modified.  
Return Type: [ArmorGroup](/mods/ArmoreableMobs/ArmorGroup)

```zenscript
// ArmorGroup.setWeight(weight as double) as ArmorGroup

myArmorGroup.setWeight(3.0);
```

| Parameter |  Type  |                            Description                            |
|-----------|--------|-------------------------------------------------------------------|
| weight    | double | The weight at which the ArmorGroup will spawn on the entity type. |


:::



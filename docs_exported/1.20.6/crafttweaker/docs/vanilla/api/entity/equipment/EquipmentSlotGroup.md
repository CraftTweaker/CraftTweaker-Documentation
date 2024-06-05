# EquipmentSlotGroup

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.equipment.EquipmentSlotGroup;
```


## Implemented Interfaces
EquipmentSlotGroup implements the following interfaces. That means all methods defined in these interfaces are also available in EquipmentSlotGroup

- [StringRepresentable](/vanilla/api/util/StringRepresentable)

## Enum Constants

EquipmentSlotGroup is an enum. It has 10 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:equipmentslot/group:any>
<constant:minecraft:equipmentslot/group:mainhand>
<constant:minecraft:equipmentslot/group:offhand>
<constant:minecraft:equipmentslot/group:hand>
<constant:minecraft:equipmentslot/group:feet>
<constant:minecraft:equipmentslot/group:legs>
<constant:minecraft:equipmentslot/group:chest>
<constant:minecraft:equipmentslot/group:head>
<constant:minecraft:equipmentslot/group:armor>
<constant:minecraft:equipmentslot/group:body>
```
## Static Methods

:::group{name=bySlot}

Return Type: [EquipmentSlotGroup](/vanilla/api/entity/equipment/EquipmentSlotGroup)

```zenscript
EquipmentSlotGroup.bySlot(slot as EquipmentSlot) as EquipmentSlotGroup
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::

## Methods

:::group{name=test}

Return Type: boolean

```zenscript
EquipmentSlotGroup.test(slot as EquipmentSlot) as boolean
```

| Parameter |                             Type                             |
|-----------|--------------------------------------------------------------|
| slot      | [EquipmentSlot](/vanilla/api/entity/equipment/EquipmentSlot) |


:::



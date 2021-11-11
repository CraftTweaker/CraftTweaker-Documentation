::requiredMod[Armoreable Mobs]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/armoreablemobs}

#Armoreable Mobs

A mod that allows you to give armor on spawn to living mobs.

#ArmorGroup methods
`new ArmorGroup(name as string) as ArmorGroup` -> Returns a new ArmorGroup with the specified name.

`MyArmorGroup.setWeight(weight as double) as ArmorGroup` -> Returns a new ArmorGroup with the specified weight. Weight affects how common that armor is given to mobs that spawn with it.


`MyArmorGroup.inSlot(slot as EquipmentSlotType, stack as IItemStack) as ArmorGroup` -> Returns a new ArmorGroup with the specified stack in the specified [slot](/vanilla/api/util/MCEquipmentSlotType).


`MyArmorGroup.register(entitytype as MCEntityType) as void` -> Adds the ArmorGroup to that entity's armor list.

#Static methods

`MyArmorGroup.overrideExistingArmor(type as MCEntityType, map as IItemStack[MCEquipmentSlotType], blockstate as @Optional MCBlockState) as void` -> In the event that the mob spawns with armor, overrides that with a possible ArmorGroup.


#Optional Methods

Requires GamestagesAPI:

`MyArmorGroup.addStages(stages as string...) as ArmorGroup` -> Returns a new ArmorGroup that will only be given to a mob if a player that's nearby has all of the stages.

Requires Packmode:

`MyArmorGroup.setPackmode(mode as string) as ArmorGroup` -> Returns a new ArmorGroup that will only be given to a mob if a player that's nearby has the same packmode.






#Example

```zenscript
import mods.armoreablemods.ArmorGroup;

new ArmorGroup("zombie_test_1")
.inSlot(<equipmentslottype:head>, <item:minecraft:iron_helmet>.withTag({RepairCost: 1 as int, Enchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}))
.inSlot(<equipmentslottype:chest>, <item:minecraft:iron_chestplate>.withTag({RepairCost: 1 as int, Enchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}))
.inSlot(<equipmentslottype:legs>, <item:minecraft:iron_leggings>.withTag({RepairCost: 1 as int, Enchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}))
.inSlot(<equipmentslottype:feet>, <item:minecraft:iron_boots>.withTag({RepairCost: 1 as int, Enchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}))
.addStages("start")
.setWeight(10.0)
.register(<entitytype:minecraft:zombie>);

new ArmorGroup("zombie_test_2")
.inSlot(<equipmentslottype:head>, <item:minecraft:diamond_helmet>.withTag({RepairCost: 1 as int, Enchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}))
.inSlot(<equipmentslottype:chest>, <item:minecraft:diamond_chestplate>.withTag({RepairCost: 1 as int, Enchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}))
.inSlot(<equipmentslottype:legs>, <item:minecraft:diamond_leggings>.withTag({RepairCost: 1 as int, Enchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}))
.inSlot(<equipmentslottype:feet>, <item:minecraft:diamond_boots>.withTag({RepairCost: 1 as int, Enchantments: [{lvl: 1 as short, id: "minecraft:mending" as string}]}))
.addStages("start")
.setWeight(1.0)
.register(<entitytype:minecraft:zombie>);

val myMap as IItemStack[MCEquipmentSlotType] = {
    <equipmentslottype:head> : <item:minecraft:leather_helmet>,
    <equipmentslottype:mainhand> : <item:minecraft:wooden_sword>
};
ArmorGroup.overrideExistingArmor(<entitytype:minecraft:zombie>, <blockstate:minecraft:sand>, myMap);

```
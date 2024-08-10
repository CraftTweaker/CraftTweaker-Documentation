# Armoreable Mobs Examples

This page provides a quick outline on the examples shipped within Armoreable Mobs.

Keep in mind ArmoreableMobs attempts to modify mobs that spawn the vanilla way after the regular steps for applying armor have already been applied.
However, mods are free to ignore the vanilla way and find custom ways to circumvent this.

### Weight Calculation

Whenever you create an [ArmorGroup](/mods/ArmoreableMobs/ArmorGroup), you need to set its weight. When calculating which [ArmorGroup](/mods/ArmoreableMobs/ArmorGroup) is assigned to 
an entity, ArmoreableMobs grabs all of the registered groups for an entity type, and selects one of them randomly. At any time, the chances of any 
[ArmorGroup](/mods/ArmoreableMobs/ArmorGroup) to be selected is equal to the weight of that group divided over the sum of all of the ArmorGroup instances
that are registered for said entity type.


### Examples

This example ensures that any strays that spawn, spawn with an iron chestplate.
In the event they are holding an item in the right hand, which happens most of the time, it will be replaced with air.

```zenscript
import mods.armoreablemobs.ArmorGroup;

//Disarm right handed strays
new ArmorGroup("stray_1")
.inSlot(<constant:minecraft:equipmentslot:chest>, <item:minecraft:iron_chestplate>)
.inSlot(<constant:minecraft:equipmentslot:mainhand>, <item:minecraft:air>)
.setWeight(100.0)
.register(<entitytype:minecraft:stray>);

```

This snippet makes it so regular skeletons always spawn with a diamond sword in their mainhand.
In the event they were to be spawning with any armor, it is removed.

```zenscript
//Always arm skeletons in the right hand with a diamond sword and no extra armor
//This disables any chance of them spawning with any armor in any spot.
new ArmorGroup("skeleton_1")
.inSlot(<constant:minecraft:equipmentslot:head>, <item:minecraft:air>)
.inSlot(<constant:minecraft:equipmentslot:chest>, <item:minecraft:air>)
.inSlot(<constant:minecraft:equipmentslot:legs>, <item:minecraft:air>)
.inSlot(<constant:minecraft:equipmentslot:feet>, <item:minecraft:air>)
.inSlot(<constant:minecraft:equipmentslot:mainhand>, <item:minecraft:diamond_sword>)
.inSlot(<constant:minecraft:equipmentslot:offhand>, <item:minecraft:air>)
.setWeight(100.0)
.register(<entitytype:minecraft:skeleton>);
```

This block modifies zombie spawning so that one in eleven zombies spawn with full netherite armor, while the rest
spawn with iron armor.

```zenscript

//Adds an ArmorGroup for zombies to spawn with full iron armor
new ArmorGroup("zombie_test_1")
.inSlot(<constant:minecraft:equipmentslot:head>, <item:minecraft:iron_helmet>)
.inSlot(<constant:minecraft:equipmentslot:chest>, <item:minecraft:iron_chestplate>)
.inSlot(<constant:minecraft:equipmentslot:legs>, <item:minecraft:iron_leggings>)
.inSlot(<constant:minecraft:equipmentslot:feet>, <item:minecraft:iron_boots>)
.setWeight(10.0)
.register(<entitytype:minecraft:zombie>);


//Adds an ArmorGroup for zombies to spawn with full netherite armor
new ArmorGroup("zombie_test_2")
.inSlot(<constant:minecraft:equipmentslot:head>, <item:minecraft:netherite_helmet>)
.inSlot(<constant:minecraft:equipmentslot:chest>, <item:minecraft:netherite_chestplate>)
.inSlot(<constant:minecraft:equipmentslot:legs>, <item:minecraft:netherite_leggings>)
.inSlot(<constant:minecraft:equipmentslot:feet>, <item:minecraft:netherite_boots>)
.setWeight(1.0)
.register(<entitytype:minecraft:zombie>);

```

Lastly, it is worth noting that should you want to keep original armor modifications, you should create an empty armor group and register it
with the desired weight. In the following example, we make the same modification as we did earlier, but with a 50% chance this time:

```zenscript
val emptyGroup = new ArmorGroup("empty_group");
emptyGroup.setWeight(50.0).register(<entitytype:minecraft:husk>);

//Done with husks this time to avoid any possible collisions with the stray group
new ArmorGroup("husk")
.inSlot(<constant:minecraft:equipmentslot:chest>, <item:minecraft:iron_chestplate>)
.inSlot(<constant:minecraft:equipmentslot:mainhand>, <item:minecraft:air>)
.setWeight(50.0)
.register(<entitytype:minecraft:husk>);
```


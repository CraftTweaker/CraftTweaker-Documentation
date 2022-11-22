# Roots Classic Examples

This file contains most of the Roots Examples available to you, the user, for 1.18!

## Spell Examples

As you might have noticed, Spells are a proper recipetype, which means you can use all methods found in [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager).

No imports are necessary to use the following code:

```zenscript

//Overwrite existing recipes.
<recipetype:rootsclassic:component>.setSpellIngredients(<resource:rootsclassic:rose_bush>,[<item:minecraft:dirt>,<item:minecraft:grass>]);

<recipetype:rootsclassic:component>.setSpellIngredients(<resource:rootsclassic:rose_bush>, [<item:minecraft:tnt>, <item:minecraft:apple>]);

//Add a new mortar recipe
<recipetype:rootsclassic:component>.addMortarCrafting("dirt_to_diamond",[<item:minecraft:dirt>,<item:minecraft:coarse_dirt>], <item:minecraft:diamond>);

<recipetype:rootsclassic:component>.addMortarCrafting("gunpowder_to_gold", [<item:minecraft:gunpowder>, <item:minecraft:coal>], <item:minecraft:gold_ingot>);

//Remove an existing recipe
<recipetype:rootsclassic:component>.removeByName("rootsclassic:component/peony");

```

## Ritual Examples

Rituals are a tiny bit more complicated. They are crafted using a multiblock, and the CraftTweaker support for it allows you to modify everything in a ritual:

```zenscript

//Add a new ritual
//level zero means no standing stones, only Altar+Brazier
Ritual.addCraftingRitual("simple", <item:minecraft:prismarine_shard>, 0,
		 51,51,255,
 [<item:minecraft:dirt>,<item:minecraft:dirt>], [<item:minecraft:string>,<item:minecraft:emerald>] );

//level 1 means the only the 3x3 grid of standing stones is needed
Ritual.addCraftingRitual("test1", <item:minecraft:netherrack>, 1,
		 255,255,0,
 [<item:minecraft:grass>,<item:minecraft:grass>], [<item:minecraft:lapis_lazuli>,<item:minecraft:string>,<item:minecraft:emerald> ] );

//level 2 is the biggest ritual with the Attuned stones
Ritual.addCraftingRitual("test2", <item:minecraft:ghast_tear>, 2,
		 255,0,0,
 [<item:minecraft:feather>,<item:minecraft:egg>], [<item:minecraft:diamond>,<item:minecraft:string>,<item:minecraft:emerald> ] );


//Modify existing rituals

Ritual.setRitualIngredients(<resource:rootsclassic:living_sword_crafting>, [<item:minecraft:dirt>,<item:minecraft:stone>]);
Ritual.setRitualIncense(<resource:rootsclassic:living_sword_crafting>, [<item:minecraft:grass>,<item:minecraft:sand>]);

// other examples
Ritual.setPrimaryColor(<resource:crafttweaker:test2>, 255,0,0); 
Ritual.setSecondaryColor(<resource:rootsclassic:igniter_stone_crafting>, 255,0,100);

//change level for the standing stone requirements
Ritual.setLevel(<resource:rootsclassic:igniter_stone_crafting>, 0);

```

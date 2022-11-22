# Ritual

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.rootsclassic.Ritual;
```


## Static Methods

:::group{name=addCraftingRitual}



```zenscript
// Ritual.addCraftingRitual(uniqueName as string, output as IItemStack, level as int, r as double, g as double, b as double, incenses as IItemStack[], ingredients as IItemStack[])

Ritual.addCraftingRitual("devil_summoning", <item:minecraft:blaze_spawn_egg>, 1, 255, 59, 100, [<item:minecraft:fire_coral>, <item:minecraft:fire_coral>, <item:minecraft:fire_coral>, <item:minecraft:fire_coral>], [<item:minecraft:netherrack>, <item:minecraft:netherrack>, <item:minecraft:blaze_powder>]);
```

|  Parameter  |                     Type                     |                 Description                  |
|-------------|----------------------------------------------|----------------------------------------------|
| uniqueName  | string                                       | The unique name of the recipe                |
| output      | [IItemStack](/vanilla/api/item/IItemStack)   | The IItemStack to output                     |
| level       | int                                          | The level of the recipe                      |
| r           | double                                       | The red amount of colour (0-255 value)       |
| g           | double                                       | The green amount of colour (0-255 value)     |
| b           | double                                       | The blue amount of colour (0-255 value)      |
| incenses    | [IItemStack](/vanilla/api/item/IItemStack)[] | The incenses that can be used in this recipe |
| ingredients | [IItemStack](/vanilla/api/item/IItemStack)[] | The ingredients to use in this recipe        |


:::

:::group{name=setLevel}

Change the level of a recipe, thus affecting the standing stone requirements. <br />  <br />  0 requires none, only Braziers <br />  1 requires a 3x3 grid of Mundane Standing Stones <br />  2 requires the 3x3 grid of Mundane Standing Stones plus a rhombus of Attuned Standing Stones.

```zenscript
// Ritual.setLevel(name as ResourceLocation, level as int)

Ritual.setLevel(<resource:rootsclassic:igniter_stone_crafting>, 0);
```

| Parameter |                            Type                            |                       Description                       |
|-----------|------------------------------------------------------------|---------------------------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The name of the existing recipe to manipulate.          |
| level     | int                                                        | The new requirement level. Values within 0-2 inclusive. |


:::

:::group{name=setPrimaryColor}

Modifies the primary Colour of an existing recipe

```zenscript
// Ritual.setPrimaryColor(name as ResourceLocation, r as double, g as double, b as double)

Ritual.setPrimaryColor(<resource:crafttweaker:devil_summoning>, 230, 30, 70);
```

| Parameter |                            Type                            |                Description                 |
|-----------|------------------------------------------------------------|--------------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The name of the existing recipe            |
| r         | double                                                     | The new red colour of the recipe (0-255)   |
| g         | double                                                     | The new green colour of the recipe (0-255) |
| b         | double                                                     | The new blue colour of the recipe (0-255)  |


:::

:::group{name=setRitualIncense}

Modifies the required incenses for the provided recipe.

```zenscript
// Ritual.setRitualIncense(name as ResourceLocation, items as IItemStack[])

Ritual.setRitualIncense(<resource:rootsclassic:living_sword_crafting>, [<item:minecraft:grass>,<item:minecraft:sand>]);
```

| Parameter |                            Type                            |                  Description                  |
|-----------|------------------------------------------------------------|-----------------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The name of the existing recipe to manipulate |
| items     | [IItemStack](/vanilla/api/item/IItemStack)[]               | The new incenses to use.                      |


:::

:::group{name=setRitualIngredients}

Manipulates and changes the provided recipe with the new inputs. <br />  <br />  Names must be the name of a valid recipe. Roots adds the following: <br />   <br />  staff_crafting, sylvan_hood_crafting, sylvan_chest_crafting, sylvan_legs_crafting, sylvan_boots_crafting, wildwood_head_crafting, wildwood_chest_crafting, <br />  wildwood_legs_crafting, wildwood_boots_crafting, accelerator_stone_crafting, standing_stone, entangler_stone_crafting,grower_stone_crafting, healer_stone_crafting, igniter_stone_crafting, <br />  repulsor_stone_crafting, vacuum_stone_crafting, runic_focus_crafting, runic_focus_charging, living_pickaxe_crafting, living_axe_crafting, living_sword_crafting, living_hoe_crafting, <br />  living_shovel_crafting, cause_rain, banish_rain, mass_breeding, life_drain, imbuer, cow_summoning, pig_summoning, sheep_summoning, chicken_summoning, rabbit_summoning, zombie_summoning, <br />  skeleton_summoning, spider_summoning, cavespider_summoning, slime_summoning, creeper_summoning, enderman_summoning, sacrifice,flare, grow, engraved_crafting, time_shift <br />   <br />  Starting with `<resource:rootsclassic` (Example: `<resource:rootsclassic:staff_crafting>`)

```zenscript
// Ritual.setRitualIngredients(name as ResourceLocation, items as IItemStack[])

Ritual.setRitualIngredients(<resource:rootsclassic:accelerator_stone_crafting>, [<item:minecraft:diamond>, <item:minecraft:diamond_block>, <item:minecraft:redstone>]);
```

| Parameter |                            Type                            |                     Description                     |
|-----------|------------------------------------------------------------|-----------------------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The unique resourcelocation of the recipe to target |
| items     | [IItemStack](/vanilla/api/item/IItemStack)[]               | The new inputs to make the recipe use.              |


:::

:::group{name=setSecondaryColor}

Modifies the secondary Colour of a recipe

```zenscript
// Ritual.setSecondaryColor(name as ResourceLocation, r as double, g as double, b as double)

Ritual.setSecondaryColor(<resource:rootsclassic:igniter_stone_crafting>, 255, 0, 0);
```

| Parameter |                            Type                            |             Description              |
|-----------|------------------------------------------------------------|--------------------------------------|
| name      | [ResourceLocation](/vanilla/api/resource/ResourceLocation) | The name of the recipe to manipulate |
| r         | double                                                     | The new red colour value (0-255)     |
| g         | double                                                     | The new green colour value (0-255)   |
| b         | double                                                     | The new blue colour value (0-255)    |


:::


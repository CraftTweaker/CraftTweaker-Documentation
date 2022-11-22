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

Manipulates and changes the provided recipe with the new inputs. <br />  <br />  Names must be the name of a valid recipe. Roots adds the following:  <ul>   <li> staff_crafting, </li> <li> sylvan_hood_crafting, </li> <li> sylvan_chest_crafting, </li> <li> sylvan_legs_crafting, </li> <li> sylvan_boots_crafting, </li> <li> wildwood_head_crafting, </li> <li> wildwood_chest_crafting, </li> <li>wildwood_legs_crafting, </li> <li> wildwood_boots_crafting, </li> <li> accelerator_stone_crafting, </li> <li> standing_stone, </li> <li> entangler_stone_crafting, </li> <li>grower_stone_crafting, </li> <li> healer_stone_crafting, </li> <li> igniter_stone_crafting, </li> <li> repulsor_stone_crafting, </li> <li> vacuum_stone_crafting, </li> <li> runic_focus_crafting, </li> <li> runic_focus_charging, </li> <li> living_pickaxe_crafting, </li> <li> living_axe_crafting, </li> <li> living_sword_crafting, </li> <li> living_hoe_crafting, </li> <li> living_shovel_crafting, </li> <li> cause_rain, </li> <li> banish_rain, </li> <li> mass_breeding, </li> <li> life_drain, </li> <li> imbuer, </li> <li> cow_summoning, </li> <li> pig_summoning, </li> <li> sheep_summoning, </li> <li> chicken_summoning, </li> <li> rabbit_summoning, </li> <li> zombie_summoning, </li> <li> skeleton_summoning, </li> <li> spider_summoning, </li> <li> cavespider_summoning, </li> <li> slime_summoning, </li> <li> creeper_summoning, </li> <li> enderman_summoning, </li> <li> sacrifice, </li> <li>flare, </li> <li> grow, </li> <li> engraved_crafting, </li> <li> time_shift </li>   </ul>   Starting with `<resource:rootsclassic` (Example: `<resource:rootsclassic:staff_crafting>`)

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


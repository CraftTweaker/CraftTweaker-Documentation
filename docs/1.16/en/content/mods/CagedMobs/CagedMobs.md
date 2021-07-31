::requiredMod[Caged Mobs]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/caged-mobs}

# [CagedMobs](https://www.curseforge.com/minecraft/mc-mods/caged-mobs)

## Mod description

This mod adds the Mob Cages in which you can now imprison all entities and kill them over and over, while collecting their drops! Sounds like fun, right?
It was inspired by Bonsai Trees 2 mod and the Botany Pots mod.

With the use of the amazing CraftTweaker without much work you can add new recipes or modify already existing ones.

## Entities


### Importing the manager:

First of all, you will need an entity manager. You can import it into your script with the lines below:

```zenscript
    import mods.cagedmobs.EntitiesManager;
    val entities = <recipetype:cagedmobs:mob_data>;
```

### Adding new entities:

If you want to create a new entity recipe, you can use the `create` method. The method will return an `Entity value`, which you can later use to further modify it. (The id string cannot contain any capital letters or spaces)

```zenscript
    //Simple entity with just one environment:  create(id, entityType, growTicks, ifRequiresWaterloggedCage, tier, environment).
    //The id string cannot contain any capital letters or spaces.
    val better_pig = entities.create("exampledatapack:betterpig",<entitytype:minecraft:pig>, 1200, false, 1, "farm");

    // Simple entity with more environments:  create(id, entityType, growTicks, ifRequiresWaterloggedCage, tier, environments list)
    // The id string cannot contain any capital letters or spaces.
    val water_chicken = entities.create("exampledatapack:waterchicken",<entitytype:minecraft:chicken>, 1800, true, 1, ["farm","sand"]);
```

These two entities do not yet have any drops, you need to add them later.

### Modifying existing entities:

If you want to modify an entity you need the `Entity value`, you get it after you create a new entity, or instead you can just use `getEntity` method.

```zenscript
    val cow = entities.getEntity("cagedmobs:mobs/cow");
```

### Environments:

```zenscript
    // Remove an old environment: removeEnvironment(environmentString);
    cow.removeEnvironment("farm");
    // Remove all environments: clearEnvironments();
    cow.clearEnvironments();
    // Add a new environment: addEnvironment(environmentString);
    cow.addEnvironment("cave");
```

### Drops:

```zenscript
    // To remove specific drop: removeLoot(itemToRemove);
    cow.removeLoot(<item:minecraft:leather>);

    // To clear all existing drops: clearLoot();
    cow.clearLoot();

    // To add a new drop, you have several options:
    // addLoot(item, chance) - 40% chance for dropping 1 gold ingot.
    cow.addLoot(<item:minecraft:gold_ingot>, 0.4);

    // addLoot(item, chance, minDrop, maxDrop) - 20% chance for dropping from 1 to 3 pistons
    cow.addLoot(<item:minecraft:piston>, 0.2, 1, 3);

    // Using cooking upgrade:
    // addLoot(item, cooked_item, chance, minDrop, maxDrop) - 30% chance for dropping 1 porkchop (cooked porkchop when cooking upgrade is applied)
    cow.addLoot(<item:minecraft:porkchop>,<item:minecraft:cooked_porkchop>, 0.3, 1, 1);

    // Using lightning or/and arrow upgrades
    // addLoot(item, chance, minDrop, maxDrop, ifLightning, ifArrow) - 10% chance for dropping 1 creeper head, when lightning upgrade is applied
    cow.addLoot(<item:minecraft:creeper_head>, 0.1, 1, 1, true, false);

    // Using all upgrades + color
    // To disable cooking upgrade use <item:minecraft:air> instead of a normal item.
    // Color argument is used for mobs that use "Color" nbt tag, currently only sheep use it. Set it to -1 for other mobs.
    // addLoot(item, cooked_item, chance, minDrop, maxDrop, ifLightning, ifArrow, color) - 80% chance for dropping from 1 to 3 papers, without any upgrades
    cow.addLoot(<item:minecraft:paper>,<item:minecraft:air>, 0.8, 1, 3, false, false, -1);
```

### Growth ticks:

```zenscript
    // To change grow ticks: setGrowthTicks(numberOfTicks)
    cow.setGrowthTicks(1800);
```

### Entity Type:

```zenscript
    // To change the entity type: setEntityType(entityType)
    cow.setEntityType(<entitytype:minecraft:chicken>);
```

### Tier:

```zenscript
    // To change required tier (1,2 or 3)
    cow.setTier(2);
```

### Waterlogging requirement:

```zenscript
    // To change that cow requires a waterlogged cage
    cow.setIfRequiresWater(true);
```

## **Additional Loot**


CagedMobs also has a recipe type for adding a new drop to an existing entity. While it's not really useful with CraftTweaker, you can still create a new one or modify an old one if you want to.

### Importing the manager:

As previously mentioned, first you need to import the manager:

```zenscript
    import mods.cagedmobs.AdditionalLootsManager;
    val additionalLoots = <recipetype:cagedmobs:additional_loot_data>;
```

### Getting the additional loot value:

With it you can add a new additionalLoot recipe (it won't have any items yet, you need to add them later):

```zenscript
    // New additional loot:  create(id, entityType).
    // The id string cannot contain any capital letters.
    val leather = additionalLoots.create("exampledatapack:leatherfrompig",<entitytype:minecraft:pig>);
```

or you can get one of the already existing ones with the `getAdditionalLoot(id)` method:

```zenscript
    val rose = additionalLoots.getAdditionalLoot("cagedmobs:additional_loot/wither_rose");
```

### Modifying the additional loot:

When you have the `additionalLoot value` you can modify its drops and entity type in the same way as with the entity recipes (with functions: `addLoot()`, `clearLoot()`, `removeLoot()` and `setEntityType()`).

## Environments


Entities cannot live without environments. With CraftTweaker it's really simple to add them too.

### Importing the manager:

As always you need to import the manager:

```zenscript
    import mods.cagedmobs.EnvironmentsManager;
    val envs = <recipetype:cagedmobs:env_data>;
```

### Getting the environment value:

Then you can either create a new environment or modify an old one:

```zenscript
    // New environment with one tag:  create(id, inputItem, renderBlock, growthModifier, tags)
    //The id string cannot contain any capital letters or spaces.
    val forest = envs.create("exampledatapack:forest",<item:minecraft:grass_block>, <blockstate:minecraft:grass_block>, 1.0, ["forest"]);

    // New environment with multiple tags:
    //The id string cannot contain any capital letters or spaces.
    val home = envs.create("exampledatapack:home",<item:minecraft:oak_log>, <blockstate:minecraft:oak_planks>, 1.0, ["home","house"]);

    // Get an old environment:
    val farm = envs.getEnvironment("cagedmobs:envs/farm");
```

Both methods will give you an `Environment value`, which you can use to do further changes.

### Modifying the environment:

With your `environment value` you can use several methods:

### Categories:

```zenscript
// To remove just one category (tag):
home.removeCategory("home");
// To clear all categories (tags):
home.clearCategories();
// To add a new category (tag):
home.addCategory("building");
```

### Input item:

```zenscript
// To change the input item:
home.setInputItem(<item:minecraft:spruce_planks>);
```

### Display block:

```zenscript
// To change the displayed block:
home.setDisplay(<blockstate:minecraft:birch_planks>);
```

### Growth modifier:

```zenscript
// To change the growth modifier (1.5 equals 150% of normal speed)
home.setGrowthModifier(1.5);
```

::requiredMod[GameStages]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/game-stages}

# The StageHelper
StageHelper is a collection of optional helper functions that make simple tasks like granting stages much easier. While it can be very beneficial to use these helpers they are designed with simple use cases in mind and using them may limit your ability to fine tune. Fortunately all functionality made available through this helper can be replicated using the standard CraftTweaker features which should be used for very advanced use cases. 

To use the StageHelper you will need to import it. 
```zenscript
import mods.gamestages.StageHelper;
```

## Give Stage on Advancement
The following helpers will grant stages when a player earns an advancement that matches your specified predicate. You can optionally specify more than one stage to grant. You can also specify a hook that allows additional logic to be chained on to when the stage(s) are granted to the player. 

```zenscript
// Grants a stage when a player earns an advancement with a specific ID. In 
// this case the player must earn the "We Need to Go Deeper" advancement.
StageHelper.grantStageOnAdvancement("minecraft:story/enter_the_nether", "advancement_example_one");

// Grants a stage when a player earns one of many potential advancements. Only
// one is needed to grant the stages. In this example the player must earn
// either the "Ice Bucket Challenge" or "Diamonds!" advancement.
StageHelper.grantStageOnAdvancement(["minecraft:story/form_obsidian", "minecraft:story/mine_diamond"], "advancement_example_two");

// Grants a stage when a player earns an advancement that matches a custom 
// condition. In this case the player must earn any advancement with the owner
// ID "minecraft".
StageHelper.grantStageOnAdvancement((advancement) => advancement.namespace == "minecraft", "advancement_example_three");

// These helpers can also accept an optional hook as the second parameter. This
// hook will be ran when the conditions are met and the stage(s) are granted.
StageHelper.grantStageOnAdvancement("minecraft:story/enter_the_end", (player, advancement) => {

    player.sendMessage("You unlocked the stage advancement_example_four");
    player.give(<item:minecraft:diamond> * 10);
}, "advancement_example_four");

// All valid method for this can be seen below.
// StageHelper.grantStageOnAdvancement(String targetId, String... stagesToGrant);
// StageHelper.grantStageOnAdvancement(String targetId, BiConsumer<PlayerEntity, ResourceLocation> hook, String... stagesToGrant);
// StageHelper.grantStageOnAdvancement(String[] targetIds, String... stagesToGrant);
// StageHelper.grantStageOnAdvancement(String[] targetIds, BiConsumer<PlayerEntity, ResourceLocation> hook, String... stagesToGrant);
// StageHelper.grantStageOnAdvancement(Predicate<ResourceLocation> condition, String... stagesToGrant);
// StageHelper.grantStageOnAdvancement(Predicate<ResourceLocation> condition, BiConsumer<PlayerEntity, ResourceLocation> hook, String... stagesToGrant);
```

## Give Stage on Crafting
The following helpers will grant a stage when the player crafts an item that matches your specified predicate. The item must be crafted by an actual player in a crafting grid like the crafting table. You can optionally specify more than one stage to grant. You can also specify a hook that allows additional logic to be chained on when the stage(s) are granted to the player. 

```zenscript
// Grants a stage when a player crafts a specific item with any size, nbt, etc.
// In this case the player must craft sticks with any recipe.
StageHelper.grantStageWhenCrafting(<item:minecraft:stick>, "craft_example_one");

// Grants a stage when a player crafts a specific item and stack size.
// In this case the player must craft a recipe that outputs 9 gold nuggets.
StageHelper.grantStageWhenCrafting(<item:minecraft:gold_nugget> * 9, "craft_example_two");

// Grants a stage when a player crafts any item from an item tag.
// In this case the player must craft any wooden fence.
StageHelper.grantStageWhenCrafting(<tag:items:minecraft:wooden_fences>, "craft_example_three");

// Grants a stage when a player crafts an item with NBT data.
// In this case the player must craft a stick with the name "Magic Stick o' Wood".
StageHelper.grantStageWhenCrafting(<item:minecraft:stick>.withTag({display: {Name: "{\"text\":\"Magic Stick o' Wood\"}" as string}}), "craft_example_four");

// Grants a stage when a player crafts an item that meets custom criteria.
// In this case the player must craft any item with a modid of "minecraft".
StageHelper.grantStageWhenCrafting((output) => output.owner == "minecraft", "craft_example_five");

// Grants a stage when a player crafts an item. When the stage is granted 
// additional logic (a hook) will be ran. In this case we send a custom message
// to the player and then give them ten diamonds.
StageHelper.grantStageWhenCrafting(<item:minecraft:stick>, (player, output) => {
    
    player.sendMessage("You unlocked the craft_example_six stage!");
    player.give(<item:minecraft:diamond> * 10);
}, "craft_example_six");
``` 

## Give Stage on Dimension
The following helpers will grant a stage when the player enters a dimension that matches your specified predicate. You can optionally specify more than one stage to grant to the player. You can also specify a hook that allows additional logic to be chained on when the stage(s) are granted.

```zenscript
// Grants a stage to the player when they enter the specified dimension. More
// than one stage can be specified at the end. In this case we are granting 
// the stage when they enter the Nether.
StageHelper.grantStageOnDimension("minecraft:the_nether", "dimension_example_one");

// Grants a stage to the player when they enter one of several specified 
// dimensions. In this case we are granting the stage when they enter the
// Nether or the End dimension.
StageHelper.grantStageOnDimension(["minecraft:the_end", "minecraft:the_nether"], "dimension_example_two");

// Grants a stage to the player when they enter a dimension that matches the
// specified condition. In this case we grant the stage when they enter the
// overworld by leaving the nether. The parameter order is the player, the 
// ID of the dimension they are entering, and the dimension they are leaving.
StageHelper.grantStageOnDimension((player, to, from) => {
    return to.toString() == "minecraft:overworld" && from.toString() == "minecraft:the_nether";
}, "dimension_example_three");
```

## Give Stage on Join - Default Stages
The following helpers will grant a stage when a player joins the game. More than one stage can be granted by optionally defining them at the end. You can also optionally specify a condition for the stage to be given. You can also optionally specify a hook that allows additional logic to be chained on when the stage(s) are granted.

```zenscript
// Grants a stage to the player when they join the game. More than one stage
// can be specified at the end if you need to grant multiple stages.
StageHelper.grantStageOnJoin("join_example_one");

// Grants a stage to the player when they join the game if they match the 
// specified condition. In this case the stage is granted when the player
// is not in creative mode.
StageHelper.grantStageOnJoinWithCondition(player => !player.isCreative(), "join_example_two");

// Grants a stage to the player when they join the game. Also runs additional
// logic when the stages are granted. The hook will not be ran if they already
// have all of the stages being granted. In this case they are shown a chat
// message and given four emeralds.
StageHelper.grantStageOnJoinWithHook(player => {

    player.sendMessage("You were granted stage join_example_three.");
    player.give(<item:minecraft:emerald> * 4);
}, "join_example_three");

// Grants a stage to the player when they join the game if they match the 
// specified condition. Also runs additional logic when the stages are 
// granted. The hook will not be ran if the condition fails or the player
// already has every stage being granted. In this case they are given the
// stage when they join in creative mode. They will also be given some sticks
// and a message will be played in chat.
StageHelper.grantStageOnJoin(player => player.isCreative(), player => {

    player.give(<item:minecraft:stick> * 16);
}, "join_example_four");

// All valid method descriptors for these helpers can be found below.
// StageHelper.grantStageOnJoin(String... stages);
// StageHelper.grantStageOnJoinWithCondition(Predicate<PlayerEntity> condition, String... stages);
// StageHelper.grantStageOnJoinWithHook(Consumer<PlayerEntity> hook, String... stages);
// StageHelper.grantStageOnJoin(Predicate<PlayerEntity> condition, Consumer<PlayerEntity> hook, String... stages);
```

## Give Stage on Mob Kill
The following helpers will grant a stage when a player kills an entity that matches a predicate that you specify. You can optionally specify more than one stage to grant to the player. You can also specify a hook that allows additional logic to be chained on when the stage(s) are granted. 

```zenscript
// Grants a stage to a player when they kill a mob. In this case we grant the
// stage when a player kills kills a creeper.
StageHelper.grantStageOnKill(<entitytype:minecraft:creeper>, "kill_example_one");

// Grants a stage to a player when they kill a mob in a tag. In this case we 
// grant the stage whenever they kill any type of skeleton.
StageHelper.grantStageOnKill(<tag:entity_types:minecraft:raiders>, "kill_example_two");

// Grants a stage to a player when they kill a mob that matches an custom
// condition. In this case we check if the mob killed was added by Minecraft.
StageHelper.grantStageOnKill((player, target) => target.type.registryName.namespace == "minecraft", "kill_example_three");

// Each of these methods can support an optional hook as the second argument.
// This allows you to chain additional logic on when the stages are granted.
// In this case we are sending the player a chat message and give them a stick
// that is renamed to Magic Wand.
StageHelper.grantStageOnKill(<entitytype:minecraft:witch>, (player, target) => {

    player.sendMessage("You killed a witch!");
    player.give(<item:minecraft:stick>.withDisplayName("Magic Wand"));
}, "kill_example_four");

// The following methods are available.
// StageHelper.grantStageOnKill(MCEntittyType type, String... stages);
// StageHelper.grantStageOnKill(MCEntittyType type, BiConsumer<PlayerEntity, LivingEntity> hook, String... stages);
// StageHelper.grantStageOnKill(MCTag<MCEntityType> tag, String... stages);
// StageHelper.grantStageOnKill(MCTag<MCEntityType> tag, BiConsumer<PlayerEntity, LivingEntity> hook, String... stages);
// StageHelper.grantStageOnKill(BiPredicate<PlayerEntity, LivingEntity> condition, String... stages);
// StageHelper.grantStageOnKill(BiPredicate<PlayerEntity, LivingEntity> condition, BiConsumer<PlayerEntity, LivingEntity> hook, String... stages);
```

## Give Stage on EXP Level Change
The following helpers will grant a stage when the player's EXP level changes to a value that matches your specified predicate. You can optionally specify more than one stage to grant. You can also specify a hook that allows additional logic to be chained on when the stage(s) are granted. The hook is not run if the player already has all of the stages granted.

```zenscript
// Grants a stage when a player reaches a specific EXP level. In this case they
// get the stage when they reach level 4.
StageHelper.grantStageOnExactLevel(4, "level_example_one");

// Grants a stage when a player reaches an EXP level greater than or equal to 
// a specified level. In this case they must reach level 2 or higher.
StageHelper.grantStageOnLevel(2, "level_example_two");

// Grants a stage when a player reaches an EXP level that matches a custom 
// condition. In this case we grant the stage if the EXP level is even.
StageHelper.grantStageOnLevel(level => level % 2 == 0, "level_example_three");

// Each of these helpers can specify an optional hook which allows you to 
// chain additional logic when the stage is granted. This hook will give you
// the player and their current exp level. In this case we give the player a
// chat message and some diamonds. Hooks are only run if the player does not
// have all of the stages being granted already.
StageHelper.grantStageOnLevel(level => true, (player, level) => {
    
    player.sendMessage("You unlocked the level_example_four stage!");
    player.give(<item:minecraft:diamond> * 10);
}, "level_example_four");

// All valid method descriptors for these helpers can be found below.
// StageHelper.grantStageOnExactLevel(int level, String... stages);
// StageHelper.grantStageOnExactLevel(int level, BiConsumer<PlayerEntity, int> hook, String... stages);
// StageHelper.grantStageOnLevel(int level, String... stages);
// StageHelper.grantStageOnLevel(int level, BiConsumer<PlayerEntity, int> hook, String... stages);
// StageHelper.grantStageOnLevel(Predicate<int> condition, String... stages);
// StageHelper.grantStageOnLevel(Predicate<int> condition, BiConsumer<PlayerEntity, int> hook, String... stages);
```
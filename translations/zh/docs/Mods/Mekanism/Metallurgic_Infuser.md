# Metallurgic Infuser

## Infusion Type String

Both addition and removal of recipes require an "infusion type" string. Default examples from Mekanism are:

| Infuse Type | Added by |
| ----------- | -------- |
| "CARBON"    | Mekanism |
| "TIN"       | Mekanism |
| "DIAMOND"   | Mekanism |
| "REDSTONE"  | Mekanism |
| "FUNGI"     | Mekanism |
| "BIO"       | Mekanism |
| "OBSIDIAN"  | Mekanism |

If any other mod registers a new infusion type, that type can be used in CraftTweaker as well as long as the registered type's name is specified exactly. NOTE: It is *not* possible to define **new** infusion *types* with CraftTweaker

## Addition

```java
mods.mekanism.infuser.addRecipe(String infusionType, int infusionConsumed, IItemStack inputStack, IItemStack outputStack)

mods.mekanism.infuser.addRecipe("OBSIDIAN", 20, <minecraft:coal_block>, <minecraft:obsidian>);
mods.mekanism.infuser.addRecipe("DIAMOND", 80, <minecraft:glowstone>, <minecraft:nether_star>);
```

## Removal

```java
mods.mekanism.infuser.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional String infusionType)

mods.mekanism.infuser.removeRecipe(<mekanism:enrichedalloy>, <minecraft:iron_ingot>, "REDSTONE");
mods.mekanism.infuser.removeRecipe(<minecraft:mycelium>);
```

Specifying an input parameter will only remove the specific recipe that uses said input. Omitting the input parameter will remove all recipes that produce the specified output.
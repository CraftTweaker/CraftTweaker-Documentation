# Game

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.game.Game;
```


## Methoden

:::group{name=getBlockStates}

Return Type: Collection&lt;[BlockState](/vanilla/api/block/BlockState)&gt;

```zenscript
// Game.getBlockStates() as Collection<BlockState>

myGame.getBlockStates();
```

:::

:::group{name=getBlocks}

Return Type: Collection&lt;[Block](/vanilla/api/block/Block)&gt;

```zenscript
// Game.getBlocks() as Collection<Block>

myGame.getBlocks();
```

:::

:::group{name=getEnchantments}

Return Type: Collection&lt;[Enchantment](/vanilla/api/item/enchantment/Enchantment)&gt;

```zenscript
// Game.getEnchantments() as Collection<Enchantment>

myGame.getEnchantments();
```

:::

:::group{name=getEntityTypes}

Return Type: Collection&lt;[EntityType](/vanilla/api/entity/EntityType)&gt;

```zenscript
// Game.getEntityTypes() as Collection<EntityType>

myGame.getEntityTypes();
```

:::

:::group{name=getFluids}

Return Type: Collection&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt;

```zenscript
// Game.getFluids() as Collection<Fluid>

myGame.getFluids();
```

:::

:::group{name=getItemStacks}

Return Type: Collection&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// Game.getItemStacks() as Collection<IItemStack>

myGame.getItemStacks();
```

:::

:::group{name=getMobEffects}

Return Type: Collection&lt;[MobEffect](/vanilla/api/entity/effect/MobEffect)&gt;

```zenscript
// Game.getMobEffects() as Collection<MobEffect>

myGame.getMobEffects();
```

:::

:::group{name=getPotions}

Return Type: Collection&lt;[Potion](/vanilla/api/item/alchemy/Potion)&gt;

```zenscript
// Game.getPotions() as Collection<Potion>

myGame.getPotions();
```

:::

:::group{name=getProfessions}

Return Type: Collection&lt;[VillagerProfession](/vanilla/api/villager/VillagerProfession)&gt;

```zenscript
// Game.getProfessions() as Collection<VillagerProfession>

myGame.getProfessions();
```

:::

:::group{name=getRecipeTypes}

Return Type: Collection&lt;[IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&gt;

```zenscript
// Game.getRecipeTypes() as Collection<IRecipeManager>

myGame.getRecipeTypes();
```

:::

:::group{name=localize}



Returns: a localized String  
Return Type: string

```zenscript
// Game.localize(translationKey as string) as string

myGame.localize("gui.up");
```

| Parameter      | Type   |
| -------------- | ------ |
| translationKey | string |


:::


## Properties

| Name                | Type                                                                                         | Has Getter | Has Setter |
| ------------------- | -------------------------------------------------------------------------------------------- | ---------- | ---------- |
| blockStates         | Collection&lt;[BlockState](/vanilla/api/block/BlockState)&gt;                    | true       | false      |
| blocks              | Collection&lt;[Block](/vanilla/api/block/Block)&gt;                              | true       | false      |
| effects             | Collection&lt;[MobEffect](/vanilla/api/entity/effect/MobEffect)&gt;              | true       | false      |
| enchantments        | Collection&lt;[Enchantment](/vanilla/api/item/enchantment/Enchantment)&gt;       | true       | false      |
| entityTypes         | Collection&lt;[EntityType](/vanilla/api/entity/EntityType)&gt;                   | true       | false      |
| fluids              | Collection&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt;                              | true       | false      |
| items               | Collection&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;                     | true       | false      |
| potions             | Collection&lt;[Potion](/vanilla/api/item/alchemy/Potion)&gt;                     | true       | false      |
| recipeTypes         | Collection&lt;[IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&gt;   | true       | false      |
| villagerProfessions | Collection&lt;[VillagerProfession](/vanilla/api/villager/VillagerProfession)&gt; | true       | false      |


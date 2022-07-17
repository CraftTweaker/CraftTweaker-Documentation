# Mod

Represents a mod in the game.

 You can get a mod by using `loadedMods.botania` or `loadedMods["botania"]`

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mod.Mod;
```


## Methods

:::group{name=displayName}

Gets the display name of this mod.

Returns: The display name of this mod.  
Return Type: string

```zenscript
// Mod.displayName() as string

loadedMods.botania.displayName();
```

:::

:::group{name=getAttributes}

Gets the attributes that are registered under this mod's ID.

Returns: A list of attributes that were registered under this mod's ID.  
Return Type: Collection&lt;[Attribute](/vanilla/api/entity/attribute/Attribute)&gt;

```zenscript
// Mod.getAttributes() as Collection<Attribute>

loadedMods.botania.getAttributes();
```

:::

:::group{name=getBlocks}

Gets the blocks that are registered under this mod's ID.

Returns: A list of blocks that were registered under this mod's ID.  
Return Type: Collection&lt;[Block](/vanilla/api/block/Block)&gt;

```zenscript
// Mod.getBlocks() as Collection<Block>

loadedMods.botania.getBlocks();
```

:::

:::group{name=getEnchantments}

Gets the enchantments that are registered under this mod's ID.

Returns: A list of enchantments that were registered under this mod's ID.  
Return Type: Collection&lt;[Enchantment](/vanilla/api/item/enchantment/Enchantment)&gt;

```zenscript
// Mod.getEnchantments() as Collection<Enchantment>

loadedMods.botania.getEnchantments();
```

:::

:::group{name=getFluids}

Gets the fluids that are registered under this mod's ID.

Returns: A list of fluids that were registered under this mod's ID.  
Return Type: Collection&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt;

```zenscript
// Mod.getFluids() as Collection<Fluid>

loadedMods.botania.getFluids();
```

:::

:::group{name=getItemStacks}

Gets the ItemStacks that are registered under this mod's ID.

Returns: A list of ItemStacks that were registered under this mod's ID.  
Return Type: Collection&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// Mod.getItemStacks() as Collection<IItemStack>

loadedMods.botania.getItemStacks();
```

:::

:::group{name=getItems}

Gets the items that are registered under this mod's ID.

Returns: A list of items that were registered under this mod's ID.  
Return Type: Collection&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt;

```zenscript
// Mod.getItems() as Collection<ItemDefinition>

loadedMods.botania.getItems();
```

:::

:::group{name=getMobEffects}

Gets the mob effects that are registered under this mod's ID.

Returns: A list of mob effects that were registered under this mod's ID.  
Return Type: Collection&lt;[MobEffect](/vanilla/api/entity/effect/MobEffect)&gt;

```zenscript
// Mod.getMobEffects() as Collection<MobEffect>

loadedMods.botania.getMobEffects();
```

:::

:::group{name=getPotions}

Gets the potions that are registered under this mod's ID.

Returns: A list of potions that were registered under this mod's ID.  
Return Type: Collection&lt;[Potion](/vanilla/api/item/alchemy/Potion)&gt;

```zenscript
// Mod.getPotions() as Collection<Potion>

loadedMods.botania.getPotions();
```

:::

:::group{name=getSoundEvents}

Gets the sound events that are registered under this mod's ID.

Returns: A list of sound events that were registered under this mod's ID.  
Return Type: Collection&lt;[SoundEvent](/vanilla/api/sound/SoundEvent)&gt;

```zenscript
// Mod.getSoundEvents() as Collection<SoundEvent>

loadedMods.botania.getSoundEvents();
```

:::

:::group{name=getVillagerProfessions}

Gets the villager professions that are registered under this mod's ID.

Returns: A list of villager professions that were registered under this mod's ID.  
Return Type: Collection&lt;[VillagerProfession](/vanilla/api/villager/VillagerProfession)&gt;

```zenscript
// Mod.getVillagerProfessions() as Collection<VillagerProfession>

loadedMods.botania.getVillagerProfessions();
```

:::

:::group{name=id}

Gets the id (namespace) of this mod.

Returns: The id (namespace) of this mod.  
Return Type: string

```zenscript
// Mod.id() as string

loadedMods.botania.id();
```

:::

:::group{name=version}

Gets the version of this mod.

Returns: The version of this mod.  
Return Type: string

```zenscript
// Mod.version() as string

loadedMods.botania.version();
```

:::


## Properties

|        Name         |                                       Type                                       | Has Getter | Has Setter |                              Description                               |
|---------------------|----------------------------------------------------------------------------------|------------|------------|------------------------------------------------------------------------|
| attributes          | Collection&lt;[Attribute](/vanilla/api/entity/attribute/Attribute)&gt;           | true       | false      | Gets the attributes that are registered under this mod's ID.           |
| blocks              | Collection&lt;[Block](/vanilla/api/block/Block)&gt;                              | true       | false      | Gets the blocks that are registered under this mod's ID.               |
| displayName         | string                                                                           | true       | false      | Gets the display name of this mod.                                     |
| enchantments        | Collection&lt;[Enchantment](/vanilla/api/item/enchantment/Enchantment)&gt;       | true       | false      | Gets the enchantments that are registered under this mod's ID.         |
| fluids              | Collection&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt;                              | true       | false      | Gets the fluids that are registered under this mod's ID.               |
| id                  | string                                                                           | true       | false      | Gets the id (namespace) of this mod.                                   |
| itemStacks          | Collection&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;                     | true       | false      | Gets the ItemStacks that are registered under this mod's ID.           |
| items               | Collection&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt;             | true       | false      | Gets the items that are registered under this mod's ID.                |
| mobEffects          | Collection&lt;[MobEffect](/vanilla/api/entity/effect/MobEffect)&gt;              | true       | false      | Gets the mob effects that are registered under this mod's ID.          |
| potions             | Collection&lt;[Potion](/vanilla/api/item/alchemy/Potion)&gt;                     | true       | false      | Gets the potions that are registered under this mod's ID.              |
| soundEvents         | Collection&lt;[SoundEvent](/vanilla/api/sound/SoundEvent)&gt;                    | true       | false      | Gets the sound events that are registered under this mod's ID.         |
| version             | string                                                                           | true       | false      | Gets the version of this mod.                                          |
| villagerProfessions | Collection&lt;[VillagerProfession](/vanilla/api/villager/VillagerProfession)&gt; | true       | false      | Gets the villager professions that are registered under this mod's ID. |


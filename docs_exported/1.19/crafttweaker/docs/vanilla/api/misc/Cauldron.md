# Cauldron

Lets you add new Cauldron interactions.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.misc.Cauldron;
```


## Methods

:::group{name=addEmptyInteraction}

Adds an interaction that will fire when an empty Cauldron is interacted with the given item.

```zenscript
// Cauldron.addEmptyInteraction(item as ItemDefinition, interaction as CTCauldronInteraction)

cauldron.addEmptyInteraction(<item:minecraft:dirt>, (blockState, level, pos, player, hand, stack) => {

 if !level.isClientSide {
 player.give(<item:minecraft:diamond>);
 }
 return crafttweaker.api.world.InteractionResult.sidedSuccess(level.isClientSide);
 });
```

|  Parameter  |                               Type                               |                       Description                       |
|-------------|------------------------------------------------------------------|---------------------------------------------------------|
| item        | [ItemDefinition](/vanilla/api/item/ItemDefinition)               | The item to interact with.                              |
| interaction | [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction) | What happens when the item interacts with the cauldron. |


:::

:::group{name=addInteraction}

Adds an interaction that will fire when the provided cauldron block is interacted with the given item.

 This method is mainly provided to add support for non-vanilla cauldrons, thus the provided block needs to be a [AbstractCauldronBlock](/vanilla/api/block/type/cauldron/AbstractCauldronBlock).

```zenscript
// Cauldron.addInteraction(cauldronBlock as Block, item as ItemDefinition, interaction as CTCauldronInteraction)

cauldron.addInteraction(<block:minecraft:lava_cauldron>, <item:minecraft:dirt>, (blockState, level, pos, player, hand, stack) => {

 if !level.isClientSide {
 player.give(<item:minecraft:diamond>);
 }
 return crafttweaker.api.world.InteractionResult.sidedSuccess(level.isClientSide);
 });
```

|   Parameter   |                               Type                               |                       Description                       |
|---------------|------------------------------------------------------------------|---------------------------------------------------------|
| cauldronBlock | [Block](/vanilla/api/block/Block)                                | The cauldron block to add an interaction to.            |
| item          | [ItemDefinition](/vanilla/api/item/ItemDefinition)               | The item to interact with.                              |
| interaction   | [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction) | What happens when the item interacts with the cauldron. |


:::

:::group{name=addLavaInteraction}

Adds an interaction that will fire when a Cauldron with lava inside is interacted with the given item.

```zenscript
// Cauldron.addLavaInteraction(item as ItemDefinition, interaction as CTCauldronInteraction)

cauldron.addLavaInteraction(<item:minecraft:dirt>, (blockState, level, pos, player, hand, stack) => {

 if !level.isClientSide {
 player.give(<item:minecraft:diamond>);
 }
 return crafttweaker.api.world.InteractionResult.sidedSuccess(level.isClientSide);
 });
```

|  Parameter  |                               Type                               |                       Description                       |
|-------------|------------------------------------------------------------------|---------------------------------------------------------|
| item        | [ItemDefinition](/vanilla/api/item/ItemDefinition)               | The item to interact with.                              |
| interaction | [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction) | What happens when the item interacts with the cauldron. |


:::

:::group{name=addPowderSnowInteraction}

Adds an interaction that will fire when a Cauldron with powdered snow inside is interacted with the given item.

```zenscript
// Cauldron.addPowderSnowInteraction(item as ItemDefinition, interaction as CTCauldronInteraction)

cauldron.addPowderSnowInteraction(<item:minecraft:dirt>, (blockState, level, pos, player, hand, stack) => {

 if !level.isClientSide {
 player.give(<item:minecraft:diamond>);
 }
 return crafttweaker.api.world.InteractionResult.sidedSuccess(level.isClientSide);
 });
```

|  Parameter  |                               Type                               |                       Description                       |
|-------------|------------------------------------------------------------------|---------------------------------------------------------|
| item        | [ItemDefinition](/vanilla/api/item/ItemDefinition)               | The item to interact with.                              |
| interaction | [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction) | What happens when the item interacts with the cauldron. |


:::

:::group{name=addWaterInteraction}

Adds an interaction that will fire when a Cauldron with water inside is interacted with the given item.

```zenscript
// Cauldron.addWaterInteraction(item as ItemDefinition, interaction as CTCauldronInteraction)

cauldron.addWaterInteraction(<item:minecraft:dirt>, (blockState, level, pos, player, hand, stack) => {

 if !level.isClientSide {
 player.give(<item:minecraft:diamond>);
 }
 return crafttweaker.api.world.InteractionResult.sidedSuccess(level.isClientSide);
 });
```

|  Parameter  |                               Type                               |                       Description                       |
|-------------|------------------------------------------------------------------|---------------------------------------------------------|
| item        | [ItemDefinition](/vanilla/api/item/ItemDefinition)               | The item to interact with.                              |
| interaction | [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction) | What happens when the item interacts with the cauldron. |


:::

:::group{name=getFillLavaInteraction}

Gets an interaction that fills a Cauldron with lava.

Returns: An interaction that fills a Cauldron with lava.  
Return Type: [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction)

```zenscript
// Cauldron.getFillLavaInteraction() as CTCauldronInteraction

cauldron.getFillLavaInteraction();
```

:::

:::group{name=getFillPowderSnowInteraction}

Gets an interaction that fills a Cauldron with lava.

Returns: An interaction that fills a Cauldron with lava.  
Return Type: [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction)

```zenscript
// Cauldron.getFillPowderSnowInteraction() as CTCauldronInteraction

cauldron.getFillPowderSnowInteraction();
```

:::

:::group{name=getFillWaterInteraction}

Gets an interaction that fills a cauldron with water.

Returns: An interaction that fills a cauldron with water.  
Return Type: [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction)

```zenscript
// Cauldron.getFillWaterInteraction() as CTCauldronInteraction

cauldron.getFillWaterInteraction();
```

:::

:::group{name=removeEmptyInteraction}

Removes the interaction for the given item from an empty Cauldron.

```zenscript
Cauldron.removeEmptyInteraction(item as ItemDefinition)
```

| Parameter |                        Type                        |               Description               |
|-----------|----------------------------------------------------|-----------------------------------------|
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The item to remove the interaction for. |


:::

:::group{name=removeInteraction}

Removes the interaction that will fire when the provided cauldron block is interacted with the given item.

 This method is mainly provided to add support for non-vanilla cauldrons, thus the provided block needs to be a [AbstractCauldronBlock](/vanilla/api/block/type/cauldron/AbstractCauldronBlock).

```zenscript
// Cauldron.removeInteraction(cauldronBlock as Block, item as ItemDefinition)

cauldron.removeInteraction(<block:minecraft:lava_cauldron>, <item:minecraft:dirt>);
```

|   Parameter   |                        Type                        |                 Description                  |
|---------------|----------------------------------------------------|----------------------------------------------|
| cauldronBlock | [Block](/vanilla/api/block/Block)                  | The cauldron block to add an interaction to. |
| item          | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The item to interact with.                   |


:::

:::group{name=removeLavaInteraction}

Removes the interaction for the given item from a lava filled Cauldron.

```zenscript
Cauldron.removeLavaInteraction(item as ItemDefinition)
```

| Parameter |                        Type                        |               Description               |
|-----------|----------------------------------------------------|-----------------------------------------|
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The item to remove the interaction for. |


:::

:::group{name=removePowderSnowInteraction}

Removes the interaction for the given item from a powdered snow filled Cauldron.

```zenscript
Cauldron.removePowderSnowInteraction(item as ItemDefinition)
```

| Parameter |                        Type                        |               Description               |
|-----------|----------------------------------------------------|-----------------------------------------|
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The item to remove the interaction for. |


:::

:::group{name=removeWaterInteraction}

Removes the interaction for the given item from a water filled Cauldron.

```zenscript
Cauldron.removeWaterInteraction(item as ItemDefinition)
```

| Parameter |                        Type                        |               Description               |
|-----------|----------------------------------------------------|-----------------------------------------|
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | The item to remove the interaction for. |


:::


## Properties

|           Name            |                               Type                               | Has Getter | Has Setter |                      Description                      |
|---------------------------|------------------------------------------------------------------|------------|------------|-------------------------------------------------------|
| fillLavaInteraction       | [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction) | true       | false      | Gets an interaction that fills a Cauldron with lava.  |
| fillPowderSnowInteraction | [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction) | true       | false      | Gets an interaction that fills a Cauldron with lava.  |
| fillWaterInteraction      | [CTCauldronInteraction](/vanilla/api/misc/CTCauldronInteraction) | true       | false      | Gets an interaction that fills a cauldron with water. |


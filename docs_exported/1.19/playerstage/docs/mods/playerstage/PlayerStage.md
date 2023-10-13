# PlayerStage

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.playerStage.PlayerStage;
```


## Static Methods

:::group{name=addArmor}

If the player wears armor, it will fall out

```zenscript
PlayerStage.addArmor(stage as string, itemStack as IItemStack)
```

| Parameter |                    Type                    |                Description                 |
|-----------|--------------------------------------------|--------------------------------------------|
| stage     | string                                     | The blocking stage                         |
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) | The Item to which the lock will be applied |


:::

:::group{name=addArmor}

Will not allow the player to put on armor, with several functions.

```zenscript
PlayerStage.addArmor(stage as string, itemStack as IItemStack, isDestroy as boolean)
```

| Parameter |                    Type                    |                    Description                     |
|-----------|--------------------------------------------|----------------------------------------------------|
| stage     | string                                     | The blocking stage                                 |
| itemStack | [IItemStack](/vanilla/api/item/IItemStack) | The Item to which the lock will be applied         |
| isDestroy | boolean                                    | If the player wears armor, it will gradually break |


:::

:::group{name=addBlock}

Won't let you break the block until the player has a stage

```zenscript
PlayerStage.addBlock(stage as string, block as Block)
```

| Parameter |               Type                |                 Description                 |
|-----------|-----------------------------------|---------------------------------------------|
| stage     | string                            | The blocking stage                          |
| block     | [Block](/vanilla/api/block/Block) | The block to which the lock will be applied |


:::

:::group{name=addBlock}

Won't let you break the block until the player has a stage

```zenscript
PlayerStage.addBlock(stage as string, block as BlockState)
```

| Parameter |                    Type                     |                 Description                 |
|-----------|---------------------------------------------|---------------------------------------------|
| stage     | string                                      | The blocking stage                          |
| block     | [BlockState](/vanilla/api/block/BlockState) | The block to which the lock will be applied |


:::

:::group{name=addBlock}

Won't let you break the block until the player has a stage

```zenscript
PlayerStage.addBlock(stage as string, block as Block, explosion as boolean)
```

| Parameter |               Type                |                 Description                 |
|-----------|-----------------------------------|---------------------------------------------|
| stage     | string                            | The blocking stage                          |
| block     | [Block](/vanilla/api/block/Block) | The block to which the lock will be applied |
| explosion | boolean                           |                                             |


:::

:::group{name=addBlock}

```zenscript
PlayerStage.addBlock(stage as string, block as BlockState, explosion as boolean)
```

| Parameter |                    Type                     |
|-----------|---------------------------------------------|
| stage     | string                                      |
| block     | [BlockState](/vanilla/api/block/BlockState) |
| explosion | boolean                                     |


:::

:::group{name=addEffect}

Will not allow the player to get some effect until there is a stage. The effect will simply disappear.

```zenscript
PlayerStage.addEffect(stage as string, effectInstance as MobEffectInstance)
```

|   Parameter    |                               Type                                |                 Description                  |
|----------------|-------------------------------------------------------------------|----------------------------------------------|
| stage          | string                                                            | The blocking stage                           |
| effectInstance | [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance) | The effect to which the lock will be applied |


:::

:::group{name=addEnchant}

Won't let you enchant an item for some enchantment until the player has a stage.

```zenscript
PlayerStage.addEnchant(stage as string, enchantment as Enchantment)
```

|  Parameter  |                           Type                           |           Description            |
|-------------|----------------------------------------------------------|----------------------------------|
| stage       | string                                                   | The blocking stage               |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | Enchantment that will be blocked |


:::

:::group{name=addEnchant}

Won't let you enchant an item for some enchantment until the player has a stage.

```zenscript
PlayerStage.addEnchant(stage as string, enchantment as Enchantment, isAnvil as boolean)
```

|  Parameter  |                           Type                           |                                                                       Description                                                                        |
|-------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| stage       | string                                                   | The blocking stage                                                                                                                                       |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | Enchantment that will be blocked                                                                                                                         |
| isAnvil     | boolean                                                  | The parameter that is responsible for the fact that past the restrictions for the enchantment table. Enchantment cannot be applied by a book on an anvil |


:::

:::group{name=addEnchant}

Won't let you enchant an item for some enchantment until the player has a stage.

```zenscript
PlayerStage.addEnchant(stage as string, enchantment as Enchantment, replaceEnchant as Enchantment)
```

|   Parameter    |                           Type                           |                             Description                             |
|----------------|----------------------------------------------------------|---------------------------------------------------------------------|
| stage          | string                                                   | The blocking stage                                                  |
| enchantment    | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | Enchantment that will be blocked                                    |
| replaceEnchant | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment that the blocked enchantment will be replaced with. |


:::

:::group{name=addEnchant}

Won't let you enchant an item for some enchantment until the player has a stage.

```zenscript
PlayerStage.addEnchant(stage as string, itemStack as IItemStack, enchantment as Enchantment)
```

|  Parameter  |                           Type                           |                      Description                       |
|-------------|----------------------------------------------------------|--------------------------------------------------------|
| stage       | string                                                   | The blocking stage                                     |
| itemStack   | [IItemStack](/vanilla/api/item/IItemStack)               | A specific item on which enchantment cannot be applied |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | Enchantment that will be blocked                       |


:::

:::group{name=addEnchant}

Won't let you enchant an item for some enchantment until the player has a stage.

```zenscript
PlayerStage.addEnchant(stage as string, enchantment as Enchantment, replaceEnchant as Enchantment, isAnvil as boolean)
```

|   Parameter    |                           Type                           |                                                                       Description                                                                        |
|----------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| stage          | string                                                   | The blocking stage                                                                                                                                       |
| enchantment    | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | Enchantment that will be blocked                                                                                                                         |
| replaceEnchant | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment that the blocked enchantment will be replaced with.                                                                                      |
| isAnvil        | boolean                                                  | The parameter that is responsible for the fact that past the restrictions for the enchantment table. Enchantment cannot be applied by a book on an anvil |


:::

:::group{name=addEnchant}

Won't let you enchant an item for some enchantment until the player has a stage.

```zenscript
PlayerStage.addEnchant(stage as string, itemStack as IItemStack, enchantment as Enchantment, isAnvil as boolean)
```

|  Parameter  |                           Type                           |                                                                       Description                                                                        |
|-------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| stage       | string                                                   | The blocking stage                                                                                                                                       |
| itemStack   | [IItemStack](/vanilla/api/item/IItemStack)               | A specific item on which enchantment cannot be applied                                                                                                   |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | Enchantment that will be blocked                                                                                                                         |
| isAnvil     | boolean                                                  | The parameter that is responsible for the fact that past the restrictions for the enchantment table. Enchantment cannot be applied by a book on an anvil |


:::

:::group{name=addEnchant}

Won't let you enchant an item for some enchantment until the player has a stage.

```zenscript
PlayerStage.addEnchant(stage as string, itemStack as IItemStack, enchantment as Enchantment, replaceEnchant as Enchantment)
```

|   Parameter    |                           Type                           |                             Description                             |
|----------------|----------------------------------------------------------|---------------------------------------------------------------------|
| stage          | string                                                   | The blocking stage                                                  |
| itemStack      | [IItemStack](/vanilla/api/item/IItemStack)               | A specific item on which enchantment cannot be applied              |
| enchantment    | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | Enchantment that will be blocked                                    |
| replaceEnchant | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment that the blocked enchantment will be replaced with. |


:::

:::group{name=addEnchant}

Won't let you enchant an item for some enchantment until the player has a stage.

```zenscript
PlayerStage.addEnchant(stage as string, itemStack as IItemStack, enchantment as Enchantment, replaceEnchant as Enchantment, isAnvil as boolean)
```

|   Parameter    |                           Type                           |                                                                       Description                                                                        |
|----------------|----------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| stage          | string                                                   | The blocking stage                                                                                                                                       |
| itemStack      | [IItemStack](/vanilla/api/item/IItemStack)               | A specific item on which enchantment cannot be applied                                                                                                   |
| enchantment    | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | Enchantment that will be blocked                                                                                                                         |
| replaceEnchant | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | The enchantment that the blocked enchantment will be replaced with.                                                                                      |
| isAnvil        | boolean                                                  | The parameter that is responsible for the fact that past the restrictions for the enchantment table. Enchantment cannot be applied by a book on an anvil |


:::

:::group{name=addInventory}

Allows you to prohibit the player from opening the inventory.

```zenscript
PlayerStage.addInventory(stage as string)
```

| Parameter |  Type  |    Description     |
|-----------|--------|--------------------|
| stage     | string | The blocking stage |


:::

:::group{name=addInventory}

Allows you to prohibit the player from opening the inventory.

```zenscript
PlayerStage.addInventory(stage as string, messages as stdlib.List<string>)
```

| Parameter |           Type            |                                   Description                                    |
|-----------|---------------------------|----------------------------------------------------------------------------------|
| stage     | string                    | The blocking stage                                                               |
| messages  | stdlib.List&lt;string&gt; | Messages that will be displayed to the player when trying to open the inventory. |


:::

:::group{name=addItem}

Allows you to add an item to a stage and then when you try to pick it up it will drop out

```zenscript
PlayerStage.addItem(stage as string, itemStack as ItemStack)
```

| Parameter |                   Type                   |      Description       |
|-----------|------------------------------------------|------------------------|
| stage     | string                                   | The blocking stage     |
| itemStack | [ItemStack](/vanilla/api/item/ItemStack) | The item to be blocked |


:::

:::group{name=addItem}

Allows you to add an item to a stage

```zenscript
PlayerStage.addItem(stage as string, itemStack as ItemStack, destroy as boolean)
```

| Parameter |                   Type                   |                                       Description                                        |
|-----------|------------------------------------------|------------------------------------------------------------------------------------------|
| stage     | string                                   | The blocking stage                                                                       |
| itemStack | [ItemStack](/vanilla/api/item/ItemStack) | The item to be blocked                                                                   |
| destroy   | boolean                                  | The place where the item falls out will gradually decrease its strength until it breaks. |


:::

:::group{name=addMerchant}

Will allow you to limit bidding with a resident until the stage is opened

```zenscript
PlayerStage.addMerchant(stage as string, input as IItemStack, output as IItemStack)
```

| Parameter |                    Type                    |           Description           |
|-----------|--------------------------------------------|---------------------------------|
| stage     | string                                     | The blocking stage              |
| input     | [IItemStack](/vanilla/api/item/IItemStack) | the left item from the auction. |
| output    | [IItemStack](/vanilla/api/item/IItemStack) | output item from the auction    |


:::

:::group{name=addMerchant}

Will allow you to limit bidding with a resident until the stage is opened

```zenscript
PlayerStage.addMerchant(stage as string, input1 as IItemStack, input2 as IItemStack, output as IItemStack)
```

| Parameter |                    Type                    |           Description            |
|-----------|--------------------------------------------|----------------------------------|
| stage     | string                                     | The blocking stage               |
| input1    | [IItemStack](/vanilla/api/item/IItemStack) | the left item from the auction.  |
| input2    | [IItemStack](/vanilla/api/item/IItemStack) | the right item from the auction. |
| output    | [IItemStack](/vanilla/api/item/IItemStack) | output item from the auction     |


:::

:::group{name=addMerchant}

Will allow you to limit bidding with a resident until the stage is opened

```zenscript
PlayerStage.addMerchant(stage as string, input1 as IItemStack, input2 as IItemStack, output as IItemStack, profession as VillagerProfession)
```

| Parameter  |                              Type                              |                                                                 Description                                                                  |
|------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| stage      | string                                                         | The blocking stage                                                                                                                           |
| input1     | [IItemStack](/vanilla/api/item/IItemStack)                     | the left item from the auction.                                                                                                              |
| input2     | [IItemStack](/vanilla/api/item/IItemStack)                     | the right item from the auction.                                                                                                             |
| output     | [IItemStack](/vanilla/api/item/IItemStack)                     | output item from the auction                                                                                                                 |
| profession | [VillagerProfession](/vanilla/api/villager/VillagerProfession) | The profession of the resident to which the restriction will be applied. Without this parameter, the restriction will apply to all villagers |


:::


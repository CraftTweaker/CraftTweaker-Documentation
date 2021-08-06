# Orechid

Allows editing lists of results from the Orechid and Orechid Ignem.

 Note that outputs added through this list will not be affected by the priority config option.

 To dump the full list of loaded results, run the `/ct dump orechidOutputs` command.

This class was added by a mod with mod-id `botania`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.Orechid;
```


## Static Properties

| Название | Тип                              | Имеет Getter | Имеет Setter | Description                                        |
| -------- | -------------------------------- | ------------ | ------------ | -------------------------------------------------- |
| main     | [Orechid](/mods/Botania/Orechid) | true         | false        | The manager for the standard Orechid.              |
| nether   | [Orechid](/mods/Botania/Orechid) | true         | false        | The manager for the nether variant, Orechid Ignem. |

## Methods

:::group{name=clear}

Completely clears the ore list.

Return Type: void

```zenscript
// Orechid.clear() as void

Orechid.main.clear();
```

:::

:::group{name=registerOreWeight}

Adds the specified ingredient with the specified weight at the end of the ore list.

 As the output is a state ingredient, you can use blocks, blockstates and tags as the output.

Return Type: void

```zenscript
// Orechid.registerOreWeight(output as StateIngredient, weight as int) as void

Orechid.main.registerOreWeight(<block:minecraft:coal_ore>, 250);
```

| Параметр | Тип                                              | Description              |
| -------- | ------------------------------------------------ | ------------------------ |
| output   | [StateIngredient](/mods/Botania/StateIngredient) | The block result         |
| weight   | int                                              | The weight of the result |


:::

:::group{name=removeOreWeight}

Removes all outputs that contain the specified state.

Return Type: void

```zenscript
// Orechid.removeOreWeight(state as MCBlockState) as void

Orechid.main.removeOreWeight(<blockstate:minecraft:diamond_ore>);
```

| Параметр | Тип                                             | Description     |
| -------- | ----------------------------------------------- | --------------- |
| state    | [MCBlockState](/vanilla/api/block/MCBlockState) | State to remove |


:::



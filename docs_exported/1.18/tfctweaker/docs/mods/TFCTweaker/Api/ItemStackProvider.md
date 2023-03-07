# ItemStackProvider

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import tfc.api.ingredient.ItemStackProvider;
```


## Static Methods

:::group{name=addInputHeat}

Add Heat to the input

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
ItemStackProvider.addInputHeat(heat as float) as ItemStackProvider
```

| Parameter | Type  |
|-----------|-------|
| heat      | float |


:::

:::group{name=addOutputHeat}

Add heat to the output

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
ItemStackProvider.addOutputHeat(output as IItemStack, heat as float) as ItemStackProvider
```

| Parameter |                    Type                    | Description |
|-----------|--------------------------------------------|-------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | heat item   |
| heat      | float                                      |             |


:::

:::group{name=addRemoveTrait}

Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
ItemStackProvider.addRemoveTrait(trait as string, add as boolean) as ItemStackProvider
```

| Parameter |  Type   |
|-----------|---------|
| trait     | string  |
| add       | boolean |


:::

:::group{name=copyFood}

Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
ItemStackProvider.copyFood(output as IItemStack) as ItemStackProvider
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=copyForgingBonus}

Copy the input forging bonus.

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
ItemStackProvider.copyForgingBonus(output as IItemStack) as ItemStackProvider
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=copyHeat}

Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
// ItemStackProvider.copyHeat() as ItemStackProvider

ItemStackProvider.copyHeat();
```

:::

:::group{name=copyHeat}

Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
ItemStackProvider.copyHeat(output as IItemStack) as ItemStackProvider
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=copyInput}

Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
// ItemStackProvider.copyInput() as ItemStackProvider

ItemStackProvider.copyInput();
```

:::

:::group{name=copyOldestFood}

Copy the oldest food from the input and add it to the output item

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
ItemStackProvider.copyOldestFood(output as IItemStack) as ItemStackProvider
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=empty}

Empty Output

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
// ItemStackProvider.empty() as ItemStackProvider

ItemStackProvider.empty();
```

:::

:::group{name=none}

Create an ItemStackProvider with no Modifier.

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
ItemStackProvider.none(output as IItemStack) as ItemStackProvider
```

| Parameter |                    Type                    | Description |
|-----------|--------------------------------------------|-------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | item output |


:::

:::group{name=resetFood}

Reset the input food data.

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
// ItemStackProvider.resetFood() as ItemStackProvider

ItemStackProvider.resetFood();
```

:::

:::group{name=resetFood}

Reset the output Food data

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/ItemStackProvider)

```zenscript
ItemStackProvider.resetFood(output as IItemStack) as ItemStackProvider
```

| Parameter |                    Type                    |   Description   |
|-----------|--------------------------------------------|-----------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | the output item |


:::

## Constructors


```zenscript
new ItemStackProvider() as ItemStackProvider
new ItemStackProvider();
```


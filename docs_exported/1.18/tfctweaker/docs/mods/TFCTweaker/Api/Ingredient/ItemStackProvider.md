# ItemStackProvider

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.api.ingredient.ItemStackProvider;
```


## Static Methods

:::group{name=addInputHeat}

Add Heat to the recipe input item

Returns:   
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.addInputHeat(heat as float) as ItemStackProvider

ItemStackProvider.addInputHeat(100);
```

| Parameter | Type  |       Description        |
|-----------|-------|--------------------------|
| heat      | float | heat to add to the input |


:::

:::group{name=addOutputHeat}

Add heat to the output

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.addOutputHeat(output as IItemStack, heat as float) as ItemStackProvider

ItemStackProvider.addOutputHeat(<item:tfc:metal/ingot/copper>, 100);
```

| Parameter |                    Type                    |        Description        |
|-----------|--------------------------------------------|---------------------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | heat item                 |
| heat      | float                                      | heat to add to the output |


:::

:::group{name=addRemoveTrait}

Add or remove a trait from the recipe input item

Returns:   
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.addRemoveTrait(trait as string, add as boolean) as ItemStackProvider

ItemStackProvider.addRemoveTrait("salted", false);
```

| Parameter |  Type   |                Description                |
|-----------|---------|-------------------------------------------|
| trait     | string  | name of the trait                         |
| add       | boolean | true to add the trait, false to remove it |


:::

:::group{name=addRemoveTrait}

Add or remove a trait to the output item

Returns:   
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.addRemoveTrait(output as IItemStack, trait as string, add as boolean) as ItemStackProvider

ItemStackProvider.addRemoveTrait(<item:tfc:food/banana>, "salted", true);
```

| Parameter |                    Type                    |                Description                |
|-----------|--------------------------------------------|-------------------------------------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | item                                      |
| trait     | string                                     | name of the trait                         |
| add       | boolean                                    | true to add the trait, false to remove it |


:::

:::group{name=copyFood}

Copy the input item food data to the output

Returns:   
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.copyFood(output as IItemStack) as ItemStackProvider

ItemStackProvider.copyFood(<item:tfc:food/banana>);
```

| Parameter |                    Type                    | Description |
|-----------|--------------------------------------------|-------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | output item |


:::

:::group{name=copyForgingBonus}

Copy the input forging bonus.

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.copyForgingBonus(output as IItemStack) as ItemStackProvider

ItemStackProvider.copyForgingBonus(<item:tfc:metal/ingot/bronze>);
```

| Parameter |                    Type                    | Description |
|-----------|--------------------------------------------|-------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | output item |


:::

:::group{name=copyHeat}

Copy the input heat to the output

Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.copyHeat() as ItemStackProvider

ItemStackProvider.copyHeat();
```

:::

:::group{name=copyHeat}

Copy the input item heat data to the output

Returns:   
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.copyHeat(output as IItemStack) as ItemStackProvider

ItemStackProvider.copyHeat(<item:tfc:metal/ingot/copper>);
```

| Parameter |                    Type                    | Description |
|-----------|--------------------------------------------|-------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | output item |


:::

:::group{name=copyInput}

Return a copy of the input

Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.copyInput() as ItemStackProvider

ItemStackProvider.copyInput();
```

:::

:::group{name=copyOldestFood}

Copy the oldest food from the input and add it to the output item

Returns:   
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.copyOldestFood(output as IItemStack) as ItemStackProvider

ItemStackProvider.copyOldestFood(<item:tfc:food/banana>);
```

| Parameter |                    Type                    | Description |
|-----------|--------------------------------------------|-------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | output item |


:::

:::group{name=empty}

Create an empty ItemStack provider

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.empty() as ItemStackProvider

ItemStackProvider.empty();
```

:::

:::group{name=none}

Create an ItemStackProvider with no Modifier.

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.none(output as IItemStack) as ItemStackProvider

ItemStackProvider.none(<item:tfc:metal/double_ingot/copper>);
```

| Parameter |                    Type                    | Description |
|-----------|--------------------------------------------|-------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | item output |


:::

:::group{name=resetFood}

Reset the input food data.

Returns: TFCItemStackProvider  
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.resetFood() as ItemStackProvider

ItemStackProvider.resetFood();
```

:::

:::group{name=resetFood}

Reset the output Food data

Returns:   
Return Type: [ItemStackProvider](/mods/TFCTweaker/Api/Ingredient/ItemStackProvider)

```zenscript
// ItemStackProvider.resetFood(output as IItemStack) as ItemStackProvider

ItemStackProvider.resetFood(<item:tfc:food/banana>);
```

| Parameter |                    Type                    | Description |
|-----------|--------------------------------------------|-------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | output item |


:::

## Constructors


```zenscript
new ItemStackProvider() as ItemStackProvider
new ItemStackProvider();
```


# ZenCompostRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ZenCompostRecipe;
```


## Methods

:::group{name=setAmount}

Sets the amount of compost per input.

Return Type: [ZenCompostRecipe](/mods/ExNihiloSequentia/Composting)

```zenscript
ZenCompostRecipe.setAmount(amount as int) as ZenCompostRecipe
```

| Parameter | Type |   Description    |
|-----------|------|------------------|
| amount    | int  | Sets the amount. |


:::

:::group{name=setInput}

Sets the input. Can be a tag or an item

Return Type: [ZenCompostRecipe](/mods/ExNihiloSequentia/Composting)

```zenscript
ZenCompostRecipe.setInput(input as IIngredient) as ZenCompostRecipe
```

| Parameter |                        Type                        |         Description         |
|-----------|----------------------------------------------------|-----------------------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | Sets the input tag or item. |


:::



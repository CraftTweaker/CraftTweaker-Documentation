# SmithingRecipeInput

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.input.type.SmithingRecipeInput;
```


## Extending Record

SmithingRecipeInput extends Record. That means all methods available in Record are also available in SmithingRecipeInput

## Implemented Interfaces
SmithingRecipeInput implements the following interfaces. That means all methods defined in these interfaces are also available in SmithingRecipeInput

- [RecipeInput](/vanilla/api/recipe/input/RecipeInput)

## Static Methods

:::group{name=of}

Return Type: [SmithingRecipeInput](/vanilla/api/recipe/input/type/SmithingRecipeInput)

```zenscript
SmithingRecipeInput.of(template as IItemStack, base as IItemStack, addition as IItemStack) as SmithingRecipeInput
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| template  | [IItemStack](/vanilla/api/item/IItemStack) |
| base      | [IItemStack](/vanilla/api/item/IItemStack) |
| addition  | [IItemStack](/vanilla/api/item/IItemStack) |


:::

## Properties

|   Name   |                   Type                   | Has Getter | Has Setter |
|----------|------------------------------------------|------------|------------|
| addition | [ItemStack](/vanilla/api/item/ItemStack) | true       | false      |
| base     | [ItemStack](/vanilla/api/item/ItemStack) | true       | false      |
| template | [ItemStack](/vanilla/api/item/ItemStack) | true       | false      |


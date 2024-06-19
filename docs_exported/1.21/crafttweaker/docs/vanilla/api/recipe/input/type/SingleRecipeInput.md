# SingleRecipeInput

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.input.type.SingleRecipeInput;
```


## Extending Record

SingleRecipeInput extends Record. That means all methods available in Record are also available in SingleRecipeInput

## Implemented Interfaces
SingleRecipeInput implements the following interfaces. That means all methods defined in these interfaces are also available in SingleRecipeInput

- [RecipeInput](/vanilla/api/recipe/input/RecipeInput)

## Static Methods

:::group{name=of}

Return Type: [SingleRecipeInput](/vanilla/api/recipe/input/type/SingleRecipeInput)

```zenscript
SingleRecipeInput.of(item as IItemStack) as SingleRecipeInput
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| item      | [IItemStack](/vanilla/api/item/IItemStack) |


:::

## Properties

| Name |                    Type                    | Has Getter | Has Setter |
|------|--------------------------------------------|------------|------------|
| item | [IItemStack](/vanilla/api/item/IItemStack) | true       | false      |


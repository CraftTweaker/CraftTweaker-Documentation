# AbstractCookingRecipe

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.type.AbstractCookingRecipe;
```


## Implemented Interfaces
AbstractCookingRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in AbstractCookingRecipe

- [Recipe](/vanilla/api/recipe/type/Recipe)&lt;[Container](/vanilla/api/world/Container)&gt;

## Методы

:::group{name=getCookingTime}

Return Type: int

```zenscript
// AbstractCookingRecipe.getCookingTime() as int

myAbstractCookingRecipe.getCookingTime();
```

:::

:::group{name=getExperience}

Return Type: float

```zenscript
// AbstractCookingRecipe.getExperience() as float

myAbstractCookingRecipe.getExperience();
```

:::


## Свойства

| Название    | Тип   | Имеет Getter | Имеет Setter | Описание                |
| ----------- | ----- | ------------ | ------------ | ----------------------- |
| cookingTime | int   | true         | false        | No Description Provided |
| experience  | float | true         | false        | No Description Provided |


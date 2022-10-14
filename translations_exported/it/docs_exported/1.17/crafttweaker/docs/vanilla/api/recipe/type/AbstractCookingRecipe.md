# AbstractCookingRecipe

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.type.AbstractCookingRecipe;
```


## Interfacce Implementate
AbstractCookingRecipe implements the following interfaces. That means all methods defined in these interfaces are also available in AbstractCookingRecipe

- [Recipe](/vanilla/api/recipe/type/Recipe)&lt;[Container](/vanilla/api/world/Container)&gt;

## Metodi

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


## Proprietà

| Nome        | Tipo  | Ha Getter | Ha Setter | Descrizione             |
| ----------- | ----- | --------- | --------- | ----------------------- |
| cookingTime | int   | sì        | no        | No Description Provided |
| experience  | float | sì        | no        | No Description Provided |


::since{version=10.0.0}
# CustomFilteringRule

Filters recipes according to a custom set of rules.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.type.CustomFilteringRule;
```


## Interfacce Implementate
CustomFilteringRule implements the following interfaces. That means all methods defined in these interfaces are also available in CustomFilteringRule

- [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule)

## Static Methods

:::group{name=of since="10.0.0"}

Creates a new rule filtering recipes based on the given BiPredicate&lt;T,U&gt;. <br />  <br />  The predicate's first argument represents the [IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager)&lt;T&gt; used by the recipe, whereas the second <br />  argument is the [Recipe](/vanilla/api/recipe/type/Recipe)&lt;C&gt; instance directly, allowing for it to check properties that might be required or <br />  perform additional manager-specific lookups.

Returns: A rule carrying out what has been specified.  
Return Type: [CustomFilteringRule](/vanilla/api/recipe/replacement/type/CustomFilteringRule)

```zenscript
CustomFilteringRule.of(predicate as BiPredicate<IRecipeManager,Recipe>) as CustomFilteringRule
```

| Parametro | Tipo                                                                                                                                  | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| predicate | BiPredicate&lt;[IRecipeManager](/vanilla/api/recipe/manager/IRecipeManager),[Recipe](/vanilla/api/recipe/type/Recipe)&gt; | The predicate for checking. |


:::

:::group{name=of since="10.0.0"}

Creates a new rule filtering recipes based on the given Predicate&lt;T&gt;. <br />  <br />  The predicate gets access to the [Recipe](/vanilla/api/recipe/type/Recipe)&lt;C&gt; instance directly, allowing for it to check directly elements <br />  that might be required.

Returns: A rule carrying out what has been specified.  
Return Type: [CustomFilteringRule](/vanilla/api/recipe/replacement/type/CustomFilteringRule)

```zenscript
CustomFilteringRule.of(predicate as Predicate<Recipe>) as CustomFilteringRule
```

| Parametro | Tipo                                                                   | Descrizione                 |
| --------- | ---------------------------------------------------------------------- | --------------------------- |
| predicate | Predicate&lt;[Recipe](/vanilla/api/recipe/type/Recipe)&gt; | The predicate for checking. |


:::


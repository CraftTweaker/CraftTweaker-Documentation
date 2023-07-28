::since{version=10.0.0}
# ComponentFilteringRule&LT;T : Object&GT;

Filters recipes that have the specified [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;, optionally with a check on its value.

 In other words, to be able to be processed by the replacer, the target recipe must have the specified
 [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;. Optionally, the value of the component must match a specific value or a Predicate&lt;T&gt;
 to match, for more custom filtering. The value of the recipe component can be checked with any
 [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy).

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.type.ComponentFilteringRule;
```


## Implemented Interfaces
ComponentFilteringRule implements the following interfaces. That means all methods defined in these interfaces are also available in ComponentFilteringRule

- [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule)

## Static Methods

:::group{name=of since="10.0.0"}

Creates a new rule that filters recipes that have the given [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;. <br />  <br />  The value of the component is not checked, merely its presence.

Returns: A rule carrying out what has been specified.  
Return Type: [ComponentFilteringRule](/vanilla/api/recipe/replacement/type/ComponentFilteringRule)&lt;T&gt;

```zenscript
ComponentFilteringRule.of<T : Object>(component as IRecipeComponent<T>) as ComponentFilteringRule<T>
```

| Parameter |                               Type                                |                     Description                     |
|-----------|-------------------------------------------------------------------|-----------------------------------------------------|
| component | [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; | The component to check for.                         |
| T         | Object                                                            | The type of the object pointed to by the component. |


:::

:::group{name=of since="10.0.0"}

Creates a new rule that filters recipes that have the given [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; and whose value matches the <br />  given `content`. <br />  <br />  The strategy used is the default one, so components will be checked directly.

Returns: A rule carrying out what has been specified.  
Return Type: [ComponentFilteringRule](/vanilla/api/recipe/replacement/type/ComponentFilteringRule)&lt;T&gt;

```zenscript
ComponentFilteringRule.of<T : Object>(component as IRecipeComponent<T>, content as T) as ComponentFilteringRule<T>
```

| Parameter |                               Type                                |                     Description                      |
|-----------|-------------------------------------------------------------------|------------------------------------------------------|
| component | [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; | The component to check for.                          |
| content   | T                                                                 | The oracle that represents the element to check for. |
| T         | Object                                                            | The type of the object pointed to by the component.  |


:::

:::group{name=of since="10.0.0"}

Creates a new rule that filters recipes that have the given [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; and whose value matches <br />  the given Predicate&lt;T&gt; according to the given [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy).

Returns: A rule carrying out what has been specified  
Return Type: [ComponentFilteringRule](/vanilla/api/recipe/replacement/type/ComponentFilteringRule)&lt;T&gt;

```zenscript
ComponentFilteringRule.of<T : Object>(component as IRecipeComponent<T>, content as Predicate<T>, checkStrategy as ITargetingStrategy) as ComponentFilteringRule<T>
```

|   Parameter   |                                   Type                                   |                                                                       Description                                                                       |
|---------------|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| component     | [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;        | The component to check for.                                                                                                                             |
| content       | Predicate&lt;T&gt;                                                       | A Predicate&lt;T&gt; that determines whether an element is wanted or not. Its argument <br />                       represents the object to check for. |
| checkStrategy | [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy) | The strategy that needs to be used to compare the component's value.                                                                                    |
| T             | Object                                                                   | The type of object pointed to by the component.                                                                                                         |


:::

:::group{name=of since="10.0.0"}

Creates a new rule that filters recipes that have the given [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt; and whose value matches the <br />  given `content` according to the given [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy).

Returns: A rule carrying out what has been specified.  
Return Type: [ComponentFilteringRule](/vanilla/api/recipe/replacement/type/ComponentFilteringRule)&lt;T&gt;

```zenscript
ComponentFilteringRule.of<T : Object>(component as IRecipeComponent<T>, content as T, checkStrategy as ITargetingStrategy) as ComponentFilteringRule<T>
```

|   Parameter   |                                   Type                                   |                             Description                              |
|---------------|--------------------------------------------------------------------------|----------------------------------------------------------------------|
| component     | [IRecipeComponent](/vanilla/api/recipe/IRecipeComponent)&lt;T&gt;        | The component to check for.                                          |
| content       | T                                                                        | The oracle that represents the element to check for.                 |
| checkStrategy | [ITargetingStrategy](/vanilla/api/recipe/replacement/ITargetingStrategy) | The strategy that needs to be used to compare the component's value. |
| T             | Object                                                                   | The type of the object pointed to by the component.                  |


:::


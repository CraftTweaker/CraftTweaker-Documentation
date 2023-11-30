::since{version=10.0.0}
# NameFilteringRule

Filters recipes that match a specific pattern on their name.

 This acts as a less specialized version of [ModsFilteringRule](/vanilla/api/recipe/replacement/type/ModsFilteringRule) as it allows custom matching on the entirety
 of a recipe's name as determined by [RecipeHolderRecipeHolder](/vanilla/api/recipe/type/RecipeHolder)&lt;T&gt;#id(), at the cost of some efficiency.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.recipe.replacement.type.NameFilteringRule;
```


## Implemented Interfaces
NameFilteringRule implements the following interfaces. That means all methods defined in these interfaces are also available in NameFilteringRule

- [IFilteringRule](/vanilla/api/recipe/replacement/IFilteringRule)

## Static Methods

:::group{name=anyOf since="10.0.0"}

Creates a rule that filters only recipes with the specific given names. <br />  <br />  The names are matched exactly, in both namespace and path.

Returns: A rule carrying out what has been specified.  
Return Type: [NameFilteringRule](/vanilla/api/recipe/replacement/type/NameFilteringRule)

```zenscript
NameFilteringRule.anyOf(exactNames as string[]) as NameFilteringRule
```

| Parameter  |   Type   |         Description          |
|------------|----------|------------------------------|
| exactNames | string[] | The exact names to look for. |


:::

:::group{name=containing since="10.0.0"}

Creates a rule filtering recipes that have the given word in their name. <br />  <br />  The word is not matched exactly and word boundaries aren't considered. This means that if a recipe is called <br />  `"minecraft:pumpkin_pie"` and the rule is set up to check `"pump"`, that recipe will pass the check <br />  instead of failing it.

Returns: A rule carrying out exactly what has been specified.  
Return Type: [NameFilteringRule](/vanilla/api/recipe/replacement/type/NameFilteringRule)

```zenscript
NameFilteringRule.containing(contents as string) as NameFilteringRule
```

| Parameter |  Type  |                  Description                   |
|-----------|--------|------------------------------------------------|
| contents  | string | The contents to look for in the recipe's name. |


:::

:::group{name=regex since="10.0.0"}

Creates a rule filtering recipes based on the given regular expression.

Returns: A rule carrying out what has been specified.  
Return Type: [NameFilteringRule](/vanilla/api/recipe/replacement/type/NameFilteringRule)

```zenscript
NameFilteringRule.regex(regex as string) as NameFilteringRule
```

| Parameter |  Type  |          Description           |
|-----------|--------|--------------------------------|
| regex     | string | The regular expression to use. |


:::


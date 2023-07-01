# EntityIngredient

EntityIngredient that facilitates accepting either a single, or multiple [EntityType](/vanilla/api/entity/EntityType)&lt;T&gt;s, [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;T&gt;&gt;s
 or [Many](/vanilla/api/util/Many)&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;T&gt;&gt;&gt;s.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.EntityIngredient;
```


## Implemented Interfaces
EntityIngredient implements the following interfaces. That means all methods defined in these interfaces are also available in EntityIngredient

- [CommandStringDisplayable](/vanilla/api/bracket/CommandStringDisplayable)

## Operators

:::group{name=OR}

```zenscript
myEntityIngredient | other as EntityIngredient
```

:::



# ItemFactory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.factory.vanilla.ItemFactory;
```


## Implemented Interfaces
ItemFactory implements the following interfaces. That means all methods defined in these interfaces are also available in ItemFactory

- [Factory](/mods/contenttweaker/rt/Factory)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt;

## Methods

:::group{name=typed}

Return Type: T

```zenscript
ItemFactory.typed<T : ItemBuilder<T>>() as T
```

| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| T         | [ItemBuilder](/mods/contenttweaker/builder/vanilla/item/ItemBuilder)&lt;T&gt; |


:::



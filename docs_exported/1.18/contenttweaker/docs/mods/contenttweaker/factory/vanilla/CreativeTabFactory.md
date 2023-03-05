# CreativeTabFactory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.factory.vanilla.CreativeTabFactory;
```


## Implemented Interfaces
CreativeTabFactory implements the following interfaces. That means all methods defined in these interfaces are also available in CreativeTabFactory

- [Factory](/mods/contenttweaker/rt/Factory)&lt;[CreativeModeTab](/vanilla/api/item/CreativeModeTab)&gt;

## Methods

:::group{name=create}

Return Type: [CreativeTabReference](/mods/contenttweaker/object/vanilla/CreativeTabReference)

```zenscript
CreativeTabFactory.create(id as string, icon as ItemReference) as CreativeTabReference
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| id        | string                                                             |
| icon      | [ItemReference](/mods/contenttweaker/object/vanilla/ItemReference) |


:::



# BlockFactory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.factory.vanilla.BlockFactory;
```


## Implemented Interfaces
BlockFactory implements the following interfaces. That means all methods defined in these interfaces are also available in BlockFactory

- [Factory](/mods/contenttweaker/rt/Factory)&lt;[Block](/vanilla/api/block/Block)&gt;

## Methods

:::group{name=typed}

Return Type: T

```zenscript
BlockFactory.typed<T : BlockBuilder<T>>() as T
```

| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| T         | [BlockBuilder](/mods/contenttweaker/builder/vanilla/block/BlockBuilder)&lt;T&gt; |


:::



# MaterialFactory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.factory.vanilla.MaterialFactory;
```


## Implemented Interfaces
MaterialFactory implements the following interfaces. That means all methods defined in these interfaces are also available in MaterialFactory

- [Factory](/mods/contenttweaker/rt/Factory)&lt;[Material](/vanilla/api/block/material/Material)&gt;

## Methods

:::group{name=material}

Return Type: [MaterialBuilder](/mods/contenttweaker/builder/vanilla/material/MaterialBuilder)

```zenscript
MaterialFactory.material(color as Reference<MaterialColor>) as MaterialBuilder
```

| Parameter |                                                         Type                                                         |
|-----------|----------------------------------------------------------------------------------------------------------------------|
| color     | [Reference](/mods/contenttweaker/object/Reference)&lt;[MaterialColor](/vanilla/api/block/material/MaterialColor)&gt; |


:::



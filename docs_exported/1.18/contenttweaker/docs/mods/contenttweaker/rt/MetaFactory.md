# MetaFactory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker._rt.MetaFactory;
```


## Static Methods

:::group{name=factory}

Return Type: U

```zenscript
MetaFactory.factory<T : Object, U : Factory<T>>(typeId as ResourceLocation) as U
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| typeId    | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) |
| T         | Object                                                             |
| U         | [Factory](/mods/contenttweaker/rt/Factory)&lt;T&gt;                |


:::

:::group{name=reference}

Return Type: U

```zenscript
MetaFactory.reference<T : Object, U : Reference<T>>(typeId as ResourceLocation, id as ResourceLocation) as U
```

| Parameter |                                Type                                |
|-----------|--------------------------------------------------------------------|
| typeId    | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) |
| id        | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation) |
| T         | Object                                                             |
| U         | [Reference](/mods/contenttweaker/object/Reference)&lt;T&gt;        |


:::


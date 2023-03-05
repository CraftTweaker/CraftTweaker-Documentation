# SimpleReference&LT;T : Object&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import contenttweaker.object.SimpleReference;
```


## Extending Reference&lt;T&gt;

SimpleReference extends [Reference](/mods/contenttweaker/object/Reference)&lt;T&gt;. That means all methods available in [Reference](/mods/contenttweaker/object/Reference)&lt;T&gt; are also available in SimpleReference

## Properties

|    Name    |                                Type                                 | Has Getter | Has Setter |
|------------|---------------------------------------------------------------------|------------|------------|
| id         | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)  | true       | false      |
| registryId | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)? | true       | false      |
| typeId     | [ResourceLocation](/mods/contenttweaker/resource/ResourceLocation)  | true       | false      |


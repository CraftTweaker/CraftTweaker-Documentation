# IIsBuilder

Denotes anything that is a builder. What did you expect?

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.api.IIsBuilder;
```


## Methods

### build

Instructs CoT to actually build whatever this builder is supposed to be building.

Return Type: void

```zenscript
IIsBuilder.build(resourceLocation as string) as void
myIIsBuilder.build("my_awesome_block");
```
| Parameter        | Type   | Description                          |
| ---------------- | ------ | ------------------------------------ |
| resourceLocation | string | The resource path to give this block |



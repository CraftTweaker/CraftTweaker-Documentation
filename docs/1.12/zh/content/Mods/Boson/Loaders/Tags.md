# `tags` Loader

The `tags` loader is a special Loader that fires at a later stage in the Minecraft loading process and allows manipulation of [Tags](/Mods/Boson/Tags/Concept/). The Tag bracket handler has a different meaning when used in a file loaded by this loader: refer to the Tags documentation for more information.

## Using this loader
This loader can be enabled via the [`#loader` preprocessor directive](/AdvancedFunctions/Preprocessors/LoaderPreprocessor/) by specifying its name next to the declaration, as in the following example:

```zenscript
#loader tags
```

## Reason for this loader
Refer to the documentation for the [tag bracket handler](/Mods/Boson/Tags/BracketHandler/) and the page related to the [actual concept](/Mods/Boson/Tags/Concept/) for more information.

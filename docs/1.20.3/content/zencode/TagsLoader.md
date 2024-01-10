# Loader Tags

The `tags` loader is a [Loader](/zencode/Preprocessors/LoaderPreprocessor) added by CraftTweaker that provides the scripter with a new location in time to load scripts.

The unique purpose of the loader is to give you a window where tags can be manipulated, before mods and CraftTweaker load recipes and scripts respectively.

This means:

- If you use the `tags` loader, you can forget about having to add [priority](/zencode/Preprocessors/PriorityPreprocessor) to your scripts so the 
scripts that modify tags load earlier than the ones that actually use them.
- If you modify tags before mods certain conditional recipes added by mods can be tweaked, using the updated tag contents. 
- Since the `tags` loader loads before the `crafttweaker` one, which is the default, you have access to almost no types at all. 
You only have access to `<tags>`, `<tagmanager>` and `<resources>`

  
```zenscript
#loader tags

<tag:items:minecraft:planks>.addId(<resource:minecraft:tnt>);
```

The complete list of classes you can access is the following:

```
ResourceLocation
Many
UnknownTag
MCTag
UnknownTagManager
ITagManager
TagManager
INumberData
IData
ICollectionData
CommandStringDisplayable
```


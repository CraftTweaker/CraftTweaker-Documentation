# Loader Preprocessor

The loader preprocessor is really simple, it affects where and when the script is loaded.
As of writing this script, there are three loaders registered by CraftTweaker: `initialise`, `tags`, and `crafttweaker`

`crafttweaker` is the default loader, where most things take place. Scripts here will get executed whenever resources get reloaded, on world join, or when running the `/reload` command.
You don't need to have `#loader crafttweaker` at the top of your script.

Loaders are independent. You will not be able to add recipes in a `tags` loader or create an item in a `crafttweaker` loader.

## How to use

Simply append `#loader name` to the top of the script.

```zenscript
#loader tags

<tag:items:minecraft:planks>.addId(<resource:minecraft:tnt>); 
```

Other mods may register other loaders under different names. As such, they might load at different points in time and
provide certain classes.
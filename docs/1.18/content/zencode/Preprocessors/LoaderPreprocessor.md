# Loader Preprocessor

The loader preprocessor is really simple, it affects where and when the script is loaded.
As of writing this script, there are two loaders: `crafttweaker` and `contenttweaker`.

`crafttweaker` is the default loader, where most things take place. Scripts here will get executed whenever resources get reloaded, on world join, or when running the `/reload` command.

The `contenttweaker` loader loads its scripts a bit early, before regular registration, so that Objects that need to be registered while the game is starting are registered and present. This means that this loader doesn't allow you to `/reload` and requires you to restart the game to apply changes. 

Loaders are independent. You will not be able to add recipes in a `contenttweaker` loader or create an item in a `crafttweaker` loader.

# How to use

Simply append `#loader name` to the top of the script.

```zenscript
#loader contenttweaker

import mods.contenttweaker.fluid.FluidBuilder;

new FluidBuilder(false, 0xff0000)
    .build("black_water");

```
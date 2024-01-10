# Modloaded Preprocessor

The modloaded preprocessor determines whether a script can be loaded or not by checking whether a mod is loaded (by searching for the provided modid).

Be careful, as sometimes the modid might differ from the file name. Always try to check the modid by either looking at the assets folder or by looking at the
identifying file for each modloader. Alternatively, check the mod's github for the actual modid or ask them!

It is useful to have this in places where you suspect a mod might be added, removed, or for when you want to write scripts that don't crash when taken outside of 
their environment. Theoretically, you could make a MultiLoader modpack that uses the same scripts on both sides if you're smart about it!

## How to use

The syntax of it in ZenCode would be similar to:

```zenscript
modloaded(modids as string[])
```

So, you supply the preprocessor, followed by a list of modids that are required for the script to load.
All modids need to be present in order for the script to be loaded, otherwise, it is skipped.

```zenscript
#modloaded crafttweaker

println("CraftTweaker is installed");
println("This is useless, and it won't ever stop our script from loading");
```

Another example of the above would be:

```zenscript
#modloaded botania botanypots   

//The purpose of this mini script is to add a different

craftingTable.removeByName("botania:mana_pool");

craftingTable.addShaped("pool_pot_recipe", <item:botania:mana_pool>, [
   [<tag:items:botania:petals>, <tag:items:botania:petals>], 
   [<tag:items:botanypots:all_botany_pots>, <tag:items:botanypots:all_botany_pots>]
]);
```
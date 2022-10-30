# About Mekanism

Mekanism is a complex, tech mod, with built-in support for CraftTweaker as of version 10.1.0!

Some things you want to be aware when handling Mekanism's ZenClasses and RecipeTypes.

- Mekanism uses inheritance and generics often in its system. 
- Most, if not all, Mekanism Objects can be acquired through the `/ct dump` subcommand. More information on this can be found [here](/mods/Mekanism/api/BracketDumpers)
- Examples are added to the `/ct examples` command.
- Mekanism allows you to add custom content through it's loader.
- Most recipes should be removed by recipe name rather than by output. You can get the recipe name using JEI and enabling Advanced Tooltips using `F3 + H` in game.

Happy Scripting!
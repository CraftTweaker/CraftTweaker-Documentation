# Import Function

Instead of typing the whole function name all the time, you can just import a function to serve your needs.
Useful when using mod functions.

## Basic Import

Imports have to be declared at the top of a Script. You will have to declare imports for each scripts separately.
Be careful not to import two functions with the same name, use the AS function for that

```
//This will import the removeRecipe from the Botania Apothecary
import mods.botania.Apothecary.removeRecipe;

//And this will import the ElvenTrade package
import mods.botania.ElvenTrade;

//removeRecipe is a function, so we can just use it
removeRecipe(<minecraft:dirt>);

//ElvenTrade is a package, so we need to specify what function we want to use
ElvenTrade.removeRecipe(<minecraft:diamond>);
```

## Import as

Sometimes you want to import two functions with the same name or just want to keep your scripts look better by using custom names.
When adding the AS statement at the end of the import, you can specify the name that the import should listen to.

```
//This will import the removeRecipe from the Botania Apothecary
import mods.botania.Apothecary.removeRecipe AS apoRemove;

//And this will import the removeRecipe from the ElvenTrade
import mods.botania.ElvenTrade.removeRecipe AS elvenRemove;

apoRemove(<minecraft:dirt>);
elvenRemove(<minecraft:diamond>);
```


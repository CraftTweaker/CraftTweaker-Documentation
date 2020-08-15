# LoadedMods

You can use the [global keyword](/Vanilla/Global_Functions/) `loadedMods` to access all currently loaded mods.  
If needed you can import the class using `import crafttweaker.mods.ILoadedMods;`

## Check if a mod is loaded

Use the `in` function to check if a mod is loaded;  
You can also use the `contains` method:

```zenscript
//if MinecraftCoderPack is loaded
if(loadedMods in "mcp"){
    print("success!");
}

//if MinecraftCoderPack is loaded
if(loadedMods.contains("mcp")){
    print("success!!!");
}
```

## Retrieve a specific mod

You can retrieve a specific mod as IMod as long as you have it's ID

```zenscript
//retrieves the minecraftCoderPack mod
val mod = loadedMods["mcp"];
```

## Iterate through the modList

You can iterate through the list of loaded mods like this:

```zenscript
//prints all registred item definitions, not recommended in larger packs!
//the mod variable will be an IMod type
for mod in loadedMods {
    print(mod.name ~ ":");
    for item in mod.items {
        print("\t\t" ~ item.displayName);
    }
}
```

# IMod

The IMod Interface provides you with some general information on a specific mod.  
If needed, it can be imported using `import crafttweaker.mods.IMod;`

| Zengetter   | Che cosa fa                        | Tipo Di Reso                               | Usage             |
| ----------- | ---------------------------------- | ------------------------------------------ | ----------------- |
| id          | Returns the mod's id               | stringa                                    | `mod.id`          |
| nome        | Returns the mod's internal name    | stringa                                    | `mod.name`        |
| versione    | Returns the mod's version          | stringa                                    | `mod.version`     |
| descrizione | Returns the mod description        | stringa                                    | `mod.description` |
| items       | Returns all items added by the mod | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`       |
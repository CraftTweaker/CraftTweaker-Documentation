# LoadedMods

You can use the [global keyword](/Vanilla/Global_Functions/) `loadedMods` to access all currently loaded mods.  
If needed you can import the class using `import crafttweaker.mods.ILoadedMods;`

## Check if a mod is loaded

Use the `in` function to check if a mod is loaded;  
You can also use the `contains` method:

    //if MinecraftCoderPack is loaded
    if(loadedMods in "mcp"){
        print("success!");
    }
    
    //if MinecraftCoderPack is loaded
    if(loadedMods.contains("mcp")){
        print("success!!!");
    }
    

## Retrieve a specific mod

You can retrieve a specific mod as IMod as long as you have it's ID

    //retrieves the minecraftCoderPack mod
    val mod = loadedMods["mcp"];
    

## Iterate through the modList

You can iterate through the lost of loaded mods like this:

    //prints all registred item definitions, not recommended in larger packs!
    //the mod variable will be an IMod type
    for mod in loadedMods {
        print(mod.name ~ ":");
        for item in mod.items {
            print("\t\t" ~ item.displayName);
        }
    }
    

# IMod

The IMod Interface provides you with some general information on a specific mod.  
If needed, it can be imported using `import crafttweaker.mods.IMod;`

| Zengetter   | What does it do                    | Return Type                                | Usage             |
| ----------- | ---------------------------------- | ------------------------------------------ | ----------------- |
| id          | Returns the mod's id               | string                                     | `mod.id`          |
| name        | Returns the mod's internal name    | string                                     | `mod.name`        |
| version     | Returns the mod's version          | string                                     | `mod.version`     |
| description | Returns the mod description        | string                                     | `mod.description` |
| items       | Returns all items added by the mod | [IItemStack](/Vanilla/Items/IItemStack/)[] | `mod.items`       |
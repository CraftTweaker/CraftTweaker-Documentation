# 已加载模组

你可以使用 [全局关键词](/Vanilla/Global_Functions/)`loadedMods` 访问当前所有加载的模组。  
如果需要，你可以使用 `import crafttweaker.mods.ILoadedMods;`导入该类

## 检查一个模组是否被加载

使用`in`关键字来检查一个模组是否被加载。你也可以使用`contains`方法。

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
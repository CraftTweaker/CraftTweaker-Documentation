# LoadedMods

You can use the keyword `loadedMods` to access all currently loaded mods.

## Check if a mod is loaded

Use the `in` function to check if a mod is loaded;  
Also you can use the `contains` method:
```
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

```
//retrieves the minecraftCoderPack mod
val mod = loadedMods["mcp"];
```

# IMod
The IMod Interface provides you with some general information on a specific mod

| Zengetter   | What does it do                    | Return Type                               | Usage             |
|-------------|------------------------------------|-------------------------------------------|-------------------|
| id          | Returns the mod's id               | string                                    | `mod.id`          |
| name        | Returns the mod's internal name    | string                                    | `mod.name`        |
| version     | Returns the mod's version          | string                                    | `mod.version`     |
| description | Returns the mod description        | string                                    | `mod.description` |
| items       | Returns all items added by the mod | [IItemStack](/Vanilla/Items/IItemStack)[] | `mod.items`       |
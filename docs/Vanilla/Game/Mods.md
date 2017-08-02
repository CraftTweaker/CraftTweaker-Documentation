# LoadedMods

You can use the keyword `loadedMods` to access all currently loaded mods.

## Check if a mod is loaded

Use the `in`function to check if a mod is loaded:
```
//if MinecraftCoderPack is loaded
if(loadedMods in "mcp"){
	print("success!");
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

```
val mod = loadedMods["mcp"];

print(mod.id);
print(mod.name);
print(mod.version);
print(mod.description);
```
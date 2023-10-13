# Mod Script Execution

Since version 3.0.8, it is now possible for Forge mods to send IMC messages to execute scripts in MineTweaker:

```java
NBTTagCompound nbtData = new NBTTagCompound();
nbtData.setString("name", "virtualscript.zs");
nbtData.setString("content", "print(\"Hello World\")");
FMLInterModComms.sendMessage("MineTweaker3", "addMineTweakerScript", nbtData);
```

The name parameter provides the script name. Take care with the script name you give it - MineTweaker scripts can override your script if it has an equal name. This can be handy to make it possible for servers or modpacks to override the content of your script - for instance to make recipes modifyable.

With a short piece of code, you can load a file from your mod to be executed. A more practical example:

```java
if (Loader.isModLoaded("MineTweaker3")) {
    try {
        String data = Resources.toString(Resources.getResource(ExampleMod.class, "/minetweaker/myscript.zs"), Charsets.UTF_8);
        NBTTagCompound nbtData = new NBTTagCompound();
        nbtData.setString("name", "mymod_recipes.zs");
        nbtData.setString("content", data);
        FMLInterModComms.sendMessage("MineTweaker3", "addMineTweakerScript", nbtData);
    } catch (IOException ex) {
        ex.printStackTrace();
    }
}
```
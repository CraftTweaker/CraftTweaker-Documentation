# Getting Started with scripts

CraftTweaker uses a custom scripting Language called `ZenScript`, ZenScript is read from `.zs` files that are stored in the `<gamedir>/scripts` folder.

ZenScript is a "top down" scripting language, meaning that, `Imports` need to be at the top of the file, `Variable Declarations` should be near the top of the file, however there are no restrictions to that, a `Variable` can be defined anywhere in a script, however it will not be accessible to the lines above the `Variable` declaration.

## Scripts

Scripts are stored in `<minecraftdir>/scripts` and are loaded when the player joins a world, much like previous versions of CraftTweaker (excluding 1.12), Scripts CAN be reloaded, just run `/reload`. In the current beta version, scripts are loaded on the client when joining a single player world, when joining a multiplayer world, nothing happens on the client, no scripts are loaded at all, but the vanilla recipe serializers send the custom recipes to the client! So it should all work find for now until mods get involved (and even then, only mods that don't use the datapack system won't work). Next version server -> client script syncing should be done :)

Script files have the `.zs` prefix, make sure that it isn't `.zs.txt`!

### Writing your first script

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<minecraftdir>/scripts>` folder.

In `hello.zs` put the following line

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<minecraftdir>/logs/crafttweaker.log` file.

The `crafttweaker.log` file is located in `<minecraftdir>/logs` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++ or Sublime Text to edit script files, however any program will do.

### The crafttweaker.log file

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Using the example above, the output would be:

```
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumps is easier.

### Comments

Comments can be used to make your script files more readable and easier to understand!

ZenScript supports 3 types of comments, being:

Single line: `// I'm a single line comment!`

Alternate Single Line: `# I'm also a single line comment!`

Multiline: 
```
/* I'm 
a
multiline comment! */
```
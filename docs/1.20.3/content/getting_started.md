# Getting Started with scripts

CraftTweaker uses a custom scripting Language called `ZenScript`, ZenScript is read from `.zs` files that are stored in the `<gamedir>/scripts` folder, if you aren't sure where this folder is, just run `/ct scripts` when in the game and the folder will open.

ZenScript is a "top down" scripting language, meaning that, `Imports` need to be at the top of the file, `Variable Declarations` should be near the top of the file, however there are no restrictions to that, a `Variable` can be defined anywhere in a script, however it will not be accessible to the lines above the `Variable` declaration.


Script files have the `.zs` suffix, make sure that it isn't `.zs.txt`!

## What are scripts

Scripts are stored in `<gamedir>/scripts` and are loaded when the player joins a world, much like previous versions of CraftTweaker (excluding 1.12), Scripts CAN be reloaded, just run `/reload`. 

When joining a server, the server sends their scripts to the client, and the client runs those scripts. This does mean that a client without any scripts, can join a server and get the changes (useful if you need to disable an item on the server but don't want to force clients to download extra files!)

### Writing your first script

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<gamedir>/scripts>` folder; If you aren't sure where the folder is, just run `/ct scripts` and it should open!

In `hello.zs` put the following line

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<gamedir>/logs/crafttweaker.log` file (or run `/ct log` to have the file open in your default text editor).

The `crafttweaker.log` file is located in `<gamedir>/logs` and can be read by any program that can read plaintext files.

It is recommended to use VSCode, Sublime Text or Notepad++ to edit script files, however any program will do.

When choosing a program to use to edit scripts, take a look at what Syntax highlighters are available, most common text editors have ZenScript highlighting support through the use of a plugin.


### The crafttweaker.log file

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

```
[HH:MM:SS.ms][TYPE] <message>
```

Using the example above, the output would be:

```
[14:58:06.697][INFO] Hello world!
```

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

Just note, that `#` comments are also used for [PreProcessors](/zencode/Preprocessors/Preprocessors), so while they are still valid comments, they could cause unwanted side effects. 

## The next step

Now you know the absolute basics of how to create scripts. Now, what you do is up to you!
Feel free to browse the Docs for any pages that interest you.

However, if you're getting started, we recommend checking out the Tutorial tab, more specifically the 
[Crafting Table Tutorial](/tutorial/Recipes/Crafting/crafting_table) as well as the [Recipe Managers](/tutorial/Recipes/RecipeManagers) page for information on how to add and remove different kinds of recipes.

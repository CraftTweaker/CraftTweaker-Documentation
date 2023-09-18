# Introduction
## Contents
* Introduction
  * Scripts
  * Writing a first script
  * The Minetweaker log
  * Reloading
  * Comments
### Introduction
Ever went into building a modpack and then found that just throwing in a bunch of mods didn't give you an integrated experience? As mods are developed relatively independently from each other, one may feel overpowered in comparison to the other. Or you may believe that there would be a better recipe for some of the items. Or perhaps you'd want to remove an item from the game without having to remove the entire mod. Or you may discover that some ore dictionary entries have too many or too few items. Now you can do all of that - each with just a single instruction to MineTweaker.

In addition to the core functionality provided to support Vanilla minecraft, mod integration libraries are provided with the mod to enable you to not only modify vanilla recipes, but also the mod machine recipes and mod behavior.

#### Scripts
To make the functionality available in a clear and concise manner, a custom scripting language is provided. The language is easy to learn - and for basic operations you can just follow the tutorials.

For multiplayer games, scripts are always stored server-side. That means you will never have to worry about keeping scripts up-to date with your friends! This makes MineTweaker a great modpack and server admin tool - it makes it possible to wrap a modpack with a certain set of mods and have different servers use MineTweaker to alter the details according to the preferences of the server owners.

Likewise, scripts can be bundled with worlds, making it possible to make modifications available to specific worlds only - handy if you want to do some playtesting in a certain world. Also handy for mapmakers wanting to have specific behavior programmed with their map.

MineTweaker has two script directories:

The shared script directory: the scripts directory, directly inside your minecraft directory. Scripts stored in this directory will apply to all worlds hosted by that minecraft instance - including Single-player games. They will NOT apply when you join another server, as scripts are always loaded from the server.
The world-specific script directory: this directory is also called scripts, but is stored in the savegame directory (world/scripts if you are setting up a dedicated server)
Inside these directories, any file with the .zs extension is considered a MineTweaker script and will be ran automatically when a game is started. Any number of script files can be stored in these directories - they will all be executed, in no particular order.

#### Writing a first script
To get used to the scripting system in MineTweaker, we can create a very basic file. Create a file hello.zs in your .minecraft/scripts directory (create it if it doesn't already exist) with the following line:

```zenscript
print("Hello world!");
```
Now open Minecraft and start a new game (or open an existing one).

The script should have run now. Now where did MineTweaker print its text?

#### The Minetweaker log
When you put a print statement in MineTweaker, it will output to the minetweaker.log file in your minecraft directory. Open this log and you should see the output:

```
INFO: Hello world!
```
Cool, huh? Although printing a test string to the log is not so interesting in and by itself, it is good to know that any errors and warnings will print to this file. Additionally, many in-game commands output to this file since the in-game console simply cannot hold much data.

Do you still have the game open? Try the following command in the in-game console:

```
/minetweaker names
```
This command dumps a list of each and every item in the game to the minetweaker log. If you have a lot of mods installed, expect a huge list. But since it outputs to the log, you can open the file with your favorite editor and search for a specific item name. (still stuck with Notepad? Try notepad++!)

#### Reloading
While developing, there is no need to restart minecraft for every change you are making. You can reload scripts in-game.

Change your printed text to something else, such as:

```zenscript
print("Hello guys!");
```
Now, in-game, enter the command /minetweaker reload.

This will append the following line in the MineTweaker log:

```
INFO: Hello guys!
```
MineTweaker reloaded your scripts from disk and executed it again. Handy! There is more to script reloading, as it will not only reload the script but also any recipes that have been changed. More about that in the next tutorial.

#### Comments
To document your scripts, MineTweaker supports 3 styles of comments:

```zenscript
// this is a single line comment
# this is a single line comment
/* this is
a
multiline comment */
```
Use these to make your scripts more understandable!
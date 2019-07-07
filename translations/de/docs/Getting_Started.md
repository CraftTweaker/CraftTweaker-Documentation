# Einführung in Skripte

CraftTweaker nutzt eine spezielle Skriptsprache namens `ZenScript`. Die Skripte werden von `.zs`-Dateien gelesen, welche sich im Ordner `<gamedir>/scripts` befinden.

ZenScript ist eine "top down"-Skriptsprache, was bedeutet, dass ganz oben im Skript die `Imports` stehen müssen, danach werden die `Variablen` deklariert. `Variablen` können zwar auch weiter unten im Skript stehen, allerdings kann man von den übergeordneten Zeilen aus dann auch nicht auf diese `Variable` zugreifen.

## Einführung

Schon mal ein Modpack erstellt, in dem du einfach alle möglichen Mods zusammen auf einen Haufen geklatscht hast und dabei gemerkt, dass manches einfach nicht gut zusammenpasst? Da Mods in der Regel unabhängig voneinander entwickelt werden, sind diese meistens nicht untereinaner abgestimmt. Vielleicht glaubst du, dass es für manche Items bessere Craftingrezepte gibt. Womöglich willst du auch einfach nur ein bestimmtes Item entfernen, ohne gleich die ganze Mod entfernen zu müssen. Oder vielleicht möchtest du auch einfach nur ein paar Einträge im "Ore Dictionary" verändern. Nun kannst du das alles tun - mit nur einem einzigen CraftTweaker-Befehl.

In addition to the core functionality provided to support Vanilla minecraft, mod integration libraries are provided with the mod to enable you to not only modify vanilla recipes, but also the mod machine recipes and mod behavior.

## Scripts

Scripts are stored in `<minecraftdir>/scripts` and are loaded in the `PreInitialization` phase of Minecraft, unlike previous versions of Crafttweaker, Scripts cannot be reloaded, this is due to changes that Mojang have made in 1.12 and there is no workaround. Also, Scripts need to be on **both, the server AND the client instance** to work

Script files have the `.zs` prefix and can be compressed into a `.zip` that will also be read.

### Writing your first script

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<minecraftdir>/scripts>` folder.

In `hello.zs` put the following line

    print("Hello world!");
    

Now load up Minecraft and and take a look at the `crafttweaker.log` file.

The `crafttweaker.log` file is located in `<minecraftdir>` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++ or Sublime Text to edit script files, however any program will do.

### The crafttweaker.log file

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

    [LOADERSTAGE][SIDE][TYPE] <message>
    

Using the example above, the output would be:

    [PREINITIALIZATION][CLIENT][INFO] Hello world!
    

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumps is easier.

### Comments

Comments can be used to make your script files more readable and easier to understand!

ZenScript supports 3 types of comments, being:

Single line: `// I'm a single line comment!`

Alternate Single Line: `# I'm also a single line comment!`

Multiline:

    /* I'm 
    a
    multiline comment! */
# Le Basi dello Scripting

CraftTweaker uses a custom scripting Language called `ZenScript`, ZenScript is read from `.zs` files that are stored in the `<gamedir>/scripts` folder.

ZenScript è un linguaggio di scripting "top down", il che significa che le `Direttive di Importazione` (dette anche `Imports`) devono trovarsi in cima al file; le `Dichiarazioni di Variabili` dovrebbero trovarsi nelle prime righe del file, anche se non vi sono restrizioni particolari in merito; infine, le `Variabili` possono essere definite ovunque in uno script, tuttavia non saranno accessibili nelle righe che precedono la dichiarazione della stessa.


## Introduction

Ever went into building a modpack and then found that just throwing in a bunch of mods didn't give you an integrated experience? As mods are developed relatively independently from each other, one may feel overpowered in comparison to the other. Or you may believe that there would be a better recipe for some of the items. Or perhaps you'd want to remove an item from the game without having to remove the entire mod. Or you may discover that some ore dictionary entries have too many or too few items. Now you can do all of that - each with just a single instruction to MineTweaker.

In addition to the core functionality provided to support Vanilla minecraft, mod integration libraries are provided with the mod to enable you to not only modify vanilla recipes, but also the mod machine recipes and mod behavior.

## Scripts

Scripts are stored in `<minecraftdir>/scripts` and are loaded in the `PreInitialization` phase of Minecraft, unlike previous versions of CraftTweaker, Scripts cannot be reloaded, this is due to changes that Mojang have made in 1.12 and there is no workaround. Also, Scripts need to be on **both, the server AND the client instance** to work

Script files have the `.zs` prefix and can be compressed into a `.zip` that will also be read.

### Scrivere il tuo primo script

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<minecraftdir>/scripts>` folder.

Scrivi la seguente riga all'interno di `hello.zs`:

```zenscript
print("Hello world!");
```

Now load up Minecraft and and take a look at the `crafttweaker.log` file.

The `crafttweaker.log` file is located in `<minecraftdir>` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++ or Sublime Text to edit script files, however any program will do.

### Il file crafttweaker.log

Il file `crafttweaker.log` utilizza una specifica sintassi per presentare l'output dell'esecuzione, che è la seguente:

```
[LOADERSTAGE][SIDE][TYPE] <message>
```

In base all'esempio dato sopra, l'output sarebbe:

```
[PREINITIALIZATION][CLIENT][INFO] Hello world!
```

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumps is easier.

### Commenti

I commenti possono essere utilizzati per rendere gli script più leggibili e facili da capire!

ZenScript supporta tre tipi di commenti:

Riga singola: `// Sono un commento su di un'unica riga!`

Forma alternativa di riga singola: `# Anche io sono un commento su di un'unica riga!`

Righe multiple:
```
/* Sono
un commento
su più righe! */
```

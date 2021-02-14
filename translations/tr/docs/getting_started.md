# Getting Started with scripts

CraftTweaker, `ZenScript` adı verilen özel bir betik dili kullanır. ZenScript, `<gamedir>/scripts` klasörü içerisindeki `.zs` uzantılı dosyalardan okunur. Eğer bu klasörün nerede olduğundan emin değilseniz, oyundayken `/ct scripts`  komutunu çalıştırırsanız klasörün kendisi açılacaktır.

ZenScript is a "top down" scripting language, meaning that, `Imports` need to be at the top of the file, `Variable Declarations` should be near the top of the file, however there are no restrictions to that, a `Variable` can be defined anywhere in a script, however it will not be accessible to the lines above the `Variable` declaration.


Script dosyaları `.zs` uzantısına sahiptirler. Uzantıların `.zs.txt` olmamasına dikkat ediniz.

## Script Nedir

Scripts are stored in `<gamedir>/scripts` and are loaded when the player joins a world, much like previous versions of CraftTweaker (excluding 1.12), Scripts CAN be reloaded, just run `/reload`.

Scripts are loaded twice when entering a single player world, once on the `Server` side, and then on the `Client` side, if you have a `println()` in your script, you will see it twice, since it is running twice.

This does not mean that changes are applied twice however, changes made by scripts can be sided, so some changes, such as setting localization, only run on the client side, but adding recipes is only done on the server side.

When joining a server, the server sends their scripts to the client, and the client runs those scripts. This does mean that a client without any scripts, can join a server and get the changes (useful if you need to disable an item on the server but don't want to force clients to download extra files!)


### Writing your first script

To get started with Scripts, you can create a very basic file, called `hello.zs` in the `<gamedir>/scripts>` folder; If you aren't sure where the folder is, just run `/ct scripts` and it should open!

In `hello.zs` put the following line

```zenscript
println("Hello world!");
```

Now load up Minecraft and and take a look at the `<gamedir>/logs/crafttweaker.log` file (or run `/ct log` to have the file open in your default text editor).

The `crafttweaker.log` file is located in `<gamedir>/logs` and can be read by any program that can read plaintext files.

It is recommended to use Notepad++, Sublime Text or VSCode to edit script files, however any program will do.

When choosing a program to use to edit scripts, take a look at what Syntax highlighters are available, most common text editors have ZenScript highlighting support through the use of a plugin.



### The crafttweaker.log file

The `crafttweaker.log` file uses a specific syntax in it's output, that syntax is:

```
[HH:MM:SS.ms][LOADERSTAGE][SIDE][TYPE] <message>
```

Using the example above, the output would be:

```
[14:58:06.697][DONE][SERVER][INFO] Hello world!
```

The syntax is used for debug purposes and the only time the syntax is not used, is for command dumps, in which case it just prints the message, this is done so copy pasting the dumped information is easier.

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

Just note, that `#` comments are also used for PreProcessors (TODO link to PreProcessors when they are documented), so while they are still valid comments, they could cause unwanted side effects. 
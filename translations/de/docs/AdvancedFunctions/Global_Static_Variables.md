# Globale und statische Variablen

Bestimmt hast du dich schon mal darüber geärgert, dass du manche Variablen in vielen Skripten wieder und wieder deklarieren musst.

Aber du kannst zufrieden sein, inwzischen ist dies dank globaler und statischer Variablen möglich!  
Wenn diese allerdings ein mal deklariert sind, können diese nicht mehr geändert werden.

## Unterschied zwischen globalen und statischen Variablen

Beide sind an das Skript gebunden und werden intialisiert, bevor das Skript ausgeführt wird.  
Beide können nicht verändert werden.  
Der Unterschied liegt darin, wie man sie aufruft:  
Globale Variablen können von überall mit ihrem Namen aufgerufen werden, außer man hat im Skript schon eine Variable mit dem gleichen Namen.  
Statische Variablen müssen über [den Namen ihres Skriptes](Cross-Script_Reference/) ausgeführt werden.

Globale Variablen werden mit dem `global`-Schlüsselwort erstellt.  
Statische werden mit dem `static`-Schlüsselwort erstellt.

Ansonsten sind beide Varianten identisch!

## Declaring a global value

Declaring a global value is as simple as declaring a local value:

    import crafttweaker.item.IItemStack;
    
    
    global myGlobalValue as IItemStack = <minecraft:dirt>;
    static myStaticValue as IItemStack = <minecraft:sand>;
    

Okay, let's break it down, shall we?

1. `global` keyword that indicates the declaration of a global value
2. `myGlobalValue` the name of the value
3. `as IItemStack` the type of the value (It is recommended to [import](Import/) the types before casting the variable)
4. `= <minecraft:dirt>;` value initialization. As global values are final, you need to initialize them whilst declaring them!

## Words of advice

- You can only access globals that have already been declared. Use the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) to make sure the scripts in which global are declared are executed first.
- Globals cannot be declared in scripts that are inside subfolders! It will compile but you will be left with a huge FieldNotFound Exception.
- While it is technically possible to omit the `as` part, it is recommended leaving it in, as the IAny interface is not fully functional yet. Also, it makes your declaration more clear for people reading/debugging your script!
- Local variables/values CAN overshadow global variables. The script will always search the innermost scope for variables and go outwards until it hits global when searching for keywords!
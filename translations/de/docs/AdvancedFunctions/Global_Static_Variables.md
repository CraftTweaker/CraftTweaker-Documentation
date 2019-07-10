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

## Globale Variablen deklarieren

Einen globalen Wert zu deklarieren ist genau so leicht, wie einen lokalen Wert zu deklarieren:

    import crafttweaker.item.IItemStack;
    
    
    global myGlobalValue as IItemStack = <minecraft:dirt>;
    static myStaticValue as IItemStack = <minecraft:sand>;
    

Okay, hier nun die Erklärung:

1. `global` Das Schlüsselwort zeigt, dass es ein global verfügbarer Wert wird
2. `myGlobalValue` der Name der Variable
3. `as IItemStack` der Typ der Variable (wichtig ist, dass dieser Typ vorher [importiert](Import/) wurde)
4. `= <minecraft:dirt>;` Zuweisung des Wertes. Da globale Variablen "final" (fest) sind, müssen diese sofort bei der Deklaration initialisiert werden!

## Hinweise

- Du kannst nur auf globale Werte zugreifen, wenn diese schon deklariert wurden. Nutze den [prioritätsbasierten Präprozessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/), um sicher zu gehen, dass alle globalen Variablen vor der Benutzung deklariert wurden.
- Globale Variablen können nicht in Skripten definiert werden, welche sich in Unterordnern befinden! Die Skripte lassen sich zwar kompilieren, allerdings wird das später noch Fehler ergeben.
- Technisch gesehen ist es möglich, den `as`-Teil wegzulassen, allerdings empfehlen wir dringend, diesen drin zu lassen. Also, it makes your declaration more clear for people reading/debugging your script!
- Local variables/values CAN overshadow global variables. The script will always search the innermost scope for variables and go outwards until it hits global when searching for keywords!
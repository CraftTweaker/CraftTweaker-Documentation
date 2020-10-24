# Globale und statische Variablen

Bestimmt hast du dich schon mal darüber geärgert, dass du manche Variablen in vielen Skripten wieder und wieder deklarieren musst.

Aber du kannst zufrieden sein, inwzischen ist dies dank globaler und statischer Variablen möglich!  
Wenn diese allerdings ein mal deklariert sind, können diese nicht mehr geändert werden.

## Unterschied zwischen globalen und statischen Variablen

Both, statics and globals are scriptbound and instantiated before the script is executed.  
Both cannot be changed.  
The difference is how they are called:  
Globals can be called from everywhere simply by their name unless you already have a local variable that has the same name.  
Statics on the other hand, need to use the [cross-script reference](/AdvancedFunctions/Cross-Script_Reference/) to be accessed.

Globale Variablen werden mit dem `global`-Schlüsselwort erstellt.  
Statische werden mit dem `static`-Schlüsselwort erstellt.

Ansonsten sind beide Varianten identisch!

## Globale Variablen deklarieren

Einen globalen Wert zu deklarieren ist genau so leicht, wie einen lokalen Wert zu deklarieren:

```zenscript
import crafttweaker.item.IItemStack;


global myGlobalValue as IItemStack = <minecraft:dirt>;
static myStaticValue as IItemStack = <minecraft:sand>;
```

Okay, hier nun die Erklärung:

1. `global` Das Schlüsselwort zeigt, dass es ein global verfügbarer Wert wird
2. `myGlobalValue` der Name der Variable
3. `as IItemStack` the type of the value (It is recommended to [import](/AdvancedFunctions/Import/) the types before casting the variable)
4. `= <minecraft:dirt>;` Zuweisung des Wertes. Da globale Variablen "final" (fest) sind, müssen diese sofort bei der Deklaration initialisiert werden!

## Hinweise

- Du kannst nur auf globale Werte zugreifen, wenn diese schon deklariert wurden. Nutze den [prioritätsbasierten Präprozessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/), um sicher zu gehen, dass alle globalen Variablen vor der Benutzung deklariert wurden.
- Globale Variablen können nicht in Skripten definiert werden, welche sich in Unterordnern befinden! Die Skripte lassen sich zwar kompilieren, allerdings wird das später noch Fehler ergeben.
- Technisch gesehen ist es möglich, den `as`-Teil wegzulassen, allerdings empfehlen wir dringend, diesen drin zu lassen. Das hilft dir und anderen Personen, den Code zu einem anderen Zeitpunkt besser zu verstehen!
- Lokale Variablen können globale Variablen überdecken. Das Skript wird immer versuchen, die "nächstmögliche" Instanz einer Variable zu finden und erst zuletzt nach globalen Variablen schauen.
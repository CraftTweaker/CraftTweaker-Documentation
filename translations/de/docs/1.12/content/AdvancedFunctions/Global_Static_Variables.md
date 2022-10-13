# Globale und statische Variablen

Sure you have been in the situation where you declared the same variable in each and every script over and over again.  
"Why is there no way to make them available in every script?" Is what went through your head at such times.

Be relieved now for there has been added a means of declaring and accessing global and scriptbound (static) values!  
They cannot be changed, though.


## Unterschied zwischen globalen und statischen Variablen
Both, statics and globals are scriptbound and instantiated before the script is executed.  
Both cannot be changed.  
The difference is how they are called:  
Globals can be called from everywhere simply by their name unless you already have a local variable that has the same name.  
Statics on the other hand, need to use the [cross-script reference](/AdvancedFunctions/Cross-Script_Reference/) to be accessed.

Globals are created using the `global` keyword.  
Statics are created using the `static` keyword.

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
# Variables globales y estáticas

Sure you have been in the situation where you declared the same variable in each and every script over and over again.  
"Why is there no way to make them available in every script?" Is what went through your head at such times.

Be relieved now for there has been added a means of declaring and accessing global and scriptbound (static) values!  
They cannot be changed, though.


## La diferencia entre estática y global
Both, statics and globals are scriptbound and instantiated before the script is executed.  
Both cannot be changed.  
The difference is how they are called:  
Globals can be called from everywhere simply by their name unless you already have a local variable that has the same name.  
Statics on the other hand, need to use the [cross-script reference](/AdvancedFunctions/Cross-Script_Reference/) to be accessed.

Globals are created using the `global` keyword.  
Statics are created using the `static` keyword.

Aparte de eso, ¡son idénticas!


## Declarando un valor global
Declarar una variable global es tan simple como declarar una variable local:

```zenscript
import crafttweaker.item.IItemStack;


global miValorGlobal as IItemStack = <minecraft:dirt>;
static miValorEstatico as IItemStack = <minecraft:sand>;
```

Vamos a analizar esto:

1. `global` nos indica que la variable es global
2. `miValorGlobal` el nombre de la variable
3. `as IItemStack` el tipo de la variable (se recomienda [importarlo](/AdvancedFunctions/Import/))
4. `= <minecraft:dirt>;` inicialización de la variable. Como los valores globales son finales, se deben inicializar en su declaración

## Consejo rápido

- Solo puedes acceder a globales que ya han sido declaradas Usa la [Prioridad](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) para asegurarte de que los scripts que contienen las variables globales se ejecutan en primer lugar.
- Las globales no pueden estar en scripts que se encuentran en subcarpetas. Se compilará pero quedará con un enorme Error.
- Aunque técnicamente se puede omitir el cast, se recomienda dejarlo ya que puede causar errores. Además, hace tu declaración más clara para quien lee tu script.
- Variables locales pueden sobreescribir variables globales El script usará la más local antes que la global cuando intente usar las variables.
# Variables globales y estáticas

Alguna vez has estado en una situación en la que has declarado la misma variable de la misma forma en cada script una y otra vez.</br> "¿No hay ninguna manera de hacer una variable disponible en todos los scripts?" es lo que te habrás preguntado seguramente.

Para esto mismo sirve esta forma de declarar y acceder a variables globales y estáticas.</br> No pueden ser alteradas.

## La diferencia entre estática y global

Ambas son creadas antes de que se ejecute el script.</br> Ambas son immutables.</br> La diferencia es como se acceden:</br> Las globales se pueden acceder en cualquier parte con solo usar el nombre, a no ser que tengas una variable con el mismo nombre en ese script.</br> Las estáticas deben usar [Referencia A Través de Scripts](/AdvancedFunctions/Cross-Script_Reference/).

Las Globales se crean con la palabra clave `global`.</br> Las Estáticas con `static`

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
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


global myGlobalValue as IItemStack = <minecraft:dirt>;
static myStaticValue as IItemStack = <minecraft:sand>;
```

Okay, let's break it down, shall we?

1. `global` keyword that indicates the declaration of a global value
2. `myGlobalValue` the name of the value
3. `as IItemStack` the type of the value (It is recommended to [import](/AdvancedFunctions/Import/) the types before casting the variable)
4. `= <minecraft:dirt>;` value initialization. As global values are final, you need to initialize them whilst declaring them!

## Words of advice

- You can only access globals that have already been declared. Use the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) to make sure the scripts in which global are declared are executed first.
- Globals cannot be declared in scripts that are inside subfolders! It will compile but you will be left with a huge FieldNotFound Exception.
- While it is technically possible to omit the `as` part, it is recommended leaving it in, as the IAny interface is not fully functional yet. Also, it makes your declaration more clear for people reading/debugging your script!
- Local variables/values CAN overshadow global variables. The script will always search the innermost scope for variables and go outwards until it hits global when searching for keywords!
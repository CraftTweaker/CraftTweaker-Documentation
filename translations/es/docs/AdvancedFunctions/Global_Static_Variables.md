# Variables globales y estáticas

Seguro que ha estado en la situación en la que ha declarado la misma variable en cada guión una y otra vez.  
"¿Por qué no hay forma de hacerlos disponibles en cada script?" ¿Es lo que pasó por tu cabeza en esos momentos.

¡Sean aliviados ahora porque se ha añadido un medio para declarar y acceder a valores globales y (estáticos)!  
No se pueden cambiar, sin embargo.

## Diferencia entre estática y global

Ambos, estáticos y globales son guiones e instanciados antes de que el script sea ejecutado.  
Ambos no pueden ser cambiados.  
La diferencia es cómo se llaman:  
Los globales pueden ser llamados desde cualquier lugar simplemente por su nombre a menos que usted ya tenga una variable local que tenga el mismo nombre.  
Por otra parte, las estáticas necesitan utilizar la referencia de script cruzado [](/AdvancedFunctions/Cross-Script_Reference/) para poder acceder a ellas.

Los globales se crean usando la palabra clave `global` .  
Estáticos se crean usando la palabra clave `static`.

Aparte de eso, ¡son idénticos!

## Declarando un valor global

Declarar un valor global es tan simple como declarar un valor local:

```zenscript
import crafttweaker.item.IItemStack;


global myGlobalValue as ItemStack = <minecraft:dirt>;
static myStaticValue as ItemStack = <minecraft:sand>;
```

Vale, vamos a romperlo, ¿no?

1. `palabra clave` global que indica la declaración de un valor global
2. `myGlobalValue` el nombre del valor
3. `como ItemStack` el tipo del valor (Se recomienda [importar](/AdvancedFunctions/Import/) los tipos antes de lanzar la variable)
4. `= <minecraft:dirt>;` inicialización de valor. Como los valores globales son finales, ¡necesita inicializarlos mientras se declaran!

## Palabras de consejos

- Sólo puede acceder a los globales que ya han sido declarados. Use the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) to make sure the scripts in which global are declared are executed first.
- Los globales no pueden ser declarados en scripts que están dentro de subcarpetas! Se compilará pero quedará con una enorme Excepción FieldNotFound .
- Aunque técnicamente es posible omitir el `como` parte, se recomienda dejarlo dentro, ya que la interfaz de IAny aún no es totalmente funcional. ¡Además, hace que su declaración sea más clara para la gente leyendo/depurando su script!
- Variables/valores locales CAN eclipsa variables globales. El script siempre buscará el alcance más interior de variables y saldrá hacia afuera hasta que alcance global cuando busque palabras clave!
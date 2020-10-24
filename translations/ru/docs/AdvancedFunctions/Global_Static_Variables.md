# Глобальные и статические переменные

Наверно вы были в ситуации, когда объявляли одну и ту же переменную в каждом скрипте снова и снова.  
"Почему нет другого способа сделать их доступными в каждом скрипте?" — что-то такое приходило вам в голову каждый раз.

Почувствуйте облегчение — для этого есть способ объявить доступное глобально либо привязанное к скрипту (статическое) значение.  
Изменить их, однако, нельзя.

## Разница между статическими и глобальными

Both, statics and globals are scriptbound and instantiated before the script is executed.  
Both cannot be changed.  
The difference is how they are called:  
Globals can be called from everywhere simply by their name unless you already have a local variable that has the same name.  
Statics on the other hand, need to use the [cross-script reference](/AdvancedFunctions/Cross-Script_Reference/) to be accessed.

Globals are created using the `global` keyword.  
Statics are created using the `static` keyword.

Aside from that, they are identical!

## Объявление глобального значения

Объявление глобального значения так же просто, как объявление локального:

```zenscript
import crafttweaker.item.IItemStack;


global myGlobalValue as IItemStack = <minecraft:dirt>;
static myStaticValue as IItemStack = <minecraft:sand>;
```

Окей, давайте разберем этот пример:

1. `global` &mdash; ключевое слово, которое обозначает объявление глобального значения.
2. `myGlobalValue` &mdash; название этого значения.
3. `as IItemStack` the type of the value (It is recommended to [import](/AdvancedFunctions/Import/) the types before casting the variable)
4. `= <minecraft:dirt>;` &mdash; инициализация значения. Так как глобальные значения неизменяемые, вы должны инициализировать их во время объявления!

## Советы

- You can only access globals that have already been declared. Use the [Priority Preprocessor](/AdvancedFunctions/Preprocessors/PriorityPreprocessor/) to make sure the scripts in which global are declared are executed first.
- Globals cannot be declared in scripts that are inside subfolders! It will compile but you will be left with a huge FieldNotFound Exception.
- While it is technically possible to omit the `as` part, it is recommended leaving it in, as the IAny interface is not fully functional yet. Also, it makes your declaration more clear for people reading/debugging your script!
- Local variables/values CAN overshadow global variables. The script will always search the innermost scope for variables and go outwards until it hits global when searching for keywords!
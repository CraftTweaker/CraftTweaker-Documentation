# Связь между скриптами

All scripts that have [static variables](/AdvancedFunctions/Global_Static_Variables/) or [custom functions](/AdvancedFunctions/Custom_Functions/) are registered to the cross-script reference.  
This allows you to access these fields/functions using the dot-notation.

## Характеристики

- Ссылки между скриптами начинаются с `scripts.`
- Вы можете указать относительный путь в папке scripts (например `scripts.мояПодпапка.a.zs`)
- Вы можете использовать обращение через точку в [операторе импорта](/AdvancedFunctions/Import/), если хотите.
- ZS сначала проверяет подходящие папки, а затем подходящие файлы или значения.



## Пример
Допустим, у нас есть два скрипта `a.zs` и `b.zs`.

a.zs:
```zenscript
static myVal as string = "мое значение";

function makeLine() {
    print("---------------");
}
```

b.zs
```zenscript
print(scripts.a.myVal);
scripts.a.makeLine();
```
# Связь между скриптами

Все скрипты, которые имеют[статические переменные](/AdvancedFunctions/Global_Static_Variables/) или [пользовательские функции](/AdvancedFunctions/Custom_Functions/) доступны для связи между скриптами.  
Это позволяет вам иметь доступ к этим полям/функциями через обращением с помощью точек.

## Характеристики

- Ссылки между скриптами начинаются с `scripts.`
- You specify the path relative from the scripts folder (e.g. `scripts.mySubfolder.a.zs`)
- You can use the dot-notation in an [import statement](/AdvancedFunctions/Import/) should you choose to do so.
- ZS first checks for matching directories then for matching files or values.

## Example

Let's say we have two scripts: `a.zs` and `b.zs`.

a.zs:

```kotlin
static myVal as string = "myVal";

function makeLine() {
    print("---------------");
}
```

b.zs

```kotlin
print(scripts.a.myVal);
scripts.a.makeLine();
```
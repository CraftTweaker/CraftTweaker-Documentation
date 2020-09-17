# ZenDoc

`Аннотация @ZenDoc` позволяет разработчикам предоставить дополнительную информацию команде `/ct dumpZS` .  
Более конкретно, он будет выглядеть так:

![img](assets/zenDoc.png)

## Пример

[Проект ZenDoc для тестирования ремесла](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ZenDocWiki.java)

```java
@ZenClass(value = "crafttweaker.tests. enDoc")
@ZenRegister
публичный класс ZenDocWiki {
    @ZenMethod
    @ZenDoc("Это выводит предупреждение")
    public static void print() {
        CraftTweakerAPI. ogWarning("Печать вызвана!");
    }
}
```

## Какие методы могут быть аннотированы || Дополнительная информация

- Вы можете помечать все методы: и статические, и нет.
- В настоящее время это повлияет только на созданный HTML файл при запуске [`/ct дамп`](/Vanilla/Commands/).
- Эта аннотация занимает одну строку как значение, которое является дополнительной информацией, которая должна быть напечатана.
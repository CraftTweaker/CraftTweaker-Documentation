# ModOnly

Аннотация `@ModOnly` так же проста, как и предполагает название:  
Она регистрирует класс ZenScript, только если данный мод загружен.

## Пример

[ModOnly из тестового проекта CraftTweaker:](https://github.com/jaredlll08/CraftTweaker/tree/1.12/CraftTweaker2-MC1120-Tests/src/main/java/crafttweaker/tests/wiki/ModOnlyWiki.java)

```java
@ModOnly(value = "mcp")
@ZenClass(value = "crafttweaker.tests.modOnly")
@ZenRegister
public class ModOnlyWiki {
    @ZenMethod
    public static void print() {
        CraftTweakerAPI.logInfo("вызван print!");
    }
}
```

## Какие классы должны быть помечены || Дополнительная информация

- Вы можете пометить все классы Java, которые также имеют [ аннотацию `@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/). Технически, вы можете регистрировать все классы, но польза будет только в таком случае.
- Аннотация принимает строку, которая представляет имя мода (`isModLoaded(annotation.getValue())` должно возвращать истинное значение, если мод загружен).
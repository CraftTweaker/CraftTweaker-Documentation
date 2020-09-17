# ZenClass

ZenClass - это java класс, который был подвергнут ZenScript.

## Пример

[CraftTweaker's IItemStack](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/item/IItemStack.java)

```java
@ZenClass("crafttweaker.item.IItemStack")
@ZenRegister
публичный интерфейс IItemStack расширяет IIngredient {
    //Вырезать, чтобы держать страницу короткой
}
```

Фактическая реализация не нуждается в аннотации.

## Какие классы должны быть помечены || Дополнительная информация

- Вы можете аннотировать все классы Java
- Вы должны дать аннотации значение строки (например, `crafttweaker.item.IItemStack`). Это будет внутреннее имя ZS для класса.
- После объявления класса ZenClass, необходимо зарегистрировать его. Рекомендуется использовать [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) для этого
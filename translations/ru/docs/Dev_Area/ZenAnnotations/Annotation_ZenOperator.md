# ZenOperator

Метод, отмеченный аннотацией `@ZenOperator` не может быть вызван, как обычно, и вместо этого использует токены вроде `+`, `!` и тому подобные.

## Пример

[IData из CraftTweaker:](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/data/IData.java)

```java
@ZenClass("crafttweaker.data.IData")
@ZenRegister
public interface IData {

    @ZenOperator(OperatorType.ADD)
    IData add(IData other);

    @ZenOperator(OperatorType.SUB)
    IData sub(IData other);

    ...
}
```

## Какие методы могут быть аннотированы || Дополнительная информация

- Вы можете нотировать все нестатические методы. Вы должны аннотировать только один метод в [Тип оператора](/Dev_Area/ZenOperators/).
- Аннотированные методы, по крайней мере те, которые имеют связанный токен назначения, должны возвращать тот же тип. (Не используйте предмет + предмет = жидкость!)
- Вы должны дать аннотацию [ZenOperator значение](/Dev_Area/ZenOperators/) (например, `OperatorType.ADD`). Вы можете найти список всех возможных типов операторов [здесь](/Dev_Area/ZenOperators/).
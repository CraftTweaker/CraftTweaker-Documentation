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

- You can annotate all nonstatic methods. You should only annotate one method per [Operator Type](/Dev_Area/ZenOperators/).
- Annotated methods, at least those which have an associated Assign token, should return the same type. (Don't do Item + Item = fluid!)
- You should give the annotation a [ZenOperator value](/Dev_Area/ZenOperators/) (e.g. `OperatorType.ADD`). You can find a list of all possible OperatorTypes [here](/Dev_Area/ZenOperators/).
# ZenOperator

注解了 `@ZenOperator` 的方法不能被 实例.方法(参数) 的方式调用，而是只使用标记，如 `+`，`!` 等。

## 例子

[CraftTweaker 的 IData](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/data/IData.java)
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

## 什么方法可以被注解 || 额外信息

- 你可以注解所有非静态的方法。 每个[操作符类型](/Dev_Area/ZenOperators/)你只应该注解一个方法。
- 若注解方法至少拥有一个关联分配令牌，返回的类型应当相同 （不要物品 + 物品 = 流体！）
- 你应该给 [ZenOperator 值](/Dev_Area/ZenOperators/)一个注解（如`OperatorType.ADD`） 可于[此处](/Dev_Area/ZenOperators/)找到所有可能的运算符类型（OperatorTypes）列表。
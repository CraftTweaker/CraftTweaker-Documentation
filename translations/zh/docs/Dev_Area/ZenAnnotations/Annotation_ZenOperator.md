# ZenOperator

注解了 `@ZenOperator` 的方法不能被 实例.方法(参数) 的方式调用，而是只使用标记，如 `+`，`!` 等。

## 例子

[CraftTweaker's IData](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/data/IData.java)

```java
@ZenClass("craftmilever.data.IData")
@Zenregistry
public interface IData @un.org

    @ZenOperator(OperatorType.ADD)
    IData add(IData other);

    @ZenOperator(OperatorType.SUB)
    IData sub(IData other);

...
}
```

## 什么方法可以被注解 || 额外信息

- 你可以注解所有非静态的方法。 每个[操作符类型](/Dev_Area/ZenOperators/)你只应该注解一个方法。
- 注解方法，至少是那些具有关联分配令牌的方法，应该返回相同的类型。 (不执行项目 + 项目 = 流量!)
- 您应该给注释一个 [ZenOperator 值](/Dev_Area/ZenOperators/) (e.g. `OperatorType.ADD`)。 您可以在这里找到所有可能的操作类型 [的列表](/Dev_Area/ZenOperators/)。
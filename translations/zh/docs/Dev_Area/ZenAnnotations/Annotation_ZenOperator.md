# ZenOperator

注解了 `@ZenOperator` 的方法不能被 实例.方法(参数) 的方式调用，而是只使用标记，如 `+`，`!` 等。

## 例子

[Crafttweaker 的 IData](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/data/IData.java)

    @ZenClass("crafttweaker.data.IData")
    @ZenRegister
    public interface IData {
    
        @ZenOperator(OperatorType.ADD)
        IData add(IData other);
    
        @ZenOperator(OperatorType.SUB)
        IData sub(IData other);
    
        ...
    }
    

## What methods can be annotated || Additional Info

- 你可以注解所有非静态的方法。 每个[操作符类型](/Dev_Area/ZenOperators/)你只应该注解一个方法。
- Annotated methods, at least those which have an associated Assign token, should return the same type. (Don't do Item + Item = fluid!)
- You should give the annotation a [ZenOperator value](/Dev_Area/ZenOperators/) (e.g. `OperatorType.ADD`). You can find a list of all possible OperatorTypes [here](/Dev_Area/ZenOperators/).
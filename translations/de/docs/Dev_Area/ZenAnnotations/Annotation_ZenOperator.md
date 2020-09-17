# ZenOperator

Eine Methode, die mit `@ZenOperator` kommentiert wurde, kann nicht per Beispiel aufgerufen werden. ethod(Parameter), sondern verwendet stattdessen Tokens wie `+`, `!` und ähnliches.

## Beispiel

[CraftTweaker's IData](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/data/IData.java)

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

## Welche Methoden können kommentiert werden || Zusätzliche Informationen

- Sie können alle nicht-statischen Methoden kommentieren. Sie sollten nur eine Methode pro [Operator Typ](/Dev_Area/ZenOperators/) kommentieren.
- Annotierte Methoden, zumindest solche, die einen zugeordneten Token haben, sollten den gleichen Typ zurückgeben. (Element + Element nicht = Flüssig!)
- Sie sollten der Anmerkung einen [ZenOperator-Wert geben](/Dev_Area/ZenOperators/) (z.B. `OperatorType.ADD`). Eine Liste aller möglichen Operatortypen [finden Sie hier](/Dev_Area/ZenOperators/).
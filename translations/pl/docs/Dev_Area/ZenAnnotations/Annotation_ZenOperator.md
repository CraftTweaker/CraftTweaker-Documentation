# ZenOperator

Metoda opatrzona adnotacją `@ZenOperator` nie może być wywołana na przykład. etod(parametry) ale zamiast tego używa tokenów takich jak `+`, `!` i podobnych.

## Przykład

[CraftTweaker's IData](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/data/IData.java)

```java
@ZenClass("crafttweaker.data.IData")
@ZenRegister
public interface IData {

    @ZenOperator(OperatorType.ADD)
    IData add(IData other);

    @ZenOperator(OperatorType.SUB)
    IData sub(IDane inne);

...
}
```

## Jakie metody mogą być opatrzone || Dodatkowe informacje

- Możesz opatrzyć wszystkie niestatyczne metody. Powinieneś adnotować tylko jedną metodę na [Typ operatora](/Dev_Area/ZenOperators/).
- Metody adnotacji, przynajmniej te, które mają powiązany token przypisania, powinny zwracać ten sam typ. (Nie rób przedmiotu + Przedmiot = płynny!)
- Powinieneś podać adnotację [wartość ZenOperator](/Dev_Area/ZenOperators/) (np. `OperatorType.ADD`). Tutaj możesz znaleźć listę wszystkich możliwych OperatorTypów [](/Dev_Area/ZenOperators/).
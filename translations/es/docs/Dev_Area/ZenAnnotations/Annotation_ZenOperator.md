# ZenOperator

Un método anotado con `@ZenOperator` no puede ser llamado por instancia. ethod(parameters) pero en su lugar utiliza fichas como `+`, `!` y similares.

## Ejemplo

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

## Qué métodos se pueden anotar || Información adicional

- Puede anotar todos los métodos no estáticos. Solo debe anotar un método por [Tipo de operador](/Dev_Area/ZenOperators/).
- Métodos anotados, al menos aquellos que tienen un token de Asignación asociado, deben devolver el mismo tipo. (¡No hagas Elemento + Elemento = ¡fluido!)
- Debe dar la anotación un [valor de ZenOperator](/Dev_Area/ZenOperators/) (por ejemplo, `OperatorType.ADD`). Puede encontrar una lista de todos los tipos de Operador posibles [aquí](/Dev_Area/ZenOperators/).
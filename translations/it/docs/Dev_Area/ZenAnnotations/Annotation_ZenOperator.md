# ZenOperator

Un metodo annotato con `@ZenOperator` non può essere chiamato per istanza. ethod(parametri), ma invece usa Tokens come `+`, `!` e simili.

## Esempio

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

## Quali metodi possono essere annotati <unk> <unk> Ulteriori informazioni

- È possibile annotare tutti i metodi non statici. Dovresti annotare un solo metodo per [Tipo di operatore](/Dev_Area/ZenOperators/).
- I metodi annotati, almeno quelli che hanno un token Assign associato, dovrebbero restituire lo stesso tipo. (Non fare oggetto + elemento = fluido!)
- Dovresti dare all'annotazione un valore [ZenOperator](/Dev_Area/ZenOperators/) (es. `OperatorType.ADD`). Puoi trovare un elenco di tutti i possibili Tipi di Operatori [qui](/Dev_Area/ZenOperators/).
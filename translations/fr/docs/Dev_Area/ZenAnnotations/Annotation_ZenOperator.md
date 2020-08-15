# ZenOperator

Une méthode annotée avec `@ZenOperator` ne peut pas être appelée par instance. ethod(paramètres) mais utilise à la place des jetons comme `+`, `!` et autres.

## Exemple

[CraftTweaker's IData](https://github.com/jaredlll08/CraftTweaker/blob/1.12/CraftTweaker2-API/src/main/java/crafttweaker/api/data/IData.java)

```java
@ZenClass("crafttweaker.data.IData")
@ZenRegister
interface publique IData {

    @ZenOperator(OperatorType.ADD)
    IData add(IData other);

    @ZenOperator(OperatorType.SUB)
    IData sub(IData other);

...
}
```

## Quelles méthodes peuvent être annotées || Informations supplémentaires

- Vous pouvez annoter toutes les méthodes non statiques. Vous ne devez annoter qu'une seule méthode par [type d'opérateur](/Dev_Area/ZenOperators/).
- Les méthodes annotées, au moins celles qui ont un jeton Assign associé, doivent retourner le même type. (Ne pas faire Item + Item = fluide!)
- Vous devez donner à l'annotation une [valeur ZenOperator](/Dev_Area/ZenOperators/) (par exemple `OperatorType.ADD`). Vous pouvez trouver une liste de tous les types d'opérateurs possibles [ici](/Dev_Area/ZenOperators/).
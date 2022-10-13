# And

Builder to create an 'AND' loot condition.

 All sub-conditions added to this loot condition must match in order for this condition to pass. Effectively, this means all sub-conditions get merged with an 'AND' connector between them.

 This loot condition should have two or more sub-conditions. An 'And' loot condition with a single element behaves as if it were replaced with the sub-condition itself. An 'And' loot condition without any sub-conditions passes directly.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.crafttweaker.And;
```


## Interfacce Implementate
And implements the following interfaces. That means all methods defined in these interfaces are also available in And

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Metodi

:::group{name=add}

Adds a new condition to the list of sub-conditions that will get merged together into an 'AND' condition.

 At least two sub-conditions should be added to obtain a well-built and well-behaved 'And' loot condition.

Returns: This condition for chaining.  
Return Type: [And](/vanilla/api/loot/conditions/crafttweaker/And)

```zenscript
And.add<T : ILootConditionTypeBuilder>(lender as Consumer<T>) as And
```

| Parametro | Tipo                                                                                | Descrizione                                                  |
| --------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| lender    | Consumer&lt;T&gt;                                                       | A consumer that allows configuration of the given condition. |
| T         | [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder) | The known type of the condition itself.                      |


:::



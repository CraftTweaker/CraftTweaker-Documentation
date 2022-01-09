# BlockTag

Builder to create a 'BlockTag' loot condition.

 The condition passes only if the block obtained from the [LootContext](/vanilla/api/loot/LootContext) is contained from within the given tag.

 A 'BlockTag' loot condition requires a block tag to be built.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.crafttweaker.BlockTag;
```


## Interfacce Implementate
BlockTag implements the following interfaces. That means all methods defined in these interfaces are also available in BlockTag

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Metodi

:::group{name=withTag}

Sets the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; that the condition must check.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [BlockTag](/vanilla/api/loot/conditions/crafttweaker/BlockTag)

```zenscript
BlockTag.withTag(tag as MCTag<MCBlock>) as BlockTag
```

| Parametro | Tipo                                                                                      | Descrizione       |
| --------- | ----------------------------------------------------------------------------------------- | ----------------- |
| tag       | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCBlock](/vanilla/api/block/MCBlock)&gt; | The tag to check. |


:::



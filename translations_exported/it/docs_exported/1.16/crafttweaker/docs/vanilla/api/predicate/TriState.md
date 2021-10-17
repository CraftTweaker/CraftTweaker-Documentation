# TriState

Represents a value that can assume three values, instead of a simple boolean that can only assume two values.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.TriState;
```


## Extending Enum&lt;TriState&gt;

TriState extends Enum&lt;[TriState](/vanilla/api/predicate/TriState)&gt;. That means all methods available in Enum&lt;[TriState](/vanilla/api/predicate/TriState)&gt; are also available in TriState

## Static Properties

| Nome  | Tipo                                        | Ha Getter | Ha Setter | Descrizione                                                                                                                             |
| ----- | ------------------------------------------- | --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| FALSE | [TriState](/vanilla/api/predicate/TriState) | sì        | no        | The false value of the TriState. <br />  <br />  It can be considered the same as a boolean's 'false' value.                |
| TRUE  | [TriState](/vanilla/api/predicate/TriState) | sì        | no        | The true value of the TriState. <br />  <br />  It can be considered the same as a boolean's 'true' value.                  |
| UNSET | [TriState](/vanilla/api/predicate/TriState) | sì        | no        | The unset value of the TriState. <br />  <br />  It represents the lack of a state or a decision that hasn't been made yet. |


# TriState

Represents a value that can assume three values, instead of a simple boolean that can only assume two values.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.TriState;
```


## Extending Enum&lt;TriState&gt;

TriState extends Enum&lt;[TriState](/vanilla/api/predicate/TriState)&gt;. That means all methods available in Enum&lt;[TriState](/vanilla/api/predicate/TriState)&gt; are also available in TriState

## Static Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| FALSE | [TriState](/vanilla/api/predicate/TriState) | true | false | The false value of the TriState. <br />  <br />  It can be considered the same as a boolean's 'false' value. |
| TRUE | [TriState](/vanilla/api/predicate/TriState) | true | false | The true value of the TriState. <br />  <br />  It can be considered the same as a boolean's 'true' value. |
| UNSET | [TriState](/vanilla/api/predicate/TriState) | true | false | The unset value of the TriState. <br />  <br />  It represents the lack of a state or a decision that hasn't been made yet. |


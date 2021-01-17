# IStyle

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.text.IStyle;`

## ZenGetters and ZenSetters

| ZenGetter     | ZenSetter     | Type   |
| ------------- | ------------- | ------ |
| parent        | parent        | IStyle |
| bold          | bold          | bool   |
| italic        | italic        | bool   |
| underline     | underline     | bool   |
| strikethrough | strikethrough | bool   |
| obfuscated    | obfuscated    | bool   |
| insertion     | insertion     | bool   |
| color         | color         | string |

## ZenMethods

- IStyle createShallowCopy();

Creates a shallow copy of this style. Changes to this instance's values will not be reflected in the copy, but changes to the parent style's values WILL be reflected in both this instance and the copy, wherever either does not override a value.

- IStyle createDeepCopy();

Creates a deep copy of this style. No changes to this instance or its parent style will be reflected in the copy.

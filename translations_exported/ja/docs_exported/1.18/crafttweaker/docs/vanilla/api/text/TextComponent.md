# TextComponent

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.TextComponent;
```


## Extending BaseComponent

TextComponent extends [BaseComponent](/vanilla/api/text/BaseComponent). That means all methods available in [BaseComponent](/vanilla/api/text/BaseComponent) are also available in TextComponent

## Constructors


```zenscript
new TextComponent(text as string) as TextComponent
```
| Parameter | Type   |
| --------- | ------ |
| テキスト      | string |



## Methods

:::group{name=getText}

Return Type: string

```zenscript
// TextComponent.getText() as string

myTextComponent.getText();
```

:::


## Properties

| 名称   | Type   | Has Getter | Has Setter |
| ---- | ------ | ---------- | ---------- |
| テキスト | string | true       | false      |


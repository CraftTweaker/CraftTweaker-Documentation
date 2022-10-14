# TextComponent

## Importare la Classe

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
| Parametro | Tipo   | Descrizione                 |
| --------- | ------ | --------------------------- |
| testo     | string | Nessuna descrizione fornita |



## Metodi

:::group{name=getText}

Return Type: string

```zenscript
// TextComponent.getText() as string

myTextComponent.getText();
```

:::


## Proprietà

| Nome  | Tipo   | Ha Getter | Ha Setter | Descrizione             |
| ----- | ------ | --------- | --------- | ----------------------- |
| testo | string | sì        | no        | No Description Provided |


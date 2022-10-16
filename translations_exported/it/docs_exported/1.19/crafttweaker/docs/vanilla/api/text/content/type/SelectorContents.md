# SelectorContents

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.SelectorContents;
```


## Interfacce Implementate
SelectorContents implements the following interfaces. That means all methods defined in these interfaces are also available in SelectorContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## Metodi

:::group{name=getPattern}

Return Type: string

```zenscript
// SelectorContents.getPattern() as string

mySelectorContents.getPattern();
```

:::

:::group{name=getSeparator}

Return Type: [Component](/vanilla/api/text/Component)?

```zenscript
// SelectorContents.getSeparator() as Component?

mySelectorContents.getSeparator();
```

:::


## Proprietà

| Nome      | Tipo                                      | Ha Getter | Ha Setter |
| --------- | ----------------------------------------- | --------- | --------- |
| pattern   | string                                    | sì        | no        |
| separator | [Component](/vanilla/api/text/Component)? | sì        | no        |


# NbtContents

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.NbtContents;
```


## Interfacce Implementate
NbtContents implements the following interfaces. That means all methods defined in these interfaces are also available in NbtContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## Metodi

:::group{name=getNbtPath}

Return Type: string

```zenscript
// NbtContents.getNbtPath() as string

myNbtContents.getNbtPath();
```

:::

:::group{name=getSeparator}

Return Type: [Component](/vanilla/api/text/Component)?

```zenscript
// NbtContents.getSeparator() as Component?

myNbtContents.getSeparator();
```

:::

:::group{name=isInterpreting}

Return Type: boolean

```zenscript
// NbtContents.isInterpreting() as boolean

myNbtContents.isInterpreting();
```

:::


## Proprietà

| Nome           | Tipo                                      | Ha Getter | Ha Setter |
| -------------- | ----------------------------------------- | --------- | --------- |
| isInterpreting | boolean                                   | sì        | no        |
| nbtPath        | string                                    | sì        | no        |
| separator      | [Component](/vanilla/api/text/Component)? | sì        | no        |


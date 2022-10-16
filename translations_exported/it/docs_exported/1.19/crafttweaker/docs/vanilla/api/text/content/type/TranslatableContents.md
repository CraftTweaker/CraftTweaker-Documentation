# TranslatableContents

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.TranslatableContents;
```


## Interfacce Implementate
TranslatableContents implements the following interfaces. That means all methods defined in these interfaces are also available in TranslatableContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## Metodi

:::group{name=getArgs}

Return Type: string[]

```zenscript
// TranslatableContents.getArgs() as string[]

myTranslatableContents.getArgs();
```

:::

:::group{name=getKey}

Return Type: string

```zenscript
// TranslatableContents.getKey() as string

myTranslatableContents.getKey();
```

:::


## Proprietà

| Nome | Tipo     | Ha Getter | Ha Setter |
| ---- | -------- | --------- | --------- |
| args | string[] | sì        | no        |
| key  | string   | sì        | no        |


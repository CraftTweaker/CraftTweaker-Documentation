# ScoreContents

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.text.content.type.ScoreContents;
```


## Interfacce Implementate
ScoreContents implements the following interfaces. That means all methods defined in these interfaces are also available in ScoreContents

- [ComponentContents](/vanilla/api/text/content/ComponentContents)

## Metodi

:::group{name=getName}

Return Type: string

```zenscript
// ScoreContents.getName() as string

myScoreContents.getName();
```

:::

:::group{name=getObjective}

Return Type: string

```zenscript
// ScoreContents.getObjective() as string

myScoreContents.getObjective();
```

:::


## Proprietà

| Nome      | Tipo   | Ha Getter | Ha Setter |
| --------- | ------ | --------- | --------- |
| nome      | string | sì        | no        |
| objective | string | sì        | no        |


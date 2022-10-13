# MCRedirectModifier

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCRedirectModifier;
```


## Constructors

No Description Provided
```zenscript
new MCRedirectModifier(fun as Function<MCCommandContext,Collection<MCCommandSource>>) as MCRedirectModifier
```
| Parametro  | Tipo                                                                                                                                                                                        | Descrizione             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| divertente | Function&lt;[MCCommandContext](/vanilla/api/commands/custom/MCCommandContext),Collection&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;&gt; | No Description Provided |



## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| string         | sì        |

## Metodi

:::group{name=apply}

Return Type: Collection&lt;[MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
MCRedirectModifier.apply(context as MCCommandContext) as Collection<MCCommandSource>
```

| Parametro | Tipo                                                              | Descrizione             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| contesto  | [MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | No Description Provided |


:::

:::group{name=equals}

Return Type: boolean

```zenscript
MCRedirectModifier.equals(o as Object) as boolean
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| o         | Object | No Description Provided |


:::

:::group{name=hashCode}

Return Type: int

```zenscript
// MCRedirectModifier.hashCode() as int

myMCRedirectModifier.hashCode();
```

:::

:::group{name=toString}

Return Type: string

```zenscript
// MCRedirectModifier.toString() as string

myMCRedirectModifier.toString();
```

:::


## Operators

:::group{name=EQUALS}

```zenscript
myMCRedirectModifier == o come oggetto
```

:::



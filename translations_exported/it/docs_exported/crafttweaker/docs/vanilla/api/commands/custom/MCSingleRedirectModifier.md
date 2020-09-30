# MCSingleRedirectModifier

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCSingleRedirectModifier
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCSingleRedirectModifier(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCCommandSource>);
```
| Parameter  | Type                                                                                                                                                                                                                                      | Description                 |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| divertente | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Nessuna descrizione fornita |



## Methods
### applica

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCSingleRedirectModifier.apply(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| Parameter | Type                                                                                               | Description                 |
| --------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| contesto  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Nessuna descrizione fornita |


### equals

Return type: boolean

```zenscript
myMCSingleRedirectModifier.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### hashCode

Return type: int

```zenscript
myMCSingleRedirectModifier.hashCode();
```

### toString

Return type: String

```zenscript
myMCSingleRedirectModifier.toString();
```


## Operators
### EQUALS

```zenscript
myMCSingleRedirectModifier == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |


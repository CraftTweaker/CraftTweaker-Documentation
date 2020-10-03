# MCCommand

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCCommand
```

## Constructors
```zenscript
new crafttweaker.api.commands.custom.MCCommand(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Integer>);
```
| Parameter  | Type                                                                                                                                             | Description                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| divertente | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Integer&gt; | Nessuna descrizione fornita |



## Methods
### equals

Return type: boolean

```zenscript
myMCCommand.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### hashCode

Return type: int

```zenscript
myMCCommand.hashCode();
```

### esegui

Return type: int

```zenscript
myMCCommand.run(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| Parameter | Type                                                                                               | Description                 |
| --------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| contesto  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Nessuna descrizione fornita |


### toString

Return type: String

```zenscript
myMCCommand.toString();
```


## Operators
### EQUALS

```zenscript
myMCCommand == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |


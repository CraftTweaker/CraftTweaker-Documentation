# MCCommand

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCCommand
```

## Costruttori
```zenscript
new crafttweaker.api.commands.custom.MCCommand(fun as function.Function<crafttweaker.api.commands.custom.MCCommandContext, Integer>);
```
| Parametro  | Tipo                                                                                                                                             | Descrizione                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| divertente | function.Function&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), Integer&gt; | Nessuna descrizione fornita |



## Metodi
### uguale

Tipo restituito: booleano

```zenscript
myMCCommand.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### hashCode

Tipo di restituzione: int

```zenscript
myMCCommand.hashCode();
```

### esegui

Tipo di restituzione: int

```zenscript
myMCCommand.run(context as crafttweaker.api.commands.custom.MCCommandContext);
```

| Parametro | Tipo                                                                                               | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| contesto  | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Nessuna descrizione fornita |


### toString

Tipo di ritorno: Stringa

```zenscript
myMCCommand.toString();
```


## Operatori
### EQUALI

```zenscript
myMCCommand == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |


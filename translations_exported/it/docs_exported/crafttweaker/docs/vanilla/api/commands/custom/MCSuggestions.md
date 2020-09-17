# MCSuggestions

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCSuggestions
```

## Metodi
### crea

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.create(comando come stringa, suggerimenti come raccolta<crafttweaker.api.commands.custom.MCSuggestion>);
```

| Parametro    | Tipo                                                                                                                     | Descrizione                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| comando      | Stringa                                                                                                                  | Nessuna descrizione fornita |
| suggerimenti | Collezione&lt;[crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)&gt; | Nessuna descrizione fornita |


### vuoto

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.empty();
```

### uguale

Tipo restituito: booleano

```zenscript
myMCSuggestions.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### getList

Tipo di ritorno: Lista&lt;com.mojang.brigadier.suggestion.Suggestion&gt;

```zenscript
myMCSuggestions.getList();
```

### getRange

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestions.getRange();
```

### hashCode

Tipo di restituzione: int

```zenscript
myMCSuggestions.hashCode();
```

### isEmpty

Tipo restituito: booleano

```zenscript
myMCSuggestions.isEmpty();
```

### unisci

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
crafttweaker.api.commands.custom.MCSuggestions.merge(comando come stringa, input come raccolta<crafttweaker.api.commands.custom.MCSuggestions>);
```

| Parametro | Tipo                                                                                                                       | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| comando   | Stringa                                                                                                                    | Nessuna descrizione fornita |
| input     | Collezione&lt;[crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Nessuna descrizione fornita |


### toString

Tipo di ritorno: Stringa

```zenscript
myMCSuggestions.toString();
```


## Operatori
### EQUALI

```zenscript
myMCSuggestions == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |


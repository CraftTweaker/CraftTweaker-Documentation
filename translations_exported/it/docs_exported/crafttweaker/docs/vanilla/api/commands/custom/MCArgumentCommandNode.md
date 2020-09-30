# MCArgumentCommandNode

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCArgumentCommandNode
```

## Interfacce Implementate
MCArgumentCommandNode implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methods
### createBuilder

Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCArgumentCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCArgumentCommandNode.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### getCustomSuggestions

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCArgumentCommandNode.getCustomSuggestions();
```

### hashCode

Return type: int

```zenscript
myMCArgumentCommandNode.hashCode();
```

### toString

Return type: String

```zenscript
myMCArgumentCommandNode.toString();
```


## Operators
### EQUALS

```zenscript
myMCArgumentCommandNode == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |


# MCLiteralCommandNode

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Interfacce Implementate
MCLiteralCommandNode implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methods
### createBuilder

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCLiteralCommandNode.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### getLiteral

Return type: String

```zenscript
myMCLiteralCommandNode.getLiteral();
```

### hashCode

Return type: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Return type: boolean

```zenscript
myMCLiteralCommandNode.isValidInput(input as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| input     | String | Nessuna descrizione fornita |


### toString

Return type: String

```zenscript
myMCLiteralCommandNode.toString();
```


## Operators
### EQUALS

```zenscript
myMCLiteralCommandNode == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |


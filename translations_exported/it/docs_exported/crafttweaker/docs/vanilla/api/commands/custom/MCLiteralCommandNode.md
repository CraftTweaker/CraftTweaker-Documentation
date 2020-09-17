# MCLiteralCommandNode

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Interfacce Implementate
MCLiteralCommandNode implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Metodi
### createBuilder

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### uguale

Tipo restituito: booleano

```zenscript
myMCLiteralCommandNode.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### getLiteral

Tipo di ritorno: Stringa

```zenscript
myMCLiteralCommandNode.getLiteral();
```

### hashCode

Tipo di restituzione: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isValidInput

Tipo restituito: booleano

```zenscript
myMCLiteralCommandNode.isValidInput(input as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| input     | Stringa | Nessuna descrizione fornita |


### toString

Tipo di ritorno: Stringa

```zenscript
myMCLiteralCommandNode.toString();
```


## Operatori
### EQUALI

```zenscript
myMCLiteralCommandNode == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |


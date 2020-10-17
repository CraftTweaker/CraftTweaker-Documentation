# TextFormatting

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.text.TextFormatting
```

## Interfacce Implementate
TextFormatting implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Properties

| Name          | Type    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| colorIndex    | int     | true      | false     |
| commandString | String  | true      | false     |
| fancyStyling  | boolean | true      | false     |
| friendlyName  | String  | true      | false     |
| isColor       | boolean | true      | false     |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |


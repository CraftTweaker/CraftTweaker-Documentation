# DirectionAxis

Represents a direction axis (X, Y, Z)

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Interfacce Implementate
DirectionAxis implements the following interfaces. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### getCoordinate

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Restituisce un intero

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Parametro | Tipo | Descrizione               |
| --------- | ---- | ------------------------- |
| x         | int  | x value of the coordinate |
| y         | int  | y value of the coordinate |
| z         | int  | z value of the coordinate |



## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | String  | sì        | no        |
| horizontal    | boolean | sì        | no        |
| nome          | String  | sì        | no        |
| ordinal       | int     | sì        | no        |
| vertical      | boolean | sì        | no        |


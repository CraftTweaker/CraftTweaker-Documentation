# DirectionAxis

Rappresenta un asse di direzione (X, Y, Z)

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Interfacce Implementate
DirectionAxis implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Metodi
### getCoordinate

Ottiene le coordinate di questo asse in base ai valori indicati, se questo asse è "X", restituirà il valore del parametro "x"

Restituisce un intero

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Parametro | Tipo | Descrizione               |
| --------- | ---- | ------------------------- |
| x         | int  | x valore delle coordinate |
| y         | int  | valore y della coordinata |
| z         | int  | valore z della coordinata |



## Proprietà

| Nome          | Tipo    | Ha Getter | Ha Setter |
| ------------- | ------- | --------- | --------- |
| commandString | Stringa | vero      | falso     |
| orizzontale   | boolean | vero      | falso     |
| nome          | Stringa | vero      | falso     |
| ordinale      | int     | vero      | falso     |
| verticale     | boolean | vero      | falso     |


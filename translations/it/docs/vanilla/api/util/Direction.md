# Direzione

Rappresenta una direzione cardinale (nord, sud, est, ovest) e (su e giù).

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.Direction
```

## Metodi
### rotateIntorno

Ruota questa direzione attorno a un determinato asse

Restituisce [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(axis as crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Parametro | Tipo                                                                   | Descrizione               |
| --------- | ---------------------------------------------------------------------- | ------------------------- |
| asse      | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | l'asse da ruotare intorno |


### rotateY

Ruota questa direzione sull'asse Y

 Restituisce: `la direzione che ha ruotato sull'asse Y di questa direzione`

Restituisce [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Ruota questa direzione in senso antiorario sull'asse Y

 Restituisce: `la direzione in senso antiorario sull'asse Y`

Restituisce [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Proprietà

| Nome               | Tipo                                                                   | Ha Getter | Ha Setter |
| ------------------ | ---------------------------------------------------------------------- | --------- | --------- |
| asse               | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | vero      | falso     |
| axisOffset         | int                                                                    | vero      | falso     |
| orizzontale Angolo | galleggiante                                                           | vero      | falso     |
| horizontalIndex    | int                                                                    | vero      | falso     |
| indice             | int                                                                    | vero      | falso     |
| nome               | Stringa                                                                | vero      | falso     |
| opposto            | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vero      | falso     |
| xOffset            | int                                                                    | vero      | falso     |
| yOffset            | int                                                                    | vero      | falso     |
| zOffset            | int                                                                    | vero      | falso     |


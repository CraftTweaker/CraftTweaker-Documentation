# Direzione

Rappresenta una direzione cardinale (nord, sud, est, ovest) e (su e giù).

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.Direction
```

## Metodi
### rotateY

Ruota questa direzione sull'asse Y

 Restituisce: `la direzione che ha ruotato sull'asse Y di questa direzione`

Tipo restituito: [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Ruota questa direzione in senso antiorario sull'asse Y

 Restituisce: `la direzione in senso antiorario sull'asse Y`

Tipo restituito: [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Proprietà

| Nome               | Tipo                                                                   | Ha Getter | Ha Setter |
| ------------------ | ---------------------------------------------------------------------- | --------- | --------- |
| asse               | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | vero      | falso     |
| axisOffset         | int                                                                    | vero      | falso     |
| giù                | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vero      | vero      |
| est                | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vero      | vero      |
| orizzontale Angolo | galleggiante                                                           | vero      | falso     |
| horizontalIndex    | int                                                                    | vero      | falso     |
| indice             | int                                                                    | vero      | falso     |
| nome               | Stringa                                                                | vero      | falso     |
| nord               | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vero      | vero      |
| opposto            | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vero      | falso     |
| lati               | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)[]       | vero      | vero      |
| sud                | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vero      | vero      |
| su                 | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vero      | vero      |
| ovest              | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vero      | vero      |
| xOffset            | int                                                                    | vero      | falso     |
| yOffset            | int                                                                    | vero      | falso     |
| zOffset            | int                                                                    | vero      | falso     |


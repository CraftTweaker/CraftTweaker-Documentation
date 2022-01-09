# MCFood

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la Classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.food.MCFood
```

## Constructors
```zenscript
new crafttweaker.api.food.MCFood(healing as int, saturation as float);
```
| Parametro  | Tipo  | Descrizione                 |
| ---------- | ----- | --------------------------- |
| healing    | int   | Nessuna descrizione fornita |
| saturation | float | Nessuna descrizione fornita |



## Metodi
### addEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance, probability as float);
```

| Parametro   | Tipo                                                                                          | Descrizione                 |
| ----------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| effect      | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |
| probability | float                                                                                         | Nessuna descrizione fornita |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametro | Tipo                                                                                          | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| effect    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |


### setCanEatWhenFull

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| Parametro      | Tipo    | Descrizione                 |
| -------------- | ------- | --------------------------- |
| canEatWhenFull | boolean | Nessuna descrizione fornita |


### setFastEating

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Parametro  | Tipo    | Descrizione                 |
| ---------- | ------- | --------------------------- |
| fastEating | boolean | Nessuna descrizione fornita |


### setHealing

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| healing   | int  | Nessuna descrizione fornita |


### setMeat

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| meat      | boolean | Nessuna descrizione fornita |


### setSaturation

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| Parametro  | Tipo  | Descrizione                 |
| ---------- | ----- | --------------------------- |
| saturation | float | Nessuna descrizione fornita |



## Proprietà

| Nome           | Tipo    | Ha Getter | Ha Setter |
| -------------- | ------- | --------- | --------- |
| canEatWhenFull | boolean | sì        | no        |
| healing        | int     | sì        | no        |
| isFastEating   | boolean | sì        | no        |
| meat           | boolean | sì        | no        |
| saturation     | float   | sì        | no        |


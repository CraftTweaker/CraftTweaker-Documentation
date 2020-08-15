# MCFood

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.food.MCFood
```

## Costruttori
```zenscript
new crafttweaker.api.food.MCFood(healing as int, saturation as float);
```
| Parametro   | Tipo         | Descrizione                 |
| ----------- | ------------ | --------------------------- |
| guarigione  | int          | Nessuna descrizione fornita |
| saturazione | galleggiante | Nessuna descrizione fornita |



## Metodi
### addEffect

Restituisce [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effetto come crafttweaker.api.potion.MCPotionEffectInstance, probability as float);
```

| Parametro   | Tipo                                                                                          | Descrizione                 |
| ----------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| effetto     | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |
| probabilità | galleggiante                                                                                  | Nessuna descrizione fornita |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Restituisce [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effetto come crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametro | Tipo                                                                                          | Descrizione                 |
| --------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| effetto   | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |


### setCanEatWhenFull

Restituisce [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull come boolean);
```

| Parametro      | Tipo    | Descrizione                 |
| -------------- | ------- | --------------------------- |
| canEatWhenFull | boolean | Nessuna descrizione fornita |


### setFastEating

Restituisce [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Parametro  | Tipo    | Descrizione                 |
| ---------- | ------- | --------------------------- |
| fastEating | boolean | Nessuna descrizione fornita |


### setHealing

Restituisce [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| Parametro  | Tipo | Descrizione                 |
| ---------- | ---- | --------------------------- |
| guarigione | int  | Nessuna descrizione fornita |


### setCarne

Restituisce [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCarne (carne come boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| carne     | boolean | Nessuna descrizione fornita |


### setSaturazione

Restituisce [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturazione come float);
```

| Parametro   | Tipo         | Descrizione                 |
| ----------- | ------------ | --------------------------- |
| saturazione | galleggiante | Nessuna descrizione fornita |



## Proprietà

| Nome           | Tipo         | Ha Getter | Ha Setter |
| -------------- | ------------ | --------- | --------- |
| canEatWhenFull | boolean      | vero      | falso     |
| guarigione     | int          | vero      | falso     |
| isFastEating   | boolean      | vero      | falso     |
| carne          | boolean      | vero      | falso     |
| saturazione    | galleggiante | vero      | falso     |


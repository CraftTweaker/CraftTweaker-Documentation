# MCFood

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.food.MCFood
```

## Constructors
```zenscript
new crafttweaker.api.food.MCFood(healing as int, saturation as float);
```
| Parameter  | Type  | Description                 |
| ---------- | ----- | --------------------------- |
| healing    | int   | Nessuna descrizione fornita |
| saturation | float | Nessuna descrizione fornita |



## Methods
### addEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance, probability as float);
```

| Parameter   | Type                                                                                          | Description                 |
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

| Parameter | Type                                                                                          | Description                 |
| --------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| effect    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nessuna descrizione fornita |


### setCanEatWhenFull

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| Parameter      | Type    | Description                 |
| -------------- | ------- | --------------------------- |
| canEatWhenFull | boolean | Nessuna descrizione fornita |


### setFastEating

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Parameter  | Type    | Description                 |
| ---------- | ------- | --------------------------- |
| fastEating | boolean | Nessuna descrizione fornita |


### setHealing

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| healing   | int  | Nessuna descrizione fornita |


### setMeat

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| Parameter | Type    | Description                 |
| --------- | ------- | --------------------------- |
| meat      | boolean | Nessuna descrizione fornita |


### setSaturation

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| Parameter  | Type  | Description                 |
| ---------- | ----- | --------------------------- |
| saturation | float | Nessuna descrizione fornita |



## Properties

| Name           | Type    | Ha Getter | Ha Setter |
| -------------- | ------- | --------- | --------- |
| canEatWhenFull | boolean | true      | false     |
| healing        | int     | true      | false     |
| isFastEating   | boolean | true      | false     |
| meat           | boolean | true      | false     |
| saturation     | float   | true      | false     |


# MCFood

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.food.MCFood
```

## Constructors
```zenscript
new crafttweaker.api.food.MCFood(healing as int, saturation as float);
```
| Parametr  | Typ                | Opis                    |
| --------- | ------------------ | ----------------------- |
| healing   | odcień             | No description provided |
| nasycenie | zmiennoprzecinkowe | No description provided |



## Metody
### addEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance, probability as float);
```

| Parametr    | Typ                                                                                           | Opis                    |
| ----------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect      | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |
| probability | zmiennoprzecinkowe                                                                            | No description provided |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametr | Typ                                                                                           | Opis                    |
| -------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect   | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### setCanEatWhenFull

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| Parametr       | Typ     | Opis                    |
| -------------- | ------- | ----------------------- |
| canEatWhenFull | boolean | No description provided |


### setFastEating

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Parametr   | Typ     | Opis                    |
| ---------- | ------- | ----------------------- |
| fastEating | boolean | No description provided |


### setHealing

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(healing as int);
```

| Parametr | Typ    | Opis                    |
| -------- | ------ | ----------------------- |
| healing  | odcień | No description provided |


### setMeat

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(meat as boolean);
```

| Parametr | Typ     | Opis                    |
| -------- | ------- | ----------------------- |
| meat     | boolean | No description provided |


### setSaturation

Returns [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| Parametr  | Typ                | Opis                    |
| --------- | ------------------ | ----------------------- |
| nasycenie | zmiennoprzecinkowe | No description provided |



## Właściwości

| Nazwisko       | Typ                | Has Getter | Has Setter |
| -------------- | ------------------ | ---------- | ---------- |
| canEatWhenFull | boolean            | prawda     | fałszywy   |
| healing        | odcień             | prawda     | fałszywy   |
| isFastEating   | boolean            | prawda     | fałszywy   |
| meat           | boolean            | prawda     | fałszywy   |
| nasycenie      | zmiennoprzecinkowe | prawda     | fałszywy   |


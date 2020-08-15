# MCFood

Ta klasa została dodana przez moda z mod-id `crafttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
crafttweaker.api.food.MCFood
```

## Konstruktorzy
```zenscript
nowe rzemieślnik api.food.MCFood(leczenie jak int, nasycenie jako pływak);
```
| Parametr  | Typ                | Opis             |
| --------- | ------------------ | ---------------- |
| gojenie   | odcień             | Nie podano opisu |
| nasycenie | zmiennoprzecinkowe | Nie podano opisu |



## Metody
### dodaj efekt

Zwraca [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(działający jako crafttweaker.api.potion.MCPotionEffectInstance, prawdopodobieństwo jako float);
```

| Parametr           | Typ                                                                                                         | Opis             |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| efekt              | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nie podano opisu |
| prawdopodobieństwo | zmiennoprzecinkowe                                                                                          | Nie podano opisu |


### czyść Efekty

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Zwraca [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(działający jako crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parametr | Typ                                                                                                         | Opis             |
| -------- | ----------------------------------------------------------------------------------------------------------- | ---------------- |
| efekt    | [[PLACEHOLDER] crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Nie podano opisu |


### setCanEatWhenFull

Zwraca [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
miMCFood.setCanEatWhenFull(canEatWhenFull jako boolean);
```

| Parametr       | Typ     | Opis             |
| -------------- | ------- | ---------------- |
| canEatWhenFull | boolean | Nie podano opisu |


### setFastjedzenie

Zwraca [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(zapłodnienie jako boolean);
```

| Parametr     | Typ     | Opis             |
| ------------ | ------- | ---------------- |
| zapłodnienie | boolean | Nie podano opisu |


### uzdatnianie

Zwraca [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
leczenie myMCFood. (leczenie zgodnie z intami);
```

| Parametr | Typ    | Opis             |
| -------- | ------ | ---------------- |
| gojenie  | odcień | Nie podano opisu |


### setMięso

Zwraca [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMięso (mięso jako boolean);
```

| Parametr | Typ     | Opis             |
| -------- | ------- | ---------------- |
| mięso    | boolean | Nie podano opisu |


### Nasycenie

Zwraca [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturacja jako pływak);
```

| Parametr  | Typ                | Opis             |
| --------- | ------------------ | ---------------- |
| nasycenie | zmiennoprzecinkowe | Nie podano opisu |



## Właściwości

| Nazwisko       | Typ                | Posiada Getter | Ma ustawienie |
| -------------- | ------------------ | -------------- | ------------- |
| canEatWhenFull | boolean            | prawda         | fałszywy      |
| gojenie        | odcień             | prawda         | fałszywy      |
| isFastjedzenie | boolean            | prawda         | fałszywy      |
| mięso          | boolean            | prawda         | fałszywy      |
| nasycenie      | zmiennoprzecinkowe | prawda         | fałszywy      |


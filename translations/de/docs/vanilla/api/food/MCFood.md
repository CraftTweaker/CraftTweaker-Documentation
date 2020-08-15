# MCFood

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.food.MCFood
```

## Konstrukteure
```zenscript
neue crafttweaker.api.food.MCFood(Heilung als Int, Sättigung als Float);
```
| Parameter | Type  | Beschreibung                 |
| --------- | ----- | ---------------------------- |
| heilung   | int   | Keine Beschreibung angegeben |
| Sättigung | float | Keine Beschreibung angegeben |



## Methoden
### addierter Effekt

Gibt [craftweaker.api.food zurück. MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(Effekt als crafttweaker.api.potion.MCPotionEffectInstance, Wahrscheinlichkeit als float);
```

| Parameter          | Type                                                                                         | Beschreibung                 |
| ------------------ | -------------------------------------------------------------------------------------------- | ---------------------------- |
| effekt             | [crafttweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance) | Keine Beschreibung angegeben |
| Wahrscheinlichkeit | float                                                                                        | Keine Beschreibung angegeben |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Gibt [craftweaker.api.food zurück. MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(Effekt als crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parameter | Type                                                                                         | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| effekt    | [crafttweaker.api.potion.MCPotionEffectInstanz](/vanilla/api/potions/MCPotionEffectInstance) | Keine Beschreibung angegeben |


### setCanEatWhenFull

Gibt [craftweaker.api.food zurück. MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| Parameter      | Type    | Beschreibung                 |
| -------------- | ------- | ---------------------------- |
| canEatWhenVoll | boolean | Keine Beschreibung angegeben |


### setFastEating

Gibt [craftweaker.api.food zurück. MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating als boolean);
```

| Parameter  | Type    | Beschreibung                 |
| ---------- | ------- | ---------------------------- |
| fast essen | boolean | Keine Beschreibung angegeben |


### sethealing

Gibt [craftweaker.api.food zurück. MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(Heilung wie int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| heilung   | int  | Keine Beschreibung angegeben |


### setFleisch

Gibt [craftweaker.api.food zurück. MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(Fleisch als Boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| Fleisch   | boolean | Keine Beschreibung angegeben |


### setSaturation

Gibt [craftweaker.api.food zurück. MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(Sättigung als float);
```

| Parameter | Type  | Beschreibung                 |
| --------- | ----- | ---------------------------- |
| Sättigung | float | Keine Beschreibung angegeben |



## Eigenschaften

| Name           | Type    | Hat Getter | Hat Setter |
| -------------- | ------- | ---------- | ---------- |
| canEatWhenVoll | boolean | true       | false      |
| heilung        | int     | true       | false      |
| isFastEating   | boolean | true       | false      |
| Fleisch        | boolean | true       | false      |
| Sättigung      | float   | true       | false      |


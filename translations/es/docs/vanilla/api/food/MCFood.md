# MCFood

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.food.MCFood
```

## Constructores
```zenscript
nuevo crafttweaker.api.food.MCFood(curación int, saturation as float);
```
| Parámetro  | Tipo     | Descripción                   |
| ---------- | -------- | ----------------------------- |
| curación   | int      | No se proporcionó descripción |
| saturación | flotante | No se proporcionó descripción |



## Métodos
### añadir efecto

Devuelve [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(efecto como crafttweaker.api.potion.MCPotionEffectInstance, probabilidad como flotante);
```

| Parámetro    | Tipo                                                                                          | Descripción                   |
| ------------ | --------------------------------------------------------------------------------------------- | ----------------------------- |
| efecto       | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No se proporcionó descripción |
| probabilidad | flotante                                                                                      | No se proporcionó descripción |


### clearEffects

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Devuelve [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(efecto como crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parámetro | Tipo                                                                                          | Descripción                   |
| --------- | --------------------------------------------------------------------------------------------- | ----------------------------- |
| efecto    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No se proporcionó descripción |


### setCanEatWhenFull

Devuelve [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull como booleano);
```

| Parámetro      | Tipo    | Descripción                   |
| -------------- | ------- | ----------------------------- |
| canEatWhenFull | boolean | No se proporcionó descripción |


### setFastComing

Devuelve [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastEating as boolean);
```

| Parámetro    | Tipo    | Descripción                   |
| ------------ | ------- | ----------------------------- |
| comer rápido | boolean | No se proporcionó descripción |


### setHealing

Devuelve [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(curación int);
```

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| curación  | int  | No se proporcionó descripción |


### setCarne

Devuelve [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(carne como booleana);
```

| Parámetro | Tipo    | Descripción                   |
| --------- | ------- | ----------------------------- |
| carne     | boolean | No se proporcionó descripción |


### setSaturación

Devuelve [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation as float);
```

| Parámetro  | Tipo     | Descripción                   |
| ---------- | -------- | ----------------------------- |
| saturación | flotante | No se proporcionó descripción |



## Propiedades

| Nombre          | Tipo     | Tiene Obtén | Tiene Setter |
| --------------- | -------- | ----------- | ------------ |
| canEatWhenFull  | boolean  | verdad      | falso        |
| curación        | int      | verdad      | falso        |
| es Comer rápido | boolean  | verdad      | falso        |
| carne           | boolean  | verdad      | falso        |
| saturación      | flotante | verdad      | falso        |


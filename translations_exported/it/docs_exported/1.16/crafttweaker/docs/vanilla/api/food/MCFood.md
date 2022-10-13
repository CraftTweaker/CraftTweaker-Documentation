# MCFood

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.food.MCFood;
```


## Constructors

No Description Provided
```zenscript
new MCFood(healing as int, saturation as float) as MCFood
```
| Parametro  | Tipo  | Descrizione             |
| ---------- | ----- | ----------------------- |
| healing    | int   | No Description Provided |
| saturation | float | No Description Provided |



## Metodi

:::group{name=addEffect}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.addEffect(effect as MCPotionEffectInstance, probability as float) as MCFood
```

| Parametro   | Tipo                                                                  | Descrizione             |
| ----------- | --------------------------------------------------------------------- | ----------------------- |
| effect      | [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No Description Provided |
| probability | float                                                                 | No Description Provided |


:::

:::group{name=clearEffects}

Return Type: void

```zenscript
// MCFood.clearEffects() as void

myMCFood.clearEffects();
```

:::

:::group{name=removeEffect}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.removeEffect(effect as MCPotionEffectInstance) as MCFood
```

| Parametro | Tipo                                                                  | Descrizione             |
| --------- | --------------------------------------------------------------------- | ----------------------- |
| effect    | [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No Description Provided |


:::

:::group{name=setCanEatWhenFull}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setCanEatWhenFull(canEatWhenFull as boolean) as MCFood
```

| Parametro      | Tipo    | Descrizione             |
| -------------- | ------- | ----------------------- |
| canEatWhenFull | boolean | No Description Provided |


:::

:::group{name=setFastEating}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setFastEating(fastEating as boolean) as MCFood
```

| Parametro  | Tipo    | Descrizione             |
| ---------- | ------- | ----------------------- |
| fastEating | boolean | No Description Provided |


:::

:::group{name=setHealing}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setHealing(healing as int) as MCFood
```

| Parametro | Tipo | Descrizione             |
| --------- | ---- | ----------------------- |
| healing   | int  | No Description Provided |


:::

:::group{name=setMeat}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setMeat(meat as boolean) as MCFood
```

| Parametro | Tipo    | Descrizione             |
| --------- | ------- | ----------------------- |
| meat      | boolean | No Description Provided |


:::

:::group{name=setSaturation}

Return Type: [MCFood](/vanilla/api/food/MCFood)

```zenscript
MCFood.setSaturation(saturation as float) as MCFood
```

| Parametro  | Tipo  | Descrizione             |
| ---------- | ----- | ----------------------- |
| saturation | float | No Description Provided |


:::


## Proprietà

| Nome           | Tipo    | Ha Getter | Ha Setter | Descrizione             |
| -------------- | ------- | --------- | --------- | ----------------------- |
| canEatWhenFull | boolean | sì        | no        | No Description Provided |
| healing        | int     | sì        | no        | No Description Provided |
| isFastEating   | boolean | sì        | no        | No Description Provided |
| meat           | boolean | sì        | no        | No Description Provided |
| saturation     | float   | sì        | no        | No Description Provided |


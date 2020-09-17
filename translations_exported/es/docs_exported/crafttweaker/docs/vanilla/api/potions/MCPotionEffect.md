# Efecto de MCPotion

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Interfaces implementadas
MCPotionEffect implementa las siguientes interfaces. Esto significa que cualquier método disponible también puede ser usado en esta clase.
- [crafttweaker.api.brackets.CommandStringMostrar](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### está listo

Tipo de retorno: booleano

```zenscript
myMCPotionEffect.isReady(duración como int, amplificador como int);
```

| Parámetro    | Tipo | Descripción                   |
| ------------ | ---- | ----------------------------- |
| duración     | int  | No se proporcionó descripción |
| amplificador | int  | No se proporcionó descripción |


### newInstance

Tipo de retorno: [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duración como int, amplificador como int);
```

| Parámetro    | Tipo | Descripción                   | Opcional | Valor por defecto |
| ------------ | ---- | ----------------------------- | -------- | ----------------- |
| duración     | int  | No se proporcionó descripción | falso    | `nulo`            |
| amplificador | int  | No se proporcionó descripción | verdad   | `0`               |



## Propiedades

| Nombre              | Tipo                                                                                      | Tiene Obtén | Tiene Setter |
| ------------------- | ----------------------------------------------------------------------------------------- | ----------- | ------------ |
| commandString       | Cadena                                                                                    | verdad      | falso        |
| artículos curativos | Lista&lt;[crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)&gt; | verdad      | falso        |
| nombre de pantalla  | Cadena                                                                                    | verdad      | falso        |
| es beneficioso      | boolean                                                                                   | verdad      | falso        |
| es instantáneo      | boolean                                                                                   | verdad      | falso        |
| color líquido       | int                                                                                       | verdad      | falso        |
| nombre              | Cadena                                                                                    | verdad      | falso        |


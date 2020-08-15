# MCPotionEffectInstance

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## Métodos
### addCurativeItem

```zenscript
myMCPotionEffectInstance.addCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Parámetro | Tipo                                                              | Descripción             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### combine

Returns boolean

```zenscript
myMCPotionEffectInstance.combine(effect as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parámetro | Tipo                                                                                          | Descripción             |
| --------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| effect    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No description provided |


### getCurativeItems

Returns List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)>

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Returns boolean

```zenscript
myMCPotionEffectInstance.isCurativeItem(stack as crafttweaker.api.item.IItemStack);
```

| Parámetro | Tipo                                                              | Descripción             |
| --------- | ----------------------------------------------------------------- | ----------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No description provided |


### setCurativeItems

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parámetro | Tipo                                                                | Descripción             |
| --------- | ------------------------------------------------------------------- | ----------------------- |
| objetos   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No description provided |



## Propiedades

| Nombre        | Tipo                                                                          | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------------------- | ---------- | ---------- |
| ambient       | boolean                                                                       | verdad     | falso      |
| amplificador  | int                                                                           | verdad     | falso      |
| duración      | int                                                                           | verdad     | falso      |
| effectName    | Cadena                                                                        | verdad     | falso      |
| poción        | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | verdad     | falso      |
| showIcon      | boolean                                                                       | verdad     | falso      |
| showParticles | boolean                                                                       | verdad     | falso      |


# MCPotionEffectInstance

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.potion.MCPotionEffectInstance
```

## Métodos
### añadir elemento curativo

```zenscript
myMCPotionEffectInstance.addCurativeItem(pila como crafttweaker.api.item.IItemStack);
```

| Parámetro | Tipo                                                              | Descripción                   |
| --------- | ----------------------------------------------------------------- | ----------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |


### combinar

Tipo de retorno: booleano

```zenscript
myMCPotionEffectInstance.combine(efecto as crafttweaker.api.potion.MCPotionEffectInstance);
```

| Parámetro | Tipo                                                                                          | Descripción                   |
| --------- | --------------------------------------------------------------------------------------------- | ----------------------------- |
| efecto    | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | No se proporcionó descripción |


### Obtener artículos curativos

Tipo de retorno: Lista&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt;

```zenscript
myMCPotionEffectInstance.getCurativeItems();
```

### isCurativeItem

Tipo de retorno: booleano

```zenscript
myMCPotionEffectInstance.isCurativeItem(pila como crafttweaker.api.item.IIItemStack);
```

| Parámetro | Tipo                                                              | Descripción                   |
| --------- | ----------------------------------------------------------------- | ----------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |


### setear artículos curativos

```zenscript
myMCPotionEffectInstance.setCurativeItems(items as crafttweaker.api.item.IItemStack[]);
```

| Parámetro | Tipo                                                                | Descripción                   |
| --------- | ------------------------------------------------------------------- | ----------------------------- |
| objetos   | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | No se proporcionó descripción |



## Propiedades

| Nombre             | Tipo                                                                          | Tiene Obtén | Tiene Setter |
| ------------------ | ----------------------------------------------------------------------------- | ----------- | ------------ |
| ambiente           | boolean                                                                       | verdad      | falso        |
| amplificador       | int                                                                           | verdad      | falso        |
| duración           | int                                                                           | verdad      | falso        |
| effectName         | Cadena                                                                        | verdad      | falso        |
| poción             | [crafttweaker.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect) | verdad      | falso        |
| icono              | boolean                                                                       | verdad      | falso        |
| mostrar partículas | boolean                                                                       | verdad      | falso        |


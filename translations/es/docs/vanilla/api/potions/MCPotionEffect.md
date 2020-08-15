# MCPotionEffect

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Implemented Interfaces
MCPotionEffect implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Métodos
### isReady

Returns boolean

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| Parámetro    | Tipo | Descripción             |
| ------------ | ---- | ----------------------- |
| duración     | int  | No description provided |
| amplificador | int  | No description provided |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| Parámetro    | Tipo | Descripción             | IsOptional | Valor por defecto |
| ------------ | ---- | ----------------------- | ---------- | ----------------- |
| duración     | int  | No description provided | falso      | nulo              |
| amplificador | int  | No description provided | verdad     | 0                 |



## Propiedades

| Nombre              | Tipo                                                                    | Has Getter | Has Setter |
| ------------------- | ----------------------------------------------------------------------- | ---------- | ---------- |
| commandString       | Cadena                                                                  | verdad     | falso      |
| artículos curativos | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | verdad     | falso      |
| nombre de pantalla  | Cadena                                                                  | verdad     | falso      |
| es beneficioso      | boolean                                                                 | verdad     | falso      |
| es instantáneo      | boolean                                                                 | verdad     | falso      |
| color líquido       | int                                                                     | verdad     | falso      |
| nombre              | Cadena                                                                  | verdad     | falso      |


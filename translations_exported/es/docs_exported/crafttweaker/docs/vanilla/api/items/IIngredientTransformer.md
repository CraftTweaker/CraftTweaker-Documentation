# IIngredientTransformador

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.item.IIngredientTransformer
```

## Métodos
### getCommandString

Tipo de retorno: Cadena

```zenscript
myIIngredientTransformer.getCommandString(ingrediente como T);
```

| Parámetro   | Tipo | Descripción                   |
| ----------- | ---- | ----------------------------- |
| ingrediente | T    | No se proporcionó descripción |


### partidas

Tipo de retorno: booleano

```zenscript
myIIngredientTransformer.matches(stack as crafttweaker.api.item.ItemStack);
```

| Parámetro | Tipo                                                              | Descripción                   |
| --------- | ----------------------------------------------------------------- | ----------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | No se proporcionó descripción |




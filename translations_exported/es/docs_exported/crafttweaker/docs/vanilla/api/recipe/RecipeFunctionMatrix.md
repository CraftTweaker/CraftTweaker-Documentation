# Función de la receta

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.receta.Receta de función
```

## Interfaz funcional

Esta clase es una interfaz funcional. Esto significa que puede usar la notación lambda para crear una instancia de ella. La noción de lambda se ve así:
```zenscript
(usual, entradas) => <item:minecraft:dirt>
```
## Métodos
### proceso

Tipo de retorno: [crafttweaker.api.item.ItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionMATIx.process(usualOut como crafttweaker.api.item.ItemStack, entradas como crafttweaker.api.item.IItemStack[][]);
```

| Parámetro        | Tipo                                                                  | Descripción                   |
| ---------------- | --------------------------------------------------------------------- | ----------------------------- |
| usualmente fuera | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)     | No se proporcionó descripción |
| inputs           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[][] | No se proporcionó descripción |




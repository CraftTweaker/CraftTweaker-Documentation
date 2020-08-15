# Ubicación CTResources

Un objeto de ubicación de recursos se usa para decir a minecraft dónde encontrar algo. Consiste en un dominio y un camino.

## Llamar/Importar el paquete

Si no desea escribir el nombre completo del paquete cada vez que utilice un método estático o si encuentra algún problema con la clase en general, podría ser necesario que [importe](/AdvancedFunctions/Import/) la clase:  
`importar mods. ontenttweaker.ResourceLocation`

## Métodos

### Métodos estáticos: Crear

Los métodos estáticos son aquellos que son llamados en el propio paquete, no en ningún objeto específico de esta instancia.  
Puede utilizar este método para crear una nueva instancia de CTResourceLocance:

```zenscript
var instance = mods.contenttweaker.ResourceLocation.create("contenttweaker:item/myItem");
```

### ZenGetters

ZenGetters son llamados a un objeto, no al paquete en sí mismo

```zenscript
print(myLocation.domain);
```

| ZenGetter | Tipo   |
| --------- | ------ |
| dominio   | cadena |
| ruta      | cadena |
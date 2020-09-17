# Reacción Push

Una reacción de empuje es lo que sucede cuando un pistón intenta empujar un bloque.

# Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.PushReaction;`

## Comparando dos reacciones

Puedes ver si dos reacciones son iguales usando el operador `==`.

```zenscript
if(a == b){}
```

## Métodos estáticos

Puede utilizar estos métodos para obtener objetos de PushReact:

```zenscript
mods.contenttweaker.PushReaction.normal();
mods.contenttweaker.PushReaction.destroy();
mods.contenttweaker.PushReaction.block();
mods.contenttweaker.PushReaction.ignore();
mods.contenttweaker.PushReaction.pushOnly();
```
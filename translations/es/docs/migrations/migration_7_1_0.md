# Migrando Scripts a Crafttweaker 7.1 

La versión 7.1 contiene unos cambios que impiden retrocompatibilidad.  
Estos cambios estan en la API que los addons usan además de en los tipos que los scripts requieren.
Este documento debería ayudarte a darte una idea general de cuales son los cambios más importantes y cómo los desarrolladores de modpacks pueden tener scripts que funcionen otra vez.
Si tu versión es superior a 7.1, puedes ignorar esta página.


## MCTag se convertiene en MCTag&LT;T&GT;

Hemos reemplazado las Tags con un sistema genérico que es más extensible y que funcionará mejor con futuras actualizaciones.
Este cambio inutiliza los scripts existentes de dos formas:a

1) Los métodos de añadir y removal especializados han sido eliminados. <br>Ahora puedes usar `add` y `remove` en vez de `addItems`, `addFluids`, y similares. 2) La sintaxis de Paréntesis ahora requiere el tipo de la tag como un parámetro adicional. <br>Ahora, `<tag:forge:gems` se convierte en `<tag:items:forge:gems>`

Los comandos `/ct dump tags` y `/ct hand` han sido actualizados para reflectir estos cambios.
Si necesitas usar una tag con cualquiera de los métodos IIngredient, deberás usar `.asIIngredient()` primero.

Ejemplo de migración
```zenscript
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.MCItemDefinition;
import crafttweaker.api.fluid.MCFluid;

var tagFluidoAntigua = <tag:minecraft:water> as MCTag;
var tagObjetoAntigua = <tag:forge:gems> as MCTag;

var tagFluidoNueva = <tag:fluids:minecraft:water> as MCTag<MCFluid>;
var tagObjetoNueva = <tag:items:forge:gems> as MCTag<MCItemDefinition>;

//Como interactuar
var tagGemaAntigua = <tag:forge:gems>;
tagGemaAntigua.addItems(<item:minecraft:bedrock>);
tagGemaAntigua.removeItems(<item:minecraft:diamond>);

var tagGemaNueva = <tag:items:forge:gems>;
tagGemaNueva.add(<item:minecraft:bedrock>);
tagGemaNueva.remove(<item:minecraft:diamond>);


//Expansiones de IIngredient
var reusarAntigua = <tag:forge:gems>.reuse();
var reusarNuevo = <tag:items:forge:gems>.asIIngredient().reuse();
```


## Los tipos wrapper se convierten directamente en tipos de Vanilla

Hemos cambiado un part de cosas internas sobre como funciona Crafttweaker, y ahora usa tipos de Minecraft directamente.
Esto no debería influenciar tus scripts, pero si que inutilizará compatibilidad con otros mods.

Las clases inutilizadas apareceran en el crafttweaker log. Se alguno de tus scripts deja de funcionar, comprueba si tienen alguna de las clases que no funciona.


## El método para registrar eventos ha cambiado

Los event listeners ya no tienen el consumer en un constructor personalizado.
En su lugar, el método de registracion se ha cambiado para ser genérico.


Ejemplo de migración:
```zenscript
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.event.entity.player.MCAnvilRepairEvent;

//Forma antigua:
CTEventManager.register(new MCAnvilRepairEvent((evento) => {
     var jugador = evento.player;
     var resultado = evento.itemResult;
     println("El Jugador '" + jugador.name + "' crafteo " + resultado.commandString);
 }));


//Nueva forma
CTEventManager.register<MCAnvilRepairEvent>((evento) => {
     var jugador = evento.player;
     var resultado = evento.itemResult;
     println("El Jugador  '" + jugador.name + "' crafteo " + resultado.commandString);
 });
```


## ZenCode: Las tags de almacenamiento ya no existen

Hemos eliminado las tags de almacenamiento de ZenCode por ahora.
No eran requeridas por crafttweaker y complicaban la depuración más de lo que debía ser.
Como la mayoría de usuarios no las usaba esperamos que no tengas que migrar este apartado.

Ejemplo de migración:
```zenscript
var antes = {} as string`static[string`static]`unique

var despues = {} as string[string];

function funcantes(argumento as string`borrow) as string`unique {
    return argumento + "!";
}

function funcdespues(argumento as string) as string {
    return argumento + "!";
}
```

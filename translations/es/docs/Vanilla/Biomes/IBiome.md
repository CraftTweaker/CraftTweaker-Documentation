# Ioma

La interfaz IBioma le permite recuperar información sobre un Bioma registrado.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.world.IBiome;`

## Llamar a un IBioma

You can get a list of all registered Biomes using `game.biomes` from [IGame](/Vanilla/Game/IGame/) That is currently the only way

## ZenGetters

Atm, todo lo que se puede hacer con un objeto IBiome es obtener información de ello:

| ZenGetter                       | Tipo de devolución |
| ------------------------------- | ------------------ |
| nombre                          | cadena             |
| canRain                         | boolean            |
| isSnowyBiome                    | boolean            |
| alta humedad                    | boolean            |
| posibilidad de generar          | flotante           |
| altura base                     | flotante           |
| altura Variación                | flotante           |
| lluvia                          | flotante           |
| multiplicador acuarela          | int                |
| ignorarJugadorSpawnSuitabilidad | boolean            |
| temperatura                     | flotante           |